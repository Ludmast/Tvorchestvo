function Sait_load_4()
{
    if(odin==2){
        
        osnova.style.fontSize='36px';
        osnova.style.wordSpacing='10px';
        osnova.style.textIndent='30px';
        osnova.innerHTML='<table id="porydok"><tr><td><p><div id="zagol"></div><p></td></tr><tr><td><div id="knopki_os"></div></td></tr><tr><td><br/><div id="text_osnov"></div><br/></td></tr><tr><td><div id="knopki_os_2"></div></td></tr></table>';
        knopki_os.innerHTML='<span id="kn_tp_na_str_1"onmouseover="on_kn_tp_na_str(1,1)"onmouseout="on_kn_tp_na_str(2,1)"onmousedown="on_kn_tp_na_str(4,1)"><b>< Назад</b></span><span id="kn_tp_na_str_2"onmouseover="on_kn_tp_na_str(1,2)"onmouseout="on_kn_tp_na_str(2,2)"onmousedown="on_kn_tp_na_str(4,2)"><b>Вперёд ></b></span><span id="kn_tp_na_str_3"onmouseover="on_kn_tp_na_str(1,3)"onmouseout="on_kn_tp_na_str(2,3)"onmousedown="on_kn_tp_na_str(4,3)"><b>^ В раздел</b></span><span id="kn_tp_na_str_4"onmouseover="on_kn_tp_na_str(1,4)"onmouseout="on_kn_tp_na_str(2,4)"onmousedown="on_kn_tp_na_str(4,4)"><b>Свернуть</b></span>';
        knopki_os_2.innerHTML='<span id="kn_tp_na_str_5"onmouseover="on_kn_tp_na_str(1,5)"onmouseout="on_kn_tp_na_str(2,5)"onmousedown="on_kn_tp_na_str(4,5)"><b>< Назад</b></span><span id="kn_tp_na_str_6"onmouseover="on_kn_tp_na_str(1,6)"onmouseout="on_kn_tp_na_str(2,6)"onmousedown="on_kn_tp_na_str(4,6)"><b>Вперёд ></b></span><span id="kn_tp_na_str_7"onmouseover="on_kn_tp_na_str(1,7)"onmouseout="on_kn_tp_na_str(2,7)"onmousedown="on_kn_tp_na_str(4,7)"><b>^ В раздел</b></span><span id="kn_tp_na_str_8"onmouseover="on_kn_tp_na_str(1,8)"onmouseout="on_kn_tp_na_str(2,8)"onmousedown="on_kn_tp_na_str(4,8)"><b>Свернуть</b></span>';
        zagol.style.width=osnova.clientWidth;
        zagol.style.visibility='visible';
        zagol.innerHTML='<big><center ><b>'+(np_1>0?'<span style="color:green">'+(np_3>0?ar_ym[np_1-1][1]+' /</br></span><span style="color:orange">'+ar_tp[nm][nr-1][np_1-1][np_2-1][0]+' / Изделие '+np_3:'Один из умельцев')+'</span>':'<big><span style="color:red">'+ar_menu[(nm-0)+1][nr-1][0]+' /</span> <br/><span style="color:green">'+array_razd_p[nm][nr-1][np]+' / </span><br/></big>'+ ar_tp[nm][nr-1][np][nom_t][0])+'</b></center></big><p>';
        zagol.style.left=Math.floor((osnova.clientWidth-zagol.clientWidth)/2)+'px';
        osnova.style.backgroundColor=bob.style.backgroundColor='white';
       
        kn_tp_na_str_1.style.left=kn_tp_na_str_5.style.left='5px';
        kn_tp_na_str_2.style.left=kn_tp_na_str_6.style.left=kn_tp_na_str_1.clientWidth+10+'px';

        kn_tp_na_str_4.style.right=kn_tp_na_str_8.style.right='5px';

        kn_tp_na_str_3.style.right=kn_tp_na_str_7.style.right=kn_tp_na_str_4.clientWidth+10+'px';
        kn_tp_na_str_1.style.top=kn_tp_na_str_2.style.top=kn_tp_na_str_3.style.top=kn_tp_na_str_4.style.top=zagol.clientHeight+30+'px';
        kn_tp_na_str_5.style.bottom=kn_tp_na_str_6.style.bottom=kn_tp_na_str_7.style.bottom=kn_tp_na_str_8.style.bottom='10px';
        if(osnova.clientWidth<kn_tp_na_str_1.clientWidth+kn_tp_na_str_2.clientWidth+kn_tp_na_str_3.clientWidth+kn_tp_na_str_4.clientWidth+25){
            kn_tp_na_str_1.innerHTML=kn_tp_na_str_5.innerHTML='<';
            kn_tp_na_str_2.innerHTML=kn_tp_na_str_6.innerHTML='>';
            kn_tp_na_str_3.innerHTML=kn_tp_na_str_7.innerHTML='^';
        }
        text_osnov.style.width=osnova.clientWidth-50+'px';
        text_osnov.style.marginLeft='20px';
        text_osnov.style.marginRight='30px';
                       
        if(np_1!=0){
if(np_2!=0){                switch(np_2){
                    case 1:
                        text_osnov.innerHTML=chel_rab(np_1-1,np_3-1);
                        
                    break;
                    case 2:
                        text_osnov.innerHTML=chel_yr(np_1-1,np_3-1);
                    break;
                    case 3:
                        text_osnov.innerHTML =chel_inter(np_1-1,np_3-1);
                    break;
                    case 4:
                        text_osnov.innerHTML=chel_all_yr(np_1-1);
                    break;
                }
            }else
                    text_osnov.innerHTML=chel(np_1-1);
                
        }else text_osnov.innerHTML=on_tp_t(nom_t-0);
        //ar_tp[nm][nr-1][np][nom_t];


        text_osnov.style.top=zagol.clientHeight+kn_tp_na_str_1.clientHeight+50+'px';
        porydok.style.height=zagol.clientHeight+text_osnov.clientHeight+200+'px';
        

        osnova.style.height=porydok.clientHeight+200+'px';
        
        osnova.innerHTML=porydok.innerHTML;
        
    }else{

        switch(dz){
            case 1:osnova.innerHTML='<div id="in_load_1"></div><div id="in_load_2"></div><table id="stranica"valign="top" onmousemove="stranica_izmen(3)" onmousedown="stranica_izmen(4)" onmouseup="stranica_izmen(5)"><tr><td><div id="knopki_os"></div></td></tr><tr><td><table id="text_stranici"><tr><td><div id="t_s" class="tm"></div></td></tr></table></td></tr><tr><td><div id="knopki_os_2"></div></td></tr></table><div id="in_load_3"></div><div id="in_load_4"></div>';break;
            case 2:osnova.innerHTML='<div id="in_load_1"></div><div id="in_load_2"></div><table id="stranica"valign="top" onmousemove="stranica_izmen(3)" onmousedown="stranica_izmen(4)" onmouseup="stranica_izmen(5)"><tr><td><div id="knopki_os"></div></td></tr><tr><td><table id="text_stranici"><tr><td>2<div id="t_s" class="tm"></div></td></tr></table></td></tr><tr><td><div id="knopki_os_2"></div></td></tr></table><div id="in_load_3"></div><div id="in_load_4"></div>';break;
            case 3:osnova.innerHTML='<div id="in_load_1"></div><div id="in_load_2"></div><table id="stranica"valign="top" onmousemove="stranica_izmen(3)" onmousedown="stranica_izmen(4)" onmouseup="stranica_izmen(5)"><tr><td><div id="knopki_os"></div></td></tr><tr><td><table id="text_stranici"><tr><td>3<div id="t_s" class="tm"></div></td></tr></table></td></tr><tr><td><div id="knopki_os_2"></div></td></tr></table><div id="in_load_3"></div><div id="in_load_4"></div>';break;
            case 4:osnova.innerHTML='<div id="in_load_1"></div><div id="in_load_2"></div><table id="stranica"valign="top" onmousemove="stranica_izmen(3)" onmousedown="stranica_izmen(4)" onmouseup="stranica_izmen(5)"><tr><td><div id="knopki_os"></div></td></tr><tr><td><table id="text_stranici"><tr><td>4<div id="t_s" class="tm"></div></td></tr></table></td></tr><tr><td><div id="knopki_os_2"></div></td></tr></table><div id="in_load_3"></div><div id="in_load_4"></div>';break;
            default:osnova.innerHTML='<div id="in_load_1"></div><div id="in_load_2"></div><table id="stranica"valign="top" onmousemove="stranica_izmen(3)" onmousedown="stranica_izmen(4)" onmouseup="stranica_izmen(5)"><tr><td><div id="knopki_os"></div></td></tr><tr><td><table id="text_stranici"><tr><td><div id="t_s" class="tm"></div></td></tr></table></td></tr><tr><td><div id="knopki_os_2"></div></td></tr></table><div id="in_load_3"></div><div id="in_load_4"></div>';break;
        }
        
        knopki_os.innerHTML='<span id="kn_tp_na_str_1"onmouseover="on_kn_tp_na_str(1,1)"onmouseout="on_kn_tp_na_str(2,1)"onmousedown="on_kn_tp_na_str(4,1)"><b>< Назад</b></span><span id="kn_tp_na_str_2"onmouseover="on_kn_tp_na_str(1,2)"onmouseout="on_kn_tp_na_str(2,2)"onmousedown="on_kn_tp_na_str(4,2)"><b>Вперёд ></b></span><span id="kn_tp_na_str_3"onmouseover="on_kn_tp_na_str(1,3)"onmouseout="on_kn_tp_na_str(2,3)"onmousedown="on_kn_tp_na_str(4,3)"><b>^ В раздел</b></span><span id="kn_tp_na_str_4"onmouseover="on_kn_tp_na_str(1,4)"onmouseout="on_kn_tp_na_str(2,4)"onmousedown="on_kn_tp_na_str(4,4)"><b>Развернуть</b></span>';
        knopki_os_2.innerHTML='<span id="kn_tp_na_str_5"onmouseover="on_kn_tp_na_str(1,5)"onmouseout="on_kn_tp_na_str(2,5)"onmousedown="on_kn_tp_na_str(4,5)"><b>< Назад</b></span><span id="kn_tp_na_str_6"onmouseover="on_kn_tp_na_str(1,6)"onmouseout="on_kn_tp_na_str(2,6)"onmousedown="on_kn_tp_na_str(4,6)"><b>Вперёд ></b></span><span id="kn_tp_na_str_7"onmouseover="on_kn_tp_na_str(1,7)"onmouseout="on_kn_tp_na_str(2,7)"onmousedown="on_kn_tp_na_str(4,7)"><b>^ В раздел</b></span><span id="kn_tp_na_str_8"onmouseover="on_kn_tp_na_str(1,8)"onmouseout="on_kn_tp_na_str(2,8)"onmousedown="on_kn_tp_na_str(4,8)"><b>Развернуть</b></span>';
        knopki_os.style.fontSize=knopki_os_2.style.fontSize='22px';
        if(stranica.clientWidth<kn_tp_na_str_1.clientWidth+kn_tp_na_str_2.clientWidth+kn_tp_na_str_3.clientWidth+kn_tp_na_str_4.clientWidth+25){
            kn_tp_na_str_1.innerHTML=kn_tp_na_str_5.innerHTML='<';
            kn_tp_na_str_2.innerHTML=kn_tp_na_str_6.innerHTML='>';
            kn_tp_na_str_3.innerHTML=kn_tp_na_str_7.innerHTML='^';
        }
        kn_tp_na_str_1.style.left=kn_tp_na_str_5.style.left='-2px';
        kn_tp_na_str_2.style.left=kn_tp_na_str_6.style.left=kn_tp_na_str_1.clientWidth+10+'px';
        kn_tp_na_str_4.style.right=kn_tp_na_str_8.style.right='-2px';
        kn_tp_na_str_3.style.right=kn_tp_na_str_7.style.right=kn_tp_na_str_4.clientWidth+10+'px';
        kn_tp_na_str_5.style.bottom=kn_tp_na_str_6.style.bottom=kn_tp_na_str_7.style.bottom=kn_tp_na_str_8.style.bottom='2px';

        if(odin==1){
        text_stranici.style.paddingTop='30px';
        kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='visible';
        }else{
        kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='hidden';
        }


    
    

    razd=1;
    
    //---------------------------------------------------------------------------------------------
    if(localStorage.getItem('ok_r')){}else
        localStorage.setItem('ok_r',270);//размер панели с окнами
    ok_r=localStorage.getItem('ok_r');

    if(osnova_razvernuta!=true) pamyt_resurs=['','','#306090',30,0,20,-2,-2,110,140,-2,-2];//запоминает t_s.innerHTML, osnova.заднийфон, fontSize, wordSpacing, textIndent, кнопки на t_s значение top у 4-х, bottom у оставшихся, и поочередно left и right
    bob.style.overflowX = 'hidden';
    
    bob.style.backgroundColor=osnova.style.backgroundColor = '#306090';

    arra='';
    metka_chet=0;
    interes_chet=0;
    
    
    gl_p_aktiv=false;//true;
    gl_p_vibor=false;

    form_text_aktiv=false;
    form_shetchik=0;
    form_text_palka='|';
    form_text_palka_plus=false;
    name_chel_form_text='';
    id_form=document.getElementById('form_'+0);
    nomer_f_text_cop=0;
    on_str_nazad=false;
    tp_text=tp_str=tp_str_p=tr_text=tr_str=ts_text=ts_str=tm_text=tm_str=ti_text=ti_str='';
interes_on=metka_on=false;
    okna_width = 20; 
    pamyt_p_0_0_3 = 0;
    pamyt_metka=pamyt_interes=0;
    ym_nomer=1;
chel_kolvo_p=0;
dat=new Date();

//---------------------------------------------------------------------------------------------
    //тень страницы
    in_load_2.innerHTML = "<div id='ten_stranici'></div><div id='ten'></div>";
 
    //---------------------------------------------------------------------------------------------
    //кнопка для возвращения назад на верх страницы и содержимое раздела по пунктам
      //---------------------------------------------------------------------------------------------
    //вызов функции SODERG_RAZDELA_? для каждого дизайна DZ свой
         
 //hi.innerHTML=hi.innerHTML+'<script type="text/javascript"src="s_2.js"></script>';   
    switch(dz){
        case 1:soderg_razdela_1();break;
        case 2:soderg_razdela_2();break;
        case 3:soderg_razdela_3();break;
        case 4:soderg_razdela_4();break;
        default:soderg_razdela_0();break;
    }
//bob.innerHTML='ttt';

    //smena_var=0;
   //не использовать!!!! setTimeout('soderg_razdela_'+dz+'()',0);
    
    //---------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------
   // bob.innerHTML='ff';
    //---------------------------------------------------------------------------------------------
    str="";
    //---------------------------------------------------------------------------------------------
    //тень под названием раздела
    str += "<div id='razdel_teni'></div>";
    //---------------------------------------------------------------------------------------------
    //название раздела
    str += "<div id='razdel'></div>";
    //---------------------------------------------------------------------------------------------
    
    
    //помошник

    str += "<div id='ten_line_pomoshnik'></div>";

    str += "<span id='pomoshnik'></span><hr id='line_pomoshnik' color='#80b0ff' />";

    //предупреждение
    str += "<span id='ten_kn_prydki'></span><span id='kn_prydki'onmouseover='kn_prydki_(1)'onmouseout='kn_prydki_(2)'onmousedown='kn_prydki_(4)'></span>";
    //---------------------------------------------------------------------------------------------
    //список содержимого раздела
    str += "<div id='okna'onmousemove='panel_izmen(3)'onmousedown='panel_izmen(4)'onmouseup='panel_izmen(5)'> ";
    //---------------------------------------------------------------------------------------------
    //кнопки на 3 окне 
    str_plus = "<td id='na_meste_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,5)' onmouseout = 'kn_okna_videlen(2,5)'onmousedown='kn_okna_videlen(4,5)'><span id='na_meste_3_a'class='c_na_meste_a'></span><span id='na_meste_3_b'class='c_na_meste_b'></span><span id='na_meste_3_c'class='c_na_meste_c'></span></td>";
    str_plus += "<td id='svert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,2)' onmouseout = 'kn_okna_videlen(2,2)'onmousedown='kn_okna_videlen(4,2)'><span id='svert_3_a'class='c_svert_a'></span><span id='svert_3_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 3 окна 
    str_plus += "<td><span id='svet_3_okna'class='c_svet_okna'></span><span id='ten_3_okna'class='c_ten_okna'></span></td>";
    //3 дополнительное окошко с закладками
    str += "<table id='okno_zametki' class='c_okno'onmousemove='okno_izmen(2,3)'onmousedown='okno_izmen(2,4)'onmouseup='okno_izmen(2,5)'><tr><td id='okno_name_zametki'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_zametki' class='c_okno_text'></td></tr></table>";
    //свет и тень на заголовке 2 окна
    str_plus = "<td><span id='svet_2_okna'class='c_svet_okna'></span><span id='ten_2_okna'class='c_ten_okna'></span></td>";
    //2 дополнительное окошко с новостями
    str += "<table  id='okno_novosti' class='c_okno'onmousemove='okno_izmen(1,3)'onmousedown='okno_izmen(1,4)'onmouseup='okno_izmen(1,5)'><tr><td id='okno_name_novosti'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_novosti' class='c_okno_text'></td></tr></table>";
    //свет и тень на заголовке 1 окна
    str_plus = "<td><span id='svet_1_okna'class='c_svet_okna'></span><span id='ten_1_okna'class='c_ten_okna'></span></td>";
    //1 дополнительное окошко с беседами
    str += "<table id='okno_besedi' class='c_okno'onmousemove='okno_izmen(0,3)'onmousedown='okno_izmen(0,4)'onmouseup='okno_izmen(0,5)'><tr><td id='okno_name_besedi'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_besedi' class='c_okno_text'></td></tr></table>";
    str += "</div>";
    //---------------------------------------------------------------------------------------------
    //тень содержимого раздела 2
    
    
       //---------------------------------------------------------------------------------------------
    //кнопка для двищения оконной панели
    str += "<div id='dvigenie_paneli'onmouseover='kn_dvig_panel(1)'onmouseout='kn_dvig_panel(2)'onmousemove='kn_dvig_panel(3)'onmousedown='kn_dvig_panel(4)'onmouseup='kn_dvig_panel(5)'><div id='dvig_ris'></div></div>";
    //---------------------------------------------------------------------------------------------
    //тень верхней полоски меню
    str += "<div id='ten_menu'></div>";
    //---------------------------------------------------------------------------------------------
    //тени названия сайта
    str += "<div id='name_sait1_teni' ></div><div id='name_sait2_teni'style='filter:blur(7px)'></div>";
    //название сайта
    str += "<div id='name_sait1'></div><div id='name_sait2'></div>";
    //---------------------------------------------------------------------------------------------
    
    //шпоргалки
    str += "<div id='shporgalki'class='shpora_v'onmousedown='on_shpora_move(4)'onmouseup='on_shpora_move(5)'onmousemove='on_shpora_move(3)'><big>Шпора</big></div>";
    //---------------------------------------------------------------------------------------------
    //верхняя полоска меню
    str += "<table><tr><td id='menu_line'onmouseout = 'menu_(2,0,0)'><table id = 'menu' onmouseout = 'menu_(2,0,0)'><tr><td id = 'm_g' class='c_m_g' onmouseover = 'menu_(1,0,0)' onmouseout = 'menu_(2,0,0)' onmousemove='menu_(3,0,0)'></td ><td id='m_razdelitel'align='center'>|</td><td id='m_y' class='c_m_g' onmouseover='menu_(1,0,1)' onmouseout='menu_(2,0,1)'onmousemove='menu_(3,0,1)'></td><td align='center'>|</td><td id='m_os' class='c_m_g' onmouseover='menu_(1,0,2)' onmouseout='menu_(2,0,2)'onmousemove='menu_(3,0,2)'></td><td align='center'>|</td><td id='m_s' class='c_m_g' onmouseover='menu_(1,0,3)' onmouseout='menu_(2,0,3)'onmousemove='menu_(3,0,3)'></td></tr></table ></td></tr></table>";
    
    //---------------------------------------------------------------------------------------------
    //развёрнутые списки менюшек
    str += "<div id='m1'></div><div id='m2'></div><div id='m3'></div><div id='m4'></div>";
    //---------------------------------------------------------------------------------------------
    
    //кнопка для возвращения назад на верх страницы
    switch(dz){
        case 1: str += "<div id='ten_kn_nazad'></div><div id='kn_nazad'onmouseover='kn_nazad_1(1)'onmouseout='kn_nazad_1(2)'onmousedown='kn_nazad_1(4)'></div>";break;
        case 2: str += "<div id='ten_kn_nazad'></div><div id='kn_nazad'onmouseover='kn_nazad_2(1)'onmouseout='kn_nazad_2(2)'onmousedown='kn_nazad_2(4)'></div>";break;
        case 3: str += "<div id='ten_kn_nazad'></div><div id='kn_nazad'onmouseover='kn_nazad_3(1)'onmouseout='kn_nazad_3(2)'onmousedown='kn_nazad_3(4)'></div>";break;
        case 4: str += "<div id='ten_kn_nazad'></div><div id='kn_nazad'onmouseover='kn_nazad_4(1)'onmouseout='kn_nazad_4(2)'onmousedown='kn_nazad_4(4)'></div>";break;
        default: str += "<div id='ten_kn_nazad'></div><div id='kn_nazad'onmouseover='kn_nazad_0(1)'onmouseout='kn_nazad_0(2)'onmousedown='kn_nazad_0(4)'></div>";break;
    }
    //---------------------------------------------------------------------------------------------
    //создание кнопок, окон для метки и интеса
    str +="<div id='ten_interes'></div><div id='interes_div'></div><canvas id='interes_treug'></canvas><div id='ten_metka'></div><div id='metka_div'></div><canvas id='metka_treug'></canvas>";
    //---------------------------------------------------------------------------------------------
    
    in_load_4.innerHTML = '<table><tr><td>'+str+'</td></tr></table>';
    //bob.innerHTML='yy';
    //---------------------------------------------------------------------------------------------
    if (screen.width < screen.height) {

    }
   //////
    //svet_nadpisi_1.style.visibility=svet_nadpisi_2.style.visibility=svet_nadpisi_3.style.visibility='hidden';
  
    
    minus = plus = 0;
    okgran = 45;
    //---------------------------------------------------------------------------------------------
    //  if (localStorage.getItem('w_s')) { } else localStorage.setItem('w_s', 650);//width_soderganiy_razdela
    //---------------------------------------------------------------------------------------------
   
       
    
    ogl_vibrono = localStorage.getItem('np');
    
    
  // }   
    pamyt_istorii='<p>'+tistor_telo(localStorage.getItem('nn'));
    localStorage.setItem('nn', localStorage.getItem('nn') - 0 + 1);

//    nomer_str_nazad=0;
//////
    //n_str_nazad();
    //---------------------------------------------------------------------------------------------

    okna.style.width=ok_r+'px';
    okno_besedi.style.width=okno_novosti.style.width=okno_zametki.style.width=ok_r-30+'px';
    dvigenie_paneli.style.left=osnova.clientWidth-okna.clientWidth-27+'px';
    document.getElementById('t_s').style.display = 'block';
    if (okna.clientWidth < 130) {
        peremeshenie_okon_svernut = true;
    } else {
        peremeshenie_okon_svernut = false;
    }
    if (scrollY > 150) okno_top = 60; else okno_top = 210 - scrollY;
    
    //---------------------------------------------------------------------------------------------
    if (localStorage.getItem('o_b')) { } else
        localStorage.setItem('o_b', 250);//okno_besedi
    if (localStorage.getItem('o_n')) { } else
        localStorage.setItem('o_n', 250);//okno_novosti
    if (localStorage.getItem('o_z')) { } else
        localStorage.setItem('o_z', 250);//okno_zametki
    //---------------------------------------------------------------------------------------------
     
    okno_besedi.style.height = localStorage.getItem('o_b');
    okno_novosti.style.height = localStorage.getItem('o_n');
    okno_zametki.style.height = localStorage.getItem('o_z');
    //---------------------------------------------------------------------------------------------
    if (innerHeight < okno_top + okno_besedi.clientHeight + okno_novosti.clientHeight + okno_zametki.clientHeight + 30) okna_umen();
    //---------------------------------------------------------------------------------------------
    perem = okno_top;
    okb = perem;
    okno_besedi.style.top = perem + 'px';
    perem += okno_besedi.clientHeight + 10;
    okn = perem;
    okno_novosti.style.top = perem + 'px';
    perem += okno_novosti.clientHeight + 10;
    okz = perem;
    okno_zametki.style.top = perem + 'px';
    //---------------------------------------------------------------------------------------------
    limit = 270;
    okna.style.height = osnova.clientHeight+'px';//limit + stranica.clientHeight + 'px';
    //---------------------------------------------------------------------------------------------
    soderg_width = 650;
    soderg_left=70;
    soderg_del = (650) / 10;
    //---------------------------------------------------------------------------------------------
   na_meste_3.style.right = '40px';
    svert_3.style.right = '10px';
    /////
okno_name_besedi.innerHTML = 'Беседы';
    okno_name_novosti.innerHTML = 'Новости';
    okno_name_zametki.innerHTML = 'Заметки';
    
    //---------------------------------------------------------------------------------------------
    stranica.style.width = innerWidth - 152 - okna.clientWidth + 'px';
    ten_stranici.style.width = stranica.clientWidth + 'px';
    //---------------------------------------------------------------------------------------------
    stranica_top = 220;
    if(odin==0) {text_stranici.style.paddingTop = gl_p.clientHeight - 20 + 'px';}
    
    //---------------------------------------------------------------------------------------------
    if(nm==0&&nr==3&&(np>-1&&np<3)&&np_1>0){}else{
    
    }
    //---------------------------------------------------------------------------------------------
//    na_meste_3.style.right = '40px';
//    svert_3.style.right = '10px';
    
    
    //---------------------------------------------------------------------------------------------
    if (innerHeight < 840) okno_besedi.style.height = okno_novosti.style.height = okno_zametki.style.height = (innerHeight - 240) / 3 + 'px';
    //---------------------------------------------------------------------------------------------
    perem = 0;
    
    //// -------------УРА!!!! Зделала ;) -------------------
    if(odin!=0){
        if(odin==1){
            tex=document.getElementById('t_s');
        }else{
            tex=document.getElementById('text_osnov');
        }
        if(np_1!=0){
        if(np_3>0){
            switch(np_2){
                case 1:
                    tex.innerHTML=chel_rab(np_1-1,np_3-1);
                    
                break;
                case 2:
                    tex.innerHTML=chel_yr(np_1-1,np_3-1);
                break;
                case 3:
                    tex.innerHTML =chel_inter(np_1-1,np_3-1);
                break;
                case 4:
                    tex.innerHTML=chel_all_yr(np_1-1);
                break;
            }
        
            
            
        }
        else{ 
            if(np_2>0)tex.innerHTML = chel_all_yr(localStorage.getItem('np_1'));
            else tex.innerHTML = chel(localStorage.getItem('np_1'-1));
        }
    }else tex.innerHTML=on_tp_t(nom_t-0);


        
    }else{

        text_str();

    }
    localStorage.setItem('nom_t',nom_t-0);
    up();
    //---------------------------------------------------------------------------------------------
    //имя с тенью раздела сайта на который перешли
    if(odin!=0){
    
        
        if(nm==0&&nr==3)document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML =ar_ym[np_1-1][1];
        else{
             document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML =ar_menu[(nm-0)+1][nr-1][0]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/><small>'+ ar_tp[nm][nr-1][np][nom_t][0]+'</small>'; 
        ten_stranici.style.top=stranica.style.top= razdel.offsetTop+razdel.clientHeight+10+'px';
        }
        //document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML ='Один из умельцев';
    }else document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML = ar_menu[localStorage.getItem('nm') - 0 + 1][localStorage.getItem('nr') - 1][0];
    //---------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------
    glazik=45;
    pomoshnik.innerHTML = "<span id='ten_pomoshnika'></span><span id='telo'></span><span id='svet_tela'></span><span id='glaz_l'></span><span id='glaz_r'></span><span id='guba'></span>";
    glaz_l.innerHTML = "<span id='svet_glaz_l' class='c_svet_glaz'></span><span id='sheka_l'></span>";
    glaz_r.innerHTML = "<span id='svet_glaz_r' class='c_svet_glaz'></span><span id='sheka_r'></span>";
    guba.innerHTML = "<span id='guba_1'></span><span id='guba_2'></span>";
    //---------------------------------------------------------------------------------------------
    guba_2.style.visibility = 'hidden';
    //---------------------------------------------------------------------------------------------
    kn_prydki.innerHTML = '<';
    kn_prydki.style.top = innerHeight - 64 + 'px';
    ten_kn_prydki.style.top = innerHeight - 60 + 'px';
    ten_kn_prydki.style.visibility = kn_prydki.style.visibility = 'hidden';
    //---------------------------------------------------------------------------------------------
    //кнопка для возвращения назад на верх страницы
    kn_nazad.innerHTML = '^';
    ten_kn_nazad.style.visibility = kn_nazad.style.visibility = 'hidden';
    ten_kn_nazad.style.left = kn_nazad.style.left =osnova.clientWidth- ok_r-30 + 'px';
    ten_kn_nazad.style.top = kn_nazad.style.top = innerHeight - 80 + 'px';
    //---------------------------------------------------------------------------------------------
   
    localStorage.setItem('l_p', 0);  //left_pomoshnik
    pomoshnik_go(0);
    
   
    ten_line_pomoshnik.style.top=innerHeight-60+'px';
    line_pomoshnik.style.top=innerHeight-73+'px';
    //---------------------------------------------------------------------------------------------
    name_sait1.innerText = array_name_sait[0];
    name_sait1_teni.innerText = array_name_sait[0];
    name_sait2.innerText = array_name_sait[1];
    name_sait2_teni.innerText = array_name_sait[1];
    ns_a = 2; ns_b = 1; ns_i = 0;
    ns_c = ns_d = 0;
    //---------------------------------------------------------------------------------------------
    m_g.innerHTML = ar_menu[0][0];
    m_y.innerHTML = ar_menu[0][1];
    m_os.innerHTML = ar_menu[0][2];
    m_s.innerHTML = ar_menu[0][3];
    //---------------------------------------------------------------------------------------------
   
    osnova_razvernuta=false;
    sait_load_menu_4();
    setTimeout('peremennie()', 10);
    }    
}
//=================================================================================================
function sait_load_menu_4() {
    menu_width = 280;
    m1_left = 22; m2_left = m1_left + m_g.clientWidth + m_razdelitel.clientWidth + 4; m3_left = m2_left + m_y.clientWidth + m_razdelitel.clientWidth + 4; m4_left = m3_left + m_os.clientWidth + m_razdelitel.clientWidth + 4; m_b = 1;
    ms = [["m_g", 8, m1_left, 4], ["m_y", 24, m2_left, 6], ["m_os", 4, m3_left, 2], ["m_s", 4, m4_left, 2]];
    //---------------------------------------------------------------------------------------------
    str = "<div id='ten_m'></div>";
    str += "<div id='m_g_0'class='c_m_o'onmouseover='menu_(1,1,0)'onmouseleave='menu_(2,1,0)'>"
    for (i = 1; i < ms[0][1]; i++)str += "<div id='m_g_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",0)'onmouseout='menu_(2," + (i + 1) + ",0)'onclick='menu_(4," + (i + 1) + ",0)'></div>";
    str += "<hr id='m_g_l_0'class='c_m_line_0'color='black'size='1'/><hr id='m_g_l_1'class='c_m_line_1'color='white'size='1'/><hr id='m_g_l_2'class='c_m_line_2'color='black'size='1'/><hr id='m_g_l_3'class='c_m_line_3'color='white'size='1'/></div>";
    m1.innerHTML = str;
    for (i = 0; i < ms[0][1] - 1; i++)document.getElementById(ms[0][0] + '_' + (i + 1)).innerText = ar_menu[1][i][0];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_y_0'class='c_m_o'onmouseover='menu_(1,1,1)'onmouseout='menu_(2,1,1)'>"
    for (i = 1; i < ms[1][1]; i++)str += "<div id='m_y_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",1)'onmouseout='menu_(2," + (i + 1) + ",1)'onclick='menu_(4," + (i + 1) + ",1)'></div>";
    str += "<hr id='m_y_l_0' class='c_m_line_0' color='black' size='1'/><hr id='m_y_l_1' class='c_m_line_1' color='white' size='1'/><hr id='m_y_l_2'class='c_m_line_4' color='black' size='1'/><hr id='m_y_l_3'class='c_m_line_5' color='white' size='1'/><hr id='m_y_l_4'class='c_m_line_6' color='black' size='1'/><hr id='m_y_l_5'class='c_m_line_7' color='white' size='1'/></div > ";
    m2.innerHTML = str;
    for (i = 0; i < ms[1][1] - 1; i++)document.getElementById(ms[1][0] + '_' + (i + 1)).innerText = ar_menu[2][i][0];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_os_0'class='c_m_o'onmouseover='menu_(1,1,2)'onmouseout='menu_(2,1,2)'>"
    for (i = 1; i < ms[2][1]; i++)str += "<div id='m_os_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",2)'onmouseout='menu_(2," + (i + 1) + ",2)'onclick='menu_(4," + (i + 1) + ",2)'></div>";
    str += "<hr id='m_os_l_0' class='c_m_line_0' color='black' size='1'/><hr id='m_os_l_1' class='c_m_line_1' color='white' size='1'/></div > ";
    m3.innerHTML = str;
    for (i = 0; i < ms[2][1] - 1; i++)document.getElementById(ms[2][0] + '_' + (i + 1)).innerText = ar_menu[3][i][0];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_s_0'class='c_m_o'onmouseover='menu_(1,1,3)'onmouseout='menu_(2,1,3)'>"
    for (i = 1; i < ms[3][1]; i++)str += "<div id='m_s_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",3)'onmouseout='menu_(2," + (i + 1) + ",3)'onclick='menu_(4," + (i + 1) + ",3)'></div>";
    str += "<hr id='m_s_l_0'class='c_m_line_0' color='black' size='1'/><hr id='m_s_l_1'class='c_m_line_1' color='white' size='1'/></div > ";
    m4.innerHTML = str;
    for (i = 0; i < ms[3][1] - 1; i++)document.getElementById(ms[3][0] + '_' + (i + 1)).innerText = ar_menu[4][i][0];
    //---------------------------------------------------------------------------------------------
    for (j = 0; j < 4; j++) {
        m = [];
        for (i = 0; i < ms[j][1]; i++) { m[i] = document.getElementById(ms[j][0] + "_" + i); }
        m[0].style.height = (ms[j][1] - 1) * text_size + 'px';
        m[0].style.left = ms[j][2] + 'px';
        mm = document.getElementById(ms[j][0]).clientWidth;
        if (m[0].clientWidth <= mm) m[0].style.width = mm + 10 + 'px';
        t = 2;
        for (i = 1; i < m.length; i++) {
            m[i].style.top = t + 'px';
            t += text_size;
        }
    }
    m_i = 0;
}

//=================================================================================================
//=================================================================================================
//=================================================================================================
function soderg_razdela_4() {
    
    t = 0;
    text_size = 35;
    if (localStorage.getItem('np')) { } else localStorage.setItem('np', 0);
    ogl_vibrono = localStorage.getItem('np');
    
    //---------------------------------------------------------------------------------------------
    str =str_2= "";
    //---------------------------------------------------------------------------------------------
    
    //---------------------------------------------------------------------------------------------
    //подсветка и сами названия содержания страниц
    //str_2+= "<div id='ten1_gl_p'></div><div id='gl_p_za_str'class='c_gl_p_0'>Содержимое раздела:";
    // <div id='kn_za_str2' onmouseover='kn_za_str2_0(1)' onmouseout='kn_za_str2_0(2)' onmousedown='kn_za_str2_0(4)'></div>";
    str += "<div id='ten_gl_p'></div><div id='gl_p'class='c_gl_p_4'>Содержимое раздела:";
    //<div id='kn_za_str' onmouseover='kn_za_str_0(1)' onmouseout='kn_za_str_0(2)' onmousedown='kn_za_str_0(4)'></div>";
    for (i = 0; i < array_razd_p[localStorage.getItem('nm')][localStorage.getItem('nr') - 1].length; i++) {
    str += "<div id='tp_" + i + "'class='c_ten_p_4'></div><div id='p_" + i + "'class='c_p_4' onmouseover='p_videlen_4(1, " + i + ")' onmouseout='p_videlen_4(2," + i + ")' onmousedown='p_videlen_4(4," + i + ")'></div>";
    //str_2+= "<div id='tp_" + i + "_2'class='c_ten_p_0'></div><div id='p_" + i + "_2'class='c_p_0'></div></div>";
    }
    str += "<div id='ten2'></div></div><div id='ten_vibronogo_p'class='c_ten_vibronogo_p_4'></div><div id='ogl_vibrono_copiy'class='c_ogl_vibrono_copiy_4'></div>";
    //---------------------------------------------------------------------------------------------
    //in_load_1.innerHTML='<table><tr><td>'+str_2+'</td></tr></table>';
    in_load_3.innerHTML ='<table><tr><td>'+ str+'</td></tr></table>';
    //---------------------------------------------------------------------------------------------
    soderg_var=0;
    soderg_rab=false;

    //---------------------------------------------------------------------------------------------
    
    gl_p.style.width=//gl_p_za_str.style.width=
    (osnova.clientWidth/100)*55+'px';

    if (localStorage.getItem('s_l')) {

    } else
    localStorage.setItem('s_l', 0);

    stranica_left = localStorage.getItem('s_l') - 0 > 0 ? 50 : 125;
    //---------------------------------------------------------------------------------------------
    
    //содержимое раздела по пунктам
    for (i = 0; i < array_razd_p[localStorage.getItem('nm')][localStorage.getItem('nr') - 1].length; i++) {
    
        odin_og = document.getElementById("p_" + i);
        //odin_og_2=document.getElementById("p_" + i+"_2");
        odin_og.innerHTML =//odin_og_2.innerHTML= 
        array_razd_p[localStorage.getItem('nm')][localStorage.getItem('nr') - 1][i];
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
        perem = odin_og.style.top =//odin_og_2.style.top = 
        50+t + 'px';
       odin_og.style.width=// odin_og_2.style.width =
        gl_p.clientWidth-45 + 'px';

       //odin_og_2.style.visibility='hidden'; 
        odin_ogt = document.getElementById("tp_" + i);
        //odin_ogt_2 = document.getElementById("tp_" + i+"_2");
        odin_ogt.style.top =//odin_ogt_2.style.top =
         52+t+'px';
        odin_ogt.style.left =//odin_ogt_2.style.left =
         odin_og.clientWidth +39+ 'px';
    odin_ogt.style.height=//odin_ogt_2.style.height=
    odin_og.clientHeight+2+'px';
   
    //odin_ogt_2.style.visibility='hidden';
        //if (ogl_vibrono == i) {odin_ogt_2.style.visibility='hidden';}
        t += odin_og.clientHeight + 15;
    }
   
    if(odin>0){
        gl_p.style.visibility=ogl_vibrono_copiy.style.visibility=ten_vibronogo_p.style.visibility=//gl_p_za_str.style.visibility = 
        'hidden';
        kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='visible';
        
    }else{
    gl_p.style.visibility = 'visible';
p_0.style.visibility= 
          //  ten1_gl_p.style.visibility=
            ten_gl_p.style.visibility= 
            
            //ogl_vibrono_copiy.style.visibility=
            //ten_vibronogo_p.style.visibility=
            'visible';
    
            //gl_p_za_str.style.visibility = 'hidden';
            kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=
            kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='hidden';
    //gl_p_za_str.style.height =gl_p.style.height = t +50+ 'px';
    text_stranici.style.paddingTop=gl_p.clientHeight-20+'px';

    //---------------------------------------------------------------------------------------------
    //kn_na_str(gl_p.clientHeight+230);
 //svet_nadpisi_1.style.visibility=svet_nadpisi_2.style.visibility=svet_nadpisi_3.style.visibility='hidden';
    
   //---------------------------------------------------------------------------------------------
    
    //---------------------------------------------------------------------------------------------

    //ten1_gl_p.style.position = 
    ten_gl_p.style.position = 'absolute';
    //ten1_gl_p.style.left = 
    ten_gl_p.style.left = '30px';
    //ten1_gl_p.style.top = '202px';
    ten_gl_p.style.top = '202px';
    //ten1_gl_p.style.width = 
    ten_gl_p.style.width = gl_p.clientWidth +2+ 'px';
    //ten1_gl_p.style.height = 
    ten_gl_p.style.height = gl_p.clientHeight + 'px';
    //ten1_gl_p.style.backgroundColor = 
    ten_gl_p.style.backgroundColor = 'black';
    //ten1_gl_p.style.borderRadius = 
    ten_gl_p.style.borderRadius = '10px';
    //ten1_gl_p.style.filter = 'blur(12px)';
    ten_gl_p.style.filter = 'blur(2px)';
    
    
    //---------------------------------------------------------------------------------------------
    //кнопка прячущая за страницу
    
    //kn_za_str.innerHTML = "<div id='ris_kn_za_str'></div><div id='ris_min'></div><div id='ris_v'></div><div id='ris_str'></div>";
    //kn_za_str2.innerHTML="<div id='ris_kn_za_str2'></div><div id='ris_min2'></div><div id='ris_v2'></div><div id='ris_str2'></div>";
    //ris_v.innerHTML = ris_v2.innerHTML = 'v';
    //kn_za_str.style.left=kn_za_str2.style.left = gl_p.clientWidth - 70 + 'px';
 
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
//=================================================================================================
function p_videlen_4(deystvie, idnomer) {
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
function smena_stranic_4() {
     
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
                        zagol.innerHTML='<big><center ><b><big><span style="color:red">'+ar_menu[(nm-0)+1][nr-1][0]+' /</span> <br/><span style="color:green">'+array_razd_p[nm][nr-1][np]+' / </span><br/></big>'+ ar_tp[nm][nr-1][np][nom_t][0]+'</b></center></big><p>';
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
            //ten1_gl_p.style.visibility=
            ten_gl_p.style.visibility= 
            gl_p.style.visibility=
            ogl_vibrono_copiy.style.visibility=
            ten_vibronogo_p.style.visibility=
            //gl_p_za_str.style.visibility =
            'hidden';
            }
            //ten1_gl_p.style.left = 
            ten_gl_p.style.left = gl_p.style.left =smena_izmen_gl+ 'px';
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
                //ten1_gl_p.style.left = 
                ten_gl_p.style.left = gl_p.style.left = smena_izmen_gl + 'px';
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
                    //ten1_gl_p.style.visibility=
                    ten_gl_p.style.visibility=
                    gl_p.style.visibility=
                    ogl_vibrono_copiy.style.visibility=
                    ten_vibronogo_p.style.visibility=
                    'visible';
                    kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='hidden';
                    soderg_razdela_0();
                }else kn_tp_na_str_1.style.visibility=kn_tp_na_str_2.style.visibility=kn_tp_na_str_3.style.visibility=kn_tp_na_str_4.style.visibility=kn_tp_na_str_5.style.visibility=kn_tp_na_str_6.style.visibility=kn_tp_na_str_7.style.visibility=kn_tp_na_str_8.style.visibility='visible';
                on_str_4();
                smena_izmen_gl=osnova.clientWidth;
                if(odin==0){
                    gl_p.style.left= razdel.style.left=razdel_teni.style.left=ten_stranici.style.left = stranica.style.left =smena_izmen_gl+'px';
                    //ten1_gl_p.style.left=
                    ten_gl_p.style.left=smena_izmen_gl+5+'px';
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
                    //ten1_gl_p.style.left=
                    ten_gl_p.style.left= gl_p.style.left=smena_izmen_gl+'px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=smena_izmen_gl+10+'px';
                }
                ten_stranici.style.left = stranica.style.left = smena_izmen_gl+70 + 'px';
            }else {
                smena_rab=false;
                smena_var=0;
                if(odin<1) {
                    //ten1_gl_p.style.left=
                    ten_gl_p.style.left= gl_p.style.left='30px';
                    ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left='40px';
                }
                if(odin==1)ten_stranici.style.top=stranica.style.top= razdel.offsetTop+razdel.clientHeight+10+'px';
                razdel.style.left=razdel_teni.style.left='10px';
                ten_stranici.style.left = stranica.style.left='125px';
            }
            break;
        //---------------------------------------------------------------------------------------
    }
    if(smena_rab)setTimeout('smena_stranic_4()',30);
}

//=================================================================================================
function on_str_4() {
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
            zag.innerHTML=ar_menu[(nm-0)+1][nr-1][0]+' / <br/>'+array_razd_p[nm][nr-1][np]+' / <br/><small>'+ ar_tp[nm][nr-1][np][nom_t][0]+'</small>';
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
        document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML = ar_menu[nm-0 + 1][nr - 1][0];
        //ten1_gl_p.style.left= 
        gl_p.style.left=(osnova.clientWidth-gl_p.clientWidth)/2+'px';
        ogl_vibrono_copiy.style.left=ten_vibronogo_p.style.left=(osnova.clientWidth-gl_p.clientWidth)/2-60+'px';
    }    
}
//=================================================================================================
function on_kn_tp_na_str_4(deistvie_kn_tp,n_kn){
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

function kn_nazad_4(deistvie) {
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