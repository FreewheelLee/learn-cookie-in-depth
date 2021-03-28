# learn-cookie-in-depth
This is a sample project to practice Cookies usage containing

1. a backend project with express.js to serve API and demo the same origin cookie usage
2. a react frontend project to demo the issue of cross origin cookie usage


## Cases to Test
1. test get cookies from server side
2. test generate cookies via javascript on client side
3. test all Cookie property
   1. maxAge
   2. secure
   3. httpOnly - need to set up local https server (refer to: https://github.com/FreewheelLee/learn-cookie-in-depth/blob/main/backend/README.md )
   4. ...
4. test cross domain cases

## Reference

1. https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
2. https://html.com/resources/cookies-ultimate-guide/ 
