const sameParent = (parentA, parentB) => parentA.key === parentB.key;

const isRoot = (root, currentPath) => root.key === currentPath.key;

const getUntilRoot = (root, currentPath) => {
  if (!currentPath || isRoot(root, currentPath)) {
    return '';
  }

  return `${getUntilRoot(root, currentPath.parent)}/${currentPath.key}`;
}

export { sameParent, isRoot, getUntilRoot };