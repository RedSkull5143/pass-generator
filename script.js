let output = document.getElementById("password");
let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let b = "abcdefghijklmnopqrstuvwxyz";
let c = "1234567890";
let d = "~!@#$%^&*()_+/<>-";
let e = a + b + c + d;

function generatePassword() {
    let pass = '';
    pass += a[Math.floor(Math.random() * a.length)];
    pass += b[Math.floor(Math.random() * b.length)];
    pass += c[Math.floor(Math.random() * c.length)];
    pass += d[Math.floor(Math.random() * d.length)];

    while (pass.length <= 12) {
        pass += e[Math.floor(Math.random() * e.length)];
    }
    output.value = pass;
}

function clearPassword() {
    output.value = '';
}

function copyPassword() {
    if (output.value === "") {
        alert("Generate Password to Copy!");
    }
    else {
        let copy = output.value;
        navigator.clipboard.writeText(copy);
    }
}