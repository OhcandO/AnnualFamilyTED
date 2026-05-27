const SPEAKERS = [
  {
    no: "01",
    talk: "(가칭)새로운 시작",
    role: "이직자 / Career Pivot",
    title: "(가칭)데이터가 세상을 바꾸는 법",
    bio: "숫자 너머에 사람이 있다고 믿는 사람. 10년의 커리어를 뒤로하고 새 문 앞에 선 이야기.",
    minutes: 15,
    tag: "Career",
  },
  {
    no: "02",
    talk: "(예시)우리의 뉴페이스",
    role: "신규 편입 가족 / New Member",
    title: "나와 우리가 되어가는 과정",
    bio: "어색했던 첫인사부터 지금까지. 새로운 호칭 앞에서 매일을 배워가는 사람의 솔직한 기록.",
    minutes: 15,
    tag: "Story",
  },
  {
    no: "03",
    talk: "(가령)덕업일치",
    role: "독특한 취미 / Devoted Hobbyist",
    title: "주말을 완벽하게 보내는 나만의 비법",
    bio: "월요일을 위해 사는 것이 아니라, 토요일을 설계하며 산다. 한 사람의 작은 의식들에 대하여.",
    minutes: 15,
    tag: "Craft",
  },
  {
    no: "04",
    talk: "Surprise Talk",
    role: "??? / Wildcard",
    title: "당일에만 공개되는 발표",
    bio: "누구의 차례일지, 어떤 이야기일지 — 시작 전까지 비밀입니다. 가장 가까운 이의 가장 낯선 면.",
    minutes: 15,
    tag: "Secret",
    secret: true,
  },
];

const SpeakerCard = ({ s, index }) => {
  const { Clock, Mic } = window.Lucide;
  return (
    <article className="group relative bg-paper border hairline overflow-hidden flex flex-col">
      {/* portrait */}
      <div className="relative aspect-[4/5] speaker-portrait overflow-hidden">
        {!s.secret ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="eyebrow text-forest/70">Portrait</div>
              <div className="font-serif italic text-stone text-sm mt-2">{s.role}</div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-forestDeep text-cream">
            <div className="text-center px-6">
              <div className="font-serif text-7xl italic">?</div>
              <div className="eyebrow mt-3 opacity-70">Identity classified</div>
            </div>
          </div>
        )}

        {/* number tab */}
        <div className="absolute top-4 left-4 bg-paper/95 backdrop-blur px-3 py-1.5">
          <span className="num-tab text-lg">N° {s.no}</span>
        </div>

        {/* time tab */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-paper/95 backdrop-blur px-3 py-1.5">
          <Clock size={11} strokeWidth={1.6} className="text-forest"/>
          <span className="eyebrow text-forest">{s.minutes} min</span>
        </div>
      </div>

      {/* body */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="eyebrow text-stone mb-3">{s.tag}</div>
        <h3 className="font-serif text-3xl md:text-[34px] leading-tight text-ink">
          <span className="italic text-forest">“</span>{s.talk}<span className="italic text-forest">”</span>
        </h3>
        <div className="mt-3 text-sm text-forest font-medium">{s.title}</div>
        <p className="mt-5 text-[14px] text-ink/70 leading-[1.75]">{s.bio}</p>

        <div className="mt-6 pt-5 border-t hairline flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone">
            <Mic size={12} strokeWidth={1.6}/>
            <span className="eyebrow">{s.role}</span>
          </div>
          <span className="font-serif italic text-stone text-sm">Speaker</span>
        </div>
      </div>
    </article>
  );
};

const Speakers = () => {
  return (
    <section id="speakers" data-screen-label="03 Speakers" className="relative bg-paper py-28 md:py-40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        {/* heading */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow text-forest mb-4">03 — Speakers</div>
            <h2 className="display text-5xl md:text-7xl text-ink">
              네 개의<br/>
              <span className="italic text-forest font-light">목소리.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-7 self-end">
            <p className="text-[15px] text-ink/75 leading-[1.85]">
              각자의 무대 위 15분. 어떤 이야기는 처음 듣게 될 것이고,
              어떤 이야기는 익숙한 얼굴의 새로운 측면을 발견하게 만들 것입니다.
              모든 발표는 슬라이드와 함께, 혹은 맨몸으로 — 본인의 자유입니다.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((s, i) => <SpeakerCard key={s.no} s={s} index={i}/>)}
        </div>

        {/* footnote */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 text-stone">
          <div className="font-serif italic">— 발표 순서는 추첨으로 결정됩니다.</div>
          <div className="eyebrow">04 talks · 60 minutes on stage</div>
        </div>
      </div>
    </section>
  );
};
window.Speakers = Speakers;
