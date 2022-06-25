import "./Home.css";
function Terminal() {
    return (
        <div>
            <h1>Terminal</h1>
        </div>
    );
}
function Home() {
    return (
        <section id="Home">
            <div className="home-left">
                <h1 className="home-title">Hi, I'm <h1 id="home-firstname" className="home-title">Tai</h1></h1>
                <h2 className="home-title">I'm creating with Node.js</h2>
                <p className="home-body"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
            </div>
            <div className="home-right">
                <Terminal />
            </div>
        </section>
    );
}
export default Home;