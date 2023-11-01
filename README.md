# Getting Started with testimonial-api
## Prerequisites
Prerequisites for the testimonial-backend are:

1. Node v14
2. mysql with known username and password
3. zoho email with password

## Installation (Local)
### 1. Clone Repo

Clone testimonial-api repository from bitbucket to local machine: 

```
git clone git@bitbucket.org:banmalasunil/school-api.git
```

### 2. Database
Create new database named "school" using mysql-cli or preferred way.
### 3. Setup .env file
Copy contents of **.env.example**   file in project directory and paste them to a new file **.env** in same directory.
Then set required values to the variables in the file as:
```
JWT_SECRET = RandomGeneratedSecreteKey (any random generated string of any length)
BASE_URL = http://localhost:8080  (base url of backend)
EMAIL_VALIDATION_ENCRYPTION_KEY = SomeSecreteKey123

# Database connection variables
DATABASE_TYPE=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root (user name of mysql server of local machine)
DATABASE_PASSWORD=root (password of mysql server of local machine)
DATABASE_NAME=school

# Email config variables
EMAIL_HOST=smtp.zoho.com (for zoho mail)
EMAIL_PORT=465
EMAIL_USER= (email for email service)
EMAIL_PASSWORD=mySecretePassowrd (password for the EMAIL_USER)

#CORS
CORS_ORIGIN=http://localhost:3000 (url of frontend from which requests are to be accepted)


```
Note: **EMAIL_VALIDATION_ENCRYPTION_KEY** must be same as **REACT_APP_EMAIL_VALIDATION_ENCRYPTION_KEY** in **.env** file of frontend.
### 4. Install necessary packages
```
npm install
```
### 5. Server start
Start local server of backend:
```
npm run start:dev

```
### 6. Run migration for tables in the database
```
npm run migration:run
```
## Working with migration
### 1. Run Migration
Run migration files that are yet to be executed.
```
npm run migration:run
```

### 2. Create Migration
Create a new empty migration file. Can be used to create seeder.
```
npm run migration:create migration/specificnameofmigration
```
Then run migration to execute the migration.
```
npm run migration:run
```

### 3. Generate Migration
Migration is generated as per the new changes in entity files of any components.
```
npm run migration:generate migration/specificnameofmigration
```
Create a new migration file with new updates for database tables. Then run migration to execute the migration.
```
npm run migration:run
```

### 4. Migration Revert 
Reverts latest one migration file.
```
npm run migration:revert
```

Note: View **Package.JSON** file for more commands for this project.
