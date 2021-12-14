const social = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lewis-chatham-260765184/",
        content: "https://www.linkedin.com/in/lewis-chatham-260765184/",
        image: ""
    },
    {
        name: "Github",
        url: "https://github.com/LewisChatham",
        content: "https://github.com/LewisChatham",
        image: ""
    },
    {
        name: "Email",
        url: "mailto:lewis.chatham@outlook.com",
        content: "lewis.chatham@outlook.com",
        image: ""
    },
    {
        name: "CV",
        url: "https://docs.google.com/document/d/13LwRRNGEmgu_zdTLNjA49qMEIABJMa0QWhvoyT_tEz4/edit?usp=sharing",
        content: "CV",
        image: ""
    }
];


function Footer() {
    return (
        <footer>
            <div className="links">
                {social.map((link, index) => <a href={link.url} target="_blank" rel="noreferrer" key={index}> {link.name} </a>)}
            </div>
        </footer>
    )
}

export default Footer;
