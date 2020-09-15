const students = [
    { id: '101', name: 'Arif' },
    { id: '102', name: 'Jasim' },
    { id: '103', name: 'Jasmin' },
    { id: '104', name: 'Salim' },
    { id: '105', name: 'Sufia' },

];

// const newData = [];

// for (var i = 0; i < students.length; i++) {
//     const element = students[i];

//     newData.push(element.name);


// }
// console.log(newData);

// const names = students.map(x => x.name);
// console.log(names);

// const ids = students.map(x => x.id);
// console.log(ids);


const filter = students.filter(x => x.id > 103)
console.log(filter);

