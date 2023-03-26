Tento kód vytvorí jednoduchú hru, ktorá zobrazuje slabiky z náhodne vybraného slova, ktoré majú byť zoskupené, aby vytvorili celé slovo. Deti môžu kliknúť na slabiky, aby ich pridali do vytváraného slova. Kód obsahuje príklady slov s rozdelenými slabikami, ale môžete pridať ďalšie slová alebo prispôsobiť existujúce podľa svojich potrieb.

Vysvetlenie kódu:

    words obsahuje zoznam slov rozdelených na slabiky.
    createSyllableElement je funkcia, ktorá vytvorí nový HTML element s danou slabikou a pridá udalosť click, ktorá pridá vybranú slabiku do vytváraného slova.
    displaySyllables je funkcia, ktorá zobrazí dané slabiky na stránke, pričom vytvorí elementy pre každú slabiku.
    resetGame je funkcia, ktorá náhodne vyberie jedno slovo zo zoznamu, zamieša slabiky a zobrazí ich na stránke.
    resetButton.addEventListener('click', resetGame); pridá udalosť click na tlačidlo "Nové slovo", ktorá spustí funkciu resetGame.
    Posledný riadok resetGame(); spustí hru pri načítaní stránky.

Tento základný kód môžete rozšíriť pridávaním zvukov, animácií alebo pridávaním bodovania a časových limitov, aby ste hru urobili atraktívnejšou a zaujímavejšou pre deti.