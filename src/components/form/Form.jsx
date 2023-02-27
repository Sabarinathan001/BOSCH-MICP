import React, { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import styles from "./form.module.scss";

function Form({ fields, onSubmit, heading }) {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Clear the error message when the user types in a field
    setFormErrors({
      ...formErrors,
      [event.target.name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    let errors = {};
    let isValid = true;

    fields.forEach((field) => {
      console.log(field.name);
      if (!formData[field.name]) {
        errors[field.name] = `${field.label} is required`;
        isValid = false;
      }

      if (field.type === "email" && !isValidEmail(formData[field.name])) {
        errors[field.name] = "Invalid email address";
        isValid = false;
      }
    });

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <h2>{heading}</h2>
      {fields.map((field) => (
        <div key={field.name} className={styles.DynamicFormfield}>
          <label htmlFor={field.label}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.label}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={styles.DynamicForminput}
            placeholder={field.placeholder}
          />
          {formErrors[field.name] && (
            <span className={styles.DynamicFormerror}>
              {formErrors[field.name]}
            </span>
          )}
        </div>
      ))}
      <PrimaryButton type={"submit"} name={"Register"} />
      <SecondaryButton type={"submit"} name={"Register"} />
    </form>
  );
}
export default Form;
