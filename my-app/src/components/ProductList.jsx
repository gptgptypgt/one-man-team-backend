// src/components/ProductList.jsx
export default function ProductList({ rows = [] }) {
  if (!rows.length) {
    return <p>불러올 상품이 없습니다 😥</p>;
  }

  return (
    <div className="product-list">
      {rows.map((p) => (
        <div key={p.id} className="product-card">
          <img
            src={p.image_link || "/noimg.png"}
            alt={
              p.cpu_name ||
              p.gpu_name ||
              p.md_name ||
              p.pw_name ||
              "이미지 없음"
            }
          />

          <div className="info">
            {/* ✅ 이름 */}
            <strong>
              {p.cpu_name || p.gpu_name || p.md_name || p.pw_name}
            </strong>

            {/* ✅ CPU 상세 정보 */}
            {p.cpu_name && (
              <>
                <p>제조사: {p.cpu_brand || "정보 없음"}</p>
                <p>코어 수: {p.cpu_cores || "정보 없음"}</p>
                <p>쓰레드 수: {p.cpu_thread || "정보 없음"}</p>
                <p>세대: {p.cpu_gener || "정보 없음"}</p>
                <p>소켓 수: {p.cpu_socket || "정보 없음"}</p>
                <p>가격: {p.cpu_price || "정보 없음"}</p>
              </>
            )}

            {/* ✅ GPU */}
            {p.gpu_name && (
              <>
                <p>제조사: {p.gpu_vendor || "정보 없음"}</p>
                <p>VRAM: {p.gpu_vram || "-"}</p>
                <p>칩셋: {p.gpu_chipset || "-"}</p>
                <p>시리즈: {p.gpu_series || "-"}</p>
                <p>가격: {p.gpu_price || "정보 없음"}</p>
              </>
            )}

            {/* ✅ 메인보드 */}
            {p.mb_name && (
              <>
                <p>칩셋: {p.mb_chipset || "정보 없음"}</p>
                <p>소켓: {p.mb_socket || "정보 없음"}</p>
                <p>메모리 규격: {p.mb_mem || "정보 없음"}</p>
                <p>폼팩터: {p.mb_form || "정보 없음"}</p>
                <p>가격: {p.mb_price || "정보 없음"}</p>
              </>
            )}

            {/* ✅ 파워 */}
            {p.psu_name && (
              <>
                <p>정격출력: {p.psu_watt || "정보 없음"}</p>
                <p>80Plus: {p.psu_80plus || "정보 없음"}</p>
                <p>폼팩터: {p.psu_form || "정보 없음"}</p>
                <p>케이블타입: {p.psu_cable || "정보 없음"}</p>
                <p>가격: {p.psu_price || "정보 없음"}</p>
              </>
            )}

            {/* ✅ 상품보기 링크 */}
            <a
              href={
                p.cpu_link ||
                p.gpu_link ||
                p.mb_link ||
                p.psu_link
              }
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
