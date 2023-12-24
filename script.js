// var lb_firstName = label("label","for","firstName","FirstName");
// var inp_firstName = input("input","type","text","id","firstName");
// var br1 = brk();

// var lb_lastName = label("label","for","lastName","LastName");
// var inp_lastName = input("input","type","text","id","lastName");
// var br2 = brk();

// var lb_Address = label("label","for","textarea","Address");
// var address = document.createElement("textarea");
// address.setAttribute("name","textarea");
// address.setAttribute("id","textarea");
// address.setAttribute("cols","50");
// address.setAttribute("rows","10");
// var br3 = brk();

// var lb_PinCode = label("label","for","PinCode","PinCode");
// var inp_PinCode = input("input","type","number","id","PinCode");
// var br4 = brk();

// var lb_Gender = label("label","for","Gender","Gender");
// var lb_Male = label("label","for","Male","Male");
// var inp_Male = input("input","type","radio","id","Male");
// var lb_Female = label("label","for","Female","Female");
// var inp_Female = input("input","type","radio","id","Female");
// var br5 = brk();

// var lb_State = label("label","for","State","State");
// var inp_State = input("input","type","text","id","State");
// var br6 = brk();

// var lb_Country = label("label","for","Country","Country");
// var inp_Country = input("input","type","text","id","Country");
// var br7 = brk();

// var inp_button = label("button","type","button","Submit");
// var br8 = brk();


// var form = document.createElement("form");
// var divF = divCreation("firtName",lb_firstName,inp_firstName)
// var divL = divCreation("lastName",lb_lastName,inp_lastName)
// var divA = divCreation("address",lb_Address,address)
// var divP = divCreation("pinCode",lb_PinCode,inp_PinCode)
// var divG = divCreation("gender",lb_Gender,lb_Male,inp_Male,lb_Female,inp_Female)
// var divS = divCreation("state",lb_State,inp_State)
// var divC = divCreation("country",lb_Country,inp_Country)
// var divB = divCreation("submit",inp_button)

// form.append(
//     divF,br1,
//     divL,br2,
//     divA,br3,
//     divP,br4,
//     divG,br5,
//     divS,br6,
//     divC,br7,
//     divB,br8
// );

// document.body.append(form);

// function label(tag,label_type,label_type_value,label_inner){
//     var lb = document.createElement(tag);
//     lb.setAttribute(label_type,label_type_value);
//     lb.id = label_type_value;
//     lb.innerHTML = label_inner;
//     return lb;
// }

// function input(tag, input_type, input_type_value,input_id,input_id_value){
//     var inp = document.createElement(tag);
//     inp.setAttribute(input_type,input_type_value);
//     inp.setAttribute(input_id,input_id_value);
//     return inp;
// }

// function brk(){
//     var br = document.createElement("br");
//     return br;
// }

// function divCreation(...r){
//     var div = document.createElement("div");
//     div.className = r[0];
//     for(let i=1;i<r.length;i++){
//         div.append(r[i]);
//     }
//     return div;
// }

