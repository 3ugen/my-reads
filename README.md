# _Project_: My-Reads
#### _Udacity Front-End Web Developer Nanodegree_
---

## Project Description
A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using **[React](https://reactjs.org/)** to build the application.

## Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # App images.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```
## To run the app:

1. Clone repository and `cd` into directory.
2. run: `npm install`
3. run: `npm start`

## Code dependencies

### Backend Server

Udacity provided the backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

#### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## TODO

**Application Setup**
- [x] Updated README.
 - [x] Describes the project.
 - [x] Has instructions for installing and launching.
- [x] Create with create-react-app.
 - [x] Requires only npm install and npm start.
**Main Page**
- [x] Page shows 3 shelves for books.
  - [x] Book is shown on the correct shelf.
    - [x] With its title and author(s).
- [x] Page has control that allows users to move books between shelves.
  - [x] Control should be tied to each book instance.
  - [x] Moving a book to a different shelf works correctly.
- [x] When the browser is refreshed, the same information is displayed on the page.
**Search Page**
- [x] Page has a search input field.
- [x] Page behaves correctly.
- [x] *User types into the search field:*
    - [x] Books that match the query are displayed on the page.
      - [x] With their titles and author(s). (*can use throttle/debounce*)
- [x] Results not shown when all text in input is deleted.
- [x] Invalid queries are handled and prior search results are not shown.
- [x] The search works correctly when a book does not have a thumbnail or an author. (*To test this, try searching for "poetry" and "biography*")
- [x] The user is able to search for multiple words, such as “artificial intelligence.”
- [x] Results allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
- [x] *If book is assigned to a shelf on the main page and that book appears on the search page:*
  - [x] The correct shelf should be selected on the search page.
  - [x] *If that book's shelf is changed on the search page:*
    - [x] That change should be reflected on the main page as well.
    - [x] The option "None" should be selected if a book has not been assigned to a shelf.
- [x] When item is categorized on search page and user navigates to the main page, it appears on that shelf in the main page.
**Routing**
- [x] Main page contains link to search page.
  - [x] When link is clicked, search page is displayed  /search.
- [x] Search page contains link to main page.
  - [x] When link is clicked, main page is displayed and browser’s URL is /.
**Code Functionality**
- [x] Component state is passed down from parent components to child components.
- [x] Tate variable is not modified directly - setState() function is used correctly.
- [x] Books have same state on search page and main page.
- [x] If book is on bookshelf, that is reflected in both locations.
- [x] The code runs without errors.
- [x] There are no warnings from not following best practices listed in documentation (*such as using key for list items*)
- [x] All code is functional and formatted properly.
