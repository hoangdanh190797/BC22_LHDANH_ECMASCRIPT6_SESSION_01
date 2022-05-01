function getInfo() {
  let stringS = document.getElementById("headingH2").innerText;
  let charS = [...stringS];
  console.log(charS);
  return charS;
}
getInfo();
//
const addSpanInH2 = (Chars) => {
  let content = "";
  for (let value of Chars)
    content += `
        <span>${value}</span>
    `;
  document.getElementById("headingH2").innerHTML = content;
};
addSpanInH2(getInfo());
