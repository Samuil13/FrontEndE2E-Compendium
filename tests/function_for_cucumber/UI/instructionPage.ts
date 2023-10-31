// <reference types="cypress" />
import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { BaseUI } from "../../../class/UI/baseUI";
import {
  InstructionsBlockBreadcrumbs,
  InstructionsBlockCharacteristics,
  InstructionsBlockReleaseForms,
  InstructionsButton,
  InstructionsElements,
  InstructionsImg,
} from "../../fixtures/Selectors/instructionsSelectors";
import {
  InstructionsElementsUI,
  InstructionsBlockBreadcrumbsUI,
  InstructionsBlockReleaseFormsUI,
  InstructionsBlockCharacteristicsUI
} from "../../fixtures/UI/instructionUI"
import { MainPageHelper } from "../../../class/UI/helper/mainPageHelper";

const mainHelper: MainPageHelper = new MainPageHelper();
const baseUI: BaseUI = new BaseUI();

And("Go to the Instruction page", () => {
  mainHelper.transitionToTopOneDrugPage({ 
    selector: InstructionsElements.topDrugsList
  });
});

Then("Check the block breadcrumbs' visibility", () => {
  baseUI.checkElementIsVisible(
    InstructionsBlockBreadcrumbs.blockBreadcrumbs,
    true
  );
  baseUI.checkElementTextContains({
    selector: InstructionsBlockBreadcrumbs.breadcrumbsOfTheSecondElement,
    value: InstructionsBlockBreadcrumbsUI.breadcrumbsOfTheSecondElement
  });
});
Then("Check the title page line", () => {
  baseUI.checkElementHaveText({
    selector: InstructionsElements.titleDrug,
    value: InstructionsElementsUI.titleDrug
  });
  baseUI.checkElementLengthNotNull(InstructionsElements.titleDrug);
});
Then("Check the image block", () => {
  baseUI.checkElementIsVisible(InstructionsImg.img, true);
});
Then("Check the block release form visibility", () => {
  baseUI.checkElementIsVisible(InstructionsBlockReleaseForms.releaseForms, true);
});
And("Check the block header of the release form", () => {
  baseUI.checkElementHaveText({
    selector: InstructionsBlockReleaseForms.title,
    value: InstructionsBlockReleaseFormsUI.title
  });
});
And("Check the release form of the manufacturer's drug", () => {
  baseUI.checkElementHaveText({
    selector: InstructionsBlockReleaseForms.producerName,
    value: InstructionsBlockReleaseFormsUI.producerName
  });
});
And("Check the name of the drug in the final form", () => {
  baseUI.checkElementHaveText({
    selector: InstructionsBlockReleaseForms.drugTitle,
    value: InstructionsBlockReleaseFormsUI.drugTitle
  });
});
And("Check the release form of the active ingredient", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockReleaseForms.activeSubstance,
    value: InstructionsBlockReleaseFormsUI.activeSubstance
  });
});
And("Check the price line of the release form drug", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockReleaseForms.drugPrice,
    value: InstructionsBlockReleaseFormsUI.drugPrice
  });
});
And("Check the button of the release form block", () => {
  baseUI.checkElementIsVisible(InstructionsButton.releaseFormDrugBtn, true);
});
Then("Check the visibility of the characteristics block", () => {
  baseUI.checkElementIsVisible(InstructionsBlockCharacteristics.blockCharacteristics, true);
});
And("Check the title of the characteristics block", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockCharacteristics.title,
    value: InstructionsBlockCharacteristicsUI.title
  });
});
And("Check the release category of the characteristics block", () => {
  baseUI.checkElementIsVisible(InstructionsBlockCharacteristics.releaseCategory, true);
});
And("Check the active substance of the characteristics block", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockCharacteristics.activeSubstance,
    value: InstructionsBlockCharacteristicsUI.activeSubstance
  });
});
And("Check the medicines of the characteristics block", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockCharacteristics.medicines,
    value: InstructionsBlockCharacteristicsUI.medicines
  });
});
And("Check the release forms for NFC Element 1 of the characteristics block", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockCharacteristics.releaseFormsForNFCEl1,
    value: InstructionsBlockCharacteristicsUI.releaseFormsForNFCEl1
  });
});
And("Check the release forms for NFC Element 2 of the characteristics block", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockCharacteristics.releaseFormsForNFCEl2,
    value: InstructionsBlockCharacteristicsUI.releaseFormsForNFCEl2
  });
});
And("Check the release forms for NFC Element 3 of the characteristics block", () => {
  baseUI.checkElementTextContains({
    selector: InstructionsBlockCharacteristics.releaseFormsForNFCEl3,
    value: InstructionsBlockCharacteristicsUI.releaseFormsForNFCEl3
  });
});
Then("Check the block composition and application visibility", () => {
  baseUI.checkElementIsVisible(InstructionsElements.blockCompositionAndApplication, true);
});
Then("Check the block composition and form of the issue visibility", () => {
  baseUI.checkScrollblockIsVisible({ 
    selector: InstructionsElements.blockDrugSideCard
  });
});
Then("Check the block comments list visibility", () => {
  baseUI.checkElementIsVisible(InstructionsElements.blockCommentsList, true);
});
