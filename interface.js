"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prats = { name: "Prats", salary: 1000000 };
console.log(prats);
//ArrayDestructuring
let [user1, user2, ...restUsers] = [
    { id: 1, name: "Pratham", salary: 1000000 },
    { id: 2, name: "Pratham2", salary: 1000000 },
    { id: 3, name: "Pratham3", salary: 1000000 },
    { id: 4, name: "Pratham4", salary: 1000000 },
];
console.log(user2);
console.log(restUsers);
