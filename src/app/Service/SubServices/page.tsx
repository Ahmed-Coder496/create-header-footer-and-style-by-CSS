import HeaderPage from "@/app/component/Header/Header";
import Footer from "@/app/component/Header/Footer/Footer";
import SubServices from "./subservices.module.css"

const SubServicePage = ()=>{
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
            <h1 className="h1">This is a SubService Page</h1>
            <span className={SubServices.SubSer}>Fun Website</span>
            <span className={SubServices.SubSer}>Cool Website</span>
            <span className={SubServices.SubSer}>Simple Website</span>
            <span className={SubServices.SubSer}>Beautiful Website</span>
            <span className={SubServices.subSer}>Creative Website</span>
            <span className={SubServices.subSer}>Logical Website</span>
            <Footer></Footer>
        </div>
    )
};

export default SubServicePage;