import { ApiHelper } from "../Function/APIBase/APIBase";

const apiHelper: ApiHelper = new ApiHelper();

export class DrugHelper {
  getPrice(route: string, sku: string, city) {
    let fullRoute = `${route}/${sku},${city.long},${city.lat}`;
    return apiHelper.get(fullRoute);
  }
}