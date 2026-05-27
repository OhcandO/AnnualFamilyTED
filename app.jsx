const Footer = () => (
  <footer className="bg-forestDeep text-cream py-16">
    <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <div className="font-serif text-5xl md:text-6xl leading-none">
          Family<br/><span className="italic font-light text-cream/80">Insights</span> 2026
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 text-sm text-cream/70 space-y-2">
        <div className="eyebrow text-cream/50 mb-3">Edition</div>
        <div>Vol. 01 — The First Stage</div>
        <div>대전 · 2026년 7월</div>
        <div>By invitation only</div>
      </div>
      <div className="col-span-6 md:col-span-3 text-sm text-cream/70 space-y-2">
        <div className="eyebrow text-cream/50 mb-3">With love</div>
        <div>호스트 일동</div>
        <div className="font-serif italic text-cream/90 text-lg">서로의 세계로<br/>건너가는 하루.</div>
      </div>
    </div>
    <div className="max-w-[1320px] mx-auto px-6 md:px-12 mt-14 pt-6 border-t border-cream/15 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/50 tracking-wider">
      <div>© 2026 — A private family gathering.</div>
      <div className="font-serif italic">15 minutes, per voice.</div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen w-full">
    <window.Hero/>
    <window.Invitation/>
    <window.Speakers/>
    <window.Schedule/>
    <window.RSVP/>
    <Footer/>
  </div>
);

function mount() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>);
}

if (window.__lucideReady) mount();
else window.addEventListener("lucide-ready", mount, { once: true });
