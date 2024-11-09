//Scope{....}

function one(){
    const name ="Prasad"
    function two(){
        const website= "insta"
        console.log(name);
        
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="Prasad"
    if(username == "Prasad"){
        const rollNo =13
        console.log(username+rollNo);
        
    }
    //console.log(rollNo)
}
//console.log(username)

//++++++++++++++Intresting++++++++++++++++++++++++
console.log(addone(5)) // --> easily run
function addone(num){
    return num+2
}
//addtwo(9)  --> gives error 
const addtwo = function(num){   //--> another method to create function
    return num-3
}
console.log(addtwo(5));
