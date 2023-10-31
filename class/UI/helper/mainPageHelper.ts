import { BaseUI } from "../../../class/UI/baseUI";
import { ApiMethods, ApiStatusCodes } from "../../../tests/fixtures/Constant/APIConstant";
import { ApiRoutes } from "../../../tests/fixtures/Constant/APIRoutes";

const baseUI: BaseUI = new BaseUI();
export class MainPageHelper {
  // 
  transitionToTopOneDrugPage ({ 
    selector,
    elementName
  }: {
    selector: string;
    elementName?: string;
  }): void {
    baseUI.interceptRequest(ApiMethods.get,
      ApiRoutes.mainPage.getDrugPage.route, 
      ApiRoutes.mainPage.getDrugPage.alias
    );
    baseUI.getHref(selector).then((href) => {
      baseUI.clickOnElement({
        selector: selector,
        elementName: elementName,
        quantity: 0
      });
      baseUI.waitInterceptResponse({
        alias: ApiRoutes.mainPage.getDrugPage.alias,
        expectedStatusCode: ApiStatusCodes.ok,
        checkBody: false
      });
      baseUI.checkUrlPath(href);
    })
  }
}