const container = document.querySelector('.container');
var showorganic_desc = false;
const organicleaf = `<svg class="organicsvg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 11 11;" xml:space="preserve" width="512px" height="512px">
<g><path style="opacity:0.965" fill="#020000" d="M 233.5,-0.5 C 248.167,-0.5 262.833,-0.5 277.5,-0.5C 367.555,10.0943 435.388,54.4276 481,132.5C 497.855,164.278 508.022,197.945 511.5,233.5C 511.5,248.167 511.5,262.833 511.5,277.5C 500.905,367.557 456.571,435.39 378.5,481C 373.361,483.591 369.028,482.758 365.5,478.5C 363.923,474.803 364.256,471.303 366.5,468C 449.38,420.682 492.046,349.015 494.5,253C 490.902,162.434 450.569,93.767 373.5,47C 314.38,15.3872 252.38,8.22055 187.5,25.5C 185.701,25.423 184.034,24.923 182.5,24C 181.267,22.3333 179.933,20.8333 178.5,19.5C 178.175,14.618 180.175,11.118 184.5,9C 200.739,4.58466 217.072,1.41799 233.5,-0.5 Z"/></g>
<g><path style="opacity:1" fill="#fd6364" d="M 365.5,478.5 C 359.914,481.029 354.247,483.362 348.5,485.5C 346.232,482.532 343.232,480.865 339.5,480.5C 266.619,505.372 196.952,498.539 130.5,460C 62.6756,416.423 24.8423,354.256 17,273.5C 12.8552,187.309 44.3552,117.476 111.5,64C 125.847,53.487 141.18,44.487 157.5,37C 160.154,33.6727 161.154,29.8394 160.5,25.5C 166.562,23.7015 172.562,21.7015 178.5,19.5C 179.933,20.8333 181.267,22.3333 182.5,24C 184.034,24.923 185.701,25.423 187.5,25.5C 252.38,8.22055 314.38,15.3872 373.5,47C 450.569,93.767 490.902,162.434 494.5,253C 492.046,349.015 449.38,420.682 366.5,468C 364.256,471.303 363.923,474.803 365.5,478.5 Z"/></g>
<g><path style="opacity:0.964" fill="#020000" d="M 160.5,25.5 C 161.154,29.8394 160.154,33.6727 157.5,37C 141.18,44.487 125.847,53.487 111.5,64C 44.3552,117.476 12.8552,187.309 17,273.5C 24.8423,354.256 62.6756,416.423 130.5,460C 196.952,498.539 266.619,505.372 339.5,480.5C 343.232,480.865 346.232,482.532 348.5,485.5C 349.26,490.814 347.26,494.647 342.5,497C 321.484,503.833 300.151,508.666 278.5,511.5C 263.5,511.5 248.5,511.5 233.5,511.5C 143.445,500.906 75.612,456.572 30,378.5C 13.1449,346.722 2.97822,313.055 -0.5,277.5C -0.5,262.833 -0.5,248.167 -0.5,233.5C 11.1013,137.105 60.1013,66.938 146.5,23C 151.956,20.3694 156.623,21.2027 160.5,25.5 Z"/></g>
<g><path style="opacity:1" fill="#030101" d="M 234.5,68.5 C 280.135,64.9087 322.135,75.4087 360.5,100C 363.428,103.257 364.262,107.091 363,111.5C 279.167,195.333 195.333,279.167 111.5,363C 108.5,365 105.5,365 102.5,363C 75.7683,324.384 64.6016,281.551 69,234.5C 77.9042,170.814 110.071,122.98 165.5,91C 187.378,79.6235 210.378,72.1235 234.5,68.5 Z"/></g>
<g><path style="opacity:1" fill="#e2e2e2" d="M 304.5,92.5 C 229.549,92.3911 170.049,122.391 126,182.5C 103.264,214.871 90.7643,250.871 88.5,290.5C 76.24,217.19 99.9067,158.357 159.5,114C 204.683,84.5698 253.016,77.4031 304.5,92.5 Z"/></g>
<g><path style="opacity:1" fill="#fefefe" d="M 304.5,92.5 C 318.065,95.965 330.732,101.465 342.5,109C 264.667,186.833 186.833,264.667 109,342.5C 99.1176,326.397 92.2843,309.063 88.5,290.5C 90.7643,250.871 103.264,214.871 126,182.5C 170.049,122.391 229.549,92.3911 304.5,92.5 Z"/></g>
<g><path style="opacity:1" fill="#030101" d="M 401.5,146.5 C 405.31,146.379 408.477,147.712 411,150.5C 445.864,204.946 452.198,262.613 430,323.5C 400.576,391.57 349.076,431.07 275.5,442C 228.731,446.518 186.231,435.351 148,408.5C 146.15,405.463 146.15,402.463 148,399.5C 232.395,314.938 316.895,230.605 401.5,146.5 Z"/></g>
<g><path style="opacity:1" fill="#fdfdfd" d="M 401.5,168.5 C 406.064,174.614 409.898,181.281 413,188.5C 434.69,245.543 429.357,299.876 397,351.5C 352.711,410.501 293.878,434.334 220.5,423C 201.932,418.925 184.599,411.925 168.5,402C 246.368,324.299 324.035,246.465 401.5,168.5 Z"/></g>
</svg>`
const container_progress = document.querySelector('.container_progress');


for (let key in produkt_liste) {
    josnproduct = produkt_liste[key]
    var addclass = ""
    if(josnproduct.isinitial) {addclass = "init"}
    organic_dispaly = josnproduct.organic != "" ? "display:block" : "display:none";
    htmlinject = `
    <div class="item box ${addclass}">
            <div class="mgr_item">
            <div class="productid invisivble">`+josnproduct.id+`</div>
            <div class="productkey invisivble">`+key+`</div>
            <div class="organicicon" style=" ${organic_dispaly} ;"> ${organicleaf}
                <div class="organicdesc">${josnproduct.organic}</div>
            </div>
            <img class="product" src="${josnproduct.productimage.imagebits}">

            <div class="underproduct">

            <p   class="product_name">`+josnproduct.productname+`</p>
            
            </div>
                
            </div>
          </div>
    `
    container.innerHTML = container.innerHTML + htmlinject
    container_progress.innerHTML = container_progress.innerHTML + `<div class="item_progress"></div>`
    // const imagediv = document.getElementById(josnproduct.id);
    
    // imagediv.style.backgroundImage = josnproduct.productimage.imagebits;
    // imagediv.style.backgroundColor = josnproduct.productimage.imagebgc;
    // imagediv.style.backgroundSize  = josnproduct.productimage.image_size;



};
container.innerHTML = container.innerHTML + '<div class="invisible-div right"></div>'

const items = container.querySelectorAll('.item');


items.forEach(item => {
    const lookfurther = item.querySelector('.lookfurther');
    const id_el =  item.querySelector('.productid');
    const key_el = item.querySelector('.productkey');
    josnproduct = produkt_liste[key_el.innerHTML]
    

    if (josnproduct.organic != ""){
        const product_name = item.querySelector(".product_name");

        const organicdesc = item.querySelector(".organicdesc")
        const organicicon = item.querySelector(".organicicon")
        product_name.style.color = "rgb(170 227 135)";

        organicicon.addEventListener("click",e => {eventorganic(organicicon,organicdesc);});

    }
})
var organicpopuptimer;


function eventorganic(organicicon,organicdesc) {
    console.log("Hier ... ")
    showorganic_desc = !showorganic_desc

    organicdesc.style.display =  showorganic_desc ?  "block": "none";

    if (showorganic_desc) {organicpopuptimer = setTimeout(() => {organicicon.click()}, 3000);}
    else {clearTimeout(organicpopuptimer)}
}