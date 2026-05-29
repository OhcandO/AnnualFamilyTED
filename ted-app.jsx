const TedFooter = () => (
  <footer className="bg-ink border-t hairline py-16">
    <div className="max-w-[1340px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-6">
        <div className="flex items-center gap-3 mb-5">
          <span className="ted-mark px-2 py-0.5 text-lg leading-none">FI</span>
          <span className="eyebrow text-muted">Family Insights</span>
        </div>
        <div className="display text-chalk text-5xl md:text-6xl">
          IDEAS WORTH<br/><span className="text-red">A SUNDAY.</span>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 text-sm text-muted space-y-2">
        <div className="eyebrow text-dim mb-3">Edition</div>
        <div>Vol. 01 — The First Stage</div>
        <div>대전 · 2026년 7월</div>
        <div>By invitation only</div>
      </div>
      <div className="col-span-6 md:col-span-3 text-sm text-muted space-y-2">
        <div className="eyebrow text-dim mb-3">With love</div>
        <div>호스트 일동</div>
        <div className="text-chalk font-semibold">15분, 한 사람의 목소리.</div>
      </div>
    </div>
    <div className="max-w-[1340px] mx-auto px-6 md:px-10 mt-14 pt-6 border-t hairline flex flex-wrap items-center justify-between gap-3 text-xs text-dim tracking-wider">
      <div>© 2026 — A private family gathering.</div>
      <div className="font-narrow">Family Insights · Dark Edition</div>
    </div>
  </footer>
);

const TedApp = () => (
  <div className="min-h-screen w-full">
    <window.TedHero/>
    <window.TedInvitation/>
    <window.TedSpeakers/>
    <window.TedSchedule/>
    <window.TedRSVP/>
    <TedFooter/>
  </div>
);

function mountTed() {
  ReactDOM.createRoot(document.getElementById("root")).render(<TedApp/>);
}
if (window.__lucideReady) mountTed();
else window.addEventListener("lucide-ready", mountTed, { once: true });
