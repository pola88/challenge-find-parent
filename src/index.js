import { sameParent, isRoot, getUntilRoot } from './trie';

const findParent = (root, pathA, pathB) => {
  const parentA = pathA.parent;
  const parentB = pathB.parent;

  if (sameParent(parentA, parentB)) {
    if (isRoot(root, parentA)) {
      return parentA.key;
    }

    return getUntilRoot(root, parentA);
  }

  return null;
}

module.exports = findParent;