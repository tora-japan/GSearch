/*

メモ
  単語を画像検索する時の基本構文
    https://www.google.co.jp/search?hl=ja&tbm=isch&q=検索ワード

  encodeURIを使ってＵＲＬ文を加工する
    url= 'https://www.google.co.jp/search?hl=ja&tbm=isch&q=花';
    encodeUrl = encodeURI(url);
    console.log(url);
    >> https://www.google.co.jp/search?hl=ja&tbm=isch&q=%E8%8A%B1

*/

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "Action") {
    gSearch();
  }
});

// 単語をgoogleで画像検索をする
function gSearch() {
  var selectedText = window.getSelection().toString();
  // console.log('選択範囲',selectedText);
  if(selectedText!="")
  {
    var url= 'https://www.google.co.jp/search?hl=ja&tbm=isch&q='+selectedText;
    var encodeUrl = encodeURI(url);
    // console.log(url);
    window.open(url);
  }
}
