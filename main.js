const accideButtonsBlock = document.getElementById("accide_buttons");
const destinationHTML = document.getElementById("inserted");
const extraCssLink = document.getElementById("extra_css");

const help_button = document.getElementById("help_button");

let site_data = getSiteData();
let current_lb_btn = document.getElementById("lb1");
current_lb_btn.parentElement.classList.add("active");
let current_lb = {};
let current_accide_btn = null;
help_button.addEventListener("click", helpHandler);
helpHandler();

const all_buttons = document.getElementsByTagName("button");

async function insertBlock(sourceHTML, sourceCSS = "") {
  let myObject = await fetch(sourceHTML);
  if (myObject.status == 200) {
    let myText = await myObject.text();
    destinationHTML.innerHTML = myText;
    extraCssLink.href = sourceCSS;
  } else {
    destinationHTML.innerHTML = `<p>${myObject.statusText}</p> <br><p>Coming soon...</p>`;
    extraCssLink.href = "";
  }
}
async function getSiteData(source = "/project_structure.json") {
  const response = await fetch(source);
  const { data } = await response.json();
  site_data = data;
}

for (button of all_buttons) {
  if (button.id.startsWith("lb")) {
    button.addEventListener("click", lbButtonHandler);
  }
}

function setCurrentBtnActive(new_btn) {
  current_lb_btn.parentElement.classList.remove("active");
  new_btn.parentElement.classList.add("active");
  current_lb_btn = new_btn;
  accideButtonsBlock.innerHTML = "";
  destinationHTML.innerHTML = "";
  extraCssLink.href = "";
}

function lbButtonHandler(event) {
  current_lb = site_data.labs[event.target.id];
  setCurrentBtnActive((new_btn = event.target));
  for (button in current_lb.buttons) {
    createAcideButton(button, current_lb.buttons[button]);
  }
  if (accideButtonsBlock.firstChild) {
    accideButtonsBlock.style.display = "block";
    accideButtonsBlock.firstChild.firstChild.click();
  } else {
    destinationHTML.innerHTML = "<p>Coming soon...</p>";
    accideButtonsBlock.style.display = "none";
  }
}

function createAcideButton(button_name, button_data) {
  let div_button = document.createElement("div");
  div_button.classList.add("nav-item");
  let button = `<button id=${button_name} class="button" type="button"> ${button_data.title}</button>`;
  div_button.innerHTML = button;
  let html_file = current_lb.rel_path + button_data.html_file;
  let css_file = current_lb.rel_path + button_data.css_file;
  let files = { html_file, css_file };
  div_button.firstChild.addEventListener(
    "click",
    acideButtonHandler.bind(files)
  );
  accideButtonsBlock.append(div_button);
}

async function acideButtonHandler(event) {
  await insertBlock(this.html_file, this.css_file);
  if (current_accide_btn) {
    current_accide_btn.parentElement.classList.remove("active");
  }
  current_accide_btn = event.target;
  current_accide_btn.parentElement.classList.add("active");
  PR.prettyPrint();
}
async function helpHandler() {
  let HTML_file = "./html/help/help.html";
  let CSS_file = "./html/help/help.css";
  accideButtonsBlock.innerHTML = "";
  accideButtonsBlock.style.display = "none";
  if (current_lb_btn) {
    current_lb_btn.parentElement.classList.remove("active");
  }
  await insertBlock(HTML_file, CSS_file);
}
