## Logger

This is a tool that logs the timestamp, http method, the url of a http request, and the time of request-response cycle in the following format.
```
YYYY-MM-DD hh:mm:ss | METHOD from url | total time: _ms
2020-10-30 19:05:23 | GET    from  /  | total time: 5ms
```

![](/logger.png)

### How to use
---
1. Clone this repository 

```
$ git clone https://github.com/Fan-55/logger-2.git
```

2. Go to the directory 

```
$ cd logger-2
```

3. Install the required packages 

```
$ npm install
```

4. Execute app via either nodemon or node

- via nodemon

```
$ npm run dev
```

- via node

```
$ npm run start
```

6. You will see the following on your terminal suggesting successful set up

```
App running on port 3000
```
7. Open the browser and type in the following URL then you are ready to go!

```
http://localhost:3000
```
### Tools used for this web application
---
- Node.js: v10.15.0
- Express: v4.17.1