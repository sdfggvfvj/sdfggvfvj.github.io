findAndReplaceDOMText(document.body, {
  find: 'm',
  wrap: 'em',
  wrapClass:'letter-m',
});

findAndReplaceDOMText(document.textarea, {
  find: 'o',
  wrap: 'em',
  wrapClass:'letter-o',
});

findAndReplaceDOMText(document.getElementById('test'), {
  find: 'z',
  wrap: 'em'
});
