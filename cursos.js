let currentCourses = [
    
    {id: 0, name:'Programacion', time: '90 horas', cost: 300000},
    {id: 1, name:'Matematicas', time: '80 horas', cost: 270000},
    {id: 2, name:'Ingles', time: '80 horas', cost: 280000}

];


let showCoursers = t => {
	setTimeout(function () {
	console.log(currentCourses[0]);
	}, t); 

	setTimeout(function () {
	console.log(currentCourses[1]);
	}, t*2); 

	setTimeout(function () {
	console.log(currentCourses[2]);
	}, t*3); 
}

let courseFounded = (toFind) => currentCourses.find(c => c.id == toFind);


module.exports = {
	currentCourses,
	showCoursers,
	courseFounded
};	

