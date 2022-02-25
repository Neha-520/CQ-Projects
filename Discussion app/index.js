var subject = document.getElementById("subject");
var description = document.getElementById("description");
var submit = document.getElementById("submit");
var ques_box = document.getElementById("ques_box")
var right_pane = document.getElementById("right_pane");
var right_pane2 = document.getElementById("right_pane2");
var res_submit = document.getElementById("res_submit");
var person = document.getElementById("name");
var comment = document.getElementById("comment");

var data = localStorage.getItem("questions");

if (data) {
    data = JSON.parse(data)
}

var index = 0;
var current;
var array = data || [];


array.forEach(function (data) {
    var subject_title = data.title;
    var description_text = data.description;


    var container = document.createElement("div");
    container.classList.add("question")

    var subject_heading = document.createElement("h2");
    subject_heading.innerText = subject_title;

    var description_node = document.createElement("p");
    description_node.innerText = description_text;

    container.addEventListener("click", function () {
        right_pane.style.display = "none";
        right_pane2.style.display = "flex";

        var right_que = document.getElementById("right_que");
        right_que.style.setProperty("background-color", "rgba(247, 247, 247, 0.979)");
        var ques_h = document.getElementById("que_head");
        ques_h.innerText = subject_title;
        var ques_t = document.getElementById("que_text");
        ques_t.innerText = description_text;
    });

    container.appendChild(subject_heading);
    container.appendChild(description_node);

    ques_box.appendChild(container);
})


submit.addEventListener("click", function () {
    var subject_title = subject.value;
    var description_text = description.value;

    if (subject_title && description_text) {
        var container = document.createElement("div");
        container.classList.add("question")

        var subject_heading = document.createElement("div");
        subject_heading.innerText = subject_title;

        var description_node = document.createElement("p");
        description_node.innerText = description_text;


        container.appendChild(subject_heading);
        container.appendChild(description_node);

        ques_box.appendChild(container);

        container.addEventListener("click", function () {
            console.log(subject.value);
            // right_pane.style.display = "none";
            // right_pane2.style.display = "flex";
        });

        array.push({
            title: subject_title,
            description: description_text,
            count: 0,
            comments: []
        });

        localStorage.setItem("questions", JSON.stringify(array));

        subject.value = "";
        description.value = "";
    }
});

res_submit.addEventListener("click", () => {
    var n = person.value;
    var c = comment.value;
    if (n && c) {
        var ans_container = document.createElement("div");
        ans_container.classList.add("ans_container");
        ans_container.style.setProperty("background-color", "rgba(247, 247, 247, 0.979)");

        var head = document.createElement("h5");
        head.innerHTML = n;

        var answer = document.createElement("p");
        answer.innerHTML = c;

        ans_container.appendChild(head);
        ans_container.appendChild(answer);

        document.getElementById("response").appendChild(ans_container);

        document.getElementById("name").value = '';
        document.getElementById("comment").value = '';

        array.comments.push({
            name: n,
            comment: c
        });
        array.count++;

        localStorage.setItem("questions", JSON.stringify(array));
    }
})

console.log(localStorage.getItem("questions"));






// var subject = document.getElementById("subject");
// var description = document.getElementById("description");
// var submit = document.getElementById("submit");
// var ques_box = document.getElementById("ques_box");
// var right_pane = document.getElementById("right_pane");
// var response = document.getElementById("response");
// var comment = document.getElementById("comment");

// var data = localStorage.getItem("questions");
// if (data) {
//     data = JSON.parse(data);
// }

// var array = data || [];

// array.forEach((data) => {
//     questions(data.title, data.description);
// })

// function Responses() {

//     var h = document.createElement("h3");
//     h.innerText = "Add Response";
//     response.appendChild(h);
//     comment.style.display = "flex"
// }


// function questions(subject_title, description_text) {
//     var container = document.createElement("div");
//     container.classList.add("question");

//     var subject_heading = document.createElement("h2");
//     subject_heading.innerText = subject_title;

//     var description_node = document.createElement("p");
//     description_node.innerText = description_text;

//     container.appendChild(subject_heading);
//     container.appendChild(description_node);

//     ques_box.appendChild(container);
//     container.addEventListener('click', () => {
//         right_pane.style.display = "none";
//         response.style.display = "flex"
//         response.appendChild(container);
//         var b = document.createElement("button");
//         b.innerText = "Resolve";
//         b.classList.add("submit");
//         response.appendChild(b);
//         var h = document.createElement("h3");
//         h.innerText = "Response";
//         response.appendChild(h);
//         Responses();
//     })
// }




// submit.addEventListener("click", (e) => {
//     questions(subject.value, description.value);

//     array.push({
//         title: subject.value,
//         description: description.value,
//         comments: [{ name: "", text: "" }],
//     });

//     localStorage.setItem("questions", JSON.stringify(array));
// })