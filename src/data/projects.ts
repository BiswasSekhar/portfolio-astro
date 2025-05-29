export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Helper function to generate ScreenshotOne URL
export function getScreenshotUrl(url: string, apiKey: string): string {
  const encodedUrl = encodeURIComponent(url);
  return `https://api.screenshotone.com/take?access_key=${apiKey}&url=${encodedUrl}&device_scale_factor=1&format=jpg&image_quality=85&delay=2`;
}

export const projects: Project[] = [
  {
    title: "Yeah Fake News Detection in Malayalam",
    description: "A web application that detects fake news in Malayalam using AI.",
    tags: ["React", "Node.js", "SupaBase", "Gemini"],
    imageUrl: "/yeah.png", // Make sure this file exists in the public folder
    liveUrl: "https://yeahya.pages.dev/",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    title: "IEEE CSKS Newsletter Compile Library",
    description: "A newsletter website for IEEE CSKS, featuring articles, events, and member contributions.",
    tags: ["NextJS", "Tailwind CSS"],
    imageUrl: "/compile.png",
    liveUrl: "https://compilelibrary.vercel.app/",
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    featured: true
  },
  {
    title: "Sarvasiksha AI Education Platform ",
    description: "An AI-powered education platform for Kerala syllabus students up to 10th grade.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Gemini"],
    imageUrl: "/sarva.png",
    liveUrl: "https://sarvasikshaa.vercel.app/",
    githubUrl: "https://github.com/yourusername/sarvasiksha",
  },{
    title: "KTU CGPA AND SGPA Calculator",
    description: "A web application for calculating CGPA and SGPA for KTU students.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: "/ktu.png",
    liveUrl: "https://ktugrader.pages.dev/",
  },
  {
    title: "Website For Keezhoor DB College",
    description: "A modern and responsive website for Keezhoor DB College, showcasing courses, faculty, and events.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    imageUrl: "/dbc.png",
    liveUrl: "https://keezhoordbc.vercel.app/",
    githubUrl: "https://github.com/yourusername/task-management",
  },
  {
    title: "Website For GEOID UPSC Learning",
    description: "An educational platform for UPSC aspirants, providing resources, courses, and community support.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: "/geoid.png",
    liveUrl: "https://geoidacademy.vercel.app/",
  },
  {
    title: "Batch Certificate Generator",
    description: "A tool for generating batch certificates with customizable templates and automated data input.",
    tags: ["Next.js"],
    imageUrl: "/certifie.png",
    liveUrl: "https://certifie.vercel.app/",
    githubUrl: "https://github.com/yourusername/blog",
  },
  {
    title: "Website for VV Prefab",
    description: "A modern and responsive website for VV Prefab, showcasing their products and services.",
    tags: ["Next.js", "Tailwind CSS"],
    imageUrl: "/vv.png",
    liveUrl: "https://vvprefab-nclm.vercel.app/",
    githubUrl: "https://github.com/yourusername/vv-prefab",
  }
];
