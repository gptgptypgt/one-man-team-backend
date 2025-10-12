document.querySelector('.ask').addEventListener('submit', (e) => {
  e.preventDefault(); // 폼 전송 막기 (선택사항)
  const input = e.currentTarget.querySelector('input');
  if (!input.value.trim()) return;
  alert('전송됨: ' + input.value.trim());
  input.value = '';
});
