"use client";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "@/app/animation/done.json";
import contactAnimation from "@/app/animation/contact-us.json";
import { useState, useEffect } from "react";

function ContactUs() {
  const [state, handleSubmit] = useForm("xyyrleky");
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const customSubmit = async (e) => {
    e.preventDefault();
    setFormData({ email: "", message: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="contact-us" id="contactus">
      <div className="content-text mb-5">
        <h3 className="text-titlelight dark:text-title text-3xl font-bold mb-3 flex items-center gap-4">
          <span className="icon-envelope text-sub-title-light dark:text-subtitle text-2xl" />
          Contact Us
        </h3>
        <p className="text-sub-title-light dark:text-subtitle text-md">
          Contact us for more information and get notified when I publish
          something new.
        </p>
      </div>

      <section className="content w-full flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between">
        <form
          onSubmit={customSubmit}
          className="contact flex flex-col w-full sm:w-auto"
        >
          {/* Email Field */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-2 w-full justify-between">
            <label
              htmlFor="email"
              className="text-sub-title-light dark:text-subtitle"
            >
              Email Address:
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="inp w-full sm:w-auto p-2 rounded-lg duration-500 outline-none text-inputtext dark:text-white bg-bginputlight dark:bg-bginput border border-borderinputlight dark:border-borderinput focus:border-blueElzero hover:border-blueElzero dark:focus:border-orange dark:hover:border-orange"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6 py-2 duration-300 w-full justify-between">
            <label
              htmlFor="message"
              className="text-sub-title-light dark:text-subtitle"
            >
              Your message:
            </label>
            <textarea
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="inp w-full resize min-h-36 sm:w-auto rounded-lg duration-500 outline-none p-2 text-inputtext dark:text-white bg-bginputlight dark:bg-bginput border border-borderinputlight dark:border-borderinput focus:border-blueElzero hover:border-blueElzero dark:focus:border-orange dark:hover:border-orange"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blueElzero dark:bg-bgsubmit text-primary dark:text-primarylight border-2 dark:hover:border-orange active:scale-90 disabled:cursor-not-allowed disabled:opacity-40 hover:border-bordersubmit hover:scale-[.99] p-3 capitalize text-center w-44 text-lg self-center rounded-md duration-300 font-bold mt-10"
            disabled={state.submitting}
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {/* Success Message */}
          {showSuccess && (
            <h1 className="flex items-center opacity-100 duration-300 transition-all mt-4 text-green-500">
              <Lottie
                loop={false}
                animationData={doneAnimation}
                className="h-14"
              />
              Your message has been sent successfully!
            </h1>
          )}
        </form>

        <section className="contact-animation hidden sm:block animation max-w-lg">
          <Lottie animationData={contactAnimation} className="w-full h-full" />
        </section>
      </section>
    </section>
  );
}

export default ContactUs;
