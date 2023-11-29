import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First name"
          defaultValue="Mark"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <input className={"input-create"} placeholder="First name" />
    </div>

    // <Form noValidate validated={validated} onSubmit={handleSubmit}>
    //   <Row className="mt-3 mb-3">

    //     <Form.Group as={Col} md="4" controlId="validationCustom02">
    //       <Form.Label>Имя</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="First name"
    //         defaultValue="Mark"
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="4" controlId="validationCustom03">
    //       <Form.Label>Отчество</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="Sur name"
    //         defaultValue="Mark"
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="4" controlId="validationCustom04">
    //       <Form.Label>Должность</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="position"
    //         defaultValue="Mark"
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="2" controlId="validationCustom04">
    //       <Button type="submit">Добавить</Button>
    //     </Form.Group>
    //   </Row>
    // </Form>
  );
}

export default FormExample;
