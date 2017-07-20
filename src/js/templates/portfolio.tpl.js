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
const gallery_link = (gallery) => html`
    <div class="gallery-link Grid-cell">
        <a href="${gallery.link_url}">
            <div class="gallery-link-img" style="background-image: url(${gallery.img_url})"></div>
            <div class="gallery-link-title">
                ${gallery.title}
            </div>
        </a>
    </div>
`;


/* generate grid list of galleries
*/
const gallery_list = (galleries) => html`
    <div class="Grid Grid--gutters small-Grid--full med-Grid--1of2 large-Grid--1of3 gallery-list">
        ${galleries.map( gallery => gallery_link(gallery) )}
    </div>
`;

export { gallery_list };
