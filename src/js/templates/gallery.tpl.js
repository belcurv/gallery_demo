/* jshint esversion:6 */

import { html } from '../util';


/* generate gallery link
*/
const image_link = (image) => html`
    <div class="gallery-link Grid-cell">
        <a href="${image.large}">
            <div class="gallery-link-img" style="background-image: url(${image.thumb})"></div>
            <div class="gallery-link-title">
                ${image.alt}
            </div>
        </a>
    </div>
`;


/* generate grid list of galleries
*/
const galleryTpl = (gallery) => html`
    <h2>${gallery.title}</h2>
    <p>${gallery.description}</p>
    <div class="Grid Grid--gutters small-Grid--full med-Grid--1of2 large-Grid--1of3 gallery-list">
        ${gallery.images.map( image => image_link(image) )}
    </div>
`;

export { galleryTpl };
