
const { chromium } = require('C:/Users/HP/AppData/Local/Programs/Python/Python312/Lib/site-packages/playwright/driver/package');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  // Keep email delivery and verification external calls out of this UI check.
  await page.route(/google\.com\/recaptcha\/api\.js/, async route => {
    const onload = new URL(route.request().url()).searchParams.get('onload');
    await route.fulfill({contentType:'application/javascript',body:
      'window.grecaptcha={render:function(el,o){window.__captcha=o;return 1},execute:function(){window.__captcha.callback("ui-test-token")},reset:function(){},getResponse:function(){return "ui-test-token"}}; window['+JSON.stringify(onload)+']();'});
  });
  const payloads=[];
  let fail=false;
  await page.route('**/api/contact', async route => {
    payloads.push(route.request().postDataJSON());
    await route.fulfill({status:fail?500:200,contentType:'application/json',body:JSON.stringify(fail?{error:'test failure'}:{success:true})});
  });
  await page.goto('http://localhost:3000/sustainability', {waitUntil:'networkidle'});
  async function imagesReady(scope=page) {
    await scope.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{img.loading='eager'; return img.decode().catch(()=>{});})));
    const broken=await scope.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.naturalWidth).map(i=>i.src));
    assert.deepEqual(broken,[]);
  }
  await imagesReady();
  assert.equal(await page.locator('footer').count(),1);
  await page.screenshot({path:'D:/catobo/.next/sustainability-desktop.png',fullPage:true});
  for (const [brand,names] of [['Catobo',['Catalyst Fuel Saver','High Emissivity Coating','Xplate']],['Aerostrata',['Vaayu Nano Hybrid Cooling','American Wind','Sun Wind Technology']]]) {
    await page.getByRole('tab',{name:brand,exact:true}).click();
    assert.equal(await page.locator('article:visible').count(),3);
    for (const name of names) {
      const card=page.locator('article').filter({has:page.getByRole('heading',{name,exact:true})});
      const trigger=card.getByRole('button',{name:'Learn more',exact:true});
      await trigger.click();
      const dialog=page.getByRole('dialog');
      assert.equal(await dialog.getByRole('heading').innerText(),name);
      await imagesReady(dialog);
      for(let i=0;i<5;i++) { await page.keyboard.press('Tab'); assert.equal(await dialog.evaluate(el=>el.contains(document.activeElement)),true); }
      if(name==='Catalyst Fuel Saver') await page.screenshot({path:'D:/catobo/.next/sustainability-popup.png'});
      if(name==='High Emissivity Coating') await page.screenshot({path:'D:/catobo/.next/sustainability-coating.png'});
      await page.keyboard.press('Escape');
      assert.equal(await page.getByRole('dialog').count(),0);
      assert.equal(await trigger.evaluate(el=>el===document.activeElement),true);
    }
  }
  await page.getByRole('tab',{name:'Catobo',exact:true}).focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getByRole('tab',{name:'Aerostrata',exact:true}).getAttribute('aria-selected'),'true');
  await page.getByRole('button',{name:'Learn more',exact:true}).first().click();
  await page.getByRole('dialog').getByRole('button',{name:'Book Your Consultation'}).click();
  assert.equal(await page.getByRole('dialog').count(),0);
  assert.equal(await page.locator('#estimate-name').evaluate(el=>el===document.activeElement),true);
  assert.match(await page.locator('#contact').innerText(),/Vaayu Nano Hybrid Cooling/);
  await page.getByRole('button',{name:'How much can I really save?'}).click();
  assert.match(await page.locator('#faqs').innerText(),/actual savings depend/);
  await page.getByRole('button',{name:'Do I need to change or stop my equipment?'}).click();
  await page.getByRole('button',{name:'Send enquiry',exact:true}).click();
  assert.equal(payloads.length,0);
  await page.locator('#estimate-name').fill('Test');
  await page.locator('#estimate-surname').fill('User');
  await page.locator('#estimate-phone').fill('501234567');
  await page.locator('#estimate-email').fill('test@example.com');
  await page.locator('#estimate-company').fill('Test Company');
  await page.locator('#estimate-industry').click();
  await page.getByRole('option',{name:'Steel',exact:true}).click();
  await page.locator('#estimate-spend').fill('10000');
  await page.locator('#estimate-fuel').click();
  await page.getByRole('option',{name:'Diesel',exact:true}).click();
  fail=true;
  await page.getByRole('button',{name:'Send enquiry',exact:true}).click();
  await page.getByRole('alert').filter({hasText:'Your enquiry could not be sent'}).waitFor();
  assert.equal(await page.locator('#estimate-name').inputValue(),'Test');
  fail=false;
  await page.getByRole('button',{name:'Send enquiry',exact:true}).click();
  await page.getByRole('status').filter({hasText:'Thank you! Your enquiry'}).waitFor();
  assert.equal(payloads.length,2);
  assert.match(payloads[1].message,/Vaayu Nano Hybrid Cooling/);
  for(const text of ['+971 501234567','Test Company','Steel','10000','Diesel']) assert.ok(payloads[1].message.includes(text));
  for (const width of [320,390,768,1440,1920]) {
    await page.setViewportSize({width,height:900});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Overflow at '+width);
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto('http://localhost:3000/sustainability',{waitUntil:'networkidle'});
  await imagesReady();
  await page.screenshot({path:'D:/catobo/.next/sustainability-mobile.png',fullPage:true});
  await page.getByRole('button',{name:'Open menu'}).click();
  await page.locator('#mobile-menu').getByRole('link',{name:'Industries',exact:true}).click();
  assert.ok(page.url().endsWith('#industries'));
  await page.getByRole('button',{name:'Learn more',exact:true}).first().click();
  await imagesReady(page.getByRole('dialog'));
  await page.screenshot({path:'D:/catobo/.next/sustainability-mobile-popup.png'});
  await page.getByRole('button',{name:'Close product details'}).click();
  assert.deepEqual(errors,[]);
  console.log('PASS: six product dialogs and images, both tabs, keyboard navigation/focus, consultation handoff, FAQ, required fields, mocked enquiry failure/retry/success and payload, five responsive widths, mobile menu, no runtime errors. No real enquiry sent.');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

