//=================================================================================================
array_name_sait = ["Творчество", "во всём!"];
predupregd = 'Сайт находится в разработке';
//=================================================================================================
array_menu = ["Главное", "Обучение", "Обсуждение", "Справка"];
array_menu_1 = ["От создателя сайта", "Чего новенького", "Люди-умельцы", "Творческие работы", "Поиск по сайту", "Регистрация"];
array_menu_2 = ["Обучение от умельцев", "Творчество", "Программирование", "Алгебра и Геометрия", "Физика", "Химия", "Биология", "История", "География", "Обществознание", "Экономика", "Астрономия", "Языки стран мира", "Черчение", "Музыка", "Физкультура", "Для самых маленьких","Энциклопедии"];
array_menu_3 = ["Беседы", "Предложения/критика", "Написать письмо"];
array_menu_4 = ["Инструкция по сайту", "Донаты", "Обо мне"];

//=================================================================================================
function Sait_load() {
    bob.style.backgroundColor = '#306090';
    bob.style.overflowX = 'hidden';

    //---------------------------------------------------------------------------------------------
    str = "";
    //тень под названием раздела
    str += "<div id='razdel_teni'></div>";
    //кнопки на 1 окне 
    str_plus = "<td id='razvert_1'class='c_okno_knopki'><span id='razvert_1_a'class='c_razvert_a'></span><span id='razvert_1_b'class='c_razvert_b'></span></td>";
    str_plus += "<td id='svert_1'class='c_okno_knopki'><span id='svert_1_a'class='c_svert_a'></span><span id='svert_1_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 1 окна
    str_plus +="<td><span id='svet_1_okna'class='c_svet_okna'></span><span id='ten_1_okna'class='c_ten_okna'></span></td>"
    //1 дополнительное окошко с беседами
    str += "<table id='okno_besedi' class='c_okno'><tr><td id='okno_name_besedi'class='c_okno_name'></td>"+str_plus+"</tr><tr><td id='okno_text_besed' class='c_okno_text'></td></tr></table>";
    //кнопки на 2 окне 
    str_plus = "<td id='razvert_2'class='c_okno_knopki'><span id='razvert_2_a'class='c_razvert_a'></span><span id='razvert_2_b'class='c_razvert_b'></span></td>";
    str_plus += "<td id='svert_2'class='c_okno_knopki'><span id='svert_2_a'class='c_svert_a'></span><span id='svert_2_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 2 окна
    str_plus += "<td><span id='svet_2_okna'class='c_svet_okna'></span><span id='ten_2_okna'class='c_ten_okna'></span></td>"
    //2 дополнительное окошко с новостями
    str += "<table id='okno_novosti' class='c_okno'><tr><td id='okno_name_novosti'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_novostei' class='c_okno_text'></td></tr></table>";
    //кнопки на 1 окне 
    str_plus = "<td id='razvert_3'class='c_okno_knopki'><span id='razvert_3_a'class='c_razvert_a'></span><span id='razvert_3_b'class='c_razvert_b'></span></td>";
    str_plus += "<td id='svert_3'class='c_okno_knopki'><span id='svert_3_a'class='c_svert_a'></span><span id='svert_3_b'class='c_svert_b'></span></td>";
    //свет и тень на заголовке 3 окна
    str_plus += "<td><span id='svet_3_okna'class='c_svet_okna'></span><span id='ten_3_okna'class='c_ten_okna'></span></td>"
    //3 дополнительное окошко с закладками
    str += "<table id='okno_pometki' class='c_okno'><tr><td id='okno_name_pometki'class='c_okno_name'></td>" + str_plus + "</tr><tr><td id='okno_text_pometok' class='c_okno_text'></td></tr></table>";
    in_load_1.innerHTML = str;

    razvert_1.style.right = '40px';
    svert_1.style.right = '10px';
    razvert_2.style.right = '40px';
    svert_2.style.right = '10px';
    razvert_3.style.right = '40px';
    svert_3.style.right = '10px';

    //---------------------------------------------------------------------------------------------
    razdel_teni.innerHTML = razdel.innerHTML;
    //---------------------------------------------------------------------------------------------
    okno_name_besedi.innerHTML = 'Беседы';
    okno_name_novosti.innerHTML = 'Новости';
    okno_name_pometki.innerHTML = 'Пометки';
    //ten_besedi.style.left += '2px';
    //ten_besedi.innerHTML = okno_name_besedi.innerHTML;
    //---------------------------------------------------------------------------------------------
    okna_top = 200;
    okno_besedi.style.top = okna_top + 'px';
    okna_top += okno_besedi.clientHeight + 10;
    okno_novosti.style.top = okna_top + 'px';
    okna_top += okno_novosti.clientHeight + 10;
    okno_pometki.style.top = okna_top + 'px';

    //---------------------------------------------------------------------------------------------
    ten_stranici.style.width = stranica.clientWidth + 'px';
    //---------------------------------------------------------------------------------------------
    t = 250;
    text_size = 35;


    //---------------------------------------------------------------------------------------------

    str = "";
    //подсветка и сами названия содержания страниц
        for (i = 0; i < ogl; i++) {
            odin_og = document.getElementById("p_" + i);
            
            if (ogl_vibrono == i) {
                odin_og.style.top = t - 3 + 'px';
                odin_og.style.backgroundColor = '#3090c0';
                odin_og.style.color = '#b0f0e0';
                odin_og.style.left = '15px';
                odin_og.style.width = '245px';
                odin_og.style.fontSize = '30px';
                odin_og.style.padding = '3px';
                odin_og.style.paddingLeft = '5px';
                odin_og.style.border = '2px solid black';
                odin_og.style.borderTopRightRadius = '10px';
                odin_og.style.borderBottomRightRadius = '10px';
                ten_vibronogo_p.style.top = t + 'px';
                ten_vibronogo_p.style.height = odin_og.clientHeight + 4 + 'px';
                perem = t + 2;
                
                str += "<div id='podsvetka_svet_p_" + i + "' class='podsvetka_svet_p'  style='left:20px;top:" + perem + "px;width:";
                str += -5 + odin_og.clientWidth + "px;'></div>";
                perem = t + odin_og.clientHeight - 8;
                str += "<div id='podsvetka_ten_p_" + i + "' class='podsvetka_ten_p' style='left:20px;top:" + perem + "px;width:";
                str += -5+odin_og.clientWidth + "px;'></div>";
                t -= 6;
            } else {
                odin_og.style.top = t + 'px';
                perem = t + 5;
                str += "<div id='podsvetka_svet_p_" + i + "' class='podsvetka_svet_p'  style='top:" + perem + "px;'></div>";
                perem = t + odin_og.clientHeight - 3;
                str += "<div id='podsvetka_ten_p_" + i + "' class='podsvetka_ten_p' style='top:" + perem + "px;'></div>";
                str += "<div id='ten_ot_stranici_na_p_" + i + "' class='ten_str' style='top:" + t + "px;left:258px;height:" + odin_og.clientHeight+"px;'></div>";
            }
            
            t += odin_og.clientHeight + 11;
            //t += 45;
        }
        gl_p.style.height = t - 200 + 'px';
        
    
    //тень верхней полоски меню
    str += "<div id='ten_menu'></div>";
    //верхняя полоска меню
    str += "<table><tr><td id='menu_line'onmouseout = 'menu_(2,0,0)'><table id = 'menu' onmouseout = 'menu_(2,0,0)'><tr><td id = 'm_g' class='c_m_g' onmouseover = 'menu_(1,0,0)' onmouseout = 'menu_(2,0,0)' onmousemove='menu_(4,0,0)'></td ><td id='m_razdelitel'align='center'>|</td><td id='m_y' class='c_m_g' onmouseover='menu_(1,0,1)' onmouseout='menu_(2,0,1)'onmousemove='menu_(4,0,1)'></td><td align='center'>|</td><td id='m_os' class='c_m_g' onmouseover='menu_(1,0,2)' onmouseout='menu_(2,0,2)'onmousemove='menu_(4,0,2)'></td><td align='center'>|</td><td id='m_s' class='c_m_g' onmouseover='menu_(1,0,3)' onmouseout='menu_(2,0,3)'onmousemove='menu_(4,0,3)'></td></tr></table ></td></tr></table>";
    //------------------
    //тени названия сайта
    str += "<div id='name_sait1_teni' ></div><div id='name_sait2_teni'style='filter:blur(7px)'></div>";
    //название сайта
    str += "<div id='name_sait1'></div><div id='name_sait2'></div>";
    //------------------
    //развёрнутые списки менюшек
    str += "<div id='m1'></div><div id='m2'></div><div id='m3'></div><div id='m4'></div>";
    //помошник
    str += "<div id='ten_line_pomoshnik'></div>";
    str += "<span id='pomoshnik'></span><hr id='line_pomoshnik' color='#80b0ff' />";
    //предупреждение
    str += "<div id='predupr'>" + predupregd + "</div>";
    in_load_2.innerHTML = str;

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
    str += "<div id='m_g_0'class='c_m_o'onmouseover='menu_(1,1,0)'onmouseleave='menu_(2,1,0)'onmousemove='menu_(4,1,0)'>"
    for (i = 1; i < ms[0][1]; i++)str += "<div id='m_g_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",0)'onmouseout='menu_(2," + (i + 1) + ",0)'onclick='menu_(3," + (i + 1) + ",0)'></div>";
    str += "<hr id='m_g_l_0'class='c_m_line_0'color='black'size='1'/><hr id='m_g_l_1'class='c_m_line_1'color='white'size='1'/><hr id='m_g_l_2'class='c_m_line_2'color='black'size='1'/><hr id='m_g_l_3'class='c_m_line_3'color='white'size='1'/></div>";
    m1.innerHTML = str;
    for (i = 0; i < ms[0][1] - 1; i++)document.getElementById(ms[0][0] + '_' + (i + 1)).innerText = array_menu_1[i];

    //---------------------------------------------------------------------------------------------
    str = "<div id='m_y_0'class='c_m_o'onmouseover='menu_(1,1,1)'onmouseout='menu_(2,1,1)'onmousemove='menu_(4,1,1)'>"
    for (i = 1; i < ms[1][1]; i++)str += "<div id='m_y_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",1)'onmouseout='menu_(2," + (i + 1) + ",1)'onclick='menu_(3," + (i + 1) + ",1)'></div>";
    str += "<hr id='m_y_l_0' class='c_m_line_0' color='black' size='1'/><hr id='m_y_l_1' class='c_m_line_1' color='white' size='1'/><hr id='m_y_l_2'class='c_m_line_4' color='black' size='1'/><hr id='m_y_l_3'class='c_m_line_5' color='white' size='1'/></div > ";
    m2.innerHTML = str;
    for (i = 0; i < ms[1][1] - 1; i++)document.getElementById(ms[1][0] + '_' + (i + 1)).innerText = array_menu_2[i];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_os_0'class='c_m_o'onmouseover='menu_(1,1,2)'onmouseout='menu_(2,1,2)'onmousemove='menu_(4,1,2)'>"
    for (i = 1; i < ms[2][1]; i++)str += "<div id='m_os_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",2)'onmouseout='menu_(2," + (i + 1) + ",2)'onclick='menu_(3," + (i + 1) + ",2)'></div>";
    str += "<hr id='m_os_l_0' class='c_m_line_0' color='black' size='1'/><hr id='m_os_l_1' class='c_m_line_1' color='white' size='1'/></div > ";
    m3.innerHTML = str;
    for (i = 0; i < ms[2][1] - 1; i++)document.getElementById(ms[2][0] + '_' + (i + 1)).innerText = array_menu_3[i];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_s_0'class='c_m_o'onmouseover='menu_(1,1,3)'onmouseout='menu_(2,1,3)'onmousemove='menu_(4,1,3)'>"
    for (i = 1; i < ms[3][1]; i++)str += "<div id='m_s_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",3)'onmouseout='menu_(2," + (i + 1) + ",3)'onclick='menu_(3," + (i + 1) + ",3)'></div>";
    str += "<hr id='m_s_l_0'class='c_m_line_0' color='black' size='1'/><hr id='m_s_l_1'class='c_m_line_1' color='white' size='1'/></div > ";
    m4.innerHTML = str;
    for (i = 0; i < ms[3][1] - 1; i++)document.getElementById(ms[3][0] + '_' + (i + 1)).innerText = array_menu_4[i];
    //---------------------------------------------------------------------------------------------

    for (j = 0; j < 4; j++) {
        m = [];
        for (i = 0; i < ms[j][1]; i++) { m[i] = document.getElementById(ms[j][0] + "_" + i); }
        m[0].style.height = (ms[j][1] - 1) * text_size + 'px';
        m[0].style.left = ms[j][2] + 'px';

        t = 2;
        for (i = 1; i < m.length; i++) {
            m[i].style.top = t + 'px';
            t += text_size;
        }
    }
    m_i = 0;
    //---------------------------------------------------------------------------------------------
    //setTimeout('all_control()', 10);
    
}
//=================================================================================================
function all_control() {
    {

        if (m_g_0.style.visibility == 'visible') menu_(4,1,0);
        if (m_y_0.style.visibility == 'visible') menu_(4,1,1);
        if (m_os_0.style.visibility == 'visible') menu_(4, 1, 2);
        if (m_s_0.style.visibility == 'visible') menu_(4, 1, 3);

    } //setTimeout('all_control()', 10);
}
//=================================================================================================
function menu_vis(id_el = 0, deistvie = 0) {

    if (deistvie == 0) deistvie = 'hidden'; else deistvie = 'visible';
    for (i = 0; i < ms[id_el][1]; i++) document.getElementById(ms[id_el][0] + '_' + i).style.visibility = deistvie;
    for (i = 0; i < ms[id_el][3]; i++)document.getElementById(ms[id_el][0] + '_l_' + i).style.visibility = deistvie;
    ten_m.style.height = (ms[id_el][1] - 1) * text_size -5+ 'px';
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

                if (event.clientY < 44)
                    menu_vis(idnomer);
            }

            else {
                m[nomer].style.backgroundColor = color_okna;
                m[nomer].style.color = 'black';

            }

            break;
        //-----------------------------------------------------------------------------------------
        case 3://click
            m[nomer].style.backgroundColor = 'black';
            m[nomer].style.color = color_videl;


            break;
        //-----------------------------------------------------------------------------------------
        case 4://move
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
