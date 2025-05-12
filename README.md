<p align="center">
  <img src="./public/emoti.png" alt="React State Management with Context" width="600">
</p>


## 💬 Reflection

**One thing I learned:**  
How to compute and render derived data (like percentages) inside the render function using values from component state.

**One bug I fixed:**  
At first, I forgot to guard against dividing by zero when calculating percentages. This caused `NaN%` to show up. I fixed it by checking if `totalVotes === 0` before dividing.


# Mood Emoji Dashboard (Lite Edition)

---

## 1 ▪ What you’ll build

A tiny React app where teammates click an **emoji button**—Happy, Tired, Excited, or Meh—and watch the live vote counts update below.
You’ll master `useState` and functional updates while keeping the codebase small and friendly (no `useEffect` yet).

---

## 2 ▪ Learning goals

| #   | Outcome                                                                 |
| --- | ----------------------------------------------------------------------- |
|  1  | Create component state with `useState`.                                 |
|  2  | Update **object state** immutably using functional form of `setState`.  |
|  3  | Pass state & updater callbacks down via props.                          |
|  4  | Compute simple derived data (totals / percentages) inside render logic. |

---

## 3 ▪ Starter structure

```
mood-dashboard/
├─ public/
│  └─ index.html
└─ src/
   ├─ App.jsx                 ← ✏️ your main work
   ├─ components/
   │  ├─ MoodButton.jsx       ← already done
   │  └─ MoodStats.jsx        ← ✏️ add your logic
   ├─ styles/index.css        ← basic flex + emoji pop
   └─ main.jsx                ← Vite entry
```

---

## 4 ▪ Setup

```bash
# git‑clone the fork of the starter
cd mood-dashboard-app
npm install
npm run dev
# open http://localhost:5173
```

---

## 5 ▪ Core tasks

| File / step                | What to do                                                                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **App.jsx**                | **T1.** Call `useState` to hold an object `{ happy:0, tired:0, excited:0, meh:0 }`.                                                                      |
| **App.jsx – `handleVote`** | **T2.** Write a functional update that increments the clicked mood immutably:<br>`setCounts(p ⇒ ({ …p, [mood]: p[mood] + 1 }))`.                         |
| **App.jsx – render**       | **T3.** Map over the four mood definitions to render `<MoodButton>`s and pass `onVote={handleVote}`.                                                     |
| **MoodStats.jsx**          | **T4.** Consume `counts` prop. Calculate total votes and each mood’s percentage (hint: guard against divide‑by‑zero). Render results in a list or table. |

> **Stretch:** add a “Reset” button that sets counts back to zero.

---

## 6 ▪ Score - Focus on Learning over the points (60 pts base + 10 stretch)

| Criterion                                              | Pts  |
| ------------------------------------------------------ | ---- |
| App compiles & runs, no console warnings               |  10  |
| `useState` initialisation & functional updates correct |  20  |
| Buttons trigger accurate count changes                 |  10  |
| MoodStats shows correct totals & percentages           |  15  |
| Code readability (no mutations, clear names)           |  5   |
| Stretch “Reset” feature                                |  +10 |

---

## 7 ▪ Submission checklist

1. Update this README with:

   - **Reflection:** One thing you learned, one bug you fixed.

2. Push to your forked repo and make a PR to parent repo.

---

## 8 ▪ Resources

- React docs – [Using the State Hook](https://react.dev/learn/adding-interactivity#adding-state)
- Class slides “React State Basics” (pp 2‑6)

Happy hacking—let the emojis do the talking!
