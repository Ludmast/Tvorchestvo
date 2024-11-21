//=================================================================================================
function Sait_load() {
    menu_play = false;
    bob.style.backgroundColor = '#306090';
    

    bob.style.overflowX = "hidden";
    t = 250;
    text_size = 35;
    str = 50;
    for (i = 0; i < ogl; i++) {
        odin_og = document.getElementById("p_" + i);
        if (ogl_vibrono == i) {
            odin_og.style.top = t - 3 + 'px';
            odin_og.style.backgroundColor = '#3090c0';
            odin_og.style.color = '#b0f0e0';
            odin_og.style.left = '20px';
            odin_og.style.width = '240px';
            odin_og.style.fontSize = '30px';
            odin_og.style.padding = '3px';
            odin_og.style.paddingLeft = '5px';
            odin_og.style.border = '2px solid black';
            odin_og.style.borderTopRightRadius = '10px';
            odin_og.style.borderBottomRightRadius = '10px';

        } else {
            odin_og.style.top = t + 'px';
            
        }
        str += odin_og.clientHeight+11;
        t += 45;
    }
    gl_p.style.height = str+'px';
    //---------------------------------------------------------------------------------------------
    str = "<div id='name_sait1_teni' ></div><div id='name_sait2_teni'style='filter:blur(7px)'></div>";
    str += "<div id='name_sait1'></div><div id='name_sait2'></div>";
    
    str += "<table><tr><td id='menu_line'><table id = 'menu' ><tr><td id = 'm_g' class='c_m_g' onmouseover = 'menu_(1,0,0)' onmouseout = 'menu_(2,0,0)' ></td ><td>|</td><td id='m_y' class='c_m_g' onmouseover='menu_(1,0,1)' onmouseout='menu_(2,0,1)'></td><td>|</td><td id='m_os' class='c_m_g' onmouseover='menu_(1,0,2)' onmouseout='menu_(2,0,2)'></td><td>|</td><td id='m_s' class='c_m_g' onmouseover='menu_(1,0,3)' onmouseout='menu_(2,0,3)'></td></tr><tr><td id='m1' colspan='2'></td><td id='m2'colspan='2'></td><td id='m3'colspan='2'></td><td id='m4'></td></tr></table ></td></tr></table>";
    str +="<hr id='line_pomoshnik' color='#80b0ff' /><span id='pomoshniki'></span>";
    in_load.innerHTML = str;
    //---------------------------------------------------------------------------------------------
    line_pomoshnik.style.top = innerHeight - 33 + 'px';
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

    m1_left = 20; m2_left = m1_left+ m_g.clientWidth+10; m3_left = m2_left + m_y.clientWidth+10; m4_left = m3_left + m_os.clientWidth+10; m_b = 1;
    ms = [["m_g", 7, m1_left, 6], ["m_y", 18, m2_left, 4], ["m_os", 4, m3_left, 2], ["m_s", 4, m4_left, 2]];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_g_0'class='c_m_o'onmouseover='menu_(1,1,0)'onmouseout='menu_(2,1,0)'onmousemove='menu_(4,1,0)'>"
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
        m[0].style.height = (ms[j][1] - 1) * text_size + "px";
        
        t = 2;
        for (i = 1; i < m.length; i++) {
            m[i].style.top = t + "px";
            t += text_size;
        }
    }
    m_i = 0;
    //---------------------------------------------------------------------------------------------
    bob.onclick = 'all_control()';
}
//=================================================================================================
function all_control() {
    if (event.clientY > 55) {
        if (m_g_0.style.visibility == 'visible') { if (event.clientY < 44 || event.clientY > (ms[0][1] + 1) * text_size - 30 || event.clientX < ms[0][2] || event.clientX > ms[0][2] + menu_width - 10) menu_vis(); }
        if (m_y_0.style.visibility == 'visible') { if (event.clientY < 44 || event.clientY > (ms[1][1] + 1) * text_size - 30 || event.clientX < ms[1][2] || event.clientX > ms[1][2] + menu_width - 10) menu_vis(1); }
        if (m_os_0.style.visibility == 'visible') { if (event.clientY < 44 || event.clientY > (ms[2][1] + 1) * text_size - 30 || event.clientX < ms[2][2] || event.clientX > ms[2][2] + menu_width - 10) menu_vis(2); }
        if (m_s_0.style.visibility == 'visible') { if (event.clientY < 44 || event.clientY > (ms[3][1] + 1) * text_size - 30 || event.clientX < ms[3][2] || event.clientX > ms[3][2] + menu_width - 10) menu_vis(3); }
    }
}
//=================================================================================================
function menu_vis(id_el = 0, deistvie = 0) {
    if (deistvie == 0) deistvie = 'hidden'; else deistvie = 'visible';
    for (i = 0; i < ms[id_el][1]; i++) document.getElementById(ms[id_el][0] + '_' + i).style.visibility = deistvie;
    for (i = 0; i < ms[id_el][3]; i++)document.getElementById(ms[id_el][0] + '_l_' + i).style.visibility = deistvie;
}

//=================================================================================================
function menu_(deistvie, nomer, idnomer) {
    //---------------------------------------------------------------------------------------------
    color_okna = "#a0d0ff";
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
                m[0].style.cursor = "pointer";
                m[0].style.backgroundColor = color_okna;
                m[0].style.color = color_videl;
                    if (idnomer!=0 && m_g_0.style.visibility == 'visible') menu_vis();
                    else if (idnomer != 1 && m_y_0.style.visibility == 'visible') menu_vis(1);
                    else if (idnomer != 2 && m_os_0.style.visibility == 'visible') menu_vis(2);
                else if (idnomer != 3 && m_s_0.style.visibility == 'visible') menu_vis(3);
                menu_vis(idnomer, 1);

            }
            else if (nomer == 1) {
                m[1].style.cursor = "pointer";
                m[0].style.backgroundColor = color_okna;
            }
            else m[nomer].style.backgroundColor = color_videl;
            break;
        //-----------------------------------------------------------------------------------------
        case 2://out
            if (nomer < 2) {
                m[0].style.cursor = "default";
                m[0].style.color = "black";
                m[0].style.backgroundColor = color_menu;

                if (event.clientY < 45) menu_vis(idnomer);
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
        case 4://move
        
            if (m_g_0.style.visibility == 'visible') { if (event.clientY > (ms[0][1] + 1) * text_size - 30 || event.clientX < ms[0][2] || event.clientX > ms[0][2] + menu_width-10) menu_vis(); }
            if (m_y_0.style.visibility == 'visible') { if (event.clientY > (ms[1][1] + 1) * text_size - 30 || event.clientX < ms[1][2] || event.clientX > ms[1][2] + menu_width-10) menu_vis(1); }
            if (m_os_0.style.visibility == 'visible') { if (event.clientY > (ms[2][1] + 1) * text_size - 30 || event.clientX < ms[2][2] || event.clientX > ms[2][2] + menu_width-10) menu_vis(2); }
            if (m_s_0.style.visibility == 'visible') { if (event.clientY > (ms[3][1] + 1) * text_size -30 || event.clientX < ms[3][2] || event.clientX > ms[3][2] + menu_width-10) menu_vis(3); }
            //должна написать перемещение по m_g, m_y,m_os,m_s
            break;
    }

}

//=================================================================================================
