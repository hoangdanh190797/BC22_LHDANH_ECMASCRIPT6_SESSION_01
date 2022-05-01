const colorList = [
    "pallet",
    "viridan",
    "pewter",
    "cerulean",
    "vermil",
    "lion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar"
];
//Yêu cầu là viết fn để loading mấy cái cụt màu lên;
const loadingColor = (colorList) => {
    let content ="";
    for(let value of colorList){
        //console.log(value); - OK đã loading ra được!
        content += `
        <button 
        class="color-button ${value}"
        onclick="changeColor('${value}')"
        >
        ...</button>
        `
    }
    document.getElementById("colorContainer").innerHTML = content;
}
loadingColor(colorList);
//Bây giờ, yêu cầu là tạo ra Arrow function click vào thay đổi màu
//cho căn nhà;
function changeColor (colorS) {
    //Nhớ tạo trên nút button cái Event onlick trùng với tên fn đang
    //viết;
    //for(let value of colorList){
        document.getElementById("house").className = "house " + colorS;
    //}
}
//onclick="changeColor('${value}')"
//changeColor(colorList);