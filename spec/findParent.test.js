import findParent from '../src';
import TrieNode from '../src/trie/trieNode';

describe('findParent', () => {
  test('findParent a b', () => {
    const root = new TrieNode('root')
    const [a,b] = 'ab'.split('').map(char => new TrieNode(char)) 
    root.addChild(a)
    root.addChild(b)

    
    expect(findParent(root, a, b)).toBe('root');
  });

  test('findParent a/c a/b', () => {
    const root = new TrieNode('root')
    const [a,b,c,d] = 'abcd'.split('').map(char => new TrieNode(char)) 
    root.addChild(a)
    root.addChild(b)

    a.addChild(c)
    a.addChild(d)

    expect(findParent(root, c, d)).toBe('/a');
  });

  test('findParent a/b/c a/b/d', () => {
    const root = new TrieNode('root')
    const [a,b,c,d] = 'abcd'.split('').map(char => new TrieNode(char)) 
    root.addChild(a)

    a.addChild(b)

    b.addChild(c)
    b.addChild(d)

    expect(findParent(root, c, d)).toBe('/a/b');
  });


  test('findParent a/b/c/d/f a/b/c/d/g', () => {
    const root = new TrieNode('root')
    const [a,b,c,d, f, g] = 'abcdfg'.split('').map(char => new TrieNode(char)) 
    root.addChild(a);

    a.addChild(b);
    b.addChild(c);
    c.addChild(d);

    d.addChild(f);
    d.addChild(g);

    expect(findParent(root, f, g)).toBe('/a/b/c/d');
  });

  test('findParent a/b/c/f a/b/c/d/g', () => {
    const root = new TrieNode('root')
    const [a,b,c,d, f, g] = 'abcdfg'.split('').map(char => new TrieNode(char)) 
    root.addChild(a);

    a.addChild(b);
    b.addChild(c);

    c.addChild(d);
    c.addChild(f);

    d.addChild(g);

    expect(findParent(root, f, g)).toBe(null);
  });
})
