// #!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

class Book {
    title:string
    constructor(title:string){
        this.title = title;
    }
}

class Librarian {
    books:Book[] = [];

    addBook(book:any){
        this.books.push(book);
    }
}

const librarian = new Librarian();

const startLibraryProgram = async(librarian:Librarian)=>{
    do {
        console.log(chalk.bold.yellow("Welcome to the Library!"));
        const response = await inquirer.prompt({
            type:"list",
            message:"What would you like to do?",
            name:"action",
            choices:["Manage Myself","Manage Books"],
        });

        if(response.action === "Manage Myself"){
            console.log("Taking care of myself, everything is going well!");
        } else if(response.action === "Manage Books"){
            const bookResponse = await inquirer.prompt({
                type:"input",
                message:"Enter the title of the book:",
                name:"title"
            });

            const existingBook = librarian.books.find(book => book.title === bookResponse.title);

            if(!existingBook){
                const newBook = new Book(bookResponse.title);
                librarian.addBook(newBook);

                console.log(`Added "${newBook.title}" to the library.`);
                console.log("Current books in the library:", librarian.books);
            } else {
                console.log(`${existingBook.title}" already exists in the library.`);
                console.log("Current books in the library:", librarian.books);
            }
        }
        

    } while(true);
};

startLibraryProgram(librarian);