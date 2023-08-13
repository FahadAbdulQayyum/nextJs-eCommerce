// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {readComment, writeComment} from '../../services/comment'

export default function handler(req, res) {
  if(req.method === 'POST'){
    try {
      const {body} = req;
      writeComment(body)
      return res.json({msg:"Successful!", success:true, body})
    } catch (err) {
      return res.json({msg:"Unsuccessful!", success:false, err:err.message})
    }
  }
  let data = readComment();
  return res.json({msg:"GET Method", success:true, data })
}
