

function calculateLoan()
{
    let loanAmount = document.getElementById("loan-amount").value;
    let interestAmount = document.getElementById("interest-rate").value;
    let monthsToPay = document.getElementById("months-to-pay").value;

    interest = (loanAmount * (interestAmount * 0.01) / monthsToPay);
    monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

    console.log(monthlyPayment)

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;

}

