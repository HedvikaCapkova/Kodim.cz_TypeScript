export type Gender = 'male' | 'female';

export interface Patient {
  year: number;
  month: number;
  day: number;
  gender: Gender;
  controlNumber: string;
}
