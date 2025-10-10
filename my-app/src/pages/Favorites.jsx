import React from "react";
import "../style.css"; // 기존 CSS 그대로 사용

export default function Favorites() {
  return (
    <div className="favorites-page">
      {/* 상단 헤더 */}
      <header className="site-header">
        <div className="wrap header-row">
          <a className="brand" href="#">
            {/* <img src="ptu_logo.png" alt="SHOP PTU" /> */}
            <span className="brand-mark">
              SHOP <b>PTU</b>
            </span>
          </a>

          <nav className="top-helpers">
            <a href="#" className="helper">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* 페이지 전체 레이아웃 */}
      <main className="wrap layout">
        {/* 왼쪽 사이드 */}
        <aside className="sidebar">
          <section className="card profile">
            <h2 className="card-title">나의 쇼핑내역</h2>

            <div className="profile-box">
              <div className="user-id">로그인이 필요합니다</div>
              {/* 나중에 로그인 페이지 연결 */}
              <a href="/login" className="alt-btn">
                로그인
              </a>
            </div>
          </section>

          <section className="card menu">
            <h3 className="menu-title">나의 쇼핑내역</h3>
            <ul className="menu-list">
              <li>
                <a href="#">주문/배송 조회</a>
              </li>
              <li>
                <a href="#">현금영수증/세금계산서</a>
              </li>
            </ul>
          </section>

          <section className="card menu">
            <h3 className="menu-title">관심목록</h3>
            <ul className="menu-list">
              <li>
                <a href="#" className="link-strong">
                  관심상품
                </a>
              </li>
            </ul>
          </section>
        </aside>

        {/* 메인 콘텐츠 */}
        <section className="content">
          <h2 className="content-title">관심상품</h2>

          {/* 리스트 헤더 & 테이블 */}
          <div className="list-head">
            <div>
              관심상품 수 : <strong id="count">0</strong>
            </div>
          </div>

          <div className="table">
            <div className="table-head">
              <div className="col col-img">이미지</div>
              <div className="col col-name">상품명</div>
              <div className="col col-price">금액</div>
            </div>
            <div className="table-body" id="listBody">
              <div className="empty">현재 저장된 관심상품이 없습니다.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
