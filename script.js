let stars = document.querySelectorAll('.stars  i');

let message = document.querySelector('#message');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star, index2) => {
      if (index1 >= index2) {
        star.classList.add('active');
        message.innerHTML = 'thank you';
      } else {
        star.classList.remove('active');
        message.innerHTML = 'fuck you';
      }
    });
  });
});