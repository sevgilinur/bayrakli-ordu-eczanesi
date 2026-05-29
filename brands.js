const brandData = {
  A: ["Acnecinamide","AKILEINE","Alpecin","Alvita","Aptamil","Argivit","Avene","Avene - Ducray","Avent","AVOSORGANICS"],
  B: ["Babe","Bade Natural","Bambino","Bebedor","Bebelac","Benjamin Button Effect","Bepanthol","BIODERMA","Bio Oil","Bioblas","Bioder","Bioderma","Biofiz","BioNike","Bioxcin","Blistex","Burts Bees"],
  C: ["Caldion","Canped","Carlson","Caudalie","CeraVe","Chicco","Cocoacombiotik","Corega","Cosmed","Curaprox"],
  D: ["Darphin","Davines","Day2day","Daylong","Dead Sea Spa Magik","DERMALOGICA","DERMODEX","Dermolife","Dermoskin","Dexeryl","Dr. Thomson","DR.MARCO","Driclor","Druide","Ducray"],
  E: ["Eeose","Efervit","Embryolisse","Esomed","Etat Pur","EuRho Vital","Evolvia","eyewake"],
  F: ["Factor","Filorga","Foltene","Foltene Pharma","Fualab"],
  G: ["Golden Goat","Gülsha"],
  H: ["Hametol","Hamilton","Heliocare","Holder","Humble Brush"],
  I: ["Immunace","INSTITUT ESTHEDERM","Institut Esthederm"],
  J: ["Jagler","Jane iredale","John Frieda","Johnson's","Juvera"],
  K: ["Kerastase"],
  L: ["La Roche Posay","La Roche-Posay","Lansinoh","Lapitak","Le Petit Marseillais","Lierac","Linola","Listerine"],
  M: ["Magnimore","Mustela"],
  N: ["NASOVAN","NBT Life","Neutracy","Neutrogena","Nutraxin","Nutricia","Nuxe"],
  O: ["Oral-b","Orzax","Otifleks"],
  P: ["Paradontax","Pharmaton","Phyto","Phyto Saç Bakım","Pic Air Cube","Propia"],
  R: ["Radix","Rebul","ReCream","Relaxing Moisturizing","Renu","Restorex","Rexona","ROCS","Roger&Gallet"],
  S: ["Samberry","Sebamed","Sensodyne","Signal","Skinceuticals","SMA","Solante","Sovital","Steriball","Sterimar","Sudocrem","Supradyn",],
  T: ["Tommee Tippee","TTO"],
  V: ["Vaseline","Veet","Velavit","Vichy","VİTA SURE","Vitasure","Voonka"],
  W: ["Wee Baby","W-Lab"],
  Y: ["Youplus"],
  Z: ["Zade Vital"]
};

const container = document.getElementById('brands-container');
let html = '<div class="brands-grid">';
for (const [letter, brands] of Object.entries(brandData)) {
  html += `<div class="brand-letter"><h2 class="letter-header">${letter}</h2><ul class="brand-list">`;
  brands.forEach(b => { html += `<li>${b}</li>`; });
  html += '</ul></div>';
}
html += '</div>';
container.innerHTML = html;
