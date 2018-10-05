# platform.js

A 3,5kb standalone and dependency-free library that seemsly identifies the platform that your web app is running on.

You can read this documentation in: [Português Brasileiro](https://github.com/imdanielpiva/platform/blob/master/docs/pt-br.md).

> **Disclaimer**: it was borrowed from [Quasar Framework](https://quasar-framework.org/components/platform-detection.html) and adapted to work as standalone library.

### Table of Contents

<!--ts-->
   * [Installation](#installation)
      * [ES6 Example](#es6-example)
      * [Browser Example](#browser-example)
    * [API](#api)
    * [As a Vue Plugin](#as-a-vue-js-2-plugin)
      * [ES6 Example](#es6-example-1)
      * [Browser Example](#browser-example-1)
   * [Contribuiting](#contributing)
   * [Author](#author)
<!--te-->

### Installation

##### ES6 Example
```javascript
import platform from '@danielpiva/platform/dist';

// Then you're good to go
console.log(platform.is.android);
```

##### Browser Example

```html
<script src="https://unpkg.com/@danielpiva/platform@latest/dist/platform.min.js"></script>

<!-- 👉 Or you can just download the source code and host yourself -->

<script src="/path/to/@danielpiva/platform/dist/platform.min.js"></script>

<script>
  // Then you're good to go

  console.log(platform.is.android);
</script>
```

### API

>**Note**
> The only original feature missing is the parseSRR() method.

| Property | Type | Meaning |
| --- | --- | --- |
| `platform.is.mobile` | `Boolean` | Is the code running on a mobile device? |
| `platform.is.cordova` | `Boolean` | Is the code running within Cordova? |
| `platform.is.electron` | `Boolean` | Is the code running within Electron? |
| `platform.is.desktop` | `Boolean` | Is the code running on a desktop browser? |
| `platform.is.chromeExt` | `Boolean` | Is the code running is a Chrome extension environment? |
| `platform.has.touch` | `Boolean` | Is the code running on a touch capable screen? |
| `platform.within.iframe` | `Boolean` | Is the App running within an IFRAME? |

> **Note**
> Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.

The **`platform.is`** object may have different properties based on the environment your web app is running on, such as:

| Property |
| --- |
| `platform.is.ios`|
| `platform.is.android`|
| `platform.is.ipad` |
| `platform.is.ipod` |
| `platform.is.iphone` |
| `platform.is.chrome` |
| `platform.is.safari` |
| `platform.is.opera` |
| `platform.is.mac` |
| `platform.is.win` (Windows) |
| `platform.is.linux` |
| `platform.is.cros` |
| `platform.is.silk` |
| `platform.is.kindle` |
| `platform.is.blackberry` |
| `platform.is.playbook` |
| `platform.is.winphone` (Windows Phone) |
| And so on...|

Example when running Chrome on a Linux desktop machine:

``` js
// platform.is

{
  chrome: true,
  desktop: true,
  linux: true,
  name: "chrome",
  platform: "linux",
  version: "47.0.2526.80",
  versionNumber: 47,
  webkit: true
}
```

### As a Vue JS 2 Plugin
`@danielpiva/platform` also works as Vue plugin out of the box.

##### ES6 Example
```javascript
import Vue from 'vue';
import platform from 'platform';

Vue.use(platform);

new Vue({
  el: '#app',
  mounted() {

    // You may call this.$platform from anywhere inside of your component instances

    console.log(this.$platform);
  }
});
```

##### Browser Example

```html
<script src="https://unpkg.com/vue@latest"></script>
<script src="https://unpkg.com/@danielpiva/platform@latest/dist/platform.min.js"></script>

<script>
  Vue.use(platform);

  new Vue({
    el: '#app',
    mounted() {

    // You may call this.$platform from anywhere inside of your component instances

    console.log(this.$platform);
  }
  });
</script>
```

### Contributing
Anyone is welcome to suggest features, fix bugs by opening an issue or forking and submitting a pull request.

### Author
Daniel Piva | imdanielpiva@gmail.com
