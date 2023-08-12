
let myLeads =[];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const currURL = window.location.href;

console.log(ulEl);

let tabNo=1;

// inputBtn.addEventListener("click",function(){
//     myLeads.push(currURL);
//     ulEl.innerHTML += `<li><a href="${myLeads[myLeads.length - 1]}" target="_blank">TAB NO ${tabNo++}</a></li>`;
// });
inputBtn.addEventListener("click",function(){
    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
          console.log(tabs[i].url);
        }
      });
      
});


