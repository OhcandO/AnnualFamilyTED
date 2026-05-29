const Invitation = () => {
  return (
    <section id="invitation" data-screen-label="02 Invitation" className="relative bg-cream py-28 md:py-40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow text-forest mb-4">02 — Invitation</div>
          <div className="font-serif italic text-forest text-3xl md:text-4xl leading-tight">
            초대의<br/>글.
          </div>
          <div className="mt-10 text-xs text-stone tracking-widest hidden md:block">
            — 호스트 일동
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <div className="font-serif text-[28px] md:text-[40px] leading-[1.35] text-ink">
            <span className="text-forest">“</span>
            우리는 자주 모이지만,<br className="hidden md:block"/>
            서로가 어떤 일에 <em className="italic text-forest">열정을 쏟고 있는지</em><br className="hidden md:block"/>
            온전히 들여다볼 기회는 적었습니다.
            <span className="text-forest">”</span>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 text-[15px] leading-[1.85] text-ink/80">
            <p>
              새롭게 가족이 된 사람,<br/>
              새로운 커리어를 시작한 사람,<br/>
              독특한 취미에 깊이 빠진 사람.
            </p>
            <p>
              판을 깔고, 마이크를 켜고,<br/>
              제대로 각자의 영역을 소개하는<br/>
              <span className="text-forest font-medium">첫 번째 자리</span>에 당신을 초대합니다.
            </p>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <div className="rule flex-1"></div>
            <div className="font-serif italic text-stone">Vol. 01</div>
            <div className="rule flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
window.Invitation = Invitation;
