   function setnumber(num){
    var inputResult = document.getElementById("inputResult");
    var lastval = inputResult.value.slice(inputResult.value.length -1);

    var operator = ["+","*","-","/","%"];
    if(operator.indexOf(lastval) !== -1 && operator.indexOf(num) !== -1){
      // replace last operator with new one
      inputResult.value = inputResult.value.slice(0,-1) + num;
    }
    else{
      inputResult.value += num;
    }
  }

  function del(){
    var inputResult = document.getElementById("inputResult");
    inputResult.value = inputResult.value.slice(0,-1);
  }

  function clc(){
    var inputResult = document.getElementById("inputResult");
    inputResult.value = '';
  }

  function getResult(){
    var getResult = document.getElementById("inputResult");
    try {
      getResult.value = eval(getResult.value);
    } catch (e) {
      getResult.value = "Error";
    }
  }

