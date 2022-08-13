function displayCardPets(){
    //travel the array (for)
    let card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        card+=`
            <div id="${pet.id}" class="pet"> 
                <h4>Name: ${pet.name}</h4>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Age: ${pet.service}</p>
                <p>Owner: ${pet.owner}</p>
                <p>Phone: ${pet.phone}</p>
                <button class="btn btn-danger" onclick="deletePet(${pet.id});"> Delete </button>
            </div>
        `;
    }

    //inject the card into the HTML (register.html
    document.getElementById("pet-cards").innerHTML=card;
}

function displayPetsTable(){
    //travel the array (for)
    //tr+= `<tr class="table-light"></tr>`;
    //inject the tr into the HTML table
}