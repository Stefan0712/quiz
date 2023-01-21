import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div className="home-page">
            <h1 className="title-1 h1 white-text">Au inceput recrutarile pentru LSUOC!</h1>
            <h2 className="subtitle-1 h2 white-text">Afla ce departament ti se potriveste</h2>
            <Link to='/quiz-page'><button className="start-quiz-btn">Start quiz</button></Link>
        </div>
    );
}
 
export default Home;