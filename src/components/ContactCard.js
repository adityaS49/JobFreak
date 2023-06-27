"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";
const Form = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setcomments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform account creation logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Comments:", comments);

    // Reset form fields
    setname("");
    setEmail("");
    setPhone("");
    setcomments("");
  };
  return (
    <section
      className={`flex ${styles.bg} flex-col h-[100vh] items-center justify-center  bg-[rgb(226,236,236)]; p-12 max-[500px]:p-2`}
    >
      <div
        className={`flex flex-col shadow-[rgba(0, 0, 0, 0.35) 0px 5px 15px] gap-8 w-[60%] max-[1200px]:gap-4 max-[800px]:w-4/5 max-[450px]:w-full`}
      >
        <div
          className={`h-12 flex-1 flex justify-center items-center text-center text-2xl p-0.5`}
        >
          <h1 className={`${styles.formHeading}`}>Contact Us</h1>
        </div>
        <div
          className={` w-full flex-[7] shadow-[rgba(0, 0, 0, 0.35)_0px_5px_15px] flex flex-col items-center justify-center rounded-sm bg-[#2c2b2b] `}
        >
          <form
            className={`flex flex-col gap-4 w-[95%] h-[95%] p-5 max-[300px]:w-full`}
            onSubmit={handleSubmit}
          >
            <div className={`flex flex-col`}>
              <label className={`${styles.labels}`} htmlFor="name">
                Name
              </label>
              <input
                className={`${styles.inputs}`}
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div
              className={`flex   gap-4 max-[1200px]:flex-col  `}
            >
              <div className= {` w-[50%] max-[605px]:w-[100%] flex flex-col`}>
                <label className={`${styles.labels}`} htmlFor="email">
                  Email
                </label>
                <input
                  className={`${styles.inputs}`}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className= {`w-[50%] max-[605px]:w-[100%] flex flex-col `}>
                <label className={`${styles.labels}`} htmlFor="email">
                  Phone Number
                </label>
                <input
                  className={`${styles.inputs}`}
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className={`${styles.labels}`} htmlFor="message">
                Message
              </label>
              <textarea
                className={`text-[white] h-40 border p-2.5 border-solid border-[#a9a9a9] bg-[#393838]`}
                id="message"
                name="message"
                value={comments}
                placeholder="Write a message here"
                onChange={(e) => {
                  setcomments(e.target.value);
                }}
              ></textarea>
            </div>
            <div className={` text-[white] w-40 p-3 h-12 rounded  mt-2 mb-2 ${styles.PostComments}`}>
              <button type="submit" className={`ml-2`}>Post Comments</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
