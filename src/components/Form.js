import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  console.log(name);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__background">
        <label>
          <span>Digite seu nome</span>
          <input
            type="text"
            placehold="Digidadasae seu nome"
            onChagen={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </div>
      <input className="button" type="submit" valeu="Enviar" />
    </form>
  );
};

export default Form;
