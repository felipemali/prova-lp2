import { join } from "path";
import { Vegetable } from "../models/Vegetable";
import { readFileSync } from "fs";

export class VegetablesDao {
  protected _vegetables: Vegetable[];
  protected _strContent: string;

  constructor(filename: string) {
    const fileName = join(__dirname, "..", "data", filename);
    this._strContent = readFileSync(fileName, "utf-8");
    this._vegetables = [];
  }

  findVegetableById(id: number) {
    const vegetable = this._vegetables.find((c) => c.id === id);
    return vegetable;
  }

  findVegetableByBenefits(benefits: string) {
    const vegetable = this._vegetables.find(
      (c) => c.benefits.toLowerCase() === benefits.toLowerCase()
    );
    return vegetable;
  }
  findVegetableByName(name: string) {
    const vegetable = this._vegetables.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    return vegetable;
  }
}
