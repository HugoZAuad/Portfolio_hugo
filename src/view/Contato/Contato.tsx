import React from "react";
import PropTypes from "prop-types";
import "./Contato.scss";
import qrcode from '../../assets/Imgs/QR_code.png';

interface ContactCardProps {s
  name: string;
  email: string;
  message: string;
}

const InfoGroup: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="info-group">
    <strong>{label}:</strong> <span>{value}</span>
  </div>
);

const ContactCard: React.FC<ContactCardProps> = ({ name, email, message }) => {
  return (
    <div className="contact-card">
      <h2>Informações de Contato</h2>
      <div className="content-container">
        <div className="info-container">
          <InfoGroup label="Nome" value={"Hugo Zeymer Auad"} />
          <InfoGroup label="E-mail" value={"hugozeymer@gmail.com"} />
          <InfoGroup label="Linktree" value={"https://linktr.ee/hugozauad"} />
        </div>
        <div className="qrcode-container">
          <img className="qrcode" src={qrcode} alt="QR Code" />
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ContactCard;
