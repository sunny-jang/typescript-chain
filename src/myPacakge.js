
// @ts-check
/**
 * *
 * JS DOC은 자바스크립트 내에서 ts 체크를 받고싶을 때 
 * 주석으로 타입을 지정할 수 있도록 해준다.
 * 함수 바로 위에 작성해 주어야 한다.
 * Initialzes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}


/**
 * 
 * @param {number} code 
 * @returns {number}
 */
export function exit(code) {
    return code + 1
}