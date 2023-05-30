export interface PurchasedHardware{
  id:number,
  name:string,
  quantity:number,
  datePurchase:string,
  provider:string,
  price:number,
  userId?:number
}