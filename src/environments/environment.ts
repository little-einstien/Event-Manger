// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  token :'ab091c04f7254475b9fd000e7bf96a0d',
  //  api_endpoint  : 'http://35.200.198.3:3000',
  //nlu_endpoint : 'http://localhost:4203/api',
  //api_endpoint  : 'http://localhost:3000',
   nlu_endpoint : 'http://35.200.198.3:4203',
  //  api_endpoint  : 'http://35.200.142.0:3000',
   bot_endpoint : 'http://35.200.198.3:3000',
  //nlu_endpoint : 'http://localhost:4203/api',
  // api_endpoint  : 'http://localhost:3000',
  api_endpoint : 'http://35.200.198.3:3000',
  
  bot_script_pf : '<script type="text/javascript" id = "bot-script" data-project = ',
  bot_script_sf : '/plugin/js/chatBotWidget.js"></script>'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
