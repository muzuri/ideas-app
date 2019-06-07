import { User } from './user';

export interface Idea {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  description: string;
  author: User;
  downvotes?: number;
  upvotes?: number;
  // comment: Comment;

}
export interface IdeaDTO {
  idea: string;
  description: string;
}
