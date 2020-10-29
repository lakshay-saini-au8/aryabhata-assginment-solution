/*

Create elements with the help of JavaScript and display it on the web page.
Follow the below structure:
<div>
<h1>Dom Manipulation</h1>
<ul>
<li>div</li>
<li>ul</li>
<li>li</li>
</ul>
</div>


*/

var target = document.getElementsByTagName("body")[0];

var d_i_v = "<div></div>";
target.insertAdjacentHTML("afterbegin", d_i_v);

var heading = "<h1>Dom Manipulation</h1>";
target.insertAdjacentHTML("beforeend", heading);

var u_l = "<ul> <li>div</li> <li>ul</li> <li>li</li>  </ul>";
target.insertAdjacentHTML("beforeend", u_l);

target.style.backgroundColor = "aqua";
target.style.listStyleType = "none";
target.style.color = "darkblue";

// var body = document.querySelector("body");
// var div = document.createElement("div");
// div.style.padding = "50px";
// div.style.width = "20px";
// div.style.height = "20px";
// div.style.background = "black";
// body.appendChild(div);
// const data = `

// <div>
// <h1>Dom Manipulation</h1>
// <ul>
// <li>div</li>
// <li>ul</li>
// <li>li</li>
// </ul>
// </div>

// `;

// body.insertAdjacentHTML("afterbegin", data);
// var div = document.querySelector("div");
// console.log(div);
