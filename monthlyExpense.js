function calculateMonthlyExpense(){
    const foodPrice = parseFloat(document.getElementById("food").value)
    const internetPrice = parseFloat(document.getElementById("internet").value)
    const lightPrice = parseFloat(document.getElementById("light").value)
    const tariffPrice = parseFloat(document.getElementById("tariff").value)
    const houseRentPrice = parseFloat(document.getElementById("house").value)
    const clothesPrice = parseFloat(document.getElementById("clothes").value)
    const restPrice = parseFloat(document.getElementById("rest").value)

    monthlyExpense = foodPrice + internetPrice + lightPrice + tariffPrice + houseRentPrice + clothesPrice + restPrice
    
    const displayExpense = document.getElementById("expense")
    displayExpense.innerHTML = `Monthly Expense: ${monthlyExpense}`
    displayExpense.classList.add("expense")
}