var pos = 0;
console.log("on");

$(document).keyup(function(e){
    if (e.keyCode==39)
	{
		if(document.getElementById("right").style.visibility=="visible")
			move(true);
	}
	else if(e.keyCode==37)
	{
		if(document.getElementById("left").style.visibility=="visible")
			move(false);
	}
});

function hash(bool)
{
	var id = window.location.hash;
	if(id!=null)
	{
		if(id=="#extra")
			pos=-1;
		else if(id=="#home")
			pos=0;
		if(id=="#projects")
			pos = 1;
		else if(id=="#youtube")
			pos = 2;
		else if(id=="#404")
			pos = 3;
	}
	moveDivs(bool);
}

function move(right)
{
	if(right && pos < 3)
		pos++;	
	else if(!right && pos > -1)
		pos--;
	
	moveDivs(false);
}

function moveDivs(load)
{
	document.getElementById("right").style.visibility="visible";
	document.getElementById("left").style.visibility="visible";
	
	if(pos > 1)
		document.getElementById("right").style.visibility="hidden";
	else if(pos < 0)
		document.getElementById("left").style.visibility="hidden";
	
	for(i=-1;i<pos;i++)
	{
		if(load)
			document.getElementById(i).style="margin-left: -200%;"
		else
			document.getElementById(i).style="margin-left: -200%; transition: all .5s; -wenkit-transition: all .5s; -webkit-transition: all .5s; -moz-transition: all .5s; -o-transition: all .5s; -ms-transition: all .5s;"
	}
	for(i=3;i>pos;i--)
	{
		if(load)
			document.getElementById(i).style="margin-left: 100%;"
		else
			document.getElementById(i).style="margin-left: 100%; transition: all .5s; -wenkit-transition: all .5s; -webkit-transition: all .5s; -moz-transition: all .5s; -o-transition: all .5s; -ms-transition: all .5s;"
	}
	
	if(pos==-1)
	{
		location.hash = "#extra";
		document.title = "zeezaa | Extra";
	}
	else if(pos==1)
	{
		location.hash = "#projects";
		document.title = "zeezaa | Projects";
	}
	else if(pos==2)
	{
		location.hash = "#youtube";
		document.title = "zeezaa | YouTube";
	}
	else if(pos==3)
	{
		location.hash = "#youtube";
		document.title = "zeezaa | 404";
	}
	else
	{
		location.hash = "#home";
		document.title = "zeezaa | Home";
	}
	
	if(pos == 1)
	{
		document.getElementById("back").style.visibility="visible";
	}
	else
	{
		document.getElementById("back").style.visibility="hidden";
	}	
	
	document.getElementById(pos).style="margin-left: -100%; transition: all .5s; -wenkit-transition: all .5s; -webkit-transition: all .5s; -moz-transition: all .5s; -o-transition: all .5s; -ms-transition: all .5s;"
}

function goBack()
{
	document.getElementById("1").data="projects.html";
}