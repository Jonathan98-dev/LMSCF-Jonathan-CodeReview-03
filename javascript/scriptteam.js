console.log(teamMembers)


for(i=0; i < teamMembers.length; i++)
{
	document.getElementById("m_teamcontainer").innerHTML += ("<div class = \"members"+[i]+"\">" +teamMembers[i].name) ;
	document.getElementById("m_teamcontainer").innerHTML += ("<div>" +teamMembers[i].email + "</div>");
	document.getElementById("m_teamcontainer").innerHTML += ("<img id = \"img"+[i]+ "\" src = \""+ teamMembers[i].image + "\"></div><div id = \"tel"+[i]+"\"></div><div id = \"id"+[i]+"\"></div><br><br>");
}

countertel1 = 1;
countertel2 = 1;
countertel3 = 1;



function tel()
{
	
	if(countertel1%2 != 0)
	{
	document.getElementById("tel0").innerHTML = ("Tel: " + teamMembers[0].tel);
	document.getElementById("id0").innerHTML = ("Id: " + teamMembers[0].Id);
	console.log(countertel1)

	countertel1++
	}
	else
	{
	document.getElementById("tel0").innerHTML = "";
	document.getElementById("id0").innerHTML = "";
	console.log(countertel1)

	countertel1++
	}

	
}

function tel1()
{
	if(countertel2%2 != 0)
	{
	document.getElementById("tel1").innerHTML = ("Tel: " + teamMembers[1].tel);
	document.getElementById("id1").innerHTML = ("Id: " + teamMembers[1].Id);
	console.log(countertel2)

	countertel2++
	}
	else
	{
	document.getElementById("tel1").innerHTML = "";
	document.getElementById("id1").innerHTML = "";
	console.log(countertel2)

	countertel2++
	}
}


function tel2()
{
	if(countertel3%2 != 0)
	{
	document.getElementById("tel2").innerHTML = ("Tel: " + teamMembers[2].tel);
	document.getElementById("id2").innerHTML = ("Id: " + teamMembers[2].Id);
	console.log(countertel3)

	countertel3++
	}
	else
	{
	document.getElementById("tel2").innerHTML = "";
	document.getElementById("id2").innerHTML = "";
	console.log(countertel3)

	countertel3++
	}
}



document.getElementById("img0").addEventListener("click",tel,false)

document.getElementById("img1").addEventListener("click",tel1,false)

document.getElementById("img2").addEventListener("click",tel2,false)