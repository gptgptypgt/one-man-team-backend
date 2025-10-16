import React from "react";
import "../login.css";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인 시도(데모)");
  };

  return (
    <main className="page">
      <section className="card" role="dialog" aria-label="PTU 로그인">
        <h1 className="logo">PTU</h1>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" placeholder="아이디" required />
          </div>
          <div className="row">
            <input type="password" placeholder="비밀번호" required />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> 로그인 상태 유지
            </label>
        </div>
          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>
        

        <div className="links">
          <a href="/signup">회원가입</a>
        </div>
      </section>
    </main>
  );
}
