import React from "react";
import './App.css'
import { FaFacebook, FaInstagram, FaPhone, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function Footer(){
    return(
        <div className="footer">
        <p>اهلا بكم في عالم المتعة والجودة ... متجر مزن لبيع رسيفرات بي ان المخفضة باسعار تنافسية </p>
        <FaInstagram className="icons"/>
        <FaFacebook className="icons"/>
        <hr />
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <div>
                <h4>روابط مهمه </h4>
                   <p><a>سياسة الاستخدام و الخصوصية</a></p> 
                   <p><a>سياسة الشحن و الاسترجاع</a></p> 

            </div>
            <div>
            <h4>تواصل معنا </h4>
            <p> <span ><FaWhatsapp className="icons"/></span>+966544294000 </p>
            <p><a> <FaPhone className="icons"/> +966544294000 </a></p>
            <p><a> <FaVoicemail className="icons"/> +966544294000 </a></p>

            </div>
        </div>
<hr />
<p style={{paddingBottom:'3rem'}}>جميع الحقوق محفوظة | 2025 متجر مزن</p>
        </div>
    );
}
export default Footer;