import React, { useState } from "react";
import "./../login.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    id: "",          // DB의 PK (varchar 16)
    password: "",
    confirmPassword: "",
    email: "",
    studentid: "",
  });

  // 입력값 변경
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/member/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: formData.id,
          password: formData.password,
          email: formData.email,
          studentid: formData.studentid,
        }),
      });

      if (res.ok) {
        alert("✅ 회원가입이 완료되었습니다!");
        window.location.href = "/login";
      } else {
        alert("❌ 회원가입 실패. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ 서버 오류가 발생했습니다.");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="logo">PTU</h1>

        <form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <div className="row">
            <input
              type="text"
              name="id"
              placeholder="아이디 (최대 16자)"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>

          {/* 이메일 */}
          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 비밀번호 */}
          <div className="row">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* 비밀번호 확인 */}
          <div className="row">
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* 학번 */}
          <div className="row">
            <input
              type="text"
              name="studentid"
              placeholder="학번 (예: 20231234)"
              value={formData.studentid}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            회원가입
          </button>
        </form>

        <div className="links">
          <a href="/login">이미 계정이 있으신가요? 로그인</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
