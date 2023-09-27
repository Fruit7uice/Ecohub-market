
var expanded = false;
function expandInfo() {
    const infoC = document.getElementById("info-c");
    const fullP = document.getElementById("full-product");
    const expandIcon = document.getElementById("expandIcon");
    

    if(expanded){ // Collapse
        infoC.style.height = "50px";
        fullP.style.display = "none";
        expandIcon.style.rotate = "0deg";
    }
    else{ // Expand
        infoC.style.height = "500px";
        fullP.style.display = "contents";
        expandIcon.style.rotate = "180deg";

    }
    expanded = !expanded;

}