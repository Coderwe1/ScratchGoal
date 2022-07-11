

function btn(){
    let input = document.getElementById("numpost").value;
    let day = document.getElementById("day").value;
    let goal = document.getElementById("goal").value;
       
    let d= goal- input;

    let s= Math.round(d/day);
    

    if(input===""){
        document.getElementById("answer").innerHTML="Error:(";
        return;
    }



    if(input>goal){
        document.getElementById("answer").innerHTML="Impossible!";
        return;
    }

    if(s>1){
        document.getElementById("answer").innerHTML="It will take " + s + " days to get to the goal of " +goal + " forum posts!";

    }else{
        document.getElementById("answer").innerHTML="It will take you less then a day to get to the goal of " +goal + " forum posts!";

    }

    
}
