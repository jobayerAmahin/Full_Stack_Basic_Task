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

//Harj 10

let n=prompt("Anna Numero: ");
let arr=[];
for (let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let uusiArr=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(uusiArr);

//Harj 11

let domTest= document.querySelector("div");
console.dir(domTest);

let uLau1=document.querySelector("h1");
uLau1.innerText=uLau1.innerText+"Luokka Numero 7";

let divs=document.querySelectorAll(".wd");
divs[0].innerText="Jim 15";
divs[1].innerText="Fahad 25";
divs[2].innerText="Tauhid 03";
divs[3].innerText="Siam 105";

let idx=0;
for(div of divs){
    div.innerText=div.innerText+`myös ${idx}`;
    idx++;
}

//Harj 12
let att=document.querySelector("p");
let attN=att.getAttribute("id");
console.log(attN);
console.log(att.setAttribute("id","newID"));

console.log(divs.style);

//Harj 13
let newBut=document.createElement("button");
newBut.innerHTML="Click";
let but=document.querySelector("div");
but.append(newBut); //node.append(el);inside
                    //node.prepend(el);inside
                    //node.before(el);outside
                    //node.after(el);outside
newBut.style.backgroundColor="red";
newBut.style.color="green";

document.querySelector("h3").classList.add("butCol");

//Harj 14 (Event)

let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("Button is clicked!");
};
btn1.onclick=(evt)=>{
    console.log(evt.type);
    console.log(evt.target);
};

//Harj 15 (Event Listener)

let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    console.log("Button is clicked 1");
});
btn2.addEventListener("click",()=>{
    console.log("Button is clicked 2");
});

const handler3=()=>{
    console.log("Button is clicked 3");
};
btn2.addEventListener("click",handler3);
btn2.removeEventListener("click",handler3);

//Harj 16(Event Listener Exercise)(Ongelmia Tässä, katso video 7:45)

let formDiv=document.querySelector("#formDiv");
let btn3=document.querySelector("#mode");
let modeV="light";
btn3.addEventListener("click",()=>{
    if(modeV==="light"){
        modeV="dark";
        formDiv.classList.add("dark");
        formDiv.classList.remove("light");
    }else{
        modeV="light";
        formDiv.classList.add("light");
        formDiv.classList.remove("dark");
    }
    console.log(modeV);
});


