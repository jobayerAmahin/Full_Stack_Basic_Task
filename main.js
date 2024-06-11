//Harj 1
const product= {
    otsikko:"Kynä",
    hinta: 2,
    luokitus: 4,
    tarjous: "6%",
};
console.log(product);

//Harj 2
const instaUser= {
    henkilö:"General",
    seuraajat: 276,
    aktiivi: true,
};
console.log(product);

//Haj 3
let inp=prompt("Input a number: ");
let grade;

if(80<=inp<=100){
    grade="Pass With High";
}else if(40<=inp<=79){
    grade="Pass With Medium";
}else{
    grade="Fail";
}
console.log("Your grade is: ", grade);

let size=0;
for(let i of grade){
    console.log(i);
    size++
}
console.log("Total Characters: ", size)

//Harj 4
let givenNum=7;
let i=prompt("Provide your first number: ")
while(i!=givenNum){
    i=prompt("Give the correct number: ");
}
console.log("Congratulations1")

//Harj 5
let opiskelija={
    nimi:"Mahin",
    taso: "A2",
    koulu: "Taitotalo",
    tavoite:"B1",
}
let out=`Hän on uusi opiskelija nimi on ${opiskelija.nimi}`
console.log(out);
out=out.toUpperCase(); //sama toLowerCase tai toTrim
console.log(out);