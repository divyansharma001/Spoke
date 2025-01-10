import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

const handler = NextAuth({
   providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Divyansh" },
          password: { label: "Password", type: "password" },
          email: {label:"Email", type: "email", placeholder: "Enter your email"}
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied

          const username = credentials?.username
          const password = credentials?.password

          console.log("data", {username, password})

          //this part should be done with db
          const user = { id: "1", name: "Divyansh", email: "divyansh@example.com" }

    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      })
   ]
  })


export const GET = handler;
export const POST = handler;