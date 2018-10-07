# platform.js

Uma biblioteca de apenas 3,5kb sem nenhuma dependência que identifica a plataforma em que seu web app está rodando.

Você também pode ler esta documentação em: [English](https://github.com/imdanielpiva/platform).

> **Aviso**: essa biblioteca faz parte do [Quasar Framework](https://quasar-framework.org/components/platform-detection.html) e foi adaptada para funcionar sem nenhuma outra dependência.

### Índice

<!--ts-->
   * [Instalação](#instalação)
      * [Exemplo em ES6](#exemplo-em-es6)
      * [Browser Exemplo](#browser-exemplo)
  * [API](#api)
  * [Use Como Um Plugin Vue](#use-como-um-plugin-vue)
      * [Exemplo em ES6](#exemplo-em-es6-1)
      * [Browser Exemplo](#browser-exemplo-1)
   * [Contribuição](#contribuição)
   * [Autor](#autor)
<!--te-->

### Instalação

##### Exemplo em ES6
```javascript
import platform from '@danielpiva/platform/dist';

// Faça bom proveito

console.log(platform.is.android);
```

##### Browser Exemplo

```html
<script src="https://unpkg.com/@danielpiva/platform@latest/dist/platform.min.js"></script>

<!-- 👉 Ou você pode baixar esse código e hospedar junto com o seus arquivos -->

<script src="/caminho/para/@danielpiva/platform/dist/platform.min.js"></script>

<script>
  // Faça bom proveito

  console.log(platform.is.android);
</script>
```

### API

>**Detalhe**
> A única funcionalidade original faltando é o método parseSSR().

| Propriedade | Tipo | Significado |
| --- | --- | --- |
| `platform.is.mobile` | `Boolean` | O código está rodando num dispositivo móvel? |
| `platform.is.cordova` | `Boolean` | O código está rodando dentro do Cordova? |
| `platform.is.electron` | `Boolean` | O código está rodando dentro do Electron? |
| `platform.is.desktop` | `Boolean` | O código está rodando em navegador desktop? |
| `platform.is.chromeExt` | `Boolean` | O código está rodando dentro de uma extenção do Chrome? |
| `platform.has.touch` | `Boolean` | O código está rodando em um dispositivo com capacidades de touch screen? |
| `platform.within.iframe` | `Boolean` | O código está rodando dentro de um Iframe? |

> **Detalhe**
> Rodando em dispositivo móvel (tablet, smartphone) significa que você pode ter esse código rodando em um navegador, e não dentro de um Cordova wrapper.

O objeto **`platform.is`** pode ter diferentes propriedades baseado no ambiente/plataforma que seu site/web app esteja rodando, por exemplo:

| Propriedade |
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
| E por aí vai...|

Rodando o Chrome em um desktop Linux, por exemplo:

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

### Use Como Um Plugin Vue
Você também pode usar a biblioteca `@danielpiva/platform` como um plugin Vue de forma muito fácil.

##### Exemplo em ES6
```javascript
import Vue from 'vue';
import platform from 'platform';

Vue.use(platform);

new Vue({
  el: '#app',
  mounted() {

    // Você pode chamar this.$platform de qualquer lugar das suas instâncias (components) Vue.

    console.log(this.$platform);
  }
});
```

##### Browser Exemplo

```html
<script src="https://unpkg.com/vue@latest"></script>
<script src="https://unpkg.com/@danielpiva/platform@latest/dist/platform.min.js"></script>

<script>
  Vue.use(platform);

  new Vue({
    el: '#app',
    mounted() {

    // Você pode chamar this.$platform de qualquer lugar das suas instâncias (components) Vue.

    console.log(this.$platform);
  }
  });
</script>
```

### Contribuição

Qualquer pessoa é bem-vinda a sugerir funcionalidades, consertar bugs abrindo uma issue ou fazendo fork e mandando um pull request.

### Autor
Daniel Piva | imdanielpiva@gmail.com