import { useContext, useEffect } from "react";

import DeleteSVG from "../UI/icon/DeleteSVG";
import EditSVG from "../UI/icon/EditSVG";
import { Button } from "react-bootstrap";

import { fetchRecipients } from "../../http/repicientAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const RenderListRecipient = observer(() => {
  const { recipient } = useContext(Context);

  useEffect(() => {
    fetchRecipients().then(data => {
      recipient.setRecipients(data);
    });
  }, []);

  // useEffect(() => {
  //   fetchRecipients(null, null, 1, 2).then(data => {
  //     recipient.setRecipients(data.rows);
  //     recipient.setTotalCount(data.count);
  //   });
  // }, []);

  const handleEdit = recipientId => {
    console.log(recipientId);
    // setRecipients(recipients.filter((user) => recipient.id !== recipientId));
  };

  const handleDelete = recipientId => {
    console.log(recipientId);
    // setRecipients(recipients.filter((user) => recipient.id !== recipientId));
  };

  return (
    <div className={"form_recipient"}>
      <div className={"form_recipient_title"}>
        Список получателей оборудования
      </div>
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
        <tbody>
          {recipient.recipients.map(recipient => (
            <tr key={recipient.id}>
              <td>{recipient.id}</td>
              <td>{recipient.last_name}</td>
              <td>{recipient.first_name}</td>
              <td>{recipient.sur_name}</td>
              <td>{recipient.phone}</td>
              <td>{recipient.position}</td>
              <td>{recipient.department}</td>
              <td>{recipient.state}</td>
              <td>
                <div className={"btn-group"}>
                  <Button
                    variant="outline-light me-1"
                    className={"btn-edit_del success"}
                    onClick={() => handleEdit(recipient.id)}
                  >
                    <EditSVG />
                  </Button>
                  <Button
                    variant="outline-light"
                    className={"btn-edit_del danger"}
                    onClick={() => handleDelete(recipient.id)}
                  >
                    <DeleteSVG />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
});

export default RenderListRecipient;
