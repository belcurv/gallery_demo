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


/* generate grid list of galleries
*/
const mainTpl = () => html`
    <div class="app-shell-head">
        <div class="app-shell-head-logo">
            <a href="#/"><h1>Photo Gallery Demo</h1></a>
        </div>
        <div class="app-shell-head-nav">
            <ul>
                <li><a href="#/about">About</a></li>
                <li><a href="#/contact">Contact</a></li>
                <li><a href="#/portfolio">Portfolio</a></li>
            </ul>
        </div>
    </div>
`;

export { mainTpl };


