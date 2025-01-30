document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.lg\\:hidden button');
  const mobileMenu = document.querySelector("[role='dialog']");
  const closeMenuButton = mobileMenu.querySelector('button');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  closeMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target)
    ) {
      mobileMenu.classList.add('hidden');
    }
  });
});
