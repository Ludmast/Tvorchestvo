
//=================================================================================================
//=================================================================================================
//=================================================================================================
function soderg_razdela_0() {
    
    t = 0;
    text_size = 35;
    if (localStorage.getItem('np')) { } else localStorage.setItem('np', 0);
    ogl_vibrono = localStorage.getItem('np');
    
    //---------------------------------------------------------------------------------------------
    str =str_2= "";
    //---------------------------------------------------------------------------------------------
    
    //---------------------------------------------------------------------------------------------
    //подсветка и сами названия содержания страниц
    str_2+= "<div id='ten1_gl_p'></div><div id='gl_p_za_str'class='c_gl_p_0'>Содержимое раздела: <div id='kn_za_str2' onmouseover='kn_za_str2_0(1)' onmouseout='kn_za_str2_0(2)' onmousedown='kn_za_str2_0(4)'></div>";
    str += "<div id='ten2_gl_p'></div><div id='gl_p'class='c_gl_p_0'>Содержимое раздела:<div id='kn_za_str' onmouseover='kn_za_str_0(1)' onmouseout='kn_za_str_0(2)' onmousedown='kn_za_str_0(4)'></div>";
    for (i = 0; i < array_razd_p[localStorage.getItem('nm')][localStorage.getItem('nr') - 1].length; i++) {
    str += "<div id='tp_" + i + "'class='c_ten_p_0'></div><div id='p_" + i + "'class='c_p_0' onmouseover='p_videlen_0(1, " + i + ")' onmouseout='p_videlen_0(2," + i + ")' onmousedown='p_videlen_0(4," + i + ")'></div>";
    str_2+= "<div id='tp_" + i + "_2'class='c_ten_p_0'></div><div id='p_" + i + "_2'class='c_p_0'></div></div>";
    }
    str += "<div id='ten2'></div></div><div id='ten_vibronogo_p'class='c_ten_vibronogo_p_0'></div><div id='ogl_vibrono_copiy'class='c_ogl_vibrono_copiy_0'></div>";
    //---------------------------------------------------------------------------------------------
    in_load_1.innerHTML='<table><tr><td>'+str_2+'</td></tr></table>';
    in_load_3.innerHTML ='<table><tr><td>'+ str+'</td></tr></table>';
    //---------------------------------------------------------------------------------------------
    soderg_var=0;
    soderg_rab=false;

    //---------------------------------------------------------------------------------------------
    
    gl_p.style.width=gl_p_za_str.style.width=(osnova.clientWidth/100)*55+'px';

    if (localStorage.getItem('s_l')) {

    } else
    localStorage.setItem('s_l', 0);

    stranica_left = localStorage.getItem('s_l') - 0 > 0 ? 50 : 125;
    //---------------------------------------------------------------------------------------------
    
    //содержимое раздела по пунктам
    for (i = 0; i < array_razd_p[localStorage.getItem('nm')][localStorage.getItem('nr') - 1].length; i++) {
    
        odin_og = document.getElementById("p_" + i);
        odin_og_2=document.getElementById("p_" + i+"_2");
        odin_og.innerHTML =odin_og_2.innerHTML= array_razd_p[localStorage.getItem('nm')][localStorage.getItem('nr') - 1][i];
        if (ogl_vibrono == i) {
            ogl_vibrono_copiy.innerHTML = odin_og.innerHTML;
            ogl_vibrono_copiy.style.top = 200+50+t - 4 + 'px';
            ogl_vibrono_copiy.style.width = gl_p.clientWidth - 15 + 'px';
            ten_vibronogo_p.style.width = ogl_vibrono_copiy.clientWidth+5+'px';
            ten_vibronogo_p.style.top = 200+50+t - 3 + 'px';
            ten_vibronogo_p.style.height = ogl_vibrono_copiy.clientHeight + 5 + 'px';
            perem = t + 5 + 'px';
            //odin_og.style.visibility='hidden';
            //odin_og_2.style.visibility='hidden';
        }
        perem = odin_og.style.top =odin_og_2.style.top = 50+t + 'px';
       odin_og.style.width= odin_og_2.style.width = gl_p.clientWidth-45 + 'px';

       odin_og_2.style.visibility='hidden'; 
        odin_ogt = document.getElementById("tp_" + i);
        odin_ogt_2 = document.getElementById("tp_" + i+"_2");
        odin_ogt.style.top =odin_ogt_2.style.top = 52+t+'px';
        odin_ogt.style.left =odin_ogt_2.style.left = odin_og.clientWidth +39+ 'px';
    odin_ogt.style.height=odin_ogt_2.style.height=odin_og.clientHeight+2+'px';
   
    odin_ogt_2.style.visibility='hidden';
        if (ogl_vibrono == i) {odin_ogt_2.style.visibility='hidden';}
        t += odin_og.clientHeight + 15;
    }
   
    if(osnova_razvernuta){
        gl_p.style.visibility=ogl_vibrono_copiy.style.visibility=ten_vibronogo_p.style.visibility=gl_p_za_str.style.visibility = 'hidden';
       // kn_na_str(300);
        
    }else{
    gl_p.style.visibility = 'visible';
p_0.style.visibility= 
            ten1_gl_p.style.visibility=
            ten2_gl_p.style.visibility= 
            
            //ogl_vibrono_copiy.style.visibility=
            //ten_vibronogo_p.style.visibility=
            'visible';
    
            gl_p_za_str.style.visibility = 'hidden';
    gl_p_za_str.style.height =gl_p.style.height = t +50+ 'px';
    text_stranici.style.paddingTop=gl_p.clientHeight-20+'px';

    //---------------------------------------------------------------------------------------------
    //kn_na_str(gl_p.clientHeight+230);
 //svet_nadpisi_1.style.visibility=svet_nadpisi_2.style.visibility=svet_nadpisi_3.style.visibility='hidden';
    
   //---------------------------------------------------------------------------------------------
    
    //---------------------------------------------------------------------------------------------

    ten1_gl_p.style.position = ten2_gl_p.style.position = 'absolute';
    ten1_gl_p.style.left = ten2_gl_p.style.left = '30px';
    ten1_gl_p.style.top = '202px';
    ten2_gl_p.style.top = '202px';
    ten1_gl_p.style.width = ten2_gl_p.style.width = gl_p.clientWidth +2+ 'px';
    ten1_gl_p.style.height = ten2_gl_p.style.height = gl_p.clientHeight + 'px';
    ten1_gl_p.style.backgroundColor = ten2_gl_p.style.backgroundColor = 'black';
    ten1_gl_p.style.borderRadius = ten2_gl_p.style.borderRadius = '10px';
    ten1_gl_p.style.filter = 'blur(12px)';
    ten2_gl_p.style.filter = 'blur(2px)';
    
    
    //---------------------------------------------------------------------------------------------
    //кнопка прячущая за страницу
    
    kn_za_str.innerHTML = "<div id='ris_kn_za_str'></div><div id='ris_min'></div><div id='ris_v'></div><div id='ris_str'></div>";
    kn_za_str2.innerHTML="<div id='ris_kn_za_str2'></div><div id='ris_min2'></div><div id='ris_v2'></div><div id='ris_str2'></div>";
    ris_v.innerHTML = ris_v2.innerHTML = 'v';
    kn_za_str.style.left=kn_za_str2.style.left = gl_p.clientWidth - 70 + 'px';
 
    localStorage.setItem('np_1',0);
    localStorage.setItem('np_2',0);
    localStorage.setItem('np_3',0);

    }
    // perem_gl_p=gl_p;
    //kn_stran_nazad.style.width= kn_poisk.style.width=kn_mneniy.style.width='85px';
//tm_telos(0,pamyt_metka); 
odin_na_stranice=false;
}
//=================================================================================================
function kn_za_str_0(deistvie) {
    color_kn = '#b0c0f0';
    color_ris = '#304050';
    color_videl = '#6080c0';
    color_videl_ris = '#c0ffe0';
    switch (deistvie) {
        case 1://over
            kn_za_str.style.backgroundColor = color_videl;
            ris_min.style.backgroundColor = color_videl;
            ris_min.style.borderColor = color_videl_ris;
            ris_v.style.color = color_videl_ris;
            ris_kn_za_str.style.borderColor = color_videl_ris;
            ris_str.style.backgroundColor = color_videl_ris;
            kn_za_str.style.cursor = 'default';
            break;
        case 2://out
            kn_za_str.style.backgroundColor = color_kn;
            ris_min.style.backgroundColor = color_kn;
            ris_min.style.borderColor = color_ris;
            ris_v.style.color = color_ris;
            ris_kn_za_str.style.borderColor = color_ris;
            ris_str.style.backgroundColor = color_ris;
            break;
        case 3://move

            break;
        case 4://douwn
            scroll(0, 0);
            gl_p.style.visibility = 'visible';
            soderg_var=0;
            setTimeout('on_kn_za_str_0()', 10);
            up();
            break;

    }
}
//=================================================================================================
function on_kn_za_str_0() {
    switch(soderg_var){
        case 0:
            soderg_izmen=soderg_izmen_2= 30;
            soderg_del=(gl_p.clientWidth)/10;
            soderg_index=0;
            soderg_rab = true;

            gl_p.style.left=ten1_gl_p.style.left=soderg_izmen+'px';
            soderg_var++;
        break;
        case 1:
            if(soderg_index<9){
                soderg_index++;
                soderg_izmen-=soderg_del;
                gl_p.style.left=ten1_gl_p.style.left=ten2_gl_p.style.left=soderg_izmen+'px';
            }
            else{
                gl_p.style.visibility=ten2_gl_p.style.visibility='hidden';
                gl_p_za_str.style.visibility='visible';
                gl_p_za_str.style.left=gl_p.style.left;
                soderg_var++;
            }
        break;
        
    }
    if(soderg_rab)setTimeout('on_kn_za_str_0()',100);
}
//=================================================================================================
//=================================================================================================
function p_videlen_0(deystvie, idnomer) {
    videl_chast = '#6080c0';
    ne_videl_chast = '#a0c0ff';
    videl_text = '#c0e0ff';
    ne_videl_text = '#104070';
    odin_og = document.getElementById("p_" + idnomer);
    
    switch (deystvie) {
        //-----------------------------------------------------------------------------------------
        case 1://over
            odin_og.style.cursor = 'pointer';
            odin_og.style.backgroundColor = videl_chast;
            odin_og.style.color = videl_text;
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out

            odin_og.style.backgroundColor = ne_videl_chast;
            odin_og.style.color = ne_videl_text;
            break;
        //-----------------------------------------------------------------------------------------
        case 4://down
        odin_na_stranice=false;    
        perem = odin_og.style.top.slice(0, odin_og.style.top.length - 2) - 0;
            odin_og.style.visibility = 'hidden';
            
            
            ten_vibronogo_p.style.top = 202+perem -7+ 'px';
            
            perem -= 6;
            ogl_vibrono_copiy.style.top  =202+ perem + 'px';

            
            
            ogl_vibrono_copiy.innerHTML = odin_og.innerHTML;
            
            localStorage.setItem('np', idnomer);
            
            text_str();
            //istoriy();
            okna.style.height = limit + stranica.clientHeight + 'px';
            odin_og = document.getElementById('p_' + ogl_vibrono);
            odin_og.style.visibility = 'visible';
            odin_og.style.backgroundColor = ne_videl_chast;
            odin_og.style.color = ne_videl_text;
            ten_vibronogo_p.style.height=ogl_vibrono_copiy.clientHeight+8+'px';            
            ogl_vibrono = idnomer;
            
            up();
            break;
        //-----------------------------------------------------------------------------------------   
    }
}

//=================================================================================================

//=================================================================================================
function smena_stranic_0() {
     
    if(osnova_razvernuta)switch(smena_var){
        case 0:
            smena_delimoe_gl=Math.floor(osnova.clientWidth/20);
            smena_izmen_gl=-smena_delimoe_gl;
            smena_index=0;
            scroll(0,0);
            snova=osnova;
            smena_rab=true;
            smena_var++;

        break;
        case 1:
            if(smena_index<20){
                smena_index++;
                snova.style.left=smena_izmen_gl+'px';
                smena_izmen_gl-=smena_delimoe_gl;
            }else{
                smena_index=0;
            {snova.style.left=snova.clientWidth+'px';
            smena_izmen_gl=snova.clientWidth;
            snova.innerHTML='<div id="snova2"class="bbb"><b><center><big><big>'+array_menu[(nm-0)+1][nr-1]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/></big>' +ar_tp[nm][nr-1][np][nom_t]+'</big></center></b></div><p><div id="zad"class="bbb">'+airan_n+on_tp_t(nom_t)+airan_e+'</div>';
               snova.style.height=snova2.clientHeight+zad.clientHeight+100+'px';
               kn_tp_na_str_1.style.top=snova2.clientHeight+30+'px';
                        kn_tp_na_str_1.style.left='4px';
                        kn_tp_na_str_2.style.top=snova2.clientHeight+30+'px';
                        kn_tp_na_str_2.style.left='180px';
                        kn_tp_na_str_3.style.top=snova2.clientHeight+30+'px';
                        kn_tp_na_str_3.style.right='200px';
                        kn_tp_na_str_4.innerHTML='<b>Свернуть</b>';
                        kn_tp_na_str_4.style.top=snova2.clientHeight+30+'px';
                        kn_tp_na_str_5.style.position='sticky';
                        kn_tp_na_str_6.style.position='sticky';
                        kn_tp_na_str_7.style.position='sticky';
                        kn_tp_na_str_6.style.bottom=kn_tp_na_str_5.style.bottom
                        kn_tp_na_str_4.style.right='2px';
                        kn_tp_na_str_5.style.left='4px';
                        kn_tp_na_str_6.style.left=kn_tp_na_str_2.style.left;
                        kn_tp_na_str_7.style.left=osnova.clientWidth-kn_tp_na_str_3.clientWidth-2+'px';}
                        
                        osnova.innerHTML=snova.innerHTML;
                        smena_var++;
            }

        break;
        case 2:
            if(smena_index<20){
                smena_index++;
                snova.style.left=smena_izmen_gl+'px';
                smena_izmen_gl-=smena_delimoe_gl;
            }else{
                snova.style.left='0px';
                smena_rab=false;
                smena_var=0;
            }
        break;
    }else switch(smena_var){
        case 0:
        //bob.innerHTML=odin_na_stranice;
            
            smena_delimoe_gl=Math.floor((stranica.clientWidth+125)/10);
            smena_izmen_gl= 30;
            smena_index=0;
             if(odin_na_stranice){
            p_0.style.visibility= 
            ten1_gl_p.style.visibility=
            ten2_gl_p.style.visibility= 
            gl_p.style.visibility=
            ogl_vibrono_copiy.style.visibility=
            ten_vibronogo_p.style.visibility=
            gl_p_za_str.style.visibility =
            'hidden';
 
            }
        {
            ten1_gl_p.style.left = ten2_gl_p.style.left = gl_p.style.left =smena_izmen_gl+ 'px';
            ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
        }
            razdel.style.left=razdel_teni.style.left=smena_izmen_gl+'px';
            ten_stranici.style.left = stranica.style.left = smena_izmen_gl+95 + 'px';
            smena_izmen_gl-=smena_delimoe_gl;
            scroll(0,0);
            smena_var++;
            smena_rab=true;
            break;
        //---------------------------------------------------------------------------------------
        case 1:
            if(smena_index<10){       
                smena_index++;
            if(odin_na_stranice){
            }
                {
                ten1_gl_p.style.left = ten2_gl_p.style.left = gl_p.style.left = smena_izmen_gl + 'px';
              ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
                }
                razdel.style.left=razdel_teni.style.left=smena_izmen_gl+'px';
                ten_stranici.style.left = stranica.style.left = smena_izmen_gl+70 + 'px';
                smena_izmen_gl-=smena_delimoe_gl;
            }else{
            istoriy();  
            localStorage.setItem('nm', nm);
                localStorage.setItem('nr', nr);
                localStorage.setItem('np', np); 
                localStorage.setItem('np_1',np_1);
                
                localStorage.setItem('np_2',np_2);
                localStorage.setItem('np_3',np_3);
                scroll(0, tp_scroll);
                if(odin_na_stranice==false){
                    ten1_gl_p.style.visibility=
                    ten2_gl_p.style.visibility=
                    gl_p.style.visibility=
                    ogl_vibrono_copiy.style.visibility=
                    ten_vibronogo_p.style.visibility=
                    'visible';
                    //soderg_razdela_0();

                }
                //if(master_ym)
                {
                on_str_0();
               //bob.innerHTML='ff';
                }
               // bob.innerHTML=nomer_str_nazad;
                smena_izmen_gl=osnova.clientWidth;
                gl_p.style.left= razdel.style.left=razdel_teni.style.left=ten_stranici.style.left = stranica.style.left =smena_izmen_gl+'px';
                ten1_gl_p.style.left=ten2_gl_p.style.left=smena_izmen_gl+5+'px';
                smena_index=0;
                smena_delimoe_gl=Math.floor((smena_izmen_gl-125)/10);
                smena_var++;
                smena_index=0;
                up();
            }
            break;
        //---------------------------------------------------------------------------------------
        case 2:
            if(smena_index<10){
                smena_index++;
                smena_izmen_gl-=smena_delimoe_gl;
                razdel.style.left=razdel_teni.style.left=smena_izmen_gl+'px';
                if(odin_na_stranice==false){
                    ten1_gl_p.style.left=ten2_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
                }
                ten_stranici.style.left = stranica.style.left = smena_izmen_gl+70 + 'px';
            }else {
                smena_rab=false;
                smena_var=0;
                if(odin_na_stranice==false)
                {
                    ten1_gl_p.style.left=ten2_gl_p.style.left= gl_p.style.left='30px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left='40px';
                }

                razdel.style.left=razdel_teni.style.left='10px';
                
                ten_stranici.style.left = stranica.style.left='125px';
            }
            break;
        //---------------------------------------------------------------------------------------
    }
    if(smena_rab)setTimeout('smena_stranic_0()',30);
}

//=================================================================================================
function on_str_0() {
    if(np_1>0){
        ar='';ark='';
        arra='';
        if(np_3>0){
            switch(np_2){
                case 1:
                    razdel.innerHTML=razdel_teni.innerHTML=ar_ym[np_1-1][1];
                    arra=chel_rab(np_1-1,np_3-1);
                    //bob.innerHTML=np_1;
                break;
                case 2:
                    razdel.innerHTML=razdel_teni.innerHTML=ar_ym[np_1-1][1];
                    arra =chel_yr(np_1-1,np_3-1);
                break;
                case 3:
                    razdel.innerHTML=razdel_teni.innerHTML=ar_ym[np_1-1][1];
                    arra =chel_inter(np_1-1,np_3-1);
                    
                break;
                case 4:
                    razdel.innerHTML=razdel_teni.innerHTML=array_menu[(nm-0)+1][nr-1]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/><small>'+ ar_tp[nm][nr-1][np][nom_t]+'</small>';
                    ar='';ark='';
                    if(nm-0==0&&nr-0==1&&(np==0||(np==1&&nom_t==0))){ar=array_text[0][0][0][26];ark='"';}
                  
                    arra=on_tp_t(nom_t);            
                    razdel_teni.style.maxWidth=razdel.style.maxWidth=osnova.clientWidth-okna.clientWidth-10+'px';
                    ten_stranici.style.top=stranica.style.top=razdel.clientHeight+150+'px';
                break;
            }
        }else{
            if(np_2>0){
                razdel.innerHTML=razdel_teni.innerHTML=ar_ym[np_1-1][1];
                arra =chel_all_yr(np_1-1);
            }else{
                razdel.innerHTML=razdel_teni.innerHTML='Один из умельцев';//else razdel.innerHTML=razdel_teni.innerHTML='Один'; 
                arra =chel(localStorage.getItem('np_1')-1);// array_text[0][2][6][0][0];
            }

        }           
        airan_n='<table><tr ><td><p><span id="kn_tp_na_str_1"onmouseover="on_kn_tp_na_str(1,1)"onmouseout="on_kn_tp_na_str(2,1)"onmousedown="on_kn_tp_na_str(4,1)"><b>< Назад</b></span><span id="kn_tp_na_str_2"onmouseover="on_kn_tp_na_str(1,2)"onmouseout="on_kn_tp_na_str(2,2)"onmousedown="on_kn_tp_na_str(4,2)"><b>Вперёд ></b></span><span id="kn_tp_na_str_3"onmouseover="on_kn_tp_na_str(1,3)"onmouseout="on_kn_tp_na_str(2,3)"onmousedown="on_kn_tp_na_str(4,3)"><b>^ В раздел</b></span><span id="kn_tp_na_str_4"onmouseover="on_kn_tp_na_str(1,4)"onmouseout="on_kn_tp_na_str(2,4)"onmousedown="on_kn_tp_na_str(4,4)"><b>Развернуть</b></span></td></tr><tr><td id="sam_text">';
        airan_e='</td></tr><tr ><td><p><span id="kn_tp_na_str_5"onmouseover="on_kn_tp_na_str(1,5)"onmouseout="on_kn_tp_na_str(2,5)"onmousedown="on_kn_tp_na_str(4,5)"><b>< Назад</b></span><span id="kn_tp_na_str_6"onmouseover="on_kn_tp_na_str(1,6)"onmouseout="on_kn_tp_na_str(2,6)"onmousedown="on_kn_tp_na_str(4,6)"><b>Вперёд ></b></span><span id="kn_tp_na_str_7"onmouseover="on_kn_tp_na_str(1,7)"onmouseout="on_kn_tp_na_str(2,7)"onmousedown="on_kn_tp_na_str(4,7)"><b>^ В раздел</b></span></td></tr></table>';
        document.getElementById('t_s').innerHTML=airan_n+ark+arra+ar+airan_e;
        sam_text.style.textIndent='30px';
        if(np_2==3)for(iaa=1;iaa<ar_int[np_1-1][np_3-1].length;iaa++)if(document.getElementById('img_iz_int_'+(np_1-1)+'_'+(np_3-1)+'_'+iaa).clientWidth+50>ten_stranici.clientWidth)document.getElementById('img_iz_int_'+(np_1-1)+'_'+(np_3-1)+'_'+iaa).style.width=ten_stranici.clientWidth-50+'px';                        
        
        text_stranici.style.paddingTop= 10+'px';
        osnova.style.height=osnova.clientHeight-gl_p.clientHeight+30+'px';
    } else{
         text_str();
        switch(dz){
            case 1:soderg_razdela_1();break;
            default:soderg_razdela_0();break;
        }
        document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML = array_menu[nm-0 + 1][nr - 1];
        ten1_gl_p.style.left= gl_p.style.left=(osnova.clientWidth-gl_p.clientWidth)/2+'px';
        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=(osnova.clientWidth-gl_p.clientWidth)/2-60+'px';
        
    }
}
//=================================================================================================
function on_kn_tp_na_str(deistvie_kn_tp,n_kn){
    color_kn_videl='#68a';
    
    color_kn_nevidel='#d0e0ff';
    color_str_kn_nevidel='black';
    kn=document.getElementById('kn_tp_na_str_'+n_kn);
    switch(deistvie_kn_tp){
        case 1://over
kn.style.backgroundColor=color_kn_videl;
kn.style.color=color_kn_nevidel;

        break;
        case 2://out
kn.style.backgroundColor=color_kn_nevidel;
kn.style.color=color_str_kn_nevidel;

        break;
        case 4://down
            switch(n_kn){
                case 1:case 5:
                    smena_var=0;
                    odin_na_stranice=true;
                    if(ar_tp_text[nm][nr-1][np][nom_t][0]<nom_t){
                       nom_t--;
                    
                       smena_stranic_0();    
                    }
                     else {
                    
                   on_kn_tp_na_str(4,3);
                     }

                    
                    break;
                case 2:case 6:
                    smena_var=0;
                    odin_na_stranice=true;
                    //bob.innerHTML=nom_t;
                    if(ar_tp_text[nm][nr-1][np][nom_t][1]>nom_t){
                        nom_t++;
                    smena_stranic_0();}else{
                    on_kn_tp_na_str(4,3);
                    }
                    break;
                case 3:case 7:
                    odin_na_stranice=false;
                    osnova_razvernuta=false;
                    np_1=np_2=np_3=0;
                    smena_var=0;
                    
                    tp_scroll=pamyt_tp_scroll;
                    pamyt_tp_scroll=0;
                    smena_stranic_0();
                    ten_stranici.style.top=stranica.style.top='240px';
                    break;
                
                case 4:
                    if(osnova_razvernuta){
                       
                        art_t='<div id="in_load_1"></div><div id="in_load_2"></div><table id="stranica"valign="top" onmousemove="stranica_izmen(3)" onmousedown="stranica_izmen(4)" onmouseup="stranica_izmen(5)"><tr><td id="text_stranici"><div id="t_s" class="tm"></div></td></tr></table><div id="in_load_3"></div><div id="in_load_4"></div>';
                        osnova.innerHTML=art_t;
                        Sait_load();
                        razdel_teni.style.maxWidth=razdel.style.maxWidth=osnova.clientWidth-okna.clientWidth-10+'px';
                        razdel.innerHTML=razdel_teni.innerHTML=array_menu[(nm-0)+1][nr-1]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/><small>'+ ar_tp[nm][nr-1][np][nom_t]+'</small>';
                        razdel.style.left='10px';
                        ten_stranici.style.top=stranica.style.top=razdel.clientHeight+150+'px';
                        t_s.innerHTML=pamyt_resurs[1];
                        sam_text.style.textIndent='30px';
                        up();
                        snova.style.visibility='hidden';
                        osnova.style.fontSize=pamyt_resurs[3];
                        osnova.style.wordSpacing=pamyt_resurs[4];
                        osnova.style.textIndent=pamyt_resurs[5];
                        kn_tp_na_str_1.style.top=pamyt_resurs[6];
                        kn_tp_na_str_1.style.left=pamyt_resurs[8];
                        kn_tp_na_str_2.style.top=pamyt_resurs[6];
                        kn_tp_na_str_2.style.left=pamyt_resurs[9];
                        kn_tp_na_str_3.style.top=pamyt_resurs[6];
                        kn_tp_na_str_3.style.right=pamyt_resurs[10];
                        kn_tp_na_str_4.style.top=pamyt_resurs[6];
                        kn_tp_na_str_4.style.right=pamyt_resurs[11];
                        kn_tp_na_str_5.style.position=kn_tp_na_str_6.style.position=kn_tp_na_str_7.style.position='absolute';
                        kn_tp_na_str_5.style.left=pamyt_resurs[9];
                        kn_tp_na_str_4.innerHTML='<b>Развернуть</b>';
                        kn_tp_na_str_4.style.backgroundColor=color_kn_nevidel;
                        kn_tp_na_str_4.style.color=color_str_kn_nevidel;
                        text_stranici.style.paddingTop =  10 + 'px';
                        osnova_razvernuta=false; 
                    }else{
                        osnova_razvernuta=true;
                        snova=snova1;
                        localStorage.setItem('nom_t',nom_t);
                        snova.style.width=osnova.clientWidth;
                        snova.style.visibility='visible';
                        pamyt_resurs[0]=array_menu[(nm-0)+1][nr-1]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/><small>'+ ar_tp[nm][nr-1][np][nom_t]+'</small>';
                        snova.innerHTML='<big><center ><b><big>'+array_menu[(nm-0)+1][nr-1]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/></big>'+ ar_tp[nm][nr-1][np][nom_t]+'</b></center></big><p>';
                        osnova.style.backgroundColor=bob.style.backgroundColor='white';
                        pamyt_resurs[1]=t_s.innerHTML;
                        pamyt_resurs[2]=osnova.style.backgroundColor;
                        pamyt_resurs[3]=osnova.style.fontSize;
                        pamyt_resurs[4]=osnova.style.wordSpacing;
                        pamyt_resurs[5]=osnova.style.textIndent;
                        pamyt_resurs[6]=kn_tp_na_str_1.style.top;
                        pamyt_resurs[7]=kn_tp_na_str_5.style.bottom;
                        pamyt_resurs[8]=kn_tp_na_str_1.style.left;
                        pamyt_resurs[9]=kn_tp_na_str_2.style.left;
                        pamyt_resurs[10]=kn_tp_na_str_3.style.right;
                        pamyt_resurs[11]=kn_tp_na_str_4.style.right;
                        osnova.style.fontSize='36px';
                        osnova.style.wordSpacing='10px';
                        osnova.style.textIndent='30px';
                        kn_tp_na_str_1.style.top=snova.clientHeight+30+'px';
                        kn_tp_na_str_1.style.left='4px';
                        kn_tp_na_str_2.style.top=snova.clientHeight+30+'px';
                        kn_tp_na_str_2.style.left='180px';
                        kn_tp_na_str_3.style.top=snova.clientHeight+30+'px';
                        kn_tp_na_str_3.style.right='200px';
                        kn_tp_na_str_4.innerHTML='<b>Свернуть</b>';
                        kn_tp_na_str_4.style.top=snova.clientHeight+30+'px';
                        kn_tp_na_str_5.style.position='sticky';
                        kn_tp_na_str_6.style.position='sticky';
                        kn_tp_na_str_7.style.position='sticky';
                        kn_tp_na_str_6.style.bottom=kn_tp_na_str_5.style.bottom
                        kn_tp_na_str_4.style.right='2px';
                        kn_tp_na_str_5.style.left='4px';
                        kn_tp_na_str_6.style.left=kn_tp_na_str_2.style.left;
                        kn_tp_na_str_7.style.left=osnova.clientWidth-kn_tp_na_str_3.clientWidth-2+'px';
                        kn_tp_na_str_4.style.backgroundColor=color_kn_nevidel;
                        kn_tp_na_str_4.style.color=color_str_kn_nevidel;
                        t_s.style.fontSize='36px';
                        t_s.style.width=osnova.clientWidth;
                        sam_text.style.textIndent='50px';
                        osnova.style.height=t_s.clientHeight+'px';
                        t_s.style.fontSize=pamyt_resurs[3];
                        snova.innerHTML=snova.innerHTML+'<p>'+t_s.innerHTML;
                        osnova.innerHTML=snova.innerHTML;
                }
                break;
            }
        break;
    }
}
//=================================================================================================
function kn_za_str2_0(deistvie) {
    color_kn = '#b0c0f0';
    color_ris = '#304050';
    color_videl = '#6080c0';
    color_videl_ris = '#c0ffe0';
    switch (deistvie) {
        case 1://over
            kn_za_str2.style.backgroundColor = color_videl;
            ris_min2.style.backgroundColor = color_videl;
            ris_min2.style.borderColor = color_videl_ris;
            ris_v2.style.color = color_videl_ris;
            ris_kn_za_str2.style.borderColor = color_videl_ris;
            ris_str2.style.backgroundColor = color_videl_ris;
            kn_za_str2.style.cursor = 'default';
            break;
        case 2://out
            kn_za_str2.style.backgroundColor = color_kn;
            ris_min2.style.backgroundColor = color_kn;
            ris_min2.style.borderColor = color_ris;
            ris_v2.style.color = color_ris;
            ris_kn_za_str2.style.borderColor = color_ris;
            ris_str2.style.backgroundColor = color_ris;
            break;
        case 3://move

            break;
        case 4://douwn
        soderg_rabota = true;
            soderg_variant = 2;
            setTimeout('soderg_control()', 50);
            break;

    }
}
//=================================================================================================

function kn_nazad_0(deistvie) {
    color_kn = '#5080b0';
    color_videl = '#80b0e0';
    switch (deistvie) {
        case 1://over
            kn_nazad.style.backgroundColor = color_videl;
            kn_nazad.style.cursor = 'default';
            break;
        case 2://out
            kn_nazad.style.backgroundColor = color_kn;
            break;
        case 3://move

            break;
        case 4://douwn
            kn_nazad.style.visibility = 'hidden';
            scroll(0, 0);
            break;
    }
}
//=================================================================================================