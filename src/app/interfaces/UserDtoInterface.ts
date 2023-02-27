
export interface userInfoDto  {
  id: number,
  name: string,
  username: string,
  email: string,
  address: addressDto,
  phone: number,
  website: string,
  company: companyDto
}

export interface companyDto {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface addressDto {
  street: string,
  suite: string,
  city: string,
  zipcode: any,
  geo: {
    lat: number,
    lng: number
  }
}
