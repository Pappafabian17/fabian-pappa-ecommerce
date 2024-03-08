import { useState } from "react";

import "./checkoutForm.css";

export default function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };
  return (
    <div>
      <form onSubmit={handleConfirm} className="form">
        <div className="labelContainer">
          <label className="label">Nombre</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="labelContainer">
          <label className="label">Telefono</label>
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div className="labelContainer">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div>
          <button className="crearOrdenButton" type="submit">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
}
