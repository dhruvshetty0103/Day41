function checkLeapYear(year){
    if((year%4==0)&&(0!=year%100)||(year%400==0))
        console.log(year+" is leap year");   
    else
        console.log(year+" is not a leap year");
}
checkLeapYear(2000);