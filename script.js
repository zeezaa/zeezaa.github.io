var pos = 0;

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
		switch(id)
		{
			case "#home":
				pos=0;
			break;
			case "#projects":
				pos = 1;
			break
			case "#youtube":
				pos = 2;
			break;
			default:
				pos=3;
			break;
		}
	}
	moveDivs(bool);
}

function move(right)
{
	if(right && pos < 2)
		pos++;	
	else if(!right && pos > 0)
		pos--;
	
	moveDivs(false);
}

function moveDivs(load)
{
	document.getElementById("right").style.visibility="visible";
	document.getElementById("left").style.visibility="visible";
	
	if(pos > 1)
		document.getElementById("right").style.visibility="hidden";
	else if(pos < 1)
		document.getElementById("left").style.visibility="hidden";
	
	for(i=0;i<pos;i++)
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
	
	document.getElementById("back").style.visibility="hidden";
	switch(pos)
	{
		case 0:
			location.hash = "#home";
			document.title = "zeezaa | Home";
		break;
		case 1:
			location.hash = "#projects";
			document.title = "zeezaa | Projects";
			document.getElementById("back").style.visibility="visible";
		break;
		case 2:
			location.hash = "#youtube";
			document.title = "zeezaa | YouTube";
		break;
		default:
			location.hash = "#404";
			document.title = "zeezaa | 404";
		break;
	}
	
	document.getElementById(pos).style="margin-left: -100%; transition: all .5s; -wenkit-transition: all .5s; -webkit-transition: all .5s; -moz-transition: all .5s; -o-transition: all .5s; -ms-transition: all .5s;"
}

function goBack()
{
	document.getElementById("1").data="projects.html";
}