const { Employee, Task} = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Nicole",
		lastname: "Razo",
		department: "Engineer"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});

	const dummyTask1 = await Task.create({
		description: "Sales",
        prioritylevel: "High",
        completionstatus: false
	});

	const dummyTask2 = await Task.create({
		description: "Administration",
        prioritylevel: "High",
        completionstatus: false
	});


	await dummyTask1.setEmployee(dummyEmployee);
	await dummyTask2.setEmployee(dummyEmployee2);
	
}

module.exports = seedDB;
