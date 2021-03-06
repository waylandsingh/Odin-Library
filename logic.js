class Book {
    constructor(title, author, pages, readStatus) {
        this.uid = Date.now() + title
        //consider hashing the title/information to generate uids instead
        this.title = title
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages - ${this.readStatus?'Finished':'In Progress'}`
    }
}




// store the Books in an array for now
let myLibrary = []

function addBookToLib(lib, title, author, pages, readStatus) {
    //stuff here
    myLibrary.push(new Book(title, author, pages, readStatus))
}

// remove a book by it's uid
function removeBookByUID(id) {
    myLibrary = myLibrary.filter((book) => book.uid !== id)
    render()
}

// return the index of a book by uid
function findBook(id) {
    return myLibrary.findIndex(i => i.uid===id)
}

// toggle the read/not read of a book
function toggleReadStatus(id) {
    const idxOfBook = findBook(id)
    console.log(idxOfBook)
    myLibrary[idxOfBook].readStatus = !myLibrary[idxOfBook].readStatus
    render()
}

// Example books
addBookToLib(myLibrary, 'The Hobbit', 'Tolkien', '600', true)
addBookToLib(myLibrary, 'The Count of Monte Cristo', 'Dumas', '1400', true)

// select the display area and render the text
// React version could render different components
let infoSection = document.querySelector('#list-info')
function render() {
    infoSection.innerText = ''
    myLibrary.forEach((book) => {
        let d = document.createElement('div')
        // associate with title so that removal can filter the library
        d.setAttribute('id', book.uid)
        // add a button that will remove the book and call render
        // include text with the book information
        d.innerHTML = `
            <p>${book.info()}</br>
                <button onclick="removeBookByUID('${book.uid}')">Remove</button>
                <button onclick="toggleReadStatus('${book.uid}')">Toggle Read</button>
                </p>
        `

        // append the complete section to the entry
        infoSection.appendChild(d)
    })
}

// test removal by id
// removeBookByUID(myLibrary[0].uid) //testing the removal by filtration

// render on page load
render()

// function to run when 
// event listener for clicks on adding a book
// on click, console.log all of the info in the inputs
//find the button ->
document.querySelector('#add-button').addEventListener('click', ()=>{
    let formFields = document.querySelectorAll(".standard-input input")
    let info = {}
    formFields.forEach((f)=>{
        info[f.name] = f.value
    })

    let toggleField = document.querySelectorAll(".toggle-input input")
    toggleField.forEach((f) =>{
        console.log(f.checked)
        info[f.name] = f.checked ? true : false
    })
    
    addBookToLib(myLibrary, ...Object.values(info))
    render()
    console.log
})

