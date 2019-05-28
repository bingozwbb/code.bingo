const words = (str, pattern= /[^a-zA-Z-]+/) => str.split(pattern);
console.log(words('I love javascript!!'));
// js拿出函数中的单词