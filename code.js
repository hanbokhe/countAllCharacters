function countAllCharacters(str) {
  // your code here
  if (str === '')
  {
      return {};
  }
  wordCount = {};
  for (var i = 0; i<str.length; i++)
  {
      if (wordCount[str[i]] === undefined)
      {
          wordCount[str[i]] = 1;
      }else{
          wordCount[str[i]]++;
      }
  }
  return wordCount;
}
