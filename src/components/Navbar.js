const links = ["about me", "portfolio", "contact", "resume"]

function Navbar({ setCurrentPage }) {

    const handleClick = (event) => {
        setCurrentPage(event.target.id)
    }

    return (

        <nav>
            <h1>
                Lewis Chatham - Software developer
            </h1>
            <div>
                {links.map((link, index) => <button id={link.split(" ")[0].toLowerCase()} onClick={handleClick} key={index}> {link} </button>)}
            </div>
        </nav>

    )
}

export default Navbar;