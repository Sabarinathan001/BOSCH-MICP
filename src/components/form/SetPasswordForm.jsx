import React from "react";
import Form from "./Form";
import styles from "./setpassword.module.scss"

function SetPasswordForm() {
  const passwordData = [
    {
      name: "enterpassword",
      label: "enterpassword",
      type: "password",
    },
    {
      name: "confirmpassword",
      label: "confirmpassword",
      type: "password",
    },
  ];
  function handleSubmit(formdata){
    console.log(formdata)
  }
  return <div className={styles.passwordform_container}>
    <h2>Mobility Innovation Co-Creation Platform</h2>
    <h3>Set Password</h3>
    <Form fields={passwordData} onSubmit={handleSubmit}/>
  </div>;
}

export default SetPasswordForm;
