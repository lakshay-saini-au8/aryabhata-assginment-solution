import express from "express";
import hbs from "express-handlebars";
const app = express();
app.use(express.json());

app.engine(
  ".hbs",
  hbs({
    defaultLayout: "random",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.get("/", function (req, res) {
  res.render("hello", { text: "Hello" });
});
app.get("/about", function (req, res) {
  res.render("hello", { text: "abolut page" });
});

const PORT = 1111;

app.listen(PORT, console.log(`Server is running at ${PORT} no `));
