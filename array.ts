// 🟢🟢 Create an array of numbers and print each element using a loop.

// let arr:number[]=[1,2,3,4,5,6]

// let result=arr.map(num=>num)
// console.log(result);


// 🟢🟢 Find the sum of all elements in an array of numbers.
// let arr:number[]=[3,4,2,7,2,8]
// let sum=arr.reduce((acc,curr)=>acc+=curr,0)
// console.log(sum);



//🟢🟢 Reverse an array without using .reverse().
// let arr:number[]=[3,4,7,2,8,2,9,4]
// let revarr:number[]=[]

// for(let i=arr.length-1;i>=0;i--){
//     let num=arr[i]
//     revarr.push(num)
    
// }

// console.log(revarr);

//////////////////////////////////////////////////////////using method-reduce
// let revarr=arr.reduce((acc,curr)=>[curr,...acc],[])
// console.log(revarr);


// 🟢🟢 Find the largest and smallest number in an array.

// let  arr:number[]=[45,35,43,21,24,35,46]

// let largest=arr.reduce((acc,curr)=>acc>curr ?acc :curr)
// let smallest=arr.reduce((acc,curr)=>acc<curr ?acc :curr)

// console.log(largest);
// console.log(smallest);

// 🟢🟢 Check if a given element exists in an array.

    // let arr:number[]=[1,3,5,7,8,2,6,4,6,2]
    // let elem=10
    // let result=arr.includes(elem)

    // console.log(result);


// 🟢🟢Remove duplicate elements from an array.

// let arr: number[] = [1, 3, 5, 7, 3, 8, 2, 3, 1, 6, 4, 6, 2];

// let result = arr.filter((item,index)=>arr.indexOf(item)===index)
// console.log(result);

// 🟢🟢 Merge two arrays and remove duplicates.

// let arr1:number[]=[4,5,6,7,3]
// let arr2:number[]=[6,5,8,9]

// let arr3=[...new Set([...arr1,...arr2])]

// console.log(arr3);

//🟢🟢 Find the second largest number in an array.

// let arr:number[]=[4,5,6,7,3]

// let secondlarge=arr.sort((a,b)=>b-a)[2]
// console.log(secondlarge);



//🟢🟢Count the occurrences of each element in an array.



// let arr:number[]=[1, 3, 5, 7, 3, 8, 2, 3, 1, 6, 4, 6, 2];
// let result:{[key:number]:number}={}

// for(let i =0;i<=arr.length-1;i++){
//     let num=arr[i]


//     if(result[num]){
//         result[num]++

//     }
//     else{
//         result[num]=1
//     }
// }
// console.log(result);

    

/////////////////////////////////////////////same program using methods

// let arr:number[]=[1, 3, 5, 7, 3, 8, 2, 3, 1, 6, 4, 6, 2];
// let result={}

// arr.forEach(num=>result[num]= (result[num] ||0) +1)

// console.log(result);



//🟢🟢Find the intersection of two arrays.

// const array1:number[] = [1, 2, 3, 4, 5];
// const array2:Number[] = [4, 5, 6, 7, 8];

// let intersection=array1.filter(number=>array2.includes(number))
// console.log(intersection);


//🟢🟢Check if an array is a palindrome.

// let arr:number[]=[1,2,3,2,1]

// let arr2:number[]=[]

// for(let i=arr.length-1;i>=0;i--){
//     let num=arr[i]
//     arr2.push(num)
// }

// if(JSON.stringify(arr)===JSON.stringify(arr2)){
//     console.log("arr is palindrom");
    
// }
// else{
//     console.log("those array is not palindrom");
    
// }


//🟢🟢 Find the longest string in an array.

// let words: string[] = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "carrot"];

// let result=words.reduce((acc,curr)=>(acc.length>curr.length ?acc : curr),"")
// console.log(result);


//🟢🟢Convert all strings in an array to uppercase.

// let words: string[] = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "carrot"];

// let result=words.map(element=>element.toUpperCase())
// console.log(result);

//🟢🟢 Check if a given string exists in an array.

// let words: string[] = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "carrot"];
// let str:string="cherry"

// let result=words.includes(str)
// console.log(result);



//🟢🟢Count the number of true values in a boolean array

// let boolArr: boolean[] = [true, false, true, true, false, true, false];

// let result=boolArr.filter(val=>val===true)
// let count:number=result.length
// console.log(count);


//🟢🟢 Toggle all boolean values in an array (convert true → false and vice versa)
// 
// let boolArr: boolean[] = [true, false, true, true, false, false, true];
// let result=boolArr.map(value=>!value)

// console.log(result);


//🟢🟢Reverse an array of strings without using .reverse().

// let arrstr: string[] = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "carrot"];
// let revarr:string[]=[]

// for(let i=arrstr.length-1;i>=0;i--){
//     let char=arrstr[i]
//     revarr.push(char)
// }

// console.log(revarr);


//🟢🟢Join all elements of a string array into a single string with a separator ("-").

// let words: string[] = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "carrot"];

// let result=words.join("-")
// console.log(result);


// 🟢🟢Find and replace a specific string in an array

// let words: string[] = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "carrot"];

// let result=words.map(str=>str==="cherry" ? "papaya" :str)
// console.log(result);


// 🟢🟢Check if all elements in a boolean array are true.

// let boolArr: boolean[] = [true, false, true, true, false, false, true];

// let result=boolArr.every(ele=> ele=== true)
// console.log(result);


//🟢🟢 Check if a boolean array contains at least one true value.

// let boolArr: boolean[] = [true, false, true, true, false, false, true];
// let result=boolArr.some(val=>val===true)
// console.log(result);



    //🟢🟢 Find the most frequently occurring string in an array

    // let words: string[] = ["apple", "banana","banana","banana","banana","banana" ,"apricot", "apple","blueberry","apple", "cherry", "avocado", "carrot"];
    // let result={}

    // for(let i=0;i<=words.length-1;i++){
    //     let word=words[i]

    //     if(result[word]){
    //         result[word]++
    //     }
    //     else{
    //         result[word]=1
    //     }
    // }
    // let freq=Object.entries(result).reduce((acc,curr)=>{return acc[1]>curr[1] ? acc :curr},["",0])


    // console.log(freq);


//🟢🟢Remove all empty strings from an array.

// let arr: string[] = ["apple", "", "banana", "cherry", "", "grape", ""];

// let filterarr=arr.filter(word=>word!=="")
// console.log(filterarr);



