import { Booking } from "./booking";

export const Bookings: Booking[] = [
    {
        id: 1,
        name: "Almir Hodzic",
        roomNumber: 100,
        startDate: new Date("2023-03-01"),
        endDate: new Date()
    },
    {
        id: 2,
        name: "Thomass Anders",
        roomNumber: 99,
        startDate: new Date("2023-03-01"),
        endDate: new Date("2023-03-12")
    },
    {
        id: 3,
        name: "Mischa Kowalski",
        roomNumber: 85,
        startDate: new Date("2023-03-01"),
        endDate: new Date("2023-03-06")
    },
    {
        id: 4,
        name: "Sandro Bucher",
        roomNumber: 45,
        startDate: new Date("2023-03-01"),
        endDate: new Date("2023-03-10")
    },
]