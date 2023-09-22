import { Vegetable } from "../models/Vegetable";
import { VegetablesDao } from "./VegetablesDAO";

export class VegetablesCsvDAO extends VegetablesDao {
  constructor() {
    super("vegetables.csv");
    const vegetablesArr = this._strContent.split("\r\n").slice(1, 23);
    
    vegetablesArr.forEach((e,i)=>{
      let vegetable: Vegetable = {
        id: 0,
        name: '',
        imageUrl: '',
        benefits: ''
      }
      const vegetalIndexs =  vegetablesArr[i].split('"')
      const newArr: number[] = []
      let indexs = vegetalIndexs.length - 1
      for(let i = 0; i < indexs; i++){
      newArr.push(i)
      }
      newArr.forEach((a,b)=>{
        const lineArr = vegetalIndexs[b].split(",")
        if(b % 2 === 0){
          vegetable.id = Number(lineArr[0]);
          vegetable.name = lineArr[1];
          vegetable.imageUrl = lineArr[2]
        }else{
          vegetable.benefits = lineArr.join(",")
          this._vegetables.push(vegetable)
        }
        
        
      })
    })

  }
}
