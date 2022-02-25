var compile = document.getElementById("compile");
var editor = document.getElementById("textEditor");
var lang = document.getElementById("lang");
var output1 = document.getElementById("output");
var url = 'https://codequotient.com/api/executeCode';

compile.addEventListener("click", () => {
    let data1 = {
        "code": editor.innerText,
        langId: lang.value,
    }
    var req1 = new XMLHttpRequest();
    req1.open("POST", url, true);
    req1.setRequestHeader('Content-type', 'application/json');
    req1.send(JSON.stringify(data1));

    req1.addEventListener("readystatechange", () => {
        if (req1.readyState == 4) {
            const codeId = JSON.parse(req1.responseText).codeId;
            const x = setInterval(() => {
                var req2 = new XMLHttpRequest();
                req2.open('GET', `https://codequotient.com/api/codeResult/${codeId}`, true);
                req2.send();
                req2.addEventListener("readystatechange", (e) => {
                    if (req2.readyState == 4) {
                        var data = JSON.parse(JSON.parse(e.target.responseText).data);
                        const { output } = data || {};
                        const { errors } = data || {};
                        console.log(data);
                        if (output) {
                            const result = output.replace("/n", '');
                            if (result != '') output1.innerText = result;
                            else {
                                const error = errors.replace(/\n/g, ' ');
                                output1.innerText = error;
                            }
                            clearInterval(x);
                        }
                    }
                })
            }, 1000)
        }
    })
})