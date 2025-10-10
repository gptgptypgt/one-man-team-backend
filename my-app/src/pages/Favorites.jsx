import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import "./Favorites.css";

export default function Favorites() {
  const navigate = useNavigate(); // ✅ 페이지 이동 기능 준비

  const handleLoginClick = () => {
    navigate("/login"); // ✅ 로그인 페이지로 이동
  };

  return (
    <main className="favorites-wrap">
      <div className="container">
        {/* 왼쪽 사이드 메뉴 */}
        <aside className="sidebar">
          <h2 className="brand">SHOP <b>PTU</b></h2>

          <div className="card">
            <h3>나의 쇼핑내역</h3>
            <p className="login-text">로그인이 필요합니다</p>
            <button className="login-btn" onClick={handleLoginClick}>로그인</button>
          </div>

          <div className="card">
            <h3>나의 쇼핑내역</h3>
            <ul>
              <li>주문/배송 조회</li>
              <li>현금영수증/세금계산서</li>
            </ul>
          </div>

          <div className="card">
            <h3>관심목록</h3>
            <ul>
              <li className="active">관심상품</li>
            </ul>
          </div>
        </aside>

        {/* 오른쪽 콘텐츠 */}
        <section className="favorites-content">
          <h3 className="title">관심상품</h3>
          <p className="count">관심상품 수 : <b>0</b></p>

          <table className="fav-table">
            <thead>
              <tr>
                <th>이미지</th>
                <th>상품명</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="empty">
                  현재 저장된 관심상품이 없습니다.
                </td>
              </tr>
            </tbody>
          </table>

          <footer className="ptu-footer">© PTU InfoCom</footer>
        </section>
      </div>
    </main>
  );
}
