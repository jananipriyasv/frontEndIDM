let head=document.createElement("h2");
let body=document.body;
head.innerHTML="Hello world"
let para=document.createElement("p")
para.innerHTML="this is demo "
body.append(head)
body.append(para);
let data=[
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "version": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "language": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
      "version": 1.88
    },
    {
        "name": "Aamir Solangi",
        "language": "Sindhi",
        "id": "IAKPO3R4761JDRVG",
        "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
        "version": 7.27
      }]

data.map((item)=>{
    console.log(item.name)
})


let main=document.getElementById("main");

data.map((item)=>{
    console.log(item);
    let h2=document.createElement("h2");
    h2.innerHTML=item.name
    h2.style.backgroundColor="wheat"
    let para=document.createElement("p")
    para.innerHTML=item.language
    let para1=document.createElement("p")
    para1.innerHTML=item.bio
    let h4=document.createElement("h4")
    h4.innerHTML=item.version
    main.append(h2)
    main.append(para)
    main.append(para1)
    main.append(h4)
})