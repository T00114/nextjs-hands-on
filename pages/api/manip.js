import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  const fetchGlobalIps = await fetch('https://manip.tools.isca.jp/api/globalips')
  const globalIps = await fetchGlobalIps.json()

  return res.json(globalIps)
}
