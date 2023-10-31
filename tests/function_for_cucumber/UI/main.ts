/// <reference types="cypress" />
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import { mainURL } from "../../fixtures/URLFortest";
import { BaseUI } from "../../../class/UI/baseUI";

const baseUI: BaseUI = new BaseUI();

Given("Visit main page site", () => {
  baseUI.visitPage(mainURL);
});

