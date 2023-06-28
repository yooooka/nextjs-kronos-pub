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
      className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
    />
    <label
      htmlFor={id}
      className="absolute -top-6 left-2.5 text-xs text-stone-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-stone-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-stone-900 contrast-more:peer-placeholder-shown:text-stone-800"
    >
      <span
        className={
          required
            ? "block font-medium before:text-red-500 before:content-['*']"
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
    <div className="prose prose-stone mx-auto max-w-screen-md p-8 px-4 prose-h2:text-center prose-h2:text-2xl lg:p-12">
      <h2 className="mb-2">お問い合わせフォーム</h2>
      <span className="block pb-4 text-center font-outfit text-lg font-bold text-kronos">
        CONTACT
      </span>
      <p className="mt-4 px-4 sm:px-6">
        こちらのフォームより、貴社からのお問い合わせを受け付けております。ご入力頂いた情報は、個人情報保護方針に基づき、適切に管理いたします。
      </p>
      <form
        action="https://kronoz.co.jp/dx-support/mail.php"
        method="post"
        encType="multipart/form-data"
        className="mx-auto mt-8 rounded-lg bg-white/80 p-4 md:p-6"
      >
        <div className="my-4 flex flex-col">
          <p className="mt-0 block text-sm font-medium before:text-red-500 before:content-['*']">
            お問い合わせ製品またはサービスを選択してください。
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
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
              placeholder="お問い合わせ内容"
              rows={8}
              id="message"
              name="お問い合わせ内容"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute -top-6 left-2.5 text-xs text-stone-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-stone-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-stone-900 contrast-more:peer-placeholder-shown:text-stone-800"
            >
              お問い合わせ内容
            </label>
          </div>
        </div>
        <div className="mt-0">
          <label className="flex flex-col flex-wrap items-center justify-center sm:flex-row sm:justify-between">
            <div className="w-fit">
              <input
                type="checkbox"
                className="form-checkbox peer cursor-pointer accent-kronos-light"
                name="個人情報の取り扱いに同意"
                onChange={handleCheckboxChange}
              />
              <span className="ms-2 inline-block text-sm">
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
