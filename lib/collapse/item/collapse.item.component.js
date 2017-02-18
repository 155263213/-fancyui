import template from './collapse.item.html';
import controller from './collapse.item.controller';
import './collapse.less';

let collapseComponent = {
  restrict: 'EA',
  bindings: {
    data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default collapseComponent;

