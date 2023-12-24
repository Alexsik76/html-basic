const insert_to = document.getElementById("inserted");

async function getHtmlFile(file, block=insert_to) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    block.innerHTML = myText;
  }
getHtmlFile("./html/lab/lab_1/subject_description.html")
