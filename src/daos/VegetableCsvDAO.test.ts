import { VegetablesCsvDAO } from "./VegetablesCsvDAO";
import { VegetablesDao } from "./VegetablesDAO";


let vegetableCvsDAO: VegetablesDao;

describe("Tests over VegetablesDao", () => {
  beforeAll(() => {
    vegetableCvsDAO = new VegetablesCsvDAO();
  });

  it("should retrieve a vegetable by its benefits", () => {
    const vegetable = vegetableCvsDAO.findVegetableByBenefits("Ajuda emagrecer, Previne a prisão de ventre, Ajuda no controle do diabetes, Facilita a digestão");
    expect(vegetable?.id).toBe(2);
    expect(vegetable?.name.toLocaleLowerCase()).toBe("abobrinha")
  });
  it("should retrieve a vegetable by its name", () => {
    const vegetable = vegetableCvsDAO.findVegetableByName("Abobrinha");
    expect(vegetable?.id).toBe(2);
    expect(vegetable?.benefits.toLocaleLowerCase()).toBe("ajuda emagrecer, previne a prisão de ventre, ajuda no controle do diabetes, facilita a digestão")
  });
  it("should retrieve a vegetable by its id", () => {
    const vegetable = vegetableCvsDAO.findVegetableById(2);
    expect(vegetable?.name.toLocaleLowerCase()).toBe('abobrinha');
    expect(vegetable?.benefits.toLocaleLowerCase()).toBe("ajuda emagrecer, previne a prisão de ventre, ajuda no controle do diabetes, facilita a digestão")
  });

});
