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

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string