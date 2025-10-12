// src/pages/Cart.jsx
import React from "react";
import "./cart.css";

export default function Cart() {
  return (
    <div className="wrap">
      <section className="cart-summary">
        <h1 className="page-title">장바구니</h1>

        <div className="summary-box">
          <h2>총 결제금액</h2>
          <p>선택상품 금액 <strong>0원</strong></p>
          <p>배송비 <strong>(+) 0원</strong></p>
          <p className="total"><strong>0원</strong></p>
        </div>

        <div className="buttons">
          <button type="button" className="btn-order">주문하기</button>
          <button type="button" className="btn-continue">쇼핑 계속하기</button>
        </div>
      </section>
    </div>
  );
}
