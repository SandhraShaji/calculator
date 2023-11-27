function displayNumber(num){
    result.value+=num
}
function clearText(){
    result.value=""
}
function evaluateExpression(){
    result.value=eval(result.value)
}
function removeLastChar(){
    result.value=result.value.slice(0,-1)
}