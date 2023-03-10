import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerSchema = new Schema(
    {
        "yritys": { type: String, default: "Yrityksen nimi" },
        "data": {
            "_kommentti": { type: String, default: "Asiakasyritystietue" },
            "meta": { type: String, default: "Metaotsakkeet yms." },
            "perustiedot":
            {
                "osoite": { type: String, default: "Yrityksen osoite" },
                "kotipaikka": { type: String, default: "Yrityksen kotipaikka" },
                "toimipaikka": { type: String, default: "Kaupunki" },
                "kotisivu": { type: String, default: "WEB-osoite" },
                "ytunnus": { type: String, default: "Y-Tunnus" },
                "rekisteripvm": { type: Date, default: Date.now },
                "yhtiomuoto": { type: String, default: "OY, AY, OSK" },
                "toimiala": { type: String, default: "Yrityksen toimiala" },
                "tilakausi": { type: String, default: "" },
                "osakepaaoma": { type: String, default: "" },
                "vastuuhenkilo": { type: String, default: "" },
                "email": { type: String, default: "", lowercase: true },
            },
            "henkilot": {
                "hallitus": [
                    {
                        "nimi": String,
                        "titteli": String,
                        "lisaarvo": String
                    }
                ],
                "johto": [
                    {
                        "nimi": String,
                        "titteli": String,
                        "vastuu": String
                    }
                ],
                "organisaatio": [
                    {
                        "nimi": String,
                        "titteli": String,
                        "vastuu": String,
                        "esimies": String
                    }
                ]
            },
            "liikeidea": {
                "_kommentti": { type: String, default: "Liikeidean sanallinen kuvaus" },
                "liikeidea": { type: String, default: "Mik?? on yrityksen liikeidea? " },
                "toiminnanKohde": { type: String, default: "Kenelle toiminta on suunnattu?" },
                "kohderyhma": { type: String, default: "Kohde ryhm??t ja mitk?? ovat kohderyhmien erityisvaatimukset?" },
                "tarjonta": { type: String, default: "Mit?? asiakkaille tarjotaan? " },
                "ostoyllyke": { type: String, default: "Miten asiakas saadaan ostamaan tuotteita/palveluja?" },
                "myynninLisays": { type: String, default: "Miten saataisiin enemm??n myynti?? aikaiseksi? " },
                "toiminnanKehitys": { type: String, default: "Miten toimintaa on kehitetty viime vuosina? " },
                "ainutlaatuisuus": { type: String, default: "Mit?? ainutlaatuista yrityksess?? on kilpailijoihin verrattuna?" },
                "kilpailuedunSaavutus": { type: String, default: "Miten kilpailuetu on saavutettu?" },
                "suuntaaminen": { type: String, default: "Miten suuntaatte toimintaa alueellisesti / kansainv??lisesti? Korostuuko jokin erityispiirre?" },
                "omistajastrategia": { type: String, default: "Millainen on omistajastrategia?" },
                "missioVisioArvot": { type: String, default: "Mik?? on Missio, Visio ja Arvot?" },
                "strategisetTavoitteet": { type: String, default: "Mit?? strategisia tavoitteita yrityksell?? on?" },
                "strategisetVaihtoehdot": { type: String, default: "Mitk?? ovat strategiset vaihtoehdot?" },
                "kriittisetMenestystekijat": { type: String, default: "Mitk?? ovat kriittisi?? menestystekij??it???" },
                "strategisetToimenpidekokonaisuudet": { type: String, default: "Millaisia strategisia toimenpidekokonaisuuksia tulisi laatia ja tulisi olla (kuvaus, aikataulu, arvo, tavoitteet)" }
            },
            "tavoitteet": { type: String, default: "_TODO" },
            "strateginenArviointi": {
                "kilpailykyvykkyys": {
                    "henkilostonOsaaminen": {
                        "kuvaus": { type: String, default: "Millainen on yrityksen henkil??st??n osaaminen?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Henkil??st??n osaamisessa on liiketoiminnan kannalta keskeisi?? kriittisi?? puutteita" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkil??st??n osaamisessa on joitain kriittisi?? puutteita" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkil??st??n osaamisessa on puutteita, mutta ne eiv??t ole liiketoiminnan kannalta kriittisi??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkil??st??n osaaminen on hyv??, mutta meill?? on muutamia erityisosaamispuutteita" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkil??st??n osaaminen on hyv?? ja sit?? pyrit????n yll??pit??m????n koulutuksilla" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkil??st??n osaaminen on eritt??in hyv?? ja motivaatio sen kehitt??miseen on eritt??in korkea" }
                            }}
                        ]
                    },
                    "ydinkyvykkyyksienMerkitys": {
                        "kuvaus": { type: String, default: "Mik?? on organisaation ydinkyvykkyyksien merkitys?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Organisaatio ei tarvitse mit????n ydinkyvykkyyksi?? nykyisess?? ty??teht??v??ss????n" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaation ydinkyvykkyyksill?? ei ole mit????n erityisi?? merkityst?? liiketoiminnalle" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme ydinkyvykkyydet ovat helposti kopioitavissa eik?? niill?? ole siksi merkityst??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme ydinkyvykkyydet riitt??v??t nykyisen kilpailuaseman s??ilytt??miseen" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme nykyisi?? ydinkyvykkyyksi?? vahvistetaan kilpailuaseman parantamiseksi" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme ydinkyvykkyyksi?? vahvistetaan ja laajennetaan merkitt??vill?? panostuksilla" }
                            }}
                        ]
                    },
                    "liiketoimintasuhteet": {
                        "kuvaus": { type: String, default: "Millaiset ovat yrityksen liiketoimintasuhteet?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Liiketoimintasuhteet ovat ajan tuhlausta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Keskitymme ainoastaan asiakkailta tulevien toimeksiantojen toteuttamiseen" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Keskitymme p????s????nt??isesti nykyisien asiakassuhteiden hoitoon" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Pyrimme luomaan pitk??aikaisia liiketoimintasuhteita nykyisten ja uusien asiakkaiden kanssa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Investoimme aikaa liiketoimintaymp??rist??mme suhdetoiminnan kehitt??miseen" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Panostamme aktiivisesti monipuolisien ja kansainv??listen suhdeverkostojen rakentamiseen" }
                            }}
                        ]
                    },
                    "taloudellisetResurssit": {
                        "kuvaus": { type: String, default: "Millaiset ovat yrityksen taloudelliset resurssit?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Yrityksemme talous on kriittisess?? tilassa" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme taloudellinen tilanne on huono" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme taloudellinen tilanne v??ltt??v??, mutta ei tyydytt??v??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksen taloudellinen tilanne on tyydytt??v??, mutta suhdanneherkk??" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksen taloudellinen tilanne on hyv?? ja vakaa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme taloudellinen tilanne on vahva ja n??kym??t ovat hyv??t" }
                            }}
                        ]
                    }
                },
                "kilpailuetu": {
                    "nykyinenVisio": {
                        "kuvaus": { type: String, default: "Miten selke?? on yrityksen nykyinen visio?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Meill?? ei ole selke???? omaa visiota" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Liiketoimintamme on suuntautunut asiakkaiden tarpeiden mukaan" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme joskus keskustelleet visiostamme, mutta sit?? ei ole m????ritelty" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme kirjanneet vision liiketoimintasuunnitelmamme, mutta siihen se on j????nyt" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Visiomme on l??hinn?? esityskalvoissa, mutta ei toimi toiminnan yrityksen johtamisessa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meill?? on selke?? harkittu yhteinen visio, joka on viestitty koko liiketoimintaymp??rist????mme" }
                            }}
                        ]
                    },
                    "kilpailukykyNykystrategia": {
                        "kuvaus": { type: String, default: "Miten kilpailukykyinen yritys on nykyisell?? strategialla?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Olemme menett??neet kilpailukykymme, koska meill?? ei ole toimivaa strategiaa" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme menett??m??ss?? markkinoitamme, koska kilpailukykymme ei en????n tyydyt?? asiakkaitamme" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyisell?? srategiallamme tulemme todenn??k??isesti menett??m????n kilpailukyky??mme markkinoilla" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyisell?? srategialla olemme kilpailukykyisi?? markkinoilla, mutta kilpailukyvyn pysyvyydess?? on riskej??" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Uusi strategiamme tulee vahvistamaan kilpailukyky??mme tulevaisuudessa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyisell?? strategialla vahvistamme asiakkuuksiamme, koska meid??t n??hd????n kilpailukykyisin??" }
                            }}
                        ]
                    },
                    "tunnistetutKilpailuedut": {
                        "kuvaus": { type: String, default: "Millaisia strategisia kilpailuetuja yritys on tunnistanut?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Emme osaa mainita yht????n strategista kilpailuetua, koska emme tunne liiketoimintaluettamme" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme miettineet, miten voisimme luoda kilpailuetua, koska asiakkaat eiv??t vakuutu toiminnastamme" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meill?? on todenn??k??isesti jotain kilpailuetuja, mutta emme osaa kuvata niit??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meill?? on yksi kilpailuetu markkinoillamme, jonka asiakkaammekin ovat tunnistaneet" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meill?? on kaksi kilpailuetua markkinoillamme, jotka asiakkaamme ovat tunnistaneet" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meill?? on useita asiakkaiden tiedossa olevia kilpailuetuja ja kehit??mme jatkuvasti niit?? lis????" }
                            }}
                        ]
                    },
                    "asikkaanTiedostaminen": {
                        "kuvaus": { type: String, default: "Kuinka hyvin asiakas on tiedostanut yrityksen kilpailuedut?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Asiakas ei tied?? yrityksemme kilpailuetuja, koska emme ole niit?? tunnistaneet itsekk????n" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakkailla ei ole kokemusta yrityksemme toiminnasta voidakseen tunnistaa kilpailuetuja" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Uskomme, ett?? asiakkailla on jokin k??sitys yrityksemme tarjoamista kilpailueduista" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Muutamat asiakkaat ovat ostaneet meilt?? toistuvasti, joten oletamme omaavamme kilpailuetua" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme markkinoineet johdonmukaisesti kilpailuetuamme ja asiakkaat ovat siit?? tietoisia" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakkaamme ovat kertoneet tilauksensa perustuneen tiedostettuihin kilpailuetuihin" }
                            }}
                        ]
                    }
                },
                "kilpailumahdollisuus": {
                    "markkinaasema": {
                        "kuvaus": { type: String, default: "Millainen on yrityksen markkina-asema?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Yrityksemme markkina-asema on heikko ja tulevaisuus n??ytt???? synk??lt??" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme markkina-asema on toistaiseksi heikko, mutta uskomme tulevaisuuteen" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme markkina-asema on viel?? heikko, mutta neuvotteluissa on lupaavia asiakkuuksia" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksell??mme on v??ltt??v?? markkina-asema, mutta emme ole siihen tyytyv??isi??" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksell??mme on hyv?? markkina-asema ja haluamme kasvattaa sit?? entisest????n" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksell??mme on vahva ja kasvava markkina-asema kansainv??lisesti" }
                            }}
                        ]
                    },
                    "toimialanTilanne": {
                        "kuvaus": { type: String, default: "Miten toimialan tilanne vaikuttaa liiketoimintaan?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Toimiala on taantunut ja h??vi??m??ss?? pois markkinoilta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimiala on taantunut ja tarvitsee voimakkaita muutoksia" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimialalla on odotettavissa kilpailua kirist??vi?? muutoksia" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimialan tilanne on hyv?? ja jatkaa tasaista kasvua" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimiala on uudistumassa antaen uusia mahdollisuuksia" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimialan tilanne on erinomainen jatkaen voimakasta kasvua" }
                            }}
                        ]
                    },
                    "paikallisuudenMerkitys": {
                        "kuvaus": { type: String, default: "Mik?? merkitys paikallisuudella on yrityksen liiketoimintaan?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Paikallisuudesta on enemm??n haittaa kuin hy??ty?? liiketoiminnallemme" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme liiketoiminnalle paikallisuudella ei ole mit????n merkityst??" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Paikallisuus helpottaa jonkin verran yrityksen liiketoimintaa" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Paikallinen l??sn??olo ja tunnettuus helpottavat liiketoimintaamme huomattavasti" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme paikallisuus on merkitt??v?? asia" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme liiketoiminnalle paikallisuus on eritt??in t??rke????" }
                            }}
                        ]
                    },
                    "globaaliToiminta": {
                        "kuvaus": { type: String, default: "Miten yritys on mukana globaalissa liiketoiminnassa?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Emme ole kiinnostuneita globaalista liiketoiminnasta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Emme usko globaalien muutosten vaikuttavan yrityksemme liiketoimintaan" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Globaalit muutosvaatimukset tulevat asiakkailtamme ja yrit??mme sopeutua niihin" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Seuraamme jonkin verran globaaleja muutostrendej?? ja niiden vaikutusta liiketoimintaamme" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme itse l??sn?? globaaleilla markkinoilla vahvistaaksemme kilpailumahdollisuuksiamme" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme yhdess?? asiakkaiden kanssa globaaleilla markkinoilla ennakoidaksemme muutoksia" }
                            }}
                        ]
                    }
                }
            },
            "organisaatio": {
                "sanallinenKuvailu": {
                    "_kommentti": { type: String, default: "Yritysorganisaation sanallinen kuvailu" },
                    "yritysorganisaatio": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Kuvaa yrityksen organisaatio" }
                    },
                    "ohjaaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Kuinka organisaation ohjaaminen on j??rjestetty?" }
                    },
                    "perustehtavanSelkeys": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten selke?? on organisaation perusteht??v?? koko henkil??st??lle?" }
                    },
                    "tehtyTaiKokeiltu": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten paljon organisaatiossa on ???N??in on aina tehty??? tai ???Tuota on jo kokeiltu??? ???ajattelua?" }
                    },
                    "kulttuurinToimivuus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten toimiva on yrityksen kulttuuri?" }
                    },
                    "kehitysyritys": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Onko yrityksen kulttuuria yritetty kehitt?????" }
                    },
                    "ydinosaaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mit?? ydinosaamista organisaatiossa on?" }
                    },
                    "menestysydinosaaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitk?? ovat menestyksen kannalta organisaationne ydinosaamiset?" }
                    },
                    "ydinosaamisenRiittavyys": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "P??rj????ttek?? tulevaisuudessa nykyisill?? ydinosaamisella?" }
                    },
                    "ydinosaamisenHyodyntaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Onko yrityksen ydinosaamista hy??dynnetty liiketoiminnan kehitt??misess?? tai liiketoiminnan kasvattamisessa?" }
                    },
                    "ydinosaamisperusta": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Pystyyk?? ydinosaamisen pohjalle rakentaa uutta liiketoimintaa?" }
                    },
                    "ydinosaamisenPuutteet": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mit?? puutteita ydinosaamisessa on?" }
                    },
                    "osaamisenKartoitus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten ja milloin olette kartoittaneet organisaationne osaamista?" }
                    },
                    "organisaationKehittaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten organisaatiota on kehitetty ja milloin?" }
                    },
                    "piilokustannukset": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mit?? piilokustannuksia organisaatiossanne on?" }
                    },
                    "kustannusrakenteidenTunnistus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Kuinka usein kyseenalaistatte kustannusrakenteet?" }
                    },
                    "johtajanOminaisuudet": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitk?? ovat hyv??n johtajan t??rkeimm??t ominaisuudet?" }
                    },
                    "johtamisenMonipuolisuus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten monipuolisia keinoja k??yt??tte johtamisessa?" }
                    },
                    "johtajanTehtavat": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitk?? ovat johtajan t??rkeimm??t teht??v??t?" }
                    }
                },
                "strateginenPaaoma": {
                    "nykyisetMarkkinat": {
                        "kuvaus": { type: String, default: "Nykyiset markkinat" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 4 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 2 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "potentiaalisetMarkkinat": {
                        "kuvaus": { type: String, default: "Potentiaaliset markkinat" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 5 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 1 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    }
                },
                "liiketoimintaalueet": {
                    "nykyisetToimialat": {
                        "kuvaus": { type: String, default: "Nykyiset toimialat" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "potentiaalisetToimialat": {
                        "kuvaus": { type: String, default: "Potentiaaliset toimialat" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    }
                },
                "liiketoimintaymparisto": {
                    "nykyisetLiiketoimintaymparistot": {
                        "kuvaus": { type: String, default: "Nykyiset liiketoimintaymp??rist??t" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 1 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "potentiaalisetLiiketoimintaymparistot": {
                        "kuvaus": { type: String, default: "Potentiaaliset liiketoimintaymp??rist??t" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 1 },
                            "tulevaTaso": { type: Number, default: 2 },
                            "vaikuttavuus": { type: Number, default: 3 },
                            "muutos": { type: Number, default: 4 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    }
                },
                "sidosryhmasuhteet": {
                    "omistajaRahoittajasuhteet": {
                        "kuvaus": { type: String, default: "Omistaja- ja rahoittajasuhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "mediasuhteet": {
                        "kuvaus": { type: String, default: "Mediasuhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "oppilaitossuhteet": {
                        "kuvaus": { type: String, default: "Suhteet oppilaitoksiin" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "poliittisetSuhteet": {
                        "kuvaus": { type: String, default: "Suhteet poliittisiin p????tt??jiin" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "muutSuhteet": {
                        "kuvaus": { type: String, default: "Muut sidosryhm??suhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    }
                },
                "liiketoimintasuhteet": {
                    "asiakassuhteet": {
                        "kuvaus": { type: String, default: "Asiakassuhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "kumppanuussuhteet": {
                        "kuvaus": { type: String, default: "Kumppanuussuhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "toimittajasuhteet": {
                        "kuvaus": { type: String, default: "Toimittajasuhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "kilpailijasuhteet": {
                        "kuvaus": { type: String, default: "Kilpailijasuhteet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    }
                },
                "organisaatiopaaoma": {
                    "toimintaaOhjaavat": {
                        "kuvaus": { type: String, default: "Toimintaa ohjaavat tekij??t" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "ydinkyvykkyydet": {
                        "kuvaus": { type: String, default: "Ydinkyvykkyydet" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "valineetOikeudetSopimukset": {
                        "kuvaus": { type: String, default: "V??lineet, oikeudet ja sopimukset" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "palveluidenTuotteidenAsiakasarvo": {
                        "kuvaus": { type: String, default: "Palveluiden ja tuotteiden asiakasarvo" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "yksilollinenPaaoma": {
                        "kuvaus": { type: String, default: "Yksil??llinen p????oma" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "omistusOmaisuus": {
                        "kuvaus": { type: String, default: "Omistus ja omaisuus" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "vakavaraisuus": {
                        "kuvaus": { type: String, default: "Vakavaraisuus" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "kannattavuus": {
                        "kuvaus": { type: String, default: "Kannattavuus" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    },
                    "maksuvalmius": {
                        "kuvaus": { type: String, default: "maksuvalmius" },
                        "kommentti": { type: String, default: "Lis??tarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvov??li 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen m????rittely" }
                    }
                }
            },
            "trendianalyysi": {
                "hallituspolitiikka": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "verotuspolitiikka": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "ulkomaankauppasaately": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "hyvinvointipolitiikka": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "suhdannevaiheet": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "korkotasot": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "rahantarjonta": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "inflaatio": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "tyottomyys": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "kaytettavissaOlevaTulo": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "vaestorakenne": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "tulojakauma": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "sosiaalinenLiikkuvuus": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "elamantyylimuutokset": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "tyoVapaaaikaAsennoituminen": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "kulutustottumukset": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "koulutustaso": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "hallitusTeollisuusTutkimus": {
                    "kuvaus": { type: String, default: "Hallituksen ja teollisuuden suhtautuminen teknologisiin tutkimuksiin" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "kehityksenTulokset": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "teknologianKayttoonotto": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "teknologioidenVanhentumisaika": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "uusiutuvaEnergia": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "jatteidenKasittely": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "energiankulutus": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "ymparistonSuojeluSaasteet": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "monopolilainsaadanto": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "tyovoimalainsaadanto": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "terveysTurvallisuus": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                },
                "ymparistolainsaadanto": {
                    "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                    "todennakoisyys": { type: Number, default: 100 },
                    "vaikuttavuus": { type: Number, default: 100 },
                }
            },
            "markkinaalue": {
                "_kommentti": { type: String, default: "Yrityksen palvelutarjooma tai sis??inen organisaatiorakenne" },
                "alueet": [
                    {
                        "kuvaus": { type: String, default: "Liiketoiminnan alue / markkina-alue" },
                        "alueenNimi": { type: String, default: "Alue1" },
                        "kassavirta": {
                            "kuvaus": { type: String, default: "Kassavirta per liiketoiminta-alue" },
                            "euro": { type: Number, default: 100.0 }
                        },
                        "kasvuKehityspotentiaali": {
                            "kuvaus": { type: String, default: "Kasvu-/kehityspotentiaali (1-100)?" },
                            "potentiaali": { type: Number, default: 100 },
                        },
                        "liikevaihto": {
                            "kuvaus": { type: String, default: "Liikevaihto per liiketoiminta-alue:" },
                            "euro": { type: Number, default: 100.0 }
                        },
                        "kannattavuus": {
                            "kuvaus": { type: String, default: "Kannattavuus per liiketoiminta-alue:" },
                            "euro": { type: Number, default: 100.0 }
                        },
                        "markkinaosuus": {
                            "kuvaus": { type: String, default: "Markkinaosuus per liiketoiminta-alue:" },
                            "markkinaosuus": { type: Number, default: 5 },
                        },
                        "asiakasryhmat": {
                            "kuvaus": { type: String, default: "Asiakasryhm??t per liiketoiminta-alue:" },
                            "asiakasryhmat": { type: Number, default: 5 },
                        }
                    }
                ],
                "uudenMarkkinanLuonti": {
                    "kuvaus": { type: String, default: "Milloin olette yritt??neet luoda kokonaan uutta markkinaa / liiketoimintaa?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "muuttuvanToiminnanHyodyntaminen": {
                    "kuvaus": { type: String, default: "Miten hy??dynn??tte laskevia ja kasvavia liiketoiminnan aloja?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "trendienSeuranta": {
                    "kuvaus": { type: String, default: "Miten seuraatte trendej???" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "uudetArvot": {
                    "kuvaus": { type: String, default: "Miten varaudutte uuden sukupolven asiakkaiden arvomaailman muutokseen?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                }
            },
            "hankintaalueet": {
                "alueet": [
                    {
                        "hankintaalue": { type: String, default: "Alue1" },
                        "hankkija": { type: String, default: "Nimi" },
                        "kuvaus": { type: String, default: "Mit?? hankitaan" },
                        "hankinnanArvo": { type: Number, default: 100.0 },
                        "riskit": { type: String, default: "Kuvaile riskit" },
                        "kehittamismahdollisuudet": { type: String, default: "Sanallinen kuvailu" },
                        "kilpailutettu": { type: Boolean, default: true }
                    }
                ]
            },
            "kilpailuanalyysi": {
                "merkittavatKilpailijat": {
                    "kuvaus": { type: String, default: "Ketk?? ovat merkitt??vimm??t kilpailijat, miksi?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenToimintatapa": {
                    "kuvaus": { type: String, default: "Millainen toimintatapa heill?? on?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenErottuvuus": {
                    "kuvaus": { type: String, default: "Miten erottautuvat markkinoilla?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenMarkkinointiMyynti": {
                    "kuvaus": { type: String, default: "Miten tekev??t markkinointia ja myynti???" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenUudistuminen": {
                    "kuvaus": { type: String, default: "Miten kilpailijat ovat uudistuneet/uudistavat toimintaansa (konseptia)?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "markkinoidenMuutokset": {
                    "kuvaus": { type: String, default: "Mit?? muutoksia markkinoilla on meneill????n ja onko kilpailijat niiss?? mukana?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenKumppanit": {
                    "kuvaus": { type: String, default: "Millaisia partnereita kilpailijoilla on?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenSeuraaminen": {
                    "kuvaus": { type: String, default: "Miten seuraatte kilpailijoita?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                }
            },
            "swot": {
                "vahvuudet": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "heikkoudet": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "mahdollisuudet": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "uhkat": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "vahvuuksienHyodyntaminen": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "heikkouksienValttaminen": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "mahdollisuuksienToteuttaminen": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                },
                "uhkienPoistaminen": {
                    "kommentti": { type: String, default: "Sanallinen kuvailu" },
                    "merkittavyys": { type: Number, default: 100 },
                    "potentiaali": { type: Number, default: 100 },
                }
            },
            "liiketoimintamalli": {
                "uudistumistarveTuotannossaPalveluissa": {
                    "laaduntuottokyky": {
                        "kuvaus": { type: String, default: "Millainen on yrityksenne laaduntuottokyky?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuottamamme laatu on erinomainen, eik?? vaadi erityisi?? lis??toimia" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamamme laatu on hyv??, mutta se edellytt???? jatkuvaa yll??pitoa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamamme laatu on hyv??, mutta laatutason yll??pito vaatii paljon lis??ty??t??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamamme laatu vaihtelee ja joskus asiakas reklamoi siit??" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamassamme laadussa on puutteita, mist?? saamme s????nn??llisesti asiakasreklamaatioita" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamassamme laadussa on merkitt??vi?? puutteita, mink?? vuoksi olemme menett??neet asiakkait" }
                            }}
                        ]
                    },
                    "ydintoimintoihinKeskittyminen": {
                        "kuvaus": { type: String, default: "Keskittyyk?? yrityksenne oikeisiin ydintoimintoihin?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Yrityksemme ydintoiminta on fokusoitu tarkasti oikeisiin asioihin" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme on keskittynyt muutamaan ydintoimintaan, mutta niit?? voisi viel??kin fokusoida" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksell??mme on perinteisesti vakiintuneet ydintoiminnat, eik?? niit?? ole erikseen tarkasteltu" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme ei ole tehnyt tarkastelua ydintoiminnoista, vaan kaikkea tehd????n, mit?? asiakas haluaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksell??mme on liikaa erilaisia toimintoja, mitk?? haittaavat tehokasta liiketoimintaa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme toiminnot ovat ep??selvi?? ja valinta ydintoiminnoista tulisi tehd?? v??litt??m??st" }
                            }}
                        ]
                    },
                    "toimituskyky": {
                        "kuvaus": { type: String, default: "Millainen on tuotantonne tai palvelunne toimituskyky?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Toimituskykymme on eritt??in joustava nopeille tai suurille muutoksille" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Pystymme ennakoimaan muutoksia ja joustamaan toimituksissa riitt??v??n nopeasti" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimituskykymme vastaa isoihin muutoksiin viiveell?? tai pienill?? my??h??stymisill??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimituskykymme ei pysty vastaamaan merkitt??viin ja voimakkaisiin muutoksiin" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantorakenteemme on kankea, eik?? pysty vastaamaan pieniink????n muutoksiin" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Muutoksiin ei pystyt?? vastaamaan ja ne aiheuttavat aina merkitt??vi?? tappioita" }
                            }}
                        ]
                    },
                    "kustannustehokkuus": {
                        "kuvaus": { type: String, default: "Millainen on tuotantonne kustannustehokkuus?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotannon kustannustehokkuuden parantamiselle ei ole tarvetta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotannon kustannustehokkuus on hyv??, mutta sit?? voi aina parantaa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantomme kustannustehokkuudessa on paljon vaihtelua" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantomme kustannustehokkuus ei ole riitt??v??ll?? tasolla kilpailijoihin verrattuna" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantomme kustannustehokkuus on heikkenem??ss??, mik??li uudistuksia ei tehd??" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotatomme kustannustehokkuus on huono ja edellytt???? nopeaa uudistamista" }
                            }}
                        ]
                    }
                },
                "uudistumistarveMarkkinoilla": {
                    "asiakaskannanUudistaminen": {
                        "kuvaus": { type: String, default: "Tulisiko asiakaskantaanne uudistaa?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Asiakaskantamme on harkitusti fokusoitu, eik?? muutoksiin ole tarvetta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakaskantamme on p????osin fokusoitunut ja vakiintunut" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakaskannassamme tapahtuu jatkuvaa muutosta ja fokus vaihtelee" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakassegmentointimme on hieman ep??selv?? ja sit?? tulisi tarkastella uudelleen" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakaskantamme on muuttunut tai muuttumassa voimakkaasti ja siksi uudistamiselle on tarvetta" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakkuuksiemme fokus on ep??selv?? ja se tulisi suunnitella kokonaan uusiks" }
                            }}
                        ]
                    },
                    "ansaintamallinUudistaminen": {
                        "kuvaus": { type: String, default: "Vaativatko yrityksenne ansaintamallit uudistamista?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Ansaintamallimme on selke??, eik?? tarvitse uudistamista" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ansaintamallimme ovat kunnossa, mutta niiden hinnoittelua tulee tarkastella uudelleen" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ansaintamallimme ovat p????s????nt??isesti kunnossa, mutta uusia ansaintamahdollisuuksia haetaan" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyiset ansaintamallimme eiv??t anna riitt??v???? tulosta ja niit?? tulisi uudistaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ansaintamallimme on liian suppea ja tarvitsee ansaintapohjan laajentamista" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ansaintamallimme ovat voimakkaasti tappiollisia ja ne tulisi suunnitella kokonaan uudelleen" }
                            }}
                        ]
                    },
                    "asiakastulokset": {
                        "kuvaus": { type: String, default: "Tuottaako myynti ja markkinointi riitt??vi?? asiakastuloksia?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa hyvin kohdeasiakkaat ja tulokset ovat erinomaisia" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa kohdeasiakkaat tyydytt??vin asiakastuloksin" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynnin ja markkinoinnin panostukset eiv??t tuota odotettuja asiakastuloksia" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa harvoja kohdeasiakkaita v??ltt??vin tuloksin" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa liian v??h??n kohdeasiakkaita heikoin tuloksin" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi ei tavoita kohdeasiakkaita ja aiheuttaa tuottamattomia kustannuksia" }
                            }}
                        ]
                    },
                    "saatavuus": {
                        "kuvaus": { type: String, default: "Ovatko tuotteet tai palvelut asiakkaalle helposti saatavilla?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotteiden ja palvelujen ostaminen on asiakkaalle mahdollisimman helppoa ja vaivatonta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen on kohdeasiakkaille melko helppoa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostamista kohdeasiakkaille voisi helpottaa" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen kohdeasiakkaille tulisi olla nykyist?? helpompaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen kohdeasiakkaille on monimutkaista ja prosessi vaatii uudistamista" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen on kohdeasiakkaille nykyisell????n liian monimutkaista ja vaatii v??lit??nt?? uudistamista" }
                            }}
                        ]
                    }
                },
                "uudistumistarveTuotteissaPalveluissa": {
                    "ajanmukaisuus": {
                        "kuvaus": { type: String, default: "Ovatko tuotteenne tai palvelunne ajanmukaisia?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme vastaavat erinomaisesti asiaskastarpeisiin, eik?? uudistamiselle ole tarvetta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kohtuullisen ajanmukaisessa kunnossa, eik?? edellyt?? uudistamista l??hitulevaisuudessa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tulevat vaatimaan asteittaista uudistamista muutaman vuoden sis??ll??" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteillamme ja palveluillamme on osittainen uudistamistarve l??hitulevaisuudessa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme kokonaan uudistaminen tulisi k??ynnist???? l??hitulevaisuudessa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tulisi uudistaa kokonaisuudessaan v??litt??m??sti" }
                            }}
                        ]
                    },
                    "hinnoittelu": {
                        "kuvaus": { type: String, default: "Onko tuotteenne ja palvelunne hinnoittelu kilpailukykyinen?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on eritt??in hyv??" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on hyv??" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on kohtalainen" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on v??ltt??v??" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on huono" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on eritt??in huono" }
                            }}
                        ]
                    },
                    "hyotyjenYmmarrettavyys": {
                        "kuvaus": { type: String, default: "Ovatko tuotteenne tai palvelunne tarjoamat hy??dyt helposti ymm??rrett??vi???" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hy??dyt ovat selvi?? ja helposti todistettavissa" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hy??dyt ovat selvi?? ja kohtuullisesti todistettavissa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hy??dyt ovat selvi??, mutta vaikeasti todistettavissa" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hy??dyt ovat selvi??, mutta mahdottomia todistaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hy??dyt ovat hieman ep??selvi??" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hy??dyt ovat t??ysin ep??selvi??" }
                            }}
                        ]
                    },
                    "asiakaskiinnostavuus": {
                        "kuvaus": { type: String, default: "Ovatko tuotteenne tai palvelunne asiakkaalle kiinnostavia?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme kysynt?? on suurempi kuin mihin pystymme vastaamaan" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kiinnostavia ja kauppa k??y hyvin" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kiinnostavia, mutta h??vi??mme jonkin verran kauppoja kilpailijoille" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kiinnostavia, mutta kauppa k??y kuitenkin harvoin" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme kiinnostus on laimeaa ja kaupank??ynti hiljaista" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme asiakaskiinnostus on eritt??in huono" }
                            }}
                        ]
                    }
                },
                "markkinaAsiakasmalli": {
                    "asiakasryhmat": [
                        {
                            "asiakasryhma": { type: String, default: "Ryhm??n nimi" },
                            "asiakkaanTarve": { type: String, default: "Sanallinen selitys" },
                            "tarjonta": { type: String, default: "Sanallinen selitys" },
                            "myynti": { type: Number, default: 100.0 },
                            "kannattavuus": 0,
                            "paattajat": [],
                            "ostoprosessi": { type: String, default: "Sanallinen kuvaus" },
                            "vaikuttajat": []
                        }
                    ],
                    "nykyisetTuotteetPalvelut": [
                        "tuote",
                        "palvelu"
                    ],
                    "oheistuotteetPalvelut": [
                        "oheistuote",
                        "oheispalvelu"
                    ],
                    "arvolupaus": {
                        "kuvaus": { type: String, default: "Mik?? on lupauksemme tuotteesta/palvelusta ???arvolupaus???, KUVAUS ASIAKKAALLE LUPAAMASTA ARVOSTA, miten ilmenee omassa toiminnassa:" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinnat": [
                            {
                                "1": {
                                    "tila": { type: Boolean, default: true },
                                    "kuvaus": { type: String, default: "Ajasta riippumaton" }
                                }
                            },
                            {
                                "2": {
                                    "tila": { type: Boolean, default: false },
                                    "kuvaus": { type: String, default: "Arvon kasvattaminen" }
                                }
                            },
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakastyytyv??isyyden parantaminen" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Etuoikeus tai yksinoikeus" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Helppok??ytt??inen" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Joustavuuden lis????minen" }
                            }},
                            {
                                "7" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Kannattavuuden parantaminen" }
                            }},
                            {
                                "8" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Kasvun mahdollistaminen" }
                            }},
                            {
                                "9" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Kulujen pienent??minen" }
                            }},
                            {
                                "10" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Laadun parantaminen" }
                            }},
                            {
                                "11" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Luotettavuuden parantaminen" }
                            }},
                            {
                                "12" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Maksukyvyn parantaminen" }
                            }},
                            {
                                "13" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Mitattavuuden parantaminen" }
                            }},
                            {
                                "14" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nopeuttaminen" }
                            }},
                            {
                                "15" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Omaisuuden turvaaminen" }
                            }},
                            {
                                "16" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Onnistumismahdollisuuden parantaminen" }
                            }},
                            {
                                "17" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Osaamisen kasvattaminen" }
                            }},
                            {
                                "18" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Paikasta riippumaton" }
                            }},
                            {
                                "19" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Palvelun parantuminen" }
                            }},
                            {
                                "20" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Riskin pienent??minen" }
                            }},
                            {
                                "21" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tehokkuuden parantaminen" }
                            }},
                            {
                                "22" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tulojen lis????minen" }
                            }},
                            {
                                "23" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tunnettuuden lis????minen" }
                            }},
                            {
                                "24" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Turvallisuuden parantuminen" }
                            }},
                            {
                                "25" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Valinnan vapaus" }
                            }},
                            {
                                "26" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Varastojen pienent??minen" }
                            }},
                            {
                                "27" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Viihtyvyyden lis????minen" }
                            }},
                            {
                                "28" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Virheiden v??hent??minen" }
                            }},
                            {
                                "29" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ymp??rist??n suojelu" }
                            }}
                        ]
                    },
                    "tarkoituksenmukaisuus": {
                        "kuvaus": { type: String, default: "Miten asiakassegmenteille tarjottujen tuotteiden/palveluiden tarkoituksen mukaisuus varmistetaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakassuhteet": {
                        "kuvaus": { type: String, default: "Kuinka asiakassuhteita yll??pidet????n, kuvaus asiakas-/myyntisuhteesta, kuka, miten, tavoitteet" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakkaanOdotuksetMotiivit": {
                        "kuvaus": { type: String, default: "Miten hyvin asiakkaan odotukset tunnetaan ja mitk?? ovat ostomotiivit?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakaskokemus": {
                        "kuvaus": { type: String, default: "Miten varmistetaan hyv?? asiakaskokemus eri kohtaamisissa/tilanteissa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakastoimitus": {
                        "kuvaus": { type: String, default: "Milloin toimitus on valmis, kuka sen toteaa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tulovirrat": {
                        "kuvaus": { type: String, default: "Kuinka ja mist?? tulovirrat syntyv??t, mist?? asiakasryhm??st?? ja mink?? verran?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kilpailijatilaukset": {
                        "kuvaus": { type: String, default: "Mit?? asiakkaat tilaavat muilta kilpailijoilta, miksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "myyntikanava": {
                        "kuvaus": { type: String, default: "Millainen on yrityksen myyntikanava?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "myyntikanavamuutokset": {
                        "kuvaus": { type: String, default: "Millaisia muutoksia myyntikanavissa on tapahtunut tai tapahtumassa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "konseptointi": {
                        "kuvaus": { type: String, default: "Onko tuotteenne/palvelut konseptoitu, miten?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "ostopaatos": {
                        "kuvaus": { type: String, default: "Onko asiakkaan helppo tehd?? ostop????t??s ja tiet????k?? h??n mit?? tilaa, mist?? tied??tte?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakkaanNakemys": {
                        "kuvaus": { type: String, default: "Miten asiakas n??kee teid??t (imago, br??ndi, laatu, luotettavuus, hintataso)?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakastyytyvaisyys": {
                        "kuvaus": { type: String, default: "Kuinka seuraatte asiakkaiden tyytyv??isyytt?? toimintaanne?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "sitouttaminen": {
                        "kuvaus": { type: String, default: "Kuinka sitoutatte asiakkaan pidempiaikaiseen yhteisty??suhteeseen?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "ansaintamallinSitouttavuus": {
                        "kuvaus": { type: String, default: "Miten hyvin ansaintamallinne sitouttaa asiakkaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "viimeisinKehitys": {
                        "kuvaus": { type: String, default: "Milloin olette viimeksi k??yneet asiakassegmentit l??pi / uudistaneet ansaintamallit / kehitt??neet uusia tuotteita/palveluja / kehitt??neet uusia toimintatapoja?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                }
            },
            "tuotantoPalvelumalli": {
                "ydinkyvykkyydet": {
                    "kuvaus": { type: String, default: "Mitk?? ovat yrityksenne Ydinkyvykkyydet, kuvaus kyvykkyydest??: { type: String, default: " },
                    "kommentti": { type: String, default: "Sanallinen tarkennus" },
                    "valinnat": [
                        {
                            "1": { 
                            "tila": { type: Boolean, default: true },
                            "kuvaus": { type: String, default: "Asiantuntemus" }
                        }},
                        {
                            "2": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Asiaosaaminen" }
                        }},
                        {
                            "3": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Brandaaminen" }
                        }},
                        {
                            "4": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Ennakkoluulottomuus" }
                        }},
                        {
                            "5": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Innovatiivisuus" }
                        }},
                        {
                            "6": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Johtamiskyky" }
                        }},
                        {
                            "7" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kokemus" }
                        }},
                        {
                            "8" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kokonaisuuksien hahmottaminen" }
                        }},
                        {
                            "9" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kommunikointikyky" }
                        }},
                        {
                            "10" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Luovuus" }
                        }},
                        {
                            "11" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Maineenhallintakyky" }
                        }},
                        {
                            "12" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Mallintamiskyky" }
                        }},
                        {
                            "13" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Markkinatuntemus" }
                        }},
                        {
                            "14" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Menetelm??osaaminen" }
                        }},
                        {
                            "15" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Motivointikyky" }
                        }},
                        {
                            "16" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Oppimiskyky" }
                        }},
                        {
                            "17" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Paineensietokyky" }
                        }},
                        {
                            "18" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Patentointi ja suojaus" }
                        }},
                        {
                            "19" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Resursointikyky" }
                        }},
                        {
                            "20" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Sosiaalinen kyvykkyys" }
                        }},
                        {
                            "21" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Soveltamiskyky" }
                        }},
                        {
                            "22" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Teknologinen osaaminen" }
                        }},
                        {
                            "23" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Tieto-osaaminen" }
                        }},
                        {
                            "24" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Toimialatuntemus" }
                        }},
                        {
                            "25" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Toimialaymp??rist??n kehitt??miskyky" }
                        }},
                        {
                            "26" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Verkosto-osaaminen" }
                        }},
                        {
                            "27" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "" }
                        }},
                        {
                            "28" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "" }
                        }},
                        {
                            "29" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "" }
                        }}
                    ]
                },
                "omaYdintoiminta": {
                    "kuvaus": { type: String, default: "Oma ydintoiminta" },
                    "kommentti": { type: String, default: "Sanallinen tarkennus" },
                    "valinnat": [
                        {
                            "1": { 
                            "tila": { type: Boolean, default: true },
                            "kuvaus": { type: String, default: "El??mystuotanto ja kulttuuri" }
                        }},
                        {
                            "2": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Hallinnointi" }
                        }},
                        {
                            "3": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Hoito ja hoiva" }
                        }},
                        {
                            "4": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Huolto ja korjaus" }
                        }},
                        {
                            "5": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Jalostus ja kasvatus" }
                        }},
                        {
                            "6": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kasvatus ja opetus" }
                        }},
                        {
                            "7" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Konseptointi" }
                        }},
                        {
                            "8" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Konsultointi" }
                        }},
                        {
                            "9" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Koulutus" }
                        }},
                        {
                            "10" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kuljetus ja logistiikka" }
                        }},
                        {
                            "11" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Muotoilu ja luominen" }
                        }},
                        {
                            "12" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Myynti ja markkinointi" }
                        }},
                        {
                            "13" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Neuvonta, informointi" }
                        }},
                        {
                            "14" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Omistaminen ja sijoittaminen" }
                        }},
                        {
                            "15" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Palvelutuotanto" }
                        }},
                        {
                            "16" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Projektijohtaminen" }
                        }},
                        {
                            "17" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Rahoitus" }
                        }},
                        {
                            "18" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Rakentaminen" }
                        }},
                        {
                            "19" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Ravitsemus ja tarjoilu" }
                        }},
                        {
                            "20" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Suojelu ja vartiointi" }
                        }},
                        {
                            "21" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Suunnittelu" }
                        }},
                        {
                            "22" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Tarkastus ja auditointi" }
                        }},
                        {
                            "23" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "aus ja mittaus" }
                        }},
                        {
                            "24" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Tuotantoprosessi" }
                        }},
                        {
                            "25" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Tuotekehitys" }
                        }},
                        {
                            "26" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Tutkimus" }
                        }},
                        {
                            "27" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Vakuuttaminen" }
                        }},
                        {
                            "28" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "V??litys ja kaupanvahvistus" }
                        }},
                        {
                            "29" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Valmistus" }
                        }},
                        {
                            "30" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Valvonta ja seuranta" }
                        }},
                        {
                            "31" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Varastointi" }
                        }},
                        {
                            "32" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Viestint??" }
                        }},
                        {
                            "33" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Vuokraaminen" }
                        }},
                        {
                            "34" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Yll??pito ja tarkkailu" }
                        }}
                    ]
                },
                "toimittajaryhmat": {
                    "kuvaus": { type: String, default: "Toimittajaryhm??t (ydintoimittajien ylivertaisuudet)" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "yhteisty??kumppanit": {
                    "kuvaus": { type: String, default: "Yhteisty??kumppanit" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "verkostotAllianssit": {
                    "kuvaus": { type: String, default: "Verkostot / Allianssit" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kustannustekijat": {
                    "kuvaus": { type: String, default: "Kustannustekij??t" },
                    "kommentti": { type: String, default: "Sanallinen tarkennus" },
                    "valinnat": [
                        {
                            "1": { 
                            "tila": { type: Boolean, default: true },
                            "kuvaus": { type: String, default: "Energiakustannus" }
                        }},
                        {
                            "2": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Hallinnointi ja dokumentointi" }
                        }},
                        {
                            "3": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "H??vityskustannus" }
                        }},
                        {
                            "4": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Henkil??st??investointi" }
                        }},
                        {
                            "5": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Huoltokustannus" }
                        }},
                        {
                            "6": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Jakelukustannus" }
                        }},
                        {
                            "7" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "J??lkimarkkinakustannus" }
                        }},
                        {
                            "8" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "J??rjestelm??kustannus" }
                        }},
                        {
                            "9" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kierr??tyskustannus" }
                        }},
                        {
                            "10" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kiinteist??- ja laiteinvestointi" }
                        }},
                        {
                            "11" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Korkokustannus" }
                        }},
                        {
                            "12" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kuljetuskustannus" }
                        }},
                        {
                            "13" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Laskutuskustannus" }
                        }},
                        {
                            "14" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Mainos- ja ilmoituskustannus" }
                        }},
                        {
                            "15" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Materiaalikustannus" }
                        }},
                        {
                            "16" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Matkakustannus" }
                        }},
                        {
                            "17" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Myynti- ja markkinointikustannus" }
                        }},
                        {
                            "18" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Osaamisinvestointi" }
                        }},
                        {
                            "19" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "P????omakustannus" }
                        }},
                        {
                            "20" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Palkkakustannus" }
                        }},
                        {
                            "21" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Palkkiokustannus" }
                        }},
                        {
                            "22" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Palvelukustannus" }
                        }},
                        {
                            "23" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Rojalti, komissio tai v??lityskustannus" }
                        }},
                        {
                            "24" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Siivous- ja j??rjestyskustannus" }
                        }},
                        {
                            "25" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "auskustannus" }
                        }},
                        {
                            "26" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Tuotekehitysinvestointi" }
                        }},
                        {
                            "27" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Ulkoinen ostopalvelumaksu" }
                        }},
                        {
                            "28" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Valmistuskustannus" }
                        }},
                        {
                            "29" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Varastokustannus" }
                        }},
                        {
                            "30" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Vartiointi- ja turvallisuuskustannus" }
                        }},
                        {
                            "31" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Vero" }
                        }},
                        {
                            "32" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Virhekustannus" }
                        }},
                        {
                            "33" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Vuokra- tai leasingkustannus" }
                        }},
                        {
                            "34" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Y??pymiskustannus" }
                        }}
                    ]
                },
                "liiketoimintamalli": {
                    "kuvaus": { type: String, default: "Liiketoimintamallin kuvailu" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                }
            },
            "liiketoimintaprosessit": {
                "strategia": {
                    "kuvaus": { type: String, default: "Strategiaprosessi" },
                    "nykytilanne": { type: String, default: "Strategiaprosessin keskeiset vaiheet" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "johtaminen": {
                    "kuvaus": { type: String, default: "Johtamisprosessi kuvaa yrityksen johtamisj??rjestelm????" },
                    "nykytilanne": { type: String, default: "T??m??nhetkinen johtamisprosessi ja johtaminen yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "taloushallinto": {
                    "kuvaus": { type: String, default: "Taloushallinto" },
                    "nykytilanne": { type: String, default: "T??m??nhetkinen taloushallintoprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "henkilostohallinto": {
                    "kuvaus": { type: String, default: "Henkil??st??hallinto" },
                    "nykytilanne": { type: String, default: "T??m??nhetkinen henkil??st??hallintoprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "riskienhallinta": {
                    "kuvaus": { type: String, default: "Riskienhallinta ja vakuuttaminen" },
                    "nykytilanne": { type: String, default: "Riskienhallinta ja vakuuttaminen prosessin keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "projektinhallinta": {
                    "kuvaus": { type: String, default: "Projektinhallinta" },
                    "nykytilanne": { type: String, default: "Projektit ja niiden toteutus" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "sopimushallinta": {
                    "kuvaus": { type: String, default: "Sopimushallintaprosessi" },
                    "nykytilanne": { type: String, default: "Sopimushallintaprosessin keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tietamyksenhallinta": {
                    "kuvaus": { type: String, default: "Tiet??myksenhallinta" },
                    "nykytilanne": { type: String, default: "Tiet??myksenhallintaprosessin keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "vienti": {
                    "kuvaus": { type: String, default: "Vientiprosessi" },
                    "nykytilanne": { type: String, default: "Millaista kansainv??list?? kauppaa yritys k??y ja miten vienti on yrityksess??nne toteutettu" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "asiakaspalvelu": {
                    "kuvaus": { type: String, default: "Asiakaspalveluprosessi" },
                    "nykytilanne": { type: String, default: "Asiakaspalvelun toteutus yrityksess?? ja miten se n??ytt??ytyy asiakkaan silmiss??" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "markkinointi": {
                    "kuvaus": { type: String, default: "Markkinointiprosessi" },
                    "nykytilanne": { type: String, default: "Markkinoinnin toteutus yrityksess?? ja miten se n??kyy ulosp??in" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "myynti": {
                    "kuvaus": { type: String, default: "Myyntiprosessi" },
                    "nykytilanne": { type: String, default: "Myynnin toteutus yrityksess??" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "viestinta": {
                    "kuvaus": { type: String, default: "Viestint??" },
                    "nykytilanne": { type: String, default: "Viestinn??n toteutus yrityksess??" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "kilpailijatiedonhallinta": {
                    "kuvaus": { type: String, default: "Kilpailijatiedonhallinta" },
                    "nykytilanne": { type: String, default: "Kilpailijatiedonhallinnan toteutus yrityksess??" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "hankinta": {
                    "kuvaus": { type: String, default: "Hankintaprosessi" },
                    "nykytilanne": { type: String, default: "T??m??nhetkinen hankintaprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "logistiikka": {
                    "kuvaus": { type: String, default: "Logistiikka" },
                    "nykytilanne": { type: String, default: "T??m??nhetkinen logistiikkaprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tuotanto": {
                    "kuvaus": { type: String, default: "Tuotanto" },
                    "nykytilanne": { type: String, default: "Tuotantoprosessin toteutus yrityksess??" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "yllapitoHuolto": {
                    "kuvaus": { type: String, default: "Yll??pito ja huolto" },
                    "nykytilanne": { type: String, default: "Yrityksen vastuulla olevat yll??pidett??v??t ja huollettavat kohteet ja niiden hoitaminen" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "laadunhallinta": {
                    "kuvaus": { type: String, default: "Laatuprosessi" },
                    "nykytilanne": { type: String, default: "T??m??nhetkinen laadunhallintaprosessi ja sen keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tutkimus": {
                    "kuvaus": { type: String, default: "Tutkimusprosessi" },
                    "nykytilanne": { type: String, default: "Tutkimusprosessin keskeiset vaiheet ja organisointi" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "teknologianaus": {
                    "kuvaus": { type: String, default: "Teknologian aus" },
                    "nykytilanne": { type: String, default: "Miten teknologian aus yrityksess?? on j??rjestetty?" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tuotesuunnittelu": {
                    "kuvaus": { type: String, default: "Tuotesuunnittelu" },
                    "nykytilanne": { type: String, default: "Tuotesuunnittelun keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tuoteaus": {
                    "kuvaus": { type: String, default: "Tuoteaus" },
                    "nykytilanne": { type: String, default: "Tuoteauksen keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "muotoilu": {
                    "kuvaus": { type: String, default: "Muotoilu" },
                    "nykytilanne": { type: String, default: "Muotoilun rooli ja hy??dynt??minen liiketoiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "prototyyppivalmistus": {
                    "kuvaus": { type: String, default: "Prototyyppien valmistus" },
                    "nykytilanne": { type: String, default: "Miten yrityksen tuotteista tai palveluista tehd????n prototyyppimalleja" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tilaLaitehankinta": {
                    "kuvaus": { type: String, default: "Tila- ja laitehankinta" },
                    "nykytilanne": { type: String, default: "Tila- ja laitehankintaprosessin toteutus" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "yhteistyokumppanienHankinta": {
                    "kuvaus": { type: String, default: "Yhteisty??kumppanien hankinta" },
                    "nykytilanne": { type: String, default: "Yhteisty??kumppanien valikoituminen" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "teknologianHankinta": {
                    "kuvaus": { type: String, default: "Teknologian hankinta" },
                    "nykytilanne": { type: String, default: "Yritykseen hankittu teknologia" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                }
            },
            "yritystoiminnanKehittaminen": {
                "kilpailustrategianToimivuus": {
                    "asiakassegmentointi": {
                        "kuvaus": { type: String, default: "Miten segmentoidaan asiakkaanne jotta voidaan pit???? nykyiset asiakkaat ja saada uusia liiketoiminta-alueita?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "vaatimusvastaavuus": {
                        "kuvaus": { type: String, default: "Vastaako tuotteenne/tarjoamanne tavoittelemienne asiakkaiden vaatimuksia? Mist?? on tullut hyv???? palautetta ja miss?? on kehitett??v?????" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "suurinPotentiaali": {
                        "kuvaus": { type: String, default: "Miss?? asiakas/tuote -segmenteill?? on eniten potentiaalia nykyisten lis??ksi? Millaisella konseptilla?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tavoiteasemaProfiili": {
                        "kuvaus": { type: String, default: "Millaiseksi halutaan yrityksenne aseman ja profiilin markkinoilla tavoiteltujen asiakkaiden silmin?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "strategiakehitys": {
                        "kuvaus": { type: String, default: "Miten on tarve kehitt???? toimintostrategioitanne ja niiden resursoinnin toimivuutta? (Myynti, Tuotekehitys, Toimitukset, Johtaminen)?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tarvittavaUusiOsaaminen": {
                        "kuvaus": { type: String, default: "Mit?? uutta osaamista tarvitaan, miksi?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "toiminnanRajaus": {
                        "kuvaus": { type: String, default: "Onko toiminnan rajaus ja fokus ollut riitt??v?? suhteessa k??ytettyihin resursseihin? Onko ilmennyt kehitt??mistarpeita?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kumppanuusratkaisut": {
                        "kuvaus": { type: String, default: "Millaisia yhteisty??-/kumppanuusratkaisuja tulee tehd???" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "liikevaihtoKannattavuuskehitys": {
                        "kuvaus": { type: String, default: "Millaiseksi yrityksen liikevaihto ja kannattavuus halutaan kehitt?????" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "uusiutumisenTurvaaminen": {
                        "kuvaus": { type: String, default: "Miten yrityksen uusiutuminen turvataan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtop????t??kset edellisist??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "toimialanMarkkinakehittyminen": {
                    "kysynnanKehittyminen": {
                        "kuvaus": { type: String, default: "Miten toimialan tuotteiden ja palvelujen kysynt?? kehittyy? Miss?? tullaan olemaan mukana?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tuotePalveluKysyntapainotus": {
                        "kuvaus": { type: String, default: "Mihin tuotteisiin/palveluihin kysynt?? painottuu?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakasryhmaKysyntapainotus": {
                        "kuvaus": { type: String, default: "Mihin asiakasryhmiin kysynt?? painottuu?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinoidenTavoittaminen": {
                        "kuvaus": { type: String, default: "Miten tavoitetaan asiakkaat/markkinat?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtop????t??kset edellisist??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "asiakaskysynnanKehittyminen": {
                    "asiakasryhmaOstokriteerit": {
                        "kuvaus": { type: String, default: "Mitk?? ovat t??ll?? nyt/tulevaisuudessa t??rkeimm??t ostokriteerit tavoittelemissanne asiakasryhmiss???" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "ostokriteereihinVastaaminen": {
                        "kuvaus": { type: String, default: "Kuinka hyvin yrityksenne pystyy vastaamaan tulevaisuudessa asiakkaidenne ostokriteereihin? Millaisia poikkeamia olette havainneet?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakassegmenttiNoste": {
                        "kuvaus": { type: String, default: "Miss?? asiakassegmenteiss?? yrityksell??nne on parhaat mahdollisuudet saada positiivinen noste myynnille?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "liiketoiminnanKasvattaminen": {
                        "kuvaus": { type: String, default: "Kuinka kasvatetaan liiketoimintaa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtop????t??kset edellisist??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "kilpailijaseurannanKehittyminen": {
                    "asiakassegmentinKilpailijat": {
                        "kuvaus": { type: String, default: "Ketk?? ovat merkitt??vimm??t kilpailijat t??ll?? hetkell?? valitsemissanne asiakassegmenteiss???" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kilpailijoidenVahvuudet": {
                        "kuvaus": { type: String, default: "Mitk?? ovat kilpailijoiden keskeiset vahvuudet ja onnistumistekij??t?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kilpailijoidenHeikkoudet": {
                        "kuvaus": { type: String, default: "Mitk?? ovat kilpailijoiden keskeiset heikkoudet ja ongelmat?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinarako": {
                        "kuvaus": { type: String, default: "Mihin kilpailijat ovat j??tt??neet markkinarakoa yrityksellenne?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinoillePaasy": {
                        "kuvaus": { type: String, default: "Mit?? tulisi tehd?? jotta markkinoille p????st????n?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtop????t??kset edellisist??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                }
            },
            "strategianLuominen": {
                "yrityksenTahtotila": {
                    "visio": {
                        "kuvaus": { type: String, default: "Visio/P????m????r?? vuonna " },
                        "vuosi": { type: Number, default: 2022 },
                    },
                    "visioMarkkinaasema": {
                        "kuvaus": { type: String, default: "Millainen on yrityksenne asema on markkinoilla tuolloin ja mihin vahvuuteenne se perustuu?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioKasvuKannattavuusRiskit": {
                        "kuvaus": { type: String, default: "Haetaanko kasvua vai kannattavuutta ja millaisia riskej?? omistajat ovat valmiita ottamaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioHinnoitteluLiikevaihtoVoitto": {
                        "kuvaus": { type: String, default: "Millainen Hinnoittelutaso, Liikevaihtotaso ja Voittotaso seuraavan kolmen (3) vuoden aikana?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioOrganisaatioHenkilostoKumppanit": {
                        "kuvaus": { type: String, default: "Miten yrityksenne on organisoitu, henkil??st??n lukum????r?? ja teht??v??t sek?? kumppaniverkoston rakenne?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioKilpailuetuIdea": {
                        "kuvaus": { type: String, default: "Mik?? on arvoa asiakkaille luova strateginen idea, joka tuo kilpailuetua markkinoilla?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "visioToteutumisenErottuvuus": {
                    "kuvaus": { type: String, default: "Jos visiomme toteutuu, miten olemme erilaisia" },
                    "saavuttamisenKriittisetTekijat": {
                        "kuvaus": { type: String, default: "Mitk?? ovat vision saavuttamisen kriittiset menestystekij??t?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehitt??mis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkil??st??n mielest??" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "menestystekijoidenToteuttaminen": {
                        "kuvaus": { type: String, default: "Mit?? toimenpiteit?? aiomme tehd?? jotta menestystekij??t toteutuvat?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehitt??mis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkil??st??n mielest??" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "mittaritToivearvot": {
                        "kuvaus": { type: String, default: "Mitk?? ovat niiden t??rkeimm??t mittarit ja toivearvot?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehitt??mis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkil??st??n mielest??" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "toimintasuunnitelmanPainopisteet": {
                        "kuvaus": { type: String, default: "Mitk?? toimenpiteet otetaan keskeisiksi painopisteiksi toimintasuunnitelmaan?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehitt??mis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkil??st??n mielest??" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "mittari": {
                        "kuvaus": { type: String, default: "Mik?? toimii mittarina?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehitt??mis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkil??st??n mielest??" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "vastaaja": {
                        "kuvaus": { type: String, default: "Kuka vastaa?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehitt??mis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkil??st??n mielest??" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    }
                },
                "strategia": {
                    "kilpailustrategia": {
                        "kuvaus": { type: String, default: "Kilpailustrategia, jolla 20XX p????m????r??t saavutetaan?" },
                        "vuosi": { type: Number, default: 2022 },
                    },
                    "tuoteryhmaLiikevaihtoosuus": {
                        "kuvaus": { type: String, default: "Mitk?? ovat t??rkeimm??t tuoteryhm??nne ja niiden osuus liikevaihdosta?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuoteryhmaMuutos": {
                        "kuvaus": { type: String, default: "Millaisia muutoksia tuoteryhmiinne tarvitaan suhteessa nykytilaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakasryhmaLiikevaihtoosuus": {
                        "kuvaus": { type: String, default: "Ketk?? ovat t??rkeimm??t asiakasryhm??nne ja niiden osuus liikevaihdosta?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakasprofiilimuutos": {
                        "kuvaus": { type: String, default: "Millaisia muutoksia asiakasprofiiliinne tarvitaan ja miksi?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "hinnoitteluMuutos": {
                        "kuvaus": { type: String, default: "Millaisia muutoksia hinnoitteluunne tarvitaan ja miksi?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "toiminnanOrganisointi": {
                        "kuvaus": { type: String, default: "Miten toimintaanne tulee organisoida uudella tavalla, jotta tavoitellut strategiset tavoitteet ja muutokset toteutuvat?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "toimenpiteetLinjaukset": {
                        "kuvaus": { type: String, default: "Millaisia toimenpiteit?? ja linjauksia edell?? mainitut muutokset edellytt??v??t?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "missio": {
                    "kuvaus": { type: String, default: "Missio" },
                    "kommentti": { type: String, default: "Sanallinen kuvaus" }
                },
                "arvot": {
                    "strategisetTavoitteet": [
                        {
                            "sijoitus": { type: Number, default: 1 },
                            "tavoitteenNimi": { type: String, default: "Nimi" },
                            "kuvaus": { type: String, default: "Sanallinen kuvaus" },
                            "tavoite": { type: String, default: "Tavoitteen kuvaus" }
                        }
                    ],
                    "kriittisetMenestystekijat": [
                        {
                            "sijoitus": { type: Number, default: 1 },
                            "kriittisenMenestystekijanNimi": { type: String, default: "Nimi" },
                            "kuvaus": { type: String, default: "Sanallinen kuvaus" }
                        }
                    ]
                }
            },
            "strategianToimeenpano": {
                "kuvaus": { type: String, default: "Toimintasuunnitelman laatiminen vuodelle 20XX" },
                "keskeisetTavoitteetPaatoiminnottain": {
                    "kuvaus": { type: String, default: "Keskeiset tavoitteet p????toiminnottain" },
                    "myyntiMarkkinointi": {
                        "tavoitteet": [
                            "tavoite1"
                        ],
                        "toimenpiteet": [
                            "toimenpide1"
                        ],
                        "vastuuhenkilo": { type: String, default: "Etunimi Sukunimi" },
                        "aikatauluSeuranta": { type: String, default: "aikataulu" }
                    },
                    "tuotekehitys": {
                        "tavoitteet": [
                            "tavoite1"
                        ],
                        "toimenpiteet": [
                            "toimenpide1"
                        ],
                        "vastuuhenkilo": { type: String, default: "Etunimi Sukunimi" },
                        "aikatauluSeuranta": { type: String, default: "aikataulu" }
                    },
                    "tuotantoToimitukset": {
                        "tavoitteet": [
                            "tavoite1"
                        ],
                        "toimenpiteet": [
                            "toimenpide1"
                        ],
                        "vastuuhenkilo": { type: String, default: "Etunimi Sukunimi" },
                        "aikatauluSeuranta": { type: String, default: "aikataulu" }
                    },
                    "johtaminen": {
                        "tavoitteet": [
                            "tavoite1"
                        ],
                        "toimenpiteet": [
                            "toimenpide1"
                        ],
                        "vastuuhenkilo": { type: String, default: "Etunimi Sukunimi" },
                        "aikatauluSeuranta": { type: String, default: "aikataulu" }
                    },
                    "talous": {
                        "tavoitteet": [
                            "tavoite1"
                        ],
                        "toimenpiteet": [
                            "toimenpide1"
                        ],
                        "vastuuhenkilo": { type: String, default: "Etunimi Sukunimi" },
                        "aikatauluSeuranta": { type: String, default: "aikataulu" }
                    },
                    "henkilostoVerkosto": {
                        "kuvaus": { type: String, default: "Henkil??st?? ja verkosto" },
                        "tavoitteet": [
                            "tavoite1"
                        ],
                        "toimenpiteet": [
                            "toimenpide1"
                        ],
                        "vastuuhenkilo": { type: String, default: "Etunimi Sukunimi" },
                        "aikatauluSeuranta": { type: String, default: "aikataulu" }
                    }
                }
            },
            "johtamisenVuosikello": {
                "kuvaus": { type: String, default: "Johtamisen vuosikello" },
                "hallitus": {
                    "kuvaus": { type: String, default: "Hallitus" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: false }
                        },
                        {
                            "3": { type: Boolean, default: true }
                        },
                        {
                            "4": { type: Boolean, default: false }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: true }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: false }
                        },
                        {
                            "9": { type: Boolean, default: true }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: false }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "johtoryhmanKokous": {
                    "kuvaus": { type: String, default: "Johtoryhm??n kokous" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: true }
                        },
                        {
                            "3": { type: Boolean, default: false }
                        },
                        {
                            "4": { type: Boolean, default: true }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: true }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: true }
                        },
                        {
                            "9": { type: Boolean, default: false }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: true }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "viikkopalaveri": {
                    "kuvaus": { type: String, default: "Viikkopalaveri" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: true }
                        },
                        {
                            "2": { type: Boolean, default: true }
                        },
                        {
                            "3": { type: Boolean, default: true }
                        },
                        {
                            "4": { type: Boolean, default: true }
                        },
                        {
                            "5": { type: Boolean, default: true }
                        },
                        {
                            "6": { type: Boolean, default: true }
                        },
                        {
                            "7": { type: Boolean, default: true }
                        },
                        {
                            "8": { type: Boolean, default: true }
                        },
                        {
                            "9": { type: Boolean, default: true }
                        },
                        {
                            "10": { type: Boolean, default: true }
                        },
                        {
                            "11": { type: Boolean, default: true }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "strategiat": {
                    "kuvaus": { type: String, default: "Strategiat" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: false }
                        },
                        {
                            "3": { type: Boolean, default: true }
                        },
                        {
                            "4": { type: Boolean, default: false }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: true }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: false }
                        },
                        {
                            "9": { type: Boolean, default: true }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: false }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "Myynti": {
                    "kuvaus": { type: String, default: "Myynti" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: true }
                        },
                        {
                            "3": { type: Boolean, default: false }
                        },
                        {
                            "4": { type: Boolean, default: true }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: true }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: true }
                        },
                        {
                            "9": { type: Boolean, default: false }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: true }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "tuotanto": {
                    "kuvaus": { type: String, default: "Tuotanto" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: true }
                        },
                        {
                            "3": { type: Boolean, default: false }
                        },
                        {
                            "4": { type: Boolean, default: true }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: true }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: true }
                        },
                        {
                            "9": { type: Boolean, default: false }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: true }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "budjetointi": {
                    "kuvaus": { type: String, default: "Budjetointi" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: false }
                        },
                        {
                            "3": { type: Boolean, default: false }
                        },
                        {
                            "4": { type: Boolean, default: false }
                        },
                        {
                            "5": { type: Boolean, default: true }
                        },
                        {
                            "6": { type: Boolean, default: false }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: false }
                        },
                        {
                            "9": { type: Boolean, default: true }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: false }
                        },
                        {
                            "12": { type: Boolean, default: true }
                        }
                    ]
                },
                "tilinpaatos": {
                    "kuvaus": { type: String, default: "Tilinp????t??s" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: false }
                        },
                        {
                            "2": { type: Boolean, default: false }
                        },
                        {
                            "3": { type: Boolean, default: true }
                        },
                        {
                            "4": { type: Boolean, default: false }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: false }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: false }
                        },
                        {
                            "9": { type: Boolean, default: false }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: false }
                        },
                        {
                            "12": { type: Boolean, default: false }
                        }
                    ]
                },
                "kehityskeskustelu": {
                    "kuvaus": { type: String, default: "Kehityskeskustelu" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: true }
                        },
                        {
                            "2": { type: Boolean, default: false }
                        },
                        {
                            "3": { type: Boolean, default: false }
                        },
                        {
                            "4": { type: Boolean, default: false }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: false }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: false }
                        },
                        {
                            "9": { type: Boolean, default: false }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: false }
                        },
                        {
                            "12": { type: Boolean, default: false }
                        }
                    ]
                },
                "tuotekehitys": {
                    "kuvaus": { type: String, default: "Tuotekehitys" },
                    "kuukausi": [
                        {
                            "1": { type: Boolean, default: true }
                        },
                        {
                            "2": { type: Boolean, default: false }
                        },
                        {
                            "3": { type: Boolean, default: false }
                        },
                        {
                            "4": { type: Boolean, default: false }
                        },
                        {
                            "5": { type: Boolean, default: false }
                        },
                        {
                            "6": { type: Boolean, default: false }
                        },
                        {
                            "7": { type: Boolean, default: false }
                        },
                        {
                            "8": { type: Boolean, default: false }
                        },
                        {
                            "9": { type: Boolean, default: false }
                        },
                        {
                            "10": { type: Boolean, default: false }
                        },
                        {
                            "11": { type: Boolean, default: false }
                        },
                        {
                            "12": { type: Boolean, default: false }
                        }
                    ]
                }
            },
            "lisayksiaAjatuksia": {
                "kuvaus": { type: String, default: "Lis??yksi?? ja ajatuksia" },
                "henkilosto": { type: String, default: "Henkil??st?? (osaaminen, johtaminen)" },
                "mittarit": { type: String, default: "Mittarit" },
                "asiakasnakokulma": {
                    "kuvaus": { type: String, default: "Asiakasn??k??kulma" },
                    "asiakasmaara": {
                        "kuvaus": { type: String, default: "Asiakkaiden m????r??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "markkinaosuus": {
                        "kuvaus": { type: String, default: "Markkinaosuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "segmenttiMarkkinaosuus": {
                        "kuvaus": { type: String, default: "Markkinaosuus tietyss?? segmentiss??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "liikevaihtoAsiakas": {
                        "kuvaus": { type: String, default: "Lv/asiakas" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "menetetysAsiakkaat": {
                        "kuvaus": { type: String, default: "Menetettyjen asiakkaiden m????r?? tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakassuhdeaika": {
                        "kuvaus": { type: String, default: "Asiakassuhteisiin k??ytetty aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuloskontaktit": {
                        "kuvaus": { type: String, default: "Tulosta tuottaneiden kontaktien osuus kaikista asiakaskontakteista" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakastyytyvaisyys": {
                        "kuvaus": { type: String, default: "Asiakastyytyv??isyysindeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakasuskollisuus": {
                        "kuvaus": { type: String, default: "Asiakasuskollisuusindeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakaskustannukset": {
                        "kuvaus": { type: String, default: "Kustannukset/asiakas" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakaskaynnit": {
                        "kuvaus": { type: String, default: "Asiakask??yntien m????r??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakaskayntiaika": {
                        "kuvaus": { type: String, default: "Asiakask??ynteihin kulunut aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "reklamaatiot": {
                        "kuvaus": { type: String, default: "Reklamaatioiden m????r?? tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "markkinointikustannukset": {
                        "kuvaus": { type: String, default: "Markkinointikustannuksien m????r?? tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tavaramerkkiindeksi": {
                        "kuvaus": { type: String, default: "Tavaramerkki-indeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "sisaisetatkasiakkaat": {
                        "kuvaus": { type: String, default: "Sis??iset atk-asiakkaat" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "ulkopuolisetatkasiakkaat": {
                        "kuvaus": { type: String, default: "Ulkopuoliset atk-asiakkaat" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "sopimuksetAtktyontekija": {
                        "kuvaus": { type: String, default: "Sopimukset/atk-ty??ntekij??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "atkvalmiusmuutos": {
                        "kuvaus": { type: String, default: "Yrityksen atk-valmiuksien muutos" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "kehitysnakokulma": {
                    "kuvaus": { type: String, default: "Kehitt??misen n??k??kulma" },
                    "tkKustannukset": {
                        "kuvaus": { type: String, default: "Tutkimus- ja tuotekehityskustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tkKustannuksetKokonais": {
                        "kuvaus": { type: String, default: "Tutkimus- ja tuotekehityskustannukset/kokonaiskustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "atkkehityskustannuksetAtk": {
                        "kuvaus": { type: String, default: "Atk-kehityskustannukset/atk-kustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "atkkoulutuskustannuksetAtk": {
                        "kuvaus": { type: String, default: "Atk-koulutuskustannukset/atk-kustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tkAika": {
                        "kuvaus": { type: String, default: "Tutkimukseen ja tuotekehitykseen k??ytetty aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tkVaratOmaisuus": {
                        "kuvaus": { type: String, default: "Tutkimukseen ja tuotekehitykseen k??ytetyt varat/koko omaisuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "koulutusinvestoinnitAsiakas": {
                        "kuvaus": { type: String, default: "Koulutusinvestoinnit/asiakas" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tutkimusinvestoinnit": {
                        "kuvaus": { type: String, default: "Tutkimusinvestoinnit" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tkinvestoinnit": {
                        "kuvaus": { type: String, default: "Tuotekehitysinvestoinnit" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "sovellusinvestoinnit": {
                        "kuvaus": { type: String, default: "Sovellusinvestoinnit" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "uudetTuotteetTukiInvestoinnit": {
                        "kuvaus": { type: String, default: " Uusien tuotteiden koulutukseen ja tukemiseen k??ytetyt investoinnit" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinakehitysinvestoinnit": {
                        "kuvaus": { type: String, default: "Investoinnit uusien markkinoiden kehitykseen" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "haetutPatentit": {
                        "kuvaus": { type: String, default: "Haetut patentit" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "patentinIka": {
                        "kuvaus": { type: String, default: "Patentin keskim????r??inen ik??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "koulutuskustannuksetHenkilo": {
                        "kuvaus": { type: String, default: "Koulutuskustannukset/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "parannusehdotuksetHenkilo": {
                        "kuvaus": { type: String, default: "Parannusehdotukset/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "henkilostonakokulma": {
                    "kuvaus": { type: String, default: "Henkil??st??n??k??kulma" },
                    "johtajuusindeksi": {
                        "kuvaus": { type: String, default: "Johtajuusindeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "motivaatioindeksi": {
                        "kuvaus": { type: String, default: "Motivaatioindeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "henkilostomaara": {
                        "kuvaus": { type: String, default: "Henkil??st??n m????r??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "henkilostonVaihtuvuus": {
                        "kuvaus": { type: String, default: "Henkil??st??n vaihtuvuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "keskimaarainenVirkaika": {
                        "kuvaus": { type: String, default: "Keskim????r??inen virkaik??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "henkilostonKeskiika": {
                        "kuvaus": { type: String, default: "Henkil??st??n keski-ik??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "koulutuspaivatHenkiloVuosi": {
                        "kuvaus": { type: String, default: "Sis??iset koulutusp??iv??t/henkil??/vuosi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tilapaisetVakinaiset": {
                        "kuvaus": { type: String, default: "Tilap??iset/vakinaiset ty??ntekij??t" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "akateemisetOsuus": {
                        "kuvaus": { type: String, default: "Akateemisesti koulutettujen osuus henkil??kunnasta" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "poissaolot": {
                        "kuvaus": { type: String, default: "Keskim????r??iset poissaolot" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "naisesimiehet": {
                        "kuvaus": { type: String, default: "Naispuolisten esimiesten m????r?? tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tyohakemukset": {
                        "kuvaus": { type: String, default: "Yritykseen tulleiden hakemusten m????r??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "sisaisenTehokkuudenNakokulma": {
                    "kuvaus": { type: String, default: "Sis??isen tehokkuuden n??k??kulma" },
                    "hallinnollisetKokonais": {
                        "kuvaus": { type: String, default: "Hallinnolliset kustannukset/kokonaiskustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "laskujenKasittelyaika": {
                        "kuvaus": { type: String, default: "Laskujen k??sittelyaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "toimitustenTasmallisyys": {
                        "kuvaus": { type: String, default: "Toimitusten t??sm??llisyys" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "keskimLapimenoaika": {
                        "kuvaus": { type: String, default: "Keskim????r??inen l??pimenoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tkLapimenoaika": {
                        "kuvaus": { type: String, default: "Tuotekehityksen l??pimenoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tilausToimitusAika": {
                        "kuvaus": { type: String, default: "Tilauksen ja toimituksen v??linen aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "hankkijoidenToimitusaika": {
                        "kuvaus": { type: String, default: "Hankkijoiden toimitusaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuotannonLapimenoaika": {
                        "kuvaus": { type: String, default: "Tuotannon l??pimenoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "keskimPaatoksentekoaika": {
                        "kuvaus": { type: String, default: "Keskim????r??inen p????t??ksentekoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "varastojenKiertonopeus": {
                        "kuvaus": { type: String, default: "Varastojen kiertonopeus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuottavuudenParaneminen": {
                        "kuvaus": { type: String, default: "Tuottavuuden paraneminen" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "atkkapasiteetti": {
                        "kuvaus": { type: String, default: "Atk-kapasiteetti" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "atkkapasiteettiHenkilo": {
                        "kuvaus": { type: String, default: "Atk-kapasiteetti/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "atkvarallisuudenMuutos": {
                        "kuvaus": { type: String, default: "Atk-varallisuuden muutos" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "atkkustannuksetHallinnolliset": {
                        "kuvaus": { type: String, default: "Atk-kustannukset/hallinnolliset kustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuotannonPaastot": {
                        "kuvaus": { type: String, default: "Tuotannon ymp??rist??p????st??t" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuoteYmparistovaikutukset": {
                        "kuvaus": { type: String, default: "Tuotteiden k??yt??n ymp??rist??vaikutukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "taloudennakokulma": {
                    "kuvaus": { type: String, default: "Talouden n??k??kulma" },
                    "omaisuus": {
                        "kuvaus": { type: String, default: "Koko omaisuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "omaisuusHenkilo": {
                        "kuvaus": { type: String, default: "Koko omaisuus/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "myyntituotoOmaisuus": {
                        "kuvaus": { type: String, default: "Myyntituotot/koko omaisuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "myyntituototUusista": {
                        "kuvaus": { type: String, default: "Uusista tuotteista tai liiketoimista saadut myyntituotot" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "myyntituototHenkilo": {
                        "kuvaus": { type: String, default: "Myyntituotot/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "voittoOmaisuus": {
                        "kuvaus": { type: String, default: "Voitto/koko omaisuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "voittoUusista": {
                        "kuvaus": { type: String, default: "Uusista tuotteista tai liiketoimista saatu voitto" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "voittoHenkilo": {
                        "kuvaus": { type: String, default: "Voitto/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "markkinaarvo": {
                        "kuvaus": { type: String, default: "Markkina-arvo (verotusarvo)" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "nettokayttopaaomaOsuus": {
                        "kuvaus": { type: String, default: "Nettok??ytt??p????oman %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "jalostusarvoHenkilo": {
                        "kuvaus": { type: String, default: "Jalostusarvo/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "paaomanTuottoaste": {
                        "kuvaus": { type: String, default: "Koko p????oman tuottoaste" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "sijoitetunTuottoaste": {
                        "kuvaus": { type: String, default: "Sijoitetun p????oman tuottoaste" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "voittoprosentti": {
                        "kuvaus": { type: String, default: "Voitto-%" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "katetuottoprosentti": {
                        "kuvaus": { type: String, default: "Katetuotto-%" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "katetuottoHenkilo": {
                        "kuvaus": { type: String, default: "Katetuotto/henkil??" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "kassavirta": {
                        "kuvaus": { type: String, default: "Kassavirta" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "vakavaraisuus": {
                        "kuvaus": { type: String, default: "Vakavaraisuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "investointienTuottoaste": {
                        "kuvaus": { type: String, default: "Investointien tuottoaste" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "kokonaiskustannukset": {
                        "kuvaus": { type: String, default: "Kokonaiskustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                }
            }
        }
    });

const Customer = model('Customer', customerSchema);
export default Customer;