console.log(teamMembers)


for(i=0; i < teamMembers.length; i++)
{
	document.getElementById("m_teamcontainer").innerHTML += ("<div class = \"members"+[i]+"\">" +teamMembers[i].name) ;
	document.getElementById("m_teamcontainer").innerHTML += ("<div>" +teamMembers[i].email + "</div>");
	document.getElementById("m_teamcontainer").innerHTML += ("<img id = \"img"+[i]+ "\" src = \""+ teamMembers[i].image + "\"></div><div id = \"tel"+[i]+"\"></div><div id = \"id"+[i]+"\"></div><br><br>");
}

countertel1 = true;
countertel2 = true;
countertel3 = true;


function tel()
{
	
	if(countertel1 == true)
	{
	document.getElementById("tel0").innerHTML = ("Tel: " + teamMembers[0].tel);
	document.getElementById("id0").innerHTML = ("Id: " + teamMembers[0].Id);
	console.log(countertel1)

	countertel1=false;
	}
	else
	{
	document.getElementById("tel0").innerHTML = "";
	document.getElementById("id0").innerHTML = "";
	console.log(countertel1)

	countertel1=true
	}

	
}

function tel1()
{
	if(countertel2==true)
	{
	document.getElementById("tel1").innerHTML = ("Tel: " + teamMembers[1].tel);
	document.getElementById("id1").innerHTML = ("Id: " + teamMembers[1].Id);
	console.log(countertel2)

	countertel2=false
	}
	else
	{
	document.getElementById("tel1").innerHTML = "";
	document.getElementById("id1").innerHTML = "";
	console.log(countertel2)

	countertel2=true
	}
}


function tel2()
{
	if(countertel3==true)
	{
	document.getElementById("tel2").innerHTML = ("Tel: " + teamMembers[2].tel);
	document.getElementById("id2").innerHTML = ("Id: " + teamMembers[2].Id);
	console.log(countertel3)

	countertel3=false
	}
	else
	{
	document.getElementById("tel2").innerHTML = "";
	document.getElementById("id2").innerHTML = "";
	console.log(countertel3)

	countertel3=true
	}
}



document.getElementById("img0").addEventListener("click",tel,false)

document.getElementById("img1").addEventListener("click",tel1,false)

document.getElementById("img2").addEventListener("click",tel2,false)