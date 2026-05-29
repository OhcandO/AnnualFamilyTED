const OOPS_STYLES_DARK = `
@keyframes fiOverlayInDark { from { opacity: 0; } to { opacity: 1; } }
@keyframes fiPopInDark {
  0%   { transform: scale(0.6) rotate(-4deg); opacity: 0; }
  55%  { transform: scale(1.06) rotate(2deg);  opacity: 1; }
  80%  { transform: scale(0.98) rotate(-1deg); }
  100% { transform: scale(1) rotate(0deg); }
}
@keyframes fiEmojiWobbleDark {
  0%, 100% { transform: rotate(-10deg) translateY(0); }
  25%      { transform: rotate(8deg)  translateY(-6px); }
  50%      { transform: rotate(-4deg) translateY(0); }
  75%      { transform: rotate(12deg) translateY(-3px); }
}
.fi-oops-overlay-d {
  position: fixed; inset: 0;
  z-index: 10000;
  display: flex; align-items: center; justify-content: center;
  padding:
    max(16px, env(safe-area-inset-top))
    max(16px, env(safe-area-inset-right))
    max(16px, env(safe-area-inset-bottom))
    max(16px, env(safe-area-inset-left));
  background: rgba(0, 0, 0, 0.72);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  animation: fiOverlayInDark 0.18s ease-out;
  overscroll-behavior: contain;
}
.fi-oops-card-d {
  position: relative;
  width: min(440px, 100%);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  background: #141416;
  border: 2px solid #E62B1E;
  padding: 44px 30px 30px;
  text-align: center;
  box-shadow:
    0 30px 80px -20px rgba(0, 0, 0, 0.9),
    0 0 0 6px rgba(230, 43, 30, 0.08);
  animation: fiPopInDark 0.5s cubic-bezier(.34,1.56,.64,1);
  -webkit-overflow-scrolling: touch;
}
.fi-oops-x-d {
  position: absolute; top: 8px; right: 8px;
  width: 44px; height: 44px;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; border: 0;
  color: #F5F5F4; cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.fi-oops-emoji-d {
  display: inline-block;
  font-size: 80px; line-height: 1;
  transform-origin: 50% 75%;
  animation: fiEmojiWobbleDark 1.6s ease-in-out infinite;
}
.fi-oops-title-d {
  font-family: "Archivo", system-ui, sans-serif;
  font-weight: 900;
  font-size: 64px;
  line-height: 1;
  color: #E62B1E;
  margin-top: 18px;
  letter-spacing: -0.02em;
  transform: rotate(-3deg);
}
.fi-oops-body-d {
  font-family: "Archivo", system-ui, sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: #F5F5F4;
  margin-top: 18px;
  line-height: 1.4;
}
.fi-oops-body-d em {
  font-style: italic;
  color: #E62B1E;
  font-weight: 800;
  background: rgba(230, 43, 30, 0.12);
  padding: 0 6px;
}
.fi-oops-sub-d {
  font-family: "Archivo", system-ui, sans-serif;
  font-size: 13px;
  color: #A1A1A6;
  margin-top: 14px;
  line-height: 1.7;
}
.fi-oops-cta-d {
  margin-top: 28px;
  width: 100%;
  min-height: 48px;
  padding: 14px 18px;
  background: #E62B1E;
  color: #fff;
  font-family: "Archivo", system-ui, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: background .2s ease;
}
.fi-oops-cta-d:hover { background: #B81F15; }
@media (max-width: 480px) {
  .fi-oops-card-d { padding: 36px 22px 26px; }
  .fi-oops-title-d { font-size: 52px; }
  .fi-oops-body-d { font-size: 20px; }
  .fi-oops-emoji-d { font-size: 68px; }
}
`;

const TedRSVP = () => {
  const { MapPin, Check, X, HelpCircle, Mail, Phone } = window.Lucide;
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
          active ? "border-red bg-red text-white" : "border-edge bg-panel2 hover:border-white/40 text-chalk"
        }`}
      >
        <div className="flex items-center justify-between">
          <Icon size={16} strokeWidth={1.8}/>
          <span className={`w-3 h-3 rounded-full border ${active ? "bg-white border-white" : "border-dim"}`}></span>
        </div>
        <div className="mt-6 display text-2xl leading-none">{label}</div>
        <div className={`mt-2 text-xs ${active ? "text-white/80" : "text-dim"}`}>{sub}</div>
      </button>
    );
  };

  return (
    <section id="rsvp" data-screen-label="05 RSVP" className="relative bg-ink py-28 md:py-36 border-t hairline">
      <style dangerouslySetInnerHTML={{ __html: OOPS_STYLES_DARK }} />

      <div className="max-w-[1340px] mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-[2px] bg-red"></span>
            <span className="eyebrow text-red">05 · RSVP & Location</span>
          </div>
          <h2 className="display text-chalk text-5xl md:text-7xl">
            무대에서 <span className="text-red">만나요</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted leading-relaxed">
            자리 수가 한정되어 있어, 미리 참석 여부를 알려주시면 준비에 큰 도움이 됩니다.
            회신 마감은 2026년 6월 30일입니다.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* form */}
          <div className="col-span-12 lg:col-span-7 bg-panel border hairline p-7 md:p-10">
            <form onSubmit={submit}>
              <div className="eyebrow text-dim">Step 01 · 참석 여부</div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Option value="yes" label="Yes" sub="기쁘게 참석합니다" icon={Check}/>
                <Option value="maybe" label="Maybe" sub="아직 조정 중입니다" icon={HelpCircle}/>
                <Option value="no" label="No" sub="이번엔 어렵습니다" icon={X}/>
              </div>

              <div className="mt-9">
                <div className="eyebrow text-dim mb-3">Step 02 · 성함</div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="가족 내 호칭 또는 이름"
                  className="w-full bg-transparent border-b border-edge py-3 text-chalk text-xl placeholder-dim focus:outline-none focus:border-red transition-colors"/>
              </div>

              <div className="mt-9">
                <div className="eyebrow text-dim mb-3">Step 03 · 한마디 (선택)</div>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3}
                  placeholder="식사 알러지, 동반자, 미리 듣고 싶은 이야기가 있다면…"
                  className="w-full bg-panel2 border border-edge p-4 text-chalk text-[15px] placeholder-dim focus:outline-none focus:border-red transition-colors resize-none"/>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4 justify-between">
                <div className="text-xs text-dim">회신 마감 · 2026. 06. 30.</div>
                <button type="submit" disabled={!attendance || !name.trim()}
                  className="btn-red px-8 py-3.5 text-[15px] font-semibold disabled:opacity-30 disabled:cursor-not-allowed">
                  회신 보내기 →
                </button>
              </div>
            </form>
          </div>

          {/* location */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="bg-panel border hairline overflow-hidden flex-1 flex flex-col">
              <div className="map-dark aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-ink/80 backdrop-blur px-4 py-2.5 border hairline flex items-center gap-2">
                    <MapPin size={14} className="text-red" strokeWidth={2}/>
                    <span className="display text-chalk text-lg">대전, 모처</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 eyebrow text-dim bg-ink/60 px-2 py-1">Map</div>
              </div>
              <div className="p-6 md:p-7">
                <div className="eyebrow text-dim mb-3">Venue</div>
                <div className="display text-chalk text-2xl">대전광역시 · Private</div>
                <p className="mt-3 text-[14px] text-muted leading-relaxed">
                  KTX 대전역에서 차로 약 15분. RSVP 회신 후 정확한 주소·주차 안내·셔틀 시간표를 개별로 보내드립니다.
                </p>
              </div>
            </div>

            <div className="bg-red text-white p-6 md:p-7">
              <div className="eyebrow text-white/70 mb-3">Hosts</div>
              <div className="display text-2xl">문의가 있으신가요?</div>
              <div className="mt-5 space-y-3 text-[14px] text-white/90">
                <div className="flex items-center gap-3"><Mail size={14} strokeWidth={1.8}/><span>family.insights.2026@home</span></div>
                <div className="flex items-center gap-3"><Phone size={14} strokeWidth={1.8}/><span>가족 단체 채팅방으로 연락 주세요.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {oopsOpen && (
        <div
          className="fi-oops-overlay-d"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fi-oops-title-d"
          onClick={() => setOopsOpen(false)}
        >
          <div className="fi-oops-card-d" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="fi-oops-x-d"
              aria-label="닫기"
              onClick={() => setOopsOpen(false)}
            >
              <X size={20} strokeWidth={2}/>
            </button>
            <div className="fi-oops-emoji-d" aria-hidden="true">🙈</div>
            <div id="fi-oops-title-d" className="fi-oops-title-d">아이쿠!</div>
            <p className="fi-oops-body-d">
              그냥 <em>직접</em> 연락주시겠어요? 😅
            </p>
            <p className="fi-oops-sub-d">
              사실 이 폼은 그저 무대 소품이에요.<br/>
              가족 단체 채팅방으로 살짝 알려주세요.
            </p>
            <button type="button" className="fi-oops-cta-d" onClick={() => setOopsOpen(false)}>
              네, 직접 연락할게요 →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
window.TedRSVP = TedRSVP;
