export default class SearchBarController{
  constructor(searchBarService){
    let vm = this;
    vm.searchBarService = searchBarService;
    vm.searchText = '';

    vm.searchClicked = function(){
      console.log('you have entered search term: ', vm.searchText);
    }
  }
}

SearchBarController.$inject = ['searchBarService'];
