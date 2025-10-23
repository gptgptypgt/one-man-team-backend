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
import Signup from "./pages/Signup.jsx"; // ✅ 수정: components → pages로 경로 변경
import Favorites from "./pages/Favorites";
import Faq from "./pages/Faq.jsx";
import Cart from "./pages/cart.jsx";

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

        <section className="content">
          <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="상품명을 검색하세요." />
            <button>검색</button>
          </form>

          <ProductInfo
            title={category}
            totalText="상품수: "
            totalCount="11,689개"
          />
          <ProductList rows={rows} />
        </section>

        <aside className="side-filter" id="sideFilter">
          <SideFilter category={category} />
        </aside>
      </main>
    </>
  );
}

/* ---------------- App (라우팅 + 장바구니 상태) ---------------- */
export default function App() {
  const location = useLocation();

  // ✅ 장바구니 상태
  const [cartItems, setCartItems] = useState([]);

  // ✅ 장바구니 추가 함수
  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  const hideHeader = ["/faq", "/favorites"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header cartCount={cartItems.length} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AiQuote />} />
        <Route
          path="/misc"
          element={<Misc onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/notebooks"
          element={<Notebooks onAddToCart={handleAddToCart} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ 회원가입 페이지 연결 */}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <Footer />
    </>
  );
}
