import { Product } from "./product.model";

export class PickupOrder{
    id:any;
    products:Product[] = [];
    email:string = "";
    address:string = "";
    comment:string = "";
    price:number = 0;
    status:string = "";
    emailDeliverer:string = "";
}