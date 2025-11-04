import { useEffect, useRef, useState } from 'react'
import Banner from '../components/Banner.jsx'
import '../ai.css'

export default function AiQuote() {
  const [messages, setMessages] = useState([]) // {id, who:'user'|'bot'|'typing', text}
  const [text, setText] = useState('')
  const logRef = useRef(null)
  const idRef = useRef(0)

  // 스크롤 항상 아래로
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [messages])

  function append(who, text) {
    setMessages(prev => [...prev, { id: ++idRef.current, who, text }])
  }

  function appendTyping() {
    const id = ++idRef.current
    setMessages(prev => [...prev, { id, who: 'typing', text: '' }])
    return id
  }

  async function ask(q) {
    const typingId = appendTyping()
    try {
      // ✅ 백엔드: GET /api/ai/recommend?input=... (문자열 반환)
      const res = await fetch(`/api/ai/recommend?input=${encodeURIComponent(q)}`, {
        method: 'GET'
      })

      let answerText
      if (res.ok) {
        answerText = (await res.text())?.trim() || '응답이 없어요.'
      } else {
        answerText = '데모 응답: 백엔드가 아직 연결되지 않았습니다.'
      }

      // typing 제거 후 답변 추가
      setMessages(prev => prev.filter(m => m.id !== typingId))
      append('bot', answerText)
    } catch (e) {
      setMessages(prev => prev.filter(m => m.id !== typingId))
      append('bot', '네트워크 오류가 발생했어요. 잠시 후 다시 시도해주세요.')
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    const v = text.trim()
    if (!v) return
    append('user', v)
    setText('')
    ask(v)
  }

  return (
    <>
      <Banner>정보통신학과 파이팅 💪</Banner>

      <section className="hero">
        <div className="wrap hero-inner">
          <h1 className="hero-title">AI <span> 견적을</span> 만나보세요</h1>
          <p className="hero-sub">질문이 구체적일수록 더 나은 답변을 얻을 수 있습니다</p>

          <form className="ask" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="무엇이든 물어보세요"
              aria-label="질문 입력"
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
            <button type="submit" aria-label="전송">↑</button>
          </form>
        </div>
      </section>

      <section className="answer">
        <div className="wrap">
          <div ref={logRef} className="chat-log" aria-live="polite" role="log">
            {messages.map(m => (
              <div key={m.id} className={`msg ${m.who === 'user' ? 'user' : 'bot'} ${m.who==='typing' ? 'typing' : ''}`}>
                <div className="bubble">
                  {m.who === 'typing' ? (
                    <>
                      <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                    </>
                  ) : (
                    m.text
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
