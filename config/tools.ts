import {
  Image,
  FileText,
  Bot,
  Video,
  Wand2,
  Crop,
  ScanLine,
  FileImage,
  Sparkles,
  ImageIcon,
} from "lucide-react";

export type ToolCategory =
  | "Image"
  | "PDF"
  | "AI"
  | "Video"
  | "Automation";

export interface ToolItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ToolCategory;
  href: string;
  icon: typeof Image;
  featured: boolean;
  popular: boolean;
  premium: boolean;
  comingSoon: boolean;
}

export const tools: ToolItem[] = [

  // ==========================
  // IMAGE TOOLS
  // ==========================

  {
    id: "compress-image",
    slug: "compress-image",
    title: "Compress Image",
    description:
      "Reduce image size without losing noticeable quality.",
    category: "Image",
    href: "/image/compress",
    icon: Image,
    featured: true,
    popular: true,
    premium: false,
    comingSoon: false,
  },

  {
    id: "image-resizer",
    slug: "resize-image",
    title: "Resize Image",
    description:
      "Resize images to any dimensions instantly.",
    category: "Image",
    href: "/image/resize",
    icon: Crop,
    featured: true,
    popular: true,
    premium: false,
    comingSoon: false,
  },

  {
    id: "image-converter",
    slug: "image-converter",
    title: "Image Converter",
    description:
      "Convert JPG, PNG, WEBP and more.",
    category: "Image",
    href: "/image/converter",
    icon: FileImage,
    featured: true,
    popular: false,
    premium: false,
    comingSoon: true,
  },
    {
    id: "remove-background",
    slug: "remove-background",
    title: "Remove Background",
    description:
      "Remove image backgrounds in one click using AI.",
    category: "Image",
    href: "/image/background-remover",
    icon: ScanLine,
    featured: true,
    popular: true,
    premium: false,
    comingSoon: false,
  },

  {
  id: "ai-image-generator",
  slug: "ai-image-generator",
  title: "AI Image Generator",
  description:
    "Generate stunning AI images from text prompts in seconds.",
  category: "Image",
  href: "/ai-image-generator",
  icon: ImageIcon,
  featured: true,
  popular: true,
  premium: false,
  comingSoon: false,
},

  // ==========================
  // PDF TOOLS
  // ==========================

  {
    id: "merge-pdf",
    slug: "merge-pdf",
    title: "Merge PDF",
    description:
      "Combine multiple PDF files into one.",
    category: "PDF",
    href: "/pdf/merge",
    icon: FileText,
    featured: true,
    popular: true,
    premium: false,
    comingSoon: true,
  },

  {
    id: "split-pdf",
    slug: "split-pdf",
    title: "Split PDF",
    description:
      "Extract pages from PDF files.",
    category: "PDF",
    href: "/pdf/split",
    icon: FileText,
    featured: false,
    popular: true,
    premium: false,
    comingSoon: true,
  },

  {
    id: "compress-pdf",
    slug: "compress-pdf",
    title: "Compress PDF",
    description:
      "Reduce PDF file size while preserving quality.",
    category: "PDF",
    href: "/pdf/compress",
    icon: FileText,
    featured: true,
    popular: true,
    premium: false,
    comingSoon: true,
  },

  // ==========================
  // AI TOOLS
  // ==========================

  {
    id: "ai-writer",
    slug: "ai-writer",
    title: "AI Writer",
    description:
      "Generate high-quality content using AI.",
    category: "AI",
    href: "/ai/writer",
    icon: Bot,
    featured: true,
    popular: true,
    premium: true,
    comingSoon: true,
  },

  {
    id: "ai-chat",
    slug: "ai-chat",
    title: "AI Chat",
    description:
      "Chat with an intelligent AI assistant.",
    category: "AI",
    href: "/ai/chat",
    icon: Bot,
    featured: true,
    popular: true,
    premium: true,
    comingSoon: true,
  },

  {
  id: "ai-text-generator",
  slug: "ai-text-generator",
  title: "AI Text Generator",
  description:
    "Generate blogs, emails, captions, product descriptions and more using AI.",
  category: "AI",
  href: "/ai-text-generator",
  icon: Sparkles,
  featured: true,
  popular: true,
  premium: false,
  comingSoon: false,
},

{
  id: "ai-humanizer",
  slug: "ai-humanizer",
  title: "AI Humanizer",
  description:
    "Rewrite AI-generated text into natural, human-like writing instantly.",
  category: "AI",
  href: "/ai-humanizer",
  icon: Wand2,
  featured: true,
  popular: true,
  premium: false,
  comingSoon: false,
},

{
  id: "resume-builder",
  slug: "ai-resume-builder",
  title: "AI Resume Builder",
  description:
    "Create professional ATS-friendly resumes with AI and download them as PDF.",
  category: "AI",
  href: "/ai-resume-builder",
  icon: FileText,
  featured: true,
  popular: true,
  premium: false,
  comingSoon: false,
},

  // ==========================
  // VIDEO TOOLS
  // ==========================

  {
    id: "compress-video",
    slug: "compress-video",
    title: "Compress Video",
    description:
      "Reduce video file size without losing quality.",
    category: "Video",
    href: "/video/compress",
    icon: Video,
    featured: true,
    popular: true,
    premium: false,
    comingSoon: true,
  },

  // ==========================
  // AUTOMATION
  // ==========================

  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Automate repetitive tasks with AI workflows.",
    category: "Automation",
    href: "/automation",
    icon: Wand2,
    featured: true,
    popular: false,
    premium: true,
    comingSoon: true,
  },

  {
  id: "crop-image",
  slug: "crop-image",
  title: "Crop Image",
  description: "Crop images to any size.",
  category: "Image",
  href: "/image/crop",
  icon: Crop,
  featured: true,
  popular: true,
  premium: false,
  comingSoon: false,
},

];
// ====================================
// HELPERS
// ====================================

export const featuredTools = tools.filter(
  (tool) => tool.featured
);

export const popularTools = tools.filter(
  (tool) => tool.popular
);

export const freeTools = tools.filter(
  (tool) => !tool.premium
);

export const premiumTools = tools.filter(
  (tool) => tool.premium
);

export const availableTools = tools.filter(
  (tool) => !tool.comingSoon
);

export const upcomingTools = tools.filter(
  (tool) => tool.comingSoon
);

export const imageTools = tools.filter(
  (tool) => tool.category === "Image"
);

export const pdfTools = tools.filter(
  (tool) => tool.category === "PDF"
);

export const aiTools = tools.filter(
  (tool) => tool.category === "AI"
);

export const videoTools = tools.filter(
  (tool) => tool.category === "Video"
);

export const automationTools = tools.filter(
  (tool) => tool.category === "Automation"
);

// ====================================
// UTILITIES
// ====================================

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolById(id: string) {
  return tools.find((tool) => tool.id === id);
}

export function getToolsByCategory(category: ToolCategory) {
  return tools.filter((tool) => tool.category === category);
}

export function searchTools(query: string) {
  const search = query.toLowerCase().trim();

  return tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.category.toLowerCase().includes(search)
  );
}