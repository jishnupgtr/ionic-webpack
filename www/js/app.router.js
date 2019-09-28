
const AppRouter = ($stateProvider, $urlRouterProvider) => {
  /**
   * Define Routes here
   * 
   */
  $urlRouterProvider.otherwise("/app/home");
};

export default AppRouter;
