function calculateWordsInString(string) {
    const words = string.split(/[^a-zA-Z'\-]+/).length;

    const wordCountMod10 = words % 10;
    const wordCountMod100 = words % 100;

    let grammaticalCase;

    if (wordCountMod10  === 0                         ||
        wordCountMod10  >= 5  && wordCountMod10  <= 9 ||
        wordCountMod100 >= 11 && wordCountMod100 <= 19)  { grammaticalCase = 'слів';  }
    else if (wordCountMod10 === 1)                       { grammaticalCase = 'слово'; }
    else if (wordCountMod10 >= 2 && wordCountMod10 <= 4) { grammaticalCase = 'слова'; }

    console.log(`"${string}" - ${words} ${grammaticalCase}`);
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
