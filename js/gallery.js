const galleryApi = () => {
  fetch("https://images-api.nasa.gov/search?q=jupiter&page_size=9")
    .then((response) => response.json())
    .then((data) => {
      const wrapper = document.querySelector(".wrapper");
      console.log(data.collection.items);

      const linksData = data.collection.items.filter((item) => item.links);

      linksData.map((item) => {
        const template = `
          <img class ="img-api" src='${item.links[0].href}' />
        `;

        wrapper.innerHTML += template;
      });
    });
};
galleryApi();
