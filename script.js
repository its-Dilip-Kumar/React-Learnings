import React from "react";
import ReactDOM from "react-dom/client";

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
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            {/* <Card cloth="T-Shirt" offer="20-80% OFF"/>
            <Card cloth="T-Shirt" offer="20-80% OFF"/>
            <Card cloth="T-Shirt" offer="20-80% OFF"/>
            <Card cloth="T-Shirt" offer="20-80% OFF"/>
            <Card cloth="T-Shirt" offer="20-80% OFF"/>
            <Card cloth="T-Shirt" offer="20-80% OFF"/> */}
            {
            arr.map((value,index)=>
                <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }

        </div>
        
    ); 
}
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
