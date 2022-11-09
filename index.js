const bookDiv = document.getElementById("bookrows");

const addThis = () => {
  console.log("test1");
};
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
          <p class="card-text"><span>Price:</span> ${books.price}</p>
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
