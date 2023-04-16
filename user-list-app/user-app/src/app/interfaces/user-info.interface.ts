export interface ApiData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<object>;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UserList {
  user: User;
}
