export interface ReservationModel{
    id:string;
    date:string;
    startTime:string;
    endTime:string;
    userId:string;
    userName:string;
    accountGroup:string;
    status:'booked'|'cancelled';
    createdAt:string;
}