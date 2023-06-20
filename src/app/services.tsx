import Image from "next/image";
import aosbox from "./assets/aosbox.svg";
import gmoLogin from "./assets/gmo-logo.svg";
import gmoSign from "./assets/gmosign.svg";
import samba from "./assets/mv-logo.svg";
import sHelpDesk from "./assets/s-helpdesk.svg";
import { motion, Variants } from "framer-motion";
import title03 from "./assets/title03.svg";

const titleVariants: Variants = {
  offscreen: {
    y: 70,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
export default function Steps() {
  return (
    <div className="prose prose-stone mx-auto max-w-screen-lg p-8 sm:px-6 lg:px-8">
      <div className="mx-auto prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          variants={titleVariants}
        >
          <Image
            alt="クロノスがおすすめする"
            src={title03}
            className="mx-auto mb-4 h-[60px] max-w-none object-contain"
          />
        </motion.div>

        <h2 className="sr-only">クロノスがおすすめする</h2>
        <h2 className="pb-2 m-auto w-fit">5つのDXサービス</h2>
        <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
          DX SERVICES
        </span>
      </div>
      <div className="prose-p:text-[0.85rem] prose-h3:mt-0 prose-h3:text-base mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-1 auto-cols-min sm:mx-12">
        <div className="flex flex-col rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
          <h3 className="text-center">導入～運用まで伴走し続けます</h3>
          <h3 className="my-4 text-xl font-bold text-center">
            ヘルプデスクサービス
          </h3>
          <Image
            src={sHelpDesk}
            alt="ヘルプデスクサービス"
            className="max-width-none mx-auto"
          />
          <p className="mt-1">
            社内の情報システム担当の負担軽減や、障害対応・問題解決にかかるスピード向上を実現する、ヘルプデスクのアウトソーシングサービスです。ヘルプデスクの豊富な経験とノウハウのある当社にお任せください。
          </p>
        </div>
        <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
          <h3 className="text-center pb-4">
            増え続けるID・パスワードを１つに！
          </h3>
          <h3 className="sr-only">トラスト・ログイン</h3>
          <Image
            src={gmoLogin}
            className="max-w-[200px] m-auto pb-4"
            alt="GMO トラストログイン"
          />
          <p className="mt-1">
            社内システムや業務アプリケーションなど、複数のIDを一元管理するクラウド型のID管理です。「ID・パスワード管理」「シングルサインオン」「認証強化」「ID連携」を備え、セキュアな業務環境を実現します。
          </p>
        </div>
        <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
          <h3 className="text-center pb-4">契約業務を安心安全に効率化</h3>
          <h3 className="sr-only">GMO サイン</h3>
          <Image
            src={gmoSign}
            className="max-w-[200px] m-auto pb-4"
            alt="GMO サイン"
          />
          <p className="mt-1">
            紙による書面の取り交わしを電子化し、契約業務のスピード化、ペーパーレス化、印紙税などのコスト削減を実現する、電子契約サービスです。業界トップクラスの高いセキュリティ技術により、安心安全に、効率的な契約業務を行えます。
          </p>
        </div>
        <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
          <h3 className="text-center pb-4">ファイル共有のわずらわしさを解消</h3>
          <h3 className="sr-only">セキュアSAMBA</h3>
          <Image
            src={samba}
            className="max-w-[180px] m-auto pb-4"
            alt="セキュアSAMBA"
          />
          <p className="mt-1">
            簡単な操作でファイルの共有や編集ができるオンラインストレージです。データの暗号化、アクセス制限、二段階認証など、法人に必要なセキュリティ機能が標準搭載。安全性・信頼性の高いデータバックアップ機能で、万が一の場合も安心です。
          </p>
        </div>
        <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
          <h3 className="text-center pb-4">
            バックアップにかける時間を「0」に
          </h3>
          <h3 className="sr-only">AOS BOX</h3>
          <Image
            src={aosbox}
            className="max-w-[180px] m-auto pb-4"
            alt="AOS BOX"
          />
          <p className="mt-1">
            「堅牢性」「利便性」「経済的」を実現し、操作性と高セキュリティを兼ね備えたクラウドバックアップサービスです。データの漏洩・紛失、災害などの予期せぬ事態から、企業の大切なデータを守ります。
          </p>
        </div>
      </div>
    </div>
  );
}
