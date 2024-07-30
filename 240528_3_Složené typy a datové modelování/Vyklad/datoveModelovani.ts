interface EducationModule {
  name: string;
  description: string;
  price: number;
  capacity: number;
}

interface LessonLocation {
  type: 'online' | 'hybrid' | 'onsite';
  name: string;
  address: string;
  note?: string;
}

interface Lesson {
  title: string;
  description: string;
  date: string;
  hours: number;
  location: LessonLocation;
  lecturer: string;
}

interface Course extends EducationModule {
  startDate: string;
  lessons: Lesson[];
}

interface Workshop extends EducationModule {
  lesson: Lesson;
}

interface Academy extends EducationModule {
  startDate: string;
  courses: Course[];
  workshop: Workshop[];
}
