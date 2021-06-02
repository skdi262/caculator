function remove0(){
    var value = document.getElementById("output").innerHTML;
    if (value=='0'){
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}
// 처음 떠있는 0이 중복 안 되게 없앰
function per(){
    remove0();
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML =value;
}
// %누르면 remove0 으로 0부터 없애고. 아웃풋에 있는 값을 % 누르면 1/100으로 나눔
function fordisplay(myvalue){
    remove0()
    document.getElementById("output").innerHTML += myvalue;
}
// 버튼 공통 해당사항 . 0없애고 자기 자리 넣음
function solve () {
    remove0();
    var equation = document.getElementById("output").innerHTML;
    var solved =  eval(equation);
    document.getElementById("output").innerHTML=solved;
}
// solve 함수는 계산하는 함수. 대체 안 되는듯 . eval 함수는 검색해보니까 스트링으로 변환해주는 함수.
function clear0() {
    document.getElementById("output").innerText="0";
}
// r1-1에 C 를 누르면 계산된 곳을 0으로 만듬