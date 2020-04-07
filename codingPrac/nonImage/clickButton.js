
// ボタンがクリックされたときに呼び出される
function clickButton() {

    // クリックリされたときに作成されるdiv
    var parDiv = document.getElementById("id1");

    // 画像要素
    var img = document.createElement('img');
    img.setAttribute("src", "test.jpg");
    img.setAttribute("img", "test.jpg");

    // 画像要素をdivの子にセット
    parDiv.appendChild(img);
    
    // 間に改行をセット
    var obr = document.createElement("br");
    parDiv.appendChild(obr);
                
    // テキストをセット
    const hText = document.createElement('h1');
    hText.textContent = "ｳｨｨｨｨｨｯｽ";

    parDiv.appendChild(hText);

}
