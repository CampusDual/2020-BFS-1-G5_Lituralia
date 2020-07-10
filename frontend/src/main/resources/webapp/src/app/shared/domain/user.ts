export interface User {
  user_: string;
  password?: string;
  name?: string;
  surname?: string;
  email: string;
  nif?: string;
  birthdate?: Date;
  avatar?: string;
  userblocked?: Date;
  lastpasswordupdate?: Date;
  firstlogin?: boolean;
  enabled?: boolean;
}
