// ─── LANGUAGE / TRANSLATION ───
let currentLang = 'en';
let _savedBodyHTML = null;

const langLabels = { en: 'English', te: 'తెలుగు' };

const translations = {
  en: {},
  te: {
    'Home': 'హోమ్',
    'About': 'గురించి',
    'About Us': 'మా గురించి',
    'Gallery': 'గ్యాలరీ',
    'Old Age Home': 'వృద్ధాశ్రమం',
    'Join Us': 'మాతో చేరండి',
    'Contact': 'సంప్రదించండి',
    'Donate Now': 'దానం చేయండి',
    'Donate': 'దానం',
    'Our NGO': 'మా NGO',
    'Prajwala Community Development Society': 'ప్రజ్వల కమ్యూనిటీ డెవలప్‌మెంట్ సొసైటీ',
    'We Serve People': 'మేము ప్రజలకు సేవ చేస్తాము',
    'We Build Nature & Culture': 'మేము ప్రకృతి & సంస్కృతిని నిర్మిస్తాము',
    'We Serve People, We Build Nature & Culture': 'మేము ప్రజలకు సేవ చేస్తాము, ప్రకృతి & సంస్కృతిని నిర్మిస్తాము',
    'We serve people, we build nature & culture': 'మేము ప్రజలకు సేవ చేస్తాము, ప్రకృతి & సంస్కృతిని నిర్మిస్తాము',
    'Working together to create sustainable change through education, healthcare, and community development.': 'విద్య, ఆరోగ్య సంరక్షణ మరియు సమాజ అభివృద్ధి ద్వారా స్థిరమైన మార్పును సృష్టించడానికి కలిసి పనిచేస్తున్నాము.',
    'Become a Volunteer': 'స్వచ్ఛంద సేవకుడిగా చేరండి',
    'Education for Every Child': 'ప్రతి పిల్లలకు విద్య',
    'Breaking the cycle of poverty through quality education and mentorship programs.': 'నాణ్యమైన విద్య మరియు మెంటర్షిప్ కార్యక్రమాల ద్వారా పేదరికం యొక్క చక్రాన్ని విచ్ఛిన్నం చేయడం.',
    'Healthcare for All': 'అందరికీ ఆరోగ్య సంరక్షణ',
    'Providing accessible medical services to underserved communities across India.': 'భారతదేశంలోని వెనుకబడిన సమాజాలకు అందుబాటులో ఉండే వైద్య సేవలను అందించడం.',
    'Together We Can': 'కలిసి మనం చేయగలం',
    'Join our mission to create a sustainable and equitable future for all communities.': 'అన్ని సమాజాలకు స్థిరమైన మరియు సమానమైన భవిష్యత్తును సృష్టించే మా మిషన్లో చేరండి.',
    'Our Mission': 'మా లక్ష్యం',
    'Our Vision': 'మా దృష్టి',
    'Our Values': 'మా విలువలు',
    'Our Journey': 'మా ప్రయాణం',
    'Get In Touch': 'సంప్రదించండి',
    'Send us a Message': 'మాకు సందేశం పంపండి',
    'Submit Application': 'దరఖాస్తు సమర్పించండి',
    'Subscribe': 'సబ్స్క్రయిబ్ చేయండి',
    'Quick Links': 'త్వరిత లింకులు',
    'Our Programs': 'మా కార్యక్రమాలు',
    'Newsletter': 'వార్తాలేఖ',
    'All rights reserved.': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    'Privacy Policy': 'గోప్యతా విధానం',
    'Terms of Service': 'సేవా నిబంధనలు',
    'Associated With': 'అనుబంధం',
    'Lives Touched': 'స్పర్శించిన జీవితాలు',
    'Funds Raised': 'సేకరించిన నిధులు',
    'Volunteers': 'స్వచ్ఛంద సేవకులు',
    'Events Hosted': 'నిర్వహించిన కార్యక్రమాలు',
    'Join as a Volunteer': 'స్వచ్ఛంద సేవకుడిగా చేరండి',
    'Why Volunteer With Us?': 'మాతో ఎందుకు స్వచ్ఛందంగా పనిచేయాలి?',
    'Make Real Impact': 'నిజమైన ప్రభావాన్ని చూపండి',
    'Build Networks': 'నెట్‌వర్క్‌లను నిర్మించండి',
    'Develop Skills': 'నైపుణ్యాలను అభివృద్ధి చేయండి',
    'Recognition': 'గుర్తింపు',
    'Contact Information': 'సంప్రదింపు సమాచారం',
    'Office Address': 'కార్యాలయ చిరునామా',
    'Phone & Email': 'ఫోన్ & ఇమెయిల్',
    'Office Hours': 'కార్యాలయ సమయాలు',
    'Our Gallery': 'మా గ్యాలరీ',
    'Our Teams': 'మా బృందాలు',
    'Shanti Vrudhashramam': 'శాంతి వృద్ధాశ్రమం',
    'Total Residents': 'మొత్తం నివాసితులు',
    'Present Today': 'ఈ రోజు హాజరు',
    'Under Medical Care': 'వైద్య సంరక్షణలో',
    'Residents': 'నివాసితులు',
    'Attendance': 'హాజరు',
    'Medical Reports': 'వైద్య నివేదికలు',
    'Menu': 'మెనూ',
    'Add Resident': 'నివాసితిని జోడించండి',
    'Name': 'పేరు',
    'Age': 'వయస్సు',
    'Gender': 'లింగం',
    'Joined': 'చేరిన తేదీ',
    'Health Status': 'ఆరోగ్య స్థితి',
    'Contact': 'సంప్రదించండి',
    'Present': 'హాజరు',
    'Absent': 'గైర్హాజరు',
    'Admin Portal': 'అడ్మిన్ పోర్టల్',
    'Logout Admin': 'అడ్మిన్ నుండి నిష్క్రమించండి',
    'Admin Login': 'అడ్మిన్ లాగిన్',
    'Login': 'లాగిన్',
    'Incorrect password': 'తప్పు పాస్‌వర్డ్',
    'Prajwala Community': 'ప్రజ్వల కమ్యూనిటీ',
    'Development Society': 'డెవలప్‌మెంట్ సొసైటీ',
    'Sunday': 'ఆదివారం', 'Monday': 'సోమవారం', 'Tuesday': 'మంగళవారం',
    'Wednesday': 'బుధవారం', 'Thursday': 'గురువారం', 'Friday': 'శుక్రవారం', 'Saturday': 'శనివారం',
    'Breakfast:': 'ఉదయం:', 'Lunch:': 'మధ్యాహ్నం:', 'Snacks:': 'చిరుతిండి:', 'Dinner:': 'రాత్రి:',
    'Actions': 'చర్యలు', 'Add Donor': 'దాతను జోడించండి', 'Add Image': 'చిత్రాన్ని జోడించండి',
    'Add Medical Report': 'వైద్య నివేదికను జోడించండి', 'Any amount you choose': 'మీరు ఎంచుకున్న ఏ మొత్తం అయినా',
    'Area of Interest': 'ఆసక్తి ఉన్న రంగం', 'Attendance Data': 'హాజరు డేటా',
    'Back to Gallery': 'గ్యాలరీకి తిరిగి వెళ్ళు', 'Back to Teams': 'బృందాలకు తిరిగి వెళ్ళు',
    'Be part of our mission. Volunteer, donate, or partner with us to create lasting change.': 'మా మిషన్లో భాగం అవ్వండి. స్వచ్ఛందంగా పనిచేయండి, దానం చేయండి, లేదా శాశ్వత మార్పు కోసం మాతో భాగస్వామి అవ్వండి.',
    'Brand Ambassador of Volunteering': 'స్వచ్ఛంద సేవకు బ్రాండ్ అంబాసిడర్',
    'Centers': 'కేంద్రాలు', 'Cleanliness drives': 'పరిశుభ్రత డ్రైవ్లు',
    'Clinics': 'క్లినిక్లు', 'Community Development': 'సమాజ అభివృద్ధి',
    'Connect with like-minded individuals and build lasting friendships.': 'సమాన ఆలోచనలు ఉన్న వ్యక్తులతో కనెక్ట్ అవ్వండి మరియు శాశ్వత స్నేహాలను నిర్మించండి.',
    'Contact No': 'సంప్రదింపు నంబర్',
    'Creating lasting change in rural India since 2016.': '2016 నుండి గ్రామీణ భారతదేశంలో శాశ్వత మార్పును సృష్టిస్తోంది.',
    'Credit / Debit Card': 'క్రెడిట్ / డెబిట్ కార్డ్', 'Custom': 'అనుకూల',
    'Delete Folder': 'ఫోల్డర్ తొలగించండి', 'Designs': 'డిజైన్లు',
    'Digital Media': 'డిజిటల్ మీడియా', 'Distributions': 'పంపిణీలు',
    'Donation Details': 'విరాళం వివరాలు', 'Donation Amount (₹) *': 'విరాళం మొత్తం (₹) *',
    'Donors': 'దాతలు', 'Donors Data': 'దాతల డేటా',
    'Download data as Excel (.xlsx) files for record keeping.': 'రికార్డు కోసం డేటాను ఎక్సెల్ (.xlsx) ఫైల్‌లుగా డౌన్‌లోడ్ చేసుకోండి.',
    'Edit Details': 'వివరాలు సవరించండి', 'Edit Folder': 'ఫోల్డర్ సవరించండి',
    'Edit the weekly menu for each day.': 'ప్రతి రోజు వీక్లీ మెనూ సవరించండి.',
    'Education': 'విద్య', 'Email *': 'ఇమెయిల్ *',
    'Enter admin password': 'అడ్మిన్ పాస్‌వర్డ్ నమోదు చేయండి',
    'Enter admin password to manage Old Age Home': 'వృద్ధాశ్రమాన్ని నిర్వహించడానికి అడ్మిన్ పాస్‌వర్డ్ నమోదు చేయండి',
    'Enter admin password to manage content': 'కంటెంట్ నిర్వహించడానికి అడ్మిన్ పాస్‌వర్డ్ నమోదు చేయండి',
    'Enter admin password to manage gallery': 'గ్యాలరీని నిర్వహించడానికి అడ్మిన్ పాస్‌వర్డ్ నమోదు చేయండి',
    'Enter amount': 'మొత్తం నమోదు చేయండి',
    'Environmental Care': 'పర్యావరణ సంరక్షణ', 'Environmental Sustainability:': 'పర్యావరణ సుస్థిరత:',
    'Export': 'ఎగుమతి', 'Export Data': 'డేటా ఎగుమతి', 'Export to Excel': 'ఎక్సెల్‌కు ఎగుమతి చేయండి',
    'Facebook': 'ఫేస్‌బుక్', 'Feeds a child for a month': 'ఒక నెల పిల్లలకు ఆహారం',
    'Follow Us': 'మమ్మల్ని అనుసరించండి', 'Food Security:': 'ఆహార భద్రత:',
    'Free tailoring centers, self-defense training, and legal aid for women.': 'ఉచిత టైలరింగ్ కేంద్రాలు, ఆత్మరక్షణ శిక్షణ, మరియు మహిళలకు చట్టపరమైన సహాయం.',
    'From a small team of 3 to touching 50,000+ lives — see how we\'ve grown over the years.': '3 మందితో మొదలై 50,000+ జీవితాలను తాకడం — సంవత్సరాలలో మేము ఎలా ఎదిగామో చూడండి.',
    'Full Name *': 'పూర్తి పేరు *', 'Fundraising': 'నిధుల సేకరణ',
    'Gain valuable experience and develop new professional skills.': 'విలువైన అనుభవాన్ని పొందండి మరియు కొత్త వృత్తిపరమైన నైపుణ్యాలను అభివృద్ధి చేయండి.',
    'Guntur, Andhra Pradesh': 'గుంటూరు, ఆంధ్ర ప్రదేశ్',
    'Health Camps': 'ఆరోగ్య శిబిరాలు', 'Health for All:': 'అందరికీ ఆరోగ్యం:',
    'Healthcare': 'ఆరోగ్య సంరక్షణ', 'Healthcare for a family': 'ఒక కుటుంబానికి ఆరోగ్య సంరక్షణ',
    'Healthcare Wing': 'ఆరోగ్య సంరక్షణ విభాగం',
    'India': 'భారతదేశం', 'Instagram': 'ఇన్‌స్టాగ్రామ్',
    'Join as a Volunteer': 'స్వచ్ఛంద సేవకుడిగా చేరండి',
    'Lead by:': 'నేతృత్వం:', 'Legal Aid:': 'చట్టపరమైన సహాయం:',
    'Lives Impacted': 'ప్రభావితమైన జీవితాలు', 'Locations': 'ప్రదేశాలు',
    'Make a Difference Today': 'ఈ రోజే మార్పు చేయండి',
    'Mark All Absent': 'అందరినీ గైర్హాజరుగా గుర్తించండి',
    'Mark All Present': 'అందరినీ హాజరుగా గుర్తించండి',
    'Meals Daily': 'రోజువారీ భోజనం', 'Medical': 'వైద్య',
    'Medical Reports': 'వైద్య నివేదికలు', 'Members': 'సభ్యులు',
    'Menu Editor': 'మెనూ ఎడిటర్',
    'Message (optional)': 'సందేశం (ఐచ్ఛికం)',
    'Mon - Fri: 9:00 AM - 6:00 PM': 'సోమ - శుక్ర: ఉదయం 9:00 - సాయంత్రం 6:00',
    'Net Banking': 'నెట్ బ్యాంకింగ్', 'New Folder': 'కొత్త ఫోల్డర్',
    'Notifications': 'నోటిఫికేషన్లు',
    'Nutritious & balanced meals prepared with love for our elders': 'మా పెద్దల కోసం ప్రేమతో తయారుచేసిన పోషకమైన & సమతుల్య భోజనం',
    'Our Dedicated Teams': 'మా అంకితభావంతో కూడిన బృందాలు',
    'Our Growth Journey': 'మా వృద్ధి ప్రయాణం', 'Our Location': 'మా స్థానం',
    'Our Residents': 'మా నివాసితులు',
    'Para-Legal services through District Legal Services Authority to ensure justice for all.': 'అందరికీ న్యాయం అందించడానికి జిల్లా లీగల్ సర్వీసెస్ అథారిటీ ద్వారా పారా-లీగల్ సేవలు.',
    'Patients Served': 'సేవలు అందుకున్న రోగులు',
    'Payment Method': 'చెల్లింపు విధానం',
    'Personality development programs and awards for young volunteers.': 'యువ స్వచ్ఛంద సేవకులకు వ్యక్తిత్వ వికాస కార్యక్రమాలు మరియు అవార్డులు.',
    'Phone': 'ఫోన్',
    'Proceed to Donate': 'దానం చేయడానికి కొనసాగండి',
    'Programs': 'కార్యక్రమాలు', 'Projects Completed': 'పూర్తి చేసిన ప్రాజెక్టులు',
    'Providing love, care & dignity to our elderly residents since 2018': '2018 నుండి మా వృద్ధ నివాసితులకు ప్రేమ, సంరక్షణ & గౌరవం అందిస్తోంది',
    'Ready to make a difference? Contact us to learn more about our programs or partnership opportunities.': 'మార్పు చేయడానికి సిద్ధంగా ఉన్నారా? మా కార్యక్రమాలు లేదా భాగస్వామ్య అవకాశాల గురించి మరింత తెలుసుకోవడానికి మమ్మల్ని సంప్రదించండి.',
    'Recent Donors': 'ఇటీవలి దాతలు',
    'Receive certificates and recognition for your valuable contributions.': 'మీ విలువైన సహకారాలకు సర్టిఫికెట్లు మరియు గుర్తింపు పొందండి.',
    'Relief and support': 'సహాయం మరియు మద్దతు',
    'Resident': 'నివాసి', 'Residents Data': 'నివాసితుల డేటా',
    'Sat: 10:00 AM - 4:00 PM': 'శని: ఉదయం 10:00 - సాయంత్రం 4:00',
    'Save Menu': 'మెనూ సేవ్ చేయండి',
    'Scan with any UPI app to pay': 'చెల్లించడానికి ఏదైనా UPI యాప్‌తో స్కాన్ చేయండి',
    'School supplies for a child': 'పిల్లలకు పాఠశాల సామాగ్రి', 'Schools': 'పాఠశాలలు',
    'See the direct results of your efforts in transformed communities.': 'మారిన సమాజాలలో మీ ప్రయత్నాల ప్రత్యక్ష ఫలితాలను చూడండి.',
    'Select Date:': 'తేదీని ఎంచుకోండి:',
    'Selfless Service': 'నిస్వార్థ సేవ',
    'Skill Development': 'నైపుణ్యాభివృద్ధి',
    'Social Justice': 'సామాజిక న్యాయం',
    'Students Supported': 'మద్దతు పొందిన విద్యార్థులు',
    'Students Trained': 'శిక్షణ పొందిన విద్యార్థులు',
    'Teaching and mentoring': 'బోధన మరియు మార్గదర్శకత్వం',
    'Weekly Menu': 'వీక్లీ మెనూ',
    'Female': 'స్త్రీ', 'Male': 'పురుషుడు',
    'Stable': 'స్థిరం',
    'Dedicated to creating positive change in communities across India through education, healthcare, and sustainable development.': 'విద్య, ఆరోగ్య సంరక్షణ మరియు స్థిరమైన అభివృద్ధి ద్వారా భారతదేశం అంతటా సమాజాలలో సానుకూల మార్పును సృష్టించడానికి అంకితం చేయబడింది.',
    'Wonder Woman': 'వండర్ ఉమెన్',
    'Problems pale in comparison to the resolve to help others.': 'ఇతరులకు సహాయం చేయాలనే సంకల్పం ముందు సమస్యలు తక్కువగా కనిపిస్తాయి.',
    'A volunteer is someone who steps forward voluntarily—driven by a selfless spirit of service and an impartial attitude—to extend a helping hand. Through her extraordinary service, a woman leading an ordinary life has demonstrated that, when faced with the determination to support those in distress, one\'s own poverty is merely a minor obstacle.': 'స్వచ్ఛంద సేవకుడు అంటే నిస్వార్థ సేవా స్ఫూర్తి మరియు నిష్పాక్షిక వైఖరితో స్వచ్ఛందంగా ముందుకు వచ్చి సహాయ హస్తం అందించే వ్యక్తి. తన అసాధారణ సేవ ద్వారా, సాధారణ జీవితం గడుపుతున్న ఒక మహిళ, బాధితులకు మద్దతు ఇవ్వాలనే సంకల్పం ఎదురైనప్పుడు, ఒకరి పేదరికం కేవలం ఒక చిన్న అడ్డంకి మాత్రమే అని నిరూపించింది.',
    'Moved by the suffering of others, weary of age-old social inequalities, and deeply affected by the sight of lives ravaged by financial ruin, Sirisha resolved to stand as a pillar of support. As the daughter of Perumalla Suryanarayana—a prominent RTI activist—she inherited a deep sensitivity to human suffering and profound empathy for victims of injustice.': 'ఇతరుల బాధలకు కరిగి, పాతకాలపు సామాజిక అసమానతలతో విసిగి, ఆర్థిక నాశనంతో నాశనమైన జీవితాలను చూసి తీవ్రంగా ప్రభావితమై, సిరిషా మద్దతు స్తంభంగా నిలవాలని నిర్ణయించుకుంది. ప్రముఖ ఆర్‌టీఐ కార్యకర్త అయిన పెరుమల్ల సూర్యనారాయణ కుమార్తెగా, ఆమె మానవ బాధల పట్ల గొప్ప సున్నితత్వాన్ని మరియు అన్యాయానికి గురైన వారి పట్ల తీవ్ర సహానుభూతిని వారసత్వంగా పొందింది.',
    'A world where every individual has access to justice, healthcare, education, and dignified livelihood — regardless of gender, caste, or economic background.': 'లింగం, కులం లేదా ఆర్థిక నేపథ్యంతో సంబంధం లేకుండా ప్రతి వ్యక్తికి న్యాయం, ఆరోగ్య సంరక్షణ, విద్య మరియు గౌరవప్రదమైన జీవనోపాధి లభించే ప్రపంచం.',
    'Women Empowerment:': 'మహిళా సాధికారత:',
    'Blood donation camps, COVID relief, and accessible medical support.': 'రక్తదాన శిబిరాలు, కోవిడ్ సహాయం, మరియు అందుబాటులో వైద్య మద్దతు.',
    'Tree planting drives and awareness campaigns.': 'వృక్షారోపణ కార్యక్రమాలు మరియు అవగాహన ప్రచారాలు.',
    'To serve as a pillar of support for the distressed, the illiterate, and the elderly — ensuring their rights, dignity, and well-being.': 'బాధితులకు, నిరక్షరాస్యులకు, మరియు వృద్ధులకు మద్దతు స్తంభంగా సేవ చేయడం — వారి హక్కులు, గౌరవం మరియు శ్రేయస్సును నిర్ధారించడం.',
    'Distributed essentials to 50,000+ families during COVID-19 lockdown.': 'కోవిడ్-19 లాక్‌డౌన్ సమయంలో 50,000+ కుటుంబాలకు అవసరమైన వస్తువులు పంపిణీ చేయబడ్డాయి.',
    'Youth Development:': 'యువత అభివృద్ధి:',
    'Driven by a spirit of voluntary service, putting others\' needs before our own — regardless of personal circumstances.': 'స్వచ్ఛంద సేవా స్ఫూర్తితో, వ్యక్తిగత పరిస్థితులతో సంబంధం లేకుండా ఇతరుల అవసరాలను మన స్వంత అవసరాల కంటే ముందు ఉంచడం.',
    'Standing against age-old inequalities and ensuring every individual has access to their rightful entitlements and legal aid.': 'పాతకాలపు అసమానతలకు వ్యతిరేకంగా నిలబడి, ప్రతి వ్యక్తికి వారి హక్కులు మరియు చట్టపరమైన సహాయం లభించేలా చూడటం.',
    'Empowering women through self-defense training, legal protection, and economic independence via skill development.': 'ఆత్మరక్షణ శిక్షణ, చట్టపరమైన రక్షణ మరియు నైపుణ్యాభివృద్ధి ద్వారా ఆర్థిక స్వాతంత్ర్యం ద్వారా మహిళలను సాధికారులను చేయడం.',
    'Planting thousands of saplings and fighting pollution — because caring for nature is caring for the future.': 'వేలాది మొక్కలను నాటడం మరియు కాలుష్యంతో పోరాడటం — ఎందుకంటే ప్రకృతిని సంరక్షించడం అంటే భవిష్యత్తును సంరక్షించడం.',
    'FOUNDED': 'స్థాపించబడింది',
    'Education Camp': 'విద్యా శిబిరం',
    '5 States': '5 రాష్ట్రాలు',
    'COVID Relief': 'కోవిడ్ సహాయం',
    'Women Empower': 'మహిళా సాధికారత',
    'Tech Saala': 'టెక్ సాలా',
    'ONWARD': 'ముందుకు',
    'We are proud to be associated with these esteemed organizations and professionals.': 'ఈ గౌరవనీయ సంస్థలు మరియు నిపుణులతో అనుబంధం కలిగి ఉన్నందుకు మేము గర్విస్తున్నాము.',
    'Assistant Professor & Psychologist': 'అసిస్టెంట్ ప్రొఫెసర్ & సైకాలజిస్ట్',
    'Why do you want to join? *': 'ఎందుకు చేరాలనుకుంటున్నారు? *',
    'YouTube': 'యూట్యూబ్',
    'Volunteer': 'స్వచ్ఛంద సేవకుడు',
    'Women Empowerment': 'మహిళా సాధికారత',
    'Back to top': 'పైకి వెళ్ళు',
    'Previous slide': 'మునుపటి స్లయిడ్',
    'Next slide': 'తదుపరి స్లయిడ్',
    'Slide 1': 'స్లయిడ్ 1',
    'Slide 2': 'స్లయిడ్ 2',
    'Slide 3': 'స్లయిడ్ 3',
    'Slide 4': 'స్లయిడ్ 4',
    'NGO Work': 'ఎన్‌జీఓ పని',
    'Community': 'సమాజం',
    'Perumalla Gowri Sirisha': 'పెరుమల్ల గౌరీ సిరిషా',
    'Explore moments captured across our various events and programs. Click on an event folder to view photos and videos.': 'మా వివిధ కార్యక్రమాలు మరియు ప్రోగ్రామ్‌లలో సంగ్రహించిన క్షణాలను అన్వేషించండి. ఫోటోలు మరియు వీడియోలను వీక్షించడానికి ఈవెంట్ ఫోల్డర్‌పై క్లిక్ చేయండి.',
    'Swacch Bharat': 'స్వచ్ఛ భారత్',
    'COVID': 'కోవిడ్',
    'Donations': 'విరాళాలు',
    'Achievements': 'విజయాలు',
    'Awards and recognition': 'అవార్డులు మరియు గుర్తింపు',
    'Enter new image URL:': 'కొత్త చిత్రం URL నమోదు చేయండి:',
    'Delete this image?': 'ఈ చిత్రాన్ని తొలగించాలా?',
    'Enter image URL:': 'చిత్రం URL నమోదు చేయండి:',
    'Enter folder key (no spaces, e.g. "newFolder"):': 'ఫోల్డర్ కీ నమోదు చేయండి (ఖాళీలు లేకుండా, ఉదా. "newFolder"):',
    'Folder key already exists!': 'ఫోల్డర్ కీ ఇప్పటికే ఉంది!',
    'Enter folder display name:': 'ఫోల్డర్ ప్రదర్శన పేరు నమోదు చేయండి:',
    'Enter folder name:': 'ఫోల్డర్ పేరు నమోదు చేయండి:',
    'Enter folder description:': 'ఫోల్డర్ వివరణ నమోదు చేయండి:',
    'Delete this folder and all its images?': 'ఈ ఫోల్డర్ మరియు దానిలోని అన్ని చిత్రాలను తొలగించాలా?',
    'Community Cleanliness Drives | Multiple Locations': 'సామాజిక పరిశుభ్రత డ్రైవ్‌లు | బహుళ ప్రదేశాలు',
    'COVID-19 Relief & Support | Multiple Locations': 'కోవిడ్-19 సహాయం & మద్దతు | బహుళ ప్రదేశాలు',
    'Teaching & Mentoring Programs | Multiple Locations': 'బోధన & మార్గదర్శక కార్యక్రమాలు | బహుళ ప్రదేశాలు',
    'Donation Drives & Distributions | Multiple Locations': 'విరాళం డ్రైవ్‌లు & పంపిణీలు | బహుళ ప్రదేశాలు',
    'Awards & Recognition | Multiple Locations': 'అవార్డులు & గుర్తింపు | బహుళ ప్రదేశాలు',
    'Your generous donation helps us provide education, healthcare, and essential resources to underprivileged communities across India. Every contribution, no matter how small, creates lasting change.': 'మీ ఉదారమైన విరాళం భారతదేశం అంతటా వెనుకబడిన సమాజాలకు విద్య, ఆరోగ్య సంరక్షణ మరియు అవసరమైన వనరులను అందించడానికి మాకు సహాయపడుతుంది. ప్రతి సహకారం, ఎంత చిన్నదైనా, శాశ్వత మార్పును సృష్టిస్తుంది.',
    'Transparency': 'పారదర్శకత',
    'UPI': 'UPI',
    'Leave a note with your donation...': 'మీ విరాళంతో నోట్ ఉంచండి...',
    'Thank You,': 'ధన్యవాదాలు,',
    'has been noted. Complete payment via UPI:': 'గమనించబడింది. UPI ద్వారా చెల్లింపు పూర్తి చేయండి:',
    'Meet our passionate teams working tirelessly to create positive change in communities across India.': 'భారతదేశం అంతటా సమాజాలలో సానుకూల మార్పును సృష్టించడానికి అవిశ్రాంతంగా పనిచేస్తున్న మా ఉత్సాహభరితమైన బృందాలను కలవండి.',
    'Feeding Hands': 'ఫీడింగ్ హ్యాండ్స్',
    'Life Saviours': 'లైఫ్ సేవియర్స్',
    'Elite Queens': 'ఎలైట్ క్వీన్స్',
    'Visual Vibes': 'విజువల్ వైబ్స్',
    'Guiding Lights': 'గైడింగ్ లైట్స్',
    'Dedicated to providing nutritious meals to underprivileged children and families. We believe no child should go to bed hungry. Our team works with local communities, restaurants, and donors to ensure food reaches those who need it most.': 'వెనుకబడిన పిల్లలు మరియు కుటుంబాలకు పోషకమైన భోజనం అందించడానికి అంకితం చేయబడింది. ఏ పిల్లవాడు ఆకలితో నిద్రపోకూడదని మేము నమ్ముతాము. మా బృందం స్థానిక సమాజాలు, రెస్టారెంట్లు మరియు దాతలతో కలిసి పనిచేసి ఆహారం అవసరమైన వారికి చేరేలా చూస్తుంది.',
    'We run daily meal programs in 15 locations across the city, serving fresh, nutritious meals to children and families in need. Our mission is to eliminate child hunger in our operational areas.': 'నగరం అంతటా 15 ప్రదేశాలలో రోజువారీ భోజన కార్యక్రమాలను నడుపుతున్నాము, అవసరంలో ఉన్న పిల్లలు మరియు కుటుంబాలకు తాజా, పోషకమైన భోజనం అందిస్తున్నాము. మా కార్యాచరణ ప్రాంతాలలో పిల్లల ఆకలిని తొలగించడం మా లక్ష్యం.',
    'Providing healthcare services and medical assistance to rural communities. Making healthcare accessible to all through mobile clinics, health camps, and awareness programs.': 'గ్రామీణ సమాజాలకు ఆరోగ్య సంరక్షణ సేవలు మరియు వైద్య సహాయం అందించడం. మొబైల్ క్లినిక్‌లు, ఆరోగ్య శిబిరాలు మరియు అవగాహన కార్యక్రమాల ద్వారా అందరికీ ఆరోగ్య సంరక్షణ అందుబాటులోకి తీసుకురావడం.',
    'Our team of medical professionals and volunteers conducts regular health check-up camps in remote villages, distributes essential medicines, and provides health education to prevent common diseases.': 'మా వైద్య నిపుణులు మరియు స్వచ్ఛంద సేవకుల బృందం మారుమూల గ్రామాలలో క్రమం తప్పకుండా ఆరోగ్య తనిఖీ శిబిరాలను నిర్వహిస్తుంది, అవసరమైన మందులను పంపిణీ చేస్తుంది మరియు సాధారణ వ్యాధులను నివారించడానికి ఆరోగ్య విద్యను అందిస్తుంది.',
    'Empowering youth with digital literacy and technology skills. Bridging the digital divide in rural areas through computer education, coding workshops, and digital awareness programs.': 'డిజిటల్ అక్షరాస్యత మరియు సాంకేతిక నైపుణ్యాలతో యువతను సాధికారులను చేయడం. కంప్యూటర్ విద్య, కోడింగ్ వర్క్‌షాప్‌లు మరియు డిజిటల్ అవగాహన కార్యక్రమాల ద్వారా గ్రామీణ ప్రాంతాలలో డిజిటల్ అంతరాన్ని తగ్గించడం.',
    'We have set up computer labs in 10 rural schools and conduct regular workshops on basic computing, internet safety, and coding for young students. Our goal is to prepare rural youth for the digital economy.': 'మేము 10 గ్రామీణ పాఠశాలలలో కంప్యూటర్ ల్యాబ్‌లను ఏర్పాటు చేసాము మరియు యువ విద్యార్థులకు బేసిక్ కంప్యూటింగ్, ఇంటర్నెట్ భద్రత మరియు కోడింగ్‌పై క్రమం తప్పకుండా వర్క్‌షాప్‌లను నిర్వహిస్తున్నాము. డిజిటల్ ఎకానమీ కోసం గ్రామీణ యువతను సిద్ధం చేయడం మా లక్ష్యం.',
    'Empowering women through skill development and entrepreneurship. Creating leaders of tomorrow by providing vocational training, financial literacy, and business mentorship.': 'నైపుణ్యాభివృద్ధి మరియు వ్యవస్థాపకత ద్వారా మహిళలను సాధికారులను చేయడం. వృత్తి శిక్షణ, ఆర్థిక అక్షరాస్యత మరియు వ్యాపార మెంటర్షిప్ అందించడం ద్వారా రేపటి నాయకులను సృష్టించడం.',
    'Our programs have helped hundreds of women start their own small businesses, achieve financial independence, and become role models in their communities. We focus on tailoring, handicrafts, food processing, and digital skills.': 'మా కార్యక్రమాలు వందలాది మంది మహిళలు తమ స్వంత చిన్న వ్యాపారాలను ప్రారంభించడానికి, ఆర్థిక స్వాతంత్ర్యం సాధించడానికి మరియు వారి సమాజాలలో రోల్ మోడల్స్ కావడానికి సహాయపడ్డాయి. మేము టైలరింగ్, చేతిపనులు, ఆహార ప్రాసెసింగ్ మరియు డిజిటల్ నైపుణ్యాలపై దృష్టి పెడతాము.',
    'Creating compelling visual content and digital media to amplify our mission and reach more communities. From photography to videography, we tell stories that inspire action.': 'మా మిషన్‌ను విస్తరించడానికి మరియు మరిన్ని సమాజాలను చేరుకోవడానికి బలమైన విజువల్ కంటెంట్ మరియు డిజిటల్ మీడియాను సృష్టించడం. ఫోటోగ్రఫీ నుండి వీడియోగ్రఫీ వరకు, మేము చర్యను ప్రేరేపించే కథలను చెబుతాము.',
    'Our team documents the impact of our work through photos, videos, and social media. We create awareness campaigns, success stories, and educational content to spread our message far and wide.': 'మా బృందం ఫోటోలు, వీడియోలు మరియు సోషల్ మీడియా ద్వారా మా పని ప్రభావాన్ని డాక్యుమెంట్ చేస్తుంది. మా సందేశాన్ని దూరంగా విస్తరించడానికి మేము అవగాహన ప్రచారాలు, విజయగాథలు మరియు విద్యాపరమైన కంటెంట్‌ను సృష్టిస్తాము.',
    'Providing educational support and mentorship to students. Lighting the path to a brighter future through tutoring, career guidance, scholarship assistance, and life skills training.': 'విద్యార్థులకు విద్యా మద్దతు మరియు మార్గదర్శకత్వం అందించడం. ట్యూషన్, కెరీర్ గైడెన్స్, స్కాలర్‌షిప్ సహాయం మరియు జీవిత నైపుణ్యాల శిక్షణ ద్వారా ప్రకాశవంతమైన భవిష్యత్తుకు మార్గాన్ని వెలిగించడం.',
    'Our team works with 25 partner schools, providing after-school tutoring, mentorship programs, and scholarship support to help underprivileged students excel academically and build successful careers.': 'మా బృందం 25 భాగస్వామ్య పాఠశాలలతో కలిసి పనిచేస్తుంది, వెనుకబడిన విద్యార్థులు విద్యాపరంగా రాణించడానికి మరియు విజయవంతమైన కెరీర్‌లను నిర్మించడానికి ఆఫ్టర్-స్కూల్ ట్యూషన్, మెంటర్‌షిప్ ప్రోగ్రామ్‌లు మరియు స్కాలర్‌షిప్ మద్దతును అందిస్తుంది.',
    'Women Empowered': 'సాధికారత పొందిన మహిళలు',
    'Videos Created': 'సృష్టించిన వీడియోలు',
    'View Attendance': 'హాజరు చూడండి',
    'Relation': 'సంబంధం',
    'Gallery': 'గ్యాలరీ',
    'Camp': 'శిబిరం',
    'Empowerment': 'సాధికారత',
    'Health Camp': 'ఆరోగ్య శిబిరం',
    'Feeding Program': 'ఆహార కార్యక్రమం',
    'Program': 'కార్యక్రమం',
    'Thank you for your application! We will get back to you soon.': 'మీ దరఖాస్తుకు ధన్యవాదాలు! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
    'Thank you! Your message has been received. We will get back to you soon.': 'ధన్యవాదాలు! మీ సందేశం అందింది. మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
    'Delete this resident?': 'ఈ నివాసితిని తొలగించాలా?',
    'Delete this medical report?': 'ఈ వైద్య నివేదికను తొలగించాలా?',
    'Delete this donor record?': 'ఈ దాత రికార్డును తొలగించాలా?',
    'No medical records yet.': 'ఇంకా వైద్య రికార్డులు లేవు.',
    'No new notifications.': 'కొత్త నోటిఫికేషన్‌లు లేవు.',
    'Menu saved successfully!': 'మెనూ విజయవంతంగా సేవ్ చేయబడింది!',
    'No attendance data to export.': 'ఎగుమతి చేయడానికి హాజరు డేటా లేదు.',
    'March 2026 | Govt Primary School, Rural District': 'మార్చి 2026 | ప్రభుత్వ ప్రాథమిక పాఠశాల, గ్రామీణ జిల్లా',
    'December 2025 | Community Center': 'డిసెంబర్ 2025 | కమ్యూనిటీ సెంటర్',
    'February 2026 | Rural Health Center': 'ఫిబ్రవరి 2026 | గ్రామీణ ఆరోగ్య కేంద్రం',
    'November 2025 | Community Kitchen': 'నవంబర్ 2025 | కమ్యూనిటీ కిచెన్',
    'Your kindness brings hope. Complete your donation of': 'మీ దయ ఆశను తెస్తుంది. మీ విరాళాన్ని పూర్తి చేయండి',
    'Scan & Pay via UPI': 'UPI ద్వారా స్కాన్ చేసి చెల్లించండి',
    'Pay': 'చెల్లించండి',
    'After payment, please share the transaction details with us at': 'చెల్లింపు తర్వాత, దయచేసి లావాదేవీ వివరాలను మాతో ఇక్కడ షేర్ చేయండి:',
    'or': 'లేదా',
    'so we can acknowledge your contribution.': 'మీ సహకారాన్ని మేము గుర్తించడానికి.',
    'UPI ID:': 'UPI ID:',
    'UPI ID Copied! Use any UPI app to pay.': 'UPI ID కాపీ చేయబడింది! చెల్లించడానికి ఏదైనా UPI యాప్ ఉపయోగించండి.',
    'Thank You,': 'ధన్యవాదాలు,',
    'WhatsApp': 'వాట్సాప్',
    'Women\'s Safety': 'మహిళా భద్రత',
    'Please fill in all required fields.': 'దయచేసి అన్ని తప్పనిసరి ఫీల్డ్‌లను పూరించండి.',
    'Please enter a valid donation amount.': 'దయచేసి చెల్లుబాటు అయ్యే విరాళం మొత్తాన్ని నమోదు చేయండి.',
    'Sowmya Multi Speciality Dental Clinic': 'సౌమ్య మల్టీ స్పెషాలిటీ డెంటల్ క్లినిక్',
    'Dr. Ch. Sowmya, B.D.S.; F.A.G.E. Cosmetic Dental Surgeon': 'డా. సిహెచ్. సౌమ్య, B.D.S.; F.A.G.E. కాస్మెటిక్ డెంటల్ సర్జన్',
    'Dr. Ch. Sowmya & Dr. Ch. Naveen': 'డా. సిహెచ్. సౌమ్య & డా. సిహెచ్. నవీన్',
    'Dr. Ch. Naveen, M.D.S. Prosthodontics & Implantologist': 'డా. సిహెచ్. నవీన్, M.D.S. ప్రోస్టోడాంటిక్స్ & ఇంప్లాంటాలజిస్ట్',
    'Kothapet, Guntur': 'కోతపేట, గుంటూరు',
    'Reakha Clinic': 'రేఖా క్లినిక్',
    'Dr. Sahan Kumar Garu': 'డా. సాహన్ కుమార్ గారు',
    'Inner Ri Road, Guntur': 'ఇన్నర్ Ri రోడ్, గుంటూరు',
    'Rafa Labs': 'రాఫా ల్యాబ్స్',
    'R.Agraharam': 'ఆర్.అగ్రహారం',
    'B. Sharmila': 'బి. శర్మిల',
    'Dr. Krishna Bharath': 'డా. కృష్ణ భరత్',
    'B. Krishnabharath': 'బి. కృష్ణభరత్',
    'Psychologist': 'సైకాలజిస్ట్',
    'Founder President': 'వ్యవస్థాపక అధ్యక్షుడు',
    'Advanced Psychological services Association (APA India)': 'అడ్వాన్స్డ్ సైకలాజికల్ సర్వీసెస్ అసోసియేషన్ (APA ఇండియా)',
    'Hyderabad': 'హైదరాబాద్',
    'Dr. Sahan Kumar': 'డా. సాహన్ కుమార్',
    'REAKHA CLINIC': 'రేఖా క్లినిక్',
    'B. Keerthi': 'బి. కీర్తి',
    'B. Keertthi': 'బి. కీర్తి',
    'M.P.H.W.(F)': 'M.P.H.W.(F)',
    'GNM Nurse': 'GNM నర్స్',
    'UPI QR Code': 'UPI QR కోడ్',
    'Swacch Bharat 1': 'స్వచ్ఛ భారత్ 1',
    'Swacch Bharat 2': 'స్వచ్ఛ భారత్ 2',
    'Swacch Bharat 3': 'స్వచ్ఛ భారత్ 3',
    'Swacch Bharat 4': 'స్వచ్ఛ భారత్ 4',
    'Education Photo 1': 'విద్య ఫోటో 1',
    'Education Photo 2': 'విద్య ఫోటో 2',
    'Education Photo 3': 'విద్య ఫోటో 3',
    'Education Photo 4': 'విద్య ఫోటో 4',
    'Education Photo 5': 'విద్య ఫోటో 5',
    'Education Photo 6': 'విద్య ఫోటో 6',
    'Education Photo 7': 'విద్య ఫోటో 7',
    'Education Video 1': 'విద్య వీడియో 1',
    'Education Video 2': 'విద్య వీడియో 2',
    'Donations Video': 'విరాళాలు వీడియో',
    'COVID Video': 'కోవిడ్ వీడియో',
    'Achievements Video': 'విజయాలు వీడియో',
    '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41': 'English'
  }
};

function toggleLang() {
  const dd = document.getElementById('floatLangDropdown');
  if (dd) dd.classList.toggle('open');
}

function closeLangDropdown() {
  document.getElementById('floatLangDropdown')?.classList.remove('open');
  document.getElementById('langDropdown')?.classList.remove('open');
}

function toggleLangNav() {
  const newLang = currentLang === 'en' ? 'te' : 'en';
  changeLang(newLang);
  const btn = document.getElementById('langNavBtn');
  if (btn) btn.textContent = newLang === 'te' ? 'English' : 'తెలుగు';
}

function changeLang(lang) {
  currentLang = lang;
  const btn = document.getElementById('translateToggle');
  if (btn) btn.innerHTML = `<i class="fas fa-language"></i>`;
  closeLangDropdown();
  if (lang === 'en') {
    if (_savedBodyHTML) {
      document.body.innerHTML = _savedBodyHTML;
      _savedBodyHTML = null;
      initPage();
    }
    return;
  }
  if (!_savedBodyHTML) {
    _savedBodyHTML = document.body.innerHTML;
  }
  const te = translations[lang];
  if (!te) return;
  const keys = Object.keys(te).sort((a, b) => b.length - a.length);
  let html = _savedBodyHTML;
  for (const key of keys) {
    html = html.split(key).join(te[key]);
  }
  document.body.innerHTML = html;
  initPage();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const nodeFixes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    let text = node.textContent;
    if (!text.trim()) continue;
    const p = node.parentElement;
    if (!p || p.tagName === 'SCRIPT' || p.tagName === 'STYLE') continue;
    if (p.closest('.float-buttons, .float-lang-dropdown, .lang-dropdown')) continue;
    let result = text;
    let changed = false;
    for (const key of keys) {
      if (result.includes(key)) {
        result = result.split(key).join(te[key]);
        changed = true;
      }
    }
    if (changed) nodeFixes.push({ node, val: result });
  }
  for (const { node, val } of nodeFixes) {
    node.textContent = val;
  }
}

// ─── PAGE INITIALIZATION ───
function initPage() {
  initSlideshow();
  initHeaderScroll();
  initMobileMenu();
  initTabs();
  initBackToTop();
  initNavScroll();
  initForms();
  initLightbox();
  initAssocScroll();
  if (typeof renderGalleryFolders === 'function') renderGalleryFolders();
}

// ─── SLIDESHOW ───
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  if (!slides.length) return;
  let currentSlide = 0;
  let slideInterval;
  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
  }
  function nextSlideFn() { showSlide((currentSlide + 1) % slides.length); }
  function prevSlideFn() { showSlide((currentSlide - 1 + slides.length) % slides.length); }
  function startSlideshow() { slideInterval = setInterval(nextSlideFn, 4500); }
  function resetSlideshow() { clearInterval(slideInterval); startSlideshow(); }
  showSlide(0);
  startSlideshow();
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => { prevSlideFn(); resetSlideshow(); });
    nextBtn.addEventListener('click', () => { nextSlideFn(); resetSlideshow(); });
  }
  dots.forEach(dot => {
    dot.addEventListener('click', () => { showSlide(parseInt(dot.dataset.index)); resetSlideshow(); });
  });
}

// ─── HEADER SCROLL ───
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  });
}

// ─── MOBILE MENU ───
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  if (!hamburger || !navMenu) return;
  hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// ─── TABS ───
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });
}

// ─── BACK TO TOP ───
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── ACTIVE NAV LINK ───
function initNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 180;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`nav a[href*="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  });
}

// ─── FORMS ───
function initForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form.classList.contains('volunteer-form')) {
        const vf = {
          name: form.querySelector('.vf-name').value,
          email: form.querySelector('.vf-email').value,
          phone: form.querySelector('.vf-phone').value,
          interest: form.querySelector('.vf-interest').value,
          message: form.querySelector('.vf-message').value
        };
        if (typeof apiSubmitVolunteer === 'function') apiSubmitVolunteer(vf);
        alert('Thank you for your application! We will get back to you soon.');
      } else {
        alert('Thank you! Your message has been received. We will get back to you soon.');
      }
      form.reset();
    });
  });
}

// ─── LIGHTBOX ───
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const closeBtn = document.querySelector('.lightbox-close');
  if (!lb) return;
  if (closeBtn) {
    closeBtn.addEventListener('click', () => lb.classList.remove('open'));
  }
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.classList.remove('open');
  });
}
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (lb && img) { img.src = src; lb.classList.add('open'); }
}

// ─── ASSOCIATED WITH AUTO SCROLL ───
function initAssocScroll() {
  const container = document.getElementById('assocScroll');
  if (!container) return;
  const cards = container.querySelectorAll('.assoc-card');
  if (cards.length < 2) return;
  let current = 0;
  let interval;

  function goTo(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    current = index;
    const card = cards[current];
    const offset = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: offset, behavior: 'smooth' });
    updateDots();
  }

  function next() { goTo(current + 1); }

  function startAuto() { interval = setInterval(next, 3000); }
  function stopAuto() { clearInterval(interval); }

  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);

  const wrapper = container.parentElement;
  let dotsContainer = wrapper.querySelector('.assoc-dots');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.className = 'assoc-dots';
    wrapper.appendChild(dotsContainer);
  }
  function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'assoc-dot' + (i === current ? ' active' : '');
      dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
      dotsContainer.appendChild(dot);
    }
  }

  cards.forEach(c => c.addEventListener('click', stopAuto));

  updateDots();
  setTimeout(() => goTo(0), 100);
  startAuto();
}

// ─── ADMIN ───
const ADMIN_PASSWORD = 'admin123';

function showAdminLogin() {
  document.getElementById('adminModal')?.classList.add('open');
  document.getElementById('adminError').style.display = 'none';
  document.getElementById('adminPassword').value = '';
  setTimeout(() => document.getElementById('adminPassword')?.focus(), 100);
}
function closeAdminLogin() {
  document.getElementById('adminModal')?.classList.remove('open');
}
async function adminLogin() {
  const pw = document.getElementById('adminPassword')?.value;
  let ok = false;
  try {
    if (typeof apiAdminLogin === 'function') {
      ok = await apiAdminLogin(pw);
    }
  } catch (e) {}
  if (!ok) ok = (pw === ADMIN_PASSWORD);
  if (ok) {
    document.body.classList.add('admin-logged-in');
    closeAdminLogin();
    const loginBtn = document.getElementById('adminLoginBtn');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    initOAH();
  } else {
    document.getElementById('adminError').style.display = 'block';
  }
}
function adminLogout() {
  document.body.classList.remove('admin-logged-in');
  const loginBtn = document.getElementById('adminLoginBtn');
  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (loginBtn) loginBtn.style.display = 'inline-flex';
  if (logoutBtn) logoutBtn.style.display = 'none';
}

// ─── OAH DATA LAYER ───
const OAH_STORAGE_KEY = 'prajwala_oah_data';

const defaultOAHData = {
  stats: { total: 24, present: 22, medical: 6, meals: 3 },
  residents: [
    { id: 1, name: 'Seshamma Garu', age: 78, gender: 'Female', joined: '2018', health: 'Stable', relation: 'Daughter', contact: 'Lakshmi - 9988776655' },
    { id: 2, name: 'Venkateswarlu Garu', age: 82, gender: 'Male', joined: '2019', health: 'BP/Diabetes', relation: 'Son', contact: 'Ramesh - 8877665544' },
    { id: 3, name: 'Mangamma Garu', age: 75, gender: 'Female', joined: '2019', health: 'Arthritis', relation: 'Son', contact: 'Suresh - 7766554433' },
    { id: 4, name: 'Subba Rao Garu', age: 80, gender: 'Male', joined: '2020', health: 'Diabetes', relation: 'Daughter', contact: 'Priya - 6655443322' },
    { id: 5, name: 'Ananthamma Garu', age: 72, gender: 'Female', joined: '2020', health: 'Stable', relation: 'Son', contact: 'Krishna - 5544332211' },
    { id: 6, name: 'Ramulu Garu', age: 85, gender: 'Male', joined: '2018', health: 'Heart Condition', relation: 'Son', contact: 'Prasad - 4433221100' },
    { id: 7, name: 'Nagarathnamma Garu', age: 70, gender: 'Female', joined: '2021', health: 'Stable', relation: 'Daughter', contact: 'Sunitha - 3322110099' },
    { id: 8, name: 'Pullaiah Garu', age: 79, gender: 'Male', joined: '2021', health: 'BP', relation: 'Son', contact: 'Mahesh - 2211009988' },
    { id: 9, name: 'Adilakshmi Garu', age: 76, gender: 'Female', joined: '2022', health: 'Stable', relation: 'Son', contact: 'Vijay - 1100998877' },
    { id: 10, name: 'Narayana Garu', age: 83, gender: 'Male', joined: '2022', health: 'Arthritis/Knee Pain', relation: 'Daughter', contact: 'Anitha - 9988771122' },
    { id: 11, name: 'Rangamma Garu', age: 74, gender: 'Female', joined: '2022', health: 'Stable', relation: 'Son', contact: 'Srinivas - 8877662233' },
    { id: 12, name: 'Venkata Ratnam Garu', age: 81, gender: 'Male', joined: '2023', health: 'Diabetes/BP', relation: 'Son', contact: 'Raju - 7766553344' },
    { id: 13, name: 'Buchchamma Garu', age: 73, gender: 'Female', joined: '2023', health: 'Stable', relation: 'Daughter', contact: 'Padma - 6655444455' },
    { id: 14, name: 'Koteswara Rao Garu', age: 84, gender: 'Male', joined: '2023', health: 'Heart/BP', relation: 'Son', contact: 'Vinod - 5544335566' },
    { id: 15, name: 'Subhadramma Garu', age: 71, gender: 'Female', joined: '2024', health: 'Stable', relation: 'Son', contact: 'Satish - 4433226677' },
    { id: 16, name: 'Mohan Rao Garu', age: 77, gender: 'Male', joined: '2024', health: 'BP', relation: 'Daughter', contact: 'Swapna - 3322117788' },
    { id: 17, name: 'Kanthamma Garu', age: 78, gender: 'Female', joined: '2024', health: 'Stable', relation: 'Son', contact: 'Ravi - 2211008899' },
    { id: 18, name: 'Surya Narayana Garu', age: 86, gender: 'Male', joined: '2024', health: 'Arthritis', relation: 'Son', contact: 'Harish - 1100999900' },
    { id: 19, name: 'Easwaramma Garu', age: 75, gender: 'Female', joined: '2025', health: 'Stable', relation: 'Daughter', contact: 'Radha - 9988770011' },
    { id: 20, name: 'Rama Krishna Garu', age: 80, gender: 'Male', joined: '2025', health: 'Diabetes', relation: 'Son', contact: 'Phanindra - 8877661122' },
    { id: 21, name: 'Gowramma Garu', age: 73, gender: 'Female', joined: '2025', health: 'Stable', relation: 'Son', contact: 'Venkat - 7766552233' },
    { id: 22, name: 'Veera Raghavulu Garu', age: 82, gender: 'Male', joined: '2025', health: 'Heart Condition', relation: 'Daughter', contact: 'Lalitha - 6655443344' },
    { id: 23, name: 'Punnamma Garu', age: 76, gender: 'Female', joined: '2026', health: 'Stable', relation: 'Son', contact: 'Naveen - 5544334455' },
    { id: 24, name: 'Siva Nagaiah Garu', age: 79, gender: 'Male', joined: '2026', health: 'BP', relation: 'Son', contact: 'Sridhar - 4433225566' }
  ],
  attendance: {},
  menu: [
    { day: 'Sunday', breakfast: 'Idli, Sambar, Chutney', lunch: 'Rice, Dal, Palak Paneer, Salad', snacks: 'Fruits, Milk', dinner: 'Chapati, Mixed Veg Curry, Kheer' },
    { day: 'Monday', breakfast: 'Pongal, Vada, Chutney', lunch: 'Rice, Sambar, Bendakaya Fry, Curd', snacks: 'Tea, Biscuits', dinner: 'Dosa, Potato Curry, Payasam' },
    { day: 'Tuesday', breakfast: 'Upma, Coconut Chutney', lunch: 'Rice, Rasam, Guttivankaya Curry', snacks: 'Banana, Buttermilk', dinner: 'Chapati, Chana Masala, Rice Kheer' },
    { day: 'Wednesday', breakfast: 'Poori, Aloo Curry, Chutney', lunch: 'Rice, Pulihora, Papad, Curd', snacks: 'Sprouts, Lemon Water', dinner: 'Lemon Rice, Pumpkin Sambar' },
    { day: 'Thursday', breakfast: 'Rava Dosa, Coconut Chutney', lunch: 'Rice, Tomato Dal, Cabbage Poriyal', snacks: 'Fruit Salad, Milk', dinner: 'Chapati, Dal Tadka, Gulab Jamun' },
    { day: 'Friday', breakfast: 'Chapati, Chole, Salad', lunch: 'Rice, Fish Curry / Veg Kurma, Curd', snacks: 'Roasted Chana, Tea', dinner: 'Appam / Idiyappam, Stew' },
    { day: 'Saturday', breakfast: 'Bonda, Sambar, Chutney', lunch: 'Rice, Brinjal Curry, Rasam, Papad', snacks: 'Dates, Dry Fruits', dinner: 'Veg Pulav, Raita, Sweet' }
  ],
  medical: [
    { id: 1, residentId: 2, name: 'Venkateswarlu Garu', age: 82, checkup: '2026-05-10', nextCheckup: '2026-06-10', doctor: 'Dr. Rama Devi', lastVisit: '10 May', condition: 'BP/Diabetes', meds: [{ name: 'Amlodipine 5mg', time: 'Morning 8am' }, { name: 'Metformin 500mg', time: 'After breakfast & dinner' }, { name: 'Aspirin 75mg', time: 'Morning 8am' }] },
    { id: 2, residentId: 3, name: 'Mangamma Garu', age: 75, checkup: '2026-05-08', nextCheckup: '2026-06-08', doctor: 'Dr. Sridhar', lastVisit: '08 May', condition: 'Arthritis', meds: [{ name: 'Paracetamol 650mg', time: 'As needed for pain' }, { name: 'Calcium + Vitamin D', time: 'Morning 8am' }, { name: 'Omeprazole 20mg', time: 'Before breakfast' }] },
    { id: 3, residentId: 4, name: 'Subba Rao Garu', age: 80, checkup: '2026-05-05', nextCheckup: '2026-06-05', doctor: 'Dr. Srinivas', lastVisit: '05 May', condition: 'Diabetes', meds: [{ name: 'Glimepiride 2mg', time: 'Morning 8am' }, { name: 'Metformin 500mg', time: 'After meals' }] },
    { id: 4, residentId: 6, name: 'Ramulu Garu', age: 85, checkup: '2026-05-12', nextCheckup: '2026-06-12', doctor: 'Dr. Srinivas', lastVisit: '12 May', condition: 'Heart Condition', meds: [{ name: 'Metoprolol 25mg', time: 'Morning & Evening' }, { name: 'Atorvastatin 10mg', time: 'Night 9pm' }, { name: 'Aspirin 75mg', time: 'Morning 8am' }, { name: 'Furosemide 40mg', time: 'Morning 8am' }] },
    { id: 5, residentId: 10, name: 'Narayana Garu', age: 83, checkup: '2026-05-06', nextCheckup: '2026-06-06', doctor: 'Dr. Sridhar', lastVisit: '06 May', condition: 'Arthritis/Knee Pain', meds: [{ name: 'Accelofenac 100mg', time: 'After breakfast' }, { name: 'Calcium + Vitamin D', time: 'Morning 8am' }, { name: 'Omeprazole 20mg', time: 'Before breakfast' }] },
    { id: 6, residentId: 18, name: 'Surya Narayana Garu', age: 86, checkup: '2026-05-02', nextCheckup: '2026-06-02', doctor: 'Dr. Rao', lastVisit: '02 May', condition: 'Arthritis', meds: [{ name: 'Etoricoxib 60mg', time: 'After breakfast' }, { name: 'Calcium + Vitamin D', time: 'Morning' }] },
    { id: 7, residentId: 14, name: 'Koteswara Rao Garu', age: 84, checkup: '2026-05-09', nextCheckup: '2026-06-09', doctor: 'Dr. Rama Devi', lastVisit: '09 May', condition: 'Heart/BP', meds: [{ name: 'Telmisartan 40mg', time: 'Morning 8am' }, { name: 'Atorvastatin 10mg', time: 'Night 9pm' }, { name: 'Aspirin 75mg', time: 'Morning 8am' }] },
    { id: 8, residentId: 12, name: 'Venkata Ratnam Garu', age: 81, checkup: '2026-05-11', nextCheckup: '2026-06-11', doctor: 'Dr. Srinivas', lastVisit: '11 May', condition: 'Diabetes/BP', meds: [{ name: 'Glimepiride 2mg', time: 'Morning 8am' }, { name: 'Metformin 500mg', time: 'After meals' }, { name: 'Telmisartan 40mg', time: 'Morning 8am' }] }
  ],
  donors: [
    { id: 1, name: 'Ravi Kumar', amount: 5000, message: 'Keep up the great work!', date: '2026-05-10', approved: true },
    { id: 2, name: 'Sita Devi', amount: 2500, message: 'For the children\'s education', date: '2026-05-12', approved: true },
    { id: 3, name: 'Venkata Ramana', amount: 10000, message: 'Supporting the old age home', date: '2026-05-13', approved: true },
    { id: 4, name: 'Lakshmi Narayana', amount: 1000, message: 'Happy to contribute', date: '2026-05-14', approved: true },
    { id: 5, name: 'Srinivas Rao', amount: 3000, message: 'For education fund', date: '2026-05-15', approved: false },
    { id: 6, name: 'Padmavathi', amount: 1500, message: 'Keep serving', date: '2026-05-16', approved: false }
  ]
};

function getOAHData() {
  if (typeof _cachedOahData !== 'undefined' && _cachedOahData) {
    return _cachedOahData;
  }
  return JSON.parse(JSON.stringify(defaultOAHData));
}

function saveOAHData(data) {
  _cachedOahData = data;
}

// ─── OAH MAIN RENDER ───
function initOAH() {
  renderOAHResidents();
  renderPublicOAHResidents();
  loadAttendanceForDate();
  renderOAHMedical();
  renderOAHDonors();
  renderOAHNotifications();
  renderOAHMenu();
  renderMenuEditor();
  checkMedicalNotifications();
}

function switchAdminTab(tabId) {
  document.querySelectorAll('.oah-panel').forEach(p => p.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
  document.querySelectorAll('.tab-bar-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.tab-bar-btn[onclick*="${tabId}"]`)?.classList.add('active');
}

// ─── RESIDENTS ───
function renderOAHResidents() {
  const data = getOAHData();
  const tbody = document.getElementById('residentsTableBody');
  if (!tbody) return;
  tbody.innerHTML = data.residents.map((r, i) => `<tr>
    <td>${i + 1}</td>
    <td><strong>${r.name}</strong></td>
    <td>${r.age}</td>
    <td>${r.gender === 'Male' ? 'M' : 'F'}</td>
    <td>${r.joined}</td>
    <td><span class="badge ${getHealthBadge(r.health)}">${r.health}</span></td>
    <td>${r.relation || '-'}</td>
    <td>${r.contact || '-'}</td>
    <td class="admin-badge" style="white-space:nowrap;">
      <button class="btn-small" onclick="editResident(${r.id})" style="padding:3px 8px;font-size:11px;margin-right:3px;"><i class="fas fa-pencil-alt"></i></button>
      <button class="btn-small" onclick="deleteResident(${r.id})" style="padding:3px 8px;font-size:11px;background:#dc2626;"><i class="fas fa-trash"></i></button>
    </td>
  </tr>`).join('');
  document.getElementById('totalResidents').textContent = data.residents.length;
}

function renderPublicOAHResidents() {
  const data = getOAHData();
  const tbody = document.getElementById('publicResidentsTableBody');
  if (!tbody) return;
  tbody.innerHTML = data.residents.map((r, i) => `<tr>
    <td>${i + 1}</td>
    <td><strong>${r.name}</strong></td>
    <td>${r.age}</td>
    <td>${r.gender === 'Male' ? 'M' : 'F'}</td>
    <td>${r.joined}</td>
    <td><span class="badge ${getHealthBadge(r.health)}">${r.health}</span></td>
    <td>${r.relation || '-'}</td>
    <td>${r.contact || '-'}</td>
  </tr>`).join('');
}

function getHealthBadge(health) {
  const h = health.toLowerCase();
  if (h.includes('stable')) return 'badge-green';
  if (h.includes('heart') || h.includes('bp')) return 'badge-blue';
  if (h.includes('diabetes')) return 'badge-yellow';
  if (h.includes('arthrit')) return 'badge-red';
  return 'badge-green';
}

function editResident(id) {
  const data = getOAHData();
  const r = data.residents.find(x => x.id === id);
  if (!r) return;
  openEditModal(`
    <h3>Edit Resident</h3>
    <label>Name</label><input id="erName" value="${escHtml(r.name)}">
    <label>Age</label><input type="number" id="erAge" value="${r.age}">
    <label>Gender</label><select id="erGender"><option ${r.gender === 'Male' ? 'selected' : ''}>Male</option><option ${r.gender === 'Female' ? 'selected' : ''}>Female</option></select>
    <label>Joined (Year)</label><input id="erJoined" value="${r.joined}">
    <label>Health Status</label><input id="erHealth" value="${escHtml(r.health)}">
    <label>Relation</label>
    <select id="erRelation"><option ${r.relation === 'Son' ? 'selected' : ''}>Son</option><option ${r.relation === 'Daughter' ? 'selected' : ''}>Daughter</option><option ${r.relation === 'Spouse' ? 'selected' : ''}>Spouse</option><option ${r.relation === 'Sibling' ? 'selected' : ''}>Sibling</option><option ${r.relation === 'Other' ? 'selected' : ''}>Other</option></select>
    <label>Contact Number</label><input id="erContact" value="${escHtml(r.contact)}">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveResident(${id})">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {});
}

function saveResident(id) {
  const data = getOAHData();
  const r = data.residents.find(x => x.id === id);
  if (!r) return;
  r.name = document.getElementById('erName').value;
  r.age = parseInt(document.getElementById('erAge').value) || 0;
  r.gender = document.getElementById('erGender').value;
  r.joined = document.getElementById('erJoined').value;
  r.health = document.getElementById('erHealth').value;
  r.relation = document.getElementById('erRelation').value;
  r.contact = document.getElementById('erContact').value;
  saveOAHData(data);
  renderOAHResidents();
  closeEditModal();
}

function deleteResident(id) {
  if (!confirm('Delete this resident?')) return;
  const data = getOAHData();
  data.residents = data.residents.filter(r => r.id !== id);
  data.medical = data.medical.filter(m => m.residentId !== id);
  saveOAHData(data);
  renderOAHResidents();
}

function addResident() {
  openEditModal(`
    <h3>Add Resident</h3>
    <label>Name</label><input id="erName">
    <label>Age</label><input type="number" id="erAge">
    <label>Gender</label><select id="erGender"><option>Male</option><option>Female</option></select>
    <label>Joined (Year)</label><input id="erJoined">
    <label>Health Status</label><input id="erHealth" value="Stable">
    <label>Relation</label>
    <select id="erRelation"><option>Son</option><option>Daughter</option><option>Spouse</option><option>Sibling</option><option>Other</option></select>
    <label>Contact Number</label><input id="erContact" placeholder="e.g. 9876543210">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveNewResident()">Add</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {});
}

function saveNewResident() {
  const data = getOAHData();
  const maxId = data.residents.reduce((m, r) => Math.max(m, r.id), 0);
  data.residents.push({
    id: maxId + 1,
    name: document.getElementById('erName').value,
    age: parseInt(document.getElementById('erAge').value) || 0,
    gender: document.getElementById('erGender').value,
    joined: document.getElementById('erJoined').value,
    health: document.getElementById('erHealth').value,
    relation: document.getElementById('erRelation').value,
    contact: document.getElementById('erContact').value
  });
  data.stats.total = data.residents.length;
  saveOAHData(data);
  renderOAHResidents();
  closeEditModal();
}

// ─── ATTENDANCE ───
function loadAttendanceForDate() {
  const dateInput = document.getElementById('attendanceDate');
  if (!dateInput) return;
  const date = dateInput.value;
  if (!date) return;

  const data = getOAHData();
  if (!data.attendance[date]) {
    data.attendance[date] = {};
  }
  saveOAHData(data);
  renderAttendanceTable(date);
}

function renderAttendanceTable(date) {
  const data = getOAHData();
  const tbody = document.getElementById('attendanceTableBody');
  if (!tbody) return;

  const att = data.attendance[date] || {};
  let presentCount = 0;

  tbody.innerHTML = data.residents.map((r, i) => {
    const status = att[r.id] || 'not-marked';
    if (status === 'present') presentCount++;
    return `<tr>
      <td>${i + 1}</td>
      <td>${r.name}</td>
      <td style="text-align:center;">
        <div class="att-btn-group">
          <button class="att-btn ${status === 'present' ? 'present' : ''}" onclick="setAttendance(${r.id}, '${date}', 'present')">P</button>
          <button class="att-btn ${status === 'absent' ? 'absent' : ''}" onclick="setAttendance(${r.id}, '${date}', 'absent')">A</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('presentToday').textContent = presentCount;
  data.stats.present = presentCount;
  saveOAHData(data);
}

function setAttendance(residentId, date, status) {
  const data = getOAHData();
  if (!data.attendance[date]) data.attendance[date] = {};
  const current = data.attendance[date][residentId];
  if (current === status) {
    delete data.attendance[date][residentId];
  } else {
    data.attendance[date][residentId] = status;
  }
  saveOAHData(data);
  renderAttendanceTable(date);
}

function markAllForDate(status) {
  const dateInput = document.getElementById('attendanceDate');
  if (!dateInput) return;
  const date = dateInput.value;
  if (!date) return;
  const data = getOAHData();
  if (!data.attendance[date]) data.attendance[date] = {};
  data.residents.forEach(r => {
    data.attendance[date][r.id] = status;
  });
  saveOAHData(data);
  renderAttendanceTable(date);
}

// ─── MEDICAL REPORTS ───
function renderOAHMedical() {
  const container = document.getElementById('medicalList');
  if (!container) return;
  const data = getOAHData();

  if (data.medical.length === 0) {
    container.innerHTML = '<p style="color:var(--text-light);padding:15px 0;">No medical records yet.</p>';
    return;
  }

  container.innerHTML = data.medical.map(m => {
    const resident = data.residents.find(r => r.id === m.residentId);
    const nextCheckupDate = m.nextCheckup ? new Date(m.nextCheckup) : null;
    const today = new Date();
    let checkupClass = 'done';
    let checkupLabel = 'No follow-up';
    if (nextCheckupDate) {
      const diffDays = Math.ceil((nextCheckupDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) {
        checkupClass = 'overdue';
        checkupLabel = `Overdue by ${Math.abs(diffDays)} days`;
      } else if (diffDays <= 7) {
        checkupClass = 'upcoming';
        checkupLabel = diffDays === 0 ? 'Today!' : `In ${diffDays} days`;
      } else {
        checkupClass = 'done';
        checkupLabel = nextCheckupDate.toLocaleDateString('en-IN');
      }
    }
    return `<div class="resident-med-card">
      <div class="med-info">
        <h4>${m.name} <span class="badge badge-yellow" style="margin-left:6px;">${m.condition || ''}</span></h4>
        <p>Age: ${m.age} | Last Checkup: ${m.checkup} | Doctor: ${m.doctor}</p>
        <p style="font-size:12px;margin-top:4px;">
          <strong>Next Checkup:</strong> <span class="med-next-checkup ${checkupClass}">${checkupLabel}</span>
          ${m.meds && m.meds.length ? `| Medications: ${m.meds.map(x => x.name + ' (' + x.time + ')').join(', ')}` : ''}
        </p>
      </div>
      <div class="med-actions">
        <button class="btn-small" onclick="editMedicalReport(${m.id})" style="padding:3px 10px;font-size:11px;"><i class="fas fa-pencil-alt"></i></button>
        <button class="btn-small" onclick="deleteMedicalReport(${m.id})" style="padding:3px 10px;font-size:11px;background:#dc2626;"><i class="fas fa-trash"></i></button>
      </div>
    </div>`;
  }).join('');
  document.getElementById('medicalCount').textContent = data.medical.length;
}

function addMedicalReport() {
  const data = getOAHData();
  const residentOptions = data.residents.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
  openEditModal(`
    <h3>Add Medical Report</h3>
    <label>Resident</label><select id="emResidentId">${residentOptions}</select>
    <label>Condition</label><input id="emCondition" value="Stable">
    <label>Last Checkup Date</label><input type="date" id="emCheckup">
    <label>Next Checkup Date</label><input type="date" id="emNextCheckup">
    <label>Doctor</label><input id="emDoctor">
    <label>Medications (one per line: Name|Time)</label>
    <textarea id="emMeds" rows="3" placeholder="e.g. Amlodipine 5mg|Morning 8am"></textarea>
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveNewMedicalReport()">Add</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {});
}

function saveNewMedicalReport() {
  const data = getOAHData();
  const residentId = parseInt(document.getElementById('emResidentId').value);
  const resident = data.residents.find(r => r.id === residentId);
  const meds = document.getElementById('emMeds').value.split('\n').filter(Boolean).map(line => {
    const parts = line.split('|');
    return { name: parts[0]?.trim() || '', time: parts[1]?.trim() || '' };
  });
  const maxId = data.medical.reduce((m, r) => Math.max(m, r.id), 0);
  data.medical.push({
    id: maxId + 1,
    residentId: residentId,
    name: resident ? resident.name : 'Unknown',
    age: resident ? resident.age : 0,
    checkup: document.getElementById('emCheckup').value,
    nextCheckup: document.getElementById('emNextCheckup').value || '',
    doctor: document.getElementById('emDoctor').value,
    lastVisit: document.getElementById('emCheckup').value,
    condition: document.getElementById('emCondition').value,
    meds: meds
  });
  saveOAHData(data);
  renderOAHMedical();
  closeEditModal();
}

function editMedicalReport(id) {
  const data = getOAHData();
  const m = data.medical.find(x => x.id === id);
  if (!m) return;
  const residentOptions = data.residents.map(r =>
    `<option value="${r.id}" ${r.id === m.residentId ? 'selected' : ''}>${r.name}</option>`
  ).join('');
  const medsStr = m.meds ? m.meds.map(x => x.name + '|' + x.time).join('\n') : '';
  openEditModal(`
    <h3>Edit Medical Report</h3>
    <label>Resident</label><select id="emResidentId">${residentOptions}</select>
    <label>Condition</label><input id="emCondition" value="${escHtml(m.condition || '')}">
    <label>Last Checkup Date</label><input type="date" id="emCheckup" value="${m.checkup || ''}">
    <label>Next Checkup Date</label><input type="date" id="emNextCheckup" value="${m.nextCheckup || ''}">
    <label>Doctor</label><input id="emDoctor" value="${escHtml(m.doctor || '')}">
    <label>Medications (one per line: Name|Time)</label>
    <textarea id="emMeds" rows="3">${medsStr}</textarea>
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveMedicalReport(${id})">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {});
}

function saveMedicalReport(id) {
  const data = getOAHData();
  const m = data.medical.find(x => x.id === id);
  if (!m) return;
  const residentId = parseInt(document.getElementById('emResidentId').value);
  const resident = data.residents.find(r => r.id === residentId);
  m.residentId = residentId;
  m.name = resident ? resident.name : m.name;
  m.age = resident ? resident.age : m.age;
  m.checkup = document.getElementById('emCheckup').value;
  m.nextCheckup = document.getElementById('emNextCheckup').value || '';
  m.doctor = document.getElementById('emDoctor').value;
  m.lastVisit = document.getElementById('emCheckup').value;
  m.condition = document.getElementById('emCondition').value;
  m.meds = document.getElementById('emMeds').value.split('\n').filter(Boolean).map(line => {
    const parts = line.split('|');
    return { name: parts[0]?.trim() || '', time: parts[1]?.trim() || '' };
  });
  saveOAHData(data);
  renderOAHMedical();
  closeEditModal();
}

function deleteMedicalReport(id) {
  if (!confirm('Delete this medical report?')) return;
  const data = getOAHData();
  data.medical = data.medical.filter(m => m.id !== id);
  saveOAHData(data);
  renderOAHMedical();
}

function checkMedicalNotifications() {
  const data = getOAHData();
  const today = new Date();
  const upcoming = data.medical.filter(m => {
    if (!m.nextCheckup) return false;
    const d = new Date(m.nextCheckup);
    const diff = Math.ceil((d - today) / (1000 * 60 * 60 * 24));
    return diff <= 3 && diff >= -1;
  });
  if (upcoming.length > 0) {
    const badge = document.getElementById('notifBadge');
    if (badge) {
      badge.textContent = upcoming.length + ' checkups due';
      badge.style.display = 'inline';
    }
  }
}

// ─── DONORS ───
function renderOAHDonors() {
  const container = document.getElementById('donorsListAdmin');
  if (!container) return;
  const data = getOAHData();
  container.innerHTML = data.donors.map(d =>
    `<div class="notif-card">
      <div class="notif-info">
        <h4>${escHtml(d.name)} <span style="color:var(--primary);font-weight:700;">₹${d.amount}</span></h4>
        <p>${escHtml(d.message)} — ${d.date}</p>
      </div>
      <div class="notif-actions">
        <button class="btn-small" onclick="editDonor(${d.id})" style="font-size:11px;padding:3px 10px;"><i class="fas fa-pencil-alt"></i></button>
        <button class="btn-small" onclick="deleteDonor(${d.id})" style="font-size:11px;padding:3px 10px;background:#dc2626;"><i class="fas fa-trash"></i></button>
      </div>
    </div>`
  ).join('');
}

function addDonor() {
  openEditModal(`
    <h3>Add Donor</h3>
    <label>Name</label><input id="edName">
    <label>Amount (₹)</label><input type="number" id="edAmount">
    <label>Message</label><input id="edMessage">
    <label>Date</label><input type="date" id="edDate">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveNewDonor()">Add</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {});
}

function saveNewDonor() {
  const data = getOAHData();
  const maxId = data.donors.reduce((m, d) => Math.max(m, d.id), 0);
  data.donors.push({
    id: maxId + 1,
    name: document.getElementById('edName').value,
    amount: parseInt(document.getElementById('edAmount').value) || 0,
    message: document.getElementById('edMessage').value,
    date: document.getElementById('edDate').value || new Date().toISOString().split('T')[0],
    approved: false
  });
  saveOAHData(data);
  renderOAHDonors();
  closeEditModal();
}

function editDonor(id) {
  const data = getOAHData();
  const d = data.donors.find(x => x.id === id);
  if (!d) return;
  openEditModal(`
    <h3>Edit Donor</h3>
    <label>Name</label><input id="edName" value="${escHtml(d.name)}">
    <label>Amount (₹)</label><input type="number" id="edAmount" value="${d.amount}">
    <label>Message</label><input id="edMessage" value="${escHtml(d.message)}">
    <label>Date</label><input type="date" id="edDate" value="${d.date}">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveEditDonor(${id})">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {});
}

function saveEditDonor(id) {
  const data = getOAHData();
  const d = data.donors.find(x => x.id === id);
  if (!d) return;
  d.name = document.getElementById('edName').value;
  d.amount = parseInt(document.getElementById('edAmount').value) || 0;
  d.message = document.getElementById('edMessage').value;
  d.date = document.getElementById('edDate').value;
  saveOAHData(data);
  renderOAHDonors();
  closeEditModal();
}

function deleteDonor(id) {
  if (!confirm('Delete this donor record?')) return;
  const data = getOAHData();
  data.donors = data.donors.filter(d => d.id !== id);
  saveOAHData(data);
  renderOAHDonors();
}

// ─── NOTIFICATIONS ───
function renderOAHNotifications() {
  const container = document.getElementById('notificationsList');
  if (!container) return;
  const data = getOAHData();

  // Check medical notifications
  const today = new Date();
  const medNotifs = data.medical.filter(m => {
    if (!m.nextCheckup) return false;
    const d = new Date(m.nextCheckup);
    const diff = Math.ceil((d - today) / (1000 * 60 * 60 * 24));
    return diff <= 3 && diff >= -1;
  });

  // Volunteer submissions
  let volunteers = [];
  if (typeof _cachedVolunteers !== 'undefined') {
    volunteers = _cachedVolunteers || [];
  }

  let html = '';

  if (volunteers.length > 0) {
    html += `<h4 style="margin:10px 0;color:var(--accent);"><i class="fas fa-hands-helping"></i> New Volunteer Applications</h4>`;
    volunteers.slice(-5).reverse().forEach(v => {
      html += `<div class="notif-card" style="border-left:3px solid var(--accent);">
        <div class="notif-info">
          <h4>${escHtml(v.name)} <span style="color:var(--text-light);font-size:12px;font-weight:400;">${v.email}</span></h4>
          <p>${escHtml(v.message)} — ${v.date}</p>
        </div>
      </div>`;
    });
  }

  if (medNotifs.length > 0) {
    html += `<h4 style="margin:10px 0;color:var(--primary);"><i class="fas fa-notes-medical"></i> Upcoming Medical Checkups</h4>`;
    medNotifs.forEach(m => {
      html += `<div class="notif-card" style="border-left:3px solid var(--primary);">
        <div class="notif-info">
          <h4>${m.name}</h4>
          <p>Next checkup: <strong>${m.nextCheckup}</strong> | ${m.doctor}</p>
        </div>
      </div>`;
    });
  }

  if (!html) {
    html = '<p style="color:var(--text-light);text-align:center;padding:20px 0;">No new notifications.</p>';
  }

  container.innerHTML = html;

  const totalNotifs = medNotifs.length + volunteers.length;
  const badge = document.getElementById('notifBadge');
  if (badge) {
    if (totalNotifs > 0) {
      badge.textContent = totalNotifs + ' pending';
      badge.style.display = 'inline';
    } else {
      badge.style.display = 'none';
    }
  }
}

// ─── MENU ───
function renderOAHMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const data = getOAHData();
  grid.innerHTML = data.menu.map(m => `<div class="menu-card">
    <div class="day">${m.day}</div>
    <div class="meal"><strong>Breakfast:</strong> ${m.breakfast}</div>
    <div class="meal"><strong>Lunch:</strong> ${m.lunch}</div>
    <div class="meal"><strong>Snacks:</strong> ${m.snacks}</div>
    <div class="meal"><strong>Dinner:</strong> ${m.dinner}</div>
  </div>`).join('');
}

// ─── MENU EDITOR ───
function renderMenuEditor() {
  const form = document.getElementById('menuEditorForm');
  if (!form) return;
  const data = getOAHData();
  form.innerHTML = data.menu.map((m, i) => `<div style="background:#fff;border-radius:var(--radius);padding:15px;margin-bottom:12px;border:1px solid var(--cream-dark);">
    <h4 style="margin-bottom:8px;color:var(--primary);">${m.day}</h4>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <label style="font-size:12px;font-weight:600;">Breakfast</label>
      <label style="font-size:12px;font-weight:600;">Lunch</label>
      <input value="${escHtml(m.breakfast)}" id="menuBrk${i}" style="padding:6px 10px;border:1px solid #E2E8F0;border-radius:6px;font-size:13px;">
      <input value="${escHtml(m.lunch)}" id="menuLun${i}" style="padding:6px 10px;border:1px solid #E2E8F0;border-radius:6px;font-size:13px;">
      <label style="font-size:12px;font-weight:600;">Snacks</label>
      <label style="font-size:12px;font-weight:600;">Dinner</label>
      <input value="${escHtml(m.snacks)}" id="menuSnk${i}" style="padding:6px 10px;border:1px solid #E2E8F0;border-radius:6px;font-size:13px;">
      <input value="${escHtml(m.dinner)}" id="menuDin${i}" style="padding:6px 10px;border:1px solid #E2E8F0;border-radius:6px;font-size:13px;">
    </div>
  </div>`).join('');
}

function saveMenuEditor() {
  const data = getOAHData();
  data.menu.forEach((m, i) => {
    m.breakfast = document.getElementById(`menuBrk${i}`).value;
    m.lunch = document.getElementById(`menuLun${i}`).value;
    m.snacks = document.getElementById(`menuSnk${i}`).value;
    m.dinner = document.getElementById(`menuDin${i}`).value;
  });
  saveOAHData(data);
  renderOAHMenu();
  renderMenuEditor();
  alert('Menu saved successfully!');
}

// ─── EXPORT TO EXCEL (CSV) ───
function downloadCSV(filename, headers, rows) {
  const csvContent = [headers.join(','), ...rows.map(r => r.map(cell => {
    const val = String(cell).replace(/"/g, '""');
    return `"${val}"`;
  }).join(','))].join('\n');
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function exportAttendanceExcel() {
  const data = getOAHData();
  const dates = Object.keys(data.attendance).sort();
  if (dates.length === 0) {
    alert('No attendance data to export.');
    return;
  }
  const headers = ['Resident', ...dates.map(d => d)];
  const rows = data.residents.map(r => {
    return [r.name, ...dates.map(d => {
      const status = data.attendance[d]?.[r.id] || 'Not Marked';
      return status === 'present' ? 'Present' : status === 'absent' ? 'Absent' : 'Not Marked';
    })];
  });
  downloadCSV('attendance_report.csv', headers, rows);
}

function exportMedicalExcel() {
  const data = getOAHData();
  const headers = ['Resident', 'Age', 'Condition', 'Last Checkup', 'Next Checkup', 'Doctor', 'Medications'];
  const rows = data.medical.map(m => [
    m.name, m.age, m.condition || '', m.checkup || '', m.nextCheckup || '',
    m.doctor || '', m.meds ? m.meds.map(x => x.name + ' (' + x.time + ')').join('; ') : ''
  ]);
  downloadCSV('medical_reports.csv', headers, rows);
}

function exportDonorsExcel() {
  const data = getOAHData();
  const headers = ['Name', 'Amount', 'Message', 'Date', 'Approved'];
  const rows = data.donors.map(d => [
    d.name, '₹' + d.amount, d.message, d.date, d.approved ? 'Yes' : 'No'
  ]);
  downloadCSV('donors_data.csv', headers, rows);
}

function exportResidentsExcel() {
  const data = getOAHData();
  const headers = ['Name', 'Age', 'Gender', 'Joined', 'Health Status', 'Relation', 'Contact'];
  const rows = data.residents.map(r => [
    r.name, r.age, r.gender, r.joined, r.health, r.relation || '', r.contact || ''
  ]);
  downloadCSV('residents_data.csv', headers, rows);
}

// ─── EDIT MODAL ───
let editModalCallback = null;

function openEditModal(html, onSave) {
  const overlay = document.getElementById('editModalOverlay');
  if (!overlay) {
    const o = document.createElement('div');
    o.className = 'edit-modal-overlay';
    o.id = 'editModalOverlay';
    o.onclick = function(e) { if (e.target === this) closeEditModal(); };
    document.body.appendChild(o);
  }
  const modal = document.getElementById('editModalOverlay');
  modal.innerHTML = `<div class="edit-modal">${html}</div>`;
  modal.classList.add('open');
  editModalCallback = onSave;
}

function closeEditModal() {
  document.getElementById('editModalOverlay')?.classList.remove('open');
  editModalCallback = null;
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── INIT ───
if (!document.getElementById('editModalOverlay')) {
  const overlay = document.createElement('div');
  overlay.className = 'edit-modal-overlay';
  overlay.id = 'editModalOverlay';
  overlay.onclick = function(e) { if (e.target === this) closeEditModal(); };
  document.body.appendChild(overlay);
}
if (!document.getElementById('adminEditStyles')) {
  const s = document.createElement('style');
  s.id = 'adminEditStyles';
  s.textContent = `
    .edit-modal-overlay { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998; align-items:center; justify-content:center; }
    .edit-modal-overlay.open { display:flex; }
    .edit-modal { background:#fff; padding:30px; border-radius:20px; width:90%; max-width:500px; max-height:80vh; overflow-y:auto; box-shadow:0 20px 60px rgba(0,0,0,0.2); }
    .edit-modal h3 { margin-bottom:15px; }
    .edit-modal label { display:block; font-size:13px; font-weight:600; margin:10px 0 4px; color:var(--text); }
    .edit-modal input, .edit-modal textarea, .edit-modal select { width:100%; padding:8px 12px; border:2px solid #e0e0e0; border-radius:10px; font-size:14px; box-sizing:border-box; }
    .edit-modal .btn-row { display:flex; gap:10px; margin-top:20px; }
    .edit-modal .btn-row button { flex:1; }
    body.admin-logged-in .admin-badge { display: table-cell !important; }
    body.admin-logged-in .admin-img-actions { display: flex !important; }
    .gallery-back-btn {
      display: inline-flex; align-items: center; gap: 6px; margin-bottom: 20px;
      padding: 10px 22px; background: var(--gradient-1); color: #fff; border: none;
      border-radius: 50px; font-weight: 600; font-size: 14px; cursor: pointer;
      text-decoration: none; transition: all 0.3s; box-shadow: 0 4px 15px rgba(245,158,11,0.25);
    }
    .gallery-back-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(245,158,11,0.35); }
  `;
  document.head.appendChild(s);
}

let _cachedVolunteers = null;

async function loadApiData() {
  try {
    if (typeof apiLoadAllOahData === 'function') {
      await apiLoadAllOahData();
    }
    if (typeof apiGetVolunteers === 'function') {
      _cachedVolunteers = await apiGetVolunteers();
    }
  } catch (e) {
    // API not available, fall back to localStorage
  }
  initOAH();
}

initPage();

const isOAH = window.location.pathname.includes('oldage-home');
const isGallery = window.location.pathname.includes('gallery');

if (isOAH) {
  if (typeof apiLoadAllOahData === 'function') {
    loadApiData();
  } else {
    initOAH();
  }
}
if (isGallery) {
  // Gallery admin is handled inline in gallery.html
}
if (document.body.classList.contains('admin-logged-in')) {
  const loginBtn = document.getElementById('adminLoginBtn');
  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (loginBtn) loginBtn.style.display = 'none';
  if (logoutBtn) logoutBtn.style.display = 'inline-flex';
  if (isOAH && typeof apiLoadAllOahData !== 'function') initOAH();
  if (isGallery) {
    document.querySelectorAll('.admin-img-actions').forEach(el => el.style.display = 'flex');
  }
}

// ─── DONATION FLOW ───
function processDonate(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('donateName')?.value?.trim();
  const email = document.getElementById('donateEmail')?.value?.trim();
  const phone = document.getElementById('donatePhone')?.value?.trim();
  const amount = document.getElementById('donateAmount')?.value?.trim();
  const method = document.getElementById('donateMethod')?.value;
  const message = document.getElementById('donateMessage')?.value?.trim();

  if (!name || !email || !amount) {
    alert('Please fill in all required fields.');
    return false;
  }
  if (isNaN(amount) || Number(amount) <= 0) {
    alert('Please enter a valid donation amount.');
    return false;
  }

  const params = new URLSearchParams();
  params.set('name', name);
  params.set('email', email);
  params.set('amount', amount);
  if (phone) params.set('phone', phone);
  if (message) params.set('message', message);
  if (method) params.set('method', method);

  window.location.href = 'payment.html?' + params.toString();
  return false;
}

function backToDonateForm() {
  window.location.href = 'donate.html';
}

// WhatsApp Float
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('wa-float')) {
    const wa = document.createElement('a');
    wa.id = 'wa-float';
    wa.href = 'https://api.whatsapp.com/send?phone=919502046096';
    wa.target = '_blank';
    wa.className = 'whatsapp-float';
    wa.innerHTML = '<i class="fab fa-whatsapp" style="font-size:28px;"></i>';
    document.body.appendChild(wa);
  }
});
