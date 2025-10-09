import { useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import CardRow from './components/CardRow.jsx'
import ProductInfo from './components/ProductInfo.jsx'
import ProductList from './components/ProductList.jsx'
import SideFilter from './components/SideFilter.jsx'
import { SAMPLE_ROWS } from './data.jsx'
import AiQuote from './pages/AiQuote.jsx'
import Misc from './pages/Misc.jsx'
import Events from './pages/Events.jsx';
import Notebooks from "./pages/Notebooks";

const CATEGORIES = ['CPU', '그래픽카드', '메인보드', '파워']

function Home() {
  const [category, setCategory] = useState('CPU')
  const rows = useMemo(() => SAMPLE_ROWS[category] ?? [], [category])

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
              className={c === category ? 'is-active' : ''}
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
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ai" element={<AiQuote/>} />
        <Route path="/misc" element={<Misc/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/notebooks" element={<Notebooks />} />
      </Routes>
      <Footer />
    </>
  )
}