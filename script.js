/*

選択範囲をgoogleで検索する

メモ
  単語を画像検索する時の基本構文
    https://www.google.co.jp/search?hl=ja&tbm=isch&q=検索ワード

  encodeURIを使ってＵＲＬ文を加工する
    url= 'https://www.google.co.jp/search?hl=ja&tbm=isch&q=花';
    encodeUrl = encodeURI(url);
    console.log(url);
    >> https://www.google.co.jp/search?hl=ja&tbm=isch&q=%E8%8A%B1
*/

chrome.extension.onMessage.addListener(function(request, sender, sendResponse)
{
  console.log("メッセージ",request[0]);
  if (request[0] == "Action")
  {
    // 選択範囲の単語を読み込む
    var selectedText = window.getSelection().toString();
    gSearch(selectedText,'isch');  // 画像検索
  }else
  if (request[0] == "Action1")
  {
    gSearch(request[1],'isch');  // 画像検索
  }else
  if (request[0] == "Action2")
  {
    gSearch(request[1],'vid');   // 動画検索
  }else
  if (request[0] == "Action3")
  {
    gSearch(request[1],'map');   // 地図検索
  }
});

//
// 新しいウインドウで、単語をgoogleで検索をする
//
function gSearch(selectedText,kind) {
//  console.log('選択範囲',selectedText);

  if(selectedText!="")
  {
    var url;
    if('map' == kind)
    {
      url= 'https://www.google.co.jp/maps?q='+selectedText;
    }else
    {
      url= 'https://www.google.co.jp/search?hl=ja&tbm='+kind+'&q='+selectedText;
    }
    var encodeUrl = encodeURI(url);
//    console.log(url);
//    console.log(encodeUrl);
    window.open(encodeUrl);
  }
}

