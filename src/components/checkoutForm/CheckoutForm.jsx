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
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label>
          Telefono
          <input
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <div>
          <button type="submit">Crear Orden</button>
        </div>
      </form>
    </div>
  );
}
