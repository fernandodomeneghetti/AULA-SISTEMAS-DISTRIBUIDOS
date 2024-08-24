const products = [
    { id: 1, name: "Produto A", available: true },
    { id: 2, name: "Produto B", available: false },
    { id: 3, name: "Produto C", available: true },
];

function searchProduct() {
    const searchTerm = document.getElementById("productSearch").value.toLowerCase();
    const result = products.find(product => product.name.toLowerCase() === searchTerm);

    const productResult = document.getElementById("productResult");
    const reservationSection = document.getElementById("reservationSection");

    if (result) {
        productResult.innerHTML = `<p>Produto encontrado: <strong>${result.name}</strong></p>`;
        if (result.available) {
            document.getElementById("selectedProduct").innerText = `Produto Selecionado: ${result.name}`;
            reservationSection.style.display = "block";
        } else {
            productResult.innerHTML += `<p style="color:red;">Produto indisponível para reserva.</p>`;
            reservationSection.style.display = "none";
        }
    } else {
        productResult.innerHTML = `<p style="color:red;">Produto não encontrado.</p>`;
        reservationSection.style.display = "none";
    }
}

function reserveProduct() {
    alert("Produto reservado com sucesso!");
}
