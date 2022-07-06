import Ractive from 'ractive';

export const timerApp = (el) => {
  const ractive = new Ractive({
    target: el,
    template: '<p>{{greeting}} {{name}}!</p>',
    data: {greeting: 'Hello', name: 'world'},
  });
};
