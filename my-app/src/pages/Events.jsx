import { useEffect, useMemo, useState } from "react";
import "./events.css";
const IMG_BASE = "/event";

const onImgError = (e) => {
  e.currentTarget.classList.add("img-fallback");
};


/* ===== 1) 데이터 (썸네일은 public/events/.. 에서 직접 <img src>로 로드) ===== */
const DATA = [
  { id:1,  thumb:"event1.png",  title:"게이밍 노트북 구매 고객 한정 사은품 증정", brand:"PTU컴퍼니", start:"2025-09-20", end:"2025-10-20", views:921,  comments:18, benefits:["gift"],          status:"ongoing" },
  { id:2,  thumb:"event2.png",  title:"그래픽카드 특가! 한정 수량 얼리버드",       brand:"GreenTech",  start:"2025-09-28", end:"2025-10-05", views:1241, comments:33, benefits:["sale"],          status:"ended"   },
  { id:3,  thumb:"event3.png",  title:"SSD 구매 시 적립금 5% 페이백",              brand:"PTU컴퍼니",   start:"2025-09-25", end:"2025-10-31", views:722,  comments:12, benefits:["point"],         status:"ongoing" },
  { id:4,  thumb:"event4.png",  title:"CPU 업그레이드 응모 이벤트",                 brand:"CoreMax",     start:"2025-09-02", end:"2025-09-30", views:1883, comments:77, benefits:["gift","point"], status:"ended"   },
  { id:5,  thumb:"event5.png",  title:"모니터 대전: 주말 한정 파격 할인",           brand:"ViewPlus",    start:"2025-10-01", end:"2025-10-06", views:531,  comments:9,  benefits:["sale"],          status:"ongoing" },
  { id:6,  thumb:"event6.png",  title:"키보드/마우스 세트 구매 시 전용 파우치 증정", brand:"PTU컴퍼니",   start:"2025-09-10", end:"2025-11-01", views:389,  comments:6,  benefits:["gift"],          status:"ongoing" },
  { id:7,  thumb:"event7.png",  title:"올인원 PC 댓글 참여 이벤트",                 brand:"GreenTech",   start:"2025-08-31", end:"2025-09-07", views:2103, comments:112,benefits:["point"],         status:"ended"   },
  { id:8,  thumb:"event8.png",  title:"수험생 특별전: 본체 구매 7% 즉시할인",        brand:"CoreMax",     start:"2025-10-02", end:"2025-10-15", views:841,  comments:19, benefits:["sale","point"], status:"ongoing" },
  { id:9,  thumb:"event9.png",  title:"PTU 가을맞이 굿즈 추첨",                     brand:"PTU컴퍼니",   start:"2025-09-18", end:"2025-10-03", views:466,  comments:15, benefits:["gift"],          status:"ended"   },
  { id:10, thumb:"event10.png", title:"파워서플라이 런칭 기념 참여형 이벤트",        brand:"PowerBee",    start:"2025-09-27", end:"2025-10-18", views:612,  comments:22, benefits:["gift","sale"], status:"ongoing" },
  { id:11, thumb:"event11.png", title:"RAM 페스티벌 댓글 이벤트 (경품 다수)",        brand:"Memoria",     start:"2025-09-01", end:"2025-10-04", views:1502, comments:81, benefits:["gift"],          status:"ended"   },
  { id:12, thumb:"event12.png", title:"케이스 구매고객 3% 페이백 + 사은품",          brand:"ViewPlus",    start:"2025-09-29", end:"2025-10-25", views:390,  comments:7,  benefits:["gift","point"], status:"ongoing" },
];

/* ===== 2) 유틸 ===== */
const SAVED_KEY = "ptu_saved_events";
const fmt = (n) => n.toLocaleString("ko-KR");
const daysLeft = (it) => Math.ceil((new Date(it.end) - new Date()) / 86400000);
const isImminent = (it) => it.status === "ongoing" && daysLeft(it) >= 0 && daysLeft(it) <= 3;

// 이미지 로딩 실패 시 플레이스홀더로 대체 (public/events/placeholder.png 준비 시)

const genCode = (item) => {
  const seed = `${item.id}-${item.brand}-${item.end}-${Date.now()}`;
  let h = 0; for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = ""; for (let i = 0; i < 12; i++) code += alphabet[(h >> (i * 2)) % alphabet.length];
  return code.replace(/(.{4})/g, "$1-").replace(/-$/, "");
};

export default function Events() {
  /* ---- 상태 ---- */
  const [tab, setTab] = useState("all");            // all | ongoing | ended
  const [sort, setSort] = useState("recent");       // recent | endSoon | popular | comments
  const [brand, setBrand] = useState("all");
  const [benefit, setBenefit] = useState({ gift:false, point:false, sale:false });
  const [page, setPage] = useState(1);
  const perPage = 9;

  const [saved, setSaved] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(SAVED_KEY) || "[]")); }
    catch { return new Set(); }
  });
  useEffect(() => localStorage.setItem(SAVED_KEY, JSON.stringify([...saved])), [saved]);

  /* ---- 파생 값 ---- */
  const brands = useMemo(
    () => ["all", ...Array.from(new Set(DATA.map(d => d.brand))).sort()],
    []
  );

  const filtered = useMemo(() => {
    let list = [...DATA];
    if (tab !== "all") list = list.filter(d => d.status === tab);
    if (brand !== "all") list = list.filter(d => d.brand === brand);

    const need = Object.entries(benefit).filter(([,v]) => v).map(([k]) => k);
    if (need.length) list = list.filter(d => need.every(k => d.benefits.includes(k)));

    switch (sort) {
      case "recent":   list.sort((a,b)=> new Date(b.start)-new Date(a.start)); break;
      case "endSoon":  list = list.filter(d=>d.status==="ongoing").sort((a,b)=> new Date(a.end)-new Date(b.end)); break;
      case "popular":  list.sort((a,b)=> b.views-a.views); break;
      case "comments": list.sort((a,b)=> b.comments-a.comments); break;
      default: break;
    }
    return list;
  }, [tab, sort, brand, benefit]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);
  useEffect(() => setPage(1), [tab, sort, brand, benefit]);

  /* ---- 액션 ---- */
  const toggleSave = (id) => {
    setSaved(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const downloadCoupon = (item) => {
    if (item.status !== "ongoing") { alert("종료된 이벤트입니다."); return; }
    const content = [
      "PTU EVENT COUPON","-----------------",
      `제목: ${item.title}`,`브랜드: ${item.brand}`,
      `기간: ${item.start} ~ ${item.end}`,
      `쿠폰코드: ${genCode(item)}`,"","※ 데모용 쿠폰 파일입니다."
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ptu-coupon-${item.id}.txt`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(a.href);
  };

  /* ---- 카운트 ---- */
  const cntAll = DATA.length;
  const cntOn  = DATA.filter(d=>d.status==="ongoing").length;
  const cntOff = DATA.filter(d=>d.status==="ended").length;

  return (
    <div className="events">
      <div className="wrap">
        <div className="page-title"><h1>ptu 이벤트 쿠폰함</h1></div>

        {/* 상단 도구줄 */}
        <div className="toolbar">
          <div className="seg-tabs" id="tabs">
            <button className={`tab ${tab==="all" ? "active" : ""}`} onClick={()=>setTab("all")}>
                전체 ({cntAll})
            </button>
  <button className={`tab ${tab==="ongoing" ? "active" : ""}`} onClick={()=>setTab("ongoing")}>
    진행중 ({cntOn})
  </button>
  <button className={`tab ${tab==="ended" ? "active" : ""}`} onClick={()=>setTab("ended")}>
    종료 ({cntOff})
  </button>

          </div>

          <div className="tools">
            <div className="select">
              <select value={sort} onChange={(e)=>setSort(e.target.value)} id="sort">
                <option value="recent">정렬: 최신순</option>
                <option value="endSoon">마감임박</option>
                <option value="popular">조회수순</option>
                <option value="comments">댓글순</option>
              </select>
            </div>
          </div>
        </div>

        {/* 필터 */}
        <div className="filters">
          <span className="badge">
            브랜드&nbsp;
            <select
              id="brand"
              value={brand}
              onChange={(e)=>setBrand(e.target.value)}
              style={{ border:0, outline:0, marginLeft:6 }}
            >
              {brands.map(b => <option key={b} value={b}>{b==="all"?"전체":b}</option>)}
            </select>
          </span>

          <label className="badge">
            <input type="checkbox" checked={benefit.gift}
              onChange={(e)=>setBenefit({ ...benefit, gift:e.target.checked })} />
            &nbsp;사은품
          </label>
          <label className="badge">
            <input type="checkbox" checked={benefit.point}
              onChange={(e)=>setBenefit({ ...benefit, point:e.target.checked })} />
            &nbsp;적립금
          </label>
          <label className="badge">
            <input type="checkbox" checked={benefit.sale}
              onChange={(e)=>setBenefit({ ...benefit, sale:e.target.checked })} />
            &nbsp;할인
          </label>
        </div>

        {/* 목록 / 빈 상태 */}
        {filtered.length === 0 ? (
          <div className="empty">조건에 맞는 이벤트가 없습니다.</div>
        ) : (
          <>
            <div className="grid">
              {pageItems.map(it => {
                const on = it.status === "ongoing";
                const left = daysLeft(it);
                const imminent = isImminent(it);
                const isSaved = saved.has(it.id);

                return (

// … map(it => { … }) 내부 카드 렌더링
<article className="card" key={it.id}>
  <div className="thumb">
    <img
      src={`${IMG_BASE}/${it.thumb}`}   // 예: /event/event1.png
      alt={it.title}
      loading="lazy"
      onError={onImgError}
    />
    <span className={`state ${on ? 'on' : 'off'}`}>
      {on ? '진행중' : '종료'}
    </span>
    {imminent && <span className="due">임박</span>}
  </div>

  <div className="body">
    <div className="ttl">{it.title}</div>

    <div className="meta">
      <span>{it.brand}</span><span>·</span>
      <span>
        {it.start} ~ {it.end}
        {on && left >= 0 ? ` (D-${left})` : ""}
      </span>
      {isSaved && <span className="saved-badge">· 보관됨</span>}
    </div>

    <div className="tags">
      {it.benefits.includes('gift')  && <span className="tag gift">사은품</span>}
      {it.benefits.includes('point') && <span className="tag point">적립금</span>}
      {it.benefits.includes('sale')  && <span className="tag sale">할인</span>}
    </div>

    {/* 아래 액션/푸터는 기존 그대로 */}



                      <div className="footer">
                        <div className="stats">
                          <span>조회 {fmt(it.views)}</span>
                          <span>댓글 {fmt(it.comments)}</span>
                        </div>
                        <div className="actions">
                          <button
                            className={`icon-btn ${isSaved ? "saved" : ""}`}
                            aria-pressed={isSaved ? "true" : "false"}
                            onClick={()=>toggleSave(it.id)}
                          >
                            {isSaved ? "보관됨" : "보관"}
                          </button>
                          <button
                            className="btn primary"
                            onClick={()=>downloadCoupon(it)}
                            disabled={!on}
                            aria-disabled={!on ? "true" : "false"}
                          >
                            쿠폰 받기
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="paging">
                <button className="page-btn" onClick={()=>setPage(p=>Math.max(1,p-1))}>‹</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(i => (
                  <button
                    key={i}
                    className={`page-btn ${i===page ? "active" : ""}`}
                    onClick={()=>setPage(i)}
                  >
                    {i}
                  </button>
                ))}
                <button className="page-btn" onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>›</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
