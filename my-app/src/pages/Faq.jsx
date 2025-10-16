import React, { useState } from "react";
import { FAQ_DATA } from "../data/faqData";
import FaqItem from "../components/FaqItem";
import "../faq.css";

const TABS = Object.keys(FAQ_DATA);

const Faq = () => {
  const [activeTab, setActiveTab] = useState("회원");

  return (
    <main className="faq-page">
      <h1 className="faq-title">FAQ</h1>

      {/* 탭 메뉴 */}
      <div className="faq-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`faq-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ 리스트 */}
      <div className="faq-list">
        {FAQ_DATA[activeTab].map((item, i) => (
          <FaqItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>

      {/* 고객센터 하단 */}
      <footer className="faq-footer">
        <p>📞 고객센터 운영시간</p>
        <p>상품 문의 : XXXX-XXXX</p>
        <p>평일 09시 ~ 18시 / 토요일 09시 ~ 13시</p>
        <p>일요일, 공휴일 휴무</p>
      </footer>
    </main>
  );
};

export default Faq;
