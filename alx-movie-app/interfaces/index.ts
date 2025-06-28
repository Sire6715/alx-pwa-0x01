export interface ComponentProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void;
}

export interface MovieProps {
  id?: string;
  title: string;
  posterImage: string;
  releaseYear: string;
}

interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id?: string;
  titleText: TitleText;
  primaryImage: PrimaryImage;
  releaseYear: ReleaseYear;
}
