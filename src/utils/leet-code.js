export const isCodeEditor = node => node.hasAttribute &&
  node.hasAttribute('data-cy') &&
  node.getAttribute('data-cy') === 'code-area';
