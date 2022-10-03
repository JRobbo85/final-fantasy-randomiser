const Footer = () => {
    return (
        <footer id = "footBar">
    <span id = "credits">Made by John Robertson - Git Repo <a href  = "https://github.com/JRobbo85" target="blank">HERE</a></span>
    
    <div class = "logos">
    <a href="https://twitter.com/Sector_6_" target="blank"><img id = "twitter" alt = "Twitter" src={require('./assets/twitter.png')} /></a>
    <a href="https://www.youtube.com/c/Sector6UK/videos" target="blank"><img id = "yt" alt="YouTube" src={require('./assets/yt.jpg')} /></a>
    <a href="https://www.linkedin.com/in/john-robertson-9a98a5156/" target="blank"><img id = "linkedIn"alt="LinkedIn" src={require('./assets/linkedin.png')} /></a>
    </div>
</footer>
    )
}

export default Footer;