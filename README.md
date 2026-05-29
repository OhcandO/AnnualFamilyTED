# Family Insights 2026

> **우리의 세계를 연결하다.**
> 가족이 처음으로 무대 위에 오르는 하루 — 한 사람당 15분, 자신의 세계를 소개하는 작은 컨퍼런스.

대전에서 2026년 7월에 열리는 **사적인 가족 모임 "Family Insights Vol. 01"** 의 초대용 랜딩 페이지입니다.
TED 형식을 빌려, 각 가족 구성원이 자신의 일·삶·취미를 15분씩 발표하는 자리를 안내합니다.

---

## 미팅(이벤트) 컨셉 정리

### 한 줄 요약
> *"자주 만나지만 서로의 세계는 잘 모르는 가족"* 을 위한,
> 한 사람당 **15분의 무대** 위에서 각자의 영역을 제대로 소개하는 첫 자리.

### Why — 왜 이 모임을 하는가
- 우리는 자주 모이지만, 서로가 어떤 일에 **열정을 쏟고 있는지** 깊이 들여다볼 기회는 적었다.
- 새 가족, 새 커리어, 깊어진 취미 — 변화한 서로의 세계를 **판을 깔고, 마이크를 켜고** 제대로 들어보자.
- 익숙한 얼굴의 **낯선 면**을 발견하는 하루.

### 핵심 포맷
| 항목 | 내용 |
|---|---|
| 시기 | 2026년 7월, 토요일 오후 2시 ~ 저녁 |
| 장소 | 대전광역시 (RSVP 회신 이후 개별 안내) |
| 규모 | **초대제 · 12석** |
| 발표 | **1인 15분 × 4세션 = 무대 위 60분** |
| 자료 | 슬라이드 자유, 맨몸 발표도 가능 |
| 순서 | **추첨**으로 결정 |
| 회신 마감 | 2026. 06. 30. |

### 발표자 라인업 (Vol. 01의 네 가지 목소리)
1. **Career — "새로운 시작"** : 이직자 / 커리어 전환자
2. **Story — "우리의 뉴페이스"** : 새롭게 가족이 된 사람
3. **Craft — "덕업일치"** : 독특한 취미에 깊이 빠진 사람
4. **Secret — "Surprise Talk"** : 당일에만 공개되는 와일드카드 발표

### 하루의 흐름 (Draft v0.1 · 예시)
```
14:00  Opening              환영 인사 · 진행 규칙
14:20  Session 1            새로운 시작
14:35  Session 2            우리의 뉴페이스
14:50  Break · 다과         성심당 디저트 · 차 · 잡담
15:20  Session 3            덕업일치
15:35  Session 4            Surprise Talk
15:50  Q&A · Family Reflections
18:00  Dinner               대전 맛집 네트워킹
```
> 위 시간표는 분위기 전달용 **가안**이며, 최종 일정은 RSVP 마감 후 별도 안내됩니다.

### 톤 & 무드
- *"15 minutes, per voice."* — 절제된 카피와 세리프 타이포
- 컬러: forest / cream / paper — 차분한 매거진 톤
- 사적이고 따뜻한 컨퍼런스 (*A small, private gathering*)

---

## 페이지 구성

랜딩 페이지는 다음 5개 섹션으로 구성됩니다.

| # | 섹션 | 파일 | 역할 |
|---|---|---|---|
| 01 | Hero | `hero.jsx` | 타이틀, 일시/장소, RSVP CTA |
| 02 | Invitation | `invitation.jsx` | 초대의 글 — 모임의 취지 |
| 03 | Speakers | `speakers.jsx` | 4명의 발표자 카드 |
| 04 | Schedule | `schedule.jsx` | 타임라인 (Draft) |
| 05 | RSVP | `rsvp.jsx` | 참석 회신 폼 · 장소 · 호스트 연락처 |

`app.jsx` 가 위 섹션을 조립하고 Footer를 붙입니다.

## 기술 스택

- **React + Babel (CDN 인-브라우저 트랜스파일)** — 빌드 도구 없음
- **Tailwind CSS** (커스텀 컬러: `forest`, `forestDeep`, `cream`, `paper`, `ink`, `stone`, `moss`)
- **lucide-react** 아이콘
- 단일 HTML로 동작하는 **standalone 번들** 형식

## 실행 방법

브라우저에서 다음 파일 중 하나를 열면 됩니다.

- `Family Insights 2026.html` — 개발용 (외부 CDN 사용)
- `Family Insights 2026 - standalone source.html` — 배포용 단일 파일
- `docs/index.html` — GitHub Pages 배포용 번들

## 파일 구조

```
.
├── app.jsx                                       # 루트 컴포넌트 + Footer
├── hero.jsx                                      # 01 Hero
├── invitation.jsx                                # 02 Invitation
├── speakers.jsx                                  # 03 Speakers
├── schedule.jsx                                  # 04 Schedule
├── rsvp.jsx                                      # 05 RSVP
├── icons.js                                      # Lucide 아이콘 로더
├── Family Insights 2026.html                     # 개발 HTML
├── Family Insights 2026 - standalone source.html # standalone 배포본
├── docs/index.html                               # GitHub Pages 번들
└── screenshots/                                  # 점검용 스크린샷
```

---

*© 2026 — A private family gathering. By invitation only.*
