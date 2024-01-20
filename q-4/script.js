// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".
 
const data = [ 
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];




data.forEach(element => {
  const cards=document.querySelector(".cards");
  const container=document.createElement("div");
  container.classList.add("cards__card");
  cards.append(container);
  const imageBox=document.createElement("div")
  imageBox.classList.add("cards__card__img")
  container.append(imageBox)
  const imges=document.createElement("img");
  imges.src=element.src;
  imageBox.append(imges);
  const title=document.createElement("h3");
  title.textContent=element.title;
  title.classList.add("cards__card__body__title");
  container.append(title);
  const span=document.createElement("span");
  span.textContent="BSC";
  title.append(span);
  const footer=document.createElement("div");
  footer.classList.add("cards__card__footer");
  container.append(footer);
  const account=document.createElement("div");
  account.classList.add("cards__card__footer__account");
  footer.append(account);
  const footerImg=document.createElement("img");
  footerImg.src="avt-12.jpg";
  account.append(footerImg);
  const name=document.createElement("h4");
  name.textContent="Ralph Garraway";
  account.append(name);
  const button=document.createElement("button")
  button.textContent="Please Bid"
  account.append(button)
  const bag=document.createElement("i")
  bag.classList.add("ri-handbag-line")
  button.insertAdjacentElement("afterbegin", bag)
  const icon=document.createElement("span")
  icon.classList.add("cards__card__img__icon")
  icon.textContent="100"
  imageBox.append(icon)
  const heart=document.createElement("i")
  heart.classList.add("ri-heart-line")
  icon.insertAdjacentElement("afterbegin", heart)
  const selected=document.querySelector(".cardSelected")
  button.addEventListener("click", ()=>{
    selected.textContent=`you selected card #${element.id}`
  })
});