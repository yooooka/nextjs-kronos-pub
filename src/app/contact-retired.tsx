import { ChangeEvent, FormEvent, useState } from "react";
import { MdArrowForward } from "react-icons/md";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  products: {
    helpdesk: boolean;
    login: boolean;
    sign: boolean;
    samba: boolean;
    aos: boolean;
  };
  agree: boolean;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    products: {
      helpdesk: false,
      login: false,
      sign: false,
      samba: false,
      aos: false,
    },
    agree: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Here you would typically handle form submission, like sending the form data to a server

    console.log("Form submitted", formState);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      products: {
        ...formState.products,
        [e.target.id]: e.target.checked,
      },
    });
  };

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      agree: e.target.checked,
    });
  };

  return (
    <div className="prose prose-stone mx-auto max-w-screen-md p-12 prose-h2:text-center prose-h2:text-2xl">
      <h2 className="mb-2">お問い合わせフォーム</h2>
      <span className="block pb-4 text-center font-outfit text-lg font-bold text-kronos">
        CONTACT
      </span>
      <p className="sm:px-8">
        こちらのメールフォームより、貴社からのお問い合わせを受け付けております。ご入力頂いた情報は、個人情報保護方針に基づき、適切に管理いたします。
      </p>
      <form
        onSubmit={handleSubmit}
        action="https://kronoz.co.jp/dx-support/mail.php"
        method="post"
        encType="multipart/form-data"
        className="mx-auto my-8 rounded-lg bg-white/80 p-4 md:p-6"
      >
        <div className="my-4 flex flex-col">
          <p className="mt-0 block text-sm font-medium before:text-red-500 before:content-['*']">
            お問い合わせ製品を選択してください。
          </p>

          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  onChange={handleCheckboxChange}
                  id="helpdesk"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  name="ヘルプデスクサービス"
                />
                <span className="ml-2">ヘルプデスクサービス</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  onChange={handleCheckboxChange}
                  id="login"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  name="GMOトラスト・ログイン"
                />
                <span className="ml-2">GMOトラスト・ログイン</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  onChange={handleCheckboxChange}
                  id="sign"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  name="GMOサイン"
                />
                <span className="ml-2">GMOサイン</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  onChange={handleCheckboxChange}
                  id="samba"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  name="セキュアSAMBA"
                />
                <span className="ml-2">セキュアSAMBA</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  onChange={handleCheckboxChange}
                  id="aos"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  name="AOS BOX"
                />
                <span className="ml-2">AOS BOX</span>
              </label>
            </div>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative mt-3">
            <input
              value={formState.name}
              onChange={handleInputChange}
              className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
              placeholder="クロノス　太郎"
              type="text"
              id="name"
              name="氏名"
            />
            <label
              htmlFor="name"
              className="absolute -top-6 left-2.5 text-xs text-stone-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-stone-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-stone-900 contrast-more:peer-placeholder-shown:text-stone-800"
            >
              <span className="block before:text-red-500 before:content-['*']">
                氏名
              </span>
            </label>
          </div>
          <div className="relative mt-3">
            <input
              value={formState.company}
              onChange={handleInputChange}
              className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
              placeholder="サンプル会社"
              type="text"
              id="company"
              name="会社名"
            />
            <label
              htmlFor="company"
              className="absolute -top-6 left-2.5 text-xs text-stone-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-stone-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-stone-900 contrast-more:peer-placeholder-shown:text-stone-800"
            >
              <span className="block font-medium">会社名</span>
            </label>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative mt-3">
            <input
              value={formState.email}
              onChange={handleInputChange}
              className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
              placeholder="email@example.com"
              type="email"
              id="email"
              name="メールアドレス"
            />
            <label
              htmlFor="email"
              className="absolute -top-6 left-2.5 text-xs text-stone-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-stone-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-stone-900 contrast-more:peer-placeholder-shown:text-stone-800"
            >
              <span className="block font-medium before:text-red-500 before:content-['*']">
                メールアドレス
              </span>
            </label>
            <p className="mt-2 hidden text-sm text-red-600 peer-invalid:block">
              メールアドレスが正しく入力されていますか？例）email@example.com
            </p>
          </div>
          <div className="relative mt-3">
            <input
              value={formState.phone}
              onChange={handleInputChange}
              className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
              placeholder="01-2345-6789"
              type="tel"
              id="phone"
              name="電話番号"
            />
            <label
              htmlFor="phone"
              className="absolute -top-6 left-2.5 text-xs text-stone-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-stone-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-stone-900 contrast-more:peer-placeholder-shown:text-stone-800"
            >
              <span className="block font-medium before:text-red-500 before:content-['*']">
                電話番号
              </span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative mt-3">
            <textarea
              value={formState.message}
              onChange={handleInputChange}
              className="peer w-full rounded-lg border border-stone-200 p-3 placeholder-transparent ring-primary-light focus:outline-none focus:ring-4"
              placeholder="お問合せ内容"
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
          <label className="flex flex-wrap items-center">
            <input
              onChange={handleAgreementChange}
              type="checkbox"
              className="form-checkbox peer accent-kronos-light"
              name="個人情報取扱"
            />
            <span className="m-2 grow text-sm">
              <a href="#">個人情報の取り扱い</a>について同意する
            </span>
            <button
              className={`group relative inline-flex w-fit items-center rounded-full px-8 py-2 text-white ${
                formState.agree
                  ? "bg-primary-dark hover:bg-kronos"
                  : "cursor-not-allowed  bg-gray-300 contrast-more:bg-stone-500"
              }`}
              disabled={!formState.agree}
            >
              {formState.agree ? (
                <MdArrowForward
                  fill="currentColor"
                  className="absolute end-full text-2xl opacity-0 transition-all group-hover:end-5 group-hover:opacity-100"
                />
              ) : null}
              <span
                className={`font-bold ${
                  formState.agree ? "transition-all group-hover:me-3" : null
                }`}
              >
                確認する
              </span>
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}
