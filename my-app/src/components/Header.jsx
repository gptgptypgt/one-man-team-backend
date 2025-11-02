// Header.jsx
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header({ cartCount = 0 }) { // ✅ cartCount props 추가
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // ✅ 로그인 상태 저장

  // ✅ 페이지 이동 또는 새로고침 시 로그인 상태 복원
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  // ✅ 로그인 / 로그아웃 클릭 시 동작
  const handleLoginClick = (e) => {
    e.preventDefault()
    if (isLoggedIn) {
      // 로그아웃
      localStorage.removeItem('isLoggedIn')
      setIsLoggedIn(false)
      alert('로그아웃되었습니다.')
    } else {
      // 로그인 페이지 이동
      navigate('/login')
    }
  }

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
          {/* ✅ 기존 스타일 그대로, 글자만 상태에 따라 변경 */}
          <Link to="#" onClick={handleLoginClick}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </Link>

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
