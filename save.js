


// function add7(){
//     let x = document.getElementById("myNumber").value;
//     for (let i = 1; i <= x; i++){
//         if (((i % 3) == 0) && ((i % 5) == 0)){
//             console.log("FizzBuzz and num is " + i)
//         }
//         else if ((i % 3 ) == 0){
//             console.log("Fizz and num is " + i)
//         }
//         else if ((i % 5) == 0){
//             console.log("Bizz and num is " + i)
//         }
//         else{
//             console.log(i)
//         }
//     }
// }


// function chuvachi(){
//     const n = 0
//     const b = 1
//     const k = 2
//     x = Number(document.getElementById("perha").value);
//     y =Number(document.getElementById("druga").value);
//     console.log(x + y)
//     if ((x == n && y == b) || (x == b && y == n)){
//         console.log("n is winner!!")
//     }
//     else if ((x == n && y == k) || (x == k && y ==n)){
//         console.log("k is winner")
//     }
//     else if ((x == b && y == k) || (x == k && y == b)){
//         console.log("b is wiiner")
//     }
// }


// function vibor(){
//     const elem = ["rock", "paper", "scissors"];
//     for (let i; i <= 5; i++){
//         let sign = prompt("What's your sign?");
//     }
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(){
    const elem = ["rock", "paper", "scissors"];
    for (let i = 0; i <= 5; i++){
        let sign = prompt("What's your sign?");
        let comp = elem[getRandomInt(3)]
        if ((sign == "rock" && comp == "scissors")){
            console.log("what player choosed " + sign)
            console.log("what comp choosed " + comp)
            console.log("player wins!!")
        }
        else if ((sign == "paper" && comp == "rock") ){
            console.log("what player choosed " + sign)
            console.log("what comp choosed " + comp)
            console.log("player wins!!")
        }
        else if ((sign == "scissors" && comp == "paper")){
            console.log("what player choosed " + sign)
            console.log("what comp choosed " + comp)
            console.log("player wins!!")
        }
        else if (sign == comp){
            console.log("what player choosed " + sign)
            console.log("what comp choosed " + comp)
            console.log("it is a draw")
        }
        else{
            console.log("what player choosed " + sign)
            console.log("what comp choosed " + comp)
            console.log("Computer wins((")
        }
    }
}

playRound()



// const button = document.querySelector('button');
// button.addEventListener('click', chuvachi);

//function popa(){
//    let slovo = "yan"
//    slovo = slovo.split("")
//    slovo[0] = slovo[0].toUpperCase()
//    vivod = ""
//    for (let i = 0; i < slovo.length; i++ ){
//        vivod += slovo[i]
//    }
//    return vivod
//}


