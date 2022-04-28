type SuperPrint2 = {
    // 제네릭 두개 활용
    <T, M>(arr: T[], b: M): T
}

type PersonExtra = {
    favFood: string
}

type Player<E> = {
    name: string,
    extraInfo: E
}


const sunny: Player<PersonExtra> = {
    name: 'sunny',
    extraInfo: {
        favFood: 'orange'
    }
}

const lynnPlayer: Player<PersonExtra> = {
    name: 'lynn',
    extraInfo: {
        favFood: 'banana'
    }
}


const superPrint2: SuperPrint2 = (arr, arr2) => arr[0];

function superPrint3<T>(arr: T[]) {
    return a[0]
}

// 에러
// const a2 = superPrint3<boolean>([1, 2, 3, 4]);
const a2 = superPrint3<number>([1, 2, 3, 4]);
const b2 = superPrint2([true, false, true, false], 1);
const c2 = superPrint2(['aaa', 'bbb', 'ccc'], true);