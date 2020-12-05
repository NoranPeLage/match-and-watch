export interface User {
  nickName: string;
}

export interface Session {
  publicCode: string;
  users: User[];
  movies: Movie[];
}

export type Genre = 'horror' | 'comedy' | 'etc';

export interface Movie {
  likes: number;
  data: MovieMetadata;
}
+

export interface MovieMetadata {
  title: string;
  year: number;
  cover: string;
  score: number;
  genre: Genre;
  casting: Actor[];
  synopsis: string;
}

export type Role = 'actor' | 'director';

export interface Actor {
  name: string;
  role: Role;
}
