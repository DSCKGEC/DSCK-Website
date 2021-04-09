import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.Submit(formData);

    setFormData({
      fname: "",
      lname: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      {/* <label htmlFor="fname"> First name: </label> */}
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="First Name"
        onChange={updateInput}
        value={formData.fname || ""}
      />
      {/* <label htmlFor="lname"> Last name: </label> */}
      <input
        type="text"
        id="lname"
        name="lname"
        placeholder="Last Name"
        onChange={updateInput}
        value={formData.lname || ""}
      />
      {/* <label htmlFor="email"> E-Mail: </label> */}
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={updateInput}
        value={formData.email || ""}
      />
      {/* <label htmlFor="message"> Message: </label> */}
      <textarea
        type="text"
        id="message"
        name="message"
        placeholder="Message"
        onChange={updateInput}
        value={formData.message || ""}
      ></textarea>
      <button type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
};

export default Form;
