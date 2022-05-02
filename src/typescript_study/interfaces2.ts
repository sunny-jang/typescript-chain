type PlayerA = {
    name: string
}

// type은 중복될 수 없다.
// type PlayerA = {
//     health: number
// }

type PlayerAA = PlayerA & {
    lastName: string
}

const playerA: PlayerA = {
    name: "nico"
}
interface PlayerB {
    name: string
}

// 인터페이스에서는 한번 더 선언하면 property가 기존거에 추가됨
interface PlayerB {
    health: number
}

interface PlayerBB extends PlayerB {
    lastName: string
}

const playerB: PlayerBB = {
    name: "",
    lastName: "",
    health: 12
}


//////////////////////////////////
// 타입과 interface 둘다 implements를 할 수 있다.
// 결국 모양을 잡고자하는 목적은 같다.
// 오브젝트나 클래스의 모양을 잡고싶다면 interface,
// 그외 것들을 type을 쓴다.

type PlayerAAA = {
    firstName: string
}

interface PlayerBBB {
    firstName: string
}

class UserA implements PlayerAAA {
    constructor(
        public firstName: string
    ) { }
}