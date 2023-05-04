import findLongestCommonSubsequence from "../src/algorithms/findLongestCommonSubsequence";

describe("Finding a longest common subsequence", () => {
  it("Should find a longest common subsequence if exists", () => {
    const str1 = "PKOYTEK";
    const str2 = "MKJAIEOTI";

    const str3 = "mnz1xcv2bnnm3bnmbv4cvbzx5";
    const str4 = "1qwe2rty3yui45";
    
    const subsequence1 = findLongestCommonSubsequence(str1, str2);
    const subsequence2 = findLongestCommonSubsequence(str3, str4);

    expect(subsequence1).toEqual("KOT");
    expect(subsequence2).toEqual("12345");
  });

  it("Should find empty value when no subsequence detected", () => {
    const str1 = "qwertyuiop";
    const str2 = "zxcvbnm";

    const subsequence = findLongestCommonSubsequence(str1, str2);

    expect(subsequence).toEqual("");
  });
});
