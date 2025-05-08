"use client";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { useForm as useHookForm } from "react-hook-form";
import Lottie from "lottie-react";
import doneAnimation from "@/app/animation/done.json";
import { useState } from "react";
import { TerminalDemo } from "@/app/components/Terminal";

function ContactUs() {
  const [state, handleSubmitToFormspree] = useFormspree("xyyrleky");
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useHookForm();

  const onSubmit = async (data) => {
    await handleSubmitToFormspree(data);

    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="contact-us" id="contactus">
      <div className="content-text mb-5">
        <p className="text-sub-title-light dark:text-subtitle text-md">
          Contact us for more information and get notified when I publish
          something new.
        </p>
      </div>

      <section className="content w-full flex gap-2 lg:gap-0 flex-col-reverse md:flex-row items-start sm:items-center justify-start sm:justify-between">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact flex flex-col w-full md:w-auto"
        >
          {/* Email Field */}
          <div className="flex flex-col sm:flex-row gap-3 py-2 w-full">
            <label
              htmlFor="email"
              className="text-sub-title-light min-w-[116px] dark:text-subtitle"
            >
              Email Address:
            </label>
            <div className="w-full">
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="inp w-full p-2 rounded-lg border"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 py-2 w-full">
            <label
              htmlFor="message"
              className="text-sub-title-light min-w-[115px] dark:text-subtitle"
            >
              Your message:
            </label>
            <div className="w-full">
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="inp w-full resize min-h-36 p-2 rounded-lg border"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center mt-10 gap-2 px-6 py-3 rounded-md text-center border-2 border-black active:scale-90 disabled:cursor-not-allowed disabled:opacity-40  dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            disabled={state.submitting}
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="flex items-center mt-4 text-green-500">
              <Lottie
                loop={false}
                animationData={doneAnimation}
                className="h-14"
              />
              Your message has been sent successfully!
            </div>
          )}
        </form>

        <section className="contact-animation hidden sm:block w-full md:max-w-lg">
          <TerminalDemo />
        </section>
      </section>
    </section>
  );
}

export default ContactUs;
