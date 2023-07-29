const heading = React.createElement
("div",
{id:"parent"},
[React.createElement("div",
{id:"child"},[
    React.createElement("h1",{},"I'am an h1 tag"),
    React.createElement("h1",{},"I'am an h1 tag")
]),React.createElement("div",{id:"Child2"},[
    React.createElement("h1",{},"I'am an h1 tag"),
    React.createElement("h1",{},"I'am an h1 tag"),
])
]);
         ReactDOM.render(heading, document.getElementById("root"));