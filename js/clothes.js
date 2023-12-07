const clothes = [
	
	{
	  productName: "Hoodie blue",
	  color: "blue",
	  size: "medium",
	  price: 699,
	  image: "assets/images/blue-Hoodie.jpg",
	},
	{
	  productName: "Hoodie green",
	  color: "green",
	  size: "small",
	  price: 499,
	  image: "assets/images/green-Hoodie.jpg",
	},
	{
	  productName: "Hoodie red",
	  color: "red",
	  size: "large",
	  price: 170,
	  image: "assets/images/red-Hoodie.jpg",
	},
	{
	  productName: "Hoodie green",
	  color: "green",
	  size: "medium",
	  price: 99,
	  image: "assets/images/green-Hoodie.jpg" ,
	},
	{
	  productName: "Hoodie green",
	  color: "green",
	  size: "small",
	  price: 499,
	  image: "assets/images/green-Hoodie.jpg",
	},
	{
	  productName: "Hoodie green",
	  color: "green",
	  size: "medium",
	  price: 99,
	  image: "assets/images/green-Hoodie.jpg" ,
	},
	{
	  productName: "Hoodie blue",
	  color: "blue",
	  size: "small",
	  price: 299,
	  image: "assets/images/blue-Hoodie.jpg",
	},
	{
	  productName: "Hoodie blue",
	  color: "blue",
	  size: "medium",
	  price: 699,
	  image: "assets/images/blue-Hoodie.jpg",
	},
	{
	  productName: "Hoodie red",
	  color: "red",
	  size: "large",
	  price: 170,
	  image: "assets/images/red-Hoodie.jpg",
	},
		{
	  productName: "Hoodie green",
	  color: "green",
	  size: "medium",
	  price: 99,
	  image: "assets/images/green-Hoodie.jpg" ,
	},
	{
	  productName: "Hoodie blue",
	  color: "blue",
	  size: "large",
	  price: 105,
	  image: "assets/images/blue-Hoodie.jpg",
	},
	{
	  productName: "Hoodie blue",
	  color: "blue",
	  size: "large",
	  price: 105,
	  image: "assets/images/blue-Hoodie.jpg",
	},
	{
	  productName: "Hoodie red",
	  color: "red",
	  size: "small",
	  price: 250,
	  image: "assets/images/red-Hoodie.jpg",
	},
	{
	  productName: "Hoodie red",
	  color: "red",
	  size: "medium",
	  price: 280,
	  image: "assets/images/red-Hoodie.jpg",
	},
	{
	  productName: "Hoodie blue",
	  color: "blue",
	  size: "medium",
	  price: 699,
	  image: "assets/images/blue-Hoodie.jpg",
	},
	{
	  productName: "Hoodie green",
	  color: "green",
	  size: "small",
	  price: 499,
	  image: "assets/images/green-Hoodie.jpg",
	},
  ];


  function displayClothes(clothesArray) {
	const clothesList = document.querySelector('#clothesList');
	clothesList.innerHTML = '';

	clothesArray.forEach(item => {
	  const clothingItem = document.createElement('div');
	  clothingItem.innerHTML = `
		<img src="${item.image}" alt="${item.productName}">
		<h3>${item.productName}</h3>
		<p>Color: ${item.color}</p>
		<p>Size: ${item.size}</p>
		<p>Price: ${item.price}.00 kr.</p>
	  `;
	  clothesList.appendChild(clothingItem);
	});
  }

  function filterClothesByColorAndSize() {
	const colorFilter = document.querySelector('#colorFilter').value;
	const sizeFilter = document.querySelector('#sizeFilter').value;


	let filteredClothes = clothes;

	if (colorFilter !== 'all') {
	  filteredClothes = filteredClothes.filter(item => item.color === colorFilter);
	}

	if (sizeFilter !== 'all') {
	  filteredClothes = filteredClothes.filter(item => item.size === sizeFilter);
	}


	displayClothes(filteredClothes);
  }


  function sortClothesByPriceLowToHigh() {
	const sortedClothes = clothes.slice().sort((a, b) => a.price - b.price);
	displayClothes(sortedClothes);
  }
  function sortClothesByPriceHighToLow() {
	const sortedClothes = clothes.slice().sort((b, a) => a.price - b.price);
	displayClothes(sortedClothes);
  }

  // Initial display of clothes
  displayClothes(clothes);