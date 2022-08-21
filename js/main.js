document.getElementById('calculate').addEventListener('click',function(){
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const cloth = document.getElementById('clothes').value;

    const totalCost = parseInt(food) + parseInt(rent) + parseInt(cloth);
    const balanceRemaining = parseInt(income) - totalCost;

    document.getElementById('totalExpenses').innerHTML = totalCost;
    document.getElementById('balance').innerHTML = balanceRemaining;

})

document.getElementById('savingBtn').addEventListener('click', ()=>{
    const balance = document.getElementById('income').value;
    const percent = document.getElementById('percent').value;
    const balanceRemaining = document.getElementById('balance').innerHTML; 

    if (parseFloat(percent) > 0 && parseFloat(percent) <= 100){
        const saving = parseFloat(balance) - ((parseFloat(balance) / 100) * percent);
        const yourSaving = balance - saving;
        document.getElementById('savingAccount').innerHTML = yourSaving;
        document.getElementById('remainingBalance').innerHTML = parseFloat(balanceRemaining) - yourSaving;
    }
    else{
        alert('Enter a valid number')
    }
})

document.getElementById('parent').addEventListener('click', (event) => {
    event.target.value = '';
})