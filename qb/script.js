const questions=[
  {
    "id": 1,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Regular Expressions",
    "difficulty": "Easy",
    "question": "A Regular Expression is primarily used to describe:",
    "options": [
      "Any programming language",
      "Regular languages",
      "Only context-free languages",
      "Computer hardware"
    ],
    "answer": 1,
    "explanation": "Regular expressions are formal notation used to describe regular languages.",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Kleene Star",
    "difficulty": "Easy",
    "question": "For Σ = {a,b}, which expression represents zero or more a's?",
    "options": [
      "a+",
      "a*",
      "ab",
      "a|b"
    ],
    "answer": 1,
    "explanation": "The Kleene Star represents zero or more occurrences and includes ε.",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Union",
    "difficulty": "Easy",
    "question": "Which operation represents a choice between alternatives in a Regular Expression?",
    "options": [
      "Concatenation",
      "Union",
      "Recursion",
      "Reversal"
    ],
    "answer": 1,
    "explanation": "Union represents a choice between alternatives.",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Concatenation",
    "difficulty": "Easy",
    "question": "What does the expression ab represent?",
    "options": [
      "a or b",
      "Zero or more a's",
      "The string formed by concatenating a and b",
      "Only the empty string"
    ],
    "answer": 2,
    "explanation": "Concatenation places expressions next to each other, so a followed by b gives ab.",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Kleene Star",
    "difficulty": "Easy",
    "question": "The Kleene Star (*) represents:",
    "options": [
      "Exactly one occurrence",
      "Zero or more occurrences",
      "One or more occurrences",
      "Two occurrences"
    ],
    "answer": 1,
    "explanation": "R* means zero or more repetitions of R.",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Positive Closure",
    "difficulty": "Easy",
    "question": "Which language is represented by a+?",
    "options": [
      "{ε, a, aa, aaa, ...}",
      "{a, aa, aaa, ...}",
      "{ε}",
      "{a,b}"
    ],
    "answer": 1,
    "explanation": "Positive closure means one or more occurrences and therefore does not include ε.",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Positive Closure",
    "difficulty": "Easy",
    "question": "What is the main difference between a* and a+?",
    "options": [
      "a* excludes ε",
      "a+ includes ε",
      "a* includes ε, while a+ does not",
      "There is no difference"
    ],
    "answer": 2,
    "explanation": "The supplied lecture explicitly distinguishes zero-or-more from one-or-more.",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Union",
    "difficulty": "Easy",
    "question": "Which Regular Expression represents either a or b?",
    "options": [
      "ab",
      "a*",
      "a+b",
      "(ab)*"
    ],
    "answer": 2,
    "explanation": "a+b represents the choice between a and b in the lecture notation.",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Strings Beginning with a",
    "difficulty": "Medium",
    "question": "For Σ={a,b}, which expression describes strings beginning with a?",
    "options": [
      "(a+b)*a",
      "a(a+b)*",
      "(a+b)a",
      "ab*"
    ],
    "answer": 1,
    "explanation": "a(a+b)* fixes a at the beginning and allows any sequence of a and b after it.",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Strings Ending with a",
    "difficulty": "Medium",
    "question": "For Σ={a,b}, which expression describes strings ending with a?",
    "options": [
      "a(a+b)*",
      "(a+b)*a",
      "a*b",
      "(a+b)a*"
    ],
    "answer": 1,
    "explanation": "(a+b)* allows any prefix, followed by the final a.",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Containing ab",
    "difficulty": "Medium",
    "question": "Which expression describes strings containing the substring ab?",
    "options": [
      "ab*",
      "(a+b)*ab(a+b)*",
      "a(a+b)",
      "(ab)*"
    ],
    "answer": 1,
    "explanation": "The expression places ab between arbitrary strings from the alphabet.",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Operator Precedence",
    "difficulty": "Medium",
    "question": "In regular-expression precedence, which operation generally has the highest priority?",
    "options": [
      "Union",
      "Concatenation",
      "Kleene Star",
      "Addition"
    ],
    "answer": 2,
    "explanation": "The lecture lists Kleene Star above concatenation and union in precedence.",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Operator Precedence",
    "difficulty": "Medium",
    "question": "In the expression ab*, the correct interpretation is:",
    "options": [
      "(ab)*",
      "a(b*)",
      "(a*b)",
      "a+b"
    ],
    "answer": 1,
    "explanation": "The star applies to b first, so ab* means a(b*).",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Empty String",
    "difficulty": "Easy",
    "question": "Which notation represents the empty string?",
    "options": [
      "0",
      "ε",
      "∅",
      "λ*"
    ],
    "answer": 1,
    "explanation": "The empty string is denoted by ε in the lecture.",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Base Case",
    "difficulty": "Easy",
    "question": "A recursive definition normally begins with a:",
    "options": [
      "Recursive call",
      "Base case",
      "Kleene Star",
      "Union"
    ],
    "answer": 1,
    "explanation": "The base case provides the starting element.",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Components",
    "difficulty": "Easy",
    "question": "Which is NOT normally listed as a component of a recursive definition?",
    "options": [
      "Base Case",
      "Recursive Rule",
      "Closure Condition",
      "Database Schema"
    ],
    "answer": 3,
    "explanation": "The lecture identifies base case, recursive rule and closure condition as the three components.",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Base Case",
    "difficulty": "Easy",
    "question": "The base case in a recursive definition provides:",
    "options": [
      "The stopping or starting element",
      "A random element",
      "Only invalid strings",
      "A physical storage location"
    ],
    "answer": 0,
    "explanation": "A recursive definition starts from its base case.",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Recursive Rule",
    "difficulty": "Easy",
    "question": "A recursive rule is used to:",
    "options": [
      "Generate new elements from existing elements",
      "Delete all elements",
      "Define hardware",
      "Remove the base case"
    ],
    "answer": 0,
    "explanation": "Recursive rules generate new elements from existing elements.",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Closure Condition",
    "difficulty": "Medium",
    "question": "The closure condition in a recursive definition ensures that:",
    "options": [
      "Only generated elements belong to the defined set",
      "Every possible string belongs to the language",
      "The alphabet changes",
      "The base case is removed"
    ],
    "answer": 0,
    "explanation": "Closure restricts membership to elements generated according to the definition.",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Even Numbers",
    "difficulty": "Medium",
    "question": "Which is a recursive definition of the even numbers?",
    "options": [
      "1 ∈ E and n → n+1",
      "0 ∈ E and n ∈ E ⇒ n+2 ∈ E",
      "2 ∈ E and n → n−1",
      "ε ∈ E and n → 2n"
    ],
    "answer": 1,
    "explanation": "The lecture uses 0 as the base case and adds 2 recursively.",
    "type": "single"
  },
  {
    "id": 21,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Even Numbers",
    "difficulty": "Easy",
    "question": "Starting from 0 and repeatedly adding 2 generates:",
    "options": [
      "Odd numbers",
      "Prime numbers only",
      "Even numbers",
      "All integers"
    ],
    "answer": 2,
    "explanation": "0, 2, 4, 6, ... are the even numbers.",
    "type": "single"
  },
  {
    "id": 22,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Recursive Languages",
    "difficulty": "Medium",
    "question": "A recursively defined language specifies:",
    "options": [
      "Only its alphabet",
      "Initial strings, generation rules, and closure",
      "Only its physical storage",
      "Only its final string"
    ],
    "answer": 1,
    "explanation": "The lecture defines recursive languages using initial strings, rules, and a closure condition.",
    "type": "single"
  },
  {
    "id": 23,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Definition",
    "difficulty": "Medium",
    "question": "The language L = {a^n b^n | n ≥ 0} requires:",
    "options": [
      "More b's than a's",
      "Equal numbers of a's and b's, with all a's before b's",
      "Equal numbers in any order",
      "Only a's"
    ],
    "answer": 1,
    "explanation": "The language contains equal numbers of a's followed by equal numbers of b's.",
    "type": "single"
  },
  {
    "id": 24,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Membership",
    "difficulty": "Medium",
    "question": "Which string belongs to L = {a^n b^n | n ≥ 0}?",
    "options": [
      "aab",
      "abb",
      "aabb",
      "ababab"
    ],
    "answer": 2,
    "explanation": "aabb has two a's followed by two b's, so n=2.",
    "type": "single"
  },
  {
    "id": 25,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Generation",
    "difficulty": "Easy",
    "question": "Which string is generated for n = 3 in a^n b^n?",
    "options": [
      "aaabb",
      "aaabbb",
      "aabbbb",
      "aaaab"
    ],
    "answer": 1,
    "explanation": "For n=3, there must be three a's followed by three b's.",
    "type": "single"
  },
  {
    "id": 26,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Recursive Definition",
    "difficulty": "Easy",
    "question": "What is the base case for the recursive definition of a^n b^n used in this lecture?",
    "options": [
      "a",
      "b",
      "ab",
      "ε"
    ],
    "answer": 3,
    "explanation": "For n=0, a^0b^0 = ε, which is the base case.",
    "type": "single"
  },
  {
    "id": 27,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Recursive Rule",
    "difficulty": "Medium",
    "question": "Which recursive rule defines a^n b^n?",
    "options": [
      "If w ∈ L, then awb ∈ L",
      "If w ∈ L, then abw ∈ L only",
      "If w ∈ L, then ww ∈ L",
      "If w ∈ L, then aaw ∈ L only"
    ],
    "answer": 0,
    "explanation": "Adding one a to the beginning and one b to the end preserves equality.",
    "type": "single"
  },
  {
    "id": 28,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Recursive Rule",
    "difficulty": "Easy",
    "question": "Why does the rule w → awb preserve equal numbers of a's and b's?",
    "options": [
      "It removes one of each",
      "It adds one a and one b",
      "It adds two a's",
      "It changes the alphabet"
    ],
    "answer": 1,
    "explanation": "Each application adds exactly one a and one b.",
    "type": "single"
  },
  {
    "id": 29,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Generation",
    "difficulty": "Medium",
    "question": "Which sequence correctly shows recursive generation of a^n b^n?",
    "options": [
      "ε → ab → aabb → aaabbb",
      "a → aa → aaa",
      "ε → a → aa",
      "ab → ba → abab"
    ],
    "answer": 0,
    "explanation": "The sequence starts at ε and adds a at the beginning and b at the end.",
    "type": "single"
  },
  {
    "id": 30,
    "subject": "Theory of Automata",
    "chapter": "Language a^n b^n",
    "topic": "Base Case",
    "difficulty": "Easy",
    "question": "For n = 0, a^n b^n is:",
    "options": [
      "a",
      "b",
      "ab",
      "ε"
    ],
    "answer": 3,
    "explanation": "Both a^0 and b^0 are 1, represented by the empty string in the language construction.",
    "type": "single"
  },
  {
    "id": 31,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Factorial",
    "difficulty": "Easy",
    "question": "Factorial is an example of:",
    "options": [
      "Recursive definition",
      "Regular expression only",
      "Union operation",
      "Finite alphabet"
    ],
    "answer": 0,
    "explanation": "The lecture presents factorial as another recursive example.",
    "type": "single"
  },
  {
    "id": 32,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Factorial",
    "difficulty": "Easy",
    "question": "What is the base case of factorial?",
    "options": [
      "0! = 0",
      "0! = 1",
      "1! = 0",
      "1! = 2"
    ],
    "answer": 1,
    "explanation": "The factorial definition starts with 0! = 1.",
    "type": "single"
  },
  {
    "id": 33,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Factorial",
    "difficulty": "Medium",
    "question": "Which is the recursive rule for factorial?",
    "options": [
      "n! = n + (n−1)!",
      "n! = n(n−1)!",
      "n! = n! + 1",
      "n! = (n+1)!"
    ],
    "answer": 1,
    "explanation": "For n>0, factorial is recursively defined as n! = n(n−1)!.",
    "type": "single"
  },
  {
    "id": 34,
    "subject": "Theory of Automata",
    "chapter": "Recursive Definitions",
    "topic": "Factorial",
    "difficulty": "Easy",
    "question": "What is 4!?",
    "options": [
      "12",
      "16",
      "24",
      "32"
    ],
    "answer": 2,
    "explanation": "4! = 4×3×2×1 = 24.",
    "type": "single"
  },
  {
    "id": 35,
    "subject": "Theory of Automata",
    "chapter": "Comparison",
    "topic": "RE vs Recursive Definition",
    "difficulty": "Medium",
    "question": "Which statement correctly compares Regular Expressions and recursive definitions?",
    "options": [
      "Both are identical techniques",
      "Regular Expressions describe regular languages; recursive definitions use base cases and recursive rules",
      "Recursive definitions are only for hardware",
      "Regular Expressions cannot describe strings"
    ],
    "answer": 1,
    "explanation": "The lecture distinguishes compact regular-language notation from recursive construction.",
    "type": "single"
  },
  {
    "id": 36,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Kleene Star",
    "difficulty": "Easy",
    "question": "Which of the following is a Regular Expression for zero or more b's?",
    "options": [
      "b+",
      "b*",
      "bb",
      "b"
    ],
    "answer": 1,
    "explanation": "b* represents zero or more b's.",
    "type": "single"
  },
  {
    "id": 37,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Concatenation and Closure",
    "difficulty": "Medium",
    "question": "Which expression describes strings consisting of one or more a's followed by b?",
    "options": [
      "a*b",
      "a+b",
      "ab*",
      "(a+b)*"
    ],
    "answer": 0,
    "explanation": "a* allows zero or more a's before b; the supplied MCQ key identifies a*b.",
    "type": "single"
  },
  {
    "id": 38,
    "subject": "Theory of Automata",
    "chapter": "Regular Expressions",
    "topic": "Definition",
    "difficulty": "Easy",
    "question": "Which statement about a regular expression is correct?",
    "options": [
      "It is a compact pattern for describing a set of strings",
      "It must always contain a recursion rule",
      "It only represents one string",
      "It is a database schema"
    ],
    "answer": 0,
    "explanation": "A regular expression is a compact pattern used to describe a set of strings.",
    "type": "single"
  },
  {
    "id": 39,
    "subject": "Theory of Automata",
    "chapter": "Introduction",
    "topic": "Week 01 Foundation",
    "difficulty": "Easy",
    "question": "Which concept from Week 01 provides a foundation for the Week 02 discussion?",
    "options": [
      "Alphabet, strings, and languages",
      "Database normalization",
      "CPU registers",
      "Cache mapping"
    ],
    "answer": 0,
    "explanation": "Week 02 builds on the Week 01 foundation of alphabet, strings and language.",
    "type": "single"
  },
  {
    "id": 40,
    "subject": "Theory of Automata",
    "chapter": "Course Content",
    "topic": "Week 03",
    "difficulty": "Easy",
    "question": "Which topic is scheduled for Week 03 according to the provided course content?",
    "options": [
      "Three-Level Schema Architecture",
      "Kleene's Theorem",
      "Cache Memory",
      "Relational Algebra"
    ],
    "explanation": "The lecture's final section identifies Kleene's Theorem as the next week's topic.",
    "type": "single"
  }
],L=["A","B","C","D"],K={theme:"qtheme",bm:"qbm",progress:"qprogress",result:"qresult",student:"qstudent"};
const s={questions:[...questions],filtered:[],bankAns:{},bm:new Set(),exam:[],ans:{},marked:new Set(),locked:new Set(),skipped:new Set(),i:0,sec:3600,timer:null,result:null,student:{}};
const $=x=>document.querySelector(x),$$=x=>[...document.querySelectorAll(x)],esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function store(k,v){try{localStorage.setItem(k,v)}catch{}}function read(k,d){try{return localStorage.getItem(k)??d}catch{return d}}
function toast(m,e=false){const x=document.createElement("div");x.className="toast"+(e?" err":"");x.textContent=m;$("#toast").append(x);setTimeout(()=>x.remove(),2500)}
function go(id){$("#"+id)?.scrollIntoView({behavior:"smooth"});$("#drawer").classList.remove("drawerOpen")}
function main(){["home","subjects","tools"].forEach(x=>$("#"+x)?.classList.remove("hidden"));$("#live").classList.add("hidden")}

/* Cookie & Student Session Management */
const CK_STUDENT="student_credentials";
function setCookie(n,v,days=365){try{const d=new Date();d.setTime(d.getTime()+(days*24*60*60*1000));document.cookie=`${encodeURIComponent(n)}=${encodeURIComponent(v)};expires=${d.toUTCString()};path=/;SameSite=Lax`}catch{}}
function getCookie(n){try{const nameEQ=encodeURIComponent(n)+"=";const ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i].trim();if(c.indexOf(nameEQ)===0)return decodeURIComponent(c.substring(nameEQ.length))} }catch{}return ""}
function deleteCookie(n){try{document.cookie=`${encodeURIComponent(n)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`}catch{}}

function saveStudentSession(st){const json=JSON.stringify(st);setCookie(CK_STUDENT,json,365);store(K.student,json);updateStudentUI(st)}
function getStudentSession(){
  const cVal=getCookie(CK_STUDENT);
  if(cVal){try{const p=JSON.parse(cVal);if(p&&(p.name||p.roll||p.className))return p}catch{}}
  const lVal=read(K.student,"");
  if(lVal){try{const p=JSON.parse(lVal);if(p&&(p.name||p.roll||p.className))return p}catch{}}
  return null;
}
function logoutStudent(){
  deleteCookie(CK_STUDENT);
  try{localStorage.removeItem(K.student)}catch{}
  s.student={};
  updateStudentUI(null);
  toast("Logged out. Saved credentials cleared.");
}
function updateStudentUI(st){
  const badge=$("#userBadge"),hName=$("#headerUserName"),dBadge=$("#drawerUserBadge"),dName=$("#drawerUserName");
  if(st&&(st.name||st.roll||st.className)){
    const display=st.name||st.roll||"Student";
    const sub=[st.name,st.roll?`(${st.roll})`:""].filter(Boolean).join(" ");
    if(hName)hName.textContent=display;
    if(dName)dName.textContent=sub||display;
    if(badge)badge.classList.remove("hidden");
    if(dBadge)dBadge.classList.remove("hidden");
  }else{
    if(badge)badge.classList.add("hidden");
    if(dBadge)dBadge.classList.add("hidden");
    if(hName)hName.textContent="";
    if(dName)dName.textContent="";
  }
}

function render(){let sEl=$("#search");if(!sEl)return;let t=sEl.value.toLowerCase(),tp=$("#topic")?.value||"",d=$("#difficulty")?.value||"",so=$("#sort")?.value||"newest";
s.filtered=s.questions.filter(q=>(!t||[q.question,q.chapter,q.topic,q.subject].join(" ").toLowerCase().includes(t))&&(!tp||q.topic===tp)&&(!d||q.difficulty===d));
if(so==="oldest")s.filtered.sort((a,b)=>a.id-b.id);if(so==="newest")s.filtered.sort((a,b)=>b.id-a.id);if(so==="difficulty"){let r={Easy:1,Medium:2,Hard:3};s.filtered.sort((a,b)=>r[a.difficulty]-r[b.difficulty])}if(so==="random")s.filtered.sort(()=>Math.random()-.5);
if($("#count"))$("#count").textContent=s.filtered.length+" question"+(s.filtered.length===1?"":"s");if($("#list"))$("#list").innerHTML=s.filtered.length?s.filtered.map(q=>card(q)).join(""):`<div class="card" style="padding:30px;text-align:center"><h3>No Questions Found</h3><p>Try clearing the filters.</p></div>`}
function card(q){return `<article class="question-card"><div class="tags"><span class="tag">Q${q.id}</span><span class="tag">${esc(q.chapter)}</span><span class="tag">${esc(q.topic)}</span><span class="tag diff">${q.difficulty}</span></div><div class="qtext">${esc(q.question)}</div><div class="options">${q.options.map((o,i)=>`<button class="option ${s.bankAns[q.id]===i?"selected":""}" data-b="${q.id}" data-o="${i}"><b class="letter">${L[i]}</b>${esc(o)}</button>`).join("")}</div><div class="qfoot"><span class="tag">Single Correct Answer</span><button class="bookmark ${s.bm.has(q.id)?"active":""}" data-bm="${q.id}">${s.bm.has(q.id)?"★ Bookmarked":"☆ Bookmark"}</button></div></article>`}
function modal(h){$("#modalContent").innerHTML=h;$("#modal").classList.remove("hidden")}function close(){ $("#modal").classList.add("hidden")}
function start(){
  const saved=getStudentSession()||s.student||{};
  const hasSaved=!!(saved.name&&saved.roll&&saved.className);
  modal(`<h2>Start Examination</h2>
<p>${hasSaved?"Review your student credentials to begin.":"All credentials (<b>Name</b>, <b>Roll Number</b>, and <b>Class</b>) are required to start the test."}</p>
<div class="fields">
  <label>Name <span style="color:var(--r);font-weight:700;">*</span>
    <input id="sn" value="${esc(saved.name||"")}" placeholder="Enter full name" autocomplete="name" required>
    <small id="snErr" class="fieldErr hidden">Student Name is required to start.</small>
  </label>
  <label>Roll Number <span style="color:var(--r);font-weight:700;">*</span>
    <input id="sr" value="${esc(saved.roll||"")}" placeholder="e.g. BC190400123" required>
    <small id="srErr" class="fieldErr hidden">Roll Number is required to start.</small>
  </label>
  <label>Class <span style="color:var(--r);font-weight:700;">*</span>
    <input id="sc" value="${esc(saved.className||"")}" placeholder="e.g. BSCS-6th" required>
    <small id="scErr" class="fieldErr hidden">Class is required to start.</small>
  </label>
  <label><input id="rq" type="checkbox"> Randomize Questions</label>
  <label><input id="ro" type="checkbox"> Randomize Options</label>
</div>
${hasSaved?`<div class="cookieNotice"><span>💾 <b>Logged In:</b> Credentials loaded from browser cookies</span><button id="modalLogout" class="logoutLink" type="button">Logout / Clear</button></div>`:`<div class="cookieNotice subtle"><span>🍪 <b>Auto-Save:</b> Entered credentials will be saved in browser cookies for future visits until you click Logout.</span></div>`}
<div style="margin:12px 0 4px;padding:9px 12px;background:var(--card-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);font-size:12px;color:var(--m);line-height:1.4;"><b style="color:var(--t)">🔒 Sequential Exam Rule:</b> Questions must be completed in order. Once you select an answer and click Next, your response is locked and you cannot return to previous questions. Unanswered questions can be skipped and will be resumed automatically.</div>
<div class="modalActions"><button class="secondary" id="cancel">Cancel</button><button class="primary" id="begin">Begin Examination</button></div>`);

  ["sn","sr","sc"].forEach(id=>{
    let el=$("#"+id);
    if(el){
      el.oninput=()=>{
        if(el.value.trim()){
          el.classList.remove("inputErr");
          $("#"+id+"Err")?.classList.add("hidden");
        }
      };
    }
  });

  $("#cancel").onclick=close;
  $("#begin").onclick=begin;
  if($("#modalLogout"))$("#modalLogout").onclick=()=>{logoutStudent();start()};
}
function begin(){
  const snEl=$("#sn"), srEl=$("#sr"), scEl=$("#sc");
  const name=(snEl?.value||"").trim();
  const roll=(srEl?.value||"").trim();
  const className=(scEl?.value||"").trim();

  [snEl,srEl,scEl].forEach(el=>el?.classList.remove("inputErr"));
  ["#snErr","#srErr","#scErr"].forEach(id=>$(id)?.classList.add("hidden"));

  let hasErr=false;
  if(!name){
    snEl?.classList.add("inputErr");
    $("#snErr")?.classList.remove("hidden");
    if(!hasErr) snEl?.focus();
    hasErr=true;
  }
  if(!roll){
    srEl?.classList.add("inputErr");
    $("#srErr")?.classList.remove("hidden");
    if(!hasErr) srEl?.focus();
    hasErr=true;
  }
  if(!className){
    scEl?.classList.add("inputErr");
    $("#scErr")?.classList.remove("hidden");
    if(!hasErr) scEl?.focus();
    hasErr=true;
  }

  if(hasErr){
    toast("Student Name, Roll Number, and Class are required to start the test.",true);
    return;
  }

  s.student={name,roll,className};
  saveStudentSession(s.student);
  s.exam=s.questions.map(q=>({...q,options:q.options.map((text,index)=>({text,index}))}));
  if($("#rq").checked)s.exam.sort(()=>Math.random()-.5);
  if($("#ro").checked)s.exam.forEach(q=>q.options.sort(()=>Math.random()-.5));
  s.ans={};s.marked=new Set();s.locked=new Set();s.skipped=new Set();s.i=0;s.sec=3600;s.result=null;close();
  ["home","subjects","tools","results"].forEach(x=>$("#"+x)?.classList.add("hidden"));
  $("#live").classList.remove("hidden");save();drawExam();clock();go("live");
}
function drawExam(){
  let q=s.exam[s.i];
  if(!q)return;
  let isAnswered=s.ans[q.id]!==undefined;
  let isLocked=s.locked.has(q.id);
  let isSkipped=s.skipped.has(q.id);
  let otherUnlocked=s.exam.filter(item=>!s.locked.has(item.id)&&item.id!==q.id).length;
  let isFinalAction=otherUnlocked===0;

  $("#navCount").textContent=`${s.i+1}/${s.exam.length}`;
  let tagElements=[
    `<span class="tag">QUESTION ${s.i+1}</span>`,
    `<span class="tag">${esc(q.chapter)}</span>`,
    `<span class="tag">${esc(q.topic)}</span>`,
    `<span class="tag diff">${q.difficulty}</span>`
  ];
  if(isLocked) tagElements.push('<span class="tag lockedBadge">🔒 Answer Locked</span>');
  else if(isSkipped) tagElements.push('<span class="tag skippedBadge">↷ Skipped — Answer to Complete</span>');

  let lockHintText="";
  if(isLocked) lockHintText="Question locked. Backtracking disabled.";
  else if(isSkipped) lockHintText=isAnswered?"Answer selected. Click 'Lock & Continue' to advance.":"This question was skipped. Select your answer, or skip to revisit later.";
  else if(isAnswered) lockHintText="Answer selected. Click Next to lock & advance.";
  else lockHintText="Select an answer, or click 'Skip Question' to resume it later.";

  let buttonText=isFinalAction?"Finish Examination":(isSkipped?"Lock & Continue →":"Next Question →");

  $("#examQ").innerHTML=`
    <div class="tags">${tagElements.join("")}</div>
    <div class="qtext">${esc(q.question)}</div>
    <div class="options">
      ${q.options.map((o,i)=>`<button class="option ${s.ans[q.id]===o.index?"selected":""} ${isLocked?"disabledOption":""}" data-e="${i}" ${isLocked?"disabled":""}><b class="letter">${L[i]}</b>${esc(o.text)}</button>`).join("")}
    </div>
    <div class="examControls">
      <div class="lockHint">
        <span class="lockIcon">${isLocked?"🔒":(isSkipped?"↷":"ℹ️")}</span>
        <span>${lockHintText}</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        ${!isLocked?`<button class="skipBtn" id="skip" type="button" title="Skip this question and resume it later">↷ Skip Question</button>`:""}
        <button class="primary" id="next" ${!isAnswered?"disabled":""}>${buttonText}</button>
      </div>
    </div>`;

  if(!isLocked){
    $$("[data-e]").forEach(b=>b.onclick=()=>{
      s.ans[q.id]=q.options[+b.dataset.e].index;
      save();
      drawExam();
    });
  }

  if($("#skip")){
    $("#skip").onclick=()=>{
      s.skipped.add(q.id);
      delete s.ans[q.id];
      toast(`Question ${s.i+1} skipped. You can resume it anytime.`);
      
      let nextIdx=-1;
      for(let j=s.i+1;j<s.exam.length;j++){
        if(!s.locked.has(s.exam[j].id)){
          nextIdx=j;
          break;
        }
      }
      if(nextIdx===-1){
        for(let j=0;j<s.exam.length;j++){
          if(!s.locked.has(s.exam[j].id)&&j!==s.i){
            nextIdx=j;
            break;
          }
        }
      }
      
      if(nextIdx!==-1){
        let isLoop=nextIdx<=s.i||s.skipped.has(s.exam[nextIdx].id);
        s.i=nextIdx;
        save();
        drawExam();
        if(isLoop) toast(`Resuming from skipped Question ${s.i+1}`);
      } else {
        save();
        drawExam();
        confirmSubmit();
      }
    };
  }

  $("#next").onclick=()=>{
    if(s.ans[q.id]===undefined){
      toast("Please select an answer before proceeding, or click Skip.",true);
      return;
    }
    s.locked.add(q.id);
    s.skipped.delete(q.id);
    
    let nextIdx=-1;
    for(let j=s.i+1;j<s.exam.length;j++){
      if(!s.locked.has(s.exam[j].id)){
        nextIdx=j;
        break;
      }
    }
    if(nextIdx===-1){
      for(let j=0;j<s.exam.length;j++){
        if(!s.locked.has(s.exam[j].id)){
          nextIdx=j;
          break;
        }
      }
    }
    
    if(nextIdx!==-1){
      let isLoop=nextIdx<=s.i||s.skipped.has(s.exam[nextIdx].id);
      s.i=nextIdx;
      save();
      drawExam();
      if(isLoop) toast(`Resuming from skipped Question ${s.i+1}`);
    } else {
      confirmSubmit();
    }
  };

  drawNav();
  live();
}
function drawNav(){
  $("#nav").innerHTML=s.exam.map((q,i)=>{
    let cls=[];
    if(i===s.i) cls.push("current");
    else if(s.locked.has(q.id)) cls.push("locked");
    else if(s.skipped.has(q.id)) cls.push("skipped");
    else if(s.ans[q.id]!==undefined) cls.push("answered");
    else cls.push("upcoming");
    
    let icon="";
    if(s.locked.has(q.id)) icon='<small class="navLock">✓</small>';
    else if(s.skipped.has(q.id)) icon='<small class="navSkippedIcon">↷</small>';
    
    let title=s.locked.has(q.id)
      ? `Question ${i+1} (Locked - Cannot return)`
      : (s.skipped.has(q.id)
        ? `Question ${i+1} (Skipped - Click to resume)`
        : (i===s.i ? "Current Question" : `Question ${i+1}`));

    return `<button class="${cls.join(" ")}" data-n="${i}" title="${title}">${i+1}${icon}</button>`;
  }).join("");

  $$("[data-n]").forEach(b=>b.onclick=()=>{
    let targetIdx=+b.dataset.n;
    if(targetIdx===s.i) return;
    let targetQ=s.exam[targetIdx];
    if(!targetQ) return;
    
    if(s.locked.has(targetQ.id)){
      toast(`Question ${targetIdx+1} is locked and cannot be revisited.`,true);
      return;
    }
    if(s.skipped.has(targetQ.id)){
      s.i=targetIdx;
      save();
      drawExam();
      toast(`Resumed Question ${targetIdx+1} (Skipped)`);
      return;
    }
    if(targetIdx<s.i){
      s.i=targetIdx;
      save();
      drawExam();
      return;
    }
    if(targetIdx>s.i){
      toast(`Please answer or skip Question ${s.i+1} before proceeding.`,true);
      return;
    }
  });
}
function live(){
  let c=0,a=0;
  s.exam.forEach(q=>{
    if(s.locked.has(q.id)&&s.ans[q.id]!==undefined){
      a++;
      if(s.ans[q.id]===q.answer) c++;
    }
  });
  $("#score").textContent=`${c}/${s.exam.length}`;
  $("#correct").textContent=c;
  $("#attempted").textContent=a;
  $("#wrong").textContent=a-c;
  $("#accuracy").textContent=(a?c/a*100:0).toFixed(1)+"%";
  if($("#skipped")) $("#skipped").textContent=s.skipped.size;
}
function clock(){clearInterval(s.timer);s.timer=setInterval(()=>{s.sec--;uiClock();save();if(s.sec<=0){clearInterval(s.timer);finish(true)}},1000);uiClock()}function uiClock(){let m=Math.floor(Math.max(0,s.sec)/60),x=Math.max(0,s.sec)%60;$("#timer b").textContent=`${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`;$("#timer").classList.toggle("warning",s.sec<=300&&s.sec>60);$("#timer").classList.toggle("danger",s.sec<=60)}
function confirmSubmit(){
  let skippedCount=s.exam.filter(q=>!s.locked.has(q.id)&&s.skipped.has(q.id)).length;
  let unattemptedCount=s.exam.filter(q=>!s.locked.has(q.id)&&!s.skipped.has(q.id)).length;
  let totalPending=skippedCount+unattemptedCount;

  modal(`<h2>Submit Examination?</h2><p>Are you sure you want to finish your test now?</p>${totalPending>0?`<div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);border-radius:var(--radius-sm);padding:10px 14px;margin:12px 0;font-size:12px;color:var(--t)">⚠️ <b>Attention:</b> You have <b>${skippedCount} skipped</b> and <b>${unattemptedCount} unattempted</b> question(s). Unanswered questions receive 0 marks.</div>`:`<div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.25);border-radius:var(--radius-sm);padding:10px 14px;margin:12px 0;font-size:12px;color:var(--g)">✓ All <b>${s.exam.length}</b> questions have been locked with answers!</div>`}<div class="modalActions">${skippedCount>0?`<button class="secondary" id="resumeSkipped">Resume Skipped Questions</button>`:`<button class="secondary" id="keep">Continue Test</button>`}<button class="primary" id="yes">Submit Now</button></div>`);

  if($("#keep")) $("#keep").onclick=close;
  if($("#resumeSkipped")){
    $("#resumeSkipped").onclick=()=>{
      close();
      let firstSkipped=s.exam.findIndex(q=>!s.locked.has(q.id)&&s.skipped.has(q.id));
      if(firstSkipped!==-1){
        s.i=firstSkipped;
        save();
        drawExam();
        toast(`Resuming from skipped Question ${s.i+1}`);
      }
    };
  }
  $("#yes").onclick=()=>{close();finish(false)};
}
function finish(auto){if(s.result)return;clearInterval(s.timer);let c=0,a=0;s.exam.forEach(q=>{if(s.ans[q.id]!==undefined){a++;if(s.ans[q.id]===q.answer)c++}});let total=s.exam.length,p=c/total*100;s.result={total,correct:c,attempted:a,wrong:a-c,unanswered:total-a,percentage:p,time:3600-s.sec,answers:{...s.ans},exam:s.exam,student:s.student};store(K.result,JSON.stringify(s.result));store(K.progress,"");results();$("#live").classList.add("hidden");$("#results").classList.remove("hidden");go("results");toast(auto?"Time is over — submitted":"Test submitted successfully",auto)}
function optText(o){if(!o)return "";if(typeof o==="string")return o;if(typeof o.text==="string")return o.text;return String(o)}
function getGrade(pct){
  if(pct>=85) return {grade:"A+", remarks:"Outstanding Performance! Demonstrated exceptional command of automata concepts and formal language theory."};
  if(pct>=80) return {grade:"A", remarks:"Excellent Performance! Strong theoretical foundation and problem-solving skills."};
  if(pct>=70) return {grade:"B", remarks:"Good Performance. Well prepared with minor conceptual areas for refinement."};
  if(pct>=60) return {grade:"C", remarks:"Satisfactory Performance. Basic conceptual clarity achieved; further practice recommended."};
  if(pct>=50) return {grade:"D", remarks:"Conditional Pass. Meets minimum academic benchmark; thorough review advised."};
  return {grade:"F", remarks:"Did not meet passing criteria (< 50%). Recommended to review Chapter 2 and retake assessment."};
}
function results(){
  let r=s.result;if(!r)return;
  let pass=r.percentage>=50;
  let gi=getGrade(r.percentage);

  // Top summary & legacy metrics
  if($("#pct")) $("#pct").textContent=r.percentage.toFixed(0)+"%";
  $("#rTotal").textContent=r.total;
  $("#rAttempted").textContent=r.attempted;
  $("#rCorrect").textContent=r.correct;
  $("#rWrong").textContent=r.wrong;
  $("#rUnanswered").textContent=r.unanswered;
  let accuracyVal=r.attempted?(r.correct/r.attempted*100).toFixed(1):"0.0";
  if($("#rAccuracy")) $("#rAccuracy").textContent=accuracyVal+"%";
  if($("#rTime")) $("#rTime").textContent=fmt(r.time);

  // Academic Transcript Candidate Credentials
  if($("#dispStudentName")) $("#dispStudentName").innerHTML=r.student?.name?`<b>${esc(r.student.name)}</b>`:"<b>—</b>";
  if($("#dispStudentRoll")) $("#dispStudentRoll").innerHTML=r.student?.roll?`<b>${esc(r.student.roll)}</b>`:"<b>—</b>";
  if($("#dispStudentClass")) $("#dispStudentClass").textContent=r.student?.className||"—";
  if($("#dispExamDate")) $("#dispExamDate").textContent=new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});
  if($("#dispExamTime")) $("#dispExamTime").textContent=`${fmt(r.time)} (Allowed: 60:00 mins)`;

  // Assessment Marks Table
  if($("#tMaxMarks")) $("#tMaxMarks").textContent=r.total;
  if($("#tObtMarks")) $("#tObtMarks").textContent=r.correct;
  if($("#tPct")) $("#tPct").textContent=r.percentage.toFixed(1)+"%";
  if($("#tGrade")) $("#tGrade").textContent=gi.grade;
  if($("#tStatus")){
    $("#tStatus").textContent=pass?"PASSED":"NOT PASSED";
    $("#tStatus").className="statusBadge "+(pass?"pass":"fail");
  }
  if($("#transcriptStamp")){
    $("#transcriptStamp").textContent=pass?"VERIFIED • PASSED":"ASSESSED • FAILED";
    $("#transcriptStamp").className="stampTag "+(pass?"":"fail");
  }
  if($("#academicRemarks")) $("#academicRemarks").textContent=gi.remarks;

  // Screen-only analytics & status
  if($("#status")){
    $("#status").textContent=pass?"PASSED":"NOT PASSED";
    $("#status").classList.toggle("pass",pass);
  }
  if($("#resultMsg")) $("#resultMsg").textContent=pass?"You reached the configured passing percentage.":"Review the explanations and try again.";
  if($("#ring")) $("#ring").style.background=`conic-gradient(var(--b) ${r.percentage*3.6}deg,#e2e8f0 ${r.percentage*3.6}deg)`;
  bar("bc","pc",r.correct/r.total*100);
  bar("bw","pw",r.wrong/r.total*100);
  bar("bu","pu",r.unanswered/r.total*100);

  let sm=[];
  if(r.student?.name)sm.push(`<b>Student:</b> ${esc(r.student.name)}`);
  if(r.student?.roll)sm.push(`<b>Roll No:</b> ${esc(r.student.roll)}`);
  if(r.student?.className)sm.push(`<b>Class:</b> ${esc(r.student.className)}`);
  sm.push(`<b>Date:</b> ${new Date().toLocaleDateString()}`);
  if($("#printStudentMeta"))$("#printStudentMeta").innerHTML=sm.join(" &nbsp;•&nbsp; ");
  $("#reviewCount").textContent=r.total+" questions";
  $("#review").innerHTML=r.exam.map((q,i)=>{
    let userAnsIdx=r.answers[q.id];
    let isAns=userAnsIdx!==undefined;
    let ok=isAns&&userAnsIdx===q.answer;
    
    let so=null,soLetter="";
    if(isAns&&Array.isArray(q.options)){
      so=q.options.find((o,idx)=>(o&&typeof o.index==="number"?o.index:idx)===userAnsIdx);
      if(so){let oi=q.options.indexOf(so);soLetter=L[oi]||""}
    }
    
    let co=null,coLetter="";
    if(Array.isArray(q.options)){
      co=q.options.find((o,idx)=>(o&&typeof o.index==="number"?o.index:idx)===q.answer);
      if(!co&&q.options[q.answer])co=q.options[q.answer];
      if(co){let oi=q.options.indexOf(co);coLetter=L[oi]||L[q.answer]||""}
    }
    
    let userDisplay=isAns&&so?`${soLetter?soLetter+". ":""}${esc(optText(so))}`:"Not Answered (Skipped)";
    let correctDisplay=co?`${coLetter?coLetter+". ":""}${esc(optText(co))}`:`Option ${L[q.answer]||(q.answer+1)}`;

    return `<div class="reviewItem"><h4>Q${i+1}. ${esc(q.question)}</h4><div class="${ok?"correct":"wrong"}">${ok?"✓ Correct":(isAns?"✕ Incorrect":"↷ Skipped / Unanswered")} — Your Answer: ${userDisplay}</div><div class="correct">Correct Answer: ${correctDisplay}</div><div class="explain">${esc(q.explanation||"")}</div></div>`;
  }).join("");
}
function bar(id,lab,p){$("#"+id).style.width=p+"%";$("#"+lab).textContent=p.toFixed(0)+"%"}function fmt(x){return String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")}
function save(){if(s.exam.length&&!s.result)store(K.progress,JSON.stringify({exam:s.exam,i:s.i,ans:s.ans,marked:[...s.marked],locked:[...s.locked],skipped:[...s.skipped],sec:s.sec,student:s.student}))}
function restore(){
  let x=read(K.progress,"");
  if(!x)return;
  try{
    let p=JSON.parse(x);
    if(!p||!p.exam||!p.exam.length)return;
    const lockedSet=new Set(p.locked||[]);
    const skippedSet=new Set(p.skipped||[]);
    
    let resumeIdx = (typeof p.i==="number" && p.i>=0 && p.i<p.exam.length) ? p.i : 0;
    if(lockedSet.has(p.exam[resumeIdx]?.id)){
      let foundSkipped = p.exam.findIndex(q => !lockedSet.has(q.id) && skippedSet.has(q.id));
      if(foundSkipped !== -1){
        resumeIdx = foundSkipped;
      } else {
        let firstUnlocked = p.exam.findIndex(q => !lockedSet.has(q.id));
        if(firstUnlocked !== -1) resumeIdx = firstUnlocked;
      }
    }
    const isSkippedResume = skippedSet.has(p.exam[resumeIdx]?.id);
    const resumeQNum = resumeIdx + 1;

    modal(`<h2>Previous Test Session Found</h2><p>An examination in progress was saved in your browser.</p><div style="background:var(--card-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);padding:12px 14px;margin:12px 0;font-size:12.5px;color:var(--t);line-height:1.6;"><div>👤 <b>Student:</b> ${esc(p.student?.name||"Student")} ${p.student?.roll?`(${esc(p.student.roll)})`:""}</div><div>📊 <b>Progress:</b> ${lockedSet.size}/${p.exam.length} locked • <b style="color:var(--a)">${skippedSet.size} skipped</b> • ⏱️ ${fmt(p.sec||3600)} remaining</div><div style="margin-top:6px;padding-top:6px;border-top:1px solid var(--line);color:var(--p);font-weight:600;">📍 <b>Resuming at:</b> Question ${resumeQNum} ${isSkippedResume?'<span class="tag skippedBadge" style="margin-left:6px;font-size:11px;">↷ Skipped Question</span>':""}</div></div><div class="modalActions"><button class="secondary" id="new">Discard & Start New</button><button class="primary" id="resume">Resume at Question ${resumeQNum}</button></div>`);

    $("#new").onclick=close;
    $("#resume").onclick=()=>{
      s.exam=p.exam;
      s.i=resumeIdx;
      s.ans=p.ans||{};
      s.marked=new Set(p.marked||[]);
      s.locked=lockedSet;
      s.skipped=skippedSet;
      s.sec=p.sec||3600;
      s.student=p.student||getStudentSession()||{};
      close();
      ["home","subjects","tools","results"].forEach(id=>$("#"+id)?.classList.add("hidden"));
      $("#live").classList.remove("hidden");
      drawExam();
      clock();
      toast(isSkippedResume ? `Resumed test from skipped Question ${resumeQNum}` : `Resumed test from Question ${resumeQNum}`);
    };
  }catch{
    store(K.progress,"");
  }
}
document.addEventListener("click",e=>{let g=e.target.closest("[data-go]");if(g){main();go(g.dataset.go)}let b=e.target.closest("[data-b]");if(b){s.bankAns[b.dataset.b]=+b.dataset.o;render();toast("Answer saved")}let bm=e.target.closest("[data-bm]");if(bm){let id=+bm.dataset.bm;s.bm.has(id)?s.bm.delete(id):s.bm.add(id);store(K.bm,JSON.stringify([...s.bm]));$("#bmInfo").textContent=s.bm.size+" bookmarked questions";render()}});
$("#theme").onclick=()=>{let n=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=n;store(K.theme,n)};
[$$("#startTop"),$$("#startHero"),$$("#startSubject"),$$("#drawerStartBtn")].flat().forEach(b=>b&&(b.onclick=()=>{if($("#drawer"))$("#drawer").classList.remove("drawerOpen");start();}));
$("#submit").onclick=confirmSubmit;$("#again").onclick=start;$("#print").onclick=()=>window.print();
if($("#printTop"))$("#printTop").onclick=()=>window.print();
if($("#againTop"))$("#againTop").onclick=start;
if($("#clear"))$("#clear").onclick=()=>{$("#search").value=$("#topic").value=$("#difficulty").value="";$("#sort").value="newest";render()};
["search","topic","difficulty","sort"].forEach(id=>{let el=$("#"+id);if(el)el.oninput=render});
$("#menu").onclick=()=>$("#drawer").classList.toggle("drawerOpen");
$("#close").onclick=close;
$("#modal").onclick=e=>{if(e.target.id==="modal")close()};
if($("#logoutBtn"))$("#logoutBtn").onclick=logoutStudent;
if($("#drawerLogoutBtn"))$("#drawerLogoutBtn").onclick=()=>{logoutStudent();$("#drawer").classList.remove("drawerOpen")};
$("#export").onclick=()=>{let b=new Blob([JSON.stringify(s.questions,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="theory-of-automata-week-02-question-bank.json";a.click();URL.revokeObjectURL(a.href)};
$("#import").onclick=()=>$("#file").click();
$("#file").onchange=e=>{let f=e.target.files[0];if(!f)return;let r=new FileReader;r.onload=()=>{try{let d=JSON.parse(r.result);if(!Array.isArray(d)||!d.length)throw Error("Expected a non-empty array");d.forEach(q=>{if(q.id===undefined||!q.question||!Array.isArray(q.options)||q.options.length!==4||typeof q.answer!=="number")throw Error("Invalid question structure")});s.questions=d;$("#total").textContent=d.length;render();toast(d.length+" questions imported")}catch(x){toast("Invalid JSON: "+x.message,true)}};r.readAsText(f)};
$("#bookmarks").onclick=()=>{if(!s.bm.size){toast("No bookmarked questions",true);return}let bms=s.questions.filter(q=>s.bm.has(q.id));modal(`<h2>Bookmarked Questions (${bms.length})</h2><div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:12px;margin-top:16px;">${bms.map(q=>card(q)).join("")}</div>`)};
$("#reset").onclick=()=>{modal(`<h2>Reset All Progress?</h2><p>This clears bookmarks, saved test sessions and the last result.</p><div class="modalActions"><button class="secondary" id="no">Cancel</button><button class="danger" id="ok">Reset Everything</button></div>`);$("#no").onclick=close;$("#ok").onclick=()=>{localStorage.removeItem(K.bm);localStorage.removeItem(K.progress);localStorage.removeItem(K.result);location.reload()}};
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
document.documentElement.dataset.theme=read(K.theme,"light");
try{s.bm=new Set(JSON.parse(read(K.bm,"[]")))}catch{}$("#bmInfo").textContent=s.bm.size+" bookmarked questions";render();restore();
const initSt=getStudentSession();if(initSt){s.student=initSt;updateStudentUI(initSt)}