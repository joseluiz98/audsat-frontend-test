import { Comment } from './comment';

export class Post {
  public userId: number = 0;
  public id: number = 0;
  public title: string = '';
  public body: string = '';
  public comments: Comment[] = [];

  // Web-only variables
  public loading: boolean = false;
}
