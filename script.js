const form = document.querySelector('form');
const imageContainer = document.querySelector('#imageContainer');

form.addEventListener('submit', function(event) {  //callback function that will be executed when the form is submitted.
	event.preventDefault(); // It prevents the default form submission behavior which would cause the page to reload.

	const image = document.querySelector('#image').files[0];
	const title = document.querySelector('#title').value;
	const description = document.querySelector('#description').value;
    const price= document.querySelector('#price').value;

	if (!image || !title || !description || !price) {
		const error = document.createElement('div');
		error.setAttribute('id', 'error');
		error.textContent = 'Please fill out all fields.';
		form.insertBefore(error, form.firstChild);
		return;
	}

	const reader = new FileReader  //new FileReader object that will be used to read the uploaded image file.
    reader.onload = function(event)  //onload event handler for the FileReader object.called when the image file has been read successfully.
     { 

        const newDiv = document.createElement('div');
     

        const img = document.createElement('img')  //create a new img element that will display the uploaded image.
        img.setAttribute('src', event.target.result);
        img.setAttribute('alt', title);    //sets the alt attribute of the img element to the title of the uploaded image.
        newDiv.appendChild(img); //append the img element to the image container element.
    
        const imgTitle = document.createElement('h2');
        imgTitle.textContent = title;    //set the text content of the h2 element to the title of the uploaded image.
        newDiv.appendChild(imgTitle);
    
        const imgDesc = document.createElement('p');
        imgDesc.textContent = description;
        newDiv.appendChild(imgDesc);

        const imgPrice = document.createElement('h4');
        imgPrice.textContent = price;
        newDiv.appendChild(imgPrice);
    
        newDiv.style.border = '3px solid black';
        newDiv.style.borderRadius = '7px';
        imageContainer.appendChild(newDiv);

        form.reset(); //reset the form input fields to their default values.
    }
    
    reader.readAsDataURL(image);  //used to read the contents
})
    