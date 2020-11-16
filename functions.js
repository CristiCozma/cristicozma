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

function showElement(pageId) {
    hideAllPages();
    showPage(pageId);
}

function initMenu() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showElement(id);
        }
    });
}

initMenu();

showElement("skills");

var skills = [
    "HTML",
    "CSS",
    "JS"
];

var skillsLi = skills.map(function (skill) {
    return "<li>" + skill + "</li>";
});

//TODO add "favorite" skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");