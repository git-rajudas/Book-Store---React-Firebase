import { useState } from "react";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiSendPlaneLine,
  RiCustomerService2Line,
} from '@remixicon/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Add your API call here
  };

  return (
    <div className="min-h-screen bg-[#f8f8f6]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50">
  {/* Decorative background */}
  {/* <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" /> */}
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="max-w-3xl">

      {/* Label */}
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-yellow-400" />

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
          Contact Us
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        We'd love to
        <span className="text-yellow-500"> hear from you.</span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        Have a question about an order, a book, delivery, or anything
        else? Send us a message and our team will be happy to help.
      </p>

    </div>
  </div>
</section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            {/* ================= CONTACT INFO ================= */}
            <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9 lg:p-10">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Get in Touch
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Let's talk.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Our support team is here to answer your questions and help
                make your shopping experience as smooth as possible.
              </p>

              <div className="mt-9 space-y-7">

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <RiMailLine className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:support@example.com"
                      className="mt-1 block font-medium text-white transition-colors hover:text-yellow-400"
                    >
                      support@example.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <RiPhoneLine className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Phone
                    </p>

                    <a
                      href="tel:+919999999999"
                      className="mt-1 block font-medium text-white transition-colors hover:text-yellow-400"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <RiMapPinLine className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Address
                    </p>

                    <p className="mt-1 leading-6 text-white">
                      123 Book Street,
                      <br />
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <RiTimeLine className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Support Hours
                    </p>

                    <p className="mt-1 leading-6 text-white">
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Support */}
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex gap-3">
                  <RiCustomerService2Line className="mt-0.5 shrink-0 text-xl text-yellow-400" />

                  <div>
                    <p className="font-semibold">
                      Need immediate help?
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Send us your order number along with your question and
                      we'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-10">

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-yellow-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                    Send a Message
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form below and we'll get back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition-all hover:bg-yellow-400 hover:text-slate-950 active:scale-[0.99]"
                >
                  Send Message
                  <RiSendPlaneLine className="text-lg" />
                </button>

                <p className="text-center text-xs text-slate-400">
                  We usually respond within 24 hours.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ / QUICK HELP
      ====================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Quick Help
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Common questions
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Where is my order?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Contact our support team with your order number and we'll help
                you track it.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Can I return a book?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Our support team can guide you through the return process for
                eligible orders.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Need help choosing a book?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us what you enjoy reading and we'll help you find
                something you'll love.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;