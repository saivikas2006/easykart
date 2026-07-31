import { useState } from "react";
import {
  Search,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "Go to My Orders from your account dashboard and click on Track Order to view the latest shipping status.",
  },
  {
    question: "How do I cancel an order?",
    answer:
      "Orders can be cancelled before they are shipped from the My Orders page.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Refunds are usually processed within 5–7 business days after your return is approved.",
  },
  {
    question: "My payment failed. What should I do?",
    answer:
      "Please try another payment method or contact your bank. If the amount was deducted, it will be refunded automatically.",
  },
  {
    question: "Can I change my delivery address?",
    answer:
      "Yes, before your order is shipped you can edit your delivery address from My Orders.",
  },
  {
    question: "How can I contact EasyKart Support?",
    answer:
      "You can email us, call us, or use our contact form below.",
  },
];

function Support() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-100">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 py-20">

        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <HelpCircle
            size={60}
            className="mx-auto text-white"
          />

          <h1 className="mt-6 text-5xl font-bold text-white">
            Support Center
          </h1>

          <p className="mt-4 text-lg text-sky-100">
            We're here to help you 24×7.
          </p>

          {/* Search */}

          <div className="mx-auto mt-10 max-w-2xl">

            <div className="flex items-center rounded-2xl bg-white px-5 py-4 shadow-2xl">

              <Search className="text-slate-400" />

              <input
                type="text"
                placeholder="Search your question..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ml-4 w-full bg-transparent outline-none"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <div className="mx-auto max-w-5xl px-6 py-14">

        <h2 className="mb-8 text-3xl font-bold text-slate-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {filteredFaqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-slate-500" />
                )}

              </button>

              {openIndex === index && (

                <div className="border-t bg-slate-50 px-6 py-5">

                  <p className="leading-7 text-slate-600">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

                {/* ================= CONTACT CARDS ================= */}

        <div className="mt-16">

          <h2 className="mb-8 text-3xl font-bold text-slate-800">
            Need More Help?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Email */}

            <div className="group rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

                <Mail
                  size={30}
                  className="text-blue-600"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Email Support
              </h3>

              <p className="mt-3 text-slate-500">
                support@easykart.com
              </p>

              <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Email Us
              </button>

            </div>

            {/* Phone */}

            <div className="group rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

                <Phone
                  size={30}
                  className="text-green-600"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Call Support
              </h3>

              <p className="mt-3 text-slate-500">
                +91 98765 43210
              </p>

              <button className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
                Call Now
              </button>

            </div>

            {/* Live Chat */}

            <div className="group rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">

                <MessageCircle
                  size={30}
                  className="text-orange-500"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Live Chat
              </h3>

              <p className="mt-3 text-slate-500">
                Coming Soon
              </p>

              <button
                disabled
                className="mt-6 cursor-not-allowed rounded-xl bg-orange-400 px-6 py-3 font-semibold text-white opacity-70"
              >
                Coming Soon
              </button>

            </div>

          </div>

        </div>

        {/* ================= CONTACT FORM ================= */}

        <div className="mt-20 rounded-[32px] border border-white/70 bg-white/90 p-10 shadow-2xl backdrop-blur-xl">

          <h2 className="text-3xl font-bold text-slate-800">
            Contact Us
          </h2>

          <p className="mt-2 text-slate-500">
            Still have questions? Send us a message and we'll get back to you.
          </p>

          <form className="mt-10 space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Type your message..."
              className="w-full resize-none rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* ================= FOOTER ================= */}

        <footer className="my-16 rounded-[32px] bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 p-10 text-center shadow-2xl">

          <HelpCircle
            size={48}
            className="mx-auto text-white"
          />

          <h2 className="mt-5 text-3xl font-bold text-white">
            EasyKart Support
          </h2>

          <p className="mt-3 text-sky-100">
            We're always here to make your shopping experience smooth and hassle-free.
          </p>

          <div className="my-8 h-px bg-white/20"></div>

          <p className="text-sm text-sky-200">
            © 2026 EasyKart. All Rights Reserved.
          </p>

        </footer>

      </div>

    </div>
  );
}

export default Support;