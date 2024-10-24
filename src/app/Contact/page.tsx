import Footer from "../component/Header/Footer/Footer";
import HeaderPage from "../component/Header/Header";
import Image from "next/image";
import ContactStyle from "./contact.module.css"

const ContactPage = ()=>{
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
            <div></div>
            <h1 className="h1">Contact Us</h1>
            <Image src={require("../../../assets/contact page.png")} alt="contact" className={ContactStyle.img}/>
            <Footer></Footer>
        </div>
    )
};

export default ContactPage;