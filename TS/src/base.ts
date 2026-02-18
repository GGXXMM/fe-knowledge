/** 1.基础类型 */ 
// 原始类型（7种）
let a: number = 123; // number 类型
let str: string = 'hello world'; // string 类型
let str1: 'a' | 'b' | 'c' = 'a'; // string 类型
let c: boolean = true; // boolean 类型
let d: undefined = undefined; // undefined 类型
let e: null = null; // null 类型
let s: symbol = Symbol('symbol'); // symbol 类型
let big: bigint = 123n; // bigint 类型

function func(): void {
    console.log('hello world');
}

// 数组类型
let arr: number[] = [1, 2, 3];
let arr1: Array<number> = [1, 2, 3];
// 元组
let tuple: [number, string] = [1, 'hello'];
// 枚举（数字枚举、字符串枚举、异构枚举、常量枚举等）
// 1. 数字枚举（Red = 0, Green = 1, Blue = 2）
enum Color {
    Red,
    Green,
    Blue
}
// 2. 字符串枚举
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
// 3. 异构枚举
enum BooleanEnum {
    No = 0,
    Yes = 'YES'
}
// 4. 常量枚举
const enum Gender {
    Male = 'male',
    Female = 'female'
}

/** 任意类型 */
// any
let any: any = 123;
// unknown（用于定义未知类型）
let un: unknown;
un = 123;
un = 'hello';
// never（表示永远不会有值的类型，通常用于函数抛出异常或无限循环）
let never: never = (() => { throw new Error('never type') })();


/** 2.复合类型 */
// 联合类型（多种类型符合其中 1 种）
let union: number | string = 123;
union = 'hello';

// 交叉类型（同时具备多个类型的所有属性）
type Person = { name: string, age: number };
type Info = { address: string };
type FullPerson = Person & Info;
let person: FullPerson = { name: 'Tom', age: 20, address: 'China' };

