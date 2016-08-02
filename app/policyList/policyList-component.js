import angular from 'angular';

import PolicyListController from './policyList-controller.js';
import PolicyListService from './policyList-service.js';
import PolicyListTemplate from './policyList-template.html';
import PolicyListStyles from './policyList-styles.scss';

export default angular.module('policylist', [])
                .service("policyListService", PolicyListService)
                .component("policyListComponent", {
                  controller: PolicyListController,
                  templateUrl: PolicyListTemplate
                });
