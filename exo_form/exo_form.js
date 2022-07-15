
function conca(){
    const nom = document.getElementsByName("nom").value;
    const prenom = document.getElementsByName("prenom").value;
    var conc = nom + prenom;
    document.getElementById("result") = conc;
}