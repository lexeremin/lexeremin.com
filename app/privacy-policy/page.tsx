"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      {/* Header */}
      <div className="pt-40 bg-serika-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main">
                Privacy Policy
              </h1>
              <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full mb-6 sm:mb-8"></div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main">
                Политика конфиденциальности
              </h1>
              <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full mb-6 sm:mb-8"></div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main">
                  개인정보 처리방침
                </h1>
              </div>
              <div className="mt-12"></div>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-serika-sub">
              Last updated: August 5, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="prose prose-lg max-w-none text-serika-text">

          <hr className="border-serika-sub-alt my-12" />

          {/* Russian Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-serika-main mb-8 text-center">
              🇷🇺 Для пользователей из России
            </h2>
            
            <p className="text-lg text-serika-sub mb-8">
              Этот сайт управляется индивидуальным предпринимателем, зарегистрированным в России.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              1. Какие данные мы собираем
            </h3>
            <ul className="list-disc list-inside text-lg text-serika-sub mb-6 space-y-2">
              <li>Электронная почта (если вы заполняете форму)</li>
              <li>IP-адрес и данные браузера (анонимно через аналитику)</li>
            </ul>
            <p className="text-lg text-serika-sub mb-8">
              Мы <strong>не</strong> собираем паспортные данные, банковские реквизиты или биометрическую информацию.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              2. Как мы используем данные
            </h3>
            <ul className="list-disc list-inside text-lg text-serika-sub mb-4 space-y-2">
              <li>Для ответа на ваши запросы</li>
              <li>Для улучшения сайта</li>
            </ul>
            <p className="text-lg text-serika-sub mb-8">
              Мы <strong>не продаем</strong> и <strong>не передаем</strong> данные третьим лицам.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              3. Законодательная база
            </h3>
            <p className="text-lg text-serika-sub mb-6">
              Обработка данных осуществляется в соответствии с{' '}
              <a 
                href="http://www.consultant.ru/document/cons_doc_LAW_61801/" 
                className="text-serika-main hover:text-serika-main-hover underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ФЗ-152 "О персональных данных"
              </a>
              . Отправляя данные, вы даёте согласие на их обработку и хранение.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              4. Cookies
            </h3>
            <p className="text-lg text-serika-sub mb-6">
              Мы используем минимальные cookies для анализа посещаемости. Их можно отключить в браузере.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              5. Контакт
            </h3>
            <p className="text-lg text-serika-sub mb-4">
              По вопросам удаления или изменения данных:
            </p>
            <p className="text-lg font-semibold text-serika-main">
              📧 contact@lexeremin.com
            </p>
          </div>

          <hr className="border-serika-sub-alt my-12" />

          {/* English Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-serika-main mb-8 text-center">
            🇪🇺 For English-speaking users
            </h2>
            
            <p className="text-lg text-serika-sub mb-8">
              This website is operated by a sole proprietor registered in Russia.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              1. What we collect
            </h3>
            <ul className="list-disc list-inside text-lg text-serika-sub mb-6 space-y-2">
              <li>Email address (only if you submit a form)</li>
              <li>IP address and browser type (via analytics)</li>
            </ul>
            <p className="text-lg text-serika-sub mb-8">
              We <strong>do not</strong> collect banking info, biometric data, or sensitive identifiers.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              2. Why we collect it
            </h3>
            <ul className="list-disc list-inside text-lg text-serika-sub mb-4 space-y-2">
              <li>To reply to your messages</li>
              <li>To improve user experience</li>
            </ul>
            <p className="text-lg text-serika-sub mb-8">
              We <strong>do not sell or share</strong> your personal information.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              3. Legal basis (GDPR)
            </h3>
            <p className="text-lg text-serika-sub mb-6">
              Data is processed in accordance with the{' '}
              <a 
                href="https://gdpr.eu/" 
                className="text-serika-main hover:text-serika-main-hover underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Data Protection Regulation (GDPR)
              </a>
              . You may request access or deletion of your data at any time.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              4. Cookies
            </h3>
            <p className="text-lg text-serika-sub mb-6">
              We use minimal cookies for anonymous analytics (e.g., Plausible). You can disable cookies in your browser settings.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              5. Contact
            </h3>
            <p className="text-lg text-serika-sub mb-4">
              To request data deletion or access:
            </p>
            <p className="text-lg font-semibold text-serika-main">
              📧 contact@lexeremin.com
            </p>
          </div>

          <hr className="border-serika-sub-alt my-12" />

          {/* Korean Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-serika-main mb-8 text-center">
              🇰🇷 한국어 사용자용 (Korean users)
            </h2>
            
            <p className="text-lg text-serika-sub mb-8">
              이 웹사이트는 러시아에 등록된 개인 사업자가 운영합니다.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              1. 수집하는 정보
            </h3>
            <ul className="list-disc list-inside text-lg text-serika-sub mb-6 space-y-2">
              <li>이메일 주소 (폼을 통해 제출하는 경우)</li>
              <li>IP 주소 및 브라우저 정보 (익명 분석용)</li>
            </ul>
            <p className="text-lg text-serika-sub mb-8">
              민감한 개인 정보(예: 금융 정보, 생체 정보)는 <strong>수집하지 않습니다</strong>.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              2. 수집 목적
            </h3>
            <ul className="list-disc list-inside text-lg text-serika-sub mb-4 space-y-2">
              <li>문의에 응답하기 위해</li>
              <li>사용자 경험 개선을 위해</li>
            </ul>
            <p className="text-lg text-serika-sub mb-8">
              정보는 <strong>제3자에게 판매되거나 공유되지 않습니다</strong>.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              3. 관련 법규 (PIPA 기준)
            </h3>
            <p className="text-lg text-serika-sub mb-6">
              개인정보는 사용자 동의에 기반해 수집되며, 원하실 경우 언제든지 열람, 수정, 삭제를 요청할 수 있습니다.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              4. 쿠키
            </h3>
            <p className="text-lg text-serika-sub mb-6">
              이 사이트는 방문자 수와 사용 패턴을 이해하기 위해 최소한의 쿠키를 사용합니다. 브라우저 설정에서 쿠키 비활성화 가능.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-main mt-8 mb-4">
              5. 문의
            </h3>
            <p className="text-lg text-serika-sub mb-4">
              개인정보 삭제 또는 문의 사항은 다음 이메일로 연락해 주세요:
            </p>
            <p className="text-lg font-semibold text-serika-main">
              📧 contact@lexeremin.com
            </p>
          </div>

          {/* Back to Home Link */}
          <div className="text-center pt-8">
            <Link href="/">
              <button className="px-8 py-3 text-base rounded-xl bg-serika-main hover:bg-serika-main-hover text-black transition-all duration-200 shadow-soft hover:shadow-soft-lg">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 