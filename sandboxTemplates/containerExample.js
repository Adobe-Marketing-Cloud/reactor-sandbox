'use strict';

module.exports = {
  propertyConfig: {},
  rules: [
    {
      name: 'Example Rule',
      events: [
        {
          type: 'def',
          config: {}
        }
      ],
      conditions:[
        {
          type: 'ghi',
          config: {}
        }
      ],
      actions: [
        {
          type: 'jkl',
          config: {}
        }
      ]
    }
  ],
  dataElements: {
    myDataElement: {
      type: 'mno',
      config: {}
    }
  },
  appVersion: '52A',
  buildDate: '2015-03-16 20:55:42 UTC',
  publishDate: '2015-03-16 14:43:44 -0600',
  extensions: {
    exampleExtension: {
      configs: {
        abc: {}
      },
      events: {
        def: function(module, require) {}
      },
      conditions: {
        ghi: function(module, require) {}
      },
      actions: {
        jkl: function(module, require) {}
      },
      dataElements: {
        mno: function(module, require) {}
      },
      resources: {
        myExampleResource: function(module, require) {}
      }
    }
  }
};