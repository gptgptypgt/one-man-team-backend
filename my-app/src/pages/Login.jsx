// ✅ Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css"; // 스타일 파일 연결

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ 로그인 요청 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/member/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });

      const data = await res.text();

      if (res.ok) {
        alert("로그인 성공!");
        navigate("/"); // 메인 페이지로 이동
      } else {
        alert("로그인 실패: " + data);
      }
    } catch (err) {
      console.error("로그인 요청 오류:", err);
      alert("서버 연결 오류");
    }
  };

  return (
    <main className="page">
      <section className="card" role="dialog" aria-label="PTU 로그인">
        <h1 className="logo">PTU</h1>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
          {/* ✅ 회원가입 페이지로 이동 */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            회원가입
          </a>
        </div>
      </section>
    </main>
  );
}
