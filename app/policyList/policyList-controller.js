export default class PolicyListController{
  constructor(policyListService){
    let vm = this;
    vm.policyListService = policyListService;
    vm.policies = vm.policyListService.getPolicies();
  }
}

PolicyListController.$inject = ['policyListService'];
