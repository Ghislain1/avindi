export interface Tontinard {
  speechword: string,
  username: string,
  password: string,
  confirmPassword: string,
  email: string,
  confirmEmail: string,
  existAlready: boolean,
}

export interface TontinardInfo {
  id: string,
  name: string,
  entryDate: Date,
  avatar: string,
  sex: string,
  isAdmin: boolean,
  tontinard: Tontinard,
}
