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
                "liikeidea": { type: String, default: "Mikä on yrityksen liikeidea? " },
                "toiminnanKohde": { type: String, default: "Kenelle toiminta on suunnattu?" },
                "kohderyhma": { type: String, default: "Kohde ryhmät ja mitkä ovat kohderyhmien erityisvaatimukset?" },
                "tarjonta": { type: String, default: "Mitä asiakkaille tarjotaan? " },
                "ostoyllyke": { type: String, default: "Miten asiakas saadaan ostamaan tuotteita/palveluja?" },
                "myynninLisays": { type: String, default: "Miten saataisiin enemmän myyntiä aikaiseksi? " },
                "toiminnanKehitys": { type: String, default: "Miten toimintaa on kehitetty viime vuosina? " },
                "ainutlaatuisuus": { type: String, default: "Mitä ainutlaatuista yrityksessä on kilpailijoihin verrattuna?" },
                "kilpailuedunSaavutus": { type: String, default: "Miten kilpailuetu on saavutettu?" },
                "suuntaaminen": { type: String, default: "Miten suuntaatte toimintaa alueellisesti / kansainvälisesti? Korostuuko jokin erityispiirre?" },
                "omistajastrategia": { type: String, default: "Millainen on omistajastrategia?" },
                "missioVisioArvot": { type: String, default: "Mikä on Missio, Visio ja Arvot?" },
                "strategisetTavoitteet": { type: String, default: "Mitä strategisia tavoitteita yrityksellä on?" },
                "strategisetVaihtoehdot": { type: String, default: "Mitkä ovat strategiset vaihtoehdot?" },
                "kriittisetMenestystekijat": { type: String, default: "Mitkä ovat kriittisiä menestystekijöitä?" },
                "strategisetToimenpidekokonaisuudet": { type: String, default: "Millaisia strategisia toimenpidekokonaisuuksia tulisi laatia ja tulisi olla (kuvaus, aikataulu, arvo, tavoitteet)" }
            },
            "tavoitteet": { type: String, default: "_TODO" },
            "strateginenArviointi": {
                "kilpailykyvykkyys": {
                    "henkilostonOsaaminen": {
                        "kuvaus": { type: String, default: "Millainen on yrityksen henkilöstön osaaminen?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Henkilöstön osaamisessa on liiketoiminnan kannalta keskeisiä kriittisiä puutteita" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkilöstön osaamisessa on joitain kriittisiä puutteita" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkilöstön osaamisessa on puutteita, mutta ne eivät ole liiketoiminnan kannalta kriittisiä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkilöstön osaaminen on hyvä, mutta meillä on muutamia erityisosaamispuutteita" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkilöstön osaaminen on hyvä ja sitä pyritään ylläpitämään koulutuksilla" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Henkilöstön osaaminen on erittäin hyvä ja motivaatio sen kehittämiseen on erittäin korkea" }
                            }}
                        ]
                    },
                    "ydinkyvykkyyksienMerkitys": {
                        "kuvaus": { type: String, default: "Mikä on organisaation ydinkyvykkyyksien merkitys?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Organisaatio ei tarvitse mitään ydinkyvykkyyksiä nykyisessä työtehtävässään" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaation ydinkyvykkyyksillä ei ole mitään erityisiä merkitystä liiketoiminnalle" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme ydinkyvykkyydet ovat helposti kopioitavissa eikä niillä ole siksi merkitystä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme ydinkyvykkyydet riittävät nykyisen kilpailuaseman säilyttämiseen" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme nykyisiä ydinkyvykkyyksiä vahvistetaan kilpailuaseman parantamiseksi" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Organisaatiomme ydinkyvykkyyksiä vahvistetaan ja laajennetaan merkittävillä panostuksilla" }
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
                                "kuvaus": { type: String, default: "Keskitymme pääsääntöisesti nykyisien asiakassuhteiden hoitoon" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Pyrimme luomaan pitkäaikaisia liiketoimintasuhteita nykyisten ja uusien asiakkaiden kanssa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Investoimme aikaa liiketoimintaympäristömme suhdetoiminnan kehittämiseen" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Panostamme aktiivisesti monipuolisien ja kansainvälisten suhdeverkostojen rakentamiseen" }
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
                                "kuvaus": { type: String, default: "Yrityksemme talous on kriittisessä tilassa" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme taloudellinen tilanne on huono" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme taloudellinen tilanne välttävä, mutta ei tyydyttävä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksen taloudellinen tilanne on tyydyttävä, mutta suhdanneherkkä" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksen taloudellinen tilanne on hyvä ja vakaa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme taloudellinen tilanne on vahva ja näkymät ovat hyvät" }
                            }}
                        ]
                    }
                },
                "kilpailuetu": {
                    "nykyinenVisio": {
                        "kuvaus": { type: String, default: "Miten selkeä on yrityksen nykyinen visio?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Meillä ei ole selkeää omaa visiota" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Liiketoimintamme on suuntautunut asiakkaiden tarpeiden mukaan" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme joskus keskustelleet visiostamme, mutta sitä ei ole määritelty" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme kirjanneet vision liiketoimintasuunnitelmamme, mutta siihen se on jäänyt" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Visiomme on lähinnä esityskalvoissa, mutta ei toimi toiminnan yrityksen johtamisessa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meillä on selkeä harkittu yhteinen visio, joka on viestitty koko liiketoimintaympäristöömme" }
                            }}
                        ]
                    },
                    "kilpailukykyNykystrategia": {
                        "kuvaus": { type: String, default: "Miten kilpailukykyinen yritys on nykyisellä strategialla?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Olemme menettäneet kilpailukykymme, koska meillä ei ole toimivaa strategiaa" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme menettämässä markkinoitamme, koska kilpailukykymme ei enään tyydytä asiakkaitamme" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyisellä srategiallamme tulemme todennäköisesti menettämään kilpailukykyämme markkinoilla" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyisellä srategialla olemme kilpailukykyisiä markkinoilla, mutta kilpailukyvyn pysyvyydessä on riskejä" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Uusi strategiamme tulee vahvistamaan kilpailukykyämme tulevaisuudessa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyisellä strategialla vahvistamme asiakkuuksiamme, koska meidät nähdään kilpailukykyisinä" }
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
                                "kuvaus": { type: String, default: "Emme osaa mainita yhtään strategista kilpailuetua, koska emme tunne liiketoimintaluettamme" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme miettineet, miten voisimme luoda kilpailuetua, koska asiakkaat eivät vakuutu toiminnastamme" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meillä on todennäköisesti jotain kilpailuetuja, mutta emme osaa kuvata niitä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meillä on yksi kilpailuetu markkinoillamme, jonka asiakkaammekin ovat tunnistaneet" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meillä on kaksi kilpailuetua markkinoillamme, jotka asiakkaamme ovat tunnistaneet" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Meillä on useita asiakkaiden tiedossa olevia kilpailuetuja ja kehitämme jatkuvasti niitä lisää" }
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
                                "kuvaus": { type: String, default: "Asiakas ei tiedä yrityksemme kilpailuetuja, koska emme ole niitä tunnistaneet itsekkään" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakkailla ei ole kokemusta yrityksemme toiminnasta voidakseen tunnistaa kilpailuetuja" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Uskomme, että asiakkailla on jokin käsitys yrityksemme tarjoamista kilpailueduista" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Muutamat asiakkaat ovat ostaneet meiltä toistuvasti, joten oletamme omaavamme kilpailuetua" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme markkinoineet johdonmukaisesti kilpailuetuamme ja asiakkaat ovat siitä tietoisia" }
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
                                "kuvaus": { type: String, default: "Yrityksemme markkina-asema on heikko ja tulevaisuus näyttää synkältä" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme markkina-asema on toistaiseksi heikko, mutta uskomme tulevaisuuteen" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme markkina-asema on vielä heikko, mutta neuvotteluissa on lupaavia asiakkuuksia" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksellämme on välttävä markkina-asema, mutta emme ole siihen tyytyväisiä" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksellämme on hyvä markkina-asema ja haluamme kasvattaa sitä entisestään" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksellämme on vahva ja kasvava markkina-asema kansainvälisesti" }
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
                                "kuvaus": { type: String, default: "Toimiala on taantunut ja häviämässä pois markkinoilta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimiala on taantunut ja tarvitsee voimakkaita muutoksia" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimialalla on odotettavissa kilpailua kiristäviä muutoksia" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimialan tilanne on hyvä ja jatkaa tasaista kasvua" }
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
                        "kuvaus": { type: String, default: "Mikä merkitys paikallisuudella on yrityksen liiketoimintaan?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Paikallisuudesta on enemmän haittaa kuin hyötyä liiketoiminnallemme" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme liiketoiminnalle paikallisuudella ei ole mitään merkitystä" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Paikallisuus helpottaa jonkin verran yrityksen liiketoimintaa" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Paikallinen läsnäolo ja tunnettuus helpottavat liiketoimintaamme huomattavasti" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme paikallisuus on merkittävä asia" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme liiketoiminnalle paikallisuus on erittäin tärkeää" }
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
                                "kuvaus": { type: String, default: "Globaalit muutosvaatimukset tulevat asiakkailtamme ja yritämme sopeutua niihin" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Seuraamme jonkin verran globaaleja muutostrendejä ja niiden vaikutusta liiketoimintaamme" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme itse läsnä globaaleilla markkinoilla vahvistaaksemme kilpailumahdollisuuksiamme" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Olemme yhdessä asiakkaiden kanssa globaaleilla markkinoilla ennakoidaksemme muutoksia" }
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
                        "kuvaus": { type: String, default: "Kuinka organisaation ohjaaminen on järjestetty?" }
                    },
                    "perustehtavanSelkeys": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten selkeä on organisaation perustehtävä koko henkilöstölle?" }
                    },
                    "tehtyTaiKokeiltu": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten paljon organisaatiossa on ”Näin on aina tehty” tai ”Tuota on jo kokeiltu” –ajattelua?" }
                    },
                    "kulttuurinToimivuus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten toimiva on yrityksen kulttuuri?" }
                    },
                    "kehitysyritys": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Onko yrityksen kulttuuria yritetty kehittää?" }
                    },
                    "ydinosaaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitä ydinosaamista organisaatiossa on?" }
                    },
                    "menestysydinosaaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitkä ovat menestyksen kannalta organisaationne ydinosaamiset?" }
                    },
                    "ydinosaamisenRiittavyys": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Pärjäättekö tulevaisuudessa nykyisillä ydinosaamisella?" }
                    },
                    "ydinosaamisenHyodyntaminen": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Onko yrityksen ydinosaamista hyödynnetty liiketoiminnan kehittämisessä tai liiketoiminnan kasvattamisessa?" }
                    },
                    "ydinosaamisperusta": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Pystyykö ydinosaamisen pohjalle rakentaa uutta liiketoimintaa?" }
                    },
                    "ydinosaamisenPuutteet": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitä puutteita ydinosaamisessa on?" }
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
                        "kuvaus": { type: String, default: "Mitä piilokustannuksia organisaatiossanne on?" }
                    },
                    "kustannusrakenteidenTunnistus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Kuinka usein kyseenalaistatte kustannusrakenteet?" }
                    },
                    "johtajanOminaisuudet": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitkä ovat hyvän johtajan tärkeimmät ominaisuudet?" }
                    },
                    "johtamisenMonipuolisuus": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Miten monipuolisia keinoja käytätte johtamisessa?" }
                    },
                    "johtajanTehtavat": {
                        "kommentti": { type: String, default: "Sanallinen kuvailu" },
                        "kuvaus": { type: String, default: "Mitkä ovat johtajan tärkeimmät tehtävät?" }
                    }
                },
                "strateginenPaaoma": {
                    "nykyisetMarkkinat": {
                        "kuvaus": { type: String, default: "Nykyiset markkinat" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 4 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 2 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "potentiaalisetMarkkinat": {
                        "kuvaus": { type: String, default: "Potentiaaliset markkinat" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 5 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 1 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    }
                },
                "liiketoimintaalueet": {
                    "nykyisetToimialat": {
                        "kuvaus": { type: String, default: "Nykyiset toimialat" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "potentiaalisetToimialat": {
                        "kuvaus": { type: String, default: "Potentiaaliset toimialat" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    }
                },
                "liiketoimintaymparisto": {
                    "nykyisetLiiketoimintaymparistot": {
                        "kuvaus": { type: String, default: "Nykyiset liiketoimintaympäristöt" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 1 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "potentiaalisetLiiketoimintaymparistot": {
                        "kuvaus": { type: String, default: "Potentiaaliset liiketoimintaympäristöt" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 1 },
                            "tulevaTaso": { type: Number, default: 2 },
                            "vaikuttavuus": { type: Number, default: 3 },
                            "muutos": { type: Number, default: 4 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    }
                },
                "sidosryhmasuhteet": {
                    "omistajaRahoittajasuhteet": {
                        "kuvaus": { type: String, default: "Omistaja- ja rahoittajasuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "mediasuhteet": {
                        "kuvaus": { type: String, default: "Mediasuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "oppilaitossuhteet": {
                        "kuvaus": { type: String, default: "Suhteet oppilaitoksiin" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "poliittisetSuhteet": {
                        "kuvaus": { type: String, default: "Suhteet poliittisiin päättäjiin" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "muutSuhteet": {
                        "kuvaus": { type: String, default: "Muut sidosryhmäsuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    }
                },
                "liiketoimintasuhteet": {
                    "asiakassuhteet": {
                        "kuvaus": { type: String, default: "Asiakassuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "kumppanuussuhteet": {
                        "kuvaus": { type: String, default: "Kumppanuussuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "toimittajasuhteet": {
                        "kuvaus": { type: String, default: "Toimittajasuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "kilpailijasuhteet": {
                        "kuvaus": { type: String, default: "Kilpailijasuhteet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    }
                },
                "organisaatiopaaoma": {
                    "toimintaaOhjaavat": {
                        "kuvaus": { type: String, default: "Toimintaa ohjaavat tekijät" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "ydinkyvykkyydet": {
                        "kuvaus": { type: String, default: "Ydinkyvykkyydet" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "valineetOikeudetSopimukset": {
                        "kuvaus": { type: String, default: "Välineet, oikeudet ja sopimukset" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "palveluidenTuotteidenAsiakasarvo": {
                        "kuvaus": { type: String, default: "Palveluiden ja tuotteiden asiakasarvo" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "yksilollinenPaaoma": {
                        "kuvaus": { type: String, default: "Yksilöllinen pääoma" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "omistusOmaisuus": {
                        "kuvaus": { type: String, default: "Omistus ja omaisuus" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "vakavaraisuus": {
                        "kuvaus": { type: String, default: "Vakavaraisuus" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "kannattavuus": {
                        "kuvaus": { type: String, default: "Kannattavuus" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
                    },
                    "maksuvalmius": {
                        "kuvaus": { type: String, default: "maksuvalmius" },
                        "kommentti": { type: String, default: "Lisätarkennus" },
                        "nykytila": {
                            "_kommentti": { type: String, default: "Arvoväli 1-6" },
                            "nykytaso": { type: Number, default: 3 },
                            "tulevaTaso": { type: Number, default: 6 },
                            "vaikuttavuus": { type: Number, default: 5 },
                            "muutos": { type: Number, default: 3 },
                            "kommentti": { type: String, default: "Sanallinen tarkennus" }
                        },
                        "muutossuuntaTarve": { type: String, default: "Sanallinen määrittely" }
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
                "_kommentti": { type: String, default: "Yrityksen palvelutarjooma tai sisäinen organisaatiorakenne" },
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
                            "kuvaus": { type: String, default: "Asiakasryhmät per liiketoiminta-alue:" },
                            "asiakasryhmat": { type: Number, default: 5 },
                        }
                    }
                ],
                "uudenMarkkinanLuonti": {
                    "kuvaus": { type: String, default: "Milloin olette yrittäneet luoda kokonaan uutta markkinaa / liiketoimintaa?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "muuttuvanToiminnanHyodyntaminen": {
                    "kuvaus": { type: String, default: "Miten hyödynnätte laskevia ja kasvavia liiketoiminnan aloja?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "trendienSeuranta": {
                    "kuvaus": { type: String, default: "Miten seuraatte trendejä?" },
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
                        "kuvaus": { type: String, default: "Mitä hankitaan" },
                        "hankinnanArvo": { type: Number, default: 100.0 },
                        "riskit": { type: String, default: "Kuvaile riskit" },
                        "kehittamismahdollisuudet": { type: String, default: "Sanallinen kuvailu" },
                        "kilpailutettu": { type: Boolean, default: true }
                    }
                ]
            },
            "kilpailuanalyysi": {
                "merkittavatKilpailijat": {
                    "kuvaus": { type: String, default: "Ketkä ovat merkittävimmät kilpailijat, miksi?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenToimintatapa": {
                    "kuvaus": { type: String, default: "Millainen toimintatapa heillä on?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenErottuvuus": {
                    "kuvaus": { type: String, default: "Miten erottautuvat markkinoilla?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenMarkkinointiMyynti": {
                    "kuvaus": { type: String, default: "Miten tekevät markkinointia ja myyntiä?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kilpailijoidenUudistuminen": {
                    "kuvaus": { type: String, default: "Miten kilpailijat ovat uudistuneet/uudistavat toimintaansa (konseptia)?" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "markkinoidenMuutokset": {
                    "kuvaus": { type: String, default: "Mitä muutoksia markkinoilla on meneillään ja onko kilpailijat niissä mukana?" },
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
                                "kuvaus": { type: String, default: "Tuottamamme laatu on erinomainen, eikä vaadi erityisiä lisätoimia" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamamme laatu on hyvä, mutta se edellyttää jatkuvaa ylläpitoa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamamme laatu on hyvä, mutta laatutason ylläpito vaatii paljon lisätyötä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamamme laatu vaihtelee ja joskus asiakas reklamoi siitä" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamassamme laadussa on puutteita, mistä saamme säännöllisesti asiakasreklamaatioita" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuottamassamme laadussa on merkittäviä puutteita, minkä vuoksi olemme menettäneet asiakkait" }
                            }}
                        ]
                    },
                    "ydintoimintoihinKeskittyminen": {
                        "kuvaus": { type: String, default: "Keskittyykö yrityksenne oikeisiin ydintoimintoihin?" },
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
                                "kuvaus": { type: String, default: "Yrityksemme on keskittynyt muutamaan ydintoimintaan, mutta niitä voisi vieläkin fokusoida" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksellämme on perinteisesti vakiintuneet ydintoiminnat, eikä niitä ole erikseen tarkasteltu" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme ei ole tehnyt tarkastelua ydintoiminnoista, vaan kaikkea tehdään, mitä asiakas haluaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksellämme on liikaa erilaisia toimintoja, mitkä haittaavat tehokasta liiketoimintaa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Yrityksemme toiminnot ovat epäselviä ja valinta ydintoiminnoista tulisi tehdä välittömäst" }
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
                                "kuvaus": { type: String, default: "Toimituskykymme on erittäin joustava nopeille tai suurille muutoksille" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Pystymme ennakoimaan muutoksia ja joustamaan toimituksissa riittävän nopeasti" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimituskykymme vastaa isoihin muutoksiin viiveellä tai pienillä myöhästymisillä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Toimituskykymme ei pysty vastaamaan merkittäviin ja voimakkaisiin muutoksiin" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantorakenteemme on kankea, eikä pysty vastaamaan pieniinkään muutoksiin" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Muutoksiin ei pystytä vastaamaan ja ne aiheuttavat aina merkittäviä tappioita" }
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
                                "kuvaus": { type: String, default: "Tuotannon kustannustehokkuus on hyvä, mutta sitä voi aina parantaa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantomme kustannustehokkuudessa on paljon vaihtelua" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantomme kustannustehokkuus ei ole riittävällä tasolla kilpailijoihin verrattuna" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotantomme kustannustehokkuus on heikkenemässä, mikäli uudistuksia ei tehdä" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotatomme kustannustehokkuus on huono ja edellyttää nopeaa uudistamista" }
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
                                "kuvaus": { type: String, default: "Asiakaskantamme on harkitusti fokusoitu, eikä muutoksiin ole tarvetta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakaskantamme on pääosin fokusoitunut ja vakiintunut" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakaskannassamme tapahtuu jatkuvaa muutosta ja fokus vaihtelee" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakassegmentointimme on hieman epäselvä ja sitä tulisi tarkastella uudelleen" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakaskantamme on muuttunut tai muuttumassa voimakkaasti ja siksi uudistamiselle on tarvetta" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Asiakkuuksiemme fokus on epäselvä ja se tulisi suunnitella kokonaan uusiks" }
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
                                "kuvaus": { type: String, default: "Ansaintamallimme on selkeä, eikä tarvitse uudistamista" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ansaintamallimme ovat kunnossa, mutta niiden hinnoittelua tulee tarkastella uudelleen" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ansaintamallimme ovat pääsääntöisesti kunnossa, mutta uusia ansaintamahdollisuuksia haetaan" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Nykyiset ansaintamallimme eivät anna riittävää tulosta ja niitä tulisi uudistaa" }
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
                        "kuvaus": { type: String, default: "Tuottaako myynti ja markkinointi riittäviä asiakastuloksia?" },
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
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa kohdeasiakkaat tyydyttävin asiakastuloksin" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynnin ja markkinoinnin panostukset eivät tuota odotettuja asiakastuloksia" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa harvoja kohdeasiakkaita välttävin tuloksin" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Myynti ja markkinointi tavoittaa liian vähän kohdeasiakkaita heikoin tuloksin" }
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
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen kohdeasiakkaille tulisi olla nykyistä helpompaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen kohdeasiakkaille on monimutkaista ja prosessi vaatii uudistamista" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteiden ja palveluiden ostaminen on kohdeasiakkaille nykyisellään liian monimutkaista ja vaatii välitöntä uudistamista" }
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
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme vastaavat erinomaisesti asiaskastarpeisiin, eikä uudistamiselle ole tarvetta" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kohtuullisen ajanmukaisessa kunnossa, eikä edellytä uudistamista lähitulevaisuudessa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tulevat vaatimaan asteittaista uudistamista muutaman vuoden sisällä" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteillamme ja palveluillamme on osittainen uudistamistarve lähitulevaisuudessa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme kokonaan uudistaminen tulisi käynnistää lähitulevaisuudessa" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tulisi uudistaa kokonaisuudessaan välittömästi" }
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
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on erittäin hyvä" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on hyvä" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on kohtalainen" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on välttävä" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on huono" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme hintakilpailukyky kohdemarkkinoilla on erittäin huono" }
                            }}
                        ]
                    },
                    "hyotyjenYmmarrettavyys": {
                        "kuvaus": { type: String, default: "Ovatko tuotteenne tai palvelunne tarjoamat hyödyt helposti ymmärrettäviä?" },
                        "kommentti": { type: String, default: "Sanallinen tarkennus" },
                        "valinta": [
                            {
                                "1": { 
                                "tila": { type: Boolean, default: true },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hyödyt ovat selviä ja helposti todistettavissa" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hyödyt ovat selviä ja kohtuullisesti todistettavissa" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hyödyt ovat selviä, mutta vaikeasti todistettavissa" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hyödyt ovat selviä, mutta mahdottomia todistaa" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hyödyt ovat hieman epäselviä" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme tarjoamat hyödyt ovat täysin epäselviä" }
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
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme kysyntä on suurempi kuin mihin pystymme vastaamaan" }
                            }},
                            {
                                "2": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kiinnostavia ja kauppa käy hyvin" }
                            }},
                            {
                                "3": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kiinnostavia, mutta häviämme jonkin verran kauppoja kilpailijoille" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme ovat kiinnostavia, mutta kauppa käy kuitenkin harvoin" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme kiinnostus on laimeaa ja kaupankäynti hiljaista" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tuotteemme ja palvelumme asiakaskiinnostus on erittäin huono" }
                            }}
                        ]
                    }
                },
                "markkinaAsiakasmalli": {
                    "asiakasryhmat": [
                        {
                            "asiakasryhma": { type: String, default: "Ryhmän nimi" },
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
                        "kuvaus": { type: String, default: "Mikä on lupauksemme tuotteesta/palvelusta ”arvolupaus”, KUVAUS ASIAKKAALLE LUPAAMASTA ARVOSTA, miten ilmenee omassa toiminnassa:" },
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
                                "kuvaus": { type: String, default: "Asiakastyytyväisyyden parantaminen" }
                            }},
                            {
                                "4": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Etuoikeus tai yksinoikeus" }
                            }},
                            {
                                "5": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Helppokäyttöinen" }
                            }},
                            {
                                "6": { 
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Joustavuuden lisääminen" }
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
                                "kuvaus": { type: String, default: "Kulujen pienentäminen" }
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
                                "kuvaus": { type: String, default: "Riskin pienentäminen" }
                            }},
                            {
                                "21" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tehokkuuden parantaminen" }
                            }},
                            {
                                "22" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tulojen lisääminen" }
                            }},
                            {
                                "23" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Tunnettuuden lisääminen" }
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
                                "kuvaus": { type: String, default: "Varastojen pienentäminen" }
                            }},
                            {
                                "27" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Viihtyvyyden lisääminen" }
                            }},
                            {
                                "28" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Virheiden vähentäminen" }
                            }},
                            {
                                "29" : {
                                "tila": { type: Boolean, default: false },
                                "kuvaus": { type: String, default: "Ympäristön suojelu" }
                            }}
                        ]
                    },
                    "tarkoituksenmukaisuus": {
                        "kuvaus": { type: String, default: "Miten asiakassegmenteille tarjottujen tuotteiden/palveluiden tarkoituksen mukaisuus varmistetaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakassuhteet": {
                        "kuvaus": { type: String, default: "Kuinka asiakassuhteita ylläpidetään, kuvaus asiakas-/myyntisuhteesta, kuka, miten, tavoitteet" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakkaanOdotuksetMotiivit": {
                        "kuvaus": { type: String, default: "Miten hyvin asiakkaan odotukset tunnetaan ja mitkä ovat ostomotiivit?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakaskokemus": {
                        "kuvaus": { type: String, default: "Miten varmistetaan hyvä asiakaskokemus eri kohtaamisissa/tilanteissa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakastoimitus": {
                        "kuvaus": { type: String, default: "Milloin toimitus on valmis, kuka sen toteaa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tulovirrat": {
                        "kuvaus": { type: String, default: "Kuinka ja mistä tulovirrat syntyvät, mistä asiakasryhmästä ja minkä verran?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kilpailijatilaukset": {
                        "kuvaus": { type: String, default: "Mitä asiakkaat tilaavat muilta kilpailijoilta, miksi" },
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
                        "kuvaus": { type: String, default: "Onko asiakkaan helppo tehdä ostopäätös ja tietääkö hän mitä tilaa, mistä tiedätte?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakkaanNakemys": {
                        "kuvaus": { type: String, default: "Miten asiakas näkee teidät (imago, brändi, laatu, luotettavuus, hintataso)?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakastyytyvaisyys": {
                        "kuvaus": { type: String, default: "Kuinka seuraatte asiakkaiden tyytyväisyyttä toimintaanne?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "sitouttaminen": {
                        "kuvaus": { type: String, default: "Kuinka sitoutatte asiakkaan pidempiaikaiseen yhteistyösuhteeseen?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "ansaintamallinSitouttavuus": {
                        "kuvaus": { type: String, default: "Miten hyvin ansaintamallinne sitouttaa asiakkaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "viimeisinKehitys": {
                        "kuvaus": { type: String, default: "Milloin olette viimeksi käyneet asiakassegmentit läpi / uudistaneet ansaintamallit / kehittäneet uusia tuotteita/palveluja / kehittäneet uusia toimintatapoja?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                }
            },
            "tuotantoPalvelumalli": {
                "ydinkyvykkyydet": {
                    "kuvaus": { type: String, default: "Mitkä ovat yrityksenne Ydinkyvykkyydet, kuvaus kyvykkyydestä: { type: String, default: " },
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
                            "kuvaus": { type: String, default: "Menetelmäosaaminen" }
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
                            "kuvaus": { type: String, default: "Toimialaympäristön kehittämiskyky" }
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
                            "kuvaus": { type: String, default: "Elämystuotanto ja kulttuuri" }
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
                            "kuvaus": { type: String, default: "Välitys ja kaupanvahvistus" }
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
                            "kuvaus": { type: String, default: "Viestintä" }
                        }},
                        {
                            "33" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Vuokraaminen" }
                        }},
                        {
                            "34" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Ylläpito ja tarkkailu" }
                        }}
                    ]
                },
                "toimittajaryhmat": {
                    "kuvaus": { type: String, default: "Toimittajaryhmät (ydintoimittajien ylivertaisuudet)" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "yhteistyökumppanit": {
                    "kuvaus": { type: String, default: "Yhteistyökumppanit" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "verkostotAllianssit": {
                    "kuvaus": { type: String, default: "Verkostot / Allianssit" },
                    "kommentti": { type: String, default: "Sanallinen kuvailu" }
                },
                "kustannustekijat": {
                    "kuvaus": { type: String, default: "Kustannustekijät" },
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
                            "kuvaus": { type: String, default: "Hävityskustannus" }
                        }},
                        {
                            "4": { 
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Henkilöstöinvestointi" }
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
                            "kuvaus": { type: String, default: "Jälkimarkkinakustannus" }
                        }},
                        {
                            "8" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Järjestelmäkustannus" }
                        }},
                        {
                            "9" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kierrätyskustannus" }
                        }},
                        {
                            "10" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Kiinteistö- ja laiteinvestointi" }
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
                            "kuvaus": { type: String, default: "Pääomakustannus" }
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
                            "kuvaus": { type: String, default: "Rojalti, komissio tai välityskustannus" }
                        }},
                        {
                            "24" : {
                            "tila": { type: Boolean, default: false },
                            "kuvaus": { type: String, default: "Siivous- ja järjestyskustannus" }
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
                            "kuvaus": { type: String, default: "Yöpymiskustannus" }
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
                    "kuvaus": { type: String, default: "Johtamisprosessi kuvaa yrityksen johtamisjärjestelmää" },
                    "nykytilanne": { type: String, default: "Tämänhetkinen johtamisprosessi ja johtaminen yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "taloushallinto": {
                    "kuvaus": { type: String, default: "Taloushallinto" },
                    "nykytilanne": { type: String, default: "Tämänhetkinen taloushallintoprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "henkilostohallinto": {
                    "kuvaus": { type: String, default: "Henkilöstöhallinto" },
                    "nykytilanne": { type: String, default: "Tämänhetkinen henkilöstöhallintoprosessi ja sen vaikutukset yrityksen toiminnassa" },
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
                    "kuvaus": { type: String, default: "Tietämyksenhallinta" },
                    "nykytilanne": { type: String, default: "Tietämyksenhallintaprosessin keskeiset vaiheet" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "vienti": {
                    "kuvaus": { type: String, default: "Vientiprosessi" },
                    "nykytilanne": { type: String, default: "Millaista kansainvälistä kauppaa yritys käy ja miten vienti on yrityksessänne toteutettu" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "asiakaspalvelu": {
                    "kuvaus": { type: String, default: "Asiakaspalveluprosessi" },
                    "nykytilanne": { type: String, default: "Asiakaspalvelun toteutus yrityksessä ja miten se näyttäytyy asiakkaan silmissä" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "markkinointi": {
                    "kuvaus": { type: String, default: "Markkinointiprosessi" },
                    "nykytilanne": { type: String, default: "Markkinoinnin toteutus yrityksessä ja miten se näkyy ulospäin" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "myynti": {
                    "kuvaus": { type: String, default: "Myyntiprosessi" },
                    "nykytilanne": { type: String, default: "Myynnin toteutus yrityksessä" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "viestinta": {
                    "kuvaus": { type: String, default: "Viestintä" },
                    "nykytilanne": { type: String, default: "Viestinnän toteutus yrityksessä" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "kilpailijatiedonhallinta": {
                    "kuvaus": { type: String, default: "Kilpailijatiedonhallinta" },
                    "nykytilanne": { type: String, default: "Kilpailijatiedonhallinnan toteutus yrityksessä" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "hankinta": {
                    "kuvaus": { type: String, default: "Hankintaprosessi" },
                    "nykytilanne": { type: String, default: "Tämänhetkinen hankintaprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "logistiikka": {
                    "kuvaus": { type: String, default: "Logistiikka" },
                    "nykytilanne": { type: String, default: "Tämänhetkinen logistiikkaprosessi ja sen vaikutukset yrityksen toiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "tuotanto": {
                    "kuvaus": { type: String, default: "Tuotanto" },
                    "nykytilanne": { type: String, default: "Tuotantoprosessin toteutus yrityksessä" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "yllapitoHuolto": {
                    "kuvaus": { type: String, default: "Ylläpito ja huolto" },
                    "nykytilanne": { type: String, default: "Yrityksen vastuulla olevat ylläpidettävät ja huollettavat kohteet ja niiden hoitaminen" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "laadunhallinta": {
                    "kuvaus": { type: String, default: "Laatuprosessi" },
                    "nykytilanne": { type: String, default: "Tämänhetkinen laadunhallintaprosessi ja sen keskeiset vaiheet" },
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
                    "nykytilanne": { type: String, default: "Miten teknologian aus yrityksessä on järjestetty?" },
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
                    "nykytilanne": { type: String, default: "Muotoilun rooli ja hyödyntäminen liiketoiminnassa" },
                    "kehittamistarpeet": { type: String, default: "Sanallinen kuvaus" },
                    "prosessinNykyinenToimivuus": { type: Number, default: 0 },
                    "tavoitetaso3v": { type: Number, default: 0 },
                },
                "prototyyppivalmistus": {
                    "kuvaus": { type: String, default: "Prototyyppien valmistus" },
                    "nykytilanne": { type: String, default: "Miten yrityksen tuotteista tai palveluista tehdään prototyyppimalleja" },
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
                    "kuvaus": { type: String, default: "Yhteistyökumppanien hankinta" },
                    "nykytilanne": { type: String, default: "Yhteistyökumppanien valikoituminen" },
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
                        "kuvaus": { type: String, default: "Miten segmentoidaan asiakkaanne jotta voidaan pitää nykyiset asiakkaat ja saada uusia liiketoiminta-alueita?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "vaatimusvastaavuus": {
                        "kuvaus": { type: String, default: "Vastaako tuotteenne/tarjoamanne tavoittelemienne asiakkaiden vaatimuksia? Mistä on tullut hyvää palautetta ja missä on kehitettävää?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "suurinPotentiaali": {
                        "kuvaus": { type: String, default: "Missä asiakas/tuote -segmenteillä on eniten potentiaalia nykyisten lisäksi? Millaisella konseptilla?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tavoiteasemaProfiili": {
                        "kuvaus": { type: String, default: "Millaiseksi halutaan yrityksenne aseman ja profiilin markkinoilla tavoiteltujen asiakkaiden silmin?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "strategiakehitys": {
                        "kuvaus": { type: String, default: "Miten on tarve kehittää toimintostrategioitanne ja niiden resursoinnin toimivuutta? (Myynti, Tuotekehitys, Toimitukset, Johtaminen)?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tarvittavaUusiOsaaminen": {
                        "kuvaus": { type: String, default: "Mitä uutta osaamista tarvitaan, miksi?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "toiminnanRajaus": {
                        "kuvaus": { type: String, default: "Onko toiminnan rajaus ja fokus ollut riittävä suhteessa käytettyihin resursseihin? Onko ilmennyt kehittämistarpeita?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kumppanuusratkaisut": {
                        "kuvaus": { type: String, default: "Millaisia yhteistyö-/kumppanuusratkaisuja tulee tehdä?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "liikevaihtoKannattavuuskehitys": {
                        "kuvaus": { type: String, default: "Millaiseksi yrityksen liikevaihto ja kannattavuus halutaan kehittää?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "uusiutumisenTurvaaminen": {
                        "kuvaus": { type: String, default: "Miten yrityksen uusiutuminen turvataan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtopäätökset edellisistä" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "toimialanMarkkinakehittyminen": {
                    "kysynnanKehittyminen": {
                        "kuvaus": { type: String, default: "Miten toimialan tuotteiden ja palvelujen kysyntä kehittyy? Missä tullaan olemaan mukana?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tuotePalveluKysyntapainotus": {
                        "kuvaus": { type: String, default: "Mihin tuotteisiin/palveluihin kysyntä painottuu?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakasryhmaKysyntapainotus": {
                        "kuvaus": { type: String, default: "Mihin asiakasryhmiin kysyntä painottuu?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinoidenTavoittaminen": {
                        "kuvaus": { type: String, default: "Miten tavoitetaan asiakkaat/markkinat?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtopäätökset edellisistä" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "asiakaskysynnanKehittyminen": {
                    "asiakasryhmaOstokriteerit": {
                        "kuvaus": { type: String, default: "Mitkä ovat tällä nyt/tulevaisuudessa tärkeimmät ostokriteerit tavoittelemissanne asiakasryhmissä?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "ostokriteereihinVastaaminen": {
                        "kuvaus": { type: String, default: "Kuinka hyvin yrityksenne pystyy vastaamaan tulevaisuudessa asiakkaidenne ostokriteereihin? Millaisia poikkeamia olette havainneet?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "asiakassegmenttiNoste": {
                        "kuvaus": { type: String, default: "Missä asiakassegmenteissä yrityksellänne on parhaat mahdollisuudet saada positiivinen noste myynnille?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "liiketoiminnanKasvattaminen": {
                        "kuvaus": { type: String, default: "Kuinka kasvatetaan liiketoimintaa?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtopäätökset edellisistä" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "kilpailijaseurannanKehittyminen": {
                    "asiakassegmentinKilpailijat": {
                        "kuvaus": { type: String, default: "Ketkä ovat merkittävimmät kilpailijat tällä hetkellä valitsemissanne asiakassegmenteissä?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kilpailijoidenVahvuudet": {
                        "kuvaus": { type: String, default: "Mitkä ovat kilpailijoiden keskeiset vahvuudet ja onnistumistekijät?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "kilpailijoidenHeikkoudet": {
                        "kuvaus": { type: String, default: "Mitkä ovat kilpailijoiden keskeiset heikkoudet ja ongelmat?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinarako": {
                        "kuvaus": { type: String, default: "Mihin kilpailijat ovat jättäneet markkinarakoa yrityksellenne?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "markkinoillePaasy": {
                        "kuvaus": { type: String, default: "Mitä tulisi tehdä jotta markkinoille päästään?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "johtopaatos": {
                        "kuvaus": { type: String, default: "Johtopäätökset edellisistä" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                }
            },
            "strategianLuominen": {
                "yrityksenTahtotila": {
                    "visio": {
                        "kuvaus": { type: String, default: "Visio/Päämäärä vuonna " },
                        "vuosi": { type: Number, default: 2022 },
                    },
                    "visioMarkkinaasema": {
                        "kuvaus": { type: String, default: "Millainen on yrityksenne asema on markkinoilla tuolloin ja mihin vahvuuteenne se perustuu?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioKasvuKannattavuusRiskit": {
                        "kuvaus": { type: String, default: "Haetaanko kasvua vai kannattavuutta ja millaisia riskejä omistajat ovat valmiita ottamaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioHinnoitteluLiikevaihtoVoitto": {
                        "kuvaus": { type: String, default: "Millainen Hinnoittelutaso, Liikevaihtotaso ja Voittotaso seuraavan kolmen (3) vuoden aikana?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioOrganisaatioHenkilostoKumppanit": {
                        "kuvaus": { type: String, default: "Miten yrityksenne on organisoitu, henkilöstön lukumäärä ja tehtävät sekä kumppaniverkoston rakenne?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "visioKilpailuetuIdea": {
                        "kuvaus": { type: String, default: "Mikä on arvoa asiakkaille luova strateginen idea, joka tuo kilpailuetua markkinoilla?" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "visioToteutumisenErottuvuus": {
                    "kuvaus": { type: String, default: "Jos visiomme toteutuu, miten olemme erilaisia" },
                    "saavuttamisenKriittisetTekijat": {
                        "kuvaus": { type: String, default: "Mitkä ovat vision saavuttamisen kriittiset menestystekijät?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehittämis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkilöstön mielestä" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "menestystekijoidenToteuttaminen": {
                        "kuvaus": { type: String, default: "Mitä toimenpiteitä aiomme tehdä jotta menestystekijät toteutuvat?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehittämis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkilöstön mielestä" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "mittaritToivearvot": {
                        "kuvaus": { type: String, default: "Mitkä ovat niiden tärkeimmät mittarit ja toivearvot?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehittämis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkilöstön mielestä" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "toimintasuunnitelmanPainopisteet": {
                        "kuvaus": { type: String, default: "Mitkä toimenpiteet otetaan keskeisiksi painopisteiksi toimintasuunnitelmaan?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehittämis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkilöstön mielestä" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "mittari": {
                        "kuvaus": { type: String, default: "Mikä toimii mittarina?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehittämis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkilöstön mielestä" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    },
                    "vastaaja": {
                        "kuvaus": { type: String, default: "Kuka vastaa?" },
                        "asiakasnakokulma": { type: String, default: "Asiakkaiden kannalta" },
                        "kehittamisnakokulma": { type: String, default: "Kehittämis- ja uudistumiskyky" },
                        "henkilostonakokulma": { type: String, default: "Henkilöstön mielestä" },
                        "tilaustoimitusketju": { type: String, default: "Prosesseissa" },
                        "talousnakokulma": { type: String, default: "Taloudellisesti" }
                    }
                },
                "strategia": {
                    "kilpailustrategia": {
                        "kuvaus": { type: String, default: "Kilpailustrategia, jolla 20XX päämäärät saavutetaan?" },
                        "vuosi": { type: Number, default: 2022 },
                    },
                    "tuoteryhmaLiikevaihtoosuus": {
                        "kuvaus": { type: String, default: "Mitkä ovat tärkeimmät tuoteryhmänne ja niiden osuus liikevaihdosta?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuoteryhmaMuutos": {
                        "kuvaus": { type: String, default: "Millaisia muutoksia tuoteryhmiinne tarvitaan suhteessa nykytilaan?" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakasryhmaLiikevaihtoosuus": {
                        "kuvaus": { type: String, default: "Ketkä ovat tärkeimmät asiakasryhmänne ja niiden osuus liikevaihdosta?" },
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
                        "kuvaus": { type: String, default: "Millaisia toimenpiteitä ja linjauksia edellä mainitut muutokset edellyttävät?" },
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
                    "kuvaus": { type: String, default: "Keskeiset tavoitteet päätoiminnottain" },
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
                        "kuvaus": { type: String, default: "Henkilöstö ja verkosto" },
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
                    "kuvaus": { type: String, default: "Johtoryhmän kokous" },
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
                    "kuvaus": { type: String, default: "Tilinpäätös" },
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
                "kuvaus": { type: String, default: "Lisäyksiä ja ajatuksia" },
                "henkilosto": { type: String, default: "Henkilöstö (osaaminen, johtaminen)" },
                "mittarit": { type: String, default: "Mittarit" },
                "asiakasnakokulma": {
                    "kuvaus": { type: String, default: "Asiakasnäkökulma" },
                    "asiakasmaara": {
                        "kuvaus": { type: String, default: "Asiakkaiden määrä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "markkinaosuus": {
                        "kuvaus": { type: String, default: "Markkinaosuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "segmenttiMarkkinaosuus": {
                        "kuvaus": { type: String, default: "Markkinaosuus tietyssä segmentissä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "liikevaihtoAsiakas": {
                        "kuvaus": { type: String, default: "Lv/asiakas" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "menetetysAsiakkaat": {
                        "kuvaus": { type: String, default: "Menetettyjen asiakkaiden määrä tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakassuhdeaika": {
                        "kuvaus": { type: String, default: "Asiakassuhteisiin käytetty aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuloskontaktit": {
                        "kuvaus": { type: String, default: "Tulosta tuottaneiden kontaktien osuus kaikista asiakaskontakteista" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakastyytyvaisyys": {
                        "kuvaus": { type: String, default: "Asiakastyytyväisyysindeksi" },
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
                        "kuvaus": { type: String, default: "Asiakaskäyntien määrä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "asiakaskayntiaika": {
                        "kuvaus": { type: String, default: "Asiakaskäynteihin kulunut aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "reklamaatiot": {
                        "kuvaus": { type: String, default: "Reklamaatioiden määrä tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "markkinointikustannukset": {
                        "kuvaus": { type: String, default: "Markkinointikustannuksien määrä tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tavaramerkkiindeksi": {
                        "kuvaus": { type: String, default: "Tavaramerkki-indeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "sisaisetatkasiakkaat": {
                        "kuvaus": { type: String, default: "Sisäiset atk-asiakkaat" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "ulkopuolisetatkasiakkaat": {
                        "kuvaus": { type: String, default: "Ulkopuoliset atk-asiakkaat" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "sopimuksetAtktyontekija": {
                        "kuvaus": { type: String, default: "Sopimukset/atk-työntekijä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "atkvalmiusmuutos": {
                        "kuvaus": { type: String, default: "Yrityksen atk-valmiuksien muutos" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "kehitysnakokulma": {
                    "kuvaus": { type: String, default: "Kehittämisen näkökulma" },
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
                        "kuvaus": { type: String, default: "Tutkimukseen ja tuotekehitykseen käytetty aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "tkVaratOmaisuus": {
                        "kuvaus": { type: String, default: "Tutkimukseen ja tuotekehitykseen käytetyt varat/koko omaisuus" },
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
                        "kuvaus": { type: String, default: " Uusien tuotteiden koulutukseen ja tukemiseen käytetyt investoinnit" },
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
                        "kuvaus": { type: String, default: "Patentin keskimääräinen ikä" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "koulutuskustannuksetHenkilo": {
                        "kuvaus": { type: String, default: "Koulutuskustannukset/henkilö" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    },
                    "parannusehdotuksetHenkilo": {
                        "kuvaus": { type: String, default: "Parannusehdotukset/henkilö" },
                        "kommentti": { type: String, default: "Sanallinen kuvailu" }
                    }
                },
                "henkilostonakokulma": {
                    "kuvaus": { type: String, default: "Henkilöstönäkökulma" },
                    "johtajuusindeksi": {
                        "kuvaus": { type: String, default: "Johtajuusindeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "motivaatioindeksi": {
                        "kuvaus": { type: String, default: "Motivaatioindeksi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "henkilostomaara": {
                        "kuvaus": { type: String, default: "Henkilöstön määrä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "henkilostonVaihtuvuus": {
                        "kuvaus": { type: String, default: "Henkilöstön vaihtuvuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "keskimaarainenVirkaika": {
                        "kuvaus": { type: String, default: "Keskimääräinen virkaikä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "henkilostonKeskiika": {
                        "kuvaus": { type: String, default: "Henkilöstön keski-ikä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "koulutuspaivatHenkiloVuosi": {
                        "kuvaus": { type: String, default: "Sisäiset koulutuspäivät/henkilö/vuosi" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tilapaisetVakinaiset": {
                        "kuvaus": { type: String, default: "Tilapäiset/vakinaiset työntekijät" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "akateemisetOsuus": {
                        "kuvaus": { type: String, default: "Akateemisesti koulutettujen osuus henkilökunnasta" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "poissaolot": {
                        "kuvaus": { type: String, default: "Keskimääräiset poissaolot" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "naisesimiehet": {
                        "kuvaus": { type: String, default: "Naispuolisten esimiesten määrä tai %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tyohakemukset": {
                        "kuvaus": { type: String, default: "Yritykseen tulleiden hakemusten määrä" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "sisaisenTehokkuudenNakokulma": {
                    "kuvaus": { type: String, default: "Sisäisen tehokkuuden näkökulma" },
                    "hallinnollisetKokonais": {
                        "kuvaus": { type: String, default: "Hallinnolliset kustannukset/kokonaiskustannukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "laskujenKasittelyaika": {
                        "kuvaus": { type: String, default: "Laskujen käsittelyaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "toimitustenTasmallisyys": {
                        "kuvaus": { type: String, default: "Toimitusten täsmällisyys" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "keskimLapimenoaika": {
                        "kuvaus": { type: String, default: "Keskimääräinen läpimenoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tkLapimenoaika": {
                        "kuvaus": { type: String, default: "Tuotekehityksen läpimenoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tilausToimitusAika": {
                        "kuvaus": { type: String, default: "Tilauksen ja toimituksen välinen aika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "hankkijoidenToimitusaika": {
                        "kuvaus": { type: String, default: "Hankkijoiden toimitusaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuotannonLapimenoaika": {
                        "kuvaus": { type: String, default: "Tuotannon läpimenoaika" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "keskimPaatoksentekoaika": {
                        "kuvaus": { type: String, default: "Keskimääräinen päätöksentekoaika" },
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
                        "kuvaus": { type: String, default: "Atk-kapasiteetti/henkilö" },
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
                        "kuvaus": { type: String, default: "Tuotannon ympäristöpäästöt" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "tuoteYmparistovaikutukset": {
                        "kuvaus": { type: String, default: "Tuotteiden käytön ympäristövaikutukset" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    }
                },
                "taloudennakokulma": {
                    "kuvaus": { type: String, default: "Talouden näkökulma" },
                    "omaisuus": {
                        "kuvaus": { type: String, default: "Koko omaisuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "omaisuusHenkilo": {
                        "kuvaus": { type: String, default: "Koko omaisuus/henkilö" },
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
                        "kuvaus": { type: String, default: "Myyntituotot/henkilö" },
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
                        "kuvaus": { type: String, default: "Voitto/henkilö" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "markkinaarvo": {
                        "kuvaus": { type: String, default: "Markkina-arvo (verotusarvo)" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "nettokayttopaaomaOsuus": {
                        "kuvaus": { type: String, default: "Nettokäyttöpääoman %-osuus" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "jalostusarvoHenkilo": {
                        "kuvaus": { type: String, default: "Jalostusarvo/henkilö" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "paaomanTuottoaste": {
                        "kuvaus": { type: String, default: "Koko pääoman tuottoaste" },
                        "kommentti": { type: String, default: "Sanallinen kuvaus" }
                    },
                    "sijoitetunTuottoaste": {
                        "kuvaus": { type: String, default: "Sijoitetun pääoman tuottoaste" },
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
                        "kuvaus": { type: String, default: "Katetuotto/henkilö" },
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