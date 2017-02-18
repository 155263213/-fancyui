import template from './collapse.html';
import controller from './collapse.controller';
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
