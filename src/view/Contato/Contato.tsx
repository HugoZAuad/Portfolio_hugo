import React from "react";
import "./Contato.scss";

interface ContactCardProps {
  name: string;
  email: string;
  message: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, message }) => {
  return (
    <div className="contact-card">
      <h2>Informações de Contato</h2>
      <div className="info-group">
        <strong>Nome:</strong> <span>{name}</span>
      </div>
      <div className="info-group">
        <strong>E-mail:</strong> <span>{email}</span>
      </div>
      <div className="info-group">
        <strong>Linktree:</strong> <span>{message}</span>
      </div>

    </div>
  );
};

export default ContactCard;