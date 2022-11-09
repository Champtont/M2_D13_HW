const bookDiv = document.getElementById("bookrows");

const hideThis = (event) => {
  let btn = event.target.parentNode;
  let scard = btn.parentNode;
  let bcard = scard.parentNode;
  let lcard = bcard.parentNode;
  let colcard = lcard.parentNode;
  colcard.parentNode.removeChild(colcard);
  console.log("test2");
};

const displayBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books") //
    .then((response) => response.json())
    .then((books) => {
      books.forEach((books) => {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
        bookCard.innerHTML = `<div class="card mb-3">
        <img src="${books.img}" class="card-img-top img-fluid" style="width:100%; height:350px; object-fit:cover;" alt="...">
        <div class="card-body">
          <h5 class="card-title text-truncate">${books.title}</h5>
          <p class="card-text"><span>Price:</span><span class="price"> ${books.price}</span></p>
          <div id="btngroup" class="row">
          <div id="addbox" class="col-12">
          <button class="btn btn-primary addbtn col-12">Add</button>
          </div>
          <div id="skipbox" class="col-12">
          <button class="btn btn-danger skipbtn col-12">skip</button>
          </div>
          </div>
        </div>
      </div>`;
        bookDiv.appendChild(bookCard);
        console.log(books.title); //this was a test to be sure that I am accessing properly
      });
      //here adding add function because I need access to info from here
      const addThis = (event) => {
        const clickedCard = event.target.closest(".card");
        const clickedTitle = clickedCard.querySelector("h5").innerText;
        const price = clickedCard.querySelector(".price").innerText;
        const Ul = document.getElementById("bookList");
        const li = document.createElement("li");

        li.innerHTML = `<li class="list-group-item">${clickedTitle} <span class="price">${price}<span><button class="btn btn-danger ml-3">Remove</button></li>`;
        Ul.appendChild(li);

        console.log("test1");
      };
      //here I will create a loop for my btns
      const addbtn = document.querySelectorAll(".addbtn");
      const skipbtn = document.querySelectorAll(".skipbtn");

      for (let i = 0; i < addbtn.length; i++) {
        addbtn[i].addEventListener("click", addThis);
      }
      skipbtn.forEach((skipbtn) => {
        skipbtn.addEventListener("click", hideThis);
      });

      console.log(books);
    });
};
displayBooks();
