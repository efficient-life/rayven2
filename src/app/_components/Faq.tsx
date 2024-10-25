"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "御社のシステム開発の特徴は何ですか？",
      answer: (
        <>
          当社は、最新のテクノロジーと豊富な経験を組み合わせた、高品質で効率的なシステム開発を提供しています。
          <p className="text-gray-500 dark:text-gray-400">
            特に以下の点に注力しています：
          </p>
          <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
            <li>クライアントのニーズに合わせたカスタマイズ開発</li>
            <li>アジャイル開発手法による迅速な開発と柔軟な対応</li>
            <li>セキュリティを重視した堅牢なシステム設計</li>
            <li>使いやすさを追求したユーザーインターフェース</li>
          </ul>
        </>
      ),
    },
    {
      question: "開発期間はどのくらいかかりますか？",
      answer: (
        <>
          開発期間は、プロジェクトの規模や複雑さによって異なります。一般的な目安として：
          <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400 mt-2">
            <li>小規模プロジェクト：1〜3ヶ月</li>
            <li>中規模プロジェクト：3〜6ヶ月</li>
            <li>大規模プロジェクト：6ヶ月以上</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            具体的な期間については、
            <Link
              href="/contact"
              className="text-primary-600 dark:text-primary-500 hover:underline"
            >
              お問い合わせ
            </Link>
            いただき、詳細なヒアリングの上で見積もりをさせていただきます。
          </p>
        </>
      ),
    },
    {
      question: "開発後のサポート体制はどうなっていますか？",
      answer: (
        <>
          当社では、システム開発後も継続的なサポートを提供しています。
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            サポート内容には以下が含まれます：
          </p>
          <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
            <li>定期的なメンテナンスとアップデート</li>
            <li>24時間365日の緊急サポート対応</li>
            <li>ユーザートレーニングとマニュアルの提供</li>
            <li>システムの拡張や新機能の追加対応</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            詳細なサポートプランについては、
            <Link
              href="/support"
              className="text-primary-600 dark:text-primary-500 hover:underline"
            >
              お問い合わせ
            </Link>
            ください
          </p>
        </>
      ),
    },
    {
      question: "料金体系はどうなっていますか？",
      answer: (
        <>
          料金は、プロジェクトの規模、複雑さ、開発期間などに応じて個別に見積もりをさせていただきます。
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            一般的な料金構成要素：
          </p>
          <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
            <li>初期開発費用</li>
            <li>ライセンス費用（必要な場合）</li>
            <li>月額保守費用</li>
            <li>カスタマイズや機能追加の費用</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            具体的な料金については、プロジェクトの詳細をお聞きした上で、透明性のある見積もりを提供いたします。お気軽に
            <Link
              href="/contact"
              className="text-primary-600 dark:text-primary-500 hover:underline"
            >
              お問い合わせ
            </Link>
            ください。
          </p>
        </>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          よくある質問
        </h2>
        <div className="mx-auto max-w-screen-md">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {faqData.map((item, index) => (
              <div key={index}>
                <h2 id={`accordion-flush-heading-${index + 1}`}>
                  <button
                    type="button"
                    className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-flush-body-${index + 1}`}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-6 h-6 ${
                        activeIndex === index ? "rotate-180" : ""
                      } shrink-0 transition-transform`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 1}`}
                  className={`${
                    activeIndex === index ? "" : "hidden"
                  } transition-all duration-300 ease-in-out`}
                  aria-labelledby={`accordion-flush-heading-${index + 1}`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <div className="mb-2 text-gray-500 dark:text-gray-400">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
