# monitor-ec2-instances
Express back to list ec2 instances

## Setup
1 - Install the dependencies by running `yarn install` or `npm install` <br>
2 - Create a `.env` file with the following information: <br>
        <br>
        `ACCESS_KEY_ID=<Your_AWS_ACCESS_KEY_ID>` <br>
        <br>
        `SECRET_ACCESS_KEY=<Your_AWS_SECRET_ACCESS_KEY_ID>` <br>
        <br>
        `AUTH0_DOMAIN=<Your_auth0_domain>` <br>
        <br>
        `AUTH0_AUDIENCE=<Your_auth0_audience>` <br>
        <br>
 And that's it, now you can start the project 


## Available Scripts

In the project directory, you can run:

### `yarn start`

or
### `npm start`

Starts the server on port 3005 by default<br />
 [http://localhost:3005](http://localhost:3000/) 

It will take the `process.env.PORT` if it's set, you can set a different port by running `PORT=<port_number> yarn start`

### `yarn dev`
or
### `npm run dev`

It starts the dev server with nodemon hot reloading on port 3005 by default<br />
It will take the `process.env.PORT` if it's set, you can set a different port by running `PORT=<port_number> yarn start`


