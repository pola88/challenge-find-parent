export default class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
  }

  addChild(trieNode) {
    this.children[trieNode.key] = trieNode;
    trieNode.parent = this;
  }
}