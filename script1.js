<script>
  document.querySelector('.ask')?.addEventListener('submit', (e)=>{
    const input = e.currentTarget.querySelector('input');
    if(!input.value.trim()) return;
    alert('전송됨: ' + input.value.trim());
    input.value = '';
  });
</script>
