import React, { useEffect, useState } from "react";

import InputCreate from "../UI/InputCreate";
import InputSelect from "../UI/InputSelect";
// import ButtonMUI from "../UI/MUI/buttonMUI";
// import AutocompleteStyleMUI from "../UI/autocomplete/autocomplete";

import { createRecipient, fetchRecipients } from "../../http/repicientAPI";
import { observer } from "mobx-react-lite";

// import InputSelectAutocomplete from "../UI/InputAutocomplete";
// import { Button } from "react-bootstrap";
import InputSelectAutocomplete from "../UI/autocomplete/InputAutocomplete";
import ButtonMUI from "../UI/MUI/buttonMUI";
// import ComboBox from "../UI/MUI/autocompleteMUI";
// import AutocompleteIntroduction from "../UI/MUI/autocompleteMUI";
// import ManageableStates from "../UI/MUI/autocompleteMUI";
// import UseAutocomplete from "../UI/MUI/autocompleteMUI";

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
        {/*<ManageableStates*/}
        {/*  options={arr_depart}*/}
        {/*  inputValue={inputValue}*/}
        {/*  onInputChange={(event, newInputValue) => {*/}
        {/*    setInputValue(newInputValue);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Дирекция*/}
        {/*</ManageableStates>*/}
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
        {/*<AutocompleteStyleMUI*/}
        {/*  options={arr_depart}*/}
        {/*  inputValue={department}*/}
        {/*  onInputChange={(event, newInputValue) => {*/}
        {/*    setDepartment(newInputValue);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Дирекция*/}
        {/*</AutocompleteStyleMUI>*/}
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
      <ButtonMUI click={addRecipient}>Добавить</ButtonMUI>
    </div>
  );
});

export default FormCreateRecipient;
