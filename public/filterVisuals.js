
var expanded = false;
var childVisibility;

function expandCollapseFilter() {
    const dropD = document.getElementById("filter-dd");
    var children = dropD.children;

    if (expanded) { // collapse
        // dropD.style.visibility = "hidden";
        dropD.style.display = "none"
        childVisibility = "hidden";
    }
    else { // extend
        // dropD.style.visibility = "visible";
        dropD.style.display = "flex"
        childVisibility = "visible";
    }

    // for (var i = 0; i < children.length; i++) {
    //     children[i].style.visibility = childVisibility; // Replace property and value with the desired style
    // }

    expanded = !expanded;
}



