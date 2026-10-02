// ============================================================================
// CENTRAL MEDIA & ASSETS CONFIGURATION
// Is file me website ki saari images, badges aur videos centralized hain.
// Client ki nayi images aane par bas yahan image path/URL update karna hai.
// ============================================================================

export const siteMedia = {
  // Brand Assets
  branding: {
    logo: "/images/brand/aadhar-logo.png", // Fallback text renders if missing
    logoAlt: "Aadhar Institute Hamirpur Logo",
    favicon: "/favicon.ico",
  },

  // Hero Section Media
  hero: {
    campusImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    classroomVideoThumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with Aadhar Institute intro video
  },

  // Toppers / Results Section Photos (Clean replace for legacy WhatsApp image names)
  toppers: [
    {
      id: "topper-1",
      name: "Sourav Sharma",
      exam: "NEET UG",
      score: "675 / 720",
      rank: "AIR 1420",
      college: "Govt. Medical College",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "topper-2",
      name: "Anshika Thakur",
      exam: "JEE Advanced",
      score: "99.4%ile",
      rank: "AIR 2180",
      college: "NIT Hamirpur (CSE)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "topper-3",
      name: "Anshuman Verma",
      exam: "HPBOSE 12th Board",
      score: "97.8%",
      rank: "State Merit Holder",
      college: "Top Ranker 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "topper-4",
      name: "Nikita Negi",
      exam: "NEET UG",
      score: "648 / 720",
      rank: "State Rank 48",
      college: "IGMC Shimla",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "topper-5",
      name: "Gaurav Dhiman",
      exam: "IISER Aptitude Test",
      score: "Qualified",
      rank: "AIR 312",
      college: "IISER Mohali (BS-MS)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "topper-6",
      name: "Aditi Sharma",
      exam: "CBSE 12th Board",
      score: "98.2%",
      rank: "District Topper",
      college: "Target Batch Alum",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    }
  ],

  // Faculty Photographs
  faculty: [
    {
      id: "faculty-attal",
      name: "Mr. Attal Sharma",
      subject: "Chemistry Specialist",
      experience: "15+ Years Teaching Experience",
      expertise: "Organic & Physical Chemistry for JEE / NEET",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "faculty-anjli",
      name: "Mrs. Anjli",
      subject: "Biology Specialist",
      experience: "11+ Years Teaching Experience",
      expertise: "Zoology & Botany for NEET Medical Aspirants",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "faculty-aryan",
      name: "Mr. Aryan Raj",
      subject: "Physics Specialist (Ex-Aakash)",
      experience: "8+ Years Teaching Experience",
      expertise: "Mechanics, Electrodynamics & Modern Physics",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "faculty-seema",
      name: "Mrs. Seema Sharma",
      subject: "Mathematics Specialist",
      experience: "3+ Years Teaching Experience",
      expertise: "Calculus, Algebra & Board Foundation",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
    }
  ],

  // Campus Facility Photos
  campus: {
    hostel: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    labs: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  }
};