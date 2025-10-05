// 검색창 이벤트
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".top-search");
  const searchInput = searchForm.querySelector("input");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 새로고침 방지
    const keyword = searchInput.value.trim();
    if (keyword) {
      alert(`"${keyword}" 를 검색합니다 🔍`);
      // 실제로는 검색 페이지 이동 or API 호출
      // location.href = `/search?query=${encodeURIComponent(keyword)}`;
    } else {
      alert("검색어를 입력하세요!");
    }
  });

  // 로그인 버튼 이벤트
  const loginBtn = document.querySelector(".top-icons a");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("로그인 창을 띄우는 기능을 여기에 구현하세요 👤");
      // 실제로는 모달 열기, 로그인 페이지 이동 등
    });
  }

  // 탭 메뉴 클릭 시 하이라이트 효과
  const tabs = document.querySelectorAll(".tabs a");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
