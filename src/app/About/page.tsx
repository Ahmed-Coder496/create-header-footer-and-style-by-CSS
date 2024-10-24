import AboutStyle from "./about.module.css"
import Footer from "../component/Header/Footer/Footer";
import HeaderPage from "../component/Header/Header";


const AboutPage = ()=>{
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
            <div>
            <h1 className="h1">About Us</h1>
            <p className={AboutStyle.para}>
                ClaySys was founded to deliver technology solutions that positively impacted the business, versus just technology solutions that were technically excellent, but may not have delivered on the key business objectives. We achieve this through a structured methodology that maps the business impact on every aspect of the technology solution being designed and developed. The core team at ClaySys are tenured IT Consultants who were involved in large scale technology projects starting from the early nineties. The innovative key-employee retention policies and incentives that we have structured ensure that our key employees stay with ClaySys for the long term, thus delivering incremental value to our clients, as we understand their business better. Our investments into product development to address some of the major holistic pain points related to software development and maintenance, keep us on the cutting edge of technology and well positioned to deliver exponential value to our clients.
            </p>
            <Footer></Footer>
            </div>
        </div>
    )
};

export default AboutPage;


