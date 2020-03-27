window.onload = () => {

	console.log(data);
	console.log(data.works);
	console.log(data.works[3]);
  

	const works = data.works;


	works.forEach(function(worksItem){


   // create an iframe linkElement

   var frame = document.createElement("iframe");
       frame.className = "video_frames"
       frame.src = worksItem.v_src;


		// create an div html element
		var worksElement = document.createElement("div");
		    worksElement.className = "video_works";

        var linkElement = document.createElement("p");
    				linkElement.className = "video_titiles";
    				linkElement.innerText = worksItem.v_titles;



             var descriptionElement = document.createElement("p");
                descriptionElement.className = "video_descriptions";
                descriptionElement.innerText = worksItem.v_description;

    worksElement.append(frame);


		worksElement.append(linkElement);

    //worksElement.append(photoElement);

    worksElement.append(descriptionElement);




		document.body.append(worksElement);
	});

}
