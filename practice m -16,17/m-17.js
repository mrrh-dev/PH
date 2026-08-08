// 1

/* let classifydatatype = (data) => {
  if (
    typeof data === 'object' ||
    typeof data === 'function' ||
    Array.isArray(data)
  ) {
    return 'non primitive';
  } else return 'primitive';
};
console.log(classifydatatype(() => {})); */

// 2
/* let describeMissingValue = (value) => {
  if (value === 'undefined') return 'field was never set';
  else if (value === 'null') return 'field intentionally left empty';
  else return 'field has value';
};
console.log(describeMissingValue('null')); */

// 3
/* let checkTruthy = (value) => {
  if (
    value === '' ||
    value === false ||
    value === 0 ||
    value === 'null' ||
    value === 'undefined' ||
    value === 'NaN'
  ) {
    return 'falsy';
  } else return 'truthy';
};
console.log(checkTruthy(0)); */

// 4
/* let compareValues = (a, b) => {
  if (a == b && a !== b) return { loose: true, strict: false };
  if (a == b && a === b) return { loose: true, strict: true };
};
console.log(compareValues(7, 7)); */

// 5
/* let predictHoisting = (value) => {
  if (value === 'var') return 'undefined (hoisted, not initialized)';
  else if (value === 'let') return 'ReferenceError (Temporal Dead Zone)';
  else if (value === 'const') return 'ReferenceError (Temporal Dead Zone)';
  else if (typeof value === 'function') return 'function output,hoisted';
  else return 'invalid';
};
console.log(predictHoisting('let')); */

// 6 -> closure
/* let createOrderCounter = () => {
  let count = 0;
  return () => {
    return count++;
  };
};
let restauratorder = createOrderCounter();
console.log(restauratorder());
console.log(restauratorder());
console.log(restauratorder());
let juiceorder = createOrderCounter();
console.log(juiceorder());
console.log(juiceorder()); */

// 7 -> callback
/* let processOrder = (ordertotal, onsuccess, onfailure) => {
  if (typeof onsuccess !== 'function' || typeof onfailure !== 'function')
    return 'invalid';
  if (ordertotal > 0) return onsuccess(ordertotal);
  else if (ordertotal < 0) return onfailure();
};
let onsuccess = (ordertotal) => {
  return `Paid ${ordertotal}`;
};
let onfailure = () => {
  return 'Failed';
};
let result = processOrder(50, onsuccess, onfailure);
console.log(result); */

// 8
/* let mutateOrCopy = (data) => {
  if (typeof data !== 'number' || typeof data !== 'object') return 'invalid';
  if (typeof data === 'number') return `original unaffected: ${data}`;
  if (typeof data === 'object')
    return `original changed : ${(data.value = 100)}`;
};
console.log(mutateOrCopy('10')); */

// 9
/* let trackTicketNumber = (nmbr, type) => {
  if (type === 'pre') return ++nmbr;
  if (type === 'post') {
    let old = nmbr++;
    return `used :${old},Now :${nmbr}`;
  }
};
console.log(trackTicketNumber(5, 'post'));
 */

// 10
/* let filterProducts = (value, action) => {
  if (action === 'names') return value.map((element) => element.name);
  if (action === 'cheap') return value.filter((element) => element.price < 500);
  if (action === 'firstExpensive')
    return value.find((element) => element.price > 500);
};
console.log(
  filterProducts(
    [
      { name: 'Pen', price: 20 },
      { name: 'blender', price: 1500 },
      { name: 'TV', price: 1000 },
    ],
    'firstExpensive',
  ),
);
 */

//11
let cartSummary = (cartitems, previewcount = 2) => {
  if (!Array.isArray(cartitems) || cartitems.length === 0) return 'invalid';
  let sum = cartitems.reduce((acc, element) => {
    return (acc += element.price);
  }, 0);
  let slicearray = cartitems.slice(0, previewcount);
  return { total: sum, preview: slicearray };
};
console.log(cartSummary([{ price: 100 }, { price: 200 }, { price: 300 }]));
