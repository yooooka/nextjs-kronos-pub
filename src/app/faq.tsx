import { MdKeyboardArrowRight } from "react-icons/md";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "IT関連の専門用語に詳しくないのですが相談にのっていただけますか",
    answer:
      "はい。問題ございません。お客様のビジネスにおける課題をお聞かせいただき、その課題に対してお客様のビジネスに合わせたご提案をさせていただきます。ご提案内容については、ご理解いただくまで丁寧にご説明させていただきます。",
  },
  {
    question: "サービス紹介資料はありますか？",
    answer:
      "ご希望のサービスの紹介資料をご用意しております。ご希望の際はお申し付けください。",
  },
  {
    question: "トライアル利用は可能ですか？",
    answer: "各種サービスにてトライアル環境をご用意しております。",
  },
  {
    question: "導入時のサポートをお願いすることはできますか？",
    answer:
      "はい、一部のサービスでは、お申し込み後の導入支援（有償）を承っております。詳細につきましては、お気軽にご相談ください。",
  },
  {
    question: "遠方の企業でもヘルプデスクサービスを導入できますか？",
    answer:
      "はい、導入可能です。弊社が提供しているヘルプデスクサービスは、リモートでの対応を基本としておりますので、遠方のお客様でもご利用いただけます。",
  },
  // FAQ追加・修正はこちらから
];

const FAQ: React.FC = () => {
  return (
    <div className="prose prose-stone mx-auto max-w-screen-md p-6 prose-h2:text-center prose-h2:text-2xl lg:p-12">
      <h2 className="mb-2">よくある質問</h2>
      <span className="block pb-4 text-center font-outfit text-lg font-semibold text-kronos">
        FAQ
      </span>
      <div className="not-prose mx-auto space-y-3">
        {faqData.map((faq, index) => (
          <details key={index} className="group">
            <summary className="group flex cursor-pointer items-center rounded-full rounded-bl-none border-b-4 border-white bg-kronos-light px-5 py-2.5 ps-8 font-outfit transition-all duration-300 ease-out hover:bg-kronos">
              <span className="inline-block font-bold text-stone-900 first-letter:pr-0.5 first-letter:text-lg first-letter:font-extrabold first-letter:text-kronos-dark group-hover:text-kronos-50 first-letter:group-hover:text-white">
                {index + 1 + "."} {faq.question}
              </span>
              <div className="ml-auto">
                <MdKeyboardArrowRight className="align-middle text-3xl text-white opacity-80 transition-all group-open:mt-1 group-open:rotate-90" />
              </div>
            </summary>
            <div className="rounded-2xl rounded-tl-none bg-kronos-50 p-6 transition-all">
              <span className="inline-block ps-3">{faq.answer}</span>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
