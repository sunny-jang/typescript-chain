type Words = {
    // 문자열 스타일이라면 무제한으로 key를 만들 수 있음.
    // 프로퍼티 이름은 모르지만 타입을 알 때 씀
    [key: string]: string
}

class Dict {
    private words: Words
    constructor(
    ) {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }

    def(term: string) {
        return this.words[term];
    }
}


class Word {
    constructor(
        public readonly term: string,
        public readonly def: string,
    ) { }
}

const dict = new Dict();
const kimchi = new Word("kimchi", "korean food");

// readonly를 붙혀서 수정할 수 없도록 함
// kimchi.term = 'aaa';
dict.add(kimchi);
dict.def("kimchi")
