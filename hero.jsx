const Hero = () => {
  const { ArrowDown, MapPin, CalendarDays } = window.Lucide;
  return (
    <section id="hero" data-screen-label="01 Hero" className="relative min-h-screen w-full overflow-hidden bg-paper">
      {/* texture layer */}
      <div className="absolute inset-0 grain opacity-60 pointer-events-none"></div>

      {/* top bar */}
      <header className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-forest flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-forest"></div>
          </div>
          <span className="eyebrow text-forest">Family Insights · Vol. 01</span>
        </div>
        <nav className="hidden md:flex items-center gap-9 eyebrow text-ink/70">
          <a href="#invitation" className="hover:text-forest transition-colors">Invitation</a>
          <a href="#speakers" className="hover:text-forest transition-colors">Speakers</a>
          <a href="#schedule" className="hover:text-forest transition-colors">Schedule</a>
          <a href="#rsvp" className="hover:text-forest transition-colors">RSVP</a>
        </nav>
        <div className="hidden md:block eyebrow text-ink/50">Daejeon · 2026</div>
      </header>

      {/* main */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-24 md:pb-32 grid grid-cols-12 gap-6">
        {/* left rail meta */}
        <aside className="hidden md:flex col-span-2 flex-col gap-10 pt-6">
          <div>
            <div className="eyebrow text-stone mb-2">Edition</div>
            <div className="font-serif text-2xl text-forest">N° 01</div>
          </div>
          <div>
            <div className="eyebrow text-stone mb-2">Format</div>
            <div className="text-sm text-ink/80 leading-relaxed">15 minutes,<br/>per voice.</div>
          </div>
          <div className="mt-auto">
            <div className="eyebrow text-stone mb-2">Press</div>
            <div className="text-sm text-ink/80 leading-relaxed">A small,<br/>private gathering.</div>
          </div>
        </aside>

        {/* center column — title */}
        <div className="col-span-12 md:col-span-7">
          <div className="eyebrow text-forest mb-8">— A Family Conference, July 2026</div>
          <h1 className="display text-[14vw] md:text-[110px] leading-[0.95] text-ink">
            Family<br/>
            <span className="italic font-light text-forest">Insights</span><br/>
            <span className="text-stone font-light">2026</span>
          </h1>

          <p className="font-serif italic text-2xl md:text-3xl text-forest mt-10 max-w-xl leading-snug">
            우리의 세계를<br/>연결하다.
          </p>

          <p className="mt-8 max-w-md text-ink/70 leading-relaxed text-[15px]">
            서로의 삶, 일, 그리고 취미에 대해 깊이 알아보는
            <span className="font-medium text-forest"> 15분의 마법</span>.
            가족이 처음으로 무대 위에 오르는 하루.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#rsvp" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide">
              참석 회신하기
            </a>
            <a href="#speakers" className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide">
              발표자 라인업 →
            </a>
          </div>
        </div>

        {/* right column — date & venue card */}
        <div className="col-span-12 md:col-span-3 md:pl-6 md:border-l hairline md:border-line">
          <div className="md:pt-6 space-y-10">
            <div>
              <div className="eyebrow text-stone mb-3 flex items-center gap-2">
                <CalendarDays size={12} strokeWidth={1.6}/> When
              </div>
              <div className="font-serif text-4xl text-forest leading-none">07<span className="text-stone">/26</span></div>
              <div className="mt-2 text-sm text-ink/70">2026 · 7월의 어느 주말<br/>토요일, 오후 2시 — 저녁</div>
            </div>

            <div>
              <div className="eyebrow text-stone mb-3 flex items-center gap-2">
                <MapPin size={12} strokeWidth={1.6}/> Where
              </div>
              <div className="font-serif text-2xl text-forest leading-tight">대전광역시<br/><span className="italic text-stone">모처(某處).</span></div>
              <div className="mt-2 text-sm text-ink/70">상세 주소는 RSVP 이후<br/>개별로 안내드립니다.</div>
            </div>

            <div className="pt-6 border-t hairline">
              <div className="eyebrow text-stone mb-2">Attendance</div>
              <div className="text-sm text-ink/80">By invitation only · 12 seats</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 pb-10 flex items-end justify-between">
        <div className="hidden md:block text-xs text-stone tracking-wider">
          ※ 한 사람당 15분 · 슬라이드 자유 · 박수는 길게.
        </div>
        <a href="#invitation" className="flex items-center gap-3 text-forest eyebrow scroll-cue">
          <span>Scroll</span>
          <ArrowDown size={14} strokeWidth={1.5}/>
        </a>
        <div className="hidden md:block text-xs text-stone tracking-wider font-serif italic">
          Vol. 01 — The First Stage
        </div>
      </div>
    </section>
  );
};
window.Hero = Hero;
