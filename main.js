const destinationHTML = document.getElementById("inserted");
const extraCssLink = document.getElementById("extra_css");
async function insertBlock(sourceHTML, sourceCSS="") {
    let myObject = await fetch(sourceHTML);
    if(myObject.status==200){
      let myText = await myObject.text();
      destinationHTML.innerHTML = myText;
      extraCssLink.href = sourceCSS;
    }
    else{
      destinationHTML.innerHTML = `<p>${myObject.statusText}</p>`;
    }
    
  }
insertBlock("./html/lab/lab_1/sd.html", "./html/lab/lab_1/sd.css")
const help_button = document.getElementById("help_button");
const sd_button = document.getElementById("sd_button");
help_button.addEventListener("click", helpHandler);
sd_button.addEventListener("click", sdHandler);
async function helpHandler(){
  let HTML_file = "./html/help/help.html";
  let CSS_file = "./html/help/help.css";
  await insertBlock(HTML_file, CSS_file);
};
async function sdHandler(){
  let HTML_file = "./html/lab/lab_1/sd.html";
  let CSS_file = "./html/lab/lab_1/sd.css";
  await insertBlock(HTML_file, CSS_file);
};
