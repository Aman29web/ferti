import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-br from-[#e8f5ec] to-[#d1efe0] py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0B3E2A] text-center mb-12">
          Send Us a Message
        </h2>

        <form
          action="https://formspree.io/f/xdkderbg" // 🔁 Replace with your actual Formspree form ID
          method="POST"
          className="bg-white/90 backdrop-blur-lg border-2 border-[#0B3E2A] rounded-[30px] shadow-2xl px-10 py-12 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-[#0B3E2A] rounded-xl px-5 py-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3E2A] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-[#0B3E2A] rounded-xl px-5 py-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3E2A] transition-all"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-[#0B3E2A] rounded-xl px-5 py-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3E2A] transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-[#0B3E2A] rounded-xl px-5 py-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3E2A] transition-all resize-none"
          ></textarea>

          {/* Optional Anti-bot hidden field */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {/* Optional: Redirect after submission */}
          {/* <input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you" /> */}

          <button
            type="submit"
            className="w-full bg-[#0B3E2A] hover:bg-green-900 text-white font-semibold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
