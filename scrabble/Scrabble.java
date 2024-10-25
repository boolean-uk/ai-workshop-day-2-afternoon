package scrabble;
import java.util.HashMap;
public class Scrabble {
    private static final HashMap<Character, Integer> letterValues = new HashMap<>();

    static {
        letterValues.put('A', 1);
        letterValues.put('B', 3);
        letterValues.put('C', 3);
        letterValues.put('D', 2);
        letterValues.put('E', 1);
        letterValues.put('F', 4);
        letterValues.put('G', 2);
        letterValues.put('H', 4);
        letterValues.put('I', 1);
        letterValues.put('J', 8);
        letterValues.put('K', 5);
        letterValues.put('L', 1);
        letterValues.put('M', 3);
        letterValues.put('N', 1);
        letterValues.put('O', 1);
        letterValues.put('P', 3);
        letterValues.put('Q', 10);
        letterValues.put('R', 1);
        letterValues.put('S', 1);
        letterValues.put('T', 1);
        letterValues.put('U', 1);
        letterValues.put('V', 4);
        letterValues.put('W', 4);
        letterValues.put('X', 8);
        letterValues.put('Y', 4);
        letterValues.put('Z', 10);
    }

    public static void main(String[] args) {
        System.out.println(score("{cabbage}")); // Double score
        System.out.println(score("[cabbage]")); // Triple score
        System.out.println(score("{[cabbage]}")); // Double and triple score
        System.out.println(score("c{a}b[b]age")); // Mixed scoring
        System.out.println(score("{cabbage")); // Invalid brackets
        System.out.println(score("cabbage}")); // Invalid brackets
        System.out.println(score("{cabb[age]}")); // Nested brackets
        System.out.println(score("c{a[b]c}d")); // Nested and mixed scoring
        System.out.println(score("")); // Empty string
        System.out.println(score("a")); // Single letter
        System.out.println(score("A")); // Single letter uppercase
        System.out.println(score("z")); // Single letter
        System.out.println(score("Z")); // Single letter uppercase
        System.out.println(score(" ")); // Space
        System.out.println(score("123")); // Numbers
        System.out.println(score("123abc")); // Numbers and letters
        System.out.println(score("{123abc}")); // Numbers and letters with brackets
    }
        
    public static String score(String word) {
        if (!isValidBrackets(word)) {
        return "Invalid brackets in word: " + word;
        }

        int totalScore = 0;
        int doubleScore = 1;
        int tripleScore = 1;

        for (char c : word.toUpperCase().toCharArray()) {
        switch (c) {
            case '{':
                doubleScore = 2;
                break;
            case '}':
                doubleScore = 1;
                break;
            case '[':
                tripleScore = 3;
                break;
            case ']':
                tripleScore = 1;
                break;
            default:
                if (letterValues.containsKey(c)) {
                    int letterScore = letterValues.get(c);
                    totalScore += letterScore * doubleScore * tripleScore;
                } else {
                    return "Invalid character in word: " + word;
                }
                break;
        }
        }
        return "The word \"" + word + "\" scores " + totalScore + " points!";
    }
        
        
    private static boolean isValidBrackets(String word) {
        int curlyBracketCount = 0;
        int squareBracketCount = 0;
        for (char c : word.toCharArray()) {
            switch (c) {
                case '{':
                    curlyBracketCount++;
                    break;
                case '}':
                    curlyBracketCount--;
                    break;
                case '[':
                    squareBracketCount++;
                    break;
                case ']':
                    squareBracketCount--;
                    break;
            }
            if (curlyBracketCount < 0 || squareBracketCount < 0) {
                return false;
            }
        }
        return curlyBracketCount == 0 && squareBracketCount == 0;
    }
    
        
        
        
    

}

