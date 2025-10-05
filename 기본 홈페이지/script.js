/* -----------------------------
   1) 오른쪽 옵션 템플릿 (카테고리별)
------------------------------*/
var FILTER_TEMPLATES = {
  "CPU": `
    <h4>옵션 선택</h4>
    <div class="filter-group">
      <h5>제조사</h5>
      <div class="grid">
        <label><input type="checkbox"> 인텔</label>
        <label><input type="checkbox"> AMD</label>
      </div>
    </div>
    <div class="filter-group">
      <h5>인텔 CPU 구분</h5>
      <div class="grid">
        <label><input type="checkbox"> 코어 i9</label>
        <label><input type="checkbox"> 코어 i7</label>
        <label><input type="checkbox"> 코어 i5</label>
        <label><input type="checkbox"> 코어 i3</label>
        <label><input type="checkbox"> 펜티엄/셀러론</label>
      </div>
    </div>
    <div class="filter-group">
      <h5>AMD CPU 세대</h5>
      <div class="grid">
        <label><input type="checkbox"> 라이젠 8(5세대)</label>
        <label><input type="checkbox"> 라이젠 7(5세대)</label>
        <label><input type="checkbox"> 라이젠 5(5세대)</label>
        <label><input type="checkbox"> 라이젠 7(4세대)</label>
        <label><input type="checkbox"> 라이젠 5(4세대)</label>
        <label><input type="checkbox"> 라이젠 3</label>
      </div>
    </div>
    <div class="filter-group">
      <h5>소켓 규격</h5>
      <div class="grid">
        <label><input type="checkbox"> LGA1700</label>
        <label><input type="checkbox"> LGA1200</label>
        <label><input type="checkbox"> AM5</label>
        <label><input type="checkbox"> AM4</label>
      </div>
    </div>
    <div class="filter-group">
      <h5>코어 수</h5>
      <div class="grid">
        <label><input type="checkbox"> 32코어</label>
        <label><input type="checkbox"> 24코어</label>
        <label><input type="checkbox"> 16코어</label>
        <label><input type="checkbox"> 12코어</label>
        <label><input type="checkbox"> 10코어</label>
        <label><input type="checkbox"> 8코어</label>
        <label><input type="checkbox"> 6코어</label>
        <label><input type="checkbox"> 4코어</label>
      </div>
    </div>
  `,

  "그래픽카드": `
    <h4>옵션 선택</h4>
    <div class="filter-group">
      <h4>제조사</h4>
      <div class="grid">
        <label><input type="checkbox"> MSI</label>
        <label><input type="checkbox"> PALIT</label>
        <label><input type="checkbox"> GIGABYTE</label>
        <label><input type="checkbox"> ASUS</label>
        <label><input type="checkbox"> 이엠텍</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>칩셋 제조사</h4>
      <div class="grid">
        <label><input type="checkbox"> NVIDIA</label>
        <label><input type="checkbox"> AMD(ATI)</label>
        <label><input type="checkbox"> Intel</label>
        <label><input type="checkbox"> FuriosaAI</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>제품 시리즈</h4>
      <div class="grid">
        <label><input type="checkbox"> 지포스 RTX 50</label>
        <label><input type="checkbox"> 지포스 RTX 40</label>
        <label><input type="checkbox"> 지포스 RTX 30</label>
        <label><input type="checkbox"> 라데온 RX 9000</label>
        <label><input type="checkbox"> 라데온 RX 7000</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>GPU 제조 공정</h4>
      <div class="grid">
        <label><input type="checkbox"> 4 nm</label>
        <label><input type="checkbox"> 8 nm</label>
        <label><input type="checkbox"> 12 nm</label>
        <label><input type="checkbox"> 14 nm</label>
        <label><input type="checkbox"> 16 nm</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>NVIDIA 칩셋</h4>
      <div class="grid">
        <label><input type="checkbox"> RTX 5090</label>
        <label><input type="checkbox"> RTX 5080</label>
        <label><input type="checkbox"> RTX 5070 Ti</label>
        <label><input type="checkbox"> RTX 5070</label>
        <label><input type="checkbox"> RTX 5060 Ti</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>AMD 칩셋</h4>
      <div class="grid">
        <label><input type="checkbox"> RX 9070 XT</label>
        <label><input type="checkbox"> RX 9070</label>
        <label><input type="checkbox"> RX 9060 XT</label>
        <label><input type="checkbox"> RX 7600</label>
        <label><input type="checkbox"> RX 7900 XTX</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>인텔 칩셋</h4>
      <div class="grid">
        <label><input type="checkbox"> ARC B580</label>
        <label><input type="checkbox"> ARC B570</label>
        <label><input type="checkbox"> ARC A750</label>
        <label><input type="checkbox"> ARC A380</label>
        <label><input type="checkbox"> ARC A310</label>
      </div>
    </div>
  `,

  "메인보드": `
    <h4>옵션 선택</h4>
    <div class="filter-group">
      <h4>제조사 <span class="muted">32개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> MSI</label>
        <label><input type="checkbox"> ASUS</label>
        <label><input type="checkbox"> GIGABYTE</label>
        <label><input type="checkbox"> ASRock</label>
        <label><input type="checkbox"> BIOSTAR</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>제품 분류</h4>
      <div class="grid">
        <label><input type="checkbox"> 인텔 CPU용</label>
        <label><input type="checkbox"> AMD CPU용</label>
        <label><input type="checkbox"> 임베디드</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>CPU 소켓 <span class="muted">26개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> 인텔(소켓1851)</label>
        <label><input type="checkbox"> 인텔(소켓1700)</label>
        <label><input type="checkbox"> 인텔(소켓1200)</label>
        <label><input type="checkbox"> AMD(소켓AM5)</label>
        <label><input type="checkbox"> AMD(소켓AM4)</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>세부 칩셋 <span class="muted">89개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> 인텔 Z890</label>
        <label><input type="checkbox"> 인텔 B860</label>
        <label><input type="checkbox"> 인텔 B760</label>
        <label><input type="checkbox"> AMD B850</label>
        <label><input type="checkbox"> AMD B650</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>메모리 종류 <span class="muted">8개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> DDR5</label>
        <label><input type="checkbox"> LPDDR5</label>
        <label><input type="checkbox"> DDR4</label>
        <label><input type="checkbox"> LPDDR4</label>
        <label><input type="checkbox"> DDR3</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>VGA 연결</h4>
      <div class="grid">
        <label><input type="checkbox"> PCIe5.0 ×16</label>
        <label><input type="checkbox"> PCIe4.0 ×16</label>
        <label><input type="checkbox"> PCIe3.0 ×16</label>
        <label><input type="checkbox"> PCIe ×16</label>
        <label><input type="checkbox"> PCIe 호환</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>폼팩터 <span class="muted">8개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> ATX (30.5×24.4cm)</label>
        <label><input type="checkbox"> M-ATX (24.4×24.4cm)</label>
        <label><input type="checkbox"> M-ITX (17.0×17.0cm)</label>
        <label><input type="checkbox"> E-ATX (30.5×33.0cm)</label>
        <label><input type="checkbox"> ATX (후면커넥터)</label>
      </div>
    </div>
  `,

  "파워": `
    <h4>옵션 선택</h4>
    <div class="filter-group">
      <h4>제조사 <span class="muted">138개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> 시소닉</label>
        <label><input type="checkbox"> 잘만</label>
        <label><input type="checkbox"> 마이크로닉스</label>
        <label><input type="checkbox"> 쿨러마스터</label>
        <label><input type="checkbox"> darkFlash</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>제품 분류</h4>
      <div class="grid">
        <label><input type="checkbox"> ATX 파워</label>
        <label><input type="checkbox"> M-ATX(SFX) 파워</label>
        <label><input type="checkbox"> TFX 파워</label>
        <label><input type="checkbox"> 서버용 파워</label>
        <label><input type="checkbox"> Flex-ATX 파워</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>정격출력</h4>
      <div class="grid">
        <label><input type="checkbox"> 1000W~1299W</label>
        <label><input type="checkbox"> 800W~899W</label>
        <label><input type="checkbox"> 700W~799W</label>
        <label><input type="checkbox"> 600W~699W</label>
        <label><input type="checkbox"> 500W~599W</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>80PLUS인증 <span class="muted">67개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> 80 PLUS 티타늄</label>
        <label><input type="checkbox"> 80 PLUS 플래티넘</label>
        <label><input type="checkbox"> 80 PLUS 골드</label>
        <label><input type="checkbox"> 80 PLUS 실버</label>
        <label><input type="checkbox"> 80 PLUS 브론즈</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>케이블연결</h4>
      <div class="grid">
        <label><input type="checkbox"> 풀모듈러</label>
        <label><input type="checkbox"> 세미모듈러</label>
        <label><input type="checkbox"> 케이블일체형</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>ETA인증 <span class="muted">8개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> TITANIUM</label>
        <label><input type="checkbox"> PLATINUM</label>
        <label><input type="checkbox"> GOLD</label>
        <label><input type="checkbox"> SILVER</label>
        <label><input type="checkbox"> BRONZE</label>
      </div>
    </div>
    <div class="filter-group">
      <h4>LAMBDA인증 <span class="muted">7개</span></h4>
      <div class="grid">
        <label><input type="checkbox"> A++</label>
        <label><input type="checkbox"> A+</label>
        <label><input type="checkbox"> A</label>
        <label><input type="checkbox"> A-</label>
        <label><input type="checkbox"> STANDARD++</label>
      </div>
    </div>
  `
};

/* -----------------------------
   2) 오른쪽 옵션 렌더링 함수
------------------------------*/
function renderFilter(category){
  var container = document.getElementById('sideFilter');
  if (!container) return;
  var tpl = FILTER_TEMPLATES[category] || FILTER_TEMPLATES['CPU'];
  container.innerHTML = tpl;
}

/* -----------------------------
   3) 제품 샘플(카테고리별) — 데모용
------------------------------*/
var SAMPLE_ROWS = {
  "CPU": [
    {t:'인텔 i5-13400F', s:'10코어 / LGA1700', p:'179,000원'},
    {t:'AMD Ryzen 5 7600', s:'6코어 / AM5', p:'249,000원'},
    {t:'인텔 i7-13700K', s:'16코어 / LGA1700', p:'469,000원'}
  ],
  "그래픽카드": [
    {t:'RTX 4070 SUPER', s:'MSI / 12GB', p:'889,000원'},
    {t:'RX 7800 XT', s:'ASUS / 16GB', p:'749,000원'},
    {t:'ARC A750', s:'Intel / 8GB', p:'279,000원'}
  ],
  "메인보드": [
    {t:'MSI B760M', s:'LGA1700 / mATX', p:'199,000원'},
    {t:'ASUS X670-P', s:'AM5 / ATX', p:'369,000원'}
  ],
  "파워": [
    {t:'시소닉 Focus 850W', s:'80+ Gold / 풀모듈러', p:'169,000원'},
    {t:'마이크로닉스 700W', s:'80+ Bronze / 정격', p:'79,000원'}
  ]
};

function renderRows(category){
  var rowsEl = document.getElementById('rows');
  if (!rowsEl) return;
  var data = SAMPLE_ROWS[category] || [];
  rowsEl.innerHTML = data.map(function(d){
    return (
      '<div class="row">' +
        '<div class="title">'+ d.t +'</div>' +
        '<div class="spec muted">'+ d.s +'</div>' +
        '<div class="price">'+ d.p +'</div>' +
      '</div>'
    );
  }).join('');
}

/* -----------------------------
   4) 좌측 버튼 클릭 → 타이틀/옵션/목록 교체
------------------------------*/
(function () {
  var titleEl = document.querySelector('[data-role="category-title"]');
  var navBtns = document.querySelectorAll('.side-nav button');

  // 초기 CPU로 렌더
  renderFilter('CPU');
  renderRows('CPU');

  for (var i=0;i<navBtns.length;i++){
    navBtns[i].addEventListener('click', function(){
      // active 표시
      for (var j=0;j<navBtns.length;j++) navBtns[j].classList.remove('is-active');
      this.classList.add('is-active');

      var cat = (this.getAttribute('data-cat') || this.textContent || 'CPU').trim();

      // 타이틀/옵션/목록 교체
      if (titleEl) titleEl.textContent = cat;
      renderFilter(cat);
      renderRows(cat);
    });
  }
})();
