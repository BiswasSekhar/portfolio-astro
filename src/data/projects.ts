export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  useScreenshot?: boolean; // Flag to indicate if we should use a screenshot
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
    liveUrl: "https://yeahya.pages.dev/",
    githubUrl: "https://github.com/yourusername/ecommerce",
    useScreenshot: true,
    featured: true
  },
  {
    title: "IEEE CSKS Newsletter Compile Library",
    description: "A newsletter website for IEEE CSKS, featuring articles, events, and member contributions.",
    tags: ["NextJS", "Tailwind CSS"],
    liveUrl: "https://compilelibrary.vercel.app/",
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    useScreenshot: true,
    featured: true
  },
  {
    title: "Sarvasiksha AI Education Platform ",
    description: "An AI-powered education platform for Kerala syllabus students up to 10th grade.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Gemini"],
    liveUrl: "https://sarvasikshaa.vercel.app/",
    githubUrl: "https://github.com/yourusername/sarvasiksha",
    useScreenshot: true
  },
  {
    title: "Website For Keezhoor DB College",
    description: "A modern and responsive website for Keezhoor DB College, showcasing courses, faculty, and events.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://keezhoordbc.vercel.app/",
    githubUrl: "https://github.com/yourusername/task-management",
    useScreenshot: true
  },
  {
    title: "Website For GEOID UPSC Learning",
    description: "An educational platform for UPSC aspirants, providing resources, courses, and community support.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://weather-dashboard.example.com",
    useScreenshot: true
  },
  {
    title: "Batch Certificate Generator",
    description: "A tool for generating batch certificates with customizable templates and automated data input.",
    tags: ["Next.js"],
    liveUrl: "https://certifie.vercel.app/",
    githubUrl: "https://github.com/yourusername/blog",
    useScreenshot: true
  },
  {
    title: "Website for VV Prefab",
    description: "A modern and responsive website for VV Prefab, showcasing their products and services.",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://vvprefab-nclm.vercel.app/",
    githubUrl: "https://github.com/yourusername/vv-prefab",
    useScreenshot: true
  }
];
