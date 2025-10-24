// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// // import emailjs from "emailjs-com";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);

//   // const sendEmail = (e) => {
//   //   e.preventDefault();

//   //   emailjs
//   //     .sendForm(
//   //       // "service_tflntbq",
//   //       "service_md3pvbp",
//   //       // Replace with your EmailJS Service ID
//   //       // "template_cb1j9c9",
//   //       "template_cwlbpc",
//   //       // Replace with your EmailJS Template ID
//   //       form.current,
//   //       // "NGMgso0qkrJ3YB4a9"
//   //       "DVQ2qHXMEDkhS92Ys"
//   //       // Replace with your EmailJS Public Key
//   //     )
//   //     .then(
//   //       () => {
//   //         setIsSent(true);
//   //         form.current.reset(); // Reset form fields after sending
//   //         toast.success("Message sent successfully! ✅", {
//   //           position: "top-right",
//   //           autoClose: 3000,
//   //           hideProgressBar: false,
//   //           closeOnClick: true,
//   //           pauseOnHover: true,
//   //           draggable: true,
//   //           theme: "dark",
//   //         });
//   //       },
//   //       (error) => {
//   //         console.error("Error sending message:", error);
//   //         toast.error("Failed to send message. Please try again.", {
//   //           position: "top-right",
//   //           autoClose: 3000,
//   //           hideProgressBar: false,
//   //           closeOnClick: true,
//   //           pauseOnHover: true,
//   //           draggable: true,
//   //           theme: "dark",
//   //         });
//   //       }
//   //     );
//   // };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form.current);
//     console.log("Form values:", Object.fromEntries(formData)); // 👀 check data

//     emailjs
//       .sendForm(
//         "service_md3pvbp",
//         "template_cwlbpc",
//         form.current,
//         "DVQ2qHXMEDkhS92Ys"
//       )
//       .then(() => {
//         toast.success("Message sent successfully! ✅");
//         form.current.reset();
//       })
//       .catch((error) => {
//         console.error("Error sending message:", error);
//         toast.error("Failed to send message ❌");
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
//     >
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           I’d love to hear from you—reach out for any opportunities or
//           questions!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="mt-4 flex flex-col space-y-4"
//         >
//           <input
//             type="email"
//             // name="user_email"
//             name="from_email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             // name="user_name"
//             name="from_name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Send Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     console.log("Form values:", Object.fromEntries(formData)); // debug

//     emailjs
//       .sendForm(
//         "service_md3pvbp", // ✅ Service ID
//         "template_cwlbpc", // ✅ Template ID
//         form.current,
//         "DVQ2qHXMEDkhS92Ys" // ✅ Public Key
//       )
//       .then(() => {
//         toast.success("Message sent successfully! ✅");
//         form.current.reset();
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         if (error?.text) {
//           console.error("Error details:", error.text);
//         }
//         toast.error("Failed to send message ❌ Check console for details");
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
//     >
//       <ToastContainer />
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           I’d love to hear from you—reach out for any opportunities or
//           questions!
//         </p>
//       </div>

//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="mt-4 flex flex-col space-y-4"
//         >
//           <input
//             type="text"
//             name="from_name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="email"
//             name="from_email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_md3pvbp", // ✅ Replace with your Service ID
        "template_wdygfrg", // ✅ Replace with your Template ID
        form.current,
        "DVQ2qHXMEDkhS92Ys" // ✅ Replace with your Public Key
      )
      .then(() => {
        toast.success("Message sent successfully! ✅");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message ❌ Check console for details");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          {/* Name */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-md transition
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
              }
            `}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
