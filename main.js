  

    



let kataOne=[]
for(let i= 0;i <20;i++){
  kataOne.push(i)
  
}

console.log(kataOne)

let kataOne_heading = document.createElement('h3')//create it 
let kataOne_text = document.createTextNode("Kata 1: "+ ' '+ kataOne)//fill it
kataOne_heading.appendChild(kataOne_text)
document.body.append(kataOne_heading)


let kataTwo=[]
for(let i= 2;i <= 20; i += 2)
{
  kataTwo.push(i)
  
}

let kataTwo_heading = document.createElement('h3')//create it 
let kataTwo_text = document.createTextNode("Kata 2: "+ ' '+ kataTwo)//fill it
kataTwo_heading.appendChild(kataTwo_text)
document.body.append(kataTwo_heading)

console.log(kataTwo)



let kataThree=[]
for(let i= 1;i <= 19; i += 2)
{
  kataThree.push(i)
  
}


let kataThree_heading = document.createElement('h3')//create it 
let kataThree_text = document.createTextNode("Kata 3: "+ ' '+ kataThree)//fill it
kataThree_heading.appendChild(kataThree_text)
document.body.append(kataThree_heading)


let kataFour=[]
for(let i= 5;i <= 100; i += 5)
{
    kataFour.push(i)
  
}


let kataFour_heading = document.createElement('h3')//create it 
let kataFour_text = document.createTextNode("Kata 4: "+ ' '+ kataFour)//fill it
kataFour_heading.appendChild(kataFour_text)
document.body.append(kataFour_heading)


let kataFive=[]
for(let i= 1;i <= 10; i ++)
{
    kataFive.push((i * i))
  
}


let kataFive_heading = document.createElement('h3')//create it 
let kataFive_text = document.createTextNode("Kata 5: "+ ' '+ kataFive)//fill it
kataFive_heading.appendChild(kataFive_text)
document.body.append(kataFive_heading)


let kataSix =[]
for(let i= 20;i > 0; i --)
{  kataSix.push(i)
}


let  kataSix_heading = document.createElement('h3')//create it 
let  kataSix_text = document.createTextNode("Kata 6: "+ ' '+  kataSix)//fill it
kataSix_heading.appendChild( kataSix_text)
document.body.append(kataSix_heading)


let kataSeven =[]
for(let i= 20;i > 0; i = i- 2)
{  kataSeven.push(i)
}


let  kataSeven_heading = document.createElement('h3')//create it 
let  kataSeven_text = document.createTextNode("Kata 7: "+ ' '+  kataSeven)//fill it
kataSeven_heading.appendChild( kataSeven_text)
document.body.append(kataSeven_heading)


let kataEight =[]
for(let i= 19;i > 0; i = i- 2)
{   kataEight.push(i)
}


let   kataEight_heading = document.createElement('h3')//create it 
let   kataEight_text = document.createTextNode("Kata 8: "+ ' '+   kataEight)//fill it
kataEight_heading.appendChild(  kataEight_text)
document.body.append( kataEight_heading)

//Kata 9

let kataNine =[]
for(let i= 100 ;i >= 5;  i = i - 5)
{   kataNine.push(i)
}


let   kataNine_heading = document.createElement('h3')//create it 
let   kataNine_text = document.createTextNode("Kata 9: "+ ' '+   kataNine)//fill it
kataNine_heading.appendChild(  kataNine_text)
document.body.append( kataNine_heading)

//Kata 10

let kataTen =[]
for(let i= 10;i >= 1; i --)
{
    kataTen.push((i * i))
  
}

let   kataTen_heading = document.createElement('h3')//create it 
let   kataTen_text = document.createTextNode("Kata 10: "+ ' '+   kataTen)//fill it
kataTen_heading.appendChild(   kataTen_text)
document.body.append( kataTen_heading)



  
//Kata 11

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

let   kataEleven_heading = document.createElement('h3')//create it 
let   kataEleven_text = document.createTextNode("Kata 11: "+ ' '+    sampleArray)//fill it
kataEleven_heading.appendChild( kataEleven_text)
document.body.append(kataEleven_heading)


/* Kata 12
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
 if( value % 2 == 0){
    kataTwelve.push(value)
 }
let  kataTwelve_heading = document.createElement('h3')//create it 
let    kataTwelve_text = document.createTextNode("Kata 12: "+ ' '+  kataTwelve)//fill it
kataTwelve_heading.appendChild(kataTwelve_text)
document.body.append( kataTwelve_heading)
*/

/* Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
Display the square of each element in sampleArray. (219961, 570025, …, 222784)
Display the sum of all the numbers from 1 to 20.
Display the sum of all the elements in sampleArray.
Display the smallest element in sampleArray.
Display the largest element in sampleArray.*/

//Kata12
//This is Dylans code I do not understand it YET***
let kataTwelve = []
sampleArray.forEach(value => {
   if(value % 2 == 0)
      kataTwelve.push(value)
})

let  kataTwelve_heading = document.createElement('h3')//create it 
let   kataTwelve_text = document.createTextNode("Kata 12: "+ ' '+    sampleArray)//fill it
kataTwelve_heading.appendChild( kataTwelve_text)
document.body.append(kataTwelve_heading)


//Kata 13



let   kataThirteen_heading = document.createElement('h3')//create it 
let   kataThirteen_text = document.createTextNode("Kata 13: "+ ' '+    sampleArray)//fill it
kataThirteen_heading.appendChild( kataThirteen_text)
document.body.append(kataThirteen_heading)



let kataFourteenArray =[]

for (let i = 0; i < sampleArray.length; i++) {
    kataFourteenArray.push(sampleArray[i]*sampleArray[i])
}

let   kataFourTeen_heading = document.createElement('h3')//create it 
let   kataFourTeen_text = document.createTextNode("Kata 14: "+ ' '+    kataFourteenArray)//fill it
kataFourTeen_heading.appendChild(kataFourTeen_text)
document.body.append(kataFourTeen_heading)



    let kataFifteen = 0
for(let i = 1; i <= 20; i++) {
    kataFifteen += i
}

 


let   kataFifteen_heading = document.createElement('h3') 
let   kataFifteen_text = document.createTextNode("Kata 15: "+ ' '+   kataFifteen)
kataFifteen_heading.appendChild(kataFifteen_text)
document.body.append(kataFifteen_heading)



//Kata 16
//This was mostly Nicole that helped me. She showed me her code and I was able to sort out the logic

let kataSixTeen = 0
for (let counter16 = 0; counter16 <sampleArray.length;counter16 +=1){
    kataSixTeen += sampleArray[counter16]
}

 
let  kataSixTeen_heading = document.createElement('h3') 
let   kataSixTeen_text = document.createTextNode("Kata 16: "+ ' '+  kataSixTeen)
kataSixTeen_heading.appendChild(kataSixTeen_text)
document.body.append(kataSixTeen_heading)



//kata 17

let KataSeventeen = sampleArray[0]


  for (let i =1; i < sampleArray.length; i++){
      if(sampleArray[i]< KataSeventeen){
        KataSeventeen =sampleArray[i]
      //} else if ( sampleArray[i]< KataSeventeenChisai){
        //KataSeventeenChisai = sampleArray [i]
      }
  }

  console.log(KataSeventeen)

let  KataSeventeen_heading = document.createElement('h3') 
let  KataSeventeen_text = document.createTextNode("Kata 17: "+ ' '+  KataSeventeen)
KataSeventeen_heading.appendChild(KataSeventeen_text)
document.body.append(KataSeventeen_heading)



//kata 18


let KataSeventeenOki = sampleArray [0]


  for (let i =1; i < sampleArray.length; i++){
      if(sampleArray[i]> KataSeventeenOki){
        KataSeventeenOki =sampleArray[i]
      //} else if ( sampleArray[i]< KataSeventeenChisai){
        //KataSeventeenChisai = sampleArray [i]
      }
  }

  console.log(KataSeventeenOki)
  //console.log(KataSeventeenChisai)


    

let  KataSeventeenOki_heading = document.createElement('h3') 
let  KataSeventeenOki_text = document.createTextNode("Kata 18 : "+ ' '+  KataSeventeenOki)
KataSeventeenOki_heading.appendChild(KataSeventeenOki_text)
document.body.append(KataSeventeenOki_heading)


 


  
/*var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }

  
}

console.log(largest);
  console.log(smallest); 




//Katat 18

let KataSeventeenOki = sampleArray [0]


  for (let i =1; i < sampleArray.length; i++){
      if(sampleArray[i]> KataSeventeenOki){
        KataSeventeenOki =sampleArray[i]
      //} else if ( sampleArray[i]< KataSeventeenChisai){
        //KataSeventeenChisai = sampleArray [i]
      }
  }

  console.log(KataSeventeenOki)
  //console.log(KataSeventeenChisai)


    

let  KataSeventeenOki_heading = document.createElement('h3') 
let  KataSeventeenOki_text = document.createTextNode("Kata 18: "+ ' '+  KataSeventeenOki)
KataSeventeenOki_heading.appendChild(KataSeventeenOki_text)
document.body.append(KataSeventeenOki_heading)


 


  
var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }

  
}

console.log(largest);
  console.log(smallest); 
  //this is from stack overflow it works and I do not understand why

  /*let KataSeventeenOki = sampleArray [0]
  let KataSeventeenChisai = sampleArray [0]

  for (let i =1; i < sampleArray.length; i++){
      if(sampleArray[i]> KataSeventeenOki){
        KataSeventeenOki =sampleArray[i]
      } else if ( sampleArray[i]< KataSeventeenChisai){
        KataSeventeenChisai = sampleArray [i]
      }
  }

  console.log(KataSeventeenOki)
  console.log(KataSeventeenChisai)*/