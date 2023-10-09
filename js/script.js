const listEl = document.getElementById("unordered_list");
const savedElements = [];

// Stop from refreshing site
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); addToList();} 
form.addEventListener('submit', handleForm);

const addToList = () => {
    // Add element to list
    let input = document.getElementById("input_el");
    if(!savedElements.includes(input.value)){
        let i = 0;
        listEl.innerHTML = "";
        savedElements.push(input.value);
        savedElements.forEach(element => {
            listEl.innerHTML += `
            <li class="list-group-item" id="${element+"list"}">
                <input id="${element}" class="form-check-input me-1" type="checkbox" value="" onchange="return checkedBox(this);" aria-label="...">
                <span id="${element+"span"}">${element}</span>
                <div>
                    <button class="btn btn-outline-dark" id="${element+2}" onclick="return deleteItem(this);">Delete</button>
                    <button class="btn btn-outline-dark" id="${element+3}" onclick="return editItem(this);">Edit</button>
                </div>
            </li>`;
        });
    }else{
        alert("Cant have 2 of the same items!");
    }
    input.value = "";
}
const checkedBox = (me) => {
    // If checkbox checked change text style
    let textToChange = document.getElementById(me.id+"span");
    if(!textToChange.classList.contains("checkedTrue")){
        textToChange.classList += "checkedTrue";
    }else{
        textToChange.classList = "";
    }
}
const deleteItem = (me) => {
    // Delete item
    let id = me.id;
    id = id.slice(0, -1);
    savedElements.splice(savedElements.indexOf(id), 1);
    let deleteWhat = document.getElementById(id+"list");
    deleteWhat.remove();
}
const editItem = () => {
    alert("Not done yet!");
}