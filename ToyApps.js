// const element = document.createElement("p");
// element.textContent = "Hello World!!"; // 内容を追加
// document.body.appendChild(element);
"use strict";

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
