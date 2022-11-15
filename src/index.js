import './style.css';



document.addEventListener("DOMContentLoaded", ()=>{
	Osszes()	
	The()
	Hossz()
})
// Összes idézet: Jelenítsd meg az összes idézetet és a szerzőjét, szerző szerint ABC sorrendben! Az eredményt listában jelenítsd meg, az idézet szövege pedig a megfelelő HTML tag-ben szerepeljen.

async function beolvas(){
	let response= await fetch("../quotes.json")
	let eredmeny=await response.json()
	// console.log(eredmeny)
	return eredmeny
}


function Osszes(){
	document.getElementById("osszes").addEventListener("click",async()=>{
		let eredmeny=await beolvas()
		eredmeny.quotes.sort((a,b)=>a.author.localeCompare(b.author))
		for(let x of eredmeny.quotes){
			// console.table(x.author, x.quote)
			let li=document.createElement("li")
			li.textContent=x.author
			let qu=document.createElement("blockquote")
			qu.textContent=x.quote
			li.appendChild(qu)
			document.getElementById("osszes_lista").appendChild(li)

		}
	})
}

// The: készíts egy új, stringekből alló tömböt, amely az idézeteket tartalmazza. Ezekből az idézetekből készíts egy sorszámozott listát! Ebben a listában a "The" és a "the" szavak félkövéren jelenjenek meg.

function The(){
	document.getElementById("the").addEventListener("click",async()=>{
		let eredmeny=await beolvas()
		let eredmeny_lista=[]
		for(let x of eredmeny.quotes){
			// console.log(x.quote)
			let y=x.quote.replaceAll(" the ","<b> the </b>")
			y=y.replaceAll("The ","<b>The </b>")
			eredmeny_lista.push(y)
		}
		eredmeny_lista.forEach(e=>{
			let li=document.createElement("li")
			li.innerHTML=e
			document.getElementById("the_lista").appendChild(li)
		})
	})
}


// Hossz: készíts egy számokból álló listát, amelyben az idézetek hosszait tartalmazza! A számokat fűzd össze egyetlen, vesszővel elválasztott stringgé a tömb .join() metódusával! Az eredményt egy bekezdés tag-be helyezd. Pl. "45, 67, 99, 10, 44"

function Hossz(){
	document.getElementById("hossz").addEventListener("click",async()=>{
		let eredmeny=await beolvas()
		let eredmeny_lista=[]
		for(let x of eredmeny.quotes){
			console.log(x.quote.length)
			let y=x.quote.length
			eredmeny_lista.push(y)
		}
		eredmeny_lista=eredmeny_lista.join(", ")
		console.log(eredmeny_lista)
		let p=document.createElement("p")
		p.textContent=eredmeny_lista
		document.body.appendChild(p)
	})
}













// Darabszám: A felhasználó által megadott szerzőnek hány idézete van? Az eredményt egy readonly, number típusú input mezőbe helyezd!