export interface ColorantDTO {
  colorantId : number,
  code: string,
  name: string,        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
  density: number,
  redV: number,
  greenV: number,
  blueV: number,
  color: string
}

export interface BaseDTO{
  baseId : number,
  type : string,
  name : string,
  createdBy : number | null;
}


export interface CollectionDTO {
  collectionId : number,
  code : string,
  name : string,
  filterGroup : string,
  createdBy : number | null
}
