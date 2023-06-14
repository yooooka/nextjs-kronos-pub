import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  // Add as many questions as you want...
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-md mx-auto">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <h2
            className="text-xl bg-gray-200 cursor-pointer p-3"
            onClick={() => setOpenIndex(index)}
          >
            {faq.question}
          </h2>
          {openIndex === index && <p className="p-4">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
