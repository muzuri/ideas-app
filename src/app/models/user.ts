import { Idea } from './idea';

export interface AuthDTO {
  username: string;
  password: string;
}
export interface User {
  id: string;
  updated: string;
  userName: string;
  created: Date;
  token?: string;
  bookmarks?: Idea[];
}
