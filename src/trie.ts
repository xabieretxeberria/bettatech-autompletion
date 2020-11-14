export class TrieNode {
	private _isEndOfWord: boolean;
	private _children: Map<string, TrieNode>;

	constructor() {
		this._isEndOfWord = false;
		this._children = new Map<string, TrieNode>();
	}

	get children(): Map<string, TrieNode> {
		return this._children;
	}

	get isEndOfWord(): boolean {
		return this._isEndOfWord;
	}

	set isEndOfWord(eow: boolean) {
		this._isEndOfWord = eow;
    }
    
    has(letter: string): boolean {
        return this.children.has(letter);
    }

    setLetter(letter: string): TrieNode {
        const trieNode = new TrieNode();
        this.children.set(letter, trieNode);
        return trieNode;
    }

    get(letter: string): TrieNode {
        return this.children.get(letter);
    }

    findWords(letters: string, results: string[]): string[] {
        this.children.forEach((trieNode, letter) => {
            const word = letters + letter;
            if (trieNode.isEndOfWord) results.push(word);

            trieNode.findWords(word, results);
        });

        return results;
    }
}

export class Trie {
	private _root: TrieNode;

	constructor() {
        this._root = new TrieNode();
    }

    get root(): TrieNode {
        return this._root;
    }

    find(letters: string): string[] {
        let trieNode: TrieNode = this.root;

        for (const letter of letters) {
            trieNode = trieNode.get(letter);
            if (!trieNode) return [];
        }

        return trieNode.findWords(letters, []);
    }

	insert(word: string) {
        let trieNode: TrieNode = this.root;

        for (const letter of word) {
            if (trieNode.has(letter)) {
                trieNode = trieNode.get(letter);
            } else {
                trieNode = trieNode.setLetter(letter);
            }
        }

        trieNode.isEndOfWord = true;
	}
}