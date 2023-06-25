import { useSession, signIn, signOut } from 'next-auth/react';
import GithubButton from 'react-github-login-button';

// export default function UserOAuth() {
//   const { data: session } = useSession();

//   if (session && session.user) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <GithubButton onClick={() => signIn()}>Sign in</GithubButton>
//     </>
//   );
// }

