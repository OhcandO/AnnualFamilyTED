const TedInvitation = () => {
  return (
    <section id="invitation" data-screen-label="02 Invitation" className="relative bg-ink py-28 md:py-40 border-t hairline">
      <div className="max-w-[1340px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-[2px] bg-red"></span>
            <span className="eyebrow text-red">02 · Invitation</span>
          </div>
          <div className="display text-chalk text-4xl md:text-5xl">초대의<br/>글</div>
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <p className="text-[26px] md:text-[40px] font-semibold leading-[1.3] text-chalk tracking-tight">
            우리는 자주 모이지만,
            서로가 어떤 일에 <span className="text-red">열정을 쏟고 있는지</span>
            온전히 들여다볼 기회는 적었습니다.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-10 text-[15px] leading-[1.85] text-muted">
            <p>
              새롭게 가족이 된 사람,<br/>
              새로운 커리어를 시작한 사람,<br/>
              독특한 취미에 깊이 빠진 사람.
            </p>
            <p>
              판을 깔고, 마이크를 켜고,
              제대로 각자의 영역을 소개하는{" "}
              <span className="text-chalk font-semibold">첫 번째 무대</span>에 당신을 초대합니다.
            </p>
          </div>

          <div className="mt-14 inline-flex items-center gap-3 text-dim">
            <span className="ted-mark px-2 py-0.5 text-sm">FI</span>
            <span className="eyebrow">Hosted by Family · Vol. 01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
window.TedInvitation = TedInvitation;
