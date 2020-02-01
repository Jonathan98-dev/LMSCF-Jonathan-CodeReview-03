console.log(teamMembers)


for(i=0; i < teamMembers.length; i++)
{
	document.getElementById("m_teamcontainer").innerHTML += ("<div class = \"members"+[i]+"\">" +teamMembers[i].name) ;
	document.getElementById("m_teamcontainer").innerHTML += ("<div>" +teamMembers[i].email + "</div>");
	document.getElementById("m_teamcontainer").innerHTML += ("<img id = \"img"+[i]+ "\" src = \""+ teamMembers[i].image + "\"></div><div id = \"tel"+[i]+"\"></div><div id = \"id"+[i]+"\"></div><br><br>");
}


function tel()
{
	document.getElementById("tel0").innerHTML = ("Tel: " + teamMembers[0].tel);
	document.getElementById("id0").innerHTML = ("Id: " + teamMembers[0].Id);

	console.log("test")
}

function tel1()
{
	document.getElementById("tel1").innerHTML = ("Tel: " + teamMembers[1].tel);
	document.getElementById("id1").innerHTML = ("Id: " + teamMembers[0].Id);
	console.log("test")
}


function tel2()
{
	document.getElementById("tel2").innerHTML = ("Tel: " + teamMembers[2].tel);
	document.getElementById("id2").innerHTML = ("Id: " + teamMembers[0].Id);
	console.log("test")
}



document.getElementById("img0").addEventListener("click",tel,false)

document.getElementById("img1").addEventListener("click",tel1,false)

document.getElementById("img2").addEventListener("click",tel2,false)