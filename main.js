
async function insertBlock(file) {
    let insert_to = document.getElementById("inserted");
    let myObject = await fetch(file);
    let myText = await myObject.text();
    insert_to.innerHTML = myText;
    let css_link = document.getElementById("included_css");
    css_link.href = "./html/lab/lab_1/sd.css";
  }
insertBlock("./html/lab/lab_1/subject_description.html")
