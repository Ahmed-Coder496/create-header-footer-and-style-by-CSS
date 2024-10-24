import HeaderStyle from "./header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <div className={HeaderStyle.pDiv}>
      <div>
        <img src="data:image/jpeg;base64,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" alt="img" className={HeaderStyle.img1}/>
      </div>
      <div className={HeaderStyle.dDiv}>
           <Link href="/Home" className={HeaderStyle.HeadServices} target="_blank">
           <span className="h1">Home</span>
           </Link>
           <Link href="/About" className={HeaderStyle.headServices} target="_blank">
                <span className="h1">About</span>
           </Link>
           <Link href="/Contact" className={HeaderStyle.headServices} target="_blank">
                <span className="h1">Contact</span>
           </Link>
           <Link href="/Service" className={HeaderStyle.headServices} target="_blank">
                <span className="h1">Service</span>
           </Link>
           <Link href="/Login" className={HeaderStyle.login} target="_blank">
                <span className="h1">Login</span>
           </Link>
           </div>
    </div>
  );
}