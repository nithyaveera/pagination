//create h1 and p tag for title and description for my website............
let divcont = createheader("div", "class", "container")
divcont.setAttribute("id","top")
document.body.append(divcont)

let title = createheader("h1","id","title")
title.innerHTML = "pagination";
divcont.append(title)

let descrip = createheader("p","id","description")
descrip.innerHTML = "for splits content into pages,enhanching and user experience";
divcont.append(descrip)


function createheader(tagName,attri,attriName) {
    let elem = document.createElement(tagName)
    elem.setAttribute(attri,attriName)
    return elem
}
//table creation
let divtable = createtable("div", "class", "table-responsive container d-flex justify-content-center")
document.body.append(divtable)

let tabElem = createtable("table","id","tablee")
tabElem.setAttribute("class","table table table-striped ")
divtable.append(tabElem)

let tableBody = createtable("tbody", "id", "t-body");
tabElem.append(tableBody)

let tableHead = createtable("thead", "id", "table-head");
tabElem.append(tableHead)

let trow = createtable("tr");
tableHead.append(trow)

let thead1 = createtable("th");
thead1.innerText = "Id";

let thead2 = createtable("th");
thead2.innerText = "Name";

let thead3= createtable("th");
thead3.innerText = "Email";
trow.append(thead1,thead2,thead3)


function createtable(tagName,attri,attriName) {
    let elem = document.createElement(tagName)
    elem.setAttribute(attri,attriName)
    return elem
}

//pagination button creation

let divForPagination = document.createElement("div")
divForPagination.setAttribute("id","buttons")
divForPagination.setAttribute("class", "d-flex justify-content-center")
document.body.append(divForPagination)

let firBtn = btnCreation("button", "id", "first-btn", "btn", "btn-outline-success", "First")
divForPagination.append(firBtn)

let previousBtn = btnCreation("button", "id", "previous-btn", "btn", "btn-outline-success", "Previous")
divForPagination.append(previousBtn)

let btn1 = btnCreation("button", "id", "one-btn", "btn", "btn-outline-success", "1")
divForPagination.append(btn1)

let btn2 = btnCreation("button", "id", "two-btn", "btn", "btn-outline-success", "2")
divForPagination.append(btn2)

let btn3 = btnCreation("button", "id", "three-btn", "btn", "btn-outline-success", "3")
divForPagination.append(btn3)

let btn4 = btnCreation("button", "id", "four-btn", "btn", "btn-outline-success", "4")
divForPagination.append(btn4)

let btn5 = btnCreation("button", "id", "five-btn", "btn", "btn-outline-success", "5")
divForPagination.append(btn5)

let btn6 = btnCreation("button", "id", "six-btn", "btn", "btn-outline-success", "6")
divForPagination.append(btn6)

let btn7 = btnCreation("button", "id", "seven-btn", "btn", "btn-outline-success", "7")
divForPagination.append(btn7)

let btn8 = btnCreation("button", "id", "eight-btn", "btn", "btn-outline-success", "8")
divForPagination.append(btn8)

let btn9 = btnCreation("button", "id", "nine-btn", "btn", "btn-outline-success", "9")
divForPagination.append(btn9)

let btn10 = btnCreation("button", "id", "ten-btn", "btn", "btn-outline-success", "10")
divForPagination.append(btn10)

let nextBtn = btnCreation("button", "id", "next-btn", "btn", "btn-outline-success", "Next")
divForPagination.append(nextBtn)

let lastBtn = btnCreation("button", "id", "last-btn", "btn", "btn-outline-success", "Last")
divForPagination.append(lastBtn)


function btnCreation(tagName, att, attvalue, classone, classtwo, innercontent) {
    let btnelem = document.createElement(tagName)
    btnelem.setAttribute(att,attvalue)
    btnelem.classList.add(classone, classtwo)
    btnelem.innerText = innercontent
    return btnelem
}

//----fetch data and display in table also add events to button

//fetch
const url = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"

const xmlhttp = new XMLHttpRequest()

xmlhttp.open("GET", url)

xmlhttp.onload = () => {
    let response = JSON.parse(xmlhttp.response)
    let idarray = []
    let namearray = []
    let emailarray=[]
    for (i = 0; i < response.length; i++){

        var id = response[i].id
        idarray.push(id)
        //console.log(id)
        var name = response[i].name
        namearray.push(name)
        //console.log(name)
        var email = response[i].email
        emailarray.push(email)
        //console.log(email)
    }
//add buttonevent
    let startval = 0
    
    let first = document.getElementById("first-btn")
    first.addEventListener("click", () => {
        startval = 0
        displayContent(startval)
    })
    
    let pre = document.getElementById("previous-btn")
    pre.addEventListener("click", () => {
        if (startval > 0) {
            startval = startval - 10
            displayContent(startval)
        }
    })

    let onebtn = document.getElementById("one-btn")
    onebtn.addEventListener("click", () => {
        startval = 0
        displayContent(startval)
    })

    let twobtn=document.getElementById("two-btn")
    twobtn.addEventListener("click", () => {
        startval=10
        displayContent(startval)
    })

    let thirdbtn=document.getElementById("three-btn")
    thirdbtn.addEventListener("click", () => {
        startval=20
        displayContent(startval)
    })

    let fourthbtn=document.getElementById("four-btn")
    fourthbtn.addEventListener("click", () => {
        startval=30
        displayContent(startval)
    })

    let fivebtn=document.getElementById("five-btn")
    fivebtn.addEventListener("click", () => {
        startval=40
        displayContent(startval)
    })
    
    let sixbtn=document.getElementById("six-btn")
    sixbtn.addEventListener("click", () => {
        startval=50
        displayContent(startval)
    })

    let sevenbtn=document.getElementById("seven-btn")
    sevenbtn.addEventListener("click", () => {
        startval=60
        displayContent(startval)
    })

    let eightbtn=document.getElementById("eight-btn")
    eightbtn.addEventListener("click", () => {
        startval=70
        displayContent(startval)
    })

    let ninebtn=document.getElementById("nine-btn")
    ninebtn.addEventListener("click", () => {
        startval=80
        displayContent(startval)
    })

    let tenbtn=document.getElementById("ten-btn")
    tenbtn.addEventListener("click", () => {
        startval=90
        displayContent(startval)
    })

    let nextbtn=document.getElementById("next-btn")
    nextbtn.addEventListener("click", () => {
        if (startval < 90 ) {
            startval=startval+10
        displayContent(startval)
        } 
    })

    let lastbtn = document.getElementById("last-btn")
    lastbtn.addEventListener("click", () => {
        startval = 90
        displayContent(startval)
    })



//displaycontent in tablerow
    function displayContent(value) {
        let tbody = document.getElementById("t-body")
        tbody.innerHTML=""
        
        for (i = value; i < value+10; i++){
            createrow(`${idarray[i]}`,`${namearray[i]}`,`${emailarray[i]}`)
            function createrow(data1, data2, data3) {
                let tbodyrow = document.createElement("tr")
                tbody.append(tbodyrow)

                let td1 = document.createElement("td")
                td1.textContent = data1

                let td2 = document.createElement("td")
                td2.textContent = data2

                let td3 = document.createElement("td")
                td3.textContent = data3
                tbodyrow.append(td1,td2,td3)
            }
        }
        
    }
    displayContent(startval)
}
xmlhttp.send()