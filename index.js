console.log("Acessou")
// alert("Bem vindo")

const h2Name = document.createElement("h2")

h2Name.innerText = "Texto h2"
document.getElementById("app").appendChild(h2Name)

const iptName = document.getElementById("iptName");

function showName() {
    console.log(iptName.value)
    h2Name.innerText = iptName.value;

}