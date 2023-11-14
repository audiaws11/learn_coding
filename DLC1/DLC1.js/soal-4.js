/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

students = [
  {name:"Andi",grade:7.5},
  {name:"Ardi",grade:9},
  {name:"Ahmad",grade:7},
  {name:"Anang",grade:6},
  {name:"Amir",grade:8}
];

/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

const filterGrade = (dataStudent) => {
  let filterGrade7 = [];
  for (let i = 0; i < dataStudent.length; i++) {
    if (dataStudent[i].grade > 7) {
      filterGrade7.push(dataStudent[i]);
    }
  }
  return filterGrade7;
  // sesuaikan
  
};

let filteredStudents = filterGrade(students);
console.log(filteredStudents);