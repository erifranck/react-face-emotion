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
|   └── index.html
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
## run the project
can run the project with npm run start or yarn start to init the server without env variables
can run the project with npm run env or yarn env to run the project with `.env` file you should create file like the `.env.example`

## insert Information for api request

* You can insert in the main form the Apy from microsoft in the field subscription key, you can create get [here](https://azure.microsoft.com/en-us/services/cognitive-services/face/)
* You can insert Client ID to save image with imgur[https://api.imgur.com/#registerapp]

