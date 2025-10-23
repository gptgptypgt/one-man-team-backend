import axios from "axios"
import { useState } from "react"

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "", email: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/member/register", form)
      alert(res.data) // 백엔드가 보낸 메시지 출력
    } catch (err) {
      alert("회원가입 실패 ❌ 콘솔을 확인하세요.")
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "300px", margin: "0 auto" }}>
      <h2>회원가입</h2>
      <input name="username" placeholder="아이디" onChange={handleChange} />
      <input name="password" placeholder="비밀번호" type="password" onChange={handleChange} />
      <input name="email" placeholder="이메일" onChange={handleChange} />
      <button type="submit">회원가입</button>
    </form>
  )
}
