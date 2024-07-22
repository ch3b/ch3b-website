import ContactCard from "./_components/contact-card";
import { Navigation } from "../components/nav";
import { contactMethods } from "./_lib/constants";

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
              contactMethod={contact.contactMethod}
              username={contact.username}
              link={contact.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
