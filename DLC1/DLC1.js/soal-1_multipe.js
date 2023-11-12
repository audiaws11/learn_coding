
const countData = (arr, searchValue) => {
    // tulis code di sini
  
    // inisial vaariable 
    let objJumlahData = {};
  
    // proses
    for (let i = 0; i < arr.length; i++) {
        
        if (searchValue.includes(arr[i])) {

            if (objJumlahData[arr[i]] === undefined){
                objJumlahData[arr[i]] = 1;
            }
            else{
                objJumlahData[arr[i]]++;
            }
        
    }
    // return variable
    return objJumlahData;
  }
};
  
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  console.log(countData(data_array, [5,3,1]));  // output: object { 5: 1 }  