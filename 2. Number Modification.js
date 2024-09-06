function numberModification(num) {
    num = num.toString();
  
    function calculate (number){
        let sum = 0;
        for (let i = 0; i<number.length; i++){
            sum += Number(number[i]);
        }
        return sum / number.length;
    }
    let avg  = calculate(num);

    while (avg<=5){
         num+=`9`;
         avg = calculate(num);
    }
    console.log(num);
    
}
numberModification(101);
