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
    pets:[
        { //anonymous object
            name:"Scooby",
            age:50,
            breed: "Dane",
            gender:"Male",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"666-666-666"
        },
        {
            name:"Scrappy",
            age:40,
            breed: "Mixed",
            gender:"Male",
            service:"Vaccine",
            ownerName:"Shaggy",
            contactPhone:"666-666-666"
        },
        {
            name:"Speedy",
            age:80,
            breed: "Mixed",
            gender:"Male",
            service:"Nails cut",
            ownerName:"Bugs Bunny",
            contactPhone:"888-888-888"
        }
    ]
}


for(let i=0;i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name);
}

//creating the function
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
//calling the function
displayInfo();