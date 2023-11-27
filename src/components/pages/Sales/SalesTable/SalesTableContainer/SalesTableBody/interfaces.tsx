import { User } from "../../../../Users/UsersTable/UserTableContainer/UserTableBody/interfaces";

export interface Sale {
  saleOrderId:number,
  state:string,
  total:number,
 user: User,
  productName:string,
  created:string,
 // state: string,
}