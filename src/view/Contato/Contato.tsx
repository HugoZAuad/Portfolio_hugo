import React from "react";
import "./Contato.scss";
import qrcode from '../../../public/assets/Imgs/QR_code.svg'
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
      <div>
        <img className="qrcode" src={qrcode} alt="Qr code" />
      </div>
    </div>
  );
};

export default ContactCard;