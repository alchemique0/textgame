const quests = [
     { id: 0,
     dirLeft : '2', dirRight : '3'},

    { id: 1, name: 'ironman' , title:'Вы находтесь в ДЭПО Ярославль-Главный, какие ,будут ваши действия ?' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : '2', dirRight : '3'},

    { id: 2, name: 'sdf' , title: 'Вы повернули налево, там вы увидели Бомжа' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо',
    dirLeft : 4, dirRight : 5},
    
    { id: 3, name: 'sdfd' , title:'Вы повернули направо, там никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 4, name: 'sdfd' , title:'Вы повернули направо-налево, там тоже никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 5, name: 'sdfd' , title:'Вы повернули направо-направо, там тоже никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 6, name: 'sdfd' , title:'Вы бродите налево, а тут все еще никого' ,
    buttonLeft : 'Идти еще-еще налево', buttonRight : 'Идти еще - еще направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 7, name: 'sdfd' , title:'Вы бродите направо, а все еще никого' ,
    buttonLeft : 'Идти еще налево', buttonRight : 'Идти еще направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 8, name: 'sdfd' , title:'Вы повернули направо, там никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 6, dirRight : 7}

     ]

  
function printTitleAndButtons(b) {

    let p = document.querySelector(".gameArea");
    p.innerText = quests[b].title
    let l = document.querySelector(".left");
    l.innerText = quests[b].buttonLeft
    let r = document.querySelector(".right");
    r.innerText = quests[b].buttonRight
  
} ;

printTitleAndButtons(currentLocation);

// 0. найдем текущий номер id 
function getCurrentId() {
let a=   quests[currentLocation].id;
return a;
}

//1. найдем dirLeft у текущего элемента
function getDirleft (){
  let a=   quests[currentLocation].dirLeft;
  currentLocation = a;
  printTitleAndButtons(a);
}

function getDirRight (){
  let a=   quests[currentLocation].dirRight;
  currentLocation = a;
  printTitleAndButtons(a);
}



// Путь для кнопки
// function PathButton () {
//   let a=   quests[currentLocation].dirLeft;
//   let l = document.querySelector(".btn1");
//   l.addEventListener('click', )
//   if (была нажата кнопка 1 ) {
//     подгрузить локацию dirLeft 
//   }
//   else if (была нажата кнопка 2 ) {
//     подгрузить локацию dirRight 
//   }
//   else ничего не делать
// }








  //   function getCharacter(name) {
  //   return character => character.name === name;
  // }

  //   let aa =  (quests.find(getCharacter('captain_america2')));
  //   console.log( aa.id);
 