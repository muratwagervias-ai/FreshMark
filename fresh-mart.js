 let count = 0;
let totalAmount = 0;

document.getElementById("itemSelect").addEventListener("change", function () {
    let selected = this.options[this.selectedIndex];
    let price = selected.getAttribute("data-price");

    document.getElementById("price").value = price;
});

function addItem() {
    let itemSelect = document.getElementById("itemSelect");
    let itemName = itemSelect.value;
    let price = parseInt(document.getElementById("price").value);
    let qty = parseInt(document.getElementById("quantity").value);

    if (itemName === "" || qty <= 0) {
        alert("Hitamo item cyangwa quantity nyayo!");
        return;
    }

    let itemTotal = price * qty;
    totalAmount += itemTotal;
    count++;

    let row = `
        <tr>
            <td>${count}</td>
            <td>${itemName}</td>
            <td>${price}</td>
            <td>${qty}</td>
            <td>${itemTotal}</td>
        </tr>
    `;

    document.getElementById("billBody").innerHTML += row;

    document.getElementById("totalAmount").innerText = totalAmount;
 
    let emptyRow = document.querySelector(".empty-row");
    if (emptyRow) {
        emptyRow.remove();
    }
}

function clearAll() {
    document.getElementById("billBody").innerHTML = `
        <tr class="empty-row">
            <td colspan="5" class="empty">🛒 No items added yet.</td>
        </tr>
    `;

    document.getElementById("totalAmount").innerText = 0;
    document.getElementById("change").innerText = 0;
    document.getElementById("amountPaid").value = 0;

    count = 0;
    totalAmount = 0;
}

document.getElementById("amountPaid").addEventListener("input", function () {
    let paid = parseInt(this.value) || 0;
    let change = paid - totalAmount;

    document.getElementById("change").innerText = change;
});