function KilometerToMeter(distance)
{
    var convert=distance*1000;
    return convert;

}
var result=KilometerToMeter(50);
console.log(result);


//budgetCalculator//
function budgetCalculator(watch,phone,laptop)

{
    var watchQuantity=watch*50;
    var phoneQuantity=phone*100;
    var laptopQuantity=laptop*500;
    return watchQuantity ,phoneQuantity, laptopQuantity;;
    
  
}

var total=budgetCalculator(5,10,15);
console.log(total);

//hotelCost//
function hotelCost(days){
    var cost=0;
    if(days<=10)
    {
        cost=days*100;
    }
   else  if(days<=20){
        var firstTen=10*100;
        var remaining=days-10;
        var secondTen=remaining*80;
         cost=firstTen+secondTen;
 }

   else{
        firstTen=10*100;
        secondTen=10*80;
        remaining=days-20;
       var thirdPortion=remaining*50;
        cost=firstTen+secondTen+thirdPortion;
   }
   return cost;
}
var total=hotelCost(18);
console.log(total);


function megaFriend(names){
    var max=[0];
    for(var i=0;i<names.length;i++){
         var string=names[i];
         if(string.length>max.length){
             max=string;
         }
    }
    return max;
}
var names=['salam','doly','jui','farhana','shumi','asadnurjaved'];
var biggest=megaFriend(names);
console.log(biggest);