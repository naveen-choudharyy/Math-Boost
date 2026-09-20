/**
 * CENTRAL TEACHER CONFIGURATION
 * Single source of truth for contact details, batch info, academic credentials, and syllabus.
 * Update this file to modify phone number, links, fees, or schedule across the entire website.
 */

export const teacherConfig = {
  // --- Personal & Contact Information ---
  teacherName: "Naveen Choudhary",
  roleTitle: "Class 10 Mathematics Tutor",
  tagline: "Mathematics Made Clear.",
  
  // NOTE: Replace this placeholder with your real WhatsApp number including country code (e.g., "919876543210")
  whatsappNumber: "YOUR_WHATSAPP_NUMBER",
  email: "YOUR_EMAIL", // e.g. "naveen.choudhary@example.com" (Optional: only displayed if configured)
  instagram: "YOUR_INSTAGRAM", // e.g. "https://instagram.com/your_handle"
  youtube: "YOUR_YOUTUBE", // e.g. "https://youtube.com/@your_channel"
  teacherPhoto: "/images/naveen.jpg",

  // --- Verified Academic Credentials (Do not modify with unsupported claims) ---
  credentials: {
    class10Maths: "98/100",
    class10Overall: "95.80%",
    class12Maths: "95/100",
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    university: "Bennett University, Greater Noida",
    currentCGPA: "8.87",
  },

  // --- Program & Batch Details ---
  program: {
    title: "3 Months to Exam-Ready Mathematics",
    badge: "CLASS 10 MATHEMATICS • 3-MONTH EXAM PREPARATION BATCH",
    tagline: "Class 10 Maths preparation with concepts, practice, revision and personal guidance.",
    mainMessage:
      "A focused 3-month Mathematics preparation program designed to help Class 10 students strengthen concepts, practice systematically, identify mistakes and enter their examination with confidence.",
    duration: "3 Months",
    classMode: "Online",
    // Configurable placeholders
    batchStartDate: "YOUR_START_DATE", // If unconfigured, displayed as "Contact on WhatsApp for next batch date"
    batchSchedule: "YOUR_CLASS_SCHEDULE", // If unconfigured, displayed as "Flexible weekday / weekend batches"
    batchFee: "YOUR_FEE", // If unconfigured, displayed as "Fee details available on WhatsApp"
    trustLine: "Limited batch • Personal attention • Exam-focused preparation",
  },

  // --- Pre-filled WhatsApp Message Templates ---
  whatsappMessages: {
    hero: "Hi Naveen, I am interested in your 3-month Class 10 Maths batch.",
    program: "Hi Naveen, I would like to know more about the 3-month Class 10 Maths program.",
    enrollment: "Hi Naveen, I would like to enroll in the Class 10 Maths batch.",
    parent: "Hi Naveen, I am a parent interested in your Class 10 Maths program for my child.",
    demo: "Hi Naveen, I would like to attend a demo class.",
    fees: "Hi Naveen, I would like to know the fee details for the 3-month Class 10 Maths batch.",
    schedule: "Hi Naveen, I would like to ask about the class schedule for the 3-month batch.",
    chapterInquiry: (chapterTitle) => `Hi Naveen, I have a query regarding ${chapterTitle} preparation in the Class 10 Maths batch.`,
    default: "Hi Naveen, I would like to enquire about your Class 10 Mathematics 3-month batch.",
  },

  // --- What Students Will Get (10 Core Deliverables) ---
  deliverables: [
    {
      id: "concept-clarity",
      title: "Concept-focused teaching",
      description: "Deep dive into fundamental theorems and formulas so you actually understand 'why' before solving.",
    },
    {
      id: "chapter-prep",
      title: "Chapter-wise preparation",
      description: "Systematic progression covering every topic in the Class 10 syllabus with zero skipped steps.",
    },
    {
      id: "regular-practice",
      title: "Regular practice",
      description: "Handpicked problem sets from standard NCERT and reference patterns to solidify application.",
    },
    {
      id: "doubt-solving",
      title: "Doubt solving",
      description: "Direct doubt resolution so no question or confusing step remains unanswered.",
    },
    {
      id: "important-questions",
      title: "Important questions",
      description: "Targeted problem banks featuring high-frequency questions and standard board examination patterns.",
    },
    {
      id: "revision-support",
      title: "Revision support",
      description: "Structured periodic recaps to prevent forgetting earlier chapters as you advance through the syllabus.",
    },
    {
      id: "mock-tests",
      title: "Mock tests",
      description: "Timed section and full-syllabus tests under board examination conditions to build speed.",
    },
    {
      id: "mistake-analysis",
      title: "Mistake analysis",
      description: "Personalized breakdown of silly calculation errors, sign slips, and skipped procedural steps.",
    },
    {
      id: "exam-strategy",
      title: "Exam strategy",
      description: "Smart 3-hour paper planning, answer presentation formatting, and question-selection tactics.",
    },
    {
      id: "personal-guidance",
      title: "Personal guidance",
      description: "Direct mentorship and feedback tailored to each student's pace and specific learning needs.",
    },
  ],

  // --- 5-Step Teaching Method ---
  teachingMethod: [
    {
      step: "01",
      title: "UNDERSTAND",
      subtitle: "Learn the concept clearly",
      description: "We break down mathematical definitions, derivations, and formulas into intuitive, bite-sized ideas before touching a single exercise.",
    },
    {
      step: "02",
      title: "SOLVE",
      subtitle: "See how the concept is applied",
      description: "Observe step-by-step model problem solving, learning how to structure solutions properly according to CBSE/board marking guidelines.",
    },
    {
      step: "03",
      title: "PRACTICE",
      subtitle: "Solve progressively difficult questions",
      description: "Transition from basic NCERT questions to multi-step and higher-order application problems to build procedural confidence.",
    },
    {
      step: "04",
      title: "ANALYZE",
      subtitle: "Identify mistakes and weak areas",
      description: "Review test papers and assignments to pinpoint exactly where marks slip—whether calculation, conceptual gaps, or time management.",
    },
    {
      step: "05",
      title: "REVISE",
      subtitle: "Strengthen the concepts before the exam",
      description: "Continuous formula consolidation and quick-look revision sheets ensure zero last-minute panic when entering the exam hall.",
    },
  ],

  // --- 3-Month Program Timeline ---
  timeline: [
    {
      month: "MONTH 1",
      title: "Build the Foundation",
      subtitle: "Master fundamentals & core chapters",
      items: [
        "Strengthen concepts & algebraic manipulations",
        "Complete important chapters systematically",
        "Understand formula origins and derivations",
        "Solve fundamental NCERT problems with precision",
      ],
      tag: "Concepts & Core Syllabus",
    },
    {
      month: "MONTH 2",
      title: "Practice & Improve",
      subtitle: "Rigorous problem solving & board patterns",
      items: [
        "In-depth NCERT and exemplar problem practice",
        "Targeted important & recurring board-style questions",
        "Dedicated live doubt solving sessions",
        "Systematic mistake identification & step correction",
      ],
      tag: "Application & Doubt Resolution",
    },
    {
      month: "MONTH 3",
      title: "Revision & Exam Preparation",
      subtitle: "Timed testing, strategy & final readiness",
      items: [
        "Comprehensive full-syllabus revision cycles",
        "Full-length mock tests under real exam conditions",
        "3-hour paper presentation & time management techniques",
        "Targeted weak-area improvement & exam day strategy",
      ],
      tag: "Mock Tests & Exam Strategy",
    },
  ],

  // --- Student Problems / Pain Points ---
  studentProblems: [
    {
      quote: "I understand the chapter but struggle with questions.",
      insight: "Understanding a concept and knowing how to begin a question are two different skills. We practice the exact translation from word problem to algebraic equation.",
    },
    {
      quote: "I forget formulas during exams.",
      insight: "Rote memorization always breaks under exam pressure. We focus on formula derivations and visual associations so formulas stay rock-solid.",
    },
    {
      quote: "I make silly calculation mistakes.",
      insight: "Silly errors happen from disorganized rough work and rush. We introduce systematic self-check checkpoints at every calculation step.",
    },
    {
      quote: "I don't know how to approach difficult questions.",
      insight: "Tough board questions are just 2-3 simple concepts chained together. We train pattern recognition so complex problems become intuitive.",
    },
    {
      quote: "I haven't completed the syllabus properly.",
      insight: "A 3-month structured roadmap breaks the entire Class 10 syllabus into manageable weekly targets so you never feel overwhelmed.",
    },
    {
      quote: "I don't know what to revise before the exam.",
      insight: "You receive curated revision formula sheets and a priority-ordered question list so your final days are spent on what truly matters.",
    },
  ],

  // --- Class 10 Mathematics Syllabus (14 Chapters) ---
  chapters: [
    {
      id: 1,
      title: "Real Numbers",
      unit: "Number Systems",
      weightage: "Fundamental",
      concepts: "Fundamental Theorem of Arithmetic, Proof of irrationality (√2, √3, √5), prime factorizations.",
      practice: "LCM & HCF problem variants, proving irrationality step-by-step.",
      importantQuestions: "Proving a + b√p is irrational; application word problems on HCF/LCM.",
      revision: "Summary card of primes and division rules.",
    },
    {
      id: 2,
      title: "Polynomials",
      unit: "Algebra",
      weightage: "High",
      concepts: "Zeroes of a polynomial, geometrical meaning of zeroes, relationship between zeroes and coefficients of quadratic polynomials.",
      practice: "Finding quadratic polynomials given sum/product of zeroes, factorization techniques.",
      importantQuestions: "Value finding using α + β and αβ expressions; finding unknown coefficients.",
      revision: "Quadratic coefficient relation formulas sheet.",
    },
    {
      id: 3,
      title: "Pair of Linear Equations in Two Variables",
      unit: "Algebra",
      weightage: "High",
      concepts: "Graphical method, consistency / inconsistency, Substitution & Elimination methods.",
      practice: "Word problems on ages, speed-distance-time, fractions, and geometry.",
      importantQuestions: "Conditions for unique, infinitely many, or no solutions; speed/boat upstream-downstream problems.",
      revision: "Matrix of consistency conditions (a1/a2, b1/b2, c1/c2).",
    },
    {
      id: 4,
      title: "Quadratic Equations",
      unit: "Algebra",
      weightage: "High",
      concepts: "Standard form ax² + bx + c = 0, solution by factorization, Quadratic Formula, nature of roots (Discriminant D).",
      practice: "Real-world quadratic word problems, discriminant classification.",
      importantQuestions: "Questions with D ≥ 0 finding parameter k; word problems on taps filling tanks and train speed.",
      revision: "Discriminant decision flowchart (D > 0, D = 0, D < 0).",
    },
    {
      id: 5,
      title: "Arithmetic Progressions",
      unit: "Algebra",
      weightage: "High",
      concepts: "nth term formula an = a + (n-1)d, Sum of first n terms Sn = n/2[2a + (n-1)d].",
      practice: "Identifying common difference, finding specific terms from back, series summation.",
      importantQuestions: "Given Sn find an; real-life word problems involving salary increments, rows of logs, and savings.",
      revision: "AP formula reference & nth term manipulation cheatsheet.",
    },
    {
      id: 6,
      title: "Triangles",
      unit: "Geometry",
      weightage: "Crucial",
      concepts: "Basic Proportionality Theorem (Thales Theorem) with formal proof, criteria for similarity (AAA, SSS, SAS).",
      practice: "Theorem application proofs, ratio of sides in similar triangles.",
      importantQuestions: "Direct BPT theorem board proof; similarity proofs involving transversals and medians.",
      revision: "Theorem proof stepwise presentation checklist.",
    },
    {
      id: 7,
      title: "Coordinate Geometry",
      unit: "Coordinate Geometry",
      weightage: "Medium-High",
      concepts: "Distance formula, Section formula (internal division), Midpoint formula.",
      practice: "Collinearity of 3 points, finding coordinates of points of trisection.",
      importantQuestions: "Finding ratio k:1 in which an axis divides a segment; proving types of quadrilaterals.",
      revision: "Distance & Section formula quick cards.",
    },
    {
      id: 8,
      title: "Introduction to Trigonometry",
      unit: "Trigonometry",
      weightage: "High",
      concepts: "Trigonometric ratios (sin, cos, tan, cot, sec, cosec), values for 0°, 30°, 45°, 60°, 90°, Trigonometric Identities (sin²θ + cos²θ = 1).",
      practice: "Evaluating angle tables, algebraic proof of identities.",
      importantQuestions: "Identity proofs using reciprocal and quotient formulas; evaluating expressions without tables.",
      revision: "Standard angle table memory technique & identity conversions.",
    },
    {
      id: 9,
      title: "Some Applications of Trigonometry",
      unit: "Trigonometry",
      weightage: "High",
      concepts: "Angle of elevation, angle of depression, line of sight, horizontal line.",
      practice: "Drawing accurate diagrams from descriptive text, 30°-45°-60° triangle height calculations.",
      importantQuestions: "Two ships / two towers problem with complementary angles or double angle measurements.",
      revision: "Diagram-first strategy guide for heights and distances.",
    },
    {
      id: 10,
      title: "Circles",
      unit: "Geometry",
      weightage: "High",
      concepts: "Tangent to a circle at point of contact, Theorem: tangents drawn from external point are equal in length.",
      practice: "Formal theorem proofs, cyclic properties, tangents enclosing polygons.",
      importantQuestions: "Proving tangent theorem from external point; quadrilateral circumscribing a circle proofs.",
      revision: "Circle theorems visual card with radius-tangent 90° rule.",
    },
    {
      id: 11,
      title: "Areas Related to Circles",
      unit: "Mensuration",
      weightage: "Medium",
      concepts: "Area of sector of angle θ, Length of an arc of a sector, Area of segment of a circle.",
      practice: "Calculating shaded regions, combinations of plane figures (circles, squares, triangles).",
      importantQuestions: "Clock hand sweep area; brooch design and shaded region calculation questions.",
      revision: "Sector and segment formula reference sheet.",
    },
    {
      id: 12,
      title: "Surface Areas and Volumes",
      unit: "Mensuration",
      weightage: "Crucial",
      concepts: "Surface areas and volumes of combinations of solids: cubes, cuboids, spheres, hemispheres, cylinders, cones.",
      practice: "Converting one solid shape to another (melting & recasting), combining shapes (tent, toy, ice-cream).",
      importantQuestions: "Water flowing through a pipe into a tank; combined surface area of a capsule or toy.",
      revision: "Solid geometry formula comparison grid.",
    },
    {
      id: 13,
      title: "Statistics",
      unit: "Statistics & Probability",
      weightage: "High",
      concepts: "Mean of grouped data (Direct, Assumed Mean methods), Mode of grouped data, Median of grouped data.",
      practice: "Frequency distribution tables, cumulative frequency, finding missing frequencies.",
      importantQuestions: "Questions with missing frequencies (f1, f2) given mean or median; mode formula step execution.",
      revision: "Mean-Median-Mode formulas & step-by-step table format guide.",
    },
    {
      id: 14,
      title: "Probability",
      unit: "Statistics & Probability",
      weightage: "Scoring",
      concepts: "Classical definition of probability, P(E) = n(E)/n(S), elementary events, sum of probabilities P(E) + P(not E) = 1.",
      practice: "Dice problems (single and pair), card deck problems, coin tosses, defective items in a batch.",
      importantQuestions: "Tossing two coins / rolling two dice sample space; playing cards face card and suit probabilities.",
      revision: "Sample space breakdown & probability bounds (0 ≤ P(E) ≤ 1).",
    },
  ],

  // --- FAQs ---
  faqs: [
    {
      question: "Who is this program for?",
      answer: "This program is exclusively designed for Class 10 students preparing for their Board Examinations who want to strengthen concepts, resolve persistent doubts, master question-solving approaches, and practice systematically.",
    },
    {
      question: "What is the duration?",
      answer: "The program spans exactly 3 months, structured across three distinct phases: Month 1 (Concept Foundation), Month 2 (Systematic Practice & Doubt Solving), and Month 3 (Mock Tests, Revision & Exam Strategy).",
    },
    {
      question: "Which Class 10 syllabus do you cover?",
      answer: "We cover all 14 chapters of standard NCERT / CBSE Class 10 Mathematics. The syllabus can also be adapted according to the student's specific board or school curriculum.",
    },
    {
      question: "Are doubts included?",
      answer: "Yes, dedicated doubt solving is a core pillar of this batch. Students can ask questions directly during classes and receive personal clarification on homework and test errors.",
    },
    {
      question: "Are tests included?",
      answer: "Yes. The program incorporates regular chapter-wise practice tests, cumulative assessments, and full-length mock examinations modeled strictly on the official board paper format.",
    },
    {
      question: "Is this online?",
      answer: "Yes, the batch is conducted 100% online via interactive live classes with digital whiteboard explanations and real-time student interaction.",
    },
    {
      question: "What is the class schedule?",
      answer: "Class schedules are coordinated per batch to suit student school timings. Please contact me on WhatsApp for current details regarding available morning, evening, or weekend slots.",
    },
    {
      question: "What is the fee?",
      answer: "Fee details are shared transparently upon inquiry based on batch configuration. Please contact me on WhatsApp for current details.",
    },
    {
      question: "How do I enroll?",
      answer: "Enrollment is simple and direct: Click any 'Enroll on WhatsApp' button on this page to start a 1-on-1 chat with Naveen. We will discuss your current preparation level, answer any questions, and share the onboarding details.",
    },
    {
      question: "Can parents contact you directly?",
      answer: "Absolutely. Parents are warmly encouraged to message directly on WhatsApp to discuss their child's current Mathematics standing, learning goals, and batch expectations.",
    },
  ],
};
