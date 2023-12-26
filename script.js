var button = document.getElementsByName("submit");
button[0].setAttribute("onclick","foo()")
var firstName = document.getElementById("firtName");
var lastName = document.getElementById("lastName");
var inputAddress = document.getElementById("inputAddress");
var radioButton = document.getElementsByName("inlineRadioOptions");
var choiceOfFood = document.getElementById("choiceOfFood");
var inputCountry = document.getElementById("inputCountry");
var inputState = document.getElementById("inputState");
var inputpinCode = document.getElementById("inputpinCode");


function validateEntry(){
    if(firstName.value!="" && lastName.value!="" && inputAddress.value!="" &&
    checkRadio(radioButton) && checkSelected(choiceOfFood) && inputCountry.value!="" 
    && inputState.value!="" && inputpinCode.value!=""
    ){
        return true;
    }
    alert("fill all the values");
    return false;
}

function foo(){
    if(validateEntry()){
        document.getElementById("table").append(createRow(
            firstName,lastName,inputAddress,radioButton,
            choiceOfFood,inputCountry,inputState,inputpinCode
        ))
        clearAll();
    }
}


function createRow(
    firstName,lastName,inputAddress,radioButton,
    choiceOfFood,inputCountry,inputState,inputpinCode
){
    var tdF = createTableData(firstName);
    tdF.setAttribute("class","col-md-2 text-center");
    tdF.setAttribute("scope","col");
    var tdL = createTableData(lastName);
    tdL.setAttribute("class","col-md-2 text-center");
    tdL.setAttribute("scope","col");
    var tdA = createTableData(inputAddress);
    tdA.setAttribute("scope","col");
    tdA.setAttribute("class","col-md-2 text-center");
    var tdR = getRadioValue(radioButton);
    tdR.setAttribute("class","col-md-1 text-center");
    tdR.setAttribute("scope","col");
    var tdO = getChoiceOfFood(choiceOfFood);
    tdO.setAttribute("class","col-md-2 text-center");
    tdF.setAttribute("scope","col");
    var tdC = createTableData(inputCountry);
    tdC.setAttribute("class","col-md-1 text-center");
    tdC.setAttribute("scope","col");
    var tdS = createTableData(inputState);
    tdS.setAttribute("class","col-md-1 text-center");
    tdS.setAttribute("scope","col");
    var tdP = createTableData(inputpinCode);
    tdP.setAttribute("class","col-md-1 text-center");
    tdP.setAttribute("scope","col");
    var tr = document.createElement("tr");
    tr.setAttribute("class","row");
    tr.append(tdF,tdL,tdA,tdR,tdO,tdC,tdS,tdP);
    var tbody = document.getElementById("tbody")
    tbody.append(tr);
    return tbody;
}

function createTableData(data){
    var td = document.createElement("td");
    td.innerHTML = data.value;
    return td;
}

function getRadioValue(radios){
    var td = document.createElement("td");
    for(let a of radios){
        if(a.checked){
            td.innerHTML = a.value;
            return td;
        }
    }
    return td;
}

function getChoiceOfFood(food){
    var td = document.createElement("td");
    let str = [];
    for(let a of food.options){
        if(a.selected){
            str.push(a.value);
        }
    }
    td.innerHTML = str.join(",");
    return td;
}

function edd(){
    alert("Fill all the value and Choose atleast 2 food to enable submit button")
}

function checkRadio(radios){
    for(let a of radios){
        if(a.checked){
            return true;
        }
    }
    return false;
}

function checkSelected(food){
    let count = 0;
    for(let a of food.options){
        if(a.selected){
            ++count;
        }
    }
    if(count>=2){
        return true;
    }
    return false;
}

function clearAll(){
    firstName.value = "";
    lastName.value = "";
    inputAddress.value = "";
    inputCountry.value = "";
    inputState.value = "";
    inputpinCode.value = "";
    for(let a of radioButton){
        a.checked = false;
    }
    for(let a of choiceOfFood.options){
        a.selected = false;
    }
}