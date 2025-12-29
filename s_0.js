
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
   
    if(odin>0){
        gl_p.style.visibility=ogl_vibrono_copiy.style.visibility=ten_vibronogo_p.style.visibility=gl_p_za_str.style.visibility = 'hidden';
        kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='visible';
        
    }else{
    gl_p.style.visibility = 'visible';
p_0.style.visibility= 
            ten1_gl_p.style.visibility=
            ten2_gl_p.style.visibility= 
            
            //ogl_vibrono_copiy.style.visibility=
            //ten_vibronogo_p.style.visibility=
            'visible';
    
            gl_p_za_str.style.visibility = 'hidden';
            kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='hidden';
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
//odin=0;
    }
    // perem_gl_p=gl_p;
    //kn_stran_nazad.style.width= kn_poisk.style.width=kn_mneniy.style.width='85px';
//tm_telos(0,pamyt_metka); 
//odin_na_stranice=false;


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
        odin=0;
        //odin_na_stranice=false;    
        perem = odin_og.offsetTop;
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
     
    if(odin>1) switch(smena_var){
            case 0:
                smena_izmen_gl=0;
                smena_delimoe_gl=Math.floor(osnova.clientWidth/10);
                smena_izmen_gl=-smena_delimoe_gl;
                smena_index=0;
                scroll(0,0);
                smena_rab=true;
                smena_var++;

            break;
            case 1:
                if(smena_index<10){
                    smena_index++;
                    document.getElementById('zagol').style.left=smena_izmen_gl+'px';
                    text_osnov.style.left=smena_izmen_gl+'px';
                    smena_izmen_gl-=smena_delimoe_gl;
                }else{
            //    bob.innerHTML=smena_izmen_gl;     
                    smena_index=0;
                    smena_izmen_gl=osnova.clientWidth;
                    if(np_1>0){
if(np_2==0){
            zagol.innerHTML='Один из умельцев';//else razdel.innerHTML=razdel_teni.innerHTML='Один'; 
            bob.innerHTML='yra';
            text_osnov.innerHTML=chel(localStorage.getItem('np_1'));
            localStorage.setItem('np_1',np_1);
            
        } else{
            zagol.innerHTML=ar_ym[np_1][1];
            localStorage.setItem('np_1',np_1);
            localStorage.setItem('np_2',np_2);
            localStorage.setItem('np_3',np_3);
            
            switch(np_2){
                case 1: text_osnov.innerHTML=chel_rab(np_1-1,np_3-1); break;
                case 2: text_osnov.innerHTML=chel_yr(np_1-1,np_3-1); break;
                case 3: text_osnov.innerHTML =chel_inter(np_1-1,np_3-1); break;
                case 4: text_osnov.innerHTML=chel_all_yr(np_1-1); break;
            }
        }
                    }else{
                        zagol.innerHTML='<big><center ><b><big><span style="color:red">'+array_menu[(nm-0)+1][nr-1]+' /</span> <br/><span style="color:green">'+array_razd_p[nm][nr-1][np]+' / </span><br/></big>'+ ar_tp[nm][nr-1][np][nom_t][0]+'</b></center></big><p>';
                        text_osnov.innerHTML=on_tp_t(nom_t);
                    }
                    osnova.style.height=zagol.clientHeight+text_osnov.clientHeight+400+'px';          
                    zagol.style.left=smena_izmen_gl+'px';
                    smena_var++;
                }
            break;
            case 2:
                if(smena_index<10){
                    smena_index++;
                    zagol.style.left=smena_izmen_gl+'px';
                    text_osnov.style.left=smena_izmen_gl+'px';
                    smena_izmen_gl-=smena_delimoe_gl;
                }else{
                    text_osnov.style.left='0px';
                    //zagol.style.left='0px';
                    zagol.style.left=(osnova.clientWidth-zagol.clientWidth>0?Math.floor((osnova.clientWidth-zagol.clientWidth)/2):1)+'px';
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
             if(odin>0){//_na_stranice){
            p_0.style.visibility= 
            ten1_gl_p.style.visibility=
            ten2_gl_p.style.visibility= 
            gl_p.style.visibility=
            ogl_vibrono_copiy.style.visibility=
            ten_vibronogo_p.style.visibility=
            gl_p_za_str.style.visibility =
            'hidden';
            }
            ten1_gl_p.style.left = ten2_gl_p.style.left = gl_p.style.left =smena_izmen_gl+ 'px';
            ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
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
                ten1_gl_p.style.left = ten2_gl_p.style.left = gl_p.style.left = smena_izmen_gl + 'px';
                ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
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
                localStorage.setItem('nom_t',nom_t);
                if(innerHeight>pamyt_tp_scroll) scroll(0,pamyt_tp_scroll);
                else scroll(0, 0);
             // bob.innerHTML='yra'; 
                if(odin==0){
                    ten1_gl_p.style.visibility=
                    ten2_gl_p.style.visibility=
                    gl_p.style.visibility=
                    ogl_vibrono_copiy.style.visibility=
                    ten_vibronogo_p.style.visibility=
                    'visible';
                    kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='hidden';
                    soderg_razdela_0();
                }else kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='visible';
                on_str_0();
                smena_izmen_gl=osnova.clientWidth;
                if(odin==0){
                    gl_p.style.left= razdel.style.left=razdel_teni.style.left=ten_stranici.style.left = stranica.style.left =smena_izmen_gl+'px';
                    ten1_gl_p.style.left=ten2_gl_p.style.left=smena_izmen_gl+5+'px';
                }
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
                if(odin<1){
                    ten1_gl_p.style.left=ten2_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
                }
                ten_stranici.style.left = stranica.style.left = smena_izmen_gl+70 + 'px';
            }else {
                smena_rab=false;
                smena_var=0;
                if(odin<1) {
                    ten1_gl_p.style.left=ten2_gl_p.style.left= gl_p.style.left='30px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left='40px';
                }
                if(odin==1)ten_stranici.style.top=stranica.style.top= razdel.offsetTop+razdel.clientHeight+10+'px';
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
    ar='';ark='';
    arra='';
    if(odin==1){
        zag=document.getElementById('razdel');
        tex=document.getElementById('t_s');
    }else{
        zag=document.getElementById('zagol');
        tex=document.getElementById('text_osnov');
    }
    if(odin>0){
        if(np_1!=0&&np_2==0){
            zag.innerHTML='Один из умельцев';//else razdel.innerHTML=razdel_teni.innerHTML='Один'; 
            tex.innerHTML=chel(localStorage.getItem('np_1'));
            localStorage.setItem('np_1',np_1);
            if(odin==1){
                razdel_teni.innerHTML=zag.innerHTML;
                text_stranici.style.paddingTop='30px';
            }
        } else if(np_1!=0&&np_2!=0){
            zag.innerHTML=ar_ym[np_1][1];
            localStorage.setItem('np_1',np_1);
            localStorage.setItem('np_2',np_2);
            localStorage.setItem('np_3',np_3);
            if(odin==1)razdel_teni.innerHTML=zag.innerHTML;
            switch(np_2){
                case 1: tex.innerHTML=chel_rab(np_1-1,np_3-1); break;
                case 2: tex.innerHTML=chel_yr(np_1-1,np_3-1); break;
                case 3: tex.innerHTML =chel_inter(np_1-1,np_3-1); break;
                case 4: tex.innerHTML=chel_all_yr(np_1-1); break;
            }
        }else{    
            zag.innerHTML=array_menu[(nm-0)+1][nr-1]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/><small>'+ ar_tp[nm][nr-1][np][nom_t][0]+'</small>';
            //bob.innerHTML='yra';
            ar='';ark='';
            if(nm-0==0&&nr-0==1&&(np==0||(np==1&&nom_t==0))){ar=array_text[0][0][0][26];ark='"';}
            arra=on_tp_t(nom_t);            
            tex.innerHTML=ark+arra+ar;
            if(odin==1){
                razdel_teni.innerHTML=zag.innerHTML;
                ten_stranici.style.top=stranica.style.top=razdel.clientHeight+150+'px';
                text_stranici.style.paddingTop= 10+'px';
                osnova.style.height=osnova.clientHeight-gl_p.clientHeight+30+'px';
            }
        }
    }else{
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
                    if(ar_tp[nm][nr-1][np][nom_t][2]<nom_t){
                        ar_tp[nm][nr-1][np][nom_t][1]=0;
                        nom_t--;
                        ar_tp[nm][nr-1][np][nom_t][1]=1;
                        localStorage.setItem('nom_t',nom_t);
                        smena_stranic_0();    
                    } else {
                        if(ar_tp[nm][nr-1][np][nom_t][4]==0) on_kn_tp_na_str(4,3);
                        else{
                            ar_tp[nm][nr-1][np][nom_t][1]=1;
                            nom_t=ar_tp[nm][nr-1][np][nom_t][4]-1;
                            ar_tp[nm][nr-1][np][nom_t][1]=1;
                            localStorage.setItem('nom_t',nom_t);
                            smena_stranic_0();
                        }
                    }
                    break;
                case 2:case 6:
                    smena_var=0;
                    if(ar_tp[nm][nr-1][np][nom_t][3]>nom_t){
                        ar_tp[nm][nr-1][np][nom_t][1]=0;
                        nom_t++;
                        ar_tp[nm][nr-1][np][nom_t][1]=1;
                        localStorage.setItem('nom_t',nom_t);
                        smena_stranic_0();
                    } else{
                        if(ar_tp[nm][nr-1][np][nom_t][4]==0) on_kn_tp_na_str(4,3);
                        else{
                            ar_tp[nm][nr-1][np][nom_t][1]=1;
                            nom_t=ar_tp[nm][nr-1][np][nom_t][4]-1;
                            ar_tp[nm][nr-1][np][nom_t][1]=1;
                            localStorage.setItem('nom_t',nom_t);
                            smena_stranic_0();
                        }
                    }
                break;
                case 3:case 7:
                    if(odin<2){
                        ten_stranici.style.top=stranica.style.top='240px';
                        smena_var=0;
                        pl=nom_t;
                        while(ar_tp[nm][nr-1][np][pl][4]!=0){
                            pl=ar_tp[nm][nr-1][np][pl][4]-1;
                            ar_tp[nm][nr-1][np][pl][1]=1;
                        }
                        smena_stranic_0();
                        odin=0;
                        localStorage.setItem('odin',odin);
                    }
                    else {
                        odin=0;
                        localStorage.setItem('odin',odin);
                        Sait_load();
                    }   
                break;
                case 4:case 8:
                    if(odin==2){
                       localStorage.setItem('odin',1);
                       localStorage.setItem('nom_t',nom_t);
                       Sait_load();
                    }else{
                        localStorage.setItem('odin',2);
                        localStorage.setItem('nom_t',nom_t);
                        Sait_load();
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