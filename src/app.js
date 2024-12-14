 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
import Footer from "./components/Footer";

// const styleCard={
//   backgroundColor:"yellow",
// }


// const RestaurantCard1=()=>{
//   return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//       <img className="res-logo" alt="reslogoo" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
//       <h3>Baba food</h3>
//       <h4>Biryani,North Indian,Asian</h4>
//       <h4>4.9 stars</h4>
//       <h4>30 minutes</h4>
//  </div>
//   );
// };
// const RestaurantCard2=()=>{
//   return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//       <img className="res-logo" alt="reslogoo" src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
//       <h3>KFC food</h3>
//       <h4>Pasta,North Indian,Asian</h4>
//       <h4>4.5 stars</h4>
//       <h4>35 minutes</h4>
//  </div>
//   );
// };
// const RestaurantCard3=()=>{
//   return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//       <img className="res-logo" alt="reslogoo" src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
//       <h3>Dominos food</h3>
//       <h4>Pizza,Pasta,Europian cusine</h4>
//       <h4>4.5 stars</h4>
//       <h4>35 minutes</h4>
//  </div>
//   );
// };
// const RestaurantCard4=()=>{
//   return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//       <img className="res-logo" alt="reslogoo" src="https://images.pexels.com/photos/375467/pexels-photo-375467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
//       <h3>Pizza Paradise</h3>
//       <h4>Pizza,Pasta,Europian cusine</h4>
//       <h4>4.7 stars</h4>
//       <h4>25 minutes</h4>
//  </div>
//   );
// };
// const RestaurantCard5=()=>{
//   return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//       <img className="res-logo" alt="reslogoo" src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
//       <p className="price">150 OFF</p>
//       <h3>Aapka Paradise</h3>
//       <h4>Pizza,Pasta,Europian cusine</h4>
//       <h4>4.9 stars</h4>
//       <h4>25 minutes</h4>
//  </div>
//   );
// };




const AppLayout = ()=>{
  console.log(<Body/>);
  return(
    <div className="app">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}



 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(AppLayout());









 // const heading = React.createElement("h1",{id:"heading"},"Namste React🚀");
// console.log(heading);
//React element now converted to react componenet
//  const elem = <span>React element inside element🚀</span>
// const Title =()=> (
//  <h1 className="heading" tabIndex="1">
//    Namaste react using jsx🚀
//     </h1>
//     );
    // instead of arrow function can i used normal function
    // const Title = function(){
    //    return (
    // <h1 className="head" tabIndex="5">Namaste React using JSX🚀</h1>
    //     );
    // };
//  console.log(Title);
//React functional component
// const HeadingComponent = ()=>{
//   return <h1 className="heading">Namaste React Functional Component 🚀</h1>
// };
// if i want to render Tile compenent inside a div container its easy, use angular bracket thats
// babel understand,this is how we put component inside other component known as component composition
// const number=1000;
// const HeadingComponent2 = ()=>(
//     <div id="container">
//        {Title() }
//        <Title/>
//        <Title></Title>
//     <h1 className="heading">Namaste React Functional Component 🚀</h1>;
//      </div>
// ); 
//  const heading =React.createElement("h1",{id:"heading",xyz:"abc"},"hello from react!");
//  console.log(heading);//its printing react element which is nothing but normal js object
//  const root = ReactDOM.createRoot(document.getElementById("root"));
// //  root.render(heading);
//  console.log(root);

// //  <div id="parent">
// //  <div id="child1">
// //     <h1> I am h1 tag</h1>
//      //<h2> i ma h2 tag</h2>
// //  </div>how to create this  nested type of structure using react instead of css
// //  //  <div id="child2">
// //     <h1> I am h1 tag</h1>https://github.com/Adarshraj8/namste-react
//      //<h2> i ma h2 tag</h2>
// //  </div>
// //</div>
//  const parent = React.createElement("div",{id:"parent"},
//    [ React.createElement("div",{id:"child"},
//        [ React.createElement("h1",{},"This is Namaste React 🚀"),
//         React.createElement("h2",{},"i am h2 tag")
//     ]) ,
//     React.createElement("div",{id:"child2"},
//         [ React.createElement("h1",{},"i am h1tag"),
//          React.createElement("h2",{},"i am h2 tag")
//      ])]);

//  root.render(parent);
 