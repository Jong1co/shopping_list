//  .footer > button 을 클릭 or enter하면 
//  addText.value 가 list로 만들어짐
//  동시에 쓰레기통 아이콘 등장

//  쓰레기통 아이콘 클릭 시 list 삭제




const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
    addList();
});

function addList(){
    const addText = document.querySelector('.addText').value;
    const li = document.createElement('li');
    const button = document.createElement('button');
    const ul = document.querySelector('.itemList');
    const i = document.createElement('i');
    i.setAttribute('class', 'fa-solid fa-trash-can');
    button.setAttribute('class', 'deleteBtn');
    li.setAttribute('class', 'itemRow');

    li.textContent = addText;
    ul.append(li);
    li.append(button);
    button.append(i);
    button.addEventListener('click', ()=>{
        li.remove();
    })
    
};























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
