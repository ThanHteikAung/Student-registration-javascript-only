var tmpStorageStud = new Object({
    "bootcamp": []
});

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {

    constructor(name, level, students = new Array) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {

        let objCreateStd = new Object({
            name: this.name,
            level: this.level,
            student: {
                email: studentToRegister.email,
                name: studentToRegister.name,
            }

        });

        if (tmpStorageStud.bootcamp.length === 0) {
            tmpStorageStud['bootcamp'].push(objCreateStd);
            console.log(`Registering ${studentToRegister.name} to the ${tmpStorageStud.bootcamp[0].name} bootcamp`)
            return true;
        } else {
            for (let index = 0; index < tmpStorageStud.bootcamp.length; index++) {

                if (studentToRegister.name === undefined || studentToRegister.email === undefined) {
                    console.log("Invalid name or email.")
                    return false;
                } else if (studentToRegister.email === tmpStorageStud.bootcamp[index].student.email &&
                    studentToRegister.name === tmpStorageStud.bootcamp[index].student.name) {
                    console.log(`The email address ${studentToRegister.email} is already registered`)
                    return false;
                } else {
                    tmpStorageStud['bootcamp'].push(objCreateStd);
                    console.log(`Registering ${studentToRegister.name} to the ${tmpStorageStud.bootcamp[index].name} bootcamp`)
                    return true;
                }
            }

        }
    }

    listStudents() {
        const strStudentList = "";
        if (tmpStorageStud.bootcamp.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`)
        } else {
            for (let index = 0; index < tmpStorageStud.bootcamp.length; index++) {
                strStudentList += `Name: ${tmpStorageStud.bootcamp[0].name} Email: ${tmpStorageStud.bootcamp[0].email}\n`

            }
            console.log(`The students registered in ${this.name} are: ${strStudentList}`)
        }
    }
}


testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
};
runTest(reactBootcamp, testStudent);

