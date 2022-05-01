//BLOCK 1:
//Lấy thông tin của khối 1;
function getInfoBlockOne() {
  let scoresone = document.getElementById("inpToan").value * 1;
  let scorestwo = document.getElementById("inpLy").value * 1;
  let scoresthree = document.getElementById("inpHoa").value * 1;
  let result = averageScore(scoresone, scorestwo, scoresthree);
  return result;
}
//Thực hiện sự kiện:
document.getElementById("btnKhoi1").addEventListener("click", () => {
  let result = getInfoBlockOne();
  document.getElementById("tbKhoi1").innerHTML = `Average: ${result}`;
});
//Cho cái fn lấy giá trị vào nữa!
//
const averageScore = (...subjectScoreS) => {
  let total = 0;
  let average = 0;
  subjectScoreS.forEach((subjectScore, index, array) => {
    total += subjectScore;
    average = total / array.length;
  });
  //console.log(average);
  return average;
};
//averageScore(5,6,7,8);
//-------------------------------------------------------------------------
//BLOCK 2:
//Lấy thông tin của khối 2;
function getInfoBlockTwo() {
  let scoresone = document.getElementById("inpVan").value * 1;
  let scorestwo = document.getElementById("inpSu").value * 1;
  let scoresthree = document.getElementById("inpDia").value * 1;
  let scoresfour = document.getElementById("inpEnglish").value * 1;
  let result = averageScore(scoresone, scorestwo, scoresthree, scoresfour);
  return result;
}
//Thực hiện sự kiện:
document.getElementById("btnKhoi2").addEventListener("click", () => {
  let result = getInfoBlockTwo();
  document.getElementById("tbKhoi2").innerHTML = `Average: ${result}`;
});
