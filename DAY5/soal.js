// contoh soal
function xo(str){
    let countX = 0;
    let countO = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x'){
            countX++
        }
        else{
            countO++
        }}
        if (countX === countO){
            return true
        }
        else{
            return false
        }

    }
  
        


console.log(xo('xoxoxo'));
console.log(xo('xoxoxx'));
console.log(xo('xxooxxo'));
console.log(xo('xxxooo'));