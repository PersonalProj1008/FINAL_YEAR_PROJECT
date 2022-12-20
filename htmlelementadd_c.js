 swch=0;
 store_clicks = 0;
 haddsm=0;
 const dELEM="b0Dy";
 var current_Selected="b0Dy";
 secondClass='';
 var openPOPUPS=0;
 var editor_number=1;
 let onoff=0;
 let gbtn;
 let tXv_um="0%";
 let tYv_um="0%";
 let activepopupid="";
 let active="path1423";
let deleOE_um;
 function addDIV(name_div) {
    if(swch==1)
        {
            let locate_selected_elem=current_Selected;

            // let parent=document.getElementById(locate_selected_elem).parentElement.id;
            let btn = document.createElement("div");
            btn.id = name_div;
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            btn.style.backgroundColor = "#"+randomColor;
            btn.style.height = "40%";
            btn.style.width= "75%";
            btn.style.border="1px solid black";
            btn.style.display="flex";
            btn.style.justifyContent="center";
            btn.style.alignItems="center";
            btn.style.flexDirection="column";
            // btn.innerHTML="hello <span style='color:green; height:5px; width:5px'>hhhhh</span>";
            document.getElementById(locate_selected_elem).appendChild(btn);

            var z1=document.getElementById(name_div);
            // z1.setAttribute("click", "attempTchild(event)");
            // z1.setAttribute("att4S", "cBSelec_14200118049");
            changesa14200118049_0();
 
        }

    else{
        locate_selected_elem=dELEM;
        // var childcount=document.getElementById(locate_selected_elem).childElementCount;
        store_clicks += 1;
        var btn = document.createElement("div");
        btn.id = name_div;
        /*setAttribute("id", "democlass");*/ 
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        btn.style.backgroundColor =  "#"+randomColor;
        btn.style.color = "black";
        btn.style.height = "40%";
        btn.style.width= "75%";
        btn.style.border="1px solid black";
        btn.style.display="flex";
        btn.style.justifyContent="center";
        btn.style.alignItems="center";
        btn.style.flexDirection="column";
        btn.style.marginBottom= "1px";
        
        document.getElementById(locate_selected_elem).appendChild(btn);
        var z1=document.getElementById(name_div);
        // z1.setAttribute("onclick", "attempTchild(event)");
        // z1.setAttribute("att4S", "cBSelec_14200118049");
        changesa14200118049_0();
    }

    return btn;
}
//done

//ADD text area function here

function addTAUM(name_div) {
    if(swch==1)
        {
            let locate_selected_elem=current_Selected;

            // let parent=document.getElementById(locate_selected_elem).parentElement.id;
            let btn = document.createElement("textarea");
            btn.id = name_div;
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            btn.style.backgroundColor = "#"+randomColor;
            btn.style.outline="none";
            btn.style.resize="none";
            btn.style.height = "40%";
            btn.style.width= "75%";
            btn.style.border="1px solid black";
            btn.style.display="flex";
            btn.style.justifyContent="flex-end";
            btn.style.alignItems="center";
            btn.style.flexDirection="row";
         

            // btn.innerHTML="hello <span style='color:green; height:5px; width:5px'>hhhhh</span>";
            document.getElementById(locate_selected_elem).appendChild(btn);

            var z1=document.getElementById(name_div);
            changesa14200118049_0();
 
        }

    else{
        locate_selected_elem=dELEM;
        // var childcount=document.getElementById(locate_selected_elem).childElementCount;
        store_clicks += 1;
        var btn = document.createElement("textarea");
        btn.id = name_div;
        /*setAttribute("id", "democlass");*/ 
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        btn.style.backgroundColor =  "#"+randomColor;
        btn.style.color = "black";
        btn.style.outline="none";
        btn.style.resize="none";
        btn.style.height = "40%";
        btn.style.width= "75%";
        btn.style.border="1px solid black";
        btn.style.display="flex";
        btn.style.justifyContent="flex-end";
        btn.style.alignItems="center";
        btn.style.flexDirection="row";
        btn.style.marginBottom= "1px";
        
        document.getElementById(locate_selected_elem).appendChild(btn);
        var z1=document.getElementById(name_div);
        // z1.setAttribute("onclick", "attempTchild(event)");
        // z1.setAttribute("att4S", "cBSelec_14200118049");
        changesa14200118049_0();
    }

    return btn;
}
















//end of tetx area function










function afterdel_um(checkS)
{
let checkSU="#"+checkS;
if(deleOE_um.style.overflowX=="scroll" ||deleOE_um.style.overflowY=="scroll" || deleOE_um.style.overflow=="scroll" ){
let s5=document.getElementById("fornmalscrollbalum");
let cs5=s5.innerText.split(" ");
cs5.splice(0,1);
for(i=0;i<cs5.length;i++){
	if(checkSU==(cs5[i].split("::")[0])){
    	cs5.splice(i,1);
        break;
    }
}
cs5=cs5.join(" ");
s5.innerHTML=cs5;
}
}

//Done


function addTEXTAREA(name_div) {
    if(swch==1)
        {
            let locate_selected_elem=current_Selected;

            // let parent=document.getElementById(locate_selected_elem).parentElement.id;
            let btn = document.createElement("textarea");
            btn.id = name_div;
            btn.style.color = "black";
            btn.style.height = "40%";
            btn.style.width= "75%";
            btn.style.border="1px solid black";
            // btn.innerHTML="hello <span style='color:green; height:5px; width:5px'>hhhhh</span>";
            document.getElementById(locate_selected_elem).appendChild(btn);

            var z1=document.getElementById(name_div);
            // z1.setAttribute("click", "attempTchild(event)");
            changesa14200118049_0();
 
        }

    else{
        locate_selected_elem=dELEM;
        // var childcount=document.getElementById(locate_selected_elem).childElementCount;
        store_clicks += 1;
        var btn = document.createElement("textarea");
        btn.id = name_div;
        /*setAttribute("id", "democlass");*/ 
        btn.style.color = "black";
        btn.style.height = "40%";
        btn.style.width= "75%";
        btn.style.border="1px solid black";
        btn.style.marginBottom= "1px";
        
        document.getElementById(locate_selected_elem).appendChild(btn);
        var z1=document.getElementById(name_div);
        // z1.setAttribute("onclick", "attempTchild(event)");
        changesa14200118049_0();
    }

    return btn;
}

function addBUTTON(name_div) {
    if(swch==1)
        {
            let locate_selected_elem=current_Selected;
            let btn = document.createElement("button");
            btn.id = name_div;
            btn.style.height = "25%";
            btn.style.width= "55%";
            btn.innerHTML="click me";
            btn.style.color = "black";
            btn.style.fontSize="50%";
            document.getElementById(locate_selected_elem).appendChild(btn);
            changesa14200118049_0();
 
        }

    else{
        locate_selected_elem=dELEM;
        var childcount=document.getElementById(locate_selected_elem).childElementCount;
        store_clicks += 1;
        var btn = document.createElement("button");
        btn.id = name_div;
        btn.style.color = "black";
        btn.style.height = "15%";
        btn.style.width= "35%";
        btn.style.fontSize="50%";
        btn.style.marginBottom= "1px";
        btn.innerHTML="click me";
        document.getElementById(locate_selected_elem).appendChild(btn);
        changesa14200118049_0();
        
    }
    return btn;
}

//done
function addINPUT(name_div,typeofINPUT) {
    if(swch==1)
        {
            let locate_selected_elem=current_Selected;
            let btn = document.createElement("input");
            btn.id = name_div;
            btn.type=typeofINPUT;
            if(document.getElementById("MmTshell_um").style.display=="flex"){
                btn.min=document.getElementById("forRandN_umm").value;
                btn.min=document.getElementById("forRandN_umM").value;
            }
            btn.style.backgroundColor = "white";
            btn.style.height = "5%";
            btn.style.width= "45%";
            //btn.innerHTML="hello <span style='color:green; height:5px; width:5px'>hhhhh</span>";
            document.getElementById(locate_selected_elem).appendChild(btn);
            changesa14200118049_0();
 
        }

    else{
        locate_selected_elem=dELEM;
        // store_clicks += 1;
        var btn = document.createElement("input");
        btn.id = name_div; 
        btn.style.backgroundColor =  "white";
        btn.style.color = "black";
        btn.style.height = "5%";
        btn.type=typeofINPUT;
        if(document.getElementById("MmTshell_um").style.display=="flex"){
            btn.min=document.getElementById("forRandN_umm").value;
            btn.min=document.getElementById("forRandN_umM").value;
        }
        btn.style.width= "45%";
        btn.style.marginBottom= "1px";
        document.getElementById(locate_selected_elem).appendChild(btn);
        changesa14200118049_0();
    }
    return btn;
}
function violetcircle(idval){
if(active!=idval){
    if(document.getElementById(idval).style.fill=="rgb(255, 255, 255)")
  {
    document.getElementById(idval).style.fill="#27b575d6";
  }else{
    document.getElementById(idval).style.fill="#ffffff";
  }
}
  
  }

  function attempTchild(e){
    swch=1;
    if(e.path[0].id){
    current_Selected=(e.path[0]).id;
    deleOE_um=(e.path[0]);
    console.log(deleOE_um);
    }
    else{
        current_Selected=(e.path[e.path.length-10]).id;
        deleOE_um=(e.path[e.path.length-10])

    }
    console.log(current_Selected);
    document.getElementById("selected_element14200118049").innerHTML="#"+current_Selected;
}

function changesa14200118049(){
    swch=0;
    current_Selected="b0Dy";
    document.getElementById("selected_element14200118049").innerHTML="<b>#b0Dy</b>";
    
}
function changesa14200118049_0(){
    swch=0;
    document.getElementById("selected_element14200118049").innerHTML="<b>#b0Dy</b>";
}

function closeit(appid){
    if(openPOPUPS==1){
        openPOPUPS=0;
    }
    document.getElementById(appid).style.display="none";
    activepopupid="";
}

function clickCreate()
{
    if(document.getElementById("setdivid").value || (document.getElementById("for_setdivid_PC").checked && document.getElementById("setdivid_PC").value!='') ){
    let x=document.getElementById("setdivid").value;
    let x1=addDIV(x);
    if(document.getElementById("for_setdivid_PC").checked && document.getElementById("setdivid_PC").value!='')
    {

        x1.setAttribute("class",document.getElementById("setdivid_PC").value);
    }

}
}

// textarea click create

function clickCreateTA()
{
    if(document.getElementById("settextareaid").value || (document.getElementById("for_settextareaid_PC").checked && document.getElementById("settextareaid_PC").value!='') ){
    let x=document.getElementById("settextareaid").value;
    let x1=addTAUM(x);
    if(document.getElementById("for_settextareaid_PC").checked && document.getElementById("settextareaid_PC").value!='')
    {

        x1.setAttribute("class",document.getElementById("settextareaid_PC").value);
    }

}
}



function appearSetDivId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="adddivpopup";
    document.getElementById("adddivpopup").style.display="flex";
    document.getElementById("setdivid").value="";
    document.getElementById("setdivid_PC").value="";
    }
} 

function appearSetTextAreaId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addtextareapopup";
    document.getElementById("addtextareapopup").style.display="flex";
    document.getElementById("settextareaid").value="";
    document.getElementById("settextareaid_PC").value="";
    }
} 

function appearSetSelectId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addselectpopup";
    document.getElementById("addselectpopup").style.display="flex";
    document.getElementById("selectid_um").value="";
    document.getElementById("blockladdop").innerHTML="";
    }
}




function deleteELEM() {
    let c=document.getElementById("b0Dy");
    if(deleOE_um!=c){
    // let myobj = document.getElementById(current_Selected);
    afterdel_um(current_Selected);
    deleOE_um.remove();
    current_Selected="b0Dy";
    }
    
  }
function appearSetButtonId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addbutpopup";
    document.getElementById("addbutpopup").style.display="flex";
    document.getElementById("setbutid").value="";
    document.getElementById("setbutid_PC").value="";
    }
}

function appearSettextareaId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addtextareapopup";
    document.getElementById("addtextareapopup").style.display="flex";
    document.getElementById("settextareaid").value="";
    document.getElementById("settextareaid_PC").value="";
    }
}

function clickCreate1(){
    if(document.getElementById("setbutid").value || (document.getElementById("for_setbutid_PC").checked && document.getElementById("setbutid_PC").value!='') ){

    let x=document.getElementById("setbutid").value;
    let x1=addBUTTON(x);

    if(document.getElementById("for_setbutid_PC").checked && document.getElementById("setbutid_PC").value!='')
        {

            x1.setAttribute("class",document.getElementById("setbutid_PC").value);
        }
    
    }
}

function BORpopupFlex(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addBORpopup";
    document.getElementById("addBORpopup").style.display="flex";
    }
}

function appearSetInputId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addinputpopup";
    document.getElementById("addinputpopup").style.display="flex";
    document.getElementById("setinputid").value="";
    document.getElementById("setinputid_PC").value="";
    document.getElementById("MmTshell_um").style.display=="none";
    }
}

function appearDisplayId(){
    if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="adddisplaypopup_dfv";
    document.getElementById("adddisplaypopup_dfv").style.display="flex";
    document.getElementById("displayops_um_dfv").value="none";
    document.getElementById("scroll4displayumflex_dfv").style.display="none";
    }
}


function clickCreate2(){
    if(document.getElementById("setinputid").value || (document.getElementById("for_setinputid_PC").checked && document.getElementById("setinputid_PC").value!='') ){
    let x=document.getElementById("setinputid").value;
    let typey=document.getElementById("setinputtype_um").value;
    let x1=addINPUT(x,typey);
        
    if(document.getElementById("for_setinputid_PC").checked && document.getElementById("setinputid_PC").value!='')
    {

        x1.setAttribute("class",document.getElementById("setinputid_PC").value);
    }
    
    
    }
}

function clickCreate4(){
    if(document.getElementById("settextareatid").value || (document.getElementById("for_settextareaid_PC").checked && document.getElementById("settextareaid_PC").value!='') ){
    let x=document.getElementById("settextareatid").value;
    let x1=addINPUT(x);
   
    }
}

function returnfalse(){
    return false;
}
function closeit3(){
    
    if(onoff==0){
        gbtn.remove();
        document.getElementsByTagName("udtag")[0].remove();
        document.getElementById("addtextbox").style.display="none";
    }
    else if(onoff==2){
        try{
        document.getElementsByTagName("udtag")[0].remove();
        gbtn.id=document.getElementById("taid_1").value;
        document.getElementById(current_Selected).appendChild(gbtn);
        document.getElementById("addtextbox").style.display="none";
        }
        catch{
        document.getElementById(current_Selected).appendChild(gbtn);
        document.getElementById("addtextbox").style.display="none";

        }
    }
    else if(onoff==1){
    openPOPUPS=0;
    onoff=0;
    try{
    document.getElementsByTagName("udtag")[0].remove();
    }
    catch{

    }
    document.getElementById("addtextbox").style.display="none";
    }

}

function appearSetTextBox(){
    onoff=1;
    if(openPOPUPS==0){
    loadtext();
    openPOPUPS=1;
    activepopupid="addtextbox";
    document.getElementById("addtextbox").style.display="block";
    }
}
function clickCreate3(){
    if(document.getElementById("taid_1").value){
    onoff=2;
    openPOPUPS=0;
    }
    else{
        document.getElementById("taid_1").style.border="2px solid red";
        document.getElementById("taid_1").placeholder=" please enter the id";
    }
    
}

function loadtext(){
    document.getElementById("text-input").innerHTML="";
    try{
        console.log("entered_1");
        let count=0;
    let ak=document.getElementById(current_Selected).children;
    console.log("entered_2");   
    for(i=0;i<ak.length;i++){
            if(ak[i].tagName=='P'){
                count+=1;
                console.log("entered_9"); 
                document.getElementById("text-input").innerHTML+=ak[i].innerHTML;
                console.log(ak[i]); 
            }
        }
    if(count==0){
        console.log("entered_4");
        document.getElementById("text-input").value="";
    }
    }
    catch{
        document.getElementById("text-input").value="";
    }
}

function diseleid_um(event){
    document.getElementById("EidShow_um").innerHTML="#"+event.target.id;    

}


function switch2css(){
    if(active!="path1423m"){
        document.getElementById(active).style.fill="rgb(255,255,255)";
        
    document.getElementById("path1423m").style.fill="#27b575d6";
    active="path1423m";
    }else{

    document.getElementById("path1423m").style.fill="#27b575d6";
    active="path1423m";
    }
    switch(editor_number){
    
        case 1:document.getElementById("c_optLT").style.display="none";break;
        case 3:document.getElementById("c_optLT3").style.display="none";break;
        case 4:document.getElementById("c_optLT4").style.display="none";break;
        case 5:document.getElementById("c_optLT5").style.display="none";break;
    }
    document.getElementById("c_optLT2").style.display="block";
    editor_number=2;
}

function switch2html(){
    if(active!="path1423"){
        document.getElementById(active).style.fill="rgb(255,255,255)";
        
    document.getElementById("path1423").style.fill="#27b575d6";
    active="path1423";
    }else{
    document.getElementById("path1423").style.fill="#27b575d6";
    active="path1423";
}

    switch(editor_number){
        case 2:document.getElementById("c_optLT2").style.display="none";break;
        case 3:document.getElementById("c_optLT3").style.display="none";break;
        case 4:document.getElementById("c_optLT4").style.display="none";break;
        case 5:document.getElementById("c_optLT5").style.display="none";break;
    }
    document.getElementById("c_optLT").style.display="block";
    editor_number=1;
}

function switch2js(){
    document.getElementById("jseditorplace").value=document.getElementById("addclientjs").innerHTML;

      document.getElementById("jseditorplaceshell").style.display="flex";
  document.getElementById("right_region").style.display="none";
}
function switch2Temp(){
      document.getElementById("cssEShell_um").style.display="flex";
  document.getElementById("right_region").style.display="none";
}
function switch2CE(){
    synOGen_um();
    document.getElementById("hS_EUM").value="";
    document.getElementById("htmlOutputShell_um").style.display="flex";
  document.getElementById("right_region").style.display="none";
}

function flipFAEdtr(a1){
    document.getElementById(a1).style.display="none";
    document.getElementById("right_region").style.display="flex";
  }

  function ToDiffeUM(a,b){
    document.getElementById(a).style.display="none";
    document.getElementById(document.getElementById(b).value).style.display="flex";
    document.getElementById("jsS_EUM").value="";
    document.getElementById("cssS_EUM").value="";
    document.getElementById("hS_EUM").value="";
  }



function style_elem(choice)
{

    if(choice == "all"){
        var cval1=document.getElementById(current_Selected).width;
        document.getElementById("viewprop_w").innerHTML=cval1;
        var cval1=document.getElementById(current_Selected).height;
        document.getElementById("viewprop_h").innerHTML=cval1;
        var cval1=document.getElementById(current_Selected).borderRadius;
        document.getElementById("viewprop_br").innerHTML=cval1;
        var cval1=document.getElementById(current_Selected).marginBottom;
        document.getElementById("viewprop_mb").innerHTML=cval1;

    }

    if(choice == 11){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_aw").value;
        document.getElementById(current_Selected).style.width=cval11+"%";
        document.getElementById("viewprop_w").innerHTML=document.getElementById(current_Selected).offsetWidth+"px";
        }
        document.getElementById("viewprop_sqw").innerHTML="";
    }

    if(choice == 111){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_ah").value;
        document.getElementById(current_Selected).style.height=cval11+"%";
        document.getElementById("viewprop_h").innerHTML=document.getElementById(current_Selected).offsetHeight+"px";
        
        }
        document.getElementById("viewprop_sqh").innerHTML="";
    }

    if(choice == 69108){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_pb").value;
        document.getElementById(current_Selected).style.paddingBottom=cval11+"%";
        document.getElementById("viewprop_pP").innerHTML=cval11+"%";
        }
    }
    if(choice == 69107){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_pt").value;
        document.getElementById(current_Selected).style.paddingTop=cval11+"%";
        document.getElementById("viewprop_pP").innerHTML=cval11+"%";
        }
    }
    if(choice == 69106){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_pl").value;
        document.getElementById(current_Selected).style.paddingLeft=cval11+"%";
        document.getElementById("viewprop_pP").innerHTML=cval11+"%";
        }
    }
    if(choice == 69105){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_pr").value;
        document.getElementById(current_Selected).style.paddingRight=cval11+"%";
        document.getElementById("viewprop_pP").innerHTML=cval11+"%";
        }
    }

    if(choice == 22){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_br").value;
        document.getElementById(current_Selected).style.borderRadius=cval11+"%";
        document.getElementById("viewprop_br").innerHTML=cval11+"%";
    
    }
}
    
    if(choice == 23){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_brpx").value;
        document.getElementById(current_Selected).style.borderRadius=cval11+"px";
        document.getElementById("viewprop_br").innerHTML=cval11+"px";
    
    }
}

if(choice == "fsC_um"){
    if(current_Selected!="b0Dy"){
    var cval11=document.getElementById("style_fsc").value;
    document.getElementById(current_Selected).style.fontSize=cval11+"%";
    document.getElementById("viewprop_fsc").innerHTML=cval11+"%";

}
}

    if(choice == 222){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_mb").value;
        document.getElementById(current_Selected).style.marginBottom=cval11+"%";
        document.getElementById("viewprop_mM").innerHTML=cval11+"%";
        }
    }
    if(choice == 333){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_mt").value;
        document.getElementById(current_Selected).style.marginTop=cval11+"%";
        document.getElementById("viewprop_mM").innerHTML=cval11+"%";
        }
    }
    if(choice == 444){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_ml").value;
        document.getElementById(current_Selected).style.marginLeft=cval11+"%";
        document.getElementById("viewprop_mM").innerHTML=cval11+"%";
        }
    }
    if(choice == 555){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_mr").value;
        document.getElementById(current_Selected).style.marginRight=cval11+"%";
        document.getElementById("viewprop_mM").innerHTML=cval11+"%";
        }
    }
    if(choice == 66){
        if(current_Selected){
        var cval11=document.getElementById("style_aw0").value;
        var cval112=document.getElementById("style_aw1").value;
        var cval1102=document.getElementById("style_aw2").value;
        var cval11002=document.getElementById("style_aw3").value;
        cval11002=parseInt(cval11002);
        cval11002=rangeDecimal(cval11002,100);
        cval11="rgb("+cval11+","+cval112+","+cval1102+","+cval11002+")";
        document.getElementById(current_Selected).style.backgroundColor=cval11;
        document.getElementById("viewprop_aw0").innerHTML=cval11;
        }
    }
    if(choice == 666){
        if(current_Selected){
        var cval11=document.getElementById("style_aw0").value;
        var cval112=document.getElementById("style_aw1").value;
        var cval1102=document.getElementById("style_aw2").value;
        var cval11002=document.getElementById("style_aw3").value;
        cval11002=parseInt(cval11002);
        cval11002=rangeDecimal(cval11002,100);
        cval11="rgb("+cval11+","+cval112+","+cval1102+","+cval11002+")";
        document.getElementById(current_Selected).style.backgroundColor=cval11;
        document.getElementById("viewprop_aw0").innerHTML=cval11;
        }
    }
        if(choice == 6666){
            if(current_Selected){
            var cval11=document.getElementById("style_aw0").value;
            var cval112=document.getElementById("style_aw1").value;
            var cval1102=document.getElementById("style_aw2").value;
            var cval11002=document.getElementById("style_aw3").value;
            cval11002=parseInt(cval11002);
            cval11002=rangeDecimal(cval11002,100);
            cval11="rgb("+cval11+","+cval112+","+cval1102+","+cval11002+")";
            document.getElementById(current_Selected).style.backgroundColor=cval11;
            document.getElementById("viewprop_aw0").innerHTML=cval11;
            }    
    }

    if(choice == 66666){
        if(current_Selected){
        var cval11=document.getElementById("style_aw0").value;
        var cval112=document.getElementById("style_aw1").value;
        var cval1102=document.getElementById("style_aw2").value;
        var cval11002=document.getElementById("style_aw3").value;
        cval11002=parseInt(cval11002);
        cval11002=rangeDecimal(cval11002,100);
        cval11="rgb("+cval11+","+cval112+","+cval1102+","+cval11002+")";
        document.getElementById(current_Selected).style.backgroundColor=cval11;
        document.getElementById("viewprop_aw0").innerHTML=cval11;
        }    

    }

    if(choice == "22blr"){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_brblr").value;
        document.getElementById(current_Selected).style.borderBottomLeftRadius=cval11+"%";
        document.getElementById("viewprop_brblr").innerHTML=cval11+"%";
    
    }
}
if(choice == "22brr"){
    if(current_Selected!="b0Dy"){
    var cval11=document.getElementById("style_brbrr").value;
    document.getElementById(current_Selected).style.borderBottomRightRadius=cval11+"%";
    document.getElementById("viewprop_brbrr").innerHTML=cval11+"%";

}
}
if(choice == "22tlr"){
    if(current_Selected!="b0Dy"){
    var cval11=document.getElementById("style_brtlr").value;
    document.getElementById(current_Selected).style.borderTopLeftRadius=cval11+"%";
    document.getElementById("viewprop_brtlr").innerHTML=cval11+"%";

}
}   

if(choice == "22trr"){
    if(current_Selected!="b0Dy"){
    var cval11=document.getElementById("style_brtrr").value;
    document.getElementById(current_Selected).style.borderTopRightRadius=cval11+"%";
    document.getElementById("viewprop_brtrr").innerHTML=cval11+"%";

}
}

if(choice == "22blrpx"){
    if(current_Selected!="b0Dy"){
    var cval11=document.getElementById("style_brblrpx").value;
    document.getElementById(current_Selected).style.borderBottomLeftRadius=cval11+"px";
    document.getElementById("viewprop_brblr").innerHTML=cval11+"px";

}
}

if(choice == "BORPX"){ 
        if(current_Selected!="b0Dy"){    
            if(document.getElementById("style_BORS").value=="border-left"){
            let a_um;
			var cval11=document.getElementById("style_BORP").value;
            if(document.getElementById(current_Selected).style.borderLeft){
            a_um=document.getElementById(current_Selected).style.borderLeft;
            }
            else{
                a_um="1px solid #000000";
            }
            a_um=a_um.split(" ");
            a_um[0]=cval11+"px";
            document.getElementById(current_Selected).style.borderLeft=a_um.join(" ");
            document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderLeft;
			}
           
             if(document.getElementById("style_BORS").value=="border-right"){
               let a_um;
				var cval11=document.getElementById("style_BORP").value;
                if(document.getElementById(current_Selected).style.borderRight){
                a_um=document.getElementById(current_Selected).style.borderRight;
                }
                else{
                    a_um="1px solid #000000";
                }
                a_um=a_um.split(" ");
                a_um[0]=cval11+"px";
                document.getElementById(current_Selected).style.borderRight=a_um.join(" ");
                document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderRight;
            }
       
   
              
                    if(document.getElementById("style_BORS").value=="border-top"){
                    let a_um;
					var cval11=document.getElementById("style_BORP").value;
                    if(document.getElementById(current_Selected).style.borderTop){
                    a_um=document.getElementById(current_Selected).style.borderTop;
                    }
                    else{
                        a_um="1px solid #000000";
                    }
                    a_um=a_um.split(" ");
                    a_um[0]=cval11+"px";
                    document.getElementById(current_Selected).style.borderTop=a_um.join(" ");
                    document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderTop;
                }  
                   
                        if(document.getElementById("style_BORS").value=="border-bottom"){
                        let a_um;
						var cval11=document.getElementById("style_BORP").value;
                        if(document.getElementById(current_Selected).style.borderBottom){
                        a_um=document.getElementById(current_Selected).style.borderBottom;
                        }
                        else{
                            a_um="1px solid #000000";
                        }
                        a_um=a_um.split(" ");
                        a_um[0]=cval11+"px";
                        document.getElementById(current_Selected).style.borderBottom=a_um.join(" ");
                        document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderBottom;
                    }
                
               
                        
                        if(document.getElementById("style_BORS").value=="border"){
                        let a_um;
						var cval11=document.getElementById("style_BORP").value;
                        if(document.getElementById(current_Selected).style.border){
                        a_um=document.getElementById(current_Selected).style.border;
                        }
                        else{
                            a_um="1px solid #000000";
                        }
                        a_um=a_um.split(" ");
                        a_um[0]=cval11+"px";
                        document.getElementById(current_Selected).style.border=a_um.join(" ");
                        document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.border;
                    }
                        
}
}
if(choice == "BORCLR"){   
        console.log("entered");
        if(current_Selected!="b0Dy"){    
        if(document.getElementById("style_BORS").value=="border-left"){
            console.log("entered-left");
            let a_um;
            var cval11=document.getElementById("style_BORC").value;
            console.log(cval11);
            if(document.getElementById(current_Selected).style.borderLeft){
            a_um=document.getElementById(current_Selected).style.borderLeft;
            }
            else{
                a_um="1px solid #000000";
            }
            a_um=a_um.split(" ");
            a_um[2]=cval11;
            if(a_um.length>3){
                a_um.pop();
                a_um.pop();
                }            document.getElementById(current_Selected).style.borderLeft=a_um.join(" ");
            document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderLeft;
        }
            
    
                if(document.getElementById("style_BORS").value=="border-right"){
                    
                let a_um;
                var cval11=document.getElementById("style_BORC").value;
                if(document.getElementById(current_Selected).style.borderRight){
                a_um=document.getElementById(current_Selected).style.borderRight;
                }
                else{
                    a_um="1px solid #000000";
                }
                a_um=a_um.split(" ");
                a_um[2]=cval11;
                if(a_um.length>3){
                    a_um.pop();
                    a_um.pop();
                    }
                document.getElementById(current_Selected).style.borderRight=a_um.join(" ");
                document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderRight;
            }
                
    
    
                    if(document.getElementById("style_BORS").value=="border-top"){
                        let a_um;
                        var cval11=document.getElementById("style_BORC").value;
                    if(document.getElementById(current_Selected).style.borderTop){
                    a_um=document.getElementById(current_Selected).style.borderTop;
                    }
                    else{
                        a_um="1px solid #000000";
                    }
                    a_um=a_um.split(" ");
                    a_um[2]=cval11;
                    if(a_um.length>3){
                        a_um.pop();
                        a_um.pop();
                        }
                    document.getElementById(current_Selected).style.borderTop=a_um.join(" ");
                    document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderTop;
                }
                    
             
                        if(document.getElementById("style_BORS").value=="border-bottom"){
                            let a_um;
                            var cval11=document.getElementById("style_BORC").value;
                        if(document.getElementById(current_Selected).style.borderBottom){
                        a_um=document.getElementById(current_Selected).style.borderBottom;
                        }
                        else{
                            a_um="1px solid #000000";
                        }
                        a_um=a_um.split(" ");
                        a_um[2]=cval11;
                        if(a_um.length>3){
                        a_um.pop();
                        a_um.pop();
                        }
                        document.getElementById(current_Selected).style.borderBottom=a_um.join(" ");
                        document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderBottom;
                    }
                }          



}

if(choice == "BORTYP"){


    if(current_Selected!="b0Dy"){    
        let a_um;
        if(document.getElementById("style_BORS").value=="border-left"){
        var cval11=document.getElementById("style_BORTP").value;
        if(document.getElementById(current_Selected).style.borderLeft){
        a_um=document.getElementById(current_Selected).style.borderLeft;
        }
        else{
            a_um="1px solid #000000";
        }
        a_um=a_um.split(" ");
        a_um[1]=cval11;
        document.getElementById(current_Selected).style.borderLeft=a_um.join(" ");
        document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderLeft;
    }
        }


        if(current_Selected!="b0Dy"){    
            let a_um;
            if(document.getElementById("style_BORS").value=="border-right"){
            var cval11=document.getElementById("style_BORTP").value;
            if(document.getElementById(current_Selected).style.borderRight){
            a_um=document.getElementById(current_Selected).style.borderRight;
            }
            else{
                a_um="1px solid #000000";
            }
            a_um=a_um.split(" ");
            a_um[1]=cval11;
            document.getElementById(current_Selected).style.borderRight=a_um.join(" ");
            document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderRight;
        }
            }

            if(current_Selected!="b0Dy"){    
                let a_um;
                if(document.getElementById("style_BORS").value=="border-top"){
                var cval11=document.getElementById("style_BORTP").value;
                if(document.getElementById(current_Selected).style.borderTop){
                a_um=document.getElementById(current_Selected).style.borderTop;
                }
                else{
                    a_um="1px solid #000000";
                }
                a_um=a_um.split(" ");
                a_um[1]=cval11;
                document.getElementById(current_Selected).style.borderTop=a_um.join(" ");
                document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderTop;
            }
                }
                if(current_Selected!="b0Dy"){    
                    let a_um;
                    if(document.getElementById("style_BORS").value=="border-bottom"){
                    var cval11=document.getElementById("style_BORTP").value;
                    if(document.getElementById(current_Selected).style.borderBottom){
                    a_um=document.getElementById(current_Selected).style.borderBottom;
                    }
                    else{
                        a_um="1px solid #000000";
                    }
                    a_um=a_um.split(" ");
                    a_um[1]=cval11;
                    document.getElementById(current_Selected).style.borderBottom=a_um.join(" ");
                    document.getElementById("viewprop_BORT").value=document.getElementById(current_Selected).style.borderBottom;
                }
                    }
}


if(choice == "REM_UNSET"){
 
if(document.getElementById("style_REM").value == "REM_LEFT"){
    if(current_Selected!="b0Dy"){    
    document.getElementById("viewprop_BORT").value='BORDER-LEFT:"removed"';
    }
}
if(document.getElementById("style_REM").value == "REM_RIGHT"){
    if(current_Selected!="b0Dy"){    
    document.getElementById(current_Selected).style.borderRight="";
    document.getElementById("viewprop_BORT").value='BORDER-RIGHT:"removed"';
    }
}
if(document.getElementById("style_REM").value == "REM_TOP"){
    if(current_Selected!="b0Dy"){    
    document.getElementById(current_Selected).style.border="";
    document.getElementById("viewprop_BORT").value='BORDER-TOP:"removed"';
    }
}
if(document.getElementById("style_REM").value == "REM_BOTTOM"){
    if(current_Selected!="b0Dy"){    
    document.getElementById(current_Selected).style.borderBottom="";
    document.getElementById("viewprop_BORT").value='BORDER-BOTTOM:"removed"';
    }
}

if(document.getElementById("style_REM").value == "REM_ALL"){
    if(current_Selected!="b0Dy"){    
    document.getElementById(current_Selected).style.border="";
    document.getElementById("viewprop_BORT").value="border-all sides:'removed'";
    }
}


document.getElementById("style_REM").value="notSelected";

}


if(choice == "sQw_um"){
    if(current_Selected!="b0Dy"){
    if(document.getElementById(current_Selected).style.width){
    document.getElementById(current_Selected).style.height="";
    document.getElementById(current_Selected).style.aspectRatio="1/1";
    }
    else{
        document.getElementById("viewprop_sqw").innerHTML="<text style='color:red'>no width</text>"
    }
}
}
if(choice == "sQh_um"){
    if(current_Selected!="b0Dy"){
    if(document.getElementById(current_Selected).style.height){    
    document.getElementById(current_Selected).style.width="";
    document.getElementById(current_Selected).style.aspectRatio="1/1";
    }
    else{
        document.getElementById("viewprop_sqh").innerHTML="<text style='color:red'>no height</text>"
    }

}
}


if(choice == "22brrpx"){
if(current_Selected!="b0Dy"){
var cval11=document.getElementById("style_brbrrpx").value;
document.getElementById(current_Selected).style.borderBottomRightRadius=cval11+"px";
document.getElementById("viewprop_brbrr").innerHTML=cval11+"px";

}
}
if(choice == "22tlrpx"){
if(current_Selected!="b0Dy"){
var cval11=document.getElementById("style_brtlrpx").value;
document.getElementById(current_Selected).style.borderTopLeftRadius=cval11+"px";
document.getElementById("viewprop_brtlr").innerHTML=cval11+"px";

}
}   

if(choice == "22trrpx"){
if(current_Selected!="b0Dy"){
var cval11=document.getElementById("style_brtrrpx").value;
document.getElementById(current_Selected).style.borderTopRightRadius=cval11+"px";
document.getElementById("viewprop_brtrr").innerHTML=cval11+"px";

}
}

if(choice == "rtransF142001"){
    if(current_Selected!="b0Dy"){
    var cval11=document.getElementById("style_rtransF142001").value;
    document.getElementById(current_Selected).style.transform="rotate("+cval11+"deg)";
    document.getElementById("viewprop_rtrans142001").innerHTML=cval11+"deg";
    
    }
    }
if(choice == "chngZi"){
        if(current_Selected!="b0Dy"){
        var cval11=document.getElementById("style_zi").value;
        document.getElementById(current_Selected).style.zIndex=cval11;
        document.getElementById("viewprop_zi").innerHTML=cval11;
        
        }
        }
        if(choice == "tyF142"){
            if(current_Selected!="b0Dy"){
            let a1= document.getElementById(current_Selected).offsetHeight;
            let a2=document.getElementById("b0Dy").offsetHeight;
            if(a1<a2){
                a2=a2-a1;
                a1=((a2/a1)*100)+100;
                document.getElementById("style_TY").setAttribute("max",a1*4+"");
            }
            if(a2<a1){
                a1=a1-a2;
                a2=((a1/a2)*100)+100;
                document.getElementById("style_TY").setAttribute("max",a2*4+"");
            }
             var cval11=document.getElementById("style_TY").value;
             tYv_um=cval11+"%";
             document.getElementById(current_Selected).style.transform="translate("+tXv_um+","+cval11+"%)";
            document.getElementById("viewprop_TY").innerHTML=cval11+"%";
            
            }
            }
            if(choice == "tyF142N"){
                if(current_Selected!="b0Dy"){
                let a1= document.getElementById(current_Selected).offsetHeight;
                let a2=document.getElementById("b0Dy").offsetHeight;
                if(a1<a2){
                    a2=a2-a1;
                    a1=((a2/a1)*100)+100;
                    document.getElementById("style_TYN").setAttribute("max",a1*4+"");
                }
                if(a2<a1){
                    a1=a1-a2;
                    a2=((a1/a2)*100)+100;
                    document.getElementById("style_TYN").setAttribute("max",a2*4+"");
                }
                 var cval11=document.getElementById("style_TYN").value;
                tYv_um="-"+cval11+"%";
                document.getElementById(current_Selected).style.transform="translate("+tXv_um+","+"-"+cval11+"%)";
                document.getElementById("viewprop_TY").innerHTML="-"+cval11+"%";
                
                }
                }
                if(choice == "txF142"){
                    if(current_Selected!="b0Dy"){
                    let a1= document.getElementById(current_Selected).offsetWidth;
                    let a2=document.getElementById("b0Dy").offsetWidth;
                    if(a1<a2){
                        a2=a2-a1;
                        a1=((a2/a1)*100)+100;
                        document.getElementById("style_TX").setAttribute("max",a1*4+"");
                    }
                    if(a2<a1){
                        a1=a1-a2;
                        a2=((a1/a2)*100)+100;
                        document.getElementById("style_TX").setAttribute("max",a2*4+"");
                    }
                     var cval11=document.getElementById("style_TX").value;
                     tXv_um=cval11+"%";
                     document.getElementById(current_Selected).style.transform="translate("+cval11+"%"+","+tYv_um+")";    
                     document.getElementById("viewprop_TX").innerHTML=cval11+"%";
                    
                    }
                    }
                    if(choice == "txF142N"){
                        if(current_Selected!="b0Dy"){
                        let a1= document.getElementById(current_Selected).offsetWidth;
                        let a2=document.getElementById("b0Dy").offsetWidth;
                        if(a1<a2){
                            a2=a2-a1;
                            a1=((a2/a1)*100)+100;
                            document.getElementById("style_TXN").setAttribute("max",a1*4+"");
                        }
                        if(a2<a1){
                            a1=a1-a2;
                            a2=((a1/a2)*100)+100;
                            document.getElementById("style_TXN").setAttribute("max",a2*4+"");
                        }
                         var cval11=document.getElementById("style_TXN").value;
                         tXv_um="-"+cval11+"%";
                document.getElementById(current_Selected).style.transform="translate(-"+cval11+"%"+","+tYv_um+")";
                        document.getElementById("viewprop_TX").innerHTML="-"+cval11+"%";
                        
                        }
                        }

    }


    i=0;
    j=0;
    k=0;
    l=0.00;

    function rangeDecimal(para1,para2){
        para1=para1/para2;
        return para1;
    }
    
    function colorpick(gotval){
                if(gotval==1){
                i=document.getElementById("rirange").value;
        
                document.getElementsByClassName("dectextarea1new")[0].style.backgroundColor = "rgb("+i+","+j+","+k+","+l+ ")" ;
                }
    
                if(gotval==2){
                j=document.getElementById("girange").value;
                document.getElementsByClassName("dectextarea1new")[0].style.backgroundColor = "rgb("+i+","+j+","+k+","+l+ ")" ;
                }
    
                if(gotval==3){
                k=document.getElementById("birange").value;
                document.getElementsByClassName("dectextarea1new")[0].style.backgroundColor = "rgb("+i+","+j+","+k+","+l+ ")" ;
                }
    
                if(gotval==4){
                l=document.getElementById("opirange").value;
                l=l/100;
                if(l<0.99){     
                
                            l+=0.01;
                            document.getElementsByClassName("dectextarea1new")[0].style.backgroundColor = "rgb("+i+","+j+","+k+","+l+ ")" ;
                
                }
        }
    }
function setcolorpkr(){
    document.getElementById("colorpkr").style.display="flex";
}
function closeit4(){
    if(openPOPUPS==1){
        openPOPUPS=0;
    }
    document.getElementById("colorpkr").style.display="none";
    
}
function setbgclr(){
    let seein=document.getElementById("selected_element14200118049").innerText;
    seein=seein.split("#")[1];
    document.getElementById(seein).style.backgroundColor=document.getElementById("colorvis").style.backgroundColor;
}
function attempTchild2(idname){
    swch=1;
    current_Selected=idname;
    document.getElementById("selected_element14200118049").innerHTML="#"+current_Selected;

}
function addwhiletype(){
    btn = document.createElement("p");
    btn.id=document.getElementById("taid_1").value;
    btn.innerHTML= document.getElementById("text-input").innerHTML;
    gbtn=btn;
    document.getElementById(current_Selected).innerHTML="<udtag>"+btn.innerHTML+"</udtag>" ;
    console.log(document.getElementById(current_Selected).innerHTML);
}
function stateWhenLoad(){
    document.getElementById("path1423").style.fill="#27b575d6";
}
function crt_opts(nop,otrd,inrd){
	for(i=0;i<nop;i++){
	
	let a=document.createElement("div");
	a.id=otrd[i].eed;
	a.setAttribute("class",otrd[i].cn);
	document.getElementById("c_optLT").appendChild(a);
	
	let ia=document.createElement("div");
	a.appendChild(ia);
    ia.style.color="violet";
	ia.setAttribute("class",inrd[i].cn[0]);
	ia.setAttribute("onclick",inrd[i].oc);
	
	gdd=document.createElement("b");
	ia.appendChild(gdd);
	gdd.innerText+=inrd[i].gd;
	
	let infa=document.createElement("div");
	infa.setAttribute("class","emnt_descrip");
	a.appendChild(infa);
	
	let infas=document.createElement("div");
	infas.setAttribute("class","sm_info");
	infa.appendChild(infas);
	
	infasR=document.createElement("b");
	infas.appendChild(infasR);
	infasR.innerHTML+="info<br>";
	infasR1=document.createElement("i");
	infasR1.innerHTML+=inrd[i].dd;
	infasR.appendChild(infasR1);
	
	
	// infasR2=document.createElement("button");
	// infasR2.setAttribute("class","B_INF014200118049");
	// infasR2.innerHTML+="<b>detailed<br>info</b>";
	// infa.appendChild(infasR2);
	
	}


}
function css_opts(nop4c,otrd4c,inrd4c){
	for(i=0;i<nop4c;i++){
	
	let a=document.createElement("div");
	a.id=otrd4c[i].eed;
	a.setAttribute("class",otrd4c[i].cn);
	document.getElementById("c_optLT2").appendChild(a);
	
	let ia=document.createElement("div");
	a.appendChild(ia);
	ia.setAttribute("class",inrd4c[i].cn[0]);
    ia.style.color="violet";
	
	gdd=document.createElement("b");
	ia.appendChild(gdd);
	gdd.innerHTML+=inrd4c[i].gd+"<br>";
	gddT=document.createElement("text");
	gddT.id=inrd4c[i].svid;
	gdd.appendChild(gddT);
	
	
	
	let infa=document.createElement("div");
	infa.setAttribute("class","emnt_descrip");
	a.appendChild(infa);
	
	let infas=document.createElement("div");
	infas.setAttribute("class","sm_info rightBorders");
	infa.appendChild(infas);
	
	for(j=0;j<inrd4c[i].riolN;j++){
		infas.innerHTML+=inrd4c[i].rops[j]+"<br>";
		let infasR1=document.createElement("input");
        infasR1.id=inrd4c[i].rangeids[j];
		infasR1.setAttribute("type","range");
        infasR1.setAttribute("class","for_sb");
		infasR1.setAttribute("min",inrd4c[i].minRv[j]);
        infasR1.setAttribute("max",inrd4c[i].maxRv[j]);
		infasR1.setAttribute(inrd4c[i].fatt[j],inrd4c[i].oc[j]);
		infas.appendChild(infasR1);
	}
    if(inrd4c[i].ocf){
        ia.setAttribute("onclick",inrd4c[i].ocfv);

    }

    if(inrd4c[i].hasdesc){
        infas.innerHTML+=inrd4c[i].ladesc;

    }
    


}   	

}
//area begins for linear gradient
function hexToRgba(shadowColor, shadowColorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
    return `rgba(${r},${g},${b},${shadowColorOpacity})`;
  }

let dynamicNP=90;;
	 let colorTouched=false;
	function putNDLG(){
		let a = document.getElementById("checkCLG").children;
		let a1=a.length;
        console.log(a1,"----------length__OF__CHILDREN");
		let ores="";
		for(i=0;i<a1-3;i++){
			console.log(a[i],"-------------CHILD");
			// ores=ores+document.getElementById(a[i].id).value;
            let oresX=a[i].children[0].value;
            let oresY=a[i].children[1].value;
            ores=ores+hexToRgba(oresY,oresX);

			console.log(ores,"------------------------AFTER_HEX_CONV");
			if(i!=a1-4){
				ores=ores+",";
			}
			
		}
		
		ores="linear-gradient("+dynamicNP+"deg"+","+ores+")";
        console.log(ores,"-----------------------------ORES+ORES+......");
		
		document.getElementById("dummylgM").style.background=ores;
		// document.getElementById("dummylgM").innerHTML=ores;
		console.log(ores);
		colorTouched=true;
	}
	
	
	
	
	
	function putNNDLG(){
		dynamicNP=document.getElementById("degORN1").value;
		dynamicNP=dynamicNP*-1;
        document.getElementById("lgdtP_um").innerHTML="";
        document.getElementById("lgdtN_um").innerHTML=dynamicNP+"deg";
		console.log(dynamicNP);
		// document.getElementById("dummylgM").innnerHTML=dynamicNP+"deg";
		if(colorTouched){
			putNDLG();
		}
	}
	function putPDLG(){
		dynamicNP=document.getElementById("degOR1").value;
		dynamicNP=dynamicNP*1+0;
        // document.getElementById("lgdtN_um").innerHTML="";
		document.getElementById("lgdtP_um").innerHTML=dynamicNP+"deg";
		console.log(dynamicNP);
		document.getElementById("dummylgM").innnerText=dynamicNP+"deg";
		if(colorTouched){
			putNDLG();
		}
	}
	
	function addcolor4bg(){
		let bop =document.getElementById("checkCLG");
		let bwe=document.getElementById("addBUTTONC");
		let eF_shell=document.createElement("div");
        eF_shell.style="align-items:center;border:1px solid red;width:18%;height:35%;display:flex;justify-content:column;flex-direction:column;";
        // let eF_shellP=document.createElement("div");
        // eF_shellP.style="width:25%;height:100%;border:1px solid red;display:inline-block;";
        let eta=document.createElement("input");
		let Feta=document.createElement("input");
        Feta.type="range";
        Feta.min="0";
        Feta.max="1";
        Feta.setAttribute("oninput","putNDLG()");
        Feta.step="0.1";
        Feta.value="1";
        Feta.style.width="90%";
		eta.setAttribute("class","range4bg");
		eta.setAttribute("oninput","putNDLG()");
		eta.style="width:90%;height:75%;margin:0px;";
		eta.type="color";
        eF_shell.appendChild(Feta);
        eF_shell.appendChild(eta);
		let a = document.getElementById("checkCLG").children;
		let a1=a.length-3;
        eta.id="coloradd_"+a1;
        Feta.id="coloraddrgba_"+a1;
        eF_shell.appendChild(Feta);
        eF_shell.appendChild(eta);
        // eF_shellP.appendChild(eF_shell);
		bop.insertBefore(eF_shell,bwe);
	
	}

function remcolor4bg(){
		
		let a = document.getElementById("checkCLG").children;
		if(a.length>4){
		let a1=a.length;
		let een=a[a1-4];
		een.remove();
		}
		}
		
		function dropcolor4bg(){
			document.getElementById(current_Selected).style.backgroundImage=document.getElementById("dummylgM").style.backgroundImage;
		}
	

//loc end for linear gradient

//client dynamic js
// let abc=["function","let"];
let c=[];

function textAnalysis_um(){
let a=document.getElementById("jseditorplace").value;
let b=document.getElementById("jseditorplace").value;
a=a.split(" ");
for(i=0;i<a.length;i++){
    for(j of abc){
        if(a[i]==j){
            c.push(i);
        }
    }
}

for(i of c){
   if(!( a[i].includes("style"))){ 
   a[i]="<text style='color:pink;'>"+a[i]+"</text>";
}
}
a=a.join(" ");
document.getElementById("jseditorplace").innerHTML=a;

b=b.split("\n");
console.log(a);
console.log(b,"        ----------------------b");
        


}

function clientdynamicjs(){
    let copyIT;
    if(document.getElementById("addclientjs")){
        copyIT=document.getElementById("addclientjs");
        copyIT.remove();
        let acj=document.createElement("script");
        acj.id="addclientjs";
        acj.innerHTML=document.getElementById("jseditorplace").value;
        document.getElementsByTagName("head")[0].appendChild(acj);
    }
}

function clientdynamiccss(){
    let copyIT;let filtVal;let statusdot=false;let statushash=false;
    if(document.getElementById("addclientcss")){
        copyIT=document.getElementById("addclientcss");
        copyIT.remove();
        let acj=document.createElement("style");
        acj.id="addclientcss";
        acj.innerHTML=document.getElementById("csseditorplace").value;;
        document.getElementsByTagName("head")[0].appendChild(acj);
    }
}


function Arc_um(){
    if(document.getElementById("jsEslc_um").value=="clear all"){
        document.getElementById("jseditorplace").value="";
        document.getElementById("addclientjs").innerHTML="";
        document.getElementById("jsEslc_um").value="";
    }
    else{
        clientdynamicjs();
        document.getElementById("jsEslc_um").value="";
    }

}

function Arc2_um(){
    if(document.getElementById("cuscssS_EUM").value=="clear all"){
        document.getElementById("csseditorplace").value="";
        document.getElementById("addclientcss").innerHTML="";
        document.getElementById("cuscssS_EUM").value="";
    }
    else{
        clientdynamiccss();
        document.getElementById("jsEslc_um").value="";
    }

}


function turnborderBlack_fyp(thistarget){
    document.getElementById(thistarget).style.border="2px solid white";
    // let val = document.getElementById("taid_1").value;
    if(!document.getElementById(thistarget).value){
    document.getElementById("taid_1").placeholder="enter id";
    }
}

function focusInput_unmached() {
    if(!document.getElementById("taid_1").value){
        document.getElementById("taid_1").focus();
    }
    }

function nulifybgI(){
    document.getElementById(current_Selected).style.backgroundImage="";
}

let optionIdnum_um=0;

function addoptions_um(a1="",b1="",c1="")

{
	let a = document.createElement("div");
    a.setAttribute("class","inputbox4scshell");
 	a.innerHTML+="enter id:";
    a.id="shell_"+ optionIdnum_um;
	let i=document.createElement("input");
    i.type="text";
    i.setAttribute("class","inputbox4sc");
    a.appendChild(i);
    let i1=document.createElement("input");
    i1.setAttribute("class","inputbox4sc");
    a.innerHTML+=" &nbsp data-content: ";
    i1.type="text";
    a.appendChild(i1);
	let i2=document.createElement("input");
    i2.setAttribute("class","inputbox4sc");
    i2.type="text";
    a.innerHTML+=" &nbsp value: ";
    a.appendChild(i2);
    
    let i3=document.createElement("button");
    i3.setAttribute("class","deloptionShell");
    let att4i3="deloptionShell_func(" +"'"+a.id+"'"+")";
    i3.setAttribute("onclick",att4i3);
    i3.innerHTML="X";
    a.appendChild(i3);
  
	
    document.getElementById("blockladdop").appendChild(a);
    optionIdnum_um+=1;
    
}

function deloptionShell_func(a){
 document.getElementById(a).remove();

}

function combineOS_um(){
	let a=document.getElementById("blockladdop").children.length;
    let a1=document.getElementById("selectid_um").value;
    let i=document.createElement("select");
    i.id=a1;
     console.log(i);
    for(j=0;j<a;j++){
    	let pidvar=document.getElementById("blockladdop").children[j]
        console.log(pidvar.getElementsByTagName("input")[0].value);
    	let idvar=pidvar.getElementsByTagName("input")[0].value;
        let vi =document.createElement("option");
        vi.id=idvar;
	vi.innerHTML=pidvar.getElementsByTagName("input")[1].value;
    vi.value=pidvar.getElementsByTagName("input")[2].value;
     console.log(vi);
    
    i.appendChild(vi);
}

document.getElementById(current_Selected).appendChild(i);
    
    
}
//radial-gradient functions below
let rgoptionIdnum_um=0;
function addoptions_umrg(a1="",b1="",c1="")

{
	let a = document.createElement("div");
    a.setAttribute("class","inputbox4scshellrg");
 	a.innerHTML+="color: &nbsp";
    a.id="rgshell_"+ rgoptionIdnum_um;
	let i=document.createElement("input");
    i.type="color";
    i.setAttribute("class","inputbox4scrg");
    i.setAttribute("oninput","rgSyntaxCrt()");
    a.appendChild(i);
    let i1=document.createElement("input");
    i1.setAttribute("class","inputbox4scrg");
    a.innerHTML+=" &nbspoccupy:";
    i1.type="number";
    i1.setAttribute("oninput","rgSyntaxCrt()");
    i1.setAttribute("onchange","rgSyntaxCrt()");
    i1.min="0";
    i1.max="100";
    i1.value="0";
    a.appendChild(i1);
    
    let i3=document.createElement("button");
    i3.setAttribute("class","deloptionShellrg");
    let att4i3="deloptionShellrg_func(" +"'"+a.id+"'"+")";
    i3.setAttribute("onclick",att4i3);
    i3.innerHTML="X";
    a.appendChild(i3);
  
	
    document.getElementById("rgcinput_um").appendChild(a);
    rgoptionIdnum_um+=1;
    
}

function deloptionShellrg_func(a){
 document.getElementById(a).remove();
 rgSyntaxCrt();

}

function combineOS_umrg(){

document.getElementById(current_Selected).style.background=document.getElementById("rgsyninput_um").value;
    
    
}

function rgSyntaxCrt(){
	let v1=document.getElementById("rgshinput_um").value+" "
    let v2=document.getElementById("rgszinput_um").value+" at ";
    let v3=document.getElementById("rgpxinput_um").value+"% ";
    let v4=document.getElementById("rgpyinput_um").value+"% , ";
	let presyntax="radial-gradient("+v1+v2+v3+v4;
	let ca=document.getElementById("rgcinput_um").children.length;
    
    if(ca>1){
    count=0;
    	for(i=0;i<ca;i++){
        let pidvar=document.getElementById("rgcinput_um").children[i]
    	let idvar=pidvar.getElementsByTagName("input")[0].value;
        let idvar2=pidvar.getElementsByTagName("input")[1].value;
        
        let cap=idvar+" "+idvar2+"%";
        
        if(count<(ca-1)){
        	
        	cap=cap+", ";
            count+=1;
        }
        
        presyntax=presyntax+cap;
        
        }
        
        presyntax=presyntax+")";
        document.getElementById("rgsyninput_um").value=presyntax;
         document.getElementById("rgdmyinput_um").style.background=presyntax;
    }
	
	
}
function appearSetBcolor(){
    if(openPOPUPS==0){
        openPOPUPS+=1;
        activepopupid="addlgpopup";
        document.getElementById("addlgpopup").style.display="flex";
        document.getElementById("gradients_umoplg").value="lin";    
    }


}
function appearSetBcolorrg(){   
    if(openPOPUPS==0){
        openPOPUPS+=1;
        activepopupid="adddisplaypopuprg"; 
document.getElementById("adddisplaypopuprg").style.display="flex";
document.getElementById("gradients_umoprg").value="rad";

}
}

function appearBSpopupF(){   
    if(openPOPUPS==0){
        openPOPUPS+=1;
        activepopupid="addBSpopup"; 
document.getElementById("addBSpopup").style.display="flex";
}
}


function aprPOSpopup(){   
    if(openPOPUPS==0){
        openPOPUPS+=1;
        activepopupid="addPOSumpopup"; 
document.getElementById("addPOSumpopup").style.display="flex";
}
}

function appearSetBcolorcg(){    
    if(openPOPUPS==0){
        openPOPUPS+=1;
        activepopupid="adddisplaypopupcg";
    document.getElementById("adddisplaypopupcg").style.display="flex";
    document.getElementById("gradients_umopcg").value="con";
    }
}

function changeGradTyperg(){
	let val=document.getElementById("gradients_umoprg").value;
    if(val=="lin"){
    	closeit("adddisplaypopuprg");
        appearSetBcolor();
    }
    else if(val=="con"){
    	closeit("adddisplaypopuprg");
        appearSetBcolorcg();
    }
    else if(val=="bu"){
    	closeit("adddisplaypopuprg");
        appearSetBURL();
    }
    document.getElementById("gradients_umoprg").value="rad";

}
function changeGradTypelg(){
	let val=document.getElementById("gradients_umoplg").value;
    if(val=="rad"){
    	closeit("addlgpopup");
        appearSetBcolorrg();
    }
    else if(val=="con"){
    	closeit("addlgpopup");
        appearSetBcolorcg();
    }
    else if(val=="bu"){
    	closeit("addlgpopup");
        appearSetBURL();
    }
    document.getElementById("gradients_umoplg").value="lin";

}
//conic-gradient syntax gen code

let cgoptionIdnum_um=0;
function addoptions_umcg(a1="",b1="",c1="")

{
	let a = document.createElement("div");
    a.setAttribute("class","inputbox4scshellcg");
 	a.innerHTML+="color: &nbsp";
    a.id="rgshell_"+ cgoptionIdnum_um;
	let i=document.createElement("input");
    i.type="color";
    i.setAttribute("class","inputbox4scrg");
    i.setAttribute("oninput","cgSyntaxCrt()");
    a.appendChild(i);
    let i1=document.createElement("input");
    i1.setAttribute("class","inputbox4sccg");
    a.innerHTML+=" &nbspoccupy:";
    i1.type="number";
    i1.setAttribute("oninput","cgSyntaxCrt()");
    i1.setAttribute("onchange","cgSyntaxCrt()");
    i1.min="0";
    i1.max="360";
    i1.value="0";
    a.appendChild(i1);
    
    let i3=document.createElement("button");
    i3.setAttribute("class","deloptionShellcg");
    let att4i3="deloptionShellcg_func(" +"'"+a.id+"'"+")";
    i3.setAttribute("onclick",att4i3);
    i3.innerHTML="X";
    a.appendChild(i3);
  
	
    document.getElementById("cgcinput_um").appendChild(a);
    cgoptionIdnum_um+=1;
    
}

function deloptionShellcg_func(a){
 document.getElementById(a).remove();
 cgSyntaxCrt();

}

function combineOS_umcg(){

document.getElementById(current_Selected).style.background=document.getElementById("cgsyninput_um").value;
    
    
}

function cgSyntaxCrt(){
	let v1="from "+document.getElementById("cgfdeginput_um").value+"deg "
    let v2=" at ";
    let v3=document.getElementById("cgpxinput_um").value+"% ";
    let v4=document.getElementById("cgpyinput_um").value+"% , ";
	let presyntax="conic-gradient("+v1+v2+v3+v4;
	let ca=document.getElementById("cgcinput_um").children.length;
    
    if(ca>1){
    count=0;
    	for(i=0;i<ca;i++){
        let pidvar=document.getElementById("cgcinput_um").children[i]
    	let idvar=pidvar.getElementsByTagName("input")[0].value;
        let idvar2=pidvar.getElementsByTagName("input")[1].value;
        
        let cap=idvar+" "+idvar2+"deg";
        
        if(count<(ca-1)){
        	
        	cap=cap+", ";
            count+=1;
        }
        
        presyntax=presyntax+cap;
        
        }
        
        presyntax=presyntax+")";
        document.getElementById("cgsyninput_um").value=presyntax;
         document.getElementById("cgdmyinput_um").style.background=presyntax;
    }
	
	
}



function changeGradTypecg(){
	let val=document.getElementById("gradients_umopcg").value;
    if(val=="rad"){
    	closeit("adddisplaypopupcg");
        appearSetBcolorrg();
    }
    else if(val=="lin"){
    	closeit("adddisplaypopupcg");
        appearSetBcolor();
    }
    else if(val=="bu"){
    	closeit("adddisplaypopupcg");
        appearSetBURL();
    }
    document.getElementById("gradients_umopcg").value="con";

}

function func4displayum(a1){
if(current_Selected !="b0Dy")
{
    if(current_Selected!="b0Dy"){
    
        if(a1=="caseno1"){
            document.getElementById(current_Selected).style.display=document.getElementById("displayops_um_dfv").value;
        }
        
        if(a1=="caseno2"){
            document.getElementById(current_Selected).style.visibility= document.getElementById("visibops_um_dfv").value;
        }
        
         if(a1=="casenofdum"){
            document.getElementById(current_Selected).style.flexDirection= document.getElementById("displayfdops_um_dfv").value;
        }
        
        if(a1=="casenojcum"){
            document.getElementById(current_Selected).style.justifyContent= document.getElementById("justifycontentops_um_dfv").value;
        }
        
        if(a1=="casenoacum"){
            document.getElementById(current_Selected).style.alignContent= document.getElementById("aligncontentops_um_dfv").value;
        }
        
        if(a1=="casenoaium"){
            document.getElementById(current_Selected).style.alignItems= document.getElementById("alignitemsops_um_dfv").value;
        }
        
        
        if(a1=="casenofwum"){
            document.getElementById(current_Selected).style.flexWrap= document.getElementById("flexwrapops_um_dfv").value;
        }
        
         if(a1=="casenofgum"){
            document.getElementById(current_Selected).style.flexGrow= document.getElementById("flexgrowops_um_dfv").value;
        }
        
         if(a1=="casenofsum"){
            document.getElementById(current_Selected).style.flexShrink= document.getElementById("flexshrinkops_um_dfv").value;
        }
        
           if(a1=="casenoasum"){
            document.getElementById(current_Selected).style.alignSelf= document.getElementById("alignselfops_um_dfv").value;
        }
        
            if(a1=="casenogapum"){
            document.getElementById(current_Selected).style.gap= document.getElementById("gapops_um_dfv").value+"%";
        }
        
            if(a1=="casenorgapum"){
            document.getElementById(current_Selected).style.rowGap= document.getElementById("rgapops_um_dfv").value+"%";
        }
        
            if(a1=="casenocgapum"){
            document.getElementById(current_Selected).style.columnGap= document.getElementById("cgapops_um_dfv").value+"%";
        }
        
        
        if(a1=="casenosbum"){
        if(document.getElementById("sbdisops_um_dfv").value=="display-false")
        
        {
    let stag=document.getElementById("fornmalscrollbalum");
    stag.innerHTML+=" #"+current_Selected+"::-webkit-scrollbar{display:none;}";
        }
     
     }
        
     }
     
     
        
      if(a1=="checkitum"){
      
        if(document.getElementById("displayops_um_dfv").value=="flex"){	document.getElementById("scroll4displayumflex_dfv").style.display="block";
        
        }
        if(document.getElementById("displayops_um_dfv").value=="none"){	document.getElementById("scroll4displayumflex_dfv").style.display="none";
        
        } 
          if(document.getElementById("displayops_um_dfv").value=="block"){	document.getElementById("scroll4displayumflex_dfv").style.display="none";
        
        }
        
        
    }


    if(a1=="casenoOF"){
  
        if(document.getElementById("overflow_um_dfv").value=="oXS"){	document.getElementById(current_Selected).style.overflowX="scroll";
        
        }
        
     else if(document.getElementById("overflow_um_dfv").value=="oYS"){	document.getElementById(current_Selected).style.overflowY="scroll";
        
        }
        
      else if(document.getElementById("overflow_um_dfv").value=="oYH"){	document.getElementById(current_Selected).style.overflowY="hidden";
    }
    
     else if(document.getElementById("overflow_um_dfv").value=="oXH"){	document.getElementById(current_Selected).style.overflowX="hidden";
        
    }
    
     else if(document.getElementById("overflow_um_dfv").value=="oA"){	document.getElementById(current_Selected).style.overflow="auto";
    }
    
     else if(document.getElementById("overflow_um_dfv").value=="oNA"){	document.getElementById(current_Selected).style.overflowX="visible";
    document.getElementById(current_Selected).style.overflowY="visible";   
    }
            
    }
    
      
    }
}


function appearprvSVG(a){
if(a==1){
document.getElementById("prvSVG").style.display="flex";
}
else{
document.getElementById("prvSVG").style.display="none";
}

}

function addsvg_um(){
	document.getElementById("prvSVG").innerHTML=document.getElementById("fh_um").value;
	let html =document.getElementById("prvSVG");
	if(html.children[0].tagName=="svg"){
	html.children[0].setAttribute("id","svgidNoum_"+svgidgen_um);
	svgid_list.push("svgidNoum_"+svgidgen_um);
	svgidgen_um+=1;
	if(html.children[0].hasAttribute("width")){
	html.children[0].removeAttribute("width");
}
if(html.children[0].hasAttribute("height")){
    html.children[0].removeAttribute("height");
}
let alss=html.children[0].getAttribute("style");
if(alss!=null){
html.children[0].setAttribute("style","width:100%;height:100%;"+alss);
}
else{
html.children[0].setAttribute("style","width:100%;height:100%;");
}
document.getElementById("fh_um").value=document.getElementById("prvSVG").innerHTML;
nowCabAdd_um=true;
}
}

function addsvg2S_um(){
if(nowCabAdd_um){
document.getElementById(current_Selected).innerHTML=document.getElementById("prvSVG").innerHTML;
}
}


