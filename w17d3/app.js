// var div = $("<div></div>").addClass("container");
// var table = $(" <table> </table>").addClass("table table-striped");
// var thead = $("<thead></thead>");
// var tr = $("<tr></tr>");
// var th1 = $("<th></th>").text("Number");
// var th2 = $("<th></th>").text("Squares");
// tr.append(th1);
// tr.append(th2);
// thead.append(tr);

const { object, func } = require("prop-types");

// var tbody = $("<tbody></tbody>");
// for (var i = 1; i <= 10; i++) {
//   var tr = $("<tr></tr>");
//   var td1 = $("<td></td>").text(i);
//   var td2 = $("<td></td>").text(i * i);
//   tr.append(td1);
//   tr.append(td2);
//   tbody.append(tr);
// }
// table.append(thead);
// table.append(tbody);
// div.append(table);
// $("body").append(div);

var firstsec =
  "<div class='container'><table class='table table-striped'><thead><tr><th>Number</th><th>Squares</th></tr></thead><tbody>";

var lastsec = "</tbody></table></div>";

var main_sec = "";

for (i = 1; i <= 10; i++) {
  small_sec = `

      <tr>
      <td>${i}</td>
      <td>${i * i}</td>
    </tr>
      `;
  main_sec = main_sec + small_sec;
}

combine_res = firstsec + main_sec + lastsec;
$("body").append(combine_res);
function Person(name) {
  this.name = name;
}
const hello = Person("Laks");
console.log(hello);
