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
| **Method** | **Route**                    | **Description**                                              | Request - Body                           |
| ---------- | ---------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `GET`      | `/`                          | Main page route. Renders home `index` view.                  |                                          |
| `GET`      | `/login`                     | Renders `login` form view.                                   |                                          |
| `POST`     | `/login`                     | Sends Login form data to the server.                         | { username, password }                   |
| `GET`      | `/signup`                    | Renders `signup` form view.                                  |                                          |
| `POST`     | `/signup`                    | Sends Sign Up info to the server and creates user in the DB. | { username, password }                   |
| `GET`      | `/private/edit-profile`      | Private route. Renders `edit-profile` form view.             |                                          |
| `PUT`      | `/private/edit-profile`      | Private route. Sends edit-profile info to server and updates user in DB. | { username, password }                   |
| `GET`      | `/private/products`           | Private route. Render the `products` view.                   |                                          |
| `POST`     | `/products`         | Private route. Adds a contact request for the current user.  | { user, name, description, price, image} |
| `DELETE`   | `/private/product/:productId` | Private route. Deletes the existing product from the current user. |                                          |
| `GET`      | `/products`          | Renders `products-list` view.                                |                                          |
## Models
User model
```
{
  username: String, unique
  password: String
}
```
Product model
```
{
  userId: String,
  name: String,
  description: String,
  price: Number,
  image_url: String
}
```
## Backlog
[See the Trello board.](https://trello.com/b/QMAnD3ki/project-2)
## Links
### Git
The url to your repository and to your deployed project
[Repository Link]()
[Deploy Link]()
### Wireframe
[Slides Link](https://www.figma.com/file/UVblveJYvXj6a31AEpKrKv/Untitled?node-id=0%3A1)