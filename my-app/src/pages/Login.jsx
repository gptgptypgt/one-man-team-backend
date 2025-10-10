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

        <div className="options">
          <label>
            <input type="checkbox" /> 로그인 상태 유지
          </label>
          <label>
            <input type="radio" name="memberType" defaultChecked /> 일반회원
          </label>
          <label>
            <input type="radio" name="memberType" /> 협력사 관리자
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" placeholder="아이디" required />
          </div>
          <div className="row">
            <input type="password" placeholder="비밀번호" required />
          </div>
          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>

        <div className="links">
          <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a> |{" "}
          <a href="#">회원가입</a>
        </div>

        <div className="socials">
          <a href="#" className="social">
            <img src="/네이버.png" alt="네이버 로그인" className="icon" />
            <span>네이버 로그인</span>
          </a>
          <a href="#" className="social">
            <img src="/카카오톡.png" alt="카카오 로그인" className="icon" />
            <span>카카오 로그인</span>
          </a>
          <a href="#" className="social">
            <img src="/페이스북.png" alt="페이스북 로그인" className="icon" />
            <span>페이스북 로그인</span>
          </a>
        </div>
      </section>
    </main>
  );
}
