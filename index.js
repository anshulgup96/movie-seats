const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seats:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie_select = document.getElementById("movie");

const updateSelectedCount = () => {
  const selected_seats = document.querySelectorAll('.row .seat.selected');
  const selected_seats_count = selected_seats.length;
  const ticket_price = +movie_select.value;
  count.innerText = selected_seats_count;
  total.innerText = selected_seats_count * ticket_price;
}

container.addEventListener("click", e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
})

movie_select.addEventListener("change", () => {
  updateSelectedCount();
})
