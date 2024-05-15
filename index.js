// #!/usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// class Animal {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
// }
// class ZooKeeper {
//   animals: Animal[] = [];
//   addAnimal(obj: any) {
//     this.animals.push(obj);
//   }
// }
// const zooKeepers = new ZooKeeper();
// const startZooKeeperProgram = async (zooKeepers: ZooKeeper) => {
//   do {
//     console.log(chalk.bold.yellow("Welcome to the Zoo!"));
//     const response = await inquirer.prompt({
//       type: "list",
//       message: "Who would you like to take care of?",
//       name: "select",
//       choices: ["Myself", "Animal"],
//     });
//     if (response.select === "Myself") {
//       console.log("Taking care of myself, all is well!");
//     } else if (response.select === "Animal") {
//       const animalResponse = await inquirer.prompt({
//         type: "input",
//         message: "Which animal do you want to take care of?",
//         name: "animal",
//       });
//       const animal = zooKeepers.animals.find(
//         (val) => val.name === animalResponse.animal
//       );
//       if (!animal) {
//         const newAnimal = new Animal(animalResponse.animal);
//         zooKeepers.addAnimal(newAnimal);
//         console.log(`You are now taking care of ${newAnimal.name}`);
//         console.log("Current animals in the zoo:", zooKeepers.animals);
//       } else {
//         console.log(`You are already taking care of ${animal.name}`);
//         console.log("Current animals in the zoo:", zooKeepers.animals);
//       }
//     }
//   } while (true);
// };
// startZooKeeperProgram(zooKeepers);
import inquirer from "inquirer";
import chalk from "chalk";
class Book {
    constructor(title) {
        this.title = title;
    }
}
class Librarian {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
}
const librarian = new Librarian();
const startLibraryProgram = async (librarian) => {
    do {
        console.log(chalk.bold.yellow("Welcome to the Library!"));
        const response = await inquirer.prompt({
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["Manage Myself", "Manage Books"],
        });
        if (response.action === "Manage Myself") {
            console.log("Taking care of myself, everything is going well!");
        }
        else if (response.action === "Manage Books") {
            const bookResponse = await inquirer.prompt({
                type: "input",
                message: "Enter the title of the book:",
                name: "title"
            });
            const existingBook = librarian.books.find(book => book.title === bookResponse.title);
            if (!existingBook) {
                const newBook = new Book(bookResponse.title);
                librarian.addBook(newBook);
                console.log(`Added "${newBook.title}" to the library.`);
                console.log("Current books in the library:", librarian.books);
            }
            else {
                console.log(`${existingBook.title}" already exists in the library.`);
                console.log("Current books in the library:", librarian.books);
            }
        }
    } while (true);
};
startLibraryProgram(librarian);
