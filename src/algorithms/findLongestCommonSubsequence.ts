const findLongestCommonSubsequence = (str1: string, str2: string): string => {
  const result: string[][] = new Array(str1.length + 1).fill("").map(() => new Array(str2.length + 1).fill(""));

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1].toUpperCase() === str2[j - 1].toUpperCase()) {
        result[i][j] = result[i - 1][j - 1] + str1[i - 1];
      } else {
        result[i][j] = getLongerString(result[i - 1][j], result[i][j - 1]);
      }
    }
  }
  return result[str1.length][str2.length];
};

const getLongerString = (str1: string, str2: string): string => {
    return str1.length > str2.length ? str1 : str2;
}

export default findLongestCommonSubsequence;