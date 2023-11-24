

var form = document.getElementById('form');
var inProgressContainer = document.getElementById('inProgress');
var eachContainer = document.getElementsByClassName('tasksSection');

var count = 0;
var storageObj = [];

(function () {
  var returnData = localStorage.getItem('projectList')
  if (returnData) {
    storageObj = JSON.parse(returnData);
    for (let i = 0; storageObj.length > i; i++) {
      console.log(storageObj[i])

      var parent = document.getElementById(storageObj[i].parent)

      var list = document.createElement('li');
      parent.appendChild(list);
      list.innerText = storageObj[i].value;
      list.setAttribute('id', storageObj[i].id);
      list.setAttribute('draggable', true);
      list.addEventListener('dragstart', function (event) {
        //  console.log("this id",this.id)
        event.dataTransfer.setData('text', this.id);
      });
    }
  }
  count = storageObj.length;
})();


form.addEventListener('submit', function (e) {
  e.preventDefault();
  var inputValue = form.textVal.value;
  appendValues(inputValue)
  form.textVal.value=''
})

function appendValues(inputValue) {
  var list = document.createElement('li');
  inProgressContainer.appendChild(list);
  list.innerText = inputValue;
  list.setAttribute('id', '' + count);
  list.setAttribute('draggable', true);
  list.addEventListener('dragstart', function (event) {
    //  console.log("this id",this.id)
    event.dataTransfer.setData('text', this.id);
  });
  var obj = {
    id: list.id,
    value: list.innerText,
    parent: list.parentElement.id
  }
  storageObj.push(obj);
  setLocalStorage(storageObj);
  count++;
}


(function () {
  for (var i = 0; eachContainer.length > i; i++) {
    console.log(eachContainer[i])
    eachContainer[i].addEventListener('drop', dropFunction);
    eachContainer[i].addEventListener('dragover', dragOverFunction);

  }
})();


function dragOverFunction(event) {
  event.preventDefault();
  item.style.opacity = "0.9";

}


function dropFunction(event) {
  var selectedList = event.dataTransfer.getData('text');
  var changedList = this.appendChild(document.getElementById(selectedList));
  console.log(changedList);
  for (let i = 0; storageObj.length > i; i++) {
    if (storageObj[i].id == changedList.id) {
      storageObj[i] = {
        id: changedList.id,
        value: changedList.innerText,
        parent: changedList.parentElement.id
      }
    }
  }
  setLocalStorage(storageObj);
}


function setLocalStorage(storageObj) {
  localStorage.setItem("projectList", JSON.stringify(storageObj))
}


// let button = document.querySelector("button");
// let textVal = document.getElementById("textVal");
// var tasksSection = document.querySelectorAll(".tasksSection");
// //let items = document.querySelectorAll(".item");
// let items = document.querySelectorAll(".item");

// let drag = null;
// let i = 0;

// button.addEventListener("click", function () {
//   i++;
//   if (textVal.value != "") {
//     tasksSection[0].innerHTML += `<p class="item"  id =draggedItem${i} draggable="true">${textVal.value}</p>`;
//     //console.log(tasksSection[0])
//     textVal.value = "";
//   }
//   dragFun();
// });

// function dragFun() {
//   let items = document.querySelectorAll(".item");
//   items.forEach((item) => {
//     item.addEventListener("dragstart", function (e) {
//       drag = item;
//       item.style.opacity = "0.5";
//       setLocalstorage(this.id);
//     });
//     item.addEventListener("dragend", function () {
//       drag = null;
//       item.style.opacity = "1";
//       getLocalStorage();
//     });

//     tasksSection.forEach((tasksSection) => {
//       tasksSection.addEventListener("dragover", function (e) {
//         e.preventDefault();
//         this.style.background = "blue";
//         this.style.color = "white";
//       });
//       tasksSection.addEventListener("dragleave", function () {
//         this.style.background = "white";
//         this.style.color = "black";
//       });
//       tasksSection.addEventListener("drop", function () {
//         this.append(drag);
//         this.style.background = "white";
//         this.style.color = "black";
//       });
//     });
//   });
// }

// function setLocalstorage(storageItem) {
//   localStorage.setItem("key", storageItem);
// }

// function getLocalStorage() {
//   var getLocal = localStorage.getItem("key");
// }

// let button = document.querySelector("button");
// let textVal = document.getElementById("textVal");
// var tasksSection = document.querySelectorAll(".tasksSection");
// //let items = document.querySelectorAll(".item");
// let items = document.querySelectorAll(".item");

//  let i = 0;
// button.addEventListener("click", function () {
//   i++;
//   if (textVal.value != "") {
//     tasksSection[0].innerHTML += `<p class="item"  id =draggedItem${i} draggable="true">${textVal.value}</p>`;
//     textVal.value = "";
//   }
// });

//     for (let i = 0; items.length > i; i++) {

//   items[i].addEventListener("dragstart", dragstartFun);
// }

// function dragstartFun(event) {
//   event.dataTransfer.setData("text", this.id);
//   setLocalstorage(this.id);console.log(items)
// }

// for (let j = 0; tasksSection.length > j; j++) {
//   tasksSection[j].addEventListener("dragover", dragoverFun);
//   tasksSection[j].addEventListener("drop", dropFun);
//   tasksSection[j].addEventListener("dragleave", dragleaveFun);
// }

// function dragleaveFun() {
//   this.style.background = "white";
//   this.style.color = "black";
// }
// function dragoverFun(event) {
//   event.preventDefault();

//   this.style.background = "blue";
//   this.style.color = "white";
// }

// function dropFun(event) {
//   this.style.background = "white";
//   this.style.color = "black";
//   var draggableData = event.dataTransfer.getData("text");
//   this.appendChild(document.getElementById(draggableData));
//   getLocalStorage();
// }

// function setLocalstorage(storageItem) {
//   localStorage.setItem("key", storageItem);
// }

// function getLocalStorage() {
//   var getLocal = localStorage.getItem("key");
// }



