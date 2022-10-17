const a = document.getElementById("profile-section");
const b = document.getElementById("about-section");
const c = document.getElementById("contact-section");
const d = document.getElementById("skills-section");

function profile() {
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    if (a.style.display === 'none') {
        a.style.display = 'block';
    } else {
        a.style.display = 'none';
    }
}

function about() {
    a.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    if (b.style.display === 'none') {
        b.style.display = 'block';
    } else {
        b.style.display = 'none';
    }
}

function contact() {
    b.style.display = 'none';
    a.style.display = 'none';
    d.style.display = 'none';
    if (c.style.display === 'none') {
        c.style.display = 'block';
    } else {
        c.style.display = 'none';
    }
}

function skills() {
    b.style.display = 'none';
    c.style.display = 'none';
    a.style.display = 'none';
    if (d.style.display === 'none') {
        d.style.display = 'block';
    } else {
        d.style.display = 'none';
    }
}

