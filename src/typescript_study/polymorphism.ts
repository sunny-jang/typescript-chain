type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true, false]);
const c = superPrint(['aaa', 'bbb', 'ccc']);
const d = superPrint([1, false, 'ccc']);