type Course = {
    id: string;
    imageSrc: string;
    authorImageSrc?: string;
    title: string;
    heading?: string;
    metaTitle: string;
    metaDesc: string;
    metaKeyword: string;
    rating?: number;
    ratingCount?: number;
    ModuleCount: string | number;
    quiz: number;
    class: number;
    duration: string | number;
    level: string;
    originalPrice: number;
    discountedPrice: number;
    paid: boolean;
    popular?: boolean;
    new?: boolean;
    bestSeller?: boolean;
    state: string;
    viewStatus: string;
    difficulty: string;
    placed?: number;
    students?: number;
    category: string;
    language: string;
    desc: (string | string[])[];
    requirement: string[];
    faq: {
      question: string;
      answer: string;
    }[];
    review?: {
      id: number;
      avatarSrc: string;
      name: string;
      date: string;
      rating: number;
      title: string;
      comment: string;
    }[];
    lessonItems: {
      id: number;
      heading: string;
      duration?: string;
      title?: string;
      lessons: {
        id: number;
        title: string;
        duration?: string;
        questions?: number;
      }[];
    }[];
  };
  
  export type CoursesData = Course[];
  

  