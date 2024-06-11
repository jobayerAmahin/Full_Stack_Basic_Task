const product= {
    otsikko:"Kynä",
    hinta: 2,
    luokitus: 4,
    tarjous: "6%",
};
console.log(product);

const instaUser= {
    henkilö:"General",
    seuraajat: 276,
    aktiivi: true,
};
console.log(product);

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
