import CollapseWidget from './collapse.widget/collapse.widget';

document.addEventListener('DOMContentLoaded', () => {
  const collapseWidget = new CollapseWidget(document.querySelector('.collapse-container'));
  collapseWidget.init();
});
