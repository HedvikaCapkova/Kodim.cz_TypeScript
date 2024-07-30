interface BasePerson {
  name: string;
  email: string;
}

export interface Student extends BasePerson {
  role: 'student';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Teacher extends BasePerson {
  role: 'teacher';
  courses: string[];
}

export type Person = Student | Teacher; //sjednoceni typu - discriminated unions
