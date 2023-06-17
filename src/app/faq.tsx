import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "DXやクラウドの知識がなくても相談できますか︖",
    answer:
      "私たちは、DXやクラウド活用をデジタル技術を駆使した課題解決と捉えておりますので、お客様のビジネスにおける課題をお伺いすることで、適切な提案を行うことが可能です。提案内容についても、ご理解いただけるまで丁寧に説明いたしますので、どんな課題があるのかお教えください。",
  },
  {
    question: "パンフレットやカタログなどはありますか？",
    answer:
      "ございます。それぞれのサービスの特長や導入についてなど記載しております。もし必要であれば、お問い合わせ時にお伝えください。",
  },
  {
    question: "契約前にサービスを試すことはできますか？",
    answer:
      "ユーザーと管理者の両方の視点から操作感や機能を評価したいお客様には、1ヶ月の無料トライアルをご提供しています。ご予定の導入形態に基づいたトライアルをお試しください。",
  },
  {
    question: "遠方でも相談や打ち合わせは可能ですか？",
    answer:
      "Webミーティングを通じて、スムーズな相談や打ち合わせが可能です。遠方にお住まいの場合でも、現地作業が必要な場合には、お伺いいたしますので安心してご依頼いただけます。",
  },
  {
    question: "導入後はどのようなサポートを受けられますか？",
    answer:
      "ヘルプデスクサービスにて、お客様のご要件に合わせて伴走支援の相談を承っております。設定支援や質問対応など、どのような支援が必要かお知らせいただければ、具体的なご提案をさせていただきます。",
  },
  // FAQ追加・修正はこちらから
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
    <>
      {faqData.map((faq, index) => (
        <div key={index} className="not-prose mx-auto">
          <details className="group" onClick={() => handleClick(index)}>
            <summary className="flex items-center px-5 py-2.5 border-b-4 border-white rounded-bl-none rounded-full bg-kronos-light cursor-pointer transition-all ease-out duration-300 ps-8">
              <span className="inline-block hover:text-kronos-50 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-white">
                Q. {faq.question}
              </span>
              <div className="ml-auto">
                <MdKeyboardArrowRight className="opacity-80 transition-all group-open:rotate-90 align-middle text-3xl group-open:mt-1 text-white" />
              </div>
            </summary>
            {openIndices.includes(index) && (
              <div className="transition-all p-6 bg-kronos-50 rounded-tl-none rounded-2xl">
                <span className="inline-block first-letter:text-kronos first-letter:font-black first-letter:text-2xl first-letter:pr-1 ps-3">
                  A. {faq.answer}
                </span>
              </div>
            )}
          </details>
        </div>
      ))}
    </>
  );
};

export default FAQ;
