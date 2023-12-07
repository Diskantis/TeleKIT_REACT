import { useEffect, useState } from "react";

import InputCreate from "../UI/InputCreate";
import InputSelect from "../UI/InputSelect";
import InputSelectAutocomplete from "../UI/InputAutocomplete";
import { Button } from "react-bootstrap";

import { createRecipient, fetchRecipients } from "../../http/repicientAPI";
import { observer } from "mobx-react-lite";

const FormCreateRecipient = observer(() => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [departments, setDepartments] = useState([]);
  const [state, setState] = useState("Штатный сотрудник");
  const [phone, setPhone] = useState("");

  const getDepartment = () => {
    fetchRecipients().then(data => {
      setDepartments(data);
    });
  };
  useEffect(() => {
    getDepartment();
  }, []);

  const filteredDepartment = departments.filter(depart => {
    return depart.department.toLowerCase().includes(department.toLowerCase());
  });

  const arr_depart = Array.from(
    new Set(filteredDepartment.map(depart => depart.department))
  );

  const selectDepartment = depart => {
    setDepartment(depart);
  };

  const addRecipient = () => {
    createRecipient({
      last_name: lastName,
      first_name: firstName,
      sur_name: surName,
      position: position,
      department: department,
      state: state,
      phone: phone
    }).then(() => {
      setLastName("");
      setFirstName("");
      setSurName("");
      setPosition("");
      setDepartment("");
      setState("Штатный сотрудник");
      setPhone("");
    });
  };

  return (
    <div className={"form_recipient"}>
      <div className={"form_recipient_title"}>
        Добавить нового получателя оборудования
      </div>
      <div className={"form_create_row"}>
        <InputCreate
          value={lastName}
          className={"input_create_name"}
          onChange={e => setLastName(e.target.value)}
        >
          Фамилия
        </InputCreate>
        <InputCreate
          value={firstName}
          className={"input_create_name"}
          onChange={e => setFirstName(e.target.value)}
        >
          Имя
        </InputCreate>
        <InputCreate
          value={surName}
          className={"input_create_name"}
          onChange={e => setSurName(e.target.value)}
        >
          Отчество
        </InputCreate>
        <InputCreate
          type="tel"
          value={phone}
          className={"input_create_phone"}
          placeholder={"+375"}
          maxLength={"13"}
          onChange={e => setPhone(e.target.value)}
        >
          Телефон
        </InputCreate>
      </div>
      <div className={"form_create_row"}>
        <InputCreate
          className={"input_create_position"}
          value={position}
          onChange={e => setPosition(e.target.value)}
        >
          Должность
        </InputCreate>
        <InputSelectAutocomplete
          className={"input_create_department"}
          suggestions={arr_depart}
          create={selectDepartment}
        >
          Дирекция
        </InputSelectAutocomplete>
        <InputSelect
          defaultValue={state}
          className={"select-state"}
          onChange={e => setState(e.target.value)}
          options={[
            { value: "Штатный сотрудник" },
            { value: "Договор подряда" }
          ]}
        >
          Трудовые отношения
        </InputSelect>
      </div>
      <Button className={"form_create_button"} onClick={addRecipient}>
        Добавить
      </Button>
    </div>
  );
});

export default FormCreateRecipient;
