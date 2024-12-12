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
    str += "<div id='okna'></div>";
    //---------------------------------------------------------------------------------------------
    str += "<span id='okno_snizu_1'class='c_okno_snizu'onmouseover='okno_snizu_videl(0,1)'onmouseout='okno_snizu_videl(0,2)'onmousedown='okno_snizu_videl(0,4)'></span><span id='okno_snizu_2'class='c_okno_snizu'onmouseover='okno_snizu_videl(1,1)'onmouseout='okno_snizu_videl(1,2)'onmousedown='okno_snizu_videl(1,4)'></span><span id='okno_snizu_3'class='c_okno_snizu'onmouseover='okno_snizu_videl(2,1)'onmouseout='okno_snizu_videl(2,2)'onmousedown='okno_snizu_videl(2,4)'></span>"
    //---------------------------------------------------------------------------------------------
    //кнопки на 1 окне 
    str_plus = "<td id='svert_1'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,0)' onmouseout = 'kn_okna_videlen(2,0)'onmousedown='kn_okna_videlen(4,0)'><span id='svert_1_a'class='c_svert_a'></span><span id='svert_1_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 1 окна
    str_plus += "<td><span id='svet_1_okna'class='c_svet_okna'></span><span id='ten_1_okna'class='c_ten_okna'></span></td>"
    //1 дополнительное окошко с беседами
    str += "<table id='okno_besedi' class='c_okno'onmousemove='okno_izmen(0,3)'><tr><td id='okno_name_besedi'class='c_okno_name'></td>"+str_plus+"</tr><tr><td id='okno_text_besedi' class='c_okno_text'></td></tr></table>";
    //кнопки на 2 окне 
    str_plus = "<td id='svert_2'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,1)' onmouseout = 'kn_okna_videlen(2,1)'onmousedown='kn_okna_videlen(4,1)'><span id='svert_2_a'class='c_svert_a'></span><span id='svert_2_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 2 окна
    str_plus += "<td><span id='svet_2_okna'class='c_svet_okna'></span><span id='ten_2_okna'class='c_ten_okna'></span></td>"
    //2 дополнительное окошко с новостями
    str += "<table id='okno_novosti' class='c_okno'onmousemove='okno_izmen(1,3)'><tr><td id='okno_name_novosti'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_novosti' class='c_okno_text'></td></tr></table>";
    //кнопки на 1 окне 
    str_plus = "<td id='svert_3'class='c_okno_knopki'onmouseover = 'kn_okna_videlen(1,2)' onmouseout = 'kn_okna_videlen(2,2)'onmousedown='kn_okna_videlen(4,2)'><span id='svert_3_a'class='c_svert_a'></span><span id='svert_3_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 3 окна
    str_plus += "<td><span id='svet_3_okna'class='c_svet_okna'></span><span id='ten_3_okna'class='c_ten_okna'></span></td>"
    //3 дополнительное окошко с закладками
    str += "<table id='okno_zametki' class='c_okno'onmousemove='okno_izmen(2,3)'><tr><td id='okno_name_zametki'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_zametki' class='c_okno_text'></td></tr></table>";
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
    okno_snizu_1.style.visibility = okno_snizu_2.style.visibility = okno_snizu_3.style.visibility = 'visible';
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
            ten_vibronogo_p.style.height = odin_og.clientHeight +4+  'px';
            //perem = t + 2;
            t -= 4;
        } else {
            odin_og.style.top = t + 'px';
            odin_ogt = document.getElementById("tp_" + i);
            odin_ogt.style.top = odin_og.style.top;
            odin_ogt.style.height = odin_og.clientHeight +6+ 'px';
        }
        //perem = odin_og.clientHeight + 3;
        t += odin_og.clientHeight + 15;
    }
    //---------------------------------------------------------------------------------------------
    gl_p.innerHTML = 'Содержимое раздела:';
    gl_p.style.height = t - 200 + 'px';
    

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
    //setTimeout('all_control()', 10);
    


    stranici_right = stranica_left + stranica.clientHeight;
    stranica_left_p = stranica_left;
    deform_stranica_left_down = false;
    gl_p_vis_hidden = false;
    deform_okno_besedi_down = false;
    deform_okno_novosti_down = false;
    deform_okno_pometki_down = false;
    
    peremeshenie_okon_down = false;
    
    oks1 = top_ok(6);
    oks2 = top_ok(7);
    oks3 = top_ok(8);
    
    
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
function okno_snizu_videl(idnomer, deistvie) {
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
