
// calculate button
document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value)
    const software = parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value)
    const internet = parseFloat(document.getElementById('internet').value)

    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const totalExpenseElement = document.getElementById('total-expenses');
    totalExpenseElement.innerText = totalExpense

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance;
})


// calculate savings
document.getElementById('calculate-savings').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value)
    const software = parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value)
    const internet = parseFloat(document.getElementById('internet').value)

    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const savings = parseFloat(document.getElementById('savings').value);
    const savingsAmount = balance * savings / 100;

    const savingsAmountElement = document.getElementById('savings-amount');
    savingsAmountElement.innerText = savingsAmount;

    const remainingBalance = balance - savingsAmount;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance;
})