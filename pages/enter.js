import { auth, googleAuthProvider } from "../helpers/firebase";
import { useContext } from "react";
import { UserContext } from "../helpers/context";
export default function EnterPage({}) {
  const { user, username } = useContext(UserContext);

  // 1. User is signed out (Sign In Button)
  // 2. User is signed in, but missing username (Username Form)
  // 3. User is signed in, has username (Sign Out Button)
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
