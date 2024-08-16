document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnlogin-popup');
  const iconClose = document.querySelector('.icon-close');

  btnPopup.addEventListener('click', () => { 
    wrapper.classList.add('active-popup');
  });

  registerLink.addEventListener('click', () => { 
    wrapper.classList.add('active');
  });

  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });

  iconClose.addEventListener('click', () => { 
    wrapper.classList.remove('active-popup');
  });
});
