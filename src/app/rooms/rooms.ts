import { Observable } from "rxjs";

export interface Room{
  totalRooms:number
  availableRooms: number;
  bookedRooms: number;
}
export interface RoomList{
  roomnumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating:number
}
