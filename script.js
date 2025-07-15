const topics = {
  reasoning: ["Jumbled Alphabet Series", "Conditional Letters Numbers", "Alphabetic Series", "Alpha Numeric Sequence", "Alpha Test", "Date Time Distance", "Ranking Test", "Directions", "Coding Decoding", "Sequential Output Tracing - 01", "Sequential Output Tracing - 02", "Blood Relations", "Seating Arrangement", "Statement and Assumptions", "Statement and Arguments", "Statement and Courses of Action", "Cause and Effect", "Mathematical Operations", "Data Sufficiency", "Analogy", "Inserting Missing Number", "Classification", "Venn Diagram", "Syllogism - 01", "Syllogism - 02", "Syllogism - 03"],
  english: ["The Noun", "The Pronoun", "The Adjective", "The Verb", "The Adverb", "The Preposition", "The Conjunction", "Phrase Substitution", "Sentence Completion", "Antonyms", "Synonyms", "Cloze Test", "Tenses", "The Article", "Spotting the Error", "Idioms and Phrases", "Grammar Rules - 01", "Grammar Rules - 02", "Grammar Rules - 03", "Grammar Rules - 04", "Grammar Rules - General", "Spotting of Errors"],
  quant: ["Numbers", "Square Root and Cube Root", "Percentage", "LCM and HCF", "Simplification", "Permutations and Combinations", "Average", "Algebraic Expressions", "Mensuration Concepts", "Mensuration Examples", "Data Sufficiency", "Data Interpretation - 01", "Data Interpretation - All Types", "Ratio and Proportion", "Simple Interest", "Compound Interest", "Profit and Loss", "Partnership", "Speed Time and Distance", "Work Time and Wages - 01", "Work Time and Wages - 02", "Work Time and Wages - 03", "Work Time and Wages - 04", "Work Time and Wages - 05"],
  computer: ["Components and Functions", "Software", "Storage Devices, Networking and Internet", "Flow Chart and Programming Language", "MS Office and MS Excel"],
  gk: ["Indian Financial System", "Indian Banking System", "e Payments", "Cheques", "RBI and its Functions", "Sukanya Samridhi Account", "Indian Currency Facts", "Shares, Debentures, Bonds", "Budget 2014-15 - 01", "Budget 2014-15 - 02", "Budget 2014-15 - 03", "Types of Bank Customers - 01", "Types of Bank Customers - 02", "Financial Institutions", "International Financial Institutions", "NPAs", "Willful Defaulters", "Opening a Bank Account", "Digital India", "Jan Dhan Yojana", "GDR / ADR / IDR", "Payment Routing Codes", "GST", "Securities and Charges - 01", "Securities and Charges - 02", "Impact of Falling Rupee", "ALM", "Bank Deposits Options", "Break Even Point", "Capital Markets", "CRR", "CTS", "Cultures", "EMI", "Inflation", "Letter of Credit", "Credit Policy", "PN and BoE", "Share Capital", "SLR", "Types of Company Capital", "GDP"]
};

let currentModule = null;

function showModule(moduleId) {
  currentModule = moduleId;
  document.querySelectorAll('.module').forEach(mod => mod.style.display = 'none');
  document.getElementById('searchBox').style.display = 'block';

  const container = document.getElementById(moduleId);
  container.innerHTML = "";

  const circular = document.createElement("div");
  circular.id = `${moduleId}-progress`;
  circular.className = "circular-progress";
  container.appendChild(circular);

  const savedState = JSON.parse(localStorage.getItem(moduleId) || '{}');

  topics[moduleId].forEach((topic, index) => {
    const div = document.createElement("div");
    div.classList.add("topic");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${moduleId}-${index}`;
    checkbox.checked = savedState[checkbox.id] || false;

    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.textContent = topic;

    if (checkbox.checked) div.classList.add("completed");

    checkbox.addEventListener("change", () => {
      div.classList.toggle("completed", checkbox.checked);
      savedState[checkbox.id] = checkbox.checked;
      localStorage.setItem(moduleId, JSON.stringify(savedState));
      updateProgress(moduleId);
      updateOverallProgress();
    });

    div.appendChild(checkbox);
    div.appendChild(label);
    container.appendChild(div);
  });

  container.style.display = 'block';
  updateProgress(moduleId);
  updateOverallProgress();
}

function updateProgress(moduleId) {
  const checkboxes = document.querySelectorAll(`#${moduleId} input[type='checkbox']`);
  const total = checkboxes.length;
  const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
  const percent = ((completed / total) * 100).toFixed(1);

  const progressDiv = document.getElementById(`${moduleId}-progress`);
  progressDiv.style.background = `conic-gradient(#4caf50 ${percent}%, #ddd ${percent}%)`;
  progressDiv.textContent = `${percent}%`;
}

function updateOverallProgress() {
  let total = 0, completed = 0;

  for (const module in topics) {
    const savedState = JSON.parse(localStorage.getItem(module) || '{}');
    const moduleTopics = topics[module];
    total += moduleTopics.length;
    for (let i = 0; i < moduleTopics.length; i++) {
      if (savedState[`${module}-${i}`]) {
        completed++;
      }
    }
  }

  const percent = total === 0 ? 0 : ((completed / total) * 100).toFixed(1);
  const circle = document.getElementById("overall-progress-circle");
  circle.style.background = `conic-gradient(#4caf50 ${percent}%, #ddd ${percent}%)`;
  circle.textContent = `${percent}%`;
}

function filterTopics() {
  const filter = document.getElementById("searchBox").value.toLowerCase();
  if (!currentModule) return;

  const topics = document.querySelectorAll(`#${currentModule} .topic`);
  topics.forEach(topic => {
    const text = topic.innerText.toLowerCase();
    topic.style.display = text.includes(filter) ? 'flex' : 'none';
  });
}

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  document.getElementById("theme-toggle").textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
