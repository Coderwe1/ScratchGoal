

function btn(){
    let input = document.getElementById("numpost").value;
    let day = document.getElementById("day").value;
    let goal = document.getElementById("goal").value;
       
    let d= goal- input;

    let s=d/day;
    
    if(input>goal){
        document.getElementById("answer").innerHTML="Make sure goal is bigger than input";
        return;
    }

    
    document.getElementById("answer").innerHTML="It will take " + s + " days to get to the goal of " +goal + " posts";

    
}