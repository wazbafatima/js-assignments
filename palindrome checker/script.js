
   function checkPalindrome() {

    var Palindrome = document.getElementById("word").value;
    var result = document.getElementById("showresult");
    var flag = true;

    if (Palindrome.trim() === "") {
        result.innerHTML = " Please enter a word to check ❗";
        result.style.color = "darkorange"
        return;
    }
    

    for(var i=0; i<Palindrome.length/2 ; i++){
        console.log("comparing words" + Palindrome[i]  + "And" + Palindrome[Palindrome.length -1 -i])

        if(Palindrome[i] !=Palindrome[Palindrome.length -1 -i]){
            flag =false;
            break;
        }

    }
    if(flag){
       result.innerHTML  = " " + Palindrome  + " is a Palindrome ✅";
       result.style.color = "green"
    }
    else{
      result.innerHTML  = " " +  Palindrome + " is  not a Palindrome ❌";
      result.style.color = "red"}
       
   }


    
  











