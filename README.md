## What
A simple Angular directive for a Bootstrap button that indicates of a running operation associated with that button.

![demo](https://rawgit.com/v1per/angular-button-progress/master/demo.gif)


## Install
  
```
$ npm install --save angular-button-progress
```  

## Usage

```js
angular
  .module('app', [
    require('angular-button-progress')
  ])
```

**NOTICE:** It's a Webpack module, so there could be problems with loading styles by other module loaders.     

```html
<button ng-click="vm.deleteNote(vm.note)" type="button" button-progress class="btn btn-danger">Yes</button>
```

**NOTICE:** It captures ng-click handler which should return a promise.  
