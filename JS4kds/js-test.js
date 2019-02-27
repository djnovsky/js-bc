let times = 0;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let string = "";
    while(times<9){
        let random = Math.floor(Math.random()*alphabet.length);
        string += alphabet[random]
        times++;
    }
console.log("Random word today is - " + string.toLowerCase())