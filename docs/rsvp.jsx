const OOPS_STYLES_LIGHT = `
@keyframes fiOverlayIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fiPopIn {
  0%   { transform: scale(0.6) rotate(-4deg); opacity: 0; }
  55%  { transform: scale(1.06) rotate(2deg);  opacity: 1; }
  80%  { transform: scale(0.98) rotate(-1deg); }
  100% { transform: scale(1) rotate(0deg); }
}
@keyframes fiEmojiWobble {
  0%, 100% { transform: rotate(-10deg) translateY(0); }
  25%      { transform: rotate(8deg)  translateY(-6px); }
  50%      { transform: rotate(-4deg) translateY(0); }
  75%      { transform: rotate(12deg) translateY(-3px); }
}
.fi-oops-overlay {
  position: fixed; inset: 0;
  z-index: 10000;
  display: flex; align-items: center; justify-content: center;
  padding:
    max(16px, env(safe-area-inset-top))
    max(16px, env(safe-area-inset-right))
    max(16px, env(safe-area-inset-bottom))
    max(16px, env(safe-area-inset-left));
  background: rgba(27, 42, 35, 0.55);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  animation: fiOverlayIn 0.18s ease-out;
  overscroll-behavior: contain;
}
.fi-oops-card {
  position: relative;
  width: min(420px, 100%);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  background: #FBF8F1;
  border: 2px solid #2A4636;
  padding: 40px 28px 28px;
  text-align: center;
  box-shadow: 0 30px 80px -20px rgba(27, 42, 35, 0.45);
  animation: fiPopIn 0.5s cubic-bezier(.34,1.56,.64,1);
  -webkit-overflow-scrolling: touch;
}
.fi-oops-x {
  position: absolute; top: 8px; right: 8px;
  width: 44px; height: 44px;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; border: 0;
  color: #2A4636; cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.fi-oops-emoji {
  display: inline-block;
  font-size: 76px; line-height: 1;
  transform-origin: 50% 75%;
  animation: fiEmojiWobble 1.6s ease-in-out infinite;
}
.fi-oops-title {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 60px;
  line-height: 1;
  color: #2A4636;
  margin-top: 18px;
  letter-spacing: -0.01em;
  transform: rotate(-2deg);
}
.fi-oops-body {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  color: #1B2A23;
  margin-top: 16px;
  line-height: 1.4;
}
.fi-oops-body em { font-style: italic; color: #2A4636; font-weight: 500; }
.fi-oops-sub {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 13px;
  color: #8A8475;
  margin-top: 14px;
  line-height: 1.7;
}
.fi-oops-cta {
  margin-top: 26px;
  width: 100%;
  min-height: 48px;
  padding: 14px 18px;
  background: #2A4636;
  color: #F6F1E7;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: background .2s ease;
}
.fi-oops-cta:hover { background: #1F362A; }
@media (max-width: 480px) {
  .fi-oops-card { padding: 32px 22px 24px; }
  .fi-oops-title { font-size: 50px; }
  .fi-oops-body { font-size: 21px; }
  .fi-oops-emoji { font-size: 64px; }
}
`;

const RSVP = () => {
  const { MapPin, X, HelpCircle, Check, Mail, Phone } = window.Lucide;
  const [attendance, setAttendance] = React.useState(null);
  const [name, setName] = React.useState("");
  const [note, setNote] = React.useState("");
  const [oopsOpen, setOopsOpen] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!attendance || !name.trim()) return;
    setOopsOpen(true);
  };

  React.useEffect(() => {
    if (!oopsOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setOopsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [oopsOpen]);

  const Option = ({ value, label, sub, icon: Icon }) => {
    const active = attendance === value;
    return (
      <button
        type="button"
        onClick={() => setAttendance(value)}
        className={`flex-1 p-5 text-left border transition-all duration-200 ${
          active
            ? "border-forest bg-forest text-cream"
            : "border-line bg-paper hover:border-forest text-ink"
        }`}
      >
        <div className="flex items-center justify-between">
          <Icon size={16} strokeWidth={1.6}/>
          <div className={`w-3 h-3 rounded-full border ${active ? "bg-cream border-cream" : "border-stone"}`}></div>
        </div>
        <div className="mt-6 font-serif text-2xl leading-none">{label}</div>
        <div className={`mt-2 text-xs ${active ? "text-cream/75" : "text-stone"}`}>{sub}</div>
      </button>
    );
  };

  return (
    <section id="rsvp" data-screen-label="05 RSVP" className="relative bg-paper py-28 md:py-40">
      <style dangerouslySetInnerHTML={{ __html: OOPS_STYLES_LIGHT }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow text-forest mb-4">05 — RSVP &amp; Location</div>
            <h2 className="display text-5xl md:text-7xl text-ink">
              회신해<br/>
              <span className="italic text-forest">주세요.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] text-ink/70 leading-[1.85]">
              자리 수가 한정되어 있어, 미리 참석 여부를 알려주시면
              준비에 큰 도움이 됩니다. 6월 30일까지 부탁드립니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* RSVP form */}
          <div className="col-span-12 lg:col-span-7 bg-cream p-8 md:p-12 border hairline">
            <form onSubmit={submit}>
              <div className="eyebrow text-stone">Step 01 — 참석 여부</div>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Option value="yes" label="Yes" sub="기쁘게 참석합니다" icon={Check}/>
                <Option value="maybe" label="Maybe" sub="아직 조정 중입니다" icon={HelpCircle}/>
                <Option value="no" label="No" sub="이번엔 함께하지 못합니다" icon={X}/>
              </div>

              <div className="mt-10">
                <div className="eyebrow text-stone mb-3">Step 02 — 성함</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="가족 내 호칭 또는 이름"
                  className="w-full bg-transparent border-b hairline border-line py-3 text-ink font-serif text-2xl placeholder-stone/60 focus:outline-none focus:border-forest transition-colors"
                />
              </div>

              <div className="mt-10">
                <div className="eyebrow text-stone mb-3">Step 03 — 한마디 (선택)</div>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="식사 알러지, 동반자, 혹은 미리 듣고 싶은 이야기가 있다면…"
                  className="w-full bg-paper border hairline border-line p-4 text-ink text-[15px] placeholder-stone/60 focus:outline-none focus:border-forest transition-colors resize-none"
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 justify-between">
                <div className="text-xs text-stone">회신 마감 · 2026. 06. 30.</div>
                <button
                  type="submit"
                  disabled={!attendance || !name.trim()}
                  className="btn-primary px-8 py-3.5 text-sm tracking-wide disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  회신 보내기 →
                </button>
              </div>
            </form>
          </div>

          {/* Location */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="bg-cream border hairline overflow-hidden flex-1 flex flex-col">
              <div className="map-placeholder aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-paper px-4 py-2.5 shadow-sm flex items-center gap-2 border hairline">
                    <MapPin size={14} className="text-forest" strokeWidth={1.8}/>
                    <span className="font-serif italic text-forest">대전, 모처</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 eyebrow text-stone bg-paper/80 px-2 py-1">Map</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="eyebrow text-stone mb-3">Venue</div>
                <div className="font-serif text-2xl text-ink leading-tight">대전광역시<br/><span className="italic text-stone">private residence.</span></div>
                <p className="mt-4 text-[14px] text-ink/70 leading-relaxed">
                  KTX 대전역에서 차로 약 15분. RSVP 회신 후 정확한 주소와
                  주차 안내, 셔틀 시간표를 개별로 보내드립니다.
                </p>
              </div>
            </div>

            <div className="bg-forest text-cream p-6 md:p-8">
              <div className="eyebrow text-cream/60 mb-3">Hosts</div>
              <div className="font-serif text-2xl">문의가 있으신가요?</div>
              <div className="mt-5 space-y-3 text-[14px] text-cream/85">
                <div className="flex items-center gap-3">
                  <Mail size={14} strokeWidth={1.6}/>
                  <span>family.insights.2026@home</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} strokeWidth={1.6}/>
                  <span>가족 단체 채팅방으로 연락 주세요.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {oopsOpen && (
        <div
          className="fi-oops-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fi-oops-title"
          onClick={() => setOopsOpen(false)}
        >
          <div className="fi-oops-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="fi-oops-x"
              aria-label="닫기"
              onClick={() => setOopsOpen(false)}
            >
              <X size={20} strokeWidth={1.8}/>
            </button>
            <div className="fi-oops-emoji" aria-hidden="true">🙈</div>
            <div id="fi-oops-title" className="fi-oops-title">아이쿠!</div>
            <p className="fi-oops-body">
              그냥 <em>직접</em> 연락주시겠어요? 😅
            </p>
            <p className="fi-oops-sub">
              사실 이 폼은 그저 장식이에요.<br/>
              가족 단체 채팅방으로 살짝 알려주세요.
            </p>
            <button type="button" className="fi-oops-cta" onClick={() => setOopsOpen(false)}>
              네, 직접 연락할게요 →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
window.RSVP = RSVP;
