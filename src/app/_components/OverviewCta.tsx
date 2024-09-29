import { FaAngleRight, FaLaptopCode } from "react-icons/fa";
import { GiGears, GiProcessor } from "react-icons/gi";

export const OverviewCta = () => {
  return (
    <section id="OverviewCta" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          RAYVEN（レイブン）が選ばれる理由
        </h2>
        {/* <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          RAYVENを選ぶ理由は次の通りです
        </p> */}
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <FaLaptopCode className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              柔軟な提案力
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              豊富な開発経験からお客様の達成したい目的に合わせてた開発のご提案が可能です
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              開発実績一覧へ
              <FaAngleRight className="ml-1 w-5 h-5" />
            </a>
          </div>
          <div>
            <GiGears className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">設計力</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              納品して終了ではなく、長期的な運用が可能になるように保守管理がを見据えた高品質な仕様設計を行います
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              暗号通貨がどのようにカバーされているか{" "}
              <FaAngleRight className="ml-1 w-5 h-5" />
            </a>
          </div>
          <div>
            <GiProcessor className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">開発品質</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              徹底的にヒアリングを行いニーズの深掘りを行い、完全なオーダメイドのシステムをご提供します
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              詳細を見る <FaAngleRight className="ml-1 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
