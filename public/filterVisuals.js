var expanded = false;
var childVisibility;

function expandCollapseFilter() {
    const dropD = document.getElementById("filter-dd");
    
    if (expanded) { // collapse
        dropD.style.display = "none"
        childVisibility = "hidden";
    }
    else { // extend
        dropD.style.display = "flex"
        childVisibility = "visible";
    }
    expanded = !expanded;
}