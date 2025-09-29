<script>
  document.querySelector('.filter-foot .toggle')?.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-group').forEach(g=>{
      g.style.display = (g.style.display === 'none') ? '' : 'none';
    });
  });
  document.querySelector('.all-options')?.addEventListener('click', ()=>{
    // “옵션 전체보기” 클릭 시 스크롤 이동 정도만
    document.querySelector('.filter-panel').scrollIntoView({behavior:'smooth'});
  });
</script>
