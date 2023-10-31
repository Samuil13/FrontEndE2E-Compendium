// <reference types="cypress" />
import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { BaseUI } from "../../../class/UI/baseUI";
import {
  AboutBlockBreadcrumbs,
  AboutDrugContentDetail,
  AboutElements,
  AboutImg
} from "../../fixtures/Selectors/aboutSelectors";
import {
  AboutElementsUI,
  AboutBlockBreadcrumbsUI,
  AboutDrugContentDetailUI
} from "../../fixtures/UI/aboutUI";
import { InstructionsBlockReleaseForms } from "../../fixtures/Selectors/instructionsSelectors";
import { InstructionsBlockReleaseFormsUI } from "../../fixtures/UI/instructionUI";
import { MainPageHelper } from "../../../class/UI/helper/mainPageHelper";
import { DrugHelper } from "../../../class/API/Help/APIDrugHelper";
import { CityCoordinate } from "../../fixtures/Constant/CityCoordinate";
import { ApiRoutes } from "../../fixtures/Constant/APIRoutes";

const drugHelper: DrugHelper = new DrugHelper();
const mainHelper: MainPageHelper = new MainPageHelper();
const baseUI: BaseUI = new BaseUI();

let priceRes = {
  min: null,
  max: null,
  cnt: null
}

And("Go to the About page", () => {
  mainHelper.transitionToTopOneDrugPage({
    selector: InstructionsBlockReleaseForms.el
  });
  baseUI.getURL().then((text) =>{
    let sku = text.split("/")[5];
    drugHelper.getPrice(ApiRoutes.getPriceDrug.getRouteDrug, sku, CityCoordinate.Kyiv).then((res)=>{
      priceRes.max = res.body.minmax[0].max;
      priceRes.min = res.body.minmax[0].min;
      priceRes.cnt = res.body.minmax[0].cnt
    })
  });
})

Then("Check the block breadcrumbs' visibility", () => {
  baseUI.checkElementIsVisible(
    AboutBlockBreadcrumbs.blockBreadcrumbs,
    true
  );
  baseUI.checkElementTextContains({
    selector: AboutBlockBreadcrumbs.breadcrumbsOfTheFourthElement,
    value: AboutBlockBreadcrumbsUI.breadcrumbsOfTheFourthElement
  });
  baseUI.checkElementTextContains({
    selector: AboutBlockBreadcrumbs.breadcrumbsOfTheThirdElement,
    value: AboutBlockBreadcrumbsUI.breadcrumbsOfTheThirdElement
  });
  baseUI.checkElementTextContains({
    selector: AboutBlockBreadcrumbs.breadcrumbsOfTheSecondElement,
    value: AboutBlockBreadcrumbsUI.breadcrumbsOfTheSecondElement
  });
});

Then("Check the title page line", () => {
  baseUI.checkElementHaveText({
    selector: AboutElements.titleDrug,
    value: AboutElementsUI.titleDrug
  });
  baseUI.checkElementLengthNotNull(AboutElements.titleDrug);
});

Then("Check the visibility of the image block", () => {
  baseUI.checkElementIsVisible(AboutImg.img, true);
});

Then("Check the visibility of the drug content detail block", () => {
  baseUI.checkElementIsVisible(
    AboutDrugContentDetail.blockDrugContentDetail, true
  );
});

Then("Check the price line", () => {
  console.log("priceRes", priceRes);

  
  baseUI.checkPrice({
    selector: AboutDrugContentDetail.detailPrice, 
    childSelector: AboutDrugContentDetail.blockPrice, 
    expectedPrice: priceRes.min.toString().replace(".", ",")
  });
  baseUI.checkPrice({
    selector: AboutDrugContentDetail.detailPrice, 
    childSelector: AboutDrugContentDetail.blockPrice, 
    isLow: false, 
    expectedPrice: priceRes.max.toString().replace(".", ",")
  });
});