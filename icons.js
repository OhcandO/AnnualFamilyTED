// Inline SVG icon components — replaces lucide-react esm.sh import for standalone bundling.
// Visual style mirrors lucide: 24px viewBox, stroke 1.5-2, round caps/joins.
(function () {
  const Icon = (paths) => ({ size = 16, strokeWidth = 1.6, className = "", ...rest }) => (
    React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size, height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
      },
      ...paths.map((d, i) =>
        Array.isArray(d)
          ? React.createElement(d[0], { key: i, ...d[1] })
          : React.createElement("path", { key: i, d })
      )
    )
  );

  const ArrowDown = Icon([
    "M12 5v14",
    "m19 12-7 7-7-7",
  ]);
  const MapPin = Icon([
    "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    ["circle", { cx: 12, cy: 10, r: 3 }],
  ]);
  const CalendarDays = Icon([
    ["rect", { width: 18, height: 18, x: 3, y: 4, rx: 2 }],
    "M16 2v4",
    "M3 10h18",
    "M8 2v4",
    "M17 14h-1",
    "M13 14h-1",
    "M9 14h-1",
    "M17 18h-1",
    "M13 18h-1",
    "M9 18h-1",
  ]);
  const Clock = Icon([
    ["circle", { cx: 12, cy: 12, r: 10 }],
    "M12 6v6l4 2",
  ]);
  const Mic = Icon([
    "M12 19v3",
    "M19 10a7 7 0 0 1-14 0",
    ["rect", { x: 9, y: 2, width: 6, height: 13, rx: 3 }],
  ]);
  const Check = Icon([
    "M20 6 9 17l-5-5",
  ]);
  const X = Icon([
    "M18 6 6 18",
    "M6 6l12 12",
  ]);
  const HelpCircle = Icon([
    ["circle", { cx: 12, cy: 12, r: 10 }],
    "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    "M12 17h.01",
  ]);
  const Mail = Icon([
    ["rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }],
    "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  ]);
  const Phone = Icon([
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  ]);

  window.Lucide = { ArrowDown, MapPin, CalendarDays, Clock, Mic, Check, X, HelpCircle, Mail, Phone };
  window.__lucideReady = true;
  window.dispatchEvent(new Event("lucide-ready"));
})();
