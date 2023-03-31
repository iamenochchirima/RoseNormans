import React, { useState } from "react";
import { toast } from "react-toastify";
import { RotatingLines, TailSpin, ThreeDots } from "react-loader-spinner";
import PagesNavbar from "@/components/PagesNavbar";
import Footer from "@/components/Footer";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFocused = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setFocused({
          name: false,
          email: false,
          message: false,
        });
        toast.success("Message sent successfully!", {
          autoClose: 5000,
          position: "top-center",
          hideProgressBar: true,
        });
        setIsLoading(false);
      } else {
        toast.error("Something went wrong, Try again latter", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error("Something went wrong, Try again latter", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <PagesNavbar />
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 mx-5 md:mx-10 p-2 mt-20 mb-10">
          <h1 className=" text-center text-3xl mt-5 font-graphikSemiBold">
            Contact us
          </h1>
          <p className="text-center my-5">
            Send us a message by filling and submiting the form below{" "}
          </p>
          <form className=" gap-y-4" onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="contact-input border  border-gray-500 outline-none"
                value={name}
                focused={focused.name.toString()}
                onChange={(event) => setName(event.target.value)}
                onBlur={() => handleFocused("name")}
                placeholder="Enter your name"
                required
              />
              <span className="error-message">Name is required</span>
            </div>
            <div className="form-div">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="contact-input border border-gray-500 outline-none"
                value={email}
                focused={focused.email.toString()}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => handleFocused("email")}
                placeholder="Enter your Email address"
                required
              />
              <span className="error-message">Email invalid</span>
            </div>
            <div className="form-div">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                className="contact-input border  border-gray-500 outline-none"
                value={message}
                focused={focused.message.toString()}
                onChange={(event) => setMessage(event.target.value)}
                onBlur={() => handleFocused("message")}
                placeholder="Type your message"
                required
              />
              <span className="error-message">This field is required</span>
            </div>
            {isLoading ? (
              <button className="ml-5">
                <RotatingLines
                  strokeColor="black"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="35"
                  visible={true}
                />
              </button>
            ) : (
              <button
                className=" py-2 px-5 mx-2 text-lg rounded-lg border border-black"
                type="submit"
              >
                <span>Sumbit</span>
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
