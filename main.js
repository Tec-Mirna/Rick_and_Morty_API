import 'bootstrap/dist/css/bootstrap.min.css'


document.querySelector('#app').innerHTML = `
<section class="container">
<div class="row" id="characters-cards">



 
</div>
</section>

`
const getCharacters = async () => {
    try{
     const response = await fetch('https://rickandmortyapi.com/api/character')
     const data = await response.json()
     //Data.results para mostrar la información de los personajes
     console.log(data.results)

  /*    let buttonColor;
     switch(character.status){
        case 'Alive':
            buttonColor = 'green'
            break;
        case 'Dead':
            buttonColor = 'red'
            break;
         default:
                buttonColor = 'grey'
                break;
     } */




         //.map para iterar muestra 1 a 1 
     data.results.map((character) => {
        //Mostrar nombre de los personajes
      /*   console.log(character.name) */
           const characterCard = document.createElement('div')
                 //classList.add= AGREGA CLASES A UN ATRIBUTO
             characterCard.classList.add('col-sm-12', 'col-md-4')

             //Se agrega =+ para agregar uno tras otro
           characterCard.innerHTML += `
          

             <div class="card m-2 " style="width: 18rem;">
                <img src=${character.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">${character.status}</a>
           </div>
        </div>
           ` 

           document.querySelector('#characters-cards').appendChild(characterCard)
     })

    }catch(error){
       console.log('HA OCURRIDO UN ERROR: ${error}')
    }
 
      
}   //Los paréntesis son para crear
getCharacters()