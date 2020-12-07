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

function getHTMLSkills(skills) {
    var skillsLi = skills.map(function (skill) {
        return `<li class="${skill.endorsements > 9 ? "favorite" : ""}">
         ${skill.name}  <span>&middot; ${skill.endorsements}</span>
         </li>`;
    });
    return skillsLi.join("");
}

function showSkills(skills) {
    var html = getHTMLSkills(skills);

    //TODO sort by endorsements
    var ul = document.querySelector("#skills ul");
    ul.innerHTML = html;
}

fetch("data/skills.json").then(function (r) {
    return r.json();
}).then(function (allSkills) {
    showSkills(allSkills);
});