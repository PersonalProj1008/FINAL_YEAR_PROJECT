let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

console.log("edit success");

//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier",
  "Courier New",
  "cursive",
  "Calibri",
  "Geneva",
  "Optima",
  "Cambria",
  "Garamond",
  "monospace",
  "Brush Script",
  "Copperplate",
  "Lucida Bright",
  "Candara",
  "Helvetica"
];

//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  //create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  //fontSize allows only till 7
  for (let i = 1; i <= 1000; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //default size
  fontSizeRef.value = 3;
};

//main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

//link
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  //if link has http then pass directly else add https
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;

        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer();


//ADD NE CODE HERE

function appearSetBURL(){
  
  if(openPOPUPS==0){
    openPOPUPS+=1;
    activepopupid="addBurlpopup";
  document.getElementById("BURLS_SWOPUM").value="bu";
	document.getElementById("addBurlpopup").style.display="flex";
	}
}

	   function BURLS_SWOPUMF(){
	let val=document.getElementById("BURLS_SWOPUM").value;
    if(val=="rad"){
    	closeit("addBurlpopup");
        appearSetBcolorrg();
    }
    else if(val=="con"){
    	closeit("addBurlpopup");
        appearSetBcolorcg();
    }
	 else if(val=="lin"){
    	closeit("addBurlpopup");
         appearSetBcolor();
    }
    document.getElementById("BURLS_SWOPUM").value="bu";

}

	let RolDalh_umvar="DumyDisR_um";
	
function flexBURLSL_um(){
if((document.getElementById("blockladdopBURL_um").children[5].getElementsByTagName("select")[0].value)=="length")
{
document.getElementById("lengBS_OF").style.display="flex";
}
else{
document.getElementById("lengBS_OF").style.display="none";
add2DEBU_um();
}
}

function add2MEBU_um(){
let a=document.getElementById("blockladdopBURL_um").children[0].getElementsByTagName("input")[0].value;
let b=document.getElementById("blockladdopBURL_um").children[1].getElementsByTagName("input")[0].value+"% "+document.getElementById("blockladdopBURL_um").children[1].getElementsByTagName("input")[1].value+"%";
let c=document.getElementById("blockladdopBURL_um").children[2].getElementsByTagName("select")[0].value;
let d=document.getElementById("blockladdopBURL_um").children[3].getElementsByTagName("select")[0].value;
let e=document.getElementById("blockladdopBURL_um").children[4].getElementsByTagName("select")[0].value;
let f=document.getElementById("blockladdopBURL_um").children[5].getElementsByTagName("select")[0].value;
document.getElementById(current_Selected).style.background="url("+a+")";
document.getElementById(current_Selected).style.backgroundPosition=b;
document.getElementById(current_Selected).style.backgroundRepeat=c;
document.getElementById(current_Selected).style.backgroundAttachment=d;
document.getElementById(current_Selected).style.backgroundClip=e;
if(document.getElementById("lengBS_OF").style.display=="flex"){
let g=document.getElementById("blockladdopBURL_um").children[6].getElementsByTagName("input")[0].value+"% "+document.getElementById("blockladdopBURL_um").children[6].getElementsByTagName("input")[1].value+"%";
document.getElementById(current_Selected).style.backgroundSize=g;
}
else{
document.getElementById(current_Selected).style.backgroundSize=f;
console.log(document.getElementById(current_Selected).style.backgroundSize,"-----------------------size");
}

}
	
	

function add2DEBU_um(){
let a=document.getElementById("blockladdopBURL_um").children[0].getElementsByTagName("input")[0].value;
console.log(a);
let b=document.getElementById("blockladdopBURL_um").children[1].getElementsByTagName("input")[0].value+"% "+document.getElementById("blockladdopBURL_um").children[1].getElementsByTagName("input")[1].value+"%";
let c=document.getElementById("blockladdopBURL_um").children[2].getElementsByTagName("select")[0].value;
let d=document.getElementById("blockladdopBURL_um").children[3].getElementsByTagName("select")[0].value;
let e=document.getElementById("blockladdopBURL_um").children[4].getElementsByTagName("select")[0].value;
let f=document.getElementById("blockladdopBURL_um").children[5].getElementsByTagName("select")[0].value;
document.getElementById(RolDalh_umvar).style.background="url("+a+")";
document.getElementById(RolDalh_umvar).style.backgroundPosition=b;
document.getElementById(RolDalh_umvar).style.backgroundRepeat=c;
document.getElementById(RolDalh_umvar).style.backgroundAttachment=d;
document.getElementById(RolDalh_umvar).style.backgroundClip=e;
if(document.getElementById("lengBS_OF").style.display=="flex"){
let g=document.getElementById("blockladdopBURL_um").children[6].getElementsByTagName("input")[0].value+"% "+document.getElementById("blockladdopBURL_um").children[6].getElementsByTagName("input")[1].value+"%";
document.getElementById(RolDalh_umvar).style.backgroundSize=g;
}
else{
document.getElementById(RolDalh_umvar).style.backgroundSize=f;
console.log(document.getElementById(RolDalh_umvar).style.backgroundSize,"-----------------------size");
}

}
  function changeDumy_um(e){
   let b=document.getElementById(RolDalh_umvar);
   console.log(e.path[0]);
   RolDalh_umvar=(e.path[0]).id;
   let a=document.getElementById(RolDalh_umvar);
   let temp=a.style.opacity;
   a.style.opacity=b.style.opacity;
   b.style.opacity=temp;
   temp=a.style.background;
   a.style.background=b.style.background;
   b.style.background=temp;
   
   console.log(RolDalh_umvar);
}
document.getElementById("DumyDis_um").addEventListener("click", changeDumy_um);

//ADD HERE

function maniBSsyn_UM(){
  let a=document.getElementById("hshadow_um").value +"px ";
  let b=document.getElementById("vshadow_um").value +"px ";
    let c=document.getElementById("blurRadius_um").value +"px ";
  let d=document.getElementById("spreadRadius_um").value +"px ";
  let e=document.getElementById("shadowColor_um").value;
  console.log(e);
  let ex=document.getElementById("shadowColorOpacity_um").value;
  ex=hexToRgba(e, ex);
  if(document.getElementById("shadowInset_um").checked){
  let syn ="inset "+a+b+c+d+ex
  document.getElementById("elementBS_UM").style.boxShadow=syn;
  document.getElementById("codeBS_UM").value="box-shadow: "+syn;
  }
  else{
  let syn =a+b+c+d+ex;
  document.getElementById("elementBS_UM").style.boxShadow=syn;
  document.getElementById("codeBS_UM").value="box-shadow: "+syn;
  }

}

function hexToRgba(shadowColor, shadowColorOpacity) {
let r = parseInt(shadowColor.substr(1, 2), 16);
let g = parseInt(shadowColor.substr(3, 2), 16);
let b = parseInt(shadowColor.substr(5, 2), 16);
return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}
   dragElement(document.getElementById("addBSpopup"));

  function dragElement(element) {
    var pos1 = 0,pos2 = 0,pos3 = 0,pos4 = 0;
    if ((element.children[0].className).includes("topoptions")) {
      element.children[0].onmousedown = dragMouseDown;
    }else {
      element.onmousedown = dragMouseDown
    }
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
  if( ((element.offsetTop - pos2 )>-1)&&(element.offsetTop - pos2 <=window.innerHeight-element.offsetHeight)&&(element.offsetLeft - pos1 <=window.innerWidth-element.offsetWidth)&&(element.offsetLeft - pos1)>-1)
      {element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }
  }
    function closeDragElement() {
      document.onmouseup = 0;
      document.onmousemove = 0;
    }
  }

  function add2MEPOS_um() {
	  if(current_Selected!="b0Dy"){
    let a=document.getElementById("posCHILDsyn_um").children[0].getElementsByTagName("select")[0].value;
    let b=document.getElementById("posCHILDsyn_um").children[1].getElementsByTagName("input")[0].value;
    let c=document.getElementById("posCHILDsyn_um").children[2].getElementsByTagName("input")[0].value;
    let d=document.getElementById("posCHILDsyn_um").children[3].getElementsByTagName("input")[0].value;
    let e=document.getElementById("posCHILDsyn_um").children[4].getElementsByTagName("input")[0].value;
    document.getElementById(current_Selected).style.position=a;
    document.getElementById(current_Selected).style.top=b+"%";
    document.getElementById(current_Selected).style.left=c+"%";
    document.getElementById(current_Selected).style.bottom=d+"%";
    document.getElementById(current_Selected).style.right=e+"%";
    }      
        }
      
     function add2MEPOS_umT() {
    if(current_Selected!="b0Dy"){   
    let b=document.getElementById("posCHILDsyn_um").children[1].getElementsByTagName("input")[0].value;
    document.getElementById("po142_Tum").innerHTML=b+"%";
    document.getElementById(current_Selected).style.top=b+"%";      
        }
     }
     function add2MEPOS_umL() {
      if(current_Selected!="b0Dy"){
    let c=document.getElementById("posCHILDsyn_um").children[2].getElementsByTagName("input")[0].value;
    document.getElementById("po142_Lum").innerHTML=c+"%";
    document.getElementById(current_Selected).style.left=c+"%";
      }     
        }	
      
     function add2MEPOS_umB() {
      if(current_Selected!="b0Dy"){
    let d=document.getElementById("posCHILDsyn_um").children[3].getElementsByTagName("input")[0].value;
    document.getElementById("po142_Bum").innerHTML=d+"%";
    document.getElementById(current_Selected).style.bottom=d+"%";
      }
        }

    function add2MEPOS_umR() {
      if(current_Selected!="b0Dy"){
    let e=document.getElementById("posCHILDsyn_um").children[4].getElementsByTagName("input")[0].value;
    document.getElementById("po142_Rum").innerHTML=e+"%";
    document.getElementById(current_Selected).style.right=e+"%";
           
        }
      }
      function add2EBS_um(){
        if(current_Selected!="b0Dy"){
        document.getElementById(current_Selected).style.boxShadow=document.getElementById("codeBS_UM").value.split(": ")[1];
        }
    }


//output gen function

let ui=[];
function fforCi_um(a){
  let kkl=document.getElementById("b0Dy").querySelectorAll("[id]");
  for(i=0;i<kkl.length;i++){
    if( (kkl[i].tagName!="svg")&&(kkl[i].tagName!="SVG")&&(kkl[i].tagName!="P")&&(kkl[i].tagName!="p") )
    {
      ui.push(kkl[i].id);

    }

  }
} 




          function synOGen_um(){
            HTMLCODESTR=document.getElementById("b0Dy").innerHTML;
            fforCi_um("b0Dy");
            let Fsyn="";
            for(i=0;i<ui.length;i++){
              if((document.getElementById(ui[i]).tagName!="P")&&(document.getElementById(ui[i]).tagName!="p")&&(document.getElementById(ui[i]).tagName!="svg")){
                if(document.getElementById(ui[i]).hasAttribute("style")){
                  let sa=document.getElementById(ui[i]).getAttribute("style");
                  if(document.getElementById(ui[i]).hasAttribute("class")){
                  let sa1=document.getElementById(ui[i]).getAttribute("class");
                  let iat=ui[i]+"_UMV";
                  document.getElementById(ui[i]).setAttribute("class",sa1+" "+iat);
                }
                else{
                  let iat=ui[i]+"_UMV";
                  document.getElementById(ui[i]).setAttribute("class",iat);
                }
                  let gencn="."+ui[i]+"_UMV{\n";
                  // document.getElementById(ui[i]).setAttribute("class",sa1+" "+iat);
                  sa=sa.split(";");
                  sa=sa.join(";\n");
                  gencn=gencn+sa+"}";
                  Fsyn=Fsyn+gencn+"\n";
                }			
              }
            
            }
            if((document.getElementById("fornmalscrollbalum").innerHTML!="")&&(document.getElementById("fornmalscrollbalum").innerHTML!=" ")){
            let k=document.getElementById("fornmalscrollbalum").innerHTML;
            k=k.split("{");
            k=k.join("{\n");
            k=k.split("}");
            k=k.join("\n}\n");
            Fsyn=Fsyn+"/* css scrollbar-hide code */"+k;
            }
            let aD="";
              if(document.getElementById("b0Dy").hasAttribute("style")){
              aD=document.getElementById("b0Dy").getAttribute("style");
              aD=aD.split(";");
              aD=aD.join(";\n");
              Fsyn="#b0Dy{\nwidth:100%;\nheight:100%;\noverflow:hidden;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nalign-content:center;\n"+aD+"}\n"+Fsyn;
                
              }else{
                Fsyn="#b0Dy{\nwidth:100%;\nheight:100%;\noverflow:hidden;\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\nalign-content:center;\n}\n"+Fsyn;
              }
              Fsyn="*{\npadding:0%;\nmargin:0%;\nbox-sizing:border-box;\n}\nbody{\nwidth:100vw;\nheight:100vh;\n}\n"+Fsyn;
              
            document.getElementById("cssOutput_um").innerHTML=Fsyn;
            
              for(i=0;i<ui.length;i++){
              if((document.getElementById(ui[i]).tagName!="P")&&(document.getElementById(ui[i]).tagName!="p")&&(document.getElementById(ui[i]).tagName!="svg")){
                if(document.getElementById(ui[i]).hasAttribute("style")){
                  document.getElementById(ui[i]).removeAttribute("style");
                }			
              }
              }
              
              let hi=document.getElementById("b0Dy").innerHTML;
              hi=hi.split(">");
              hi=hi.join(">\n");
              let cusjslib="";
              document.getElementById("htmlOutput_um").innerHTML='<html>\n<head>\n'+cusjslib+'\n</head>\n<body>\n<div id="b0Dy">\n'+hi+'\n</div>\n</body>\n</html>';
              document.getElementById("b0Dy").innerHTML=HTMLCODESTR;
              
              if((document.getElementById("addclientjs").innerHTML!="")&&(document.getElementById("addclientjs").innerHTML!=" ")){
              document.getElementById("jsOutput_um").innerHTML=document.getElementById("addclientjs").innerHTML;
              }
            ui=[];
          }

          function addAtte2c_UM(){
            if(current_Selected!="b0Dy"){
            if(openPOPUPS==0){
            openPOPUPS+=1;
           activepopupid="addATTEpopup";
           document.getElementById("addATTEpopup").style.display="flex";
           let cc=current_Selected;
           let n=document.getElementById(current_Selected).attributes;
           document.getElementById("eAd_UMD").innerHTML="";
           for(i=0;i<n.length;i++){
            let alp=document.createElement("div"); 
            alp.setAttribute("class","attVinputbox_um");
          
            let a=document.createElement("p");
           a.innerText=n[i].name;
           let a1=document.createElement("textarea");
           a1.value=n[i].value;
           a1.setAttribute("style","display:flex;justify-content:flex-start;align-items:flex-start;width: 96%;height:90%;outline: none;resize: none;border: 1px solid grey;");            
          alp.appendChild(a);
          alp.appendChild(a1);
           document.getElementById("eAd_UMD").appendChild(alp);
         }
         let but=document.createElement("button");
         but.setAttribute("class","btb4BURL_umN");
         but.innerText="Update";
         but.setAttribute("onclick","updatesie_um("+cc+")" );
         let alp=document.createElement("div"); 
         alp.setAttribute("class","attVinputbox_um");
         alp.append(but);
         document.getElementById("eAd_UMD").appendChild(alp);
         }
         }
        }
         
         function updatesie_um(cc){
           if(cc!="b0Dy"){

            let sidv="";
          
           let n=document.getElementById("eAd_UMD").children;
           let n1=document.getElementById(current_Selected).attributes;
           console.log(n1,"-----------------------0");
           let k=document.getElementById(current_Selected);
           for(i=0;i<n1.length;i++){
           let vall=n[i].children[1].value;
          let m=n1[i].name;
          console.log(m);
          if(m=="id"){
            console.log("------sidv----gen--------------",i);

            sidv=vall;
            continue;
          }
          else{
            console.log("---------is-----id----------",i);
           k.setAttribute(m,vall);
          }
        }
        console.log("---------o-----of--loop--------");
        console.log(sidv);
        k.setAttribute("id",sidv);
         }
        }
        let condUM_1=false;
        let condUM_2=false;
        let condUM_3=false;
        
        function DSkey0_um(event) {
        
        if(event.key=="Control"){
          condUM_1=true;
          }
        if(event.key=="Alt"){
          condUM_2=true;
          }
        if((event.key=="q") || (event.key=="Q")){
          condUM_3=true;
          }
          
        }
        function DSkey_um(event) {
        
        if(event.key=="Control"){
         condUM_1=false;
        }
        if(event.key=="Alt"){
          condUM_2=false;
          }
        if((event.key=="q") || (event.key=="Q")){
          condUM_3=false;
          }
        
        }
        
        
        
        function dragStart_um(event) {
          event.dataTransfer.setData("passcode", event.target.id);
        }
        
        function allowDrop_um(event) {
          event.preventDefault();
        }
        
        function dropPP_um(event) {
        
          event.preventDefault();
          let data = event.dataTransfer.getData("passcode");
          let v=event.target.id;
          data= document.getElementById(data);
          v= document.getElementById(v);
    
          if(((condUM_2==false)&&(condUM_1==false)&&(condUM_3==false))&&(data.id!="b0Dy")&&(v.id!="b0Dy")){
            let vp = v.parentElement;
            vp.insertBefore(data,v);
          }



          if(((condUM_2==false)&&(condUM_1==true)&&(condUM_3==false))&&(data.id!="b0Dy")&&(v.id!="b0Dy")){
          let mm=data.getAttribute("style");
          v.setAttribute("style",mm);
          }
          if((condUM_1 && condUM_2)&&(data.id!="b0Dy")){
          data.remove();
          v.appendChild(data);
          }
          if((condUM_1 && condUM_3)&&((v.id!="b0Dy")&&(data.id!="b0Dy"))){
          let mm1=data.getAttribute("onmouseover");
          v.setAttribute("onmouseover",mm1);
          mm1=data.getAttribute("onmouseout");
          v.setAttribute("onmouseout",mm1);
          }
          
        }
        // video manipulation functions

        function appearVET(){
          if(openPOPUPS==0){
          openPOPUPS+=1;
          activepopupid="addVetpopup";
          document.getElementById("addVetpopup").style.display="flex";
              }
          }
        
        function vetMainFocus(){
        let k=document.getElementById("dummy4vet_um").children[0];
        k.remove();
        document.getElementById(current_Selected).appendChild(k);
        }
        function vetDumFocus(){
        let a=document.getElementById("mustbfilled_vetum").value;
        if((a!="")&&(a!=" ")){
        let a1=document.createElement("video");
        let a2=document.createElement("source");
        
        let step1=document.getElementById("vetManiH_um").children;
        let step2=step1[2].getElementsByTagName("input")[0].value;
        a2.setAttribute("src",step2);
        a2.setAttribute("type","video/mp4");
        
        step2=step1[3].getElementsByTagName("input")[0].value;
        let wv=step1[4].getElementsByTagName("input")[0].value +"%";
        let hv=step1[4].getElementsByTagName("input")[1].value +"%";
        a1.setAttribute("poster",step2);
        a1.setAttribute("id",a);
        a1.setAttribute("width",wv);
        a1.setAttribute("height",hv);
        
        if(step1[5].getElementsByTagName("input")[0].checked){
        a1.controls=true;
        }
        else{
        a1.controls=false;
        }
        if(step1[5].getElementsByTagName("input")[1].checked){
        a1.autoplay=true;
        }
        else{
        a1.autoplay=false;
        }
        if(step1[5].getElementsByTagName("input")[2].checked){
        a1.loop=true;
        }
        else{
        a1.loop=false;
        }
        
        a1.appendChild(a2);
        document.getElementById("dummy4vet_um").children[0].remove();
        document.getElementById("dummy4vet_um").appendChild(a1);
        }	
          }
// audio mani here

function appearAUD(){
  if(openPOPUPS==0){
  openPOPUPS+=1;
  activepopupid="addAudpopup";
  document.getElementById("addAudpopup").style.display="flex";
let stepalpha=document.getElementById("audManiH_um").children;
stepalpha[4].getElementsByTagName("input")[0].checked=true;
      }
  }

function audMainFocus(){
let k=document.getElementById("dummy4aud_um").children[0];
k.remove();
document.getElementById(current_Selected).appendChild(k);
}
function audDumFocus(){
let a=document.getElementById("mustbfilled_audum").value;
if((a!="")&&(a!=" ")){
let a1=document.createElement("audio");
let a2=document.createElement("source");

let a3=document.createElement("div");
a3.style.display="flex";
a3.style.justifyContent="center";
a3.style.alignItems="center";
a3.style.border="1px solid black";

a1.appendChild(a2);
a3.appendChild(a1);
let step1=document.getElementById("audManiH_um").children;
let step2=step1[2].getElementsByTagName("input")[0].value;
a2.setAttribute("src",step2);
a2.setAttribute("type","audio/mp3");

let wv=step1[3].getElementsByTagName("input")[0].value +"%";
let hv=step1[3].getElementsByTagName("input")[1].value +"%";
a3.setAttribute("id",a);
a3.style.width=wv;
a3.style.height=hv;

if(step1[4].getElementsByTagName("input")[0].checked){
a1.controls=true;
}
else{
a1.controls=false;
}
if(step1[4].getElementsByTagName("input")[1].checked){
a1.autoplay=true;
}
else{
a1.autoplay=false;
}
if(step1[4].getElementsByTagName("input")[2].checked){
a1.loop=true;
}
else{
a1.loop=false;
}
document.getElementById("dummy4aud_um").children[0].remove();
document.getElementById("dummy4aud_um").appendChild(a3);
}	
  }

// image manipulation here

function appearIMG(){
  if(openPOPUPS==0){
  openPOPUPS+=1;
  activepopupid="addIMGpopup";
  document.getElementById("addIMGpopup").style.display="flex";
      }
  }

function IMGMainFocus(){
let k=document.getElementById("dummy4IMG_um").children[0];
k.remove();
document.getElementById(current_Selected).appendChild(k);
}
function IMGDumFocus(){
let a=document.getElementById("mustbfilled_IMGum").value;
if((a!="")&&(a!=" ")){
let a1=document.createElement("img");

let step1=document.getElementById("vetManiH_um").children;
let step2=step1[2].getElementsByTagName("input")[0].value;
a1.setAttribute("src",step2);

step2=step1[3].getElementsByTagName("input")[0].value;
let wv=step1[4].getElementsByTagName("input")[0].value +"%";
let hv=step1[4].getElementsByTagName("input")[1].value +"%";
a1.setAttribute("id",a);
a1.setAttribute("alt",step2);
a1.setAttribute("width",wv);
a1.setAttribute("height",hv);

document.getElementById("dummy4IMG_um").children[0].remove();
document.getElementById("dummy4IMG_um").appendChild(a1);
}	
  }



// funcs for leftside popups start


function makeappearHELP_um(){
  if(openPOPUPS==0){
      openPOPUPS+=1;
      activepopupid="addhelppopup_um";
      document.getElementById("addhelppopup_um").style.display="flex";
      }
  }
    
// funcs for leftside js popups

function makeappearJSLIB_um(){
  if(openPOPUPS==0){
      openPOPUPS+=1;
      activepopupid="addJSLIB_um";
      document.getElementById("addJSLIB_um").style.display="flex";
      }
  }

let LISTOFSCRIPTLIB_UM=[];
	function src2slc2check2add_um(){
		let a=document.getElementById("srcjsaddUM").value;
		let a1=document.getElementById("srcjssnaddUM").value;
		let ba=document.getElementById("listjslibUM");
		if(LISTOFSCRIPTLIB_UM.indexOf(a)==-1){
		if((a!="")&&(a!=" ")){
			let b=document.createElement("script");
			b.setAttribute("src",a);
			console.log(a);
			let d=document.createElement("option");
			d.value=a;
			if((a1!="")&&(a1!=" ")){
			b.setAttribute("customlib",a1);
			d.innerHTML=a1;
			}
			else{
			b.setAttribute("customlib","unknown");
			d.innerHTML="unknown";
			}
			ba.value="";
			ba.appendChild(d);
			ba.value="";
			document.head.appendChild(b);
			LISTOFSCRIPTLIB_UM.push(a);
			
		}
		}
    }
	
	function rmvlib_um(){
	let ba=document.getElementById("listjslibUM");
	if(LISTOFSCRIPTLIB_UM.indexOf(ba.value)!=-1){
	let rr=document.getElementsByTagName("script");
	for(i=0;i<rr.length;i++){
	if(rr[i].hasAttribute("customlib")){
			let att =rr[i].getAttribute("src");
				if(att==ba.value){
				rr[i].remove();
				let ia=LISTOFSCRIPTLIB_UM.indexOf(ba.value);
				LISTOFSCRIPTLIB_UM.splice(ia,1);
				
				
				
				}}}
				let cs=ba.children;
				for(j=0;j<cs.length;j++){
				if(cs[j].value==ba.value){
					cs[j].remove();
				}
				
				}
	
			ba.value="";
	}
		ba.value="";
	
	}
        
// add audio coomand
let AUDCOMMAND_UM=false;

if (annyang) {
  var commands = {
    'add division': function() {
      appearSetDivId();
    },
    'add input': function() {
      appearSetInputId();
    },
    'add button': function() {
      appearSetButtonId();
    },
    'open text editor': function() {
      appearSetTextBox();
    },
    'select tag': function() {
      appearSetSelectId();
    },
    'add event attributes': function() {
      appearEHpopup();
    },
    'vector graphics': function() {
      appearSVGpopupBOX();
    },
    'add images': function() {
      appearIMG();
    },
    'add audios': function() {
      appearAUD();
    },
    'add videos': function() {
      appearVET();
    },
    'text area': function() {
      appearSettextareaId();
    },
    'background': function() {
      appearSetBcolor();
    },
    'display settings': function() {
      appearDisplayId();
    },
    'turn square': function() {
      style_elem("sQw_um");
    },
    'turn rectangle': function() {
      style_elem("sQh_um");
    },
    'edit offset': function() {
      BORpopupFlex();
    },
    'position menu': function() {
      aprPOSpopup();
    },
    'box shadow': function() {
      appearBSpopupF();
    },
    'style': function() {
      switch2css();
    },
    'base': function() {
      switch2html();
    },
    'script': function() {
      switch2js();
    },
    'notes': function() {
      switch2Temp();
    },
    'code': function() {
      switch2CE();
    }


  };

  annyang.addCommands(commands);

  // annyang.start();
}

function setaudcom_um(){
if(AUDCOMMAND_UM==false){
  document.getElementById("micon_um").style.backgroundColor="red";
  AUDCOMMAND_UM=true;
  annyang.start();
  
}
else{
  document.getElementById("micon_um").style.backgroundColor="white";
  AUDCOMMAND_UM=false;
  annyang.abort();
  // annyang=false;
}

}

// VOICE COMMANDS FUNCTION AREA STARTS
// annyang=false;

