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

	const dummyTask = await Task.create({
		description: "Dummy Task",
        prioritylevel: "High",
        completionstatus: false
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;