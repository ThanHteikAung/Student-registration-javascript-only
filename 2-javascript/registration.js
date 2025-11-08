var tmpStorageStud = new Object({
    "bootcamp": []
});

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        let strStudentList = "";
        for (let index = 0; index < tmpStorageStud.bootcamp.length; index++) {
            strStudentList += `Name: ${tmpStorageStud.bootcamp[index].student.name} Email: ${tmpStorageStud.bootcamp[index].student.email}\n`

        }
        console.log(strStudentList)
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
        let strStudentList = " ";
        if (tmpStorageStud.bootcamp.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`)
        } else {
            for (let index = 0; index < tmpStorageStud.bootcamp.length; index++) {
                strStudentList += `Name: ${tmpStorageStud.bootcamp[index].student.name} Email: ${tmpStorageStud.bootcamp[index].student.email}\n`

            }
            console.log(`The students registered in ${this.name} are: ${strStudentList}`)
        }
    }

    //Bonus Tasks
    getInfo() {
        const initIndex = 0;
        if (tmpStorageStud.bootcamp.length > 0) {
            console.log(`Bootcamp Name: ${tmpStorageStud.bootcamp[0].name} Level: ${tmpStorageStud.bootcamp[0].level}`);
        }
    }

    removeStudent(delEmail) {
        let tmpArray = new Array;
        let jsonString = "";
        let count = 0;
        for (let index = 0; index < tmpStorageStud.bootcamp.length; index++) {
            if (tmpStorageStud.bootcamp[index].student.email === delEmail) {
                tmpArray = Object.values(tmpStorageStud.bootcamp)
                tmpArray.splice(index, 1)
                jsonString = JSON.stringify(tmpArray);
                jsonString = jsonString.substring(1, jsonString.length - 1);
                tmpStorageStud.bootcamp = [];
                tmpStorageStud['bootcamp'].push(JSON.parse(jsonString));
                console.log(`${delEmail} have been deleted`)
                count = 1;
                break;
            }
        }
        if (count === 0) {
            console.log(`This ${delEmail} is not registered in Bootcamp!`)
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

/* const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
};
runTest(reactBootcamp, testStudent); */

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }

    console.log("Bonus Task");
    console.log("Before remove Student list and bootcamp name are");
    bootcamp.getInfo();
    student.getInfo();
    bootcamp.removeStudent('babs@bunny.com');
    console.log("After remove Student list and bootcamp name are");
    bootcamp.getInfo();
    student.getInfo();
};

runTest(reactBootcamp, testStudent);


