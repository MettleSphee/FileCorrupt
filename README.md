# FileCorrupt
A script that edits files by adding random values to each character's unicode value.
This script is designed in the following manner:
- It takes one file you load into memory;
- It generates one random value between 0 and 99;
- It generates for each character one random value between 0 and the previously generated number;
- Then adds that number to the UTF-16 integer that represents the selected character;
- It puts together all characters into one giant string, then saves as a file named result.txt;
