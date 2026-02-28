"use client";

import { useState } from "react";
import Breadcrumb from "../_components/Breadcrumb";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 2-5 business days depending on your location.",
  },
  {
    question: "Can I return my order?",
    answer: "Yes, returns are accepted within 14 days of delivery.",
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking page with your order ID.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, and cash on delivery.",
  },
];

export default function FAQPage() {
      const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "FAQ" }];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center text-green-800">
            Frequently Asked Questions
        </h1>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div
                key={index}
                className="border rounded-xl p-5 cursor-pointer hover:shadow-md transition"
                onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
                }
            >
                <h3 className="font-semibold text-lg flex justify-between text-green-800">
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
                </h3>

                {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
                )}
            </div>
            ))}
        </div>
        </div>
    </>
  );
}