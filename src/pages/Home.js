import MainPlate from "./Home/MainPlate";
import '../css/home.css';
import SecondPlate from "./Home/SecondPlate";
import ThirdPlate from "./Home/ThirdPlate";

const Home = () => {
    return (
        <div className="home">
            < MainPlate />
            < SecondPlate />
            < ThirdPlate />
        </div>
    );
}
 
export default Home
