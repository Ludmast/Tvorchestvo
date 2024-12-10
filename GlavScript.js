//=================================================================================================
array_name_sait = ["Творчество", "во всём!"];
predupregd = 'Сайт находится в разработке';
//=================================================================================================
array_menu = ["Главное", "Обучение", "Обсуждение", "Справка"];
array_menu_1 = ["От создателя сайта", "Чего новенького", "Люди-умельцы", "Творческие работы", "Поиск по сайту", "Регистрация"];
array_menu_2 = ["Обучение от умельцев", "Творчество", "Программирование", "Алгебра и Геометрия", "Физика", "Химия", "Биология", "История", "География", "Обществознание", "Экономика", "Астрономия", "Языки стран мира", "Черчение", "Музыка", "Физкультура", "Для самых маленьких","Энциклопедии"];
array_menu_3 = ["Беседы", "Предложения/критика", "Написать письмо"];
array_menu_4 = ["Инструкция по сайту", "Донаты", "Об авторе сайта"];

//=================================================================================================
function Sait_load() {
    bob.style.backgroundColor = '#306090';
    bob.style.overflowX = 'hidden';

    //---------------------------------------------------------------------------------------------
    str = "";
    //список содержимого раздела
    str += "<div id='gl_p' class='c_gl_p'></div>";
    //---------------------------------------------------------------------------------------------
    str += "<span id='okno_s_boku_1'class='c_okno_s_boku'onmouseover='okno_s_boku_videl(0,1)'onmouseout='okno_s_boku_videl(0,2)'onmousedown='okno_s_boku_videl(0,4)'></span><span id='okno_s_boku_2'class='c_okno_s_boku'onmouseover='okno_s_boku_videl(1,1)'onmouseout='okno_s_boku_videl(1,2)'onmousedown='okno_s_boku_videl(1,4)'></span><span id='okno_s_boku_3'class='c_okno_s_boku'onmouseover='okno_s_boku_videl(2,1)'onmouseout='okno_s_boku_videl(2,2)'onmousedown='okno_s_boku_videl(2,4)'></span>"
    //---------------------------------------------------------------------------------------------
    //кнопки на 1 окне 
    str_plus = "<td id='razvert_1'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,0)' onmouseout = 'kn_okna_videlen(2,0)'onmousedown='kn_okna_videlen(4,0)'><span id='razvert_1_a'class='c_razvert_a'></span><span id='razvert_1_b'class='c_razvert_b'></span></td>";
    str_plus += "<td id='svert_1'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,1)' onmouseout = 'kn_okna_videlen(2,1)'onmousedown='kn_okna_videlen(4,1)'><span id='svert_1_a'class='c_svert_a'></span><span id='svert_1_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 1 окна
    str_plus += "<td><span id='svet_1_okna'class='c_svet_okna'></span><span id='ten_1_okna'class='c_ten_okna'></span></td>"

    //1 дополнительное окошко с беседами
    str += "<table id='okno_besedi' class='c_okno'onmousemove='okno_izmen(0,3)'><tr><td id='okno_name_besedi'class='c_okno_name'></td>"+str_plus+"</tr><tr><td id='okno_text_besedi' class='c_okno_text'></td></tr></table>";
    //кнопки на 2 окне 
    str_plus = "<td id='razvert_2'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,2)' onmouseout = 'kn_okna_videlen(2,2)'onmousedown='kn_okna_videlen(4,2)'><span id='razvert_2_a'class='c_razvert_a'></span><span id='razvert_2_b'class='c_razvert_b'></span></td>";
    str_plus += "<td id='svert_2'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,3)' onmouseout = 'kn_okna_videlen(2,3)'onmousedown='kn_okna_videlen(4,3)'><span id='svert_2_a'class='c_svert_a'></span><span id='svert_2_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 2 окна
    str_plus += "<td><span id='svet_2_okna'class='c_svet_okna'></span><span id='ten_2_okna'class='c_ten_okna'></span></td>"
    //2 дополнительное окошко с новостями
    str += "<table id='okno_novosti' class='c_okno'onmousemove='okno_izmen(1,3)'><tr><td id='okno_name_novosti'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_novosti' class='c_okno_text'></td></tr></table>";
    //кнопки на 1 окне 
    str_plus = "<td id='razvert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,4)' onmouseout = 'kn_okna_videlen(2,4)'onmousedown='kn_okna_videlen(4,4)'><span id='razvert_3_a'class='c_razvert_a'></span><span id='razvert_3_b'class='c_razvert_b'></span></td>";
    str_plus += "<td id='svert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,5)' onmouseout = 'kn_okna_videlen(2,5)'onmousedown='kn_okna_videlen(4,5)'><span id='svert_3_a'class='c_svert_a'></span><span id='svert_3_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 3 окна
    str_plus += "<td><span id='svet_3_okna'class='c_svet_okna'></span><span id='ten_3_okna'class='c_ten_okna'></span></td>"
    //3 дополнительное окошко с закладками
    str += "<table id='okno_pometki' class='c_okno'onmousemove='okno_izmen(2,3)'><tr><td id='okno_name_pometki'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_pometki' class='c_okno_text'></td></tr></table>";
    //---------------------------------------------------------------------------------------------
    //тень страницы
    str += "<div id='ten_stranici'></div><div id='ten'></div>"; 
    //---------------------------------------------------------------------------------------------
    //тень содержимого раздела 2
    str += "<div id='ten1_gl_p2'></div>";
    

    //---------------------------------------------------------------------------------------------
    in_load_1.innerHTML = str;

    //---------------------------------------------------------------------------------------------
    
    razvert_1.style.right = '40px';
    svert_1.style.right = '10px';
    razvert_2.style.right = '40px';
    svert_2.style.right = '10px';
    razvert_3.style.right = '40px';
    svert_3.style.right = '10px';
    //---------------------------------------------------------------------------------------------
    okno_besedi.style.visibility = okno_novosti.style.visibility = okno_pometki.style.visibility = 'visible';
    okno_s_boku_1.style.visibility = okno_s_boku_2.style.visibility = okno_s_boku_1.style.visibility = 'hidden';
    //---------------------------------------------------------------------------------------------
    
    //---------------------------------------------------------------------------------------------
    okno_s_boku_1.innerHTML = 'Б е с е д ы';
    okno_s_boku_2.innerHTML = 'Н о в о с т и';
    okno_s_boku_3.innerHTML = 'З а м е т к и';

    //---------------------------------------------------------------------------------------------
    okno_name_besedi.innerHTML = 'Беседы';
    okno_name_novosti.innerHTML = 'Новости';
    okno_name_pometki.innerHTML = 'Заметки';// 'Пометки';
    //ten_besedi.style.left += '2px';
    //ten_besedi.innerHTML = okno_name_besedi.innerHTML;
    //---------------------------------------------------------------------------------------------
    okno_top = 200;
    okno_besedi.style.top = okno_top + 'px';
    okno_top += okno_besedi.clientHeight + 10;
    okno_novosti.style.top = okno_top + 'px';
    okno_top += okno_novosti.clientHeight + 10;
    okno_pometki.style.top = okno_top + 'px';
    //---------------------------------------------------------------------------------------------
    okno_top += okno_pometki.clientHeight + 10;
    okno_s_boku_1.style.top = okno_top + 'px';
    okno_top += okno_s_boku_1.clientHeight + 10;
    okno_s_boku_2.style.top = okno_top+'px';
    okno_top += okno_s_boku_2.clientHeight + 10;
    okno_s_boku_3.style.top = okno_top + 'px';
    //---------------------------------------------------------------------------------------------
    gl_p.innerHTML = 'Содержимое раздела:';
    //---------------------------------------------------------------------------------------------
    ten_stranici.style.width = stranica.clientWidth + 'px';
    
    //---------------------------------------------------------------------------------------------
    stranica_left = 300;
    stranica_top = 220;
    //---------------------------------------------------------------------------------------------
    t = 250;
    text_size = 35;
    //---------------------------------------------------------------------------------------------
    str = "";
    //---------------------------------------------------------------------------------------------
    //содержимое раздела по пунктам
    str += "<div id='ten2_gl_p2'></div><div id='gl_p2'class='c_gl_p'></div><div id='ten_vibronogo_p'></div>";
    for (i = 0; i < ogl; i++) str += "<div id='p_" + i + "'class='c_p' onmouseover='p_videlen(1, " + i + ")' onmouseout='p_videlen(2," + i + ")' onmousedown='p_videlen(4," + i + ")'></div>";
    str += "<div id='ten2'></div>";
    //---------------------------------------------------------------------------------------------
    in_load_2.innerHTML = str;

    //bob.innerHTML = stranica.style.left;
    //---------------------------------------------------------------------------------------------
    str = "";
    //подсветка и сами названия содержания страниц
    for (i = 0; i < ogl; i++) {
        
        odin_og = document.getElementById("p_" + i);
        odin_og.innerHTML = array_razd_p[razdel][i];
        if (ogl_vibrono == i) {
            odin_og.style.top = t - 2 + 'px';
            odin_og.style.backgroundColor = '#3090c0';
            odin_og.style.color = '#b0f0e0';
            odin_og.style.left = stranica_left-245+'px';
            odin_og.style.width = '250px';
            odin_og.style.fontSize = '28px';
            odin_og.style.paddingLeft = '5px';
            odin_og.style.border = '2px solid #104070';
            odin_og.style.borderTopRightRadius = '10px';
            odin_og.style.borderBottomRightRadius = '10px';
            ten_vibronogo_p.style.left = odin_og.style.left;
            ten_vibronogo_p.style.top = t + 'px';
            ten_vibronogo_p.style.height = odin_og.clientHeight + 4 + 'px';
            perem = t + 2;
            t -= 4;
        } else {
            odin_og.style.top = t + 'px';
            odin_og.onmousemove = 'p_videlen(1,i)';
        }
        perem = odin_og.clientHeight + 3;
        
        str += "<div id='ten_ot_stranici_na_p_" + i + "' class='ten_str' style='top:" + t + "px;height:" + perem + "px;'></div>";
        t += odin_og.clientHeight + 15;
    }
    //---------------------------------------------------------------------------------------------
    
    gl_p2.style.height = gl_p.style.height = t - 200 + 'px';
    gl_p2.innerHTML = gl_p.innerHTML;
    gl_p2.style.visibility = 'hidden';

    ten1_gl_p2.style.position = ten2_gl_p2.style.position = 'absolute';
    ten1_gl_p2.style.left = ten2_gl_p2.style.left = '12px';
    ten1_gl_p2.style.top = ten2_gl_p2.style.top = '202px';
    ten1_gl_p2.style.width = ten2_gl_p2.style.width = gl_p2.clientWidth + 'px';
    ten1_gl_p2.style.height = ten2_gl_p2.style.height = gl_p2.clientHeight+'px';
    ten1_gl_p2.style.backgroundColor = ten2_gl_p2.style.backgroundColor = 'black';
    ten1_gl_p2.style.visibility = ten2_gl_p2.style.visibility = 'hidden';
    ten1_gl_p2.style.borderRadius = ten2_gl_p2.style.borderRadius = '10px';
    ten1_gl_p2.style.filter = 'blur(12px)';
    ten2_gl_p2.style.filter = 'blur(2px)';
    //---------------------------------------------------------------------------------------------

    //тень под названием раздела
    str += "<div id='razdel_teni'></div>";
    //---------------------------------------------------------------------------------------------
    //название раздела
    str += "<div id='razdel'></div>";

    
    //---------------------------------------------------------------------------------------------
    //тень верхней полоски меню
    str += "<div id='ten_menu'></div>";
    //---------------------------------------------------------------------------------------------
    //копия кнопки на 1 окне 
    str_plus = "<td id='kopiy_razvert_1'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,6)' onmouseout = 'kn_okna_videlen(2,6)'onmousedown='kn_okna_videlen(4,6)'><span id='kopiy_razvert_1_a'class='c_razvert_c'></span><span id='kopiy_razvert_1_b'class='c_razvert_d'></span></td>";
    str_plus += "<td id='kopiy_svert_1'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,7)' onmouseout = 'kn_okna_videlen(2,7)'onmousedown='kn_okna_videlen(4,7)'><span id='kopiy_svert_1_a'class='c_svert_a'></span><span id='kopiy_svert_1_b'class='c_svert_b'></span></td>";
    //копия свет и тень на заголовке 1 окна
    str_plus += "<td><span id='kopiy_svet_1_okna'class='c_svet_okna'></span><span id='kopiy_ten_1_okna'class='c_ten_okna'></span></td>"
    //копия 1 дополнительное окошко с беседами
    str += "<table id='kopiy_okno_besedi' class='c_kopiy_okno'onmousemove='okno_izmen(3,3)'onmousedown='okno_izmen(3,4)'onmouseup='okno_izmen(3,5)'><tr><td id='kopiy_okno_name_besedi'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='kopiy_okno_text_besedi' class='c_okno_text'></td></tr></table>";
    //копия кнопки на 2 окне
    str_plus = "<td id='kopiy_razvert_2'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,8)' onmouseout = 'kn_okna_videlen(2,8)'onmousedown='kn_okna_videlen(4,8)'><span id='kopiy_razvert_2_a'class='c_razvert_c'></span><span id='kopiy_razvert_2_b'class='c_razvert_d'></span></td>";
    str_plus += "<td id='kopiy_svert_2'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,9)' onmouseout = 'kn_okna_videlen(2,9)'onmousedown='kn_okna_videlen(4,9)'><span id='kopiy_svert_2_a'class='c_svert_a'></span><span id='kopiy_svert_2_b'class='c_svert_b'></span></td>";
    //копия свет и тень на заголовке 2 окна
    str_plus += "<td><span id='kopiy_svet_2_okna'class='c_svet_okna'></span><span id='kopiy_ten_2_okna'class='c_ten_okna'></span></td>"
    //копия 2 дополнительное окошко с новостями
    str += "<table id='kopiy_okno_novosti' class='c_kopiy_okno'onmousemove='okno_izmen(4,3)'onmousedown='okno_izmen(4,4)'onmouseup='okno_izmen(4,5)'><tr><td id='kopiy_okno_name_novosti'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='kopiy_okno_text_novosti' class='c_kopiy_okno_text'></td></tr></table>";
    //копия кнопки на 1 окне
    str_plus = "<td id='kopiy_razvert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,10)' onmouseout = 'kn_okna_videlen(2,10)'onmousedown='kn_okna_videlen(4,10)'><span id='kopiy_razvert_3_a'class='c_razvert_c'></span><span id='kopiy_razvert_3_b'class='c_razvert_d'></span></td>";
    str_plus += "<td id='kopiy_svert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,11)' onmouseout = 'kn_okna_videlen(2,11)'onmousedown='kn_okna_videlen(4,11)'><span id='kopiy_svert_3_a'class='c_svert_a'></span><span id='kopiy_svert_3_b'class='c_svert_b'></span></td>";
    //копия свет и тень на заголовке 3 окна
    str_plus += "<td><span id='kopiy_svet_3_okna'class='c_svet_okna'></span><span id='kopiy_ten_3_okna'class='c_ten_okna'></span></td>"
    //копия 3 дополнительное окошко с закладками
    str += "<table id='kopiy_okno_pometki' class='c_kopiy_okno'onmouseout='okno_izmen(5,2)' onmousemove='okno_izmen(5,3)'onmousedown='okno_izmen(5,4)'onmouseup='okno_izmen(5,5)'><tr><td id='kopiy_okno_name_pometki'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='kopiy_okno_text_pometki' class='c_okno_text'></td></tr></table>";

    //---------------------------------------------------------------------------------------------
    //верхняя полоска меню
    str += "<table><tr><td id='menu_line'onmouseout = 'menu_(2,0,0)'><table id = 'menu' onmouseout = 'menu_(2,0,0)'><tr><td id = 'm_g' class='c_m_g' onmouseover = 'menu_(1,0,0)' onmouseout = 'menu_(2,0,0)' onmousemove='menu_(3,0,0)'></td ><td id='m_razdelitel'align='center'>|</td><td id='m_y' class='c_m_g' onmouseover='menu_(1,0,1)' onmouseout='menu_(2,0,1)'onmousemove='menu_(3,0,1)'></td><td align='center'>|</td><td id='m_os' class='c_m_g' onmouseover='menu_(1,0,2)' onmouseout='menu_(2,0,2)'onmousemove='menu_(3,0,2)'></td><td align='center'>|</td><td id='m_s' class='c_m_g' onmouseover='menu_(1,0,3)' onmouseout='menu_(2,0,3)'onmousemove='menu_(3,0,3)'></td></tr></table ></td></tr></table>";
    //---------------------------------------------------------------------------------------------
    //тени названия сайта
    str += "<div id='name_sait1_teni' ></div><div id='name_sait2_teni'style='filter:blur(7px)'></div>";
    //название сайта
    str += "<div id='name_sait1'></div><div id='name_sait2'></div>";
    //---------------------------------------------------------------------------------------------

    //развёрнутые списки менюшек
    str += "<div id='m1'></div><div id='m2'></div><div id='m3'></div><div id='m4'></div>";
    //помошник
    str += "<div id='ten_line_pomoshnik'></div>";
    str += "<span id='pomoshnik'></span><hr id='line_pomoshnik' color='#80b0ff' />";
    //предупреждение
    str += "<div id='predupr'>" + predupregd + "</div>";
    in_load_3.innerHTML = str;

    //---------------------------------------------------------------------------------------------
    ten_p = document.getElementById('ten_ot_stranici_na_p_' + ogl_vibrono).style.visibility = 'hidden';
    //---------------------------------------------------------------------------------------------
    document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML = array_menu_1[0]; //razdel.innerHTML;
    //---------------------------------------------------------------------------------------------

    //копии дополнительных окон
    okb = top_ok(0);
    okn = top_ok(1);
    okp = top_ok(2);
    ten.innerHTML = "<div id='ten_kop_ok_bes'class='c_ten'></div><div id='ten_kop_ok_nov'class='c_ten'></div><div id='ten_kop_ok_pom'class='c_ten'></div>";
    ten2.innerHTML = "<div id='ten2_kop_ok_bes'class='c_ten'></div><div id='ten2_kop_ok_nov'class='c_ten'></div><div id='ten2_kop_ok_pom'class='c_ten'></div>";
    ten2_kop_ok_bes.style.filter = ten2_kop_ok_nov.style.filter = ten2_kop_ok_pom.style.filter = 'blur(2px)';
    okno_top = 170;
    kopiy_okno_besedi.style.top = okb - 20 + 'px';
    
    kopiy_okno_besedi.style.left = osnova.clientWidth - 240 - kopiy_okno_besedi.clientWidth + 'px';
    kopiy_okno_besedi.style.height = okno_besedi.clientHeight + 'px';
    
    kopiy_okno_besedi.style.visibility = kopiy_okno_name_besedi.style.visibility = kopiy_okno_text_besedi.style.visibility = 'hidden';
    
    
    //bob.innerHTML = osnova.clientWidth;
    okno_top += 30;
    kopiy_okno_novosti.style.top = okn - 20 + 'px';
    kopiy_okno_novosti.style.left = osnova.clientWidth - 220 - kopiy_okno_novosti.clientWidth + 'px';
    kopiy_okno_novosti.style.height = okno_novosti.clientHeight + 'px';
    kopiy_okno_novosti.style.visibility = kopiy_okno_name_novosti.style.visibility = kopiy_okno_text_novosti.style.visibility = 'hidden';
    okno_top += 30;
    kopiy_okno_pometki.style.top = okp-20 + 'px';
    kopiy_okno_pometki.style.left = osnova.clientWidth - 200 - kopiy_okno_pometki.clientWidth + 'px';
    kopiy_okno_pometki.style.height = okno_pometki.clientHeight + 'px';
    kopiy_okno_pometki.style.visibility = kopiy_okno_name_pometki.style.visibility = kopiy_okno_text_pometki.style.visibility = 'hidden';
    kopiy_razvert_1.style.right = '40px';
    kopiy_svert_1.style.right = '10px';
    kopiy_razvert_2.style.right = '40px';
    kopiy_svert_2.style.right = '10px';
    kopiy_razvert_3.style.right = '40px';
    kopiy_svert_3.style.right = '10px';
    
    kopiy_okno_name_besedi.innerHTML = okno_name_besedi.innerHTML;
    kopiy_okno_name_novosti.innerHTML = okno_name_novosti.innerHTML;
    kopiy_okno_name_pometki.innerHTML = okno_name_pometki.innerHTML;
    //ten_p.style.top = ;
    //---------------------------------------------------------------------------------------------
    line_pomoshnik.style.top = innerHeight - 33 + 'px';
    pomoshnik.innerHTML = "<span id='ten_pomoshnika'></span><span id='telo'></span><span id='svet_tela'></span><span id='glaz_l'></span><span id='glaz_r'></span><span id='guba_1'></span>";
    glaz_l.innerHTML = "<span id='svet_glaz_l' class='c_svet_glaz'></span><span id='sheka_l'></span>";
    glaz_r.innerHTML = "<span id='svet_glaz_r' class='c_svet_glaz'></span><span id='sheka_r'></span>";
    //---------------------------------------------------------------------------------------------
    name_sait1.innerText = array_name_sait[0];
    name_sait1_teni.innerText = array_name_sait[0];
    name_sait2.innerText = array_name_sait[1];
    name_sait2_teni.innerText = array_name_sait[1];
    ns_a = 2; ns_b = 1; ns_i = 0;
    ns_c = ns_d = 0;
    //---------------------------------------------------------------------------------------------
    m_g.innerHTML = array_menu[0];
    m_y.innerHTML = array_menu[1];
    m_os.innerHTML = array_menu[2];
    m_s.innerHTML = array_menu[3];
    //---------------------------------------------------------------------------------------------
    menu_width = 260;

    m1_left = 22; m2_left = m1_left + m_g.clientWidth + m_razdelitel.clientWidth + 4; m3_left = m2_left + m_y.clientWidth + m_razdelitel.clientWidth + 4; m4_left = m3_left + m_os.clientWidth + m_razdelitel.clientWidth + 4; m_b = 1;
    ms = [["m_g", 7, m1_left, 4], ["m_y", 19, m2_left, 4], ["m_os", 4, m3_left, 2], ["m_s", 4, m4_left, 2]];
    //---------------------------------------------------------------------------------------------
    str = "<div id='ten_m'></div>";
    str += "<div id='m_g_0'class='c_m_o'onmouseover='menu_(1,1,0)'onmouseleave='menu_(2,1,0)'onmousemove='menu_(3,1,0)'>"
    for (i = 1; i < ms[0][1]; i++)str += "<div id='m_g_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",0)'onmouseout='menu_(2," + (i + 1) + ",0)'onclick='menu_(4," + (i + 1) + ",0)'></div>";
    str += "<hr id='m_g_l_0'class='c_m_line_0'color='black'size='1'/><hr id='m_g_l_1'class='c_m_line_1'color='white'size='1'/><hr id='m_g_l_2'class='c_m_line_2'color='black'size='1'/><hr id='m_g_l_3'class='c_m_line_3'color='white'size='1'/></div>";
    m1.innerHTML = str;
    for (i = 0; i < ms[0][1] - 1; i++)document.getElementById(ms[0][0] + '_' + (i + 1)).innerText = array_menu_1[i];

    //---------------------------------------------------------------------------------------------
    str = "<div id='m_y_0'class='c_m_o'onmouseover='menu_(1,1,1)'onmouseout='menu_(2,1,1)'onmousemove='menu_(3,1,1)'>"
    for (i = 1; i < ms[1][1]; i++)str += "<div id='m_y_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",1)'onmouseout='menu_(2," + (i + 1) + ",1)'onclick='menu_(4," + (i + 1) + ",1)'></div>";
    str += "<hr id='m_y_l_0' class='c_m_line_0' color='black' size='1'/><hr id='m_y_l_1' class='c_m_line_1' color='white' size='1'/><hr id='m_y_l_2'class='c_m_line_4' color='black' size='1'/><hr id='m_y_l_3'class='c_m_line_5' color='white' size='1'/></div > ";
    m2.innerHTML = str;
    for (i = 0; i < ms[1][1] - 1; i++)document.getElementById(ms[1][0] + '_' + (i + 1)).innerText = array_menu_2[i];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_os_0'class='c_m_o'onmouseover='menu_(1,1,2)'onmouseout='menu_(2,1,2)'onmousemove='menu_(3,1,2)'>"
    for (i = 1; i < ms[2][1]; i++)str += "<div id='m_os_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",2)'onmouseout='menu_(2," + (i + 1) + ",2)'onclick='menu_(4," + (i + 1) + ",2)'></div>";
    str += "<hr id='m_os_l_0' class='c_m_line_0' color='black' size='1'/><hr id='m_os_l_1' class='c_m_line_1' color='white' size='1'/></div > ";
    m3.innerHTML = str;
    for (i = 0; i < ms[2][1] - 1; i++)document.getElementById(ms[2][0] + '_' + (i + 1)).innerText = array_menu_3[i];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_s_0'class='c_m_o'onmouseover='menu_(1,1,3)'onmouseout='menu_(2,1,3)'onmousemove='menu_(3,1,3)'>"
    for (i = 1; i < ms[3][1]; i++)str += "<div id='m_s_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",3)'onmouseout='menu_(2," + (i + 1) + ",3)'onclick='menu_(4," + (i + 1) + ",3)'></div>";
    str += "<hr id='m_s_l_0'class='c_m_line_0' color='black' size='1'/><hr id='m_s_l_1'class='c_m_line_1' color='white' size='1'/></div > ";
    m4.innerHTML = str;
    for (i = 0; i < ms[3][1] - 1; i++)document.getElementById(ms[3][0] + '_' + (i + 1)).innerText = array_menu_4[i];
    //---------------------------------------------------------------------------------------------
    

    for (j = 0; j < 4; j++) {
        m = [];
        for (i = 0; i < ms[j][1]; i++) { m[i] = document.getElementById(ms[j][0] + "_" + i); }
        m[0].style.height = (ms[j][1] - 1) * text_size + 'px';
        m[0].style.left = ms[j][2] + 'px';
        mm = document.getElementById(ms[j][0]).clientWidth;
        
        //bob.innerHTML = mm;
        if (m[0].clientWidth <= mm) m[0].style.width = mm + 10 + 'px';

        t = 2;
        for (i = 1; i < m.length; i++) {
            m[i].style.top = t + 'px';
            t += text_size;
        }
    }
    m_i = 0;
    //---------------------------------------------------------------------------------------------
    //setTimeout('all_control()', 10);
    


    stranici_right = stranica_left + stranica.clientHeight;
    stranica_left_p = stranica_left;
    deform_stranica_right_move = false;
    deform_stranica_right_down = false;
    deform_stranica_left_down = false;
    gl_p_vis_hidden = false;
    deform_okno_besedi_down = false;
    deform_okno_novosti_down = false;
    deform_okno_pometki_down = false;
    deform_kop_ok_bes_w_down = false;
    deform_kop_ok_nov_w_down = false;
    deform_kop_ok_pom_w_down = false;
    deform_kop_ok_bes_h_down = false;
    deform_kop_ok_nov_h_down = false;
    deform_kop_ok_pom_h_down = false;

    peremeshenie_okno_besedi_down = false;
    peremeshenie_okno_novosti_down = false;
    peremeshenie_okno_pometki_down = false;
    move_okno_besedi = false;
    move_okno_novosti = false;
    move_okno_pometki = false;

    oks1 = top_ok(6);
    oks2 = top_ok(7);
    oks3 = top_ok(8);
    kokbt = top_ok(3);
    kokbl = left_ok(3);
    koknt = top_ok(4);
    koknl = left_ok(4);
    kokpt = top_ok(5);
    kokpl = left_ok(5);
    
    
}
//=================================================================================================
function p_videlen(deystvie, idnomer) {
    videl_chast = '#6080c0';
    ne_videl_chast = '#a0c0ff';
    videl_text = '#c0e0ff';
    ne_videl_text = '#104070';
    odin_og = document.getElementById("p_" + idnomer);
    switch (deystvie) {
        //-----------------------------------------------------------------------------------------
        case 1://over
            odin_og.style.cursor = 'pointer';
            if (ogl_vibrono != idnomer) {
                odin_og.style.backgroundColor = videl_chast;
                odin_og.style.color = videl_text;
            }
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out
            if (ogl_vibrono != idnomer) {
                odin_og.style.backgroundColor = ne_videl_chast;
                odin_og.style.color = ne_videl_text;
            }
            break;
        //-----------------------------------------------------------------------------------------
        case 4://down
            if (ogl_vibrono != idnomer) {
                perem = odin_og.style.top.slice(0, odin_og.style.top.length - 2);
                ten_vibronogo_p.style.top = perem + 'px';
                perem -= 4;
                odin_og.style.top = perem + 'px';
                odin_og.style.backgroundColor = '#3090c0';
                odin_og.style.color = '#b0f0e0';
                odin_og.style.left = stranica_left_p- 245 + 'px';
                odin_og.style.width = '250px';
                odin_og.style.fontSize = '28px';
                odin_og.style.paddingLeft = '5px';
                odin_og.style.border = '2px solid #104070';
                odin_og.style.borderTopRightRadius = '10px';
                odin_og.style.borderBottomRightRadius = '10px';

                ten_vibronogo_p.style.height = odin_og.clientHeight + 4 + 'px';
                document.getElementById('ten_ot_stranici_na_p_' + ogl_vibrono).style.visibility = 'visible';
                odin_og = document.getElementById('p_' + ogl_vibrono);
                odin_og.style.width = '220px';
                perem = odin_og.style.top.slice(0, odin_og.style.top.length - 2);
                perem -= 0;
                perem += 4;
                odin_og.style.top = perem + 'px';
                odin_og.style.fontSize = '24px';
                odin_og.style.left = stranica_left_p-230+'px';
                odin_og.style.color = '#104070';
                if (gl_p2.style.visibility == 'hidden') {
                    ten_vibronogo_p.style.width = '245px';
                    odin_og.style.borderRight = '0px';
                    odin_og.style.borderTopRightRadius = '0px';
                    odin_og.style.borderBottomRightRadius = '0px';
                } else {
                    ten_vibronogo_p.style.width = '265px';
                    odin_og.style.border = '2px solid #104070';
                    odin_og.style.borderRadius = '10px';
                }
                odin_og.style.backgroundColor = '#a0c0ff';
                ogl_vibrono = idnomer;
                document.getElementById('ten_ot_stranici_na_p_' + ogl_vibrono).style.visibility = 'hidden';
            }
            break;
        //-----------------------------------------------------------------------------------------   
    }
}
//=================================================================================================
function izmen_soderg_p(visible) {
    for (i = 0; i < ogl; i++) {
        
        if (visible == 0) {
            odin_og = document.getElementById("p_" + i);
            if (ogl_vibrono == i) {
                ten_vibronogo_p.style.width = '265px';
            } else {
                odin_og.style.borderRadius = '10px';
                odin_og.style.border = '2px solid #104070';
                document.getElementById('ten_ot_stranici_na_p_' + i).style.visibility = 'hidden';
            }
        }
        else {
            odin_og = document.getElementById("p_" + i);
            if (ogl_vibrono == i) {
                ten_vibronogo_p.style.width = '245px';
            } else {
                odin_og.style.borderRight = '0px';
                odin_og.style.borderTopRightRadius = '0px';
                odin_og.style.borderBottomRightRadius = '0px';
                document.getElementById('ten_ot_stranici_na_p_' + i).style.visibility = 'visible';
            }
        }
    }
}
//=================================================================================================
function perem_soderg_p() {
    for (i = 0; i < ogl; i++) {
        odin_og = document.getElementById("p_" + i);
        if (ogl_vibrono == i) {
            odin_og.style.left = stranica_left_p - 245 + 'px';
            ten_vibronogo_p.style.left = odin_og.style.left;

        } else {
            odin_og.style.left = stranica_left_p - 230 + 'px';
            document.getElementById('ten_ot_stranici_na_p_' + i).style.left = stranica_left_p - 3 + 'px';

        }
    }

}
//=================================================================================================
function all_control(deistvie) {
    {
        if (m_g_0.style.visibility == 'visible' || m_y_0.style.visibility == 'visible' || m_os_0.style.visibility == 'visible' || m_s_0.style.visibility == 'visible') {
            if (m_g_0.style.visibility == 'visible') menu_(3, 1, 0);
            if (m_y_0.style.visibility == 'visible') menu_(3, 1, 1);
            if (m_os_0.style.visibility == 'visible') menu_(3, 1, 2);
            if (m_s_0.style.visibility == 'visible') menu_(3, 1, 3);
        } else {
            switch (deistvie) {
                //---------------------------------------------------------------------------------------------
                case 3://move
                    //if (move_okno_besedi == false || move_okno_novosti==false || move_okno_pometki == false) {
                    if (deform_stranica_right_down) {
                        if (event.clientX - stranica_left < 200) stranica.style.width = '200px';
                        else if (osnova.clientWidth - 80 < event.clientX) stranica.style.width = osnova.clientWidth - 80 - stranica_left + 'px';
                        else stranica.style.width = event.clientX - stranica_left + 'px';
                        ten_stranici.style.width = stranica.style.width;
                    }
                    else if (deform_stranica_left_down) {

                        if (event.clientX < 80) {
                            stranica.style.left = '80px';
                            stranica.style.width = stranica.clientWidth + stranica_left - 80 + 'px';
                            stranica_left = 80;
                        }
                        else if (event.clientX > 300) {
                            stranica.style.left = '300px';
                            stranica.style.width = stranica.clientWidth + stranica_left - 300 + 'px';
                            stranica_left_p=stranica_left = 300;
                            
                            gl_p.style.left = '50px';
                            perem_soderg_p();
                        }
                        else {
                            stranica.style.left = event.clientX + 'px';
                            stranica.style.width = stranica.clientWidth + stranica_left - event.clientX + 'px';
                            stranica_left = event.clientX;

                            if (gl_p_vis_hidden == false && stranica_left > 260) {
                                stranica_left_p = stranica_left;
                                gl_p.style.left = stranica_left_p - 250 + 'px';
                                perem_soderg_p();
                            }
                            else if (gl_p_vis_hidden && stranica_left > 260) {
                                gl_p_vis_hidden = false;
                                gl_p2.style.visibility = 'hidden';
                                gl_p.style.visibility = 'visible';
                                gl_p.style.left = stranica_left - 250 + 'px';
                                ten1_gl_p2.style.visibility = ten2_gl_p2.style.visibility = 'hidden';
                                stranica_left_p = stranica_left;
                                perem_soderg_p();
                                izmen_soderg_p(1);
                            }
                            else {
                                if (gl_p_vis_hidden == false) {
                                    gl_p_vis_hidden = true;
                                    gl_p.style.visibility = 'hidden';
                                    gl_p2.style.left = '10px';
                                    gl_p2.style.visibility = 'visible';
                                    ten1_gl_p2.style.visibility = ten2_gl_p2.style.visibility = 'visible';
                                    stranica_left_p = 260;

                                    perem_soderg_p();
                                    izmen_soderg_p(0);
                                }
                            }
                        }
                        ten_stranici.style.left = stranica.style.left;
                        ten_stranici.style.width = stranica.style.width;
                    }

                    else if (deform_okno_besedi_down && okno_besedi.style.visibility == 'visible') {
                        perem = okno_besedi.clientHeight;
                        if (event.clientY - okb < 100) okno_besedi.style.height = '100px';
                        else okno_besedi.style.height = event.clientY - okb + 'px';
                        okno_izmen_top(0, okno_besedi.clientHeight - perem);
                    }
                    else if (deform_okno_novosti_down && okno_novosti.style.visibility == 'visible') {
                        perem = okno_novosti.clientHeight;
                        if (event.clientY - okn < 100) okno_novosti.style.height = '100px';
                        else okno_novosti.style.height = event.clientY - okn + 'px';
                        okno_izmen_top(1, okno_novosti.clientHeight - perem);
                    }
                    else if (deform_okno_pometki_down && okno_pometki.style.visibility == 'visible') {
                        perem = okno_pometki.clientHeight;
                        if (event.clientY - okp < 100) okno_pometki.style.height = '100px';
                        else okno_pometki.style.height = event.clientY - okp + 'px';
                        okno_izmen_top(2, okno_pometki.clientHeight - perem);
                    }
                    //--------------------------------------------------------------------------
                    else if (deform_kop_ok_bes_w_down && kopiy_okno_besedi.style.visibility == 'visible') {
                        perem = kopiy_okno_besedi.clientWidth;
                        if (event.clientX - kokbl < 200) kopiy_okno_besedi.style.width = '200px';
                        else kopiy_okno_besedi.style.width = event.clientX - kokbl + 'px';
                        ten_kop_ok_bes.style.width = ten2_kop_ok_bes.style.width = kopiy_okno_besedi.style.width;

                        //okno_izmen_top(3, kopiy_okno_besedi.clientWidth - perem);
                    }
                    else if (deform_kop_ok_nov_w_down && kopiy_okno_novosti.style.visibility == 'visible') {
                        perem = kopiy_okno_novosti.clientWidth;
                        if (event.clientX - koknl < 200) kopiy_okno_novosti.style.width = '200px';
                        else kopiy_okno_novosti.style.width = event.clientX - koknl + 'px';
                        ten_kop_ok_nov.style.width = ten2_kop_ok_nov.style.width= kopiy_okno_novosti.style.width;
                        //okno_izmen_top(4, kopiy_okno_novosti.clientWidth - perem);
                    }
                    else if (deform_kop_ok_pom_w_down && kopiy_okno_pometki.style.visibility == 'visible') {
                        perem = kopiy_okno_pometki.clientWidth;
                        if (event.clientX - kokpl < 200) kopiy_okno_pometki.style.width = '200px';
                        else kopiy_okno_pometki.style.width = event.clientX - kokpl + 'px';
                        ten_kop_ok_pom.style.width = ten2_kop_ok_pom.style.width=kopiy_okno_pometki.style.width;
                        //okno_izmen_top(5, kopiy_okno_pometki.clientWidth - perem);
                    }
                    //--------------------------------------------------------------------------
                    else if (deform_kop_ok_bes_h_down && kopiy_okno_besedi.style.visibility == 'visible') {
                        perem = kopiy_okno_besedi.clientHeight;
                        if (event.clientY - kokbt < 100) kopiy_okno_besedi.style.height = '100px';
                        else kopiy_okno_besedi.style.height = event.clientY - kokbt + 'px';
                        ten_kop_ok_bes.style.height = ten2_kop_ok_bes.style.height = kopiy_okno_besedi.style.height;
                        //okno_izmen_left(3, kopiy_okno_besedi.clientHeight - perem);
                    }
                    else if (deform_kop_ok_nov_h_down && kopiy_okno_novosti.style.visibility == 'visible') {
                        perem = kopiy_okno_novosti.clientHeight;
                        if (event.clientY - koknt < 100) kopiy_okno_novosti.style.height = '100px';
                        else kopiy_okno_novosti.style.height = event.clientY - koknt + 'px';
                        ten_kop_ok_nov.style.height = ten2_kop_ok_nov.style.height = kopiy_okno_novosti.style.height;
                        //okno_izmen_top(4, kopiy_okno_novosti.clientWidth - perem);
                    }
                    else if (deform_kop_ok_pom_h_down && kopiy_okno_pometki.style.visibility == 'visible') {
                        perem = kopiy_okno_pometki.clientHeight;
                        if (event.clientY - kokpt < 100) kopiy_okno_pometki.style.height = '100px';
                        else kopiy_okno_pometki.style.height = event.clientY - kokpt + 'px';
                        ten_kop_ok_pom.style.height = ten2_kop_ok_pom.style.height = kopiy_okno_pometki.style.height;
                        //okno_izmen_top(5, kopiy_okno_pometki.clientWidth - perem);
                    }
                    //---------------------------------------------------------------------------------------------
                    if (event.clientY > stranica_top && (event.clientX > stranica_left - 10 && event.clientX < stranica_left+5) || (event.clientX > stranica_left + stranica.clientWidth - 5 && event.clientX < stranica_left + stranica.clientWidth + 10)) {
                        osnova.style.cursor = stranica.style.cursor = 'ew-resize';
                    }
                    else if (event.clientX > kokbl + kopiy_okno_besedi.clientWidth - 5 && event.clientX < kokbl + kopiy_okno_besedi.clientWidth + 5 && event.clientY > kokbt + 20 && event.clientY < kokbt + kopiy_okno_besedi.clientHeight && kopiy_okno_besedi.style.visibility == 'visible') osnova.style.cursor = 'ew-resize';
                    else if (event.clientX > koknl + kopiy_okno_novosti.clientWidth - 5 && event.clientX < koknl + kopiy_okno_novosti.clientWidth + 5 && event.clientY > koknt + 20 && event.clientY < koknt + kopiy_okno_novosti.clientHeight && kopiy_okno_novosti.style.visibility == 'visible') osnova.style.cursor = 'ew-resize';
                    else if (event.clientX > kokpl + kopiy_okno_pometki.clientWidth - 5 && event.clientX < kokpl + kopiy_okno_pometki.clientWidth + 5 && event.clientY > kokpt + 20 && event.clientY < kokpt + kopiy_okno_pometki.clientHeight && kopiy_okno_pometki.style.visibility == 'visible') osnova.style.cursor = 'ew-resize';
                    else if (event.clientY > kokbt + kopiy_okno_besedi.clientHeight - 5 && event.clientY < kokbt + kopiy_okno_besedi.clientHeight + 5 && event.clientX > kokbl && event.clientX < kokbl + kopiy_okno_besedi.clientWidth && kopiy_okno_besedi.style.visibility == 'visible') osnova.style.cursor = 'ns-resize';
                    else if (event.clientY > koknt + kopiy_okno_novosti.clientHeight - 5 && event.clientY < koknt + kopiy_okno_novosti.clientHeight + 5 && event.clientX > koknl && event.clientX < koknl + kopiy_okno_novosti.clientWidth && kopiy_okno_novosti.style.visibility == 'visible') osnova.style.cursor = 'ns-resize';
                    else if (event.clientY > kokpt + kopiy_okno_pometki.clientHeight - 5 && event.clientY < kokpt + kopiy_okno_pometki.clientHeight + 5 && event.clientX > kokpl && event.clientX < kokpl + kopiy_okno_pometki.clientWidth && kopiy_okno_pometki.style.visibility == 'visible') osnova.style.cursor = 'ns-resize';
                    else if (event.clientX > osnova.clientWidth - 250 && event.clientX < osnova.clientWidth - 5) {
                        if (event.clientY > okb + okno_besedi.clientHeight - 5 && event.clientY < okb + okno_besedi.clientHeight + 5 && okno_besedi.style.visibility == 'visible') osnova.style.cursor = 'ns-resize';
                        else if(event.clientY > okn + okno_novosti.clientHeight - 5 && event.clientY < okn + okno_novosti.clientHeight + 5 && okno_novosti.style.visibility == 'visible') osnova.style.cursor = 'ns-resize';
                        else if (event.clientY > okp + okno_pometki.clientHeight - 5 && event.clientY < okp + okno_pometki.clientHeight + 5 && okno_pometki.style.visibility == 'visible') osnova.style.cursor = 'ns-resize';
                        else osnova.style.cursor = 'default';
                    }
                    

                    else osnova.style.cursor = stranica.style.cursor = 'default';

                    //}
                    if (peremeshenie_okno_besedi_down) {
                        kopiy_okno_besedi.style.top = event.clientY - kop_ok_bes_izmen_Y + 'px';
                        kopiy_okno_besedi.style.left = event.clientX - kop_ok_bes_izmen_X + 'px';
                        kokbt = top_ok(3);
                        kokbl = left_ok(3);

                        ten_kop_ok_bes.style.top = ten2_kop_ok_bes.style.top = kokbt + 3 + 'px';
                        ten_kop_ok_bes.style.left = ten2_kop_ok_bes.style.left = kokbl + 2 + 'px';

                    }
                    if (peremeshenie_okno_novosti_down) {
                        kopiy_okno_novosti.style.top = event.clientY - kop_ok_nov_izmen_Y + 'px';
                        kopiy_okno_novosti.style.left = event.clientX - kop_ok_nov_izmen_X + 'px';
                        koknt = top_ok(4);
                        koknl = left_ok(4);

                        ten_kop_ok_nov.style.top = ten2_kop_ok_nov.style.top = koknt + 3 + 'px';
                        ten_kop_ok_nov.style.left = ten2_kop_ok_nov.style.left = koknl + 2 + 'px';

                    }
                    if (peremeshenie_okno_pometki_down) {
                        kopiy_okno_pometki.style.top = event.clientY - kop_ok_pom_izmen_Y + 'px';
                        kopiy_okno_pometki.style.left = event.clientX - kop_ok_pom_izmen_X + 'px';
                        kokpt = top_ok(5);
                        kokpl = left_ok(5);

                        ten_kop_ok_pom.style.top = ten2_kop_ok_pom.style.top = kokpt + 3 + 'px';
                        ten_kop_ok_pom.style.left = ten2_kop_ok_pom.style.left = kokpl + 2 + 'px';

                    }
                    //---------------------------------------------------------------------------------------------
                    break;
                //---------------------------------------------------------------------------------------------
                case 4://down
                   // bob.innerHTML = okno_besedi.style.top;
                    if (event.clientY > stranica_top && (event.clientX > stranica_left + stranica.clientWidth - 5 && event.clientX < stranica_left + stranica.clientWidth + 10)) {
                        stranica.style.cursor = 'ew-resize';
                        event.returnValue = false;
                        deform_stranica_right_down = true;
                    } else if (event.clientY > stranica_top && (event.clientX > stranica_left - 10 && event.clientX < stranica_left + 5)) {
                        stranica.style.cursor = 'ew-resize';
                        event.returnValue = false;
                        deform_stranica_left_down = true;

                    }
                    else
                    {
                        if (event.clientX > kokbl + kopiy_okno_besedi.clientWidth - 5 && event.clientX < kokbl + kopiy_okno_besedi.clientWidth + 5 && event.clientY > kokbt + 20 && event.clientY < kokbt + kopiy_okno_besedi.clientHeight && kopiy_okno_besedi.style.visibility=='visible') {
                            event.returnValue = false;
                            deform_kop_ok_bes_w_down = true;
                            osnova.style.cursor = 'ew-resize';

                        }
                        else if (event.clientX > koknl + kopiy_okno_novosti.clientWidth - 5 && event.clientX < koknl + kopiy_okno_novosti.clientWidth + 5 && event.clientY > koknt + 20 && event.clientY < koknt + kopiy_okno_novosti.clientHeight && kopiy_okno_novosti.style.visibility == 'visible') {
                            event.returnValue = false;
                            deform_kop_ok_nov_w_down = true;
                            osnova.style.cursor = 'ew-resize';

                        }
                        else if (event.clientX > kokpl + kopiy_okno_pometki.clientWidth - 5 && event.clientX < kokpl + kopiy_okno_pometki.clientWidth + 5 && event.clientY > kokpt + 20 && event.clientY < kokpt + kopiy_okno_pometki.clientHeight && kopiy_okno_pometki.style.visibility == 'visible') {
                            event.returnValue = false;
                            deform_kop_ok_pom_w_down = true;
                            osnova.style.cursor = 'ew-resize';

                        }
                        if (event.clientY > kokbt + kopiy_okno_besedi.clientHeight - 5 && event.clientY < kokbt + kopiy_okno_besedi.clientHeight + 5 && event.clientX > kokbl && event.clientX < kokbl + kopiy_okno_besedi.clientWidth && kopiy_okno_besedi.style.visibility == 'visible') {
                            event.returnValue = false;
                            deform_kop_ok_bes_h_down = true;
                            osnova.style.cursor = 'ns-resize';

                        }
                        else if (event.clientY > koknt + kopiy_okno_novosti.clientHeight - 5 && event.clientY < koknt + kopiy_okno_novosti.clientHeight + 5 && event.clientX > koknl && event.clientX < koknl + kopiy_okno_novosti.clientWidth && kopiy_okno_novosti.style.visibility == 'visible') {
                            event.returnValue = false;
                            deform_kop_ok_nov_h_down = true;
                            osnova.style.cursor = 'ns-resize';

                        }
                        else if (event.clientY > kokpt + kopiy_okno_pometki.clientHeight - 5 && event.clientY < kokpt + kopiy_okno_pometki.clientHeight + 5 && event.clientX > kokpl && event.clientX < kokpl + kopiy_okno_pometki.clientWidth && kopiy_okno_pometki.style.visibility == 'visible') {
                            event.returnValue = false;
                            deform_kop_ok_pom_h_down = true;
                            osnova.style.cursor = 'ns-resize';

                        }

                        else if (event.clientX > osnova.clientWidth - 250 && event.clientX < osnova.clientWidth - 5) {
                            if (event.clientY > okb + okno_besedi.clientHeight - 5 && event.clientY < okb + okno_besedi.clientHeight + 5) {
                                event.returnValue = false;
                                deform_okno_besedi_down = true;

                            }
                            else if (event.clientY > okn + okno_novosti.clientHeight - 5 && event.clientY < okn + okno_novosti.clientHeight + 5) {
                                event.returnValue = false;
                                deform_okno_novosti_down = true;
                                osnova.style.cursor = 'ns-resize';
                            }
                            else if (event.clientY > okp + okno_pometki.clientHeight - 5 && event.clientY < okp + okno_pometki.clientHeight + 5) {
                                event.returnValue = false;
                                deform_okno_pometki_down = true;
                                osnova.style.cursor = 'ns-resize';
                            }
                        } else if (event.clientX > kokbl + kopiy_okno_besedi.clientWidth - 5 && event.clientX < kokbl + kopiy_okno_besedi.clientWidth + 5 && event.clientY > kokbt + 20 && event.clientY < kokbt + kopiy_okno_besedi.clientHeight) {
                            event.returnValue = false;
                            deform_kop_ok_bes_w_down = true;
                            osnova.style.cursor = 'ew-resize';

                        }
                    }
                    break;
                //---------------------------------------------------------------------------------------------
                case 5://up
                    if (deform_stranica_right_down) {
                        event.returnValue = true;
                        deform_stranica_right_down = false;
                        osnova.style.cursor = stranica.style.cursor = 'default';
                    }
                    if (deform_stranica_left_down) {
                        event.returnValue = true;
                        deform_stranica_left_down = false;
                        osnova.style.cursor = stranica.style.cursor = 'default';
                    }
                    if (deform_okno_besedi_down) {
                        event.returnValue = true;
                        deform_okno_besedi_down = false;
                        osnova.style.cursor = okno_besedi.style.cursor = 'default';
                    }
                    if (deform_okno_novosti_down) {
                        event.returnValue = true;
                        deform_okno_novosti_down = false;
                        osnova.style.cursor = okno_novosti.style.cursor = 'default';
                    }
                    if (deform_okno_pometki_down) {
                        event.returnValue = true;
                        deform_okno_pometki_down = false;
                        osnova.style.cursor = okno_pometki.style.cursor = 'default';
                    }
                    if (deform_kop_ok_bes_w_down) {
                        event.returnValue = true;
                        deform_kop_ok_bes_w_down = false;
                        osnova.style.cursor = kopiy_okno_besedi.style.cursor = 'default';
                    }
                    if (deform_kop_ok_nov_w_down) {
                        event.returnValue = true;
                        deform_kop_ok_nov_w_down = false;
                        osnova.style.cursor = kopiy_okno_novosti.style.cursor = 'default';
                    }

                    if (deform_kop_ok_pom_w_down) {
                        event.returnValue = true;
                        deform_kop_ok_pom_w_down = false;
                        osnova.style.cursor = kopiy_okno_pometki.style.cursor = 'default';
                    }
                    if (deform_kop_ok_bes_h_down) {
                        event.returnValue = true;
                        deform_kop_ok_bes_h_down = false;
                        osnova.style.cursor = kopiy_okno_besedi.style.cursor = 'default';
                    }
                    if (deform_kop_ok_nov_h_down) {
                        event.returnValue = true;
                        deform_kop_ok_nov_h_down = false;
                        osnova.style.cursor = kopiy_okno_novosti.style.cursor = 'default';
                    }

                    if (deform_kop_ok_pom_h_down) {
                        event.returnValue = true;
                        deform_kop_ok_pom_h_down = false;
                        osnova.style.cursor = kopiy_okno_pometki.style.cursor = 'default';
                    }

                    break;
                //-----------------------------------------------------------------------------------------
            }
        }
    }
}
//=================================================================================================
function menu_(deistvie, nomer, idnomer) {
    //---------------------------------------------------------------------------------------------
    color_okna = "#a0d0ff";
    color_nadpisi = "#607090";
    color_videl = "#f0ffc0";
    color_menu = menu.style.backgroundColor;
    //---------------------------------------------------------------------------------------------
    m = [];
    m[0] = document.getElementById(ms[idnomer][0]);
    for (i = 1; i < ms[idnomer][1] + 1; i++) m[i] = document.getElementById(ms[idnomer][0] + '_' + (i - 1));
    //---------------------------------------------------------------------------------------------
    switch (deistvie) {
        //-----------------------------------------------------------------------------------------
        case 1://over
            if (nomer == 0) {

                m[0].style.cursor = 'pointer';
                m[0].style.backgroundColor = color_nadpisi;
                m[0].style.color = color_videl;
                if (idnomer != 0 && m_g_0.style.visibility == 'visible') menu_vis(0);
                else if (idnomer != 1 && m_y_0.style.visibility == 'visible') menu_vis(1);
                else if (idnomer != 2 && m_os_0.style.visibility == 'visible') menu_vis(2);
                else if (idnomer != 3 && m_s_0.style.visibility == 'visible') menu_vis(3);
                menu_vis(idnomer, 1);
            }
            else if (nomer == 1) {
                m[1].style.cursor = 'pointer';
                m[0].style.backgroundColor = color_nadpisi;
                m[0].style.color = color_videl;
            }
            else m[nomer].style.backgroundColor = color_videl;
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out
            if (nomer < 2) {
                m[0].style.cursor = 'default';
                m[0].style.color = 'black';
                m[0].style.backgroundColor = color_menu;
                if (event.clientY < 44) menu_vis(idnomer);
            }
            else {
                m[nomer].style.backgroundColor = color_okna;
                m[nomer].style.color = 'black';
            }
            break;
        //-----------------------------------------------------------------------------------------
        case 3://move
            if (nomer == 0) {
                if (idnomer == 0 && m_g_0.style.visibility == 'hidden') menu_vis(0, 1);
                else if (idnomer == 1 && m_y_0.style.visibility == 'hidden') menu_vis(1, 1);
                else if (idnomer == 2 && m_os_0.style.visibility == 'hidden') menu_vis(2, 1);
                else if (idnomer == 3 && m_s_0.style.visibility == 'hidden') menu_vis(3, 1);
            }
            else {
                if (m_g_0.style.visibility == 'visible') { if (event.clientY > (ms[0][1] + 1) * text_size - 28 || event.clientX < ms[0][2] + 2 || event.clientX > ms[0][2] + menu_width - 2) menu_vis(0); }
                if (m_y_0.style.visibility == 'visible') { if (event.clientY > (ms[1][1] + 1) * text_size - 28 || event.clientX < ms[1][2] + 2 || event.clientX > ms[1][2] + menu_width - 2) menu_vis(1); }
                if (m_os_0.style.visibility == 'visible') { if (event.clientY > (ms[2][1] + 1) * text_size - 28 || event.clientX < ms[2][2] + 2 || event.clientX > ms[2][2] + menu_width - 2) menu_vis(2); }
                if (m_s_0.style.visibility == 'visible') { if (event.clientY > (ms[3][1] + 1) * text_size - 28 || event.clientX < ms[3][2] + 2 || event.clientX > ms[3][2] + menu_width - 2) menu_vis(3); }
            }
            break;
        //-----------------------------------------------------------------------------------------
        case 4://down
            m[nomer].style.backgroundColor = 'black';
            m[nomer].style.color = color_videl;
            break;
        //-----------------------------------------------------------------------------------------
    }
}
//=================================================================================================
function stranica_izmen(deistvie) {
    switch (deistvie) {
        case 3://move
            if (event.clientX < stranica_left + 5 || event.clientX > stranica_left + stranica.clientWidth - 5) stranica.style.cursor = 'ew-resize';
            else stranica.style.cursor = 'default';
            break;
        case 2://down

            break;
        case 5://up

            break;
    }
}
//=================================================================================================
function okno_izmen(idnomer, deistvie) {
    switch (deistvie) {
        case 2://out
            if (idnomer == 3) move_okno_besedi = false;
            if (idnomer == 4) move_okno_novosti = false;
            if (idnomer == 5) move_okno_pometki = false;
            break;
        case 3://move
            if (idnomer == 3) {
                move_okno_besedi = true;
                if (event.clientX > kokbl + kopiy_okno_besedi.clientWidth - 5) kopiy_okno_besedi.style.cursor = 'ew-resize';
                else if (event.clientY > kokbt + kopiy_okno_besedi.clientHeight - 5) kopiy_okno_besedi.style.cursor = 'ns-resize';
                else if (peremeshenie_okno_besedi_down == false) kopiy_okno_besedi.style.cursor = 'default';
            }
            if (idnomer == 4) {
                move_okno_novosti = true;
                if (event.clientX > koknl + kopiy_okno_novosti.clientWidth - 5) kopiy_okno_novosti.style.cursor = 'ew-resize';
                else if (event.clientY > koknt + kopiy_okno_novosti.clientHeight - 5) kopiy_okno_novosti.style.cursor = 'ns-resize';
                else if (peremeshenie_okno_novosti_down == false) kopiy_okno_novosti.style.cursor = 'default';
            }
            if (idnomer == 5) {
                move_okno_pometki = true;
                if (event.clientX > kokpl + kopiy_okno_pometki.clientWidth - 5) kopiy_okno_pometki.style.cursor = 'ew-resize';
                else if (event.clientY > kokpt + kopiy_okno_pometki.clientHeight - 5) kopiy_okno_pometki.style.cursor = 'ns-resize';
                else if (peremeshenie_okno_pometki_down == false) kopiy_okno_pometki.style.cursor = 'default';
            }
            if (idnomer == 0) {

            }
            break;
        case 4://down
            if (idnomer == 3) {
                if (event.clientX < kokbl + kopiy_okno_besedi.clientWidth - 5 && event.clientY < kokbt + kopiy_okno_besedi.clientHeight - 5) {
                    peremeshenie_okno_besedi_down = true;
                    kop_ok_bes_izmen_Y = event.clientY - kokbt;
                    kop_ok_bes_izmen_X = event.clientX - kokbl;
                    kopiy_okno_besedi.style.cursor = 'grabbing';
                }//event.returnValue = false;
            }

            if (idnomer == 4) {
                if (event.clientX < koknl + kopiy_okno_novosti.clientWidth - 5 && event.clientY < koknt + kopiy_okno_novosti.clientHeight - 5) {
                    peremeshenie_okno_novosti_down = true;
                    kop_ok_nov_izmen_Y = event.clientY - koknt;
                    kop_ok_nov_izmen_X = event.clientX - koknl;
                    kopiy_okno_novosti.style.cursor = 'grabbing';
                }

                //event.returnValue = false;
            }

            if (idnomer == 5) {
                if (event.clientX < kokpl + kopiy_okno_pometki.clientWidth - 5 && event.clientY < kokpt + kopiy_okno_pometki.clientHeight - 5) {
                    peremeshenie_okno_pometki_down = true;
                    kop_ok_pom_izmen_Y = event.clientY - kokpt;
                    kop_ok_pom_izmen_X = event.clientX - kokpl;
                    kopiy_okno_pometki.style.cursor = 'grabbing';
                }
                //event.returnValue = false;
            }
            break;
        case 5://up
            if (idnomer == 3 && peremeshenie_okno_besedi_down) {
                //event.returnValue = true;
                peremeshenie_okno_besedi_down = false;
                kopiy_okno_besedi.style.cursor = 'default';
            }
            if (idnomer == 4 && peremeshenie_okno_novosti_down) {
                //event.returnValue = true;
                peremeshenie_okno_novosti_down = false;
                kopiy_okno_novosti.style.cursor = 'default';
            }
            if (idnomer == 5 && peremeshenie_okno_pometki_down) {
                //event.returnValue = true;
                peremeshenie_okno_pometki_down = false;
                kopiy_okno_pometki.style.cursor = 'default';
            }
            break;
    }
}
//=================================================================================================
function kn_okna_videlen(deistvie, idnomer) {
    ne_videl_kn = '#40a0d0';
    videl_kn = '#90e0ff';
    nagatay_kn = '#ffe0a0';
    ne_videl_ris = '#c0ffe0';
    switch (idnomer) {
        case 0: odin_kn = razvert_1; odin_dr = razvert_1_b; break;
        case 1: odin_kn = svert_1; odin_dr = svert_1_a; break;
        case 2: odin_kn = razvert_2; odin_dr = razvert_2_b; break;
        case 3: odin_kn = svert_2; odin_dr = svert_2_a; break;
        case 4: odin_kn = razvert_3; odin_dr = razvert_3_b; break;
        case 5: odin_kn = svert_3; odin_dr = svert_3_a; break;
        case 6: odin_kn = kopiy_razvert_1; odin_dr = kopiy_razvert_1_a; break;
        case 7: odin_kn = kopiy_svert_1; odin_dr = kopiy_svert_1_a; break;
        case 8: odin_kn = kopiy_razvert_2; odin_dr = kopiy_razvert_2_a; break;
        case 9: odin_kn = kopiy_svert_2; odin_dr = kopiy_svert_2_a; break;
        case 10: odin_kn = kopiy_razvert_3; odin_dr = kopiy_razvert_3_a; break;
        default: odin_kn = kopiy_svert_3; odin_dr = kopiy_svert_3_a; break;
    }
    switch (deistvie) {
        //-----------------------------------------------------------------------------------------
        case 1://over
            odin_kn.style.backgroundColor = videl_kn;
            odin_dr.style.backgroundColor = ne_videl_kn;
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out
            odin_kn.style.backgroundColor = ne_videl_kn;
            odin_dr.style.backgroundColor = ne_videl_ris;
            break;
        //-----------------------------------------------------------------------------------------
        case 4://down
            okno_svert = 200;
            if (idnomer == 0) {
               
                kopiy_okno_besedi.style.top = okb - 60 + 'px';
                kokbt = top_ok(3);
                ten_kop_ok_bes.style.top = ten2_kop_ok_bes.style.top = kokbt + 3 + 'px';
                ten_kop_ok_bes.style.left = ten2_kop_ok_bes.style.left = kokbl + 2 + 'px';
                deform_okno_besedi_down = false;

                okno_vidimost(3, 0); okno_vidimost(0, 1);
                okno_perebor(0); okno_perebor(1);
                
            }
            else if (idnomer == 2) {
                kopiy_okno_novosti.style.top = okn - 40 + 'px';
                koknt = top_ok(4);

                ten_kop_ok_nov.style.top = ten2_kop_ok_nov.style.top = koknt + 3 + 'px';
                ten_kop_ok_nov.style.left = ten2_kop_ok_nov.style.left = koknl + 2 + 'px';
                deform_okno_novosti_down = false;
                okno_vidimost(4, 0); okno_vidimost(1, 1);
                okno_perebor(0); okno_perebor(1);
            }
            else if (idnomer == 4) {
                kopiy_okno_pometki.style.top = okp - 20 + 'px';
                kokpt = top_ok(5);

                ten_kop_ok_pom.style.top = ten2_kop_ok_pom.style.top = kokpt + 3 + 'px';
                ten_kop_ok_pom.style.left = ten2_kop_ok_pom.style.left = kokpl + 2 + 'px';
                deform_okno_pometki_down = false;
                okno_vidimost(5, 0); okno_vidimost(2, 1);
                okno_perebor(0); okno_perebor(1);
            }
            else if (idnomer == 6) {
                if (okno_besedi.style.visibility == 'visible') okno_svert += okno_besedi.clientHeight + 10;
                if (okno_novosti.style.visibility == 'visible') okno_svert += okno_novosti.clientHeight + 10;
                if (okno_pometki.style.visibility == 'visible') okno_svert += okno_pometki.clientHeight + 10;
                okno_besedi.style.top = okno_svert + 'px';
                okb = top_ok(0);
                okno_svert = 200;
                okno_vidimost(0, 0); okno_vidimost(3, 1);
                okno_perebor(0); okno_perebor(1);
                move_okno_besedi = false;
            }
            else if (idnomer == 8) {
                if (okno_besedi.style.visibility == 'visible') okno_svert += okno_besedi.clientHeight + 10;
                if (okno_novosti.style.visibility == 'visible') okno_svert += okno_novosti.clientHeight + 10;
                if (okno_pometki.style.visibility == 'visible') okno_svert += okno_pometki.clientHeight + 10;
                okno_novosti.style.top = okno_svert + 'px';
                okn = top_ok(1);
                okno_svert = 200;
                okno_vidimost(1, 0); okno_vidimost(4, 1);
                okno_perebor(0); okno_perebor(1);
                move_okno_novosti = false;
            }
            else if (idnomer == 10) {
                if (okno_besedi.style.visibility == 'visible') okno_svert += okno_besedi.clientHeight + 10;
                if (okno_novosti.style.visibility == 'visible') okno_svert += okno_novosti.clientHeight + 10;
                if (okno_pometki.style.visibility == 'visible') okno_svert += okno_pometki.clientHeight + 10;
                okno_pometki.style.top = okno_svert + 'px';
                okp = top_ok(2);
                okno_svert = 200;
                okno_vidimost(2, 0); okno_vidimost(5, 1);
                okno_perebor(0); okno_perebor(1);
                move_okno_pometki = false;
            }
            else {
                switch (idnomer) { case 1: okno_vidimost(0, 1); break; case 3: okno_vidimost(1, 1); break; case 5: okno_vidimost(2, 1); break; case 7: okno_vidimost(3, 1); break; case 9: okno_vidimost(4, 1); break; case 11: okno_vidimost(5, 1); break; }
                okno_perebor(0); okno_perebor(1);
                if (idnomer == 1 || idnomer == 7) {
                    okno_s_boku_1.style.visibility = 'visible';
                    okno_s_boku_1.style.top = okno_svert + 'px';
                    oks1 = top_ok(6);
                }
                else if (idnomer == 3 || idnomer == 9) {
                    okno_s_boku_2.style.visibility = 'visible';
                    okno_s_boku_2.style.top = okno_svert + 'px';
                    oks2 = top_ok(7);
                }
                else {
                    okno_s_boku_3.style.visibility = 'visible';
                    okno_s_boku_3.style.top = okno_svert + 'px';
                    oks3 = top_ok(8);
                }
            }
            break;
        //-----------------------------------------------------------------------------------------
    }
}
//=================================================================================================
function okno_s_boku_videl(idnomer, deistvie) {
    videl_okno = '#d0ffe0';
    ne_videl_okno = '#40a0d0';
    videl_text = '#104070'; 
    switch (deistvie) {
        //-----------------------------------------------------------------------------------------
        case 1://over
            if (idnomer == 0) {
                okno_s_boku_1.style.paddingRight = '30px';
            }
            else if (idnomer == 1) { okno_s_boku_2.style.paddingRight = '30px'; }
            else { okno_s_boku_3.style.paddingRight = '30px'; }
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out
            if (idnomer == 0) {
                okno_s_boku_1.style.paddingRight = '15px';
            }
            else if (idnomer == 1) { okno_s_boku_2.style.paddingRight = '15px'; }
            else { okno_s_boku_3.style.paddingRight = '15px'; }
            break;
        //-----------------------------------------------------------------------------------------
        case 4://down
            okno_svert = 200;
            if (okno_besedi.style.visibility == 'visible') okno_svert += okno_besedi.clientHeight + 10;
            if (okno_novosti.style.visibility == 'visible') okno_svert += okno_novosti.clientHeight + 10;
            if (okno_pometki.style.visibility == 'visible') okno_svert += okno_pometki.clientHeight + 10;
            if (idnomer == 0) {
                okno_s_boku_1.style.paddingRight = '15px';
                okno_s_boku_1.style.visibility = 'hidden';
                okno_besedi.style.top = okno_svert + 'px';
                okb = top_ok(0);
                okno_vidimost(0, 0);
            }
            else if (idnomer == 1) {
                okno_s_boku_2.style.paddingRight = '15px';
                okno_s_boku_2.style.visibility = 'hidden';
                okno_novosti.style.top = okno_svert + 'px';
                okn = top_ok(1);
                okno_vidimost(1, 0);
            } else
            {
                okno_s_boku_3.style.paddingRight = '15px';
                okno_s_boku_3.style.visibility = 'hidden';
                okno_pometki.style.top = okno_svert + 'px';
                okp = top_ok(2);
                okno_vidimost(2, 0);
            }
            okno_svert = 200;
            okno_perebor(0); okno_perebor(1);
            break;
        //-----------------------------------------------------------------------------------------
    }
}
//=================================================================================================
function left_ok(idnomer) {
    switch (idnomer) {
        case 3: idnomer = kopiy_okno_besedi.style.left.slice(0, kopiy_okno_besedi.style.left.length - 2); break;
        case 4: idnomer = kopiy_okno_novosti.style.left.slice(0, kopiy_okno_novosti.style.left.length - 2); break;
        case 5: idnomer = kopiy_okno_pometki.style.left.slice(0, kopiy_okno_pometki.style.left.length - 2); break;
    }
    idnomer -= 0;
    return idnomer;
}
//=================================================================================================
function top_ok(idnomer) {
    switch (idnomer) {
        //besedi
        case 0: idnomer = okno_besedi.style.top.slice(0, okno_besedi.style.top.length - 2); break;
        //novosti
        case 1: idnomer = okno_novosti.style.top.slice(0, okno_novosti.style.top.length - 2); break;
        //pometki
        case 2: idnomer = okno_pometki.style.top.slice(0, okno_pometki.style.top.length - 2); break;
        //kopiy_besedi
        case 3: idnomer = kopiy_okno_besedi.style.top.slice(0, kopiy_okno_besedi.style.top.length - 2); break;
        //kopiy_novosti
        case 4: idnomer = kopiy_okno_novosti.style.top.slice(0, kopiy_okno_novosti.style.top.length - 2); break;
        //kopiy_pometki
        case 5: idnomer = kopiy_okno_pometki.style.top.slice(0, kopiy_okno_pometki.style.top.length - 2); break;
        //okno_s_boku_1
        case 6: idnomer = okno_s_boku_1.style.top.slice(0, okno_s_boku_1.style.top.length - 2); break;
        //okno_s_boku_2
        case 7: idnomer = okno_s_boku_2.style.top.slice(0, okno_s_boku_2.style.top.length - 2); break;
        //okno_s_boku_3
        case 8: idnomer = okno_s_boku_3.style.top.slice(0, okno_s_boku_3.style.top.length - 2); break;

    }
    idnomer -= 0;
    return idnomer;
}
//=================================================================================================
function menu_vis(id_el = 0, deistvie = 0) {
    if (deistvie == 0) deistvie = 'hidden'; else deistvie = 'visible';
    for (i = 0; i < ms[id_el][1]; i++) document.getElementById(ms[id_el][0] + '_' + i).style.visibility = deistvie;
    for (i = 0; i < ms[id_el][3]; i++)document.getElementById(ms[id_el][0] + '_l_' + i).style.visibility = deistvie;
    ten_m.style.height = (ms[id_el][1] - 1) * text_size - 5 + 'px';
    ten_m.style.left = ms[id_el][2] + 'px';
    ten_m.style.visibility = deistvie;
}
//=================================================================================================
function okno_perebor(nomer) {
    if (nomer == 0) {
        ok1 = okno_besedi; ok2 = okno_novosti; ok3 = okno_pometki;
        n1 = okb; n2 = okn; n3 = okp;
    }
    else {
        ok1 = okno_s_boku_1; ok2 = okno_s_boku_2; ok3 = okno_s_boku_3;
        n1 = oks1; n2 = oks2; n3 = oks3;
    }
    if (ok1.style.visibility == 'visible') {
        if (ok2.style.visibility == 'visible') {
            if (ok3.style.visibility == 'visible') {
                if (n1 <= n2) {
                    if (n1 <= n3) {
                        ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;

                        if (n2 <= n3) {
                            ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                            ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                        } else {
                            ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                            ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                        }
                    }
                    else {
                        ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                        ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                        ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                    }
                } else {
                    if (n2 <= n3) {
                        ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                        if (n1 <= n3) {
                            ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                            ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                        } else {
                            ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                            ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                        }
                    } else {
                        ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                        ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                        ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                    }
                }
            } else {
                if (n1 <= n2) {
                    ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                    ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                } else {
                    ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                    ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                }
            }
        } else {
            if (ok3.style.visibility == 'visible') {
                if (n1 <= n3) {
                    ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                    ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                } else {
                    ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                    ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10;
                }
            } else { ok1.style.top = okno_svert + 'px'; okno_svert += ok1.clientHeight + 10; }
        }
    } else {
        if (ok2.style.visibility == 'visible') {
            if (ok3.style.visibility == 'visible') {
                if (n2 <= n3) {
                    ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                    ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                } else {
                    ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10;
                    ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10;
                }
            } else { ok2.style.top = okno_svert + 'px'; okno_svert += ok2.clientHeight + 10; }
        } else {
            if (ok3.style.visibility == 'visible') { ok3.style.top = okno_svert + 'px'; okno_svert += ok3.clientHeight + 10; }
        }
    }
    if (nomer == 0) { okb = top_ok(0); okn = top_ok(1); okp = top_ok(2); }
    else { oks1 = top_ok(6); oks2 = top_ok(7); oks3 = top_ok(8); }
}
//=================================================================================================
function okno_vidimost(idnomer, vidimo) {

    switch (idnomer) {
        case 0: okno_besedi.style.visibility = okno_name_besedi.style.visibility = okno_text_besedi.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 1: okno_novosti.style.visibility = okno_name_novosti.style.visibility = okno_text_novosti.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 2: okno_pometki.style.visibility = okno_name_pometki.style.visibility = okno_text_pometki.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 3: ten_kop_ok_bes.style.visibility = ten2_kop_ok_bes.style.visibility = kopiy_okno_besedi.style.visibility = kopiy_okno_name_besedi.style.visibility = kopiy_okno_text_besedi.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 4: ten_kop_ok_nov.style.visibility = ten2_kop_ok_nov.style.visibility = kopiy_okno_novosti.style.visibility = kopiy_okno_name_novosti.style.visibility = kopiy_okno_text_novosti.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 5: ten_kop_ok_pom.style.visibility = ten2_kop_ok_pom.style.visibility = kopiy_okno_pometki.style.visibility = kopiy_okno_name_pometki.style.visibility = kopiy_okno_text_pometki.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
    }
}
//=================================================================================================
function okno_izmen_top(idnomer, chislo) {
    if (okno_besedi.style.visibility == 'visible' && idnomer != 0) {
        if ((idnomer == 1 && okb > okn) || (idnomer == 2 && okb > okp)) {
            okb += chislo;
            okno_besedi.style.top = okb + 'px';
        }
    }
    if (okno_novosti.style.visibility == 'visible' && idnomer != 1) {
        if ((idnomer == 0 && okn > okb) || (idnomer == 2 && okn > okp)) {
            okn += chislo;
            okno_novosti.style.top = okn + 'px';
        }
    }
    if (okno_pometki.style.visibility == 'visible' && idnomer != 2) {
        if ((idnomer == 0 && okp > okb) || (idnomer == 1 && okp > okn)) {
            okp += chislo;
            okno_pometki.style.top = okp + 'px';
        }
    }
    if (okno_s_boku_1.style.visibility == 'visible') {
        oks1 += chislo;
        okno_s_boku_1.style.top = oks1 + 'px';
    }
    if (okno_s_boku_2.style.visibility == 'visible') {
        oks2 += chislo;
        okno_s_boku_2.style.top = oks2 + 'px';
    }
    if (okno_s_boku_3.style.visibility == 'visible') {
        oks3 += chislo;
        okno_s_boku_3.style.top = oks3 + 'px';
    }
}

//=================================================================================================

random_plus = 0;
function self_random(nachalo = 1, konec = 2) {
    d = new Date();
    otvet = konec - nachalo;
    otvet = nachalo + d.getSeconds() % otvet;
    //if (random_plus == 0) random_plus = 1; else random_plus = 0;
    return otvet;
}
//=================================================================================================
function o(id_element, width = 10, height = 10, left = 100, top = 100, backgroundColor) {
    id_element.style.position = 'absolute';
    id_element.style.width = width + 'px';
    id_element.style.height = height + 'px';
    id_element.style.left = left + 'px';
    id_element.style.top = top + 'px';
    if (backgroundColor != undefined) id_element.style.backgroundColor = backgroundColor;
}
//=================================================================================================
function ob(id_element, border = 2, borderColor = '#101010', borderRadius) {
    id_element.style.border = border + 'px solid ' + borderColor;
    if (borderRadius != undefined) id_element.style.borderRadius = borderRadius + 'px';
}
//=================================================================================================
function obr(id1, id2, id3, id4, id5) {
    id1.style.borderRadius = '50%';
    if (id2 != undefined) id2.style.borderRadius = '50%';
    if (id3 != undefined) id3.style.borderRadius = '50%';
    if (id4 != undefined) id4.style.borderRadius = '50%';
    if (id5 != undefined) id5.style.borderRadius = '50%';
}
//=================================================================================================
function ot(id_element, FontSize = 20, textColor = '#101010', viravnivanieTexta_po_gorizontali = 'left', viravnivanieTexta_po_vertikali = 'top') {
    id_element.style.fontSize = FontSize + 'px';
    id_element.style.color = textColor;
    id_element.style.textAlign = viravnivanieTexta_po_gorizontali;
    id_element.style.verticalAlign = viravnivanieTexta_po_vertikali;
}
//=================================================================================================
function ot_otstup(id_element, otstup_sverhu = 2, otstup_snizu = 2, otstup_sleva = 2, otstup_sprava = 2) {
    id_element.style.paddingTop = otstup_sverhu + 'px';
    id_element.style.paddingBottom = otstup_snizu + 'px';
    id_element.style.paddingLeft = otstup_sleva + 'px';
    id_element.style.paddingRight = otstup_sprava + 'px';
}
//=================================================================================================
function ot_rastoynie(id_element, rastoynie_megdu_strochkami = 6, rastoynie_megdu_slovami = 5, rastoynie_megdu_bykvami = 5) {
    id_element.style.lineHeight = rastoynie_megdu_strochkami + 'px';
    id_element.style.wordSpacing = rastoynie_megdu_slovami + 'px';
    id_element.style.letterSpacing = rastoynie_megdu_bykvami + 'px';
}
//=================================================================================================
function ov(visibl = true, id_element1, id_element2, id_element3, id_element4, id_element5) {
    if (visibl) visibl = 'visible'; else visibl = 'hidden';
    id_element1.style.visibility = visibl;
    if (id_element2 != undefined) id_element2.style.visibility = visibl;
    if (id_element3 != undefined) id_element3.style.visibility = visibl;
    if (id_element4 != undefined) id_element4.style.visibility = visibl;
    if (id_element5 != undefined) id_element5.style.visibility = visibl;
}
//=================================================================================================
function owh(id_element, width = 100, height = 100) {
    id_element.style.width = width + 'px';
    id_element.style.height = height + 'px';
}
//=================================================================================================
function olt(id_element, left = 100, top = 100) {
    id_element.style.left = left + 'px';
    id_element.style.top = top + 'px';
}
//=================================================================================================
function olr(id_element, left = 100, right = 100) {
    id_element.style.left = left + 'px';
    id_element.style.right = right + 'px';
}
//=================================================================================================
function olb(id_element, left = 100, bottom = 100) {
    id_element.style.left = left + 'px';
    id_element.style.bottom = bottom + 'px';
}
//=================================================================================================
function otb(id_element, top = 100, bottom = 100) {
    id_element.style.top = top + 'px';
    id_element.style.bottom = bottom + 'px';
}
//=================================================================================================
function olrt(id_element, left = 100, right = 100, top = 100) {
    id_element.style.left = left + 'px';
    id_element.style.right = right + 'px';
    id_element.style.top = top + 'px';
}
//=================================================================================================
function oltb(id_element, left = 100, top = 100, bottom = 100) {
    id_element.style.left = left + 'px';
    id_element.style.top = top + 'px';
    id_element.style.bottom = bottom + 'px';
}
//=================================================================================================

function olt_glaza(id1 = pom_glaz_l, id2 = pom_glaz_r) {
    id1.style.left = glazl_l + 'px';
    id1.style.top = glazl_t + 'px';
    id2.style.left = glazr_l + 'px';
    id2.style.top = glazr_t + 'px';

}

//=================================================================================================
function olt_sheki() {
    pom_sheka_l.style.left = shekal_l + 'px';
    pom_sheka_l.style.top = shekal_t + 'px';
    pom_sheka_r.style.left = shekar_l + 'px';
    pom_sheka_r.style.top = shekar_t + 'px';

}
//=================================================================================================
function pom_gubi(chislo, uvelich) {
    pom_gb = uvelich;
    if (uvelich && chislo == 65) uvelich = pom_gb = false; else if (!(uvelich) && chislo == 23) uvelich = pom_gb = true;
    if (uvelich) { switch (chislo) { case 23: return 30; case 30: return 44; case 44: return 58; case 58: return 65; } }
    else { switch (chislo) { case 65: return 58; case 58: return 44; case 44: return 30; case 30: return 23; } }
}
//=================================================================================================
function pom_glaz(chislo, uvelich) {
    pom_gb = uvelich;
    if (uvelich && chislo == 62) uvelich = pom_gb = false; else if (!(uvelich) && chislo == 20) uvelich = pom_gb = true;
    if (uvelich) { switch (chislo) { case 20: return 25; case 25: return 41; case 41: return 57; case 57: return 62; } }
    else { switch (chislo) { case 62: return 57; case 57: return 41; case 41: return 25; case 25: return 20; } }
}
//=================================================================================================
