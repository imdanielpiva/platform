# $platform.js

A 3,5kb standalone and dependency-free library that seemsly identifies the platform that your web app is running on.

You can read this documentation in [Português Brasileiro](https://github.com/imdanielpiva/).

> **Note**: it was borrowed from [Quasar Framework](https://quasar-framework.org/components/platform-detection.html) and adapted to work as standalone library.

### Table of contents

<!--ts-->
   * [Installation](#installation)
      * [Node Environmnet](#node-environment)
      * [Browser Environment](#browser-environment)
    * [API](#api)
    * [As a Vue Plugin](#as-a-vue-plugin)
      * [Node Environmnet](#node-environment-1)
      * [Browser Environment](#browser-environment-1)
   * [Contribuiting](#contributing)
<!--te-->

### Installation

##### Node Environment
```javascript
import $platform from '$platform';

// Then you're good to go
console.log($platform.is.android);
```

##### Browser Environment

```html
<script src="https://unpkg.com/$platform/platform.min.js"></script>

<!-- 👉 Or you can just download the source code and host yourself -->

<script src="/path/to/$platform/platform.min.js"></script>

<script>
  // Then you're good to go
  console.log($platform.is.android);
</script>
```

### API

| Property | Type | Meaning |
| --- | --- | --- |
| `$platform.is.mobile` | `Boolean` | Is the code running on a mobile device? |
| `$platform.is.cordova` | `Boolean` | Is the code running within Cordova? |
| `$platform.is.electron` | `Boolean` | Is the code running within Electron? |
| `$platform.is.desktop` | `Boolean` | Is the code running on a desktop browser? |
| `$platform.is.chromeExt` | `Boolean` | Is the code running is a Chrome extension environment? |
| `$platform.has.touch` | `Boolean` | Is the code running on a touch capable screen? |
| `$platform.within.iframe` | `Boolean` | Is the App running within an IFRAME? |

> **NOTE**
> Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.

The **`$platform.is`** may have different properties based on the environment your web app is running on, such as:

| Property |
| --- |
| `$platform.is.ios`|
| `$platform.is.android`|
| `$platform.is.ipad` |
| `$platform.is.ipod` |
| `$platform.is.iphone` |
| `$platform.is.chrome` |
| `$platform.is.safari` |
| `$platform.is.opera` |
| `$platform.is.mac` |
| `$platform.is.win` (Windows) |
| `$platform.is.linux` |
| `$platform.is.cros` |
| `$platform.is.silk` |
| `$platform.is.kindle` |
| `$platform.is.blackberry` |
| `$platform.is.playbook` |
| `$platform.is.winphone` (Windows Phone) |
| And so on...|

Example when running Chrome on a Linux desktop machine:

``` js
// $platform.is

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
`$platform.js` supports works as Vue plugin out of the box.

##### Node Environment
```javascript
import vue from 'vue';
import $platform from '$platform';

Vue.use($platform);

new Vue({
  el: '#app'
  // ...
});
```

##### Browser Environment

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://unpkg.com/$platform"></script>

<script>
  Vue.use($platform);

  new Vue({
    el: '#app'
    // ...
  });
</script>
```

### Contributing
Anyone is welcome to suggest features, fix bugs by opening an issue or forking and submitting a pull request.

### Author
Daniel Piva | imdanielpiva@gmail.com