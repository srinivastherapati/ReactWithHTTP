// grid.onclick=function(e){
//     if(e.target.tagName!='TH') return;
//     let th=e.target;
//     sortGrid(th.cellIndex,th.dataset.type)

// }
// function sortGrid(colNum,type){
// let tbody=grid.querySelector('tbody');
// let rowArrays=Array.from(tbody.rows);
// let compare;
// switch(type){
//     case 'number':
// compare=function(rowA,rowB){
//     return rowA.cells[colNum].innerHTML-rowB.cells[colNum].innerHTML;
// };
// break;
// case 'string':
//     compare=function(rowA,rowB){
//     return rowA.cells[colNum].innerHTML>rowB.cells[colNum].innerHTML? 1:-1;
//     }
//     break;
// }
// rowArrays.sort(compare);
// tbody.append(...rowArrays);
// }
let val=country.options[country.selectedIndex];
alert(val.value);
let newOption= new Option("UK","uk",false,true);
country.append(newOption)

