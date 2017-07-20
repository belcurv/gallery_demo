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
const aboutTpl = (data) => html`
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, qui dico erat intellegebat an, at his munere erroribus mediocritatem. Equidem principes est ad, has ei vide diceret. Pro oblique posidonium repudiandae no, putent doctus ocurreret ex eam. Facer semper assueverit an mei, in nec altera nonumes veritus. His dolores invenire dissentiunt ei, eros tation sapientem nec ad, unum maiorum fierent ne ius. At harum aeterno vim, id dicam utroque pri, ne aperiam dissentias sed. Duo ad dolore voluptua, facer doctus placerat his no, mel an elit offendit.</p>

    <p>Quas deleniti imperdiet ad sed, eam in mundi affert corrumpit. Ex eos utinam timeam consequat, duo et dico audiam vituperatoribus, eum cu tacimates mandamus ullamcorper. Cu admodum persequeris definitiones cum, eu his audiam complectitur. Appetere eloquentiam ex mel, summo ullamcorper vituperatoribus in vim, ut natum eripuit euismod cum. Ex eleifend conceptam cum, mei ei aeterno officiis mnesarchum.</p>

    <p>Mei in debet aliquip. Id dictas tacimates voluptatibus eum, tollit suavitate expetendis te has, sea oblique dolorem ne. Te qui affert delectus mediocrem, te sed vidisse ponderum, modus nusquam probatus te sea. Nec id utamur periculis.</p>

    <p>Bonorum iracundia inciderint pro eu, quo ei impedit partiendo tincidunt, odio dolores duo ne. Sea et eros fugit interesset, quo mucius efficiendi eloquentiam eu. Vis causae inermis reformidans ex. Sit te voluptua repudiare, eum tota ludus no, eu pro iudico inimicus.</p>

    <p>Mea id solet equidem graecis, atqui assentior adipiscing ius id, eum scripserit dissentiet ea. Quo ne decore latine, eu homero vituperatoribus his, no falli graece vim. Novum facilisis ut mea, an cum probo legere dolorem, omnium dolores accusamus eum te. Rebum gloriatur qui ea, augue posidonium per in. In impedit facilis deseruisse vim.</p>
`;

export { aboutTpl };
