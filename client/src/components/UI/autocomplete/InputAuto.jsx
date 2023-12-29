import React, { useContext, useEffect, useState } from "react";
import { fetchRecipients } from "../../../http/repicientAPI";
import { Context } from "../../../index";

const InputSelectAuto = ({ children, value, className, ...props }) => {
  const { recipient } = useContext(Context);
  const [selDepartments, setSelDepartments] = useState([]);

  useEffect(
    recipient.recipients.map(recipient =>
      setSelDepartments(recipient.department)
    )
  );

  // useEffect(() => {
  //   fetchRecipients().then(data => {
  //     recipient.setRecipients(data);
  //   });
  // });
  // const [selDepartments, setSelDepartments] = useState([]);
  //
  // const filteredDepartment = departments.filter(depart => {
  //   return depart.department.toLowerCase().includes(department.toLowerCase());
  // });

  recipient.recipients.map(recipient =>
    setSelDepartments(recipient.department)
  );

  console.log(selDepartments);

  // useEffect(() => {
  //   fetchRecipients().then(data => {
  //     setSelDepartments(data);
  //   });
  // });
  //
  // const [departments, setDepartments] = useState([]);
  // const getDepartment = () => {
  //   fetchRecipients().then(data => {
  //     setDepartments(data);
  //   });
  // };
  // useEffect(() => {
  //   getDepartment();
  // }, []);
  //
  // const filteredDepartment = departments.filter(depart => {
  //   return depart.department.toLowerCase().includes(department.toLowerCase());
  // });
  //
  // const arr_depart = Array.from(
  //   new Set(filteredDepartment.map(depart => depart.department))
  // );

  return (
    <div>
      <label className={"label-create"}>{children}</label>
      <input
        name={children}
        type="text"
        className={`input-create ${className}`}
        value={value}
        {...props}
      />
    </div>
  );
};

export default InputSelectAuto;
