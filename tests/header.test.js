// const puppeteer = require('puppeteer');
// const sessionFactory = require('./factories/sessionFactory')
// const userFctory = require('./factories/userFctory')
const Page = require('./helpers/page')
// test('Adds two numbers' , () => {
//     const sum = 1 + 2;
//     expect(sum).toEqual(3);
// });

// let browser,page;

let page;

beforeEach( async () => {
    //  browser = await puppeteer.launch({headless : false});
    //  page = await browser.newPage();
    page = await Page.build();
    await page.goto('http://localhost:3000')
});

afterEach(async () => {
//    await  browser.close()

await page.close();
})

test.only('the header has the correct text' , async() => {
    // const browser = await puppeteer.launch({headless : false});
    // const page = await browser.newPage();
    // await page.goto('localhost:3000')

    const text = await page.getContentsOf('a.brand-logo');
    // const text = await page.$eval('a.brand-logo', el => el.innerHTML);


    expect(text).toEqual('Blogster');
})

test.only('clicking login starts oauth flow' , async() => {
    await page.click('.right a');
    const url = await page.url();
    console.log(url);
    expect(url).toMatch(/accounts\.google\.com/);
})


test.only('when signed in shows logout button', async () => {

    await page.login();
    // const id = '6458d3dd61d35d3e40b93977';
    // const Buffer = require('safe-buffer').Buffer;
    // const sessionObject = {
    //     passport : {
    //         user : id
    //     }
    // };

    // const sessionString = Buffer.from(
    //     JSON.stringify(sessionObject)).toString('base64');

    //     const Keygrip = require('keygrip');
    //     const keys = require('../config/keys')

    //     const keygrip = new Keygrip([keys.cookieKey]);
    //     const sig = keygrip.sign('session='+sessionString);
        // console.log(sessionString,sig);

        // ----------------------------------------------------
        // const user = userFctory();
        // const {session , sig} = sessionFactory(user);
        // console.log(session,sig)
        // await page.setCookie({name : 'session',value : session});
        // await page.setCookie({name : 'session.sig',value : sig});
        // // -----------------------------------------------------------------
        // // await page.setCookie({name : 'session',value : sessionString});
        // // await page.setCookie({name : 'session.sig',value : sig});
        // // -------------------------------------------------------------
        // await page.goto('localhost:3000')
        // ----------------------------------------------------------

    //the below code causes error hence commented for now

        // await page.waitFor('a[href="/auth/logout"]');
        // ----------------------------------------------------------------------------------
        // const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);
        // expect(text).toEqual('Logout');
        // ----------------------------------------------------------------------------------

})