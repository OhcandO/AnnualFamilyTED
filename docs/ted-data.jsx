// Shared data for the dark TED edition.
const SPEAKERS = [
  {
    no: "01",
    talk: "새로운 시작",
    role: "이직자 · Career Pivot",
    title: "데이터가 세상을 바꾸는 법",
    bio: "숫자 너머에 사람이 있다고 믿는 사람. 10년의 커리어를 뒤로하고 새 문 앞에 선 이야기.",
    minutes: 15,
    tag: "Career",
    draft: true,
  },
  {
    no: "02",
    talk: "우리의 뉴페이스",
    role: "신규 편입 가족 · New Member",
    title: "나와 우리가 되어가는 과정",
    bio: "어색했던 첫인사부터 지금까지. 새로운 호칭 앞에서 매일을 배워가는 사람의 솔직한 기록.",
    minutes: 15,
    tag: "Story",
    draft: true,
  },
  {
    no: "03",
    talk: "덕업일치",
    role: "독특한 취미 · Devoted Hobbyist",
    title: "주말을 완벽하게 보내는 나만의 비법",
    bio: "월요일을 위해 사는 것이 아니라, 토요일을 설계하며 산다. 한 사람의 작은 의식들에 대하여.",
    minutes: 15,
    tag: "Craft",
    draft: true,
  },
  {
    no: "04",
    talk: "Surprise Talk",
    role: "??? · Wildcard",
    title: "당일에만 공개되는 발표",
    bio: "누구의 차례일지, 어떤 이야기일지 — 시작 전까지 비밀입니다. 가장 가까운 이의 가장 낯선 면.",
    minutes: 15,
    tag: "Secret",
    secret: true,
  },
];

const PROGRAM = [
  { time: "14:00", end: "14:20", title: "Opening", kind: "opening", note: "환영 인사 · 진행 규칙 · 사회자의 어색한 농담" },
  { time: "14:20", end: "14:35", title: "Session 1 — 새로운 시작", kind: "talk", note: "데이터가 세상을 바꾸는 법" },
  { time: "14:35", end: "14:50", title: "Session 2 — 우리의 뉴페이스", kind: "talk", note: "나와 우리가 되어가는 과정" },
  { time: "14:50", end: "15:20", title: "Break · 다과", kind: "break", note: "성심당 디저트 · 따뜻한 차 · 자유로운 잡담" },
  { time: "15:20", end: "15:35", title: "Session 3 — 덕업일치", kind: "talk", note: "주말을 완벽하게 보내는 나만의 비법" },
  { time: "15:35", end: "15:50", title: "Session 4 — Surprise Talk", kind: "talk", note: "당일에만 공개됩니다." },
  { time: "15:50", end: "16:30", title: "Q&A · Family Reflections", kind: "reflect", note: "오늘의 발표에 대한 자유로운 대화" },
  { time: "18:00", end: "—", title: "Dinner · 대전 맛집 네트워킹", kind: "dinner", note: "예약된 식당으로 함께 이동합니다." },
];

window.SPEAKERS = SPEAKERS;
window.PROGRAM = PROGRAM;
