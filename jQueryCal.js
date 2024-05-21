

let resultField = $("#result-field");

const insertNumber = (num) => 
{
    let existingNum = resultField.val();
    resultField.val(existingNum + num);
}

const clear_result = () => 
{
    resultField.val("");
}

const calculate = () => 
{
    let result = eval(resultField.val());
    resultField.val(result);
}

const delete_number = () => 
{
    let presentValue = resultField.val()
    if (presentValue != "") {
        resultField.val(resultField.val().slice(0, -1))
    }
}