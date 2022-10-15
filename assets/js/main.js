jQuery(document).ready(function ($) {
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});


//get cf cdn info
function getCDNinfo() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/cdn-cgi/trace", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    let data = xhr.responseText;
                    let areas = "Accra, Ghana - (ACC);Algiers, Algeria - (ALG);Antananarivo, Madagascar - (TNR);Cape Town, South Africa - (CPT);Casablanca, Morocco - (CMN);Dakar, Senegal - (DKR);Dar Es Salaam, Tanzania - (DAR);Djibouti City, Djibouti - (JIB);Durban, South Africa - (DUR);Gaborone, Botswana - (GBE);Harare, Zimbabwe - (HRE);Johannesburg, South Africa - (JNB);Kigali, Rwanda - (KGL);Lagos, Nigeria - (LOS);Luanda, Angola - (LAD);Maputo, Mozambique - (MPM);Mombasa, Kenya - (MBA);Monrovia, Liberia - (ROB);Nairobi, Kenya - (NBO);Port Louis, Mauritius - (MRU);Réunion, France - (RUN);Tunis, Tunisia - (TUN);Ahmedabad, India - (AMD);Almaty, Kazakhstan - (ALA);Anqing, China - (AQG);Bangalore, India - (BLR);Bangkok, Thailand - (BKK);Bandar Seri Begawan, Brunei - (BWN);Baoji, China - (XIY);Bhubaneswar, India - (BBI);Cebu, Philippines - (CEB);Chandigarh, IN - (IXC);Changde, China - (CGD);Changsha, China - (CSX);Changzhou, China - (CZX);Chengdu, China - (CTU);Chennai, India - (MAA);Chiang Mai, Thailand - (CNX);Chittagong, Bangladesh - (CGP);Colombo, Sri Lanka - (CMB);Dalian, China - (DLC);Dhaka, Bangladesh - (DAC);Foshan, China - (FUO);Fuzhou, China - (FOC);Guangzhou, China - (CAN);Guiyang, China - (KWE);Haikou, China - (HAK);Hanoi, Vietnam - (HAN);Hengshui, China - (SJW);Ho Chi Minh City, Vietnam - (SGN);Hohhot, China - (HET);Hong Kong - (HKG);Huainan, China - (HFE);Hyderabad, India - (HYD);Islamabad, Pakistan - (ISB);Jakarta, Indonesia - (CGK);Jashore, Bangladesh - (JSR);Jinan, China - (TNA);Jinhua, China - (HGH);Johor Bahru, Malaysia -&nbsp;(JHB);Kanpur, India - (KNU);Karachi, Pakistan - (KHI);Kathmandu, Nepal - (KTM);Khabarovsk, Russia - (KHV);Kolkata, India - (CCU);Krasnoyarsk, Russia - (KJA);Kuala Lumpur, Malaysia - (KUL);Lahore, Pakistan - (LHE);Langfang, China - (PKX);Lanzhou, China - (LHW);Luoyang, China - (LYA);Macau - (MFM);Malé, Maldives - (MLE);Mandalay, Myanmar - (MDL);Manila, Philippines - (MNL);Mumbai, India - (BOM);Nagpur, India - (NAG);Naha, Japan  - (OKA);New Delhi, India - (DEL);Osaka, Japan - (KIX);Patna, India - (PAT);Phnom Penh, Cambodia - (PNH);Qingdao, China - (TAO);Qinhuangdao, China - (BPE);Quanzhou, China - (JJN);Quzhou, China - (JUZ);Seoul, South Korea - (ICN);Shanghai, China - (SHA);Shiyan, China - (WDS);Singapore, Singapore - (SIN);Surat Thani, Thailand - (URT);Suqian, China - (NKG);Taipei - (TPE);Taizhou, China - (HYN);Tashkent, Uzbekistan - (TAS);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuxi, China - (WUX);Xining, China - (XNN);Xinyu, China - (KHN);Yangon, Myanmar - (RGN);Yerevan, Armenia - (EVN);Yichang, China - (YIH);Yogyakarta, Indonesia - (JOG);Zhengzhou, China - (CGO);Amsterdam, Netherlands - (AMS);Athens, Greece - (ATH);Barcelona, Spain - (BCN);Belgrade, Serbia - (BEG);Berlin, Germany - (TXL);Brussels, Belgium - (BRU);Bucharest, Romania - (OTP);Budapest, Hungary - (BUD);Chișinău, Moldova - (KIV);Copenhagen, Denmark - (CPH);Cork, Ireland -  (ORK);Dublin, Ireland - (DUB);Düsseldorf, Germany - (DUS);Edinburgh, United Kingdom - (EDI);Frankfurt, Germany - (FRA);Geneva, Switzerland - (GVA);Gothenburg, Sweden - (GOT);Hamburg, Germany - (HAM);Helsinki, Finland - (HEL);Istanbul, Turkey - (IST);Kyiv, Ukraine - (KBP);Lisbon, Portugal - (LIS);London, United Kingdom - (LHR);Luxembourg City, Luxembourg - (LUX);Madrid, Spain - (MAD);Manchester, United Kingdom - (MAN);Marseille, France - (MRS);Milan, Italy - (MXP);Minsk, Belarus - (MSQ);Moscow, Russia - (DME);Munich, Germany - (MUC);Nicosia, Cyprus - (LCA);Oslo, Norway - (OSL);Palermo, Italy - (PMO);Paris, France - (CDG);Prague, Czech Republic - (PRG);Reykjavík, Iceland - (KEF);Riga, Latvia - (RIX);Rome, Italy - (FCO);Saint Petersburg, Russia - (LED);Sofia, Bulgaria - (SOF);Stockholm, Sweden - (ARN);Tallinn, Estonia - (TLL);Tbilisi, Georgia - (TBS);Thessaloniki, Greece - (SKG);Tirana, Albania - (TIA);Vienna, Austria - (VIE);Vilnius, Lithuania - (VNO);Warsaw, Poland - (WAW);Yekaterinburg, Russia - (SVX);Zagreb, Croatia - (ZAG);Zürich, Switzerland - (ZRH);Americana, Brazil - (QWJ);Arica, Chile - (ARI);Asunción, Paraguay - (ASU);Belém, Brazil - (BEL);Belo Horizonte, Brazil - (CNF);Blumenau, Brazil - (BNU);Bogotá, Colombia - (BOG);Brasilia, Brazil - (BSB);Buenos Aires, Argentina - (EZE);Caçador, Brazil - (CFC);Campinas, Brazil - (VCP);Córdoba, Argentina - (COR);Cuiabá, Brazil - (CGB);Curitiba, Brazil - (CWB);Florianopolis, Brazil - (FLN);Fortaleza, Brazil - (FOR);Georgetown, Guyana - (GEO);Goiânia, Brazil - (GYN);Guatemala City, Guatemala - (GUA);Guayaquil, Ecuador - (GYE);Itajaí, Brazil - (ITJ);Joinville, Brazil - (JOI);Juazeiro do Norte, Brazil - (JDO);Lima, Peru - (LIM);Manaus, Brazil - (MAO);Medellín, Colombia - (MDE);Neuquén, Argentina - (NQN);Panama City, Panama - (PTY);Paramaribo, Suriname - (PBM);Porto Alegre, Brazil - (POA);Port-Au-Prince, Haiti - (PAP);Quito, Ecuador - (UIO);Ribeirao Preto, Brazil - (RAO);Rio de Janeiro, Brazil - (GIG);Salvador, Brazil - (SSA);San José, Costa Rica - (SJO);Santiago, Chile - (SCL);São José do Rio Preto, Brazil - (SJP);São Paulo, Brazil - (GRU);Sorocaba, Brazil - (SOD);St. George's, Grenada - (GND);Tegucigalpa, Honduras - (TGU);Uberlândia, Brazil - (UDI);Willemstad, Curaçao - (CUR);Amman, Jordan - (AMM);Astara, Azerbaijan - (LLK);Baghdad, Iraq - (BGW);Baku, Azerbaijan - (GYD);Basra, Iraq (BSR);Beirut, Lebanon - (BEY);Dammam, Saudi Arabia - (DMM);Doha, Qatar - (DOH);Dubai, United Arab Emirates - (DXB);Erbil, Iraq - (EBL);Haifa, Israel - (HFA);Jeddah, Saudi Arabia - (JED);Kuwait City, Kuwait - (KWI);Manama, Bahrain - (BAH);Muscat, Oman - (MCT);Najaf, Iraq (NJF);Nasiriyah, Iraq (XNH);Ramallah - (ZDM);Riyadh, Saudi Arabia - (RUH);Tel Aviv, Israel - (TLV);Ashburn, VA, United States - (IAD);Atlanta, GA, United States - (ATL);Boston, MA, United States - (BOS);Buffalo, NY, United States - (BUF);Calgary, AB, Canada - (YYC);Charlotte, NC, United States - (CLT);Chicago, IL, United States - (ORD);Columbus, OH, United States - (CMH);Dallas, TX, United States - (DFW);Denver, CO, United States - (DEN);Detroit, MI, United States - (DTW);Honolulu, HI, United States - (HNL);Houston, TX, United States - (IAH);Indianapolis, IN, United States - (IND);Jacksonville, FL, United States - (JAX);Kansas City, MO, United States - (MCI);Las Vegas, NV, United States - (LAS);Los Angeles, CA, United States - (LAX);McAllen, TX, United States - (MFE);Memphis, TN, United States - (MEM);Mexico City, Mexico - (MEX);Miami, FL, United States - (MIA);Minneapolis, MN, United States - (MSP);Montgomery, AL, United States - (MGM);Montréal, QC, Canada - (YUL);Nashville, TN, United States - (BNA);Newark, NJ, United States - (EWR);Norfolk, VA, United States - (ORF);Omaha, NE, United States - (OMA);Ottawa, Canada - (YOW);Philadelphia, United States - (PHL);Phoenix, AZ, United States - (PHX);Pittsburgh, PA, United States - (PIT);Portland, OR, United States - (PDX);Queretaro, MX, Mexico - (QRO);Richmond, VA, United States - (RIC);Sacramento, CA, United States - (SMF);Salt Lake City, UT, United States - (SLC);San Diego, CA, United States - (SAN);San Jose, CA, United States - (SJC);Saskatoon, SK, Canada - (YXE);Seattle, WA, United States - (SEA);St. Louis, MO, United States - (STL);Tallahassee, FL, United States - (TLH);Tampa, FL, United States - (TPA);Toronto, ON, Canada - (YYZ);Vancouver, BC, Canada - (YVR);Winnipeg, MB, Canada - (YWG);Adelaide, SA, Australia - (ADL);Auckland, New Zealand - (AKL);Brisbane, QLD, Australia - (BNE);Canberra, ACT, Australia - (CBR);Christchurch, New Zealand - (CHC);Hagatna, Guam - (GUM);Hobart, Australia - (HBA);Melbourne, VIC, Australia - (MEL);Noumea, New Caledonia - (NOU);Perth, WA, Australia - (PER);Sydney, NSW, Australia - (SYD)".split(";");
                    let area = data.split("colo=")[1].split("\n")[0];
                    let loc = data.split("loc=")[1].split("\n")[0];
                    // if class twitter exists
                    if ($('.twitter').length > 0) {
                        // check if user is in PRC
                        // China IP > zh-CN = Asia/Shanghai
                        if ((navigator.language.indexOf("zh-CN") >= 0 && Intl.DateTimeFormat().resolvedOptions().timeZone == "Asia/Shanghai") || loc == "CN") {
                            // hide twitter class
                            $('.twitter').hide();
                        } else {
                            // show twitter class
                            $('.twitter').show();
                        }
                    }
                    for (var i = 0; i < areas.length; i++) {
                        if (areas[i].indexOf(area) != -1) {
                            document.getElementById("cdn-info-content").innerHTML = areas[i];
                            document.getElementById("cdn-info").style.display = "";
                            return areas[i];
                        }
                    }
                    //if not exist, fallback to raw data
                    document.getElementById("cdn-info-content").innerHTML = area;
                    document.getElementById("cdn-info").style.display = "";
                    return area;
                } catch (error) {
                    console.log(error)
                }
            }
        }
        xhr.send(null);
    } catch (error) {
        console.log(error)
    }
}

if (document.getElementById("cdn-info")) {
    document.getElementById("cdn-info").style.display = "none";
    try {
        getCDNinfo();
    } catch (error) {
        console.log(error);
    }
} else {
    console.log("cdn-info not found");
}