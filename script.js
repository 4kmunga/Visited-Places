// 1. CONSTRUCTOR Function
function VisitedPlace(location, landmark, time, notes, imageUrl) {
    this.location = location;
    this.landmark = landmark;
    this.time = time || "N/A";
    this.notes = notes || "No notes added.";
    this.imageUrl = imageUrl;
}

// 2.  PROTOTYPE Method

VisitedPlace.prototype.createHTML = function() {
    return `
        <li class="place-card">
            <h3>📍 ${this.location}</h3>
            <p><strong>Landmark:</strong> ${this.landmark}</p>
            <p><strong>Time:</strong> ${this.time}</p>
            <p><em>${this.notes}</em></p>
            ${this.imageUrl ? `<img src="${this.imageUrl}" alt="View of ${this.landmark}">` : ''}
        </li>
    `;
};

// 3. The Main Function (Called by the button)
function handleAddVisitedPlaces() {
    // Get values from the form
    const loc = document.getElementById('location').value;
    const land = document.getElementById('landmark').value;
    const time = document.getElementById('timeOfTheYear').value;
    const note = document.getElementById('notes').value;
    const img = document.getElementById('imageUrl').value;

    // Validation
    if (!loc || !land) {
        alert("Location and Landmark are required!");
        return;
    }

    // CREATE A NEW INSTANCE using the Constructor
    const newPlace = new VisitedPlace(loc, land, time, note, img);

    // USE THE PROTOTYPE METHOD to get the HTML
    const list = document.getElementById('list-of-places');
    list.innerHTML += newPlace.createHTML();

    // Clear the form
    document.getElementById('form-group').reset();
}
