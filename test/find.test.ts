import { Expect, Test } from "alsatian";
import { Trie } from "../src/trie";

export class FindTest {
    public setupTrie(): Trie {
        const trie = new Trie();
        trie.insert("trie");
        trie.insert("try");
        trie.insert("tree");

        return trie;
    }

    @Test("Find non existing prefix")
    public shouldReturnEmptyResult() {
        const trie = this.setupTrie();

        const result: string[] = trie.find("a");
        Expect(result.length).toBe(0);
    }

    @Test("Find empty prefix")
    public shouldReturnCompleteTreeWhenFindingEmpty() {
        const trie = this.setupTrie();
        const result: string[] = trie.find("");

        Expect(result.length).toBe(3);
    }

    @Test("Find common prefix between all the words")
    public shouldReturnCompleteTreeWithCommonPrefix() {
        const trie = this.setupTrie();
        const result: string[] = trie.find("tr");

        Expect(result.length).toBe(3);
    }
}