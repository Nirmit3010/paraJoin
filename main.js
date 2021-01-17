function submit() {
var inputs=[];
for (let i = 1; i <= 6; i++) {
    inputs.push(document.getElementById("n"+i).value);
}
inputs.join(". ");
document.getElementById("display1").innerHTML=inputs.join(". "); 
}
function para() {
    var input=[];
    for (let i = 1; i <= 6; i++) {
        input.push(document.getElementById("i"+i).value);
    }
    input.join(". ");
    document.getElementById("display2").innerHTML=input.join(". "); 
    }