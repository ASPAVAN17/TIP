function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers');
        return;
    }

    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;

    document.getElementById('totalAmount').innerText = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}
