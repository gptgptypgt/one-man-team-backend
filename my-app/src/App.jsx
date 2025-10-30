// App.jsx
import { useMemo, useState, useEffect } from "react";
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
import Cart from "./pages/Cart.jsx";

import "./App.css";

const CATEGORIES = ["CPU", "그래픽카드", "메인보드", "파워"];

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

          <ProductInfo title={category} totalText="상품수: " totalCount="11,689개" />
          <ProductList rows={rows} />
        </section>

        <aside className="side-filter" id="sideFilter">
          <SideFilter category={category} />
        </aside>
      </main>
    </>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  const location = useLocation();

  const [cartItems, setCartItems] = useState([]);

  /* ✅ 1. 로컬스토리지에서 장바구니 복원 */
  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  /* ✅ 2. cartItems 변경 시 저장 */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ✅ 3. 상품 추가 */
  function handleAddToCart(product, category) {
    const uniqueId = `${category}-${product.id}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === uniqueId);
      if (existing) {
        return prev.map((item) =>
          item.id === uniqueId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, id: uniqueId, qty: 1 }];
    });
  }

  /* ✅ 4. 상품 삭제 */
  function handleRemoveFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  /* ✅ 5. 수량 조정 */
  function handleUpdateQty(productId, delta) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  }

  /* ✅ 6. 전체 비우기 */
  function handleClearCart() {
    if (window.confirm("장바구니를 모두 비우시겠습니까?")) {
      setCartItems([]);
      localStorage.removeItem("cartItems");
    }
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
          element={<Misc onAddToCart={(p) => handleAddToCart(p, "misc")} />}
        />
        <Route
          path="/notebooks"
          element={<Notebooks onAddToCart={(p) => handleAddToCart(p, "notebook")} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQty={handleUpdateQty}
              onClearCart={handleClearCart}
            />
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}
