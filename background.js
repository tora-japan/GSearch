/*
 *
 * クマアイコンをクリックと、選択範囲のコンテキストメニューのイベント
 *
 */

// クマアイコンをクリック時にメッセージを投げる
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, ["Action"]);
});

/*
テストコード
chrome.runtime.onInstalled.addListener(() => {
  const parent = chrome.contextMenus.create({
      contexts:["selection"],   // ← ※ここ重要(選択したときにコンテキストメニューを作る)
      id: 'parent',
      title: '選択範囲の単語を画像検索',
      onclick: function(info, tab) {
        chrome.tabs.sendMessage(tab.id, ["Action1",info.selectionText]);
      }
  });
}
*/

chrome.runtime.onInstalled.addListener(() => {

  //
  // 選択したときにコンテキストメニューを作り、クリック時にメッセージを投げる
  //
  const parent = chrome.contextMenus.create({
    contexts:["selection"],   // ← ※ここ重要(選択したときにコンテキストメニューを作る)
    id: 'parent',
    title: '選択した単語を検索'
  });
  chrome.contextMenus.create({
    contexts:["selection"],   // ← ※子でもこれが無いと表示されない
    id: 'child1',
    parentId: 'parent',
    title: '画像検索',
    onclick: function(info, tab) {
      chrome.tabs.sendMessage(tab.id, ["Action1",info.selectionText]);
    }
  });
  chrome.contextMenus.create({
    contexts:["selection"],   // ← ※子でもこれが無いと表示されない
    id: 'child2',
    parentId: 'parent',
    title: '動画検索',
    onclick: function(info, tab) {
      chrome.tabs.sendMessage(tab.id, ["Action2",info.selectionText]);
    }
  });
  chrome.contextMenus.create({
    contexts:["selection"],   // ← ※子でもこれが無いと表示されない
    id: 'child3',
    parentId: 'parent',
    title: '地図検索',
    onclick: function(info, tab) {
      chrome.tabs.sendMessage(tab.id, ["Action3",info.selectionText]);
    }
  });
});

