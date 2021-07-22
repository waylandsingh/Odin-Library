function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.info = (this) => {
    return `${this.title} by ${this.author}, ${this.pages} pages - ${this.readStatus}`
}

let myLibrary = []

function addBookToLib() {
    //stuff here
    
}