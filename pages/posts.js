import DBConnect from "../libs/dbConnect";
import postModel from "../models/postModel";


export default function Posts({Postss}){
    return(
        <>
        <h2>Posts</h2>
        {Postss.map((post)=>(
            <ul>
                <li>{post.marca}</li>
                <li>{post.referencia}</li>
                <li>{post.repuesto}</li>
                <li>{post.date}</li>

            </ul>
        ))}
        </>
    )
}

export async function getServerSideProps() {
  try {
    await DBConnect();
    const res = await postModel.find({});
    const Postss = res.map((el) => {
      const Post = el.toObject();

      Post._id = Post._id.toString();
      Post.creator = Post.creator.toString();
      Post.cotizaciones = Post.cotizaciones.toString();
      Post.date = Post.date.toString();
      return Post;
    });
    return {
      props: { Postss },
    };
  } catch (error) {
    console.log(error);
  }
}

