let practice = (obj) => {
  let{
      job: { title, department },
    } = obj,
  
  return { title, department };
};
let ans = practice({
  name: 'Nadia',
  job: { title: 'PM', department: 'Product' },
});
console.log(ans);