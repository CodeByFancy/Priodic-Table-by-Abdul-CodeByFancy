// Element Atlas: interactive periodic table
// The data below contains all 118 recognized chemical elements.
const elements = [
[1,"H","Hydrogen",1.008,"reactive-nonmetal",1,1,"Gas","1766","Hydrogen is the lightest element and the most abundant chemical element in the universe."],
[2,"He","Helium",4.0026,"noble-gas",1,18,"Gas","1868","Helium is a very light, non-flammable noble gas used in cryogenics and scientific instruments."],
[3,"Li","Lithium",6.94,"alkali-metal",2,1,"Solid","1817","Lithium is a soft, lightweight metal used in rechargeable batteries."],
[4,"Be","Beryllium",9.0122,"alkaline-earth-metal",2,2,"Solid","1798","Beryllium is a lightweight, stiff metal used in specialized aerospace components."],
[5,"B","Boron",10.81,"metalloid",2,13,"Solid","1808","Boron is a metalloid used in borosilicate glass, detergents, and advanced materials."],
[6,"C","Carbon",12.011,"reactive-nonmetal",2,14,"Solid","Ancient","Carbon forms the backbone of organic chemistry and occurs as diamond and graphite."],
[7,"N","Nitrogen",14.007,"reactive-nonmetal",2,15,"Gas","1772","Nitrogen makes up about 78% of Earth's atmosphere and is essential to living organisms."],
[8,"O","Oxygen",15.999,"reactive-nonmetal",2,16,"Gas","1774","Oxygen supports aerobic respiration and makes up about one fifth of Earth's atmosphere."],
[9,"F","Fluorine",18.998,"reactive-nonmetal",2,17,"Gas","1886","Fluorine is the most electronegative element and is extremely reactive."],
[10,"Ne","Neon",20.180,"noble-gas",2,18,"Gas","1898","Neon is a noble gas known for its use in luminous signs."],
[11,"Na","Sodium",22.990,"alkali-metal",3,1,"Solid","1807","Sodium is a reactive alkali metal; its compounds include ordinary table salt."],
[12,"Mg","Magnesium",24.305,"alkaline-earth-metal",3,2,"Solid","1755","Magnesium is a lightweight metal and an essential element in many biological processes."],
[13,"Al","Aluminium",26.982,"post-transition-metal",3,13,"Solid","1825","Aluminium is a lightweight, corrosion-resistant metal widely used in transport and packaging."],
[14,"Si","Silicon",28.085,"metalloid",3,14,"Solid","1824","Silicon is a semiconductor central to computer chips and solar cells."],
[15,"P","Phosphorus",30.974,"reactive-nonmetal",3,15,"Solid","1669","Phosphorus is essential for DNA, cell membranes, and energy transfer in living things."],
[16,"S","Sulfur",32.06,"reactive-nonmetal",3,16,"Solid","Ancient","Sulfur is a yellow nonmetal used in sulfuric acid production and vulcanization."],
[17,"Cl","Chlorine",35.45,"reactive-nonmetal",3,17,"Gas","1774","Chlorine is a reactive halogen used in water disinfection and chemical manufacturing."],
[18,"Ar","Argon",39.948,"noble-gas",3,18,"Gas","1894","Argon is an inert gas used in welding and protective atmospheres."],
[19,"K","Potassium",39.098,"alkali-metal",4,1,"Solid","1807","Potassium is a reactive metal and an essential electrolyte in living organisms."],
[20,"Ca","Calcium",40.078,"alkaline-earth-metal",4,2,"Solid","Ancient","Calcium is important for bones, teeth, shells, and many cellular processes."],
[21,"Sc","Scandium",44.956,"transition-metal",4,3,"Solid","1879","Scandium is a transition metal used in some high-performance aluminium alloys."],
[22,"Ti","Titanium",47.867,"transition-metal",4,4,"Solid","1791","Titanium combines low density with high strength and corrosion resistance."],
[23,"V","Vanadium",50.942,"transition-metal",4,5,"Solid","1801","Vanadium is used to strengthen steel and in some battery technologies."],
[24,"Cr","Chromium",51.996,"transition-metal",4,6,"Solid","1797","Chromium is valued for corrosion resistance and is used in stainless steel."],
[25,"Mn","Manganese",54.938,"transition-metal",4,7,"Solid","1774","Manganese is important in steelmaking and is a trace nutrient."],
[26,"Fe","Iron",55.845,"transition-metal",4,8,"Solid","Ancient","Iron is a major component of steel and of the oxygen-carrying protein hemoglobin."],
[27,"Co","Cobalt",58.933,"transition-metal",4,9,"Solid","1735","Cobalt is used in high-performance alloys, pigments, and rechargeable battery materials."],
[28,"Ni","Nickel",58.693,"transition-metal",4,10,"Solid","1751","Nickel is used in stainless steel, plating, and rechargeable batteries."],
[29,"Cu","Copper",63.546,"transition-metal",4,11,"Solid","Ancient","Copper is an excellent electrical conductor used in wiring and plumbing."],
[30,"Zn","Zinc",65.38,"transition-metal",4,12,"Solid","Ancient","Zinc protects steel from corrosion and is an essential trace nutrient."],
[31,"Ga","Gallium",69.723,"post-transition-metal",4,13,"Solid","1875","Gallium is used in semiconductors and can melt near room temperature."],
[32,"Ge","Germanium",72.630,"metalloid",4,14,"Solid","1886","Germanium is a metalloid used in fiber optics and infrared optics."],
[33,"As","Arsenic",74.922,"metalloid",4,15,"Solid","Ancient","Arsenic is a metalloid whose compounds can be highly toxic."],
[34,"Se","Selenium",78.971,"reactive-nonmetal",4,16,"Solid","1817","Selenium is a trace nutrient and is used in glass and electronic applications."],
[35,"Br","Bromine",79.904,"reactive-nonmetal",4,17,"Liquid","1826","Bromine is a reddish-brown liquid halogen at room temperature."],
[36,"Kr","Krypton",83.798,"noble-gas",4,18,"Gas","1898","Krypton is a noble gas used in specialized lighting and photography."],
[37,"Rb","Rubidium",85.468,"alkali-metal",5,1,"Solid","1861","Rubidium is a very reactive alkali metal used in research and atomic clocks."],
[38,"Sr","Strontium",87.62,"alkaline-earth-metal",5,2,"Solid","1790","Strontium compounds produce vivid red colors in fireworks."],
[39,"Y","Yttrium",88.906,"transition-metal",5,3,"Solid","1794","Yttrium is used in phosphors, lasers, and advanced ceramics."],
[40,"Zr","Zirconium",91.224,"transition-metal",5,4,"Solid","1789","Zirconium resists corrosion and is used in nuclear reactor components."],
[41,"Nb","Niobium",92.906,"transition-metal",5,5,"Solid","1801","Niobium is used in superconducting alloys and high-strength steel."],
[42,"Mo","Molybdenum",95.95,"transition-metal",5,6,"Solid","1778","Molybdenum strengthens steel and withstands high temperatures."],
[43,"Tc","Technetium",98,"transition-metal",5,7,"Solid","1937","Technetium was the first element to be produced artificially; it has no stable isotopes."],
[44,"Ru","Ruthenium",101.07,"transition-metal",5,8,"Solid","1844","Ruthenium is a platinum-group metal used in electronics and catalysis."],
[45,"Rh","Rhodium",102.91,"transition-metal",5,9,"Solid","1803","Rhodium is a rare, reflective metal used in catalytic converters."],
[46,"Pd","Palladium",106.42,"transition-metal",5,10,"Solid","1803","Palladium is a platinum-group metal used in catalysis and electronics."],
[47,"Ag","Silver",107.87,"transition-metal",5,11,"Solid","Ancient","Silver has the highest electrical conductivity of any element."],
[48,"Cd","Cadmium",112.41,"transition-metal",5,12,"Solid","1817","Cadmium is a toxic metal formerly common in some rechargeable batteries."],
[49,"In","Indium",114.82,"post-transition-metal",5,13,"Solid","1863","Indium is a soft metal used in transparent conductive coatings."],
[50,"Sn","Tin",118.71,"post-transition-metal",5,14,"Solid","Ancient","Tin is used in solder and protective coatings for other metals."],
[51,"Sb","Antimony",121.76,"metalloid",5,15,"Solid","Ancient","Antimony is a brittle metalloid used in alloys and flame-retardant materials."],
[52,"Te","Tellurium",127.60,"metalloid",5,16,"Solid","1782","Tellurium is used in some solar cells and metal alloys."],
[53,"I","Iodine",126.90,"reactive-nonmetal",5,17,"Solid","1811","Iodine is essential for thyroid hormone production and is used as an antiseptic."],
[54,"Xe","Xenon",131.29,"noble-gas",5,18,"Gas","1898","Xenon is a heavy noble gas used in flash lamps and ion propulsion research."],
[55,"Cs","Caesium",132.91,"alkali-metal",6,1,"Solid","1860","Caesium is a highly reactive metal used in highly precise atomic clocks."],
[56,"Ba","Barium",137.33,"alkaline-earth-metal",6,2,"Solid","1808","Barium compounds have uses in medical imaging and industrial applications."],
[57,"La","Lanthanum",138.91,"lanthanide",6,3,"Solid","1839","Lanthanum is a rare-earth metal used in camera lenses and catalysts."],
[58,"Ce","Cerium",140.12,"lanthanide",6,4,"Solid","1803","Cerium is the most abundant rare-earth element and is used in polishing powders."],
[59,"Pr","Praseodymium",140.91,"lanthanide",6,5,"Solid","1885","Praseodymium is used in specialty glass, magnets, and alloys."],
[60,"Nd","Neodymium",144.24,"lanthanide",6,6,"Solid","1885","Neodymium is key to powerful permanent magnets used in motors and speakers."],
[61,"Pm","Promethium",145,"lanthanide",6,7,"Solid","1945","Promethium is radioactive and has no stable isotopes."],
[62,"Sm","Samarium",150.36,"lanthanide",6,8,"Solid","1879","Samarium is used in magnets and some nuclear applications."],
[63,"Eu","Europium",151.96,"lanthanide",6,9,"Solid","1901","Europium compounds are used in red and blue phosphors."],
[64,"Gd","Gadolinium",157.25,"lanthanide",6,10,"Solid","1880","Gadolinium has magnetic properties useful in research and medical imaging compounds."],
[65,"Tb","Terbium",158.93,"lanthanide",6,11,"Solid","1843","Terbium is used in green phosphors and magnetostrictive materials."],
[66,"Dy","Dysprosium",162.50,"lanthanide",6,12,"Solid","1886","Dysprosium helps some magnets retain performance at high temperatures."],
[67,"Ho","Holmium",164.93,"lanthanide",6,13,"Solid","1878","Holmium has a very high magnetic moment and is used in specialized magnets."],
[68,"Er","Erbium",167.26,"lanthanide",6,14,"Solid","1843","Erbium is used to amplify signals in fiber-optic communication."],
[69,"Tm","Thulium",168.93,"lanthanide",6,15,"Solid","1879","Thulium is a rare-earth element used in some lasers."],
[70,"Yb","Ytterbium",173.05,"lanthanide",6,16,"Solid","1878","Ytterbium is used in lasers, research, and atomic-clock development."],
[71,"Lu","Lutetium",174.97,"lanthanide",6,17,"Solid","1907","Lutetium is a dense rare-earth metal used in specialized catalysts and detectors."],
[72,"Hf","Hafnium",178.49,"transition-metal",6,4,"Solid","1923","Hafnium absorbs neutrons well and is used in nuclear control rods."],
[73,"Ta","Tantalum",180.95,"transition-metal",6,5,"Solid","1802","Tantalum resists corrosion and is used in capacitors and medical implants."],
[74,"W","Tungsten",183.84,"transition-metal",6,6,"Solid","1783","Tungsten has the highest melting point among pure metals."],
[75,"Re","Rhenium",186.21,"transition-metal",6,7,"Solid","1925","Rhenium is used in high-temperature superalloys for jet engines."],
[76,"Os","Osmium",190.23,"transition-metal",6,8,"Solid","1803","Osmium is an extremely dense platinum-group metal."],
[77,"Ir","Iridium",192.22,"transition-metal",6,9,"Solid","1803","Iridium is exceptionally corrosion-resistant and very dense."],
[78,"Pt","Platinum",195.08,"transition-metal",6,10,"Solid","1735","Platinum is a precious metal widely used in catalytic converters and jewelry."],
[79,"Au","Gold",196.97,"transition-metal",6,11,"Solid","Ancient","Gold is a malleable precious metal that resists corrosion."],
[80,"Hg","Mercury",200.59,"transition-metal",6,12,"Liquid","Ancient","Mercury is a metal that is liquid at room temperature and is toxic."],
[81,"Tl","Thallium",204.38,"post-transition-metal",6,13,"Solid","1861","Thallium is a highly toxic metal with limited specialized uses."],
[82,"Pb","Lead",207.2,"post-transition-metal",6,14,"Solid","Ancient","Lead is a dense toxic metal; exposure can harm the nervous system."],
[83,"Bi","Bismuth",208.98,"post-transition-metal",6,15,"Solid","1753","Bismuth is a heavy metal with relatively low toxicity compared with lead."],
[84,"Po","Polonium",209,"post-transition-metal",6,16,"Solid","1898","Polonium is a rare, highly radioactive element discovered by Marie and Pierre Curie."],
[85,"At","Astatine",210,"metalloid",6,17,"Solid","1940","Astatine is an extremely rare radioactive halogen."],
[86,"Rn","Radon",222,"noble-gas",6,18,"Gas","1900","Radon is a radioactive noble gas that can accumulate in buildings."],
[87,"Fr","Francium",223,"alkali-metal",7,1,"Solid","1939","Francium is an extremely rare, highly radioactive alkali metal."],
[88,"Ra","Radium",226,"alkaline-earth-metal",7,2,"Solid","1898","Radium is a radioactive alkaline-earth metal discovered by the Curies."],
[89,"Ac","Actinium",227,"actinide",7,3,"Solid","1899","Actinium is a radioactive metal that gives its name to the actinide series."],
[90,"Th","Thorium",232.04,"actinide",7,4,"Solid","1829","Thorium is a naturally occurring radioactive metal studied as a potential nuclear fuel."],
[91,"Pa","Protactinium",231.04,"actinide",7,5,"Solid","1913","Protactinium is a rare, radioactive actinide."],
[92,"U","Uranium",238.03,"actinide",7,6,"Solid","1789","Uranium is a naturally radioactive metal used as nuclear fuel."],
[93,"Np","Neptunium",237,"actinide",7,7,"Solid","1940","Neptunium was the first transuranium element to be synthesized."],
[94,"Pu","Plutonium",244,"actinide",7,8,"Solid","1940","Plutonium is a radioactive actinide used in specialized nuclear applications."],
[95,"Am","Americium",243,"actinide",7,9,"Solid","1944","Americium is used in many household smoke detectors."],
[96,"Cm","Curium",247,"actinide",7,10,"Solid","1944","Curium is a radioactive element named after Marie and Pierre Curie."],
[97,"Bk","Berkelium",247,"actinide",7,11,"Solid","1949","Berkelium is a synthetic radioactive element."],
[98,"Cf","Californium",251,"actinide",7,12,"Solid","1950","Californium is a synthetic element with uses as a neutron source."],
[99,"Es","Einsteinium",252,"actinide",7,13,"Solid","1952","Einsteinium is a synthetic radioactive element named for Albert Einstein."],
[100,"Fm","Fermium",257,"actinide",7,14,"Solid","1952","Fermium is a synthetic actinide first identified in debris from a thermonuclear test."],
[101,"Md","Mendelevium",258,"actinide",7,15,"Solid","1955","Mendelevium is a synthetic element named after Dmitri Mendeleev."],
[102,"No","Nobelium",259,"actinide",7,16,"Solid","1966","Nobelium is a synthetic radioactive actinide."],
[103,"Lr","Lawrencium",266,"actinide",7,17,"Solid","1961","Lawrencium is a synthetic element named after Ernest Lawrence."],
[104,"Rf","Rutherfordium",267,"transition-metal",7,4,"Solid","1964","Rutherfordium is a synthetic transactinide element."],
[105,"Db","Dubnium",268,"transition-metal",7,5,"Solid","1968","Dubnium is a synthetic element named after Dubna, Russia."],
[106,"Sg","Seaborgium",269,"transition-metal",7,6,"Solid","1974","Seaborgium is a synthetic element named for chemist Glenn T. Seaborg."],
[107,"Bh","Bohrium",270,"transition-metal",7,7,"Solid","1981","Bohrium is a synthetic element named for physicist Niels Bohr."],
[108,"Hs","Hassium",277,"transition-metal",7,8,"Solid","1984","Hassium is a synthetic element named after the German state of Hesse."],
[109,"Mt","Meitnerium",278,"unknown",7,9,"Unknown","1982","Meitnerium is a synthetic element named for physicist Lise Meitner."],
[110,"Ds","Darmstadtium",281,"unknown",7,10,"Unknown","1994","Darmstadtium is a synthetic element named after Darmstadt, Germany."],
[111,"Rg","Roentgenium",282,"unknown",7,11,"Unknown","1994","Roentgenium is a synthetic element named for Wilhelm Röntgen."],
[112,"Cn","Copernicium",285,"transition-metal",7,12,"Unknown","1996","Copernicium is a synthetic element named for astronomer Nicolaus Copernicus."],
[113,"Nh","Nihonium",286,"unknown",7,13,"Unknown","2004","Nihonium is a synthetic element named after Japan."],
[114,"Fl","Flerovium",289,"unknown",7,14,"Unknown","1998","Flerovium is a synthetic element named after the Flerov Laboratory."],
[115,"Mc","Moscovium",290,"unknown",7,15,"Unknown","2003","Moscovium is a synthetic element named after the Moscow region."],
[116,"Lv","Livermorium",293,"unknown",7,16,"Unknown","2000","Livermorium is a synthetic element named after Lawrence Livermore National Laboratory."],
[117,"Ts","Tennessine",294,"unknown",7,17,"Unknown","2010","Tennessine is a synthetic element named after Tennessee."],
[118,"Og","Oganesson",294,"unknown",7,18,"Unknown","2002","Oganesson is a synthetic element named for physicist Yuri Oganessian."]
];

const table = document.querySelector("#periodic-table");
const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const resultCount = document.querySelector("#result-count");
const modal = document.querySelector("#modal");
let activeElementIndex = 0;

const categoryNames = {
  "alkali-metal":"Alkali metal", "alkaline-earth-metal":"Alkaline earth metal",
  "transition-metal":"Transition metal", "post-transition-metal":"Post-transition metal",
  "metalloid":"Metalloid", "reactive-nonmetal":"Reactive nonmetal", "noble-gas":"Noble gas",
  "lanthanide":"Lanthanide", "actinide":"Actinide", "unknown":"Unknown properties"
};

// Layout positions are grid column/row pairs. Lanthanides and actinides appear in two detached rows.
function positionFor(el) {
  const [n,sym,name,mass,cat,period,group] = el;
  if (n >= 57 && n <= 71) return {col:n-57+4,row:9};
  if (n >= 89 && n <= 103) return {col:n-89+4,row:10};
  if (n === 72) return {col:4,row:6};
  if (n >= 104) return {col:group,row:period};
  if (n >= 58 && n <= 71) return {col:n-54,row:9};
  if (n === 57) return {col:3,row:6};
  if (n === 89) return {col:3,row:7};
  return {col:group,row:period};
}

function renderTable() {
  table.innerHTML = "";
  // Small labels explain the two detached f-block rows.
  const lanthLabel = document.createElement("div");
  lanthLabel.className = "series-label";
  lanthLabel.textContent = "57–71  LANTHANIDES";
  lanthLabel.style.gridRow = "9";
  table.appendChild(lanthLabel);
  const actLabel = document.createElement("div");
  actLabel.className = "series-label";
  actLabel.textContent = "89–103 ACTINIDES";
  actLabel.style.gridRow = "10";
  table.appendChild(actLabel);

  elements.forEach((el,index) => {
    const [num,symbol,name,mass,category,period,group,phase,discovered,summary] = el;
    const pos = positionFor(el);
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `element ${category}`;
    tile.style.gridColumn = pos.col;
    tile.style.gridRow = pos.row;
    tile.dataset.index = index;
    tile.dataset.search = `${num} ${symbol} ${name}`.toLowerCase();
    tile.setAttribute("aria-label", `${name}, atomic number ${num}. Open details.`);
    tile.innerHTML = `<span class="tile-glow"></span><span class="num">${num}</span><span class="symbol">${symbol}</span><span class="name">${name}</span><span class="mass">${mass}</span>`;
    tile.addEventListener("click", () => openDetails(index));
    table.appendChild(tile);
  });

  // Visual placeholders for the empty positions above the detached rows.
  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";
  placeholder.style.gridColumn = "3";
  placeholder.style.gridRow = "9";
  placeholder.textContent = "f-block";
  table.appendChild(placeholder);
  updateFilters();
}

function updateFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  let visible = 0;
  table.querySelectorAll(".element").forEach(tile => {
    const el = elements[Number(tile.dataset.index)];
    const matchesSearch = !query || tile.dataset.search.includes(query);
    const matchesCategory = category === "all" || el[4] === category;
    const match = matchesSearch && matchesCategory;
    tile.classList.toggle("dimmed", !match);
    tile.setAttribute("aria-pressed", "false");
    if (match) visible++;
  });
  resultCount.textContent = `Showing ${visible} of ${elements.length} elements`;
}

function openDetails(index) {
  activeElementIndex = index;
  const [num,symbol,name,mass,category,period,group,phase,discovered,summary] = elements[index];
  document.querySelector("#modal-category").textContent = categoryNames[category] || "Element";
  document.querySelector("#modal-symbol").textContent = symbol;
  document.querySelector("#modal-number").textContent = `ATOMIC NUMBER ${num}`;
  document.querySelector("#modal-name").textContent = name;
  document.querySelector("#modal-mass").textContent = `${mass} u`;
  document.querySelector("#modal-period").textContent = period;
  document.querySelector("#modal-group").textContent = group;
  document.querySelector("#modal-phase").textContent = phase;
  document.querySelector("#modal-discovered").textContent = discovered;
  document.querySelector("#modal-summary").textContent = summary;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.querySelector("#modal-close").focus();
}

function closeDetails() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", updateFilters);
categoryFilter.addEventListener("change", updateFilters);
document.querySelector("#reset").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  updateFilters();
});
document.querySelector("#modal-close").addEventListener("click", closeDetails);
modal.addEventListener("click", event => {
  if (event.target.dataset.close === "true") closeDetails();
});
document.querySelector("#modal-next").addEventListener("click", () => {
  openDetails((activeElementIndex + 1) % elements.length);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeDetails();
});

document.querySelector("#element-count").textContent = elements.length;
renderTable();
