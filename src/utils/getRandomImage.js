export function getRandomImage(images) {
    const max = images.length-1
  return images[Math.floor(Math.random() * max) + 1];
}