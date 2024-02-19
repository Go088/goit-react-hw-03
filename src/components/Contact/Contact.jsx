import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Contact({ name, number }) {
  return (
    <div className="listItem">
      <div>
        <FaUser />
        <p>{name}</p>
      </div>
      <div>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>

      <button>Delete</button>
    </div>
  );
}
