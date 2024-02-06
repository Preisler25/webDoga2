const getFirstVowel = (arr) => {
    const vowels = ["a", "á", "e", "é", "i", "í", "o","ó", "ö", "ő", "u", "ú" , "ü", "ű"];
    const result = arr.filter(name => vowels.includes(name[0].toLowerCase()));
    return result;
}
const f1 =(names) => {
    res = getFirstVowel(names);

    const p = document.createElement("p");
    p.textContent = res.sort(
        (a, b) => a.localeCompare(b, "hu", { sensitivity: "base" })
    ).join(";");
    document.body.appendChild(p);
}

const f2 = (quotes) => {
    const stringQuotes = quotes.map(quote => `“${quote.quote}” – ${quote.author}`);
    const div = document.getElementById("quotes");
    stringQuotes.forEach(quote => {
        const blockquote = document.createElement("blockquote");
        blockquote.textContent = quote;
        div.appendChild(blockquote);
    });
}

const f3 = () => {
    const dicethrows = [];
    const button = document.createElement("button");
    button.textContent = "Dobás";
    const display = document.querySelector("#feladat3");
    display.appendChild(button);

    const p = document.createElement("p");
    display.appendChild(p);

    button.addEventListener("click", () => {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        dicethrows.push(dice1 + dice2);
        dicethrows.sort((a, b) => b - a);
        p.textContent = dicethrows.join(", ");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    f1(["Estrella", "Brigitta", "Ferrel", "Alisun", "Gertie", "Shurlock", "Anselm", "Kellina", "Peirce", "Caty", "Tess", "Philippine", "Tanney", "Steven", "Aida"]);
    f2([{ author: "Albert Einstein", quote: "A person who never made a mistake never tried anything new.", }, { author: "Douglas Adams", quote: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.", }, { author: "Terry Pratchett", quote: "Imagination, not intelligence, made us human.", }, { author: "Terry Pratchett", quote: "It is said that your life flashes before your eyes before you die. That is true, it's called Life.", },]);
    f3();
});

