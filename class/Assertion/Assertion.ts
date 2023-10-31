export class Assertion {
  assertionStatusCode(responseStatusCode, expectedStatusCode):void {
    expect(responseStatusCode).to.equal(expectedStatusCode);
  }
  assertionFirstValueShouldIncludeSecond(responseValue, verifyValue):void {
    expect(responseValue).to.include(verifyValue);
  }
  assertionBodyResponseIsNotEmpty(response):void {
    expect(response.body).to.not.be.empty;
  }
  assertionLengthElementNotEqualNull(response):void {
    expect(response[0].innerText.length).to.not.equal(0);
  }
}