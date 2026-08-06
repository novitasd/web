import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloat.css";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51902824286"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFloat;