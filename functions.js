function hide(id) {
    //document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    console.info("hide:" + id, el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista", id);
    }
}

function showPage(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "";
    } else
        console.error("elementul nu exista", id)
}

function hideAllPages() {
    hide("home");
    hide("skills");
    hide("projects");
    hide("languages");

    var pages = document.querySelectorAll(".page");
    //for(initializare; conditie; post execute)
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var id = page.id;
        console.info("i=", i, id, page);
        hide(id);
    }
}

function showHome() {
    hideAllPages();
    showPage("home");
}

function showSkills() {
    hideAllPages();
    showPage("skills");
}

function showProjects() {
    hideAllPages();
    showPage("projects");
}

function showLanguages() {
    hideAllPages();
    showPage("languages");
}