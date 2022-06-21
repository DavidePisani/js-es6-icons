// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
// in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
//  Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

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
console.log(selectElement);


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

// creo una evento al cambio della select stampa in pagina solo gli elementi 

selectElement.addEventListener('change', (event) => {
  
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