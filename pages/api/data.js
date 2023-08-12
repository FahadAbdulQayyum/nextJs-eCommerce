// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {comment} from '../../services/comment'

export default function handler(req, res) {
  if(req.method === 'POST'){
    const {body} = req;
    comment(body)
    return res.json({msg:"Successfully!", success:true, body})
  }
  return res.json({msg:"GET Method", success:true})
}
