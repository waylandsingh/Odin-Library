function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages - ${this.readStatus}`
}

let myLibrary = []

function addBookToLib(lib, title, author, pages, readStatus) {
    //stuff here
    myLibrary.push(new Book(title, author, pages, readStatus))
}

addBookToLib(myLibrary, 'The Hobbit', 'Tolkien', '600', 'Finished Reading')
addBookToLib(myLibrary, 'The Count of Monte Cristo', 'Dumas', '1400', 'Finished Reading')

infoSection = document.querySelector('#list-info')

myLibrary.forEach((book) => {
    let d = document.createElement('div')
    d.innerText = book.info()
    infoSection.appendChild(d)
})
