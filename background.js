/*
 *
 * クマアイコンをクリックと、選択範囲のコンテキストメニューのイベント
 *
 */

// クマアイコンをクリック時にメッセージを投げる
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, ["Action"]);
});

chrome.runtime.onInstalled.addListener(() => {
  //
  // 選択したときにコンテキストメニューを作り、クリック時にメッセージを投げる
  //
  const parent = chrome.contextMenus.create({
      contexts:["selection"],   // ← ※ここ重要(選択したときにコンテキストメニューを作る)
      id: 'parent',
      title: '選択範囲を検索'
  });
  chrome.contextMenus.create({
    contexts:["selection"],   // ← ※子でもこれが無いと表示されない
    id: 'child1',
    parentId: 'parent',
    title: '選択範囲の単語を画像検索',
    onclick: function(info, tab) {
      chrome.tabs.sendMessage(tab.id, ["Action1",info.selectionText]);
    }
  });
  chrome.contextMenus.create({
    contexts:["selection"],   // ← ※子でもこれが無いと表示されない
    id: 'child2',
    parentId: 'parent',
    title: '選択範囲の単語を動画検索',
    onclick: function(info, tab) {
      chrome.tabs.sendMessage(tab.id, ["Action2",info.selectionText]);
    }
  });
});

