const TedSpeakerCard = ({ s }) => {
  const { Clock, Mic, Play } = window.Lucide;
  return (
    <article className="nf-card group relative w-[280px] md:w-[320px] shrink-0 bg-panel border hairline overflow-hidden">
      {/* poster */}
      <div className={`relative aspect-[3/4] overflow-hidden ${s.secret ? "poster-secret" : "poster"}`}>
        {!s.secret ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 rounded-full border border-white/15 flex items-center justify-center mb-5">
              <Mic size={26} strokeWidth={1.4} className="text-chalk/40"/>
            </div>
            <div className="eyebrow text-dim">Portrait</div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="display text-red text-8xl">?</div>
            <div className="eyebrow text-chalk/60 mt-3">Identity classified</div>
          </div>
        )}

        {/* top tabs */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="ted-mark px-2 py-0.5 text-sm leading-none">N°{s.no}</span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-ink/70 backdrop-blur px-2.5 py-1 border hairline">
          <Clock size={11} strokeWidth={1.8} className="text-red"/>
          <span className="eyebrow text-chalk">{s.minutes} min</span>
        </div>

        {/* hover play affordance */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-red flex items-center justify-center shadow-2xl">
            <Play size={20} fill="currentColor" className="text-white ml-0.5"/>
          </div>
        </div>

        {/* bottom scrim with talk title */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink via-ink/70 to-transparent pt-14">
          <div className="eyebrow text-red mb-1.5">{s.tag}</div>
          <h3 className="display text-chalk text-2xl md:text-[28px] leading-none">{s.talk}</h3>
        </div>
      </div>

      {/* body */}
      <div className="p-5">
        <div className="text-[14px] text-chalk font-semibold leading-snug">{s.title}</div>
        <p className="mt-3 text-[13px] text-muted leading-relaxed line-clamp-3">{s.bio}</p>
        <div className="mt-4 pt-4 border-t hairline flex items-center justify-between">
          <span className="eyebrow text-dim">{s.role}</span>
          {s.draft && <span className="text-[10px] text-red/80 border border-red/40 px-1.5 py-0.5 tracking-widest uppercase">가안</span>}
        </div>
      </div>
    </article>
  );
};

const TedSpeakers = () => {
  const SPEAKERS = window.SPEAKERS;
  const rowRef = React.useRef(null);
  const { ChevronLeft, ChevronRight } = window.Lucide;
  const scrollBy = (dir) => {
    if (rowRef.current) rowRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  return (
    <section id="speakers" data-screen-label="03 Speakers" className="relative bg-ink py-28 md:py-36 border-t hairline">
      <div className="max-w-[1340px] mx-auto px-6 md:px-10">
        {/* heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-red"></span>
              <span className="eyebrow text-red">03 · Speakers</span>
            </div>
            <h2 className="display text-chalk text-5xl md:text-7xl">
              이번 시즌 <span className="text-red">라인업</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] text-muted leading-relaxed">
              각자의 무대 위 15분. 익숙한 얼굴의 가장 낯선 측면을 발견하는 네 편의 이야기.
              발표 순서는 당일 추첨으로 정해집니다.
            </p>
          </div>

          {/* row controls */}
          <div className="flex items-center gap-3">
            <span className="eyebrow text-dim hidden md:block mr-2">04 talks</span>
            <button onClick={() => scrollBy(-1)} aria-label="이전" className="w-11 h-11 border hairline flex items-center justify-center text-chalk hover:bg-white/10 transition-colors">
              <ChevronLeft size={18}/>
            </button>
            <button onClick={() => scrollBy(1)} aria-label="다음" className="w-11 h-11 border hairline flex items-center justify-center text-chalk hover:bg-white/10 transition-colors">
              <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      </div>

      {/* horizontal poster row — bleeds to edge like Netflix */}
      <div ref={rowRef} className="row-scroll overflow-x-auto pb-5">
        <div className="flex gap-5 px-6 md:px-10 min-w-min">
          {SPEAKERS.map((s) => <TedSpeakerCard key={s.no} s={s} />)}
          {/* end card */}
          <div className="w-[280px] md:w-[320px] shrink-0 border border-dashed hairline flex flex-col items-center justify-center text-center p-8 bg-panel/40">
            <div className="display text-dim text-5xl">+</div>
            <div className="mt-4 text-sm text-chalk font-semibold">당신의 무대</div>
            <p className="mt-2 text-[13px] text-muted leading-relaxed">발표를 하고 싶다면<br/>호스트에게 알려주세요.</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1340px] mx-auto px-6 md:px-10 mt-6">
        <div className="text-xs text-dim tracking-wider font-narrow">※ 발표 제목과 소개는 모두 가안이며, 확정 시 업데이트됩니다.</div>
      </div>
    </section>
  );
};
window.TedSpeakers = TedSpeakers;
