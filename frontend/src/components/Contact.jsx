import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false);

  // --- THIS FUNCTION HAS BEEN UPDATED ---
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // 1. Create the templateParams object from your form's data
    //    We get the values from the `form.current` ref
    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      reply_to: form.current.user_email.value, // <-- This adds the Reply-To field
    };

    // 2. Change 'sendForm' to 'send' and pass the templateParams object
    emailjs
      .send(
        "service_pi5gzqi",  // Your Service ID
        "template_rekboz8", // Your Template ID
        templateParams,     // Pass the new object here
        "5q0wUzcJ55wPWj9TV"  // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message Sent Successfully!");
          setIsSent(true);
          e.target.reset(); // Clear the form
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send. Try again!");
        }
      );
  };
  // --- END OF UPDATED FUNCTION ---

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Contact <span className="text-pink-500">Me</span>
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium text-gray-300">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-300">Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-300">Your Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 transition-colors py-3 rounded-md font-semibold"
        >
          Send Message
        </button>

        {status && (
          <p className={`text-center mt-4 ${isSent ? "text-green-400" : "text-red-400"}`}>
            {isSent ? <CheckCircle className="inline mr-2" /> : ""} {status}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;