import { VegetablesDao } from "./VegetablesDAO";
import { VegetablesJsonDAO } from "./VegetablesJsonDAO";

let vegetableJson: VegetablesDao;

describe("Tests over VegetablesDao", () => {
  beforeAll(() => {
    vegetableJson = new VegetablesJsonDAO();
  });

  it("should retrieve a vegetable by its id", () => {
    const vegetable = vegetableJson.findVegetableById(2);
    expect(vegetable?.name.toLocaleLowerCase()).toBe("abobrinha");
    expect(vegetable?.benefits.toLocaleLowerCase()).toBe(
      "ajuda emagrecer, previne a prisão de ventre, ajuda no controle do diabetes, facilita a digestão"
    );
  });
  it("should retrieve a vegetable by its name", () => {
    const vegetable = vegetableJson.findVegetableByName('Abobrinha');
    expect(vegetable?.id).toBe(2);
    expect(vegetable?.benefits.toLocaleLowerCase()).toBe(
      "ajuda emagrecer, previne a prisão de ventre, ajuda no controle do diabetes, facilita a digestão"
    );
  });
  it("should retrieve a vegetable by its benefits", () => {
    const vegetable = vegetableJson.findVegetableByBenefits("Ajuda emagrecer, Previne a prisão de ventre, Ajuda no controle do diabetes, Facilita a digestão");
    expect(vegetable?.id).toBe(2);
    expect(vegetable?.name.toLocaleLowerCase()).toBe('abobrinha');
  });
});
