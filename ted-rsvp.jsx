const TedRSVP = () => {
  const { MapPin, Check, X, HelpCircle, Mail, Phone } = window.Lucide;
  const [attendance, setAttendance] = React.useState(null);
  const [name, setName] = React.useState("");
  const [note, setNote] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!attendance || !name.trim()) return;
    setSubmitted(true);
  };

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
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-red text-white flex items-center justify-center">
                  <Check size={22} strokeWidth={2}/>
                </div>
                <div className="mt-6 display text-3xl text-chalk">회신 완료</div>
                <p className="mt-3 text-muted text-sm">
                  {name} 님, {attendance === "yes" && "7월의 무대에서 뵙겠습니다."}
                  {attendance === "no" && "다음 시즌에 꼭 함께해요."}
                  {attendance === "maybe" && "마음이 정해지면 언제든 다시 알려주세요."}
                </p>
                <button onClick={() => { setSubmitted(false); setAttendance(null); setName(""); setNote(""); }}
                  className="mt-8 eyebrow text-red underline underline-offset-4">다시 작성하기</button>
              </div>
            ) : (
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
            )}
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
    </section>
  );
};
window.TedRSVP = TedRSVP;
