const tabs = document.querySelectorAll('.tab');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // 실제 데이터 연동 전이라 내용은 그대로 비워둠
    // 이후 탭별 목록 불러오기 붙이면 됨.
  });
});

// 그룹명/관리 버튼 (데모 알림)
document.getElementById('groupManage').addEventListener('click', () => {
  alert('그룹명 관리는 추후 기능으로 연결하세요. (현재는 데모)');
});
document.getElementById('addGroup').addEventListener('click', () => {
  const name = prompt('추가할 그룹명을 입력하세요.');
  if(name){ alert(`그룹 "${name}" 이(가) 생성되었습니다. (데모)`); }
});