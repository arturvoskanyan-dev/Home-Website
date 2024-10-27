document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Կասեցնում է լռելյայն գործողությունը

    const targetId = this.getAttribute('href'); // Վերցնում է թիրախի ID-ն
    const targetElement = document.querySelector(targetId); // Գտնում է թիրախ բաժինը

    if (targetElement) {
      // Հարթ անցում դեպի բաժին
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Կարգավորում navbar-ի բարձրության համար
        behavior: 'smooth'
      });
    }

    // Փակում է offcanvas-ը, եթե բաց է
    const offcanvas = document.querySelector('.offcanvas.show');
    if (offcanvas) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasInstance.hide();
    }
  });
});
