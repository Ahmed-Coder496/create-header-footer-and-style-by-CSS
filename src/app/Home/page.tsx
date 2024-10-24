import HomeStyle from "./home.module.css"
import Image from "next/image"
import watch1 from "../../../assets/watch1.jpg"
import HeaderPage from "../component/Header/Header"
import Footer from "../component/Header/Footer/Footer"

function Home () {
    return(
        <div>
            <HeaderPage></HeaderPage>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="h1">This is a Home Page</h1>
            <p>Are you like to stay here</p>
            <Image src={watch1} alt="watch1" className={HomeStyle.img}/>
            <Image src={require("../../../assets/watch 3.jpg")} alt="watch3" className={HomeStyle.img}/>
            <Image src={require("../../../assets/watch 2.jpg")} alt="watch2" className={HomeStyle.img}/>
            <Footer></Footer>
        </div>
    )
}

export default Home