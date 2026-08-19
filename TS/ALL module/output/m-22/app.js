let iphone = {
    name: 'iphone',
    type: 'smartphone',
    price: 10000,
    color: 'black',
    storage: '128GB',
};
let samsung = {
    name: 'samsung',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
};
let realme = {
    name: 'realme',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
};
let products = [
    {
        name: 'realme',
        type: 'smartphone',
        price: 20000,
        color: 'black',
        storage: '128GB',
    },
    {
        name: 'samsung',
        type: 'smartphone',
        price: 20000,
        color: 'black',
        storage: '128GB',
    },
];
function phone(config) {
    console.log(config);
}
phone({
    name: 'realme',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
});
let hasan = {
    name: 'hasan',
    id: 101,
    department: 'cse',
    salary: 7000,
};
let nayeem = {
    name: 'nayeem',
    id: 101,
    department: 'cse',
    salary: 7000,
};
let rejwan = {
    name: 'rejwan',
    id: 101,
    department: 'cse',
    salary: 7000,
};
let team = [
    hasan,
    rejwan,
    {
        name: 'masuma',
        id: 101,
        department: 'cse',
    },
    {
        name: 'khadija',
        id: 101,
        department: 'cse',
    },
];
function printemployee(em1, em2) {
    console.log(em1);
    console.log(em2);
}
printemployee(hasan, nayeem);
printemployee({ name: 'humayra', id: 201, department: 'ece' }, { name: 'husama', id: 301, department: 'ece' });
let schoolteacher = {
    name: 'rejwan',
    id: 101,
};
let tutor = {
    name: 'hasan',
    id: 333,
    age: 33,
};
console.log(schoolteacher, tutor);
let user = {
    name: 'kawser',
    age: 20,
};
console.log(user);
let transactionresponse = {
    data: 'successful',
    status: true,
};
let apiresponse = {
    data: {
        id: 1,
        name: 'haq',
    },
    status: true,
};
export {};
