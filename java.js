let s = "AEIOU"

function demo() {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] == "A") {
            console.log('a');
        }
        if (s[i] == "e" || s[i] == "E") {
            console.log("e");
        }
        if (s[i] == 'i' || s[i] == "I") {
            console.log('i');
        }
        if (s[i] == 'o' || s[i] == "O") {
            console.log('o');
        }
        if (s[i] == 'u' || s[i] == "U") {
            console.log('u');
        }
    }
}

demo();