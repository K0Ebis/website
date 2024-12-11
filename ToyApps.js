// const element = document.createElement("p");
// element.textContent = "Hello World!!"; // 内容を追加
// document.body.appendChild(element);
"use strict";
// 近状ノート
const noteList = [
  "初イベントやります！『春の桜フェアー！』",
  "季節の変化、模様替え。",
  "今日は晴れ、お店大繁盛！！！",
  "本日開店！皆さんよろしくね！！",
];
const ul = document.getElementById("latest");

// const events = noteList;
// 偶数を抽出
//   .filter((note) => num % 2 === 0)
//   .map((even) => "・" + even);
// 「No.」を付加

for (const events of noteList) {
  const li = document.createElement("li");
  li.textContent = events;
  ul.appendChild(li);
}
const FulList = [
  { place: "城下町", MAXnum: 12, percentage: "70" },
  { place: "火山", MAXnum: 8, percentage: "50" },
  { place: "海岸", MAXnum: 4, percentage: "100" },
  { place: "森", MAXnum: 4, percentage: "100" },

  { place: "待合", MAXnum: 5, percentage: "80" },
];
const headers = ["場所", "最大席数", "混雑度"];

const table = document.querySelector("table");

// テーブルヘッダーの生成
const trHeader = document.createElement("tr");

for (const h of headers) {
  const th = document.createElement("th");
  th.textContent = h;
  trHeader.appendChild(th);
}
table.appendChild(trHeader);

// テーブルデータの生成
for (const ev of FulList) {
  const tr = document.createElement("tr");
  for (const prop in ev) {
    const td = document.createElement("td");
    td.textContent = ev[prop];
    if (prop === "MAXnum") {
      td.textContent += "人";
    } else if (prop === "percentage") {
      td.textContent += "%";
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
