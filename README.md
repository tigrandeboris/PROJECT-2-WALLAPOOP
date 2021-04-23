# Project 2 || WallaPOOP!
## Description
Page where you can sell and buy products that you don't need anymore :D
## User Stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn't exist so that I know it was my fault(backlog)
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault(backlog)
- **homepage** - As a user I want to be able to access the homepage and filter by type of product, log in and sign up.
- **sign up** - As a user I want to sign up on the web page
- **login** - As a user I want to be able to log in
- **logout** - As a user I want to be able to log out
- **edit user** - As a user I want to be able to edit my profile.(backlog)
## Server Routes (Back-end):

| **Method** | **Route**                     | **Description**                                              | Request - Body                           |
| ---------- | ----------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `GET`      | `/`                           | Main page route. Renders home `index` view.                  |                                          |
| `GET`      | `/login`                      | Renders `login` form view.                                   |                                          |
| `POST`     | `/login`                      | Sends Login form data to the server.                         | { username, password }                   |
| `GET`      | `/signup`                     | Renders `signup` form view.                                  |                                          |
| `POST`     | `/signup`                     | Sends Sign Up info to the server and creates user in the DB. | { username, password, phoneNumber}       |
| `GET`      | `/private/edit-profile`       | Private route. Renders `edit-profile` form view.             |                                          |
| `PUT`      | `/private/edit-profile`       | Private route. Sends edit-profile info to server and updates user in DB. | { username, password, phoneNumber}       |
| `GET`      | `/products`                   | Render the `products` view.                                  |                                          |
| `POST`     | `/products`                   | Open products search.                                        | { user, name, description, price, image} |
| `GET`      | `/private/add-product`        | Renders `add-product` form view.                             |                                          |
| `POST`     | `/private/add-product`        | Sends new product info to the server and creates product in the DB. | { user, name, description, price, image} |
| `DELETE`   | `/private/product/:productId` | Private route. Deletes the existing product from the current user. |                                          |
| `GET`      | `/private/contact`            | Private route. Renders `contact-option` form view.           |                                          |
| `POST`     | `/private/contact`            | Private route. Sends info buyer.                             | { user, phoneNumber}                     |



## Models

User model

```
{
  username: String, unique, required
  password: String, required
  phoneNumber: Number, required
}
```

Product model

```
{
  userId: String, required
  name: String,required
  description: String,
  price: Number, required
  image_url: String
}
```

## Backlog

[See the Trello board.](https://trello.com/b/QMAnD3ki/project-2)

## Links

### Git

The url to your repository and to your deployed project [Repository Link](https://github.com/tigrandeboris/PROJECT-2-WALLAPOOP/blob/main) [Deploy Link](https://github.com/tigrandeboris/PROJECT-2-WALLAPOOP/blob/main)

### Wireframe

[Slides Link](https://balsamiq.cloud/spmr96i/pbu3udq/r2278)