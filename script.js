let black_element = document.getElementById("black_element");
let event = 0;
let info = document.getElementById("info");
info.style.display = "none";
let beans = 2;
let x = 0;
let info_btn = document.getElementById("info_btn");
let workers = 0;
let exp = 0;
let num = 0;
let gear = document.getElementById("gear");
let gear_hover = document.getElementById("gear_hover");
let level = 1;
let gems = 0;
let exp_max = 100;
let gem_info = document.getElementById("gem_info");
let exp_info = document.getElementById("exp_info");
let ath_info = document.getElementById("ath_info");
let circle = document.getElementById("circle");
let exp_btn = document.getElementById("exp_btn");
let exp_bar = document.getElementById("exp_bar");
info_btn.addEventListener("click", function(){
    toggle_info("The Button, One and Only, Here's a Challenge, Beat the Game Without Clicking it. click for enjoyment", "info", 1);
}, false);

gem_info.addEventListener("click", function() {
    toggle_info("I guess I was too lazy to figue out a better premium currency than gems. 4% chance of gem on click", "info", 1);
}, false);

exp_info.addEventListener("click", function() {
    toggle_info("did you know exp stands for evil xylophone points? *sigh* undertale did it years ago. click for exp", "info", 1);
}, false);

ath_info.addEventListener("click", function() {
    toggle_info("Athority gives you control over more buttons, just don't get to the negitives, I dont want to clean up anything. click for athority", "info", 1);
}, false);

circle.addEventListener("click", function() {
    add(1, num, "msg", "num");
}, false);

exp_btn.addEventListener("click", function() {
    add(1, exp, "msg3", "exp");
}, false);

gear.addEventListener("mouseover", function() {
    hover_effect();
}, false);

gear.addEventListener("mouseout", function() {
    end_hover_effect();
}, false);
    
gear.addEventListener("click", function() {
  document.write("hell naw it worked");
}, false);


function hover_effect() {
gear.style.fontSize = "70px"
gear_hover.style.right = "5px"
gear_hover.style.bottom = "5px"
}

function end_hover_effect() {
gear.style.fontSize = "60px"
gear_hover.style.right = "0px"
gear_hover.style.bottom = "0px"
}

let exp_border = document.getElementById("exp_border");

function transition() {
  if (x == 0 && event == 0) {
    event = 1;
    options_btn.style.width = '200px';
    options_btn.style.height = '200px';
    options_btn.style.borderColor = 'black';
    exp_border.style.right = "300px";
    options_btn.style.transform = 'rotate(450deg)';
    setTimeout(() => {  toggle_info("‎ ‎", "black_element", 0); }, 1000);
    setTimeout(() => {  options_btn.style.backgroundColor = 'white'; }, 1000);
    setTimeout(() => {  x = 1; }, 500);
    setTimeout(() => {  event = 0; }, 2000);

  }
  else if (x == 1 && event == 0) {
    event = 1;
    setTimeout(() => {  toggle_info(" ‎", "black_element", 0); }, 1000);
    options_btn.style.borderColor = 'white';
    options_btn.style.backgroundColor = 'black';
    setTimeout(() => {  exp_border.style.right = "200px"; }, 1250);
    setTimeout(() => {  options_btn.style.transform = 'rotate(0deg)'; }, 1000);
    setTimeout(() => {  options_btn.style.width = 100 + "px"; }, 1000);
    setTimeout(() => {  options_btn.style.height = 20 + "px"; }, 1000);
    x = 0;
    setTimeout(() => {  event = 0; }, 2000);
  }
}




function toggle_info(info2, id, is_info) {
	 let e = document.getElementById(id);
	 if (is_info == 1) {
	   e.innerHTML = info2;
	 }
       if (e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }


	    function gem_check(){
		  let chance = Math.floor(Math.random() * 50);
		  if (chance > 47) {
		  gems = ++gems;
		  document.getElementById("msg2").innerHTML = gems;
	    }
	    }
	    function add(amount, type, display, type2){
		  parseInt(amount);
		  parseInt(type);
		  type++;
	        document.getElementById(display).innerHTML = type;
		  if (type2 == "num") {
		  num = document.getElementById(display).innerHTML;
          }
		  else if (type2 == "exp") {
		  exp = document.getElementById(display).innerHTML;
		  bar_increase();
	    }
	    }   




	    function bar_increase() {
		let bar_percent = Math.floor(exp/exp_max * 100)/100
		exp_bar.style.width = bar_percent * 100 + "px";
		if (exp >= exp_max) {
		  level_up();
	    }
	    }
	    

	    function level_up() {
		exp = exp - exp_max;
		exp_max = exp_max * 2;
		bar_increase();
		document.getElementById("exp_max_msg").innerHTML = exp_max;
		level = ++level;
		document.getElementById("level_msg").innerHTML = level;
	    }
		


	    var gem_btn = document.getElementById("gem_btn");
	    gem_btn.addEventListener("click", gem_check);


  let options_btn = document.getElementById("options_btn");

options_btn.addEventListener("click", function() {
    transition();
}, false);
