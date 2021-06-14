// let let2 = "let変数";

// console.log(let2);

// /**
//  * テンプレート文字列
//  */

//  const name = "あああ";
//  const age= 28;

//  //従来
//  const message1 = "私の名前は" + name + "です";

//  console.log(message1);

//  //テンプレート文字列を用いる

//  const message2 = `私の名前は${name}`;
//  console.log(message2);

//アロー関数

// // 従来の関数
// function func1(str) {
//   return str;
// }

// console.log(func1("aaaa"));

// // 従来の関数
// const func2 = function (str) {
//   return str;
// };

// console.log(func2("aaaa"));

// const func3 = (str) => {
//   return str;
// };

// console.log(func3("aaa"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func4(10,20));

//分割代入

// const myprofile = {
//   name:"じゃけ",
// }

// const message1 = `名前は${myprofile.name}`;

// console.log(message1);

// const {name, age} = myprofile;
// const message2 = `名前は${name}`;

// console.log(message2);

// const myprofile = ['じゃけ', 28];

// const message3 = `名前は${myprofile[0]}`;

// const [name,age] = myprofile;

// const message4 = `名前は${name}`;

// console.log(message4);

// //デフォルト値、引数など

// const sayHello = (name = "ゲスト") =>  console.log(`こんにちは${name}`);

// console.log(sayHello());

/**
 * スプレッド構文
 *
 */
// //配列の展開

// const arr1 = [1, 2];

// // // //配列を展開してくれる
// // // console.log(...arr1);

// // const sumFunc = (num1, num2) => console.log(num1 + num2);

// // sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...num3] = arr2;

// console.log(num3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //こういうコピーのやり方をしないと、コピー元も更新されるようなうごきとなってしまうため良くない
// const arr6 = [...arr4];

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**マップやフィルタ */

// const nameArr = ["田中", "山田"];

// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// //returnになったものに対して配列を作成する
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);

//nameに順番に値を入れていく

// nameArr.map((name) => console.log(name));

//filter ある条件に一致したモノのみを処理する
//returnの後に条件式を記述する

// const numArr = [1,2,3,4,5];

// const nuwNumArr = numArr.filter((num) => {
//   return num % 2 == 1;
// });
// console.log(nuwNumArr);

/**
 * 参考演算子
 */

//ある条件? true: false

// const val1 = 1 > 0 ? 'true': 'false';
// console.log(val1);

/**
 * 論理演算子の本当の意味を知ろう
 */

//  const flag1 = true;

// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります");

//   // || は左側がfalseなら右側を返す

//   // && は左側がtrueなら右側を返す
// }
