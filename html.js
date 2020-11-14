window.onload = () => {

	console.log(data);
	console.log(data.works);
	console.log(data.works[3]);

	const works = data.works;


	works.forEach(function(worksItem){





		// create an div html element
		var worksElement = document.createElement("div");
		    worksElement.className = "works";

				var linkElement = document.createElement("a");
				worksElement.className = "titles";
				linkElement.href = worksItem.url;
				linkElement.innerText = worksItem.titles;

		// create an p element for the name
		//var titleElement = document.createElement("p");
	      //titleElement.className = "titles";
		    //titleElement.innerText = worksItem.titles;




    var photoElement = document.createElement("img");
	      photoElement.src = "i/" + worksItem.image;




        // create an p element for the name
        //var makerElement = document.createElement("h1");
            //makerElement.className = "maker";
            //makerElement.innerText = worksItem.maker;

            // create an p element for the name
            var descriptionElement = document.createElement("p");
                descriptionElement.className = "description";
                descriptionElement.innerText = worksItem.description;





    // create an span element for the category
    //var categoryElement = document.createElement("span");
		//categoryElement.className = "category";
		//categoryElement.innerText = worksItem.category;

		//var priceElement = document.createElement("span");
	//	priceElement.className = "price";
		//priceElement.innerText = worksItem.priceEuro;
		// adding the virtual elements to actual html page by appending them
		// to body element

		worksElement.append(linkElement);
		//worksElement.append(titleElement);
    worksElement.append(photoElement);
    //worksElement.append(makerElement);
    worksElement.append(descriptionElement);

		//worksElement.append(photoElement);
		//worksElement.append(categoryElement);
		//worksElement.append(priceElement);


		document.body.append(worksElement);
	});

}
