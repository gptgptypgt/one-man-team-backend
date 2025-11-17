import "./ProductList.css";

const CPU_IMAGE_MAP = {
  "인텔 코어i5-14세대 14600K (랩터레이크 리프레시) (벌크)": "/image/cpu/인텔 코어i5-14세대 14600K (랩터레이크 리프레시) (벌크).png",
  "AMD 라이젠7-5세대 7800X3D (라파엘) (해외구매)": "/image/cpu/AMD 라이젠7-5세대 7800X3D (라파엘) (해외구매).png",
  "AMD 라이젠9-6세대 9950X3D (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠9-6세대 9950X3D (그래니트 릿지) (멀티팩 정품).png",
  "AMD 라이젠5-6세대 9600 (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-6세대 9600 (그래니트 릿지) (멀티팩 정품).png",
  "AMD 라이젠5-5세대 8600G (피닉스) (해외구매)": "/image/cpu/AMD 라이젠5-5세대 8600G (피닉스) (해외구매).png",
  "인텔 코어 울트라5 시리즈2 225 (애로우레이크) (정품)": "/image/cpu/인텔 코어 울트라5 시리즈2 225 (애로우레이크) (정품).png",
  "인텔 코어i5-14세대 14600K (랩터레이크 리프레시) (정품)": "/image/cpu/인텔 코어i5-14세대 14600K (랩터레이크 리프레시) (정품).png",
  "인텔 코어 울트라7 시리즈2 265 (애로우레이크) (벌크)": "/image/cpu/인텔 코어 울트라7 시리즈2 265 (애로우레이크) (벌크).png",
  "인텔 코어i7-14세대 14700KF (랩터레이크 리프레시) (벌크)": "/image/cpu/인텔 코어i7-14세대 14700KF (랩터레이크 리프레시) (벌크).png",
  "AMD 라이젠5-5세대 7400F (라파엘) (해외구매)": "/image/cpu/AMD 라이젠5-5세대 7400F (라파엘) (해외구매).png",
  "인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (밸류팩 정품)": "/image/cpu/인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (밸류팩 정품).png",
  "인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (정품)": "/image/cpu/인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (정품).png",
  "AMD 라이젠5-5세대 8600G (피닉스) (정품)": "/image/cpu/AMD 라이젠5-5세대 8600G (피닉스) (정품).png",
  "인텔 코어 울트라7 시리즈2 265K (애로우레이크) (벌크)": "/image/cpu/인텔 코어 울트라7 시리즈2 265K (애로우레이크) (벌크).png",
  "인텔 코어i7-14세대 14700KF (랩터레이크 리프레시) (정품)": "/image/cpu/인텔 코어i7-14세대 14700KF (랩터레이크 리프레시) (정품).png",
  "AMD 라이젠7-6세대 9800X3D (그래니트 릿지) (해외구매)": "/image/cpu/AMD 라이젠7-6세대 9800X3D (그래니트 릿지) (해외구매).png",
  "AMD 라이젠3-4세대 5300G (세잔) (멀티팩 정품)": "/image/cpu/AMD 라이젠3-4세대 5300G (세잔) (멀티팩 정품).png",
  "인텔 코어 울트라5 시리즈2 245K (애로우레이크) (벌크)": "/image/cpu/인텔 코어 울트라5 시리즈2 245K (애로우레이크) (벌크).png",
  "AMD 라이젠9-6세대 9950X3D (그래니트 릿지) (해외구매)": "/image/cpu/AMD 라이젠9-6세대 9950X3D (그래니트 릿지) (해외구매).png",
  "AMD 라이젠9-6세대 9950X (그래니트 릿지) (벌크 병행)": "/image/cpu/AMD 라이젠9-6세대 9950X (그래니트 릿지) (벌크 병행).png",
  "인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (해외구매)": "/image/cpu/인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (해외구매).png",
  "인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (벌크)": "/image/cpu/인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (벌크).png",
  "AMD 라이젠7-6세대 9800X3D (그래니트 릿지) (정품)": "/image/cpu/AMD 라이젠7-6세대 9800X3D (그래니트 릿지) (정품).png",
  "AMD 라이젠5-4세대 5600 (버미어) (정품)": "/image/cpu/AMD 라이젠5-4세대 5600 (버미어) (정품).png",
  "AMD 라이젠5-2세대 3400G (피카소) (해외구매)": "/image/cpu/AMD 라이젠5-2세대 3400G (피카소) (해외구매).png",
  "AMD 라이젠5-5세대 7500F (라파엘) (벌크 정품)": "/image/cpu/AMD 라이젠5-5세대 7500F (라파엘) (벌크 정품).png",
  "AMD 라이젠9-6세대 9950X (그래니트 릿지) (정품)": "/image/cpu/AMD 라이젠9-6세대 9950X (그래니트 릿지) (정품).png",
  "인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (해외구매)": "/image/cpu/인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (해외구매).png",
  "AMD 라이젠9-6세대 9950X (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠9-6세대 9950X (그래니트 릿지) (멀티팩 정품).png",
  "AMD 라이젠3-2세대 3200G (피카소) (해외구매)": "/image/cpu/AMD 라이젠3-2세대 3200G (피카소) (해외구매).png",
  "AMD 라이젠7-6세대 9700X (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠7-6세대 9700X (그래니트 릿지) (멀티팩 정품).png",
  "인텔 코어 울트라7 시리즈2 265K (애로우레이크) (정품)": "/image/cpu/인텔 코어 울트라7 시리즈2 265K (애로우레이크) (정품).png",
  "인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (정품)": "/image/cpu/인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (정품).png",
  "인텔 코어i5-14세대 14600K (랩터레이크 리프레시) (해외구매)": "/image/cpu/인텔 코어i5-14세대 14600K (랩터레이크 리프레시) (해외구매).png",
  "인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (벌크)": "/image/cpu/인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (벌크).png",
  "AMD 라이젠5-4세대 5600 (버미어) (해외구매)": "/image/cpu/AMD 라이젠5-4세대 5600 (버미어) (해외구매).png",
  "인텔 코어i5-12세대 12400F (엘더레이크) (정품)": "/image/cpu/인텔 코어i5-12세대 12400F (엘더레이크) (정품).png",
  "인텔 코어 울트라9 시리즈2 285K (애로우레이크) (벌크)": "/image/cpu/인텔 코어 울트라9 시리즈2 285K (애로우레이크) (벌크).png",
  "AMD 라이젠7-6세대 9700X (그래니트 릿지) (해외구매)": "/image/cpu/AMD 라이젠7-6세대 9700X (그래니트 릿지) (해외구매).png",
  "AMD 라이젠5-5세대 7400F (라파엘) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-5세대 7400F (라파엘) (멀티팩 정품).png",
  "인텔 코어i5-12세대 12400F (엘더레이크) (벌크)": "/image/cpu/인텔 코어i5-12세대 12400F (엘더레이크) (벌크).png",
  "AMD 라이젠5-6세대 9600X (그래니트 릿지) (정품)": "/image/cpu/AMD 라이젠5-6세대 9600X (그래니트 릿지) (정품).png",
  "AMD 라이젠3-2세대 3200G (피카소) (중고)": "/image/cpu/AMD 라이젠3-2세대 3200G (피카소) (중고).png",
  "AMD 라이젠3-2세대 3200G (피카소) (멀티팩 정품)": "/image/cpu/AMD 라이젠3-2세대 3200G (피카소) (멀티팩 정품).png",
  "AMD 라이젠7-5세대 8700G (피닉스) (멀티팩 정품)": "/image/cpu/AMD 라이젠7-5세대 8700G (피닉스) (멀티팩 정품).png",
  "인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (벌크)": "/image/cpu/인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (벌크).png",
  "인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (해외구매)": "/image/cpu/인텔 코어i5-14세대 14600KF (랩터레이크 리프레시) (해외구매).png",
  "AMD 라이젠5-6세대 9500F (그래니트 릿지) (벌크 정품)": "/image/cpu/AMD 라이젠5-6세대 9500F (그래니트 릿지) (벌크 정품).png",
  "인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (벌크 + 쿨러)": "/image/cpu/인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (벌크 + 쿨러).png",
  "AMD 라이젠5-4세대 5500GT (세잔) (벌크 병행)": "/image/cpu/AMD 라이젠5-4세대 5500GT (세잔) (벌크 병행).png",
  "AMD 라이젠5-2세대 3400G (피카소) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-2세대 3400G (피카소) (멀티팩 정품).png",
  "인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (밸류팩 정품)": "/image/cpu/텔 코어i5-14세대 14400F (랩터레이크 리프레시) (밸류팩 정품).png",
  "AMD 라이젠5-6세대 9600X (그래니트 릿지) (벌크 병행)": "/image/cpu/AMD 라이젠5-6세대 9600X (그래니트 릿지) (벌크 병행).png",
  "인텔 코어 울트라5 시리즈2 225 (애로우레이크) (벌크)": "/image/cpu/인텔 코어 울트라5 시리즈2 225 (애로우레이크) (벌크).png",
  "AMD 라이젠3-2세대 3200G (피카소) (정품)": "/image/cpu/AMD 라이젠3-2세대 3200G (피카소) (정품).png",
  "인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (벌크)": "/image/cpu/인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (벌크).png",
  "AMD 라이젠7-5세대 8700G (피닉스) (정품)": "/image/cpu/AMD 라이젠7-5세대 8700G (피닉스) (정품).png",
  "인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (벌크 + 쿨러)": "/image/cpu/인텔 코어i7-14세대 14700F (랩터레이크 리프레시) (벌크 + 쿨러).png",
  "인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (정품)": "/image/cpu/인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (정품).png",
  "AMD 라이젠5-4세대 5600 (버미어) (벌크 병행)": "/image/cpu/AMD 라이젠5-4세대 5600 (버미어) (벌크 병행).png",
  "AMD 라이젠7-6세대 9700X (그래니트 릿지) (정품)": "/image/cpu/AMD 라이젠7-6세대 9700X (그래니트 릿지) (정품).png",
  "AMD 라이젠5-6세대 9600 (그래니트 릿지) (벌크 정품)": "/image/cpu/AMD 라이젠5-6세대 9600 (그래니트 릿지) (벌크 정품).png",
  "인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (해외구매)": "/image/cpu/인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (해외구매).png",
  "인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (정품)": "/image/cpu/인텔 코어i5-14세대 14400F (랩터레이크 리프레시) (정품).png",
  "AMD 라이젠5-5세대 7500F (라파엘) (해외구매)": "/image/cpu/AMD 라이젠5-5세대 7500F (라파엘) (해외구매).png",
  "AMD 라이젠7-5세대 7800X3D (라파엘) (멀티팩 정품)": "/image/cpu/AMD 라이젠7-5세대 7800X3D (라파엘) (멀티팩 정품).png",
  "AMD 라이젠7-6세대 9800X3D (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠7-6세대 9800X3D (그래니트 릿지) (멀티팩 정품).png",
  "AMD 라이젠9-6세대 9950X (그래니트 릿지) (해외구매)": "/image/cpu/AMD 라이젠9-6세대 9950X (그래니트 릿지) (해외구매).png",
  "인텔 코어 울트라9 시리즈2 285K (애로우레이크) (정품)": "/image/cpu/인텔 코어 울트라9 시리즈2 285K (애로우레이크) (정품).png",
  "AMD 라이젠7-5세대 7800X3D (라파엘) (벌크 병행)": "/image/cpu/AMD 라이젠7-5세대 7800X3D (라파엘) (벌크 병행).png",
  "인텔 코어 울트라7 시리즈2 265 (애로우레이크) (벌크 + 쿨러)": "/image/cpu/인텔 코어 울트라7 시리즈2 265 (애로우레이크) (벌크 + 쿨러).png",
  "AMD 라이젠5-6세대 9500F (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-6세대 9500F (그래니트 릿지) (멀티팩 정품).png",
  "AMD 라이젠5-4세대 5600 (버미어) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-4세대 5600 (버미어) (멀티팩 정품).png",
  "AMD 라이젠7-5세대 8700G (피닉스) (해외구매)": "/image/cpu/AMD 라이젠7-5세대 8700G (피닉스) (해외구매).png",
  "AMD 라이젠7-6세대 9700X (그래니트 릿지) (벌크 정품)": "/image/cpu/AMD 라이젠7-6세대 9700X (그래니트 릿지) (벌크 정품).png",
  "인텔 코어i5-12세대 12400F (엘더레이크) (해외구매)": "/image/cpu/인텔 코어i5-12세대 12400F (엘더레이크) (해외구매).png",
  "AMD 라이젠7-5세대 7800X3D (라파엘) (정품)": "/image/cpu/AMD 라이젠7-5세대 7800X3D (라파엘) (정품).png",
  "인텔 코어i7-14세대 14700KF (랩터레이크 리프레시) (해외구매)": "/image/cpu/인텔 코어i7-14세대 14700KF (랩터레이크 리프레시) (해외구매).png",
  "AMD 라이젠5-6세대 9600X (그래니트 릿지) (벌크 정품)": "/image/cpu/AMD 라이젠5-6세대 9600X (그래니트 릿지) (벌크 정품).png",
  "인텔 코어i5-12세대 12400F (엘더레이크) (벌크 + 쿨러)": "/image/cpu/인텔 코어i5-12세대 12400F (엘더레이크) (벌크 + 쿨러).png",
  "AMD 라이젠7-6세대 9700X (그래니트 릿지) (벌크 병행)": "/image/cpu/AMD 라이젠7-6세대 9700X (그래니트 릿지) (벌크 병행).png",
  "인텔 코어 울트라7 시리즈2 265 (애로우레이크) (정품)": "/image/cpu/인텔 코어 울트라7 시리즈2 265 (애로우레이크) (정품).png",
  "AMD 라이젠7-4세대 5700X3D (버미어) (해외구매)": "/image/cpu/AMD 라이젠7-4세대 5700X3D (버미어) (해외구매).png",
  "AMD 라이젠5-4세대 5500GT (세잔) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-4세대 5500GT (세잔) (멀티팩 정품).png",
  "AMD 라이젠5-5세대 7500F (라파엘) (벌크 병행)": "/image/cpu/AMD 라이젠5-5세대 7500F (라파엘) (벌크 병행).png",
  "AMD 라이젠9-6세대 9950X3D (그래니트 릿지) (정품)": "/image/cpu/AMD 라이젠9-6세대 9950X3D (그래니트 릿지) (정품).png",
  "AMD 라이젠5-5세대 7500F (라파엘) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-5세대 7500F (라파엘) (멀티팩 정품).png",
  "AMD 라이젠5-6세대 9600X (그래니트 릿지) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-6세대 9600X (그래니트 릿지) (멀티팩 정품).png",
  "AMD 라이젠5-6세대 9600X (그래니트 릿지) (해외구매)": "/image/cpu/AMD 라이젠5-6세대 9600X (그래니트 릿지) (해외구매).png",
  "인텔 코어 울트라5 시리즈2 245K (애로우레이크) (정품)": "/image/cpu/인텔 코어 울트라5 시리즈2 245K (애로우레이크) (정품).png",
  "AMD 라이젠5-5세대 8600G (피닉스) (멀티팩 정품)": "/image/cpu/AMD 라이젠5-5세대 8600G (피닉스) (멀티팩 정품).png"
};

const GPU_IMAGE_MAP = {
  "GIGABYTE 지포스 RTX 5070 Ti WINDFORCE OC SFF D7 16GB 피씨디렉트": "/image/gpu/GIGABYTE 지포스 RTX 5070 Ti WINDFORCE OC SFF D7 16GB 피씨디렉트.png",
  "XFX 라데온 RX 9060 XT SWIFT DUAL OC D6 16GB": "/image/gpu/XFX 라데온 RX 9060 XT SWIFT DUAL OC D6 16GB.png",
  "ASRock 라데온 RX 9060 CHALLENGER D6 8GB 대원씨티에스": "/image/gpu/ASRock 라데온 RX 9060 CHALLENGER D6 8GB 대원씨티에스.png",
  "MSI 지포스 RTX 5090 벤투스 3X OC D7 32GB": "/image/gpu/MSI 지포스 RTX 5090 벤투스 3X OC D7 32GB.png",
  "XFX 라데온 RX 9070 XT SWIFT D6 16GB": "/image/gpu/XFX 라데온 RX 9070 XT SWIFT D6 16GB.png",
  "ZOTAC GAMING 지포스 RTX 5070 Ti SOLID OC D7 16GB": "/image/gpu/ZOTAC GAMING 지포스 RTX 5070 Ti SOLID OC D7 16GB.png",
  "GAINWARD 지포스 RTX 5060 고스트 D7 8GB": "/image/gpu/GAINWARD 지포스 RTX 5060 고스트 D7 8GB.png",
  "GIGABYTE AORUS 지포스 RTX 5090 MASTER ICE D7 32GB 제이씨현": "/image/gpu/GIGABYTE AORUS 지포스 RTX 5090 MASTER ICE D7 32GB 제이씨현.png",
  "ASUS PRIME 라데온 RX 9070 XT OC D6 16GB 대원씨티에스": "/image/gpu/ASUS PRIME 라데온 RX 9070 XT OC D6 16GB 대원씨티에스.png",
  "PALIT 지포스 RTX 5080 GAMINGPRO D7 16GB 이엠텍": "/image/gpu/PALIT 지포스 RTX 5080 GAMINGPRO D7 16GB 이엠텍.png",
  "GIGABYTE 지포스 RTX 5070 GAMING OC D7 12GB 제이씨현": "/image/gpu/GIGABYTE 지포스 RTX 5070 GAMING OC D7 12GB 제이씨현.png",
  "MSI 지포스 RTX 5070 게이밍 트리오 OC D7 12GB 트라이프로져4": "/image/gpu/MSI 지포스 RTX 5070 게이밍 트리오 OC D7 12GB 트라이프로져4.png",
  "MSI 지포스 RTX 5060 벤투스 2X OC D7 8GB": "/image/gpu/MSI 지포스 RTX 5060 벤투스 2X OC D7 8GB.png",
  "ZOTAC GAMING 지포스 RTX 5080 SOLID OC D7 16GB": "/image/gpu/ZOTAC GAMING 지포스 RTX 5080 SOLID OC D7 16GB.png",
  "MSI 지포스 RTX 5070 Ti 게이밍 트리오 OC 화이트 D7 16GB 트라이프로져4": "/image/gpu/MSI 지포스 RTX 5070 Ti 게이밍 트리오 OC 화이트 D7 16GB 트라이프로져4.png",
  "GIGABYTE 지포스 RTX 5080 GAMING OC D7 16GB 제이씨현": "/image/gpu/GIGABYTE 지포스 RTX 5080 GAMING OC D7 16GB 제이씨현.png",
  "갤럭시 GALAX 지포스 RTX 5070 EX GAMER WHITE OC D7 12GB": "/image/gpu/갤럭시 GALAX 지포스 RTX 5070 EX GAMER WHITE OC D7 12GB.png",
  "MSI 지포스 RTX 3050 벤투스 2X E OC D6 6GB": "/image/gpu/MSI 지포스 RTX 3050 벤투스 2X E OC D6 6GB.png",
  "MSI 지포스 RTX 5090 슈프림 SOC D7 32GB 하이퍼프로져": "/image/gpu/MSI 지포스 RTX 5090 슈프림 SOC D7 32GB 하이퍼프로져.png",
  "PALIT 지포스 RTX 5060 DUAL OC D7 8GB 이엠텍": "/image/gpu/PALIT 지포스 RTX 5060 DUAL OC D7 8GB 이엠텍.png",
  "ZOTAC GAMING 지포스 RTX 5060 Ti Twin Edge OC D7 16GB": "/image/gpu/ZOTAC GAMING 지포스 RTX 5060 Ti Twin Edge OC D7 16GB.png",
  "MSI 지포스 RTX 5060 Ti 벤투스 2X OC 플러스 D7 16GB": "/image/gpu/MSI 지포스 RTX 5060 Ti 벤투스 2X OC 플러스 D7 16GB.png",
  "PALIT 지포스 RTX 5060 Ti INFINITY 3 D7 16GB 이엠텍": "/image/gpu/PALIT 지포스 RTX 5060 Ti INFINITY 3 D7 16GB 이엠텍.png",
  "GIGABYTE 지포스 RTX 5070 WINDFORCE OC SFF D7 12GB 제이씨현": "/image/gpu/GIGABYTE 지포스 RTX 5070 WINDFORCE OC SFF D7 12GB 제이씨현.png",
  "ASUS DUAL 라데온 RX 9060 XT D6 8GB 대원씨티에스": "/image/gpu/ASUS DUAL 라데온 RX 9060 XT D6 8GB 대원씨티에스.png",
  "SAPPHIRE 라데온 RX 9060 XT PULSE OC D6 16GB": "/image/gpu/SAPPHIRE 라데온 RX 9060 XT PULSE OC D6 16GB.png",
  "SAPPHIRE 라데온 RX 9070 XT NITRO+ OC D6 16GB": "/image/gpu/SAPPHIRE 라데온 RX 9070 XT NITRO+ OC D6 16GB.png",
  "MSI 지포스 RTX 5080 게이밍 트리오 OC D7 16GB 트라이프로져4": "/image/gpu/MSI 지포스 RTX 5080 게이밍 트리오 OC D7 16GB 트라이프로져4.png",
  "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져": "/image/gpu/MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져.png",
  "MSI 지포스 RTX 5070 Ti 게이밍 트리오 OC D7 16GB 트라이프로져4": "/image/gpu/MSI 지포스 RTX 5070 Ti 게이밍 트리오 OC D7 16GB 트라이프로져4.png",
  "ZOTAC GAMING 지포스 RTX 5070 SOLID OC D7 12GB": "/image/gpu/ZOTAC GAMING 지포스 RTX 5070 SOLID OC D7 12GB.png",
  "ZOTAC GAMING 지포스 RTX 5060 Twin Edge OC D7 8GB": "/image/gpu/ZOTAC GAMING 지포스 RTX 5060 Twin Edge OC D7 8GB.png",
  "갤럭시 GALAX 지포스 RTX 5060 WHITE OC D7 8GB": "/image/gpu/갤럭시 GALAX 지포스 RTX 5060 WHITE OC D7 8GB.png",
  "이엠텍 지포스 RTX 5060 MIRACLE WHITE D7 8GB": "/image/gpu/이엠텍 지포스 RTX 5060 MIRACLE WHITE D7 8GB.png",
  "갤럭시 GALAX 지포스 RTX 5060 Ti BLACK 3X D7 16GB DUAL HDMI": "/image/gpu/갤럭시 GALAX 지포스 RTX 5060 Ti BLACK 3X D7 16GB DUAL HDMI.png"
};

const MB_IMAGE_MAP = {
  "ASUS TUF Gaming B760M-PLUS II 코잇": "/image/mainboard/ASUS TUF Gaming B760M-PLUS II 코잇.png",
  "ASUS TUF Gaming B550M-PLUS STCOM": "/image/mainboard/ASUS TUF Gaming B550M-PLUS STCOM.png",
  "ASUS ROG CROSSHAIR X870E HERO 대원씨티에스": "/image/mainboard/ASUS ROG CROSSHAIR X870E HERO 대원씨티에스.png",
  "MSI MAG B760M 박격포 II": "/image/mainboard/MSI MAG B760M 박격포 II.png",
  "GIGABYTE X870E AORUS PRO ICE 제이씨현": "/image/mainboard/GIGABYTE X870E AORUS PRO ICE 제이씨현.png",
  "ASUS PRIME B860M-A-CSM 코잇": "/image/mainboard/ASUS PRIME B860M-A-CSM 코잇.png",
  "ASUS ROG STRIX B860-G GAMING WIFI 코잇": "/image/mainboard/ASUS ROG STRIX B860-G GAMING WIFI 코잇.png",
  "MSI PRO B650M-A WIFI": "/image/mainboard/MSI PRO B650M-A WIFI.png",
  "ASUS PRIME A520M-K 대원씨티에스": "/image/mainboard/ASUS PRIME A520M-K 대원씨티에스.png",
  "ASRock B650M Pro X3D 에즈윈": "/image/mainboard/ASRock B650M Pro X3D 에즈윈.png",
  "GIGABYTE B650M K 피씨디렉트": "/image/mainboard/GIGABYTE B650M K 피씨디렉트.png",
  "GIGABYTE B850M AORUS ELITE WIFI6E ICE 제이씨현": "/image/mainboard/GIGABYTE B850M AORUS ELITE WIFI6E ICE 제이씨현.png",
  "ASRock B650M PG Lightning 에즈윈": "/image/mainboard/ASRock B650M PG Lightning 에즈윈.png",
  "GIGABYTE B650M K 제이씨현": "/image/mainboard/GIGABYTE B650M K 제이씨현.png",
  "GIGABYTE B850M FORCE 제이씨현": "/image/mainboard/GIGABYTE B850M FORCE 제이씨현.png",
  "MSI MAG B860M 박격포 WIFI": "/image/mainboard/MSI MAG B860M 박격포 WIFI.png",
  "ASRock B450M-HDV R4.0 대원씨티에스": "/image/mainboard/ASRock B450M-HDV R4.0 대원씨티에스.png",
  "ASRock B650M Pro X3D 대원씨티에스": "/image/mainboard/ASRock B650M Pro X3D 대원씨티에스.png",
  "MSI MAG B850 토마호크 맥스 WIFI": "/image/mainboard/MSI MAG B850 토마호크 맥스 WIFI.png",
  "MSI MAG B850M 박격포 WIFI": "/image/mainboard/MSI MAG B850M 박격포 WIFI.png",
  "MSI A520M-A PRO": "/image/mainboard/MSI A520M-A PRO.png",
  "MSI MAG X870E 토마호크 WIFI": "/image/mainboard/MSI MAG X870E 토마호크 WIFI.png",
  "ASUS TUF Gaming B850M-PLUS II STCOM": "/image/mainboard/ASUS TUF Gaming B850M-PLUS II STCOM.png",
  "ASRock B760M Pro RS D5 에즈윈": "/image/mainboard/ASRock B760M Pro RS D5 에즈윈.png",
  "GIGABYTE B860M AORUS ELITE WIFI6E 피씨디렉트": "/image/mainboard/GIGABYTE B860M AORUS ELITE WIFI6E 피씨디렉트.png",
  "ASUS TUF Gaming B850-PLUS WIFI STCOM": "/image/mainboard/ASUS TUF Gaming B850-PLUS WIFI STCOM.png",
  "ASUS PRIME B650M-A II 대원씨티에스": "/image/mainboard/ASUS PRIME B650M-A II 대원씨티에스.png",
  "ASUS TUF Gaming B850M-PLUS WIFI7 STCOM": "/image/mainboard/ASUS TUF Gaming B850M-PLUS WIFI7 STCOM.png",
  "MSI PRO B760M-A DDR4 II": "/image/mainboard/MSI PRO B760M-A DDR4 II.png",
  "ASUS TUF Gaming B850M-PLUS STCOM": "/image/mainboard/ASUS TUF Gaming B850M-PLUS STCOM.png",
  "ASUS PRIME A520M-A II 대원씨티에스": "/image/mainboard/ASUS PRIME A520M-A II 대원씨티에스.png",
  "ASUS TUF Gaming B850M-PLUS WIFI7 W STCOM": "/image/mainboard/ASUS TUF Gaming B850M-PLUS WIFI7 W STCOM.png",
  "ASRock B550M Pro RS 에즈윈": "/image/mainboard/ASRock B550M Pro RS 에즈윈.png",
  "ASUS PRIME H810M-A 코잇": "/image/mainboard/ASUS PRIME H810M-A 코잇.png"
};

const PSU_IMAGE_MAP = {
  "MONTECH CENTURY II 850 80PLUS골드 풀모듈러 ATX3.1": "/image/power/MONTECH CENTURY II 850 80PLUS골드 풀모듈러 ATX3.1.png",
  "잘만 MegaMax 600W 80PLUS스탠다드": "/image/power/잘만 MegaMax 600W 80PLUS스탠다드.png",
  "마이크로닉스 Classic II 850W 80PLUS골드 풀모듈러 ATX3.1": "/image/power/마이크로닉스 Classic II 850W 80PLUS골드 풀모듈러 ATX3.1.png",
  "darkFlash 퍼펙트모스트 750W 80PLUS골드 풀모듈러 ATX3.1 블랙": "/image/power/darkFlash 퍼펙트모스트 750W 80PLUS골드 풀모듈러 ATX3.1 블랙.png",
  "마이크로닉스 Classic II 풀체인지 700W 80PLUS브론즈 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 700W 80PLUS브론즈 ATX3.1.png",
  "마이크로닉스 Classic II 850W 80PLUS골드 풀모듈러 ATX3.1 화이트": "/image/power/마이크로닉스 Classic II 850W 80PLUS골드 풀모듈러 ATX3.1 화이트.png",
  "잘만 GigaMax III 850W 80PLUS브론즈 모듈러 ATX3.1": "/image/power/잘만 GigaMax III 850W 80PLUS브론즈 모듈러 ATX3.1.png",
  "SuperFlower SF-850F14XG LEADEX VII GOLD ATX3.1": "/image/power/SuperFlower SF-850F14XG LEADEX VII GOLD ATX3.1.png",
  "마이크로닉스 Classic II 1200W 80PLUS골드 풀모듈러 ATX3.1": "/image/power/마이크로닉스 Classic II 1200W 80PLUS골드 풀모듈러 ATX3.1.png",
  "SuperFlower SF-1200F14XP LEADEX VII PRO PLATINUM 블랙 ATX3.1": "/image/power/SuperFlower SF-1200F14XP LEADEX VII PRO PLATINUM 블랙 ATX3.1.png",
  "SuperFlower SF-1200F14XP LEADEX VII PRO PLATINUM 화이트 ATX3.1": "/image/power/SuperFlower SF-1200F14XP LEADEX VII PRO PLATINUM 화이트 ATX3.1.png",
  "CORSAIR RM1000e ETA플래티넘 ATX3.1 화이트": "/image/power/CORSAIR RM1000e ETA플래티넘 ATX3.1 화이트.png",
  "SuperFlower SF-1000F14GE LEADEX III GOLD UP ATX3.1": "/image/power/SuperFlower SF-1000F14GE LEADEX III GOLD UP ATX3.1.png",
  "Antec GSK 850W V2 80PLUS골드 풀모듈러 ATX3.1": "/image/power/Antec GSK 850W V2 80PLUS골드 풀모듈러 ATX3.1.png",
  "SuperFlower SF-750Z12DB Zillion DB ETA실버 ATX3.1": "/image/power/SuperFlower SF-750Z12DB Zillion DB ETA실버 ATX3.1.png",
  "시소닉 NEW FOCUS V4 GX-850 GOLD 풀모듈러 ATX3.1": "/image/power/시소닉 NEW FOCUS V4 GX-850 GOLD 풀모듈러 ATX3.1.png",
  "darkFlash 퍼펙트모스트 850W 80PLUS골드 풀모듈러 ATX3.1 블랙": "/image/power/darkFlash 퍼펙트모스트 850W 80PLUS골드 풀모듈러 ATX3.1 블랙.png",
  "마이크로닉스 Classic II 풀체인지 600W 80PLUS브론즈 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 600W 80PLUS브론즈 ATX3.1.png",
  "마이크로닉스 WIZMAX G-1000W 80PLUS골드 ATX3.1": "/image/power/마이크로닉스 WIZMAX G-1000W 80PLUS골드 ATX3.1.png",
  "맥스엘리트 STARS GEMINI 750W 80PLUS브론즈 ATX3.1": "/image/power/맥스엘리트 STARS GEMINI 750W 80PLUS브론즈 ATX3.1.png",
  "마이크로닉스 Classic II 풀체인지 650W 80PLUS스탠다드 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 650W 80PLUS스탠다드 ATX3.1.png",
  "SuperFlower SF-1000F14XP LEADEX VII PRO PLATINUM 블랙 ATX3.1": "/image/power/SuperFlower SF-1000F14XP LEADEX VII PRO PLATINUM 블랙 ATX3.1.png",
  "마이크로닉스 Classic II 750W 80PLUS골드 풀모듈러 ATX3.1": "/image/power/마이크로닉스 Classic II 750W 80PLUS골드 풀모듈러 ATX3.1.png",
  "잘만 EcoMax 500W": "/image/power/잘만 EcoMax 500W.png",
  "마이크로닉스 WIZMAX G-1200W 80PLUS골드 ATX3.1": "/image/power/마이크로닉스 WIZMAX G-1200W 80PLUS골드 ATX3.1.png",
  "시소닉 NEW FOCUS V4 GX-1000 GOLD 풀모듈러 ATX3.1": "/image/power/시소닉 NEW FOCUS V4 GX-1000 GOLD 풀모듈러 ATX3.1.png",
  "마이크로닉스 Classic II 풀체인지 600W 80PLUS실버 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 600W 80PLUS실버 ATX3.1.png",
  "맥스엘리트 STARS GEMINI 650W 80PLUS브론즈 ATX3.1": "/image/power/맥스엘리트 STARS GEMINI 650W 80PLUS브론즈 ATX3.1.png",
  "MSI PRO B760M-A DDR4 II": "/image/power/MSI PRO B760M-A DDR4 II.png",
  "맥스엘리트 STARS CYGNUS 850W 80PLUS골드 풀모듈러 ATX3.1": "/image/power/맥스엘리트 STARS CYGNUS 850W 80PLUS골드 풀모듈러 ATX3.1.png",
  "darkFlash 퍼펙트모스트 750W 80PLUS골드 풀모듈러 ATX3.1 화이트": "/image/power/darkFlash 퍼펙트모스트 750W 80PLUS골드 풀모듈러 ATX3.1 화이트.png",
  "MONTECH CENTURY II 1050 80PLUS골드 풀모듈러 ATX3.1": "/image/power/MONTECH CENTURY II 1050 80PLUS골드 풀모듈러 ATX3.1.png",
  "DEEPCOOL PL800D 80PLUS브론즈 ATX3.1": "/image/power/DEEPCOOL PL800D 80PLUS브론즈 ATX3.1.png",
  "마이크로닉스 Classic II 풀체인지 500W 80PLUS브론즈 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 500W 80PLUS브론즈 ATX3.1.png",
  "마이크로닉스 Classic II 풀체인지 800W 80PLUS브론즈 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 800W 80PLUS브론즈 ATX3.1.png",
  "앱코 SETTLER 하이브리드 PCIE5.1 STH-1000B ETA SILVER 블랙": "/image/power/앱코 SETTLER 하이브리드 PCIE5.1 STH-1000B ETA SILVER 블랙.png",
  "CORSAIR HX1200i ATX3.0": "/image/power/CORSAIR HX1200i ATX3.0.png",
  "잘만 MegaMax II 700W 80PLUS브론즈 ATX3.1": "/image/power/잘만 MegaMax II 700W 80PLUS브론즈 ATX3.1.png",
  "마이크로닉스 Classic II 풀체인지 700W 80PLUS실버 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 700W 80PLUS실버 ATX3.1.png",
  "마이크로닉스 Classic II 풀체인지 800W 80PLUS실버 ATX3.1": "/image/power/마이크로닉스 Classic II 풀체인지 800W 80PLUS실버 ATX3.1.png",
  "Segotep GM1250W 80PLUS골드 풀모듈러 ATX3.1 블랙": "/image/power/Segotep GM1250W 80PLUS골드 풀모듈러 ATX3.1 블랙.png",
  "쿨러마스터 MWE GOLD 850 V3 ATX3.1 블랙": "/image/power/쿨러마스터 MWE GOLD 850 V3 ATX3.1 블랙.png",
  "Antec GSK 850W 80PLUS골드 풀모듈러 ATX3.1": "/image/power/Antec GSK 850W 80PLUS골드 풀모듈러 ATX3.1.png",
  "앱코 SETTLER 하이브리드 PCIE5.1 STH-800B ETA BRONZE 블랙": "/image/power/앱코 SETTLER 하이브리드 PCIE5.1 STH-800B ETA BRONZE 블랙.png",
  "앱코 SETTLER 하이브리드 PCIE5.1 STH-700B ETA BRONZE 화이트": "/image/power/앱코 SETTLER 하이브리드 PCIE5.1 STH-700B ETA BRONZE 화이트.png"
};

const getImageSrc = (p) => {
  if (p.image_link) return p.image_link;

  if (p.cpu_name) {
    return CPU_IMAGE_MAP[p.cpu_name] || "/images/cpu/default_cpu.png";
  }
  if (p.gpu_name) {
    return GPU_IMAGE_MAP[p.gpu_name] || "/images/gpu/default_gpu.png";
  }
  if (p.mb_name) {
    return MB_IMAGE_MAP[p.mb_name] || "/images/mainboard/default_mb.png";
  }
  if (p.psu_name) {
    return PSU_IMAGE_MAP[p.psu_name] || "/images/psu/default_psu.png";
  }

  return "/noimg.png";
};

// ✅ 상품 링크 매핑 함수 (중요!)
const getProductLink = (p) => {
  if (p.cpu_link) return p.cpu_link;
  if (p.gpu_link) return p.gpu_link;
  if (p.mb_link) return p.mb_link;
  if (p.psu_link) return p.psu_link;
  return null;
};

export default function ProductList({ rows = [] }) {
  if (!rows.length) {
    return <p>불러올 상품이 없습니다 😥</p>;
  }

  return (
    <div className="product-list">
      {rows.map((p) => (
        <div key={p.id} className="product-card">

          {/* ▶ 왼쪽 이미지 */}
          <div className="product-left">
            <img
              src={getImageSrc(p)}
              alt={
                p.cpu_name ||
                p.gpu_name ||
                p.mb_name ||
                p.psu_name ||
                "이미지 없음"
              }
              className="product-image"
            />
          </div>

          {/* ▶ 오른쪽 정보 */}
          <div className="product-right">

            {/* 상품명 */}
            <div className="product-name">
              {p.cpu_name || p.gpu_name || p.mb_name || p.psu_name}
            </div>

            {/* CPU */}
            {p.cpu_name && (
              <>
                <div className="product-spec-line">
                  제조사: {p.cpu_brand || "-"} · 
                  코어: {p.cpu_cores || "-"} · 
                  쓰레드: {p.cpu_thread || "-"} · 
                  세대: {p.cpu_gener || "-"} · 
                  소켓: {p.cpu_socket || "-"}
                </div>
                <p className="product-price">{p.cpu_price}</p>
              </>
            )}

            {/* GPU */}
            {p.gpu_name && (
              <>
                <div className="product-spec-line">
                  제조사: {p.gpu_vendor || "-"} · 
                  VRAM: {p.gpu_vram || "-"} · 
                  칩셋: {p.gpu_chipset || "-"} · 
                  시리즈: {p.gpu_series || "-"}
                </div>
                <p className="product-price">{p.gpu_price}</p>
              </>
            )}

            {/* 메인보드 */}
            {p.mb_name && (
              <>
                <div className="product-spec-line">
                  칩셋: {p.mb_chipset || "-"} · 
                  소켓: {p.mb_socket || "-"} · 
                  메모리: {p.mb_mem || "-"} · 
                  폼팩터: {p.mb_form || "-"}
                </div>
                <p className="product-price">{p.mb_price}</p>
              </>
            )}

            {/* 파워 */}
            {p.psu_name && (
              <>
                <div className="product-spec-line">
                  정격: {p.psu_watt || "-"}W · 
                  80Plus: {p.psu_80plus || "-"} · 
                  폼팩터: {p.psu_form || "-"} · 
                  케이블: {p.psu_cable || "-"}
                </div>
                <p className="product-price">{p.psu_price}</p>
              </>
            )}

            {/* 🔗 상품보기 (링크 완전 수정됨) */}
            <a
  href={p.cpu_link || p.gpu_link || p.mb_link || p.psu_link}
  target="_blank"
  rel="noreferrer"
  className="product-link"
>
  상품보기 🔗
            </a>



          </div>
        </div>
      ))}
    </div>
  );
}