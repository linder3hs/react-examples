import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    reference: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <h1>Form</h1>
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Ingrese su nombre"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder="Ingrese su apellido"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Ingrese su e-mail"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Ingrese su password"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={values.phone}
          placeholder="Ingrese su celular"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          value={values.address}
          placeholder="Ingrese su direccion"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="reference"
          value={values.reference}
          placeholder="Ingrese una referencia"
          onChange={handleInputChange}
        />
        <button type="submit">Send data</button>
      </form>
    </div>
  );
};

export default Form;
