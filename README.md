# shmuphiscoresv2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployment
The site is hosted on Heroku (app `shmuphiscoresv2`): every push on `master` is deployed automatically.
Deploy the backend first when the front relies on a new API endpoint.

```
git push origin master
```

## Heroku configuration
```
heroku login
heroku buildpacks:add heroku/nodejs -a shmuphiscoresv2
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static -a shmuphiscoresv2
git push
```

## Links
- https://cdn.materialdesignicons.com/4.5.95/