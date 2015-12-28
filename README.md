## What
A simple Angular directive for a Bootstrap button that indicates of a running operation associated with that button
  
## Install
  
```
$ npm install --save button-progress
```  

## Usage

```js
angular
  .module('app', [
    require('button-progress')
  ])
```

```html
<button ng-click="vm.deleteNote(vm.note)" type="button" button-progress class="btn btn-danger">Yes</button>
```
