import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthDTO, User } from '../models/user';
import {Idea, IdeaDTO} from '../models/idea';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = environment.api_server + '/api';

  constructor(private http: HttpClient, private auth: AuthService) { }

  private request(method: string, endpoint: string, body?: any): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this.http.request(method, url,
      {
        body,
        headers: { authorization: `Bearer ${this.auth.token}` }
      });

  }
  getUsers(page?: string): Observable<AuthDTO[]> {
    const page2 = `users?page=${page}`;
    const endpoint = page ? page2 : 'users';
    // const url = `${this.api}/${endpoint}`;
    return this.request('Get', endpoint);

  }
  getUser(username: string): Observable<User> {
    const endpoint = `users/${username}`;
    return this.request('Get', endpoint);

  }
  getIdeas(page?: string): Observable<Idea[]> {
    const endpoint = page ? `idea?page=${page}` : 'idea';
    return this.request('Get', endpoint);
  }
getIdea(userId: string): Observable<Idea> {
  const endpoint = `ideas/${userId}`;
  return this.request('Get', endpoint);
}
createIdea(data: IdeaDTO): Observable<Idea> {
  const endpoint = 'ideas';
  return this.request('POST', endpoint, data);
}
updateIdea(ideaId: string, data: Partial<Idea>): Observable<Idea[]> {
 const endpoint = `ideas/${ideaId}`;
 return this.request('PUT', endpoint, data);
}
deleteIdea(ideaId: string) {
  const endpoint = `ideas/${ideaId}`;
  return this.request('DELETE', endpoint);

}
bookmarkIdea(ideaId: string): Observable<AuthDTO> {
  const endpoint = `${ideaId}/bookmark`;
  return this.request('POST', endpoint);

}
unbookmark(ideaId: string): Observable<AuthDTO> {
  const endpoint = `ideas/${ideaId}/unbookmark`;
  return this.request('DELETE', endpoint);
}
unpvoteIdea(ideaId: string): Observable<Idea> {
  const endpoint = `ideas/${ideaId}/upvote`;
  return this.request('POST', endpoint);
}
downvoteIdea(ideaId: string): Observable<Idea> {
  const endpoint = `ideas/${ideaId}/downvote`;
  return this.request('DELETE', endpoint);
}
getCommentsByIdea(): Observable<Comment> {
  const endpoint = 'comments';
  return this.request('GET', endpoint);
}
showCommentByid(id: string, page?: string): Observable<Comment> {
 const endpoint = page ? `comments/idea/${id}?page=${page}` : `comments/idea/${id}`;
 return this.request('GET', endpoint);
}
getCommentsByUser(userId: string, page?: string): Observable<Comment> {
const endpoint = page ? `comments/user/${userId}? page=${page}` : `comments/user/${userId}`;
return this.request('GET', endpoint);

}
createComment(ideaId: string, data: Comment): Observable<Comment> {
  const endpoint = `comments/idea/${ideaId}`;
  return this.request('POST', endpoint, data);
}
deleteComment(ideaId: string): Observable<Comment> {
  const endpoint = `comments/${ideaId}`;
  return this.request(endpoint, ideaId);
}

}
