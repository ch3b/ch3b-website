import React from "react";
import { ContactMethod } from "../_lib/contact-method.enum";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactCardProps {
  title: string;
  contactMethod: ContactMethod;
  username: string;
  link: string;
}

const contactIcons = {
  [ContactMethod.GitHub]: <FaGithub size={24} />,
  [ContactMethod.LinkedIn]: <FaLinkedin size={24} />,
  [ContactMethod.Email]: <FaEnvelope size={24} />,
};

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  contactMethod,
  username,
  link,
}) => {
  return (
    <a
      href={link}
      className="block w-full max-w-sm bg-zinc-800 text-white rounded-lg shadow-lg overflow-hidden hover:bg-zinc-700 transition duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-6 flex items-center">
        <div className="flex-shrink-0 mr-4">{contactIcons[contactMethod]}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-gray-300">{username}</p>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
