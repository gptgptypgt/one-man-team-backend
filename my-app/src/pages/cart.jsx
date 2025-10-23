// Cart.jsx
import React from "react";
import "./cart.css";

export default function Cart({ cartItems = [] }) { // ✅ cartItems props 추가
  const total = cartItems.reduce((sum, item) => {
    const num = parseInt(item.price.replace(/[^\d]/g, ""), 10);
    return sum + num * (item.qty || 1);
  }, 0);

  return (
    <div className="wrap">
      <section className="cart-summary">
        <h1 className="page-title">장바구니</h1>

        {cartItems.length === 0 ? (
          <p>장바구니가 비어 있습니다.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> — {item.price} × {item.qty}
              </li>
            ))}
          </ul>
        )}

        <div className="summary-box">
          <h2>총 결제금액</h2>
          <p>선택상품 금액 <strong>{total.toLocaleString()}원</strong></p>
          <p>배송비 <strong>(+) 0원</strong></p>
          <p className="total"><strong>{total.toLocaleString()}원</strong></p>
        </div>

        <div className="buttons">
          <button type="button" className="btn-order">주문하기</button>
          <button type="button" className="btn-continue">쇼핑 계속하기</button>
        </div>
      </section>
    </div>
  );
}
