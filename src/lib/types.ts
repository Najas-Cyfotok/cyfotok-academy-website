export type CourseData = {
  id: string;
  imageSrc: string;
  title: string;
  heading?: string;
  ModuleCount: string | number;
  quiz: number;
  class: number;
  duration: string | number;
  level: string;
  originalPrice: number;
  discountedPrice: number;
  paid: boolean;
  popular?: boolean;
  metaTitle?: string; // Optional
  metaDesc?: string;  // Optional
  metaKeyword?: string; // Optional
  category: string;
  state: string;
  language?: string;
  viewStatus: string;
  difficulty: string;
  placed?: number;
  desc: (string | string[])[];
  requirement: string[];
  faq: { question: string; answer: string }[];
  lessonItems: {
    id: number;
    heading: string;
    title?: string;
    duration?: string;
    lessons: {
      id: number;
      title: string;
      duration?: string;
      questions?: number;
    }[];
  }[];
  rating?: number;
  ratingCount?: number;
  authorImageSrc?: string;
  students?: number;
  authorName?: string;
  new?: boolean;
  bestSeller?: boolean;
  review?: {
    id: number;
    avatarSrc: string;
    name: string;
    date: string;
    rating: number;
    title: string;
    comment: string;
  }[];
};
