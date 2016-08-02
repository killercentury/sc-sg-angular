import angular from 'angular';

import SearchBarComponent from './searchBar/searchBar-component.js';
import PolicyListComponent from './policyList/policyList-component.js';

export default angular.module("myApp", [SearchBarComponent.name,
  PolicyListComponent.name]);
