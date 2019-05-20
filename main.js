const  {currentCourses,showCoursers,courseFounded } = require('./cursos');
const fs = require ('fs');

const user = {
	name: {
		demand: true,
		alias: 'n'
	},
	dni: {
		demand: true,
		alias: 'd'
	},
	course: {
		demand: true,
		alias: 'c'
	}
};

const argv = require ('yargs')
			 .command('inscribir','Inscribir usuario', user)
			 .argv


function genFile() {
	text = ('Informacion del interesado: ' + '\n' +
			'Nombre: ' + argv.name + '\n' +
			'Cedula: ' + argv.dni + '\n' +
			'Informacion del curso: ' + '\n' +
			'Nombre del curso: ' + currentCourses[argv.course ].name + '\n' +
			'Id del curso: ' + currentCourses[argv.course ].id + '\n' +
			'Duracion del curso: ' + currentCourses[argv.course ].time + '\n' +
			'Valor del curso: ' + currentCourses[argv.course ].cost);
			fs.writeFile('Informacion.txt', text, (err) => {
			    if(err) throw (err);
			    console.log('Se ha registrado correctamente la informacion');
			});
}


function load() {
	if(argv.course == null || argv.name == null || argv.dni == null) showCoursers(2000);
		
	else {
		if(courseFounded(argv.course) == null) {
			console.log('El curso con el id [' + argv.course + '] no existe.');
			showCoursers(2000);
		} else{
			console.log(courseFounded(argv.course));
			setTimeout(function () {
			genFile();
			}, 2000);
		}
	}	
}

load();