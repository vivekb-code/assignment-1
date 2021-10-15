# Assignment Luxoft

## Technologies Used
- Express Framework for server
- Sequelize as ORM for mariaDB (We can use naive maria DB package but selected sequelize for future proof context to switch to anothers sql db)
- Swagger for API Documentation
- React JS for frontend - Redux
- Jest for backend unit / end-to-end tests

### Assumptions:
- As a standard storing password as hashed password instead of plain text password.
    Used bcrypt to hash, we can go with plain password aswell and during login we can directly compare against password field(plain)
- 2 APIS - 1. Get All users and 2. Get user by id are public as mentioned in assignment, we can authorize these requests make private.
- Email case sensitive as I have observed in sample emails given in assignment
- Added Swagger doc for all 3 APIs
- Used console.error for error logging for this assignment but we can use log4j for best logging
- Role based access handled at front end
- We can integerate JWT authorization

### Setup & Configuration:
Node Version used: **v14.18.1**
- File: ```backend/config/config.json``` you can change the configuration values based on env values for db connection details
- Inside backend folder run: ```npm install```
- Seed Database with given 4 sample user details: ```npm run db:seed```

### How to test backend
- ```cd backend```
- ``` npm run test``` (Assuming database created as mentioned in **config.json** for **test** env) and maria db is running

### How to run backend
- If you have docker, simply use ```docker-compose``` to spin maria db instance which creates(two databases: **assignment** and **assignment_test** )

(OR)

Without docker if you have mariadb running in local, you can mention your database name in config.json considering env(development as default) or create above 2 databases for seamless testing

- Start server with ```npm start``` (inside backend folder)
You can access docs at ```http://localhost:3000/docs```

## Frontend
### Setup
- ```cd frontend && npm install```
### How to run 
- ```npm start``` - Which opens a browser at location ```http://localhost:3333```

4 User Details Given
Name | Email | Password | Role
-- | -- | -- | --
James | James@123.com | 1!23#4 | EMPLOYEE
Peter | Peter@123.com | 8^23!3 | EMPLOYEE
John | John@123.com | 98!891 | ADMIN
Fred | Fred@123.com | 68651 | ADMIN



