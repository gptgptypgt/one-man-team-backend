// ✅ src/components/SideFilter.jsx
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

            {/* ✅ 코어 수 */}
            <div className="filter-group">
              <h5>코어 수</h5>
              <div className="grid">
                {[4, 6, 8, 10, 12, 16].map((c) => (
                  <label key={c}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.core?.includes(c) || false}
                      onChange={(e) => handleChange("core", c, e.target.checked)}
                    />
                    {c}코어
                  </label>
                ))}
              </div>
            </div>

            {/* ✅ 세대 필터 추가 */}
            <div className="filter-group">
              <h5>세대</h5>
              <div className="grid">
                {["10세대", "11세대", "12세대", "13세대", "14세대", "Ryzen 5000", "Ryzen 7000"].map((g) => (
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
          </>
        );

      /* ---------------- 그래픽카드 ---------------- */
      case "그래픽카드":
        return (
          <>
            <h4>옵션 선택</h4>

            <div className="filter-group">
              <h5>칩셋 제조사</h5>
              <div className="grid">
                {["NVIDIA", "AMD", "Intel"].map((v) => (
                  <label key={v}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.vendor?.includes(v) || false}
                      onChange={(e) =>
                        handleChange("vendor", v, e.target.checked)
                      }
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h5>VRAM 용량</h5>
              <div className="grid">
                {[8, 12, 16, 24].map((v) => (
                  <label key={v}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.vram?.includes(v) || false}
                      onChange={(e) =>
                        handleChange("vram", v, e.target.checked)
                      }
                    />
                    {v}GB
                  </label>
                ))}
              </div>
            </div>
          </>
        );

      /* ---------------- 메인보드 ---------------- */
      case "메인보드":
        return (
          <>
            <h4>옵션 선택</h4>

            <div className="filter-group">
              <h5>소켓 규격</h5>
              <div className="grid">
                {["AM5", "AM4", "LGA1700"].map((s) => (
                  <label key={s}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.socket?.includes(s) || false}
                      onChange={(e) =>
                        handleChange("socket", s, e.target.checked)
                      }
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h5>폼팩터</h5>
              <div className="grid">
                {["ATX", "M-ATX", "ITX"].map((f) => (
                  <label key={f}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.form?.includes(f) || false}
                      onChange={(e) =>
                        handleChange("form", f, e.target.checked)
                      }
                    />
                    {f}
                  </label>
                ))}
              </div>
            </div>
          </>
        );

      /* ---------------- 파워 ---------------- */
      case "파워":
        return (
          <>
            <h4>옵션 선택</h4>

            <div className="filter-group">
              <h5>정격 출력</h5>
              <div className="grid">
                {[600, 700, 850, 1000].map((w) => (
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

            <div className="filter-group">
              <h5>케이블 타입</h5>
              <div className="grid">
                {["케이블일체형", "풀모듈러", "세미모듈러"].map((c) => (
                  <label key={c}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.cable?.includes(c) || false}
                      onChange={(e) =>
                        handleChange("cable", c, e.target.checked)
                      }
                    />
                    {c}
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
