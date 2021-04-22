import hangman from "../websiteScreenShots/hangman.png"
import todo from "../websiteScreenShots/todo.png"
import moviedb from "../websiteScreenShots/moviedb.png"
import studio from "../websiteScreenShots/studio.png"
import webdatabase from "../websiteScreenShots/webdatabase.png"

const projectsData = [
    {
        id: 1,
        name: "Hangman Game",
        description: "Hangman game that records correct and wrong letters, and determines on whether you can play depending on whether you win or lose, through the use of React useStates and useEffect. React useStates were used as props in order to update what was being displayed on the screen (ie: wrongLetters that were entered updated the Figure component to render out a new body part)",
        img: hangman, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "https://github.com/willvuong/react-hangman-app" //insert heroku link
    },
    {
        id: 2,
        name: "To-Do App",
        description: "A to-do list using React in order to add, delete and track task. Created functions that served as functionality in order to edit the task list that were passed into components as props. React useStates were incorporated in order to display/close the + button (add new task) and to add new tasks components into the task array.",
        img: todo, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "https://github.com/willvuong/react-to-do-app" //insert heroku link
    },
    {
        id: 3,
        name: "Movie Database App",
        description: "This movie database application pulls data from an API in order to display specfically queried movies from the user. A useState is intialized as null which it then stores the data of the query that the user enters in the search bar. All movies that match the specified keyword is firstly searched through the API -> converted to JSON objects -> results sent to movies component as props -> movie component where the data is then handled and rendered onto the page",
        img: moviedb, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "" //insert heroku link
    },
    {
        id: 4,
        name: "Employee Database App",
        description: "",
        img: webdatabase, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "https://github.com/willvuong/react-422-employee-database-app" //insert heroku link
    },
    {
        id: 5,
        name: "Studio 6ix: Barbershop Website",
        description: "",
        img: studio, //insert image src
        demoLink: "//www.studio6ix.ca", //insert webside url
        sourceCode: "" //insert heroku link
    }
]

export default projectsData;