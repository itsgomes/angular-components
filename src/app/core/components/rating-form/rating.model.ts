export type FormResponse = {
  comment?: string;
  rating: Rating;
}

export type Rating = {
  ratingLevel: number;
  ratingLevelName: RatingLevelName;
}

export enum RatingLevelName {
  Poor = "Poor",
  Unsatisfactory = "Unsatisfactory",
  Satisfactory = "Satisfactory",
  VerySatisfactory = "Very Satisfactory",
  Outstanding = "Outstading"
}

export const RATINGS: Rating[] = [
  { ratingLevel: 1, ratingLevelName: RatingLevelName.Poor },
  { ratingLevel: 2, ratingLevelName: RatingLevelName.Unsatisfactory },
  { ratingLevel: 3, ratingLevelName: RatingLevelName.Satisfactory },
  { ratingLevel: 4, ratingLevelName: RatingLevelName.VerySatisfactory },
  { ratingLevel: 5, ratingLevelName: RatingLevelName.Outstanding }
];