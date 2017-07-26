/* jshint esversion:6 */

import { html } from '../util';

const topics = [
    {
        name : 'classes',
        desc : 'JavaScript classes introduced in ECMAScript 2015 are primarily syntactical sugar over JavaScript\'s existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.',
        url  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
        ex   : '// main.js \n \nclass App {\n    constructor() {\n        this.el = document.getElementById(\'target\');\n    }\n}\n\nconst app = new App();'
    },
    {
        name : 'import/export',
        desc : 'The import statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc. The export statement is used to export functions, objects or primitives from a given file (or module).',
        url  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
        ex   : '// portfolio.ctrl.js\n\nimport { getJSON } from \'../service\';\n\nfunction portfolioCtrl(el, template, data) {\n\n    getJSON(\'server/mock.json\')\n        .then( galeries => {\n            el.innerHTML = template(galeries);\n        });\n    }\n\nexport { portfolioCtrl };'
    },
    {
        name : 'arrow functions',
        desc : 'An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.',
        url  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
        ex   : `// service.js\n\nconst getJSON = (url) => {\n    const xhr = new XMLHttpRequest();\n    return new Promise( (resolve, reject) => {\n        xhr.onreadystatechange = () => {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    resolve(JSON.parse(xhr.responseText));\n                } else {\n                    reject(xhr.responseText);\n                }\n            }\n        };\n        xhr.open('GET', url);\n        xhr.send();\n    });\n};\n`
    },
    {
        name : 'rest operator',
        desc : 'The rest parameter syntax allows us to represent an indefinite number of arguments as an array. If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.',
        url  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters',
        ex   : `// util.js\n\nconst html = (literalsArr, ...cooked) => {\n    let result = '';\n\n    cooked.forEach( (cook, indx) => {\n        let lit = literalsArr[indx];\n        if (Array.isArray(cook)) {\n            cook = cook.join('');\n        }\n        result += lit;\n        result += cook;\n    });\n    result += literalsArr[literalsArr.length - 1];\n    return result;\n};\n\nexport { html };\n`
    },
    {
        name : 'tagged templates',
        desc : 'A more advanced form of template literals are tagged template literals. Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. In the end, your function can return your manipulated string (or it can return something completely different as described in the next example). The name of the function used for the tag can be named whatever you want.',
        url  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals',
        ex   : '// gallery.tpl.js\n\n// import html util\nimport { html } from \'../util\';\n\n// generate gallery link\nconst image_link = (image) => html\`\n    &ltdiv class="gallery-link Grid-cell"&gt\n        &ltdiv class="gallery-link-img"\n             data-link="\${image.large}"\n             style="background-image: url(\${image.thumb})"&gt\n        &lt/div&gt\n        &ltdiv class="gallery-link-title"&gt\n            \${image.alt}\n        &lt/div&gt\n    &lt/div&gt\n\`;\n\n\n// generate grid list of galleries\nconst galleryTpl = (gallery) =&gt html\`\n    &lth2&gt\${gallery.title}&lt/h2&gt\n    &ltp&gt\${gallery.description}&lt/p&gt\n    &ltdiv class="Grid Grid--gutters Grid--justifyCenter small-Grid--full\n                med-Grid--1of2 large-Grid--1of3 gallery-list"&gt\n        \${gallery.images.map( image =&gt image_link(image) )}\n    &lt/div&gt\n\`;\n'
    }
];

/* generate topics list items
*/
const li = (topic) => html`
    <li>
        <div class="definition">
            <strong>${topic.name}</strong> - ${topic.desc}
            (<a href="${topic.url}" target="_blank"><em>MDN</em></a>)
        </div>
        <div class="example">
            <pre><code>${topic.ex}</code></pre>
        </div>
    </li>
`;


/* generate about view content
*/
const aboutTpl = (data) => html`
    <h1>About</h1>
    <p>This app uses the following es2015 (es6) features and syntax:</p>
    <ul>
        ${topics.map( topic => li(topic))}
    </ul>
`;

export { aboutTpl };
