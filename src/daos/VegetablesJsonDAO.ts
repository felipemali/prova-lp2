import { Vegetable } from "../models/Vegetable";

import { VegetablesDao } from "./VegetablesDAO";

export class VegetablesJsonDAO extends VegetablesDao {
  constructor() {
    super("vegetables.json");
    const objs: Vegetable[] = JSON.parse(this._strContent);
    this._vegetables = objs;
  }
}
