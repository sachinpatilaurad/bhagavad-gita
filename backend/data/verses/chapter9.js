const chapter9Verses = [
  {
    chapterNumber: 9,
    verseNumber: 1,
    textSanskrit: "श्री भगवानुवाच\nइदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे।\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्।।9.1।।",
    transliteration: "śhrī bhagavān uvācha\nidaṁ tu te guhyatamaṁ pravakṣhyāmyanasūyave\njñānaṁ vijñāna-sahitaṁ yaj jñātvā mokṣhyase ’śhubhāt"
  },
  {
    chapterNumber: 9,
    verseNumber: 2,
    textSanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्।\nप्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्।।9.2।।",
    transliteration: "rāja-vidyā rāja-guhyaṁ pavitram idam uttamam\npratyakṣhāvagamaṁ dharmyaṁ su-sukhaṁ kartum avyayam"
  },
  {
    chapterNumber: 9,
    verseNumber: 3,
    textSanskrit: "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप।\nअप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि।।9.3।।",
    transliteration: "aśhraddadhānāḥ puruṣhā dharmasyāsya parantapa\naprāpya māṁ nivartante mṛityu-samsāra-vartmani"
  },
  {
    chapterNumber: 9,
    verseNumber: 4,
    textSanskrit: "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना।\nमत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः।।9.4।।",
    transliteration: "mayā tatam idaṁ sarvaṁ jagad avyakta-mūrtinā\nmat-sthāni sarva-bhūtāni na chāhaṁ teṣhvavasthitaḥ"
  },
  {
    chapterNumber: 9,
    verseNumber: 5,
    textSanskrit: "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम्।\nभूतभृन्न च भूतस्थो ममात्मा भूतभावनः।।9.5।।",
    transliteration: "na cha mat-sthāni bhūtāni paśhya me yogam aiśhwaram\nbhūta-bhṛin na cha bhūta-stho mamātmā bhūta-bhāvanaḥ"
  },
  {
    chapterNumber: 9,
    verseNumber: 6,
    textSanskrit: "यथाऽऽकाशस्थितो नित्यं वायुः सर्वत्रगो महान्।\nतथा सर्वाणि भूतानि मत्स्थानीत्युपधारय।।9.6।।",
    transliteration: "yathākāśha-sthito nityaṁ vāyuḥ sarvatra-go mahān\ntathā sarvāṇi bhūtāni mat-sthānītyupadhāraya"
  },
  {
    chapterNumber: 9,
    verseNumber: 7,
    textSanskrit: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्।\nकल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम्।।9.7।।",
    transliteration: "sarva-bhūtāni kaunteya prakṛitiṁ yānti māmikām\nkalpa-kṣhaye punas tāni kalpādau visṛijāmyaham"
  },
  {
    chapterNumber: 9,
    verseNumber: 8,
    textSanskrit: "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः।\nभूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात्।।9.8।।",
    transliteration: "prakṛitiṁ svām avaṣhṭabhya visṛijāmi punaḥ punaḥ\nbhūta-grāmam imaṁ kṛitsnam avaśhaṁ prakṛiter vaśhāt"
  },
  {
    chapterNumber: 9,
    verseNumber: 9,
    textSanskrit: "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय।\nउदासीनवदासीनमसक्तं तेषु कर्मसु।।9.9।।",
    transliteration: "na cha māṁ tāni karmāṇi nibadhnanti dhanañjaya\nudāsīna-vad āsīnam asaktaṁ teṣhu karmasu"
  },
  {
    chapterNumber: 9,
    verseNumber: 10,
    textSanskrit: "मयाऽध्यक्षेण प्रकृतिः सूयते सचराचरम्।\nहेतुनाऽनेन कौन्तेय जगद्विपरिवर्तते।।9.10।।",
    transliteration: "mayādhyakṣheṇa prakṛitiḥ sūyate sa-charācharam\nhetunānena kaunteya jagad viparivartate"
  },
  {
    chapterNumber: 9,
    verseNumber: 11,
    textSanskrit: "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम्।\nपरं भावमजानन्तो मम भूतमहेश्वरम्।।9.11।।",
    transliteration: "avajānanti māṁ mūḍhā mānuṣhīṁ tanum āśhritam\nparaṁ bhāvam ajānanto mama bhūta-maheśhvaram"
  },
  {
    chapterNumber: 9,
    verseNumber: 12,
    textSanskrit: "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः।\nराक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः।।9.12।।",
    transliteration: "moghāśhā mogha-karmāṇo mogha-jñānā vichetasaḥ\nrākṣhasīm āsurīṁ chaiva prakṛitiṁ mohinīṁ śhritāḥ"
  },
  {
    chapterNumber: 9,
    verseNumber: 13,
    textSanskrit: "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः।\nभजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम्।।9.13।।",
    transliteration: "mahātmānas tu māṁ pārtha daivīṁ prakṛitim āśhritāḥ\nbhajantyananya-manaso jñātvā bhūtādim avyayam"
  },
  {
    chapterNumber: 9,
    verseNumber: 14,
    textSanskrit: "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः।\nनमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते।।9.14।।",
    transliteration: "satataṁ kīrtayanto māṁ yatantaśh cha dṛiḍha-vratāḥ\nnamasyantaśh cha māṁ bhaktyā nitya-yuktā upāsate"
  },
  {
    chapterNumber: 9,
    verseNumber: 15,
    textSanskrit: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते।\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्।।9.15।।",
    transliteration: "jñāna-yajñena chāpyanye yajanto mām upāsate\nekatvena pṛithaktvena bahudhā viśhvato-mukham"
  },
  {
    chapterNumber: 9,
    verseNumber: 16,
    textSanskrit: "अहं क्रतुरहं यज्ञः स्वधाऽहमहमौषधम्।\nमंत्रोऽहमहमेवाज्यमहमग्निरहं हुतम्।।9.16।।",
    transliteration: "ahaṁ kratur ahaṁ yajñaḥ svadhāham aham auṣhadham\nmantro ’ham aham evājyam aham agnir ahaṁ hutam"
  },
  {
    chapterNumber: 9,
    verseNumber: 17,
    textSanskrit: "पिताऽहमस्य जगतो माता धाता पितामहः।\nवेद्यं पवित्रमोंकार ऋक् साम यजुरेव च।।9.17।।",
    transliteration: "pitāham asya jagato mātā dhātā pitāmahaḥ\nvedyaṁ pavitram oṁkāra ṛik sāma yajur eva cha"
  },
  {
    chapterNumber: 9,
    verseNumber: 18,
    textSanskrit: "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत्।\nप्रभवः प्रलयः स्थानं निधानं बीजमव्ययम्।।9.18।।",
    transliteration: "gatir bhartā prabhuḥ sākṣhī nivāsaḥ śharaṇaṁ suhṛit\nprabhavaḥ pralayaḥ sthānaṁ nidhānaṁ bījam avyayam"
  },
  {
    chapterNumber: 9,
    verseNumber: 19,
    textSanskrit: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च।\nअमृतं चैव मृत्युश्च सदसच्चाहमर्जुन।।9.19।।",
    transliteration: "tapāmyaham ahaṁ varṣhaṁ nigṛihṇāmyutsṛijāmi cha\namṛitaṁ chaiva mṛityuśh cha sad asach chāham arjuna"
  },
  {
    chapterNumber: 9,
    verseNumber: 20,
    textSanskrit: "त्रैविद्या मां सोमपाः पूतपापा\nयज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते।\nते पुण्यमासाद्य सुरेन्द्रलोक\nमश्नन्ति दिव्यान्दिवि देवभोगान्।।9.20।।",
    transliteration: "trai-vidyā māṁ soma-pāḥ pūta-pāpā\nyajñair iṣhṭvā svar-gatiṁ prārthayante\nte puṇyam āsādya surendra-lokam\naśhnanti divyān divi deva-bhogān"
  },
  {
    chapterNumber: 9,
    verseNumber: 21,
    textSanskrit: "ते तं भुक्त्वा स्वर्गलोकं विशालं\nक्षीणे पुण्ये मर्त्यलोकं विशन्ति।\nएव त्रयीधर्ममनुप्रपन्ना\nगतागतं कामकामा लभन्ते।।9.21।।",
    transliteration: "te taṁ bhuktvā swarga-lokaṁ viśhālaṁ\nkṣhīṇe puṇye martya-lokaṁ viśhanti\nevaṁ trayī-dharmam anuprapannā\ngatāgataṁ kāma-kāmā labhante"
  },
  {
    chapterNumber: 9,
    verseNumber: 22,
    textSanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।9.22।।",
    transliteration: "ananyāśh chintayanto māṁ ye janāḥ paryupāsate\nteṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham"
  },
  {
    chapterNumber: 9,
    verseNumber: 23,
    textSanskrit: "येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयाऽन्विताः।\nतेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम्।।9.23।।",
    transliteration: "ye ’pyanya-devatā-bhaktā yajante śhraddhayānvitāḥ\nte ’pi mām eva kaunteya yajantyavidhi-pūrvakam"
  },
  {
    chapterNumber: 9,
    verseNumber: 24,
    textSanskrit: "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च।\nन तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते।।9.24।।",
    transliteration: "ahaṁ hi sarva-yajñānāṁ bhoktā cha prabhureva cha\nna tu mām abhijānanti tattvenātaśh chyavanti te"
  },
  {
    chapterNumber: 9,
    verseNumber: 25,
    textSanskrit: "यान्ति देवव्रता देवान् पितृ़न्यान्ति पितृव्रताः।\nभूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम्।।9.25।।",
    transliteration: "yānti deva-vratā devān pitṝīn yānti pitṛi-vratāḥ\nbhūtāni yānti bhūtejyā yānti mad-yājino ’pi mām"
  },
  {
    chapterNumber: 9,
    verseNumber: 26,
    textSanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः।।9.26।।",
    transliteration: "patraṁ puṣhpam phalaṁ toyaṁ yo me bhaktyā prayachchhati\ntadahaṁ bhaktyupahṛitam aśhnāmi prayatātmanaḥ"
  },
  {
    chapterNumber: 9,
    verseNumber: 27,
    textSanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।\nयत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्।।9.27।।",
    transliteration: "yat karoṣhi yad aśhnāsi yaj juhoṣhi dadāsi yat\nyat tapasyasi kaunteya tat kuruṣhva mad-arpaṇam"
  },
  {
    chapterNumber: 9,
    verseNumber: 28,
    textSanskrit: "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः।\nसंन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि।।9.28।।",
    transliteration: "śhubhāśhubha-phalair evaṁ mokṣhyase karma-bandhanaiḥ\nsannyāsa-yoga-yuktātmā vimukto mām upaiṣhyasi"
  },
  {
    chapterNumber: 9,
    verseNumber: 29,
    textSanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।\nये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्।।9.29।।",
    transliteration: "samo ’haṁ sarva-bhūteṣhu na me dveṣhyo ’sti na priyaḥ\nye bhajanti tu māṁ bhaktyā mayi te teṣhu chāpyaham"
  },
  {
    chapterNumber: 9,
    verseNumber: 30,
    textSanskrit: "अपि चेत्सुदुराचारो भजते मामनन्यभाक्।\nसाधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः।।9.30।।",
    transliteration: "api chet su-durāchāro bhajate mām ananya-bhāk\nsādhur eva sa mantavyaḥ samyag vyavasito hi saḥ"
  },
  {
    chapterNumber: 9,
    verseNumber: 31,
    textSanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति।\nकौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति।।9.31।।",
    transliteration: "kṣhipraṁ bhavati dharmātmā śhaśhvach-chhāntiṁ nigachchhati\nkaunteya pratijānīhi na me bhaktaḥ praṇaśhyati"
  },
  {
    chapterNumber: 9,
    verseNumber: 32,
    textSanskrit: "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः।\nस्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम्।।9.32।।",
    transliteration: "māṁ hi pārtha vyapāśhritya ye ’pi syuḥ pāpa-yonayaḥ\nstriyo vaiśhyās tathā śhūdrās te ’pi yānti parāṁ gatim"
  },
  {
    chapterNumber: 9,
    verseNumber: 33,
    textSanskrit: "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा।\nअनित्यमसुखं लोकमिमं प्राप्य भजस्व माम्।।9.33।।",
    transliteration: "kiṁ punar brāhmaṇāḥ puṇyā bhaktā rājarṣhayas tathā\nanityam asukhaṁ lokam imaṁ prāpya bhajasva mām"
  },
  {
    chapterNumber: 9,
    verseNumber: 34,
    textSanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः।।9.34।।",
    transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru\nmām evaiṣhyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ"
  }
];

export default chapter9Verses;