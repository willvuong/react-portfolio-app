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
        img: hangman, 
        demoLink: "https://radiant-ocean-29472.herokuapp.com/",
        sourceCode: "https://github.com/willvuong/react-hangman-app" 
    },
    {
        id: 2,
        name: "To-Do App",
        description: "A to-do list using React in order to add, delete and track task. Created functions that were passed into components as props that served the purpose of editing the task list. React useStates were incorporated in order to display/close the + button (add new task) and to add new task components into the task useState array.",
        img: todo, 
        demoLink: "https://fast-bayou-13462.herokuapp.com/",
        sourceCode: "https://github.com/willvuong/react-to-do-app"
    },
    {
        id: 3,
        name: "Movie Database App",
        description: "This movie database application pulls data from an API in order to display specfically queried movies from the user. A useState is intialized as null which it then used for storing queried data that the user enters in the search bar. All movies that match the specified keyword is firstly searched through the API -> converted to JSON objects -> results sent to movies component as props -> movie component where the data is then handled and rendered onto the page",
        img: moviedb,
        demoLink: "https://stormy-shore-45972.herokuapp.com/",
        sourceCode: "https://github.com/willvuong/react-movie-app"
    },
    {
        id: 4,
        name: "Employee Database App",
        description: "A database application that fetches data from an API that includes information about an employee database. Multiple components are utilized in order to make up the websites layout.",
        img: webdatabase,
        demoLink: "https://dry-meadow-00547.herokuapp.com/",
        sourceCode: "https://github.com/willvuong/react-422-employee-database-app"
    },
    {
        id: 5,
        name: "Studio 6ix: Barbershop Website",
        description: "A website that displays information about the barbershop's work, services offered, staff members, and contact information for a simple and meaningful way. This website was built on Wordpress and uses plugins that helped display information like a slideshow, Instagram feed, and map.",
        img: studio,
        demoLink: "//www.studio6ix.ca",
        sourceCode: "//www.studio6ix.ca"
    }
]

export default projectsData;