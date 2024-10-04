import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((errorMessage) => {
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
      return;
    }

    try {
      const formData = {
        name: name,
        email: email,
        message: message,
      };

      const response = await fetch(
        "https://getform.io/f/707d270a-1cdc-42ac-8fbb-9abb56c44e7f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form Submitted Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const validateForm = () => {
    const errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (message.trim() === "") {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div
      name="contact"
      className="w-full px-8 h-full py-16 md:py-32 bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      <ToastContainer />
      <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-3xl font-jost font-bold inline border-b-4 border-gray-300 uppercase bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            Contact
          </motion.p>
          <p className="pt-8">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full "
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2  rounded-md text-white"
            />

            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white"
            />

            <textarea
              placeholder="Enter Your Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white "
            ></textarea>

            <motion.button
                initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          
             className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
