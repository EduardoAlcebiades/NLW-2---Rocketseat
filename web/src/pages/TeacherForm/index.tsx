import React, { useState, FormEvent } from "react";
import "./styles.css";

import warningIcon from "../../assets/images/icons/warning.svg";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Select from "../../components/Select";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const [subject, setSubject] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const [scheduleItens, setScheduleItens] = useState<ScheduleItem[]>([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItens([...scheduleItens, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItenValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItens.map((scheduleItem, index) => {
      return index === position
        ? { ...scheduleItem, [field]: value }
        : scheduleItem;
    });

    setScheduleItens(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItens,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");

        history.push('/');
      })
      .catch(() => {
        alert("Ocorreu um erro!");
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form
          onSubmit={(e) => {
            handleCreateClass(e);
          }}
        >
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label="Matéria"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Física", label: "Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Química", label: "Química" },
              ]}
            />

            <Input
              label="Custo da sua hora por aula"
              name="cost"
              type="number"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItens.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  label="Dia da Semana"
                  name="week-day"
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItenValue(index, "week_day", e.target.value)
                  }
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-Feira" },
                    { value: "2", label: "Terça-Feira" },
                    { value: "3", label: "Quarta-Feira" },
                    { value: "4", label: "Quinta-Feira" },
                    { value: "5", label: "Sexta-Feira" },
                    { value: "6", label: "Sábado" },
                  ]}
                />

                <Input
                  label="Das"
                  name="from"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItenValue(index, "from", e.target.value)
                  }
                />
                <Input
                  label="Até"
                  name="to"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItenValue(index, "to", e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
