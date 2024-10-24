import Link from "next/link";
import HeaderPage from "../component/Header/Header";
import Footer from "../component/Header/Footer/Footer";
import ServiceStyle from "./service.module.css"

const ServicePage = ()=>{
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
            <p className={ServiceStyle.para}>How can I help you</p>
            <p className={ServiceStyle.para}>Web design that makes your brand shine.</p>
            <h1 className="h1">Our Service</h1>
            <span className={ServiceStyle.Para}>Best Quaility Design</span>
            <span className={ServiceStyle.Para}>Responsive Web Design</span>
            <span className={ServiceStyle.Para}>Custom Website Design</span>
            <span className={ServiceStyle.Para}>E-commerce Website Design</span>
            <div className={ServiceStyle.para}>You like our services so Contact Us</div>
            <Link href="/Service/SubServices" className="h1">Sub Services</Link>
            <Footer></Footer>
        </div>
    )
};

export default ServicePage;