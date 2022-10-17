// 1. Pick

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }


// 2. ReadOnly

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

// interface Todo {
//   title: string
//   description: string
// }

// const todo: MyReadonly<Todo> = {
//   title: "Hey",
//   description: "foobar"
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property


// 3. Tuple to Object

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
}

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


// 4. First of Array

type First<T extends any[]> = T[0];

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3


// 5. Length Of Tuple

type Length<T extends any[]> = T['length'];

// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// type teslaLength = Length<tesla>  // expected 4
// type spaceXLength = Length<spaceX> // expected 5


// 6. Exclude

type MyExclude<T, U> = T extends U ? never : T

// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'


// 7. Awaited

type MyAwaited<T> = T extends Promise<infer U> ? U : never;

type MyAwaited2<T> = T extends Promise<infer U> ? U extends Promise<unknown> ? MyAwaited2<U> : U : never;

// type ExampleType = Promise<string>

// type Result = MyAwaited2<ExampleType> // string

// 8. If

type If<T, A, B> = T extends true ? A : B;

// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'

// 9. Concat

type Concat<T extends any[], U extends any[]> = [...T, ...U];

// type Result = Concat<[1], [2]> // expected to be [1, 2]


// 10. Includes

type Includes<T extends any[], U> = U extends T[number] ? true : false;

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dios'> // expected to be `false`


// 11. Push

type Push<T extends any[], U> = [...T, U];

// type Result = Push<[1, 2], '3'> // [1, 2, '3']


// 12. Unshift

type Unshift<T extends any[], U> = [U, ...T];

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]


// 13. Parameters

type MyParameters<T> = T extends (...args: infer Rest) => any ? [...Rest] : [];

// const foo = (arg1: string, arg2: number): void => {}

// type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]


// 14. Get Return Type

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer U ? U : any;

// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type a = MyReturnType<typeof fn> // should be "1 | 2"

// 15. Omit

type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// const todo: TodoPreview = {
//   completed: false,
// }


// 16. Readonly 2

type MyReadonly2<T, U extends keyof T> = Readonly<Pick<T, U>> & Omit<T, U>;

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//   title: "Hey",
//   description: "foobar",
//   completed: false,
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK


// 17. Deep Readonly

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P];
}

// type X = {
//   x: {
//     a: 1
//     b: 'hi'
//   }
//   y: 'hey'
// }

// type Expected = {
//   readonly x: {
//     readonly a: 1
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }

// type Todo = DeepReadonly<X> // should be same as `Expected`


// 18. tuple to union

type TupleToUnion<T extends any[]> = T[number];

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'


