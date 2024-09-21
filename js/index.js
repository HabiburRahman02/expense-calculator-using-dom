
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

    const results = document.getElementById('results');
    results.classList.remove('hidden')

    // history
    const historyContainer = document.getElementById('history-container');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div class="bg-white p-2 rounded-lg border-l-2 border-blue-500">
            <p>${new Date().toLocaleTimeString()}</p>
            <p>Income: ${income.toFixed(2)}</p>
            <p>Expense: ${totalExpense.toFixed(2)}</p>
            <p>Balance: ${balance.toFixed(2)}</p>
        </div>
    `
    historyContainer.appendChild(newDiv)

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

// history tab
const historySection = document.getElementById('history-section');
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.add('text-gray-700', 'font-semibold');

    // when click history then remove expense form
    document.getElementById('expense-form').classList.add('hidden')

    historySection.classList.remove('hidden')
})


// assistant tab
assistantTab.addEventListener('click', function () {
    historyTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historyTab.classList.add('text-gray-700', 'font-semibold')

    // when click assistant then add expense form
    document.getElementById('expense-form').classList.remove('hidden')

    historySection.classList.add('hidden')
})