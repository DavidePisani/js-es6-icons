// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
// in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
//  Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico:
// generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" 
// seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

let IconArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const fontIcon = document.querySelector('.js-container');
const selectElement = document.getElementById('select-change');

dorwSelect(selectElement);
function dorwSelect(value){

}

fontIconArrayToDraw(IconArray);

// creamo la funzione per disegnare le icone
function fontIconArrayToDraw(fontIconArray){
	
	fontIconArray.forEach((element) => {
		
		const {name,prefix,type,family,color} = element;
		
		const SingleBoxIcon = `
    <div class="box-icon " style = color:${getRandomColor()}>
      <i class="${family} ${prefix}${name} fa-2x "></i>
	  <span>${name}</span>
    </div>
		`;

		fontIcon.innerHTML += SingleBoxIcon;		
	});
	
}

 const selectOption = 'all'

 let option = `<option value="${selectOption}">${selectOption}</option>`;
selectElement.innerHTML += option;
const typeArray = [];
IconArray.forEach((element) =>{
	// console.log (element)
	if(!typeArray.includes(element.type)){
		typeArray.push (element.type)		
	} 
});

console.log(typeArray)
typeArray.forEach((element) =>{	
	 option =`<option value="${element}">${element}</option>`
	 selectElement.innerHTML += option;
});

// creo una evento al cambio della select stampa in pagina solo gli elementi 
selectElement.addEventListener('change', () => {
  
	fontIcon.innerHTML = "";

	if(selectElement.value !== "all"){
		
		const singleElement = IconArray.filter((element) =>{
			return element.type === selectElement.value
		});
		fontIconArrayToDraw(singleElement);

	} else {
		
		fontIconArrayToDraw(IconArray);
	}

	
});


function getRandomColor() {  
	 let letters = '0123456789ABCDEF';  
	  let color = '#';
	    for (let i = 0; i < 6; i++) {  

			color += letters[Math.floor(Math.random() * 16)]; 
		}  
			return color; }