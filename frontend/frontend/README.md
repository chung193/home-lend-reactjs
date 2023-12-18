# Files and Folder Structure
```
├── app           
│   ├── api       
│   │   ├── apps
│   │   ├── chart
│   │   ├── dummy
│   │   ├── icons
│   │   ├── images
│   │   ├── palette
│   │   └── ui
│   ├── appjs
│   ├── components
│   │   ├── Badges
│   │   ├── BreadCrumb
│   │   ├── CardPaper
│   │   ├── Contact
│   │   ├── Counter
│   │   ├── Email
│   │   ├── Error
│   │   ├── Forms
│   │   ├── Gallery
│   │   ├── GuideSlider
│   │   ├── Header
│   │   ├── ImageLightbox
│   │   ├── LandingPage
│   │   ├── Loading
│   │   ├── Notification
│   │   ├── Panel
│   │   ├── PapperBlock
│   │   ├── Profile
│   │   ├── Quote
│   │   ├── Search
│   │   ├── SelectLanguage
│   │   ├── Sidebar
│   │   ├── SidebarBig
│   │   ├── SourceReader
│   │   ├── Tables
│   │   ├── TemplateSettings
│   │   ├── TextEditor
│   │   ├── TodoList
│   │   ├── Widget
│   │   ├── helpers
│   │   └── indexjs
│   ├── config        
│   ├── containers     
│   │   ├── App
│   │   ├── Charts
│   │   ├── Dashboard
│   │   ├── Forms
│   │   ├── LandingPage
│   │   ├── LanguageProvider
│   │   ├── Layouts
│   │   ├── LocaleToggle
│   │   ├── Maps
│   │   ├── NotFound
│   │   ├── Pages
│   │   ├── Parent
│   │   ├── SampleApps
│   │   ├── SampleFullstackApps
│   │   ├── Session
│   │   ├── Tables
│   │   ├── Templates
│   │   ├── UiElements
│   │   └── pageListAsyncjs
│   ├── i18njs      
│   ├── indexhtml    
│   ├── redux         
│   ├── styles        
│   ├── translations
│   │   ├── vijson
│   │   └── jpjson
│   └── utils         
├── dump_data         
│   └── enlite-3a841-exportjson
├── internals         
│   ├── configjs
│   ├── generators
│   ├── mocks
│   ├── scripts
│   ├── testing
│   └── webpack
├── node_modules     
├── package-lockjson
├── packagejson      
├── postcssconfigjs 
├── public            
│   ├── favicons
│   └── images  
├── server            
│   ├── argvjs
│   ├── indexjs
│   ├── loggerjs
│   ├── middlewares
│   ├── portjs
│   ├── rawdocsjs
│   └── rawiconsjs
└── yarnlock
```
# Installation and Running App

This project is built on top of Material UI.
- Connect to the internet.
- Install NodeJs from NodeJs Official Page.
- Unzip the Enlite Prime file to a folder in your computer.
- Open Terminal.
- Go to your file project (where you've unzipped the product)
- Install Modules
Install module dependencies by run this script in terminal ```npm install```.
It will download some necessary dependencies, it could take some minutes, just wait until finish.
- Build Webpack DLL dependencies(If necessary)
Install module dependencies by run this script in terminal. This process ussualy done by 'npm install', but if system require it just run this command:
```npm run build:dll```.
- Run App
After build static library, then run the app.
```npm start```
The process should be take about 1-2 minutes.
INFO:
- Just run this script whenever you want start the project.
- Run npm install again if you have new module dependencies,
Navigate to ```http://localhost:3000``` to see result.

# Deployment
## Production
- First you have to clone/copy the all project code in your hosting/cloud server.
- Open your console to access the hosting/cloud server.
- If you haven't install the dependencies before, please ```run npm install```
- After that you need to build the production assets first
```npm run build```
It usually take longer time than development to generate and compress production code. The generated files will be placed in build/ folder.
- Then start the app
```npm run start:prod```

# Basic Code Structure

## Main HTML
The HTML root in ```/app/index.html```
You can put google analytics, font icon, embeded fonts, etc here.

## Main JS
The JS root in ```/app/app.js```. This is the entry file for the application, only setup and boilerplate code.

## Directory Alias
You can find directory alias settings in ```/internals/webpack/webpack.base.babel.js```.
|Name|	Alias|	Directory	|Sample Use|
|---|---|---|---|
|UI Components|	enl-components|	app/components/|import { CrudTable, Notification } from 'enl-components';|
|Reducer|	enl-redux|	app/redux/	|import { loginWithEmail } from 'enl-redux/actions/authActions';|
|Component Style Overider|	enl-styles|	app/styles/components/	|import css from 'enl-styles/Table.scss';|
|API|	enl-api|	app/api/|	import brand from 'enl-api/dummy/brand';|
|Images|	enl-images|	public/images/|	import decorationDark from 'enl-images/logo.png';|
|3rd Party Vendors|	enl-vendor|	node_modules/|	import css from 'enl-vendor/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';|
## Template Architecture
This is template architecture in diagram visuailzation.
[Link to draw.io](https://app.diagrams.net/#G1MqVDPwBw2sDyeB5MfWIHPMOD9GHLpxSS)
## Routing structure
[Link to draw.io](https://drive.google.com/file/d/1BGoqU92dOvuPzi6Gay6dJy_uUbmxerPt/view?usp=sharing)
# Create New Page
- Go to ```app/containers/```
- Create new folder ex: MyPage. The name must in capitalize
- Create new js file inside that folder MyPage, ex SamplePage.js. The name must in capitalize
- Inside the file create a simple page HTML ex:

```
// file: app/containers/MyPage/SamplePage.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { PapperBlock } from 'enl-components';

class SamplePage extends React.Component {
  render() {
    const title = 'Enlite Prime. Blank Page';
    const description = 'Enlite Prime';
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Blank Page" desc="Some text description">
          Content
        </PapperBlock>
      </div>
    );
  }
}

export default SamplePage;
```
Import it asynchronously to the routing. Open file ```app/containers/pageListAsync.js```

```
// app/containers/pageListAsync.js
export const SamplePage = Loadable({
  loader: () => import('./MyPage/SamplePage'),
  loading: Loading,
});
```
Load it inside the template. In this example we'll use in dashboard template. Open file app/containers/App/Application.js

```
// file: app/containers/App/Application.js
import { SamplePage } from '../pageListAsync';
class Application extends React.Component {
  render() {
    const { changeMode } = this.props;
    return (
      <Dashboard history={this.props.history} changeMode={changeMode}>
        <Switch>
          <Route exact path="/app/sample-page" component={SamplePage} />
        </Switch>
      </Dashboard>
    )
  }
}
```
Then you can access it at ```http://localhost:3000/app/sample-page```
Also you can put the a usual link inside ```<a />``` or material button.

## Create New Component
Go to ```app/components/```
Create new folder ex: ```MyComponent```. The name must in capitalize
Create new js file inside that folder MyComponent, ex ```SampleComponent.js```. The name must in capitalize
Inside the file create a simple ES6 Class ex:

```
// file: app/components/MyComponent/SampleComponent.js
import React from 'react';

class SampleComponent extends React.Component {
  render() {
    return (
      <H1>Hello World</H1>
    );
  }
}

export default SampleComponent;
```

Register it to index. Open file ```app/components/index.js```
Import that component

```
// file: app/components/index.js
import SampleComponent from './MyComponent/SampleComponent';
```        

Open a target page where you want use it. Ex: Open ```src/app/MyPage/SamplePage```. (Example page that we've made in previous section).
Import component form component library.
```import { SampleComponent } from 'enl-components;```
Then use it inside render function
```
render() {
  return (
    <SampleComponent />
  );
}
```                        
Here's complete code.
```
// file: app/containers/MyPage/SamplePage.js

import React from 'react';
import { Helmet } from 'react-helmet';
import { PapperBlock, SampleComponent } from 'enl-components';

class SamplePage extends React.Component {
  render() {
    const title = 'Enlite Prime. Blank Page';
    const description = 'Enlite Prime';
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Blank Page" desc="Some text description">
          <SampleComponent />
        </PapperBlock>
      </div>
    );
  }
}

export default SamplePage;
```
Then you can check the result at ```http://localhost:3000/mypage/sample-page```.

## CRUD App and Authentication
This is the CRUD flow to explain how the sample Pre-build apps works.

Before we go through to the apps, first important thing to combine all reducer and sagas.

- Combine saga's
file: ```app\utils\sagas.js```
- Combine reducers
file: ```app\redux\reducers.js```

## External Reference
Here's some external reference of library that we used


- React Boilerplate [Link text Here](https://www.reactboilerplate.com/)
- Material UI [Link text Here](https://material-ui.com/)
- JSS (CSS in JS) [Link text Here](https://cssinjs.org/)
- Immutable JS [Link text Here](https://facebook.github.io/immutable-js/)
- And many more. Check the all dependencies and the repository here

## Sources and Credit
- Fonts: Lato.

Note: All images are just used for Preview Purpose Only. They are not part of the template and NOT included in the final purchase files.

|Name	|Repository|	License|
|---|---|---|
|@babel.js	|https://github.com/babel/babel	|MIT|
|@material-ui	|https://github.com/mui-org/material-ui	|MIT|
|axios	|https://github.com/axios/axios	MIT|
|classnames	|https://github.com/JedWatson/classnames	|MIT|
|draft-js	|https://github.com/facebook/draft-js	|BSD Licensed.|
|express	|https://github.com/expressjs/express	|MIT|
|history	|https://github.com/ReactTraining/history	|MIT|
|immutable	|https://github.com/facebook/immutable-js	|MIT|
|jss-rtl	|https://github.com/alitaheri/jss-rtl	|MIT|
|lodash	|https://github.com/lodash/lodash	|MIT|
|material-ui-pickers	|https://github.com/dmtrKovalenko/material-ui-pickers	|MIT|
|moment	|https://github.com/moment/moment	|MIT|
|mocha	|https://github.com/mochajs/mocha	|MIT|
|mui-datatables	|https://github.com/gregnb/mui-datatables	|MIT|
|prop-types	|https://github.com/facebook/prop-types	|MIT|
|react	|https://github.com/facebook/react	|MIT|
|react-autosuggest	|https://github.com/moroshko/react-autosuggest	|MIT|
|react-countup	|https://github.com/glennreyes/react-countup	|MIT|
|react-dropzone	|https://github.com/react-dropzone/react-dropzone	|MIT|
|react-google-maps	|https://github.com/tomchentw/react-google-maps	|MIT|
|react-helmet	|https://github.com/nfl/react-helmet	|MIT|
|react-hot-loader	|https://github.com/gaearon/react-hot-loader	|MIT|
|react-loading-bar	|https://github.com/mironov/react-redux-loading-bar	|MIT|
|react-markdown	|https://github.com/rexxars/react-markdown	|MIT|
|react-redux	|https://github.com/reduxjs/react-redux	|MIT|
|react-slick	|https://github.com/akiran/react-slick	|MIT|
|react-syntax-highlighter	|https://github.com/conorhastings/react-syntax-highlighter	|MIT|
|recharts	|https://github.com/recharts/recharts	|MIT|
|redux	|https://github.com/reduxjs/redux	|MIT|
|redux-form	|https://github.com/erikras/redux-form-material-ui	|MIT|
|redux-saga	|https://github.com/redux-saga/redux-saga/tree/master/packages/core	|MIT|
|redux-saga-firebase	|https://github.com/n6g7/redux-saga-firebase	|MIT|
|webpack	|https://github.com/webpack/webpack	|MIT|

# FAKE API
Use for testing, you can fake api, use json server: [json server on github](https://github.com/typicode/json-server)
## Getting started
Install JSON Server.

```npm install -g json-server```

Direct to jsonServer folder in project.

Edit db.json file with some data.
```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
Start JSON Server.

```json-server --watch db.json```
Now if you go to ```http://localhost:3000/posts/1```, you'll get

```{ "id": 1, "title": "json-server", "author": "typicode" }```
More action you can see on github page of JSON Server.

# TypeScript
TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
Why we should use typescript ? You can see reference in: [Why we use typescript (vietnamese)](https://stories.magestore.com/t/co-nen-s-d-ng-typescript-d-phat-tri-n-ng-d-ng-react/1424).
In this project, we use javascript and typescript.