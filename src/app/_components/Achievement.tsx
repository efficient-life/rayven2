import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
};
// Cardコンポーネントを作成
const Card = ({ src, alt, title, category, description }: Props) => {
  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image
          className="mb-5 rounded-lg"
          src={src}
          alt={alt}
          width={355}
          height={255}
        />
      </Link>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
        {category}
      </span>
      <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href="#">{title}</Link>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </article>
  );
};

export const Achievement = () => {
  const cardData = [
    // {
    //   src: "/1.webp",
    //   alt: "OCR解析抽出&クイズ作成",
    //   title: "OCR解析抽出&クイズ作成",
    //   category: "記事",
    //   description:
    //     "過去1年で、Volosoftは多くの変化を遂げました！数ヶ月の準備と努力の末、新しいオフィスに移転しました。",
    // },
    {
      src: "/4.webp",
      alt: "Google本社",
      title: "インフルエンサーマーケティングプラットフォーム",
      category: "SaaS",
      description:
        "SNSインフルエンサーとブランドをつなぐ新しいマーケティングプラットフォームを開発しました。これにより、企業はインフルエンサーとのキャンペーンをより効果的に管理・実行できます。",
    },
    {
      src: "/3.webp",
      alt: "オフィスのノートパソコン",
      title: "保育士・保護者の出席管理ツール",
      category: "スマホアプリ",
      description:
        "保育士と保護者が簡単に出席管理を行えるツールを開発しました。直感的なUIで、保育園の日常業務の効率化を実現します。",
    },
    {
      src: "/6.webp",
      alt: "オフィスのノートパソコン",
      title: "資格試験学習システム",
      category: "スマホアプリ",
      description:
        "学生が資格試験の準備を効率的に行える学習システムを開発しました。クイズや模擬試験機能を搭載し、自己学習をサポートします。",
    },
    {
      src: "/7.webp",
      alt: ".Contact レンズ交換日LineBot",
      title: ".Contact レンズ交換日LineBot",
      category: "LineAIアプリ",
      description:
        "コンタクトレンズの交換日をリマインドするLineBotを開発しました。ユーザーは登録するだけで、交換日が近づくと自動で通知を受け取れます。",
    },
    {
      src: "/Bluebox.webp",
      alt: "売上集計から決算書までの自動作成ツール",
      title: "売上集計から決算書までの自動作成ツール",
      category: "業務改善社内ツール",
      description:
        "売上データの自動集計から決算書の作成までを一貫して行うツールを開発しました。これにより、経理業務の効率化を実現します。",
    },
    {
      src: "/data.webp",
      alt: "社員データの管理＆研修システム",
      title: "社員データの管理＆研修システム",
      category: "業務改善社内ツール",
      description:
        "社員のデータ管理と研修計画を一元化するシステムを開発しました。研修の進捗やパフォーマンスをリアルタイムで把握できます。",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            開発実績
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            私たちはアジャイル開発を用いて、あなたのオーディエンスのニーズに早期かつ頻繁に接続し、仮定をテストします。
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((data, index) => (
            <Card
              key={index}
              src={data.src}
              alt={data.alt}
              title={data.title}
              category={data.category}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
