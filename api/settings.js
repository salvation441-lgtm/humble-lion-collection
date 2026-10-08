let settings = { ngoDiscount: 15, storeName: "Humble Lion Collection" };
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.method==='GET') return res.status(200).json(settings);
  if(req.method==='POST'){ settings={...settings,...req.body}; return res.status(200).json(settings); }
  return res.status(200).json(settings);
}
