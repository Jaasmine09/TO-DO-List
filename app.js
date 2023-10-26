// const input = document.getElementById("input");
// const list = document.getElementById("list");

// function addTask() {
//     if (input.value === '') {
//         alert("You must write something!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = input.value;
//         list.appendChild(li);
//     }
//     input.value = ""; // Clear the input field by setting it to an empty string
// }


const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
    console.log("addTask function called");
    console.log("Input value: " + input.value);

    if (input.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
    }
    input.value = "";
    console.log("Input value after clearing: " + input.value);
}
