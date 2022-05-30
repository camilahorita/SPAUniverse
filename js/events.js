export default function({aboutPage, homePage, explorePage, image}) {
  function removeSelected () {
    aboutPage.classList.remove("bold");
    homePage.classList.remove("bold");
    explorePage.classList.remove("bold");
  }
  aboutPage.addEventListener('click', () => {
    removeSelected();
    aboutPage.classList.add("bold");
    image.src= "images/mountains-universe2.png"
  })
  homePage.addEventListener('click', () => {
    removeSelected();
    homePage.classList.add("bold");
    image.src= "images/mountains-universe.png"
  })
  explorePage.addEventListener('click', () => {
    removeSelected();
    explorePage.classList.add("bold");
    image.src= "images/mountains-universe3.png"
  })
}