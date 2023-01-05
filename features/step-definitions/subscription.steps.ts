import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the button "Попробовать плюс"$/, async () => {
    logger.debug(`I click on the button ${MainPage.subscribeLink}`);
    logger.error(`I click on the button ${MainPage.subscribeLink}`);
    await (await getWebElement(MainPage.subscribeLink)).click();
});
Then(/^I should see the button "Оформить подписку" is enabled$/, async () => {
    logger.debug(`I should see the button ${ResultPage.subscribe} is enabled`);
    logger.error(`I should see the button ${ResultPage.subscribe} is enabled`);
    const checkButton = await getWebElement(ResultPage.subscribe);
    await expect(await checkButton.isEnabled());
});