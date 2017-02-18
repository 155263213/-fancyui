import Collapse from '../../../../lib/collapse/index.js';

import collapseComponent from './collapse.component';
export default angular.module('collapse', [
  Collapse.name
])
.component('collapse', collapseComponent);
