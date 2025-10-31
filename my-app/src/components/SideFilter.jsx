import { useState, useEffect } from "react";

export default function SideFilter({ category, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleChange = (group, value, checked) => {
    setSelectedFilters((prev) => {
      const groupValues = new Set(prev[group] || []);
      if (checked) groupValues.add(value);
      else groupValues.delete(value);
      return { ...prev, [group]: Array.from(groupValues) };
    });
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);

  // ✅ 카테고리별 필터 항목 구성
  const renderFilterGroups = () => {
    switch (category) {
      case "CPU":
        return (
          <>
            <h4>옵션 선택</h4>
            <div className="filter-group">
              <h5>제조사</h5>
              <div className="grid">
                {["Intel", "AMD"].map((b) => (
                  <label key={b}>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleChange("brand", b, e.target.checked)
                      }
                    />
                    {b}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h5>코어 수</h5>
              <div className="grid">
                {[4, 6, 8, 10, 12, 16].map((c) => (
                  <label key={c}>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleChange("core", c, e.target.checked)
                      }
                    />
                    {c}코어
                  </label>
                ))}
              </div>
            </div>
          </>
        );

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
                      onChange={(e) =>
                        handleChange("watt", w, e.target.checked)
                      }
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

      default:
        return <p>필터를 선택하세요</p>;
    }
  };

  return <>{renderFilterGroups()}</>;
}
