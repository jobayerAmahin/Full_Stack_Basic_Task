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

let käyttäjätunnus= "@"+opiskelija.nimi+ out.length;
console.log("Hänen käyttäjätunnus on ", käyttäjätunnus);

//Harj 6

let hinta=[110,220,330,440,550,660,770,880,990];

for(let val in hinta){
    hinta[val]=hinta[val]-(hinta[val]*0.1);
    console.log(hinta[val])
}
console.log(hinta)

//Harj 7

let yritys=["abb", "vtt", "trr", "kone", "keosera"];

yritys.shift();
yritys.pop();

yritys.splice(2,1,"lahitaksi");
console.log(yritys);

//Hatj 8

let mulFun=(a,b)=>{
    m=a*b;
    return m;
}
console.log(mulFun(3,4));

const prt=()=>{
    console.log("Blank parantheses");
}

function isVowel(str){ //Ei toimi
    let ct=0;
    for (let val in str){
        if (val==="a"|| val==="e"|| val==="i"|| val==="o"|| val==="u"){
            ct++;
        }
    }
    console.log(ct);
}
isVowel("oscar");

//Harj 9
ikaiset=[9,10,11,12,15];
ikaiset.forEach((val) => {
    console.log(val**2);
});

let uusiIka=ikaiset.map((val)=>{
    return val+1;
});
console.log(uusiIka);

let eriIka1=ikaiset.filter((val)=>{
    return val>10;
});
console.log(eriIka1);

let eriIka2=ikaiset.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(eriIka2);