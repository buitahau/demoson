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
