abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickname: string
    ) { }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    abstract getNickname(): void
}

class Player1 extends User {
    getNickname(): void {
        console.log(this.nickname)
    }

}

const nico = new Player1("nico", "las", "니꼬");

nico.getFullName();