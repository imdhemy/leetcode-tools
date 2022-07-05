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
        showTimer(node);
      }
    });
  });
});

const app = document.getElementById('app');

mutationObserver.observe(app, {childList: true, subtree: true});

const showTimer = (editor) => {
  const toolBar = editor.childNodes[0].childNodes[0].childNodes[0];
  const toolsContainer = toolBar.childNodes[2];
  const timer = document.createElement('div');
  timer.classList.add('tool-item__2DCU');
  toolsContainer.insertAdjacentElement('afterbegin', timer);
  createTimer(timer);
};

const createTimer = (el) => {
  const ractive = Ractive({
    target: el,
    template: '<p>{{greeting}} {{name}}!</p>',
    data: {greeting: 'Hello', name: 'world'},
  });
};
