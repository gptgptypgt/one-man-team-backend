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

/* ---------------- Home ---------------- */
function Home() {
  const [category, setCategory] = useState("CPU");
  const [filters, setFilters] = useState({});
  const [serverRows, setServerRows] = useState([]);

  // ✅ 서버에서 데이터 불러오기
  useEffect(() => {
    const params = new URLSearchParams();
    params.append("category", category);

    // ✅ 카테고리별 필터 값 전달
    if (category === "CPU") {
      if (filters.brand?.length === 1) params.append("brand", filters.brand[0]);
      if (filters.core?.length === 1) params.append("cores", filters.core[0]);
    }

    if (category === "그래픽카드") {
      if (filters.vendor?.length === 1)
        params.append("vendor", filters.vendor[0]);
      if (filters.vram?.length === 1) params.append("vram", filters.vram[0]);
    }

    if (category === "메인보드") {
      if (filters.socket?.length === 1)
        params.append("socket", filters.socket[0]);
      if (filters.form?.length === 1) params.append("form", filters.form[0]);
    }

    if (category === "파워") {
      if (filters.watt?.length === 1) params.append("watt", filters.watt[0]);
      if (filters.cable?.length === 1)
        params.append("cable", filters.cable[0]);
    }

    // ✅ API 호출
    fetch(`http://localhost:8080/api/products?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error("서버 응답 오류");
        return res.json();
      })
      .then((data) => {
        console.log("서버에서 받아온 데이터:", data);
        setServerRows(data);
      })
      .catch((err) => console.error("불러오기 오류:", err));
  }, [category, filters]);

  return (
    <>
      <Banner>정보통신학과 파이팅 💪</Banner>
      <CardRow />

      <main className="wrap layout">
        {/* ✅ 왼쪽 부품 카테고리 */}
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

        {/* ✅ 가운데 상품 리스트 */}
        <section className="content">
          <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="상품명을 검색하세요." />
            <button>검색</button>
          </form>

          <ProductInfo
            title={category}
            totalText="상품수: "
            totalCount={`${serverRows.length}개`}
          />
          <ProductList rows={serverRows} />
        </section>

        {/* ✅ 오른쪽 필터 */}
        <aside className="side-filter" id="sideFilter">
          <SideFilter category={category} onFilterChange={setFilters} />
        </aside>
      </main>
    </>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  function handleRemoveFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  function handleUpdateQty(productId, delta) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  }

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
          element={
            <Notebooks onAddToCart={(p) => handleAddToCart(p, "notebook")} />
          }
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
