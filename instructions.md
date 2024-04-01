# REACT Starter with Local Storage and JWT Tokens

## Getting Started

You can use this frontend and the [backend](https://github.com/10-3-pursuit/jwt-auth-backend) repo as starters for a full stack project that will include login

**Steps:**

- Create a parent folder
- `fork` both repos
  - [frontend](https://github.com/10-3-pursuit/jwt-auth-frontend)
  - [backend](https://github.com/10-3-pursuit/jwt-auth-backend)
- `clone` both forked repos into the parent folder
- Use the `env.example` in the backend to set up your postgresql database
- Postgresql tables have been included in `db/schema.sql` to define the user.
- If you want the user to have extra fields you must update the schema and update the `db/seed.sql` files properly.
- There are commented areas in the code where you must replace things such as the database name etc.

## Demo User

On the Login page (component) there is a `DemoUser` button where the login functionality has been already created. It runs a function that logs in using the credentials of a seeded user called `demo` that has a password of `password` which you can see in the `handleDemoSignIn` function in `Login.jsx`.

## Security

Most of the security is being handled on the backend. But there are two pieces that are also used on the frontend as well in this app.

#### ProtectedRoute Component

In this Frontend app you will have a `ProtectedRoute.jsx` component that you will use to wrap around all component routes that require a user to be logged in.

The `ProtectedRoute` component works in a similar way to the `<BrowserRouter>` component where we wrap it around the `<App />` component in order to give the application more functionalilty. It works by checking if the user is authenticated before allowing access to certain routes. It uses a custom hook `useAuth` to check the authentication status by making a request to the server. If the user is authenticated (isAuthenticated is true), it renders the component the route is pointing to using `<Outlet context={{ user }} />`. If not authenticated, it redirects the user to the login page using `<Navigate to="/login" replace />`. During the authentication check, it displays a loading message.

In the `ProtectedRoute` component you will see a component called `<Outlet />`. This comes from `react-router-dom`. This is a signal that let's the app know, if I nest a route inside the `ProtectedRoute` component, please render it on the page if I pass the authentication tests. I can use it for various Routes
e.g.

```js
<ProtectedRoute>
    <Route path='/dashboard' element={<Dashboard />}>
    <Route path='/profile' element={<Profile />}>
</ProtectedRoute>
```

#### Authorized GET Routes

Every authorized `GET` route will need to include a `Bearer token` in the Header. This is the JWT token that was created on the backend, sent to the frontend and stored in localStorage

```js
const response = await fetch(`${URL}/api/auth/check-auth`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

Prior to making a `GET` fetch called for authorized information and views, you will retrieve the `JWT Token` from the Browser. (check Inspector Tools -> Application -> Storage -> Local storage)

```js
const token = localStorage.getItem("token");
```

#### Login & Register

After a successful login or registration you will want to add the JWT token to localStorage before navigating to another view

```js
if (data.token) {
  localStorage.setItem("token", data.token);
}
```

This will allow the checkauth function to send that token to the backend and confirm that a user is logged in before allowing them into the Protected Routes

<hr />

#### Logout

Logout is very straightforward. You only need remove the `token` from `localStorage`. With no token the checkauth function will not pass and a user will not be able to enter `ProtectedRoute` views.

### Go to Backend

Also consult [jwt-auth-backend](https://github.com/10-3-pursuit/jwt-auth-backend) to see what security precautions have been put into place as well as auth routes for the login and register.
