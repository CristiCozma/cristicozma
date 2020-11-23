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

function show(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "";
    } else {
        console.error("elementul nu exista", id)
    }
}

function hidePreviousPage() {
    hide(activePage);
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(pageId) {
    //hideAllPages();
    hidePreviousPage();
    show(pageId);
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-page");
            showPage(id);
        }
    });
}

initMenu();

showPage(activePage);

var skills = [
    { name: "HTML", endorsements: 15 },
    { name: "CSS", endorsements: 5 },
    { name: "JS", endorsements: 21 }
];
var skillsLi = skills.map(function (skill) {
    var endorsements = ` <span>&middot; ${skill.endorsements}</span>`;
    return "<li>" + skill.name + endorsements + "</li>";
});

//TODO add "favorite" skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");