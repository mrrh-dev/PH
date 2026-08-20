function getTicketPrice(age) {
    // write your code here
    if (age < 5)
        return 0;
    else if (age >= 5 && age <= 12)
        return 100;
    else if (age >= 13 && age <= 59)
        return 200;
    else
        return 120;
}
console.log(getTicketPrice(3));
console.log(getTicketPrice(10));
console.log(getTicketPrice(25));
console.log(getTicketPrice(65));
export {};
//# sourceMappingURL=problem-1.js.map