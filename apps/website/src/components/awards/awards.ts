export type AwardCategory =
  | "commendation"
  | "leadership"
  | "marksmanship"
  | "sports"
  | "information-technology";

export interface Award {
  id: string;
  slug: string;
  title: string;
  year: number;
  issuer: string;
  category: AwardCategory;
  featured: boolean;
  description: string;
  certificateUrl: string;
  thumbnailUrl: string;
}

export const awards: Award[] = [
  {
    id: "award-2007-marksmanship-4th",
    slug: "advanced-police-marksmanship-competition-4th-place",
    title: "Advanced Police Marksmanship Competition – 4th Place",
    year: 2007,
    issuer:
      "Ministry of Interior – Central Security Forces, Canal & Sinai Region, Specialized Training Institute, Ismailia",
    category: "marksmanship",
    featured: false,
    description:
      "Awarded 4th place among 40 police officers in the final marksmanship competition of the Advanced Police Training Program for officers joining the Central Security Forces. The competition involved precision shooting with the AK-47 rifle at targets positioned 50 meters away.",
    certificateUrl:
      "/images/certifications/2007_10__police-shooting-4th.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2007_10__police-shooting-4th.jpg",
  },

  {
    id: "award-2008-systems-analysis-design",
    slug: "systems-analysis-and-design-training-program",
    title: "Systems Analysis and Design Training Program",
    year: 2008,
    issuer:
      "Ministry of Interior – General Administration of Information and Documentation (now General Administration of Information Technology)",
    category: "information-technology",
    featured: true,
    description:
      "Successfully completed the Systems Analysis and Design training program at the Information Systems Institute with an Excellent grade. The program covered software analysis methodologies, system design principles, and information systems development practices.",
    certificateUrl:
      "/images/certifications/2008_03_20__moi_it_analyze_and_design.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2008_03_20__moi_it_analyze_and_design.jpg",
  },

  {
    id: "award-2013-bravery-commendation",
    slug: "commendation-for-bravery-and-public-service",
    title: "Commendation for Bravery and Public Service",
    year: 2013,
    issuer:
      "Ministry of Interior – Central Security Forces Sector, Commander of the Central Security Forces",
    category: "commendation",
    featured: true,
    description:
      "Received an official commendation for demonstrating responsibility, initiative, and courage while off duty. After observing two individuals committing street thefts against members of the public, I pursued the suspects, successfully apprehended one of them, recovered evidence, and escorted the suspect to the nearest police station for legal processing. Subsequent checks confirmed that the suspect was a dangerous individual wanted for serious criminal offenses, including rape and robbery.",
    certificateUrl:
      "/images/certifications/2013_01_01__moi_css_appreciation.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2013_01_01__moi_css_appreciation.jpg",
  },

  {
    id: "award-2015-it-development-appreciation",
    slug: "information-systems-development-contributions",
    title: "Appreciation for Information Systems Development Contributions",
    year: 2015,
    issuer:
      "Ministry of Interior – Central Security Forces Sector, Commander of the Central Security Forces",
    category: "information-technology",
    featured: true,
    description:
      "Received official appreciation for sincere effort and outstanding performance in implementing and supporting the development plans of the information systems and IT infrastructure within the Central Security Forces sector. This contribution had a positive impact on improving operational efficiency and achieving a higher level of performance, reflecting a strong commitment to the mission of maintaining security and stability in Egypt.",
    certificateUrl:
      "/images/certifications/2015_07_07__moi_css_appreciation.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2015_07_07__moi_css_appreciation.jpg",
  },

  {
    id: "award-2020-sports-excellence-2nd",
    slug: "sports-excellence-certificate-mid-level-leadership-course",
    title:
      "Sports Excellence Certificate – Mid-Level Leadership Course (237th Batch) – 2nd Place",
    year: 2020,
    issuer:
      "Ministry of Interior – Police Academy, Training Institute for Police Officers",
    category: "sports",
    featured: false,
    description:
      "Awarded a Certificate of Sports Excellence by the Police Academy Training Institute during the Mid-Level Leadership Course (237th batch), held from 12 December 2020 to 31 December 2020. The recognition was granted for outstanding physical performance and sports excellence throughout the training program, where I ranked 2nd among 40 participating officers.",
    certificateUrl:
      "/images/certifications/2020_12_31__sports_excellence_2rd.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2020_12_31__sports_excellence_2rd.jpg",
  },

  {
    id: "award-2020-expert-marksman-2nd",
    slug: "expert-marksman-qualification-mid-level-leadership-course",
    title:
      "Expert Marksman Qualification – Mid-Level Leadership Course (237th Batch) – 2nd Place",
    year: 2020,
    issuer:
      "Ministry of Interior – Police Academy, Training Institute for Police Officers",
    category: "marksmanship",
    featured: true,
    description:
      "Successfully completed the firearms training program conducted as part of the Mid-Level Leadership Course (237th batch), held from 12 December 2020 to 31 December 2020. Earned the qualification of Expert Marksman with the pistol and achieved 2nd place among 40 participating police officers in the marksmanship assessments.",
    certificateUrl:
      "/images/certifications/2020_12_31__expert_marksman_pistol_2rd.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2020_12_31__expert_marksman_pistol_2rd.jpg",
  },

  {
    id: "award-2020-leadership-course-3rd",
    slug: "mid-level-leadership-course-excellent-grade-3rd-place",
    title:
      "Mid-Level Leadership Course (237th Batch) – Excellent Grade – 3rd Place",
    year: 2020,
    issuer:
      "Ministry of Interior – Police Academy, Training Institute for Police Officers",
    category: "leadership",
    featured: true,
    description:
      "Successfully completed the Mid-Level Leadership Course (237th batch), held from 12 December 2020 to 31 December 2020, achieving an Excellent grade. Ranked 3rd among 40 participating police officers based on overall performance throughout the program, which covered leadership, command, operational management, and professional development competencies.",
    certificateUrl:
      "/images/certifications/2020_12_31__mid_level_leadership_course.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2020_12_31__mid_level_leadership_course.jpg",
  },

  {
    id: "award-2020-minister-commendation",
    slug: "minister-of-interior-commendation-for-distinguished-service",
    title: "Minister of Interior Commendation for Distinguished Service",
    year: 2020,
    issuer:
      "Ministry of Interior – H.E. Mahmoud Tawfik, Minister of Interior",
    category: "commendation",
    featured: true,
    description:
      "Received a personal commendation from the Minister of Interior in recognition of dedicated service, outstanding performance, and meaningful contributions to the Ministry's mission. The commendation acknowledged exemplary professionalism, commitment to duty, and efforts that contributed to fulfilling the noble mission of maintaining security and public safety, while serving as a model of excellence for fellow officers.",
    certificateUrl:
      "/images/certifications/2020__minister_of_interior_commendation.pdf",
    thumbnailUrl:
      "/images/certifications/thumbnails/2020__minister_of_interior_commendation.jpg",
  },
];