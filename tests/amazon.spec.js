
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Open Amazon login Page
    await page.goto('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%2F%3F_encoding%3DUTF8%26adgrpid%3D138506081990%26ext_vrnc%3Dhi%26gclid%3DEAIaIQobChMI-f6Op_nzhQMVeFoPAh10fQVoEAAYASAAEgJjmvD_BwE%26hvadid%3D674474151981%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9040229%26hvnetw%3Dg%26hvpone%3D%26hvpos%3D%26hvptwo%3D%26hvqmt%3De%26hvrand%3D4502655422014069201%26hvtargid%3Dkwd-24787317188%26hydadcr%3D564_2683761%26ie%3DUTF8%26index%3Daps%26keywords%3Damazon%2520sign%2520in%26ref%3Dpd_sl_39ebeum5qu_e%26tag%3Dgooginhydr1-21%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
   
    // Enter Amazon Username 
    await page.getByLabel('Email or mobile phone number').fill('biswasindira15@gmail.com');
    await page.getByLabel('Continue').click();
   
    // Enter Amazon password
    
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Indira2727#');
    await page.getByLabel('Sign in').click();
    await page.getByRole('button', { name: 'Go' }).click();
    console.log("Login Successfull")

    // Search the product in search bar , here we are searching "Xiaomi Type C Cable"

    await page.getByPlaceholder('Search Amazon.in').fill('Xiaomi Type C Cable');
    await page.getByPlaceholder('Search Amazon.in').press('Enter');

    // Here we will check whether we have landed on right page
    
    await expect(page).toHaveURL(/Xiaomi/)
    console.log("Xiaomi type c cable has been successfully searched")
    // Here we will add the product to the cart

    await page.goto('https://www.amazon.in/Xiaomi-HyperCharge-Smartphones-Tablets-Laptops/dp/B0D1TTDFYS/ref=sr_1_1_sspa?crid=XN75EJB2DVKD&dib=eyJ2IjoiMSJ9.BFvgsmb0xd_8BuB0_8vwQfiY_XKGh6egzImA69yYGd48zu1g-MWFq3i665cKYWPGAAr9h1PmFJg4RW47RfAY1xiFxHxTx2DrZYC_F1oBYws6RB2X58qGDInFOrnr4_hsQk0a88nZMKVmQBIapaD-Jf4zG_7lji0jpENDm6S17zwMM_4AySYCw_qFeS4RMFHV68jBqWVk3NfeZbNU-LkN4rzJ5X2xx7zyBNa8vplB5kY.h1nvHeX19dYPVIUrmbGuQhwGct6LcHLX_MHrbRre2NE&dib_tag=se&keywords=xiaomi+type+c+cable&qid=1715187708&sprefix=%2Caps%2C198&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1');
    await page.locator ("//input[@id='add-to-cart-button']").click()
    await page.locator("//span[@id='nav-cart-count']").click()

    //Here we will check whether product is added to the cart

    await expect(page).toHaveURL(/cart/)
    console.log("Product has been successfully added to the cart")

    // Here we will procceed to the checkout page

    await page.locator("//input[@name='proceedToRetailCheckout']").click()

    // Here we will check that we are on the checkout page

    await expect.toHaveURL(/buy/)
    console.log("Product has been checked out sucessfully")

    // Here we will add "AXE deodrant" to the wishlist

   
    await page.goto("https://www.amazon.in/AXE-Signature-Perfume-Mysterious-154ml/dp/B07L3PKPCR/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.LcHZhgAV44zM6BVuKT54NCwq8EiUS3I7GrvR4GvBB4TjC4RHKS5ihpdlLZLifE-J8uLSi0R1I_oGEp2xgc9QVGIxSes0e-SfK6Jez3le_oBFYFbIaAjpmZo9zSyEu-Hpce3NdO594wKs8YbjSWfv0hOeEyPUqXthoGFacvtd-EHAnZzEsuRJo-kk7oEdAhua1wybuqaLxTqKzHUkuThO34pmVnP8jf7MF-9z3CfKhJ1moo5x-MbvTGewX6aStFWtbaceor_-Ze168cbccthJHVwZ2P1I3o3id51s40UKEpk.yU3AczbySvOvZMxWrl3B2hsyxYsP5miBCt7Y2QAltPg&dib_tag=se&keywords=axe+deo&qid=1715193045&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1")

    await page.locator("//input[@id='add-to-wishlist-button-submit']").click()

    console.log("Product is sucessfully added to the Wishlist")
    console.log("All tests have successfully passed!")

})
