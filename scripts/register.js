//object literal
// arrays []
//objects {}
let petSalon ={
    //attributes
    name:"The Fashion Pet",
    address:"Ave University 768",
    hours:{
        open:"9:00am",
        close:"6:00pm"
    },
    pets:[]
}
//counter 
let c=0;
//constructor function
//----------- Parameters/ local variables ----------------------->
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    //attributes = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    this.id=c++;
}
//creating the functions
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}

function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets`;
}


function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service==""){ // is empty?
        valid=false;
    }
    return valid;
}

function register(){
    //get info from the inputs
    let petName=document.getElementById("txtPetName").value;
    let petAge = document.getElementById("numPetAge").value;
    let petGender = document.getElementById("txtPetGender").value;
    let petBreed = document.getElementById("txtPetBreed").value;    
    let petService = document.getElementById("selService").value;  
    let petOwner = document.getElementById("txtOwnerName").value;
    let petPhone = document.getElementById("txtPhone").value;
    //create the obj
    let newPet = new Pet(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
    if(isValid(newPet)){
        //push the obj
        petSalon.pets.push(newPet);
        displayCardPets();
        console.log(petSalon.pets);
        displayNumberOfPets();
        clearInputs();
    }else{
        alert("Please enter the information");
    }
}

function clearInputs(){
    document.getElementById("txtPetName").value="";
    document.getElementById("numPetAge").value="";
    document.getElementById("txtPetGender").value="";
}

function deletePet(petID){
    document.getElementById(petID).remove();
    //travel the array
    let petIndex; 
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        //compare the id of the pet
        if(pet.id == petID){
            petIndex=i;//get the pet index 
        }
    }
    petSalon.pets.splice(petIndex,1);//remove from the array
    displayNumberOfPets(); //update the displayNumberOfPets() 
}
function search(){
    let searchString=document.getElementById("txtSearch").value;

    for(let i=0;i<petSalon.pets.length;i++) {
        let pet =petSalon.pets[i];
        if(searchString.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("selected");
        }else{
            document.getElementById(pet.id).classList.remove("selected");
        }
    }
}

function init(){
    //creating objects
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","666-666-666");
    let scrappy = new Pet("Scrappy",40,"Male","Mixed","Vaccines","Shaggy","666-666-666");
    let speedy = new Pet("Speedy",80,"Male","Mixed","Nails cut","Bugs Bunny","666-666-666");
   
    petSalon.pets.push(scooby,scrappy,speedy);
    console.log(petSalon.pets);
    //calling the function
    displayInfo();
    displayNumberOfPets();
    displayCardPets();
    //hook events
}

window.onload=init;