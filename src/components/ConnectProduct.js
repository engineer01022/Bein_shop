import React,{Component} from "react";
import Cad from "./Cad";
import infoQimma from "./infoQimma";
import infoTamiuoz from "./infoTamiuoz";
import './App.css'
import Topic from "./Topic";
class ConnectProduct extends Component{
    constructor(){
        super();
        this.state={
            infoQ: infoQimma,
            infoT: infoTamiuoz,
         
        }
    }
    mapping(x){
        const items=x.map(item => <Cad 
            image={process.env.PUBLIC_URL + item.image}
            description={item.description}
            price={item.price}
            ref={item.ref}
        />)
        return items
    }
    render(){
        return(
            <div className="products">
                <div className="detail" id='detail'>
      <div style={{padding:'1rem'}} className="discuss">
      <h1>باقة قمة </h1>

<p><h5>
باقات قمة تمثل قمة التميز في عالم الرياضة، حيث تجمع بين التغطية الشاملة والجودة الفائقة لتقدم تجربة مشاهدة لا تُضاهى لعشاق الرياضة في المنطقة.</h5>
<p>أكثر من 65 قناة رياضية عالية الجودة
</p>
<p>بث مباشر لجميع مباريات الدوريات الأوروبية الكبرى
</p>
<p>جودة 4K Ultra HD للمباريات المهمة
</p>
<p>خدمة beIN CONNECT للمشاهدة عبر الإنترنت
</p>
<p>أرشيف ضخم من المباريات والبرامج الرياضية
</p>
<p>دعم فني متميز على مدار الساعة

</p>
</p>
      </div>
    <div className="photo">
      <img className="imigo" src={process.env.PUBLIC_URL + "qimma.png" }/>
    </div>
    </div> 
         
          <Topic name="تجديد باقات قمه " />
    
<div style={{display:'flex', flexWrap:'wrap' }} className="container ">
{this.mapping(this.state.infoQ)}</div>
<hr style={{ border: 'none', height: '2px', backgroundColor: '#333', marginBottom: '20px' }} />      

<div className="detail" id='detail'>
      <div style={{padding:'1rem'}} className="discuss">
        <h1>باقة التميز </h1>

        <p><h5>باقات التميز تحقق التوازن المثالي بين الجودة والقيمة، وتوفر للمشتركين تجربة رياضية متكاملة تلبي احتياجاتهم المتنوعة بأفضل الأسعار في السوق.</h5>
        <p>مجموعة منتقاة من أهم القنوات الرياضية
        </p>
        <p>تغطية شاملة للدوريات المحلية والعربية
        </p>
        <p>جودة HD عالية الوضوح
        </p>
        <p>واجهة سهلة الاستخدام
        </p>
        <p>إمكانية المشاهدة على عدة أجهزة
        </p>
        <p>أسعار تنافسية مناسبة للجميع

</p>
        </p>
      </div>
    <div className="photo">
      <img className="imigo" src={process.env.PUBLIC_URL + "tamiouz.png" }/>
    </div>
    </div> 

<Topic name="تجديد اشتراك التميز " />

<div style={{display:'flex', flexWrap:'wrap' }} className="container ">
{this.mapping(this.state.infoT)}</div>

</div>
        );
    }
}
export default ConnectProduct;
 