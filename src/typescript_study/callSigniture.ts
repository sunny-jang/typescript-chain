// 타입지정 후 
type Add = (a: number, b: number) => number;

// 힘수 선언 시 타입 지정 하지않고 사용 가능
const add: Add = (a, b) => a + b;