function Sait_load(){
t=100;
 for (i = 0; i < ogl; i++) {
     odin = document.getElementById("p_" + i);
     if (ogl_vibrono == i) {
         odin.style.top = t - 3 + "px";
         odin.style.backgroundColor = "#1070a0"
         odin.style.color = "#a0b0f0"
         odin.style.left = "245px";
         odin.style.width = "240px";
         odin.style.fontSize = "22px";
         odin.style.padding = "7px";
     } else
         odin.style.top = t + "px";
     t += 45
 }  
}
