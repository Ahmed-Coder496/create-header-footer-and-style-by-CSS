import Link from "next/link"
import HeaderPage from "../component/Header/Header"
import Footer from "../component/Header/Footer/Footer"
import Image from "next/image"
import LoginStyle from "./login.module.css"

function Login () {
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
            <h1>Login Page</h1>
            <p>You have already have an account So Login</p>
            <p>You have'nt account so you can SIGN UP and craete an account</p>
            <Image src={require("../../../assets/login page.png")} alt="lgoin page" className={LoginStyle.Logimg}/>
            <Link href="/Login/Signup" className="h1">SignUp</Link>
            <Footer></Footer>
        </div>
    )
}

export default Login