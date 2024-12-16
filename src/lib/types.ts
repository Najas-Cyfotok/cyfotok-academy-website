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
  metaDesc?: string; // Optional
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

export type resources = {
  id: number;
  imgSrc: string;
  title: string;
  date: string;
  pdf: string;
  location: string;
  desc: string;
  category: string;
  download: number;
  searchKeyword: string;
  // paid:boolean;
  // price:number;
  // preDiscount:number;
}[];

export type resourcesCategory = {
  id: number;
  title: string;
}[];

export type Blog = {
  id: string;
  imageSrc: string;
  metatitle: string;
  author: string;
  authorLink: string;
  metadesc: string;
  category: string;
  title: string;
  date: string;
  desc: string;
  para: Array<{
    heading?: string; // Optional as not all objects have "heading"
    subheading?: string; // Optional as not all objects have "subheading"
    text?: string; // Optional as not all objects have "text"
    code?: string; // Optional as not all objects have "code"
  }>;
}[];

export type BlogData = {
  id: string;
  imageSrc: string;
  metatitle: string;
  author: string;
  authorLink: string;
  metadesc: string;
  category: string;
  title: string;
  date: string;
  desc: string;
  para: {
    heading?: string;
    subheading?: string;
    text?: string;
    code?: string;
  }[];
};
