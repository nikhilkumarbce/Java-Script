const language = {
    js : "Javascript",
    py : "python",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in language) {
//    console.log(`${key} is shortcut for ${language[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")

for (const key in map) {
//    console.log(key);
}

//map is not iterable in this loop