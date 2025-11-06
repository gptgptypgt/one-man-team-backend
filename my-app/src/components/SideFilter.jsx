import { useState, useEffect } from "react";

export default function SideFilter({ category, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  // ✅ 체크박스 클릭 시 필터 상태 갱신
  const handleChange = (group, value, checked) => {
    setSelectedFilters((prev) => {
      const groupValues = new Set(prev[group] || []);
      if (checked) groupValues.add(value);
      else groupValues.delete(value);
      return { ...prev, [group]: Array.from(groupValues) };
    });
  };

  // ✅ 필터 상태가 바뀔 때마다 부모(App.jsx)로 전달
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);

  // ✅ 카테고리 바뀔 때 기존 필터 초기화
  useEffect(() => {
    setSelectedFilters({});
  }, [category]);

  // ✅ 카테고리별 필터 그룹 구성
  const renderFilterGroups = () => {
    switch (category) {
      /* ---------------- CPU ---------------- */
      /* ---------------- CPU ---------------- */
case "CPU":
  return (
    <>
      <h4>옵션 선택</h4>

      {/* ✅ 제조사 */}
      <div className="filter-group">
        <h5>제조사</h5>
        <div className="grid">
          {["Intel", "AMD"].map((b) => (
            <label key={b}>
              <input
                type="checkbox"
                checked={selectedFilters.brand?.includes(b) || false}
                onChange={(e) => handleChange("brand", b, e.target.checked)}
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 세대 */}
      <div className="filter-group">
        <h5>세대</h5>
        <div className="grid">
          {[
            "2세대",
            "4세대",
            "5세대",
            "6세대",
            "12세대",
            "14세대"
          ].map((g) => (
            <label key={g}>
              <input
                type="checkbox"
                checked={selectedFilters.gener?.includes(g) || false}
                onChange={(e) => handleChange("gener", g, e.target.checked)}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 소켓 */}
      <div className="filter-group">
        <h5>소켓</h5>
        <div className="grid">
          {["LGA1700", "LGA1200", "AM5", "AM4", "TR4"].map((s) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={selectedFilters.socket?.includes(s) || false}
                onChange={(e) => handleChange("socket", s, e.target.checked)}
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 코어 수 */}
      <div className="filter-group">
        <h5>코어 수</h5>
        <div className="grid">
          {[4, 6, 8, 10, 12, 16].map((c) => (
            <label key={c}>
              <input
                type="checkbox"
                checked={selectedFilters.cores?.includes(c) || false}
                onChange={(e) => handleChange("cores", c, e.target.checked)}
              />
              {c}코어
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 쓰레드 수 */}
      <div className="filter-group">
        <h5>쓰레드 수</h5>
        <div className="grid">
          {[8, 12, 16, 20, 24, 32].map((t) => (
            <label key={t}>
              <input
                type="checkbox"
                checked={selectedFilters.thread?.includes(t) || false}
                onChange={(e) => handleChange("thread", t, e.target.checked)}
              />
              {t}스레드
            </label>
          ))}
        </div>
      </div>
    </>
  );


      /* ---------------- 그래픽카드 ---------------- */
      /* ---------------- 그래픽카드 ---------------- */
case "그래픽카드":
  return (
    <>
      <h4>옵션 선택</h4>

      {/* ✅ 제조사 */}
      <div className="filter-group">
        <h5>제조사</h5>
        <div className="grid">
          {[
            "NVIDIA", "AMD"
          ].map((v) => (
            <label key={v}>
              <input
                type="checkbox"
                checked={selectedFilters.vendor?.includes(v) || false}
                onChange={(e) => handleChange("vendor", v, e.target.checked)}
              />
              {v}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ VRAM 용량 */}
      <div className="filter-group">
        <h5>VRAM 용량</h5>
        <div className="grid">
          {["32GB", "16GB", "12GB", "8GB", "6GB"].map((v) => (
            <label key={v}>
              <input
                type="checkbox"
                checked={selectedFilters.vram?.includes(v) || false}
                onChange={(e) => handleChange("vram", v, e.target.checked)}
              />
              {v}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 칩셋 */}
      <div className="filter-group">
        <h5>칩셋</h5>
        <div className="grid">
          {[
            "RTX 4090", "RTX 4080 SUPER", "RTX 4070 Ti",
            "RTX 4070", "RTX 4060 Ti", "RTX 4060",
            "RX 7900 XTX", "RX 7900 XT", "RX 7800 XT", "RX 7700 XT"
          ].map((c) => (
            <label key={c}>
              <input
                type="checkbox"
                checked={selectedFilters.chipset?.includes(c) || false}
                onChange={(e) => handleChange("chipset", c, e.target.checked)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 시리즈 */}
      <div className="filter-group">
        <h5>시리즈</h5>
        <div className="grid">
          {[
            "GeForce RTX 40 Series",
            "GeForce RTX 30 Series",
            "Radeon RX 7000 Series",
            "Radeon RX 6000 Series"
          ].map((s) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={selectedFilters.series?.includes(s) || false}
                onChange={(e) => handleChange("series", s, e.target.checked)}
              />
              {s}
            </label>
          ))}
        </div>
      </div>
    </>
  );


      /* ---------------- 메인보드 ---------------- */
      /* ---------------- 메인보드 ---------------- */
case "메인보드":
  return (
    <>
      <h4>옵션 선택</h4>

      {/* ✅ 칩셋 */}
      <div className="filter-group">
        <h5>칩셋</h5>
        <div className="grid">
          {[
            "B660",
            "B760",
            "Z690",
            "Z790",
            "A620",
            "B650",
            "X670",
            "X670E",
            "A520"
          ].map((c) => (
            <label key={c}>
              <input
                type="checkbox"
                checked={selectedFilters.chipset?.includes(c) || false}
                onChange={(e) => handleChange("chipset", c, e.target.checked)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 소켓 */}
      <div className="filter-group">
        <h5>소켓</h5>
        <div className="grid">
          {["LGA1700", "LGA1200", "AM5", "AM4"].map((s) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={selectedFilters.socket?.includes(s) || false}
                onChange={(e) => handleChange("socket", s, e.target.checked)}
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 메모리 지원 */}
      <div className="filter-group">
        <h5>메모리 규격</h5>
        <div className="grid">
          {["DDR4", "DDR5"].map((m) => (
            <label key={m}>
              <input
                type="checkbox"
                checked={selectedFilters.memory?.includes(m) || false}
                onChange={(e) => handleChange("memory", m, e.target.checked)}
              />
              {m}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 폼팩터 */}
      <div className="filter-group">
        <h5>폼팩터</h5>
        <div className="grid">
          {["ATX", "M-ATX", "ITX"].map((f) => (
            <label key={f}>
              <input
                type="checkbox"
                checked={selectedFilters.form?.includes(f) || false}
                onChange={(e) => handleChange("form", f, e.target.checked)}
              />
              {f}
            </label>
          ))}
        </div>
      </div>
    </>
  );


      /* ---------------- 파워 ---------------- */
      /* ---------------- 파워 ---------------- */
case "파워":
  return (
    <>
      <h4>옵션 선택</h4>

      {/* ✅ 정격 출력 */}
      <div className="filter-group">
        <h5>정격 출력</h5>
        <div className="grid">
          {[600, 700, 850, 1000, 1200].map((w) => (
            <label key={w}>
              <input
                type="checkbox"
                checked={selectedFilters.watt?.includes(w) || false}
                onChange={(e) => handleChange("watt", w, e.target.checked)}
              />
              {w}W
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 80PLUS 인증 */}
      <div className="filter-group">
        <h5>80PLUS 인증</h5>
        <div className="grid">
          {["Bronze", "Silver", "Gold", "Platinum", "Titanium"].map((grade) => (
            <label key={grade}>
              <input
                type="checkbox"
                checked={selectedFilters.efficiency?.includes(grade) || false}
                onChange={(e) => handleChange("efficiency", grade, e.target.checked)}
              />
              {grade}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 폼팩터 */}
      <div className="filter-group">
        <h5>폼팩터</h5>
        <div className="grid">
          {["ATX", "SFX"].map((form) => (
            <label key={form}>
              <input
                type="checkbox"
                checked={selectedFilters.form?.includes(form) || false}
                onChange={(e) => handleChange("form", form, e.target.checked)}
              />
              {form}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ 케이블 타입 */}
      <div className="filter-group">
        <h5>케이블 타입</h5>
        <div className="grid">
          {["케이블일체형", "풀모듈러", "세미모듈러"].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={selectedFilters.cable?.includes(type) || false}
                onChange={(e) => handleChange("cable", type, e.target.checked)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </>
  );


      /* ---------------- 기본 ---------------- */
      default:
        return <p>필터를 선택하세요</p>;
    }
  };

  return <>{renderFilterGroups()}</>;
}
