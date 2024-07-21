let objPerson = {
    name: 'Alex',
    age: 23,
    job: true,
    showInfo(){
        console.log(`My name is ${this.name}. I am ${objPerson.age}`);
    },
    address: {
        city:'Astana',
        street: 'Turan 10'
    }
};
// objPerson.showInfo();
// console.log(objPerson.address.street);
// console.log(Object.values(objPerson));
// console.log(Object.keys(objPerson));
// console.log(Object.entries(objPerson));

// console.log(objPerson);
// console.log(objPerson['job']);

for(let key in objPerson) {
    console.log(key);
    console.log(objPerson[key]);
}

// Создайте пустой объект user.
// a. Добавьте свойство name со значением Alex.
// b. Добавьте свойство surname со значением San.
// c. Измените значение свойства name на Max.
// d. Удалите свойство name из объекта

let user = {}
user.name = 'Alex';
user.surname = 'Sun';
user.name = 'Max';
delete user.name 
console.log(user);

// Напишите функцию isEmpty(obj),
// которая возвращает true, если у
// объекта нет свойств, иначе false.

let onj = {};
let userName = {name:'Roma'};
function isEmpty(obj){
    if(Object.keys(obj).length == 0) {
        return true
    }
    return false
}
console.log(isEmpty({}));
console.log(isEmpty({name:'Roma'}));

function isEmpty(obj) {
    for (let key in obj) {
      return false; 
    }
    return true; 
}

// У нас есть объект, в котором хранятся
// зарплаты нашей команды, напишите
// код для суммирования всех зарплат и
// сохраните результат в переменной
// sum.
let mony = {a:2, b:4, c:8};
let sum = 0; 

for(let key in mony) {
        if(typeof mony[key]  === 'number') {
            sum += mony[key]
        }
 }
    console.log(sum);

//Создать пустой объект. Добавлять по
// очереди с ключем product и значением
// iphone. Добавить в этот объект ключи
// с: ценником, какие цвета у него есть
// (обратить внимание что у нас есть
// составные данные), объемом памяти и
// моделью телефона. Значения задать по
// своему усмотрению, но данные должны
// быть реальными

let information = {};
information.product ='iphone';
information.price = '$1000';
information.colors = ['pink', 'blue', 'black', 'white'];
information.memory = '128';
information.model = '16Pro';
console.log(information)

// Создать объект, описывающий
//автомобиль (производитель, модель, год
// выпуска, средняя скорость), и следующие
// функции для работы с этим объектом.
//a. Функция для вывода на экран информации об
//автомобиле.
//b. Функция для подсчета необходимого времени
//для преодоления переданного расстояния со
//средней скоростью. Учтите, что через каждые
//4 часа дороги водителю необходимо делать
//перерыв на 1 час.

let carDescription = {
    manufacturer: 'Japane',
    model: 'Toyota Camry',
    year: 1986,
    speed: '180km/h',
    infOutput() {
      console.log(`Производитель авто: ${this.manufacturer}, модель авто: ${this.model}, год выпуска авто: ${this.year}, максимальная скорость авто: ${this.speed}`);
    }
  };
  
  carDescription.infOutput();
  
  let distance = parseFloat(prompt('Укажите расстояние, которое хотите преодолеть: '));
  let speed = 180;
  
  function countTime(distance, speed) {
    let timeWithoutBreaks = distance / speed;
    let breakCount = Math.floor(timeWithoutBreaks / 4);
    let totalTime = timeWithoutBreaks + breakCount * 1;
  
    return totalTime;
  }
  
  let totalTime = countTime(distance, speed);
  alert('Время в пути: ' + totalTime + ' часов');
  
//   Создать объект, описывающий время
// (часы, минуты, секунды), и следующие
// функции для работы с этим объектом.
// a.Функция вывода времени на экран

// описание обьека время
function checkTime(hours, min, sec) {
    // свойствв обьекта хранящие значения часов, минут и секунды.
    this.hours = hours;
    this.min = min;
    this.sec = sec;
}

// функция формирования времени в строку 
checkTime.prototype.format = function() 
// функция формат формирует время в строку 
{
    return `${this.hours}:${this.min}:${this.sec}`;
}

// функция вывода времени на экран
checkTime.prototype.print = function() {
    console.log(this.format());
}

// пример использования 
let time1 = new checkTime(10, 50, 37);
time1.print();

// создание нового обьема с заданным временем
let time2 = new checkTime(14, 50, 0);
time2.print();

// У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая
// возвращает имя самого высокооплачиваемого
// сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно
// вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование,
// чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    // проверка пустого обьекта
    if(Object.keys(salaries).length === 0) {
        return null;
    }

    // перебор пар ключ-значений с помощью Object.entries и деструктурирования
    let maxSalary = 0;
    let maxName = null;
    for(const [name,salary] of Object.entries(salaries)) {
        if(salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    // возвращение имени самого высокооплачиваемого сотрудника
    return maxName;
}

// 2. Напишите деструктурирующее присваивание
// которое:
// свойство name присвоит в переменную name.
//свойство years присвоит в переменную age.
//свойство isAdmin присвоит в переменную isAdmin (false,
// если нет такого свойства)
const user = {
    nam: "Василий",
    years: 25,
    isAdmin: false
  };
  
  const { nam, years, isAdmin: userIsAdmin = false } = user;
  
  console.log(nam); 
  console.log(years); 
  console.log(userIsAdmin); 
