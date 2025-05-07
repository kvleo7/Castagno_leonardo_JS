

//Es 1


function controllaNumero(num) {
    console.log(num);
    
    if (num % 2 === 0) {
        console.log("Numero pari");
    } else {
        console.log("Numero dispari");
    }

    if (num > 100) {
        alert("Grande!");
    }
}

controllaNumero(101);


//Es 2

let count = 10;

while (count >= 0) {
    console.log(count);
    if (count === 0) {
        alert("BOOM!");
    }
    count--;
}





//Es 3


let numeri = [3, 6, 1, 9];

numeri.push(5);

numeri.sort((a, b) => a - b);

console.log("Primo elemento:", numeri[0]);
console.log("Ultimo elemento:", numeri[numeri.length - 1]);


//Es 4




function calcola(n1, n2, operazione) {
    switch (operazione) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) {
                return "Impossibile dividere per 0!";
            } else {
                return n1 / n2;
            }
        default:
            return "Operazione non valida!";
    }
}

console.log(calcola(10, 5, "+"));
console.log(calcola(10, 5, "/"));










//Es 5
function saluta() {
    const nome = document.getElementById("inputNome").value;
    const saluto = document.getElementById("saluto");
    saluto.textContent = `Ciao, ${nome}!`;
}

