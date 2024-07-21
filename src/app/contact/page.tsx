import ContactCard from "../components/contact-card";
import { Navigation } from "../components/nav";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contactMethods = [
  {
    title: 'GitHub',
    icon: <FaGithub size={24} />,
    username: 'ch3b',
    link: 'https://github.com/ch3b'
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin size={24} />,
    username: 'cameron-hutton-brown',
    link: 'https://www.linkedin.com/in/cameron-hutton-brown/'
  },
  {
    title: 'Email',
    icon: <FaEnvelope size={24} />,
    username: 'c.s.huttonbrown@gmail.com',
    link: 'mailto:c.s.huttonbrown@gmail.com'
  }
];

export default function Contact() {
  return (
    <main>
      <Navigation />

      <div className="p-4 flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {contactMethods.map((contact, index) => (
            <ContactCard
              key={index}
              title={contact.title}
              icon={contact.icon}
              username={contact.username}
              link={contact.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
