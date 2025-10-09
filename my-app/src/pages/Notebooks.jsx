import "./notebooks.css";

const IMG_BASE = "/노트북"; // 이미지가 public/노트북 에 있을 때

const PRODUCTS = [
  // 삼성
  { id:1,  img:"갤럭시_flex.png", alt:"노트북1",
    spec1:"39.6cm / 1.55kg", spec2:"코어i7 / 54Wh 배터리",
    name:"삼성전자 터치노트북 PAN S NT950QCT-A58A (SSD 256GB)", price:"680,000원" },
  { id:2,  img:"갤럭시북2.png", alt:"노트북2",
    spec1:"39.6cm / 1.8kg", spec2:"코어i5 / 45Wh",
    name:"삼성전자 갤럭시북2 NT550XEZ-A58A (SSD 256GB)", price:"698,000원" },
  { id:3,  img:"갤럭시북4.png", alt:"노트북3",
    spec1:"35.6cm / 1.23kg", spec2:"코어 울트라5 / 65Wh",
    name:"삼성전자 갤럭시북4 프로 NT940XGQ-A51A WIN11 (SSD 512GB)", price:"1,559,000원" },
  { id:4,  img:"갤럭시북5.png", alt:"노트북4",
    spec1:"35.6cm / 1.23kg", spec2:"코어 울트라7 / 65Wh",
    name:"삼성전자 갤럭시북5 프로 NT940XHA-K71AR (SSD 512GB)", price:"2,299,000원" },

  // LG
  { id:5,  img:"lg_그램.png", alt:"노트북5",
    spec1:"43.1cm / 1.39kg", spec2:"코어 울트라5 / 65Wh",
    name:"LG전자 그램17 17ZD90SU-GXF6K(SSD 256GB)", price:"1,725,000원" },
  { id:6,  img:"lg_울트라.png", alt:"노트북6",
    spec1:"39.6cm / 1.7kg", spec2:"코어i5 / 65Wh",
    name:"LG전자 울트라PC 15UD50T-GX5JK(SSD 256GB)", price:"663,000원" },

  // MSI
  { id:7,  img:"msi15.png", alt:"노트북7",
    spec1:"39.6cm / 1.9kg", spec2:"코어i5 / 42Wh",
    name:"MSI 모던시리즈 모던 15 H C13M-i5 (SSD 512GB)", price:"729,000원" },
  { id:8,  img:"msi_소드.png", alt:"노트북8",
    spec1:"39.6cm / 2.25kg", spec2:"라이젠7 / 53.5Wh",
    name:"MSI 소드 GF66 A AI B8VE-R7 16GB램 (SSD 512GB)", price:"1,079,000원" },

  // 기타
  { id:9,  img:"갤럭시북프로.png", alt:"노트북9",
    spec1:"39.6cm / 1.39kg", spec2:"코어i5 / 68Wh",
    name:"삼성전자 갤럭시북 프로360 NT950QDY-A51A (SSD 256GB)", price:"1,490,000원" },
  { id:10, img:"asus15.png", alt:"노트북10",
    spec1:"39.6cm / 1.7kg", spec2:"라이젠7 / 42Wh",
    name:"ASUS 비보북 15 M1502YA-BQ635W (SSD 512GB)", price:"749,000원" },
  { id:11, img:"asus_game.png", alt:"노트북11",
    spec1:"40.6cm / 1.95kg", spec2:"코어7 / 63Wh",
    name:"ASUS Gaming V16 V3607VM-RP005 (SSD 512GB)", price:"1,399,000원" },
  { id:12, img:"asus_p1.png", alt:"노트북12",
    spec1:"39.62cm / 1.64kg", spec2:"코어i5 / 65Wh",
    name:"ASUS ExpertBook P1 P1503CVA-S70532 (SSD 512GB)", price:"699,000원" },
];

const onImgError = (e) => {
  e.currentTarget.src = `${IMG_BASE}/placeholder.png`; // 선택: public/노트북/placeholder.png 있으면 사용
  e.currentTarget.classList.add("img-fallback");
};

export default function Notebooks() {
  return (
    <div className="notebooks">
      {/* 배너(원하면 빼도 됨) */}
      <section className="banner">
        <div className="wrap">정보통신학과 파이팅 💪</div>
      </section>

      <section className="product-section wrap">
        <div className="product-grid">
          {PRODUCTS.map(p => (
            <div className="product-card" key={p.id}>
              <img
                src={`${IMG_BASE}/${p.img}`}
                alt={p.alt}
                loading="lazy"
                onError={onImgError}
              />
              <div className="product-info">
                <h3>
                  {p.spec1}<br />{p.spec2}
                </h3>
                <p>{p.name}</p>
                <div className="price">{p.price}</div>
                <button
                  className="buy-btn"
                  onClick={() => alert(`데모: "${p.name}" 구매 기능은 준비중입니다.`)}
                >
                  구매하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
