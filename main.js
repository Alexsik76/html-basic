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
help_button.addEventListener("click", helpHandler);
async function helpHandler(){
  let HTML_file = "./html/help/help.html";
  let CSS_file = "./html/help/help.css";
  insertBlock(HTML_file, CSS_file);
};
