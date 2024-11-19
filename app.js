 const heading =React.createElement("h1",{id:"heading",xyz:"abc"},"hello from react!");
 console.log(heading);//its printing react element which is nothing but normal js object
 const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);
 console.log(root);

//  <div id="parent">
//  <div id="child1">
//     <h1> I am h1 tag</h1>
     //<h2> i ma h2 tag</h2>
//  </div>how to create this  nested type of structure using react instead of css
//  //  <div id="child2">
//     <h1> I am h1 tag</h1>
     //<h2> i ma h2 tag</h2>
//  </div>
//</div>
 const parent = React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child"},
       [ React.createElement("h1",{},"i am h1tag"),
        React.createElement("h2",{},"i am h2 tag")
    ]) ,
    React.createElement("div",{id:"child2"},
        [ React.createElement("h1",{},"i am h1tag"),
         React.createElement("h2",{},"i am h2 tag")
     ])]);

 root.render(parent);
 