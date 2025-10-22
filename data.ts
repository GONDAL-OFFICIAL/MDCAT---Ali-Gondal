import { User, Chapters, Mcqs } from "./types";

// 🔒 Add more usernames and passwords below:
// The password field is used for demonstration. In a real app, this would be handled securely.
export const users: User[] = [
  { username: "Ali", password: "201711" },
  { username: "Umer", password: "1122" },
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
    "Atomic Structure": [
      {
        question:
          "What particle is found in the nucleus and has a positive charge?",
        options: ["Electron", "Neutron", "Proton", "Photon"],
        correctAnswer: "Proton",
      },
      {
        question:
          "The atomic number of an element is the number of ___ in one atom.",
        options: ["protons", "neutrons", "electrons", "nucleons"],
        correctAnswer: "protons",
      },
      {
        question:
          "What is the mass number of an atom with 12 protons, 12 electrons, and 13 neutrons?",
        options: ["24", "12", "37", "25"],
        correctAnswer: "25",
      },
    ],
    "Chemical Bonding": [
      {
        question: "What type of bond is formed by the transfer of electrons?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        correctAnswer: "Ionic",
      },
      {
        question: "Which of the following is a nonpolar molecule?",
        options: ["H2O", "CO2", "NH3", "HCl"],
        correctAnswer: "CO2",
      },
    ],
    "Organic Chemistry": [
      {
        question: "What is the main element in organic compounds?",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correctAnswer: "Carbon",
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
  },
};

// ⏱ Set time allowed per question (in seconds)
export const TIME_PER_QUESTION = 60;
