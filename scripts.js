let lostItems = [];
let foundItems = [];

function displayItems() {
    const lostItemsList = document.getElementById('lostItemsList');
    const foundItemsList = document.getElementById('foundItemsList');
    
    lostItemsList.innerHTML = '';
    foundItemsList.innerHTML = '';
    
    lostItems.forEach(item => {
        lostItemsList.innerHTML += `<div class="item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <img src="${item.image}" alt="item image" width="100">
        </div>`;
    });

    foundItems.forEach(item => {
        foundItemsList.innerHTML += `<div class="item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <img src="${item.image}" alt="item image" width="100">
        </div>`;
    });
}

function uploadItem() {
    const name = document.getElementById('itemName').value;
    const description = document.getElementById('itemDescription').value;
    const imageFile = document.getElementById('itemImage').files[0];
    const imageURL = URL.createObjectURL(imageFile);
    
    const newItem = { name, description, image: imageURL };

    if (name && description && imageFile) {
        if (confirm("Is this a Lost Item?")) {
            lostItems.push(newItem);
        } else {
            foundItems.push(newItem);
        }

        displayItems();
    } else {
        alert("Please fill in all fields.");
    }
}

document.getElementById('searchBar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const filteredLost = lostItems.filter(item => item.name.toLowerCase().includes(query));
    const filteredFound = foundItems.filter(item => item.name.toLowerCase().includes(query));

    const lostItemsList = document.getElementById('lostItemsList');
    const foundItemsList = document.getElementById('foundItemsList');
    
    lostItemsList.innerHTML = '';
    foundItemsList.innerHTML = '';

    filteredLost.forEach(item => {
        lostItemsList.innerHTML += `<div class="item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <img src="${item.image}" alt="item image" width="100">
        </div>`;
    });

    filteredFound.forEach(item => {
        foundItemsList.innerHTML += `<div class="item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <img src="${item.image}" alt="item image" width="100">
        </div>`;
    });
});
