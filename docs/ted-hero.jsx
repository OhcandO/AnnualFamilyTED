const TedHero = () => {
  const { ArrowDown, MapPin, CalendarDays, Play } = window.Lucide;
  return (
    <section id="hero" data-screen-label="01 Hero" className="relative min-h-screen w-full overflow-hidden stage-bg flex flex-col">
      <div className="absolute inset-0 grain opacity-70 pointer-events-none"></div>
      {/* thin red stage line at very top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-red"></div>

      {/* nav */}
      <header className="relative z-20 max-w-[1340px] mx-auto w-full px-6 md:px-10 pt-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="ted-mark px-2 py-0.5 text-lg leading-none tracking-wide">FI</span>
          <span className="eyebrow text-chalk/80">Family Insights</span>
        </div>
        <nav className="hidden md:flex items-center gap-9 eyebrow text-muted">
          <a href="#invitation" className="hover:text-chalk transition-colors">Invitation</a>
          <a href="#speakers" className="hover:text-chalk transition-colors">Speakers</a>
          <a href="#schedule" className="hover:text-chalk transition-colors">Schedule</a>
          <a href="#rsvp" className="hover:text-chalk transition-colors">RSVP</a>
        </nav>
        <a href="#rsvp" className="btn-red px-4 py-2 eyebrow tracking-widest whitespace-nowrap">참석 회신</a>
      </header>

      {/* main */}
      <div className="relative z-10 flex-1 max-w-[1340px] mx-auto w-full px-6 md:px-10 flex flex-col justify-center pt-10 pb-40">
        <div className="flex items-center gap-3 mb-7">
          <span className="inline-block bg-red text-ink px-3 py-1.5 text-sm md:text-base font-extrabold uppercase tracking-[0.12em] leading-none whitespace-nowrap">Family Insights</span>
          <span className="eyebrow text-red whitespace-nowrap">× 2026</span>
        </div>

        <h1 className="display text-chalk text-[17vw] md:text-[170px] leading-[0.86]">
          우리의<br/>
          세계를<br/>
          <span className="text-red">연결</span>하다
        </h1>

        <div className="mt-9 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="max-w-md text-[16px] md:text-[17px] text-muted leading-relaxed">
            서로의 삶, 일, 그리고 취미에 대해 깊이 알아보는{" "}
            <span className="text-chalk font-semibold">15분의 무대.</span><br/>
            가족이 처음으로 마이크를 잡는 하루.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#speakers" className="btn-red inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold">
              <Play size={17} strokeWidth={2} fill="currentColor"/> 라인업 보기
            </a>
            <a href="#invitation" className="btn-line inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium">
              초대의 글
            </a>
          </div>
        </div>

        {/* meta strip */}
        <div className="mt-12 grid grid-cols-2 md:flex md:items-center gap-y-6 gap-x-10 border-t hairline pt-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <CalendarDays size={16} className="text-red" strokeWidth={1.8}/>
            <div>
              <div className="eyebrow text-dim mb-0.5">When</div>
              <div className="text-sm text-chalk">2026. 7월 어느 주말 · 토 14:00</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-red" strokeWidth={1.8}/>
            <div>
              <div className="eyebrow text-dim mb-0.5">Where</div>
              <div className="text-sm text-chalk">대전광역시 모처(某處)</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="tednum text-red text-2xl leading-none">04</span>
            <div>
              <div className="eyebrow text-dim mb-0.5">Talks</div>
              <div className="text-sm text-chalk">발표 · 각 15분</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom scrim + scroll cue */}
      <div className="absolute bottom-0 left-0 right-0 h-40 scrim-bottom pointer-events-none"></div>
      <a href="#invitation" className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-chalk/70 scroll-cue">
        <span className="eyebrow">Scroll</span>
        <ArrowDown size={16} strokeWidth={1.6}/>
      </a>
    </section>
  );
};
window.TedHero = TedHero;
