/** 基础类型 */ 
let a: number = 123;
let str: string = 'hello world';
let c: boolean = true;
let d: undefined = undefined;
let e: null = null;
let s: symbol = Symbol('symbol');
let big: bigint = 123n;
function func(): void {
    console.log('hello world');
}

/** 复合类型 */ 
// 数组
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

/** 特殊类型 */
// any
let any: any = 123;
// unknown（用于定义未知类型）
let un: unknown;
un = 123;
un = 'hello';
// never（表示永远不会有值的类型，通常用于函数抛出异常或无限循环）
let never: never = (() => { throw new Error('never type') })();


