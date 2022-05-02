import DBConnect from "../../../libs/dbConnect";
import postModel from "../../../models/postModel";

DBConnect()
export default async function handler(req, res){
    switch (req.method) {
        case 'GET':
            await getPosts(req, res)

            break;
    
        default:
            break;
    }
}

async function getPosts(req, res){
    try {
        const posts = await postModel.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(403).json(error)
    }
}

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '4mb',
      },
    },
  }