//string program in typescript         25/2/2025
////🟢1🟢 Write a function to reverse a string in TypeScript.
// let revstr=(str:string):string=>{
//     return str.split('').reverse().join('')
// }
// console.log(revstr("ganesh"));
//🟢🟢Check if a string is a palindrome.
// let str:string="nitin"
// let result:string=""
// for (let i=str.length-1;i>=0;i--){
//     result+=str[i]
// }
// console.log(result);
// if (str===result){
//     console.log("string is palindrom");
// }
// else{
//     console.log("string is not palindrom");
// }
//🟢🟢Count the number of vowels in a string
// let str:string="aditya"
// let count:number=0;
// for(let i=0;i<=str.length-1;i++){
//     let char=str[i].toLocaleLowerCase()
//     if(char==="a" ||char==="e"||char==="i" ||char==="o"||char==="u"){
//         count++
//     }
// }
// console.log(count);
/////////////////////////////////////////////second method using some methods
// let str:string="aditya"
// let vovels:string="aeiouAEIOU"
// let result:number=str.split('').filter(char=>vovels.includes(char)).length
// console.log(result);
//🟢🟢Convert a string to title case (capitalize the first letter of each word).
// let str:string="hello hii my name is aditya todmal"
// let result:string=str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
// console.log(result);
// Convert a string to title case (capitalize the first letter of each word).
// let stra:string="hello hii my name is aditya todmal"
// let result:string=stra.split(' ').map(word=> word.slice(0,1).toUpperCase()+word.slice(1)).join(" ")
// console.log(result);
//🟢🟢Remove all spaces from a string
// function removespace(str:string):string{
//     return str.replaceAll(" ","")
// }
// console.log(removespace("aditya is clever boy"));
//🟢🟢Find the first non-repeating character in a string
// function findNonRepeating(str:string){
//     let result={}
//     str.split("").reduce((acc,curr)=>{result[curr]?result[curr]++:result[curr]=1; return acc },{})
//     console.log(result);    
//     for(let i in result){
//         if(result[i]===1){
//             console.log("First non-repeating character:", i);
//             return;
//         }
//     }
// }
// findNonRepeating("aditya");
//🟢🟢Replace all occurrences of a given character in a string
// function replaceAllChar(str:string,target:string,replace:string):string{
//     return str.replaceAll(target,replace)
// }
// console.log(replaceAllChar("india is my country all indians are my brothers and sisters","s","*"));
//🟢🟢Count the occurrences of each character in a string
// function countOcc(str:string):void{
//     let result={}
//      str.split("").reduce((acc,curr)=>{result[curr]?result[curr]++:result[curr]=1;return acc},{} )
//      console.log(result);
// }
// countOcc("india is my country all indians are my brothers and sisters")
///////////////////////////////////////using forEach loop
// function countOcc(str:string):void{
//     let result={}
//     str.split("").forEach(char=>result[char]?result[char]++:result[char]=1)
//     console.log(result);
// }
// countOcc("hello aditya")
//🟢🟢Find the longest word in a given string
// function findLongestWord(str:string):string{
//     return str.split(" ").reduce((acc,curr)=>acc.length>curr.length?acc:curr)
// }
// console.log(findLongestWord("india is my country and all indians are my brothers and sisters"));
//🟢🟢Check if two strings are anagrams
// function checkAnagram(str1:string,str2:string){
//     if( str1.length !==str2.length) return false;
//     return str1.split("").sort().join("")===str2.split("").sort().join("")
// }
// console.log(checkAnagram("aditya","adtiya"));
///🟢🟢Convert a string to camelCase
// function tocamelCase(str:string){
//     let joinall= str.toLowerCase().split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join("")
//     let result=joinall.charAt(0).toLowerCase()+joinall.slice(1)
//     console.log(result);
// }
// tocamelCase("hello aditya how are you")
///🟢🟢Convert a string to snake_case
// function toSnakeCase(str: string): string {
//     return str
//         .toLowerCase() // Convert the string to lowercase
//         .replace(/[\s-]+/g, "_") // Replace spaces and hyphens with underscores
//         .replace(/__+/g, "_"); // Replace multiple underscores with a single one
// }
// console.log(toSnakeCase("Hello Aditya How Are You"));   // "hello_aditya_how_are_you"
//🟢🟢Truncate a string if it exceeds a given length and add "..." at the end
// function truncate(str:string,num:number):string{
//     if(str.length>num){
//         return str.slice(0,num)+"..."
//     }
//     return str
// }
// console.log(truncate("india is my country and all indians are my brothers and sisters",16))
// //🟢🟢Count the number of words in a string
// function countWord(str:string):number{
//     return str.trim().split(" ").join("").length
// }
// console.log(countWord("hello aditya"));
//🟢🟢Remove all duplicate characters from a string
// function removedupli(str:string){
//     let result= new Set(str)
//     return result
// }
// console.log(removedupli("sadfed"));
//🟢🟢
// function emailCheck(str:string):boolean{
//     return str.split("@")[1]==="gmail.com"
// }
// console.log(emailCheck("aditya@gmail.com"));
