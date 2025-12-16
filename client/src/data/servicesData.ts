import mechImg from "@/assets/service-mechanized.jpg";
import deepImg from "@/assets/service-deep-cleaning.jpg";
import polishImg from "@/assets/service-floor-polish.jpg";
import pestImg from "@/assets/service-pest-control.jpg";
import facilityImg from "@/assets/service-facility-management.jpg";
import tankCleaningImg from "@/assets/1.png";
import facadeMaintenanceImg from "@/assets/2.png";
import ductCleaningImg from "@/assets/3.png";
import swimmingPoolImg from "@/assets/4.png";
import work1Img from "@/assets/work-1.jpeg";
import work2Img from "@/assets/work-2.jpeg";
import work3Img from "@/assets/work-3.jpeg";
import work4Img from "@/assets/work-4.jpeg";
import work5Img from "@/assets/work-5.jpeg";
import work6Img from "@/assets/work-6.jpeg";
import work7Img from "@/assets/work-7.jpeg";
import work8Img from "@/assets/work-8.jpeg";

export type ServiceCategory = "hard" | "soft";

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  image?: string;
  overview?: string;
  features?: string[];
  benefits?: string[];
  process?: string[];
  timeline?: string;
  team?: string;
  certification?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "industrial-tank-cleaning-coating",
    title: "Industrial Tank Cleaning & Coating",
    category: "hard",
    shortDescription: "Safe and efficient cleaning with protective coating to extend tank life and prevent contamination.",
    image: tankCleaningImg,
    overview:
      "We clean industrial tanks using approved safety protocols and high-performance equipment, followed by protective coating as required. This helps remove residues, prevent corrosion, and improve operational safety.",
    features: [
      "Confined-space safety compliance",
      "High-pressure cleaning systems",
      "Sludge and residue removal",
      "Coating preparation and application",
      "Documentation and handover"
    ],
    benefits: [
      "Extended tank life",
      "Reduced contamination risk",
      "Improved safety and compliance",
      "Better operational efficiency"
    ],
    process: [
      "Site assessment & safety planning",
      "Isolation and ventilation",
      "Cleaning and residue removal",
      "Surface preparation",
      "Coating (if required) + final inspection"
    ],
    timeline: "Project-based (typically 1-5 days)",
    team: "4-12 trained technicians",
    certification: "Industrial Safety Protocols"
  },
  {
    id: "industrial-deep-cleaning",
    title: "Industrial Deep Cleaning Service",
    category: "hard",
    shortDescription: "Specialized cleaning for heavy-duty machinery, production floors, and industrial environments.",
    image: work1Img,
    overview:
      "Deep cleaning for industrial facilities focusing on high-traffic, high-soil areas using industry-grade techniques and eco-safe products.",
    features: [
      "Floor and wall deep cleaning",
      "Machine-area cleaning",
      "Grease and grime removal",
      "Disinfection as required"
    ],
    benefits: [
      "Improved hygiene and safety",
      "Reduced contamination risks",
      "Better machine-area cleanliness",
      "Enhanced workplace appearance"
    ],
    process: [
      "Site assessment",
      "Area protection and preparation",
      "Degreasing and deep cleaning",
      "Disinfection (if required)",
      "Final inspection and reporting"
    ],
    timeline: "Project-based (typically 1-3 days)",
    team: "4-10 trained professionals",
    certification: "Safety & Quality Protocols"
  },
  {
    id: "robotic-duct-cleaning",
    title: "Robotic Duct Cleaning",
    category: "hard",
    shortDescription: "Robotic technology and thorough cleaning to improve indoor air quality and system efficiency.",
    image: ductCleaningImg,
    overview:
      "Robotic inspection and cleaning of ducts helps remove dust, microbial growth, and debris from HVAC systems while minimizing downtime.",
    features: [
      "Robotic inspection",
      "HEPA vacuum extraction",
      "Sanitization options",
      "Before/after reporting"
    ],
    benefits: [
      "Improved indoor air quality",
      "Better HVAC efficiency",
      "Reduced dust and allergens",
      "Minimal disruption to operations"
    ],
    process: [
      "Duct inspection and access planning",
      "Robotic cleaning and extraction",
      "Optional sanitization",
      "Post-clean inspection",
      "Reporting and handover"
    ],
    timeline: "Project-based",
    team: "2-6 trained technicians",
    certification: "Safety & Quality Protocols"
  },
  {
    id: "glass-facade-maintenance",
    title: "Glass & Facade Maintenance (High-Rise Access)",
    category: "hard",
    shortDescription: "High-rise glass and facade cleaning with trained teams and safety-first access methods.",
    image: facadeMaintenanceImg,
    overview:
      "We provide safe facade and glass cleaning services using rope access / cradle systems and trained manpower as per site requirements.",
    features: [
      "Rope access / cradle operations",
      "Trained and equipped staff",
      "Safety supervision",
      "Spotless finish"
    ],
    benefits: [
      "Enhanced building appearance",
      "Safe high-rise operations",
      "Reduced staining and buildup",
      "Scheduled maintenance support"
    ],
    process: [
      "Site survey and access plan",
      "Safety setup and equipment checks",
      "Facade/glass cleaning",
      "Quality inspection",
      "Reporting and schedule planning"
    ],
    timeline: "Project-based / periodic",
    team: "4-12 trained staff",
    certification: "High-Rise Safety Protocols"
  },
  {
    id: "structural-space-frame-cleaning",
    title: "Structural / Space Frame Cleaning",
    category: "hard",
    shortDescription: "Specialized cleaning of structural elements and space frames for industrial and commercial sites.",
    image: work2Img,
    overview:
      "We clean structural and space-frame areas using safe access methods and appropriate equipment to remove dust, grime, and buildup while maintaining safety and compliance.",
    features: [
      "Safe access methods",
      "Dust and cobweb removal",
      "High-level cleaning",
      "Site-specific safety planning"
    ],
    benefits: [
      "Cleaner high-level areas",
      "Improved site safety",
      "Better facility hygiene",
      "Professional appearance"
    ],
    process: [
      "Site assessment",
      "Access setup and safety checks",
      "Cleaning execution",
      "Debris disposal",
      "Final inspection"
    ]
  },
  {
    id: "pressure-washing-large-surfaces",
    title: "Pressure Washing for Large Surfaces",
    category: "hard",
    shortDescription: "High-pressure cleaning for large exterior and industrial surfaces.",
    image: work3Img,
    overview:
      "High-pressure washing for driveways, parking areas, industrial floors, walls, and exterior surfaces to remove dirt, stains, and buildup quickly and effectively.",
    features: [
      "High-pressure jet systems",
      "Stain and algae removal",
      "Suitable for large areas",
      "Controlled water usage"
    ],
    benefits: [
      "Instant visual improvement",
      "Reduced slip hazards",
      "Improved surface life",
      "Cost-effective for large surfaces"
    ],
    process: [
      "Surface inspection",
      "Area preparation",
      "Pressure washing",
      "Rinse and cleanup",
      "Handover"
    ]
  },
  {
    id: "disinfection-industrial-zones",
    title: "Disinfection of High-Traffic Industrial Zones",
    category: "hard",
    shortDescription: "Comprehensive disinfection to maintain a safe and hygienic environment in high-traffic zones.",
    image: work4Img,
    overview:
      "Targeted disinfecting of high-touch and high-traffic areas using approved chemicals and protocols to help maintain a safer workplace.",
    features: [
      "High-touch point disinfection",
      "Approved disinfectants",
      "Coverage planning",
      "Post-service reporting"
    ],
    benefits: [
      "Reduced infection risks",
      "Improved workplace confidence",
      "Better hygiene compliance",
      "Regular scheduling options"
    ],
    process: [
      "Area mapping",
      "Surface pre-cleaning",
      "Disinfection application",
      "Contact time adherence",
      "Inspection and reporting"
    ]
  },
  {
    id: "housekeeping-amc",
    title: "Housekeeping AMC",
    category: "hard",
    shortDescription: "Annual housekeeping contract for consistent cleanliness and maintenance.",
    image: work5Img,
    overview:
      "Annual housekeeping AMC provides a dedicated team, defined SOPs, and scheduled cleaning to keep your facility consistently clean and well maintained.",
    features: [
      "Dedicated housekeeping team",
      "Daily/periodic schedules",
      "SOP-based execution",
      "Quality supervision"
    ],
    benefits: [
      "Consistent service quality",
      "Predictable monthly costs",
      "Improved hygiene standards",
      "Better facility uptime"
    ],
    process: [
      "Site onboarding and SOP finalization",
      "Team deployment",
      "Daily execution",
      "Regular audits",
      "Monthly reporting"
    ]
  },
  {
    id: "fire-safety-surface-cleaning",
    title: "Fire Safety Surface Cleaning (Post-incident)",
    category: "hard",
    shortDescription: "Post-incident surface cleaning to remove soot/residue and restore safety.",
    image: work6Img,
    overview:
      "Post-incident surface cleaning focuses on safe removal of soot, smoke residue and debris from affected areas, helping restore the site for safe reuse and further remediation steps.",
    features: [
      "Soot and smoke residue removal",
      "Safe handling and PPE compliance",
      "Targeted deep cleaning",
      "Site-ready handover"
    ],
    benefits: [
      "Improved safety and hygiene",
      "Faster site restoration",
      "Reduced odor and staining",
      "Better post-incident recovery"
    ],
    process: [
      "Assessment and safety setup",
      "Debris and residue removal",
      "Deep cleaning of surfaces",
      "Sanitization (if required)",
      "Final inspection and handover"
    ],
    timeline: "Project-based",
    team: "4-12 trained professionals",
    certification: "Safety & Quality Protocols"
  },

  {
    id: "mechanized-housekeeping",
    title: "Mechanized Housekeeping",
    category: "soft",
    shortDescription:
      "Advanced equipment and trained professionals for efficient daily maintenance.",
    image: mechImg,
    overview:
      "Our mechanized housekeeping service combines modern cleaning technology with trained technicians for consistent and high-quality maintenance across facilities.",
    features: [
      "Advanced mechanized cleaning equipment",
      "Trained technicians",
      "Daily/periodic schedules",
      "Quality checks"
    ]
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    category: "soft",
    shortDescription:
      "Comprehensive cleaning solutions for spotless and hygienic spaces.",
    image: deepImg,
    overview:
      "Comprehensive deep cleaning that reaches corners and high-touch areas to remove dirt, stains and pathogens, restoring freshness and hygiene.",
    features: [
      "Deep cleaning of floors, walls and surfaces",
      "Stain and odor removal",
      "Disinfection options",
      "Final inspection"
    ],
    benefits: [
      "Improved hygiene",
      "Better indoor air quality",
      "Fresh, clean appearance",
      "Healthier environment"
    ],
    process: [
      "Assessment",
      "Area preparation",
      "Deep cleaning",
      "Sanitization (if required)",
      "Handover"
    ]
  },
  {
    id: "marble-polishing",
    title: "Marble Polishing",
    category: "soft",
    shortDescription: "Professional polishing to restore shine and extend surface life.",
    image: polishImg,
    overview:
      "Professional marble and stone polishing using suitable abrasives and compounds to restore gloss, remove scratches, and protect surfaces.",
    features: [
      "Scratch and stain reduction",
      "Diamond abrasive polishing",
      "Surface sealing options",
      "Dust-controlled execution"
    ],
    benefits: [
      "Restored shine",
      "Extended floor life",
      "Premium appearance",
      "Easier maintenance"
    ],
    process: [
      "Surface assessment",
      "Grinding/honing",
      "Polishing",
      "Sealing (optional)",
      "Final inspection"
    ]
  },
  {
    id: "pest-control",
    title: "Pest Control",
    category: "soft",
    shortDescription: "Eco-friendly pest management for safe and healthy environments.",
    image: pestImg,
    overview:
      "Eco-conscious pest management using targeted treatment and prevention strategies to control pests while prioritizing occupant safety.",
    features: [
      "Inspection and identification",
      "Targeted treatment",
      "Preventive recommendations",
      "Scheduled maintenance"
    ],
    benefits: [
      "Healthier environment",
      "Reduced pest recurrence",
      "Asset protection",
      "Compliance support"
    ],
    process: [
      "Inspection",
      "Treatment plan",
      "Application",
      "Monitoring",
      "Follow-up"
    ]
  },
  {
    id: "facility-management",
    title: "Facility Management",
    category: "soft",
    shortDescription:
      "Comprehensive facility solutions ensuring operational excellence and efficiency.",
    image: facilityImg,
    overview:
      "End-to-end facility management integrating housekeeping, maintenance, and support services through process-driven systems and trained teams.",
    features: [
      "Integrated services",
      "Process-driven execution",
      "Quality supervision",
      "Reporting and audits"
    ],
    benefits: [
      "Single point of coordination",
      "Improved efficiency",
      "Cost optimization",
      "Consistent service quality"
    ],
    process: [
      "Site audit",
      "Service planning",
      "Team deployment",
      "Ongoing monitoring",
      "Continuous improvement"
    ]
  },
  {
    id: "swimming-pool-services",
    title: "Swimming Pool Services",
    category: "soft",
    shortDescription:
      "Professional cleaning, maintenance, and water treatment to keep pools safe, hygienic, and crystal clear.",
    image: swimmingPoolImg,
    overview:
      "Pool cleaning and maintenance including filtration checks, chemical balancing and surface cleaning to help maintain safe and clear water.",
    features: [
      "Water testing and chemical balancing",
      "Filter and pump checks",
      "Surface and tile cleaning",
      "Regular maintenance scheduling"
    ],
    benefits: [
      "Safe, hygienic water",
      "Reduced algae and buildup",
      "Better equipment performance",
      "Crystal clear pool appearance"
    ],
    process: [
      "Inspection",
      "Cleaning",
      "Chemical balancing",
      "Equipment check",
      "Reporting"
    ]
  },
  {
    id: "sanitization",
    title: "Sanitization",
    category: "soft",
    shortDescription:
      "Comprehensive disinfection services ensuring a germ-free and safe environment.",
    image: work6Img,
    overview:
      "Comprehensive sanitization and disinfection using approved chemicals and protocols for workplaces, public areas, and high-touch surfaces.",
    features: [
      "High-touch point coverage",
      "Approved disinfectants",
      "Misting/spraying options",
      "Reporting"
    ],
    benefits: [
      "Reduced infection risk",
      "Safer workplace",
      "Improved hygiene compliance",
      "Peace of mind"
    ],
    process: [
      "Area mapping",
      "Surface preparation",
      "Disinfection application",
      "Contact time adherence",
      "Handover"
    ]
  },
  {
    id: "carpet-shampooing",
    title: "Carpet Shampooing",
    category: "soft",
    shortDescription:
      "Deep carpet cleaning to remove stains, odor and restore freshness.",
    image: work8Img,
    overview:
      "Deep carpet cleaning using suitable shampooing/extraction methods to remove dirt, stains and odor, restoring freshness and extending carpet life.",
    features: [
      "Shampooing and extraction",
      "Stain and odor removal",
      "Quick drying options",
      "Suitable for office and commercial carpets"
    ],
    benefits: [
      "Cleaner, fresher carpets",
      "Improved indoor air quality",
      "Extended carpet life",
      "Better appearance"
    ],
    process: [
      "Inspection",
      "Pre-treatment",
      "Shampooing/extraction",
      "Drying",
      "Final inspection"
    ]
  },
  {
    id: "honey-hive-services",
    title: "Honey Hive Services",
    category: "soft",
    shortDescription:
      "Safe and eco-friendly bee hive removal, relocation, and honey extraction while ensuring the protection of bees.",
    image: work7Img,
    overview:
      "Humane honey hive removal and relocation services using safe handling practices. We ensure protection of bees while keeping your premises safe, clean, and free from infestations.",
    features: [
      "Safe hive removal and relocation",
      "Eco-friendly handling practices",
      "Minimal disturbance to occupants",
      "Site assessment and safety planning"
    ],
    benefits: [
      "Bee-safe relocation",
      "Reduced sting and infestation risks",
      "Cleaner and safer premises",
      "Professional execution and guidance"
    ],
    process: [
      "Site inspection and risk assessment",
      "Safety setup and area isolation",
      "Humane hive removal/relocation",
      "Cleaning and preventive guidance",
      "Handover"
    ],
    timeline: "Project-based (typically same day)",
    team: "2-4 trained technicians",
    certification: "Standard safety & quality compliance"
  },
  {
    id: "oil-surface-degreasing",
    title: "Oil Surface Degreasing",
    category: "soft",
    shortDescription:
      "Effective oil and grease removal to restore surfaces for reuse or recoating.",
    image: work6Img,
    overview:
      "Degreasing of oily and greasy surfaces using suitable degreasers and controlled methods to restore cleanliness, improve safety, and prepare surfaces for reuse or recoating.",
    features: [
      "Oil and grease removal",
      "Surface preparation for recoating",
      "Controlled chemical usage",
      "Post-service cleanup"
    ],
    benefits: [
      "Reduced slip hazards",
      "Improved coating adhesion",
      "Cleaner and safer work areas",
      "Extended asset life"
    ],
    process: [
      "Surface inspection",
      "Degreaser application",
      "Agitation/scrubbing",
      "Rinse and residue removal",
      "Final inspection"
    ],
    timeline: "Project-based",
    team: "2-6 trained professionals",
    certification: "Standard safety & quality compliance"
  }
];

export const getServiceById = (id: string) => servicesData.find((s) => s.id === id);
export const hardServices = servicesData.filter((s) => s.category === "hard");
export const softServices = servicesData.filter((s) => s.category === "soft");
