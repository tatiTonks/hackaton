//2

let punto2 = document.querySelector("#pregunta2")
punto2.addEventListener("submit" , (died) => {
    died.preventDefault()

    let a = died.target.dosecito.value

    console.log(a);

function max(a){    
    var al = a.length;
    maximum = a[al-1];
    while (al--){
        if(a[al] > maximum){
            maximum = a[al]
        }
    }
            return maximum;
};

// var myArray = [1, 5, 6, 2];
// var m = max(myArray);
console.log(max(a))
})

//4

let punto4 = document.querySelector("#pregunta4")
punto4.addEventListener("submit" , (dum) => {
    dum.preventDefault()
    
    let texto = dum.target.cuatrico.value


function vocales(texto) {
    return texto.replace(/[^aeiouAEIOU]/g, '').length;
}

console.log(vocales(texto));
})

//5

let punto5 = document.querySelector("#pregunta5")
punto5.addEventListener("submit" , (dim) => {
    dim.preventDefault()
    
    let numero = dim.target.cinquito.value


function primo(numero) {
    if (numero <= 1) {
    return false;
    }
    // Comprobamos si el número es divisible por algún número menor que él mismo
    for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
    return false;
    }
    } // Si no ha sido divisible por ningún número, es primo return true;
    }
    console.log(primo(4))
})

//6

let punto6 = document.querySelector("#pregunta6")
punto6.addEventListener("submit" , (dom) => {
    dom.preventDefault()
    
    let num = dom.target.six.value


function factorial(num) {
    if (num < 0) 
    return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

console.log(factorial(num))
})

//8

let punto8 = document.querySelector("#pregunta8")
punto8.addEventListener("submit" , (dion) => {
    dion.preventDefault()
    
    let string = dim.target.eight.value


function palindromo(string) {
    const reversa = string.split("").reverse().join("");

    return reversa === string ? "es palíndromo" : "no es palíndromo";
}
console.log(palindromo(string)); 

})
