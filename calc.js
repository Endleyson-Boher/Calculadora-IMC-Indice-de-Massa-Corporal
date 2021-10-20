
		function calc()
		{
			let i,cai, alt, peso, Imc, n, status, hm, sexo, im;
			 i = formEndy.data.value;
			 n = formEndy.nome.value;
			 hm = formEndy.sexo.value;
			 alt = formEndy.Altura.value;
			 peso = formEndy.Peso.value;
			i = parseFloat(i);
			ida = 2021 - i;
			Imc = peso / (alt ^ 2);
			if  (ida >= 2 && ida <= 20 )
			{
				status = " uma criança ";			
				if (Imc < 18.5) 
				{
					im = "baixo peso";
				}
				if (Imc >= 18.5 && Imc <= 24.9)
				{
					im = "normoponderal";
				}
				if (Imc >= 25 && Imc <= 29.9)
				{
					im = "excesso de peso";
				}
				if (Imc >= 30 )
				{
					im = "obesidade";
				}
			}
			if (ida > 20 && ida < 65) 
			{
				status = "um adulto ";
				if (Imc < 18.5) 
				{
					im = "baixo peso";
				}
				if (Imc >= 18.5 && Imc <= 24.9)
				{
					im = "normoponderal";
				}
				if (Imc >= 25 && Imc <= 29.9)
				{
					im = "pré-obesidade";
				}
				if (Imc >= 30 && Imc <= 34.9)
				{
					im = "obesidade, grau I";
				}
				if (Imc >= 35 && Imc <= 39.9)
				{
					im = "obesidade, grau II";
				}
				if (Imc >= 40)
				{
					im = "obesidade mórbida";
				}
			}
			if (ida >= 65)
			{
				status = "um idoso ";
				if (Imc < 22)
				{
					im = "magreza";
				}
				if (Imc >= 22 && Imc <= 27)
				{
					im = "eutrofia(normoponderal)";
				}
				if (Imc > 27)
				{
					im = "excesso de peso";
				}
			}

			document.getElementById("Resultados").innerHTML="Olá " +n +", você é " +status +"e tem " +ida +" anos," +" é do sexo " +hm +", seu IMC é de: " +Imc.toFixed(2) +" e você está com " +im +"!";

		}