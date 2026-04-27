"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

type LanguageKey = "en" | "ko" | "ru"

type PolicyParagraph = string | { label: string; href: string }

const policyContent: Record<
  LanguageKey,
  {
    title: string
    updated: string
    intro: string
    sections: { heading: string; paragraphs: PolicyParagraph[]; bullets?: string[] }[]
    backLabel: string
  }
> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 27, 2026",
    intro:
      "This website is a personal portfolio and blog. At the moment, I do not intentionally collect personal data from visitors through forms, accounts, or mailing lists.",
    sections: [
      {
        heading: "1. What this site currently collects",
        paragraphs: [
          "At the moment, this site does not ask you to create an account, submit a contact form, or provide personal information directly.",
          "Like most websites, basic technical data may still be processed automatically by hosting infrastructure, the browser, or essential site functionality.",
        ],
        bullets: [
          "basic server logs",
          "IP address",
          "browser and device information",
          "cookies or similar storage used for basic website behavior",
        ],
      },
      {
        heading: "2. How that information may be used",
        paragraphs: [
          "If technical data is processed, it is only for ordinary website operation, security, performance, and debugging.",
          "I do not currently use this site to build user profiles, run a mailing list, or sell visitor data.",
        ],
      },
      {
        heading: "3. Cookies",
        paragraphs: [
          "This site may use minimal cookies or local browser storage for essential functionality, for example visual preferences such as theme settings.",
          "If analytics or other third-party tools are added in the future, this policy should be updated accordingly.",
        ],
      },
      {
        heading: "4. Third-party links",
        paragraphs: [
          "This website links to third-party services such as GitHub, Unsplash, Instagram, YouTube, Threads, and other external platforms.",
          "If you open those services, their own privacy policies and terms apply.",
        ],
      },
      {
        heading: "5. Legal basis",
        paragraphs: [
          "This website is intended to follow applicable privacy and data protection laws to the extent relevant for its current functionality.",
          "For users in the European context, a general reference point is the GDPR:",
          { label: "General Data Protection Regulation (GDPR)", href: "https://gdpr.eu/" },
        ],
      },
      {
        heading: "6. Changes",
        paragraphs: [
          "This page may be updated if the website starts collecting more data or adds new services.",
          "If that happens, the policy should be revised to reflect the actual behavior of the site.",
        ],
      },
    ],
    backLabel: "Back to Home",
  },
  ko: {
    title: "개인정보 처리방침",
    updated: "최종 업데이트: 2026년 4월 27일",
    intro:
      "이 웹사이트는 개인 포트폴리오 및 블로그입니다. 현재는 회원가입, 문의 폼, 메일링 리스트 등을 통해 방문자의 개인정보를 의도적으로 수집하지 않습니다.",
    sections: [
      {
        heading: "1. 현재 이 사이트가 수집할 수 있는 정보",
        paragraphs: [
          "현재 이 사이트는 계정 생성, 연락처 폼 제출, 또는 직접적인 개인정보 입력을 요구하지 않습니다.",
          "다만 대부분의 웹사이트와 마찬가지로, 호스팅 인프라나 브라우저 수준에서 기본적인 기술 정보가 자동으로 처리될 수 있습니다.",
        ],
        bullets: [
          "기본 서버 로그",
          "IP 주소",
          "브라우저 및 기기 정보",
          "기본 사이트 동작에 필요한 쿠키 또는 브라우저 저장소",
        ],
      },
      {
        heading: "2. 정보 사용 목적",
        paragraphs: [
          "기술 정보가 처리되는 경우, 이는 일반적인 사이트 운영, 보안, 성능 유지, 디버깅 목적에 한정됩니다.",
          "현재 이 사이트는 사용자 프로필 생성, 메일링 리스트 운영, 방문자 데이터 판매를 목적으로 사용되지 않습니다.",
        ],
      },
      {
        heading: "3. 쿠키",
        paragraphs: [
          "이 사이트는 테마 설정과 같은 기본 기능을 위해 최소한의 쿠키 또는 로컬 저장소를 사용할 수 있습니다.",
          "향후 분석 도구나 제3자 서비스가 추가되면, 이 정책도 그에 맞게 업데이트되어야 합니다.",
        ],
      },
      {
        heading: "4. 외부 서비스 링크",
        paragraphs: [
          "이 사이트에는 GitHub, Unsplash, Instagram, YouTube, Threads 등 외부 서비스로 연결되는 링크가 포함될 수 있습니다.",
          "해당 서비스를 이용할 경우 각 서비스의 자체 개인정보 처리방침과 이용약관이 적용됩니다.",
        ],
      },
      {
        heading: "5. 관련 법규",
        paragraphs: [
          "이 웹사이트는 현재 기능 범위 안에서 적용 가능한 개인정보 및 데이터 보호 관련 법규를 준수하는 것을 목표로 합니다.",
          "한국어 사용자에게는 개인정보보호법(PIPA)이 일반적인 참고 기준이 될 수 있습니다:",
          { label: "개인정보보호법(PIPA)", href: "https://www.pipc.go.kr/np/default/page.do?mCode=G010030000" },
        ],
      },
      {
        heading: "6. 변경 사항",
        paragraphs: [
          "향후 이 사이트가 더 많은 데이터를 수집하거나 새로운 서비스를 추가할 경우 이 페이지는 수정될 수 있습니다.",
          "그 경우 실제 사이트 동작에 맞게 정책을 다시 작성해야 합니다.",
        ],
      },
    ],
    backLabel: "홈으로 돌아가기",
  },
  ru: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 27 апреля 2026",
    intro:
      "Этот сайт является личным портфолио и блогом. На данный момент я не собираю персональные данные посетителей намеренно через формы, аккаунты или рассылки.",
    sections: [
      {
        heading: "1. Что сайт может собирать сейчас",
        paragraphs: [
          "Сейчас сайт не просит вас регистрироваться, отправлять контактную форму или напрямую передавать персональные данные.",
          "Однако, как и большинство сайтов, базовая техническая информация может автоматически обрабатываться на уровне хостинга, браузера или базовой работы сайта.",
        ],
        bullets: [
          "базовые серверные логи",
          "IP-адрес",
          "информация о браузере и устройстве",
          "cookies или аналогичное хранилище для базовой работы сайта",
        ],
      },
      {
        heading: "2. Как эта информация может использоваться",
        paragraphs: [
          "Если технические данные обрабатываются, то только для обычной работы сайта, безопасности, производительности и отладки.",
          "Я не использую этот сайт для построения пользовательских профилей, ведения рассылки или продажи данных посетителей.",
        ],
      },
      {
        heading: "3. Cookies",
        paragraphs: [
          "Сайт может использовать минимальные cookies или локальное хранилище браузера для базовой функциональности, например для сохранения визуальных настроек, таких как тема оформления.",
          "Если в будущем будут добавлены аналитика или сторонние инструменты, эта политика должна быть обновлена.",
        ],
      },
      {
        heading: "4. Ссылки на сторонние сервисы",
        paragraphs: [
          "На сайте есть ссылки на сторонние сервисы, такие как GitHub, Unsplash, Instagram, YouTube, Threads и другие внешние платформы.",
          "Если вы переходите на эти сервисы, к вам применяются их собственные политики конфиденциальности и условия использования.",
        ],
      },
      {
        heading: "5. Правовая основа",
        paragraphs: [
          "Этот сайт создается с учетом применимых законов о персональных данных и конфиденциальности в той мере, в какой это относится к его текущей функциональности.",
          "Для пользователей из России ориентиром является Федеральный закон № 152-ФЗ «О персональных данных»:",
          { label: "Федеральный закон № 152-ФЗ «О персональных данных»", href: "https://www.consultant.ru/document/cons_doc_LAW_61801/" },
        ],
      },
      {
        heading: "6. Изменения",
        paragraphs: [
          "Эта страница может быть обновлена, если сайт начнет собирать больше данных или подключит новые сервисы.",
          "В таком случае политика должна быть пересмотрена так, чтобы соответствовать реальному поведению сайта.",
        ],
      },
    ],
    backLabel: "Вернуться на главную",
  },
}

const tabs: { key: LanguageKey; label: string }[] = [
  { key: "en", label: "English" },
  { key: "ko", label: "한국어" },
  { key: "ru", label: "Русский" },
]

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<LanguageKey>("en")
  const content = policyContent[language]

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      <div className="pt-40 bg-serika-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main">
              {content.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full mt-4 mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-serika-sub">{content.updated}</p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex flex-wrap gap-2 rounded-xl bg-serika-sub-alt p-1.5 shadow-soft">
              {tabs.map((tab) => {
                const active = tab.key === language
                return (
                  <button
                    key={tab.key}
                    onClick={() => setLanguage(tab.key)}
                    className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-soft ${
                      active
                        ? "bg-serika-main text-black"
                        : "bg-serika-bg text-serika-text hover:bg-serika-sub"
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft p-6 sm:p-8 lg:p-10 space-y-8">
          <p className="text-lg sm:text-xl leading-relaxed text-serika-sub">{content.intro}</p>

          {content.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`} className="text-base sm:text-lg leading-relaxed text-serika-sub">
                  {typeof paragraph === "string" ? (
                    paragraph
                  ) : (
                    <a
                      href={paragraph.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-serika-main hover:text-serika-main-hover underline"
                    >
                      {paragraph.label}
                    </a>
                  )}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-serika-sub">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="text-center pt-4">
            <Link href="/">
              <button className="px-8 py-3 text-base rounded-xl bg-serika-main hover:bg-serika-main-hover text-black transition-all duration-200 shadow-soft hover:shadow-soft-lg">
                {content.backLabel}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
