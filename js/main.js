$(function () {
  menu = $('nav ul')

  $('#openup').on('click', function (e) {
    e.preventDefault() 
    menu.slideToggle()
  })

  $(window).resize(function () {
    var w = $(this).width() 
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style')
    }
  })

  $('nav li').on('click', function (e) {
    var w = $(window).width() 
    if (w < 480) {
      menu.slideToggle()
    }
  })
  $('.open-menu').height($(window).height())
})


// modal
const contactModal = document.getElementById('modal-container')
const modalBtn = document.getElementsByClassName('modal-btn')
// const closeBtn = document.getElementById('close-btn')

;[].slice.call(modalBtn)
  .forEach((button) => {
    button.addEventListener('click', function () {
      contactModal.style.display = 'block'
    })
  });

// closeBtn
//   .addEventListener('click', function() {
//     contactModal.style.display = 'none'
//   })

window
  .addEventListener('click', function(e) {
    if (e.target == contactModal) {
      contactModal.style.display = 'none';
    }
  })
