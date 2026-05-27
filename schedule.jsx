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

const dotFor = (kind) => {
  switch (kind) {
    case "opening": return { color: "bg-forest", label: "Opening" };
    case "talk": return { color: "bg-forestDeep", label: "Talk" };
    case "break": return { color: "bg-stone", label: "Break" };
    case "reflect": return { color: "bg-moss", label: "Reflection" };
    case "dinner": return { color: "bg-forest", label: "Dinner" };
    default: return { color: "bg-stone", label: "" };
  }
};

const Schedule = () => {
  return (
    <section id="schedule" data-screen-label="04 Schedule" className="relative bg-cream py-28 md:py-40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="eyebrow text-forest">04 — Programme</div>
              <div className="eyebrow text-stone">/ Draft v0.1</div>
            </div>
            <h2 className="display text-5xl md:text-7xl text-ink">
              하루의<br/>
              <span className="italic text-forest">흐름.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/10 border border-forest/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
              <span className="eyebrow text-forest">예시 · Not finalised</span>
            </div>
            <p className="text-[15px] text-ink/75 leading-[1.85]">
              아래 타임라인은 분위기와 호흡을 보여드리기 위한 <span className="text-forest font-medium">가안</span>입니다.
              시간, 순서, 식당 등 세부 사항은 모두 변경될 수 있으며,
              최종 시간표는 RSVP 마감 이후 별도로 안내드립니다.
            </p>
          </div>
        </div>

        {/* draft banner */}
        <div className="relative mb-10 border hairline border-forest/30 bg-paper px-5 py-4 flex items-start gap-4">
          <div className="font-serif italic text-3xl text-forest leading-none mt-0.5">※</div>
          <div className="flex-1">
            <div className="eyebrow text-forest mb-1.5">Draft schedule — for reference only</div>
            <p className="text-[13px] text-ink/70 leading-relaxed">
              아래의 모든 시간과 항목은 <span className="italic text-forest font-medium">예시</span>입니다.
              실제 일정은 발표자 라인업과 가족 일정에 맞추어 함께 다듬어 갈 예정이에요.
            </p>
          </div>
          <div className="hidden md:block font-serif italic text-stone text-sm self-end">v0.1 · TBD</div>
        </div>

        {/* timeline */}
        <div className="relative grid grid-cols-12 gap-6">
          {/* vertical line */}
          <div className="hidden md:block absolute left-[calc(16.6667%+12px)] top-2 bottom-2 w-px bg-line"></div>

          <div className="col-span-12 md:col-span-10 md:col-start-2 space-y-2">
            {PROGRAM.map((p, i) => {
              const d = dotFor(p.kind);
              return (
                <div key={i} className="relative grid grid-cols-12 items-start gap-6 py-5 border-b hairline last:border-b-0 group">
                  {/* time */}
                  <div className="col-span-4 md:col-span-2 pl-0 md:pl-0">
                    <div className="font-serif text-2xl md:text-3xl text-forest leading-none tabular-nums">{p.time}</div>
                    <div className="eyebrow text-stone mt-2">→ {p.end}</div>
                  </div>

                  {/* dot column (desktop) */}
                  <div className="hidden md:flex col-span-1 justify-center pt-3">
                    <div className={`w-3 h-3 rounded-full ${d.color} ring-4 ring-cream`}></div>
                  </div>

                  {/* body */}
                  <div className="col-span-8 md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <div className="font-serif text-xl md:text-[26px] text-ink leading-tight">{p.title}</div>
                      <span className="eyebrow text-stone">{d.label}</span>
                    </div>
                    <div className="mt-2 text-[14px] text-ink/70 leading-relaxed">{p.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-stone">
          <div className="rule flex-1"></div>
          <div className="font-serif italic">— 위 시간표는 예시이며, 최종 안내는 추후 공유드립니다.</div>
          <div className="rule flex-1"></div>
        </div>
      </div>
    </section>
  );
};
window.Schedule = Schedule;
