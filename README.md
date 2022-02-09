# kids-nestjs

The kids-nestjs is an example of the REST-API server. It was created by the Nestjs framework. It is the backend part of the fullstack app. Data stored SQL database: PostgreSQL: [postgres](https://www.heroku.com/postgres)

## Quick start

# Step 1. Clone the repo

```bash
git clone git@github.com:konstantindergachev/kids-nestjs.git
```

# Step 2. Install dependencies

```bash
npm install or yarn install
```

# Step 3. To hosting images I use the Cloudinary

[cloudinary](https://cloudinary.com/)

# Step 4. Save your config variables into .env file (see .env.example)

```sh
MAIL_HOST=<mail host>
MAIL_PORT=<mail port number>
MAIL_FROM_NAME=<name from>
MAIL_FROM_EMAIL=<email from>
MAIL_FROM_PASSWORD=<mail password>

CLOUDINARY_CLOUD_NAME=<cloudinary name>
CLOUDINARY_API_KEY=<cloudinary api key>
CLOUDINARY_API_SECRET=<cloudinary api secret>

POSTGRES_HOST=<heroku postgres host url>
POSTGRES_PORT=<postgres port number>
POSTGRES_USER=<heroku postgres user>
POSTGRES_PASSWORD=<heroku postgres password>
POSTGRES_DB=<heroku postgres database>

JWT_SECRET=<json web token secret>
```

# Step 5. Start the server in the development mode in the nodemon mode

```bash
 npm run start:dev or yarn start:dev
```

## The frontend part of this app is here: [kids-nextjs](https://github.com/konstantindergachev/kids-nextjs)

Author:
Konstantin Dergachev [portfolio](http://dergachevkonstantin.surge.sh/).
