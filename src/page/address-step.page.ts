import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('#center_column > form > p > button > span');
  }

  public async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
