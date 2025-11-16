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
import Notebooks from "./pages/Notebooks.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./components/signup.jsx";
import Favorites from "./pages/Favorites.jsx";
import Faq from "./pages/Faq.jsx";
import Cart from "./pages/Cart.jsx";

import "./App.css";

const CATEGORIES = ["CPU", "그래픽카드", "메인보드", "파워"];
const PAGE_SIZE = 10;

/* ================================
    HOME PAGE
================================ */
function Home() {
  const [category, setCategory] = useState("CPU");
  const [filters, setFilters] = useState({});
  const [serverRows, setServerRows] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [page, setPage] = useState(1);

  /* 🔥 서버 요청 */
  useEffect(() => {
    const params = new URLSearchParams();
    params.append("category", category);

    if (searchText.trim()) params.append("search", searchText);

    Object.entries(filters).forEach(([key, values]) => {
      if (values?.length > 0) {
        params.append(key, values.join(","));
      }
    });

    const url = `http://localhost:8080/api/products?${params.toString()}`;
    console.log("요청 URL:", url);

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setServerRows(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("❌ 상품 로딩 오류:", err));
  }, [category, filters, searchText]);

  /* 필터 바뀌면 1페이지로 이동 */
  useEffect(() => {
    setPage(1);
  }, [category, filters, searchText]);

  /* 페이지 데이터 */
  const pagedRows = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return serverRows.slice(start, start + PAGE_SIZE);
  }, [serverRows, page]);

  const totalPages = Math.max(1, Math.ceil(serverRows.length / PAGE_SIZE));

  return (
    <>
      <Banner>정보통신학과 파이팅 💪</Banner>
      <CardRow />

      {/* ⭐ 페이지 전체 중앙 정렬 */}
      <div className="page-container">
        {/* ⭐ 3열 레이아웃 */}
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

          {/* 중앙 영역 */}
          <section className="content">
            {/* 검색창 */}
            <form
              className="hero-search"
              onSubmit={(e) => {
                e.preventDefault();
                setSearchText(e.target.querySelector("input").value);
              }}
            >
              <input type="search" placeholder="상품명을 검색하세요." />
              <button>검색</button>
            </form>

            {/* 상단 제목 + 상품 수 */}
            <ProductInfo
              title={category}
              totalText="상품수: "
              totalCount={`${serverRows.length}개`}
            />

            {/* ⭐ 상품만 스크롤 박스 */}
            <div className="product-scroll-box">
              <ProductList rows={pagedRows} />
            </div>

            {/* ⭐ 페이지네이션 */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  이전
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => {
                  const num = idx + 1;
                  return (
                    <button
                      key={num}
                      className={
                        num === page ? "page-number is-active" : "page-number"
                      }
                      onClick={() => setPage(num)}
                    >
                      {num}
                    </button>
                  );
                })}

                <button
                  className="page-btn"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  다음
                </button>
              </div>
            )}
          </section>

          {/* 오른쪽 필터 */}
          <aside className="side-filter" id="sideFilter">
            <SideFilter category={category} onFilterChange={setFilters} />
          </aside>

        </main>
      </div>
    </>
  );
}

/* ================================
    MAIN APP ROUTER
================================ */
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
      const exist = prev.find((i) => i.id === uniqueId);
      if (exist)
        return prev.map((i) =>
          i.id === uniqueId ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { ...product, id: uniqueId, qty: 1 }];
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
          element={<Misc onAddToCart={(p) => handleAddToCart(p, "misc")} />}
        />
        <Route
          path="/notebooks"
          element={
            <Notebooks onAddToCart={(p) => handleAddToCart(p, "notebook")} />
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onAdd={handleAddToCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
