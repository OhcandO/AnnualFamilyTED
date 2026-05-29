const dotFor = (kind) => {
  switch (kind) {
    case "opening": return { color: "bg-red", label: "Opening" };
    case "talk": return { color: "bg-red", label: "Talk" };
    case "break": return { color: "bg-dim", label: "Break" };
    case "reflect": return { color: "bg-chalk", label: "Reflection" };
    case "dinner": return { color: "bg-red", label: "Dinner" };
    default: return { color: "bg-dim", label: "" };
  }
};

const TedSchedule = () => {
  const PROGRAM = window.PROGRAM;
  return (
    <section id="schedule" data-screen-label="04 Schedule" className="relative bg-panel py-28 md:py-36 border-t hairline">
      <div className="max-w-[1340px] mx-auto px-6 md:px-10">
        {/* heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-red"></span>
              <span className="eyebrow text-red">04 · Programme</span>
              <span className="eyebrow text-dim">/ Draft v0.1</span>
            </div>
            <h2 className="display text-chalk text-5xl md:text-7xl">
              하루의 <span className="text-red">흐름</span>
            </h2>
          </div>
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-red/40 bg-red/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
              <span className="eyebrow text-red">예시 · Not finalised</span>
            </div>
            <p className="text-[15px] text-muted leading-relaxed">
              아래 타임라인은 분위기와 호흡을 보여드리기 위한 <span className="text-chalk font-semibold">가안</span>입니다.
              시간·순서·식당 등 세부는 변경될 수 있으며, 최종 시간표는 RSVP 마감 이후 안내드립니다.
            </p>
          </div>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="absolute left-[88px] md:left-[140px] top-3 bottom-3 w-px bg-edge"></div>
          <div className="space-y-0">
            {PROGRAM.map((p, i) => {
              const d = dotFor(p.kind);
              return (
                <div key={i} className="relative grid grid-cols-[80px_1fr] md:grid-cols-[132px_1fr] gap-5 md:gap-8 py-5 border-b hairline last:border-b-0 group">
                  <div className="text-right pr-3 md:pr-5">
                    <div className="tednum text-2xl md:text-3xl text-chalk leading-none tabular-nums">{p.time}</div>
                    <div className="eyebrow text-dim mt-2">→ {p.end}</div>
                  </div>
                  <div className="relative pl-7 md:pl-9">
                    <span className={`absolute left-[-4px] md:left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${d.color} ring-4 ring-panel`}></span>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <div className="text-lg md:text-xl font-bold text-chalk leading-tight">{p.title}</div>
                      <span className="eyebrow text-dim">{d.label}</span>
                    </div>
                    <div className="mt-1.5 text-[14px] text-muted leading-relaxed">{p.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-xs text-dim tracking-wider font-narrow">※ 위 시간표는 예시이며, 최종 안내는 추후 공유드립니다.</div>
      </div>
    </section>
  );
};
window.TedSchedule = TedSchedule;
