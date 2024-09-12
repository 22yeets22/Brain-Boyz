const navbar = document.createElement('nav');
navbar.innerHTML = `
  <nav class="navbar">
    <div class="logo"><a href="/">Brain Boyz</a></div>
    <ul class="nav-links">
      <li><a href="/mission">Our Mission</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/webinar">Webinar</a></li>
      <li><a href="/bookings">Bookings</a></li>
    </ul>
  </nav>
`;

document.addEventListener("DOMContentLoaded", function(event) {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', '/assets/css/nav.css');
  document.head.appendChild(link);
  document.body.insertBefore(navbar, document.body.firstChild);
});
