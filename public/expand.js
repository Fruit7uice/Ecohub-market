// Toggles the visibility of a section with the ID "info-c".
// It does this by adjusting the height of the element
// with the ID "info-c" and changing the
// display property of the element with the ID "full-product". 
// Additionally, it attempts to rotate an element with the ID
// "expandIcon"(though the rotation might not work as intended,
// depending on the context).
var isExpanded;

function autoExpand() {
    // console.log("Autoexpand: ", isExpanded);

    if (isExpanded) { // Collapse
        expand(false)
    }
    else { // Expand
        expand(true);
    }
}

function expand(expand) {
    isExpanded = expand;
    const infoC = document.getElementById("info-c"); // Contatiner of button and  
    infoC.style.display = "flex";

    const fullP = document.getElementById("full-product");
    const expandIcon = document.getElementById("expandIcon");

    if (expand) {
        fullP.style.height = "400px";
        fullP.style.display = "grid";

        expandIcon.style.rotate = "180deg";
    }
    else {
        fullP.style.display = "none";
        fullP.style.height = "0px";

        expandIcon.style.rotate = "0deg";
    }
}

exports = {
    autoExpand,
    expand
}