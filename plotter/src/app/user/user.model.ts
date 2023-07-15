export interface UserModel {
  userName:string,
  email:string,
  accountType:string, //personal, group, professional,business
  dob?:Date,
  userId?:string,
}
