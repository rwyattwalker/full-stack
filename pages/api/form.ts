import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type Data = {
  success: boolean
}

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user:'fullstaksolutions@outlook.com',
        pass:'%M:RtYMJ8dxQL(+',
    },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "POST"){
     console.log(req.body)
     res.status(200).json({success:true})
     transporter.sendMail({
      from: 'fullstaksolutions@outlook.com',
      to: 'rwyattwalker@gmail.com',
      subject: 'Test',
      text: `
        Name: ${req.body.fname} ${req.body.lname}, 
        Country: ${req.body.country}, 
        Company: ${req.body.cname}, 
        Email: ${req.body.email}, 
        Phone: ${req.body.phone}, 
        Message: ${req.body.message}, 
        Preferred Contact Method: ${req.body.fav_contact}`
     }, (err, info) => {
      if(err){
        console.log(err);
      }else{
        console.log('Sent', info.response)
      }
})
  }
}
