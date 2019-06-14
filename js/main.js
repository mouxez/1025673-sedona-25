document.addEventListener('DOMContentLoaded', function () {
  var hotelSearch = document.querySelector('.hotel-search');
  var hotelSearchForm = hotelSearch.querySelector('.hotel-search-form');

  hotelSearchForm.classList.remove('hotel-search-form-active');

  hotelSearch.addEventListener('click', function (event) {
      var target = event.target;

      if (target.classList.contains('main-button')) {
          hotelSearchForm.classList.toggle('hotel-search-form-active');
      }
  });
});
