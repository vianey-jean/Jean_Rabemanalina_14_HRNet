  <img src='./src/assets/image/logo.png'>  
  
## Projet 14 - Wealth Health - HRNet - OpenClassrooms

Wealth Health is a a large financial company.This company uses an internal web application, called HRnet, which manages employee registration.

##### Project realized by Marcos Meneghetti

---

### Dependencies

- React: (v 18.2.0)
- React-dom: (v 18.2.0)
- React-router-dom: (v 6.3.0)
- react-fontawesome: (v 0.2.0)
- date-fns: (v 2.29.2)
- moment: (v 2.29.4)
- react-select: (v 5.4.0)
- react-table: (v 7.8.0)

---

### Project goal

- Convert the entire HRNet JQuery project to React.
- Convert one of the four current JQuery plugins to React and publish it at npm or github.
- Perform Lighthouse test to compare the JQuery and React projects.
- Make a new version of the "Create Employee" and "Employee List" pages with React.
- Add a state management system (the JQuery project uses local storage)
- Make sure that everything is consistent in terms of style.

---

### List of currently used jQuery plugins that need to be converted

- [datetimepicker](https://github.com/xdan/datetimepicker)
- [Modal window plugin - jQuery.modal.js](https://github.com/kylefox/jquery-modal)
- [Drop-down menus](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js)
- [Plugin for data tables](https://github.com/DataTables/DataTables)

---

### Performance testing

To measure quantifiable data (e.g. page load times, network calls) to ensure that converting the app to React actually improves performance comparing to JQuery page, we will use [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en#:~:text=Lighthouse%20is%20an%20open%2Dsource,how%20well%20the%20page%20did.) from Chrome.

---

### My plugin React.

I have chosen the modal plugin. You can see all the instructions [here](https://www.npmjs.com/package/modal_mm) to install my plugin.
Here some examples of my modal.
<img src='./src/assets/image/modalexamples.png'>

---

### How to work with Wealth Realth-HRNet React project

- Clone this reposity:

```
git clone https://github.com/MarcosMene/MarcosMeneghetti_14_17082022.git
```

- Change the directory to:

```
cd MarcosMeneghetti_14_17082022
```

- Install dependencies:

```
npm install
```

5 - Start the application:

```
npm start
```

The application will be rendered at URL `http://localhost:3000`

---

### Build version of React project

To use Lighthouse with React project, you need to use the build version, otherwise the result of the performance will not be good.

- Create new terminal on VSCode.

```
npm run build
```

This will create a folder called **build** inside the project. When the installation is finished, write this command in the terminal:

```
serve -s build
```

You will see a message

```
local http://localhost:3000
On your Network: http://192.168.1.13:3000.
```

Left-click + ctrl key over localhost:3000 on the screen. It will open the project in a new browser window.

_If you have already open your project on localhost:3000, you will receive another address for your Local._
