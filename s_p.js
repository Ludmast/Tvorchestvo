//=================================================================================================
function pomoshnik_go(deistvie){
switch(deistvie){
    case 0:
    pomoshnik.style.top=innerHeight-179+scrollY+'px';
    ten_pomoshnika.style.top=20+'px';
    telo.style.top=10+'px';
    svet_tela.style.top=20+'px';
    glaz_l.style.top=glaz_r.style.top='45px';
    guba_1.style.top='75px';
    
    break;
}
}
//=================================================================================================
function prydki_() {
    switch (prydki_variant) {
        case 0:
            prydki_rabota = true;
            prydki_del = line_pomoshnik.clientWidth / 10;
            prydki_index = line_pomoshnik.clientWidth;
            kn_prydki_skrita = false;
            kn_prydki_start = true;
            kn_prydki.style.visibility = 'visible';
            ten_kn_prydki.style.visibility = 'visible';
            pomoshnik.style.left = '40px';
            prydki_variant++;
            break;
        case 1:
            if (prydki_index > -prydki_del) {
                prydki_index -= prydki_del;
                pomoshnik.style.left = pomoshnik.offsetLeft - prydki_del + 'px';
                line_pomoshnik.style.width = prydki_index + 'px';
                ten_line_pomoshnik.style.width = prydki_index + 10 + 'px';
                ten_kn_prydki.style.left = kn_prydki.style.left = line_pomoshnik.clientWidth + 'px';
            }
            else {
                ten_line_pomoshnik.style.visibility = 'hidden';
                line_pomoshnik.style.visibility = 'hidden';
                kn_prydki_start = true;
                kn_prydki.style.left = 0 + 'px';
                kn_prydki.style.borderTopLeftRadius = '0px';
                kn_prydki.style.borderLeft = '0px';
                kn_prydki.style.width = 35 + 'px';
                kn_prydki.innerHTML = '>';
                ten_kn_prydki.style.visibility = kn_prydki.style.visibility = 'visible';
                prydki_perem = 50;
                ten_kn_prydki.style.left = '0px';
                localStorage.setItem('l_p', 1);
                prydki_rabota = false;
                prydki_variant++;
            }
            break;
        case 2:
            kn_prydki.style.visibility = 'visible';
            ten_kn_prydki.style.visibility = 'visible';
            ten_line_pomoshnik.style.visibility = 'visible';
            line_pomoshnik.style.visibility = 'visible';
            kn_prydki.style.borderTopLeftRadius = '10px';
            kn_prydki.style.border = '2px solid #104070';
            kn_prydki.style.width = 40 + 'px';
            perem = 1;
            prydki_variant++;
            break;
        case 3:
            if (prydki_index < 160) {
                prydki_index += prydki_del;
                pomoshnik.style.left = pomoshnik.style.left.slice(0, pomoshnik.style.left.length - 2) - 0 + prydki_del + 'px';
                line_pomoshnik.style.width = prydki_index + 'px';
                ten_line_pomoshnik.style.width = prydki_index + 10 + 'px';
                ten_kn_prydki.style.left = kn_prydki.style.left = line_pomoshnik.clientWidth + 'px';
            }
            else {
                kn_prydki.style.left = 160 + 'px';
                kn_prydki.innerHTML = '<';
                kn_prydki_start = false;
                ten_kn_prydki.style.visibility = kn_prydki.style.visibility = 'hidden';
                ten_kn_prydki.style.left = '160px';
                pomoshnik.style.left = '40px';
                localStorage.setItem('l_p', 0);
                prydki_rabota = false;
                prydki_variant = 0;
            }
            break;
    }
    if (prydki_rabota) setTimeout('prydki_()', 50);
}
//=================================================================================================
function kn_prydki_(deistvie) {
    color_kn = '#b0d0f0';
    color_strelka = '#104070';
    color_kn_vibrana = '#70f0b0';
    switch (deistvie) {
        case 1://over
            kn_prydki.style.cursor = 'default';
            kn_prydki.style.backgroundColor = color_kn_vibrana;
            break;
        case 2://out
            kn_prydki.style.backgroundColor = color_kn;
            break;
        case 3://move
            break;
        case 4://down
            prydki_rabota = true;
            if (localStorage.getItem('l_p') == 0) prydki_variant = 0; else prydki_variant = 2;
            prydki_();
            break;
    }
}
