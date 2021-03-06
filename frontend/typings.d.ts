export interface Event {
  address: string;
  date: string;
  description: string;
  id: string;
  image: any;
  name: string;
  performers: string;
  slug: string;
  time: string;
  venue: string;
}
export interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}
