//document.getElementById('titre').textContent = "Rick Astley - Never Gonna Give You Up";
document.body.firstElementChild.innerHTML = "Rick Astley - Never Gonna Give You Up";
const couplets = document.getElementsByClassName("couplet");

for (let i=0; i < couplets.length; i++) {


    // faire le if ...

    // suppression du texte
    couplets[i].removeChild(couplets[i].firstChild);
    // supression de la balise br
    couplets[i].removeChild(couplets[i].firstElementChild);
}
