function Sait_load() {

    bob.style.backgroundColor = "#102040";
    t = 100;


    for (i = 0; i < ogl; i++) {
        odin = document.getElementById("p_" + i);
        if (ogl_vibrono == i) {
            odin.style.top = t - 3 + "px";
            odin.style.backgroundColor = "#1070a0"
            odin.style.color = "#a0b0f0"
            odin.style.left = "20px";
            odin.style.width = "240px";
            odin.style.fontSize = "22px";
            odin.style.padding = "7px";
        } else {
            odin.style.top = t + "px";
            odin.style.left = "25px";
        }
        t += 45
    }  
    //---------------------------------------------------------------------------------------------
    in_load.innerHTML = "<table id='menu_line'><tr><td id = 'm_g' class='c_m_g' onmouseover = 'menu_(1,0,0),mn2()' onmouseout = 'menu_(2,0,0)' ></td ><td>|</td><td id='m_y' class='c_m_g' onmouseover='menu_(1,0,1),mn2()' onmouseout='menu_(2,0,1)'></td><td>|</td><td id='m_os' class='c_m_g' onmouseover='menu_(1,0,2),mn2()' onmouseout='menu_(2,0,2)'></td><td>|</td><td id='m_s' class='c_m_g' onmouseover='menu_(1,0,3),mn2()' onmouseout='menu_(2,0,3)'></td></tr><tr><td id='m1'colspan='2'></td><td id='m2'colspan='2'></td><td id='m3'colspan='2'></td><td id='m4'></td></tr></table><hr id='line_pomoshnik' color='black' />"
    //---------------------------------------------------------------------------------------------
    m1_left = 5; m2_left = 89; m3_left = 189; m4_left = 313; m_b = 1;
    ms = [["m_g", 10, m1_left, 6], ["m_y", 18, m2_left, 4], ["m_os", 4, m3_left, 2], ["m_s", 4, m4_left, 2]];
    //---------------------------------------------------------------------------------------------
    m_g.innerHTML = array_menu[0];
    m_y.innerHTML = array_menu[1];
    m_os.innerHTML = array_menu[2];
    m_s.innerHTML = array_menu[3];
    //---------------------------------------------------------------------------------------------
    str = "<div id='m_g_0'class='c_m_o'onmouseover='menu_(1,1,0)'onmouseout='menu_(2,1,0)'>"
    for (i = 1; i < ms[0][1]; i++)str += "<div id='m_g_" + i + "'class='c_m'onmouseover='menu_(1," + (i + 1) + ",0)'onmouseout='menu_(2," + (i + 1) + ",0)'onclick='menu_(3," + (i + 1) + ",0)'></div>";
    str += "<hr id='m_g_l_0'class='c_m_line_0'color='black'size='1'/><hr id='m_g_l_1'class='c_m_line_1'color='white'size='1'/><hr id='m_g_l_2'class='c_m_line_4'color='black'size='1'/><hr id='m_g_l_3'class='c_m_line_5'color='white'size='1'/><hr id='m_g_l_4'class='c_m_line_6'color='black'size='1'/><hr id='m_g_l_5'class='c_m_line_7'color='white'size='1'/></div>";
    m1.innerHTML = str;
    //---------------------------------------------------------------------------------------------

}
