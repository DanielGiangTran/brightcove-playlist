export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
  ].join(":");
};

export const serverUrl =
  // eslint-disable-next-line max-len
  "https://pubads.g.doubleclick.net/gampad/ads?iu=%2F83069739%2Fnull&description_url=https%3A%2F%2Fwww.nzherald.co.nz%2Fbusiness%2Fhow-the-briscoes-bloke-rod-duke-is-making-millions-even-in-a-recession%2FOCK7NQQYYJHVZGHWGSM4ZJ3KIM%2F&plcmt=2&env=vp&correlator=616885219056411&tfcd=0&npa=0&gdfp_req=1&output=xml_vast4&sz=620x350&ppid=null&cust_params=browserWidth%3D1280%26host%3Dwww.nzherald.co.nz%26sv%3D3.0%26dw_seg%3D%26abt%3D37%26pvid%3D5zfcg6okqt&unviewed_position_start=1&vpa=click&vpmute=1&sdkv=h.3.666.0&osd=2&frm=0&vis=1&sdr=1&hl=en&afvsz=200x200%2C250x250%2C300x250%2C336x280%2C450x50%2C468x60%2C480x70&is_amp=0&uach=WyJtYWNPUyIsIjE0LjYuMSIsImFybSIsIiIsIjEyOC4wLjY2MTMuMTIwIixudWxsLDAsbnVsbCwiNjQiLFtbIkNocm9taXVtIiwiMTI4LjAuNjYxMy4xMjAiXSxbIk5vdDtBPUJyYW5kIiwiMjQuMC4wLjAiXSxbIkdvb2dsZSBDaHJvbWUiLCIxMjguMC42NjEzLjEyMCJdXSwwXQ..&u_so=l&ctv=0&mpt=brightcove%2Fplayer-ht&mpv=4.3.1&gdpr=0&sdki=445&ptt=20&adk=2997548636&sdk_apis=2%2C7%2C8&omid_p=Google1%2Fh.3.666.0&sid=78CC1660-49B0-4AA0-8727-F7769CADABA5&a3p=EloKDWNyd2RjbnRybC5uZXQSQDdlMTE0MWQ4YjVlMmQ3ZDE3ZjAxMmJmZmE3OTExODVjYTAyYzI5MjAxMTlmY2Q3ZDM1YWIwNWM0YjA5NWYwNjcYosTIvZ4ySAASGwoMbGl2ZXJhbXAuY29tGNvq_7-eMkgAUgIIbA..&htps=10&nel=1&td=1&eid=95322027%2C95326337%2C95331589%2C95332046%2C95338773&ref=https%3A%2F%2Fwww.nzherald.co.nz%2F&url=https%3A%2F%2Fwww.nzherald.co.nz%2Fbusiness%2Fhow-the-briscoes-bloke-rod-duke-is-making-millions-even-in-a-recession%2FOCK7NQQYYJHVZGHWGSM4ZJ3KIM%2F&dlt=1726175502646&idt=859&dt=1726175508226&cookie=ID%3D4f6f29703ddc2b67%3AT%3D1717651031%3ART%3D1726175468%3AS%3DALNI_MbscK7Hy5NsDkQrR9UlNTzZwKSYsg&gpic=UID%3D00000e422ffa265c%3AT%3D1717651031%3ART%3D1726175468%3AS%3DALNI_MZl_M3E0mB_Y_UNHoKllJ52qtbunQ&eo_id_str=ID%3Dfe9c65aa0a191101%3AT%3D1717651031%3ART%3D1726175468%3AS%3DAA-AfjblQp-u7y5QZToFemOIcqWO&pvsid=3096561542453494&scor=823154274422029&ged=ve4_td5_tt4_pd5_la0_er505.0.850.614_vi438.0.1092.614_vp100_eb24171";
