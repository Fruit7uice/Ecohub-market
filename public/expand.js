
// Toggles the visibility of a section with the ID "info-c".
// It does this by adjusting the height of the element
// with the ID "info-c" and changing the
// display property of the element with the ID "full-product". 
// Additionally, it attempts to rotate an element with the ID
// "expandIcon"(though the rotation might not work as intended,
// depending on the context).
var expanded = false;
function expandInfo() {
    const infoC = document.getElementById("info-c");
    const fullP = document.getElementById("full-product");
    const expandIcon = document.getElementById("expandIcon");


    if (expanded) { // Collapse
        infoC.style.height = "50px";
        fullP.style.display = "none";
        expandIcon.style.rotate = "0deg";
    }
    else { // Expand
        infoC.style.height = "500px";
        fullP.style.display = "grid";
        expandIcon.style.rotate = "180deg";

    }
    expanded = !expanded;

}