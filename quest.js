const quests = [
     { id: 0,
     dirLeft : '2', dirRight : '3'},

    { id: 1, name: 'ironman' , title:'Вы выпрыгнули с платформы товарного поезда. Оглядевшись, вы увидели бесконечные ленты путей. Пройдясь вдоль платформы увидели здание вокзала. ' ,
    buttonLeft : 'Можно пойти к вокзалу (2)', buttonRight : 'можно пройтись вдоль путей (3)' ,
    dirLeft : '2', dirRight : '3'},

    { id: 2, name: 'sdf' , title: 'подойдя к вокзалу вы наткнулись на полицию. Киньте кубик и проверьте удачу.' ,
    buttonLeft : 'Если вы удачливы то (4)', buttonRight : 'Если нет (5)',
    dirLeft : 4, dirRight : 5},
    
    { id: 3, name: 'sdfd' , title:'Пройдя вдоль путей вы наткнулись на осмотрщика ж\д путей ' ,
    buttonLeft : 'Хотите поговорить с ним (6)', buttonRight : 'Пройти мимо. (7)' ,
    dirLeft : 6, dirRight : 7},

    { id: 4, name: 'sdfd' , title:'Вы повернули направо-налево, там тоже никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 5, name: 'sdfd' , title:'Вы повернули направо-направо, там тоже никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 6, name: 'sdfd' , title:'Вас встречает пожилой сутуловатый человек в майке "ПЧ1"... Доброго дня молодой человек. Я работаю в этом дэпо уже 10 лет, и ниразу не видел таких огромных крыс !!! Помоги мне пожалуйста с ними разобраться' ,
    buttonLeft : 'Согласиться (8)', buttonRight : 'Отказать, идти к вокзалу(2)' ,
    dirLeft : 8, dirRight : 2},

    { id: 7, name: 'sdfd' , title:'ыаыаыаываыва' ,
    buttonLeft : 'Идти еще налево', buttonRight : 'Идти еще направо' ,
    dirLeft : 6, dirRight : 7},

    { id: 8, name: 'sdfd' , title:'Вы согласились разобраться с крысами. По 10xp за каждую крысу. После 10 убийств вы достигаете уровня 2.' ,
    buttonLeft : 'отнести крыс пожилому человеку (10)', buttonRight : 'отнести крыс пожилому человеку (10)' ,
    dirLeft : 10, dirRight : 10},
	
	 { id: 9, name: 'sdfd' , title:'Чтож, вы идете дальше. Мимо вас пронесся поезд и вы прижались к какому-то двухэтажному зданию. Из окна Дежурный дэпо бранился с местной шпаной...' ,
    buttonLeft : 'Узнать в чем дело ', buttonRight : 'сразу наброситься (12)' ,
    dirLeft : 11, dirRight : 12},
	
	 { id: 10, name: 'sdfd' , title:'Спасибо огромное ! .. Старичек достает из за пазухи ключ на 32, что дает вам +10 к изначальному урону' ,
    buttonLeft : 'Идти к зданию ДЭПО', buttonRight : 'Идти к вокзалу (2)' ,
    dirLeft : 9, dirRight : 2},
	
	 { id: 11, name: 'sdfd' , title:'Вы повернули направо, там никого' ,
    buttonLeft : 'Идти налево', buttonRight : 'Идти направо' ,
    dirLeft : 9, dirRight : 7},
	
	 { id: 12, name: 'sdfd' , title:'Резко остановившись вы прижались к платформе. Шпана неторопливо шла в вашу сторону. И когда до них оставалось меньше метра, неожиданно выпрыгиваете перед ним и наносите удар под дых их лидеру. Главарь шпаны сила 2 ловкость 1 здоровье 6. Если вы не справились, то: обдав вам трехнедельным перегаром Главарь шпаны наносит мощнейший апперкот, от которого вы перелетаете через рельсы и пробиваете себе череп. К сожалению, скорая помощь не успела.... Если вы победили, то : все таки армейская подготовка вам пригодилась и точный удар в район гортани лишил "Главарь шпаны" жизни. В карманах его куртки вы находите 50 рублей, полпачки сигарет и заточку из напильника (+1 к силе).' ,
    buttonLeft : 'Идти к вокзалу (2)', buttonRight : 'Идти к вокзалу (2)' ,
    dirLeft : 2, dirRight : 2}
	

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
 