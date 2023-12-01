import Table from "../UI/Table";

function RenderListRecipient() {
  return (
    <div className={"form_recipient"}>
      <div className={"form_recipient_title"}>
        Список получателей оборудования
      </div>
      <Table />
    </div>
  );
}

export default RenderListRecipient;
