import angular from 'angular';

import SearchBarController from './searchBar-controller.js';
import SearchBarService from './searchBar-service.js';
import SearchBarTemplate from './searchBar-template.html';
import SearchBarStyles from './searchBar-styles.scss';

export default angular.module('searchBar', [])
                .service("searchBarService", SearchBarService)
                .component("searchBarComponent", {
                  controller: SearchBarController,
                  templateUrl: SearchBarTemplate
                });
