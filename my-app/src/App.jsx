// App.jsx
import { useMemo, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import CardRow from "./components/CardRow.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import ProductList from "./components/ProductList.jsx";
import SideFilter from "./components/SideFilter.jsx";

import { SAMPLE_ROWS } from "./data.jsx";
import AiQuote from "./pages/AiQuote.jsx";
import Misc from "./pages/Misc.jsx";
import Events from "./pages/Events.jsx";
import Notebooks from "./pages/Notebooks";
import Login from "./pages/Login.jsx";
import Signup from "./components/signup.jsx";
import Favorites from "./pages/Favorites";
import Faq from "./pages/Faq.jsx";

import "./App.css";

const CATEGORIES = ["CPU", "그래픽카드", "메인보드", "파워"];

/* ---------------- Home (메인) ---------------- */
function Home() {
  const [category, setCategory] = useState("CPU");
  const rows = useMemo(() => SAMPLE_ROWS[category] ?? [], [category]);

  return (
    <>
      <Banner>정보통신학과 파이팅 💪</Banner>
      <CardRow />

      <main className="wrap layout">
        {/* 왼쪽 카테고리 */}
        <aside className="side-nav">
          <h4>부품 선택</h4>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={c === category ? "is-active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </aside>

        {/* 가운데 콘텐츠 */}
        <section className="content">
          <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="상품명을 검색하세요." />
            <button>검색</button>
          </form>

          <ProductInfo title={category} totalText="상품수: " totalCount="11,689개" />
          <ProductList rows={rows} />
        </section>

        {/* 오른쪽 필터 */}
        <aside className="side-filter" id="sideFilter">
          <SideFilter category={category} />
        </aside>
      </main>
    </>
  );
}

/* ---------------- Cart (장바구니) ---------------- */
function Cart() {
  return (
    <section className="cart-summary">
      <h1 className="page-title">장바구니</h1>

      <div className="summary-box">
        <h2>총 결제금액</h2>
        <p>
          선택상품 금액 <strong>0원</strong>
        </p>
        <p>
          배송비 <strong>(+) 0원</strong>
        </p>
        <p className="total">
          <strong>0원</strong>
        </p>
      </div>

      <div className="buttons">
        <button type="button" className="btn-order">주문하기</button>
        <button type="button" className="btn-continue">쇼핑 계속하기</button>
      </div>
    </section>
  );
}

/* ---------------- App (라우팅) ---------------- */
export default function App() {
  const location = useLocation();

  const hideHeader = ["/faq", "/favorites"].includes(location.pathname);
  const hideMainComponents = ["/faq"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AiQuote />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <Footer />
    </>
  );
}