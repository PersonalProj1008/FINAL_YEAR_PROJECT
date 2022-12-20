const nop=11;

ele_tag={
oc:"appearSetDivId()",
gd:"div",
cn:["emnt_tag"],
dd:"The div tag is generally used by web developers to group HTML elements together and apply CSS styles to many elements at once"
};

odc={
eed:"DDIIVV_id14200118049",
cn:"ele_op14200118049"
};

ele_tag1={
oc:"appearSetButtonId()",
gd:"button",
cn:["emnt_tag"],
dd:"The tag defines a clickable button.Inside a button tag element you can put text."
};

odc1={
eed:"TEXT_id14200118049",
cn:"ele_op14200118049"
};

ele_tag2={
oc:"appearSetInputId()",
gd:"input",
cn:["emnt_tag"],
dd:"The input tag specifies an input field where the user can enter data."
};
    
odc2={
eed:"INPUT_id14200118049",
cn:"ele_op14200118049"
};

ele_tag3={
oc:"appearSetTextBox()",
gd:"add-text",
cn:["emnt_tag"],
dd:"First select the element to add text.Element id will appear on the right side of the box"
};
        
odc3={
eed:"INPUT_id14200118049",
cn:"ele_op14200118049"
};

ele_tag4={
oc:"appearSetSelectId()",
gd:"select",
cn:["emnt_tag"],
dd:"First select the element to add select.Element id will appear on the right side of the box"
};

ele_tag5={
oc:"appearEHpopup()",
gd:"event handlers",
cn:["emnt_tag"],
dd:"First select the element to add select.Element id will appear on the right side of the box"
};
ele_tag6={
oc:"appearSVGpopupBOX()",
gd:"add svgs",
cn:["emnt_tag"],
dd:"First select the element to add select.Element id will appear on the right side of the box"
};
ele_tag7={
oc:"appearIMG()",
gd:"add images",
cn:["emnt_tag"],
dd:"First select the element to add images.Element id will appear on the right side of the box"
};
ele_tag8={
oc:"appearAUD()",
gd:"add audios",
cn:["emnt_tag"],
dd:"First select the element to add audio.Element id will appear on the right side of the box"
};
ele_tag9={
oc:"appearVET()",
gd:"add videos",
cn:["emnt_tag"],
dd:"First select the element to add video.Element id will appear on the right side of the box"
};
ele_tag10={
    oc:"appearSettextareaId()",
    gd:"add textarea",
    cn:["emnt_tag"],
    dd:"First select the element to add textarea.Element id will appear on the right side of the box"
    };

      
function appearSVGpopupBOX(){    
      if(openPOPUPS==0){
        openPOPUPS+=1;
        activepopupid="addSVGpopup";
        document.getElementById("addSVGpopup").style.display="flex";
        }
    }

otrd=[odc,odc1,odc2,odc3,odc3,odc3,odc3,odc3,odc3,odc3,odc3];
inrd=[ele_tag,ele_tag1,ele_tag2,ele_tag3,ele_tag4,ele_tag5,ele_tag6,ele_tag7,ele_tag8,ele_tag9,ele_tag10];

//the html tray option border line


const nop4c=21;
let maxvarFTY=100;
let maxvarFTX=100;

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
    

css_mani={
ocf:false,
oc:["style_elem(11)"],
gd:"width",
cn:["emnt_tag"],
fatt:["oninput"],
riolN:1,
rangeids:["style_aw"],
svid:"viewprop_w",
maxRv:["100"],
minRv:["0"],
rops:["Adjust Width:"]
};

odcc={
eed:"DDIIVV_id14200118049",
cn:"ele_op14200118049"
};
css_mani0={
    ocf:false,
    oc:["style_elem(111)"],
    gd:"height",
    cn:["emnt_tag"],
    fatt:["oninput"],
    riolN:1,
    rangeids:["style_ah"],
    svid:"viewprop_h",
    maxRv:["100"],
    minRv:["0"],
    rops:["Adjust Height:"]
    };
    

css_mani1={
    ocf:true,
    ocfv:"appearSetBcolor()",
    oc:["style_elem(66)","style_elem(666)","style_elem(6666)","style_elem(66666)"],
    gd:"background",
    cn:["emnt_tag"],
    fatt:["oninput","oninput","oninput","oninput"],
    riolN:4,
    rangeids:["style_aw0","style_aw1","style_aw2","style_aw3"],
    svid:"viewprop_aw0",
    maxRv:["255","255","255","100"],
    minRv:["0","0","0"],
    rops:["Adjust red:","Adjust green:","Adjust blue:","Adjust opacity:"],
    hasdesc:"yes",
    ladesc:"<br> click for more options"
    };
    
    odcc1={
    eed:"DDIIVV_id14200118049",
    cn:"ele_op14200118049"
    };
    css_mani2={
        ocf:false,
        oc:["style_elem(22)","style_elem(23)"],
        gd:"border-radius",
        cn:["emnt_tag"],
        fatt:["oninput","oninput"],
        riolN:2,
        rangeids:["style_br","style_brpx"],
        svid:"viewprop_br",
        maxRv:["100","100"],
        minRv:["0","0"],
        rops:["Adjust broder-radius:","Adjust broder-radius-px:"]
        };
        
        odcc2={
        eed:"DDIIVV_id14200118049",
        cn:"ele_op14200118049"
        };

        css_mani3={
            ocf:false,
            oc:["style_elem('22blr')","style_elem('22blrpx')"],
            gd:"border-bottom-left-radius",
            cn:["emnt_tag"],
            fatt:["oninput","oninput"],
            riolN:2,
            rangeids:["style_brblr","style_brblrpx"],
            svid:"viewprop_brblr",
            maxRv:["100","100"],
            minRv:["0","0"],
            rops:["Adjust btm-left-radius:","Adjust btm-left-radius-px:"]
            };
            
            odcc3={
            eed:"DDIIVV_id14200118049",
            cn:"ele_op14200118049"
            };
            css_mani4={
                ocf:false,
                oc:["style_elem('22brr')","style_elem('22brrpx')"],
                gd:"border-bottom-right-radius",
                cn:["emnt_tag"],
                fatt:["oninput","oninput"],
                riolN:2,
                rangeids:["style_brbrr","style_brbrrpx"],
                svid:"viewprop_brbrr",
                maxRv:["100","100"],
                minRv:["0","0"],
                rops:["Adjust btm-right-radius:","Adjust btm-right-radius-px:"]
                };
                
                odcc4={
                eed:"DDIIVV_id14200118049",
                cn:"ele_op14200118049"
                };
                css_mani5={
                    ocf:false,
                    oc:["style_elem('22trr')","style_elem('22trrpx')"],
                    gd:"border-top-right-radius",
                    cn:["emnt_tag"],
                    fatt:["oninput","oninput"],
                    riolN:2,
                    rangeids:["style_brtrr","style_brtrrpx"],
                    svid:"viewprop_brtrr",
                    maxRv:["100","100"],
                    minRv:["0","0"],
                    rops:["Adjust top-right-radius:","Adjust top-right-radius-px:"]
                    };
                    
                    odcc5={
                    eed:"DDIIVV_id14200118049",
                    cn:"ele_op14200118049"
                    }
                    css_mani6={
                        ocf:false,
                        oc:["style_elem('22tlr')","style_elem('22tlrpx')"],
                        gd:"border-top-left-radius",
                        cn:["emnt_tag"],
                        fatt:["oninput","oninput"],
                        riolN:2,
                        rangeids:["style_brtlr","style_brtlrpx"],
                        svid:"viewprop_brtlr",
                        maxRv:["100","100"],
                        minRv:["0","0"],
                        rops:["Adjust top-left-radius:","Adjust top-left-radius-px:"]
                        };
                        
                        odcc6={
                        eed:"DDIIVV_id14200118049",
                        cn:"ele_op14200118049"
                        }
                        css_mani7={
                            ocf:true,
                            ocfv:"appearDisplayId()",
                            oc:["style_elem(66)"],
                            gd:"display-settings",
                            cn:["emnt_tag"],
                            fatt:["oninput"],
                            riolN:0,
                            rangeids:["style_umT"],
                            svid:"viewprop_aw0",
                            maxRv:["255"],
                            minRv:["0"],
                            hasdesc:"yes",
                            ladesc:"click for options<thisF style='color:pink;'>diplay contains scrollbar and visibility  options</thisF>"
                            };
                            css_mani8={
                                ocf:false,
                                oc:["style_elem('rtransF142001')"],
                                gd:"rotate",
                                cn:["emnt_tag"],
                                fatt:["oninput"],
                                riolN:1,
                                rangeids:["style_rtransF142001"],
                                svid:"viewprop_rtrans142001",
                                maxRv:["360"],
                                minRv:["0"],
                                rops:["Adjust Rotate Deg:"]
                                };
                                css_mani9={
                                    ocf:false,
                                    oc:["style_elem('chngZi')"],
                                    gd:"z-index",
                                    cn:["emnt_tag"],
                                    fatt:["oninput"],
                                    riolN:1,
                                    rangeids:["style_zi"],
                                    svid:"viewprop_zi",
                                    maxRv:["1000"],
                                    minRv:["0"],
                                    rops:["Adjust Z-Index:"]
                                    };
                                    css_mani10={
                                        ocf:false,
                                        oc:["style_elem('tyF142')","style_elem('tyF142N')"],
                                        gd:"translateY",
                                        cn:["emnt_tag"],
                                        fatt:["oninput","oninput"],
                                        riolN:2,
                                        rangeids:["style_TY","style_TYN"],
                                        svid:"viewprop_TY",
                                        maxRv:[maxvarFTY,maxvarFTY],
                                        minRv:["0","0"],
                                        rops:["Adjust +translateY:","Adjust -translateY:"]
                                        };
                                        css_mani11={
                                            ocf:false,
                                            oc:["style_elem('txF142')","style_elem('txF142N')"],
                                            gd:"translateX",
                                            cn:["emnt_tag"],
                                            fatt:["oninput","oninput"],
                                            riolN:2,
                                            rangeids:["style_TX","style_TXN"],
                                            svid:"viewprop_TX",
                                            maxRv:[maxvarFTX,maxvarFTX],
                                            minRv:["0","0"],
                                            rops:["Adjust +translateX:","Adjust -translateX:"]
                                            };
                                            
css_mani12={
    ocf:false,
    oc:["style_elem(222)","style_elem(333)","style_elem(444)","style_elem(555)"],
    gd:"margin",
    cn:["emnt_tag"],
    fatt:["oninput","oninput","oninput","oninput"],
    riolN:4,
    rangeids:["style_mb","style_mt","style_ml","style_mr"],
    svid:"viewprop_mM",
    maxRv:["100","100","100"],
    minRv:["0","0","0"],
    rops:["margin-bottom:","margin-top:","margin-left:","margin-right:"]
    };

    css_mani_B12_13={
        ocf:false,
        oc:["style_elem(69108)","style_elem(69107)","style_elem(69106)","style_elem(69105)"],
        gd:"padding",
        cn:["emnt_tag"],
        fatt:["oninput","oninput","oninput","oninput"],
        riolN:4,
        rangeids:["style_pb","style_pt","style_pl","style_pr"],
        svid:"viewprop_pP",
        maxRv:["100","100","100"],
        minRv:["0","0","0"],
        rops:["padding-bottom:","padding-top:","padding-left:","padding-right:"]
        };
    




    css_mani13={
        ocf:true,
        ocfv:"style_elem('sQw_um')",
        oc:[],
        gd:"squarize-width",
        cn:["emnt_tag"],
        fatt:[],
        riolN:0,
        rangeids:[],
        svid:"viewprop_sqw",
        maxRv:[],
        minRv:[],
        rops:[],
        hasdesc:"yes",
        ladesc:"<br> click to see changes. squarize according to width"
        };
        css_mani14={
            ocf:true,
            ocfv:"style_elem('sQh_um')",
            oc:[],
            gd:"squarize-height",
            cn:["emnt_tag"],
            fatt:[],
            riolN:0,
            rangeids:[],
            svid:"viewprop_sqh",
            maxRv:[],
            minRv:[],
            rops:[],
            hasdesc:"yes",
            ladesc:"<br> click to see changes. squarize according to height"
            };
            css_mani15={
                ocf:false,
                oc:["style_elem('fsC_um')"],
                gd:"font-size",
                cn:["emnt_tag"],
                fatt:["oninput"],
                riolN:1,
                rangeids:["style_fsc"],
                svid:"viewprop_fsc",
                maxRv:["1000"],
                minRv:["0"],
                rops:["Adjust font size:"]
                };
                odcc4BR={
                    eed:"DDIIVV_id14200118049",
                    cn:"ele_op14200118049 little_height"
                    };
                    css_mani16={
                        ocf:true,
                        ocfv:"BORpopupFlex()",
                        oc:[],
                        gd:"border",
                        cn:["emnt_tag"],
                        fatt:[],
                        riolN:0,
                        rangeids:[],
                        svid:"viewprop_aw0",
                        maxRv:[],
                        minRv:[],
                        rops:[],
                        hasdesc:"yes",
                        ladesc:"<br> click for border option menu to edit width,color & style."
                        };
                        css_mani17={
                            ocf:true,
                            ocfv:"aprPOSpopup()",
                            oc:[],
                            gd:"position",
                            cn:["emnt_tag"],
                            fatt:[],
                            riolN:0,
                            rangeids:[],
                            svid:"viewprop_aw0",
                            maxRv:[],
                            minRv:[],
                            rops:[],
                            hasdesc:"yes",
                            ladesc:"<br> click for position option menu to edit ."
                            };
                            css_mani18={
                                ocf:true,
                                ocfv:"appearBSpopupF()",
                                oc:[],
                                gd:"box-shadow",
                                cn:["emnt_tag"],
                                fatt:[],
                                riolN:0,
                                rangeids:[],
                                svid:"viewprop_aw0",
                                maxRv:[],
                                minRv:[],
                                rops:[],
                                hasdesc:"yes",
                                ladesc:"<br> click for box-shadow option menu to edit."
                                };
                      

                                            
otrd4c=[odcc,odcc,odcc1,odcc2,odcc3,odcc4,odcc5,odcc6,odcc6,odcc,odcc,odcc,odcc,odcc,odcc,odcc,odcc,odcc,odcc,odcc,odcc];
inrd4c=[css_mani,css_mani0,css_mani1,css_mani2,css_mani_B12_13,css_mani3,css_mani4,css_mani5,css_mani6,css_mani7,css_mani8,css_mani9,css_mani10,css_mani11,css_mani12,css_mani13,css_mani14,css_mani15,css_mani16,css_mani17,css_mani18];


//the css tray option border line
