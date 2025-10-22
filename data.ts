import { User, Chapters, Mcqs } from "./types";

// 🔒 Add more usernames and passwords below:
// The password field is used for demonstration. In a real app, this would be handled securely.
export const users: User[] = [
  { username: "Ali", password: "201711" },
  { username: "Umer", password: "0000" },
  { username: "Tayyab", password: "2004" },
];

// 📘 Add or edit subjects here:
export const subjects: string[] = [
  "English",
  "Chemistry",
  "Biology",
  "Logic & Reasoning",
  "Physics",
];

// 📗 Add or edit chapters for each subject below:
export const chapters: Chapters = {
  English: ["Grammar", "Comprehension", "Vocabulary"],
  Chemistry: [
    "Fundamental Concepts",
    "Atomic Structure",
    "Gases",
    "Solid",
    "Liquid",
    "Equilibrium",
    "Reaction Kinetics",
    "Thermochemistry",
    "Electrochemistry",
    "Chemical Bonding",
    "Macromolecules",
    "s-Block & p-Block Elements",
    "Transition Elements",
    "Fundamentals of Organic Chemistry",
    "Hydrocarbons",
    "Alkyl Halides",
    "Alcohols & Phenols",
    "Aldehydes & Ketones",
    "Carboxylic Acids",
    "Industrial Chemistry",
  ],
  Biology: [
    "Virus",
    "Bioenergetics",
    "Biological Evolution",
    "Enzyme",
    "Reproduction",
    "Support and Movement",
    "Inheritance",
    "Homeostasis",
    "Biological Molecules",
    "Cell",
    "Coordination and Control",
    "Biotechnology",
    "Circulation",
    "Immunity",
    "Respiration",
    "Digestion",
  ],
  "Logic & Reasoning": ["Analogies", "Series Completion", "Critical Thinking"],
  Physics: [
    "Force and Motion",
    "Work and Energy",
    "Circular Motion",
    "Waves",
    "Thermodynamics",
    "Electrostatics",
    "Current Electricity",
    "Vectors",
    "A.C.",
    "Fluid Dynamics",
    "Electromagnetism",
    "Electromagnetic Induction",
    "Electronics",
    "Dawn of Modern Physics",
    "Atomic Spectra",
    "Nuclear Physics",
  ],
};

// 🧠 Add or edit Multiple Choice Questions (MCQs) for each chapter below:
export const mcqs: Mcqs = {
  English: {
    Grammar: [
      {
        question: "Which of the following is a preposition?",
        options: ["Jump", "Under", "Quickly", "She"],
        correctAnswer: "Under",
      },
      {
        question: "I ___ to the store yesterday.",
        options: ["go", "goed", "went", "gone"],
        correctAnswer: "went",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "They is happy.",
          "She are tall.",
          "He is running.",
          "We is tired.",
        ],
        correctAnswer: "He is running.",
      },
    ],
    Vocabulary: [
      {
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correctAnswer: "Joyful",
      },
      {
        question: "What is an antonym for 'begin'?",
        options: ["Start", "Commence", "End", "Launch"],
        correctAnswer: "End",
      },
    ],
    Comprehension: [
      {
        question: "What is the main idea of a passage?",
        options: [
          "The first sentence",
          "The last sentence",
          "The central point",
          "A minor detail",
        ],
        correctAnswer: "The central point",
      },
    ],
  },
  Chemistry: {
    Equilibrium: [
      {
        question: "What is the defining condition of a chemical equilibrium?",
        options: [
          "The concentrations of reactants and products are equal.",
          "The forward and reverse reaction rates are equal.",
          "All molecular motion has ceased.",
          "The limiting reactants are fully consumed.",
        ],
        correctAnswer: "The forward and reverse reaction rates are equal.",
      },
      {
        question: "A system at dynamic equilibrium is characterized by:",
        options: [
          "Constant macroscopic properties.",
          "A genuinely static state at the molecular level.",
          "A reaction that has gone to completion.",
          "Zero reaction rate in both directions.",
        ],
        correctAnswer: "Constant macroscopic properties.",
      },
      {
        question:
          "Which of the following is a necessary requirement for establishing chemical equilibrium?",
        options: [
          "The presence of a catalyst.",
          "The system must be open to the atmosphere.",
          "The system must be closed.",
          "The reaction must be irreversible.",
        ],
        correctAnswer: "The system must be closed.",
      },
      {
        question:
          "The equilibrium constant, K_c, is dependent only on which factor?",
        options: [
          "Initial concentrations",
          "Pressure",
          "Presence of a catalyst",
          "Temperature",
        ],
        correctAnswer: "Temperature",
      },
      {
        question:
          "If the value of the equilibrium constant K_c is much larger than 1 (K_c >> 1), what does this imply?",
        options: [
          "The equilibrium lies far to the left, favoring reactants.",
          "The reaction is very slow.",
          "The equilibrium lies far to the right, favoring products.",
          "The concentrations of reactants and products are nearly equal.",
        ],
        correctAnswer:
          "The equilibrium lies far to the right, favoring products.",
      },
      {
        question:
          "For a gaseous reaction, when is the value of K_p equal to K_c?",
        options: [
          "When the reaction is endothermic.",
          "When the reaction is exothermic.",
          "When the change in the number of moles of gas (Δn) is zero.",
          "When the temperature is 298 K.",
        ],
        correctAnswer:
          "When the change in the number of moles of gas (Δn) is zero.",
      },
      {
        question: "How does a catalyst affect a system at equilibrium?",
        options: [
          "It increases the value of K_c.",
          "It shifts the equilibrium to favor products.",
          "It increases the rates of both forward and reverse reactions equally.",
          "It decreases the activation energy of the forward reaction only.",
        ],
        correctAnswer:
          "It increases the rates of both forward and reverse reactions equally.",
      },
      {
        question:
          "Consider the exothermic reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). How will the equilibrium shift if the temperature is increased?",
        options: [
          "Shift to the right (favoring products)",
          "Shift to the left (favoring reactants)",
          "No change in equilibrium position",
          "The value of K_c will increase",
        ],
        correctAnswer: "Shift to the left (favoring reactants)",
      },
      {
        question:
          "For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), how will an increase in pressure affect the equilibrium?",
        options: [
          "Shift to the right",
          "Shift to the left",
          "No change",
          "It will increase the rate constant",
        ],
        correctAnswer: "Shift to the left",
      },
      {
        question:
          "If the reaction quotient Q_c is less than K_c, the reaction must:",
        options: [
          "Proceed to the left to reach equilibrium.",
          "Proceed to the right to reach equilibrium.",
          "Already be at equilibrium.",
          "Stop completely.",
        ],
        correctAnswer: "Proceed to the right to reach equilibrium.",
      },
      {
        question:
          "Which of the following stresses will change the value of the equilibrium constant, K_c?",
        options: [
          "Changing the concentration of a reactant.",
          "Changing the pressure of the system.",
          "Adding a catalyst.",
          "Changing the temperature.",
        ],
        correctAnswer: "Changing the temperature.",
      },
      {
        question: "What is the Common Ion Effect?",
        options: [
          "The increase in solubility of a salt when a common ion is added.",
          "The decrease in the ionization of a weak electrolyte when a common ion is added.",
          "A solution that resists pH change.",
          "The product of ion concentrations in a saturated solution.",
        ],
        correctAnswer:
          "The decrease in the ionization of a weak electrolyte when a common ion is added.",
      },
      {
        question: "A buffer solution is typically composed of:",
        options: [
          "A strong acid and a strong base.",
          "A weak acid and its conjugate base.",
          "A salt dissolved in water.",
          "Two different strong acids.",
        ],
        correctAnswer: "A weak acid and its conjugate base.",
      },
      {
        question:
          "According to the Henderson-Hasselbalch equation, the pH of an acidic buffer is equal to the pK_a when:",
        options: [
          "The concentration of the weak acid is zero.",
          "The concentration of the conjugate base is zero.",
          "The concentrations of the weak acid and its conjugate base are equal.",
          "The solution is completely neutralized.",
        ],
        correctAnswer:
          "The concentrations of the weak acid and its conjugate base are equal.",
      },
      {
        question:
          "The solubility product constant, K_sp, represents the equilibrium between:",
        options: [
          "A weak acid and its ions.",
          "A gas and its dissolved form.",
          "An undissolved solid and its dissociated ions in solution.",
          "Reactants and products in a reversible reaction.",
        ],
        correctAnswer:
          "An undissolved solid and its dissociated ions in solution.",
      },
      {
        question:
          "For the reaction 2A(g) ⇌ B(g) + C(g), what is the correct expression for the equilibrium constant K_c?",
        options: [
          "[B][C] / [A]",
          "[B][C] / [A]²",
          "[A]² / [B][C]",
          "[A] / [B][C]",
        ],
        correctAnswer: "[B][C] / [A]²",
      },
      {
        question:
          "If you add more of reactant A to an equilibrium mixture, the reaction will shift to the right to consume the added A. This is an application of:",
        options: [
          "The Law of Mass Action",
          "The Arrhenius Equation",
          "Le Chatelier's Principle",
          "The Henderson-Hasselbalch Equation",
        ],
        correctAnswer: "Le Chatelier's Principle",
      },
      {
        question:
          "A buffer works by consuming added strong acid with its ____ component and added strong base with its ____ component.",
        options: [
          "acidic, basic",
          "basic, acidic",
          "acidic, acidic",
          "basic, basic",
        ],
        correctAnswer: "basic, acidic",
      },
      {
        question:
          "In an 'ICE' table used for equilibrium problems, what does 'C' stand for?",
        options: ["Concentration", "Constant", "Catalyst", "Change"],
        correctAnswer: "Change",
      },
      {
        question:
          "What is the pH of a solution where the concentration of H+ is 1.0 x 10⁻⁴ M?",
        options: ["10", "4", "-4", "1"],
        correctAnswer: "4",
      },
      {
        question:
          "If the forward reaction is endothermic, how will decreasing the temperature affect the equilibrium?",
        options: ["Shift right", "Shift left", "No effect", "Increase K_c"],
        correctAnswer: "Shift left",
      },
      {
        question: "What is the conjugate base of the weak acid H₂CO₃?",
        options: ["CO₃²⁻", "HCO₃⁻", "H₃CO₃⁺", "OH⁻"],
        correctAnswer: "HCO₃⁻",
      },
      {
        question:
          "If K_c for the reaction A + B ⇌ C is 4.0, what is K_c for the reaction C ⇌ A + B?",
        options: ["4.0", "2.0", "0.25", "-4.0"],
        correctAnswer: "0.25",
      },
      {
        question:
          "Adding an inert gas (like Argon) to a gaseous equilibrium at constant volume will:",
        options: [
          "Shift the equilibrium to the right",
          "Shift the equilibrium to the left",
          "Increase the total pressure but not shift the equilibrium",
          "Decrease the total pressure and shift the equilibrium",
        ],
        correctAnswer:
          "Increase the total pressure but not shift the equilibrium",
      },
      {
        question: "In the expression K_p = K_c(RT)Δⁿ, what does 'R' represent?",
        options: [
          "The reaction rate",
          "The universal gas constant",
          "The reactant concentration",
          "The reaction quotient",
        ],
        correctAnswer: "The universal gas constant",
      },
      {
        question:
          "If a strong base like NaOH is added to an acetic acid buffer (CH₃COOH/CH₃COO⁻), which component will react with it?",
        options: [
          "The acetate ion (CH₃COO⁻)",
          "The acetic acid (CH₃COOH)",
          "The sodium ion (Na⁺)",
          "Water (H₂O)",
        ],
        correctAnswer: "The acetic acid (CH₃COOH)",
      },
      {
        question:
          "The value of K_sp for AgCl is 1.8 x 10⁻¹⁰. This small value indicates that AgCl is:",
        options: [
          "Highly soluble in water",
          "Slightly soluble in water",
          "A strong electrolyte",
          "A gas at room temperature",
        ],
        correctAnswer: "Slightly soluble in water",
      },
      {
        question:
          "The state where a reaction appears to have stopped macroscopically but is still occurring at the molecular level is called:",
        options: [
          "Static equilibrium",
          "The transition state",
          "Dynamic equilibrium",
          "The rate-determining step",
        ],
        correctAnswer: "Dynamic equilibrium",
      },
      {
        question:
          "Which of the following describes the 'active mass' of a substance as defined by the Law of Mass Action?",
        options: [
          "Total mass in grams",
          "Molar concentration",
          "Density",
          "Partial pressure",
        ],
        correctAnswer: "Molar concentration",
      },
      {
        question:
          "In the reaction H₂(g) + I₂(g) ⇌ 2HI(g), how does the equilibrium shift when the volume is decreased (pressure is increased)?",
        options: ["Shifts left", "Shifts right", "No shift", "Reaction stops"],
        correctAnswer: "No shift",
      },
      {
        question: "What is the conjugate acid of the weak base ammonia (NH₃)?",
        options: ["NH₂⁻", "NH₄⁺", "H₃O⁺", "N₂H₄"],
        correctAnswer: "NH₄⁺",
      },
      {
        question:
          "If a reaction has a negative ΔH, increasing the temperature will cause the equilibrium constant K_c to:",
        options: ["Increase", "Decrease", "Remain constant", "Become negative"],
        correctAnswer: "Decrease",
      },
      {
        question:
          "If K_c is approximately equal to 1, the equilibrium mixture consists of:",
        options: [
          "Mostly products",
          "Mostly reactants",
          "Comparable amounts of reactants and products",
          "Only reactants",
        ],
        correctAnswer: "Comparable amounts of reactants and products",
      },
      {
        question:
          "If you remove a product from an equilibrium system, the reaction will:",
        options: [
          "Shift left to produce more reactants",
          "Shift right to produce more product",
          "Stop",
          "Be unaffected",
        ],
        correctAnswer: "Shift right to produce more product",
      },
      {
        question:
          "A solution that resists drastic changes in pH is known as a:",
        options: [
          "Neutral solution",
          "Saturated solution",
          "Buffer solution",
          "Standard solution",
        ],
        correctAnswer: "Buffer solution",
      },
      {
        question:
          "The expression for the reaction quotient, Q_c, is identical to K_c, but it is calculated using concentrations that are:",
        options: [
          "Only at equilibrium",
          "Not necessarily at equilibrium",
          "Only for the initial conditions",
          "Only for gases",
        ],
        correctAnswer: "Not necessarily at equilibrium",
      },
      {
        question:
          "Adding a soluble salt containing a common ion to a solution of a slightly soluble salt will:",
        options: [
          "Increase its solubility",
          "Decrease its solubility",
          "Have no effect on its solubility",
          "Change its color",
        ],
        correctAnswer: "Decrease its solubility",
      },
      {
        question:
          "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), at equilibrium in a 2.0 L container, you have 0.50 mol of N₂, 1.50 mol of H₂, and 0.20 mol of NH₃. What is K_c?",
        options: ["0.095", "10.5", "0.237", "1.50"],
        correctAnswer: "0.095",
      },
      {
        question:
          "A reaction starts with 0.50 M of A. For the reaction A ⇌ 2B, the equilibrium concentration of B is 0.40 M. What is the equilibrium concentration of A?",
        options: ["0.10 M", "0.20 M", "0.30 M", "0.50 M"],
        correctAnswer: "0.30 M",
      },
      {
        question:
          "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) at 500 K, what is the relationship between Kp and Kc?",
        options: ["Kp = Kc", "Kp = Kc(RT)", "Kp = Kc(RT)⁻¹", "Kp = Kc(RT)²"],
        correctAnswer: "Kp = Kc(RT)⁻¹",
      },
    ],
    "Reaction Kinetics": [
      {
        question: "The rate of a chemical reaction is defined as:",
        options: [
          "The total time the reaction takes to complete.",
          "The change in concentration of a species per unit of time.",
          "The energy released during the reaction.",
          "The point at which equilibrium is reached.",
        ],
        correctAnswer:
          "The change in concentration of a species per unit of time.",
      },
      {
        question:
          "In the rate law, Rate = k[A]ˣ[B]ʸ, the exponents x and y are known as:",
        options: [
          "Stoichiometric coefficients",
          "Rate constants",
          "Orders of reaction",
          "Activation energies",
        ],
        correctAnswer: "Orders of reaction",
      },
      {
        question:
          "How are the orders of reaction (x and y in the rate law) determined?",
        options: [
          "From the stoichiometric coefficients of the balanced equation.",
          "By measuring the temperature change.",
          "Experimentally.",
          "By calculating the equilibrium constant.",
        ],
        correctAnswer: "Experimentally.",
      },
      {
        question:
          "What are the units of the rate constant 'k' for a second-order reaction?",
        options: ["s⁻¹", "mol⋅dm⁻³⋅s⁻¹", "dm³⋅mol⁻¹⋅s⁻¹", "dm⁶⋅mol⁻²⋅s⁻¹"],
        correctAnswer: "dm³⋅mol⁻¹⋅s⁻¹",
      },
      {
        question:
          "If doubling the concentration of reactant [A] quadruples the reaction rate, the reaction is what order with respect to A?",
        options: ["Zero order", "First order", "Second order", "Third order"],
        correctAnswer: "Second order",
      },
      {
        question: "The half-life of a first-order reaction is:",
        options: [
          "Directly proportional to the initial concentration.",
          "Inversely proportional to the initial concentration.",
          "Independent of the initial concentration.",
          "Equal to the rate constant.",
        ],
        correctAnswer: "Independent of the initial concentration.",
      },
      {
        question:
          "For a certain reaction, the half-life is observed to decrease as the initial concentration is increased. What is the order of the reaction?",
        options: [
          "Zero order",
          "First order",
          "Second order",
          "Cannot be determined",
        ],
        correctAnswer: "Second order",
      },
      {
        question:
          "If a reaction is 50% complete in 100 seconds and 75% complete in 200 seconds, what is the order of the reaction?",
        options: ["Zero order", "First order", "Second order", "Third order"],
        correctAnswer: "First order",
      },
      {
        question: "Which plot gives a straight line for a zero-order reaction?",
        options: ["[A] vs. t", "ln[A] vs. t", "1/[A] vs. t", "log(k) vs. 1/T"],
        correctAnswer: "[A] vs. t",
      },
      {
        question:
          "According to collision theory, what two conditions must be met for a collision to be effective?",
        options: [
          "Sufficient energy and high pressure.",
          "Sufficient energy and correct orientation.",
          "High concentration and high temperature.",
          "Correct orientation and the presence of a catalyst.",
        ],
        correctAnswer: "Sufficient energy and correct orientation.",
      },
      {
        question: "What is the activation energy (E_a) of a reaction?",
        options: [
          "The total energy released by the reaction.",
          "The minimum energy required for reactants to turn into products.",
          "The energy difference between products and reactants.",
          "The average kinetic energy of the molecules.",
        ],
        correctAnswer:
          "The minimum energy required for reactants to turn into products.",
      },
      {
        question:
          "How does an increase in temperature always affect the reaction rate and rate constant (k)?",
        options: [
          "It decreases the rate and k.",
          "It increases the rate and k.",
          "It increases the rate but decreases k.",
          "It has no effect on the rate or k.",
        ],
        correctAnswer: "It increases the rate and k.",
      },
      {
        question: "The Arrhenius equation describes the relationship between:",
        options: [
          "Rate constant, temperature, and activation energy.",
          "Equilibrium constant and pressure.",
          "Concentration and time.",
          "Half-life and reaction order.",
        ],
        correctAnswer: "Rate constant, temperature, and activation energy.",
      },
      {
        question:
          "On a potential energy diagram, the peak of the energy barrier represents the:",
        options: [
          "Reactants",
          "Products",
          "Enthalpy change (ΔH)",
          "Activated complex (transition state)",
        ],
        correctAnswer: "Activated complex (transition state)",
      },
      {
        question: "For an endothermic reaction, which statement is true?",
        options: [
          "The products have lower potential energy than the reactants.",
          "The activation energy of the forward reaction is less than the reverse reaction.",
          "The enthalpy change (ΔH) is positive.",
          "The reaction releases heat to the surroundings.",
        ],
        correctAnswer: "The enthalpy change (ΔH) is positive.",
      },
      {
        question:
          "The 'instantaneous rate' of a reaction at a specific time is determined by:",
        options: [
          "The overall change in concentration divided by total time.",
          "The rate at the very beginning of the reaction.",
          "The slope of the tangent to the concentration-time curve at that time.",
          "Averaging the rates at the beginning and end.",
        ],
        correctAnswer:
          "The slope of the tangent to the concentration-time curve at that time.",
      },
      {
        question:
          "The discrepancy between stoichiometric coefficients and experimentally determined reaction orders is evidence that:",
        options: [
          "The reaction is at equilibrium.",
          "The reaction occurs through a multi-step mechanism.",
          "The temperature is too low.",
          "The law of mass action is incorrect.",
        ],
        correctAnswer: "The reaction occurs through a multi-step mechanism.",
      },
      {
        question:
          "The overall order of the reaction with the rate law: Rate = k[X][Y]² is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        question:
          "A reaction with a very high activation energy will likely be:",
        options: [
          "Very fast at room temperature.",
          "Very slow at room temperature.",
          "Spontaneous regardless of temperature.",
          "Strongly exothermic.",
        ],
        correctAnswer: "Very slow at room temperature.",
      },
      {
        question:
          "What is the relationship between the enthalpy change (ΔH) and the activation energies of the forward (Ea,fwd) and reverse (Ea,rev) reactions?",
        options: [
          "ΔH = Ea,fwd + Ea,rev",
          "ΔH = Ea,fwd / Ea,rev",
          "ΔH = Ea,fwd - Ea,rev",
          "ΔH = Ea,rev - Ea,fwd",
        ],
        correctAnswer: "ΔH = Ea,fwd - Ea,rev",
      },
      {
        question: "Which factor does NOT influence the rate of a reaction?",
        options: [
          "Temperature",
          "Concentration of reactants",
          "The equilibrium constant (K_c)",
          "Presence of a catalyst",
        ],
        correctAnswer: "The equilibrium constant (K_c)",
      },
      {
        question: "For a zero-order reaction, the rate is:",
        options: [
          "Directly proportional to the concentration.",
          "Directly proportional to the square of the concentration.",
          "Independent of the concentration.",
          "Inversely proportional to the concentration.",
        ],
        correctAnswer: "Independent of the concentration.",
      },
      {
        question:
          "The rate-determining step in a reaction mechanism is always the:",
        options: ["First step", "Last step", "Fastest step", "Slowest step"],
        correctAnswer: "Slowest step",
      },
      {
        question:
          "The rate law provides a 'window' into the reaction mechanism because it reflects the composition of the:",
        options: [
          "Overall balanced reaction",
          "Final products",
          "Rate-determining step",
          "Initial reactants",
        ],
        correctAnswer: "Rate-determining step",
      },
      {
        question: "The half-life of a zero-order reaction is:",
        options: [
          "Independent of initial concentration",
          "Directly proportional to initial concentration",
          "Inversely proportional to initial concentration",
          "Equal to 0.693/k",
        ],
        correctAnswer: "Directly proportional to initial concentration",
      },
      {
        question:
          "A high activation energy corresponds to a ____ rate constant (k), and a ____ reaction rate.",
        options: ["large, fast", "small, slow", "small, fast", "large, slow"],
        correctAnswer: "small, slow",
      },
      {
        question:
          "For a reaction to occur, the pre-exponential factor 'A' in the Arrhenius equation relates to the frequency and ____ of collisions.",
        options: ["energy", "orientation", "temperature", "pressure"],
        correctAnswer: "orientation",
      },
      {
        question: "The study of reaction rates and mechanisms is called:",
        options: [
          "Thermodynamics",
          "Stoichiometry",
          "Reaction Kinetics",
          "Chemical Equilibrium",
        ],
        correctAnswer: "Reaction Kinetics",
      },
      {
        question: "What is the overall reaction order for Rate = k?",
        options: [
          "Zero order",
          "First order",
          "Second order",
          "Cannot be determined",
        ],
        correctAnswer: "Zero order",
      },
      {
        question:
          "If a reaction is exothermic, what is the sign of its enthalpy change (ΔH)?",
        options: ["Positive", "Negative", "Zero", "Depends on temperature"],
        correctAnswer: "Negative",
      },
      {
        question:
          "If doubling the concentration of a reactant has no effect on the reaction rate, the reaction is what order with respect to that reactant?",
        options: [
          "Zero order",
          "First order",
          "Second order",
          "Negative order",
        ],
        correctAnswer: "Zero order",
      },
      {
        question: "Integrated rate laws relate which two variables?",
        options: [
          "Rate and concentration",
          "Concentration and time",
          "Rate and temperature",
          "Rate constant and activation energy",
        ],
        correctAnswer: "Concentration and time",
      },
      {
        question:
          "Which of the following can be monitored to measure the rate of a reaction?",
        options: [
          "Change in color",
          "Change in pressure",
          "Change in concentration via titration",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        question:
          "In a plot of ln[A] vs. time for a first-order reaction, the slope of the line is equal to:",
        options: ["k", "-k", "E_a", "t₁/₂"],
        correctAnswer: "-k",
      },
      {
        question:
          "For an exothermic reaction A ⇌ B, which has a higher activation energy?",
        options: [
          "The forward reaction (A → B)",
          "The reverse reaction (B → A)",
          "Both are equal",
          "Cannot be determined",
        ],
        correctAnswer: "The reverse reaction (B → A)",
      },
      {
        question:
          "The rate law for a reaction is found to be Rate = k[A]. What happens to the rate if [A] is tripled?",
        options: [
          "It triples",
          "It is 1/3 of the original rate",
          "It increases by a factor of 9",
          "It does not change",
        ],
        correctAnswer: "It triples",
      },
      {
        question: "Which type of reaction has a constant half-life?",
        options: [
          "Zero-order",
          "First-order",
          "Second-order",
          "All of the above",
        ],
        correctAnswer: "First-order",
      },
      {
        question:
          "If a reaction is endothermic (ΔH > 0), what does a potential energy diagram look like?",
        options: [
          "Products are at a lower energy level than reactants.",
          "Products are at a higher energy level than reactants.",
          "Reactants and products are at the same energy level.",
          "There is no activation energy barrier.",
        ],
        correctAnswer: "Products are at a higher energy level than reactants.",
      },
      {
        question:
          "If a reaction is first order in A and second order in B, what is the overall reaction order?",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: "Third",
      },
      {
        question:
          "A first-order reaction has a half-life of 30 minutes. What percentage of the reactant will remain after 90 minutes?",
        options: ["50%", "25%", "12.5%", "6.25%"],
        correctAnswer: "12.5%",
      },
      {
        question:
          "The half-life of a first-order reaction is 69.3 s. What is the value of the rate constant (k)? (k = 0.693 / t₁/₂)",
        options: ["1.0 s⁻¹", "0.1 s⁻¹", "0.01 s⁻¹", "10.0 s⁻¹"],
        correctAnswer: "0.01 s⁻¹",
      },
      {
        question:
          "Reaction X doubles its rate from 298K to 308K. Reaction Y triples its rate over the same temperature range. Which statement is correct?",
        options: [
          "Reaction X has a higher Ea than Y",
          "Reaction Y has a higher Ea than X",
          "Both have the same Ea",
          "Ea cannot be determined",
        ],
        correctAnswer: "Reaction Y has a higher Ea than X",
      },
      {
        question:
          "A first-order reaction has a rate constant of 0.02 min⁻¹. How long will it take for the concentration to drop from 0.8 M to 0.1 M?",
        options: ["50 min", "75 min", "104 min", "208 min"],
        correctAnswer: "104 min",
      },
      {
        question:
          "What are the units for the rate constant of a third-order reaction?",
        options: ["s⁻¹", "dm³⋅mol⁻¹⋅s⁻¹", "dm⁶⋅mol⁻²⋅s⁻¹", "mol⋅dm⁻³⋅s⁻¹"],
        correctAnswer: "dm⁶⋅mol⁻²⋅s⁻¹",
      },
    ],
    "Fundamental Concepts": [
      {
        question:
          "Which statement accurately describes the formation of a cation?",
        options: [
          "It is an exothermic process.",
          "The resulting ion is larger than its parent atom.",
          "It involves an atom losing one or more electrons.",
          "It involves an atom gaining one or more electrons.",
        ],
        correctAnswer: "It involves an atom losing one or more electrons.",
      },
      {
        question:
          "The formation of a uni-negative anion is typically what kind of process?",
        options: ["Exothermic", "Endothermic", "Isothermic", "Neutral"],
        correctAnswer: "Exothermic",
      },
      {
        question: "What are isobars?",
        options: [
          "Atoms with the same number of protons but different neutrons.",
          "Atoms with the same number of neutrons but different protons.",
          "Atoms with the same mass number but different atomic numbers.",
          "Atoms with the same atomic number and mass number.",
        ],
        correctAnswer:
          "Atoms with the same mass number but different atomic numbers.",
      },
      {
        question: "The species ¹⁴C and ¹⁴N are examples of:",
        options: ["Isotopes", "Isobars", "Isotones", "Allotropes"],
        correctAnswer: "Isobars",
      },
      {
        question:
          "The atoms ¹⁴C (Carbon-14) and ¹⁶O (Oxygen-16) both have 8 neutrons. They are examples of:",
        options: ["Isotopes", "Isobars", "Isotones", "Allotropes"],
        correctAnswer: "Isotones",
      },
      {
        question:
          "Which of the following elements naturally exists as a single isotope (is mono-isotopic)?",
        options: ["Carbon", "Chlorine", "Fluorine (F)", "Oxygen"],
        correctAnswer: "Fluorine (F)",
      },
      {
        question: "What is the value of Avogadro's Number (N_A)?",
        options: [
          "6.022 x 10²²",
          "6.022 x 10²³",
          "3.011 x 10²³",
          "1.602 x 10⁻¹⁹",
        ],
        correctAnswer: "6.022 x 10²³",
      },
      {
        question:
          "What is the molar volume of any ideal gas at Standard Temperature and Pressure (STP)?",
        options: ["22.414 dm³", "24.0 dm³", "1 dm³", "100 cm³"],
        correctAnswer: "22.414 dm³",
      },
      {
        question:
          "The simplest whole-number ratio of atoms in a compound is known as the:",
        options: [
          "Molecular Formula",
          "Structural Formula",
          "Ionic Formula",
          "Empirical Formula",
        ],
        correctAnswer: "Empirical Formula",
      },
      {
        question:
          "If the empirical formula of a compound is CH₂O and its molecular mass is 180 g/mol, what is its molecular formula?",
        options: ["C₂H₄O₂", "C₃H₆O₃", "C₆H₁₂O₆", "C₇H₁₄O₇"],
        correctAnswer: "C₆H₁₂O₆",
      },
      {
        question:
          "In combustion analysis, what substance is commonly used to absorb H₂O?",
        options: [
          "Potassium Hydroxide (KOH)",
          "Magnesium perchlorate (Mg(ClO₄)₂)",
          "Sodium Chloride (NaCl)",
          "Sulfuric Acid (H₂SO₄)",
        ],
        correctAnswer: "Magnesium perchlorate (Mg(ClO₄)₂)",
      },
      {
        question:
          "The reactant that is completely consumed in a chemical reaction and limits the amount of product formed is called the:",
        options: [
          "Excess Reactant",
          "Catalyst",
          "Limiting Reactant",
          "Product",
        ],
        correctAnswer: "Limiting Reactant",
      },
      {
        question:
          "The maximum amount of product that can be formed from the given amounts of reactants is known as the:",
        options: [
          "Actual Yield",
          "Theoretical Yield",
          "Percentage Yield",
          "Experimental Yield",
        ],
        correctAnswer: "Theoretical Yield",
      },
      {
        question:
          "Which of the following is NOT a reason for low actual yield in an experiment?",
        options: [
          "Side reactions occurring",
          "Incomplete reaction (equilibrium)",
          "Perfectly efficient filtration and crystallization",
          "Mechanical losses during transfer",
        ],
        correctAnswer: "Perfectly efficient filtration and crystallization",
      },
      {
        question:
          "An ion that is smaller than its parent atom and is formed through an endothermic process is a(n):",
        options: ["Anion", "Cation", "Isotope", "Molecule"],
        correctAnswer: "Cation",
      },
      {
        question:
          "Calculate the number of moles in 32 grams of Methane (CH₄). (Atomic masses: C=12, H=1)",
        options: ["1 mole", "2 moles", "0.5 moles", "4 moles"],
        correctAnswer: "2 moles",
      },
      {
        question: "The percentage yield is calculated as:",
        options: [
          "(Theoretical Yield / Actual Yield) x 100",
          "(Actual Yield / Theoretical Yield) x 100",
          "Theoretical Yield - Actual Yield",
          "Actual Yield + Theoretical Yield",
        ],
        correctAnswer: "(Actual Yield / Theoretical Yield) x 100",
      },
      {
        question: "Which of the following is an example of a molecular ion?",
        options: ["Na⁺", "Cl⁻", "CH₄⁺", "He"],
        correctAnswer: "CH₄⁺",
      },
      {
        question: "How many neutrons are in the isotope Bromine-81 (³⁵Br⁸¹)?",
        options: ["35", "81", "46", "116"],
        correctAnswer: "46",
      },
      {
        question:
          "A compound contains 63.63% Nitrogen and 36.36% Oxygen. What is its empirical formula? (Atomic masses: N=14, O=16)",
        options: ["NO", "NO₂", "N₂O", "N₂O₅"],
        correctAnswer: "N₂O",
      },
      {
        question:
          "The formula: Molecular Formula = n × (Empirical Formula) is known as:",
        options: [
          "The Ratio Formula",
          "The Linking Formula",
          "The Molar Formula",
          "Avogadro's Law",
        ],
        correctAnswer: "The Linking Formula",
      },
      {
        question:
          "In the mass-mass calculation steps for stoichiometry, what is the first step?",
        options: [
          "Convert moles of reactant to mass.",
          "Use the mole ratio from the balanced equation.",
          "Convert the given mass of a substance to moles.",
          "Calculate the percentage yield.",
        ],
        correctAnswer: "Convert the given mass of a substance to moles.",
      },
      {
        question: "The defining characteristic of an element is its:",
        options: [
          "Mass number",
          "Number of neutrons",
          "Atomic number (number of protons)",
          "Number of isotopes",
        ],
        correctAnswer: "Atomic number (number of protons)",
      },
      {
        question: "In which list are all elements mono-isotopic?",
        options: [
          "Gold, Carbon, Sodium",
          "Fluorine, Iodine, Arsenic",
          "Oxygen, Nitrogen, Fluorine",
          "Sodium, Chlorine, Gold",
        ],
        correctAnswer: "Fluorine, Iodine, Arsenic",
      },
      {
        question:
          "A compound has an empirical formula of N₂O. This represents the:",
        options: [
          "Actual number of atoms in the molecule.",
          "Simplest whole-number ratio of atoms.",
          "Total mass of the compound.",
          "Number of covalent bonds.",
        ],
        correctAnswer: "Simplest whole-number ratio of atoms.",
      },
      {
        question:
          "What is the total number of covalent bonds in one molecule of methane (CH₄)?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
      },
      {
        question:
          "If 10g of methane (molar mass = 16 g/mol) are used, how many molecules of methane are present? (N_A = 6.022 x 10²³)",
        options: ["3.76 x 10²³", "6.022 x 10²³", "1.6 x 10²⁴", "0.625"],
        correctAnswer: "3.76 x 10²³",
      },
      {
        question:
          "The chemical properties of isotopes of an element are nearly identical because they have the same:",
        options: [
          "Mass number",
          "Number of neutrons",
          "Number of electrons and protons",
          "Physical properties",
        ],
        correctAnswer: "Number of electrons and protons",
      },
      {
        question:
          "What is the correct calculation for the number of moles (n) from a given number of particles (N)?",
        options: ["n = N × N_A", "n = N_A / N", "n = N / N_A", "n = N + N_A"],
        correctAnswer: "n = N / N_A",
      },
      {
        question:
          "The formation of poly-negative ions (like O²⁻ from O⁻) is an endothermic process due to:",
        options: [
          "Increased nuclear charge",
          "Repulsion between the negative ion and the incoming electron",
          "The small size of the atom",
          "The high ionization energy",
        ],
        correctAnswer:
          "Repulsion between the negative ion and the incoming electron",
      },
      {
        question:
          "Which of these represents a set of isoelectronic species (having the same number of electrons)?",
        options: [
          "Na⁺, Mg²⁺, F⁻",
          "Li, Be, B",
          "Cl⁻, Br⁻, I⁻",
          "Fe²⁺, Fe³⁺, Co²⁺",
        ],
        correctAnswer: "Na⁺, Mg²⁺, F⁻",
      },
    ],
    "Atomic Structure": [
      {
        question:
          "Who is credited with the discovery of positive rays (canal rays)?",
        options: [
          "J.J. Thomson",
          "James Chadwick",
          "Niels Bohr",
          "Eugene Goldstein",
        ],
        correctAnswer: "Eugene Goldstein",
      },
      {
        question:
          "Where do positive rays originate in a modified Crookes tube?",
        options: [
          "From the cathode surface",
          "From the anode surface",
          "From the residual gas molecules in the tube",
          "From outside the tube",
        ],
        correctAnswer: "From the residual gas molecules in the tube",
      },
      {
        question:
          "How does the charge-to-mass (e/m) ratio of positive rays compare to that of electrons?",
        options: [
          "It is identical.",
          "It is considerably larger.",
          "It is considerably smaller.",
          "It is always zero.",
        ],
        correctAnswer: "It is considerably smaller.",
      },
      {
        question: "The e/m ratio of positive rays is not constant because:",
        options: [
          "Their charge changes.",
          "Their mass depends on the gas used.",
          "The electric field varies.",
          "The cathode material changes.",
        ],
        correctAnswer: "Their mass depends on the gas used.",
      },
      {
        question:
          "Which gas, when used in a discharge tube, produces positive rays with the highest e/m ratio?",
        options: ["Helium", "Neon", "Hydrogen", "Oxygen"],
        correctAnswer: "Hydrogen",
      },
      {
        question:
          "Which subatomic particle has a relative mass of approximately 1/1836th of a proton?",
        options: ["Neutron", "Positron", "Electron", "Quark"],
        correctAnswer: "Electron",
      },
      {
        question:
          "According to Bohr's model, what happens when an electron jumps from a higher energy orbit (E₂) to a lower energy orbit (E₁)?",
        options: [
          "It absorbs a photon of energy E₂ + E₁.",
          "It emits a photon of energy E₂ - E₁.",
          "It absorbs a photon of energy E₂ - E₁.",
          "It remains in a stable state without any energy change.",
        ],
        correctAnswer: "It emits a photon of energy E₂ - E₁.",
      },
      {
        question:
          "The spectral lines in the Lyman series of the hydrogen spectrum are found in which region?",
        options: ["Visible", "Infrared", "Ultraviolet", "Microwave"],
        correctAnswer: "Ultraviolet",
      },
      {
        question:
          "An electron transition in a hydrogen atom results in the emission of a photon of green light. What is the principal quantum number (n) of the final state?",
        options: ["n=1", "n=2", "n=3", "n=4"],
        correctAnswer: "n=2",
      },
      {
        question:
          "In the Bohr model, the radius of an orbit (r_n) is directly proportional to:",
        options: ["n", "1/n", "n²", "1/n²"],
        correctAnswer: "n²",
      },
      {
        question:
          "In the Bohr model, how does the energy difference between consecutive orbits change as 'n' increases?",
        options: [
          "It increases.",
          "It decreases.",
          "It stays the same.",
          "It becomes zero.",
        ],
        correctAnswer: "It decreases.",
      },
      {
        question:
          "Which quantum number primarily determines the energy level and size of an orbital?",
        options: [
          "Azimuthal (l)",
          "Magnetic (m_l)",
          "Principal (n)",
          "Spin (m_s)",
        ],
        correctAnswer: "Principal (n)",
      },
      {
        question: "What is the shape of a p-orbital?",
        options: ["Spherical", "Dumbbell", "Cloverleaf", "Complex multi-lobed"],
        correctAnswer: "Dumbbell",
      },
      {
        question:
          "For a given principal quantum number n=3, what are the possible values for the azimuthal quantum number (l)?",
        options: ["0, 1, 2, 3", "1, 2, 3", "0, 1, 2", "-2, -1, 0, 1, 2"],
        correctAnswer: "0, 1, 2",
      },
      {
        question:
          "If the azimuthal quantum number (l) is 2, what are the possible values for the magnetic quantum number (m_l)?",
        options: ["0, 1, 2", "-1, 0, +1", "0", "-2, -1, 0, +1, +2"],
        correctAnswer: "-2, -1, 0, +1, +2",
      },
      {
        question:
          "Which of the following sets of quantum numbers (n, l, m_l, m_s) is NOT allowed?",
        options: [
          "(3, 2, -1, +1/2)",
          "(4, 0, 0, -1/2)",
          "(2, 2, 1, +1/2)",
          "(5, 1, 0, +1/2)",
        ],
        correctAnswer: "(2, 2, 1, +1/2)",
      },
      {
        question: "How many orbitals are in a d-subshell (l=2)?",
        options: ["1", "3", "5", "7"],
        correctAnswer: "5",
      },
      {
        question:
          "The d(z²) orbital is unique because its shape consists of a dumbbell along the z-axis and a:",
        options: [
          "Second dumbbell on the x-axis",
          "Torus (donut shape) in the xy-plane",
          "Four lobes between the axes",
          "Spherical node",
        ],
        correctAnswer: "Torus (donut shape) in the xy-plane",
      },
      {
        question:
          "The Aufbau principle states that electrons fill orbitals in order of:",
        options: [
          "Increasing atomic number",
          "Decreasing energy",
          "Increasing energy",
          "Alphabetical order of subshell",
        ],
        correctAnswer: "Increasing energy",
      },
      {
        question:
          "What is the maximum number of electrons an orbital can hold, according to the Pauli Exclusion Principle?",
        options: ["1", "2", "6", "10"],
        correctAnswer: "2",
      },
      {
        question:
          "Hund's rule states that for degenerate orbitals, electrons will:",
        options: [
          "Pair up immediately",
          "Occupy separate orbitals with parallel spins before pairing",
          "Occupy separate orbitals with opposite spins before pairing",
          "Only occupy one orbital per subshell",
        ],
        correctAnswer:
          "Occupy separate orbitals with parallel spins before pairing",
      },
      {
        question:
          "What is the correct electronic configuration for a neutral Copper atom (Cu, Z=29)?",
        options: [
          "[Ar] 4s² 3d⁹",
          "[Ar] 4s¹ 3d¹⁰",
          "[Ar] 4s⁰ 3d¹¹",
          "[Ar] 3d⁹ 4s²",
        ],
        correctAnswer: "[Ar] 4s¹ 3d¹⁰",
      },
      {
        question:
          "What is the correct electronic configuration for the Fe²⁺ ion? (Fe, Z=26)",
        options: ["[Ar] 4s² 3d⁴", "[Ar] 4s⁰ 3d⁶", "[Ar] 4s¹ 3d⁵", "[Ar] 3d⁵"],
        correctAnswer: "[Ar] 4s⁰ 3d⁶",
      },
      {
        question:
          "The concept that half-filled and completely-filled subshells have extra stability explains the anomalous configuration of:",
        options: [
          "Sodium and Chlorine",
          "Chromium and Copper",
          "Helium and Neon",
          "Iron and Cobalt",
        ],
        correctAnswer: "Chromium and Copper",
      },
      {
        question:
          "The Balmer series corresponds to electron transitions ending at n=2. These transitions primarily emit light in what region of the spectrum?",
        options: ["Ultraviolet", "Infrared", "Visible", "X-ray"],
        correctAnswer: "Visible",
      },
      {
        question: "An orbital with n=4 and l=1 is designated as:",
        options: ["4s", "4p", "4d", "4f"],
        correctAnswer: "4p",
      },
      {
        question:
          "Which principle or rule dictates the filling order of orbitals using the (n+l) value?",
        options: [
          "Hund's Rule",
          "Pauli Exclusion Principle",
          "Aufbau Principle",
          "Bohr's Postulates",
        ],
        correctAnswer: "Aufbau Principle",
      },
      {
        question: "The discovery of the neutron is credited to:",
        options: [
          "J.J. Thomson",
          "Ernest Rutherford",
          "Eugene Goldstein",
          "James Chadwick",
        ],
        correctAnswer: "James Chadwick",
      },
      {
        question: "Which of the following describes a nodal plane?",
        options: [
          "A region of maximum electron probability.",
          "A region where the probability of finding an electron is exactly zero.",
          "The path an electron takes around the nucleus.",
          "The boundary surface of an orbital.",
        ],
        correctAnswer:
          "A region where the probability of finding an electron is exactly zero.",
      },
      {
        question:
          "How many p-orbitals exist in a given energy level (for n > 1)?",
        options: ["1", "3", "5", "7"],
        correctAnswer: "3",
      },
      {
        question:
          "The spin quantum number (m_s) can have which of the following values?",
        options: ["0 and 1", "-1, 0, +1", "Only +1/2", "+1/2 and -1/2"],
        correctAnswer: "+1/2 and -1/2",
      },
      {
        question:
          "Which subatomic particle has a positive charge and a mass of approximately 1 amu?",
        options: ["Electron", "Positron", "Proton", "Neutron"],
        correctAnswer: "Proton",
      },
      {
        question:
          "The Paschen series in the hydrogen spectrum involves electron transitions that end at which principal quantum number?",
        options: ["n=1", "n=2", "n=3", "n=4"],
        correctAnswer: "n=3",
      },
      {
        question: "Which orbital shape is described as 'cloverleaf'?",
        options: ["s-orbital", "p-orbital", "d-orbital", "f-orbital"],
        correctAnswer: "d-orbital",
      },
      {
        question:
          "When forming a cation from a main group element, electrons are removed from the:",
        options: [
          "Innermost shell",
          "Outermost shell",
          "d-subshell only",
          "s-subshell only",
        ],
        correctAnswer: "Outermost shell",
      },
      {
        question: "The mass of an atom is concentrated almost entirely in its:",
        options: ["Electron cloud", "Outermost shell", "Nucleus", "Orbitals"],
        correctAnswer: "Nucleus",
      },
      {
        question:
          "Planck's theory states that energy is emitted or absorbed in discrete packets called:",
        options: ["Electrons", "Protons", "Quanta", "Orbits"],
        correctAnswer: "Quanta",
      },
      {
        question:
          "The angular momentum of an electron in a Bohr orbit is an integral multiple of:",
        options: ["h", "h / 2π", "2π / h", "h²"],
        correctAnswer: "h / 2π",
      },
      {
        question:
          "The f-subshell (l=3) first appears in which principal energy level?",
        options: ["n=2", "n=3", "n=4", "n=5"],
        correctAnswer: "n=4",
      },
      {
        question:
          "How many unpaired electrons are in a neutral nitrogen atom (Z=7)?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "3",
      },
      {
        question:
          "A positive ion produced from hydrogen gas (H₂) is simply a(n):",
        options: ["Electron", "Neutron", "Hydride ion", "Proton"],
        correctAnswer: "Proton",
      },
      {
        question: "Which of the following is NOT a property of positive rays?",
        options: [
          "They carry a positive charge.",
          "They are deflected by electric fields.",
          "They have a constant e/m ratio.",
          "Their penetration power is very low.",
        ],
        correctAnswer: "They have a constant e/m ratio.",
      },
      {
        question:
          "The 'm' in the e/m ratio for a canal ray refers to the mass of:",
        options: [
          "A single electron",
          "A single proton",
          "The ion of the gas in the tube",
          "The cathode material",
        ],
        correctAnswer: "The ion of the gas in the tube",
      },
      {
        question:
          "Which orbital is filled after the 3p orbital, according to the Aufbau principle?",
        options: ["3d", "4s", "4p", "3s"],
        correctAnswer: "4s",
      },
      {
        question:
          "A set of orbitals with the same energy level (e.g., the three p-orbitals) are called:",
        options: [
          "Isotopes",
          "Degenerate orbitals",
          "Valence orbitals",
          "Core orbitals",
        ],
        correctAnswer: "Degenerate orbitals",
      },
      {
        question:
          "The concept that 'orbits are not equally spaced' is a key conclusion from which aspect of Bohr's model?",
        options: [
          "The energy formula (E_n ∝ 1/n²)",
          "The radius formula (r_n ∝ n²)",
          "The quantization of angular momentum",
          "The stability of stationary states",
        ],
        correctAnswer: "The radius formula (r_n ∝ n²)",
      },
      {
        question:
          "What is the maximum number of electrons that can be accommodated in a shell with principal quantum number n=3?",
        options: ["2", "8", "18", "32"],
        correctAnswer: "18",
      },
      {
        question: "Which of the following orbitals does not exist?",
        options: ["1s", "3d", "2d", "4f"],
        correctAnswer: "2d",
      },
      {
        question:
          "The probability of finding an electron is uniform in all directions for which type of orbital?",
        options: ["p-orbital", "s-orbital", "d-orbital", "f-orbital"],
        correctAnswer: "s-orbital",
      },
      {
        question:
          "The modern quantum-mechanical model describes an electron's location in terms of:",
        options: [
          "A fixed circular path",
          "A region of high probability (orbital)",
          "An elliptical orbit",
          "A planetary model",
        ],
        correctAnswer: "A region of high probability (orbital)",
      },
      {
        question:
          "For the p-subshell (l=1), the magnetic quantum number (m_l) can have values of -1, 0, and +1. This indicates that there are:",
        options: [
          "Three p-orbitals with different shapes",
          "Three p-orbitals with different sizes",
          "Three p-orbitals with different orientations",
          "One p-orbital that can hold three electrons",
        ],
        correctAnswer: "Three p-orbitals with different orientations",
      },
      {
        question:
          "An element has the electron configuration [Ar] 4s² 3d⁵. This element is:",
        options: [
          "Chromium (Cr)",
          "Manganese (Mn)",
          "Iron (Fe)",
          "Vanadium (V)",
        ],
        correctAnswer: "Manganese (Mn)",
      },
      {
        question:
          "A 'last-in, first-out' logic for removing electrons during ionization is a common fallacy for which group of elements?",
        options: [
          "Alkali metals",
          "Halogens",
          "Noble gases",
          "Transition metals",
        ],
        correctAnswer: "Transition metals",
      },
      {
        question:
          "The phenomenon where spectral lines split in a magnetic field is known as the:",
        options: [
          "Photoelectric effect",
          "Compton effect",
          "Zeeman effect",
          "Aufbau principle",
        ],
        correctAnswer: "Zeeman effect",
      },
      {
        question: "How many nodal planes does a p_x orbital have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
      },
      {
        question:
          "Which of the following is the 'cardinal rule' for ionizing transition metals?",
        options: [
          "Remove electrons from the d-orbital first.",
          "Remove electrons from the highest principal quantum number (n) shell first.",
          "Remove electrons in the reverse order of filling.",
          "Remove one electron from s and one from d.",
        ],
        correctAnswer:
          "Remove electrons from the highest principal quantum number (n) shell first.",
      },
      {
        question:
          "The Brackett series in the hydrogen spectrum, found in the infrared region, corresponds to transitions ending at:",
        options: ["n=2", "n=3", "n=4", "n=5"],
        correctAnswer: "n=4",
      },
      {
        question:
          "The quantum number 'l' determines the shape of the orbital. What is the letter designation for l=3?",
        options: ["s", "p", "d", "f"],
        correctAnswer: "f",
      },
      {
        question: "The energy of a photon is directly proportional to its:",
        options: ["Wavelength", "Velocity", "Frequency", "Amplitude"],
        correctAnswer: "Frequency",
      },
      {
        question:
          "Which of the d-orbitals have their lobes oriented *along* the coordinate axes?",
        options: [
          "d(xy), d(yz), d(xz)",
          "d(x²-y²), d(z²)",
          "All five d-orbitals",
          "Only the d(xy) orbital",
        ],
        correctAnswer: "d(x²-y²), d(z²)",
      },
    ],
  },
  Biology: {
    "Cell Structure": [
      {
        question: "Which organelle is known as the 'powerhouse' of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
        correctAnswer: "Mitochondrion",
      },
      {
        question: "What is the function of the cell membrane?",
        options: [
          "Provide structure",
          "Control what enters and leaves the cell",
          "Produce energy",
          "Store genetic material",
        ],
        correctAnswer: "Control what enters and leaves the cell",
      },
    ],
    Genetics: [
      {
        question: "Who is known as the father of genetics?",
        options: [
          "Charles Darwin",
          "Gregor Mendel",
          "James Watson",
          "Francis Crick",
        ],
        correctAnswer: "Gregor Mendel",
      },
    ],
    "Human Physiology": [
      {
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Thalamus"],
        correctAnswer: "Cerebellum",
      },
    ],
  },
  "Logic & Reasoning": {
    Analogies: [
      {
        question: "Doctor is to Hospital as Teacher is to ___?",
        options: ["Book", "Student", "School", "Desk"],
        correctAnswer: "School",
      },
    ],
    "Series Completion": [
      {
        question: "Find the next number in the series: 2, 4, 8, 16, ___",
        options: ["24", "32", "20", "40"],
        correctAnswer: "32",
      },
    ],
    "Critical Thinking": [
      {
        question: "If all cats have tails, and Fluffy is a cat, then:",
        options: [
          "Fluffy has no tail",
          "Fluffy might have a tail",
          "Fluffy has a tail",
          "Cats don't like Fluffy",
        ],
        correctAnswer: "Fluffy has a tail",
      },
    ],
  },
  Physics: {
    Vectors: [
      {
        question: "Which of the following is a scalar quantity?",
        options: ["Force", "Velocity", "Mass", "Acceleration"],
        correctAnswer: "Mass",
      },
      {
        question:
          "A force of 20 N makes an angle of 60° with the x-axis. What is the magnitude of its x-component (F_x)?",
        options: ["20 N", "17.32 N", "10 N", "8.66 N"],
        correctAnswer: "10 N",
      },
      {
        question:
          "If a vector has perpendicular components R_x = 6 units and R_y = 8 units, what is the magnitude of the resultant vector R?",
        options: ["14 units", "10 units", "2 units", "48 units"],
        correctAnswer: "10 units",
      },
      {
        question:
          "Vector A = 2i + 5j and Vector B = 3i - 1j. What is the resultant vector R = A + B?",
        options: ["5i + 4j", "1i + 6j", "-1i + 6j", "5i + 6j"],
        correctAnswer: "5i + 4j",
      },
      {
        question:
          "Two forces of magnitude A=3N and B=4N act on a point with an angle of 60° between them. What is the magnitude of the resultant force R? (Use R² = A² + B² + 2ABcosθ)",
        options: ["5 N", "7 N", "√37 N", "√13 N"],
        correctAnswer: "√37 N",
      },
      {
        question:
          "A vector lies in the third quadrant. What are the signs of its x and y components?",
        options: [
          "x is positive, y is positive",
          "x is negative, y is positive",
          "x is negative, y is negative",
          "x is positive, y is negative",
        ],
        correctAnswer: "x is negative, y is negative",
      },
      {
        question: "The scalar (dot) product of two perpendicular vectors is:",
        options: [
          "Maximum",
          "Minimum",
          "Zero",
          "Equal to their vector product",
        ],
        correctAnswer: "Zero",
      },
      {
        question:
          "Given vectors A = 3i + 2j and B = 2i - 4j, what is their scalar product (A · B)?",
        options: ["14", "-2", "6", "-8"],
        correctAnswer: "-2",
      },
      {
        question:
          "What does the projection of vector A onto vector B represent?",
        options: [
          "The magnitude of A",
          "The magnitude of B",
          "The component of A in the direction of B",
          "The cross product of A and B",
        ],
        correctAnswer: "The component of A in the direction of B",
      },
      {
        question:
          "The direction of the vector (cross) product A × B is determined by:",
        options: [
          "The Law of Cosines",
          "The Right-Hand Rule",
          "The scalar product",
          "The Pythagorean theorem",
        ],
        correctAnswer: "The Right-Hand Rule",
      },
      {
        question:
          "What is the result of the cross product of unit vectors î × ĵ?",
        options: ["0", "î", "ĵ", "k̂"],
        correctAnswer: "k̂",
      },
      {
        question:
          "What is the result of the dot product of unit vectors ĵ · ĵ?",
        options: ["0", "1", "î", "k̂"],
        correctAnswer: "1",
      },
      {
        question:
          "The magnitude of the cross product |A × B| is maximum when the angle θ between the vectors is:",
        options: ["0°", "45°", "90°", "180°"],
        correctAnswer: "90°",
      },
    ],
    "A.C.": [
      {
        question:
          "Which statement best describes the nature of alternating current (A.C.)?",
        options: [
          "It flows in one direction with constant magnitude.",
          "It changes direction and magnitude continuously.",
          "It flows only when a circuit is closed.",
          "It has a constant magnitude but changing direction.",
        ],
        correctAnswer: "It changes direction and magnitude continuously.",
      },
      {
        question:
          "How many times does A.C. reverse its direction in one complete cycle?",
        options: [
          "Once",
          "Twice",
          "Four times",
          "It depends on the frequency.",
        ],
        correctAnswer: "Once",
      },
      {
        question:
          "A complete cycle of alternating current corresponds to a change in angle of how many radians?",
        options: ["π / 2", "π", "2π", "4π"],
        correctAnswer: "2π",
      },
      {
        question:
          "The instantaneous voltage in an A.C. circuit is given by V = V₀ sin(θ). If the peak voltage (V₀) is 170V, what is the instantaneous voltage when θ = π/2 radians (90°)?",
        options: ["0 V", "85 V", "170 V", "120 V"],
        correctAnswer: "170 V",
      },
      {
        question:
          "An A.C. voltage has a peak value (V₀) of 200V. What is its peak-to-peak voltage (V_pp)?",
        options: ["100 V", "200 V", "282 V", "400 V"],
        correctAnswer: "400 V",
      },
      {
        question:
          "An A.C. voltage has a peak value (V₀) of 311V. What is its RMS value (V_rms)?",
        options: ["311 V", "440 V", "220 V", "155.5 V"],
        correctAnswer: "220 V",
      },
      {
        question:
          "If the RMS current (I_rms) in a circuit is 10 A, what is the peak current (I₀)?",
        options: ["10 A", "7.07 A", "14.14 A", "20 A"],
        correctAnswer: "14.14 A",
      },
      {
        question: "What does the RMS value of an A.C. quantity represent?",
        options: [
          "The average value over one cycle",
          "The peak value",
          "The effective D.C. equivalent value",
          "The instantaneous value",
        ],
        correctAnswer: "The effective D.C. equivalent value",
      },
      {
        question:
          "When two A.C. waveforms have a phase difference of π/2 radians (90°), they are said to be in:",
        options: ["Phase", "Anti-phase", "Quadrature", "Resonance"],
        correctAnswer: "Quadrature",
      },
      {
        question:
          "What is the phase difference between voltage and current in a purely resistive A.C. circuit?",
        options: [
          "90° (π/2 radians)",
          "180° (π radians)",
          "45° (π/4 radians)",
          "0°",
        ],
        correctAnswer: "0°",
      },
      {
        question:
          "How does the resistance of a pure resistor change with the frequency of the A.C. supply?",
        options: [
          "It increases with frequency",
          "It decreases with frequency",
          "It is independent of frequency",
          "It becomes zero at high frequency",
        ],
        correctAnswer: "It is independent of frequency",
      },
      {
        question:
          "In a purely capacitive A.C. circuit, what is the phase relationship between current and voltage?",
        options: [
          "Current and voltage are in-phase",
          "Current leads voltage by 90°",
          "Voltage leads current by 90°",
          "Current lags voltage by 180°",
        ],
        correctAnswer: "Current leads voltage by 90°",
      },
      {
        question: "The capacitive reactance (X_C) is given by the formula:",
        options: [
          "X_C = 2πfC",
          "X_C = 1 / (2πfC)",
          "X_C = C / (2πf)",
          "X_C = 2πf / C",
        ],
        correctAnswer: "X_C = 1 / (2πfC)",
      },
      {
        question:
          "What is the average power consumed by a pure inductor over one complete A.C. cycle?",
        options: ["V_rms * I_rms", "I_rms² * X_L", "0", "Infinite"],
        correctAnswer: "0",
      },
      {
        question: "What is the formula for inductive reactance (X_L)?",
        options: ["X_L = ω / L", "X_L = 1 / (ωL)", "X_L = ωL", "X_L = L / ω"],
        correctAnswer: "X_L = ωL",
      },
      {
        question:
          "In a series R-L circuit, the impedance (Z) is calculated using:",
        options: [
          "Z = R + X_L",
          "Z = √(R² + X_L²)",
          "Z = R - X_L",
          "Z = √(R² - X_L²)",
        ],
        correctAnswer: "Z = √(R² + X_L²)",
      },
      {
        question:
          "An R-L circuit has a resistance of 3 Ω and an inductive reactance of 4 Ω. What is its impedance?",
        options: ["7 Ω", "1 Ω", "5 Ω", "12 Ω"],
        correctAnswer: "5 Ω",
      },
      {
        question: "In a series R-C circuit, the voltage:",
        options: [
          "Leads the current",
          "Is in-phase with the current",
          "Lags the current",
          "Is always zero",
        ],
        correctAnswer: "Lags the current",
      },
      {
        question:
          "An R-C circuit has a resistance R=8Ω and capacitive reactance Xc=6Ω. The tangent of the phase angle (tan φ) is:",
        options: ["-0.75", "0.75", "-1.33", "1.33"],
        correctAnswer: "-0.75",
      },
      {
        question:
          "For a series R-L-C circuit, what is the condition for resonance?",
        options: ["X_L > X_C", "X_C > X_L", "X_L = X_C", "R = 0"],
        correctAnswer: "X_L = X_C",
      },
      {
        question:
          "In a series R-L-C circuit, if X_L > X_C, the circuit is predominantly:",
        options: [
          "Resistive",
          "Capacitive (current leads voltage)",
          "Inductive (current lags voltage)",
          "At resonance",
        ],
        correctAnswer: "Inductive (current lags voltage)",
      },
      {
        question:
          "In a series R-L-C circuit, R = 8 Ω, X_L = 12 Ω, and X_C = 6 Ω. What is the total impedance (Z)?",
        options: ["26 Ω", "10 Ω", "14 Ω", "6 Ω"],
        correctAnswer: "10 Ω",
      },
      {
        question:
          "In a phasor diagram for a series RLC circuit, V_R=30V, V_L=50V, and V_C=10V. What is the total voltage V?",
        options: ["90V", "70V", "50V", "40V"],
        correctAnswer: "50V",
      },
      {
        question:
          "The power factor (cos φ) in a series A.C. circuit is defined as:",
        options: ["Z / R", "R / Z", "X_L / R", "X_C / Z"],
        correctAnswer: "R / Z",
      },
      {
        question:
          "What is the power factor of a purely reactive circuit (containing only an inductor or capacitor)?",
        options: ["1", "0", "-1", "0.707"],
        correctAnswer: "0",
      },
      {
        question:
          "The real power consumed in an A.C. circuit is given by P = V_rms * I_rms * cos(φ). What does cos(φ) represent?",
        options: ["Impedance", "Reactance", "Power Factor", "Phase Angle"],
        correctAnswer: "Power Factor",
      },
      {
        question: "What is a key characteristic of electromagnetic (EM) waves?",
        options: [
          "They require a medium to propagate",
          "They are longitudinal waves",
          "They do not need a medium to propagate",
          "Their electric and magnetic fields are parallel",
        ],
        correctAnswer: "They do not need a medium to propagate",
      },
      {
        question:
          "In an EM wave, the angle between the electric field (E), the magnetic field (B), and the direction of propagation is:",
        options: ["0°", "45°", "90°", "180°"],
        correctAnswer: "90°",
      },
      {
        question: "Which of the following EM waves has the highest frequency?",
        options: ["Visible Light", "Ultraviolet", "X-Rays", "Gamma Rays"],
        correctAnswer: "Gamma Rays",
      },
    ],
    "Fluid Dynamics": [
      {
        question:
          "How does the terminal velocity of a falling object change over time?",
        options: [
          "It is always constant",
          "It decreases and then becomes zero",
          "It increases initially and then becomes constant",
          "It increases indefinitely",
        ],
        correctAnswer: "It increases initially and then becomes constant",
      },
      {
        question:
          "The terminal velocity of a sphere is directly proportional to its mass (m) and the square of its radius (r²). If the mass of a sphere is doubled, its terminal velocity will:",
        options: [
          "Be halved",
          "Be doubled",
          "Be quadrupled",
          "Remain the same",
        ],
        correctAnswer: "Be doubled",
      },
      {
        question:
          "Fluid flow that is smooth and orderly is called ________, while chaotic and irregular flow is called ________.",
        options: [
          "Turbulent, Laminar",
          "Laminar, Turbulent",
          "Static, Dynamic",
          "Viscous, Non-viscous",
        ],
        correctAnswer: "Laminar, Turbulent",
      },
      {
        question:
          "The drag force on a sphere in a laminar flow is given by F = 6πηrv. What are the dimensions of the viscosity constant (η)?",
        options: ["MLT⁻²", "ML⁻¹T⁻¹", "ML⁻²T", "MT⁻¹"],
        correctAnswer: "ML⁻¹T⁻¹",
      },
      {
        question:
          "How does an increase in temperature affect the viscosity of a liquid versus a gas?",
        options: [
          "Decreases in both",
          "Increases in both",
          "Decreases in liquid, increases in gas",
          "Increases in liquid, decreases in gas",
        ],
        correctAnswer: "Decreases in liquid, increases in gas",
      },
      {
        question: "The primary cause of viscosity in gases is:",
        options: [
          "Cohesive forces between molecules",
          "Diffusion of molecules between layers",
          "Pressure applied to the gas",
          "Gravitational forces",
        ],
        correctAnswer: "Diffusion of molecules between layers",
      },
      {
        question: "How does pressure generally affect the viscosity of a gas?",
        options: [
          "It increases viscosity significantly",
          "It decreases viscosity significantly",
          "It has little to no effect",
          "It depends on the temperature",
        ],
        correctAnswer: "It has little to no effect",
      },
      {
        question:
          "Blood is approximately 3-5 times more viscous than water. This is primarily due to:",
        options: [
          "Its higher temperature",
          "The presence of red blood cells",
          "Its lower density",
          "Its flow speed in arteries",
        ],
        correctAnswer: "The presence of red blood cells",
      },
      {
        question:
          "During blood pressure measurement, the 80 mmHg diastolic pressure corresponds to which type of blood flow?",
        options: [
          "Turbulent flow",
          "No flow",
          "Laminar flow",
          "Streamline flow",
        ],
        correctAnswer: "Streamline flow",
      },
      {
        question:
          "For a compressible fluid, the equation of continuity states that the ________ per unit time is constant.",
        options: ["Volume", "Area", "Mass", "Velocity"],
        correctAnswer: "Mass",
      },
      {
        question:
          "Bernoulli’s principle states that for a horizontal flow, as the speed of a fluid increases, its:",
        options: [
          "Pressure increases",
          "Pressure decreases",
          "Pressure remains constant",
          "Density increases",
        ],
        correctAnswer: "Pressure decreases",
      },
      {
        question:
          "For a static fluid (V=0), Bernoulli's equation simplifies to:",
        options: [
          "P + ρgH = constant",
          "P + ½ρV² = constant",
          "ρgH = constant",
          "P = constant",
        ],
        correctAnswer: "P + ρgH = constant",
      },
      {
        question:
          "A large water tank of height H=10m has a small leak at a height h=1m from the bottom. What is the range (R) of the water stream hitting the ground?",
        options: ["18 m", "9 m", "6 m", "3 m"],
        correctAnswer: "6 m",
      },
      {
        question:
          "The ability of a water strider or a needle to float on the surface of water, despite being denser, is due to:",
        options: [
          "Viscosity",
          "Bernoulli's Principle",
          "Surface Tension",
          "Drag Force",
        ],
        correctAnswer: "Surface Tension",
      },
      {
        question:
          "In which situation is the drag force on an object proportional to the square of its velocity (v²)?",
        options: [
          "At very low speeds (laminar flow)",
          "At high speeds (turbulent flow)",
          "Only in gases",
          "When the object is stationary",
        ],
        correctAnswer: "At high speeds (turbulent flow)",
      },
    ],
    Electronics: [
      {
        question:
          "In a P-type semiconductor, what are the majority and minority charge carriers, respectively?",
        options: [
          "Electrons, Holes",
          "Holes, Electrons",
          "Holes, Protons",
          "Electrons, Neutrons",
        ],
        correctAnswer: "Holes, Electrons",
      },
      {
        question:
          "Which type of doping is used to create an N-type semiconductor?",
        options: [
          "Trivalent doping",
          "Pentavalent doping",
          "Divalent doping",
          "Monovalent doping",
        ],
        correctAnswer: "Pentavalent doping",
      },
      {
        question:
          "A P-type semiconductor acts as an ________ site due to the presence of holes.",
        options: ["acceptor", "donor", "neutral", "insulator"],
        correctAnswer: "acceptor",
      },
      {
        question:
          "What is the approximate potential barrier for a Germanium (Ge) PN junction diode?",
        options: ["0.1 V", "0.3 V", "0.7 V", "1.1 V"],
        correctAnswer: "0.3 V",
      },
      {
        question:
          "For a Silicon (Si) diode, the potential barrier is approximately:",
        options: ["0.3 V", "0.5 V", "0.7 V", "0.9 V"],
        correctAnswer: "0.7 V",
      },
      {
        question:
          "How must a PN junction be connected for it to be forward-biased?",
        options: [
          "P-type to negative, N-type to positive",
          "P-type to positive, N-type to negative",
          "Both to positive",
          "Both to negative",
        ],
        correctAnswer: "P-type to positive, N-type to negative",
      },
      {
        question:
          "What happens to the width of the potential barrier in a forward-biased diode?",
        options: [
          "It increases",
          "It remains the same",
          "It decreases gradually",
          "It becomes infinite",
        ],
        correctAnswer: "It decreases gradually",
      },
      {
        question: "In a reverse-biased PN junction:",
        options: [
          "The barrier width decreases, and current is maximum.",
          "The barrier width increases, and current is minimal.",
          "The P-type is connected to the positive terminal.",
          "The external field supports the barrier field.",
        ],
        correctAnswer: "The barrier width increases, and current is minimal.",
      },
      {
        question:
          "An N-type semiconductor has a high concentration of electrons and acts as a ________ site.",
        options: ["acceptor", "insulating", "neutral", "donor"],
        correctAnswer: "donor",
      },
      {
        question:
          "What is the primary function of a diode in an electronic circuit?",
        options: [
          "To amplify a signal",
          "To act as a rectifier",
          "To store charge",
          "To provide resistance",
        ],
        correctAnswer: "To act as a rectifier",
      },
      {
        question:
          "The process of converting an alternating current (AC) into a direct current (DC) is called:",
        options: [
          "Amplification",
          "Oscillation",
          "Rectification",
          "Modulation",
        ],
        correctAnswer: "Rectification",
      },
      {
        question:
          "If the input frequency to a half-wave rectifier is 60 Hz, what is the output frequency?",
        options: ["30 Hz", "60 Hz", "120 Hz", "0 Hz"],
        correctAnswer: "60 Hz",
      },
      {
        question:
          "What is the maximum theoretical efficiency of a half-wave rectifier?",
        options: ["100%", "81.2%", "50%", "40.6%"],
        correctAnswer: "40.6%",
      },
      {
        question: "The ripple factor of a half-wave rectifier is:",
        options: ["0.48", "1.0", "1.21", "2.0"],
        correctAnswer: "1.21",
      },
      {
        question:
          "A half-wave rectifier has a peak output voltage (V₀) of 10 V. What is its RMS voltage (V_RMS)?",
        options: ["10 V", "7.07 V", "5 V", "14.1 V"],
        correctAnswer: "5 V",
      },
      {
        question:
          "The peak inverse voltage (PIV) across the diode in a half-wave rectifier is equal to:",
        options: ["V₀ / 2", "V₀", "2V₀", "V₀ / √2"],
        correctAnswer: "V₀",
      },
      {
        question: "The peak factor of a half-wave rectifier is:",
        options: ["1.21", "√2", "1", "2"],
        correctAnswer: "2",
      },
      {
        question:
          "If an AC signal of 50 Hz is applied to a full-wave rectifier, what will be the frequency of the output DC signal?",
        options: ["25 Hz", "50 Hz", "100 Hz", "200 Hz"],
        correctAnswer: "100 Hz",
      },
      {
        question: "What is the maximum efficiency of a full-wave rectifier?",
        options: ["40.6%", "75.5%", "81.2%", "95.1%"],
        correctAnswer: "81.2%",
      },
      {
        question:
          "A full-wave rectifier has a significantly lower ripple factor than a half-wave rectifier. What is its value?",
        options: ["1.21", "1.0", "0.81", "0.48"],
        correctAnswer: "0.48",
      },
      {
        question:
          "For a full-wave rectifier, if the peak voltage is V₀, the RMS voltage (V_RMS) is:",
        options: ["V₀ / 2", "V₀", "2V₀", "V₀ / √2"],
        correctAnswer: "V₀ / √2",
      },
      {
        question:
          "A full-wave bridge rectifier is connected to a transformer with a peak output voltage of 12 V. What is the PIV for the diodes?",
        options: ["6 V", "12 V", "24 V", "17 V"],
        correctAnswer: "12 V",
      },
      {
        question:
          "A full-wave rectifier using a centre-tap transformer has a peak voltage of 15 V across each half of the secondary winding. What is the PIV for each diode?",
        options: ["15 V", "7.5 V", "30 V", "10.6 V"],
        correctAnswer: "30 V",
      },
      {
        question: "The peak factor for a full-wave rectified sine wave is:",
        options: ["2", "√2", "1.21", "0.48"],
        correctAnswer: "√2",
      },
      {
        question:
          "A full-wave rectifier has a peak output voltage (V₀) of 20 V. What is its approximate RMS voltage (V_RMS)?",
        options: ["20 V", "10 V", "28.2 V", "14.14 V"],
        correctAnswer: "14.14 V",
      },
      {
        question: "Comparing rectifiers, which statement is true?",
        options: [
          "Half-wave has higher efficiency than full-wave.",
          "Full-wave has a higher ripple factor than half-wave.",
          "Full-wave output frequency is double the input frequency.",
          "Half-wave PIV is always higher than full-wave PIV.",
        ],
        correctAnswer:
          "Full-wave output frequency is double the input frequency.",
      },
    ],
    "Dawn of Modern Physics": [
      {
        question:
          "Who first introduced the concept of light energy being composed of discrete packets, or 'quanta,' to explain blackbody radiation?",
        options: [
          "Albert Einstein",
          "Max Planck",
          "Louis de Broglie",
          "Carl Anderson",
        ],
        correctAnswer: "Max Planck",
      },
      {
        question:
          "According to modern physics, what is the rest mass of a photon?",
        options: [
          "Equal to an electron's mass",
          "Infinitesimally small but not zero",
          "Zero",
          "Dependent on its energy",
        ],
        correctAnswer: "Zero",
      },
      {
        question:
          "The energy of a photon is given by the formula E = hf. This means a photon's energy is directly proportional to its:",
        options: ["Wavelength", "Speed", "Frequency", "Mass"],
        correctAnswer: "Frequency",
      },
      {
        question:
          "Despite having no rest mass, a photon carries momentum. What is the formula for a photon's momentum (p)?",
        options: ["p = hf", "p = h/λ", "p = mc²", "p = E/c²"],
        correctAnswer: "p = h/λ",
      },
      {
        question:
          "How do photons behave in the presence of an electric or magnetic field?",
        options: [
          "They are deflected towards the positive pole.",
          "They are deflected towards the negative pole.",
          "They are not deflected.",
          "They oscillate within the field.",
        ],
        correctAnswer: "They are not deflected.",
      },
      {
        question:
          "The photoelectric effect is the emission of ________ from a metal surface when light shines on it.",
        options: ["protons", "photons", "neutrons", "electrons"],
        correctAnswer: "electrons",
      },
      {
        question:
          "In the photoelectric effect, increasing the intensity of the light will:",
        options: [
          "Increase the kinetic energy of the emitted electrons.",
          "Increase the number of emitted electrons.",
          "Increase both the number and kinetic energy of electrons.",
          "Have no effect on the emission.",
        ],
        correctAnswer: "Increase the number of emitted electrons.",
      },
      {
        question:
          "What happens in the photoelectric effect if the frequency of the incident light is below the 'threshold frequency' (f₀)?",
        options: [
          "Electrons are emitted with very low energy.",
          "Fewer electrons are emitted.",
          "No electrons are emitted, regardless of intensity.",
          "The metal becomes positively charged.",
        ],
        correctAnswer: "No electrons are emitted, regardless of intensity.",
      },
      {
        question:
          "Einstein's photoelectric equation is K.E.max = hf - ϕ₀. What does the term ϕ₀ (work function) represent?",
        options: [
          "The total energy of the incident photon.",
          "The kinetic energy of the electron.",
          "The energy required for an electron to escape the metal surface.",
          "The threshold frequency of the metal.",
        ],
        correctAnswer:
          "The energy required for an electron to escape the metal surface.",
      },
      {
        question:
          "The nearly instantaneous emission of electrons in the photoelectric effect was a major failure of which theory?",
        options: [
          "The particle theory of light",
          "The quantum theory",
          "The classical wave theory of light",
          "The theory of relativity",
        ],
        correctAnswer: "The classical wave theory of light",
      },
      {
        question:
          "The Compton effect involves the scattering of a high-energy photon by a(n):",
        options: ["proton", "atomic nucleus", "electron", "neutron"],
        correctAnswer: "electron",
      },
      {
        question:
          "After a photon undergoes Compton scattering, its wavelength is observed to be:",
        options: [
          "shorter (higher frequency)",
          "longer (lower frequency)",
          "unchanged",
          "zero",
        ],
        correctAnswer: "longer (lower frequency)",
      },
      {
        question:
          "The Compton effect is explained by treating the interaction as an elastic collision where both ________ and ________ are conserved.",
        options: [
          "mass, charge",
          "energy, momentum",
          "wavelength, frequency",
          "charge, momentum",
        ],
        correctAnswer: "energy, momentum",
      },
      {
        question:
          "The Compton shift (Δλ) is at its maximum when the photon is scattered at an angle of:",
        options: ["0°", "45°", "90°", "180°"],
        correctAnswer: "180°",
      },
      {
        question:
          "The Compton effect provides definitive experimental proof that photons possess particle-like ________.",
        options: ["mass", "charge", "momentum", "volume"],
        correctAnswer: "momentum",
      },
      {
        question:
          "What is the name of the process where a high-energy photon transforms into an electron-positron pair?",
        options: [
          "Annihilation",
          "Compton Scattering",
          "Pair Production",
          "Photoelectric Effect",
        ],
        correctAnswer: "Pair Production",
      },
      {
        question:
          "For pair production to occur, the incident photon must have a minimum energy of:",
        options: [
          "0.51 MeV",
          "1.02 MeV",
          "1.21 GeV",
          "There is no minimum energy.",
        ],
        correctAnswer: "1.02 MeV",
      },
      {
        question: "Why must pair production occur near a heavy atomic nucleus?",
        options: [
          "To provide the necessary energy.",
          "To conserve momentum.",
          "To create a positron.",
          "To absorb excess electrons.",
        ],
        correctAnswer: "To conserve momentum.",
      },
      {
        question:
          "Annihilation is the process where a particle and its antiparticle collide, converting their mass into:",
        options: [
          "a single, more massive particle",
          "a black hole",
          "energy, typically two photons",
          "a shower of quarks",
        ],
        correctAnswer: "energy, typically two photons",
      },
      {
        question:
          "Who first predicted the existence of antimatter, such as the positron?",
        options: [
          "Carl Anderson",
          "Albert Einstein",
          "Louis de Broglie",
          "P.A.M. Dirac",
        ],
        correctAnswer: "P.A.M. Dirac",
      },
      {
        question:
          "How does an antiparticle, like a positron, compare to its corresponding particle, an electron?",
        options: [
          "Same mass, opposite charge",
          "Opposite mass, same charge",
          "Different mass and charge",
          "Same mass and charge",
        ],
        correctAnswer: "Same mass, opposite charge",
      },
      {
        question:
          "Who proposed the revolutionary idea that particles, like electrons, should also exhibit wave-like behavior?",
        options: [
          "Max Planck",
          "Albert Einstein",
          "Louis de Broglie",
          "Davisson and Germer",
        ],
        correctAnswer: "Louis de Broglie",
      },
      {
        question:
          "The de Broglie wavelength of a particle is given by λ = h/p. This means the wavelength is ________ proportional to the particle's momentum.",
        options: ["directly", "inversely", "not", "exponentially"],
        correctAnswer: "inversely",
      },
      {
        question:
          "Why is the wave nature of a macroscopic object like a baseball not observable?",
        options: [
          "It travels too slowly.",
          "It has no charge.",
          "Its wavelength is infinitesimally small due to its large mass.",
          "It does not have a de Broglie wavelength.",
        ],
        correctAnswer:
          "Its wavelength is infinitesimally small due to its large mass.",
      },
      {
        question:
          "The Davisson-Germer experiment provided the first direct proof of de Broglie's hypothesis by observing the ________ of electrons from a nickel crystal.",
        options: ["reflection", "refraction", "annihilation", "diffraction"],
        correctAnswer: "diffraction",
      },
      {
        question:
          "The electron microscope can achieve much higher resolutions than a light microscope because:",
        options: [
          "Electrons are larger than photons.",
          "The wavelength of electrons can be made much shorter than that of visible light.",
          "Electrons travel faster than light.",
          "The electron beam is more intense.",
        ],
        correctAnswer:
          "The wavelength of electrons can be made much shorter than that of visible light.",
      },
      {
        question:
          "While a photon has zero rest mass, it possesses a 'kinetic mass' in motion. Which formula represents this kinetic mass?",
        options: ["m = E/c", "m = hf", "m = cλ/h", "m = h/cλ"],
        correctAnswer: "m = h/cλ",
      },
      {
        question:
          "In the context of the photoelectric effect, what is the 'stopping potential'?",
        options: [
          "The potential that starts the electron flow.",
          "The potential of the metal surface.",
          "The negative potential required to stop the photoelectric current.",
          "The energy of the most energetic electron.",
        ],
        correctAnswer:
          "The negative potential required to stop the photoelectric current.",
      },
      {
        question:
          "The value of the stopping potential in a photoelectric experiment depends directly on the:",
        options: [
          "intensity of the incident light.",
          "frequency of the incident light.",
          "nature of the metal surface.",
          "time of illumination.",
        ],
        correctAnswer: "frequency of the incident light.",
      },
      {
        question:
          "The work function (ϕ₀) of a metal is the minimum energy required for an electron to escape. What does its value depend on?",
        options: [
          "The frequency of the incident light.",
          "The intensity of the incident light.",
          "The nature of the metal and its surface impurities.",
          "The temperature of the metal.",
        ],
        correctAnswer: "The nature of the metal and its surface impurities.",
      },
      {
        question:
          "Which of these is a key observation of the photoelectric effect that classical wave theory could NOT explain?",
        options: [
          "Light can be reflected.",
          "The instantaneous emission of electrons.",
          "Light exerts pressure.",
          "The color of the light affects the experiment.",
        ],
        correctAnswer: "The instantaneous emission of electrons.",
      },
      {
        question:
          "The Compton effect is most readily observed using high-energy photons like:",
        options: ["Radio waves", "Microwaves", "Visible light", "X-rays"],
        correctAnswer: "X-rays",
      },
      {
        question:
          "The term h/m₀c in the Compton shift formula is a constant known as the:",
        options: [
          "Planck constant",
          "de Broglie wavelength of the photon",
          "Compton wavelength of the electron",
          "Work function of the electron",
        ],
        correctAnswer: "Compton wavelength of the electron",
      },
      {
        question:
          "At what scattering angle (θ) is the Compton shift equal to zero?",
        options: ["θ = 180°", "θ = 90°", "θ = 45°", "θ = 0°"],
        correctAnswer: "θ = 0°",
      },
      {
        question: "The 'materialization of energy' refers to which process?",
        options: [
          "Annihilation",
          "Pair Production",
          "Compton Effect",
          "Photoelectric Effect",
        ],
        correctAnswer: "Pair Production",
      },
      {
        question:
          "When an electron and a positron annihilate, they typically produce two photons traveling in opposite directions. Why opposite directions?",
        options: [
          "To conserve energy",
          "To conserve charge",
          "To conserve momentum",
          "To create a magnetic field",
        ],
        correctAnswer: "To conserve momentum",
      },
      {
        question:
          "Each photon produced during electron-positron annihilation carries away how much energy?",
        options: [
          "1.02 MeV",
          "0.51 MeV",
          "17.5 keV",
          "The total energy of the pair",
        ],
        correctAnswer: "0.51 MeV",
      },
      {
        question:
          "The existence of antimatter was first predicted by P.A.M. Dirac and later confirmed by Carl Anderson through the study of:",
        options: [
          "blackbody radiation",
          "the photoelectric effect",
          "cosmic rays",
          "atomic spectra",
        ],
        correctAnswer: "cosmic rays",
      },
      {
        question:
          "For a macroscopic object like a 200g ball moving at 5 m/hr, the de Broglie wavelength is practically undetectable because it is:",
        options: [
          "extremely large",
          "infinitesimally small",
          "equal to the ball's diameter",
          "only present at light speed",
        ],
        correctAnswer: "infinitesimally small",
      },
      {
        question:
          "What was the accelerating potential used for the electron beam in the Davisson-Germer experiment?",
        options: ["0.3 V", "0.7 V", "54 V", "1.02 MV"],
        correctAnswer: "54 V",
      },
      {
        question:
          "In the Davisson-Germer experiment, the strong peak of diffracted electrons was observed at a scattering angle of:",
        options: ["0°", "45°", "65°", "90°"],
        correctAnswer: "65°",
      },
      {
        question:
          "The Nobel Prize in Physics for the discovery of the wave nature of electrons was awarded to:",
        options: [
          "Einstein and Planck",
          "Dirac and Anderson",
          "Hallwach and Compton",
          "Davisson and Thomson",
        ],
        correctAnswer: "Davisson and Thomson",
      },
      {
        question:
          "If a photon's rest mass is zero, what can be concluded about its momentum?",
        options: [
          "Its momentum is also zero.",
          "Its momentum is non-zero and given by p = h/λ.",
          "Its momentum is infinite.",
          "Its momentum depends on its kinetic mass only.",
        ],
        correctAnswer: "Its momentum is non-zero and given by p = h/λ.",
      },
      {
        question: "What is the reverse process of pair production?",
        options: [
          "Compton scattering",
          "The photoelectric effect",
          "Annihilation of matter",
          "Blackbody radiation",
        ],
        correctAnswer: "Annihilation of matter",
      },
      {
        question:
          "If an electron and a proton have the same de Broglie wavelength, which particle must have a higher speed?",
        options: [
          "The proton",
          "The electron",
          "They must have the same speed",
          "It is impossible for them to have the same wavelength",
        ],
        correctAnswer: "The electron",
      },
      {
        question:
          "If a proton and an alpha particle have the same de Broglie wavelength, what other physical quantity must also be the same for both?",
        options: [
          "Their kinetic energy",
          "Their speed",
          "Their electric charge",
          "Their momentum",
        ],
        correctAnswer: "Their momentum",
      },
      {
        question:
          "Hallwach's early experiments with the photoelectric effect used a setup involving two zinc plates in a vacuum tube and ________ light.",
        options: ["infrared", "visible", "ultraviolet", "microwave"],
        correctAnswer: "ultraviolet",
      },
      {
        question:
          "The principle that quantized energy applies to any oscillating system, not just light, was a key insight from:",
        options: [
          "Einstein's photon theory",
          "Planck's work on blackbody radiation",
          "De Broglie's hypothesis",
          "The Compton effect",
        ],
        correctAnswer: "Planck's work on blackbody radiation",
      },
      {
        question:
          "The Compton wavelength of an electron has a specific, constant value. What is this approximate value?",
        options: [
          "3.00 x 10^8 m",
          "1.66 x 10^-10 m",
          "2.43 x 10^-12 m",
          "9.11 x 10^-31 m",
        ],
        correctAnswer: "2.43 x 10^-12 m",
      },
      {
        question:
          "What is the experimentally observed time lag between light incidence and electron emission in the photoelectric effect?",
        options: [
          "Approximately 1 second",
          "Less than 10^-8 seconds",
          "Several minutes",
          "It depends on the light intensity",
        ],
        correctAnswer: "Less than 10^-8 seconds",
      },
      {
        question:
          "The Davisson-Germer experiment used Bragg's law (2d sinθ = mλ) to analyze their results. What does this law describe?",
        options: [
          "The conservation of momentum",
          "The conditions for constructive interference of waves",
          "The energy of a photon",
          "The rate of electron emission",
        ],
        correctAnswer: "The conditions for constructive interference of waves",
      },
      {
        question:
          "Which formula correctly relates the maximum kinetic energy of a photoelectron (K.E.max) to the stopping potential (V₀)?",
        options: [
          "K.E.max = V₀ / e",
          "K.E.max = e / V₀",
          "K.E.max = eV₀",
          "K.E.max = V₀² / e",
        ],
        correctAnswer: "K.E.max = eV₀",
      },
      {
        question:
          "What was the approximate atomic spacing (d) for the nickel crystal used in the Davisson-Germer experiment?",
        options: [
          "1.66 x 10^-10 m",
          "2.43 x 10^-12 m",
          "54 x 10^-9 m",
          "0.91 x 10^-10 m",
        ],
        correctAnswer: "0.91 x 10^-10 m",
      },
      {
        question:
          "How is the photoelectric current (i) related to the intensity of incident light (I)?",
        options: [
          "i is inversely proportional to I",
          "i is proportional to I²",
          "i is directly proportional to I",
          "i is independent of I",
        ],
        correctAnswer: "i is directly proportional to I",
      },
      {
        question:
          "Which equation correctly describes energy conservation in pair production?",
        options: [
          "hf = m₀c²",
          "hf = 2m₀c² + K.E.",
          "hf = K.E.e- + K.E.e+",
          "E = mc²",
        ],
        correctAnswer: "hf = 2m₀c² + K.E.",
      },
      {
        question:
          "The de Broglie wavelength for an electron accelerated through a potential difference (V) is given by:",
        options: ["λ = h / mv", "λ = h / √(2mVe)", "λ = hc / E", "λ = 2d sinθ"],
        correctAnswer: "λ = h / √(2mVe)",
      },
      {
        question:
          "The work function (ϕ₀) can be calculated using the threshold frequency (f₀) with the formula:",
        options: ["ϕ₀ = h / f₀", "ϕ₀ = f₀ / h", "ϕ₀ = hf₀", "ϕ₀ = c / f₀"],
        correctAnswer: "ϕ₀ = hf₀",
      },
      {
        question:
          "Einstein's mass variation equation shows a photon's rest mass is zero because for a photon, its velocity (v) equals the speed of light (c). What does this cause in the equation m₀ = m√(1 - v²/c²)?",
        options: [
          "The term under the square root becomes 1",
          "The term under the square root becomes negative",
          "The term under the square root becomes zero",
          "The equation becomes invalid",
        ],
        correctAnswer: "The term under the square root becomes zero",
      },
      {
        question:
          "The Davisson-Germer experiment showed a remarkable agreement between the theoretical de Broglie wavelength and the experimental wavelength of electrons, which were approximately:",
        options: [
          "1.66 Å and 1.65 Å",
          "2.43 pm and 2.41 pm",
          "0.91 Å and 0.90 Å",
          "54 nm and 53 nm",
        ],
        correctAnswer: "1.66 Å and 1.65 Å",
      },
      {
        question:
          "The typical energy of X-ray photons used to observe the Compton effect is:",
        options: [
          "Less than 1 eV",
          "Around 2-3 eV",
          "1.02 MeV",
          "Greater than or equal to 17.5 keV",
        ],
        correctAnswer: "Greater than or equal to 17.5 keV",
      },
    ],
    Electromagnetism: [
      {
        question:
          "Under what condition does a charged particle experience the maximum magnetic force when moving in a magnetic field?",
        options: [
          "When it moves parallel to the field (θ=0°)",
          "When it is stationary (v=0)",
          "When it moves perpendicular to the field (θ=90°)",
          "When it moves anti-parallel to the field (θ=180°)",
        ],
        correctAnswer: "When it moves perpendicular to the field (θ=90°)",
      },
      {
        question:
          "If a proton and an alpha particle enter a uniform magnetic field with the same momentum, how does the radius of the proton's path (r_p) compare to the alpha particle's path (r_a)? (Note: charge of alpha = 2e)",
        options: [
          "r_p = 0.5 * r_a",
          "r_p = r_a",
          "r_p = 2 * r_a",
          "r_p = 4 * r_a",
        ],
        correctAnswer: "r_p = 2 * r_a",
      },
      {
        question:
          "If a proton (mass m, charge e) and an alpha particle (mass ≈ 4m, charge 2e) enter a magnetic field with the same kinetic energy, what is the ratio of their radii (r_p / r_a)?",
        options: ["1:2", "2:1", "1:1", "1:4"],
        correctAnswer: "1:1",
      },
      {
        question:
          "The M.K.S. (SI) unit for magnetic field strength (B) is the Tesla (T). Which of the following is an equivalent unit?",
        options: [
          "Weber (Wb)",
          "Weber per square meter (Wb/m^2)",
          "Gauss (G)",
          "Volt (V)",
        ],
        correctAnswer: "Weber per square meter (Wb/m^2)",
      },
      {
        question:
          "According to the provided conversions, one Tesla (T) is equal to how many Gauss (G)?",
        options: ["10^2 G", "10^4 G", "10^-2 G", "10^-4 G"],
        correctAnswer: "10^4 G",
      },
      {
        question:
          "The time period (T) of a charged particle's circular motion in a uniform B-field is given by T = 2πm / qB. This implies that the time period is:",
        options: [
          "Directly proportional to the particle's velocity.",
          "Inversely proportional to the particle's velocity.",
          "Dependent on the radius of the path.",
          "Independent of the particle's velocity and radius.",
        ],
        correctAnswer: "Independent of the particle's velocity and radius.",
      },
      {
        question:
          "What is the correct expression for the total Lorentz force on a charge q in the presence of both an electric field E and a magnetic field B?",
        options: [
          "F = qE",
          "F = q(v x B)",
          "F = qE + q(v x B)",
          "F = I(L x B)",
        ],
        correctAnswer: "F = qE + q(v x B)",
      },
      {
        question:
          "A charged particle moves undeflected through crossed electric (E) and magnetic (B) fields. What is its velocity (v)?",
        options: ["v = EB", "v = E / B", "v = B / E", "v = qE / B"],
        correctAnswer: "v = E / B",
      },
      {
        question:
          "A charged particle will move in a helical path (a spiral) in a uniform magnetic field if the angle between its velocity and the magnetic field is:",
        options: [
          "Exactly 0°",
          "Exactly 90°",
          "Between 0° and 90°",
          "Exactly 180°",
        ],
        correctAnswer: "Between 0° and 90°",
      },
      {
        question:
          "Which of the following statements accurately describes magnetic field lines?",
        options: [
          "They originate from positive charges.",
          "They form closed loops.",
          "They are always perpendicular to the direction of the magnetic force.",
          "They are another name for electric field lines.",
        ],
        correctAnswer: "They form closed loops.",
      },
      {
        question:
          "What is a key difference between the electric force and the magnetic force on a charged particle?",
        options: [
          "The electric force acts on stationary charges, while the magnetic force does not.",
          "The magnetic force is always in the same direction as the magnetic field.",
          "The electric force is always weaker than the magnetic force.",
          "The magnetic force acts on neutral particles, but the electric force does not.",
        ],
        correctAnswer:
          "The electric force acts on stationary charges, while the magnetic force does not.",
      },
      {
        question:
          "Among the common particles electron, proton, and neutron, which has the maximum e/m ratio?",
        options: [
          "Proton",
          "Neutron",
          "Electron",
          "All have the same non-zero e/m ratio.",
        ],
        correctAnswer: "Electron",
      },
      {
        question:
          "Which of the following experiences zero magnetic force in a magnetic field?",
        options: [
          "A neutron moving perpendicular to the field.",
          "A proton moving parallel to the field.",
          "An electron moving at 45° to the field.",
          "Both A and B",
        ],
        correctAnswer: "Both A and B",
      },
      {
        question: "The e/m ratio of a neutron is zero because it has:",
        options: [
          "Zero mass",
          "Zero velocity",
          "No charge",
          "A very small radius",
        ],
        correctAnswer: "No charge",
      },
      {
        question:
          "The 'pitch' of a helical path is the distance traveled parallel to the magnetic field in one rotation. What is its formula?",
        options: [
          "x = (v sinθ) × T",
          "x = (v tanθ) × T",
          "x = (v cosθ) × T",
          "x = v × T",
        ],
        correctAnswer: "x = (v cosθ) × T",
      },
      {
        question:
          "The North Pole of a bar magnet is attracted to which magnetic pole of the Earth?",
        options: [
          "The geographic North Pole",
          "The magnetic North Pole",
          "The geographic South Pole",
          "The magnetic South Pole",
        ],
        correctAnswer: "The magnetic South Pole",
      },
      {
        question:
          "According to the fundamental concepts, a magnetic field arises due to:",
        options: [
          "Stationary charges",
          "The presence of a conductor",
          "Moving charges",
          "A vacuum",
        ],
        correctAnswer: "Moving charges",
      },
      {
        question: "What is another name for the magnetic field strength (B)?",
        options: [
          "Magnetic Flux",
          "Magnetic Flux Density",
          "Flux Linkages",
          "Magnetic Potential",
        ],
        correctAnswer: "Magnetic Flux Density",
      },
      {
        question:
          "How does the direction of the electric force compare to the electric field, and the magnetic force to the magnetic field?",
        options: [
          "Both are parallel",
          "E-force is collinear, B-force is perpendicular",
          "E-force is perpendicular, B-force is collinear",
          "Both are perpendicular",
        ],
        correctAnswer: "E-force is collinear, B-force is perpendicular",
      },
      {
        question:
          "The formula for the angular frequency (ω) of a charge q with mass m in a uniform magnetic field B is:",
        options: ["ω = qB / m", "ω = m / qB", "ω = qm / B", "ω = B / qm"],
        correctAnswer: "ω = qB / m",
      },
      {
        question:
          "If the momentum of a charged particle moving perpendicular to a magnetic field is doubled, the radius of its circular path will:",
        options: [
          "Be halved",
          "Remain the same",
          "Be doubled",
          "Be quadrupled",
        ],
        correctAnswer: "Be doubled",
      },
      {
        question:
          "Why does the magnetic force on a charged particle perform no work?",
        options: [
          "Because the magnetic field is a conservative field.",
          "Because the force is always zero.",
          "Because the force is always parallel to the velocity.",
          "Because the force is always perpendicular to the direction of motion.",
        ],
        correctAnswer:
          "Because the force is always perpendicular to the direction of motion.",
      },
      {
        question:
          "The kinetic energy of a particle moving in a circular path of radius r in a B-field can be expressed as:",
        options: [
          "K.E. = r²q²B² / 2m",
          "K.E. = rqB / 2m",
          "K.E. = 2m / r²q²B²",
          "K.E. = mv / r",
        ],
        correctAnswer: "K.E. = r²q²B² / 2m",
      },
      {
        question:
          "A charged particle moves in a straight line through a magnetic field. Which statement must be true?",
        options: [
          "The particle is moving perpendicular to the field.",
          "The magnetic field is zero.",
          "The particle's velocity is parallel or anti-parallel to the field.",
          "The particle has no charge.",
        ],
        correctAnswer:
          "The particle's velocity is parallel or anti-parallel to the field.",
      },
      {
        question:
          "Which of the following is a C.G.S. unit for magnetic field strength?",
        options: ["Tesla", "Weber", "Ampere-meter", "Gauss"],
        correctAnswer: "Gauss",
      },
      {
        question:
          "The force on a straight conductor of length L with current I in a uniform magnetic field B is given by:",
        options: [
          "F = I(L ⋅ B)",
          "F = I(B x L)",
          "F = I(L x B)",
          "F = ILB cosθ",
        ],
        correctAnswer: "F = I(L x B)",
      },
      {
        question:
          "A charged particle will enter a circular path in a uniform B-field if it enters at an angle of:",
        options: ["0°", "45°", "90°", "180°"],
        correctAnswer: "90°",
      },
      {
        question: "What is the specific charge (e/m) value for an electron?",
        options: [
          "1.602 x 10^-19 C/kg",
          "9.11 x 10^-31 C/kg",
          "1.7588 x 10^11 C/kg",
          "6.022 x 10^23 C/kg",
        ],
        correctAnswer: "1.7588 x 10^11 C/kg",
      },
      {
        question:
          "If an electron and a proton enter a B-field with the same momentum, which will have a smaller radius of curvature?",
        options: [
          "The proton",
          "The electron",
          "Both will have the same radius",
          "Neither will curve",
        ],
        correctAnswer: "Both will have the same radius",
      },
      {
        question:
          "Magnetic force is velocity-dependent, whereas electric force:",
        options: [
          "Is also velocity-dependent",
          "Acts on a charge whether it is at rest or moving",
          "Only acts on charges at rest",
          "Is always weaker",
        ],
        correctAnswer: "Acts on a charge whether it is at rest or moving",
      },
      {
        question:
          "If a particle with charge 'q' and momentum 'p' moves in a B-field of strength 'B' and charge 'e', the radius 'r' is proportional to:",
        options: ["p / e", "e / p", "p * e", "p * e²"],
        correctAnswer: "p / e",
      },
      {
        question:
          "Besides Tesla (T) and Wb/m², which of the following is also a valid M.K.S. (SI) unit for magnetic field strength (B)?",
        options: [
          "Gauss (G)",
          "Oersted",
          "Newton per ampere-meter (N/(A·m))",
          "Weber (Wb)",
        ],
        correctAnswer: "Newton per ampere-meter (N/(A·m))",
      },
      {
        question:
          "A charged particle moves in a circular path with radius 'r' in a uniform magnetic field 'B'. If the magnetic field strength is doubled (to 2B), what will be the new radius, assuming momentum is constant?",
        options: ["r / 2", "2r", "r / 4", "4r"],
        correctAnswer: "r / 2",
      },
      {
        question:
          "A particle of mass 'm' and charge 'q' moves in a circle in a magnetic field 'B'. If its mass is doubled to '2m', what happens to its time period (T)?",
        options: [
          "It is halved (T/2)",
          "It is doubled (2T)",
          "It remains the same",
          "It becomes four times larger (4T)",
        ],
        correctAnswer: "It is doubled (2T)",
      },
      {
        question:
          "Under what condition will a straight current-carrying conductor experience zero magnetic force in a uniform magnetic field?",
        options: [
          "When the conductor is parallel or anti-parallel to the field",
          "When the conductor is perpendicular to the field",
          "When the current is very low",
          "When the conductor is made of copper",
        ],
        correctAnswer:
          "When the conductor is parallel or anti-parallel to the field",
      },
      {
        question:
          "Which of the following is the C.G.S. unit for magnetic field strength, as mentioned in the text?",
        options: [
          "Tesla (T)",
          "Weber (Wb)",
          "Oersted",
          "Newton per ampere-meter (N/(A·m))",
        ],
        correctAnswer: "Oersted",
      },
    ],
    "Electromagnetic Induction": [
      {
        question:
          "Why will a transformer not operate with a D.C. source connected to its primary coil?",
        options: [
          "D.C. produces a constantly changing magnetic flux.",
          "D.C. produces a steady magnetic flux, and induction requires a changing flux.",
          "D.C. sources have zero voltage.",
          "The resistance of the primary coil is infinite for D.C.",
        ],
        correctAnswer:
          "D.C. produces a steady magnetic flux, and induction requires a changing flux.",
      },
      {
        question:
          "Lenz's Law, which describes the direction of induced current, is a direct consequence of which fundamental principle?",
        options: [
          "Law of Conservation of Momentum",
          "Law of Conservation of Charge",
          "Law of Mutual Induction",
          "Law of Conservation of Energy",
        ],
        correctAnswer: "Law of Conservation of Energy",
      },
      {
        question:
          "How are eddy current losses, which cause heat loss in a transformer's core, minimized?",
        options: [
          "By using a solid soft iron core",
          "By using a laminated core made of insulated iron sheets",
          "By increasing the frequency of the A.C. supply",
          "By using thicker copper windings",
        ],
        correctAnswer:
          "By using a laminated core made of insulated iron sheets",
      },
      {
        question:
          "In an A.C. generator, the induced EMF is maximum at the instant when:",
        options: [
          "The plane of the coil is perpendicular to the magnetic field.",
          "The magnetic flux through the coil is maximum.",
          "The plane of the coil is parallel to the magnetic field.",
          "The coil stops rotating momentarily.",
        ],
        correctAnswer:
          "The plane of the coil is parallel to the magnetic field.",
      },
      {
        question:
          "When is the magnetic flux (φ = BA cosθ) through a plane surface at its minimum (zero) value?",
        options: [
          "When the field is perpendicular to the plane (θ = 0°)",
          "When the field is parallel to the plane (θ = 90°)",
          "When the area A is minimized",
          "When B is at its maximum",
        ],
        correctAnswer: "When the field is parallel to the plane (θ = 90°)",
      },
      {
        question:
          "An ideal step-up transformer has a primary coil with 100 turns and a secondary coil with 300 turns. If the primary voltage is 50V, what is the secondary voltage?",
        options: ["16.7 V", "50 V", "150 V", "300 V"],
        correctAnswer: "150 V",
      },
      {
        question:
          "The energy lost due to repeated magnetization and demagnetization of a transformer's core is known as hysteresis loss. How is this specific type of loss minimized?",
        options: [
          "By using a laminated core",
          "By using a soft iron core",
          "By using thicker windings",
          "By ensuring the flux per turn is constant",
        ],
        correctAnswer: "By using a soft iron core",
      },
      {
        question:
          "What is the fundamental principle behind the operation of a transformer?",
        options: [
          "Electromagnetic induction",
          "Mutual induction",
          "Self-induction",
          "Static electricity",
        ],
        correctAnswer: "Mutual induction",
      },
      {
        question: "What is the SI unit of magnetic flux (φ)?",
        options: ["Tesla", "Gauss", "Weber", "Volt"],
        correctAnswer: "Weber",
      },
      {
        question:
          "What is the term for the heat loss (I²R) that occurs in the windings of a transformer?",
        options: [
          "Eddy current losses",
          "Hysteresis losses",
          "Flux leakage",
          "Copper losses",
        ],
        correctAnswer: "Copper losses",
      },
      {
        question:
          "An AC generator can be thought of as an electric motor with its:",
        options: [
          "Input and output reversed",
          "Coil and magnets reversed",
          "Speed doubled",
          "Voltage halved",
        ],
        correctAnswer: "Input and output reversed",
      },
      {
        question: "What physical quantity is represented by 'Flux Linkages'?",
        options: [
          "The magnetic flux per unit area",
          "The total magnetic field lines",
          "The product of the number of turns (N) and magnetic flux (φ)",
          "The rate of change of magnetic flux",
        ],
        correctAnswer:
          "The product of the number of turns (N) and magnetic flux (φ)",
      },
      {
        question:
          "In a step-down transformer, how does the current in the secondary coil (I_s) relate to the primary current (I_p)?",
        options: ["I_s < I_p", "I_s > I_p", "I_s = I_p", "I_s = 0"],
        correctAnswer: "I_s > I_p",
      },
      {
        question:
          "A center-tapped transformer, where the center tap wire is at zero volts, is often used in:",
        options: [
          "Amplifier circuits",
          "Oscillator circuits",
          "Rectifier circuits",
          "Filter circuits",
        ],
        correctAnswer: "Rectifier circuits",
      },
      {
        question:
          "According to the provided text, what is the standard AC frequency used in Pakistan?",
        options: ["60 Hz", "120 Hz", "50 Hz", "100 Hz"],
        correctAnswer: "50 Hz",
      },
      {
        question:
          "If the rate of change of flux is given in weber/sec, the induced e.m.f. is measured in which unit?",
        options: ["Amperes", "Teslas", "Webers", "Volts"],
        correctAnswer: "Volts",
      },
      {
        question:
          "What is the core assumption made about the magnetic flux in an ideal transformer?",
        options: [
          "The flux per turn is the same in both primary and secondary coils.",
          "The total flux is zero.",
          "The flux is directly proportional to the current.",
          "The flux is only present in the primary coil.",
        ],
        correctAnswer:
          "The flux per turn is the same in both primary and secondary coils.",
      },
      {
        question:
          "Iron losses are a category of core losses in a transformer that include:",
        options: [
          "Copper loss and flux loss",
          "Eddy current loss and hysteresis loss",
          "Mechanical loss and heat loss",
          "Voltage loss and current loss",
        ],
        correctAnswer: "EddS current loss and hysteresis loss",
      },
      {
        question:
          "The total charge (q) that flows in a circuit with N turns and resistance R due to a total change in flux (Δφ) depends on:",
        options: [
          "The rate of change of flux",
          "The total change in flux",
          "The resistance only",
          "The number of turns only",
        ],
        correctAnswer: "The total change in flux",
      },
      {
        question: "The efficiency of a transformer is defined as the ratio of:",
        options: [
          "Primary power to secondary power",
          "Input power to output power",
          "Output power to input power",
          "Secondary voltage to primary voltage",
        ],
        correctAnswer: "Output power to input power",
      },
      {
        question:
          "In a step-up transformer, the number of turns in the secondary (N_s) is greater than the primary (N_p). This results in:",
        options: [
          "Decreased secondary voltage and decreased secondary current",
          "Increased secondary voltage and increased secondary current",
          "Increased secondary voltage and decreased secondary current",
          "Decreased secondary voltage and increased secondary current",
        ],
        correctAnswer:
          "Increased secondary voltage and decreased secondary current",
      },
      {
        question:
          "Faraday's Law states that an e.m.f. is induced in a coil only when:",
        options: [
          "A steady current flows through it",
          "The magnetic flux through it changes",
          "It is placed in a strong magnetic field",
          "The coil is made of a specific material",
        ],
        correctAnswer: "The magnetic flux through it changes",
      },
      {
        question:
          "When is the induced EMF in an AC generator's coil equal to zero?",
        options: [
          "When the plane of the coil is parallel to the magnetic field",
          "When the coil cuts flux lines at the fastest rate",
          "When the plane of the coil is perpendicular to the magnetic field",
          "When the coil's angular velocity is maximum",
        ],
        correctAnswer:
          "When the plane of the coil is perpendicular to the magnetic field",
      },
      {
        question:
          "What is the SI unit for the rate of change of flux (weber/sec)?",
        options: ["Tesla", "Volt", "Farad", "Henry"],
        correctAnswer: "Volt",
      },
      {
        question: "What is the primary definition of 'Magnetic Flux'?",
        options: [
          "The magnetic flux per unit area",
          "The product of turns (N) and flux (φ)",
          "A measure of the total number of magnetic field lines passing through a specific area",
          "The rate of change of the magnetic field",
        ],
        correctAnswer:
          "A measure of the total number of magnetic field lines passing through a specific area",
      },
      {
        question:
          "The total induced charge (q) that flows in a circuit due to a change in flux (Δφ) depends on the total change in flux and the resistance (R). On what does it NOT depend?",
        options: [
          "The total change in flux (Δφ)",
          "The number of turns (N)",
          "The resistance (R)",
          "The rate of change of flux (Δφ/Δt)",
        ],
        correctAnswer: "The rate of change of flux (Δφ/Δt)",
      },
      {
        question:
          "In an AC generator, why are the pole pieces often made concave?",
        options: [
          "To create a strong, uniform radial field",
          "To reduce the generator's weight",
          "To minimize copper losses",
          "To decrease the angular frequency",
        ],
        correctAnswer: "To create a strong, uniform radial field",
      },
      {
        question:
          "When is the magnetic flux (φ = BA cosθ) through a plane surface at its maximum value?",
        options: [
          "When the field is parallel to the plane (θ = 90°)",
          "When the field is perpendicular to the plane (θ = 0°)",
          "When the area (A) is zero",
          "When the field (B) is zero",
        ],
        correctAnswer: "When the field is perpendicular to the plane (θ = 0°)",
      },
      {
        question:
          "The maximum e.m.f. in an AC generator is given by ε_max = NωAB. If the number of turns (N) in the coil is doubled, what happens to the maximum e.m.f.?",
        options: [
          "It is halved",
          "It is doubled",
          "It remains the same",
          "It is quadrupled",
        ],
        correctAnswer: "It is doubled",
      },
      {
        question:
          "In a center-tapped transformer, which part is specifically noted to be at a potential of zero volts?",
        options: [
          "The entire primary coil",
          "The entire secondary coil",
          "The center tap wire",
          "The iron core",
        ],
        correctAnswer: "The center tap wire",
      },
    ],
    "Circular Motion": [
      {
        question:
          "What is the critical speed (v_c) at the highest point (A) required for an object to complete a vertical loop of radius 'r'?",
        options: ["√(gr)", "√(3gr)", "√(5gr)", "0"],
        correctAnswer: "√(gr)",
      },
      {
        question:
          "If an object just completes a vertical loop of radius 'r' (speed at top is √(gr)), what must its speed be at the lowest point (B)?",
        options: ["√(gr)", "√(3gr)", "√(5gr)", "√(2gr)"],
        correctAnswer: "√(5gr)",
      },
      {
        question:
          "At the highest point (A) of a vertical circle, the equation for centripetal force is given by:",
        options: [
          "$T_A - mg = mv_A^2/r$",
          "$T_A + mg = mv_A^2/r$",
          "$mg - T_A = mv_A^2/r$",
          "$T_A = mv_A^2/r$",
        ],
        correctAnswer: "$T_A + mg = mv_A^2/r$",
      },
      {
        question:
          "At the lowest point (B) of a vertical circle, the equation relating tension (T_B), gravity (mg), and centripetal force is:",
        options: [
          "$T_B - mg = mv_B^2/r$",
          "$T_B + mg = mv_B^2/r$",
          "$mg - T_B = mv_B^2/r$",
          "$T_B = mg$",
        ],
        correctAnswer: "$T_B - mg = mv_B^2/r$",
      },
      {
        question:
          "A 2 kg mass moves in a circle of radius 4 m with a constant speed of 10 m/s. What is the magnitude of the centripetal force (F_c)?",
        options: ["20 N", "50 N", "80 N", "100 N"],
        correctAnswer: "50 N",
      },
      {
        question:
          "An object moves in a circle with a constant angular velocity (ω) of 5 rad/s. If the radius of the circle is 2 m, what is its centripetal acceleration (a_c)?",
        options: ["10 m/s²", "25 m/s²", "50 m/s²", "100 m/s²"],
        correctAnswer: "50 m/s²",
      },
      {
        question:
          "A 0.5 kg stone is tied to a string and swung in a horizontal circle of radius 1 m. If the tension in the string is 8 N, what is the centripetal acceleration (a_c) of the stone?",
        options: ["4 m/s²", "8 m/s²", "16 m/s²", "32 m/s²"],
        correctAnswer: "16 m/s²",
      },
      {
        question:
          "An object completes one full revolution in a circle in 0.5 seconds. What is its angular velocity (ω)?",
        options: ["π rad/s", "2π rad/s", "4π rad/s", "0.5π rad/s"],
        correctAnswer: "4π rad/s",
      },
      {
        question:
          "A wheel with a radius of 0.5 m has an angular velocity of 10 rad/s. What is the tangential velocity (v) of a point on its rim?",
        options: ["2.5 m/s", "5 m/s", "10 m/s", "20 m/s"],
        correctAnswer: "5 m/s",
      },
      {
        question:
          "Why is the work done by the centripetal force on an object in circular motion always zero?",
        options: [
          "Because the force is zero",
          "Because the displacement is zero",
          "Because the force is always perpendicular to the velocity",
          "Because the force is constant",
        ],
        correctAnswer:
          "Because the force is always perpendicular to the velocity",
      },
      {
        question:
          "Which statement is true for an object in **uniform** circular motion?",
        options: [
          "Tangential acceleration (a_t) is zero",
          "Centripetal acceleration (a_c) is zero",
          "Both a_t and a_c are zero",
          "Tangential acceleration (a_t) is non-zero",
        ],
        correctAnswer: "Tangential acceleration (a_t) is zero",
      },
      {
        question: "How many degrees are equivalent to π/2 radians?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°",
      },
      {
        question:
          "What is the rotational analogy for linear kinetic energy ($K.E._{linear} = 1/2 mv^2$)?",
        options: [
          "$K.E._{rot} = 1/2 Iω^2$",
          "$K.E._{rot} = 1/2 mω^2$",
          "$K.E._{rot} = 1/2 Iv^2$",
          "$K.E._{rot} = 1/2 Iα^2$",
        ],
        correctAnswer: "$K.E._{rot} = 1/2 Iω^2$",
      },
      {
        question:
          "For the Earth revolving around the Sun, what force provides the necessary centripetal force?",
        options: [
          "Frictional force",
          "Tension",
          "Magnetic force",
          "Gravitational force",
        ],
        correctAnswer: "Gravitational force",
      },
      {
        question:
          "If the string breaks while a stone is being swung in a horizontal circle, what path will the stone follow?",
        options: [
          "It will fall straight down",
          "It will move in a straight line, tangent to the circle",
          "It will continue in the circle",
          "It will move radially outward",
        ],
        correctAnswer: "It will move in a straight line, tangent to the circle",
      },
      {
        question:
          "What is the primary effect of the centripetal force on an object in uniform circular motion?",
        options: [
          "It changes the speed only",
          "It changes the direction of velocity only",
          "It changes both speed and direction",
          "It does no work and has no effect",
        ],
        correctAnswer: "It changes the direction of velocity only",
      },
      {
        question:
          "For an object just completing a vertical loop, what is its speed at the horizontal points (mid-way between top and bottom)?",
        options: ["√(gr)", "√(3gr)", "√(5gr)", "√(2.5gr)"],
        correctAnswer: "√(3gr)",
      },
      {
        question: "What is the angular velocity (ω) of a clock's second hand?",
        options: ["2π rad/s", "π/30 rad/s", "π/60 rad/s", "6 deg/s"],
        correctAnswer: "π/30 rad/s",
      },
      {
        question:
          "If an object's angular velocity (ω) is decreasing, what is the direction of its angular acceleration (α)?",
        options: [
          "In the same direction as ω",
          "In the opposite direction to ω",
          "Perpendicular to ω",
          "It is zero",
        ],
        correctAnswer: "In the opposite direction to ω",
      },
      {
        question:
          "In non-uniform circular motion, the net acceleration 'a' is the vector sum of:",
        options: [
          "$a_c$ and $a_t$",
          "$a_c$ and gravity",
          "$a_t$ and friction",
          "$v$ and $ω$",
        ],
        correctAnswer: "$a_c$ and $a_t$",
      },
    ],
    Waves: [
      {
        question:
          "What is the fundamental frequency (f₁) for a closed-end pipe of length L, where v is the speed of sound?",
        options: ["v / L", "v / 2L", "v / 4L", "2v / L"],
        correctAnswer: "v / 4L",
      },
      {
        question:
          "What is the fundamental frequency (f₁) for an open-end pipe of length L?",
        options: ["v / L", "v / 2L", "v / 4L", "v / 8L"],
        correctAnswer: "v / 2L",
      },
      {
        question:
          "The fundamental frequency (1st Harmonic) for a stretched string fixed at both ends (length L) is given by:",
        options: [
          "$f_1 = v / 2L$",
          "$f_1 = v / 4L$",
          "$f_1 = v / L$",
          "$f_1 = 2v / L$",
        ],
        correctAnswer: "$f_1 = v / 2L$",
      },
      {
        question:
          "A closed-end organ pipe (closed at one end) produces which harmonics?",
        options: [
          "Only odd harmonics (1, 3, 5...)",
          "Only even harmonics (2, 4, 6...)",
          "All harmonics (1, 2, 3...)",
          "No harmonics, only the fundamental",
        ],
        correctAnswer: "Only odd harmonics (1, 3, 5...)",
      },
      {
        question:
          "An open-end organ pipe (open at both ends) produces which harmonics?",
        options: [
          "Only odd harmonics",
          "Only even harmonics",
          "All harmonics (odd and even)",
          "Only the 1st and 2nd harmonics",
        ],
        correctAnswer: "All harmonics (odd and even)",
      },
      {
        question:
          "A stretched string fixed at both ends is plucked. Which harmonics will be present?",
        options: [
          "Only odd harmonics",
          "Only even harmonics",
          "All harmonics (odd and even)",
          "Only the fundamental frequency",
        ],
        correctAnswer: "All harmonics (odd and even)",
      },
      {
        question: "The speed of sound in a gas is directly proportional to:",
        options: [
          "The absolute temperature (T)",
          "The square of the absolute temperature (T²)",
          "The square root of the absolute temperature (√T)",
          "The Celsius temperature (t)",
        ],
        correctAnswer: "The square root of the absolute temperature (√T)",
      },
      {
        question:
          "For every 1°C rise in temperature, the speed of sound in air increases by approximately:",
        options: ["0.61 m/s", "1.22 m/s", "6.1 m/s", "0.33 m/s"],
        correctAnswer: "0.61 m/s",
      },
      {
        question:
          "What is the effect of changing the pressure of a gas on the speed of sound, assuming the temperature remains constant?",
        options: [
          "Speed increases proportionally",
          "Speed decreases proportionally",
          "No effect",
          "Speed increases with the square of pressure",
        ],
        correctAnswer: "No effect",
      },
      {
        question:
          "How does the speed of sound in moist air compare to the speed of sound in dry air?",
        options: [
          "It is greater in moist air",
          "It is greater in dry air",
          "It is the same in both",
          "It depends on the pressure",
        ],
        correctAnswer: "It is greater in moist air",
      },
      {
        question:
          "Beats are a phenomenon of regular variation in sound intensity (loudness) caused by the superposition of two waves with:",
        options: [
          "Slightly different frequencies",
          "Identical frequencies",
          "Slightly different amplitudes",
          "The same phase",
        ],
        correctAnswer: "Slightly different frequencies",
      },
      {
        question:
          "A tuning fork with a frequency of 256 Hz is sounded together with another tuning fork, and 4 beats per second are heard. What is a possible frequency for the second fork?",
        options: ["256 Hz", "250 Hz", "260 Hz", "1024 Hz"],
        correctAnswer: "260 Hz",
      },
      {
        question:
          "In a stationary (standing) wave, what is the distance between two consecutive nodes?",
        options: ["λ", "λ / 2", "λ / 4", "2λ"],
        correctAnswer: "λ / 2",
      },
      {
        question:
          "What is the distance between a node and the next (adjacent) antinode in a stationary wave?",
        options: ["λ", "λ / 2", "λ / 4", "λ / 8"],
        correctAnswer: "λ / 4",
      },
      {
        question:
          "Constructive interference occurs between two identical waves when their path difference is:",
        options: ["nλ", "(n+1/2)λ", "λ / 4", "(n+1/4)λ"],
        correctAnswer: "nλ",
      },
      {
        question:
          "Destructive interference occurs when the path difference between two identical waves is:",
        options: ["nλ", "(n+1/2)λ", "2nλ", "λ / 3"],
        correctAnswer: "(n+1/2)λ",
      },
      {
        question:
          "The speed of a transverse wave in a stretched string (mass per unit length μ, tension T) is given by $v = √(T/μ)$. If the tension (T) in the string is quadrupled, the speed of the wave will:",
        options: [
          "Be halved",
          "Be doubled",
          "Be quadrupled",
          "Remain the same",
        ],
        correctAnswer: "Be doubled",
      },
      {
        question: "Why can sound waves not be polarized?",
        options: [
          "Because they are electromagnetic",
          "Because they are longitudinal",
          "Because they are transverse",
          "Because they travel slower than light",
        ],
        correctAnswer: "Because they are longitudinal",
      },
      {
        question: "What is the frequency range for audible sound waves?",
        options: [
          "Below 20 Hz",
          "20 Hz to 20,000 Hz",
          "Above 20,000 Hz",
          "0 Hz to 100 Hz",
        ],
        correctAnswer: "20 Hz to 20,000 Hz",
      },
      {
        question:
          "In which type of wave do the particles of the medium vibrate at right angles (perpendicular) to the direction of wave propagation?",
        options: [
          "Longitudinal waves",
          "Transverse waves",
          "Sound waves",
          "Stationary waves",
        ],
        correctAnswer: "Transverse waves",
      },
      {
        question:
          "In which type of wave do the particles of the medium vibrate parallel to the direction of wave propagation?",
        options: [
          "Longitudinal waves",
          "Transverse waves",
          "Light waves",
          "Water waves",
        ],
        correctAnswer: "Longitudinal waves",
      },
      {
        question:
          "When a wave passes from one medium to another, which of its properties does **not** change?",
        options: ["Velocity", "Wavelength", "Frequency", "Amplitude"],
        correctAnswer: "Frequency",
      },
      {
        question:
          "Laplace corrected Newton's formula for the speed of sound, stating that the process is:",
        options: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"],
        correctAnswer: "Adiabatic",
      },
      {
        question: "What do waves transport?",
        options: [
          "Matter only",
          "Energy and momentum only",
          "Matter, energy, and momentum",
          "Neither matter nor energy",
        ],
        correctAnswer: "Energy and momentum only",
      },
      {
        question: "A sound wave with a frequency of 15 Hz is classified as:",
        options: ["Audible", "Infrasonic", "Ultrasonic", "Supersonic"],
        correctAnswer: "Infrasonic",
      },
    ],
  },
};

// ⏱ Set time allowed per question (in seconds)
export const TIME_PER_QUESTION = 60;
