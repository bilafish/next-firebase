import AuthCheck from "../../components/AuthCheck";

export default function AdminPostsPage({}) {
  return (
    <main>
      <AuthCheck>
        <h1>Admin</h1>
      </AuthCheck>
    </main>
  );
}
