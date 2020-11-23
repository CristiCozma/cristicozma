var activePage = "skills";

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


function hidePreviousPage() {
    hide(activePage);
}

function showElement(pageId) {
    //hideAllPages();
    hidePreviousPage();
    showPage(pageId);
    activePage = pageId;
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

showElement(activePage);

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