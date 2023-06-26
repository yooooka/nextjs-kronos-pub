import { useState } from "react";

export default function ContactHtml() {
  const [isAgreed, setIsAgreed] = useState(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div className="mx-auto prose prose-stone p-12 max-w-screen-md prose-h2:text-center prose-h2:text-2xl">
      <h2 className="mb-2">お問い合わせフォーム</h2>
      <span className="text-center text-kronos font-bold block text-lg pb-4 font-outfit">
        CONTACT
      </span>
      <p className="sm:px-8">
        こちらのメールフォームより、貴社からのお問い合わせを受け付けております。ご入力頂いた情報は、個人情報保護方針に基づき、適切に管理いたします。
      </p>
      <form
        action="https://kronos-dx-support.graspstg.com/nextjs/mail.php"
        method="post"
        encType="multipart/form-data"
        className="mx-auto mt-8 p-4 md:p-6 bg-white/80 rounded-lg"
      >
        <div className="flex flex-col my-4">
          <p className="mt-0 before:content-['*'] before:text-red-500 block font-medium text-sm">
            お問い合わせ製品を選択してください。
          </p>

          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  id="helpdesk"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  value="ヘルプデスクサービス"
                  name="お問い合わせ製品[]"
                />
                <span className="ml-2">ヘルプデスクサービス</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  id="login"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  value="GMOトラスト・ログイン"
                  name="お問い合わせ製品[]"
                />
                <span className="ml-2">GMOトラスト・ログイン</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  id="sign"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  value="GMOサイン"
                  name="お問い合わせ製品[]"
                />
                <span className="ml-2">GMOサイン</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  id="samba"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  value="セキュアSAMBA"
                  name="お問い合わせ製品[]"
                />
                <span className="ml-2">セキュアSAMBA</span>
              </label>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="flex items-center">
                <input
                  id="aos"
                  type="checkbox"
                  className="form-checkbox accent-kronos-light"
                  value="AOS BOX"
                  name="お問い合わせ製品[]"
                />
                <span className="ml-2">AOS BOX</span>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
          <div className="relative mt-3">
            <input
              className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
              placeholder="クロノス　太郎"
              type="text"
              id="name"
              name="氏名"
            />
            <label
              htmlFor="name"
              className="absolute left-2.5 -top-6 text-stone-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 contrast-more:peer-placeholder-shown:text-stone-800  peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-900 peer-focus:text-xs text-xs"
            >
              <span className="before:content-['*'] before:text-red-500 block">
                氏名
              </span>
            </label>
          </div>
          <div className="relative mt-3">
            <input
              className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
              placeholder="サンプル会社"
              type="text"
              id="company"
              name="会社名"
            />
            <label
              htmlFor="company"
              className="absolute left-2.5 -top-6 text-stone-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 contrast-more:peer-placeholder-shown:text-stone-800  peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-900 peer-focus:text-xs text-xs"
            >
              <span className="block font-medium">会社名</span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
          <div className="relative mt-3">
            <input
              className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
              placeholder="email@example.com"
              type="email"
              id="email"
              name="メールアドレス"
            />
            <label
              htmlFor="email"
              className="absolute left-2.5 -top-6 text-stone-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 contrast-more:peer-placeholder-shown:text-stone-800  peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-900 peer-focus:text-xs text-xs"
            >
              <span className="before:content-['*'] before:text-red-500 block font-medium">
                メールアドレス
              </span>
            </label>
            <p className="mt-2 hidden peer-invalid:block text-red-600 text-sm">
              メールアドレスが正しく入力されていますか？例）email@example.com
            </p>
          </div>
          <div className="relative mt-3">
            <input
              className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
              placeholder="01-2345-6789"
              type="tel"
              id="phone"
              name="電話番号"
            />
            <label
              htmlFor="phone"
              className="absolute left-2.5 -top-6 text-stone-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 contrast-more:peer-placeholder-shown:text-stone-800  peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-900 peer-focus:text-xs text-xs"
            >
              <span className="before:content-['*'] before:text-red-500 block font-medium">
                電話番号
              </span>
            </label>
          </div>
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
          <label className="flex items-center flex-wrap justify-center">
            <input
              type="checkbox"
              className="peer form-checkbox accent-kronos-light"
              name="個人情報の取り扱いに同意"
              onChange={handleCheckboxChange}
            />
            <span className="text-sm grow ms-2 my-2">
              <a href="#">個人情報の取り扱い</a>について同意する
            </span>
            <div className="peer-checked:[&_button]:bg-primary-dark peer-checked:[&_button:hover]:bg-kronos [&_button]:cursor-not-allowed peer-checked:[&_button]:cursor-pointer my-2">
              <button
                className="bg-stone-300 inline-flex rounded-full px-8 py-2 text-white"
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
