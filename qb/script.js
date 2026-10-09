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
];

const computerArchitectureQuestions = [
  {
    "id": 1,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the primary focus of Week 1 in Computer Architecture and Organization?",
    "options": [
      "CPU registers and addressing modes",
      "Review of Digital Logic and Design and an overview of computer hardware and software",
      "Cache mapping only",
      "Assembly language programming"
    ],
    "answer": 1,
    "explanation": "Correct answer: Review of Digital Logic and Design and an overview of computer hardware and software",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which number system is commonly used to represent information in digital computers?",
    "options": [
      "Decimal",
      "Binary",
      "Octal only",
      "Roman"
    ],
    "answer": 1,
    "explanation": "Correct answer: Binary",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is a bit?",
    "options": [
      "A group of 16 bytes",
      "A binary digit with a value of 0 or 1",
      "A CPU instruction",
      "A storage device"
    ],
    "answer": 1,
    "explanation": "Correct answer: A binary digit with a value of 0 or 1",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "How many bits are in one byte?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 2,
    "explanation": "Correct answer: 8",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is digital logic?",
    "options": [
      "Logic based on continuous physical quantities only",
      "Logic based on discrete states used to construct digital circuits",
      "A programming language",
      "A type of storage"
    ],
    "answer": 1,
    "explanation": "Correct answer: Logic based on discrete states used to construct digital circuits",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which of the following is a fundamental digital logic building block?",
    "options": [
      "Logic gate",
      "Hard disk",
      "Compiler",
      "Keyboard"
    ],
    "answer": 0,
    "explanation": "Correct answer: Logic gate",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which gate produces 1 only when all required inputs are 1?",
    "options": [
      "OR",
      "AND",
      "NOT",
      "XOR"
    ],
    "answer": 1,
    "explanation": "Correct answer: AND",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which logic gate performs logical inversion?",
    "options": [
      "AND",
      "OR",
      "NOT",
      "NAND"
    ],
    "answer": 2,
    "explanation": "Correct answer: NOT",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which gate is the inverse of an AND operation?",
    "options": [
      "NOR",
      "NAND",
      "XOR",
      "XNOR"
    ],
    "answer": 1,
    "explanation": "Correct answer: NAND",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which gate is the inverse of an OR operation?",
    "options": [
      "NAND",
      "XOR",
      "NOR",
      "AND"
    ],
    "answer": 2,
    "explanation": "Correct answer: NOR",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "For a two-input XOR gate, the output is 1 when:",
    "options": [
      "Both inputs are 0",
      "Both inputs are 1",
      "The inputs differ",
      "The inputs are always equal"
    ],
    "answer": 2,
    "explanation": "Correct answer: The inputs differ",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What does a truth table show?",
    "options": [
      "Only the input values",
      "Possible input combinations and their corresponding outputs",
      "Only CPU registers",
      "Memory addresses only"
    ],
    "answer": 1,
    "explanation": "Correct answer: Possible input combinations and their corresponding outputs",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "In combinational logic, the output depends primarily on:",
    "options": [
      "Current inputs",
      "Previous clock cycles only",
      "Disk contents",
      "Program files"
    ],
    "answer": 0,
    "explanation": "Correct answer: Current inputs",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which is an example of sequential logic?",
    "options": [
      "Adder",
      "Multiplexer",
      "Register",
      "Decoder"
    ],
    "answer": 2,
    "explanation": "Correct answer: Register",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which statement correctly describes sequential logic?",
    "options": [
      "Its output depends only on current inputs",
      "It involves stored state in addition to current inputs",
      "It cannot store information",
      "It is used only for input devices"
    ],
    "answer": 1,
    "explanation": "Correct answer: It involves stored state in addition to current inputs",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the primary role of the CPU?",
    "options": [
      "Permanent storage",
      "Execute instructions and coordinate processing operations",
      "Display output",
      "Provide internet access"
    ],
    "answer": 1,
    "explanation": "Correct answer: Execute instructions and coordinate processing operations",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which CPU component performs arithmetic and logical operations?",
    "options": [
      "Control Unit",
      "ALU",
      "Storage Unit",
      "Input Unit"
    ],
    "answer": 1,
    "explanation": "Correct answer: ALU",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What does ALU stand for?",
    "options": [
      "Arithmetic and Logic Unit",
      "Application Logic Utility",
      "Address Logic Unit",
      "Arithmetic Loading Unit"
    ],
    "answer": 0,
    "explanation": "Correct answer: Arithmetic and Logic Unit",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which CPU component coordinates instruction execution?",
    "options": [
      "ALU",
      "Control Unit",
      "Keyboard",
      "Secondary Storage"
    ],
    "answer": 1,
    "explanation": "Correct answer: Control Unit",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the role of the Control Unit?",
    "options": [
      "Perform all arithmetic operations",
      "Coordinate instruction execution and generate control signals",
      "Store files permanently",
      "Display information"
    ],
    "answer": 1,
    "explanation": "Correct answer: Coordinate instruction execution and generate control signals",
    "type": "single"
  },
  {
    "id": 21,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What are CPU registers?",
    "options": [
      "Large external storage devices",
      "High-speed storage locations associated directly with the CPU",
      "Input devices",
      "Software programs"
    ],
    "answer": 1,
    "explanation": "Correct answer: High-speed storage locations associated directly with the CPU",
    "type": "single"
  },
  {
    "id": 22,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which statement about registers is correct?",
    "options": [
      "They are slower than secondary storage",
      "They hold values, addresses, instructions, or control information needed during processing",
      "They are only used for permanent storage",
      "They replace all main memory"
    ],
    "answer": 1,
    "explanation": "Correct answer: They hold values, addresses, instructions, or control information needed during processing",
    "type": "single"
  },
  {
    "id": 23,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the primary role of main memory?",
    "options": [
      "Store programs and data needed during processing",
      "Print documents",
      "Perform logical operations",
      "Connect to a network"
    ],
    "answer": 0,
    "explanation": "Correct answer: Store programs and data needed during processing",
    "type": "single"
  },
  {
    "id": 24,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which component provides communication between the computer system and external devices?",
    "options": [
      "Input/Output",
      "ALU",
      "Register",
      "Control Unit only"
    ],
    "answer": 0,
    "explanation": "Correct answer: Input/Output",
    "type": "single"
  },
  {
    "id": 25,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which of the following is an input device?",
    "options": [
      "Display",
      "Printer",
      "Keyboard",
      "Speaker"
    ],
    "answer": 2,
    "explanation": "Correct answer: Keyboard",
    "type": "single"
  },
  {
    "id": 26,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which of the following is an output device?",
    "options": [
      "Keyboard",
      "Mouse",
      "Scanner",
      "Display"
    ],
    "answer": 3,
    "explanation": "Correct answer: Display",
    "type": "single"
  },
  {
    "id": 27,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the purpose of secondary storage?",
    "options": [
      "Provide persistent storage for programs and data",
      "Execute CPU instructions directly",
      "Perform Boolean operations",
      "Generate control signals"
    ],
    "answer": 0,
    "explanation": "Correct answer: Provide persistent storage for programs and data",
    "type": "single"
  },
  {
    "id": 28,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which statement best describes computer hardware?",
    "options": [
      "Programs and instructions",
      "Physical components of a computer system",
      "Only operating systems",
      "Only application programs"
    ],
    "answer": 1,
    "explanation": "Correct answer: Physical components of a computer system",
    "type": "single"
  },
  {
    "id": 29,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which statement best describes software?",
    "options": [
      "Physical components",
      "Programs, instructions, and related components that direct hardware",
      "Only CPU registers",
      "A type of memory chip"
    ],
    "answer": 1,
    "explanation": "Correct answer: Programs, instructions, and related components that direct hardware",
    "type": "single"
  },
  {
    "id": 30,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is system software?",
    "options": [
      "Software that supports operation and management of computer hardware",
      "Only games",
      "Only word processors",
      "Only web pages"
    ],
    "answer": 0,
    "explanation": "Correct answer: Software that supports operation and management of computer hardware",
    "type": "single"
  },
  {
    "id": 31,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which is an example of application software?",
    "options": [
      "Operating system",
      "Device-related software",
      "Word processing software",
      "System utility"
    ],
    "answer": 2,
    "explanation": "Correct answer: Word processing software",
    "type": "single"
  },
  {
    "id": 32,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the relationship between hardware and software?",
    "options": [
      "They are independent and never interact",
      "Hardware provides physical resources while software provides instructions for using them",
      "Software replaces hardware",
      "Hardware is a type of application"
    ],
    "answer": 1,
    "explanation": "Correct answer: Hardware provides physical resources while software provides instructions for using them",
    "type": "single"
  },
  {
    "id": 33,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which sequence represents the simplified conceptual instruction-processing cycle introduced in Week 1?",
    "options": [
      "Execute → Fetch → Decode → Store",
      "Fetch → Decode → Execute → Store/Write Back",
      "Decode → Store → Fetch → Execute",
      "Store → Execute → Fetch → Decode"
    ],
    "answer": 1,
    "explanation": "Correct answer: Fetch → Decode → Execute → Store/Write Back",
    "type": "single"
  },
  {
    "id": 34,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Why is digital logic important in computer architecture?",
    "options": [
      "It provides the foundation for digital circuits used in computer hardware",
      "It replaces software",
      "It is used only for printers",
      "It eliminates the need for memory"
    ],
    "answer": 0,
    "explanation": "Correct answer: It provides the foundation for digital circuits used in computer hardware",
    "type": "single"
  },
  {
    "id": 35,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which of the following is an example of combinational logic?",
    "options": [
      "Register",
      "Counter",
      "Adder",
      "Memory state circuit"
    ],
    "answer": 2,
    "explanation": "Correct answer: Adder",
    "type": "single"
  },
  {
    "id": 36,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which component stores active programs and data during processing?",
    "options": [
      "Main Memory",
      "Printer",
      "Keyboard",
      "Output device"
    ],
    "answer": 0,
    "explanation": "Correct answer: Main Memory",
    "type": "single"
  },
  {
    "id": 37,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which pair is correctly matched?",
    "options": [
      "ALU — coordinates instruction execution",
      "Control Unit — performs arithmetic only",
      "CPU — executes instructions",
      "Secondary Storage — performs Boolean logic"
    ],
    "answer": 2,
    "explanation": "Correct answer: CPU — executes instructions",
    "type": "single"
  },
  {
    "id": 38,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "Which of the following is a key Week 1 concept?",
    "options": [
      "Hardware and software relationship",
      "RAID 10 implementation",
      "Detailed assembly directives",
      "Indirect addressing modes"
    ],
    "answer": 0,
    "explanation": "Correct answer: Hardware and software relationship",
    "type": "single"
  },
  {
    "id": 39,
    "subject": "Computer Architecture and Organization",
    "chapter": "Digital Logic & Hardware/Software Overview",
    "topic": "Digital Logic and Design",
    "difficulty": "Medium",
    "question": "What is the main purpose of Week 1?",
    "options": [
      "To study only RAID",
      "To establish foundational understanding of digital logic, hardware, and software before later architecture topics",
      "To complete assembly language programming",
      "To study only CPU flags"
    ],
    "answer": 1,
    "explanation": "Correct answer: To establish foundational understanding of digital logic, hardware, and software before later architecture topics",
    "type": "single"
  }
];

const oopQuestions = [
  {
    "id": 1,
    "subject": "Object-Oriented Programming",
    "chapter": "Classes and Objects",
    "topic": "Classes and Objects",
    "difficulty": "Easy",
    "question": "Which statement best describes a class in C++?",
    "options": [
      "A single value stored in memory",
      "A user-defined type that groups data and behavior",
      "A compiler command",
      "A namespace only"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — A user-defined type that groups data and behavior",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Object-Oriented Programming",
    "chapter": "Classes and Objects",
    "topic": "Classes and Objects",
    "difficulty": "Easy",
    "question": "An object is best described as:",
    "options": [
      "A blueprint for a class",
      "A comment in a program",
      "An instance of a class",
      "A header file"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — An instance of a class",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Object-Oriented Programming",
    "chapter": "Fields / Data Members",
    "topic": "Fields / Data Members",
    "difficulty": "Easy",
    "question": "Which members primarily represent the state of an object?",
    "options": [
      "Data members",
      "Namespaces",
      "Operators only",
      "Header guards"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Data members",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Object-Oriented Programming",
    "chapter": "Methods",
    "topic": "Methods",
    "difficulty": "Easy",
    "question": "Which member represents behavior in an OOP class?",
    "options": [
      "Field",
      "Method",
      "Namespace",
      "Literal"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Method",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Object-Oriented Programming",
    "chapter": "Parameterized Methods",
    "topic": "Parameterized Methods",
    "difficulty": "Easy",
    "question": "Which method declaration is parameterized?",
    "options": [
      "void display()",
      "int getAge()",
      "void setAge(int age)",
      "void show()"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — void setAge(int age)",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Object-Oriented Programming",
    "chapter": "Non-Returning Methods",
    "topic": "Non-Returning Methods",
    "difficulty": "Easy",
    "question": "What does the return type void indicate?",
    "options": [
      "The method returns an integer",
      "The method does not return a data value",
      "The method cannot contain statements",
      "The method is always static"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — The method does not return a data value",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Object-Oriented Programming",
    "chapter": "Returning Methods",
    "topic": "Returning Methods",
    "difficulty": "Easy",
    "question": "Which method returns an integer value?",
    "options": [
      "void display()",
      "int getMarks()",
      "void show()",
      "void print()"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — int getMarks()",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Object-Oriented Programming",
    "chapter": "Methods and Arguments",
    "topic": "Methods and Arguments",
    "difficulty": "Medium",
    "question": "In calculator.add(5, 7), 5 and 7 are:",
    "options": [
      "Classes",
      "Fields",
      "Arguments",
      "Namespaces"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — Arguments",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Object-Oriented Programming",
    "chapter": "Methods and Parameters",
    "topic": "Methods and Parameters",
    "difficulty": "Easy",
    "question": "In int add(int x, int y), x and y are:",
    "options": [
      "Objects",
      "Parameters",
      "Classes",
      "Namespaces"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Parameters",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Object-Oriented Programming",
    "chapter": "Object Member Access",
    "topic": "Object Member Access",
    "difficulty": "Easy",
    "question": "Which operator accesses a member through an ordinary object?",
    "options": [
      "::",
      "->",
      ".",
      "#"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — .",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Object-Oriented Programming",
    "chapter": "Classes and Objects",
    "topic": "Classes and Objects",
    "difficulty": "Easy",
    "question": "If Student is a class, which statement creates an object named s1?",
    "options": [
      "class s1 = Student;",
      "Student s1;",
      "object Student s1;",
      "Student::s1;"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Student s1;",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Object-Oriented Programming",
    "chapter": "Namespaces",
    "topic": "Namespaces",
    "difficulty": "Medium",
    "question": "What is the primary purpose of a namespace?",
    "options": [
      "Allocate object memory",
      "Prevent all runtime errors",
      "Organize identifiers and reduce naming conflicts",
      "Replace classes"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — Organize identifiers and reduce naming conflicts",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Object-Oriented Programming",
    "chapter": "std Namespace",
    "topic": "std Namespace",
    "difficulty": "Easy",
    "question": "Which namespace contains cout and string?",
    "options": [
      "system",
      "cpp",
      "standard",
      "std"
    ],
    "answer": 3,
    "explanation": "Correct Answer: Option D — std",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Object-Oriented Programming",
    "chapter": "std Namespace",
    "topic": "std Namespace",
    "difficulty": "Easy",
    "question": "Which statement explicitly accesses cout in the standard namespace?",
    "options": [
      "cout::std",
      "std::cout",
      "namespace::cout",
      "standard.cout"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — std::cout",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Object-Oriented Programming",
    "chapter": "Non-Parameterized Methods",
    "topic": "Non-Parameterized Methods",
    "difficulty": "Easy",
    "question": "Which method is non-parameterized?",
    "options": [
      "void setName(string n)",
      "int add(int a, int b)",
      "void display()",
      "double area(double r)"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — void display()",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Object-Oriented Programming",
    "chapter": "Returning and Parameterized Methods",
    "topic": "Returning and Parameterized Methods",
    "difficulty": "Medium",
    "question": "Which method is both parameterized and returning?",
    "options": [
      "void display()",
      "int square(int n)",
      "void show(int n)",
      "void print()"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — int square(int n)",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Object-Oriented Programming",
    "chapter": "Objects and Data Members",
    "topic": "Objects and Data Members",
    "difficulty": "Medium",
    "question": "If two objects are created from the same class, their non-static data members normally:",
    "options": [
      "Must have identical values",
      "Are independently stored for each object",
      "Are shared automatically",
      "Become namespaces"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Are independently stored for each object",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Object-Oriented Programming",
    "chapter": "Returning Methods",
    "topic": "Returning Methods",
    "difficulty": "Easy",
    "question": "Which declaration correctly defines a method that returns double?",
    "options": [
      "void calculate()",
      "return calculate()",
      "double calculate()",
      "method double calculate"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — double calculate()",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Object-Oriented Programming",
    "chapter": "Non-Returning Methods",
    "topic": "Non-Returning Methods",
    "difficulty": "Easy",
    "question": "Which statement is correct about a void method?",
    "options": [
      "It cannot have parameters",
      "It cannot perform calculations",
      "It does not return a data value to the caller",
      "It must be private"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — It does not return a data value to the caller",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Object-Oriented Programming",
    "chapter": "Class Design",
    "topic": "Class Design",
    "difficulty": "Medium",
    "question": "Which mapping is most appropriate for a Student class?",
    "options": [
      "name and rollNo as methods; display as a field",
      "Student as an object and Ali as a class",
      "name/rollNo as fields and display() as a method",
      "std as a field and Student as a method"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — name/rollNo as fields and display() as a method",
    "type": "single"
  }
];

const databaseSystemsQuestions = [
  {
    "id": 1,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Three-Level Schema Architecture",
    "difficulty": "Easy",
    "question": "Which architecture divides a database system into External, Conceptual, and Internal levels?",
    "options": [
      "Two-Level Architecture",
      "Three-Level Schema Architecture",
      "Client-Server Architecture",
      "Distributed Architecture"
    ],
    "answer": 1,
    "explanation": "The Three-Level Schema Architecture (ANSI/SPARC) divides a database system into External, Conceptual, and Internal levels.",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Level",
    "difficulty": "Easy",
    "question": "The External Level is also known as the:",
    "options": [
      "Physical Level",
      "Logical Level",
      "View Level",
      "Storage Level"
    ],
    "answer": 2,
    "explanation": "The External Level is also referred to as the View Level because it describes how individual users perceive data.",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Level",
    "difficulty": "Easy",
    "question": "The Conceptual Level is also called the:",
    "options": [
      "View Level",
      "Logical Level",
      "Physical Level",
      "User Level"
    ],
    "answer": 1,
    "explanation": "The Conceptual Level is also known as the Logical Level, representing the global logical structure of the database.",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Internal Level",
    "difficulty": "Easy",
    "question": "The Internal Level is also called the:",
    "options": [
      "Physical Level",
      "View Level",
      "Logical Level",
      "Application Level"
    ],
    "answer": 0,
    "explanation": "The Internal Level is also called the Physical Level because it describes physical storage and access mechanisms.",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Level",
    "difficulty": "Easy",
    "question": "Which level represents the database from the perspective of individual users?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "Physical Storage Level"
    ],
    "answer": 0,
    "explanation": "The External Level represents customized views tailored to individual users or groups of users.",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Level",
    "difficulty": "Medium",
    "question": "Which level describes the overall logical structure of the entire database?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "Application Level"
    ],
    "answer": 1,
    "explanation": "The Conceptual Level describes the overall logical structure of the entire database, hiding storage details.",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Internal Level",
    "difficulty": "Easy",
    "question": "Which level describes how data is physically stored?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "View Level"
    ],
    "answer": 2,
    "explanation": "The Internal Level specifies how data is physically stored on disks, including file organization and records.",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Level",
    "difficulty": "Easy",
    "question": "Which level is primarily concerned with user views?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "Physical Storage"
    ],
    "answer": 0,
    "explanation": "User views and perspectives are primarily the concern of the External Level.",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Level",
    "difficulty": "Medium",
    "question": "Which level is primarily concerned with entities, relationships, and constraints?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "Storage Level"
    ],
    "answer": 1,
    "explanation": "Entities, data types, relationships, user operations, and integrity constraints are defined at the Conceptual Level.",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Internal Level",
    "difficulty": "Medium",
    "question": "Which level is primarily concerned with file organization and indexes?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "User View"
    ],
    "answer": 2,
    "explanation": "File structures, indexing, data compression, and hashing are implemented at the Internal Level.",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Level",
    "difficulty": "Easy",
    "question": "A database can have different views for different users at which level?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "Physical Level"
    ],
    "answer": 0,
    "explanation": "Different users can have different custom views at the External Level according to their specific needs and authorization.",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Level",
    "difficulty": "Easy",
    "question": "The complete logical structure of a database is represented at the:",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "User Level"
    ],
    "answer": 1,
    "explanation": "The complete, enterprise-wide logical structure of a database is represented at the Conceptual Level.",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Database Abstraction",
    "difficulty": "Medium",
    "question": "Physical storage details are hidden from users mainly through:",
    "options": [
      "Data redundancy",
      "Database abstraction",
      "Data duplication",
      "Data entry"
    ],
    "answer": 1,
    "explanation": "Database abstraction simplifies user interaction by hiding physical storage complexities through multiple schema levels.",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Schema Mapping",
    "difficulty": "Medium",
    "question": "Which mapping connects the External Level with the Conceptual Level?",
    "options": [
      "Conceptual-Internal Mapping",
      "External-Conceptual Mapping",
      "User-Storage Mapping",
      "Physical-View Mapping"
    ],
    "answer": 1,
    "explanation": "External-Conceptual Mapping connects individual user views (external schemas) with the centralized conceptual schema.",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Schema Mapping",
    "difficulty": "Medium",
    "question": "Which mapping connects the Conceptual Level with the Internal Level?",
    "options": [
      "External-Conceptual Mapping",
      "User-Application Mapping",
      "Conceptual-Internal Mapping",
      "View-Physical Mapping"
    ],
    "answer": 2,
    "explanation": "Conceptual-Internal Mapping defines how logical records and entities map to physical storage records on disk.",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Schema",
    "difficulty": "Easy",
    "question": "Which schema represents a particular user's or application's view of the database?",
    "options": [
      "External Schema",
      "Conceptual Schema",
      "Internal Schema",
      "Physical Schema"
    ],
    "answer": 0,
    "explanation": "An External Schema describes the specific part of the database relevant to a particular user or application program.",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Schema",
    "difficulty": "Easy",
    "question": "Which schema represents the complete logical structure of the database?",
    "options": [
      "External Schema",
      "Conceptual Schema",
      "Internal Schema",
      "User Schema"
    ],
    "answer": 1,
    "explanation": "The Conceptual Schema describes the total logical structure of the entire database for all users.",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Internal Schema",
    "difficulty": "Easy",
    "question": "Which schema describes the physical organization of database storage?",
    "options": [
      "External Schema",
      "Conceptual Schema",
      "Internal Schema",
      "View Schema"
    ],
    "answer": 2,
    "explanation": "The Internal Schema describes the physical storage structures, paths, and internal record organization.",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Schema",
    "difficulty": "Medium",
    "question": "A database may have multiple external schemas because:",
    "options": [
      "All users have identical requirements",
      "Different users may require different views",
      "There is only one user",
      "Physical storage is duplicated"
    ],
    "answer": 1,
    "explanation": "A database can have multiple external schemas because different users and roles have distinct information needs.",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Schema",
    "difficulty": "Easy",
    "question": "There is generally how many conceptual schemas for a database?",
    "options": [
      "None",
      "One",
      "Two",
      "Many"
    ],
    "answer": 1,
    "explanation": "There is generally only one conceptual schema for a single database, representing the unified logical model.",
    "type": "single"
  },
  {
    "id": 21,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Data Independence",
    "difficulty": "Medium",
    "question": "Data Independence means the ability to change a schema at one level without:",
    "options": [
      "Deleting the database",
      "Changing the next higher level unnecessarily",
      "Creating a new DBMS",
      "Changing all stored data"
    ],
    "answer": 1,
    "explanation": "Data Independence allows schema changes at one level without requiring alterations to schemas at higher levels.",
    "type": "single"
  },
  {
    "id": 22,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Data Independence",
    "difficulty": "Easy",
    "question": "Which is a major benefit of the Three-Level Schema Architecture?",
    "options": [
      "Increased data duplication",
      "Data independence",
      "Elimination of databases",
      "Removal of all constraints"
    ],
    "answer": 1,
    "explanation": "The primary motivation and major benefit of the Three-Level Schema Architecture is achieving data independence.",
    "type": "single"
  },
  {
    "id": 23,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Physical Data Independence",
    "difficulty": "Medium",
    "question": "Physical Data Independence allows changes to the:",
    "options": [
      "External schema without affecting users",
      "Conceptual schema without affecting storage",
      "Internal schema without changing the conceptual schema",
      "User interface without changing the application"
    ],
    "answer": 2,
    "explanation": "Physical Data Independence allows altering the internal schema (storage, indexing) without altering the conceptual schema.",
    "type": "single"
  },
  {
    "id": 24,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Logical Data Independence",
    "difficulty": "Medium",
    "question": "Logical Data Independence allows changes to the:",
    "options": [
      "Internal schema without changing the conceptual schema",
      "Conceptual schema without requiring changes to external schemas",
      "Physical storage without changing files",
      "External schema without changing the conceptual schema"
    ],
    "answer": 1,
    "explanation": "Logical Data Independence allows changing the conceptual schema (adding tables/attributes) without requiring changes to external schemas.",
    "type": "single"
  },
  {
    "id": 25,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Physical Data Independence",
    "difficulty": "Medium",
    "question": "Changing file organization is an example of:",
    "options": [
      "Logical Data Independence",
      "Physical Data Independence",
      "Data Redundancy",
      "Entity Independence"
    ],
    "answer": 1,
    "explanation": "Changing file organization (e.g. from sequential to hashed) is an internal storage modification reflecting Physical Data Independence.",
    "type": "single"
  },
  {
    "id": 26,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Physical Data Independence",
    "difficulty": "Medium",
    "question": "Creating or removing database indexes is an example of:",
    "options": [
      "Physical Data Independence",
      "Logical Data Independence",
      "External Schema Change",
      "Conceptual Modeling"
    ],
    "answer": 0,
    "explanation": "Creating or dropping secondary indexes to tune performance is an example of Physical Data Independence.",
    "type": "single"
  },
  {
    "id": 27,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Logical Data Independence",
    "difficulty": "Medium",
    "question": "Adding attributes to the conceptual schema can illustrate:",
    "options": [
      "Physical Data Independence",
      "Logical Data Independence",
      "File Organization",
      "Storage Allocation"
    ],
    "answer": 1,
    "explanation": "Adding attributes or relationships to the conceptual schema without breaking existing views demonstrates Logical Data Independence.",
    "type": "single"
  },
  {
    "id": 28,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Data Independence Comparison",
    "difficulty": "Hard",
    "question": "Which type of data independence is generally more difficult to achieve?",
    "options": [
      "Physical Data Independence",
      "Logical Data Independence",
      "External Independence",
      "Storage Independence"
    ],
    "answer": 1,
    "explanation": "Logical Data Independence is generally more difficult to achieve because changes to the logical model often impact application programs.",
    "type": "single"
  },
  {
    "id": 29,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Physical Data Independence",
    "difficulty": "Medium",
    "question": "Changing physical access paths without changing the logical database structure demonstrates:",
    "options": [
      "Logical Data Independence",
      "Physical Data Independence",
      "Data Modeling",
      "View Integration"
    ],
    "answer": 1,
    "explanation": "Changing access paths or storage hardware without affecting logical definitions exemplifies Physical Data Independence.",
    "type": "single"
  },
  {
    "id": 30,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Level",
    "difficulty": "Easy",
    "question": "Which level is closest to end users?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "Storage Level"
    ],
    "answer": 0,
    "explanation": "The External Level is the topmost level, positioned closest to end users and application interfaces.",
    "type": "single"
  },
  {
    "id": 31,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Internal Level",
    "difficulty": "Easy",
    "question": "Which level is closest to physical storage?",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "View Level"
    ],
    "answer": 2,
    "explanation": "The Internal Level is the lowest level, situated closest to actual physical storage devices and operating system file systems.",
    "type": "single"
  },
  {
    "id": 32,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Database Concepts",
    "difficulty": "Easy",
    "question": "Which statement correctly describes a schema?",
    "options": [
      "Actual values stored in the database",
      "Logical structure or design of a database",
      "A physical storage device",
      "A database user"
    ],
    "answer": 1,
    "explanation": "A schema refers to the overall design, description, and logical structure of a database.",
    "type": "single"
  },
  {
    "id": 33,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Database Concepts",
    "difficulty": "Easy",
    "question": "Which statement correctly describes data?",
    "options": [
      "The structure of database objects",
      "The actual values stored in the database",
      "The mapping between levels",
      "The physical storage method"
    ],
    "answer": 1,
    "explanation": "Data represents the actual information, values, or facts stored in the database at any specific point in time.",
    "type": "single"
  },
  {
    "id": 34,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "External Schema",
    "difficulty": "Medium",
    "question": "A student view containing Name, Roll Number, Courses, and Marks is an example of:",
    "options": [
      "External Schema",
      "Internal Schema",
      "Physical Schema",
      "Storage Schema"
    ],
    "answer": 0,
    "explanation": "A tailored view showing student name, roll number, and marks is an example of an External Schema.",
    "type": "single"
  },
  {
    "id": 35,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Conceptual Level",
    "difficulty": "Medium",
    "question": "STUDENT, COURSE, ENROLLMENT, and RESULT as part of the overall logical design belong to the:",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "User Interface"
    ],
    "answer": 1,
    "explanation": "Core business entities such as STUDENT, COURSE, ENROLLMENT, and RESULT form the enterprise model at the Conceptual Level.",
    "type": "single"
  },
  {
    "id": 36,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Internal Level",
    "difficulty": "Medium",
    "question": "Files, pages, records, indexes, and storage blocks are associated mainly with the:",
    "options": [
      "External Level",
      "Conceptual Level",
      "Internal Level",
      "View Level"
    ],
    "answer": 2,
    "explanation": "Low-level structures like pages, records, indexes, and storage blocks are managed at the Internal Level.",
    "type": "single"
  },
  {
    "id": 37,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Data Independence",
    "difficulty": "Medium",
    "question": "Which statement best describes the purpose of data independence?",
    "options": [
      "To increase the number of users",
      "To minimize the impact of schema changes on higher levels",
      "To eliminate database tables",
      "To remove all database constraints"
    ],
    "answer": 1,
    "explanation": "The primary purpose of data independence is to minimize the cascading impact of schema changes on higher levels and applications.",
    "type": "single"
  },
  {
    "id": 38,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Three-Level Architecture",
    "difficulty": "Easy",
    "question": "Which of the following is NOT one of the three schema levels?",
    "options": [
      "External",
      "Conceptual",
      "Internal",
      "Application"
    ],
    "answer": 3,
    "explanation": "The three levels of schema architecture are External, Conceptual, and Internal. 'Application' is not one of the three architectural schema levels.",
    "type": "single"
  },
  {
    "id": 39,
    "subject": "Database Systems",
    "chapter": "Three-Level Schema Architecture & Data Independence",
    "topic": "Three-Level Architecture",
    "difficulty": "Medium",
    "question": "Which sequence correctly represents the three levels from highest to lowest?",
    "options": [
      "Internal → Conceptual → External",
      "External → Conceptual → Internal",
      "Conceptual → External → Internal",
      "External → Internal → Conceptual"
    ],
    "answer": 1,
    "explanation": "From highest level (closest to users) to lowest level (closest to physical storage): External → Conceptual → Internal.",
    "type": "single"
  }
];

const oopWeek02Questions = [
  {
    "id": 1,
    "subject": "Object-Oriented Programming",
    "chapter": "Object-Oriented Analysis",
    "topic": "Object-Oriented Analysis",
    "difficulty": "Easy",
    "question": "What is the primary purpose of Object-Oriented Analysis (OOA)?",
    "options": [
      "To write source code immediately",
      "To understand the problem domain and identify relevant objects and responsibilities",
      "To compile the final program",
      "To design the user interface only"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Object-Oriented Analysis (OOA) focuses on understanding the problem domain and identifying what the system should do by recognizing relevant domain objects and their responsibilities without worrying about technical implementation details.",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Object-Oriented Programming",
    "chapter": "Object-Oriented Design",
    "topic": "Object-Oriented Design",
    "difficulty": "Easy",
    "question": "Object-Oriented Design (OOD) primarily focuses on:",
    "options": [
      "Converting the analysis model into a detailed software design",
      "Finding spelling errors in code",
      "Replacing the programming language",
      "Creating hardware components"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Object-Oriented Design (OOD) transforms conceptual requirements and analysis models into technical software specifications, defining classes, interfaces, methods, and relationships ready for implementation.",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Object-Oriented Programming",
    "chapter": "UML",
    "topic": "UML",
    "difficulty": "Easy",
    "question": "UML stands for:",
    "options": [
      "Universal Modeling Language",
      "Unified Modeling Language",
      "Unified Machine Language",
      "User Modeling Logic"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — UML stands for Unified Modeling Language, the industry-standard visual modeling notation created by the Object Management Group (OMG).",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Object-Oriented Programming",
    "chapter": "UML",
    "topic": "UML",
    "difficulty": "Easy",
    "question": "Which statement about UML is correct?",
    "options": [
      "UML is a programming language",
      "UML is an executable language",
      "UML is a visual modeling language",
      "UML is a database management system"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — UML is a visual modeling language used to specify, visualize, construct, and document artifacts of software systems; it is not a compiled/executable programming language or DBMS.",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Object-Oriented Programming",
    "chapter": "UML Class Diagram",
    "topic": "UML Class Diagram",
    "difficulty": "Easy",
    "question": "Which UML diagram primarily represents classes, attributes, operations, and structural relationships?",
    "options": [
      "Sequence Diagram",
      "Activity Diagram",
      "Class Diagram",
      "Use Case Diagram"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — The UML Class Diagram is a static structural diagram displaying the system's classes, their attributes, methods/operations, and the static relationships among them.",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Object-Oriented Programming",
    "chapter": "Noun Analysis",
    "topic": "Noun Analysis",
    "difficulty": "Easy",
    "question": "In noun analysis, important nouns and noun phrases are initially treated as candidates for:",
    "options": [
      "Classes or objects",
      "Loops",
      "Compilers",
      "Operators"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — In noun analysis (natural language analysis), grammatical nouns and noun phrases identified in requirements represent potential candidate classes or objects in the system.",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Object-Oriented Programming",
    "chapter": "Noun Analysis",
    "topic": "Noun Analysis",
    "difficulty": "Medium",
    "question": "Why should every noun in a problem statement NOT automatically become a class?",
    "options": [
      "Some nouns may be attributes, irrelevant terms, or duplicates",
      "Nouns cannot be used in software",
      "Classes cannot have names",
      "UML does not support nouns"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Many nouns turn out to be attributes of other classes (e.g., student name), synonyms/duplicates, outside system scope, or simple values rather than distinct classes with behaviors.",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Object-Oriented Programming",
    "chapter": "Noun Analysis",
    "topic": "Noun Analysis",
    "difficulty": "Easy",
    "question": "In the statement “A student registers for a course,” the noun “student” is most likely a candidate for a:",
    "options": [
      "Method",
      "Class/object",
      "Loop",
      "Parameter only"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — In this statement, 'student' represents an autonomous entity with identity, state, and behavior, making it a prime candidate for a Class or Object.",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Object-Oriented Programming",
    "chapter": "Verb Analysis",
    "topic": "Verb Analysis",
    "difficulty": "Easy",
    "question": "In verb analysis, verbs and verb phrases are commonly used to identify candidate:",
    "options": [
      "Attributes only",
      "Responsibilities or methods",
      "Programming languages",
      "Databases"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Verbs describe actions, behaviors, and operations performed by or on entities, making them the primary indicators for methods and responsibilities.",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Object-Oriented Programming",
    "chapter": "Attributes and Properties",
    "topic": "Attributes and Properties",
    "difficulty": "Easy",
    "question": "Which is most likely an attribute of a Student class?",
    "options": [
      "registerCourse()",
      "viewResult()",
      "rollNo",
      "enroll()"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — 'rollNo' stores data describing the state of a Student, making it a member attribute, whereas registerCourse, viewResult, and enroll are behavioral methods.",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Object-Oriented Programming",
    "chapter": "Methods and Responsibilities",
    "topic": "Methods and Responsibilities",
    "difficulty": "Easy",
    "question": "Which is most likely a responsibility/method of a Student class?",
    "options": [
      "name",
      "semester",
      "rollNo",
      "registerCourse()"
    ],
    "answer": 3,
    "explanation": "Correct Answer: Option D — 'registerCourse()' represents a behavioral action or service that the Student performs, whereas name, semester, and rollNo are static attributes.",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Object-Oriented Programming",
    "chapter": "CRC Cards",
    "topic": "CRC Cards",
    "difficulty": "Easy",
    "question": "CRC stands for:",
    "options": [
      "Class–Relationship–Code",
      "Class–Responsibility–Collaborator",
      "Code–Result–Class",
      "Class–Record–Compiler"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — CRC stands for Class–Responsibility–Collaborator, an agile brainstorming technique introduced by Kent Beck and Ward Cunningham for object-oriented design.",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Object-Oriented Programming",
    "chapter": "CRC Cards",
    "topic": "CRC Cards",
    "difficulty": "Medium",
    "question": "The 'Responsibility' section of a CRC card describes:",
    "options": [
      "What the class is responsible for knowing or doing",
      "The programming language used",
      "The physical location of the computer",
      "The database server address"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Responsibilities on a CRC card represent obligations of a class: what knowledge it maintains (state/data) and what actions it executes (behavior/operations).",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Object-Oriented Programming",
    "chapter": "CRC Cards",
    "topic": "CRC Cards",
    "difficulty": "Medium",
    "question": "A collaborator in CRC modeling is:",
    "options": [
      "Another class that interacts with the class to help fulfill a responsibility",
      "A compiler error",
      "A variable with no class",
      "A programming language"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Collaborators are peer classes that supply information or perform tasks needed by the given class to satisfy its designated responsibilities.",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Object-Oriented Programming",
    "chapter": "Analysis to Design Workflow",
    "topic": "Analysis to Design Workflow",
    "difficulty": "Medium",
    "question": "Which sequence best represents a basic analysis-to-design workflow?",
    "options": [
      "Code → Compile → Analyze → Model",
      "Problem Statement → Candidate Objects → Attributes/Responsibilities → Relationships → Design",
      "Database → Compiler → UML → Problem",
      "Testing → Coding → Requirements → Analysis"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — The standard engineering workflow proceeds from examining the Problem Statement to extracting Candidate Objects, assigning Attributes & Responsibilities, determining Relationships, and producing the finalized Design model.",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Object-Oriented Programming",
    "chapter": "Problem Statement Analysis",
    "topic": "Problem Statement Analysis",
    "difficulty": "Easy",
    "question": "Consider: “The library stores books. Each book has a title, author, and ISBN.” Which is most likely an attribute?",
    "options": [
      "Library",
      "Book",
      "title",
      "stores()"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — 'title' is a piece of data describing a Book (an attribute), while 'Library' and 'Book' are classes/objects, and 'stores()' is an action/method.",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Object-Oriented Programming",
    "chapter": "Responsibilities / Methods",
    "topic": "Responsibilities / Methods",
    "difficulty": "Medium",
    "question": "Consider: “A student borrows and returns a book.” Which is a reasonable candidate responsibility of Student?",
    "options": [
      "ISBN",
      "author",
      "borrowBook()",
      "title"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — 'borrowBook()' represents an operational task or responsibility that a Student performs upon a Book, whereas ISBN, author, and title are attributes of Book.",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Object-Oriented Programming",
    "chapter": "Attributes vs Methods",
    "topic": "Attributes vs Methods",
    "difficulty": "Easy",
    "question": "Which statement best distinguishes an attribute from a method?",
    "options": [
      "An attribute represents data/state; a method represents behavior/operation",
      "An attribute is always a class; a method is always an object",
      "An attribute compiles code; a method stores hardware",
      "There is no difference"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Attributes capture the state, properties, and values stored by an object, while methods define the behavioral logic and callable operations that act upon that state.",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Object-Oriented Programming",
    "chapter": "UML Class Diagram",
    "topic": "UML Class Diagram",
    "difficulty": "Easy",
    "question": "What is the main purpose of a UML class diagram in this context?",
    "options": [
      "To visually communicate the structural design of classes and their relationships",
      "To execute the program",
      "To replace testing",
      "To store source code"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — The UML class diagram acts as an architectural blueprint that visually communicates the system's class structures, internal contents, and relational dependencies.",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Object-Oriented Programming",
    "chapter": "Noun/Verb Analysis",
    "topic": "Noun/Verb Analysis",
    "difficulty": "Medium",
    "question": "Which modeling practice is most appropriate?",
    "options": [
      "Assign responsibilities based only on the nearest verb in the sentence",
      "Evaluate candidate nouns and verbs in the context of system requirements",
      "Create a class for every word in the problem statement",
      "Avoid identifying relationships until after deployment"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Rigorous modeling requires vetting linguistic cues (nouns/verbs) critically against overall system scope, domain logic, and functional requirements rather than naive mechanical translation.",
    "type": "single"
  }
];

const oopWeek04Questions = [
  {
    "id": 1,
    "subject": "Object-Oriented Programming",
    "chapter": "Constructors",
    "topic": "Constructors",
    "difficulty": "Easy",
    "question": "What is the primary purpose of a constructor in C++?",
    "options": [
      "To destroy an object",
      "To initialize an object when it is created",
      "To define a namespace",
      "To overload an operator"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — A constructor is an automatic member function invoked during object creation primarily to initialize the object's data members and state.",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Object-Oriented Programming",
    "chapter": "Constructors",
    "topic": "Constructors",
    "difficulty": "Easy",
    "question": "Which statement about a C++ constructor is correct?",
    "options": [
      "It must have a return type",
      "It has the same name as its class and no return type",
      "It must always be private",
      "It can only be called manually"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Constructors share the exact name of their declaring class and do not specify any return type (not even void).",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Object-Oriented Programming",
    "chapter": "Default Constructor",
    "topic": "Default Constructor",
    "difficulty": "Easy",
    "question": "A constructor that can be called without arguments is commonly called a:",
    "options": [
      "Copy constructor",
      "Parameterized constructor",
      "Default constructor",
      "Virtual constructor"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — A default constructor is one that accepts no arguments (or has default arguments for all parameters), allowing parameterless instantiation.",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Object-Oriented Programming",
    "chapter": "Parameterized Constructor",
    "topic": "Parameterized Constructor",
    "difficulty": "Easy",
    "question": "Which constructor receives values from the caller to initialize an object?",
    "options": [
      "Default constructor",
      "Parameterized constructor",
      "Destructor",
      "Friend constructor"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — A parameterized constructor takes arguments passed by the caller to initialize the newly created object with specific initial values.",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Object-Oriented Programming",
    "chapter": "Copy Constructor",
    "topic": "Copy Constructor",
    "difficulty": "Medium",
    "question": "What is the main purpose of a copy constructor?",
    "options": [
      "To delete an existing object",
      "To create a new object from an existing object of the same class",
      "To allocate a namespace",
      "To access private members from any function"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — A copy constructor initializes a brand new object as an exact copy or clone of an existing object of the identical class.",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Object-Oriented Programming",
    "chapter": "Copy Constructor",
    "topic": "Copy Constructor",
    "difficulty": "Medium",
    "question": "Which is a conventional declaration for a copy constructor of class Student?",
    "options": [
      "Student(Student other)",
      "Student(const Student& other)",
      "void Student(const Student& other)",
      "copy Student(Student& other)"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — The standard copy constructor signature is ClassName(const ClassName& other), taking a reference to const to avoid infinite pass-by-value recursion.",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Object-Oriented Programming",
    "chapter": "Constructor Initialization List",
    "topic": "Constructor Initialization List",
    "difficulty": "Medium",
    "question": "Which syntax uses a constructor initialization list?",
    "options": [
      "Student(string n) { name = n; }",
      "Student(string n) : name(n) { }",
      "Student : name(n) { }",
      "constructor Student(name)"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — The colon syntax followed by member(val) initializers before the constructor body represents the constructor initialization list.",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Object-Oriented Programming",
    "chapter": "Constructor Overloading",
    "topic": "Constructor Overloading",
    "difficulty": "Medium",
    "question": "Constructor overloading means:",
    "options": [
      "A class has multiple constructors with different parameter lists",
      "A constructor has multiple return types",
      "A constructor is inherited from every class",
      "A constructor is converted into a namespace"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Overloading constructors occurs when multiple constructors share the same class name but provide differing numbers, types, or sequences of parameters.",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Object-Oriented Programming",
    "chapter": "Encapsulation",
    "topic": "Encapsulation",
    "difficulty": "Easy",
    "question": "Encapsulation primarily involves:",
    "options": [
      "Combining data and related operations while controlling access",
      "Removing all methods from a class",
      "Making every field public",
      "Replacing classes with functions"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Encapsulation bundles internal data members and the operations that manipulate them into a single unit (class) while restricting unauthorized direct access.",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Object-Oriented Programming",
    "chapter": "Information Hiding",
    "topic": "Information Hiding",
    "difficulty": "Easy",
    "question": "Information hiding refers to:",
    "options": [
      "Hiding all source code from the compiler",
      "Concealing implementation details behind a controlled interface",
      "Deleting private members",
      "Hiding the class name"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Information hiding protects internal object representations and algorithms from external interference by presenting a controlled public API.",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Object-Oriented Programming",
    "chapter": "Access Specifiers",
    "topic": "Access Specifiers",
    "difficulty": "Easy",
    "question": "Which access specifier is generally used to expose a class's public interface?",
    "options": [
      "private",
      "protected",
      "public",
      "hidden"
    ],
    "answer": 2,
    "explanation": "Correct Answer: Option C — The 'public' specifier designates members accessible to any function or client of the class, forming its external interface.",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Object-Oriented Programming",
    "chapter": "Access Specifiers",
    "topic": "Access Specifiers",
    "difficulty": "Easy",
    "question": "In a C++ class, members are private by default when no access specifier is written. Which keyword changes access to public?",
    "options": [
      "public",
      "open",
      "export",
      "visible"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — In C++, members of a class default to private; the 'public:' keyword is used to make subsequent members publicly accessible.",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Object-Oriented Programming",
    "chapter": "Private Access",
    "topic": "Private Access",
    "difficulty": "Medium",
    "question": "Which statement about private members is correct?",
    "options": [
      "They can always be accessed directly from main()",
      "They are directly accessible only within the class and permitted friends",
      "They must be static",
      "They cannot store data"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Private members cannot be accessed directly from outside the class scope; only member functions of the class and explicitly designated friend entities can access them.",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Object-Oriented Programming",
    "chapter": "this Pointer",
    "topic": "this Pointer",
    "difficulty": "Easy",
    "question": "In a non-static member function, this is:",
    "options": [
      "A reference to the class definition",
      "A pointer to the current object",
      "A pointer to the compiler",
      "A namespace identifier"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — In C++, 'this' is a constant implicit pointer available inside non-static member functions pointing to the object instance invoking the function.",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Object-Oriented Programming",
    "chapter": "this Pointer",
    "topic": "this Pointer",
    "difficulty": "Medium",
    "question": "Why is this->name useful in a constructor such as Student(string name)?",
    "options": [
      "It creates a new class",
      "It distinguishes the data member name from the parameter name",
      "It deletes the parameter",
      "It changes the access specifier"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Using 'this->name' resolves scope shadowing, clearly designating the object's instance variable 'name' versus the constructor parameter 'name'.",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Object-Oriented Programming",
    "chapter": "new Keyword",
    "topic": "new Keyword",
    "difficulty": "Medium",
    "question": "What does the new operator do in C++ when used as new Student()?",
    "options": [
      "Only declares a pointer",
      "Dynamically allocates storage and constructs a Student object",
      "Deletes a Student object",
      "Creates a namespace"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — The 'new' operator dynamically allocates heap memory for the requested type and immediately invokes the matching constructor to initialize the object.",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Object-Oriented Programming",
    "chapter": "Dynamic Memory",
    "topic": "Dynamic Memory",
    "difficulty": "Easy",
    "question": "What should normally be used to release one object allocated with new?",
    "options": [
      "free[]",
      "delete",
      "remove",
      "clear"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Memory dynamically allocated for a single object using 'new' must be released using 'delete', which runs the destructor and deallocates memory.",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Object-Oriented Programming",
    "chapter": "Dynamic Memory",
    "topic": "Dynamic Memory",
    "difficulty": "Easy",
    "question": "What should be used to release an array allocated with new[]?",
    "options": [
      "delete",
      "delete[]",
      "remove[]",
      "destroy"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Dynamically allocated arrays created with 'new[]' must be deallocated using the array delete operator 'delete[]' to invoke destructors for each element.",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Object-Oriented Programming",
    "chapter": "new with Constructor",
    "topic": "new with Constructor",
    "difficulty": "Medium",
    "question": "Which expression dynamically creates a Student object using a parameterized constructor?",
    "options": [
      "Student* s = new Student(\"Ali\", 101);",
      "Student s = new Student(\"Ali\", 101);",
      "new Student* s(\"Ali\", 101);",
      "Student::new(\"Ali\", 101);"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — The proper dynamic allocation syntax allocates on the heap and assigns the returned address to a pointer: Student* s = new Student(\"Ali\", 101);",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Object-Oriented Programming",
    "chapter": "Encapsulation",
    "topic": "Encapsulation",
    "difficulty": "Easy",
    "question": "Which design best demonstrates encapsulation?",
    "options": [
      "Public fields with no validation",
      "Private data with public methods that control access",
      "All members declared outside the class",
      "No constructors and no methods"
    ],
    "answer": 1,
    "explanation": "Correct Answer: Option B — Encapsulation is best demonstrated by keeping state variables private while providing public member methods (getters/setters/operations) to control access and validate changes.",
    "type": "single"
  }
];

const oopWeek01Questions = [
  {
    "id": 1,
    "subject": "Object-Oriented Programming",
    "chapter": "Structured Programming",
    "topic": "Structured Programming",
    "difficulty": "Easy",
    "question": "What is the main idea of structured programming?",
    "options": [
      "Organizing a program into clear control structures and procedures",
      "Representing every program element as an object",
      "Avoiding functions completely",
      "Using only graphical user interfaces"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Structured programming organizes a program into clear control structures and procedures.",
    "type": "single"
  },
  {
    "id": 2,
    "subject": "Object-Oriented Programming",
    "chapter": "Control Structures",
    "topic": "Control Structures",
    "difficulty": "Easy",
    "question": "Which set contains the fundamental control structures commonly associated with structured programming?",
    "options": [
      "Sequence, selection, and iteration",
      "Class, object, and inheritance",
      "Encapsulation, polymorphism, and abstraction",
      "Compiler, linker, and loader"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Sequence, selection, and iteration are the fundamental control structures of structured programming.",
    "type": "single"
  },
  {
    "id": 3,
    "subject": "Object-Oriented Programming",
    "chapter": "Procedural Decomposition",
    "topic": "Procedural Decomposition",
    "difficulty": "Easy",
    "question": "In structured programming, a large problem is commonly divided into:",
    "options": [
      "Smaller procedures or functions",
      "Only database tables",
      "Hardware circuits",
      "Namespaces only"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Structured programming uses procedural decomposition to break problems into smaller procedures or functions.",
    "type": "single"
  },
  {
    "id": 4,
    "subject": "Object-Oriented Programming",
    "chapter": "Program Organization",
    "topic": "Program Organization",
    "difficulty": "Easy",
    "question": "What is a major focus of structured programming?",
    "options": [
      "The sequence of operations and procedures used to solve a problem",
      "The identity of every real-world object",
      "Automatic object construction",
      "Dynamic memory allocation only"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Structured programming focuses on the algorithmic sequence of operations and procedures.",
    "type": "single"
  },
  {
    "id": 5,
    "subject": "Object-Oriented Programming",
    "chapter": "Complex Problem Management",
    "topic": "Complex Problem Management",
    "difficulty": "Medium",
    "question": "Why can structured programs become difficult to manage as a system grows in size and complexity?",
    "options": [
      "Large numbers of procedures and shared data can create complex dependencies",
      "Functions cannot accept parameters",
      "Structured programs cannot use variables",
      "Compilers cannot process large programs"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Shared global data and high procedure counts create intricate dependencies in large structured programs.",
    "type": "single"
  },
  {
    "id": 6,
    "subject": "Object-Oriented Programming",
    "chapter": "Limitations of Structured Programming",
    "topic": "Limitations of Structured Programming",
    "difficulty": "Medium",
    "question": "Which issue can arise when data is widely shared among many procedures?",
    "options": [
      "Changes to data can affect multiple parts of the program",
      "The program automatically becomes object-oriented",
      "All functions become constructors",
      "The compiler removes all dependencies"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Widely shared mutable data allows changes in one procedure to ripple unpredictably through other parts of the program.",
    "type": "single"
  },
  {
    "id": 7,
    "subject": "Object-Oriented Programming",
    "chapter": "Real-World Complexity",
    "topic": "Real-World Complexity",
    "difficulty": "Medium",
    "question": "A major challenge in modeling complex real-world systems is:",
    "options": [
      "Managing many entities, their states, behaviors, and relationships",
      "Writing a single print statement",
      "Avoiding all data structures",
      "Using only integer variables"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Complex real-world systems comprise numerous entities whose states and behaviors continuously interact.",
    "type": "single"
  },
  {
    "id": 8,
    "subject": "Object-Oriented Programming",
    "chapter": "Object-Oriented Programming",
    "topic": "Object-Oriented Programming",
    "difficulty": "Easy",
    "question": "What is the central idea of the object-oriented programming paradigm?",
    "options": [
      "Modeling a system using interacting objects that combine data and behavior",
      "Using only sequential statements",
      "Replacing all variables with constants",
      "Writing programs without functions"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — OOP encapsulates data and the procedures that operate on that data into discrete objects.",
    "type": "single"
  },
  {
    "id": 9,
    "subject": "Object-Oriented Programming",
    "chapter": "Objects",
    "topic": "Objects",
    "difficulty": "Easy",
    "question": "In object-oriented programming, an object generally represents:",
    "options": [
      "An entity with state and behavior",
      "Only a function",
      "Only a data type keyword",
      "A compiler instruction"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — An object models an entity that has attributes (state) and methods (behavior).",
    "type": "single"
  },
  {
    "id": 10,
    "subject": "Object-Oriented Programming",
    "chapter": "Classes",
    "topic": "Classes",
    "difficulty": "Easy",
    "question": "What is a class in object-oriented programming?",
    "options": [
      "A blueprint or user-defined type for creating objects",
      "A single object stored in memory",
      "A compiler error",
      "A database record only"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — A class is a template or user-defined type from which individual object instances are created.",
    "type": "single"
  },
  {
    "id": 11,
    "subject": "Object-Oriented Programming",
    "chapter": "Objects and Classes",
    "topic": "Objects and Classes",
    "difficulty": "Easy",
    "question": "If Student is a class, which is an example of an object?",
    "options": [
      "student1",
      "Student",
      "class",
      "object"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — student1 represents an individual instantiated object of the Student class.",
    "type": "single"
  },
  {
    "id": 12,
    "subject": "Object-Oriented Programming",
    "chapter": "Class vs Object",
    "topic": "Class vs Object",
    "difficulty": "Easy",
    "question": "Which statement best distinguishes a class from an object?",
    "options": [
      "A class is a definition or blueprint; an object is an instance of that class",
      "A class is always an object in memory",
      "An object defines the class structure",
      "There is no difference between them"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — A class provides the blueprint/definition, while an object is a concrete runtime instance.",
    "type": "single"
  },
  {
    "id": 13,
    "subject": "Object-Oriented Programming",
    "chapter": "State and Data Members",
    "topic": "State and Data Members",
    "difficulty": "Easy",
    "question": "In an OOP class, data members primarily represent:",
    "options": [
      "The state or characteristics of an object",
      "Only control structures",
      "Compiler commands",
      "Namespaces"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Data members (fields/properties) store the state and attributes of an object.",
    "type": "single"
  },
  {
    "id": 14,
    "subject": "Object-Oriented Programming",
    "chapter": "Methods and Behavior",
    "topic": "Methods and Behavior",
    "difficulty": "Easy",
    "question": "In an OOP class, methods primarily represent:",
    "options": [
      "Behavior or operations performed by an object",
      "Only constants",
      "The physical computer",
      "The compiler"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Member functions or methods define what an object can do (its behavior).",
    "type": "single"
  },
  {
    "id": 15,
    "subject": "Object-Oriented Programming",
    "chapter": "Real-World Modeling",
    "topic": "Real-World Modeling",
    "difficulty": "Medium",
    "question": "In a banking system, which is the most appropriate candidate for a class?",
    "options": [
      "BankAccount",
      "deposit()",
      "balance = 5000",
      "print"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — BankAccount represents a real-world entity (a class), whereas deposit() is a method and balance is an attribute.",
    "type": "single"
  },
  {
    "id": 16,
    "subject": "Object-Oriented Programming",
    "chapter": "Real-World Modeling",
    "topic": "Real-World Modeling",
    "difficulty": "Medium",
    "question": "For a Student class, which combination correctly represents state and behavior?",
    "options": [
      "name and rollNo as state; display() as behavior",
      "display() as state; name as behavior",
      "Student as state; class as behavior",
      "compiler as state; memory as behavior"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Variables (name, rollNo) represent state, and member functions (display()) represent behavior.",
    "type": "single"
  },
  {
    "id": 17,
    "subject": "Object-Oriented Programming",
    "chapter": "OOP Problem Solving",
    "topic": "OOP Problem Solving",
    "difficulty": "Medium",
    "question": "Why can object-oriented modeling be useful for complex real-world systems?",
    "options": [
      "It can represent entities, their responsibilities, and relationships in a structured way",
      "It eliminates the need for algorithms",
      "It prevents all software bugs",
      "It removes the need for data"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — OOP directly models domain concepts, responsibilities, and relationships in an intuitive, modular structure.",
    "type": "single"
  },
  {
    "id": 18,
    "subject": "Object-Oriented Programming",
    "chapter": "Paradigm Comparison",
    "topic": "Paradigm Comparison",
    "difficulty": "Medium",
    "question": "Which statement best describes a key difference between structured programming and OOP?",
    "options": [
      "Structured programming emphasizes procedures and control flow, while OOP emphasizes objects combining state and behavior",
      "Structured programming uses code, while OOP does not",
      "OOP cannot use functions",
      "Structured programming cannot use variables"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Procedural paradigm focuses on algorithmic control flow; OOP binds data and behaviors together into interacting objects.",
    "type": "single"
  },
  {
    "id": 19,
    "subject": "Object-Oriented Programming",
    "chapter": "Class and Object Concept",
    "topic": "Class and Object Concept",
    "difficulty": "Easy",
    "question": "Which statement about objects created from the same class is correct?",
    "options": [
      "They can have different values for their non-static data members",
      "They must always contain identical data",
      "Only one object can ever be created from a class",
      "They cannot have methods"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Each object instance maintains its own distinct set of non-static instance variables.",
    "type": "single"
  },
  {
    "id": 20,
    "subject": "Object-Oriented Programming",
    "chapter": "Week 1 Review",
    "topic": "Week 1 Review",
    "difficulty": "Medium",
    "question": "Which sequence best represents the basic transition from a real-world problem to an object-oriented model?",
    "options": [
      "Identify relevant entities → represent them as classes/objects → define state and behavior",
      "Compile code → identify entities → write requirements",
      "Create database tables → remove classes → define objects",
      "Write random functions → deploy → identify the problem"
    ],
    "answer": 0,
    "explanation": "Correct Answer: Option A — Object-oriented modeling starts with identifying entities, abstracting them into classes, and determining their attributes and operations.",
    "type": "single"
  }
];

const DEFAULT_SUBJECTS = [
  {
    id: "object-oriented-programming-week-1",
    legacyIds: ["oop-bscs-w01", "oop-week-01", "oop-week-1"],
    book: "Object-Oriented Programming",
    course: "Object-Oriented Programming (OOP)",
    week: 1,
    weekTitle: "Week 01",
    topic: "Structured Programming vs Object-Oriented Programming; Procedures, Control Structures, and Shared Data; Objects, Classes, State, and Behavior.",
    level: "BS Computer Science",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "💻",
    isBuiltIn: true,
    totalQuestions: oopWeek01Questions.length,
    questions: oopWeek01Questions
  },
  {
    id: "object-oriented-programming-week-2",
    legacyIds: ["oop-bscs-w02", "oop-week-02", "oop-week-2"],
    book: "Object-Oriented Programming",
    course: "Object-Oriented Programming (OOP)",
    week: 2,
    weekTitle: "Week 02",
    topic: "Object-Oriented Analysis & Design using UML; View Model & Object Model; Noun/Verb Analysis; CRC Cards",
    level: "BS Computer Science",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "🧩",
    isBuiltIn: true,
    totalQuestions: oopWeek02Questions.length,
    questions: oopWeek02Questions
  },
  {
    id: "object-oriented-programming-week-3",
    legacyIds: ["oop-adp-sem2-w03"],
    book: "Object-Oriented Programming",
    course: "Object-Oriented Programming (OOP)",
    week: 3,
    weekTitle: "Week 03",
    topic: "Introduction to classes and objects; fields/data members; methods; parameterized and non-parameterized methods; returning and non-returning methods; namespaces",
    level: "ADP Semester 2",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "☕",
    isBuiltIn: true,
    totalQuestions: oopQuestions.length,
    questions: oopQuestions
  },
  {
    id: "object-oriented-programming-week-4",
    legacyIds: ["oop-bscs-w04", "oop-week-04", "oop-week-4"],
    book: "Object-Oriented Programming",
    course: "Object-Oriented Programming (OOP)",
    week: 4,
    weekTitle: "Week 04",
    topic: "Concept of Constructor; types of Constructors (default, parameterized and copy); Encapsulation and Information Hiding; public and private access specifiers; this and new keywords.",
    level: "BS Computer Science",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "🏗️",
    isBuiltIn: true,
    totalQuestions: oopWeek04Questions.length,
    questions: oopWeek04Questions
  },
  {
    id: "theory-of-automata-week-02",
    legacyIds: ["theory-of-automata-w02"],
    book: "Theory of Automata",
    course: "Theory of Automata",
    week: 2,
    weekTitle: "Week 02",
    topic: "Regular Expressions & Recursive Definitions of Languages",
    level: "BS Computer Science",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "Σ",
    isBuiltIn: true,
    totalQuestions: questions.length,
    questions: questions
  },
  {
    id: "computer-architecture-and-organization-week-01",
    legacyIds: ["computer-architecture-w01"],
    book: "Computer Architecture and Organization",
    course: "Computer Architecture and Organization",
    week: 1,
    weekTitle: "Week 01",
    topic: "Review of Digital Logic and Design; Fundamental Overview of Computer Hardware and Software",
    level: "BS Computer Science",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "💻",
    isBuiltIn: true,
    totalQuestions: computerArchitectureQuestions.length,
    questions: computerArchitectureQuestions
  },
  {
    id: "database-systems-week-02",
    legacyIds: ["database-systems-w02", "dbs-w02", "database-systems-week-2"],
    book: "Database Systems",
    course: "Database Systems",
    week: 2,
    weekTitle: "Week 02",
    topic: "Three-Level Schema Architecture & Data Independence",
    level: "BS Computer Science",
    createdBy: "Lec. Iftikhar Zahid",
    icon: "🗄️",
    isBuiltIn: true,
    totalQuestions: databaseSystemsQuestions.length,
    questions: databaseSystemsQuestions
  }
];

const L = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const K = {
  theme: "qtheme",
  bm: "qbm",
  progress: "qprogress",
  result: "qresult",
  student: "qstudent",
  questions: "qcustom_questions",
  subjects: "qsubjects",
  activeSubject: "qactive_subject",
  instructorAuth: "qb_instructor_auth_v1",
  instructorUser: "qb_instructor_user_v1",
  portalAuth: "qb_portal_auth_v1",
  portalUser: "qb_portal_user_v1"
};

const $ = x => document.querySelector(x);
const $$ = x => [...document.querySelectorAll(x)];
const esc = x => String(x).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function store(k, v) { try { localStorage.setItem(k, v); } catch {} }
function read(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } }
function toast(m, e = false) { const x = document.createElement("div"); x.className = "toast" + (e ? " err" : ""); x.textContent = m; $("#toast").append(x); setTimeout(() => x.remove(), 2500); }
function go(id) { 
  if (id === "qbank") id = "subjects";
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    $("#"+id)?.scrollIntoView({ behavior: "smooth" }); 
  }
  $("#drawer")?.classList.remove("drawerOpen");
  $$("nav button, .navLink").forEach(b => {
    b.classList.toggle("active", b.dataset.go === id);
  });
}
function main() { 
  ["home", "subjects", "tools"].forEach(x => $("#"+x)?.classList.remove("hidden")); 
  $("#live")?.classList.add("hidden"); 
  if (typeof updateExamStatusUI === "function") updateExamStatusUI(); 
}
function optText(o) { if (!o && o !== 0) return ""; if (typeof o === "string") return o; if (typeof o.text === "string") return o.text; if (typeof o.option === "string") return o.option; return String(o); }

function loadStoredSubjects() {
  const stored = read(K.subjects, "");
  let list = [];
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
    } catch {}
  }

  // Purge any corrupted 0-question subject records (e.g. from previous broken uploads)
  list = list.filter(sub => !(sub.id === "custom-question-bank-week-01" || (!sub.isBuiltIn && (!sub.questions || sub.questions.length === 0))));

  DEFAULT_SUBJECTS.forEach(defSub => {
    const existing = list.find(s => 
      s.id === defSub.id || 
      (defSub.legacyIds && defSub.legacyIds.includes(s.id)) || 
      (s.book && s.book.trim().toLowerCase() === defSub.book.trim().toLowerCase() && Number(s.week) === Number(defSub.week))
    );
    if (!existing) {
      list.push({ ...defSub, questions: [...defSub.questions] });
    } else {
      existing.id = defSub.id;
      if (!existing.questions || !existing.questions.length) existing.questions = [...defSub.questions];
      existing.totalQuestions = existing.questions.length;
      existing.isBuiltIn = true;
      if (!existing.book) existing.book = defSub.book;
      if (!existing.course) existing.course = defSub.course;
      if (!existing.weekTitle) existing.weekTitle = defSub.weekTitle;
      if (!existing.topic) existing.topic = defSub.topic;
      if (!existing.icon) existing.icon = defSub.icon;
      if (!existing.level) existing.level = defSub.level;
      if (!existing.createdBy) existing.createdBy = defSub.createdBy;
    }
  });
  return list;
}

function getStoredActiveSubjectId(subList) {
  let savedId = read(K.activeSubject, "");
  if (savedId === "theory-of-automata-w02") savedId = "theory-of-automata-week-02";
  if (savedId === "computer-architecture-w01") savedId = "computer-architecture-and-organization-week-01";
  if (savedId === "oop-adp-sem2-w03") savedId = "object-oriented-programming-week-3";
  if (savedId === "database-systems-w02" || savedId === "dbs-w02" || savedId === "database-systems-week-2") savedId = "database-systems-week-02";
  if (savedId === "oop-bscs-w01" || savedId === "oop-week-01" || savedId === "oop-week-1") savedId = "object-oriented-programming-week-1";
  if (savedId === "custom-question-bank-week-01") savedId = "object-oriented-programming-week-1";
  if (savedId && subList.some(s => s.id === savedId && s.questions && s.questions.length > 0)) return savedId;
  return subList[0]?.id || DEFAULT_SUBJECTS[0].id;
}

const initialSubjects = loadStoredSubjects();
const initialActiveSubId = getStoredActiveSubjectId(initialSubjects);
const initialActiveSub = initialSubjects.find(s => s.id === initialActiveSubId) || initialSubjects[0];

const s = {
  subjects: initialSubjects,
  activeSubjectId: initialActiveSubId,
  activeSubject: initialActiveSub,
  questions: initialActiveSub.questions || [],
  filtered: [],
  bankAns: {},
  bm: new Set(),
  exam: [],
  ans: {},
  marked: new Set(),
  locked: new Set(),
  skipped: new Set(),
  i: 0,
  sec: 3600,
  timer: null,
  result: null,
  student: {},
  qbank: {
    search: "",
    course: "all",
    week: "all",
    topic: "all",
    diff: "all",
    sort: "default",
    page: 1,
    pageSize: 10,
    mode: "study",
    userAns: {},
    expandedAll: false
  }
};
window.s = s;

function saveSubjects(subjectsToSync = []) {
  store(K.subjects, JSON.stringify(s.subjects));
  // Auto-push changed subjects to MongoDB if server is reachable
  if (MONGO_API_URL && subjectsToSync.length > 0) {
    subjectsToSync.forEach(sub => uploadRecordToMongo(sub));
  }
}

async function deleteFromMongo(subjectId) {
  if (!MONGO_API_URL || !subjectId) return;
  try {
    const res = await fetch(`${MONGO_API_URL}/subjects/${encodeURIComponent(subjectId)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) console.log(`Deleted subject ${subjectId} from MongoDB`);
    }
  } catch (err) {
    console.log("MongoDB delete failed (server may be offline):", err.message);
  }
}

function getBookGroupKey(sub) {
  let b = (sub.book || sub.course || "").trim();
  const lower = b.toLowerCase();
  if (lower.includes("object-oriented") || lower.includes("object oriented") || lower === "oop") {
    return "Object-Oriented Programming";
  }
  if (lower.includes("theory of automata") || lower.includes("automata")) {
    return "Theory of Automata";
  }
  if (lower.includes("computer architecture")) {
    return "Computer Architecture and Organization";
  }
  if (lower.includes("database system")) {
    return "Database Systems";
  }
  return b || "General Study";
}

function getGroupedBooks() {
  const map = new Map();
  s.subjects.forEach(sub => {
    const key = getBookGroupKey(sub);
    if (!map.has(key)) {
      map.set(key, {
        book: key,
        course: sub.course || key,
        icon: sub.icon || "📚",
        level: sub.level || "BS Computer Science",
        createdBy: sub.createdBy || "Lec. Iftikhar Zahid",
        weeks: []
      });
    }
    const bookObj = map.get(key);
    if (sub.icon && sub.icon !== "📚" && (bookObj.icon === "📚" || !bookObj.icon)) {
      bookObj.icon = sub.icon;
    }
    bookObj.weeks.push(sub);
  });

  const books = [];
  for (const bookObj of map.values()) {
    bookObj.weeks.sort((a, b) => {
      const wA = parseInt(a.week) || parseInt(String(a.weekTitle || "").replace(/\D/g, "")) || 0;
      const wB = parseInt(b.week) || parseInt(String(b.weekTitle || "").replace(/\D/g, "")) || 0;
      return wA - wB;
    });
    bookObj.totalQuestions = bookObj.weeks.reduce((acc, w) => acc + (w.questions ? w.questions.length : 0), 0);
    bookObj.hasActiveWeek = bookObj.weeks.some(w => w.id === s.activeSubjectId);
    bookObj.activeWeek = bookObj.weeks.find(w => w.id === s.activeSubjectId);
    books.push(bookObj);
  }
  return books;
}

// ── Faculty auth state (session-only, no cookie) ──────────────────────────
let isFacultyLoggedIn = false;
function isFaculty() { return isFacultyLoggedIn; }

function renderSubjects() {
  const grid = $("#subjectGrid");
  if (!grid) return;

  const groupedBooks = getGroupedBooks();

  // If a book detail sub-screen is currently open, refresh it
  if (s.currentBookView) {
    const stillExists = groupedBooks.some(b => b.book === s.currentBookView);
    if (stillExists) {
      renderBookDetailView(s.currentBookView);
    } else {
      closeBookDetail();
    }
  }

  grid.innerHTML = groupedBooks.map(book => {
    const hasActive = !!book.hasActiveWeek;
    const weekCount = book.weeks.length;
    const weekCountLabel = weekCount === 1 ? "1 Weekly Module" : `${weekCount} Weekly Modules`;

    return `<article class="subjectCard bookCard ${hasActive ? "active" : ""}" data-book-key="${esc(book.book)}" onclick="openBookDetail('${esc(book.book)}')" title="Click to view weekly examination modules">
      <div class="bookCardTop">
        <div class="bookCardIcon">${esc(book.icon || "📚")}</div>
        <div class="bookCardHead">
          <div class="bookCardBadges">
            <span class="tag" style="background:var(--p-subtle);color:var(--p);font-weight:700;">📅 ${weekCountLabel}</span>
            <span class="tag success">${book.totalQuestions} Total MCQs</span>
            ${hasActive ? `<span class="activeIndicator"><i class="activeDot"></i> Active Book (${esc(book.activeWeek.weekTitle || "Week " + book.activeWeek.week)})</span>` : ""}
          </div>
          <h3 class="bookCardTitle">${esc(book.book)}</h3>
          <div class="bookCourseSubtitle">${esc(book.course)}</div>
        </div>
      </div>

      <p class="bookCardIntro">Continuous assessment course for <b>${esc(book.level || "BS Computer Science")}</b>. Contains <b>${weekCountLabel}</b> covering verified lecture syllabus and examination practice.</p>

      <div class="bookCardMeta">
        <span>Class: <b>${esc(book.level || "BS Computer Science")}</b></span>
        <span>Instructor: <b>${esc(book.createdBy || "Lec. Iftikhar Zahid")}</b></span>
      </div>

      <div class="bookCardFoot">
        <span class="bookModulesPill">📖 ${weekCount} ${weekCount === 1 ? "Week Available" : "Weeks Available"}</span>
        <button class="primary viewModulesBtn" type="button" onclick="event.stopPropagation(); openBookDetail('${esc(book.book)}')">
          View Weekly Modules (${weekCount}) →
        </button>
      </div>
      ${isFaculty() ? `
      <div class="adminBookToolbar" onclick="event.stopPropagation()">
        <span class="adminToolbarBadge">🔐 Admin</span>
        <button class="adminToolBtn editToolBtn" type="button" onclick="editBook('${esc(book.book)}')" title="Edit book details">✏️ Edit Info</button>
        <button class="adminToolBtn deleteToolBtn" type="button" onclick="deleteBook('${esc(book.book)}')" title="Delete entire book">🗑️ Delete Book</button>
      </div>` : ""}
    </article>`;
  }).join("");
}

function openBookDetail(bookKey) {
  const books = getGroupedBooks();
  const book = books.find(b => b.book === bookKey);
  if (!book) return;

  s.currentBookView = bookKey;

  const allView = $("#allBooksView");
  const detailView = $("#bookDetailView");
  if (allView) allView.classList.add("hidden");
  if (detailView) detailView.classList.remove("hidden");

  renderBookDetailView(bookKey);

  const subSection = $("#subjects");
  if (subSection) subSection.scrollIntoView({ behavior: "smooth" });
}

function renderBookDetailView(bookKey) {
  const books = getGroupedBooks();
  const book = books.find(b => b.book === bookKey);
  if (!book) return;

  const hero = $("#bookDetailHero");
  const weeksGrid = $("#bookWeeksGrid");
  const heading = $("#bookModulesHeading");

  if (heading) {
    heading.textContent = `${book.book} — Weekly Examination Modules`;
  }

  if (hero) {
    hero.innerHTML = `
      <div class="heroHeaderRow">
        <div class="heroBookIcon">${esc(book.icon || "📚")}</div>
        <div class="heroBookInfo">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">
            <span class="tag" style="background:var(--p-subtle);color:var(--p);font-weight:700;">${esc(book.level || "BS Computer Science")}</span>
            <span class="tag success">${book.totalQuestions} Questions Total</span>
            ${book.hasActiveWeek ? `<span class="activeIndicator"><i class="activeDot"></i> Current Active Book</span>` : ""}
          </div>
          <h1>${esc(book.book)}</h1>
          <div class="heroBookMeta">
            <span>Course: <b>${esc(book.course)}</b></span>
            <span>•</span>
            <span>Instructor: <b>${esc(book.createdBy || "Lec. Iftikhar Zahid")}</b></span>
          </div>
        </div>
      </div>

      <div class="heroStatsGrid">
        <div class="heroStatCard">
          <small>WEEKLY MODULES</small>
          <b>${book.weeks.length} Exam Modules</b>
        </div>
        <div class="heroStatCard">
          <small>QUESTION BANK</small>
          <b>${book.totalQuestions} Total MCQs</b>
        </div>
        <div class="heroStatCard">
          <small>TIME ALLOWED</small>
          <b>60 Mins per Test</b>
        </div>
        <div class="heroStatCard">
          <small>PASS BENCHMARK</small>
          <b>50% Standard Mark</b>
        </div>
      </div>
    `;
  }

  if (weeksGrid) {
    weeksGrid.innerHTML = book.weeks.map(w => {
      const isThisActive = w.id === s.activeSubjectId;
      const qCount = w.questions ? w.questions.length : 0;
      const isBuiltIn = !!w.isBuiltIn;
      const topicStr = w.topic || "Course Syllabus Review";

      return `<article class="weekModuleCard ${isThisActive ? "activeWeek" : ""}">
        <div class="weekCardHeader">
          <div class="weekCardPillRow">
            <span class="weekTitlePill">${esc(w.weekTitle || "Week " + w.week)}</span>
            <span class="weekQBadge">${qCount} Questions</span>
            <span class="tag" style="font-size:10px;background:var(--card-subtle);">⏱️ ${qCount} Mins</span>
            ${isThisActive ? `<span class="activeIndicator" style="font-size:10.5px;padding:3px 8px;"><i class="activeDot"></i> Currently Active</span>` : ""}
          </div>
        </div>

        <div class="weekCardTopicBox">
          <span class="topicBoxLabel">LECTURE &amp; SYLLABUS TOPIC</span>
          <div class="topicBoxText">${esc(topicStr)}</div>
        </div>

        <div class="weekCardMetaGrid">
          <span>Target Class: <b>${esc(w.level || book.level || "BS Computer Science")}</b></span>
          <span>Pass Mark: <b>50% Benchmark</b></span>
        </div>

        <div class="weekCardActions">
          ${isThisActive 
            ? `<button class="primary takeExamBtn" type="button" onclick="start();">▶ Start / Resume Exam</button>` 
            : `<button class="secondary selectModuleBtn" type="button" onclick="switchSubject('${esc(w.id)}', false);">Select Module</button>
               <button class="primary takeExamBtn" type="button" onclick="switchSubject('${esc(w.id)}', true);">▶ Take Examination →</button>`
          }
          ${isFaculty() ? `<button class="adminToolBtn editToolBtn" style="margin-top:4px;" type="button" onclick="editCustomSubject('${esc(w.id)}')">✏️ Edit Module</button>
<button class="adminToolBtn deleteToolBtn" style="margin-top:4px;" type="button" onclick="deleteCustomSubject('${esc(w.id)}')">🗑️ Delete Week</button>` : ""}
        </div>
      </article>`;
    }).join("");
  }
}

function closeBookDetail() {
  s.currentBookView = null;
  const allView = $("#allBooksView");
  const detailView = $("#bookDetailView");
  if (allView) allView.classList.remove("hidden");
  if (detailView) detailView.classList.add("hidden");

  renderSubjects();

  const subSection = $("#subjects");
  if (subSection) subSection.scrollIntoView({ behavior: "smooth" });
}

// Bind back button
if ($("#backToBooksBtn")) {
  $("#backToBooksBtn").onclick = closeBookDetail;
}

function switchSubject(subId, startExamAfter = false) {
  const target = s.subjects.find(sub => sub.id === subId);
  if (!target) return;

  if (s.activeSubjectId !== subId && hasActiveExam()) {
    modal(`<h2>Switch Active Subject?</h2>
<p style="font-size:13px;line-height:1.5;">You currently have an unfinished examination session in progress for <b>${esc(s.activeSubject.book)} (${esc(s.activeSubject.weekTitle)})</b>.</p>
<p style="font-size:12.5px;color:var(--r);margin:10px 0;">Switching to <b>${esc(target.book)}</b> will discard the active session.</p>
<div class="modalActions">
  <button class="secondary" onclick="closeModal()">Cancel</button>
  <button class="danger" id="confirmSwitchDiscard">Yes, Discard & Switch</button>
</div>`);
    $("#confirmSwitchDiscard").onclick = () => {
      closeModal();
      discardSession();
      applySubjectSwitch(target, startExamAfter);
    };
    return;
  }

  applySubjectSwitch(target, startExamAfter);
}

function applySubjectSwitch(target, startExamAfter = false) {
  s.activeSubjectId = target.id;
  s.activeSubject = target;
  s.questions = target.questions || [];
  if (!s.expandedBooks) s.expandedBooks = new Set();
  s.expandedBooks.add(getBookGroupKey(target));
  store(K.activeSubject, target.id);

  renderSubjects();
  updateHeroSubjectUI();
  updateQuestionCountUI();
  render();
  updateExamStatusUI();
  updateTranscriptSubjectUI(target);

  toast(`✓ Switched to ${target.book} (${target.weekTitle})`);

  if (startExamAfter) {
    start();
  }
}

function deleteCustomSubject(id) {
  const target = s.subjects.find(sub => sub.id === id);
  if (!target) return;

  modal(`<h2>Remove Week Module?</h2>
<p style="font-size:13px;line-height:1.5;">Are you sure you want to remove <b>${esc(target.book)} (${esc(target.weekTitle)})</b> from your catalog?</p>
${target.isBuiltIn ? `<p style="font-size:12px;color:var(--accent);margin:8px 0;">⚠️ This is a built-in module. It can be removed but will return after a catalog reset.</p>` : ""}
<div class="modalActions">
  <button class="secondary" onclick="closeModal()">Cancel</button>
  <button class="danger" id="confirmDelSub">Yes, Remove</button>
</div>`);
  $("#confirmDelSub").onclick = () => {
    closeModal();
    s.subjects = s.subjects.filter(sub => sub.id !== id);
    saveSubjects();
    // Instant MongoDB sync — delete this week
    if (MONGO_API_URL) deleteFromMongo(id);
    if (s.activeSubjectId === id) {
      if (s.subjects.length) applySubjectSwitch(s.subjects[0], false);
    } else {
      renderSubjects();
      if (s.currentBookView) renderBookDetailView(s.currentBookView);
    }
    toast(`Removed week module from catalog.`);
  };
}

function editCustomSubject(id) {
  const target = s.subjects.find(sub => sub.id === id);
  if (!target) return;

  modal(`<h2>✏️ Edit Module Details</h2>
<p style="font-size:12.5px;color:var(--t-secondary);margin-bottom:14px;">Update information for this specific weekly module.</p>
<div class="fields">
  <label>Module/Week Title <span style="color:var(--r);">*</span>
    <input id="editModuleTitle" value="${esc(target.weekTitle || 'Week ' + target.week)}" required>
  </label>
  <label>Syllabus Topic
    <input id="editModuleTopic" value="${esc(target.topic || '')}">
  </label>
  <label>Class / Level
    <input id="editModuleLevel" value="${esc(target.level || target.bookLevel || 'BS Computer Science')}">
  </label>
</div>
<div class="modalActions" style="margin-top:16px;">
  <button class="secondary" onclick="closeModal()">Cancel</button>
  <button class="primary" id="saveModuleEdit">✓ Save Changes</button>
</div>`);

  $("#saveModuleEdit").onclick = () => {
    const newTitle = $("#editModuleTitle")?.value.trim();
    const newTopic = $("#editModuleTopic")?.value.trim();
    const newLevel = $("#editModuleLevel")?.value.trim();
    if (!newTitle) { toast("Module title is required.", true); return; }

    target.weekTitle = newTitle;
    target.topic = newTopic;
    target.level = newLevel;

    if (s.activeSubjectId === id) {
      s.activeSubject = target;
    }

    saveSubjects();
    closeModal();
    if (MONGO_API_URL) uploadRecordToMongo(target);
    toast(`✓ Module updated successfully`);

    renderSubjects();
    if (s.currentBookView) renderBookDetailView(s.currentBookView);
  };
}

function deleteBook(bookKey) {
  const books = getGroupedBooks();
  const book = books.find(b => b.book === bookKey);
  if (!book) return;

  const weekIds = book.weeks.map(w => w.id);
  modal(`<h2>Delete Entire Book?</h2>
<p style="font-size:13px;line-height:1.5;">You are about to permanently remove <b>${esc(book.book)}</b> and all <b>${book.weeks.length} weekly module(s)</b> (${book.totalQuestions} MCQs) from your catalog.</p>
<p style="font-size:12px;color:var(--r);margin:8px 0;">⚠️ This action cannot be undone.</p>
<div class="modalActions">
  <button class="secondary" onclick="closeModal()">Cancel</button>
  <button class="danger" id="confirmDelBook">Yes, Delete Book</button>
</div>`);
  $("#confirmDelBook").onclick = () => {
    closeModal();
    s.subjects = s.subjects.filter(sub => !weekIds.includes(sub.id));
    saveSubjects();
    const activeGone = weekIds.includes(s.activeSubjectId);
    closeBookDetail();
    if (activeGone && s.subjects.length) applySubjectSwitch(s.subjects[0], false);
    else renderSubjects();
    // Instant MongoDB sync — delete all weeks of this book
    if (MONGO_API_URL) weekIds.forEach(id => deleteFromMongo(id));
    toast(`Deleted book "${bookKey}" and all its modules.`);
  };
}

function editBook(bookKey) {
  const books = getGroupedBooks();
  const book = books.find(b => b.book === bookKey);
  if (!book) return;

  modal(`<h2>✏️ Edit Book Info</h2>
<p style="font-size:12.5px;color:var(--t-secondary);margin-bottom:14px;">Changes will apply to all ${book.weeks.length} weekly module(s) in this book.</p>
<div class="fields">
  <label>Book / Course Title <span style="color:var(--r);">*</span>
    <input id="editBookTitle" value="${esc(book.book)}" required>
  </label>
  <label>Course Code / Name
    <input id="editBookCourse" value="${esc(book.course || book.book)}">
  </label>
  <div class="fieldsRow">
    <label>Class / Level
      <input id="editBookLevel" value="${esc(book.level || 'BS Computer Science')}">
    </label>
    <label>Instructor
      <input id="editBookInstructor" value="${esc(book.createdBy || 'Lec. Iftikhar Zahid')}">
    </label>
  </div>
</div>
<div class="modalActions" style="margin-top:16px;">
  <button class="secondary" onclick="closeModal()">Cancel</button>
  <button class="primary" id="saveBookEdit">✓ Save Changes</button>
</div>`);

  $("#saveBookEdit").onclick = () => {
    const newTitle = $("#editBookTitle")?.value.trim();
    const newCourse = $("#editBookCourse")?.value.trim();
    const newLevel = $("#editBookLevel")?.value.trim();
    const newInstructor = $("#editBookInstructor")?.value.trim();
    if (!newTitle) { toast("Book title is required.", true); return; }

    // Update all weeks belonging to this book
    const weekIds = book.weeks.map(w => w.id);
    s.subjects = s.subjects.map(sub => {
      if (!weekIds.includes(sub.id)) return sub;
      return {
        ...sub,
        book: newTitle,
        course: newCourse || newTitle,
        level: newLevel || sub.level,
        createdBy: newInstructor || sub.createdBy,
        questions: (sub.questions || []).map(q => ({ ...q, subject: newTitle }))
      };
    });

    // If active subject is one of them, update s.activeSubject too
    if (weekIds.includes(s.activeSubjectId)) {
      s.activeSubject = s.subjects.find(sub => sub.id === s.activeSubjectId);
    }

    saveSubjects();
    closeModal();
    renderSubjects();
    if (s.currentBookView === bookKey) {
      s.currentBookView = newTitle;
      renderBookDetailView(newTitle);
    }
    // Instant MongoDB sync — push ALL updated weeks
    const updatedWeeks = s.subjects.filter(sub => sub.book === newTitle && weekIds.includes(sub.id));
    if (MONGO_API_URL) updatedWeeks.forEach(sub => uploadRecordToMongo(sub));
    toast(`✓ Book renamed to "${newTitle}"`);
  };
}

function updateHeroSubjectUI() {
  const sub = s.activeSubject;
  if (!sub) return;

  if ($("#contextActiveCourse")) $("#contextActiveCourse").textContent = sub.course || sub.book;
  if ($("#contextActiveWeek")) $("#contextActiveWeek").textContent = sub.weekTitle || ("Week " + sub.week);
  if ($("#contextLevel")) $("#contextLevel").textContent = sub.level || "BS Computer Science";
  if ($("#contextTotalMCQs")) $("#contextTotalMCQs").textContent = `${sub.questions ? sub.questions.length : 40} MCQs Active`;

  if ($("#heroBadgeText")) {
    $("#heroBadgeText").textContent = `${sub.level || "BS Computer Science"} • ${sub.course || sub.book} • ${sub.weekTitle || "Week " + sub.week}`;
  }
  if ($("#heroDesc")) {
    $("#heroDesc").innerHTML = `Practice verified lecture content on <b>${esc(sub.topic || "Course Syllabus Review")}</b> with timed examination, live scoring, and answer explanations.`;
  }
  if ($("#previewSubTag")) {
    $("#previewSubTag").textContent = `${(sub.course || sub.book).toUpperCase()} • ${(sub.weekTitle || "WEEK " + sub.week).toUpperCase()}`;
  }
  if ($("#liveExamTitle")) {
    $("#liveExamTitle").innerHTML = `${esc(sub.book)} (${esc(sub.weekTitle || "Week " + sub.week)}) Examination <span class="tag" style="margin-left:6px;font-size:10px;vertical-align:middle;">🔒 Forward-Only</span>`;
  }

  const q1 = s.questions && s.questions[0];
  if (q1 && $("#previewQuestionPrompt") && $("#previewOptions")) {
    $("#previewQuestionPrompt").textContent = q1.question;
    const ansIdx = typeof q1.answer === "number" ? q1.answer : 0;
    $("#previewOptions").innerHTML = (q1.options || []).slice(0, 4).map((opt, i) => {
      const isAns = i === ansIdx;
      return `<p class="${isAns ? "ok" : ""}">${L[i] || String.fromCharCode(65 + i)}. ${esc(optText(opt))}${isAns ? " ✓" : ""}</p>`;
    }).join("");
  }
}

function updateTranscriptSubjectUI(subj) {
  if (!subj) return;
  const courseName = subj.course || subj.book || "Course Examination";
  const weekLabel = subj.weekTitle || (subj.week ? "Week " + subj.week : "Week 01");
  const topicDesc = subj.topic || "Course Review";
  const levelName = subj.level || "BS Computer Science";
  const maxQ = subj.questions ? subj.questions.length : (s.questions ? s.questions.length : 40);

  if ($("#dispTranscriptCourse")) $("#dispTranscriptCourse").textContent = courseName;
  if ($("#dispTranscriptLevel")) $("#dispTranscriptLevel").textContent = levelName;
  if ($("#dispStudentCourse")) $("#dispStudentCourse").textContent = `${courseName} (${weekLabel})`;
  if ($("#dispAssessmentComponent")) $("#dispAssessmentComponent").textContent = `${courseName} — MCQs Examination`;
  if ($("#dispAssessmentTopic")) $("#dispAssessmentTopic").textContent = `${weekLabel}: ${topicDesc}`;
  if ($("#tMaxMarks")) $("#tMaxMarks").textContent = maxQ;
  if ($("#dispCertFooter")) $("#dispCertFooter").textContent = `Official System-Generated Academic Document • ${courseName} Examination Bank • Verified Record`;
}

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
  discardSession();
  try{
    localStorage.removeItem(K.result);
    localStorage.removeItem(K.progress);
  }catch{}
  s.result=null;
  ["live","results"].forEach(id=>$("#"+id)?.classList.add("hidden"));
  ["home","subjects","tools"].forEach(id=>$("#"+id)?.classList.remove("hidden"));
  go("home");
  updateExamStatusUI();
  toast("Logged out. Active session & saved credentials cleared.");
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

function getAllAvailableQuestions() {
  const all = [];
  const seen = new Set();
  (s.subjects || []).forEach(sub => {
    (sub.questions || []).forEach(q => {
      const qNum = q.id || q.questionIndex || 1;
      const uniqueKey = `${sub.book || sub.course || ''}-${sub.week || ''}-${qNum}`;
      if (!seen.has(uniqueKey)) {
        seen.add(uniqueKey);
        all.push({
          ...q,
          id: qNum,
          subject: q.subject || sub.book || sub.course || "General",
          course: sub.course || sub.book || q.subject || "General",
          week: sub.week || 1,
          weekTitle: sub.weekTitle || (sub.week ? `Week ${String(sub.week).padStart(2, "0")}` : "Week 01"),
          chapter: q.chapter || sub.topic || "Lecture Topics",
          topic: q.topic || q.chapter || sub.topic || "Lecture Topics",
          difficulty: q.difficulty || "Medium"
        });
      }
    });
  });
  return all;
}

function updateQBankFilterOptions() {
  const cSel = $("#qbankCourseSelect");
  const wSel = $("#qbankWeekSelect");
  const tSel = $("#qbankTopicSelect");
  if (!cSel || !wSel || !tSel) return;

  const allQ = getAllAvailableQuestions();
  
  // Courses
  const currentCourse = s.qbank ? s.qbank.course : "all";
  const courses = [...new Set(allQ.map(q => q.course || q.subject).filter(Boolean))].sort();
  cSel.innerHTML = `<option value="all">All Academic Courses (${courses.length})</option>` +
    courses.map(c => `<option value="${esc(c)}" ${c === currentCourse ? 'selected' : ''}>${esc(c)}</option>`).join("");

  // Weeks (filtered by course if selected)
  const currentWeek = s.qbank ? s.qbank.week : "all";
  const filteredForWeeks = currentCourse === "all" ? allQ : allQ.filter(q => (q.course || q.subject) === currentCourse);
  const weeks = [...new Set(filteredForWeeks.map(q => q.weekTitle).filter(Boolean))].sort((a, b) => {
    const nA = parseInt(String(a).replace(/\D/g, "")) || 0;
    const nB = parseInt(String(b).replace(/\D/g, "")) || 0;
    return nA - nB;
  });
  wSel.innerHTML = `<option value="all">All Weekly Modules (${weeks.length})</option>` +
    weeks.map(w => `<option value="${esc(w)}" ${w === currentWeek ? 'selected' : ''}>${esc(w)}</option>`).join("");

  // Topics (filtered by course & week if selected)
  const currentTopic = s.qbank ? s.qbank.topic : "all";
  let filteredForTopics = filteredForWeeks;
  if (currentWeek !== "all") {
    filteredForTopics = filteredForTopics.filter(q => q.weekTitle === currentWeek);
  }
  const topics = [...new Set(filteredForTopics.map(q => q.topic).filter(Boolean))].sort();
  tSel.innerHTML = `<option value="all">All Topics (${topics.length})</option>` +
    topics.map(t => `<option value="${esc(t)}" ${t === currentTopic ? 'selected' : ''}>${esc(t.length > 55 ? t.slice(0, 52) + "..." : t)}</option>`).join("");
}

function renderQuestionBank() {
  const listEl = $("#qbankList");
  if (!listEl) return;

  if (!s.qbank) {
    s.qbank = { search: "", course: "all", week: "all", topic: "all", diff: "all", sort: "default", page: 1, pageSize: 10, mode: "study", userAns: {}, expandedAll: false };
  }

  updateQBankFilterOptions();

  const allQ = getAllAvailableQuestions();
  const qb = s.qbank;
  const term = (qb.search || "").trim().toLowerCase();

  // Filter
  let filtered = allQ.filter(q => {
    if (term) {
      const searchHaystack = [
        q.question,
        q.topic,
        q.chapter,
        q.subject,
        q.course,
        q.weekTitle,
        q.explanation,
        ...(Array.isArray(q.options) ? q.options.map(optText) : [])
      ].join(" ").toLowerCase();
      if (!searchHaystack.includes(term)) return false;
    }
    if (qb.course !== "all" && (q.course || q.subject) !== qb.course) return false;
    if (qb.week !== "all" && q.weekTitle !== qb.week) return false;
    if (qb.topic !== "all" && q.topic !== qb.topic) return false;
    if (qb.diff !== "all" && q.difficulty !== qb.diff) return false;
    return true;
  });

  // Sort
  if (qb.sort === "diff-asc") {
    const diffRank = { Easy: 1, Medium: 2, Hard: 3 };
    filtered.sort((a, b) => (diffRank[a.difficulty] || 2) - (diffRank[b.difficulty] || 2));
  } else if (qb.sort === "diff-desc") {
    const diffRank = { Easy: 1, Medium: 2, Hard: 3 };
    filtered.sort((a, b) => (diffRank[b.difficulty] || 2) - (diffRank[a.difficulty] || 2));
  } else if (qb.sort === "random") {
    filtered.sort(() => Math.random() - 0.5);
  }

  // Active filter chips
  const activeChips = [];
  if (term) activeChips.push({ label: `"${term}"`, key: "search" });
  if (qb.course !== "all") activeChips.push({ label: qb.course, key: "course" });
  if (qb.week !== "all") activeChips.push({ label: qb.week, key: "week" });
  if (qb.topic !== "all") activeChips.push({ label: qb.topic.length > 30 ? qb.topic.slice(0, 28) + "..." : qb.topic, key: "topic" });
  if (qb.diff !== "all") activeChips.push({ label: qb.diff, key: "diff" });

  const chipsEl = $("#qbankActiveChips");
  if (chipsEl) {
    chipsEl.innerHTML = activeChips.map(c => 
      `<span class="filterChip">${esc(c.label)} <span class="chipClose" onclick="clearQBankFilter('${c.key}')" title="Remove filter">✕</span></span>`
    ).join("");
  }

  const badgeEl = $("#filterBadgeCount");
  if (badgeEl) {
    if (activeChips.length > 0) {
      badgeEl.textContent = activeChips.length;
      badgeEl.classList.remove("hidden");
    } else {
      badgeEl.classList.add("hidden");
    }
  }

  // Results count
  const countEl = $("#qbankResultsCount");
  if (countEl) {
    if (filtered.length === 0) {
      countEl.innerHTML = `No questions match the current criteria`;
    } else {
      const startIdx = (qb.page - 1) * qb.pageSize + 1;
      const endIdx = Math.min(qb.page * qb.pageSize, filtered.length);
      countEl.innerHTML = `Showing <b>${startIdx}–${endIdx}</b> of <b>${filtered.length}</b> questions`;
    }
  }

  const contextEl = $("#qbankActiveContext");
  if (contextEl) {
    contextEl.textContent = qb.course !== "all" ? (qb.week !== "all" ? `${qb.course} • ${qb.week}` : qb.course) : "All Academic Courses";
  }

  // Empty state
  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="card qbankEmptyState">
        <div class="emptyIcon">🔍</div>
        <h3>No Matching Questions Found</h3>
        <p>There are no questions matching your current search query or filter combination. Try clearing your filters to explore all available continuous assessment questions.</p>
        <button class="primary" type="button" onclick="resetQBankFilters()">Reset All Filters</button>
      </div>`;
    const pagEl = $("#qbankPagination");
    if (pagEl) pagEl.innerHTML = "";
    return;
  }

  // Pagination calculation
  const totalPages = Math.ceil(filtered.length / qb.pageSize);
  if (qb.page > totalPages) qb.page = totalPages;
  if (qb.page < 1) qb.page = 1;

  const pageQuestions = filtered.slice((qb.page - 1) * qb.pageSize, qb.page * qb.pageSize);

  // Render question cards
  listEl.innerHTML = pageQuestions.map((q, idx) => {
    const globalIdx = (qb.page - 1) * qb.pageSize + idx + 1;
    const isBookmarked = s.bm.has(q.id);
    const correctIdx = typeof q.answer === "number" ? q.answer : 0;
    const userSelected = qb.userAns[q.id];
    const isStudy = qb.mode === "study";
    const isExpanded = qb.expandedAll;

    const diffClass = (q.difficulty || "Medium").toLowerCase().startsWith("e") ? "Easy" :
                      (q.difficulty || "Medium").toLowerCase().startsWith("h") ? "Hard" : "Medium";

    return `
      <article class="card qbankCard" data-qid="${q.id}">
        <div class="qbankCardTop">
          <div class="qbankMetaTags">
            <span class="qbankIndexBadge">Question ${globalIdx}</span>
            <span class="tag courseTag">${esc(q.course || q.subject)}</span>
            <span class="tag weekTag">${esc(q.weekTitle || "Week " + q.week)}</span>
            <span class="tag topicTag">${esc(q.topic)}</span>
            <span class="tag diffTag diff-${diffClass}">${esc(q.difficulty)}</span>
          </div>
          <button class="bookmarkBtn ${isBookmarked ? 'active' : ''}" data-bm="${q.id}" type="button" title="Bookmark question for revision" aria-label="Bookmark Question ${q.id}">
            <span>${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</span>
          </button>
        </div>

        <div class="qbankPrompt">
          <p class="promptText">${esc(q.question)}</p>
        </div>

        <div class="qbankOptionsGrid" role="group" aria-label="Answer options">
          ${(q.options || []).map((opt, i) => {
            const letter = L[i] || String.fromCharCode(65 + i);
            const isThisCorrect = i === correctIdx;
            const isThisSelected = userSelected === i;

            let optStateClass = "";
            let markText = "";

            if (isStudy) {
              if (isThisCorrect) {
                optStateClass = "isCorrect";
                markText = " ✓ (Correct Answer)";
              }
            } else {
              // Practice mode
              if (userSelected !== undefined) {
                if (isThisCorrect) {
                  optStateClass = "isCorrect";
                  markText = " ✓";
                } else if (isThisSelected) {
                  optStateClass = "isIncorrect";
                  markText = " ✕";
                }
              }
            }

            return `
              <button class="qbankOptionBtn ${optStateClass}" data-qbank-opt="${q.id}" data-opt-idx="${i}" type="button">
                <span class="optionLetter">${letter}</span>
                <span class="optionText">${esc(optText(opt))}${markText}</span>
              </button>`;
          }).join("")}
        </div>

        <div class="qbankExplanationBox ${isExpanded || (userSelected !== undefined && !isStudy) ? '' : 'collapsed'}" id="explain-${q.id}">
          <div class="explainHead">
            <span class="explainIcon">💡</span>
            <span class="explainTitle">Academic Explanation &amp; Rationale</span>
            <span class="explainCorrectRef">Correct: <b>Option ${L[correctIdx] || String.fromCharCode(65 + correctIdx)}</b></span>
          </div>
          <div class="explainBody">
            <p>${esc(q.explanation || "No additional explanation recorded for this curriculum item.")}</p>
          </div>
        </div>

        <div class="qbankCardFooter">
          <button class="toggleExplainBtn" data-toggle-explain="${q.id}" type="button">
            <span>${isExpanded ? 'Hide Explanation' : 'View Explanation & Rationale'}</span>
          </button>
          <span class="qbankSingleChoiceBadge">1 Mark • Single Choice Standard</span>
        </div>
      </article>`;
  }).join("");

  // Render pagination
  const pagEl = $("#qbankPagination");
  if (pagEl) {
    if (totalPages <= 1) {
      pagEl.innerHTML = "";
    } else {
      let pageHtml = `
        <button class="pageBtn" ${qb.page === 1 ? 'disabled' : ''} onclick="setQBankPage(${qb.page - 1})" aria-label="Previous Page">← Prev</button>
      `;

      let startP = Math.max(1, qb.page - 2);
      let endP = Math.min(totalPages, startP + 4);
      if (endP - startP < 4) startP = Math.max(1, endP - 4);

      if (startP > 1) {
        pageHtml += `<button class="pageBtn" onclick="setQBankPage(1)">1</button>`;
        if (startP > 2) pageHtml += `<span style="color:var(--m);padding:0 4px;">…</span>`;
      }

      for (let p = startP; p <= endP; p++) {
        pageHtml += `<button class="pageBtn ${p === qb.page ? 'active' : ''}" onclick="setQBankPage(${p})">${p}</button>`;
      }

      if (endP < totalPages) {
        if (endP < totalPages - 1) pageHtml += `<span style="color:var(--m);padding:0 4px;">…</span>`;
        pageHtml += `<button class="pageBtn" onclick="setQBankPage(${totalPages})">${totalPages}</button>`;
      }

      pageHtml += `
        <button class="pageBtn" ${qb.page === totalPages ? 'disabled' : ''} onclick="setQBankPage(${qb.page + 1})" aria-label="Next Page">Next →</button>
      `;

      pagEl.innerHTML = pageHtml;
    }
  }
}

function clearQBankFilter(key) {
  if (!s.qbank) return;
  if (key === "search") {
    s.qbank.search = "";
    if ($("#qbankSearchInput")) $("#qbankSearchInput").value = "";
    if ($("#qbankClearSearch")) $("#qbankClearSearch").classList.add("hidden");
  } else if (key === "course") {
    s.qbank.course = "all";
    s.qbank.week = "all";
    s.qbank.topic = "all";
    if ($("#qbankCourseSelect")) $("#qbankCourseSelect").value = "all";
  } else if (key === "week") {
    s.qbank.week = "all";
    s.qbank.topic = "all";
    if ($("#qbankWeekSelect")) $("#qbankWeekSelect").value = "all";
  } else if (key === "topic") {
    s.qbank.topic = "all";
    if ($("#qbankTopicSelect")) $("#qbankTopicSelect").value = "all";
  } else if (key === "diff") {
    s.qbank.diff = "all";
    if ($("#qbankDiffSelect")) $("#qbankDiffSelect").value = "all";
  }
  s.qbank.page = 1;
  renderQuestionBank();
}

function resetQBankFilters() {
  if (!s.qbank) return;
  s.qbank.search = "";
  s.qbank.course = "all";
  s.qbank.week = "all";
  s.qbank.topic = "all";
  s.qbank.diff = "all";
  s.qbank.sort = "default";
  s.qbank.page = 1;

  if ($("#qbankSearchInput")) $("#qbankSearchInput").value = "";
  if ($("#qbankClearSearch")) $("#qbankClearSearch").classList.add("hidden");
  if ($("#qbankCourseSelect")) $("#qbankCourseSelect").value = "all";
  if ($("#qbankWeekSelect")) $("#qbankWeekSelect").value = "all";
  if ($("#qbankTopicSelect")) $("#qbankTopicSelect").value = "all";
  if ($("#qbankDiffSelect")) $("#qbankDiffSelect").value = "all";
  if ($("#qbankSortSelect")) $("#qbankSortSelect").value = "default";

  renderQuestionBank();
  toast("✓ Question Bank filters reset.");
}

function setQBankPage(p) {
  if (!s.qbank) return;
  s.qbank.page = p;
  renderQuestionBank();
  const qbSec = $("#qbank");
  if (qbSec) qbSec.scrollIntoView({ behavior: "smooth" });
}

function studyWeekInQBank(subId) {
  const target = s.subjects.find(sub => sub.id === subId);
  if (!target) return;
  s.activeSubjectId = target.id;
  s.activeSubject = target;
  s.questions = target.questions || [];
  store(K.activeSubject, target.id);
  
  if (!s.qbank) s.qbank = {};
  s.qbank.course = target.course || target.book;
  s.qbank.week = target.weekTitle || ("Week " + target.week);
  s.qbank.topic = "all";
  s.qbank.search = "";
  s.qbank.page = 1;

  main();
  renderQuestionBank();
  go("qbank");
  toast(`✓ Viewing ${target.book} (${target.weekTitle || "Week " + target.week}) in Question Bank`);
}

function render() {
  renderQuestionBank();
}

function card(q) {
  return `<article class="question-card"><div class="tags"><span class="tag">Q${q.id}</span><span class="tag">${esc(q.chapter||"General")}</span><span class="tag">${esc(q.topic||"General")}</span><span class="tag diff">${q.difficulty||"Medium"}</span></div><div class="qtext">${esc(q.question)}</div><div class="options">${q.options.map((o,i)=>`<button class="option ${s.bankAns[q.id]===i?"selected":""}" data-b="${q.id}" data-o="${i}"><b class="letter">${L[i]||String.fromCharCode(65+i)}</b><span class="optionText">${esc(optText(o))}</span></button>`).join("")}</div><div class="qfoot"><span class="tag">Single Correct Answer</span><button class="bookmark ${s.bm.has(q.id)?"active":""}" data-bm="${q.id}">${s.bm.has(q.id)?"★ Bookmarked":"☆ Bookmark"}</button></div></article>`;
}

function initQuestionBankEvents() {
  const searchInput = $("#qbankSearchInput");
  const clearBtn = $("#qbankClearSearch");
  const cSel = $("#qbankCourseSelect");
  const wSel = $("#qbankWeekSelect");
  const tSel = $("#qbankTopicSelect");
  const dSel = $("#qbankDiffSelect");
  const sSel = $("#qbankSortSelect");
  const resetBtn = $("#qbankResetFiltersBtn");
  const studyBtn = $("#modeStudyBtn");
  const practiceBtn = $("#modePracticeBtn");
  const filterToggleBtn = $("#toggleFilterBtn");
  const expandAllBtn = $("#qbankExpandAllBtn");

  if (searchInput) {
    searchInput.oninput = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.search = searchInput.value;
      s.qbank.page = 1;
      if (clearBtn) {
        clearBtn.classList.toggle("hidden", !searchInput.value);
      }
      renderQuestionBank();
    };
  }

  if (clearBtn) {
    clearBtn.onclick = () => {
      if (searchInput) searchInput.value = "";
      clearBtn.classList.add("hidden");
      if (!s.qbank) s.qbank = {};
      s.qbank.search = "";
      s.qbank.page = 1;
      renderQuestionBank();
    };
  }

  if (cSel) {
    cSel.onchange = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.course = cSel.value;
      s.qbank.week = "all";
      s.qbank.topic = "all";
      s.qbank.page = 1;
      renderQuestionBank();
    };
  }

  if (wSel) {
    wSel.onchange = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.week = wSel.value;
      s.qbank.topic = "all";
      s.qbank.page = 1;
      renderQuestionBank();
    };
  }

  if (tSel) {
    tSel.onchange = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.topic = tSel.value;
      s.qbank.page = 1;
      renderQuestionBank();
    };
  }

  if (dSel) {
    dSel.onchange = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.diff = dSel.value;
      s.qbank.page = 1;
      renderQuestionBank();
    };
  }

  if (sSel) {
    sSel.onchange = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.sort = sSel.value;
      s.qbank.page = 1;
      renderQuestionBank();
    };
  }

  if (resetBtn) resetBtn.onclick = resetQBankFilters;

  if (studyBtn) {
    studyBtn.onclick = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.mode = "study";
      studyBtn.classList.add("active");
      if (practiceBtn) practiceBtn.classList.remove("active");
      renderQuestionBank();
    };
  }

  if (practiceBtn) {
    practiceBtn.onclick = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.mode = "practice";
      practiceBtn.classList.add("active");
      if (studyBtn) studyBtn.classList.remove("active");
      renderQuestionBank();
    };
  }

  if (filterToggleBtn) {
    filterToggleBtn.onclick = () => {
      const panel = $("#qbankFilterPanel");
      if (panel) {
        panel.classList.toggle("mobileCollapsed");
        const isClosed = panel.classList.contains("mobileCollapsed");
        filterToggleBtn.setAttribute("aria-expanded", String(!isClosed));
      }
    };
  }

  if (expandAllBtn) {
    expandAllBtn.onclick = () => {
      if (!s.qbank) s.qbank = {};
      s.qbank.expandedAll = !s.qbank.expandedAll;
      expandAllBtn.innerHTML = s.qbank.expandedAll 
        ? `<span>▲</span> Collapse All Explanations` 
        : `<span>▼</span> Expand All Explanations`;
      renderQuestionBank();
    };
  }
}
function modal(h){$("#modalContent").innerHTML=h;$("#modal").classList.remove("hidden")}
function closeModal(){ $("#modal")?.classList.add("hidden"); }
const close = closeModal;
window.closeModal = closeModal;
window.close = closeModal;
function hasActiveExam(){
  if(s.exam&&s.exam.length&&!s.result)return true;
  let x=read(K.progress,"");
  if(!x)return false;
  try{
    let p=JSON.parse(x);
    return !!(p&&p.exam&&p.exam.length&&!p.result);
  }catch{return false}
}

function getResumeIndex(p){
  if(!p||!p.exam||!p.exam.length)return 0;
  const lockedSet=new Set(p.locked||[]);
  const ansMap=p.ans||{};
  
  // Find highest attempted question index (either locked or with answer selected)
  let lastAttemptedIdx=-1;
  for(let j=p.exam.length-1;j>=0;j--){
    let qId=p.exam[j].id;
    if(lockedSet.has(qId)||ansMap[qId]!==undefined){
      lastAttemptedIdx=j;
      break;
    }
  }

  let savedIdx=(typeof p.i==="number"&&p.i>=0&&p.i<p.exam.length)?p.i:0;

  if(lastAttemptedIdx>=0){
    return lastAttemptedIdx;
  }
  return savedIdx;
}

function resumeActiveExam(){
  const student = s.student?.name ? s.student : getStudentSession();
  if(!student || !student.name){
    openStartModal();
    return;
  }
  if(s.exam&&s.exam.length&&!s.result){
    ["home","subjects","tools","results"].forEach(id=>$("#"+id)?.classList.add("hidden"));
    $("#live").classList.remove("hidden");
    drawExam();
    if(!s.timer) clock();
    go("live");
    updateExamStatusUI();
    toast(`Resumed examination at Question ${s.i+1}`);
    return;
  }
  let x=read(K.progress,"");
  if(x){
    try{
      let p=JSON.parse(x);
      if(p&&p.exam&&p.exam.length){
        let resumeIdx=getResumeIndex(p);
        s.exam=p.exam;
        s.i=resumeIdx;
        s.ans=p.ans||{};
        s.marked=new Set(p.marked||[]);
        s.locked=new Set(p.locked||[]);
        s.skipped=new Set(p.skipped||[]);
        s.sec=typeof p.sec==="number"?p.sec:(s.exam.length*60);
        s.totalSec=typeof p.totalSec==="number"?p.totalSec:(s.exam.length*60);
        s.student=p.student||student||{};
        s.result=null;
        ["home","subjects","tools","results"].forEach(id=>$("#"+id)?.classList.add("hidden"));
        $("#live").classList.remove("hidden");
        drawExam();
        clock();
        go("live");
        updateExamStatusUI();
        toast(`Resumed examination at Question ${resumeIdx+1}`);
        return;
      }
    }catch{}
  }
  openBriefingModal(student);
}

function discardSession(){
  clearInterval(s.timer);
  s.timer=null;
  s.exam=[];
  s.ans={};
  s.marked=new Set();
  s.locked=new Set();
  s.skipped=new Set();
  s.i=0;
  s.sec=0;
  s.totalSec=0;
  s.result=null;
  store(K.progress,"");
  updateExamStatusUI();
}

function start(){
  const student = s.student?.name ? s.student : getStudentSession();
  const isLoggedIn = !!(student && student.name);

  if(hasActiveExam()){
    let p=null;
    try{p=JSON.parse(read(K.progress,""))}catch{}
    let rIdx=(s.exam&&s.exam.length)?s.i:(p?getResumeIndex(p):0);
    let qNum=rIdx+1;
    let sec=(s.exam&&s.exam.length)?s.sec:(p?.sec||3600);
    let stName=student?.name||"Student";
    let hasAttempts = (s.exam&&s.exam.length) ? (s.locked.size>0||s.skipped.size>0||Object.keys(s.ans).length>0) : (p?.locked?.length>0||p?.skipped?.length>0);

    if(hasAttempts && isLoggedIn){
      modal(`<h2>Examination in Progress</h2>
<p>An active examination session is currently underway in your browser.</p>
<div style="background:var(--card-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);padding:12px 14px;margin:12px 0;font-size:12.5px;color:var(--t);line-height:1.6;">
  <div>👤 <b>Student:</b> ${esc(stName)}</div>
  <div>📍 <b>Active Question:</b> Resuming at Question ${qNum}</div>
  <div>⏱️ <b>Time Remaining:</b> ${fmt(sec)}</div>
</div>
<div class="modalActions">
  <button class="secondary" id="promptDiscard" style="color:var(--r);border-color:rgba(239,68,68,0.3);">Discard & Start New</button>
  <button class="primary" id="promptResume">▶ Resume at Question ${qNum}</button>
</div>`);

      $("#promptResume").onclick=()=>{close();resumeActiveExam()};
      $("#promptDiscard").onclick=()=>{
        close();
        modal(`<h2>Discard Active Examination?</h2>
<p style="color:var(--r);font-size:13px;line-height:1.5;">Are you sure you want to discard your current test? All answers up to Question ${qNum} will be cleared and cannot be recovered.</p>
<div class="modalActions">
  <button class="secondary" id="keepActive">Keep Exam</button>
  <button class="danger" id="discardConfirm">Yes, Discard & Start New</button>
</div>`);
        $("#keepActive").onclick=close;
        $("#discardConfirm").onclick=()=>{
          close();
          discardSession();
          openBriefingModal();
        };
      };
      return;
    }
  }

  // If already logged in, show examination briefing with Continue to Exam CTA (does NOT start immediately)
  if(isLoggedIn){
    openBriefingModal(student);
  } else {
    // If not logged in, prompt for credentials with compact responsive modal
    openStartModal();
  }
}

function openStartModal(){
  const saved=getStudentSession()||s.student||{};
  const hasSaved=!!(saved.name&&saved.roll&&saved.className);

  modal(`<h2>Candidate Verification & Login</h2>
<p style="font-size:12px;color:var(--m);margin-bottom:12px;">Enter your student credentials to register for the continuous assessment examination.</p>

<div class="fields compactFields">
  <label>Full Student Name <span style="color:var(--r);font-weight:700;">*</span>
    <input id="sn" value="${esc(saved.name||"")}" placeholder="e.g. Muhammad Zahid" autocomplete="name" required>
    <small id="snErr" class="fieldErr hidden">Student Name is required.</small>
  </label>

  <div class="fieldsRow">
    <label>Roll / Reg Number <span style="color:var(--r);font-weight:700;">*</span>
      <input id="sr" value="${esc(saved.roll||"")}" placeholder="e.g. CS-2024-401" required>
      <small id="srErr" class="fieldErr hidden">Roll Number is required.</small>
    </label>
    <label>Class / Semester <span style="color:var(--r);font-weight:700;">*</span>
      <input id="sc" value="${esc(saved.className||"")}" placeholder="e.g. ADP Semester 2" required>
      <small id="scErr" class="fieldErr hidden">Class is required.</small>
    </label>
  </div>

  <div class="examOptCheckboxes">
    <label><input id="rq" type="checkbox"> Randomize Questions</label>
    <label><input id="ro" type="checkbox"> Randomize Options</label>
  </div>
</div>

<div class="cookieNotice" style="margin-top:10px;">
  <span>💾 <b>Candidate Session:</b> Credentials are saved in browser cookies for easy access.</span>
  ${hasSaved?`<button id="modalLogout" class="logoutLink" type="button">Logout / Clear</button>`:""}
</div>

<div class="modalActions" style="margin-top:16px;">
  <button class="secondary" id="cancel">Cancel</button>
  <button class="primary" id="saveLogin">Verify & Proceed →</button>
</div>`);

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

  if($("#cancel")) $("#cancel").onclick=close;
  if($("#modalLogout")) $("#modalLogout").onclick=()=>{ logoutStudent(); openStartModal(); };

  if($("#saveLogin")) {
    $("#saveLogin").onclick=()=>{
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
        toast("All student credentials are required to continue.",true);
        return;
      }

      s.student={name,roll,className};
      saveStudentSession(s.student);
      updateStudentUI(s.student);
      s.randomizeQ=!!$("#rq")?.checked;
      s.randomizeO=!!$("#ro")?.checked;
      updateExamStatusUI();
      toast(`Welcome, ${name}! Credentials verified.`);
      
      // Professional standard: do NOT start instantly, show Briefing & Ready Check
      openBriefingModal(s.student);
    };
  }
}

function openBriefingModal(student){
  const st = student || s.student || getStudentSession() || {};
  const sub = s.activeSubject || DEFAULT_SUBJECTS[0];
  const qCount = s.questions ? s.questions.length : 40;

  modal(`<div class="briefingModal">
  <div class="briefingHeader">
    <div class="briefingBadgeIcon" aria-hidden="true">📋</div>
    <div class="briefingHeaderTexts">
      <h2 class="briefingTitle">Examination Briefing &amp; Ready Check</h2>
      <p class="briefingSubtitle">Candidate credentials verified • Review test guidelines before beginning</p>
    </div>
  </div>

  <div class="briefingCandidateCard">
    <div class="briefingAvatar" aria-hidden="true">👤</div>
    <div class="briefingCandidateInfo">
      <div class="briefingCandidateName">${esc(st.name || "Student")}</div>
      <div class="briefingCandidateMeta">
        <span>Roll: <b>${esc(st.roll || "—")}</b></span>
        <span class="metaDot">•</span>
        <span>Class: <b>${esc(st.className || "—")}</b></span>
      </div>
    </div>
    <button id="editLoginBtn" class="briefingEditBtn" title="Edit candidate credentials" type="button">Edit ✏️</button>
  </div>

  <div class="briefingExamSpec">
    <div class="briefingCourseRow">
      <span class="briefingCoursePill">${esc(sub.weekTitle || "Week " + sub.week)}</span>
      <b class="briefingCourseName">${esc(sub.course || sub.book)}</b>
    </div>
    <div class="briefingTopicRow" title="${esc(sub.topic || "Course Syllabus Review")}">
      <span class="topicTag">Topic:</span>
      <span class="topicText">${esc(sub.topic || "Course Syllabus Review")}</span>
    </div>
    <div class="briefingMetricsBar">
      <div class="briefingMetric">
        <span class="metricIcon" aria-hidden="true">📝</span>
        <div class="metricText">
          <small>QUESTIONS</small>
          <b>${qCount} MCQs</b>
        </div>
      </div>
      <div class="briefingMetric">
        <span class="metricIcon" aria-hidden="true">⏱️</span>
        <div class="metricText">
          <small>DURATION</small>
          <b>${qCount} Mins</b>
        </div>
      </div>
      <div class="briefingMetric">
        <span class="metricIcon" aria-hidden="true">🎯</span>
        <div class="metricText">
          <small>BENCHMARK</small>
          <b>50% Mark</b>
        </div>
      </div>
    </div>
  </div>

  <div class="briefingRules">
    <div class="briefingRuleItem">
      <span class="ruleIcon" aria-hidden="true">🔒</span>
      <span class="ruleText"><b>Sequential Mode:</b> Forward-only exam. Answers are locked as you proceed.</span>
    </div>
    <div class="briefingRuleItem">
      <span class="ruleIcon" aria-hidden="true">↷</span>
      <span class="ruleText"><b>Skipped Questions:</b> Unanswered questions can be revisited before final submit.</span>
    </div>
    <div class="briefingRuleItem">
      <span class="ruleIcon" aria-hidden="true">⏱️</span>
      <span class="ruleText"><b>Live Timer:</b> ${qCount}-minute countdown (${qCount} MCQs • 1 min/MCQ) starts automatically when you continue.</span>
    </div>
  </div>

  <div class="briefingActions modalActions">
    <button class="primary continueExamBtn" id="continueToExam" type="button">▶ Continue to Examination →</button>
    <button class="secondary cancelBriefingBtn" id="closeBriefing" type="button">Prepare / Review Syllabus</button>
  </div>
</div>`);

  if($("#editLoginBtn")) $("#editLoginBtn").onclick=()=>{ close(); openStartModal(); };
  if($("#closeBriefing")) $("#closeBriefing").onclick=close;
  if($("#continueToExam")) $("#continueToExam").onclick=()=>{
    close();
    beginExamNow();
  };
}

function beginExamNow(){
  const student = s.student?.name ? s.student : getStudentSession();
  if(!student || !student.name){
    openStartModal();
    return;
  }
  s.student = student;
  s.exam=s.questions.map(q=>({...q,options:q.options.map((text,index)=>({text,index}))}));
  if(s.randomizeQ) s.exam.sort(()=>Math.random()-.5);
  if(s.randomizeO) s.exam.forEach(q=>q.options.sort(()=>Math.random()-.5));
  const totalQ = s.exam.length;
  s.totalSec = Math.max(60, totalQ * 60);
  s.sec = s.totalSec;
  s.ans={};s.marked=new Set();s.locked=new Set();s.skipped=new Set();s.i=0;s.result=null;close();
  ["home","subjects","tools","results"].forEach(x=>$("#"+x)?.classList.add("hidden"));
  $("#live").classList.remove("hidden");
  save();
  drawExam();
  clock();
  go("live");
  updateExamStatusUI();
  toast("Examination started. Timer is running!");
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
    `<span class="tag qNumTag">Question ${s.i+1} of ${s.exam.length}</span>`
  ];
  const topicLabel = (q.topic || q.chapter || "").trim();
  if(topicLabel && topicLabel.toLowerCase() !== "general") {
    tagElements.push(`<span class="tag">${esc(topicLabel)}</span>`);
  }
  tagElements.push(`<span class="tag diff">${q.difficulty||"Medium"}</span>`);
  if(isLocked) tagElements.push('<span class="tag lockedBadge">🔒 Answer Locked</span>');
  else if(isSkipped) tagElements.push('<span class="tag skippedBadge">↷ Skipped — Answer to Complete</span>');

  let buttonText = isFinalAction ? "Finish & Submit Exam ✓" : (isSkipped ? "Lock & Continue →" : "Next Question →");

  $("#examQ").innerHTML=`
    <div class="tags">${tagElements.join("")}</div>
    <div class="qtext">${esc(q.question)}</div>
    <div class="options">
      ${q.options.map((o,i)=>`<button class="option ${s.ans[q.id]===o.index?"selected":""} ${isLocked?"disabledOption":""}" data-e="${i}" ${isLocked?"disabled":""}><b class="letter">${L[i]}</b><span class="optionText">${esc(optText(o))}</span></button>`).join("")}
    </div>
    <div class="examControls">
      <div class="examControlBtns">
        <button class="secondary examSubmitCta" id="examSubmitBtn" type="button" title="Finish and submit examination">Submit Exam</button>
        <div class="examNavBtns">
          ${!isLocked?`<button class="skipBtn" id="skip" type="button" title="Skip this question and resume it later">↷ Skip Question</button>`:""}
          <button class="primary" id="next" ${!isAnswered && !isLocked ? "disabled" : ""}>${buttonText}</button>
        </div>
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

  if($("#examSubmitBtn")){
    $("#examSubmitBtn").onclick=confirmSubmit;
  }

  $("#next").onclick=()=>{
    if(isLocked){
      if(isFinalAction){
        confirmSubmit();
        return;
      }
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
        s.i=nextIdx;
        save();
        drawExam();
      }else{
        confirmSubmit();
      }
      return;
    }

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
      save();
      drawExam();
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
      ? `Question ${i+1} (Locked — Click to review)`
      : (s.skipped.has(q.id)
        ? `Question ${i+1} (Skipped — Click to resume)`
        : (i===s.i ? "Current Question" : `Question ${i+1}`));

    return `<button class="${cls.join(" ")}" data-n="${i}" title="${title}">${i+1}${icon}</button>`;
  }).join("");

  $$("[data-n]").forEach(b=>b.onclick=()=>{
    let targetIdx=+b.dataset.n;
    if(targetIdx===s.i) return;
    let targetQ=s.exam[targetIdx];
    if(!targetQ) return;
    
    if(s.locked.has(targetQ.id)){
      s.i=targetIdx;
      save();
      drawExam();
      toast(`Viewing Question ${targetIdx+1} (Locked — response cannot be changed)`);
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
    let nextAllowed=-1;
    for(let j=0;j<s.exam.length;j++){
      if(!s.locked.has(s.exam[j].id)){
        nextAllowed=j;
        break;
      }
    }
    if(targetIdx===nextAllowed && (s.locked.has(targetQ.id) || s.ans[targetQ.id]!==undefined || targetIdx===s.i)){
      s.i=targetIdx;
      save();
      drawExam();
      return;
    }
    toast(`Sequential Exam: Please answer Question ${s.i+1} before proceeding.`,true);
  });
}

function live(){
  let total=s.exam.length;
  let lockedCount=s.locked.size;
  let skippedCount=s.exam.filter(q=>!s.locked.has(q.id)&&s.skipped.has(q.id)).length;
  let remainingCount=s.exam.filter(q=>!s.locked.has(q.id)).length;
  let currentNum=(s.i+1);
  let progressPct=total?Math.round((lockedCount/total)*100):0;

  if($("#liveTotalQ")) $("#liveTotalQ").textContent=total;
  if($("#liveAnsweredQ")) $("#liveAnsweredQ").textContent=`${lockedCount}/${total}`;
  if($("#liveSkippedQ")) $("#liveSkippedQ").textContent=skippedCount;
  if($("#liveRemainingQ")) $("#liveRemainingQ").textContent=remainingCount;
  if($("#liveCurrentQ")) $("#liveCurrentQ").innerHTML=`<span class="qWord">Question </span>${currentNum}`;
  if($("#liveProgressPct")) $("#liveProgressPct").textContent=`${progressPct}%`;
}
function clock(){clearInterval(s.timer);s.timer=setInterval(()=>{s.sec--;uiClock();save();if(s.sec<=0){clearInterval(s.timer);finish(true)}},1000);uiClock()}function uiClock(){let m=Math.floor(Math.max(0,s.sec)/60),x=Math.max(0,s.sec)%60;$("#timer b").textContent=`${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`;$("#timer").classList.toggle("warning",s.sec<=300&&s.sec>60);$("#timer").classList.toggle("danger",s.sec<=60)}
function confirmSubmit(){
  let lockedCount=s.locked.size;
  let skippedCount=s.exam.filter(q=>!s.locked.has(q.id)&&s.skipped.has(q.id)).length;
  let unattemptedCount=s.exam.filter(q=>!s.locked.has(q.id)&&!s.skipped.has(q.id)).length;
  let totalPending=skippedCount+unattemptedCount;
  let firstSkippedIdx=s.exam.findIndex(q=>!s.locked.has(q.id)&&s.skipped.has(q.id));
  let firstSkippedNum=firstSkippedIdx!==-1?firstSkippedIdx+1:null;

  modal(`<h2>Submit Examination?</h2>
<p>Are you sure you want to finish your test and generate your official academic transcript?</p>
${totalPending>0?`
<div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);border-radius:var(--radius-sm);padding:12px 14px;margin:12px 0;font-size:12.5px;color:var(--t);line-height:1.6;">
  <div style="display:flex;align-items:center;gap:6px;font-weight:700;color:var(--a);margin-bottom:6px;">
    <span>⚠️</span> <span>Incomplete Examination Notice</span>
  </div>
  <div>• <b>Locked / Answered:</b> ${lockedCount} of ${s.exam.length} questions</div>
  <div>• <b>Skipped Questions:</b> ${skippedCount}</div>
  <div>• <b>Unattempted Questions:</b> ${unattemptedCount}</div>
  <div style="margin-top:6px;font-size:11.5px;color:var(--m);"><b>Grading Rule:</b> Any skipped or unanswered questions will be awarded 0 marks.</div>
</div>`: `
<div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.25);border-radius:var(--radius-sm);padding:12px 14px;margin:12px 0;font-size:12.5px;color:var(--g);line-height:1.6;">
  <div style="display:flex;align-items:center;gap:6px;font-weight:700;margin-bottom:4px;">
    <span>✓</span> <span>All Questions Completed!</span>
  </div>
  <div>All <b>${s.exam.length}</b> questions have been locked with your chosen answers. Ready for grading and transcript generation.</div>
</div>`}
<div class="modalActions" style="gap:8px;flex-wrap:wrap;">
  <button class="secondary" id="keep">Continue Examination</button>
  ${skippedCount>0?`<button class="secondary" id="resumeSkipped" style="color:var(--p);font-weight:600;">↷ Resume Skipped (Q${firstSkippedNum})</button>`:""}
  <button class="primary" id="yes" style="font-weight:700;">${totalPending>0?"Yes, Submit Anyway":"Submit Examination Now ✓"}</button>
</div>`);

  if($("#keep")) $("#keep").onclick=closeModal;
  if($("#resumeSkipped")){
    $("#resumeSkipped").onclick=()=>{
      closeModal();
      if(firstSkippedIdx!==-1){
        s.i=firstSkippedIdx;
        save();
        drawExam();
        toast(`Resuming from skipped Question ${firstSkippedNum}`);
      }
    };
  }
  if($("#yes")){
    $("#yes").onclick=()=>{
      closeModal();
      finish(false);
    };
  }
}
function finish(auto){
  if(s.result)return;
  clearInterval(s.timer);
  s.timer=null;
  let c=0,a=0;
  s.exam.forEach(q=>{
    if(s.ans[q.id]!==undefined){
      a++;
      if(s.ans[q.id]===q.answer)c++;
    }
  });
  let total=s.exam.length,p=c/total*100;
  let totalTime = s.totalSec || (s.exam.length * 60);
  let elapsed = Math.max(0, totalTime - Math.max(0, s.sec));
  s.result={
    total,
    correct:c,
    attempted:a,
    wrong:a-c,
    unanswered:total-a,
    percentage:p,
    time:elapsed,
    answers:{...s.ans},
    exam:s.exam,
    student:s.student,
    subject:{...s.activeSubject}
  };
  store(K.result,JSON.stringify(s.result));
  store(K.progress,"");
  results();
  ["home","subjects","tools","live"].forEach(id=>$("#"+id)?.classList.add("hidden"));
  $("#results").classList.remove("hidden");
  go("results");
  updateExamStatusUI();
  toast(auto?"Time is over — submitted":"Test submitted successfully",auto);
}

function getGrade(pct, sub){
  const subjName = sub ? (sub.course || sub.book) : "the course";
  if(pct>=85) return {grade:"A+", remarks:`Outstanding Performance! Demonstrated exceptional command of ${subjName} concepts and syllabus objectives.`};
  if(pct>=80) return {grade:"A", remarks:`Excellent Performance! Strong conceptual foundation and problem-solving skills in ${subjName}.`};
  if(pct>=70) return {grade:"B", remarks:`Good Performance. Well prepared with minor conceptual areas for refinement in ${subjName}.`};
  if(pct>=60) return {grade:"C", remarks:`Satisfactory Performance. Basic conceptual clarity achieved; further review recommended.`};
  if(pct>=50) return {grade:"D", remarks:`Conditional Pass. Meets minimum academic benchmark (50%); thorough review advised.`};
  return {grade:"F", remarks:`Did not meet passing criteria (< 50%). Recommended to review ${subjName} lecture material and retake assessment.`};
}

function results(){
  let r=s.result;if(!r)return;
  let pass=r.percentage>=50;
  let resSub=r.subject||s.activeSubject;
  let gi=getGrade(r.percentage, resSub);

  // Synchronize Academic Transcript with tested course
  updateTranscriptSubjectUI(resSub);

  // Screen-only prominent True/False & Marks summary grid
  if($("#sumTotal")) $("#sumTotal").textContent=r.total;
  if($("#sumTrue")) $("#sumTrue").textContent=r.correct;
  if($("#sumTrueMarks")) $("#sumTrueMarks").textContent=`${r.correct} Marks Awarded`;
  if($("#sumFalse")) $("#sumFalse").textContent=r.wrong;
  if($("#sumSkipped")) $("#sumSkipped").textContent=r.unanswered;
  if($("#sumPct")) $("#sumPct").textContent=`${r.percentage.toFixed(1)}%`;
  if($("#sumScoreRatio")) $("#sumScoreRatio").textContent=`${r.correct} / ${r.total} Marks`;
  if($("#sumStatus")){
    $("#sumStatus").textContent=pass?"PASSED":"NOT PASSED";
  }
  if($("#sumGrade")) $("#sumGrade").textContent=`Grade: ${gi.grade}`;
  if($("#sumStatusCard")){
    $("#sumStatusCard").classList.toggle("pass", pass);
    $("#sumStatusCard").classList.toggle("fail", !pass);
  }

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
  const allowedTotalMins = r.total || 40;
  if($("#dispExamTime")) $("#dispExamTime").textContent=`${fmt(r.time)} (Allowed: ${String(allowedTotalMins).padStart(2,"0")}:00 mins)`;

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

    let statusBadge = ok
      ? `<span class="reviewBadge trueBadge">✓ True / Correct (+1 Mark)</span>`
      : (isAns
        ? `<span class="reviewBadge falseBadge">✕ False / Incorrect (0 Marks)</span>`
        : `<span class="reviewBadge skippedBadge">↷ Skipped / Unanswered (0 Marks)</span>`);

    return `<div class="reviewItem ${ok?"itemCorrect":(isAns?"itemWrong":"itemSkipped")}">
      <div class="reviewItemHeader">
        <h4>Q${i+1}. ${esc(q.question)}</h4>
        ${statusBadge}
      </div>
      <div class="reviewAnsBlock ${ok?"userCorrect":"userWrong"}">
        <b>Your Answer:</b> <span>${userDisplay}</span>
      </div>
      ${!ok ? `<div class="reviewAnsBlock ansSolution"><b>Correct Answer:</b> <span>${correctDisplay}</span></div>` : ""}
      ${q.explanation ? `<div class="explain"><b>Explanation:</b> ${esc(q.explanation)}</div>` : ""}
    </div>`;
  }).join("");
}

function bar(id,lab,p){$("#"+id).style.width=p+"%";$("#"+lab).textContent=p.toFixed(0)+"%"}function fmt(x){return String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")}
function save(){
  if(s.exam.length&&!s.result){
    store(K.progress,JSON.stringify({
      exam:s.exam,
      i:s.i,
      ans:s.ans,
      marked:[...s.marked],
      locked:[...s.locked],
      skipped:[...s.skipped],
      sec:s.sec,
      totalSec:s.totalSec || (s.exam.length * 60),
      student:s.student
    }));
    updateExamStatusUI();
  }
}

function updateExamStatusUI(){
  const student = s.student?.name ? s.student : getStudentSession();
  const isLoggedIn = !!(student && student.name);
  const hasActiveProgress = (s.exam && s.exam.length && !s.result) || !!read(K.progress, "");
  
  let qNum = 1;
  let remainingSec = 3600;
  let hasAttemptedQuestions = false;

  if(s.exam && s.exam.length && !s.result){
    qNum = (typeof s.i === "number" ? s.i : 0) + 1;
    remainingSec = s.sec || 3600;
    hasAttemptedQuestions = (s.locked.size > 0 || Object.keys(s.ans).length > 0 || s.skipped.size > 0);
  } else {
    try {
      const p = JSON.parse(read(K.progress, ""));
      if(p && p.exam && p.exam.length){
        let rIdx = getResumeIndex(p);
        qNum = rIdx + 1;
        remainingSec = p.sec || 3600;
        hasAttemptedQuestions = (p.locked?.length > 0 || Object.keys(p.ans || {}).length > 0 || p.skipped?.length > 0);
      }
    } catch {}
  }

  const startTopBtn = $("#startTop");
  const drawerStartBtn = $("#drawerStartBtn");
  const startHeroBtn = $("#startHero");
  const banner = $("#examInProgressBanner");
  const isLiveVisible = !$("#live")?.classList.contains("hidden");

  // CASE 1: Student is Logged In AND has an active exam in progress with attempts
  if(isLoggedIn && hasActiveProgress && hasAttemptedQuestions){
    if(startTopBtn){
      startTopBtn.innerHTML = `▶ Resume Exam <small style="opacity:0.85;font-weight:600;">(Q${qNum})</small>`;
      startTopBtn.title = `Resume active examination at Question ${qNum}`;
      startTopBtn.classList.add("resumeActive");
    }
    if(drawerStartBtn){
      drawerStartBtn.innerHTML = `▶ Resume Examination (Question ${qNum})`;
      drawerStartBtn.classList.add("resumeActive");
    }
    if(startHeroBtn){
      startHeroBtn.innerHTML = `Resume Practice Exam (Question ${qNum}) →`;
    }
    if(banner){
      if(isLiveVisible){
        banner.classList.add("hidden");
      }else{
        banner.classList.remove("hidden");
        const bInfo = $("#bannerInfo");
        if(bInfo) bInfo.innerHTML = `<b>Exam in Progress:</b> ${esc(s.activeSubject?.book || "Exam")} • Question ${qNum} of ${s.questions?.length || 40} • ${fmt(remainingSec)} remaining`;
      }
    }
  } 
  // CASE 2: Student is Logged In, but has not started or attempted yet (Show Continue to Exam)
  else if(isLoggedIn){
    if(startTopBtn){
      startTopBtn.innerHTML = "▶ Continue to Exam";
      startTopBtn.title = "Review examination briefing and begin test";
      startTopBtn.classList.remove("resumeActive");
    }
    if(drawerStartBtn){
      drawerStartBtn.innerHTML = "▶ Continue to Examination";
      drawerStartBtn.classList.remove("resumeActive");
    }
    if(startHeroBtn){
      startHeroBtn.innerHTML = "Continue to Exam →";
    }
    if(banner){
      banner.classList.add("hidden");
    }
  } 
  // CASE 3: Logged Out / Clean Guest State (NO RESUME BUTTON, NO ACTIVE SESSION)
  else {
    if(startTopBtn){
      startTopBtn.innerHTML = "▶ Start Test";
      startTopBtn.title = "Start practice examination";
      startTopBtn.classList.remove("resumeActive");
    }
    if(drawerStartBtn){
      drawerStartBtn.innerHTML = "▶ Start Practice Examination";
      drawerStartBtn.classList.remove("resumeActive");
    }
    if(startHeroBtn){
      startHeroBtn.innerHTML = "Start Practice Exam →";
    }
    if(banner){
      banner.classList.add("hidden");
    }
  }
}

function updateQuestionCountUI(){
  const totalCount=s.questions?s.questions.length:0;
  if($("#total")) $("#total").textContent=totalCount;
  if($("#heroMinutes")) $("#heroMinutes").textContent=totalCount;
  if($("#previewTimer")) $("#previewTimer").textContent=`⏱️ ${String(totalCount).padStart(2,"0")}:00 Allowed`;
  if($("#subjectTagCount")) $("#subjectTagCount").textContent=`${totalCount} MCQs Ready`;
  if($("#count")) $("#count").textContent=(s.filtered?s.filtered.length:totalCount)+" question"+((s.filtered?s.filtered.length:totalCount)===1?"":"s");
  
  const sub=s.activeSubject||{};
  const importStatus=$("#importStatusText");
  const restoreBtn=$("#restoreDefaultQuestions");
  const exportStatus=$("#exportStatusText");
  if(importStatus){
    importStatus.innerHTML=`Active: <b>${esc(sub.book||"Current Book")}</b> (${totalCount} MCQs). Choose JSON to add new book or replace.`;
  }
  if(exportStatus){
    exportStatus.textContent=`Download "${sub.book||"MCQs"}" (${totalCount} MCQs) with complete class record.`;
  }
  if(restoreBtn){
    restoreBtn.classList.remove("hidden");
  }
}

function exportQuestionsJSON(){
  if(!s.questions||!s.questions.length){
    toast("No questions available to export",true);
    return;
  }
  
  const sub=s.activeSubject||{};
  const cleanExport={
    book:sub.book||"MCQs Question Bank",
    course:sub.course||sub.book||"Course Review",
    week:sub.week||1,
    weekTitle:sub.weekTitle||"Week 01",
    topic:sub.topic||"Course Syllabus Review",
    level:sub.level||"BS Computer Science",
    questionType:"MCQ",
    language:"English",
    createdBy:sub.createdBy||"Course Instructor",
    totalQuestions:s.questions.length,
    mcqs:s.questions.map((q,idx)=>({
      id:q.id!==undefined&&!isNaN(Number(q.id))?Number(q.id):(idx+1),
      subject:q.subject||sub.course||sub.book,
      chapter:q.chapter||sub.topic,
      topic:q.topic||sub.topic,
      difficulty:q.difficulty||"Medium",
      question:q.question,
      options:q.options.map((o,optIdx)=>({
        text:optText(o),
        isCorrect:optIdx===q.answer
      })),
      answer:typeof q.answer==="number"?q.answer:0,
      explanation:q.explanation||"",
      type:q.type||"single"
    }))
  };
  
  try{
    const jsonStr=JSON.stringify(cleanExport,null,2);
    const blob=new Blob([jsonStr],{type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    const dateStr=new Date().toISOString().slice(0,10);
    const safeSub=(cleanExport.course||cleanExport.book||"mcqs-question-bank").toLowerCase().replace(/[^a-z0-9]+/g,"-");
    const safeWeek=(cleanExport.weekTitle||"week").toLowerCase().replace(/[^a-z0-9]+/g,"-");
    a.download=`${safeSub}-${safeWeek}-${cleanExport.totalQuestions}mcqs-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },250);
    toast(`✓ Successfully exported "${cleanExport.book}" (${cleanExport.totalQuestions} questions)`);
  }catch(err){
    toast("Export failed: "+err.message,true);
  }
}

function promptAddBookRecord(detectedMeta, validQuestions, fileName){
  const dBook=detectedMeta.book||detectedMeta.course||detectedMeta.subject||(validQuestions[0]&&validQuestions[0].subject)||"Computer Architecture and Organization";
  const dWeekNum=detectedMeta.week||1;
  const dWeekTitle=detectedMeta.weekTitle||(detectedMeta.week?"Week "+String(detectedMeta.week).padStart(2,"0"):"Week 01");
  const dTopic=detectedMeta.topic||(validQuestions[0]&&(validQuestions[0].topic||validQuestions[0].chapter))||"Course Syllabus Review & Assessment";
  const dLevel=detectedMeta.level||"BS Computer Science";
  const dInstructor=detectedMeta.createdBy||detectedMeta.author||detectedMeta.instructor||"Lec. Iftikhar Zahid";
  const q1=validQuestions[0];

  modal(`<h2>Add Book & Class Record — JSON Import</h2>
<p style="font-size:13px;line-height:1.45;color:var(--t-secondary);">Please verify or customize the course book and class record details before saving:</p>

<div class="bookImportSummary">
  <div style="display:flex;justify-content:space-between;align-items:center;">
    <span>📄 <b>Source File:</b> ${esc(fileName)}</span>
    <span class="tag success" style="font-size:11px;">✓ ${validQuestions.length} Valid MCQs</span>
  </div>
  <div style="font-size:11.5px;color:var(--m);margin-top:2px;">
    <b>Sample Q1:</b> ${esc(q1.question.slice(0,90))}${q1.question.length>90?"...":""} (${q1.options.length} options)
  </div>
</div>

<div class="fields" style="display:flex;flex-direction:column;gap:11px;margin-top:10px;">
  <label style="font-size:12.5px;font-weight:600;">Book / Course Title <span style="color:var(--r);font-weight:700;">*</span>
    <input id="recBook" value="${esc(dBook)}" placeholder="e.g. Computer Architecture and Organization" style="margin-top:4px;" required>
    <small id="recBookErr" class="fieldErr hidden">Book / Course Title is required.</small>
  </label>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <label style="font-size:12.5px;font-weight:600;">Week Number / Title <span style="color:var(--r);font-weight:700;">*</span>
      <input id="recWeek" value="${esc(dWeekTitle)}" placeholder="e.g. Week 01 or 1" style="margin-top:4px;" required>
      <small id="recWeekErr" class="fieldErr hidden">Week is required.</small>
    </label>
    <label style="font-size:12.5px;font-weight:600;">Academic Class / Level
      <input id="recLevel" value="${esc(dLevel)}" placeholder="e.g. BS Computer Science" style="margin-top:4px;">
    </label>
  </div>

  <label style="font-size:12.5px;font-weight:600;">Topic / Syllabus Unit Description <span style="color:var(--r);font-weight:700;">*</span>
    <textarea id="recTopic" rows="2" style="width:100%;resize:vertical;font-family:inherit;font-size:12.5px;padding:8px 10px;border:1px solid var(--line);border-radius:var(--radius-sm);background:var(--card);color:var(--t);margin-top:4px;" placeholder="Enter topic description">${esc(dTopic)}</textarea>
    <small id="recTopicErr" class="fieldErr hidden">Topic description is required.</small>
  </label>

  <label style="font-size:12.5px;font-weight:600;">Course Instructor / Created By
    <input id="recInstructor" value="${esc(dInstructor)}" placeholder="e.g. Lec. Iftikhar Zahid" style="margin-top:4px;">
  </label>

  <div style="background:var(--card-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 14px;margin-top:4px;">
    <b style="font-size:12.5px;color:var(--t);">Select Destination:</b>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;font-size:12.5px;">
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
        <input type="radio" name="importDest" value="new" checked>
        <span><b>Add as New Book in Catalog</b> (Recommended — adds new subject card to library)</span>
      </label>
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
        <input type="radio" name="importDest" value="replace">
        <span><b>Replace Active Subject</b> (Overwrites current active question bank)</span>
      </label>
    </div>
  </div>

  <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.25);border-radius:var(--radius-sm);padding:8px 12px;margin-top:2px;">
    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12px;color:var(--t);">
      <input type="checkbox" id="recUploadMongo" checked>
      <span><b>🍃 Also sync to MongoDB Atlas Cloud Database</b> (cluster0)</span>
    </label>
  </div>
</div>

<div class="modalActions" style="margin-top:16px;">
  <button class="secondary" id="recCancel">Cancel</button>
  <button class="primary" id="recSave">✓ Save & Load Book Record</button>
</div>`);

  ["recBook","recWeek","recTopic"].forEach(id=>{
    const el=$("#"+id);
    if(el){
      el.oninput=()=>{
        if(el.value.trim()){
          el.classList.remove("inputErr");
          $("#"+id+"Err")?.classList.add("hidden");
        }
      };
    }
  });

  if($("#recCancel")) $("#recCancel").onclick=close;
  if($("#recSave")) $("#recSave").onclick=()=>{
    const bookVal=($("#recBook")?.value||"").trim();
    const weekVal=($("#recWeek")?.value||"").trim();
    const topicVal=($("#recTopic")?.value||"").trim();
    const levelVal=($("#recLevel")?.value||"").trim()||"BS Computer Science";
    const instructorVal=($("#recInstructor")?.value||"").trim()||"Course Instructor";
    const dest=$('input[name="importDest"]:checked')?.value||"new";

    let hasErr=false;
    if(!bookVal){
      $("#recBook")?.classList.add("inputErr");
      $("#recBookErr")?.classList.remove("hidden");
      hasErr=true;
    }
    if(!weekVal){
      $("#recWeek")?.classList.add("inputErr");
      $("#recWeekErr")?.classList.remove("hidden");
      hasErr=true;
    }
    if(!topicVal){
      $("#recTopic")?.classList.add("inputErr");
      $("#recTopicErr")?.classList.remove("hidden");
      hasErr=true;
    }
    if(hasErr){
      toast("Please fill in all required book details (*)",true);
      return;
    }

    let weekNum=parseInt(weekVal.replace(/\D/g,""))||1;
    let weekTitle=weekVal.toLowerCase().startsWith("week")?weekVal:`Week ${String(weekNum).padStart(2,"0")}`;

    validQuestions.forEach((q,i)=>{
      q.id=i+1;
      q.subject=bookVal;
      q.chapter=topicVal;
      q.topic=topicVal;
    });

    close();
    discardSession();

    if(dest==="new"){
      const slug=(bookVal+"-"+weekTitle).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
      const uniqueId=s.subjects.some(sub=>sub.id===slug)?`${slug}-${Date.now().toString(36)}`:slug;
      
      const newSub={
        id:uniqueId,
        book:bookVal,
        course:bookVal,
        week:weekNum,
        weekTitle:weekTitle,
        topic:topicVal,
        level:levelVal,
        createdBy:instructorVal,
        icon:"📚",
        isBuiltIn:false,
        questions:validQuestions
      };

      s.subjects.push(newSub);
      saveSubjects([newSub]);
      applySubjectSwitch(newSub,false);
      
      const shouldSync = $("#recUploadMongo") && $("#recUploadMongo").checked;
      if (shouldSync && MONGO_API_URL) {
        toast(`✓ Added "${bookVal}" (${weekTitle}) with ${validQuestions.length} MCQs — syncing to cloud...`);
        uploadRecordToMongo(newSub);
      } else {
        toast(`✓ Added "${bookVal}" (${weekTitle}) with ${validQuestions.length} MCQs locally.`);
      }
      go("subjects");
    }else{
      s.activeSubject.book=bookVal;
      s.activeSubject.course=bookVal;
      s.activeSubject.week=weekNum;
      s.activeSubject.weekTitle=weekTitle;
      s.activeSubject.topic=topicVal;
      s.activeSubject.level=levelVal;
      s.activeSubject.createdBy=instructorVal;
      s.activeSubject.questions=validQuestions;
      s.questions=validQuestions;
      
      saveSubjects([s.activeSubject]);
      applySubjectSwitch(s.activeSubject,false);

      const shouldSync = $("#recUploadMongo") && $("#recUploadMongo").checked;
      if (shouldSync && MONGO_API_URL) {
        toast(`✓ Updated "${bookVal}" with ${validQuestions.length} MCQs — syncing to cloud...`);
        uploadRecordToMongo(s.activeSubject);
      } else {
        toast(`✓ Updated "${bookVal}" with ${validQuestions.length} MCQs locally.`);
      }
    }
  };
}

function handleFileImport(e){
  const file=e.target.files&&e.target.files[0];
  if(!file)return;
  
  if(file.size>15*1024*1024){
    toast("File is too large (max 15MB)",true);
    if($("#file"))$("#file").value="";
    return;
  }
  
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const rawText=reader.result;
      let parsed;
      try{
        parsed=JSON.parse(rawText);
      }catch(jsonErr){
        throw Error("File is not a valid JSON document ("+jsonErr.message+")");
      }
      
      let rawList=[];
      let detectedMeta={};
      if(Array.isArray(parsed)){
        rawList=parsed;
      }else if(parsed&&typeof parsed==="object"){
        const qbRoot = parsed.questionBank || parsed.metadata || parsed;
        detectedMeta={
          book: qbRoot.book || qbRoot.subject || qbRoot.title || qbRoot.courseCode,
          course: qbRoot.course || qbRoot.subject || qbRoot.courseCode,
          week: qbRoot.week || qbRoot.weekNo,
          weekTitle: qbRoot.weekTitle || qbRoot.section || (qbRoot.weekNo ? "Week " + String(qbRoot.weekNo).padStart(2, "0") : (qbRoot.week ? "Week " + String(qbRoot.week).padStart(2, "0") : "")),
          topic: qbRoot.topic || qbRoot.syllabusCoverage || qbRoot.title,
          level: qbRoot.level || qbRoot.class || qbRoot.program,
          createdBy: qbRoot.createdBy || qbRoot.preparedBy || qbRoot.author || qbRoot.instructor || qbRoot.lecturer
        };
        if(Array.isArray(parsed.mcqs)) rawList=parsed.mcqs;
        else if(Array.isArray(parsed.questions)) rawList=parsed.questions;
        else if(Array.isArray(parsed.data)) rawList=parsed.data;
        else if(Array.isArray(parsed.items)) rawList=parsed.items;
        else if(Array.isArray(qbRoot.mcqs)) rawList=qbRoot.mcqs;
        else if(Array.isArray(qbRoot.questions)) rawList=qbRoot.questions;
        else if(Array.isArray(qbRoot.data)) rawList=qbRoot.data;
        else if(Array.isArray(qbRoot.items)) rawList=qbRoot.items;
        else throw Error("JSON object must have an array of questions under a 'mcqs' or 'questions' key.");
      }else{
        throw Error("JSON must be an array of questions or an object with a 'mcqs' or 'questions' array.");
      }
      
      if(!rawList.length){
        throw Error("The imported JSON file contains no questions.");
      }
      
      const validQuestions=[];
      const skippedErrors=[];
      
      rawList.forEach((q,idx)=>{
        const num=idx+1;
        if(!q||typeof q!=="object"){
          skippedErrors.push(`Item #${num}: Invalid question object.`);
          return;
        }
        
        const prompt=(q.question||q.prompt||q.text||q.title||"").trim();
        if(!prompt){
          skippedErrors.push(`Item #${num}: Missing question prompt.`);
          return;
        }
        
        let rawOpts=q.options||q.choices||q.answers;
        let options=[];
        let isCorrectIdx=-1;

        if(Array.isArray(rawOpts)){
          options=rawOpts.map(o=>optText(o).trim()).filter(Boolean);
          isCorrectIdx=rawOpts.findIndex(o=>o&&typeof o==="object"&&(o.isCorrect===true||o.correct===true));
        }else if(rawOpts&&typeof rawOpts==="object"){
          options=Object.values(rawOpts).map(o=>optText(o).trim()).filter(Boolean);
        }
        
        if(options.length<2){
          skippedErrors.push(`Item #${num}: Requires at least 2 options (found ${options.length}).`);
          return;
        }
        
        let rawAns=q.answer!==undefined?q.answer:(q.correctOptionIndex!==undefined?q.correctOptionIndex:(q.correctIndex!==undefined?q.correctIndex:(q.correct_answer!==undefined?q.correct_answer:(q.correctAnswer!==undefined?q.correctAnswer:q.correct))));
        let answerIdx=0;
        
        if(isCorrectIdx>=0&&isCorrectIdx<options.length){
          answerIdx=isCorrectIdx;
        }else if(typeof rawAns==="number"){
          if(rawAns>=0&&rawAns<options.length){
            answerIdx=rawAns;
          }else if(rawAns>=1&&rawAns<=options.length){
            answerIdx=rawAns-1;
          }
        }else if(typeof rawAns==="string"){
          const cleanAns=rawAns.trim();
          const upper=cleanAns.toUpperCase();
          const letterIdx=upper.length===1?upper.charCodeAt(0)-65:-1;
          if(letterIdx>=0&&letterIdx<options.length){
            answerIdx=letterIdx;
          }else{
            const matched=options.findIndex(o=>o.toLowerCase()===cleanAns.toLowerCase());
            if(matched!==-1){
              answerIdx=matched;
            }else if(!isNaN(Number(cleanAns))){
              let n=Number(cleanAns);
              if(n>=0&&n<options.length) answerIdx=n;
              else if(n>=1&&n<=options.length) answerIdx=n-1;
            }
          }
        }
        
        validQuestions.push({
          id:num,
          subject:q.subject||detectedMeta.book||"Imported Course",
          chapter:q.chapter||detectedMeta.topic||"General",
          topic:q.topic||detectedMeta.topic||"General",
          difficulty:q.difficulty||"Medium",
          question:prompt,
          options:options,
          answer:answerIdx,
          explanation:(q.explanation||q.explain||q.reason||"").trim(),
          type:"single"
        });
      });
      
      if(!validQuestions.length){
        modal(`<h2>Import Failed</h2>
<p style="color:var(--r);font-size:13px;line-height:1.5;">Could not find any valid questions in <b>${esc(file.name)}</b>.</p>
<div style="max-height:200px;overflow-y:auto;background:var(--card-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;margin:12px 0;">
  <b>Errors detected:</b>
  <ul style="margin:6px 0 0 16px;padding:0;">${skippedErrors.map(e=>`<li>${esc(e)}</li>`).join("")}</ul>
</div>
<div class="modalActions"><button class="primary" onclick="closeModal()">OK</button></div>`);
        return;
      }
      
      promptAddBookRecord(detectedMeta, validQuestions, file.name);

    }catch(err){
      modal(`<h2>Import Error</h2>
<p style="color:var(--r);font-size:13px;line-height:1.5;">${esc(err.message)}</p>
<p style="font-size:12px;color:var(--m);margin-top:10px;">Expected JSON format is either an array of questions or an object with <code>mcqs</code> / <code>questions</code> and book details.</p>
<div class="modalActions"><button class="primary" onclick="closeModal()">OK</button></div>`);
    }finally{
      if($("#file"))$("#file").value="";
    }
  };
  reader.onerror=()=>{
    toast("Failed to read the chosen file",true);
    if($("#file"))$("#file").value="";
  };
  reader.readAsText(file);
}

function confirmRestoreDefaults(){
  modal(`<h2>Reset to Built-in Books?</h2>
<p style="font-size:13px;line-height:1.5;">Are you sure you want to reset your catalog to the built-in books (<b>Theory of Automata</b>, <b>Computer Architecture</b>, <b>Object-Oriented Programming (ADP Sem 2)</b>, and <b>Database Systems</b>)?</p>
<p style="font-size:12px;color:var(--m);margin-top:8px;">Custom imported books will be removed.</p>
<div class="modalActions">
  <button class="secondary" onclick="closeModal()">Cancel</button>
  <button class="danger" id="okRestore">Yes, Reset Catalog</button>
</div>`);
  $("#okRestore").onclick=()=>{
    closeModal();
    discardSession();
    localStorage.removeItem(K.subjects);
    localStorage.removeItem(K.activeSubject);
    localStorage.removeItem(K.questions);
    s.subjects=DEFAULT_SUBJECTS.map(sub=>({...sub,questions:[...sub.questions]}));
    applySubjectSwitch(s.subjects[0],false);
    toast("Reset catalog to built-in course books.");
  };
}

// Expose functions globally for inline HTML event handlers (e.g. onclick in dynamic markup)
window.start = start;
window.switchSubject = switchSubject;
window.deleteCustomSubject = deleteCustomSubject;
window.editCustomSubject = editCustomSubject;
window.closeModal = closeModal;
window.close = closeModal;
window.confirmSubmit = confirmSubmit;
window.resumeActiveExam = resumeActiveExam;
window.logoutStudent = logoutStudent;
window.openStartModal = openStartModal;
window.openBriefingModal = openBriefingModal;
window.beginExamNow = beginExamNow;
window.openBookDetail = openBookDetail;
window.closeBookDetail = closeBookDetail;
window.studyWeekInQBank = studyWeekInQBank;
window.clearQBankFilter = clearQBankFilter;
window.resetQBankFilters = resetQBankFilters;
window.setQBankPage = setQBankPage;
window.renderQuestionBank = renderQuestionBank;
window.editBook = editBook;
window.deleteBook = deleteBook;
window.deleteFromMongo = deleteFromMongo;

// 1. Navigation & Click Delegation
document.addEventListener("click", e => {
  let g = e.target.closest("[data-go]");
  if (g) {
    let target = g.dataset.go;
    if (target === "results") {
      if (s.result) {
        ["home", "subjects", "tools"].forEach(x => $("#" + x)?.classList.remove("hidden"));
        $("#results")?.classList.remove("hidden");
        go("results");
      } else {
        toast("No examination result found. Please start an exam first.");
      }
    } else if (target === "qbank") {
      main();
      go("subjects");
    } else if (target === "subjects") {
      main();
      if (g.textContent.includes("View Subject")) {
        if (s.activeSubject) {
          openBookDetail(getBookGroupKey(s.activeSubject));
        } else {
          closeBookDetail();
        }
      } else {
        closeBookDetail();
      }
      go("subjects");
    } else {
      main();
      go(target);
    }
  }
  let b = e.target.closest("[data-b]");
  if (b) {
    s.bankAns[b.dataset.b] = +b.dataset.o;
    render();
    toast("Answer saved");
  }
  let bm = e.target.closest("[data-bm]");
  if (bm) {
    let id = +bm.dataset.bm;
    s.bm.has(id) ? s.bm.delete(id) : s.bm.add(id);
    store(K.bm, JSON.stringify([...s.bm]));
    if ($("#bmInfo")) $("#bmInfo").textContent = s.bm.size + " bookmarked questions";
    render();
  }
});

// 2. Dark / Light Mode Theme Toggle
function initTheme() {
  const currentTheme = read(K.theme, "light");
  document.documentElement.dataset.theme = currentTheme;
  const themeBtn = $("#theme");
  if (themeBtn) {
    themeBtn.textContent = currentTheme === "dark" ? "☀" : "☾";
    themeBtn.title = currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    themeBtn.onclick = () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      store(K.theme, nextTheme);
      themeBtn.textContent = nextTheme === "dark" ? "☀" : "☾";
      themeBtn.title = nextTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
      toast(nextTheme === "dark" ? "Dark Mode enabled ☾" : "Light Mode enabled ☀");
    };
  }
}
initTheme();

// 3. Mobile Navigation Drawer Toggle & Candidate Profile Trigger
if ($("#menu")) {
  $("#menu").onclick = () => $("#drawer")?.classList.toggle("drawerOpen");
}
if ($("#userBadge")) {
  $("#userBadge").onclick = (e) => {
    if (e.target && e.target.id === "logoutBtn") return;
    if (window.innerWidth <= 768) {
      $("#drawer")?.classList.toggle("drawerOpen");
    }
  };
}

// 4. Examination Start & Resume Buttons
[$$("#startTop"), $$("#startHero"), $$("#startSubject"), $$("#drawerStartBtn")].flat().forEach(b => {
  if (b) {
    b.onclick = () => {
      if ($("#drawer")) $("#drawer").classList.remove("drawerOpen");
      start();
    };
  }
});

// 5. Exam In-Progress Banner Resume Button
if ($("#bannerResumeBtn")) {
  $("#bannerResumeBtn").onclick = resumeActiveExam;
}

// 6. Sidebar Examination Submission Button
if ($("#submit")) {
  $("#submit").onclick = confirmSubmit;
}

// 7. Results Actions (Print & Retake)
if ($("#print")) $("#print").onclick = () => window.print();
if ($("#printTop")) $("#printTop").onclick = () => window.print();
if ($("#again")) $("#again").onclick = () => { discardSession(); openStartModal(); };
if ($("#againTop")) $("#againTop").onclick = () => { discardSession(); openStartModal(); };

// 8. Student Credentials & Logout Buttons
if ($("#logoutBtn")) $("#logoutBtn").onclick = logoutStudent;
if ($("#drawerLogoutBtn")) $("#drawerLogoutBtn").onclick = () => {
  logoutStudent();
  $("#drawer")?.classList.remove("drawerOpen");
};

// 9. Modal Dismissal (Close Button, Backdrop Click, Escape Key)
if ($("#close")) $("#close").onclick = closeModal;
if ($("#modal")) {
  $("#modal").onclick = e => {
    if (e.target.id === "modal") closeModal();
  };
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
  if (e.key === "Enter" && !$("#modal")?.classList.contains("hidden")) {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.tagName === "BUTTON")) return;
    const contBtn = $("#continueToExam");
    if (contBtn && document.contains(contBtn)) {
      e.preventDefault();
      contBtn.click();
    }
  }
});

// ==========================================================================
// MongoDB Atlas Data API — works on GitHub Pages & any device (no local server needed)
// HOW TO SET UP (one-time):
//   1. Go to https://cloud.mongodb.com → App Services → Create App
//   2. Enable "Data API" → copy the App ID and Endpoint URL
//   3. Create an API Key (Authentication → API Keys)
//   4. Fill in the three constants below — that's it!
// ==========================================================================
const ATLAS_APP_ID    = "";          // e.g. "myapp-abcde"
const ATLAS_API_KEY   = "";          // e.g. "abc123xyz..."
const ATLAS_DATA_URL  = "";          // e.g. "https://data.mongodb-api.com/app/myapp-abcde/endpoint/data/v1"
const ATLAS_DATABASE  = "mcqs_bank"; // your DB name in Atlas
const ATLAS_COLLECTION = "subjects"; // collection name

// Whether Atlas Data API is properly configured
const ATLAS_ENABLED = !!(ATLAS_APP_ID && ATLAS_API_KEY && ATLAS_DATA_URL);

// Dynamic Server URL (supports local server and custom configurations)
let MONGO_API_URL = "";
try {
  MONGO_API_URL = localStorage.getItem("CUSTOM_MONGO_API_URL") || "";
} catch {}

if (!MONGO_API_URL && typeof window !== "undefined" && window.location) {
  if (window.location.port === "3000" || window.location.port === 3000) {
    MONGO_API_URL = `${window.location.origin}/api`;
  } else if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname.startsWith("192.168.") || window.location.hostname.startsWith("10.")) {
    MONGO_API_URL = `${window.location.protocol}//${window.location.hostname}:3000/api`;
  }
}

function resolveDataUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (typeof window === "undefined" || !window.location) return url;

  const origin = window.location.origin;
  let pathname = window.location.pathname;

  if (pathname.endsWith(".html") || pathname.endsWith(".htm")) {
    pathname = pathname.substring(0, pathname.lastIndexOf("/") + 1);
  } else if (!pathname.endsWith("/")) {
    pathname = pathname + "/";
  }

  const cleanRelative = url.startsWith("./") ? url.substring(2) : (url.startsWith("/") ? url.substring(1) : url);
  return `${origin}${pathname}${cleanRelative}`;
}

const STATIC_CATALOG_URLS = [
  "data/bscs_oop_week01.json",
  "data/bscs_oop_week02.json",
  "data/adp_cs_sem2_oop_week03.json",
  "data/bscs_oop_week04.json",
  "data/bscs_theory_of_automata_week02.json",
  "data/bscs_computer_architecture_week01.json",
  "data/bscs_database_systems_week02.json"
];

function parseAndNormalizeJSON(parsed, fallbackName = "") {
  let rawList = [];
  let meta = {};

  if (Array.isArray(parsed)) {
    rawList = parsed;
    const first = rawList[0] || {};
    const chapterStr = String(first.chapter || first.topic || "Week 1");
    const weekNum = parseInt(chapterStr.replace(/\D/g, "")) || 1;
    const weekTitle = chapterStr.toLowerCase().startsWith("week") ? chapterStr : `Week ${weekNum}`;
    meta = {
      book: first.subject || first.course || "Object-Oriented Programming",
      course: first.course || first.subject || "Object-Oriented Programming",
      week: weekNum,
      weekTitle: weekTitle,
      topic: first.topic || first.chapter || "Course Review",
      level: first.level || "BS Computer Science",
      createdBy: first.createdBy || "Course Instructor"
    };
  } else if (parsed && typeof parsed === "object") {
    const root = parsed.questionBank || parsed.metadata || parsed;
    const weekNum = Number(root.week || root.weekNo) || 1;
    meta = {
      book: root.book || root.subject || root.title || root.courseCode || "Course Book",
      course: root.course || root.subject || root.courseCode || "Computer Science",
      week: weekNum,
      weekTitle: root.weekTitle || root.section || (root.week ? `Week ${root.week}` : `Week ${weekNum}`),
      topic: root.topic || root.syllabusCoverage || root.title || "Course Review",
      level: root.level || root.class || root.program || "BS Computer Science",
      createdBy: root.createdBy || root.preparedBy || root.author || "Course Instructor"
    };
    if (Array.isArray(parsed.mcqs)) rawList = parsed.mcqs;
    else if (Array.isArray(parsed.questions)) rawList = parsed.questions;
    else if (Array.isArray(root.mcqs)) rawList = root.mcqs;
    else if (Array.isArray(root.questions)) rawList = root.questions;
    else if (Array.isArray(root.data)) rawList = root.data;
    else if (Array.isArray(root.items)) rawList = root.items;
  }

  const validQuestions = [];
  rawList.forEach((q, idx) => {
    if (!q || typeof q !== "object") return;
    const prompt = (q.question || q.prompt || q.text || q.title || "").trim();
    if (!prompt) return;

    let rawOpts = q.options || q.choices || q.answers;
    let options = [];
    if (Array.isArray(rawOpts)) {
      options = rawOpts.map(o => typeof o === "object" && o ? (o.text || o.option || JSON.stringify(o)) : String(o)).filter(Boolean);
    } else if (rawOpts && typeof rawOpts === "object") {
      options = Object.values(rawOpts).map(o => typeof o === "object" && o ? (o.text || o.option || JSON.stringify(o)) : String(o)).filter(Boolean);
    }
    if (options.length < 2) return;

    let rawAns = q.answer !== undefined ? q.answer : (q.correctOptionIndex !== undefined ? q.correctOptionIndex : (q.correctIndex !== undefined ? q.correctIndex : 0));
    let answerIdx = 0;
    if (typeof rawAns === "number" && rawAns >= 0 && rawAns < options.length) {
      answerIdx = rawAns;
    } else if (typeof rawAns === "string") {
      const letterIdx = ["A", "B", "C", "D", "E"].indexOf(rawAns.trim().toUpperCase());
      if (letterIdx >= 0 && letterIdx < options.length) {
        answerIdx = letterIdx;
      } else {
        const found = options.findIndex(o => o.toLowerCase() === rawAns.trim().toLowerCase());
        if (found >= 0) answerIdx = found;
      }
    }

    validQuestions.push({
      id: idx + 1,
      subject: meta.book,
      chapter: meta.topic,
      topic: meta.topic,
      difficulty: q.difficulty || "Easy",
      question: prompt,
      options: options,
      answer: answerIdx,
      explanation: (q.explanation || q.explain || "").trim(),
      type: "single"
    });
  });

  const slug = (meta.book + "-" + (meta.weekTitle || `week-${meta.week}`)).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return {
    id: slug,
    book: meta.book,
    course: meta.course,
    week: meta.week,
    weekTitle: meta.weekTitle,
    topic: meta.topic,
    level: meta.level,
    createdBy: meta.createdBy,
    icon: "📚",
    isBuiltIn: false,
    totalQuestions: validQuestions.length,
    questions: validQuestions
  };
}

async function checkMongoStatus(quiet = false) {
  const badge = $("#mongoStatusBadge");
  const info = $("#mongoSyncInfo");
  if (!badge) return;

  if (MONGO_API_URL) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 2500);
      const res = await fetch(`${MONGO_API_URL}/status`, { signal: ctrl.signal });
      clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        badge.textContent = `✓ Connected (${data.subjectsCount} Books)`;
        badge.className = "tag success";
        if (info) {
          info.innerHTML = `Connected to MongoDB Atlas (<code>${data.cluster}</code>). Database: <b>${data.database}</b> (${data.subjectsCount} books, ${data.questionsCount} MCQs).`;
        }
        return data;
      }
    } catch {}
  }

  // Fallback for static website hosting (GitHub Pages) or when local server is off
  badge.textContent = `✓ Cloud Catalog Ready`;
  badge.className = "tag success";
  if (info) {
    info.innerHTML = `Website running with verified static JSON course catalog (7 Books ready). Local MongoDB Atlas API server can be started with <code>node server.js</code>.`;
  }
  return null;
}

async function uploadRecordToMongo(subjectRecord) {
  if (!MONGO_API_URL) return;
  try {
    const res = await fetch(`${MONGO_API_URL}/upload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subjectRecord)
    });
    const data = await res.json();
    if (data.success) {
      toast(`✓ Synced "${subjectRecord.book}" to MongoDB Atlas!`);
      checkMongoStatus(true);
    }
  } catch (err) {
    console.log("Local MongoDB server not running on port 3000:", err.message);
  }
}

async function syncBooksFromWebsiteData(silent = false) {
  let loaded = 0;
  
  // Dynamically load the catalog list if available
  let dynamicCatalog = [];
  try {
    const catalogRes = await fetch(resolveDataUrl("data/catalog.json"));
    if (catalogRes.ok) {
      dynamicCatalog = await catalogRes.json();
    }
  } catch (e) {
    console.log("No dynamic catalog found, using static defaults.");
  }

  // Merge dynamic catalog with static defaults, removing duplicates
  const allUrls = [...new Set([...STATIC_CATALOG_URLS, ...dynamicCatalog])];

  for (const rawUrl of allUrls) {
    try {
      const url = resolveDataUrl(rawUrl);
      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        const norm = parseAndNormalizeJSON(raw, url);
        if (norm && norm.questions && norm.questions.length) {
          const idx = s.subjects.findIndex(x => 
            x.id === norm.id || 
            (x.book && x.book.trim().toLowerCase() === norm.book.trim().toLowerCase() && Number(x.week) === Number(norm.week))
          );
          if (idx !== -1) {
            const prevIcon = s.subjects[idx].icon;
            s.subjects[idx] = { ...s.subjects[idx], ...norm, icon: prevIcon || norm.icon || "📚", isBuiltIn: true };
          } else {
            s.subjects.push({ ...norm, isBuiltIn: true });
          }
          loaded++;
        }
      }
    } catch {}
  }

  if (loaded > 0) {
    s.subjects = s.subjects.filter(sub => !(sub.id === "custom-question-bank-week-01" || (!sub.isBuiltIn && sub.totalQuestions === 0 && (!sub.questions || sub.questions.length === 0))));
    saveSubjects();
    renderSubjects();
    updateHeroSubjectUI();
    updateTranscriptSubjectUI(s.activeSubject);
    updateQuestionCountUI();
    render();
    if (!silent) toast(`✓ Synced ${loaded} course books from website data catalog!`);
    go("subjects");
  } else if (!silent) {
    toast("All course books are already up to date.");
  }
  return loaded;
}

async function syncBooksFromMongo(silent = false) {
  if (MONGO_API_URL) {
    if (!silent) toast("Connecting to MongoDB Atlas...");
    try {
      const res = await fetch(`${MONGO_API_URL}/subjects`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.subjects && data.subjects.length) {
          let addedCount = 0;
          let updatedCount = 0;
          for (const sub of data.subjects) {
            const fullRes = await fetch(`${MONGO_API_URL}/subjects/${sub.id}`);
            if (fullRes.ok) {
              const fullData = await fullRes.json();
              if (fullData.success && fullData.subject) {
                const freshSub = fullData.subject;
                const idx = s.subjects.findIndex(existing => 
                  existing.id === freshSub.id || 
                  (existing.book && existing.book.trim().toLowerCase() === freshSub.book.trim().toLowerCase() && Number(existing.week) === Number(freshSub.week))
                );

                if (idx !== -1) {
                  const prevIcon = s.subjects[idx].icon;
                  s.subjects[idx] = {
                    ...s.subjects[idx],
                    ...freshSub,
                    icon: prevIcon || freshSub.icon || "📚"
                  };
                  if (s.activeSubjectId === s.subjects[idx].id || (s.activeSubject && s.activeSubject.book.trim().toLowerCase() === freshSub.book.trim().toLowerCase() && Number(s.activeSubject.week) === Number(freshSub.week))) {
                    s.activeSubject = s.subjects[idx];
                    s.activeSubjectId = s.subjects[idx].id;
                    s.questions = s.subjects[idx].questions || [];
                  }
                  updatedCount++;
                } else {
                  s.subjects.push(freshSub);
                  addedCount++;
                }
              }
            }
          }

          s.subjects = s.subjects.filter(sub => !(sub.id === "custom-question-bank-week-01" || (!sub.isBuiltIn && sub.totalQuestions === 0 && (!sub.questions || sub.questions.length === 0))));

          saveSubjects();
          renderSubjects();
          updateHeroSubjectUI();
          updateTranscriptSubjectUI(s.activeSubject);
          updateQuestionCountUI();
          render();
          checkMongoStatus(true);

          if (!silent) {
            toast(`✓ Synced with MongoDB Atlas! (${data.subjects.length} books total)`);
            go("subjects");
          }
          return;
        }
      }
    } catch (err) {
      console.log("MongoDB API not reachable on this host, falling back to website static data:", err.message);
    }
  }

  // Fallback to website static data files (GitHub Pages mode or when server is off)
  if (!silent) toast("Loading verified books from website data catalog...");
  await syncBooksFromWebsiteData(silent);
}

function handleMongoFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const parsed = JSON.parse(reader.result);

      // 1. Immediately normalize and load into local website catalog
      const norm = parseAndNormalizeJSON(parsed, file.name);
      if (norm && norm.questions && norm.questions.length) {
        const idx = s.subjects.findIndex(x => 
          x.id === norm.id || 
          (x.book && x.book.trim().toLowerCase() === norm.book.trim().toLowerCase() && Number(x.week) === Number(norm.week))
        );
        if (idx !== -1) {
          const prevIcon = s.subjects[idx].icon;
          s.subjects[idx] = { ...s.subjects[idx], ...norm, icon: prevIcon || norm.icon || "📚" };
          s.activeSubject = s.subjects[idx];
          s.activeSubjectId = s.subjects[idx].id;
          s.questions = s.subjects[idx].questions;
        } else {
          s.subjects.push(norm);
          s.activeSubject = norm;
          s.activeSubjectId = norm.id;
          s.questions = norm.questions;
        }

        saveSubjects();
        renderSubjects();
        updateHeroSubjectUI();
        updateTranscriptSubjectUI(s.activeSubject);
        updateQuestionCountUI();
        render();
        go("subjects");
      }

      // 2. If MongoDB API is accessible, sync to cloud database as well
      if (MONGO_API_URL) {
        toast("Uploading JSON to MongoDB Atlas...");
        try {
          const res = await fetch(`${MONGO_API_URL}/upload`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed)
          });
          const data = await res.json();
          if (data.success) {
            toast(data.message || `✓ Successfully uploaded to MongoDB Atlas!`);
            checkMongoStatus(true);
            return;
          }
        } catch (apiErr) {
          console.log("MongoDB API upload skipped (server offline):", apiErr.message);
        }
      }

      if (norm && norm.questions && norm.questions.length) {
        toast(`✓ Loaded "${norm.book}" (${norm.weekTitle}) with ${norm.questions.length} MCQs!`);
      }
    } catch (err) {
      toast("Error reading JSON file: " + err.message, true);
    } finally {
      if ($("#mongoFileInput")) $("#mongoFileInput").value = "";
    }
  };
  reader.readAsText(file);
}

function openDirectLinkModal() {
  const verifiedLinks = [
    { name: "Object-Oriented Programming (Week 01)", url: "data/bscs_oop_week01.json", desc: "20 MCQs • Structured vs OOP, Objects, Classes, State & Behavior" },
    { name: "Object-Oriented Programming (Week 02)", url: "data/bscs_oop_week02.json", desc: "20 MCQs • UML Class Diagrams, Noun/Verb Analysis, CRC Cards" },
    { name: "Object-Oriented Programming (Week 03 — ADP)", url: "data/adp_cs_sem2_oop_week03.json", desc: "20 MCQs • Classes, Methods, Namespaces, Parameters" },
    { name: "Object-Oriented Programming (Week 04)", url: "data/bscs_oop_week04.json", desc: "20 MCQs • Constructors, Encapsulation, Access Specifiers" },
    { name: "Theory of Automata (Week 02)", url: "data/bscs_theory_of_automata_week02.json", desc: "40 MCQs • Regular Expressions & Recursive Definitions" },
    { name: "Computer Architecture and Organization (Week 01)", url: "data/bscs_computer_architecture_week01.json", desc: "39 MCQs • Digital Logic & Hardware Overview" },
    { name: "Database Systems (Week 02)", url: "data/bscs_database_systems_week02.json", desc: "39 MCQs • Three-Level Schema Architecture & Data Independence" }
  ];

  modal(`<h2>Load Questions via Direct JSON Link</h2>
<p style="font-size:13px;line-height:1.5;color:var(--m);margin-bottom:12px;">Enter the direct web URL of any question bank JSON file, or select from verified course modules below:</p>

<div style="display:flex;flex-direction:column;gap:12px;">
  <label style="display:flex;flex-direction:column;gap:6px;font-size:12.5px;font-weight:600;">
    JSON File Direct URL or Relative Path:
    <div style="display:flex;gap:8px;">
      <input id="directJsonUrlInput" type="text" placeholder="e.g. data/oop_bscs_week01.json or https://..." style="flex:1;padding:8px 12px;font-size:13px;border-radius:var(--radius-sm);border:1px solid var(--line);background:var(--card);color:var(--t);">
      <button id="fetchDirectUrlBtn" class="primary" style="padding:8px 16px;white-space:nowrap;">Load &amp; Display</button>
    </div>
  </label>

  <div style="border-top:1px solid var(--line);padding-top:12px;margin-top:4px;">
    <b style="font-size:12.5px;color:var(--t);display:block;margin-bottom:8px;">Verified Course Modules (Click to load):</b>
    <div style="display:flex;flex-direction:column;gap:6px;max-height:220px;overflow-y:auto;padding-right:4px;">
      ${verifiedLinks.map(link => `
        <div class="directLinkItem" data-url="${link.url}" style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--card-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);cursor:pointer;">
          <div>
            <div style="font-weight:600;font-size:12.5px;color:var(--t);">${link.name}</div>
            <div style="font-size:11px;color:var(--m);">${link.desc}</div>
          </div>
          <button type="button" class="secondary" style="font-size:11px;padding:4px 10px;pointer-events:none;">Load ➔</button>
        </div>
      `).join("")}
    </div>
  </div>
</div>
<div class="modalActions" style="margin-top:16px;">
  <button class="secondary" onclick="closeModal()">Close</button>
</div>`);

  const input = $("#directJsonUrlInput");
  const fetchBtn = $("#fetchDirectUrlBtn");

  const doLoad = async (url) => {
    const targetUrl = (url || input?.value || "").trim();
    if (!targetUrl) {
      toast("Please enter or select a JSON URL", true);
      return;
    }
    toast(`Fetching: ${targetUrl}...`);
    try {
      const resolved = resolveDataUrl(targetUrl);
      const res = await fetch(resolved);
      if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch file`);
      const parsed = await res.json();
      const norm = parseAndNormalizeJSON(parsed, targetUrl);
      if (!norm || !norm.questions || !norm.questions.length) {
        throw new Error("No valid MCQs found in the fetched JSON document.");
      }

      const idx = s.subjects.findIndex(x => 
        x.id === norm.id || 
        (x.book && x.book.trim().toLowerCase() === norm.book.trim().toLowerCase() && Number(x.week) === Number(norm.week))
      );
      if (idx !== -1) {
        const prevIcon = s.subjects[idx].icon;
        s.subjects[idx] = { ...s.subjects[idx], ...norm, icon: prevIcon || norm.icon || "📚" };
        s.activeSubject = s.subjects[idx];
        s.activeSubjectId = s.subjects[idx].id;
        s.questions = s.subjects[idx].questions;
      } else {
        s.subjects.push(norm);
        s.activeSubject = norm;
        s.activeSubjectId = norm.id;
        s.questions = norm.questions;
      }

      saveSubjects([s.activeSubject]);
      renderSubjects();
      updateHeroSubjectUI();
      updateTranscriptSubjectUI(s.activeSubject);
      updateQuestionCountUI();
      render();
      closeModal();
      toast(`✓ Loaded "${norm.book}" (${norm.weekTitle}) — ${norm.questions.length} MCQs — syncing to cloud...`);
      go("subjects");
      uploadRecordToMongo(norm);
    } catch (err) {
      toast("Failed to load JSON link: " + err.message, true);
    }
  };

  if (fetchBtn) fetchBtn.onclick = () => doLoad();
  $$(".directLinkItem").forEach(el => {
    el.onclick = () => doLoad(el.dataset.url);
  });
}

// 10. Tools & Management Action Buttons
if ($("#import")) $("#import").onclick = () => $("#file")?.click();
if ($("#file")) $("#file").onchange = handleFileImport;
if ($("#export")) $("#export").onclick = () => exportQuestionsJSON();
if ($("#restoreDefaultQuestions")) $("#restoreDefaultQuestions").onclick = () => confirmRestoreDefaults();
if ($("#configureApiBtn")) $("#configureApiBtn").onclick = () => {
  const current = localStorage.getItem("CUSTOM_MONGO_API_URL") || "";
  const newUrl = prompt("Enter Custom Backend API URL (e.g. http://192.168.1.5:3000/api)\nLeave empty to use default local detection:", current);
  if (newUrl !== null) {
    if (newUrl.trim() === "") {
      localStorage.removeItem("CUSTOM_MONGO_API_URL");
      toast("Custom API URL removed. Using default configuration.");
    } else {
      localStorage.setItem("CUSTOM_MONGO_API_URL", newUrl.trim());
      toast("Custom API URL updated! Please reload the page.");
    }
    setTimeout(() => location.reload(), 1500);
  }
};
if ($("#addSubjectBtn")) $("#addSubjectBtn").onclick = () => $("#file")?.click();
if ($("#mongoUploadBtn")) $("#mongoUploadBtn").onclick = () => $("#mongoFileInput")?.click();
if ($("#mongoFileInput")) $("#mongoFileInput").onchange = handleMongoFileSelect;
if ($("#mongoSyncCatalogBtn")) $("#mongoSyncCatalogBtn").onclick = () => syncBooksFromMongo(false);
if ($("#loadDirectUrlBtn")) $("#loadDirectUrlBtn").onclick = () => openDirectLinkModal();
if ($("#mongoDirectUrlBtn")) $("#mongoDirectUrlBtn").onclick = () => openDirectLinkModal();
if ($("#importUrlBtn")) $("#importUrlBtn").onclick = () => openDirectLinkModal();

// Faculty Login Button — shows/hides the faculty tools panel
if ($("#facultyLoginBtn")) {
  $("#facultyLoginBtn").onclick = () => {
    const pin = prompt("Enter Faculty PIN to access instructor tools:");
    if (pin === null) return;
    if (pin.trim() === "Xa1234") {
      isFacultyLoggedIn = true;
      const container = $("#facultyToolsContainer");
      if (container) {
        container.classList.remove("hidden");
        container.style.display = "flex";
      }
      const btn = $("#facultyLoginBtn");
      if (btn) {
        btn.innerHTML = `<span class="facultyIcon">✅</span><span>Faculty Logged In</span>`;
        btn.style.background = "rgba(16,185,129,0.1)";
        btn.style.color = "#059669";
        btn.style.borderColor = "rgba(16,185,129,0.3)";
        btn.style.pointerEvents = "none";
      }
      toast("Faculty tools unlocked — admin controls now visible on each book card.");
      // Re-render subjects so admin toolbars appear on book cards
      renderSubjects();
      if (s.currentBookView) renderBookDetailView(s.currentBookView);
    } else {
      toast("Incorrect PIN. Access denied.", true);
    }
  };
}

// Footer Candidate Buttons
if ($("#footerBookmarksBtn")) {
  $("#footerBookmarksBtn").onclick = () => {
    if (!s.bm.size) { toast("No bookmarked questions", true); return; }
    const bms = s.questions.filter(q => s.bm.has(q.id));
    modal(`<h2>Bookmarked Questions (${bms.length})</h2><div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:12px;margin-top:16px;">${bms.map(q => card(q)).join("")}</div>`);
  };
}
if ($("#footerResetBtn")) {
  $("#footerResetBtn").onclick = () => $("#reset")?.click();
}

// Check MongoDB status & auto-sync if connected; otherwise quiet website sync
checkMongoStatus(true).then(stat => {
  if (stat && stat.connected) {
    syncBooksFromMongo(true);
  } else {
    syncBooksFromWebsiteData(true);
  }
});
if ($("#bookmarks")) $("#bookmarks").onclick = () => {
  if (!s.bm.size) {
    toast("No bookmarked questions", true);
    return;
  }
  let bms = s.questions.filter(q => s.bm.has(q.id));
  modal(`<h2>Bookmarked Questions (${bms.length})</h2><div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:12px;margin-top:16px;">${bms.map(q => card(q)).join("")}</div>`);
};
if ($("#reset")) $("#reset").onclick = () => {
  const isCustom = !!read(K.questions, "");
  modal(`<h2>Reset All Progress?</h2>
<p style="font-size:13px;line-height:1.5;">Select which items to reset:</p>
<div style="display:flex;flex-direction:column;gap:10px;margin:14px 0;font-size:13px;">
  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
    <input type="checkbox" id="resetExam" checked> Clear active examination & result
  </label>
  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
    <input type="checkbox" id="resetBookmarks" checked> Clear bookmarked questions
  </label>
  ${isCustom ? `<label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
    <input type="checkbox" id="resetBank"> Revert custom questions back to default (40 MCQs)
  </label>` : ""}
</div>
<div class="modalActions">
  <button class="secondary" id="no">Cancel</button>
  <button class="danger" id="ok">Reset Selected</button>
</div>`);
  $("#no").onclick = closeModal;
  $("#ok").onclick = () => {
    if ($("#resetExam")?.checked) {
      discardSession();
      localStorage.removeItem(K.result);
      s.result = null;
    }
    if ($("#resetBookmarks")?.checked) {
      localStorage.removeItem(K.bm);
      s.bm.clear();
      $("#bmInfo").textContent = "0 bookmarked questions";
    }
    if ($("#resetBank")?.checked) {
      localStorage.removeItem(K.questions);
      s.questions = [...questions];
    }
    closeModal();
    updateQuestionCountUI();
    render();
    updateExamStatusUI();
    toast("Selected items have been reset.");
  };
};

// 11. Initial Application Hydration
try {
  s.bm = new Set(JSON.parse(read(K.bm, "[]")));
} catch {}
if ($("#bmInfo")) $("#bmInfo").textContent = s.bm.size + " bookmarked questions";
render();

const initSt = getStudentSession();
if (initSt) {
  s.student = initSt;
  updateStudentUI(initSt);
}

// Restore saved result if available
try {
  const savedRes = JSON.parse(read(K.result, ""));
  if (savedRes && savedRes.total) {
    s.result = savedRes;
    results();
  }
} catch {}

renderSubjects();
updateHeroSubjectUI();
updateTranscriptSubjectUI(s.activeSubject);
updateQuestionCountUI();
updateExamStatusUI();

// ==========================================================================
// 12. Instructor Authorization for Import & Export
// ==========================================================================
const INSTRUCTOR_AUTH_CONFIG = {
  validEmails: [
    "iftkharxahid@gmail.com",
    "iftikharxahid@gmail.com",
    "iftikharzahid@gmail.com",
    "iftkharzahid@gmail.com"
  ],
  validPassword: "110022"
};

function isInstructorAuthenticated() {
  try {
    const sAuth = sessionStorage.getItem(K.instructorAuth);
    const lAuth = localStorage.getItem(K.instructorAuth);
    return sAuth === "true" || lAuth === "true";
  } catch {
    return false;
  }
}

function openFacultyAuthModal() {
  modal(`<h2>Faculty &amp; Instructor Authorization</h2>
<p style="font-size:12.5px;color:var(--m);margin-bottom:14px;line-height:1.45;">Enter authorized institutional instructor credentials to manage course question banks, import JSON units, and synchronize with MongoDB Atlas.</p>

<div id="modalFacultyErr" class="authError hidden" role="alert"></div>

<div style="display:flex;flex-direction:column;gap:12px;">
  <div class="authField">
    <label for="modalFacultyEmail">Instructor Institutional Email <span style="color:var(--r);font-weight:700;">*</span></label>
    <div class="authInputWrapper">
      <span class="authInputIcon">✉️</span>
      <input type="email" id="modalFacultyEmail" placeholder="e.g. IftkharXahid@gmail.com" autocomplete="username" spellcheck="false">
    </div>
  </div>

  <div class="authField">
    <label for="modalFacultyPassword">Security Password <span style="color:var(--r);font-weight:700;">*</span></label>
    <div class="authInputWrapper">
      <span class="authInputIcon">🔒</span>
      <input type="password" id="modalFacultyPassword" placeholder="Enter password" autocomplete="current-password">
      <button type="button" id="modalFacultyTogglePwd" class="authEyeBtn" title="Toggle password visibility">👁️</button>
    </div>
  </div>

  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-top:2px;">
    <label style="display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:var(--m);cursor:pointer;">
      <input type="checkbox" id="modalFacultyRemember" checked>
      <span>Remember credentials on this device</span>
    </label>
    <span style="font-size:11px;color:var(--m);">Authorized: <b>IftkharXahid@gmail.com</b></span>
  </div>
</div>

<div class="modalActions" style="margin-top:16px;">
  <button class="secondary" id="modalFacultyCancel" type="button">Cancel</button>
  <button class="primary" id="modalFacultySubmit" type="button">Unlock Management Tools →</button>
</div>`);

  const passInput = $("#modalFacultyPassword");
  const toggleBtn = $("#modalFacultyTogglePwd");
  const emailInput = $("#modalFacultyEmail");
  const errBox = $("#modalFacultyErr");

  if (toggleBtn && passInput) {
    toggleBtn.onclick = () => {
      const isPwd = passInput.type === "password";
      passInput.type = isPwd ? "text" : "password";
      toggleBtn.textContent = isPwd ? "🙈" : "👁️";
    };
  }

  if ($("#modalFacultyCancel")) $("#modalFacultyCancel").onclick = close;

  if ($("#modalFacultySubmit")) {
    $("#modalFacultySubmit").onclick = () => {
      const email = (emailInput?.value || "").trim().toLowerCase();
      const pwd = (passInput?.value || "").trim();

      const isEmailValid = INSTRUCTOR_AUTH_CONFIG.validEmails.some(e => e.toLowerCase() === email);
      const isPassValid = pwd === INSTRUCTOR_AUTH_CONFIG.validPassword;

      if (isEmailValid && isPassValid) {
        try {
          sessionStorage.setItem(K.instructorAuth, "true");
          sessionStorage.setItem(K.instructorUser, email);
          if ($("#modalFacultyRemember")?.checked) {
            localStorage.setItem(K.instructorAuth, "true");
            localStorage.setItem(K.instructorUser, email);
          }
        } catch {}

        close();
        updateInstructorAuthUI();
        toast("✓ Faculty authorization verified. Management tools unlocked.");
        go("tools");
      } else {
        if (errBox) {
          errBox.textContent = "⚠️ Invalid Email or Password. Please enter authorized instructor credentials.";
          errBox.classList.remove("hidden");
        }
        toast("⚠️ Invalid instructor credentials", true);
        if (!isEmailValid && emailInput) emailInput.focus();
        else if (passInput) passInput.focus();
      }
    };
  }

  if (emailInput) setTimeout(() => emailInput.focus(), 150);
}

function openFacultyActiveModal() {
  const userEmail = localStorage.getItem(K.instructorUser) || sessionStorage.getItem(K.instructorUser) || "IftkharXahid@gmail.com";
  modal(`<h2>Faculty Session Active</h2>
<div style="background:var(--g-subtle);border:1px solid var(--g-border);border-radius:var(--radius-sm);padding:12px 14px;margin:12px 0;font-size:12.5px;color:var(--g);line-height:1.5;">
  <div style="font-weight:700;display:flex;align-items:center;gap:6px;margin-bottom:4px;">
    <span>✅</span> <span>Authenticated as ${esc(userEmail)}</span>
  </div>
  <div>Full access to Question Bank Import, Syllabus Catalog Export, and MongoDB Atlas database synchronization.</div>
</div>
<div class="modalActions" style="gap:10px;flex-wrap:wrap;">
  <button class="secondary" id="facultyCloseActiveModal" type="button">Close</button>
  <button class="primary" id="facultyGoToolsBtn" type="button">⚙️ Open Management Tools</button>
  <button class="danger" id="facultyLockNowBtn" type="button">🔒 Lock Faculty Session</button>
</div>`);

  if ($("#facultyCloseActiveModal")) $("#facultyCloseActiveModal").onclick = close;
  if ($("#facultyGoToolsBtn")) {
    $("#facultyGoToolsBtn").onclick = () => {
      close();
      go("tools");
    };
  }
  if ($("#facultyLockNowBtn")) {
    $("#facultyLockNowBtn").onclick = () => {
      close();
      lockInstructorMode();
    };
  }
}

function updateInstructorAuthUI() {
  const isAuth = isInstructorAuthenticated();
  const lockedView = $("#instructorLockedView");
  const unlockedView = $("#instructorUnlockedView");
  const emailDisp = $("#instructorActiveEmail");
  const footerBtn = $("#footerFacultyAccessBtn");
  const footerIcon = $("#footerFacultyIcon");
  const footerText = $("#footerFacultyText");
  const drawerBtn = $("#drawerFacultyBtn");

  // Toggle visibility of restricted management tools (Import, MongoDB Cloud, Export)
  const restrictedTools = document.querySelectorAll(".facultyRestrictedTool");
  restrictedTools.forEach((card) => {
    if (isAuth) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  if (lockedView && unlockedView) {
    if (isAuth) {
      lockedView.classList.add("hidden");
      unlockedView.classList.remove("hidden");
      const userEmail = localStorage.getItem(K.instructorUser) || sessionStorage.getItem(K.instructorUser) || "IftkharXahid@gmail.com";
      if (emailDisp) emailDisp.textContent = userEmail;
    } else {
      lockedView.classList.remove("hidden");
      unlockedView.classList.add("hidden");
    }
  }

  if (footerBtn) {
    if (isAuth) {
      if (footerIcon) footerIcon.textContent = "✅";
      if (footerText) footerText.textContent = "Faculty Mode Active";
      footerBtn.classList.add("activeFaculty");
      footerBtn.title = "Faculty session active (Click to manage or lock)";
    } else {
      if (footerIcon) footerIcon.textContent = "🔐";
      if (footerText) footerText.textContent = "Faculty Access";
      footerBtn.classList.remove("activeFaculty");
      footerBtn.title = "Sign in with instructor credentials to access curriculum management";
    }
  }
}

function lockInstructorMode() {
  try {
    sessionStorage.removeItem(K.instructorAuth);
    sessionStorage.removeItem(K.instructorUser);
    localStorage.removeItem(K.instructorAuth);
    localStorage.removeItem(K.instructorUser);
  } catch {}
  updateInstructorAuthUI();
  toast("Instructor mode locked. Management tools secured.");
}

function requireInstructorAuth(actionFn) {
  if (!isInstructorAuthenticated()) {
    openFacultyAuthModal();
    toast("⚠️ Instructor authorization required", true);
    return false;
  }
  if (typeof actionFn === "function") actionFn();
  return true;
}

function initInstructorAuth() {
  const footerBtn = $("#footerFacultyAccessBtn");
  const toolsLoginBtn = $("#openFacultyLoginFromToolsBtn");
  const lockBtn = $("#instructorLockBtn");
  const bookmarksFooterBtn = $("#footerBookmarksBtn");
  const resetFooterBtn = $("#footerResetBtn");

  if (footerBtn) {
    footerBtn.onclick = () => {
      if (isInstructorAuthenticated()) {
        openFacultyActiveModal();
      } else {
        openFacultyAuthModal();
      }
    };
  }

  if (toolsLoginBtn) {
    toolsLoginBtn.onclick = openFacultyAuthModal;
  }

  if (lockBtn) lockBtn.onclick = lockInstructorMode;

  if (bookmarksFooterBtn) {
    bookmarksFooterBtn.onclick = () => $("#bookmarks")?.click();
  }

  if (resetFooterBtn) {
    resetFooterBtn.onclick = () => $("#reset")?.click();
  }

  updateInstructorAuthUI();
}

// ==========================================================================
// 13. Home Screen Official Mobile Application Announcement Pop-up Modal
// ==========================================================================
function showAppNoticeModal() {
  const modal = $("#appNoticeModal");
  if (!modal) return;
  try {
    const dismissed = localStorage.getItem("qb_mobile_notice_dismissed");
    const today = new Date().toISOString().slice(0, 10);
    if (dismissed === today) return;
  } catch {}
  modal.classList.remove("hidden");
}

function hideAppNoticeModal(remember = false) {
  const modal = $("#appNoticeModal");
  if (!modal) return;
  modal.classList.add("hidden");
  if (remember || $("#dontShowNoticeAgain")?.checked) {
    try {
      localStorage.setItem("qb_mobile_notice_dismissed", new Date().toISOString().slice(0, 10));
    } catch {}
  }
}

function initAppNoticeModal() {
  const closeBtn = $("#appNoticeCloseBtn");
  const dismissBtn = $("#appNoticeDismissBtn");
  const modal = $("#appNoticeModal");

  if (closeBtn) closeBtn.onclick = () => hideAppNoticeModal(false);
  if (dismissBtn) dismissBtn.onclick = () => hideAppNoticeModal(true);

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) hideAppNoticeModal(false);
    };
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      hideAppNoticeModal(false);
    }
  });

  // Automatically display announcement on home screen / page load
  setTimeout(showAppNoticeModal, 250);
}

// Initialize Feature Modules
initQuestionBankEvents();
initInstructorAuth();
initAppNoticeModal();

// Force scroll to top on load instead of centering
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);
