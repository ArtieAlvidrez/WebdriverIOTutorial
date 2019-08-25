const assert = require('assert');

describe("See if we can access a web page", () =>{

  it("first, with google", async () =>{
    await browser.url('http://google.com');
    const title = await browser.getTitle();
    expect(title).toContain('Google');
  });
});
    

