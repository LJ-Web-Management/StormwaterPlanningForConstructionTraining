document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ accordion (each faq-list/faq-page-list container manages its own open item)
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = btn.nextElementSibling;
      var container = btn.closest('.faq-list, .faq-page-list') || document;

      container.querySelectorAll('.faq-question').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.nextElementSibling.style.maxHeight = null;
        }
      });

      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      answer.style.maxHeight = expanded ? null : answer.scrollHeight + 'px';
    });
  });

  // Pricing toggle (filters the "Get Your Team Trained Today" cards by course)
  var pricingToggle = document.querySelector('.pricing-toggle');
  var pricingGrid = document.getElementById('pricingGrid');
  if (pricingToggle && pricingGrid) {
    var pricingCards = pricingGrid.querySelectorAll('.pricing-card');
    var toggleButtons = pricingToggle.querySelectorAll('.pricing-toggle-btn');

    var selectCourse = function (course) {
      toggleButtons.forEach(function (btn) {
        var isActive = btn.dataset.course === course;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      pricingCards.forEach(function (card) {
        card.classList.toggle('is-visible', card.dataset.course === course);
      });
    };

    toggleButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectCourse(btn.dataset.course);
      });
    });

    // Any "Enroll Now" link tagged with a course (course cards, hero, etc.)
    // pre-selects that course's pricing card before the page scrolls to #pricing.
    document.querySelectorAll('a[data-course]').forEach(function (link) {
      link.addEventListener('click', function () {
        selectCourse(link.dataset.course);
      });
    });
  }

  // Enroll forms (seat count only; each course has its own form/pricing)
  document.querySelectorAll('.enroll-form').forEach(function (enrollForm) {
    var formId = enrollForm.id;
    var seatsInput = enrollForm.querySelector('input[type="number"]');
    var formTotal = enrollForm.querySelector('.form-total');
    var formSuccess = document.getElementById(enrollForm.dataset.successTarget);
    var basePrice = parseFloat(enrollForm.dataset.pricePerSeat);

    if (seatsInput && formTotal) {
      var updatePricing = function () {
        var seats = Math.max(1, parseInt(seatsInput.value, 10) || 1);
        formTotal.textContent = 'Total: $' + (seats * basePrice).toFixed(2);
      };
      seatsInput.addEventListener('input', updatePricing);
      updatePricing();
    }

    if (formSuccess) {
      enrollForm.addEventListener('submit', function (e) {
        e.preventDefault();
        enrollForm.hidden = true;
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  });

});
