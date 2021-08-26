export interface searchResult {
  ip: string,
  location: location,
  domains: string[],
  as: as,
  isp: string,
  proxy: proxy,
}

export interface proxy {
  proxy: boolean,
  vpn: boolean,
  tor: boolean
}

export interface as {
  asn: number,
  name: string,
  route: string,
  domain: string,
  type: string
}

export interface location {
  country: string,
  region: string,
  city: string,
  lat: number,
  lng: number,
  postalCode: string,
  timezone: string,
  geonameId: number
}
