import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../STYLES/contact/contact.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "L",
        "v",
        {
          from_name: form.name,
          to_name: "Vinay",
          from_email: form.email,
          to_email: "roxys2032@gmail.com",
          message: form.message,
        },
        "sWCVfRr5pTNJ4e9nW"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <motion.div className='contact_container'>
        <div className='contact_header'>
          <p>Get in touch</p>
          <h3>Contact.</h3>
        </div>

        <form className='contact_form' ref={formRef} onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
            />
          </label>
          <label>
            <span>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
            />
          </label>
          <label>
            <span>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
            />
          </label>

          <button type='submit'>{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
