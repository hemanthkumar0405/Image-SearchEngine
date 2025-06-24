document.getElementById("btn").addEventListener("click", async () => {
    const search = document.getElementById("input").value.trim();
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous images
    if (!search) {
        alert("Please enter a search term.");
        return;
    }
    try {
        const response = await fetch(`https://pixabay.com/api/?key=38192665-2d3ab1349b930bd3f02761df2&q=${encodeURIComponent(search)}&image_type=photo&per_page=80`);
        const data = await response.json();
        if (data.hits.length === 0) {
            container.innerHTML = "<p>No images found.</p>";
            return;
        }
        data.hits.forEach((imgData) => {
            const imgElement = document.createElement("img");
            imgElement.src = imgData.largeImageURL;
            imgElement.alt = imgData.tags;
            container.appendChild(imgElement);
        });
    } catch (error) {
        console.error("Error fetching images:", error);
        container.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
});

