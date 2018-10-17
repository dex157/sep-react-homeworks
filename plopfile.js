module.exports = function(plop) {
  plop.setGenerator('Component', {
    description: 'Component boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/component/pureComponent.hbs'
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/component/style.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: 'plop-templates/component/test.hbs'
      }
    ]
  });
  plop.setGenerator('Module', {
    description: 'Module boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/module/index.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/{{name}}.js',
        templateFile: 'plop-templates/module/reducer.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/{{name}}.test.js',
        templateFile: 'plop-templates/module/reducer.test.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/actions.js',
        templateFile: 'plop-templates/module/actions.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/sagas.js',
        templateFile: 'plop-templates/module/sagas.hbs'
      }
    ]
  });
};
