const menu = document.querySelector('.menu');
      const burgerButton = document.querySelector('#burger-button');
      const l1 = document.querySelector('#l1');
      const l2 = document.querySelector('#l2');
      const l3 = document.querySelector('#l3');
      const ipad = window.matchMedia("screen and (max-width: 767px)");
      ipad.addListener(validation);

      function validation(event)
      {
        if (event.matches)
        {
          burgerButton.addEventListener('click', showHide);
          l1.addEventListener('click', hide);
          l2.addEventListener('click', hide);
          l3.addEventListener('click', hide);
        }
        else
        {
          burgerButton.removeEventListener('click', showHide);
          l1.removeEventListener('click', hide);
          l2.removeEventListener('click', hide);
          l3.removeEventListener('click', hide);
        }
      }
      validation(ipad);

      function showHide()
      {
        if (menu.classList.contains('is-active'))
        {
          menu.classList.remove('is-active');
        }
        else
        {
          menu.classList.add('is-active');
        }
      }
      function hide()
      {
        if (menu.classList.contains('is-active'))
        {
          menu.classList.remove('is-active');
        }
      }