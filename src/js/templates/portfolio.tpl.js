/* jshint esversion:6 */

import { html } from '../util';


/* generate gallery link
*/
const gallery_link = (gallery) => html`
    <div class="gallery-link Grid-cell">
        <a href="${gallery.link_url}">
            <div class="gallery-link-img"
                        style="background-image: url(${gallery.img_url})">
            </div>
            <div class="gallery-link-title">
                ${gallery.title}
            </div>
        </a>
    </div>
`;


/* generate grid list of galleries
*/
const portfolioTpl = (galleries) => html`
    <div class="Grid Grid--gutters Grid--justifyCenter small-Grid--full
                med-Grid--1of2 large-Grid--1of3 gallery-list">
        ${galleries.map( gallery => gallery_link(gallery) )}
    </div>
`;

export { portfolioTpl };
