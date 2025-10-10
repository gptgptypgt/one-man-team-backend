import Banner from '../components/Banner.jsx'
import './misc.css'            // 아래 2번 CSS
const IMG_BASE = "/misc"
const PRODUCTS = [
  // 모니터
  {
    id: 1,
    img: 'samsung_oled.png', alt: '모니터1',
    spec1: '80.3cm / 32인치', spec2: '240Hz / 평면',
    name: '삼성전자 오디세이 OLED G8 S32FG810',
    price: '1,504,200원',
  },
  {
    id: 2,
    img: 'samsung_g7.png', alt: '모니터2',
    spec1: '80.3cm / 32인치', spec2: '144Hz / 평면',
    name: '삼성전자 오디세이 G7 S32DG700',
    price: '756,460원',
  },
  {
    id: 3,
    img: 'samsung_g5.png', alt: '모니터3',
    spec1: '80cm / 32인치', spec2: '165Hz / 커브드',
    name: '삼성전자 오디세이 G5 S32CG550',
    price: '294,300원',
  },
  {
    id: 4,
    img: 'lg_hd.png', alt: '모니터4',
    spec1: '80cm / 32인치', spec2: '60Hz / 평면',
    name: 'LG전자 울트라HD 32UP830K',
    price: '590,000원',
  },
  {
    id: 5,
    img: 'lg_gear.png', alt: '모니터5',
    spec1: '68.4cm / 27인치', spec2: '200Hz / 평면',
    name: 'LG전자 울트라기어 27GS85Q',
    price: '568,000원',
  },
  {
    id: 6,
    img: 'lg_ultra.png', alt: '모니터6',
    spec1: '68.4cm / 27인치', spec2: '60Hz / 평면',
    name: 'LG전자 울트라HD 27US550',
    price: '386,950원',
  },
  // 키보드
  {
    id: 7,
    img: 'dark.png', alt: '키보드1',
    spec1: '텐키리스 / 유선+무선', spec2: '기계식 / 키압:45g',
    name: 'darkFlash GD87 유무선 기계식',
    price: '36,630원',
  },
  {
    id: 8,
    img: 'abko.png', alt: '키보드2',
    spec1: '풀배열 / 유선', spec2: '기계식 / 키압:45g',
    name: '앱코 K560 축교환 레인보우 무빙 LED 기계식',
    price: '27,250원',
  },
  {
    id: 9,
    img: 'logi.png', alt: '키보드3',
    spec1: '풀배열 / 유선', spec2: '생활방수 / 키압:42g',
    name: '로지텍 K120 New',
    price: '12,650원',
  },
  // 마우스
  {
    id: 10,
    img: 'raser.png', alt: '마우스1',
    spec1: '유선+무선 / 35000DPI', spec2: '가속도70G / 5버튼',
    name: 'Razer Viper V3 Pro',
    price: '239,000원',
  },
  {
    id: 11,
    img: 'logi_mouse.png', alt: '마우스2',
    spec1: '유선 / 8000DPI', spec2: '가속도30G / 5버튼',
    name: '로지텍 G102 LIGHTSYNC',
    price: '22,830원',
  },
  {
    id: 12,
    img: 'atk.png', alt: '마우스3',
    spec1: '유선+무선 / 42000DPI', spec2: '가속도50G / 5버튼',
    name: 'ATK A9 ULTRA 유무선 브라보텍',
    price: '88,000원',
  },
]

export default function Misc() {
  const onBuy = (name) => {
    alert(`"${name}" 구매하기(데모)`)
  }

  return (
    <>
      <Banner>정보통신학과 파이팅 💪</Banner>

      <section className="product-section wrap">
        <div className="product-grid">
          {PRODUCTS.map(p => (
            <div key={p.id} className="product-card">
              <img src={`${IMG_BASE}/${p.img}`} alt={p.alt} />
              <div className="product-info">
                <h3>{p.spec1}<br />{p.spec2}</h3>
                <p>{p.name}</p>
                <div className="price">{p.price}</div>
                <button className="buy-btn" onClick={() => onBuy(p.name)}>구매하기</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
