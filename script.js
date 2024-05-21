document.querySelectorAll('.faq-item').forEach(faqItem => {
    const button = faqItem.querySelector('.icon-button');
    const answer = faqItem.querySelector('.answer');
    const question = faqItem.querySelector('.question');
    const icon = button.querySelector('img');

    const showAnswer = () => {
        if (answer.style.display === 'none' || answer.style.display === ''){
            answer.style.display = 'block';
            icon.src = 'assets/images/icon-minus.svg';
        } else {
            answer.style.display = 'none';
            icon.src = 'assets/images/icon-plus.svg';
        }    
    };

    button.addEventListener('click', showAnswer);
    question.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'IMG'){
            showAnswer();
        }
    });
});
