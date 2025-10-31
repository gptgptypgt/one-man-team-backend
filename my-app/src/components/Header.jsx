// Header.jsx
import { Link, NavLink } from 'react-router-dom'

export default function Header({ cartCount = 0 }) { // ✅ cartCount props 추가
  const onSearch = (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.querySelector('input')?.value?.trim()
    if (keyword) alert(`"${keyword}" 를 검색합니다 🔍`)
    else alert('검색어를 입력하세요!')
  }

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" to="/">PTU</Link>

        <form className="top-search" onSubmit={onSearch}>
          <input type="search" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </form>

        <nav className="top-icons">
          <Link to="/login">로그인</Link>
          {/* ✅ 장바구니 개수 표시 */}
          <Link to="/cart" aria-label="cart">
            🛒 {cartCount > 0 && <span>({cartCount})</span>}
          </Link>
          <Link to="/favorites" aria-label="favorite"></Link>
        </nav>
      </div>

      <nav className="tabs">
        <div className="wrap">
          <NavLink to="/ai"   className={({isActive})=>isActive?'active':undefined}>AI견적</NavLink>
          <NavLink to="/misc" className={({isActive})=>isActive?'active':undefined}>기타기기</NavLink>
          <NavLink to="/notebooks">노트북</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/events" className={({isActive})=>isActive?'active':undefined}>이벤트</NavLink>
        </div>
      </nav>
    </header>
  )
}
