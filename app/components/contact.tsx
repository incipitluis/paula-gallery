import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <div className="flex flex-col w-full p-12 text-stone-900 ">
      <div className="w-full mx-auto p-12">
        <h2 className="text-4xl font-semibold">Contact me</h2>
      </div>
      <div className="flex mx-auto justify-center w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
