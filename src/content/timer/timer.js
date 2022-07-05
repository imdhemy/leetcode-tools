function isCodeEditor(node) {
  return node.hasAttribute &&
    node.hasAttribute('data-cy') &&
    node.getAttribute('data-cy') === 'code-area';
}

const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (!mutation.addedNodes) return;
    
    mutation.addedNodes.forEach(node => {
      if (isCodeEditor(node)) {
        console.log(node);
      }
    });
  });
});

const app = document.getElementById('app');

mutationObserver.observe(app, {childList: true, subtree: true});
