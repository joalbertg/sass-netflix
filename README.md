# Netflix with Gulp

#### Screenshots
<p align="center">
  <kbd>
    <img src="screenshots/desktop.png" title="Desktop"  width="800px" height="auto">
  </kbd>
</p>

<p align="center">
  <kbd>
    <img src="screenshots/tablet.png" title="Tablet"  width="600px" height="auto">  
  </kbd>
</p>

<p align="center">
  <kbd>
    <img src="screenshots/phone.png" title="Phone"  width="400px" height="auto">    
  </kbd>
</p>

<p align="center">
  <kbd>
    <img src="screenshots/phone-errors.png" title="phone errors"  width="400px" height="auto">    
  </kbd>
</p>


#### Installs

With `package.json` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
docker-compose run app yarn add gulp gulp-cli gulp-sass gulp-autoprefixer --dev
```

#### Setup `package.json`
```json
...
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
...
```

### Project structure

> run `tree -I "node_modules|screenshots"`
```shell
.
├── Dockerfile
├── README.md
├── css
│   └── app.css
├── docker-compose.yml
├── gulpfile.js
├── img
│   ├── bg.jpg
│   └── logo.svg
├── index.html
├── js
│   └── scripts.js
├── package.json
├── scss
│   ├── _custom.scss
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── app.scss
└── yarn.lock

4 directories, 15 files
```

#### Gulp watch
```shell
docker-compose run app yarn watch
```

