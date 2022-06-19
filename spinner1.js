// let word = "|/-\|/-\||/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\       ";
// let time = 1000;
// for (const char of word) {
//   setTimeout(() => {
//     // console.log("\r");
//     // console.log(char);
//   }, time);
//   time += 1000;
// };

// let words="abcdefghijklmnopqrstuvwxyz";
// let times =1000;
// for(const char of words){
//     setTimeout(()=>{
//         console.log(char);

//     },times);
//     times+=300;
// };

const readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const questions=["What is your name? Nicknames are acceptable:"];
r1.question('What is your name?',(answer)=>{
    console.log('thanks :{answer}');
})