
function slide_in(){
		 			
		 			var slideIn = document.getElementById("sidebar");
					var background = document.getElementById("background");
					var menuicon = document.getElementById("menu");
					if(slideIn.style.left == "-760px")
					{slideIn.style.left = "0px";
					 slideIn.style.transitionDuration = "0.35s";
					 menuicon.style.left = "770px";
					 menuicon.style.transitionDuration = "0.35s";
					 background.style.left = "760px";
					 background.style.transitionDuration = "0.35s";
					 toggleOverlay();
					 $('#menu').hide();
					 }
					else
					{
					 	slideIn.style.left = "-760px";
						slideIn.style.transitionDuration = "0.35s";
						menuicon.style.left = "10px";
					    menuicon.style.transitionDuration = "0.35s";
					 	background.style.left = "0px";
					 	background.style.transitionDuration = "0.35s";
					 }
					}
					
function slide_out(){
		 			 $("#sidebar").animate({left:"-760px"},250);
					 $("#background").animate({left:"0px"},250);
					 $("#menu").animate({left:"10px"},250);
					 toggleOverlay();
					 $('#menu').show();
					    
					 }
function toggleOverlay(){
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('sidebar');
	overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "block";
	} else {
		overlay.style.display = "block";
		specialBox.style.display = "block";
	}
}					 
function swapstylesheet(sheet){
		 				var pagestyle =  document.getElementById("pagestyle");
						if(sheet == 'css/past.css')
						{pagestyle.setAttribute('href',sheet);}
						else
						{pagestyle.setAttribute('href',css/future);}
						}
var Slider = function() { this.initialize.apply(this, arguments) }
    Slider.prototype = {
		initialize: function(slider) {
        this.ul = slider.children[0]
        this.li = this.ul.children

        // make <ul> as large as all <li>’s
        this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px'
        this.currentIndex = 0
      },

      goTo: function(index) {
        // filter invalid indices
        if (index < 0 || index > this.li.length - 1)
          return
          	// move <ul> left
           this.ul.style.left = '-' + (100 * index) + '%'
           this.currentIndex = index
      	   },
		   
      goToPrev: function() {
        this.goTo(this.currentIndex - 1)
      },

      goToNext: function() {
        this.goTo(this.currentIndex + 1)
      }
    }
						
function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var mt = today.getMonth()+1;
    var d = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    mt = checkTime(mt);
    d = checkTime(d);
    document.getElementById("pMonth").innerHTML = mt;
	document.getElementById("pDate").innerHTML = d;
	document.getElementById("pYear").innerHTML = y;
	document.getElementById("pHour").innerHTML = h;
    document.getElementById('pMin').innerHTML = m;
	document.getElementById("pSeconds").innerHTML = s;
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  <!--// add zero in front of numbers < 10-->
    return i;
}