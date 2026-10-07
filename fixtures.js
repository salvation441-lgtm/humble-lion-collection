export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'x-apisports-key');
  
  const key = req.headers['x-apisports-key'] || req.query.key;
  
  if (!key) {
    return res.status(400).json({ error: 'No API key' });
  }

  try {
    const response = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
      headers: {
        'x-apisports-key': key,
        'x-apisports-host': 'v3.football.api-sports.io'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'API failed', details: e.message });
  }
}