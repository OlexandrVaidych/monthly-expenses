function calculateMonthlyExpense(){
    var foodPrice = parseFloat(document.getElementById("food").value)
    var internetPrice = parseFloat(document.getElementById("internet").value)
    var lightPrice = parseFloat(document.getElementById("light").value)
    var tariffPrice = parseFloat(document.getElementById("tariff").value)
    var houseRentPrice = parseFloat(document.getElementById("house").value)
    var clothesPrice = parseFloat(document.getElementById("clothes").value)
    var restPrice = parseFloat(document.getElementById("rest").value)

    monthlyExpense = foodPrice + internetPrice + lightPrice + tariffPrice + houseRentPrice + clothesPrice + restPrice
    
    const displayExpense = document.getElementById("expense")
    displayExpense.innerHTML = `Monthly Expense: ${monthlyExpense}`
    displayExpense.classList.add("expense")
}