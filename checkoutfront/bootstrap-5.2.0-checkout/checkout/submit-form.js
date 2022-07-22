const URL = "http://localhost:8085/v1/checkout/";


function compra() {
    var saveInfo = false;
    var sameAddress = false;
    const checkAddress = document.getElementById("same-address");
    if (checkAddress.checked) {
        sameAddress = true;
    }
    const checkInfo = document.getElementById("save-info");
    if (checkInfo.checked) {
        saveInfo = true;
    }
    var products = [
        document.getElementById("p1").innerHTML,
        document.getElementById("p2").innerHTML,
        document.getElementById("p3").innerHTML   
    ]
    compra = new Compra (
        c.firstName.value,
        c.lastName.value,
        c.email.value,
        c.address.value,
        c.complement.value,
        c.country.value,
        c.state.value,
        c.cep.value,
        sameAddress,
        saveInfo,
        c.paymentMethod.value,
        c.cardName.value,
        c.cardNumber.value,
        c.cardDate.value,
        c.cardCvv.value,
        products)
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(compra),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(resposta => resposta.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err))
}

function estados() {
    const ufBrasil = ["Santa Catarina", "Rio Grande do Sul", "Paraná"];
    const ufArgentina = ["Posadas", "Corrientes", "Mendoza"];
    const ufUruguai = ["Artigas", "Salto", "Rivera"]
    const pais = document.getElementById("country").value;
    const stateElemento = document.getElementById("state");
    while (stateElemento.lastChild) {
        stateElemento.lastChild.remove();
    }
    const selecione = document.createElement("option");
    selecione.value = "";
    selecione.innerHTML = "Selecione...";
    stateElemento.appendChild(selecione);
    if(pais == "Argentina") {
        for (let i = 0; i < ufArgentina.length; i++) {
            const uf = document.createElement("option");
            uf.value = ufArgentina[i];
            uf.innerHTML = ufArgentina[i];
            stateElemento.appendChild(uf);
        }
    } else if (pais == "Brasil") {
        for (let i = 0; i < ufArgentina.length; i++) {
            const uf = document.createElement("option");
            uf.value = ufBrasil[i];
            uf.innerHTML = ufBrasil[i];
            stateElemento.appendChild(uf);
        }
    } else if (pais == "Uruguai") {
        for (let i = 0; i < ufArgentina.length; i++) {
            const uf = document.createElement("option");
            uf.value = ufUruguai[i];
            uf.innerHTML = ufUruguai[i];
            stateElemento.appendChild(uf);
        }
    }
}