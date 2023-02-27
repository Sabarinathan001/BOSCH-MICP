import React from "react";
import Card from "../card/Card";
import Form from "./Form";
import styles from "./registersform.module.scss"

function RegisterForm() {
  let heading = "Register";
  const fields = [
    { name: "FirstName", label: "FirstName", type: "text" },
    { name: "Email", label: "Email", type: "email" },
    { name: "LastName", label: "LastName", type: "text" },
    { name: "Organization", label: "Organization", type: "text" },
    { name: "Organization", label: "Organization", type: "text" }
  ];
  const Benefits = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum.",
  ];
  const title= "Mobility Innovation Co-Creation Platform"
  const subtitle= "Benefits Of Mobility Innovation Co-Creation Platform"

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.registerform_container}>
      <Card title={title} subtitle={subtitle} Benefits={Benefits} />
      <Form fields={fields} heading={heading} onSubmit={handleSubmit} />
      {/* <button type="submit">Register</button> */}
    </div>
  );
}

export default RegisterForm;
