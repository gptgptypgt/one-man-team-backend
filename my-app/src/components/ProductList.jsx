// src/components/ProductList.jsx
export default function ProductList({ rows = [] }) {
  if (!rows.length) {
    return <p>불러올 상품이 없습니다 😥</p>;
  }

  return (
    <div className="product-list">
      {rows.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image_link || "/noimg.png"} alt={p.cpu_name || p.gpu_name || p.md_name || p.pw_name || "이미지 없음"} />

          <div className="info">
            {/* ✅ 이름 */}
            <strong>
              {p.cpu_name || p.gpu_name || p.md_name || p.pw_name}
            </strong>

            {/* ✅ 브랜드 */}
            <p>
              제조사:{" "}
              {p.cpu_brand || p.gpu_vendor || p.md_brand || p.pw_brand || "정보 없음"}
            </p>

            {/* ✅ 주요 사양 */}
            <p>
              세부정보:{" "}
              {p.cpu_socke ||
                p.gpu_chipset ||
                p.md_socket ||
                p.pw_watt ||
                "-"}
            </p>

            {/* ✅ 가격 */}
            <p>
              가격:{" "}
              {p.cpu_price || p.gpu_price || p.md_price || p.pw_price || "정보 없음"}
            </p>

            {/* ✅ 링크 */}
            <a
              href={p.cpu_link || p.gpu_link || p.md_link || p.pw_link}
              target="_blank"
              rel="noreferrer"
            >
              상품보기 🔗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
