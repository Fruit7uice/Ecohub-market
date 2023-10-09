
// Toggles the visibility of a section with the ID "info-c".
// It does this by adjusting the height of the element
// with the ID "info-c" and changing the
// display property of the element with the ID "full-product". 
// Additionally, it attempts to rotate an element with the ID
// "expandIcon"(though the rotation might not work as intended,
// depending on the context).
var isExpanded;





function autoExpand() {
    console.log("Autoexpand: ", isExpanded);

    if (isExpanded) { // Collapse
        expand(false)
    }
    else { // Expand
        expand(true);
    }
    
    // isExpanded == !isExpanded;
    // console.log("Autoexpand Changed: ", isExpanded);

}

function expand(expand) {
    isExpanded = expand;
    // console.log("Expand fun", isExpanded);
    const infoC = document.getElementById("info-c");
    const sellerC = document.getElementById("seller-info");
    infoC.style.display = "flex";
    const fullP = document.getElementById("full-product");
    const expandIcon = document.getElementById("expandIcon");

    if (expand) {
        // sellerC.style.height = "500px";
        fullP.style.display = "grid";
        expandIcon.style.rotate = "180deg";
        sellerC.style.transition ="0.5s";
    }
    else {
        // sellerC.style.height = "20px";
        fullP.style.display = "none";
        expandIcon.style.rotate = "0deg";
    }

}


exports = {
    autoExpand,
    expand
}