

// const reversedString = (sentence) => {
//     let words =[];
//     let word = "";
//     let reversedString = "";

//     for (let i = 0; i < sentence.length; i++){
//         const char = sentence[i];
//         if (char === " " || i === sentence.length - 1){
//             if (i === sentence.length-1){
//                 word +=char;
//             }
//             words.push(char);
//             word = '';
//         }else {
//             word+=char;
//             console.log(word);
//         }
//     }
// }

// reversedString("sky so blue");


// ES6

const reverse = (sentence) => {
    const reverseSentence = sentence
    .split(' ')
    .map((word) =>{
        return word.length > 3 ? word.split('').reverse().join(''): word;
    })
    console.log(reverseSentence)
    const result = reverseSentence.join(' ');
    console.log(result);
}


reverse("sky so blue");

//fizz buzz

const fizzBuzz = (first, last) => {
    for (let i = first; i <= last; i++) {
        if( i % 3 === 0 && i%5 === 0 ) { 
            console.log('FizzBuzz')  
        }else if( i% 3 === 0 ) {
            console.log('Fizz');
        }else if(i%5 ===0){
            console.log('Buzz');
        }else {
            console.log(i);
        }
    }
}
fizzBuzz(1,20);
