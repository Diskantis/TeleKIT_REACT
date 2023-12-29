import { useContext } from "react";
import { Context } from "../../index";

const MyTable = () => {
  const { recipient } = useContext(Context);

  // const handleDelete = (recipientId) => {
  //   console.log(recipientId);
  //   // setRecipients(recipients.filter((user) => recipient.id !== recipientId));
  // };

  return (
    <table className={"table"}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
          <th scope="col">Телефон</th>
          <th scope="col">Должность</th>
          <th scope="col">Дирекция</th>
          <th scope="col">Трудовые отношения</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody></tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default MyTable;
