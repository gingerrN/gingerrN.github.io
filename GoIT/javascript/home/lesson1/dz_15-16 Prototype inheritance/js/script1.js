/*Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес.
Используя прототипное наследование создать дочерние классы Worker 
(дописать в них поля места работы, зарплатой, методом "работать") 
и Student (дописать поля места учебы, стипендией, методом "смотреть сериалы")
Создать несколько экземпляров классов Worker и Student, вывести их в консоль. 
Убедиться что они имеют поля родительского класса Human*/

function Human () {
    this.manName   = 'Vova',
    this.manAge    = 30,
    this.manSex    = 'masculine',
    this.manGrowth = 170,
    this.manWeight = 72
};
function Worker (){
    this.workPlace = 'circus', 
    this.salary    = 15000,
    this.work      = function() {
        alert("Welcome to the circus");
    }
};
function Student () {
    this.studyPlace = 'National Academy', 
    this.grants    = 5000,
    this.showsTV       = function() {
        alert("I like to watch TV shows");
    }
};
/*прототипное наследование*/
Worker.prototype = new Human;
Student.prototype = new Human;


/*Создать несколько экземпляров классов Worker и Student*/
var newWorker1 = new Worker;
var newWorker2 = new Worker;
var newStudent1 = new Student;
var newStudent2 = new Student;


console.log('newWorker1.manName ',newWorker1.manName);
console.log('newWorker2.manAge ',newWorker2.manAge);

console.log('newStudent1.manName ',newStudent1.manName);
console.log('newStudent2.manGrowth ',newWorker2.manGrowth);

newWorker1.work();
newStudent2.showsTV();

