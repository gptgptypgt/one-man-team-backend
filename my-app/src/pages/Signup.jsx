// src/pages/Signup.jsx
import { useState } from "react";
import axios from "axios";
import "../ai.css"; // ✅ 기존 PTU 스타일 공통 CSS (배경/폰트 등)

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/member/register", form);
      alert("회원가입이 완료되었습니다!");
      setForm({ username: "", password: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("회원가입 실패 😢");
    }
  };

  return (
    <div className="wrap" style={{ maxWidth: 500, margin: "60px auto" }}>
      <h1 style={{ color: "var(--green)", textAlign: "center", fontWeight: "900" }}>
        회원가입
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "30px",
        }}
      >
        <label style={{ fontWeight: 600 }}>아이디</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="아이디를 입력하세요"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        />

        <label style={{ fontWeight: 600 }}>비밀번호</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        />

        <label style={{ fontWeight: 600 }}>이메일</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "8px",
            background: "var(--green)",
            color: "#fff",
            fontWeight: "700",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          회원가입 완료
        </button>
      </form>
    </div>
  );
}
