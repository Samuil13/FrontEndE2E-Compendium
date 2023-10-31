export const InstructionsElements = {
  titleDrug: ".cp-page-title",
  topDrugsList: "[data-e2e=\"components.reference.topReferences\"]>div>div>.cp-carousel__body>.cp-reference-item",
  releaseFormsTitle: ".cp-reference-detail__drugs > .cp-reference-detail__block_title",
  blockCompositionAndApplication: ".cp-reference-detail__article",
  blockDrugSideCard: ".cp-drug-detail__sticky",
  blockCommentsList: ".cp-comments-list"
}

export const InstructionsBlockBreadcrumbs = {
  blockBreadcrumbs: ".cp-breadcrumbs",
  breadcrumbsOfTheSecondElement: ".cp-breadcrumbs__list > :nth-child(2) > .cp-btn",
  breadcrumbsOfTheThirdElement: ".cp-breadcrumbs__list-item_disable > .cp-btn"
}

export const InstructionsButton = {
  releaseFormDrugBtn: ":nth-child(2) > .cp-reference-detail__drugs_group > .cp-drug-form-item > .cp-drug-form-item__button-wrapper > .cp-btn"
}

export const InstructionsImg = {
  img: ".cp-reference-detail__cover_wrapper > .cp-item-img"
}

export const InstructionsBlockReleaseForms = {
  releaseForms: ".cp-reference-detail__drugs",
  title: ".cp-reference-detail__drugs > .cp-reference-detail__block_title",
  el: "[data-e2e='components.drug.drugFormItem']",
  producerName: ":nth-child(2) > .cp-reference-detail__drugs_maker-group-title",
  drugTitle: ".cp-drug-form-item__name",
  activeSubstance: ":nth-child(2) > .cp-reference-detail__drugs_group > .cp-drug-form-item > .cp-drug-form-item__content-wrapper > .cp-drug-form-item__pill-text-wrapper > .cp-drug-form-item__text-wrapper > .cp-drug-form-item__compositions-wrapper > .cp-drug-form-item__composition-item > .cp-drug-form-item__composition-text",
  drugPrice: ":nth-child(2) > .cp-reference-detail__drugs_group > .cp-drug-form-item > .cp-drug-form-item__button-wrapper > .cp-drug-form-item__min-price"
}

export const InstructionsBlockCharacteristics = {
  blockCharacteristics: ".cp-reference-characteristics",
  title: ".cp-reference-characteristics__block_title",
  releaseCategory: ".cp-attribute-item__dd > .cp-btn",
  activeSubstance: ":nth-child(2) > .cp-attribute-item__dd > .cp-block",
  medicines: ":nth-child(3) > .cp-attribute-item__dd > .cp-block",
  releaseFormsForNFCEl1: ":nth-child(4) > .cp-attribute-item__dd > :nth-child(1)",
  releaseFormsForNFCEl2: ".cp-attribute-item__dd > :nth-child(2)",
  releaseFormsForNFCEl3: ".cp-attribute-item__dd > :nth-child(3)"
}