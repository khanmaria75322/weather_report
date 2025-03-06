import './Footer.css';
import img from "./weatherapi_logo.webp";

export default function Footer(){
return(<div className="footer-div">
    <img src={img} alt="img" />
    <p>shoutout to www.weatherapi.com</p>
    <a href="https://www.weatherapi.com/my/">click</a>
</div> );
}