// Cart.jsx
import React from "react";
import "./cart.css";

export default function Cart({
  cartItems = [],
  onRemoveFromCart,
  onUpdateQty,
  onClearCart,
}) {
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
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-info">
                    <strong>{item.name}</strong> — {item.price}
                  </div>

                    {/* ✅ 수량 조정 버튼 */}
                    <div className="qty-controls">
                      <button onClick={() => onUpdateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, +1)}>+</button>
                    </div>

                    <button
                      className="btn-delete"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      ❌ 삭제
                    </button>
                </li>
              ))}
            </ul>

            <div className="summary-box">
              <h2>총 결제금액</h2>
              <p>
                선택상품 금액 <strong>{total.toLocaleString()}원</strong>
              </p>
              <p>
                배송비 <strong>(+) 0원</strong>
              </p>
              <p className="total">
                <strong>{total.toLocaleString()}원</strong>
              </p>
            </div>

            <div className="buttons">
              <button type="button" className="btn-order">
                주문하기
              </button>
              <button type="button" className="btn-continue">
                쇼핑 계속하기
              </button>
              {/* ✅ 전체 비우기 버튼 */}
              <button
                type="button"
                className="btn-clear"
                onClick={onClearCart}
              >
                전체 비우기
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
