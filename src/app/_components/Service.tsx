import { FaCheck, FaLaptopCode } from "react-icons/fa";
import { PiGearFineBold } from "react-icons/pi";
import { RiRobot2Fill } from "react-icons/ri";

const servicesData = [
  {
    title: "Webシステム開発",
    icon: (
      <FaLaptopCode className="w-12 h-12 text-primary-700 dark:text-primary-400" />
    ),
    bgColor: "bg-primary-100 dark:bg-primary-900",
    featureColor:
      "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400",
    features: [
      "レスポンシブデザイン",
      "SEO最適化",
      "高速ページロード",
      "セキュリティ強化",
      "クラウドホスティング対応",
    ],
  },
  {
    title: "業務システム",
    icon: (
      <PiGearFineBold className="w-12 h-12 text-purple-600 dark:text-purple-300" />
    ),
    bgColor: "bg-purple-100 dark:bg-purple-900",
    featureColor:
      "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
    features: [
      "プロセス自動化",
      "データ分析機能",
      "ユーザー権限管理",
      "レポート作成機能",
      "カスタマイズ可能なダッシュボード",
    ],
  },
  {
    title: "独自AI開発",
    icon: (
      <RiRobot2Fill className="w-12 h-12 text-teal-600 dark:text-teal-300" />
    ),
    bgColor: "bg-teal-100 dark:bg-teal-900",
    featureColor:
      "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400",
    features: [
      "機械学習モデルの構築",
      "自然言語処理",
      "画像認識システム",
      "予測分析",
      "AIチャットボット開発",
    ],
  },
];

export const Service = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          サービス一覧
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-lg ${service.bgColor}`}
              >
                {service.icon}
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-bold dark:text-white">
                  {service.title}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex space-x-2.5">
                      <div
                        className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${service.featureColor}`}
                      >
                        <FaCheck className="size-3" />
                      </div>
                      <span className="leading-tight text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
