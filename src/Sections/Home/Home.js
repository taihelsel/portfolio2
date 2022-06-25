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
                <div id="home-head-container">
                    <h1 className="home-title home-head">Hi, I'm </h1><h1 className="home-title home-head" id="home-firstname">&nbsp;Tai</h1>
                </div>
                <h2 className="home-title home-subhead">I'm creating with Node.js</h2>
                <p className="home-body"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
            </div>
            <div className="home-right">
                <Terminal />
            </div>
        </section>
    );
}
export default Home;