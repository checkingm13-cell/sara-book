export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorAffiliation?: string;
  isbn: string;
  category: "LIFE_SCIENCES" | "MEDICAL_SCIENCE" | "SCIENCES_AND_ENGINEERING" | "SOCIAL_SCIENCE_AND_HUMANITIES";
  categoryLabel: string;
  pages: number;
  year: number;
  language: "English" | "Hindi" | "Gujarati";
  priceINR: number;
  coverImage: string;
  synopsis: string;
  tableOfContents?: string[];
  ugcCompliant: boolean;
  citation: string;
}

export const CATEGORIES = [
  { id: "LIFE_SCIENCES", label: "Life Sciences", count: 142, icon: "Dna" },
  { id: "MEDICAL_SCIENCE", label: "Medical Science", count: 98, icon: "Stethoscope" },
  { id: "SCIENCES_AND_ENGINEERING", label: "Sciences & Engineering", count: 215, icon: "Cpu" },
  { id: "SOCIAL_SCIENCE_AND_HUMANITIES", label: "Social Science & Humanities", count: 184, icon: "GraduationCap" }
] as const;

export const FEATURED_BOOKS: Book[] = [
  {
    id: "sb-001",
    slug: "modeling-analysis-of-transmission-line-transformer-and-load",
    title: "Modeling, Analysis Of Transmission Line, Transformer And Load With Harmonic Mitigation",
    author: "Dr. R. K. Patel & Dr. M. S. Joshi",
    authorAffiliation: "Department of Electrical Engineering, Gujarat Technological University",
    isbn: "978-93-89847-12-8",
    category: "SCIENCES_AND_ENGINEERING",
    categoryLabel: "Sciences & Engineering",
    pages: 342,
    year: 2021,
    language: "English",
    priceINR: 1250,
    coverImage: "/books/transmission-line.jpg",
    synopsis: "A comprehensive treatise on power transmission systems, high-voltage transformer harmonic distortions, and active filter topologies designed for academic researchers, postgraduate students, and electrical utilities engineers.",
    tableOfContents: [
      "Chapter 1: Mathematical Foundations of Transmission Networks",
      "Chapter 2: Transformer Core Non-linearities and Saturation",
      "Chapter 3: Harmonic Spectral Analysis under Non-linear Loads",
      "Chapter 4: Shunt and Series Active Power Filter Design",
      "Chapter 5: MATLAB/Simulink Benchmarking and Experimental Verification"
    ],
    ugcCompliant: true,
    citation: "Patel, R. K., & Joshi, M. S. (2021). Modeling, Analysis Of Transmission Line, Transformer And Load With Harmonic Mitigation. Sara Book Publication. ISBN: 978-93-89847-12-8."
  },
  {
    id: "sb-002",
    slug: "software-testing-methodology-applied-approaches",
    title: "Software Testing Methodology & Modern Automation Frameworks",
    author: "Prof. S. N. Trivedi",
    authorAffiliation: "School of Computer Studies, Ahmedabad University",
    isbn: "978-93-89847-35-7",
    category: "SCIENCES_AND_ENGINEERING",
    categoryLabel: "Sciences & Engineering",
    pages: 288,
    year: 2021,
    language: "English",
    priceINR: 950,
    coverImage: "/books/software-testing.jpg",
    synopsis: "Explores rigorous test case generation, boundary value analysis, mutation testing, and enterprise CI/CD automated test pipelines adhering to IEEE 829 standards.",
    tableOfContents: [
      "Chapter 1: Principles of Software Defect Estimation",
      "Chapter 2: White-Box Logic Coverage Metrics",
      "Chapter 3: Integration Testing in Microservice Architecture",
      "Chapter 4: Performance & Load Testing with Locust and JMeter"
    ],
    ugcCompliant: true,
    citation: "Trivedi, S. N. (2021). Software Testing Methodology & Modern Automation Frameworks. Sara Book Publication. ISBN: 978-93-89847-35-7."
  },
  {
    id: "sb-003",
    slug: "advances-in-microbial-biotechnology-and-soil-health",
    title: "Advances in Microbial Biotechnology & Sustainable Soil Health",
    author: "Dr. Ananya Sharma & Dr. V. G. Mehta",
    authorAffiliation: "ICAR - National Research Institute for Soil Biology",
    isbn: "978-93-89847-64-7",
    category: "LIFE_SCIENCES",
    categoryLabel: "Life Sciences",
    pages: 410,
    year: 2022,
    language: "English",
    priceINR: 1400,
    coverImage: "/books/microbial-bio.jpg",
    synopsis: "In-depth research on bio-fertilizers, rhizospheric bacterial consortia, and molecular metagenomics for combating agricultural soil degradation in semi-arid zones.",
    ugcCompliant: true,
    citation: "Sharma, A., & Mehta, V. G. (2022). Advances in Microbial Biotechnology. Sara Book Publication. ISBN: 978-93-89847-64-7."
  },
  {
    id: "sb-004",
    slug: "clinical-protocols-in-critical-care-medicine",
    title: "Clinical Protocols & Pharmacotherapy in Critical Care Medicine",
    author: "Dr. K. L. Deshmukh, MD",
    authorAffiliation: "Department of Critical Care, B.J. Medical College & Civil Hospital",
    isbn: "978-93-89847-88-3",
    category: "MEDICAL_SCIENCE",
    categoryLabel: "Medical Science",
    pages: 520,
    year: 2023,
    language: "English",
    priceINR: 1850,
    coverImage: "/books/critical-care.jpg",
    synopsis: "A point-of-care reference manual for intensive care unit clinicians, covering hemodynamic monitoring, mechanical ventilation weaning algorithms, and septic shock management.",
    ugcCompliant: true,
    citation: "Deshmukh, K. L. (2023). Clinical Protocols & Pharmacotherapy in Critical Care Medicine. Sara Book Publication. ISBN: 978-93-89847-88-3."
  }
];
