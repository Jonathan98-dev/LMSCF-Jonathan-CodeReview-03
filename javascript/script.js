

function calculateInsurance()
{
	var name = document.getElementById("m_formname").value;
	console.log(name);

	var age = document.getElementById("m_formage").value;
	console.log(age);

	var country = document.getElementById("m_country").value;
	console.log(country);

	var horsepower = document.getElementById("m_formhp").value;
	console.log(horsepower);


	switch(country)
	{
		case "Austria":

			var austria = Math.floor((Number(horsepower)*100) / (Number(age) + 50));
			console.log(austria);

			document.getElementById("m_formcalculation").innerHTML= (name + ", your insurance costs " + austria + "€");

		break;

		case "Hungary":

			var hungary = Math.floor((Number(horsepower)*120) / (Number(age) + 100));
			console.log(hungary);

			document.getElementById("m_formcalculation").innerHTML= (name + ", your insurance costs " + hungary + "€");

		break;

		case "Grecce":

			var greece = Math.floor((Number(horsepower)*150) / (Number(age+3) + 50));
			console.log(greece);

			document.getElementById("m_formcalculation").innerHTML= (name + ", your insurance costs " + greece + "€");

		break;



	}














	
}

document.getElementById("m_formbutton").addEventListener("click",calculateInsurance,false)