function onSubmit(){
    const no_of_elements=[1,2,3,4,5,6,7,8,9];
    let group=[1,4,7];
    let res_row=false;

   let res_col=false;
   let box_res=false;
const set_row = new Set();
const set_col = new Set();
//for row
for(let i of no_of_elements){
    for(let j of no_of_elements){

    let id=`b${i}-${j}`;
    // console.log(id)

   set_row.add(document.getElementById(id).value);
//    console.log(set_)
 
}
if(set_row.size==9){
    set_row.clear();
    res_row=true;
    
}else{
    set_row.clear();
    break;
}
}


//for coloum
if(res_row){
for(let i of no_of_elements){
    for(let j of no_of_elements){

    let id=`b${j}-${i}`;
    // console.log(id)

   set_row.add(document.getElementById(id).value);
//    console.log(set_)
 
}
if(set_row.size==9){
    set_row.clear();
    res_col=true;
    
}else{
    set_row.clear();
    break;
}
}
}else{
    alert("Some error is there");
}


if(res_col && res_row){
    const sec=document.getElementById("sec");
const min=document.getElementById("min");

    alert(`congrats you finished in ${min.textContent}:${sec.textContent} `);
}


}
const sec=document.getElementById("sec");
const min=document.getElementById("min");
let sec_tim=0;
let min_tim=0;
function add(){
    sec_tim++;
    sec.textContent=sec_tim;
    min.textContent=min_tim;
    if(sec_tim==60){
        min_tim++;
        min.textContent=min_tim;

    }

}

function timer() {
    t = setInterval(add, 1000);
}
timer();