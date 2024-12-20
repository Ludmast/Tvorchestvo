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
    okna_width = 270;
    //---------------------------------------------------------------------------------------------
    str = "";
    //список содержимого раздела
    str += "<div id='okna'onmousemove='panel_izmen(3)'onmousedown='panel_izmen(4)'onmouseup='panel_izmen(5)'></div > ";
    //---------------------------------------------------------------------------------------------
    str += "<span id='okno_snizu_1'class='c_okno_snizu'onmouseover='okno_snizu_videl(0,1)'onmouseout='okno_snizu_videl(0,2)'onmousedown='okno_snizu_videl(0,4)'></span><span id='okno_snizu_2'class='c_okno_snizu'onmouseover='okno_snizu_videl(1,1)'onmouseout='okno_snizu_videl(1,2)'onmousedown='okno_snizu_videl(1,4)'></span><span id='okno_snizu_3'class='c_okno_snizu'onmouseover='okno_snizu_videl(2,1)'onmouseout='okno_snizu_videl(2,2)'onmousedown='okno_snizu_videl(2,4)'></span>"
    //---------------------------------------------------------------------------------------------
    //кнопки на 1 окне
    str_plus = "<td id='svert_1'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,0)' onmouseout = 'kn_okna_videlen(2,0)'onmousedown='kn_okna_videlen(4,0)'><span id='svert_1_a'class='c_svert_a'></span><span id='svert_1_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 1 окна
    str_plus += "<td><span id='svet_1_okna'class='c_svet_okna'></span><span id='ten_1_okna'class='c_ten_okna'></span></td>"
    //1 дополнительное окошко с беседами
    str += "<table id='okno_besedi' class='c_okno'onmousemove='okno_izmen(0,3)'onmousedown='okno_izmen(0,4)'onmouseup='okno_izmen(0,5)'><tr><td id='okno_name_besedi'class='c_okno_name'></td>"+str_plus+"</tr><tr><td id='okno_text_besedi' class='c_okno_text'></td></tr></table>";
    //кнопки на 2 окне 
    str_plus = "<td id='svert_2'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,1)' onmouseout = 'kn_okna_videlen(2,1)'onmousedown='kn_okna_videlen(4,1)'><span id='svert_2_a'class='c_svert_a'></span><span id='svert_2_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 2 окна
    str_plus += "<td><span id='svet_2_okna'class='c_svet_okna'></span><span id='ten_2_okna'class='c_ten_okna'></span></td>"
    //2 дополнительное окошко с новостями
    str += "<table id='okno_novosti' class='c_okno'onmousemove='okno_izmen(1,3)'onmousedown='okno_izmen(1,4)'onmouseup='okno_izmen(1,5)'><tr><td id='okno_name_novosti'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_novosti' class='c_okno_text'></td></tr></table>";
    //кнопки на 1 окне 
    str_plus = "<td id='svert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,2)' onmouseout = 'kn_okna_videlen(2,2)'onmousedown='kn_okna_videlen(4,2)'><span id='svert_3_a'class='c_svert_a'></span><span id='svert_3_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 3 окна
    str_plus += "<td><span id='svet_3_okna'class='c_svet_okna'></span><span id='ten_3_okna'class='c_ten_okna'></span></td>"
    //3 дополнительное окошко с закладками
    str += "<table id='okno_zametki' class='c_okno'onmousemove='okno_izmen(2,3)'onmousedown='okno_izmen(2,4)'onmouseup='okno_izmen(2,5)'><tr><td id='okno_name_zametki'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_zametki' class='c_okno_text'></td></tr></table>";
    //---------------------------------------------------------------------------------------------
    //кнопка для двищения оконной панели
    str += "<div id='dvigenie_paneli'onmouseover='kn_dvig_panel(1)'onmouseout='kn_dvig_panel(2)'onmousemove='kn_dvig_panel(3)'onmousedown='kn_dvig_panel(4)'onmouseup='kn_dvig_panel(5)'><div id='dvig_ris'></div></div>";
    //---------------------------------------------------------------------------------------------
    //тень страницы
    str += "<div id='ten_stranici'></div><div id='ten'></div>"; 
    //---------------------------------------------------------------------------------------------
    //тень содержимого раздела 2
    str += "<div id='ten1_gl_p'></div>";
    //---------------------------------------------------------------------------------------------
    in_load_1.innerHTML = str;
    //---------------------------------------------------------------------------------------------
    svert_1.style.right = '10px';
    svert_2.style.right = '10px';
    svert_3.style.right = '10px';
    //---------------------------------------------------------------------------------------------
    okno_besedi.style.visibility = okno_novosti.style.visibility = okno_zametki.style.visibility = 'visible';
    okno_snizu_1.style.visibility = okno_snizu_2.style.visibility = okno_snizu_3.style.visibility = 'hidden';
    //---------------------------------------------------------------------------------------------
    okno_snizu_1.innerHTML = 'Б е с е д ы';
    okno_snizu_2.innerHTML = 'Н о в о с т и';
    okno_snizu_3.innerHTML = 'З а м е т к и';
    //---------------------------------------------------------------------------------------------
    okno_name_besedi.innerHTML = 'Беседы';
    okno_name_novosti.innerHTML = 'Новости';
    okno_name_zametki.innerHTML = 'Заметки';
    //---------------------------------------------------------------------------------------------
    okno_top = 200;
    okno_besedi.style.top = okno_top + 'px';
    okno_top += okno_besedi.clientHeight + 10;
    okno_novosti.style.top = okno_top + 'px';
    okno_top += okno_novosti.clientHeight + 10;
    okno_zametki.style.top = okno_top + 'px';
    //---------------------------------------------------------------------------------------------
    okno_top += okno_zametki.clientHeight + 10;
    okno_snizu_1.style.top = okno_top + 'px';
    okno_top += okno_snizu_1.clientHeight + 10;
    okno_snizu_2.style.top = okno_top+'px';
    okno_top += okno_snizu_2.clientHeight + 10;
    okno_snizu_3.style.top = okno_top + 'px';
    //---------------------------------------------------------------------------------------------
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
    str += "<div id='ten2_gl_p'></div><div id='gl_p'class='c_gl_p'></div><div id='ten_vibronogo_p'></div>";
    for (i = 0; i < ogl; i++) str += "<div id='tp_"+i+"'class='c_ten_p'></div><div id='p_" + i + "'class='c_p' onmouseover='p_videlen(1, " + i + ")' onmouseout='p_videlen(2," + i + ")' onmousedown='p_videlen(4," + i + ")'></div>";
    str += "<div id='ten2'></div>";
    //---------------------------------------------------------------------------------------------
    in_load_2.innerHTML = str;
    //---------------------------------------------------------------------------------------------
    //подсветка и сами названия содержания страниц
    for (i = 0; i < ogl; i++) {
        odin_og = document.getElementById("p_" + i);
        odin_og.innerHTML = array_razd_p[razdel][i];
        if (ogl_vibrono == i) {
            odin_og.style.top = t - 2 + 'px';
            odin_og.style.backgroundColor = '#3090c0';
            odin_og.style.color = '#b0f0e0';
            odin_og.style.left = '40px';
            odin_og.style.width = '420px';
            odin_og.style.fontSize = '32px';
            odin_og.style.textAlign = 'center';
            odin_og.style.paddingLeft = '5px';
            odin_og.style.border = '2px solid #104070';
            odin_og.style.borderTopRightRadius = '10px';
            odin_og.style.borderBottomRightRadius = '10px';
            ten_vibronogo_p.style.left = odin_og.style.left;
            ten_vibronogo_p.style.top = t + 'px';
            ten_vibronogo_p.style.height = odin_og.clientHeight +5+  'px';
            perem = t+ 5+ 'px';
            t -= 5;
        } else {
            perem=odin_og.style.top = t + 'px';
        }
        odin_ogt = document.getElementById("tp_" + i);
        odin_ogt.style.top = perem;
        t += odin_og.clientHeight + 15;
    }
    //---------------------------------------------------------------------------------------------
    gl_p.innerHTML = 'Содержимое раздела:';
    gl_p.style.height = t - 200 + 'px';
    text_stranici.style.paddingTop = gl_p.clientHeight/2 + 'px';
    ten1_gl_p.style.position = ten2_gl_p.style.position = 'absolute';
    ten1_gl_p.style.left = ten2_gl_p.style.left = '30px';
    ten1_gl_p.style.top = ten2_gl_p.style.top = '202px';
    ten1_gl_p.style.width = ten2_gl_p.style.width = gl_p.clientWidth + 2+'px';
    ten1_gl_p.style.height = ten2_gl_p.style.height = gl_p.clientHeight+'px';
    ten1_gl_p.style.backgroundColor = ten2_gl_p.style.backgroundColor = 'black';
    ten1_gl_p.style.borderRadius = ten2_gl_p.style.borderRadius = '10px';
    ten1_gl_p.style.filter = 'blur(12px)';
    ten2_gl_p.style.filter = 'blur(2px)';
    //---------------------------------------------------------------------------------------------
    str = "";
    //тень под названием раздела
    str += "<div id='razdel_teni'></div>";
    //---------------------------------------------------------------------------------------------
    //название раздела
    str += "<div id='razdel'></div>";
    //---------------------------------------------------------------------------------------------
    //тень верхней полоски меню
    str += "<div id='ten_menu'></div>";
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
    //str += "<div id='predupr'>" + predupregd + "</div>";
    in_load_3.innerHTML = str;
    //---------------------------------------------------------------------------------------------
    document.getElementById('razdel_teni').innerHTML = document.getElementById('razdel').innerHTML = array_menu_1[0]; //razdel.innerHTML;
    //---------------------------------------------------------------------------------------------
    okno_top = 170;
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
    stranici_right = stranica_left + stranica.clientHeight;
    stranica_left_p = stranica_left;
    
    gl_p_vis_hidden = false;
    deform_okno_besedi_down = false;
    deform_okno_novosti_down = false;
    deform_okno_zametki_down = false;
    peremeshenie_okon_down = false;
    okna_svernuti = false;
    okb = top_ok(0);
    okn = top_ok(1);
    okz = top_ok(2);
    oks1 = top_ok(3);
    oks2 = top_ok(4);
    oks3 = top_ok(5);
    staroe_x = innerWidth;
    staroe_y = innerHeight;
    peremeshenie_vniz = 0;
    posle_scroll = false;
    setTimeout('izmen_win()', 4);
}
//=================================================================================================
function okno_izmen(idnomer,deistvie) {
    switch (deistvie) {
        case 3://move
            // bob.innerHTML = event.clientY;
            
            if (event.clientX > osnova.clientWidth - okno_besedi.clientWidth && event.clientX < osnova.clientWidth - 10&&idnomer == 0 && event.clientY > okb + okno_besedi.clientHeight - 5) okno_besedi.style.cursor = 'ns-resize';
            else okno_besedi.style.cursor = 'default';
            if (event.clientX > osnova.clientWidth - okno_besedi.clientWidth && event.clientX < osnova.clientWidth - 10 && idnomer == 1 && event.clientY > okn + okno_novosti.clientHeight - 5) okno_novosti.style.cursor = 'ns-resize';
            else okno_novosti.style.cursor = 'default';
            if (event.clientX > osnova.clientWidth - okno_besedi.clientWidth && event.clientX < osnova.clientWidth - 10 && idnomer == 2 && event.clientY > okz + okno_zametki.clientHeight - 5) okno_zametki.style.cursor = 'ns-resize';
            else okno_zametki.style.cursor = 'default';
            if (deform_okno_besedi_down) panel_izmen(3);
            if (deform_okno_novosti_down) panel_izmen(3);
            if(deform_okno_zametki_down) panel_izmen(3);
            
            break;
        case 4://down
            panel_izmen(4);
            break;
        case 5://up
            panel_izmen(5);
            break;
    }
}
//=================================================================================================
function panel_izmen(deistvie) {
    switch (deistvie) {
        
        case 3://move
            if (event.clientX > osnova.clientWidth - okno_besedi.clientWidth && event.clientX < osnova.clientWidth - 10 &&
                ((okno_besedi.style.visibility == 'visible' && event.clientY > okb + okno_besedi.clientHeight - 5 && event.clientY < okb + okno_besedi.clientHeight + 5) ||
                    (okno_novosti.style.visibility == 'visible' && event.clientY > okn + okno_novosti.clientHeight - 5 && event.clientY < okn + okno_novosti.clientHeight + 5) ||
                    (okno_zametki.style.visibility == 'visible' && event.clientY > okz + okno_zametki.clientHeight - 5 && event.clientY < okz + okno_zametki.clientHeight + 5))) okna.style.cursor = 'ns-resize';
            else okna.style.cursor = 'default';
            if (deform_okno_besedi_down) {
                perem = okno_besedi.clientHeight;
                if (event.clientY - okb < 100) okno_besedi.style.height = '100px';
                else okno_besedi.style.height = event.clientY - okb + 'px';
                okno_izmen_top(0, okno_besedi.clientHeight - perem);
            } else if (deform_okno_novosti_down) {
                perem = okno_novosti.clientHeight;
                if (event.clientY - okn < 100) okno_novosti.style.height = '100px';
                else okno_novosti.style.height = event.clientY - okn + 'px';
                okno_izmen_top(1, okno_novosti.clientHeight - perem);
            } else if (deform_okno_zametki_down) {
                perem = okno_zametki.clientHeight;
                if (event.clientY - okz < 100) okno_zametki.style.height = '100px';
                else okno_zametki.style.height = event.clientY - okz + 'px';
                okno_izmen_top(2, okno_zametki.clientHeight - perem);
            }

            break;
        case 4://down
            if (event.clientX > osnova.clientWidth - okno_besedi.clientWidth && event.clientX < osnova.clientWidth - 10) {
                if (okno_besedi.style.visibility == 'visible' && event.clientY > okb + okno_besedi.clientHeight - 5 && event.clientY < okb + okno_besedi.clientHeight + 5) deform_okno_besedi_down = true;
                else if (okno_novosti.style.visibility == 'visible' && event.clientY > okn + okno_novosti.clientHeight - 5 && event.clientY < okn + okno_novosti.clientHeight + 5) deform_okno_novosti_down = true;
                else if (okno_zametki.style.visibility == 'visible' && event.clientY > okz + okno_zametki.clientHeight - 5 && event.clientY < okz + okno_zametki.clientHeight + 5) deform_okno_zametki_down = true;
                event.returnValue = false;
            }
            break;
        case 5://up
            if (deform_okno_besedi_down) deform_okno_besedi_down = false;
            if (deform_okno_novosti_down) deform_okno_novosti_down = false;
            if (deform_okno_zametki_down) deform_okno_zametki_down = false;
            event.returnValue = true;
            break;
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
                    if (event.clientX < osnova.clientWidth - okna.clientWidth) panel_izmen(5);
                    //---------------------------------------------------------------------------------------------
                    break;
                //---------------------------------------------------------------------------------------------
                case 4://down
                    break;
                //---------------------------------------------------------------------------------------------
                case 5://up
                    break;
                //-----------------------------------------------------------------------------------------
            }
        }
    }
}

//=================================================================================================
function kn_dvig_panel(deistvie) {
    color_kn = '#5080b0';
    color_videl = '#80b0e0';
    switch (deistvie) {
        case 1://over
            dvigenie_paneli.style.backgroundColor = color_videl;
            dvigenie_paneli.style.cursor = 'ew-resize';
            break;
        case 2://out
            dvigenie_paneli.style.backgroundColor = color_kn;
            break;
        case 5://move
            break;
        case 4://douwn
            break;
        case 5://up

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
        case 0: odin_kn = svert_1; odin_dr = svert_1_a; break;
        case 1: odin_kn = svert_2; odin_dr = svert_2_a; break;
        case 2: odin_kn = svert_3; odin_dr = svert_3_a; break;
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
            switch (idnomer) { case 0: okno_vidimost(0, 1); break; case 1: okno_vidimost(1, 1); break; case 2: okno_vidimost(2, 1); break; }
            okno_perebor(0); okno_perebor(1); 
            if (idnomer == 0) {
                okno_snizu_1.style.visibility = 'visible';
                okno_snizu_1.style.top = okno_svert + 'px';
                oks1 = top_ok(3);
            }
            else if (idnomer == 1) {
                okno_snizu_2.style.visibility = 'visible';
                okno_snizu_2.style.top = okno_svert + 'px';
                oks2 = top_ok(4);
            }
            else if (idnomer == 2) {
                okno_snizu_3.style.visibility = 'visible';
                okno_snizu_3.style.top = okno_svert + 'px';
                oks3 = top_ok(5);
            }
            if (okno_snizu_1.style.visibility == 'visible' && okno_snizu_2.style.visibility == 'visible' && okno_snizu_3.style.visibility == 'visible') {
                perem = okna.clientWidth;
                okna.style.width = okno_snizu_1.clientWidth + 25 + 'px';
                dvigenie_paneli.style.left = osnova.clientWidth - okna.clientWidth - 10 + 'px';
                stranica.style.width = stranica.clientWidth + perem - okna.clientWidth + 'px';
                ten_stranici.style.width = stranica.clientWidth + 'px';
                okna_svernuti = true;
            }
            break;
        //-----------------------------------------------------------------------------------------
    }
}
//=================================================================================================
function okno_snizu_videl(idnomer, deistvie) {
    videl_okno = '#d0ffe0';
    ne_videl_okno = '#40a0d0';
    videl_text = '#104070'; 
    switch (deistvie) {
        //-----------------------------------------------------------------------------------------
        case 1://over
            if (idnomer == 0) { okno_snizu_1.style.paddingRight = '30px'; }
            else if (idnomer == 1) { okno_snizu_2.style.paddingRight = '30px'; }
            else { okno_snizu_3.style.paddingRight = '30px'; }
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out
            if (idnomer == 0) { okno_snizu_1.style.paddingRight = '15px'; }
            else if (idnomer == 1) { okno_snizu_2.style.paddingRight = '15px'; }
            else { okno_snizu_3.style.paddingRight = '15px'; }
            break;
        //-----------------------------------------------------------------------------------------
        case 4://down
            okno_svert = 200;
            if (okna_svernuti) {
                perem = okna.clientWidth;
                okna.style.width = okna_width + 'px';
                dvigenie_paneli.style.left = osnova.clientWidth - okna.clientWidth - 10 + 'px';
                stranica.style.width = stranica.clientWidth - okna.clientWidth + perem + 'px';
                ten_stranici.style.width = stranica.clientWidth + 'px';
                okna_svernuti = false;
            }
            if (okno_besedi.style.visibility == 'visible') okno_svert += okno_besedi.clientHeight + 10;
            if (okno_novosti.style.visibility == 'visible') okno_svert += okno_novosti.clientHeight + 10;
            if (okno_zametki.style.visibility == 'visible') okno_svert += okno_zametki.clientHeight + 10;
            if (idnomer == 0) {
                okno_snizu_1.style.paddingRight = '15px';
                okno_snizu_1.style.visibility = 'hidden';
                okno_besedi.style.top = okno_svert + 'px';
                okb = top_ok(0);
                okno_vidimost(0, 0);
            }
            else if (idnomer == 1) {
                okno_snizu_2.style.paddingRight = '15px';
                okno_snizu_2.style.visibility = 'hidden';
                okno_novosti.style.top = okno_svert + 'px';
                okn = top_ok(1);
                okno_vidimost(1, 0);
            } else
            {
                okno_snizu_3.style.paddingRight = '15px';
                okno_snizu_3.style.visibility = 'hidden';
                okno_zametki.style.top = okno_svert + 'px';
                okz = top_ok(2);
                okno_vidimost(2, 0);
            }
            okno_svert = 200;
            okno_perebor(0); okno_perebor(1);
            break;
        //-----------------------------------------------------------------------------------------
    }
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
                ten_vibronogo_p.style.top = perem - 4 + 'px';
                perem -= 7;
                odin_og.style.top = perem + 'px';
                odin_og.style.backgroundColor = '#3090c0';
                odin_og.style.color = '#b0f0e0';
                odin_og.style.left = '40px';
                odin_og.style.width = '420px';
                odin_og.style.fontSize = '32px';
                odin_og.style.textAlign = 'center';
                odin_og.style.paddingLeft = '5px';
                odin_og.style.border = '2px solid #104070';
                odin_og.style.borderTopRightRadius = '10px';
                odin_og.style.borderBottomRightRadius = '10px';
                ten_vibronogo_p.style.width = '430px';
                ten_vibronogo_p.style.height = odin_og.clientHeight + 4 + 'px';
                odin_og = document.getElementById('p_' + ogl_vibrono);
                odin_og.style.width = '378px';
                perem = odin_og.style.top.slice(0, odin_og.style.top.length - 2);
                perem -= 0;
                perem += 7;
                odin_og.style.top = perem + 'px';
                odin_og.style.fontSize = '24px';
                odin_og.style.textAlign = 'left';
                odin_og.style.left = '60px';
                odin_og.style.color = '#104070';
                odin_og.style.border = '2px solid #104070';
                odin_og.style.borderRadius = '10px';
                odin_og.style.borderTopRightRadius = '0px';
                odin_og.style.borderBottomRightRadius = '0px';
                odin_og.style.backgroundColor = '#a0c0ff';
                ogl_vibrono = idnomer;
            }
            break;
        //-----------------------------------------------------------------------------------------   
    }
}
//=================================================================================================
function top_ok(idnomer) {
    switch (idnomer) {
        //besedi
        case 0: idnomer = okno_besedi.style.top.slice(0, okno_besedi.style.top.length - 2); break;
        //novosti
        case 1: idnomer = okno_novosti.style.top.slice(0, okno_novosti.style.top.length - 2); break;
        //pometki
        case 2: idnomer = okno_zametki.style.top.slice(0, okno_zametki.style.top.length - 2); break;
        //okno_s_boku_1
        case 3: idnomer = okno_snizu_1.style.top.slice(0, okno_snizu_1.style.top.length - 2); break;
        //okno_s_boku_2
        case 4: idnomer = okno_snizu_2.style.top.slice(0, okno_snizu_2.style.top.length - 2); break;
        //okno_s_boku_3
        case 5: idnomer = okno_snizu_3.style.top.slice(0, okno_snizu_3.style.top.length - 2); break;
    }
    idnomer -= 0;
    return idnomer;
}
//=================================================================================================
function okno_perebor(nomer) {
    if (nomer == 0) {
        ok1 = okno_besedi; ok2 = okno_novosti; ok3 = okno_zametki;
        n1 = okb; n2 = okn; n3 = okz;
    }
    else {
        ok1 = okno_snizu_1; ok2 = okno_snizu_2; ok3 = okno_snizu_3;
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
    if (nomer == 0) { okb = top_ok(0); okn = top_ok(1); okz = top_ok(2); }
    else { oks1 = top_ok(3); oks2 = top_ok(4); oks3 = top_ok(5); }
}
//=================================================================================================
function okno_vidimost(idnomer, vidimo) {
    switch (idnomer) {
        case 0: okno_besedi.style.visibility = okno_name_besedi.style.visibility = okno_text_besedi.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 1: okno_novosti.style.visibility = okno_name_novosti.style.visibility = okno_text_novosti.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
        case 2: okno_zametki.style.visibility = okno_name_zametki.style.visibility = okno_text_zametki.style.visibility = vidimo == 0 ? 'visible' : 'hidden'; break;
    }
}
//=================================================================================================
function okno_izmen_top(idnomer, chislo) {
    if (okno_besedi.style.visibility == 'visible' && idnomer != 0) {
        if ((idnomer == 1 && okb > okn) || (idnomer == 2 && okb > okz)) {
            okb += chislo;
            okno_besedi.style.top = okb + 'px';
        }
    }
    if (okno_novosti.style.visibility == 'visible' && idnomer != 1) {
        if ((idnomer == 0 && okn > okb) || (idnomer == 2 && okn > okz)) {
            okn += chislo;
            okno_novosti.style.top = okn + 'px';
        }
    }
    if (okno_zametki.style.visibility == 'visible' && idnomer != 2) {
        if ((idnomer == 0 && okz > okb) || (idnomer == 1 && okz > okn)) {
            okz += chislo;
            okno_zametki.style.top = okz + 'px';
        }
    }
    if (okno_snizu_1.style.visibility == 'visible') {
        oks1 += chislo;
        okno_snizu_1.style.top = oks1 + 'px';
    }
    if (okno_snizu_2.style.visibility == 'visible') {
        oks2 += chislo;
        okno_snizu_2.style.top = oks2 + 'px';
    }
    if (okno_snizu_3.style.visibility == 'visible') {
        oks3 += chislo;
        okno_snizu_3.style.top = oks3 + 'px';
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
function menu_vis(id_el = 0, deistvie = 0) {
    if (deistvie == 0) deistvie = 'hidden'; else deistvie = 'visible';
    for (i = 0; i < ms[id_el][1]; i++) document.getElementById(ms[id_el][0] + '_' + i).style.visibility = deistvie;
    for (i = 0; i < ms[id_el][3]; i++)document.getElementById(ms[id_el][0] + '_l_' + i).style.visibility = deistvie;
    ten_m.style.height = (ms[id_el][1] - 1) * text_size - 5 + 'px';
    ten_m.style.left = ms[id_el][2] + 'px';
    ten_m.style.visibility = deistvie;
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
function izmen_win() {
    if (staroe_x != innerWidth) {
        ten_stranici.style.width = stranica.clientWidth + 'px';
        staroe_x = innerWidth;
    }
    if (staroe_y != innerHeight) {
        line_pomoshnik.style.top = innerHeight - 33 + 'px';
        ten_line_pomoshnik.style.top = innerHeight - 20 + 'px';
        pomoshnik.style.top = innerHeight - 14 + 'px';
        staroe_y = innerHeight;
    }
    if (scrollY) {
        line_pomoshnik.style.top = innerHeight - 33 + scrollY + 'px';
        ten_line_pomoshnik.style.top = innerHeight - 20 + scrollY + 'px';
        pomoshnik.style.top = innerHeight - 14 + scrollY + 'px';
        menu_line.style.height = 55 + scrollY + 'px';
        okna.style.top = menu.style.top = scrollY + 'px';
        m_g_0.style.top = m_y_0.style.top = m_os_0.style.top = m_s_0.style.top = 44 + scrollY + 'px';
        ten_m.style.top = 60 + scrollY + 'px';
        ten_menu.style.top = 55 + scrollY + 'px';
        name_sait1.style.top = name_sait1_teni.style.top = 60 + scrollY + 'px';
        name_sait2.style.top = name_sait2_teni.style.top = 120 + scrollY + 'px';
        dvigenie_paneli.style.top = 160 + scrollY + 'px';

        posle_scroll = true;
    } else if (posle_scroll && scrollY < 2) {
        posle_scroll = false;
        line_pomoshnik.style.top = innerHeight - 33 + 'px';
        ten_line_pomoshnik.style.top = innerHeight - 20 + 'px';
        pomoshnik.style.top = innerHeight - 14  + 'px';
        menu_line.style.height = '55px';
        okna.style.top = menu.style.top = '0px';
        m_g_0.style.top = m_y_0.style.top = m_os_0.style.top = m_s_0.style.top = '44px';
        ten_m.style.top = '60px';
        ten_menu.style.top = '55px';
        name_sait1.style.top = name_sait1_teni.style.top = '60px';
        name_sait2.style.top = name_sait2_teni.style.top = '120px';
        dvigenie_paneli.style.top = '160px';
    }
    setTimeout('izmen_win()', 4);
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
