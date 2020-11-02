var entryPoint = document.querySelector("ul");
var url =
  "https://615e24aa66ca562186805af3c7364ae3.safeframe.googlesyndication.com/safeframe/1-0-37/html/container.html";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
entryPoint.innerHTML = "Loading............";

xhr.onload = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      entryPoint.innerHTML = "";
      var li = "";
      data.map((item) => {
        li = li + `<li data-id=${item.id}>${item.title}</li>`;
      });
      entryPoint.innerHTML = li;
    } else {
      console.log("hey we have some error");
    }
  }
};

entryPoint.addEventListener("click", function (e) {
  console.dir(e.target.innerText);
});
