/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  __jdu=160327046028420799501; shshshfpa=519bc0ca-c611-5d2f-51f4-3ba3b639c1be-1603270463; shshshfpb=zCImcRFNPuW45P%2FdwwBv31Q%3D%3D; whwswswws=; pinId=kdn6-a8iloS1ALfsw-M3Hg; TrackID=1-eVqcIzBoHM2c_N4JQguo1J3_4la-7UbZ2EpmwUgKKcniLKtOvyedfShrDmA4D2XvMoUk_99DlavW9B0-kqBxlq9GzawKhcSOrl56q6daow; jcap_dvzw_fp=X2mII-uialQXesYwVWas7zHcY97yJI3Cw8DxUMYZd3xyhKg8Jqqe46428IceFdTLVOqgsQ==; unpl=V2_ZzNtbUADQBB9DhFQK01aBGJXRV1KUEdCJg9AVHgYVQ1vBUJYclRCFnUUR1JnGV4UZgsZWEBcQxdFCEdkeBBVAWMDE1VGZxpFK0oYEDpBA04%2bR0ICLFYTHHMME1N7S1hSMwYUCEsEERB8D0BcextfDWUAR15AZ3MWdThGVUsZWwRlABRcR1BCFnwNRVV9EVQBZgMibUVncyV3CUZTfxxsBFcCIh8WC0YTcgBBUjYZWwRlABRcR1BCFnwNRVV9EVQBZgMiXHJU; __jdv=76161171|haosou-pinzhuan|t_288551095_haosoupinzhuan|cpc|0a875d61c5fe47d8bc48679132932d23_0_3e2497f5ae704ef1965fb671208997a4|1626140593424; ipLoc-djd=22-1954-39015-0; areaId=22; PCSYCityID=CN_510000_510500_510504; __jda=122270672.160327046028420799501.1603270460.1624597772.1626140593.38; __jdc=122270672; wlfstk_smdl=4coaukhp38rgodlnjcilk2olxmp4rkiv; wxa_level=1; jxsid=16261407005263611826; webp=1; mba_muid=160327046028420799501; visitkey=63616387561033435; autoOpenApp_downCloseDate_auto=1626140701424_10800000; 3AB9D23F7A4B3C9B=5LQ6KJVLAUB56FGNY5OMURQP6HIJT3VJXBVUEJAMW4AUHAIHBH6HKMARHAERH6IJFMMBYNQSMRHK7DWEEUZTSBNNMY; TrackerID=YyCaBGuVcuybwSqgIitEl9v-rU5_X_nksZAcp1KqWywl8P7dfaXTD8Us8ckAJgDpqAI_erY3bQ5zoV3xQ_7cIeGSBhKRNLyYzhpxosiJwgjj_oGzVbkDUGHQCqpE0mZEaVOtpEF6Z_C8XLKW8_-Nuw; pt_key=AAJg7PBxADD3eG5pgfgZg5SuS4NkdfIMPUmWCmEsGMdPaVgeDm7TznWH31-lOwWqgyHPhts_sW0; pt_pin=18683061836_p; pt_token=ua1cj02x; pwdt_id=18683061836_p; sfstoken=tk01mc9971bcaa8sMisxeDNlZFp6XX7sSGfnpTB9so/LAyyGn9DrjAnh/bsWBneUuDHXONAM2Bix/BM75y71hX14uNC6; PPRD_P=UUID.160327046028420799501; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=375; shshshfp=6171f0a7adebc32fff510fd780bc467a; __wga=1626140897046.1626140786950.1626140786950.1626140786950.3.1; jxsid_s_t=1626140897101; shshshsID=ab312443b730d5485616ebee6b102dcc_5_1626140897287; retina=1; cid=9; wqmnx1=MDEyNjM2NHNqLzE2M2wwb1BvIDMgU3BiMDVNa2tyMSBlNGE0MllhLTQxUlMjISk%3D; __jdb=122270672.12.160327046028420799501|38.1626140593; mba_sid=16261407007093129894088813090.9; __jd_ref_cls=MSearchFrame_PersonalCenter
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
/*
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
   // await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
   // await process.exit(0);
  })()
}
*/
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
