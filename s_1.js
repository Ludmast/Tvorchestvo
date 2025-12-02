//=================================================================================================
//=================================================================================================
//=================================================================================================
function soderg_razdela_1() {
    t = 0;
    text_size = 35;
    if (localStorage.getItem('np')) { } else localStorage.setItem('np', 0);
        //---------------------------------------------------------------------------------------------
        //кнопка для возвращения назад на верх страницы
        str = "<div id='ten_vibronogo_p'></div><div id='ogl_vibrono_copiy'></div>";
        in_load_3.innerHTML=str;
        str ="";

        //---------------------------------------------------------------------------------------------
        //подсветка и сами названия содержания страниц
        str += "<div id='ten1_gl_p'></div><div id='gl_p'class='c_gl_p'onmouseover='on_gl_p(1)'onmouseout='on_gl_p(2)'onmousedown='on_gl_p(4)'>Содержимое раздела:";
        for (i = 0; i < array_razd_p[localStorage.getItem('nm')-0][localStorage.getItem('nr') - 1].length; i++) {
            str += "<div id='h_"+i+"' class='c_h'></div><div id='p_" + i + "'class='c_p' onmouseover='p_videlen_1(1, " + i + ")' onmouseout='p_videlen_1(2," + i + ")' onmousedown='p_videlen_1(4," + i + ")'></div>";
        }
        str += "<div id='gl_p_metka'> </div></div>";
        //---------------------------------------------------------------------------------------------
        
        in_load_1.innerHTML = str;
        
        //gl_p_za_str.innerHTML=str_2;
        gl_p.style.width='60%';
        if (localStorage.getItem('s_l')) {
        } else
        localStorage.setItem('s_l', 0);
        stranica_left = localStorage.getItem('s_l') - 0 > 0 ? 50 : 125;
        //---------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------
        //кнопка для возвращения назад на верх страницы
        kn_nazad.innerHTML = '^';
        ten_kn_nazad.style.visibility = kn_nazad.style.visibility = 'hidden';
        ten_kn_nazad.style.left = kn_nazad.style.left = stranica.clientWidth + 105 + 'px';
        ten_kn_nazad.style.top = kn_nazad.style.top = innerHeight - 80 + 'px';
        //---------------------------------------------------------------------------------------------
        //содержимое раздела по пунктам
        for (i = 0; i < array_razd_p[localStorage.getItem('nm')-0][localStorage.getItem('nr') - 1].length; i++) {
            odin_h=document.getElementById('h_'+i);
            odin_og = document.getElementById('p_' + i);
            odin_og.innerHTML = array_razd_p[localStorage.getItem('nm')-0][localStorage.getItem('nr') - 1][i];
            odin_h.style.top=50+t + 'px';
            perem = odin_og.style.top =59+t+'px';
            odin_og.style.width= gl_p.clientWidth-46 + 'px';
            odin_og.clientWidth +40+ 'px';
            t += odin_og.clientHeight + 15;
    
        }
       // gl_p_vibor=false;
        if(odin_na_stranice){
            gl_p.style.visibility=ogl_vibrono_copiy.style.visibility=ten_vibronogo_p.style.visibility='hidden';
        }else{
    
            gl_p_metka.style.visibility='visible';
            gl_p.style.visibility = 'visible';
            gl_p.style.height = t +50+ 'px';
            gl_p_aktiv=true;
            //---------------------------------------------------------------------------------------------
          //  stranica.style.left=ten_stranici.style.left=osnova.clientWidth-100+'px';
            ogl_vibrono_copiy.style.left=osnova.clientWidth-115+'px';
        //    text_stranici.style.paddingTop = 60 + 'px';
            ogl_vibrono_copiy.innerHTML = p_0.innerHTML;
            ogl_vibrono=0;
            localStorage.setItem('np',ogl_vibrono);
            //---------------------------------------------------------------------------------------------
            ten1_gl_p.style.position =  'absolute';
            ten1_gl_p.style.left = '30px';
            ten1_gl_p.style.top = '202px';
            ten1_gl_p.style.width = gl_p.clientWidth + 2 + 'px';
            ten1_gl_p.style.height = gl_p.clientHeight + 'px';
            ten1_gl_p.style.backgroundColor = 'black';
            ten1_gl_p.style.borderRadius = '10px';
            ten1_gl_p.style.filter = 'blur(12px)';
            //---------------------------------------------------------------------------------------------
            //кнопка прячущая за страницу
            localStorage.setItem('np_1',0);
            localStorage.setItem('np_2',0);
            localStorage.setItem('np_3',0);
        }
      
    
}

//=================================================================================================
//=================================================================================================
//=================================================================================================
function p_videlen_1(deystvie, idnomer) {
    videl_chast = '#6080c0';
    ne_videl_chast = '#a0c0ff';
    videl_text = '#c0e0ff';
    ne_videl_text = '#104070';
    odin_og = document.getElementById("p_" + idnomer);
    switch(dz-0){
        case 0:
            switch (deystvie) {
                //-----------------------------------------------------------------------------------------
                case 1://over

                    if(idnomer!=ogl_vibrono||gl_p_aktiv){
                        odin_og.style.cursor = 'pointer';
                        odin_og.style.backgroundColor = videl_chast;
                        odin_og.style.color = videl_text;
                    }
                    break;
                //-----------------------------------------------------------------------------------------
                case 2://out
                    if(idnomer!=ogl_vibrono||gl_p_aktiv){
                        odin_og.style.backgroundColor = ne_videl_chast;
                        odin_og.style.color = ne_videl_text;
                    }
                    break;
                //-----------------------------------------------------------------------------------------
                case 4://down
                    //if(gl_p_aktiv){
                       //if(svo==1){ //gl_p_vibor=true;
                 if(dz==0){    
                      perem = odin_og.style.top.slice(0, odin_og.style.top.length - 2) - 0;
            odin_og.style.visibility = 'hidden';
            ten_vibronogo_p.style.top = 202+perem - 5 + 'px';
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
            ogl_vibrono = idnomer;
            up();}else{
                                       perem = odin_og.style.top.slice(0, odin_og.style.top.length - 2) - 0;
                        gl_p_metka.style.visibility='visible';
                        gl_p_metka.style.top=perem+12+'px';
                        ten_vibronogo_p.style.left=ogl_vibrono_copiy.style.left;
                        //ogl_vibrono_copiy.innerHTML = odin_og.innerHTML;
                        odin_og.style.background=ne_videl_text;
                        odin_og.style.color=ne_videl_chast;
                        text_stranici.style.paddingTop = ogl_vibrono_copiy.clientHeight+     20 + 'px';
                        localStorage.setItem('np', idnomer);
                        np=localStorage.getItem('np');
                        //text_str();
                        //istoriy();
                        okna.style.height = limit + stranica.clientHeight + 'px';
                        ogl_vibrono_copiy.style.width = stranica.clientWidth - 50 + 'px';
                        ten_vibronogo_p.style.width = ogl_vibrono_copiy.clientWidth-2+'px';
                        ten_vibronogo_p.style.height = ogl_vibrono_copiy.clientHeight + 5 + 'px';
                        ogl_vibrono = idnomer;
                        smena_deistvie=4;
              
                        
                        smena_stranic_0();
                        //gl_p_aktiv=false;                    
                        
            }        
                       //}
                    break;
                //-----------------------------------------------------------------------------------------   
            }
        break;
    }
}
//=================================================================================================
//=================================================================================================
//=================================================================================================
function smena_stranic_1() {
    switch(smena_var){
        case 0:
            smena_delitel=10;
            switch(smena_deistvie){
                case 1:
                    smena_delimoe_gl=(gl_p.clientWidth+50)/smena_delitel;
                    smena_delimoe_str=(osnova.clientWidth)/smena_delitel;
                    smena_izmen_gl=30;
                    smena_izmen_str=osnova.clientWidth-50;
                    ten1_gl_p.style.top= gl_p.style.top='200px';
                    razdel.style.top='120px';
                    razdel_teni.style.top='122px';
                    ten1_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                    razdel.style.left=razdel_teni.style.left=smena_izmen_gl-20+'px';
                    ten_stranici.style.height=stranica.style.height;
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=-gl_p.clientWidth-10;
                break;
                //.................................................................................
                case 2:case 10:
                    smena_delimoe_gl=(gl_p.clientWidth+50)/smena_delitel;
                    smena_delimoe_str=(osnova.clientWidth-120)/smena_delitel;
                    smena_izmen_gl=30;
                    smena_izmen_str=100;
                    ten1_gl_p.style.top= gl_p.style.top='200px';
                    razdel.style.top='120px';
                    razdel_teni.style.top='122px';
                    ten1_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                    razdel.style.left=razdel_teni.style.left=smena_izmen_gl-20+'px';
                    //ten_stranici.style.height=stranica.style.height;
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=-gl_p.clientWidth-10;
                break;
                //.................................................................................
                case 3:case 7:case 9:
                    smena_delimoe_str=(osnova.clientWidth-50)/smena_delitel;
                    smena_izmen_str=100;
                    ten1_gl_p.style.left= gl_p.style.left= razdel.style.left=razdel_teni.style.left=-gl_p.clientWidth-10+'px';
                    //ten_stranici.style.height=stranica.style.height;
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=osnova.clientWidth-50;
                break;
                //.................................................................................
                case 4:
                    localStorage.setItem('nm', nm);
                    localStorage.setItem('nr', nr);
                    localStorage.setItem('np', np); 
                    localStorage.setItem('np_1',np_1);
                    localStorage.setItem('np_2',np_2);
                    localStorage.setItem('np_3',np_3);
                    svo=2;
                    localStorage.setItem('svo',svo);
                    text_str();
                    ogl_vibrono_copiy.innerHTML=document.getElementById('p_'+np).innerHTML;
                    osnova.style.height=innerHeight>stranica.clientHeight+500?innerHeight+50+'px': stranica.clientHeight+500+'px';
                    okna.style.height=osnova.clientHeight+scrollY+'px';
                    smena_delimoe_str=(osnova.clientWidth-50)/smena_delitel;
                    smena_izmen_str=osnova.clientWidth+30;
                    ten1_gl_p.style.top= gl_p.style.top='200px';
                    razdel.style.top='120px';
                    razdel_teni.style.top='122px';
                    ten1_gl_p.style.left= gl_p.style.left='30px';
                    razdel.style.left='20px';
                    razdel_teni.style.left='22px';
                    //ten_stranici.style.height=stranica.style.height;
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=100;
                break;
                //.................................................................................
                case 5: case 11:
                    svo=1;
                    localStorage.setItem('svo',svo);
                    osnova.style.height=innerHeight>stranica.clientHeight+500?innerHeight+50+'px': stranica.clientHeight+500+'px';
                    okna.style.height=osnova.clientHeight+scrollY+'px';
                    smena_delimoe_str=(osnova.clientWidth-50)/smena_delitel;
                    smena_izmen_str=100;
                    ten1_gl_p.style.top= gl_p.style.top='200px';
                    razdel.style.top='120px';
                    razdel_teni.style.top='122px';
                    ten1_gl_p.style.left= gl_p.style.left='30px';
                    razdel.style.left='20px';
                    razdel_teni.style.left='22px';
                    //ten_stranici.style.height=stranica.style.height;
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=osnova.clientWidth+30;
                break;
                //.................................................................................
                case 6:
                    //smena_delimoe_gl=(gl_p.clientWidth+50)/smena_delitel;
                    smena_delimoe_str=(osnova.clientWidth-50)/smena_delitel;
                    smena_izmen_gl=30;
                    smena_izmen_str=100;
                    ten1_gl_p.style.top= gl_p.style.top='200px';
                    razdel.style.top='120px';
                    razdel_teni.style.top='122px';
                    ten1_gl_p.style.left= gl_p.style.left='30px';
                    razdel.style.left='20px';
                    razdel_teni.style.left='22px';
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=-stranica.clientWidth-10;
                break;
                //.................................................................................
                case 8:

                break;
                //.................................................................................
                
            }
            ten_stranici.style.height=stranica.style.height;
            scroll(0,0);
            smena_rab=true;
            smena_var++;
        break;
        //-----------------------------------------------------------------------------------------
        case 1:
            switch(smena_deistvie){
                case 1:
                    if(smena_izmen_gl>smena_index){
                        smena_izmen_gl-=smena_delimoe_gl;
                        ten1_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                        razdel.style.left=razdel_teni.style.left=smena_izmen_gl-20+'px';    
                    }else smena_var++;
                break;
                //.................................................................................
                case 2:case 10:
                    if(smena_izmen_gl>smena_index){
                        smena_izmen_gl-=smena_delimoe_gl;
                        ten1_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                        razdel.style.left=razdel_teni.style.left=smena_izmen_gl-20+'px';    
                        smena_izmen_str+=smena_delimoe_str;
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    }else{
                        ten1_gl_p.style.left= gl_p.style.left=smena_index+'px';
                        razdel.style.left=razdel_teni.style.left=smena_index-20+'px';    
                        ten_stranici.style.left= stranica.style.left=osnova.clientWidth-30+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=osnova.clientWidth-45+'px';
                        smena_var++;
                    }
                break;
                //.................................................................................
                case 3:case 7:case 9:
                    if(smena_izmen_str<smena_index){
                        smena_izmen_str+=smena_delimoe_str;
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    }else smena_var++;
                break;
                //.................................................................................
                case 4:
                    if(smena_izmen_str>smena_index){
                        smena_izmen_str-=smena_delimoe_str;
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    }else {
                        smena_var=0;
                        smena_rab=false;  
                    }    
                break;
                //.................................................................................
                case 5:case 11:
                    if(smena_izmen_str<smena_index){
                        smena_izmen_str+=smena_delimoe_str;
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    }else {
                        document.getElementById('p_'+ogl_vibrono).style.backgroundColor = ne_videl_chast;
                        document.getElementById('p_'+ogl_vibrono).style.color = ne_videl_text;
                        gl_p_metka.style.visibility='hidden';
                        smena_var=0;
                        smena_rab=false;  
                    }    
                break;
                //.................................................................................
                case 6: 
                    if(smena_izmen_str>smena_index){
                        smena_izmen_str-=smena_delimoe_str;
                        ten1_gl_p.style.left= gl_p.style.left=smena_izmen_str-70+'px';
                        razdel.style.left=razdel_teni.style.left=smena_izmen_str-80+'px';    
                        
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    }else{
                        smena_var++;
                    }

                break;
                //.................................................................................
            }
        break;
        //-----------------------------------------------------------------------------------------
        case 2:
            switch(smena_deistvie){
                case 1:case 2:case 3:
                    localStorage.setItem('nm', nm);
                    localStorage.setItem('nr', nr);
                    localStorage.setItem('np', np); 
                    localStorage.setItem('np_1',np_1);
                    localStorage.setItem('np_2',np_2);
                    localStorage.setItem('np_3',np_3);
                    svo=1;                        
                    localStorage.setItem('svo',svo);
                    scroll(0, 0);
                    on_str();
                    osnova.style.height=innerHeight>gl_p.clientHeight+500?innerHeight+50+'px': gl_p.clientHeight+500+'px';
                    okna.style.height=osnova.clientHeight+scrollY+'px';
                    smena_delimoe_gl=(gl_p.clientHeight+200)/smena_delitel;
                    smena_izmen_gl=-gl_p.clientHeight+50;
                    ten1_gl_p.style.top= gl_p.style.top=smena_izmen_gl+'px';
                    razdel.style.top=smena_izmen_gl-80+'px';
                    razdel_teni.style.top=smena_izmen_gl-78+'px';
                    ten1_gl_p.style.left= gl_p.style.left=30+'px';
                    razdel.style.left=razdel_teni.style.left=10+'px'; 
                    smena_index=200;
                break;
                //.................................................................................
                case 6:
                    localStorage.setItem('nm', nm);
                    localStorage.setItem('nr', nr);
                    localStorage.setItem('np', np); 
                    localStorage.setItem('np_1',np_1);
                    localStorage.setItem('np_2',np_2);
                    localStorage.setItem('np_3',np_3);
                    svo=3;                        
                    localStorage.setItem('svo',svo);
                    scroll(0, 0);
                    on_str();
                    osnova.style.height=innerHeight>stranica.clientHeight+500?innerHeight+50+'px': stranica.clientHeight+500+'px';
                    okna.style.height=osnova.clientHeight+scrollY+'px';
                    ten_stranici.style.left= stranica.style.left=osnova.clientWidth+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=osnova.clientWidth-15+'px';
                    smena_delimoe_str=(osnova.clientWidth-50)/smena_delitel;
                    smena_izmen_str=osnova.clientWidth;
                    smena_index=100;
                break;
                //.................................................................................
                case 10:case 11:
                    
                    od=document.getElementById('p_'+ogl_vibrono);
                    od.style.backgroundColor = ne_videl_text;
                    od.style.color = ne_videl_chast;
                    perem = od.style.top.slice(0, od.style.top.length - 2) - 0;
                    gl_p_metka.style.top=perem+12+'px';
                    gl_p_metka.style.visibility='visible';
                    localStorage.setItem('nm', nm);
                    localStorage.setItem('nr', nr);
                    localStorage.setItem('np', np); 
                    localStorage.setItem('np_1',np_1);
                    localStorage.setItem('np_2',np_2);
                    localStorage.setItem('np_3',np_3);
                    svo=2;
                    localStorage.setItem('svo',svo);
                    text_str();
                    ogl_vibrono_copiy.innerHTML=document.getElementById('p_'+np).innerHTML;
                    osnova.style.height=innerHeight>stranica.clientHeight+500?innerHeight+50+'px': stranica.clientHeight+500+'px';
                    okna.style.height=osnova.clientHeight+scrollY+'px';
                    smena_delimoe_gl=(gl_p.clientHeight+200)/smena_delitel;
                    smena_izmen_gl=-gl_p.clientHeight+50;
                    ten1_gl_p.style.top= gl_p.style.top=smena_izmen_gl+'px';
                    razdel.style.top=smena_izmen_gl-80+'px';
                    razdel_teni.style.top=smena_izmen_gl-78+'px';
                    ten1_gl_p.style.left= gl_p.style.left=30+'px';
                    razdel.style.left=razdel_teni.style.left=10+'px'; 
                    
                    smena_delimoe_str=(osnova.clientWidth-50)/smena_delitel;
                    
                    smena_izmen_str=osnova.clientWidth+30;
                    //ten1_gl_p.style.top= gl_p.style.top='200px';
                    //razdel.style.top='120px';
                    //razdel_teni.style.top='122px';
                    //ten1_gl_p.style.left= gl_p.style.left='30px';
                    //razdel.style.left='20px';
                    //razdel_teni.style.left='22px';
                    ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                    smena_index=100;
                    
                break;
                //.................................................................................
            }         
            smena_var++;   
        break;
        //-----------------------------------------------------------------------------------------
        case 3:
            switch(smena_deistvie){
                case 1:case 2:case 3:
                    if(smena_izmen_gl<smena_index){
                        smena_izmen_gl+=smena_delimoe_gl;
                        ten1_gl_p.style.top= gl_p.style.top=smena_izmen_gl+'px';
                        razdel.style.top=smena_izmen_gl-80+'px';
                        razdel_teni.style.top=smena_izmen_gl-78+'px';
                    }else{
                        smena_izmen_gl=200;
                        ten1_gl_p.style.top= gl_p.style.top=smena_izmen_gl+'px';
                        razdel.style.top=smena_izmen_gl-80+'px';
                        razdel_teni.style.top=smena_izmen_gl-78+'px';
                        smena_var=0;
                        smena_rab=false;
                    }
                break;
                //.................................................................................
                case 6:
                    if(smena_izmen_str>smena_index){
                        smena_izmen_str-=smena_delimoe_str;
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                        
                    }
                    else{
                        ten_stranici.style.left= stranica.style.left=100+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=100-15+'px';
                        
                        smena_var=0;
                        smena_rab=false;
                    }
                break;
                //.................................................................................
                case 10:case 11:
                    if(smena_izmen_str>smena_index){
                        smena_izmen_gl+=smena_delimoe_gl;
                        smena_izmen_str-=smena_delimoe_str;
ten1_gl_p.style.top= gl_p.style.top=smena_izmen_gl+'px';
                        razdel.style.top=smena_izmen_gl-80+'px';
                        razdel_teni.style.top=smena_izmen_gl-78+'px';
                        ten_stranici.style.left= stranica.style.left=smena_izmen_str+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_str-15+'px';
                        
                    }else{
                        ten1_gl_p.style.top= gl_p.style.top=200+'px';
                        razdel.style.top=200-80+'px';
                        razdel_teni.style.top=200-78+'px';
                        ten_stranici.style.left= stranica.style.left=100+'px';
                        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=100-15+'px';
                        
                        smena_var=0;
                        smena_rab=false;
                    }
                break;
                //.................................................................................
            }
        break;
    }
    
    if(smena_rab)setTimeout('smena_stranic_1()',20);
}

//=================================================================================================
function kn_nazad_1(deistvie) {
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