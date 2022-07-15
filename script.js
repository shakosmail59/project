 "use strict";

 // /*

 // console.log(2);

 // const a = 
 // {
 //     ab:50
 // };

 // a.ab = 10;

 // console.log(a);


 // var name  ="Ivan";

 // name = "alex";
 // console.log(name);


 //  g = 120;

 // console.log(g);

 // const vehicleBodyWidth = 4000,
 //       vehicleBodyLength = 50500;

 // console.log("Area of Car :  " + vehicleBodyWidth + ', Length : '+vehicleBodyLength);

 // // ["vruru" , "ecraasd","asdaad"].map(item => )

 // // Request

 // // data
 // // response

 // // snake_case
 // // UPPER_SNAKE_CASE
 // // Kebab-case
 // // PascalCase

 // //const COLOR_RED = "#F00";

 // */

 // // Javascript Types
 // /*

 // console.log(-4 / 0);

 // console.log("string" * 9 ); // NaN - NOt a Number

 // const persone = `Alex asd  asd asdsdsd dsdsd   sd sds   sd s  sd `;

 // const bool =  true; // false

 // const nul  = null;
 // console.log(nul);

 // let und ;

 // console.log(und);


 // const obj = 
 // {
 //     name: "John",
 //     age: 15,
 //     IsMarried : false
 // };


 // console.log(obj["name"]);
 // console.log(obj.age);
 // console.log(obj.IsMarried);


 // const arr = ["plum" ," orange" , {} , 6];

 // console.log(arr[1]);


 // */


 // // Create Objects and Array
 // /*
 // //const arr = [1,2,3];
 // const arr = ["a","b","c"];

 // const arrobj = 
 // {
 //     a : "a",
 //     1 : "b",
 //     "2" : "c" 
 // };



 // console.log(arr[1]);
 // console.log(arrobj.a);
 // console.log(arrobj[1]);
 // console.log(arrobj["2"]);

 // // const obj = 
 // // {
 // //     a: 1,
 // //     b: 2
 // // };

 // const obj = 
 // {
 //     "Anna" : 500,
 //     "Alice" : 800
 // };

 // */


 // //let incr = 10;
 // //let decr = 10;


 // // incr++ // postfix
 // // decr++ // postfix

 // //++incr; // prefix
 // //--decr; // prefix


 // // console.log(incr++);
 // // console.log(decr--);


 // // console.log(++incr);
 // // console.log(--decr);



 // //    // &&
 // //    // ||

 // // const isChecked = true,
 // //        isClose = true;

 // //        console.log(isChecked && isClose);
 // //        console.log(isChecked || !isClose);



 // // დავალება ნ1 ამოხსნა

 // /*   Задание на урок:

 // 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
 // 'Сколько фильмов вы уже посмотрели?'

 // 2) Создать объект personalMovieDB и в него поместить такие свойства:
 //     - count - сюда передается ответ на первый вопрос
 //     - movies - в это свойство поместить пустой объект
 //     - actors - тоже поместить пустой объект
 //     - genres - сюда поместить пустой массив
 //     - privat - в это свойство поместить boolean(логическое) значение false

 // 3) Задайте пользователю по два раза вопросы:
 //     - 'Один из последних просмотренных фильмов?'
 //     - 'На сколько оцените его?'
 // Ответы стоит поместить в отдельные переменные
 // Записать ответы в объект movies в формате: 
 //     movies: {
 //         'logan': '8.1'
 //     }

 // Проверить, чтобы все работало без ошибок в консоли 



 // 'use strict';

 // const numberOfFilms  = +prompt("how many films you watched ???", "");

 // const personalMovieDb = 
 // {
 //     count: numberOfFilms,
 //     movies: 
 //     {

 //     },
 //     ganres: [],
 //     privat: false

 // };

 // const a = prompt('Один из последних просмотренных фильмов?' ,''),
 //       b = prompt('На сколько оцените его?', ''),
 //       c = prompt('Один из последних просмотренных фильмов?' , ''),
 //       d = prompt('На сколько оцените его?', '');


 // //personalMovieDb.movies[a] = b;
 // //personalMovieDb.movies[c] = d;
 // //personalMovieDb.movies.a = b;
 // //personalMovieDb.movies.c = d;


 // console.log(personalMovieDb);
 // */

 // // if else 


 // // if (4 == 9) {
 // //     console.log("OK!");
 // // } else {
 // //     console.log("Error!!!");
 // // }

 // // const num = 50;

 // // if (num < 49) 
 // // {
 // //     console.log("error");
 // // }
 // // else if(num > 100)
 // // {
 // //     console.log("bevria");
 // // }
 // // else
 // // {
 // //     console.log("ok");
 // // }

 // // // ternary operator

 // // (num === 50 ) ? console.log("ok!") : console.log("Error!");


 // // const num2 = 50;

 // // switch (num2) {
 // //     case 49:
 // //         console.log("Incorrenct");
 // //         break;
 // //     case 50:
 // //         console.log("correct 50");
 // //         break;
 // //         case 100:
 // //             console.log("Incorrect");
 // //             breakl   
 // //     default:
 // // console.log("sxva dros");

 // //         break;
 // // }

 // // Operators

 // /*

 // // const hambuger = 3;
 // // const fries = 1;
 // // const cola = 0;

 // // if (hambuger === 3  && cola === 1 && fries) {
 // //     console.log("All eaten");
 // // } else {
 // //     console.log("We go");
 // // }


 // // console.log(0 && "33434");
 // // console.log( "33434" && null);
 // // console.log(30 && "hello" && 1.5 && undefined);



 // // const hambuger = 3;
 // // const fries = 3;
 // // const cola = 0;
 // // const nuggets = 2;


 // // if (hambuger === 3 && cola === 2 || fries === 3 && nuggets) 
 // // {
 // //     console.log("yvela kmayofilebi");
 // // } 

 // // else 
 // // {
 // //     console.log("We go");
 // // }

 // // console.log(null || 0 || null);




 // // let johnReport , alexReport , samReport , mariaReport = "done";



 // */

 // /*
 // let num = 50;

 // while (num < 55) {
 //     console.log(num);
 //     num++;
 // }


 // do
 // {
 //  console.log(num);
 //  num++;
 // }while(num < 55);


 // for (let i = 1; i < 0; i++) 
 // {
 //     console.log(num);
 //     num++;    
 // }

 // console.log( NaN || 2 || undefined );
 // console.log( !1 && 2 || !3 );
 // console.log( 25 || null && !3 );
 // console.log( NaN || null || !3 || undefined || 5);

 // console.log( NaN || null && !3 && undefined || 5);

 // console.log( 5 === 5 && 3 > 1 || 5);



 // let hamburger;
 // const fries = NaN;
 // const cola = 0;
 // const nuggets = 2;

 // if (hamburger || cola || fries === 3 || nuggets) {
 //    console.log('Done!');
 // }
 // */


 // // ციკლი ციკლში 

 // for (let i = 0; i < 3; i++) {
 //     console.log("\n" + i);

 //     for (let j = 0; j < 3; j++) {
 //         console.log(j);
 //     }

 // }

 // /*

 //     *
 //     **
 //     ***
 //     ****
 //     *****
 //     ******

 // */


 // let result3 = "";
 // const length = 7;

 // for (let i = 0; i < length; i++) {
 //     for (let j = 0; j < i; j++) {
 //         result3 += "*";
 //     }

 //     result3 += "\n";
 // }

 // console.log(result3);



 // // let result2 = "*";
 // // result2 += "\n";
 // // result2 += "**";

 // // console.log(result2);


 // // let star = "";
 // // let length = 7;

 // // for (let i = 1; i < length; i++) {
 // //     for (let j = 0; j < i; j++) {
 // //         star += "*";
 // //     }

 // //     star += "\n";
 // // }

 // // console.log(star);



 // // first: for (let i = 0; i < 3; i++) {
 // //     console.log(`first Level ${i}`);

 // //     for (let j = 0; j < 3; j++) {
 // //         console.log(`Second Level ${j}`);

 // //         for (let k = 0; k < 3; k++) {
 // //             if (k === 2) break first;

 // //             console.log(`Third Level ${k}`);
 // //         }
 // //     }

 // // }






 // // // Место для первой задачи
 // // function firstTask() {
 // //     // Пишем решение вот тут

 // //     for (let i = 5; i < 11; i++) {

 // //         console.log(i);
 // //     }

 // // }

 // // //firstTask();

 // // // Место для второй задачи
 // // function secondTask() {
 // //     // Пишем решение вот тут
 // //     for (let i = 20; i > 10; i--) {
 // //         if (i === 13) {
 // //             break;
 // //         }

 // //         console.log(i);
 // //     }

 // // }
 // // secondTask();

 // // // Место для третьей задачи
 // // function thirdTask() {
 // //     // Пишем решение вот тут

 // //     for (let i = 2; i <= 10; i++) {

 // //         if (i % 2 === 0) {
 // //             console.log(i);
 // //         }
 // //     }

 // // }

 // // thirdTask();
 // // // Место для четвертой задачи

 // // // Цикл, который нужно переписать:

 // // // for (let i = 2; i <= 16; i++) {
 // // //     if (i % 2 === 0) {
 // // //         continue;
 // // //     } else {
 // // //         console.log(i);
 // // //     }
 // // // }

 // // function fourthTask() {
 // //     // Пишем решение вот тут

 // //     let i = 2;

 // //     while (i <= 16) {

 // //         if (i % 2 === 0) 
 // //         {
 // //             i++;
 // //             continue;

 // //         } else {
 // //             console.log(i);
 // //         }

 // //         i++;
 // //     }


 // //     // for (let i = 2; i <= 16; i++) {
 // //     //     if (i % 2 === 0) {
 // //     //         continue;
 // //     //     } else {
 // //     //         console.log(i);
 // //     //     }
 // //     // }
 // // }

 // // fourthTask();

 // // // Место для пятой задачи

 // // function fifthTask() {
 // //     const arrayOfNumbers = [];


 // //     for (let i = 5; i < 11; i++) 
 // //     {
 // //         arrayOfNumbers.push(i); 

 // //     }

 // //     // Не трогаем
 // //     return arrayOfNumbers;
 // // }

 // // let b = fifthTask();
 // // console.log(b);


 // function firstTask() {
 //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
 //     const arr = [3, 5, 8, 16, 20, 23, 50];
 //     const result = [];

 //     // Пишем решение вот тут

 //     for (let i = 0; i < arr.length; i++) {
 //         result.push(arr[i]);
 //     }

 //     // Не трогаем
 //     return result;
 // }

 // let res = firstTask();
 // console.log(res);



 // function secondTask() {
 //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
 //     const data = [5, 10, 'Shopping', 20, 'Homework'];

 //     // Пишем решение вот тут

 //     for (let i = 0; i < data.length; i++) {
 //         if (typeof (data[i]) === typeof (10)) {
 //             data[i] = data[i] * 2;
 //             // console.log(data[i]);
 //         } else {
 //             data[i] = `${data[i]} - done`;
 //         }

 //     }

 //     // Не трогаем
 //     return data;
 // }

 // let numString = secondTask();
 // console.log(numString);


 // function thirdTask() {
 //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
 //     const data = [5, 10, 'Shopping', 20, 'Homework'];
 //     const result = [];

 //     // Пишем решение вот тут
 //     for (let i = data.length - 1; i >= 0; i--) {
 //         result.push(data[i]);
 //     }

 //     console.log(result);

 //     // Не трогаем
 //     return result;
 // }

 // let jok = thirdTask();
 // console.log(jok);


 // //const lines = 5;
 // //let result = '';
 // // Проверяется именно переменная result, формируйте строку в ней

 // const arr = [1, 2, 10, "gog", "bob"];

 // for (let i = 0; i < arr.length; i++) {
 //     if (i == Math.round((arr.length / 2)) - 1) {
 //         console.log(arr[i]);
 //     }

 // }

 // console.log(arr.length / 2);


 // //    *
 //   ***
 //  *****
 // *******

 // const lines = 5;
 // let result ="";


 // for (let i = 0; i <= lines; i++) 
 // {
 //     for (let j = 0; j < lines - i; j++) 
 //     {
 //         result +=" ";
 //     }

 //     for (let j = 0; j < i * 2 + 1; j++) {

 //         result+="*";
 //     }
 // result+="\n";
 // }

 // console.log(result);


 // Код возьмите из предыдущего домашнего задания

 const numberOfFilms = +prompt("how many films you watched ???", "");

 const personalMovieDb = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     ganres: [],
     privat: false

 };

 // const a = prompt('Один из последних просмотренных фильмов?' ,''),
 //       b = prompt('На сколько оцените его?', ''),
 //       c = prompt('Один из последних просмотренных фильмов?' , ''),
 //       d = prompt('На сколько оцените его?', '');


 //personalMovieDb.movies[a] = b;
 //personalMovieDb.movies[c] = d;
 //personalMovieDb.movies.a = b;
 //personalMovieDb.movies.c = d;


 //console.log(personalMovieDb);



 for (let i = 0; i < 2; i++) {
     const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');


     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         personalMovieDb.movies[a] = b;
         console.log("done");
     } else {
         console.log("error");
         i--;
     }

 }


 if (personalMovieDb.count < 10) {
     console.log("Просмотрено довольно мало фильмов");
 } else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) {
     console.log("Вы классический зритель");
 } else if (personalMovieDb.count >= 30) {
     console.log("Вы киноман");
 } else {
     console.log("Произошла ошибка");
 }

 console.log(personalMovieDb);