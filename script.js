const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.icon');

  question.addEventListener('click', () => {
    // Toggle display of answer
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Toggle icon between plus and minus
    icon.classList.toggle('plus');
    icon.classList.toggle('minus');

    // Hide other answers
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-answer').style.display = 'none';
        otherItem.querySelector('.icon').classList.add('plus');
        otherItem.querySelector('.icon').classList.remove('minus');
      }
    });
  });
});
