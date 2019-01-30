# RNDM Render Plugin: Meta

## About

This plugin provides meta data updating for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

This wraps the [RNDM Meta](https://www.rndm.com/docs/utils/meta) package to allow a serialisable component that will update your pages meta tags.

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-meta
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-render';
import '@rndm/render-plugin-meta';
```

## Usage

The Meta Plugin transforms the Meta component serialisable JSON or JavaScript Objects.

**Example**

```javascript
{
    type: 'meta.Meta',
    props: {
        meta: {
            title: 'RNDM',
        },
        children: {
            type: 'react-native.Text',
            props: {
                children: 'I have meta!'
            }
        }
    }
};
