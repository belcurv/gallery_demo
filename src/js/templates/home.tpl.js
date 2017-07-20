/* jshint esversion:6 */

/* utility method for easy templating of repeating html elements
 *
 * @params  [array]  literalsArr   [array of all the literal secti
 * @params  [array]  ...cooked     [rest param: all the proccessed expressions]
 * @returns [string]               [the processed string]
*/
const html = (literalsArr, ...cooked) => {
    let result = '';
    
    cooked.forEach( (cook, indx) => {
        let lit = literalsArr[indx];
        if (Array.isArray(cook)) {
            cook = cook.join('');
        }
        result += lit;
        result += cook;
    });
    result += literalsArr[literalsArr.length - 1];
    return result;
};


/* generate gallery link
*/
const homeTpl = (data) => html`
    <h2>Welcome</h2>
    
    <h3>This is a Photo Gallery App written in vanilla ES6 JavaScript</h3>
    <p>If you can read this, the app router sent you to the home page.</p>

    <a href="#/about">About</a>
    <a href="#/contact">Contact</a>
    <a href="#/portfolio">Portfolio</a>
`;

export { homeTpl };
