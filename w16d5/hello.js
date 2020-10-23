var body = document.querySelector("body");
// var div = document.createElement("div");
// div.className = "container";
// var table = document.createElement("table");
// table.className = "table table-striped";
// var thead = document.createElement("thead");
// var tr = document.createElement("tr");
// var th1 = document.createElement("th");
// var th2 = document.createElement("th");

// th1.innerText = "Number";
// th2.innerText = "Squares";
// thead.appendChild(tr);
// tr.appendChild(th1);
// tr.appendChild(th2);
// table.appendChild(thead);
// div.appendChild(table);

// var tbody = document.createElement("tbody");
// for (let i = 1; i <= 10; i++) {
//   var tr = document.createElement("tr");
//   var td1 = document.createElement("td");
//   var td2 = document.createElement("td");
//   td1.innerText = i;
//   td2.innerText = i * i;
//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   tbody.appendChild(tr);
// }

// table.appendChild(tbody);
// body.appendChild(div);

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
body.insertAdjacentHTML("afterbegin", combine_res);
