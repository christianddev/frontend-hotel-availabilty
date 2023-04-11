<div align="center">
  <h1>Frontend Hotel Availability</h1>
  <strong>⚡️ this application allows you to check the availability of rooms based on the information of this [API](https://github.com/christianddev/api-hotel-availability).. ⚡️</strong>
</div>

### 📝 Technologies used:

- Angular 12
- primeNG

## 🎇 First steps

- Before running the application, you must configure the environment variables and the [API](https://github.com/christianddev/api-hotel-availability).
- Environment variables are already configured in the environment [directory](./src/environments/)

### 🚀 Quick Start

- Clone this repo:
  ```bash
  git clone https://github.com/christianddev/frontend-hotel-availabilty
  ```

#### 💻 Quick start of development:

- From the root of the project, run `yarn` or `yarn install`.
- After installing the dependencies,
  - into another terminal: `yarn dev`, check the `yarn dev` script in case you have problems making requests locally .

#### 📝 Short Description.

The current version of the frontend only allows queries, to make modifications to the api, you must use a client as postman or access the DB administration.

### 🛠️ Understanding folder structure (Main files)

The main idea is to have the functionality of the application grouped by modules, for example, in the avalaibility directory it contains the modules|components associated with room availability, in the same way, the shared directory has the modules | components that can be reused, for example buttons or inputs:

```bash
    📦src
    ┣ 📂app
    ┃ ┣ 📂availability
    ┃ ┃ ┣ 📂interfaces
    ┃ ┃ ┃ ┣ 📜api-response.interface.ts
    ┃ ┃ ┃ ┗ 📜index.ts
    ┃ ┃ ┣ 📂pages
    ┃ ┃ ┃ ┗ 📂by-hotel
    ┃ ┃ ┃ ┃ ┣ 📂component
    ┃ ┃ ┃ ┃ ┃ ┗ 📜by-hotel.page.ts
    ┃ ┃ ┃ ┃ ┣ 📂interfaces
    ┃ ┃ ┃ ┃ ┣ 📂services
    ┃ ┃ ┃ ┃ ┗ 📜by-hotel.module.ts
    ┃ ┃ ┣ 📜availability-routing.module.ts
    ┃ ┃ ┗ 📜availability.module.ts
    ┃ ┣ 📂shared
    ┃ ┃ ┣ 📂modules
    ┃ ┃ ┃ ┣ 📂button-submit
    ┃ ┃ ┃ ┃ ┗ 📜button-submit.module.ts
    ┃ ┃ ┃ ┣ 📂header
    ┃ ┃ ┃ ┃ ┗ 📜header.module.ts
    ┃ ┃ ┃ ┣ 📂input-date
    ┃ ┃ ┃ ┃ ┗ 📜input-date.module.ts
    ┃ ┃ ┃ ┣ 📂panel
    ┃ ┃ ┃ ┃ ┗ 📜panel.module.ts
    ┃ ┃ ┃ ┣ 📂select
    ┃ ┃ ┃ ┃ ┗ 📜select.module.ts
    ┃ ┃ ┣ 📂utils
    ┃ ┃ ┃ ┗ 📜index.ts
    ┃ ┃ ┣ 📜index.ts
    ┃ ┃ ┗ 📜shared.module.ts
    ┃ ┗ 📜app.module.ts
    ┣ 📂assets
    ┣ 📂environments
    ┃ ┣ 📜environment.prod.ts
    ┃ ┗ 📜environment.ts

```

### Others

##### API response

- [Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)

### 🛠 Next improvements

- Apply unit and functional tests.
- Apply a translation service.
- Check version of Angular universal
- Implement back office to manage the entities of each hotel
- Eliminate the use of primeNG and instead use native components
- Control if it is the first search and change the message depending on the search result

## 👾 known bugs

- Error handling should be improved, some unexpected errors can lead to query inconsistencies.
