import {isCodeEditor} from './leet-code';

export const timerAppInjector = appCreator => {
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
    appCreator(timer);
  };
};
