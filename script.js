const topics = {
  reasoning: [
    "Jumbled Alphabet Series", "Conditional Letters Numbers", "Alphabetic Series", "Alpha Numeric Sequence",
    "Alpha Test", "Date Time Distance", "Ranking Test", "Directions", "Coding Decoding",
    "Sequential Output Tracing - 01", "Sequential Output Tracing - 02", "Blood Relations",
    "Seating Arrangement", "Statement and Assumptions", "Statement and Arguments",
    "Statement and Courses of Action", "Cause and Effect", "Mathematical Operations",
    "Data Sufficiency", "Analogy", "Inserting Missing Number", "Classification", "Venn Diagram",
    "Syllogism - 01", "Syllogism - 02", "Syllogism - 03"
  ],
  english: [
    "The Noun", "The Pronoun", "The Adjective", "The Verb", "The Adverb", "The Preposition",
    "The Conjunction", "Phrase Substitution", "Sentence Completion", "Antonyms", "Synonyms",
    "Cloze Test", "Tenses", "The Article", "Spotting the Error", "Idioms and Phrases",
    "Grammar Rules - 01", "Grammar Rules - 02", "Grammar Rules - 03", "Grammar Rules - 04",
    "Grammar Rules - General", "Spotting of Errors"
  ],
  quant: [
    "Numbers", "Square Root and Cube Root", "Percentage", "LCM and HCF", "Simplification",
    "Permutations and Combinations", "Average", "Algebraic Expressions", "Mensuration Concepts",
    "Mensuration Examples", "Data Sufficiency", "Data Interpretation - 01", "Data Interpretation - All Types",
    "Ratio and Proportion", "Simple Interest", "Compound Interest", "Profit and Loss", "Partnership",
    "Speed Time and Distance", "Work Time and Wages - 01", "Work Time and Wages - 02", "Work Time and Wages - 03",
    "Work Time and Wages - 04", "Work Time and Wages - 05"
  ],
  computer: [
    "Components and Functions", "Software", "Storage Devices, Networking and Internet",
    "Flow Chart and Programming Language", "MS Office and MS Excel"
  ],
  gk: [
    "Indian Financial System", "Indian Banking System", "e Payments", "Cheques", "RBI and its Functions",
    "Sukanya Samridhi Account", "Indian Currency Facts", "Shares, Debentures, Bonds",
    "Budget 2014-15 - 01", "Budget 2014-15 - 02", "Budget 2014-15 - 03", "Types of Bank Customers - 01",
    "Types of Bank Customers - 02", "Financial Institutions", "International Financial Institutions",
    "NPAs", "Willful Defaulters", "Opening a Bank Account", "Digital India", "Jan Dhan Yojana",
    "GDR / ADR / IDR", "Payment Routing Codes", "GST", "Securities and Charges - 01",
    "Securities and Charges - 02", "Impact of Falling Rupee", "ALM", "Bank Deposits Options",
    "Break Even Point", "Capital Markets", "CRR", "CTS", "Cultures", "EMI", "Inflation",
    "Letter of Credit", "Credit Policy", "PN and BoE", "Share Capital", "SLR", "Types of Company Capital", "GDP"
  ]
};

function showModule(moduleId) {
  document.querySelectorAll('.module').forEach(mod => mod.style.display = 'none');

  const container = document.getElementById(moduleId);
  container.innerHTML = "";

  topics[moduleId].forEach((topic, index) => {
    const div = document.createElement("div");
    div.classList.add("topic");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${moduleId}-${index}`;

    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.textContent = topic;

    checkbox.addEventListener("change", () => {
      div.classList.toggle("completed", checkbox.checked);
    });

    div.appendChild(checkbox);
    div.appendChild(label);
    container.appendChild(div);
  });

  container.style.display = 'block';
}
