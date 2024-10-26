document.write("Hello welcome")

// id name
let name=document.getElementById("name")
let para=document.getElementById("para")
name.innerHTML="<del>Hello world</del>";
para.textContent="<b><u>This is demo paragrapgh</u></b>"

//class
let li=document.getElementsByClassName("test");
li[0].innerHTML="Html"
li[1].innerHTML="CSS"
li[2].innerHTML="Bootstrap"
//tagname

let address=document.getElementsByTagName("address")
address[0].innerHTML="785,West erode";
address[1].innerHTML="Tamilnadu"