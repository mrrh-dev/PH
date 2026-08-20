function canEdit(role) {
    // write your code here
    if (role === 'admin' || role === 'editor')
        return true;
    else
        return false;
}
console.log(canEdit('admin'));
console.log(canEdit('editor'));
console.log(canEdit('viewer'));
export {};
//# sourceMappingURL=problem-6.js.map