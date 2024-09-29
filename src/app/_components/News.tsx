import Image from "next/image";

export const News = () => {
  return (
    <aside
      aria-label="関連記事"
      className="py-8 lg:py-24 bg-white dark:bg-gray-900 antialiased"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          関連記事
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article className="max-w-xs">
            <a href="#">
              <Image
                src="/1.webp"
                className="mb-5 rounded-lg"
                alt="画像1"
                height={180}
                width={270}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">私たちの最初のオフィス</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              この1年間、Volosoftは多くの変化を遂げました！数ヶ月の準備期間を経て。
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              2分で読む
            </a>
          </article>
          <article className="max-w-xs">
            <a href="#">
              <Image
                src="/1.webp"
                className="mb-5 rounded-lg"
                alt="画像2"
                height={180}
                width={270}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">エンタープライズデザインのヒント</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              この1年間、Volosoftは多くの変化を遂げました！数ヶ月の準備期間を経て。
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              12分で読む
            </a>
          </article>
          <article className="max-w-xs">
            <a href="#">
              <Image
                src="/1.webp"
                className="mb-5 rounded-lg"
                alt="画像3"
                height={180}
                width={270}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">Googleとのパートナーシップ</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              この1年間、Volosoftは多くの変化を遂げました！数ヶ月の準備期間を経て。
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              8分で読む
            </a>
          </article>
          <article className="max-w-xs">
            <a href="#">
              <Image
                src="/1.webp"
                className="mb-5 rounded-lg"
                alt="画像4"
                height={180}
                width={270}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">Reactを使用した最初のプロジェクト</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              この1年間、Volosoftは多くの変化を遂げました！数ヶ月の準備期間を経て。
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              4分で読む
            </a>
          </article>
        </div>
      </div>
    </aside>
  );
};
