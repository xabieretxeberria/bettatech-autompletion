# Context

This is another coding exercise proposed by [Martín Cristóbal](https://es.linkedin.com/in/martincrb) in his [YouTube channel, BettaTech](https://www.youtube.com/channel/UCSf6S_PAhXsqGMTPDiKgdRg) ([link to the video](https://www.youtube.com/watch?v=jIlB1D8e4rk)).

The exercise statement goes at follows:

> Given big set of words and a prefix, find the words that can be suggested for autocompletion

# Approach

The [trie](https://en.wikipedia.org/wiki/Trie) structure fits this problem perfectly.

I have implemented a Trie class in Typescript, with the following methods:

- `insert(word: string)` &rarr; Inserts the given word in the Trie
- `find(letters: string)` &rarr; Finds the prefix in the Trie

The trie is composed by TrieNodes. Each node stores a map with its children, and a boolean that indicates if
the node is the end of a word. This does not mean that the node is a leaf.

The TreeNode class contains the following methods:

- `has(letter: string)` &rarr; Returns true if `letter` is among the node children
- `setLetter(letter: string)` &rarr; Adds `letter` to the children map
- `get(letter: string)` &rarr; Returns the `letter` child of the node
- `findWords(letters: string, results: string[])` &rarr; Returns an array with the words with the `letter` prefix

# Usage

```js
const trie = new Trie();

// First, insert the words in the trie
trie.insert(firstWord);
...
trie.insert(nthWord);

// Once the words are in the trie, find the words with a prefix
const result: string[] = trie.find(prefix);

for (const r of result) {
    console.log(r);
}
```

# Testing

I used [Alsatian](https://github.com/alsatian-test/alsatian) to test my code. To execute the tests:

```bash
npm test
```