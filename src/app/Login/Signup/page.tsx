import HeaderPage from "@/app/component/Header/Header"
import Footer from "@/app/component/Header/Footer/Footer"
import SignupStyle from "./signup.module.css"
import Image from "next/image"

function SignUp() {
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
            <h1 className="h1">SignUp Now</h1>
            <p>Create an account</p>
            <Image src={require("../../../../assets/Signup.png")} alt="SingUP Page" className={SignupStyle.signup}/>
            <Footer></Footer>
        </div>
    )
}
export default SignUp