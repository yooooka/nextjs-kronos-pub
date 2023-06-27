import React, { FC, useState } from "react";

// Define types for props
type CheckboxFieldProps = {
  id: string;
  label: string;
  name: string;
  className: string;
};

type TextFieldProps = {
  id: string;
  placeholder: string;
  type: string;
  label: string;
  required: boolean;
  name: string;
};

// Components for each form field
const CheckboxField: FC<CheckboxFieldProps> = ({
  id,
  label,
  name,
  className,
}) => (
  <div className={className}>
    <label className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="form-checkbox accent-kronos-light"
        value={label}
        name={name}
      />
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

const TextField: FC<TextFieldProps> = ({
  id,
  placeholder,
  type,
  label,
  required,
  name,
}) => (
  <div className="relative mt-3">
    <input
      className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
    />
    <label
      htmlFor={id}
      className="absolute left-2.5 -top-6 text-stone-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 contrast-more:peer-placeholder-shown:text-stone-800  peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-900 peer-focus:text-xs text-xs"
    >
      <span
        className={
          required
            ? "before:content-['*'] before:text-red-500 block font-medium"
            : "block font-medium"
        }
      >
        {label}
      </span>
    </label>
  </div>
);

export default function ContactHtml() {
  const [isAgreed, setIsAgreed] = useState(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };
  const products = [
    { id: "helpdesk", label: "ヘルプデスクサービス" },
    { id: "login", label: "GMOトラスト・ログイン" },
    { id: "sign", label: "GMOサイン" },
    { id: "samba", label: "セキュアSAMBA" },
    { id: "aos", label: "AOS BOX" },
  ];
  return (
    <div className="mx-auto prose prose-stone p-8 lg:p-12 max-w-screen-md prose-h2:text-center prose-h2:text-2xl">
      <h2 className="mb-2">お問い合わせフォーム</h2>
      <span className="text-center text-kronos font-bold block text-lg pb-4 font-outfit">
        CONTACT
      </span>
      <p className="sm:px-8">
        こちらのメールフォームより、貴社からのお問い合わせを受け付けております。ご入力頂いた情報は、個人情報保護方針に基づき、適切に管理いたします。
      </p>
      <form
        action="https://kronoz.co.jp/dx-support/mail.php"
        method="post"
        encType="multipart/form-data"
        className="mx-auto mt-8 p-4 md:p-6 bg-white/80 rounded-lg"
      >
        <div className="flex flex-col my-4">
          <p className="mt-0 before:content-['*'] before:text-red-500 block font-medium text-sm">
            お問い合わせ製品を選択してください。
          </p>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <CheckboxField
                key={product.id}
                id={product.id}
                label={product.label}
                name="お問い合わせ製品[]"
                className="w-full sm:w-1/2"
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
          <TextField
            id="name"
            placeholder="クロノス　太郎"
            type="text"
            label="氏名"
            required
            name="氏名"
          />
          <TextField
            id="company"
            placeholder="サンプル会社"
            type="text"
            label="会社名"
            required={false}
            name="会社名"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
          <TextField
            id="email"
            placeholder="email@example.com"
            type="email"
            label="メールアドレス"
            required
            name="メールアドレス"
          />
          <TextField
            id="phone"
            placeholder="01-2345-6789"
            type="tel"
            label="電話番号"
            required
            name="電話番号"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative mt-3">
            <textarea
              className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
              placeholder="お問い合わせ内容"
              rows={8}
              id="message"
              name="お問い合わせ内容"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-2.5 -top-6 text-stone-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 contrast-more:peer-placeholder-shown:text-stone-800  peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-900 peer-focus:text-xs text-xs"
            >
              お問い合わせ内容
            </label>
          </div>
        </div>
        <div className="mt-0">
          <label className="flex items-center flex-wrap sm:justify-between sm:flex-row justify-center flex-col">
            <div className="w-fit">
              <input
                type="checkbox"
                className="peer form-checkbox cursor-pointer accent-kronos-light"
                name="個人情報の取り扱いに同意"
                onChange={handleCheckboxChange}
              />
              <span className="text-sm inline-block ms-2">
                <a href="https://kronoz.co.jp/privacy-policy/" target="_blank">
                  個人情報の取り扱い
                </a>
                について同意する
              </span>
            </div>
            <div className="my-2">
              <button
                className={`inline-flex rounded-full px-8 py-2 text-white ${
                  isAgreed
                    ? "cursor-pointer bg-primary-dark  hover:bg-kronos"
                    : "cursor-not-allowed  bg-stone-300"
                }`}
                disabled={!isAgreed}
              >
                <span className="font-bold">確認する</span>
              </button>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}
