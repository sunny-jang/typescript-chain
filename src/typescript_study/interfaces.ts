import { TemplateLiteral } from "typescript"

type Nicname = string
type Health = number
type Friends = Array<string>
type Team = "red" | "blue" | "black";
type HealthBar = number;

interface Player2 {
    nickname: string,
    healthBar: number,
    team: Team
}

const nini: Player2 = {
    nickname: "nico",
    healthBar: 10,
    team: "red"
}

const mash: Player2 = {
    nickname: "mash",
    healthBar: 30,
    team: "black"
}

type Food = string;
const potato: Food = "delicious";

