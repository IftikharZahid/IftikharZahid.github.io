# MCQs Question Bank — Theory of Automata Week 02

## Technology
HTML5, CSS3 and Vanilla JavaScript ES6+. No frontend framework.

## Run
Place `index.html`, `style.css`, and `script.js` in the same folder and open `index.html` in a modern browser.

## Source Content
The application contains the 40 MCQs supplied in the Week 02 Theory of Automata lecture:
**Regular Expressions and Recursive Definitions of Languages**.

## Included Features
- Clean responsive examination and testing UI
- Single-correct MCQs with one-option selection
- Bookmarks viewer with localStorage modal
- Online Examination with optional randomized question & option order
- Student name, roll number and class
- 60-minute countdown timer with auto-submit
- Live score, attempted, wrong and accuracy
- Question navigator
- Mark for Review
- Result dashboard and performance bars
- Detailed answer review and explanations
- Dark/light mode
- localStorage session recovery
- JSON import/export with validation
- Print Result
- Reset progress
- Responsive desktop/tablet/mobile layout

## Question Data Structure
Each question contains:
`id`, `subject`, `chapter`, `topic`, `difficulty`, `question`, `options`, `answer`, `explanation`, `type`.

`answer` is zero-based: 0=A, 1=B, 2=C, 3=D.

## Scoring
1 mark per correct answer. Percentage = correct / total × 100. Passing percentage = 50%. Unanswered questions receive zero marks.

## Extending the Bank
Add objects to the `questions` array in `script.js`, or use the Import JSON function.