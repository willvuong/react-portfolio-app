import hangman from "../websiteScreenShots/hangman.png"
import todo from "../websiteScreenShots/todo.png"
import moviedb from "../websiteScreenShots/moviedb.png"
import studio from "../websiteScreenShots/studio.png"
import webdatabase from "../websiteScreenShots/webdatabase.png"

const projectsData = [
    {
        id: 1,
        name: "Hangman",
        description: "",
        img: hangman, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "https://github.com/willvuong/react-hangman-app" //insert heroku link
    },
    {
        id: 2,
        name: "To-Do App",
        description: "",
        img: todo, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "https://github.com/willvuong/react-to-do-app" //insert heroku link
    },
    {
        id: 3,
        name: "MovieDB",
        description: "",
        img: moviedb, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "" //insert heroku link
    },
    {
        id: 4,
        name: "Employee DB Web433 App",
        description: "",
        img: webdatabase, //insert image src
        demoLink: "", //insert webside url
        sourceCode: "https://github.com/willvuong/react-422-employee-database-app" //insert heroku link
    },
    {
        id: 5,
        name: "Studio 6ix",
        description: "",
        img: studio, //insert image src
        demoLink: "studio6ix.ca", //insert webside url
        sourceCode: "" //insert heroku link
    }
]

export default projectsData;