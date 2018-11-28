export interface Select2Item {
  id : any,
  text: any
}
export interface ColorantDTO {
  colorantId : number,
  code: string,
  name: string,        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
  density: number,
  redV: number,
  greenV: number,
  blueV: number,
  color: string | null
}

export interface BaseDTO{
  baseId : number,
  type : string,
  name : string,
  createdBy : number | null;
}


export interface CollectionDTO {
  collectionId : number,
  collectionCode : string,
  collectionName : string,
  description : string,
  createdDate : string,
  createBy : number | null
}

export interface ProductDTO {
  productId : number,
  productCode : string,
  productName : string,
  createdDate : string,
  createdBy : number | null,
}

export interface ProductBaseDTO{
  productBaseId : number,
  product : ProductDTO,
  base : BaseDTO,
  density : number,
  rbgHex : string,
  createdDate:  string,
  createdBy : number,
}

export interface ProductBaseCanDTO{
  productBaseCanId : number,
  productBase : ProductBaseDTO,
  can : number,
  unit : string,
  pricePerCan : number,
  barCode : string,
  percentage : number,
}

export interface FormulaDTO {
  formulaId : string,
  formulaCode : string,
  formulaName : string,
  collection : CollectionDTO,
  createdDate : string,
  createdBy : number | null,

  // 1 - n relation ship
  listProduct : ProductDTO[],
  listColorant : FormulaColourant[]
}

export interface FormulaColourant {
  colorant: ColorantDTO,
  quantity: number
}

export interface FormulaProductBase{
  formulaProductBaseId : number,
  formula : FormulaDTO,
  productBase : ProductBaseDTO,
}

