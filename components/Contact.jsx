import React, { useState } from 'react';
import { motion } from "motion/react"
import { FaArrowRight } from 'react-icons/fa'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a50f1f6-6e94-44f9-b757-522061e357f4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-white/1 bg-no-repeat bg-center bg-[length:90%_auto]'>
      {/* <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] bg-white dark:bg-[#11001F]'> */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-center mb-2 text-lg font-Ovo'>Connect With me</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Whether you have an idea, a project, or just want to say hello, I’m always open to meaningful conversations. Let’s build something amazing together!
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto' method="POST">
        <div className='grid grid-cols grid-auto gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            type="text"
            placeholder='Your Name'
            className='flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white/10 dark:bg-white/5 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400'
            name='name'
            required
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            type="email"
            placeholder='Your Email'
            className='flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white/10 dark:bg-white/5 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400'
            name='email'
            required
          />

        </div>
        <motion.textarea
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          placeholder='Your Message'
          className='w-full p-2 outline-none border border-gray-400 rounded-md bg-white/10 dark:bg-white/5 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 mb-6'
          rows="6"
          name='message'
          required
        ></motion.textarea>

        <motion.button
          type='submit' className='w-max cursor-pointer mb-0.5 flex items-center gap-2 border-[0.5px] border-gray-400 rounded-full py-3 px-10 mx-auto my-16 lighthover duration-500 dark:text-white dark:hover:text-black'>Submit Now <FaArrowRight /> </motion.button>
        <p

          className=''>{result}</p>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
