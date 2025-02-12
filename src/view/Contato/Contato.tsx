import React from "react";
import "./Contato.css";

interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone, message }) => {
  return (
    <div className="contact-card">
      <h2>Informações de Contato</h2>
      <div className="info-group">
        <strong>Nome:</strong> <span>HUGO ZEYMER AUAD</span>
      </div>
      <div className="info-group">
        <strong>E-mail:</strong> <span>hugozeymer@gmail.com</span>
      </div>
      <div className="info-group">
        <strong>Linktree:</strong> <span>{message}</span>
      </div>

    </div>
  );
};

export default ContactCard;