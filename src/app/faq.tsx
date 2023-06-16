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
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <div
            className="flex items-center px-5 py-3 border-b-4 border-white rounded-bl-none rounded-full bg-kronos-light cursor-pointer group-open:pb-4 transition-all ease-out duration-300 hover:text-kronos-50 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-white"
            onClick={() => handleClick(index)}
          >
            {faq.question}
          </div>
          {openIndices.includes(index) && <p className="p-4">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
