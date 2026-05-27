const RSVP = () => {
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
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-forest text-cream flex items-center justify-center">
                  <Check size={22} strokeWidth={1.8}/>
                </div>
                <div className="mt-6 font-serif text-3xl text-forest">
                  회신이 도착했습니다.
                </div>
                <p className="mt-3 text-ink/70 text-sm">
                  {name} 님, {attendance === "yes" && "7월의 무대에서 뵙겠습니다."}
                  {attendance === "no" && "다음 자리에서 꼭 뵐 수 있기를."}
                  {attendance === "maybe" && "마음이 정해지시면 언제든 다시 알려주세요."}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setAttendance(null); setName(""); setNote(""); }}
                  className="mt-8 eyebrow text-forest underline underline-offset-4">
                  다시 작성하기
                </button>
              </div>
            ) : (
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
            )}
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
    </section>
  );
};
window.RSVP = RSVP;
