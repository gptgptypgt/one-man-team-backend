import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const onSearch = (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.querySelector('input')?.value?.trim()
    if (keyword) alert(`"${keyword}" 를 검색합니다 🔍`)
    else alert('검색어를 입력하세요!')
  }
  const onLogin = (e) => {
    e.preventDefault()
    alert('로그인 창을 띄우는 기능을 여기에 구현하세요 👤')
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
          <a href="/cart" aria-label="cart">🛒</a>
          <Link to="/favorites" aria-label="favorite">⭐</Link>
        </nav>
      </div>

      <nav className="tabs">
        <div className="wrap">
          <NavLink to="/ai"   className={({isActive})=>isActive?'active':undefined}>AI견적</NavLink>
          <NavLink to="/misc" className={({isActive})=>isActive?'active':undefined}>기타기기</NavLink>
          <NavLink to="/notebooks">노트북</NavLink>
          <a href="#">FAQ</a>
          <NavLink to="/events" className={({isActive})=>isActive?'active':undefined}>이벤트</NavLink>
        </div>
      </nav>
    </header>
  )
}
