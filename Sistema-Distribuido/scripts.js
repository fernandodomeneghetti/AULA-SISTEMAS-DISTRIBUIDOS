const url = "http://localhost:3000";

async function searchProduct() {
    const searchTerm = document.getElementById("productSearch").value.toLowerCase();
    const response = await fetch(`${url}/api/products?name=${searchTerm}`);
    const result = await response.json();

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

async function reserveProduct() {
    const productName = document.getElementById("selectedProduct").innerText.split(": ")[1];
    const response = await fetch(`${url}/api/products?name=${productName}`);
    const product = await response.json();

    if (product) {
        const reserveResponse = await fetch('/api/reserve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: product.id })
        });
        const reserveResult = await reserveResponse.json();

        alert(reserveResult.message);
    }
}
