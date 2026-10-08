let orders=[];
export default function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  if(req.method==='GET') return res.status(200).json(orders);
  if(req.method==='POST'){orders.push(req.body);return res.status(200).json({success:true})}
  return res.status(200).json(orders);
}
