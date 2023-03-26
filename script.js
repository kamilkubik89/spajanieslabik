const syllablesDiv = document.getElementById('syllables');
const wordDiv = document.getElementById('word');
const resetButton = document.getElementById('reset');

const words = [
    ['ma', 'ma'],
    ['au', 'to'],
    ['te', 'le', 'fón'],
    ['ba', 'ba'],
    ['scho', 'dík'],
    ['ká', 'ra'],
    ['po', 'li', 'ca' ],
    ['re', 'pa'],
    ['po', 'le', 'no'],
    ['ko', 'le', 'no'],
    ['ta', 'ta'],
    ['mes', 'to'],
    ['la', 'ma'],
    ['jež', 'ko'],
    ['me', 'no'],
    ['zvie', 'ra'],
    ['pa', 'lec'],
    ['ru', 'ka'],
    ['hla', 'va'],
];

function createSyllableElement(syllable) {
    const span = document.createElement('span');
    span.textContent = syllable;
    span.classList.add('syllable');
    span.addEventListener('click', () => {
        wordDiv.textContent += syllable;
        span.style.display = 'none';
    });
    return span;
}

function displaySyllables(syllables) {
    syllablesDiv.innerHTML = '';
    wordDiv.textContent = '';
    syllables.forEach((syllable) => {
        const syllableElement = createSyllableElement(syllable);
        syllablesDiv.appendChild(syllableElement);
    });
}

function resetGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const shuffledSyllables = words[randomIndex].sort(() => Math.random() - 0.5);
    displaySyllables(shuffledSyllables);
}

resetButton.addEventListener('click', resetGame);

resetGame();
