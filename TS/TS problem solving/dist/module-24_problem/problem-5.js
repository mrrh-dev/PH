function getStudentResult(student) {
    // write your code here
    if (student.marks.length === 0)
        return {
            name: student.name,
            avarage: 0,
            result: 'Failed',
        };
    let totalmarks = student.marks.reduce((acc, item) => (acc += item));
    let avarage = totalmarks / student.marks.length;
    let result = '';
    if (avarage >= 40)
        result = 'Passed';
    else
        result = 'Failed';
    return {
        name: student.name,
        avarage: avarage,
        result: result,
    };
}
console.log(getStudentResult({
    name: 'Nabil',
    marks: [50, 50, 88, 99],
}));
console.log(getStudentResult({
    name: 'Nabil',
    marks: [],
}));
export {};
//# sourceMappingURL=problem-5.js.map