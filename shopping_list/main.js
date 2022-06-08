const plusBtn = document.querySelector('button');
plusBtn.addEventListener('click', () => {
    newList();
});

function newList () {
    const shoppingList = document.querySelector('.shoppingList');
    const name = document.querySelector('.addText').value;
    const li = document.createElement('li');
    const i = document.createElement('i');
    i.setAttribute('class', 'fa-solid fa-trash-can');
    shoppingList.prepend(li);
    li.textContent = name;
    li.append(i);
    const minusBtn = document.querySelector('i');
    minusBtn.addEventListener('click', () => {
        li.remove()
    })

};







        // function newList () {
        //     const addText = document.querySelector('.addText').value;
        //     const shoppingList = document.querySelector('.shoppingList');
        //     const li = document.createElement('li');
        //     const add = document.querySelector('.shoppingList').textContent = addText;
        //     li.prepend(add);
        //     shoppingList.prepend(li);
        // };


// function printList(){
//             const name = document.querySelector('.addText').value;
//             document.querySelector('.shoppingList').textContent = name;
//         };



























// const plusBtn = document.querySelector('.plusBtn > button');
// plusBtn.addEventListener('click',()=>{
//     addUnorderList();
// })



// // function



// function addUnorderList() {
//     const li = document.createElement("li");
//     const shoppingList = document.querySelector(".shoppingList");
//     function printList(){
//         const name = document.querySelector('.addText').value;
//         document.querySelector('.shoppingList').textContent = name;
//     };
//     li.prepend(printList());
//     shoppingList.prepend(li);
// }