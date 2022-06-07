// 150:
// function rannum(){

//     var mynum= Math.random() * 11;
//     console.log(mynum);
// }

// 151:
// function getnum(num){
//     var newnum= Math.random() *num;
//     return newnum;
//     console.log(newnum);
// }

// getnum(30);

// 152:
// function checksame(){
//     var usernum= +prompt("number");
//     var myran = Math.floor(Math.random()*11);
//     if (myran == usernum){
//         console.log("sucsess")
//     }
//     else{
//         console.log("fail");
//     }
// }

// checksame();

// 153:
// function builtarray(){
//     myarray= [];
//     var i=0;
//     while(myarray.length <10){
//         var num= Math.floor(Math.random()*11);
//         myarray.push(num);
//         i++
//     }
//     console.log(myarray);
// }
// builtarray();

// 154:
// function getandcomper(){
//     var usernum= +prompt("num");
//     var rannum = Math.floor(Math.random()*11);
//     if (usernum>rannum){
//         console.log(usernum);
//         return usernum;
//     }
//     else{
//         console.log(rannum);
//         return rannum;
//     }
// }
// getandcomper();

// 155:
// function fivenums(){
//     for(var i=0; i<5; i++){
//         var userschice= +prompt("num");
//     }
//     var mymin= Math.min(userschice);
//     console.log(mymin);
// }
// fivenums();

// 156:
// function getnumfromuser(){
//     var mynum= Math.floor(Math.random()*101);
//     var usernum= +prompt("num");
//     if (usernum %2 == 0){
//         var mymin = Math.min(mynum,usernum);
//         console.log(mymin);
//         return mymin;
//     }
//     else{
//         var mymax= Math.max(mynum,usernum);
//         console.log(mymax);
//         return mymax;

//     }

// }
// getnumfromuser();

// 157:

function buildarray(){
randarray= [];
var myran= Math.floor(Math.random()*365);
console.log(myran);
for(var i=0; i< myran.length; i++ ){
    var rannum= Math.floor(Math.random()*874);
    console.log(rannum);
    randarray.push(rannum);
}
console.log(randarray);
}
buildarray();