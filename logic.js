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

// select the display area
let infoSection = document.querySelector('#list-info')
function render() {
    infoSection.innerText = ''
    myLibrary.forEach((book) => {
        let d = document.createElement('div')
        // maybe rework to have more semantic structure
        // think about CSS/display, size, class of the div!
        d.innerText = book.info()
        infoSection.appendChild(d)
    })
}

// render on page load
render()

// function to run when 
// event listener for clicks on adding a book
// on click, console.log all of the info in the inputs
//find the button ->
document.querySelector('#add-button').addEventListener('click', ()=>{
    let formFields = document.querySelectorAll("#add-book-details input")
    let info = {}
    formFields.forEach((f)=>{
        info[f.name] = f.value
    })
    
    addBookToLib(myLibrary, ...Object.values(info))
    render()
    // console.log(info)
})

