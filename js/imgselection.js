const randomfurther = document.querySelector(".randomfurther")

randomfurther.addEventListener('click',movenewrandom)

function movenewrandom(){
    var randomEntry = items[Math.floor(Math.random() * items.length)];
    const middleitem = document.querySelector(".item.middle")
    if(middleitem == randomEntry) {
        movenewrandom()
    } else { randomEntry.click()
    }
}


const dropdown1 = document.querySelector(".dropdown1")
const dropdown2 = document.querySelector(".dropdown2")
const dropdown3 = document.querySelector(".dropdown3")

const dropdownContent1 =  dropdown1.querySelector(".dropdown-content")
const dropdownContent2 =  dropdown2.querySelector(".dropdown-content")
const dropdownContent3 =  dropdown3.querySelector(".dropdown-content")

const dropdownArr               = [dropdown1,dropdown2,dropdown3]
const dropdownContentArr = [dropdownContent1,dropdownContent2,dropdownContent3]


const dropdownContent1p = dropdownContent1.querySelectorAll(".dropdown-content > p")
const dropdownContent2p = dropdownContent2.querySelectorAll(".dropdown-content > p")
const dropdownContent3p = dropdownContent3.querySelectorAll(".dropdown-content > p")






dropdown1.addEventListener('click', () => {
    console.log("toggle")
    dropdownContent1.classList.toggle("open_selectionMenue")
})

dropdown2.addEventListener('click', () => {
    console.log("toggle")
    dropdownContent2.classList.toggle("open_selectionMenue")
})

dropdown3.addEventListener('click', () => {
    console.log("toggle")
    dropdownContent3.classList.toggle("open_selectionMenue")
})

document.addEventListener('click', () => {
    var targetElement = event.target.closest(".dropdownoption");

    dropdownArr.forEach(el => {
        // console.log(el , targetElement,el == targetElement)
        if(!(el == targetElement)) {
            el.querySelector(".dropdown-content").classList.remove("open_selectionMenue")
        }
    })
})

dropdownContent1p.forEach((el) => {
    el.addEventListener('click', (e) => {
        dropdown1.querySelector(".djsfsf").innerHTML = e.target.innerHTML
        shuffleWithSeed(dropdown1.querySelector(".djsfsf"),dropdown2.querySelector(".djsfsf"),(dropdown3.querySelector(".djsfsf")))
        e.stopPropagation()
    })
})

dropdownContent2p.forEach((el) => {
    el.addEventListener('click', (e) => {
        dropdown2.querySelector(".djsfsf").innerHTML = e.target.innerHTML
        shuffleWithSeed(dropdown1.querySelector(".djsfsf"),dropdown2.querySelector(".djsfsf"),(dropdown3.querySelector(".djsfsf")))
        e.stopPropagation()

    })
})

dropdownContent3p.forEach((el) => {
    el.addEventListener('click', (e) => {
        dropdown3.querySelector(".djsfsf").innerHTML = e.target.innerHTML
        shuffleWithSeed(dropdown1.querySelector(".djsfsf"),dropdown2.querySelector(".djsfsf"),(dropdown3.querySelector(".djsfsf")))
        e.stopPropagation()
   
    })
})



