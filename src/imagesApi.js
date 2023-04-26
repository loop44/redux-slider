export const getImages = (length = 10) => {
  return fetch(`https://api.unsplash.com/photos/`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      'Content-Type': 'application/json'
    })
  })
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.alt_description;
        const url = c?.urls?.regular;
        images.push({ title, url });
      });
      return images.slice(0, length); // remove the extra cats
    });
};
