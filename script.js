import React from "react";
import ReactDOM from "react-dom/client";

function Header(){
    return (
        <div style={{display:"flex",justifyContent:"space-around",marginBottom:"10px",backgroundColor:"pink",alignItems:"center"}}>
            <img src="https://www.pngall.com/wp-content/uploads/17/Myntra-Logo-Eye-Catching-Design-PNG-thumb.png" height="50px" width="50px"/>
            <input text="text"></input>
            <div>
                <a href="#">Profile</a>
                <a href="#">Wishlist</a>
                <a href="#">Bag</a>
            </div>
        </div>
    );
}

function Card(props){
    return (
        <div style={{border:"2px solid black",padding:"10px"}}>
            <img src="https://cdn-ildmmeg.nitrocdn.com/HsBoHCElQfPSMjUNFwFaglHkPqsfelDP/assets/images/optimized/rev-b8a992c/hespokestyle.com/wp-content/uploads/2024/06/casual-clothes-for-men-dressing-down-guide-672x752.jpg" height="200px" widht="200px"/>
            <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop Now</h2>
            </div>
            
        </div>
    );
}

const arr=[{cloth:"T-shirt",offer:"20-50% Off"},{cloth:"shirt",offer:"30-70% Off"},{cloth:"pant",offer:"40-90% Off"},{cloth:"troushers",offer:"50-100% Off"}];
function App(){
    return (
    <div>
        <Header/>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            {
            arr.map((value,index)=>
                <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }
        </div>
    </div>
    ); 
}
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
