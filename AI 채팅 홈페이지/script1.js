<script>
  document.querySelector('.ask')?.addEventListener('submit', (e)=>{
    const input = e.currentTarget.querySelector('input');
    if(!input.value.trim()) return;
    alert('전송안됨 여정민 바보: ' + input.value.trim());
    input.value = '';
  });
</script>
