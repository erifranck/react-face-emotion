# Api face example

## run the project with:
```yarn && yarn start ```


## The project structure:

```
.
├── package.json
├── yarn.lock
├── .eslintrc
├── public
|   └── index.js
├── src
|   ├── components
|   |   └── [component-folder]
|   |   |   ├── [cApi face exampleomponent-name].jsx
|   |   |   ├── [component-name].js (to insert styles)
|   |   |   └── index.js
|   ├── containers
|   |   └── [container-folder]
|   |   |   ├── [container-name].jsx
|   |   |   ├── [container-name].js (to insert styles)
|   |       └── index.js
|   ├── containers
|   |   ├── reducer.js
|   |   ├── createStore.js
|   |   └── [reducer-name].js
|   └── services
|       └── [servicename].js
└── README.md
```

## insert Information for api request

* You can insert in the main form the Apy from microsoft in the field subscription key, you can create get [here](https://azure.microsoft.com/en-us/services/cognitive-services/face/)
* You can insert Client ID to save image with imgur[https://api.imgur.com/#registerapp]
