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

function showHome() {
    hide("skills");
    hide("projects");
    hide("languages");
    document.getElementById("home").style.display = "";
}

function showSkills() {
    hide("languages");
    hide("home");
    hide("projects");
    document.getElementById('skills').style.display = '';
}

function showProjects() {
    hide("skills");
    hide("languages");
    hide("home");
    document.getElementById("projects").style.display = "";
}

function showLanguages() {
    document.getElementById('projects').style.display = "none";
    document.getElementById('home').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById("languages").style.display = "";
}