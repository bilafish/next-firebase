import styles from "../../styles/Post.module.css";
import PostContent from "../../components/PostContent";
import {
  firestore,
  getUserWithUsername,
  postToJSON,
} from "../../helpers/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);
  let post;
  let path;
  if (userDoc) {
    const postRef = userDoc.ref.collection("posts").doc(slug);
    post = postToJSON(await postRef.get());

    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 5000,
  };
}

export async function getStaticPaths() {
  // Improve my using Admin SDK to select empty docs
  const snapshot = await firestore.collectionGroup("posts").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    // must be in this format:
    // paths: [
    //   { params: { username, slug }}
    // ],
    paths,
    fallback: "blocking",
  };
}

export default function Post({ post, path }) {
  const postRef = firestore.doc(path);
  const [realtimePost] = useDocumentData(postRef);
  const postToDisplay = realtimePost || post;
  return (
    <main className={styles.container}>
      <section>
        <PostContent post={postToDisplay} />
      </section>
      <aside className="card">
        <p>
          <strong>{postToDisplay.heartCount || 0} 🤍</strong>
        </p>
      </aside>
    </main>
  );
}
