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
    <div className="mx-auto max-w-screen-md prose prose-stone lg:p-12 p-6 prose-h2:text-center prose-h2:text-2xl">
      <h2 className="mb-2">よくある質問</h2>
      <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
        FAQ
      </span>
      <div className="not-prose mx-auto space-y-3">
        {faqData.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex items-center px-5 py-2.5 border-b-4 border-white rounded-bl-none rounded-full bg-kronos-light cursor-pointer transition-all ease-out duration-300 ps-8 hover:bg-kronos font-outfit group">
              <span className="inline-block group-hover:text-kronos-50 font-bold first-letter:text-lg first-letter:font-extrabold first-letter:pr-0.5 first-letter:text-kronos-dark first-letter:group-hover:text-white text-stone-900">
                {index + 1 + "."} {faq.question}
              </span>
              <div className="ml-auto">
                <MdKeyboardArrowRight className="opacity-80 transition-all group-open:rotate-90 align-middle text-3xl group-open:mt-1 text-white" />
              </div>
            </summary>
            <div className="transition-all p-6 bg-kronos-50 rounded-tl-none rounded-2xl">
              <span className="inline-block ps-3">{faq.answer}</span>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
