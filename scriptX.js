function addDraggable_um(e){
    e.target.setAttribute("draggable","true");
}

function remDraggable_um(e){
    e.target.removeAttribute("draggable");
}

function appearOCR_um(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addOCRpopup";
    document.getElementById("addOCRpopup").style.display="flex";
    document.getElementById("fromH2D_um").value="";    
}

}
// function for b0dy innerHTML
function appearprvedit_um(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="prveditpopup_um";
    document.getElementById("prveditpopup_um").style.display="flex";
    document.getElementById("viewprvhtml_um").value="";    
    loadb0DyHTML_um();
}
}

function loadb0DyHTML_um(){
    document.getElementById("viewprvhtml_um").value=document.getElementById("b0Dy").innerHTML;

}
function updateb0Dy_um(){
    document.getElementById("b0Dy").innerHTML=document.getElementById("viewprvhtml_um").value;
}
function locateimg_um(){
    document.getElementById("fromH2D_um").value=document.getElementById("imgFRMDESK_um").files[0].name; ;
}

function loadimg2v_um(){

    let a12_um=document.getElementById("fromH2D_um");
    let a1=document.getElementById("imgFRMDESK_um").value;
  
    Tesseract.recognize(
        a1,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        a12_um.value=text;
        console.log(text);
    })


//     Tesseract.recognize(a1)
//     .then(function(result) {
//        a12.value = result.text;
//     }).progress(function(result) {
//         a12.value= result["status"] + " (" +
//                    (result["progress"] * 100) + "%)";
//    });

}


