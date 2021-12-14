function ProjectCard({ project }) {
    return (
        <>
            <a href={project.url}>
                <div className="project">
                    <h2>{project.name}</h2>
                    <p>Vanilla JS, CSS & Html</p>
                    <form action={project.repoURL}>
                        <button>Github</button>
                    </form>
                </div>
            </a>
        </>
    )
}
export default ProjectCard;