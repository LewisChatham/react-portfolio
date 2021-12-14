import ProjectCard from "./ProjectCard";

const projectsArr = [
    {
        name: "Simple Login/Register",
        url: "https://v8-car-reviews.herokuapp.com/",
        image: "",
        repoURL: "https://github.com/dan297/V8-car-reviews",
        id: 1
    }, {
        name: "GeoJobs",
        url: "https://lewischatham.github.io/GeoJobs/",
        image: "",
        repoURL: "https://github.com/LewisChatham/GeoJobs",
        id: 2
    }, {
        name: "Weather Dashboard",
        url: "https://lewischatham.github.io/weather-dashboard/",
        image: "",
        repoURL: "https://github.com/LewisChatham/weather-dashboard",
        id: 3
    }, {
        name: "Note Taker",
        url: "https://very-simple-note-taker.herokuapp.com/",
        image: "",
        repoURL: "https://github.com/LewisChatham/very-simple-note-taker",
        id: 4
    }
]

function Portfolio() {
    return (
        <article>
            <div className="hero">
                <h1>See my work!</h1>
                <div className="project-cards">
                    {projectsArr.map((project) => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </article>
    )
}

export default Portfolio;