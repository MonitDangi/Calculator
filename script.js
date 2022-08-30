"use strict"
var btn = document.getElementsByClassName("button");
var d = document.getElementById("dis");
var operand1=0;
var operand2=null;
var operator = null;

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value=='='){
            operand2 = parseFloat(d.textContent);
            if(operand2==0 && operator=='/'){
                d.innerText = "Invalid values"
            }
            else if(operator=='/'&&operand2 !="0"){
                d.innerText = operand1/operand2;
                value= operand1/operand2;
            }
            else if(operator=='+'){
                d.innerText = operand1+operand2;
                value= operand1+operand2;
            }
            else if(operator=='-'){
                d.innerText = operand1-operand2;
                value= operand1-operand2;
            }
            else if(operator=='*'){
                d.innerText = operand1*operand2;
                value= operand1*operand2;
            }
            else if(operator=='%'){
                d.innerText = operand1%operand2;
                value= operand1%operand2;
            }
            else if(operator=='!'){
                d.innerText = -value;
                value= -value;
            }
            else if(operator=='AC'){
                value=0;
            }


        }
        else if(value=='+'){
            operator = '+';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='AC'){
            operator = 'AC';
            d.innerText="";
        }
        else if(value=='-'){
            operator = '-';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='*'){
            operator = '*';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='/'){
            operator = '/';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='%'){
            operator = '%';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='*'){
            operator = '+';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='/'){
            operator = '/';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=='%'){
            operator = '%';
            operand1 = parseFloat(d.textContent);
            d.innerText = "";

        }
        else if(value=="!"){
            operator = '!';
            d.innerText = -1*parseFloat(d.textContent) ;
        }
        else{
            d.innerText += value;
        }
    });
}