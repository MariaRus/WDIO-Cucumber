import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";
import { top } from "../../constants/expectedValue";
import { wednesday } from "../../constants/titles";
import { logger } from "../../conf/loggerConfig";

When(/^I enter "Уэнсдей" in input field$/, async () => {
    logger.debug(`I enter ${wednesday}in input field`);
    logger.error(`I enter ${wednesday}in input field`);
    await (await getWebElement(MainPage.searchInput)).setValue(wednesday);
});
When(/^I click on the link of this series$/, async () => {
    logger.debug(`I click on the ${MainPage.searchMovieLink}`);
    logger.error(`I click on the ${MainPage.searchMovieLink}`);
    await (await getWebElement(MainPage.searchMovieLink)).click();
});
Then(/^I should see this series in "top 250"$/, async () => {
    logger.debug(`I should see ${ResultPage.text}`);
    logger.error(`I should see ${ResultPage.text}`);
    const checkText = await (await getWebElement(ResultPage.text)).getText();
    await expect(checkText).toContain(top);
});