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
    'Learn More': 'మరింత తెలుసుకోండి',
    'Volunteer': 'స్వచ్ఛంద సేవకుడు',
    'Our Mission': 'మా లక్ష్యం',
    'Our Vision': 'మా దృష్టి',
    'Our Values': 'మా విలువలు',
    'Our Journey': 'మా ప్రయాణం',
    'Our Growth Journey': 'మా వృద్ధి ప్రయాణం',
    'Mission': 'లక్ష్యం',
    'Vision': 'దృష్టి',
    'Values': 'విలువలు',
    'Journey': 'ప్రయాణం',
    'Get In Touch': 'సంప్రదించండి',
    'Send Message': 'సందేశం పంపండి',
    'Send us a Message': 'మాకు సందేశం పంపండి',
    'Submit Application': 'దరఖాస్తు సమర్పించండి',
    'Subscribe': 'సబ్స్క్రయిబ్ చేయండి',
    'Quick Links': 'త్వరిత లింకులు',
    'Our Programs': 'మా కార్యక్రమాలు',
    'Newsletter': 'వార్తాలేఖ',
    'Your email address': 'మీ ఇమెయిల్ చిరునామా',
    'Stay updated with our latest projects and stories.': 'మా తాజా ప్రాజెక్టులు మరియు కథనాలతో అప్‌డేట్‌గా ఉండండి.',
    'All rights reserved.': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    'Privacy Policy': 'గోప్యతా విధానం',
    'Terms of Service': 'సేవా నిబంధనలు',
    'Wonder Woman': 'వండర్ ఉమెన్',
    'Brand Ambassador of Volunteering': 'స్వచ్ఛంద సేవకు బ్రాండ్ అంబాసిడర్',
    'Perumalla Gowri Sirisha': 'పెరుమల్ల గౌరీ సిరీష',
    'Blood Donation Camps': 'రక్తదాన శిబిరాలు',
    'Families Fed in COVID': 'COVID లో ఆహారం అందించిన కుటుంబాలు',
    'Saplings Planted': 'నాటిన మొక్కలు',
    'Our Impact': 'మా ప్రభావం',
    'Through our dedicated efforts, we have created meaningful change and brought hope to thousands of lives.': 'మా అంకితభావంతో కూడిన ప్రయత్నాల ద్వారా, మేము అర్ధవంతమైన మార్పును సృష్టించాము మరియు వేలాది జీవితాలకు ఆశను తీసుకువచ్చాము.',
    'Lives Touched': 'స్పర్శించిన జీవితాలు',
    'Funds Raised': 'సేకరించిన నిధులు',
    'Volunteers': 'స్వచ్ఛంద సేవకులు',
    'Events Hosted': 'నిర్వహించిన కార్యక్రమాలు',
    'Join as a Volunteer': 'స్వచ్ఛంద సేవకుడిగా చేరండి',
    'Be part of our mission. Volunteer, donate, or partner with us to create lasting change.': 'మా మిషన్లో భాగం అవ్వండి. శాశ్వత మార్పును సృష్టించడానికి స్వచ్ఛందంగా పనిచేయండి, దానం చేయండి లేదా భాగస్వామి అవ్వండి.',
    'Why Volunteer With Us?': 'మాతో ఎందుకు స్వచ్ఛందంగా పనిచేయాలి?',
    'Make Real Impact': 'నిజమైన ప్రభావాన్ని చూపండి',
    'See the direct results of your efforts in transformed communities.': 'మారిన సమాజాలలో మీ ప్రయత్నాల ప్రత్యక్ష ఫలితాలను చూడండి.',
    'Build Networks': 'నెట్‌వర్క్‌లను నిర్మించండి',
    'Connect with like-minded individuals and build lasting friendships.': 'సమాన ఆలోచనలు గల వ్యక్తులతో కనెక్ట్ అవ్వండి మరియు శాశ్వత స్నేహాలను నిర్మించండి.',
    'Develop Skills': 'నైపుణ్యాలను అభివృద్ధి చేయండి',
    'Gain valuable experience and develop new professional skills.': 'విలువైన అనుభవాన్ని పొందండి మరియు కొత్త వృత్తి నైపుణ్యాలను అభివృద్ధి చేయండి.',
    'Recognition': 'గుర్తింపు',
    'Receive certificates and recognition for your valuable contributions.': 'మీ విలువైన సహకారాలకు సర్టిఫికెట్లు మరియు గుర్తింపు పొందండి.',
    'Full Name': 'పూర్తి పేరు',
    'Full Name *': 'పూర్తి పేరు *',
    'Email *': 'ఇమెయిల్ *',
    'Email': 'ఇమెయిల్',
    'Phone': 'ఫోన్',
    'Area of Interest': 'ఆసక్తి గల రంగం',
    'Education': 'విద్య',
    'Healthcare': 'ఆరోగ్య సంరక్షణ',
    'Community Development': 'సమాజ అభివృద్ధి',
    'Fundraising': 'నిధుల సేకరణ',
    'Digital Media': 'డిజిటల్ మీడియా',
    'Why do you want to join? *': 'మీరు ఎందుకు చేరాలనుకుంటున్నారు? *',
    'Stories of Impact': 'ప్రభావం యొక్క కథనాలు',
    'Hear from the people whose lives have been transformed through our programs.': 'మా కార్యక్రమాల ద్వారా జీవితాలు మారిన వ్యక్తుల నుండి వినండి.',
    'Parent & Community Leader': 'తల్లిదండ్రులు & సమాజ నాయకుడు',
    'Medical Student, Scholar': 'వైద్య విద్యార్థి, స్కాలర్',
    'Entrepreneur & Beneficiary': 'వ్యవస్థాపకుడు & లబ్ధిదారుడు',
    'Contact Information': 'సంప్రదింపు సమాచారం',
    'Office Address': 'కార్యాలయ చిరునామా',
    'Phone & Email': 'ఫోన్ & ఇమెయిల్',
    'Office Hours': 'కార్యాలయ సమయాలు',
    'General Inquiry': 'సాధారణ విచారణ',
    'Volunteer Opportunities': 'స్వచ్ఛంద సేవా అవకాశాలు',
    'Partnership': 'భాగస్వామ్యం',
    'Donations': 'విరాళాలు',
    'Media & Press': 'మీడియా & ప్రెస్',
    'Message *': 'సందేశం *',
    'Message (optional)': 'సందేశం (ఐచ్ఛికం)',
    'First Name *': 'మొదటి పేరు *',
    'Last Name *': 'చివరి పేరు *',
    'Subject *': 'విషయం *',
    'Your generous donation helps us provide education, healthcare, and essential resources to underprivileged communities across India. Every contribution, no matter how small, creates lasting change.': 'మీ ఉదారమైన విరాళం భారతదేశంలోని వెనుకబడిన సమాజాలకు విద్య, ఆరోగ్య సంరక్షణ మరియు అవసరమైన వనరులను అందించడానికి మాకు సహాయపడుతుంది. ప్రతి సహకారం, ఎంత చిన్నదైనా, శాశ్వత మార్పును సృష్టిస్తుంది.',
    'Lives Impacted': 'ప్రభావితమైన జీవితాలు',
    'Projects Completed': 'పూర్తి చేసిన ప్రాజెక్టులు',
    'Transparency': 'పారదర్శకత',
    'Make a Difference Today': 'ఈ రోజే మార్పు తీసుకురండి',
    'Donation Details': 'విరాళం వివరాలు',
    'Donation Amount (₹) *': 'విరాళం మొత్తం (₹) *',
    'Enter amount': 'మొత్తాన్ని నమోదు చేయండి',
    'Payment Method': 'చెల్లింపు విధానం',
    'UPI': 'UPI',
    'Net Banking': 'నెట్ బ్యాంకింగ్',
    'Credit / Debit Card': 'క్రెడిట్ / డెబిట్ కార్డ్',
    'Leave a note with your donation...': 'మీ విరాళంతో ఒక గమనికను ఉంచండి...',
    'Proceed to Donate': 'దానం చేయడానికి కొనసాగండి',
    'Scan to donate via UPI': 'UPI ద్వారా దానం చేయడానికి స్కాన్ చేయండి',
    'Feeds a child for a month': 'ఒక పిల్లలకు ఒక నెల ఆహారం',
    'School supplies for a child': 'ఒక పిల్లలకు స్కూల్ సామాగ్రి',
    'Healthcare for a family': 'ఒక కుటుంబానికి ఆరోగ్య సంరక్షణ',
    'Any amount you choose': 'మీరు ఎంచుకున్న ఏ మొత్తం అయినా',
    'Custom': 'అనుకూలం',
    'Our Gallery': 'మా గ్యాలరీ',
    'Explore moments captured across our various events and programs. Click on an event folder to view photos and videos.': 'మా వివిధ కార్యక్రమాలు మరియు ప్రోగ్రాములలో సంగ్రహించిన క్షణాలను అన్వేషించండి. ఫోటోలు మరియు వీడియోలను వీక్షించడానికి ఈవెంట్ ఫోల్డర్ పై క్లిక్ చేయండి.',
    'Education Camp': 'విద్యా శిబిరం',
    'Teaching and mentoring sessions': 'బోధన మరియు మెంటరింగ్ సెషన్లు',
    'Health Camp': 'ఆరోగ్య శిబిరం',
    'Free medical check-up camps': 'ఉచిత వైద్య పరీక్షా శిబిరాలు',
    'Community Clean-Up': 'కమ్యూనిటీ క్లీన్-అప్',
    'Neighborhood cleaning drives': 'పరిసర ప్రాంతాల శుభ్రపరచడం',
    'Women Empowerment': 'మహిళా సాధికారత',
    'Skill development workshops': 'నైపుణ్య అభివృద్ధి వర్క్‌షాప్‌లు',
    'Feeding Program': 'ఆహార కార్యక్రమం',
    'Meal distribution drives': 'భోజన పంపిణీ డ్రైవ్‌లు',
    'Tech Workshop': 'టెక్ వర్క్‌షాప్',
    'Digital literacy & coding classes': 'డిజిటల్ అక్షరాస్యత & కోడింగ్ తరగతులు',
    'Photos': 'ఫోటోలు',
    'Videos': 'వీడియోలు',
    'Our Teams': 'మా బృందాలు',
    'Our Dedicated Teams': 'మా అంకితమైన బృందాలు',
    'Meet our passionate teams working tirelessly to create positive change in communities across India.': 'భారతదేశం అంతటా సమాజాలలో సానుకూల మార్పును సృష్టించడానికి అవిశ్రాంతంగా పనిచేస్తున్న మా ఉత్సాహభరితమైన బృందాలను కలవండి.',
    'Back to Teams': 'బృందాలకు తిరిగి వెళ్ళు',
    'Back to Gallery': 'గ్యాలరీకి తిరిగి వెళ్ళు',
    'Lead by:': 'నాయకత్వం:',
    'Members': 'సభ్యులు',
    'Meals Daily': 'రోజువారీ భోజనం',
    'Locations': 'ప్రాంతాలు',
    'Patients Served': 'సేవలు అందించిన రోగులు',
    'Clinics': 'క్లినిక్‌లు',
    'Students Trained': 'శిక్షణ పొందిన విద్యార్థులు',
    'Centers': 'కేంద్రాలు',
    'Women Empowered': 'సాధికారత పొందిన మహిళలు',
    'Programs': 'కార్యక్రమాలు',
    'Videos Created': 'రూపొందించిన వీడియోలు',
    'Designs': 'డిజైన్‌లు',
    'Students Supported': 'మద్దతు పొందిన విద్యార్థులు',
    'Schools': 'పాఠశాలలు',
    'Feeding Hands': 'ఫీడింగ్ హ్యాండ్స్',
    'Life Saviours': 'లైఫ్ సేవియర్స్',
    'Tech Saala': 'టెక్ సాలా',
    'Elite Queens': 'ఎలైట్ క్వీన్స్',
    'Visual Vibes': 'విజువల్ వైబ్స్',
    'Guiding Lights': 'గైడింగ్ లైట్స్',
    'Dedicated to providing nutritious meals to underprivileged children and families.': 'వెనుకబడిన పిల్లలు మరియు కుటుంబాలకు పౌష్టికాహారం అందించడానికి అంకితం చేయబడింది.',
    'Providing healthcare services and medical assistance to rural communities.': 'గ్రామీణ సమాజాలకు ఆరోగ్య సంరక్షణ సేవలు మరియు వైద్య సహాయం అందించడం.',
    'Empowering youth with digital literacy and technology skills.': 'డిజిటల్ అక్షరాస్యత మరియు టెక్నాలజీ నైపుణ్యాలతో యువతను శక్తివంతం చేయడం.',
    'Empowering women through skill development and entrepreneurship.': 'నైపుణ్య అభివృద్ధి మరియు వ్యవస్థాపకత ద్వారా మహిళలను శక్తివంతం చేయడం.',
    'Creating compelling visual content and digital media to amplify our mission.': 'మా మిషన్‌ను విస్తరించడానికి ఆకర్షణీయమైన విజువల్ కంటెంట్ మరియు డిజిటల్ మీడియాను సృష్టించడం.',
    'Providing educational support and mentorship to students.': 'విద్యార్థులకు విద్యా సహాయం మరియు మెంటర్షిప్ అందించడం.',
    'Shanti Vrudhashramam': 'శాంతి వృద్ధాశ్రమం',
    'Providing love, care & dignity to our elderly residents since 2018': '2018 నుండి మా వృద్ధ నివాసితులకు ప్రేమ, సంరక్షణ & గౌరవాన్ని అందించడం',
    'Total Residents': 'మొత్తం నివాసితులు',
    'Present Today': 'ఈ రోజు హాజరు',
    'Under Medical Care': 'వైద్య సంరక్షణలో',
    'Residents': 'నివాసితులు',
    'Attendance': 'హాజరు',
    'Medical Reports': 'వైద్య నివేదికలు',
    'Menu': 'మెనూ',
    'Today:': 'ఈ రోజు:',
    'Mark All Present': 'అందరినీ హాజరుగా గుర్తించండి',
    'Download Report': 'నివేదికను డౌన్‌లోడ్ చేయండి',
    'Add Resident': 'నివాసితిని జోడించండి',
    'Name': 'పేరు',
    'Age': 'వయస్సు',
    'Gender': 'లింగం',
    'Joined': 'చేరిన తేదీ',
    'Health Status': 'ఆరోగ్య స్థితి',
    'Contact': 'సంప్రదించండి',
    'Stable': 'స్థిరం',
    'BP': 'బీపీ',
    'Diabetes': 'మధుమేహం',
    'Arthritis': 'కీళ్లనొప్పులు',
    'Heart Condition': 'గుండె సమస్య',
    'BP/Diabetes': 'బీపీ/మధుమేహం',
    'Arthritis/Knee Pain': 'కీళ్లనొప్పులు/మోకాలి నొప్పి',
    'Diabetes/BP': 'మధుమేహం/బీపీ',
    'Heart/BP': 'గుండె/బీపీ',
    'Present': 'హాజరు',
    'Absent': 'గైర్హాజరు',
    'Not Marked': 'గుర్తించలేదు',
    'Click on a dot to toggle attendance': 'హాజరును మార్చడానికి డాట్ పై క్లిక్ చేయండి',
    'This Week %': 'ఈ వారం %',
    'Nutritious & balanced meals prepared with love for our elders': 'మా పెద్దల కోసం ప్రేమతో తయారు చేసిన పౌష్టికమైన & సమతుల్య భోజనం',
    'Breakfast:': 'ఉదయం:',
    'Lunch:': 'మధ్యాహ్నం:',
    'Snacks:': 'స్నాక్స్:',
    'Dinner:': 'రాత్రి:',
    'Sunday': 'ఆదివారం',
    'Monday': 'సోమవారం',
    'Tuesday': 'మంగళవారం',
    'Wednesday': 'బుధవారం',
    'Thursday': 'గురువారం',
    'Friday': 'శుక్రవారం',
    'Saturday': 'శనివారం',
    'Skill Development': 'నైపుణ్య అభివృద్ధి',
    '100%': '100%',
    'FOUNDED': 'స్థాపించబడింది',
    '5 States': '5 రాష్ట్రాలు',
    'COVID Relief': 'COVID సహాయం',
    'Health Camps': 'ఆరోగ్య శిబిరాలు',
    'Healthcare Wing': 'ఆరోగ్య సంరక్షణ విభాగం',
    'Women Empower': 'మహిళా సాధికారత',
    'ONWARD': 'ముందుకు',
    'English': 'English',
    'Telugu': 'తెలుగు',
    'Our Vision': 'మా దృష్టి',
    'A world where every individual has access to justice, healthcare, education, and dignified livelihood': 'ప్రతి వ్యక్తికి న్యాయం, ఆరోగ్య సంరక్షణ, విద్య మరియు గౌరవప్రదమైన జీవనోపాధి లభించే ప్రపంచం',
    'Women Empowerment: Free tailoring centers, self-defense training, and legal aid for women.': 'మహిళా సాధికారత: ఉచిత టైలరింగ్ కేంద్రాలు, ఆత్మరక్షణ శిక్షణ మరియు మహిళలకు చట్టపరమైన సహాయం.',
    'Health for All: Blood donation camps, COVID relief, and accessible medical support.': 'అందరికీ ఆరోగ్యం: రక్తదాన శిబిరాలు, COVID సహాయం మరియు అందుబాటులో వైద్య సహాయం.',
    'Environmental Sustainability: Tree planting drives and awareness campaigns.': 'పర్యావరణ సుస్థిరత: వృక్షారోపణ డ్రైవ్‌లు మరియు అవగాహన ప్రచారాలు.',
    'To serve as a pillar of support for the distressed, the illiterate, and the elderly': 'బాధితులకు, నిరక్షరాస్యులకు మరియు వృద్ధులకు ఆధార్ స్తంభంగా సేవ చేయడం',
    'Legal Aid: Para-Legal services through District Legal Services Authority to ensure justice for all.': 'చట్టపరమైన సహాయం: అందరికీ న్యాయం నిర్ధారించడానికి జిల్లా లీగల్ సర్వీసెస్ అథారిటీ ద్వారా పారా-లీగల్ సేవలు.',
    'Food Security: Distributed essentials to 50,000+ families during COVID-19 lockdown.': 'ఆహార భద్రత: COVID-19 లాక్‌డౌన్ సమయంలో 50,000+ కుటుంబాలకు అవసరమైన వస్తువులు పంపిణీ.',
    'Youth Development: Personality development programs and awards for young volunteers.': 'యువత అభివృద్ధి: యువ స్వచ్ఛంద సేవకులకు వ్యక్తిత్వ వికాస కార్యక్రమాలు మరియు అవార్డులు.',
    'Selfless Service': 'నిస్వార్థ సేవ',
    'Driven by a spirit of voluntary service, putting others\' needs before our own': 'స్వచ్ఛంద సేవా స్ఫూర్తితో, మన అవసరాల కంటే ఇతరుల అవసరాలకు ప్రాధాన్యత ఇవ్వడం',
    'Social Justice': 'సామాజిక న్యాయం',
    'Standing against age-old inequalities and ensuring every individual has access to their rightful entitlements and legal aid.': 'పురాతన అసమానతలకు వ్యతిరేకంగా నిలబడి, ప్రతి వ్యక్తికి వారి హక్కులు మరియు చట్టపరమైన సహాయం లభించేలా చూడటం.',
    'Women\'s Safety': 'మహిళా భద్రత',
    'Empowering women through self-defense training, legal protection, and economic independence via skill development.': 'ఆత్మరక్షణ శిక్షణ, చట్టపరమైన రక్షణ మరియు నైపుణ్య అభివృద్ధి ద్వారా ఆర్థిక స్వాతంత్ర్యం ద్వారా మహిళలను సాధికారం చేయడం.',
    'Environmental Care': 'పర్యావరణ సంరక్షణ',
    'Planting thousands of saplings and fighting pollution': 'వేలాది మొక్కలను నాటడం మరియు కాలుష్యంతో పోరాడడం',
    'Our NGO. All rights reserved.': 'మా NGO. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    'Mon - Fri: 9:00 AM - 6:00 PM': 'సోమ - శుక్ర: ఉదయం 9 - సాయంత్రం 6',
    'Sat: 10:00 AM - 4:00 PM': 'శని: ఉదయం 10 - సాయంత్రం 4',
    'info@ourngo.org': 'info@ourngo.org',
    '+91 98765 43210': '+91 98765 43210',
    '123 Service Road, Vijayawada, AP 520001, India': '123 సర్వీస్ రోడ్, విజయవాడ, AP 520001, భారతదేశం',
    'From a small team of 3 to touching 50,000+ lives': '3 మందితో కూడిన చిన్న బృందం నుండి 50,000+ జీవితాలను తాకడం వరకు',
    'see how we\'ve grown over the years.': 'సంవత్సరాలుగా మనం ఎలా ఎదిగామో చూడండి.',
    // Standalone word keys (for text broken across child elements like "Empowering <span>Communities</span>")
    // Standalone word keys for text broken across child elements (e.g. "Empowering <span>Communities</span>")
    'Empowering ': 'సమాజాలను శక్తివంతం చేయడం ',
    'Communities': 'సమాజాలు',
    'About ': 'మా గురించి ',
    'Our ': 'మా ',
    'Transforming ': 'జీవితాలను మార్చడం ',
    'Lives': 'జీవితాలు',
    'Healthcare for ': 'ఆరోగ్య సంరక్షణ ',
    'All': 'అందరికీ',
    'Together We ': 'కలిసి మనం ',
    'Can': 'చేయగలం',
    'Every Child': 'ప్రతి పిల్లలకు',
    'Education for ': 'విద్య ',
    'Join Us':'మాతో చేరండి',
    '12 Photos': '12 ఫోటోలు',
    '15 Photos': '15 ఫోటోలు',
    '10 Photos': '10 ఫోటోలు',
    '18 Photos': '18 ఫోటోలు',
    '8 Photos': '8 ఫోటోలు',
    '14 Photos': '14 ఫోటోలు',
    '3 Videos': '3 వీడియోలు',
    '2 Videos': '2 వీడియోలు',
    '1 Video': '1 వీడియో',
    '4 Videos': '4 వీడియోలు',
    'Today\'s': 'ఈ రోజు',
    '10 May': '10 మే',
    '11 May': '11 మే',
    '12 May': '12 మే',
    '13 May': '13 మే',
    'Today (14 May)': 'ఈ రోజు (14 మే)',
    'Female': 'స్త్రీ',
    'Male': 'పురుషుడు',
    'Action': 'చర్య',
    'Personality development': 'వ్యక్తిత్వ వికాసం',
    'Ramesh Patel': 'రమేష్ పటేల్',
    'Priya Sharma': 'ప్రియా శర్మ',
    'Meera Devi': 'మీరా దేవి',
    'Arthritis': 'కీళ్లనొప్పులు',
    'Stable': 'స్థిరం',
    'Diabetes': 'మధుమేహం',
    'Heart Condition': 'గుండె సమస్య',
    'Arthritis/Knee Pain': 'కీళ్లనొప్పులు/మోకాలి నొప్పి',
    'Heart/BP': 'గుండె/బీపీ',
    'Diabetes/BP': 'మధుమేహం/బీపీ',
    // ─── Donate page ───
    'Make a Difference Today': 'ఈ రోజే మార్పు తీసుకురండి',
    'Your generous donation helps us provide education, healthcare, and essential resources': 'మీ ఉదారమైన విరాళం విద్య, ఆరోగ్యం మరియు అవసరమైన వనరులు అందించడానికి సహాయపడుతుంది',
    'Donation Details': 'విరాళం వివరాలు',
    'Full Name *': 'పూర్తి పేరు *',
    'Email *': 'ఇమెయిల్ *',
    'Phone': 'ఫోన్',
    'Donation Amount (₹) *': 'విరాళం మొత్తం (₹) *',
    'Enter amount': 'మొత్తాన్ని నమోదు చేయండి',
    'Payment Method': 'చెల్లింపు విధానం',
    'Message (optional)': 'సందేశం (ఐచ్ఛికం)',
    'Leave a note with your donation...': 'మీ విరాళంతో ఒక గమనికను ఉంచండి...',
    'Proceed to Donate': 'దానం చేయడానికి కొనసాగండి',
    'Thank You': 'ధన్యవాదాలు',
    'Scan with any UPI app to pay': 'చెల్లించడానికి ఏ UPI యాప్ తోనైనా స్కాన్ చేయండి',
    'Edit Details': 'వివరాలను సవరించండి',
    'UPI': 'UPI',
    'Net Banking': 'నెట్ బ్యాంకింగ్',
    'Credit / Debit Card': 'క్రెడిట్ / డెబిట్ కార్డ్',
    'Feeds a child for a month': 'ఒక పిల్లలకు ఒక నెల ఆహారం',
    'School supplies for a child': 'ఒక పిల్లలకు స్కూల్ సామాగ్రి',
    'Healthcare for a family': 'ఒక కుటుంబానికి ఆరోగ్య సంరక్షణ',
    'Any amount you choose': 'మీరు ఎంచుకున్న ఏ మొత్తం అయినా',
    'Custom': 'అనుకూలం',
    'Lives Impacted': 'ప్రభావితమైన జీవితాలు',
    'Projects Completed': 'పూర్తి చేసిన ప్రాజెక్టులు',
    'Transparency': 'పారదర్శకత',
    // ─── OAH Admin ───
    'Admin Portal': 'అడ్మిన్ పోర్టల్',
    'Logout Admin': 'అడ్మిన్ నుండి నిష్క్రమించండి',
    'Admin Login': 'అడ్మిన్ లాగిన్',
    'Enter admin password to manage Old Age Home': 'వృద్ధాశ్రమాన్ని నిర్వహించడానికి అడ్మిన్ పాస్‌వర్డ్ నమోదు చేయండి',
    'Login': 'లాగిన్',
    'Incorrect password': 'తప్పు పాస్‌వర్డ్',
    'Forgot password? Reset via email': 'పాస్‌వర్డ్ మర్చిపోయారా? ఇమెయిల్ ద్వారా రీసెట్ చేయండి',
    // ─── Header nav ───
    'తెలుగు': 'English',
    'Home': 'హోమ్',
    'About': 'గురించి',
    'Gallery': 'గ్యాలరీ',
    'Old Age Home': 'వృద్ధాశ్రమం',
    'Join Us': 'మాతో చేరండి',
    'Contact': 'సంప్రదించండి',
    'Donate Now': 'దానం చేయండి',
    'Donate': 'దానం',
    'Terms of Service': 'సేవా నిబంధనలు',
    'Privacy Policy': 'గోప్యతా విధానం',
    'All rights reserved.': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి',
    // ─── Weekly Menu days ───
    'Sunday': 'ఆదివారం',
    'Monday': 'సోమవారం',
    'Tuesday': 'మంగళవారం',
    'Wednesday': 'బుధవారం',
    'Thursday': 'గురువారం',
    'Friday': 'శుక్రవారం',
    'Saturday': 'శనివారం',
    'Breakfast:': 'ఉదయం:',
    'Lunch:': 'మధ్యాహ్నం:',
    'Snacks:': 'స్నాక్స్:',
    'Dinner:': 'రాత్రి:',
    'Nutritious & balanced meals prepared with love for our elders': 'మా పెద్దల కోసం ప్రేమతో తయారు చేసిన పౌష్టికమైన & సమతుల్య భోజనం',
    'Weekly Menu': 'వీక్లీ మెనూ',
    // ─── OAH Dashboard ───
    'Total Residents': 'మొత్తం నివాసితులు',
    'Present Today': 'ఈ రోజు హాజరు',
    'Under Medical Care': 'వైద్య సంరక్షణలో',
    'Meals Daily': 'రోజువారీ భోజనం',
    'Residents': 'నివాసితులు',
    'Attendance': 'హాజరు',
    'Medical Reports': 'వైద్య నివేదికలు',
    'Menu': 'మెనూ',
    'Mark All Present': 'అందరినీ హాజరుగా గుర్తించండి',
    'Download Report': 'నివేదికను డౌన్‌లోడ్ చేయండి',
    'Add Resident': 'నివాసితిని జోడించండి',
    'Name': 'పేరు',
    'Age': 'వయస్సు',
    'Gender': 'లింగం',
    'Female': 'స్త్రీ',
    'Male': 'పురుషుడు',
    'Joined': 'చేరిన తేదీ',
    'Health Status': 'ఆరోగ్య స్థితి',
    'Stable': 'స్థిరం',
    'BP': 'బీపీ',
    'Diabetes': 'మధుమేహం',
    'Arthritis': 'కీళ్లనొప్పులు',
    'Heart Condition': 'గుండె సమస్య',
    'Present': 'హాజరు',
    'Absent': 'గైర్హాజరు',
    'Not Marked': 'గుర్తించలేదు',
    'Today:': 'ఈ రోజు:',
    'Today': 'ఈ రోజు',
    'This Week %': 'ఈ వారం %',
    'Shanti Vrudhashramam': 'శాంతి వృద్ధాశ్రమం',
    'Providing love, care & dignity to our elderly residents since 2018': '2018 నుండి మా వృద్ధ నివాసితులకు ప్రేమ, సంరక్షణ & గౌరవాన్ని అందించడం',
    'Prajwala Community Development Society': 'ప్రజ్వల కమ్యూనిటీ డెవలప్‌మెంట్ సొసైటీ',
    'Prajwala Community': 'ప్రజ్వల కమ్యూనిటీ',
    'Development Society': 'డెవలప్‌మెంట్ సొసైటీ',
    'We Serve People, We Build Nature & Culture': 'మేము ప్రజలకు సేవ చేస్తాము, ప్రకృతి & సంస్కృతిని నిర్మిస్తాము',
    'We serve people, we build nature & culture': 'మేము ప్రజలకు సేవ చేస్తాము, ప్రకృతి & సంస్కృతిని నిర్మిస్తాము',
    'We Serve ': 'మేము సేవ చేస్తాము ',
    'People': 'ప్రజలకు',
    'We Build ': 'మేము నిర్మిస్తాము ',
    'Nature & Culture': 'ప్రకృతి & సంస్కృతి',
    'Make a ': 'మార్పును ',
    'Difference': 'తీసుకురండి',
    ' Today': ' ఈ రోజు',
    'A volunteer is someone who steps forward voluntarily—driven by a selfless spirit of service and an impartial attitude—to extend a helping hand. Through her extraordinary service, a woman leading an ordinary life has demonstrated that, when faced with the determination to support those in distress, one\'s own poverty is merely a minor obstacle.': 'స్వచ్ఛంద సేవకుడు అంటే నిస్వార్థ సేవా స్ఫూర్తితో మరియు నిష్పక్షపాత వైఖరితో స్వచ్ఛందంగా ముందుకు వచ్చి సహాయం చేసే వ్యక్తి. ఆమె అసాధారణ సేవ ద్వారా, సాధారణ జీవితం గడుపుతున్న ఒక మహిళ, కష్టాల్లో ఉన్నవారికి మద్దతు ఇవ్వాలనే సంకల్పం ఉన్నప్పుడు, ఒకరి స్వంత పేదరికం కేవలం చిన్న అడ్డంకి మాత్రమే అని నిరూపించింది.',
    'Moved by the suffering of others, weary of age-old social inequalities, and deeply affected by the sight of lives ravaged by financial ruin, ': 'ఇతరుల కష్టాలను చూసి చలించిపోయి, పురాతన సామాజిక అసమానతలతో విసిగిపోయి, ఆర్థిక నాశనంతో ధ్వంసమైన జీవితాలను చూసి తీవ్రంగా ప్రభావితమై, ',
    'Sirisha resolved to stand as a pillar of support': 'సిరీష మద్దతు స్తంభంగా నిలబడాలని నిర్ణయించుకుంది',
    '. As the daughter of Perumalla Suryanarayana—a prominent RTI activist—she inherited a deep sensitivity to human suffering and profound empathy for victims of injustice.': '. ప్రముఖ ఆర్టీఐ కార్యకర్త పెరుమల్ల సూర్యనారాయణ కుమార్తెగా, ఆమె మానవ కష్టాల పట్ల తీవ్రమైన సున్నితత్వాన్ని మరియు అన్యాయానికి గురైన వారి పట్ల ప్రగాఢ సానుభూతిని వారసత్వంగా పొందింది.',
    '"Problems pale in comparison to the resolve to help others."': '"ఇతరులకు సహాయం చేయాలనే సంకల్పంతో పోలిస్తే సమస్యలు చిన్నవి."'
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

  // Step 1: HTML string replacement on saved source (catches contiguous text)
  let html = _savedBodyHTML;
  for (const key of keys) {
    html = html.split(key).join(te[key]);
  }
  document.body.innerHTML = html;
  initPage();

  // Step 2: Walk text nodes in the live DOM (catches text broken across child elements)
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
  initOAHTabs();
  initLightbox();
  initImpactCounters();
  initGalleryAdmin();
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
      alert('Thank you! Your message has been received. We will get back to you soon.');
      form.reset();
    });
  });
}

// ─── OAH TABS ───
function initOAHTabs() {
  const oahTabs = document.querySelectorAll('.oah-tab');
  oahTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      oahTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.oah-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(tab.dataset.panel)?.classList.add('active');
    });
  });
}

// ─── ATTENDANCE TOGGLE ───
// ─── DONATE PROCESS ───
function processDonate(e) {
  e.preventDefault();
  const name = document.getElementById('donateName')?.value.trim();
  const email = document.getElementById('donateEmail')?.value.trim();
  const amount = document.getElementById('donateAmount')?.value.trim();
  if (!name || !email || !amount) { alert('Please fill all required fields.'); return false; }
  document.getElementById('donorNameDisplay').textContent = name;
  document.getElementById('donorAmountDisplay').textContent = '₹' + amount;
  document.getElementById('donateFormStep').style.display = 'none';
  document.getElementById('donateQrStep').style.display = 'block';
  return false;
}
function backToDonateForm() {
  document.getElementById('donateFormStep').style.display = 'block';
  document.getElementById('donateQrStep').style.display = 'none';
}

// ─── ATTENDANCE TOGGLE ───
function toggleAttendance(el) {
  if (!el) return;
  if (el.classList.contains('present')) {
    el.classList.remove('present');
    el.classList.add('absent');
    el.textContent = 'A';
  } else if (el.classList.contains('absent')) {
    el.classList.remove('absent');
    el.textContent = '—';
  } else {
    el.classList.add('present');
    el.textContent = 'P';
  }
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

// ─── GALLERY FILTER ───
function filterGallery(category) {
  // Hide all sections
  const sections = document.querySelectorAll('.gallery-section');
  sections.forEach(section => section.classList.remove('active'));
  
  // Show selected section
  const selectedSection = document.getElementById(`gallery-${category}`);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
  
  // Update filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  
  // Set active button
  const activeBtn = Array.from(filterBtns).find(btn => 
    btn.textContent.toLowerCase().includes(category === 'all' ? 'all' : 
      category === 'swacch-bharat' ? 'swacch' :
      category === 'achievements' ? 'achievement' :
      category === 'education' ? 'education' :
      category === 'donations' ? 'donation' :
      category === 'covid' ? 'covid' : category)
  );
  if (activeBtn) activeBtn.classList.add('active');
  
  // Smooth scroll to gallery section
  document.querySelector('.gallery-filter')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ─── OAH ADMIN ───
const ADMIN_PASSWORD = 'prajwala123';

function showAdminLogin() {
  document.getElementById('adminModal')?.classList.add('open');
  document.getElementById('adminError').style.display = 'none';
  document.getElementById('adminPassword').value = '';
  setTimeout(() => document.getElementById('adminPassword')?.focus(), 100);
}
function closeAdminLogin() {
  document.getElementById('adminModal')?.classList.remove('open');
}
function adminLogin() {
  const pw = document.getElementById('adminPassword')?.value;
  if (pw === ADMIN_PASSWORD) {
    document.body.classList.add('admin-logged-in');
    closeAdminLogin();
    const loginBtn = document.getElementById('adminLoginBtn');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    initGalleryAdmin();
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

  // Remove edit buttons from gallery
  document.querySelectorAll('.admin-edit-btn').forEach(btn => btn.remove());
}
function resetAdminPassword() {
  const email = prompt('Enter your registered email to receive password reset link:');
  if (email && email.includes('@')) {
    alert('A password reset link has been sent to ' + email + '. Please check your inbox.');
    closeAdminLogin();
  } else if (email) {
    alert('Please enter a valid email address.');
  }
}
function markAllPresent() {
  document.querySelectorAll('.att-dot').forEach(d => {
    d.classList.add('present');
    d.classList.remove('absent');
    d.textContent = 'P';
  });
}

// ─── ANIMATED IMPACT COUNTERS ───
function initImpactCounters() {
  const stats = document.querySelector('.impact-stats');
  if (!stats) return;
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      observer.disconnect();
      document.querySelectorAll('.impact-stat .number').forEach(el => {
        const txt = el.textContent.trim();
        const num = parseInt(txt.replace(/[^0-9]/g, ''));
        const suffix = txt.replace(/[0-9]/g, '');
        if (isNaN(num)) return;
        const duration = 2000;
        const start = performance.now();
        function update(now) {
          const pct = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - pct, 3);
          const val = Math.round(eased * num);
          el.textContent = val + suffix;
          if (pct < 1) requestAnimationFrame(update);
          else el.textContent = num + suffix;
        }
        requestAnimationFrame(update);
      });
    }
  }, { threshold: 0.3 });
  observer.observe(stats);
}

// ─── OAH DATA LAYER (localStorage) ───
const OAH_STORAGE_KEY = 'prajwala_oah_data';

const defaultOAHData = {
  stats: { total: 24, present: 22, medical: 6, meals: 3 },
  residents: [
    { id: 1, name: 'Suryanarayana', age: 82, gender: 'Male', joined: '2019', health: 'BP/Diabetes', contact: 'Son - 9988776655' },
    { id: 2, name: 'Lakshmamma', age: 78, gender: 'Female', joined: '2020', health: 'Arthritis', contact: 'Daughter - 8877665544' },
    { id: 3, name: 'Venkateswarlu', age: 80, gender: 'Male', joined: '2018', health: 'Stable', contact: 'Son - 7766554433' },
    { id: 4, name: 'Sitamma', age: 85, gender: 'Female', joined: '2019', health: 'Diabetes', contact: 'Daughter - 6655443322' },
    { id: 5, name: 'Nageswara Rao', age: 76, gender: 'Male', joined: '2021', health: 'Heart Condition', contact: 'Son - 5544332211' },
    { id: 6, name: 'Adilakshmi', age: 79, gender: 'Female', joined: '2020', health: 'BP', contact: 'Daughter - 4433221100' },
    { id: 7, name: 'Subba Rao', age: 83, gender: 'Male', joined: '2018', health: 'Diabetes/BP', contact: 'Son - 3322110099' },
    { id: 8, name: 'Koteswara Rao', age: 77, gender: 'Male', joined: '2021', health: 'Arthritis/Knee Pain', contact: 'Daughter - 2211009988' },
    { id: 9, name: 'Seshamma', age: 86, gender: 'Female', joined: '2019', health: 'Stable', contact: 'Son - 1100998877' },
    { id: 10, name: 'Anjaneyulu', age: 74, gender: 'Male', joined: '2022', health: 'BP', contact: 'Daughter - 9988771122' },
    { id: 11, name: 'Punnamma', age: 81, gender: 'Female', joined: '2020', health: 'Diabetes', contact: 'Son - 8877662233' },
    { id: 12, name: 'Nagendra Babu', age: 75, gender: 'Male', joined: '2021', health: 'Heart/BP', contact: 'Daughter - 7766553344' },
    { id: 13, name: 'Ramadevi', age: 80, gender: 'Female', joined: '2019', health: 'Arthritis', contact: 'Son - 6655444455' },
    { id: 14, name: 'Mohan Rao', age: 78, gender: 'Male', joined: '2020', health: 'Stable', contact: 'Daughter - 5544335566' },
    { id: 15, name: 'Saraswathi', age: 83, gender: 'Female', joined: '2018', health: 'BP/Diabetes', contact: 'Son - 4433226677' },
    { id: 16, name: 'Balakrishna', age: 72, gender: 'Male', joined: '2022', health: 'Stable', contact: 'Daughter - 3322117788' },
    { id: 17, name: 'Venkataratnam', age: 79, gender: 'Male', joined: '2020', health: 'Diabetes', contact: 'Son - 2211008899' },
    { id: 18, name: 'Kodandamma', age: 84, gender: 'Female', joined: '2019', health: 'Arthritis/Knee Pain', contact: 'Daughter - 1100999900' },
    { id: 19, name: 'Siva Kumar', age: 71, gender: 'Male', joined: '2022', health: 'Heart Condition', contact: 'Son - 9988770011' },
    { id: 20, name: 'Rajyalakshmi', age: 82, gender: 'Female', joined: '2020', health: 'BP', contact: 'Daughter - 8877661122' },
    { id: 21, name: 'Srinivasa Rao', age: 76, gender: 'Male', joined: '2021', health: 'Diabetes/BP', contact: 'Son - 7766552233' },
    { id: 22, name: 'Mangamma', age: 87, gender: 'Female', joined: '2018', health: 'Stable', contact: 'Daughter - 6655443344' },
    { id: 23, name: 'Rama Krishna', age: 73, gender: 'Male', joined: '2022', health: 'Arthritis', contact: 'Son - 5544334455' },
    { id: 24, name: 'Prasad', age: 70, gender: 'Male', joined: '2022', health: 'BP', contact: 'Daughter - 4433225566' }
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
    { id: 1, name: 'Suryanarayana', age: 82, checkup: '10 May 2026', doctor: 'Dr. Rama Devi', lastVisit: '10 May', meds: [{ name: 'Amlodipine 5mg', time: 'Morning 8am' }], bp: '130/85', sugar: '140 mg/dL', physio: 'Mon/Wed/Fri 10am' },
    { id: 2, name: 'Lakshmamma', age: 78, checkup: '10 May 2026', doctor: 'Dr. Sridhar', lastVisit: '08 May', meds: [{ name: 'Calcium + Vitamin D', time: 'After breakfast' }], bp: '—', sugar: '—', physio: 'Tue/Thu/Sat 9am' },
    { id: 3, name: 'Venkateswarlu', age: 80, checkup: '12 May 2026', doctor: 'Dr. Srinivas', lastVisit: '12 May', meds: [{ name: 'Metformin 500mg', time: 'After breakfast & dinner' }], sugar: '152 mg/dL', physio: '—' },
    { id: 4, name: 'Sitamma', age: 85, checkup: '10 May 2026', doctor: 'Dr. Rama Devi', lastVisit: '10 May', meds: [{ name: 'Glimepiride 2mg', time: 'Before breakfast' }, { name: 'Metoprolol 25mg', time: 'Morning' }], sugar: '—', physio: 'Mon/Wed/Fri 10am' },
    { id: 5, name: 'Nageswara Rao', age: 76, checkup: '08 May 2026', doctor: 'Dr. Sridhar', lastVisit: '08 May', meds: [{ name: 'Atorvastatin 10mg', time: 'Night 9pm' }, { name: 'Aspirin 75mg', time: 'After breakfast' }], bp: '135/85', physio: 'Tue/Thu/Sat 9am' },
    { id: 6, name: 'Adilakshmi', age: 79, checkup: '12 May 2026', doctor: 'Dr. Srinivas', lastVisit: '12 May', meds: [{ name: 'Amlodipine 5mg', time: 'Morning 8am' }], physio: '—' },
    { id: 7, name: 'Subba Rao', age: 83, checkup: '10 May 2026', doctor: 'Dr. Rama Devi', lastVisit: '10 May', meds: [{ name: 'Metformin 500mg', time: 'After meals' }, { name: 'Amlodipine 5mg', time: 'Morning' }], bp: '130/85', physio: 'Mon/Wed/Fri 10am' },
    { id: 8, name: 'Koteswara Rao', age: 77, checkup: '08 May 2026', doctor: 'Dr. Sridhar', lastVisit: '08 May', meds: [{ name: 'Accelofenac 100mg', time: 'After breakfast' }, { name: 'Omeprazole 20mg', time: 'Before breakfast' }], physio: 'Tue/Thu/Sat 9am' }
  ]
};

function getOAHData() {
  try {
    const saved = localStorage.getItem(OAH_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { }
  return JSON.parse(JSON.stringify(defaultOAHData));
}

// ─── GALLERY ADMIN ───
function initGalleryAdmin() {
  // Load saved images from localStorage if any
  const savedGalleryData = JSON.parse(localStorage.getItem('prajwala_gallery_data')) || {};
  document.querySelectorAll('.media-item img, .folder-card img').forEach((img, idx) => {
    // Unique ID for the image based on initial src or position
    const imgId = img.getAttribute('data-img-id') || 'img_' + window.location.pathname + '_' + idx;
    if (!img.getAttribute('data-img-id')) {
      img.setAttribute('data-img-id', imgId);
    }

    if (savedGalleryData[imgId]) {
      img.src = savedGalleryData[imgId];
    }

    if (document.body.classList.contains('admin-logged-in')) {
      // Add edit button if not already there
      const parent = img.parentElement;
      if (!parent.querySelector('.admin-edit-btn')) {
        parent.style.position = 'relative';
        const editBtn = document.createElement('button');
        editBtn.className = 'admin-edit-btn';
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editBtn.style.cssText = 'position:absolute; top:10px; right:10px; z-index:10; background:var(--primary); color:#fff; border:none; padding:5px 10px; border-radius:5px; cursor:pointer; font-size:12px; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.3);';

        editBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const newSrc = prompt('Enter new image URL:', img.src);
          if (newSrc && newSrc.trim() !== '') {
            img.src = newSrc;
            const updatedData = JSON.parse(localStorage.getItem('prajwala_gallery_data')) || {};
            updatedData[imgId] = newSrc;
            localStorage.setItem('prajwala_gallery_data', JSON.stringify(updatedData));
          }
        };
        parent.appendChild(editBtn);
      }
    }
  });
}

function saveOAHData(data) {
  localStorage.setItem(OAH_STORAGE_KEY, JSON.stringify(data));
}

function renderOAH() {
  const data = getOAHData();
  // Dashboard stats
  document.getElementById('totalResidents').textContent = data.stats.total;
  const presentEl = document.querySelector('.oah-stat.green .oah-number');
  if (presentEl) presentEl.textContent = data.stats.present;
  const medicalEl = document.querySelector('.oah-stat.pink .oah-number');
  if (medicalEl) medicalEl.textContent = data.stats.medical;
  const mealsEl = document.querySelector('.oah-stat.blue .oah-number');
  if (mealsEl) mealsEl.textContent = data.stats.meals;
  // Residents table
  const tbody = document.querySelector('.oah-table tbody');
  if (tbody) {
    tbody.innerHTML = data.residents.map((r, i) => `<tr>
      <td>${i + 1}</td>
      <td>${r.name}</td>
      <td>${r.age}</td>
      <td>${r.gender}</td>
      <td>${r.joined}</td>
      <td><span class="health-badge ${r.health.toLowerCase().replace(/[\s/]+/g, '')}">${r.health}</span></td>
      <td>${r.contact}</td>
    </tr>`).join('');
  }
  // Menu
  const menuGrid = document.querySelector('.menu-grid');
  if (menuGrid && data.menu.length) {
    menuGrid.innerHTML = data.menu.map(m => `<div class="menu-card">
      <div class="day">${m.day}</div>
      <div class="meal"><strong>Breakfast:</strong> ${m.breakfast}</div>
      <div class="meal"><strong>Lunch:</strong> ${m.lunch}</div>
      <div class="meal"><strong>Snacks:</strong> ${m.snacks}</div>
      <div class="meal"><strong>Dinner:</strong> ${m.dinner}</div>
    </div>`).join('');
  }
  // Medical reports
  const medicalGrid = document.querySelector('.medical-grid');
  if (medicalGrid) {
    medicalGrid.innerHTML = data.medical.map(m => {
      let html = `<div class="medical-card"><h3>${m.name}`;
      if (m.sugar || m.bp) {
        const cond = [m.bp && m.bp !== '—' ? 'BP' : '', m.sugar && m.sugar !== '—' ? 'Diabetes' : ''].filter(Boolean).join('/');
        if (cond) html += ` <span class="badge badge-yellow">${cond}</span>`;
      }
      html += `</h3><div class="condition">Age: ${m.age} | Check-up: ${m.checkup}</div><ul class="med-list">`;
      if (m.meds && m.meds.length) {
        m.meds.forEach(mm => { html += `<li><span class="med-name">${mm.name}</span><span class="med-time">${mm.time}</span></li>`; });
      }
      html += `</ul>`;
      if (m.doctor) html += `<div style="margin-top:10px;font-size:12px;color:var(--text-light);"><i class="fas fa-stethoscope"></i> ${m.doctor} - Last visit: ${m.lastVisit}</div>`;
      return html + `</div>`;
    }).join('');
  }
}

// ─── OAH ADMIN PANEL ───
function initOAHAdmin() {
  renderOAH();
  // Show admin edit buttons when logged in
  const style = document.createElement('style');
  style.textContent = `
    body.admin-logged-in .admin-edit-btn { display: inline-flex !important; }
    .admin-edit-btn { display: none !important; }
    .edit-modal-overlay { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998; align-items:center; justify-content:center; }
    .edit-modal-overlay.open { display:flex; }
    .edit-modal { background:#fff; padding:30px; border-radius:20px; width:90%; max-width:500px; max-height:80vh; overflow-y:auto; box-shadow:0 20px 60px rgba(0,0,0,0.2); }
    .edit-modal h3 { margin-bottom:15px; }
    .edit-modal label { display:block; font-size:13px; font-weight:600; margin:10px 0 4px; color:var(--text); }
    .edit-modal input, .edit-modal textarea, .edit-modal select { width:100%; padding:8px 12px; border:2px solid #e0e0e0; border-radius:10px; font-size:14px; }
    .edit-modal .btn-row { display:flex; gap:10px; margin-top:20px; }
    .edit-modal .btn-row button { flex:1; }
  `;
  document.head.appendChild(style);
  // Add edit buttons to dashboard stats
  document.querySelectorAll('.oah-stat').forEach(el => {
    const btn = document.createElement('button');
    btn.className = 'admin-edit-btn';
    btn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    btn.style.cssText = 'position:absolute;top:5px;right:5px;background:var(--primary);color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:12px;cursor:pointer;align-items:center;justify-content:center;';
    el.style.position = 'relative';
    btn.onclick = () => editStat(el);
    el.appendChild(btn);
  });
  // Add edit buttons to menu cards
  document.querySelectorAll('.menu-card').forEach(el => {
    const btn = document.createElement('button');
    btn.className = 'admin-edit-btn';
    btn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    btn.style.cssText = 'position:absolute;top:5px;right:5px;background:var(--primary);color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:12px;cursor:pointer;align-items:center;justify-content:center;z-index:2;';
    el.style.position = 'relative';
    const day = el.querySelector('.day')?.textContent || '';
    btn.onclick = () => editMenuDay(day);
    el.appendChild(btn);
  });
  // Add edit buttons to medical section
  const medSection = document.querySelector('.medical-grid');
  if (medSection) {
    const addBtn = document.createElement('button');
    addBtn.className = 'admin-edit-btn';
    addBtn.innerHTML = '+ Add Medical Report';
    addBtn.style.cssText = 'display:none;margin:15px auto;padding:8px 20px;background:var(--primary);color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;';
    addBtn.onclick = () => editMedical(null);
    medSection.parentNode.insertBefore(addBtn, medSection.nextSibling);
  }
  // Add edit + delete buttons to each medical card
  document.querySelectorAll('.medical-card').forEach((card, i) => {
    const data = getOAHData();
    if (!data.medical[i]) return;
    const id = data.medical[i].id;
    const editBtn = document.createElement('button');
    editBtn.className = 'admin-edit-btn';
    editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editBtn.style.cssText = 'position:absolute;top:5px;right:40px;background:var(--primary);color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:12px;cursor:pointer;align-items:center;justify-content:center;z-index:2;';
    editBtn.onclick = () => editMedical(id);
    card.style.position = 'relative';
    card.appendChild(editBtn);
    const delBtn = document.createElement('button');
    delBtn.className = 'admin-edit-btn';
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.style.cssText = 'position:absolute;top:5px;right:5px;background:#dc2626;color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:12px;cursor:pointer;align-items:center;justify-content:center;z-index:2;';
    delBtn.onclick = () => deleteMedical(id);
    card.appendChild(delBtn);
  });
  // Add edit buttons to residents table
  const rthead = document.querySelector('.oah-table-wrap table.oah-table thead');
  if (rthead && !rthead.querySelector('.actions-header')) {
    const th = document.createElement('th');
    th.className = 'actions-header admin-edit-btn';
    th.textContent = 'Actions';
    th.style.cssText = 'display:none;';
    rthead.querySelector('tr').appendChild(th);
  }
  const rtbody = document.querySelector('.oah-table-wrap table.oah-table tbody');
  if (rtbody) {
    const data = getOAHData();
    const rows = rtbody.querySelectorAll('tr');
    rows.forEach((row, i) => {
      if (i >= data.residents.length) return;
      const id = data.residents[i].id;
      const td = document.createElement('td');
      td.style.cssText = 'white-space:nowrap;';
      const editBtn = document.createElement('button');
      editBtn.className = 'admin-edit-btn';
      editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
      editBtn.style.cssText = 'background:var(--primary);color:#fff;border:none;border-radius:50%;width:26px;height:26px;font-size:10px;cursor:pointer;margin-right:4px;';
      editBtn.onclick = () => editResident(id);
      td.appendChild(editBtn);
      const delBtn = document.createElement('button');
      delBtn.className = 'admin-edit-btn';
      delBtn.innerHTML = '<i class="fas fa-trash"></i>';
      delBtn.style.cssText = 'background:#dc2626;color:#fff;border:none;border-radius:50%;width:26px;height:26px;font-size:10px;cursor:pointer;';
      delBtn.onclick = () => deleteResident(id);
      td.appendChild(delBtn);
      row.appendChild(td);
    });
  }
  // Add Resident button
  const residentsSection = document.querySelector('.oah-panel#residents .oah-table-wrap');
  if (residentsSection) {
    const addBtn = document.createElement('button');
    addBtn.className = 'admin-edit-btn';
    addBtn.textContent = '+ Add Resident';
    addBtn.style.cssText = 'display:none;margin:10px 0 20px;padding:8px 20px;background:var(--primary);color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;';
    addBtn.onclick = () => addResident();
    residentsSection.parentNode.insertBefore(addBtn, residentsSection.nextSibling);
  }
  // Reset Attendance button
  const attPanel = document.querySelector('.oah-panel#attendance');
  if (attPanel) {
    const resetBtn = document.createElement('button');
    resetBtn.className = 'admin-edit-btn';
    resetBtn.textContent = 'Reset Week';
    resetBtn.style.cssText = 'display:none;margin:15px 0 10px;padding:8px 20px;background:#dc2626;color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;';
    resetBtn.onclick = () => resetAttendance();
    attPanel.appendChild(resetBtn);
  }
}


let editModalCallback = null;

function openEditModal(html, onSave) {
  const overlay = document.getElementById('editModalOverlay');
  overlay.innerHTML = `<div class="edit-modal">${html}</div>`;
  overlay.classList.add('open');
  editModalCallback = onSave;
}

function closeEditModal() {
  document.getElementById('editModalOverlay').classList.remove('open');
  editModalCallback = null;
}

function editStat(el) {
  const current = el.querySelector('.oah-number')?.textContent || '0';
  const label = el.querySelector('.oah-label')?.textContent || '';
  openEditModal(`
    <h3>Edit ${label}</h3>
    <label>Value</label>
    <input type="number" id="editStatVal" value="${current}">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveStat()">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => {
    const data = getOAHData();
    const val = parseInt(document.getElementById('editStatVal').value);
    if (label === 'Total Residents') data.stats.total = val;
    else if (label === 'Present Today') data.stats.present = val;
    else if (label === 'Under Medical Care') data.stats.medical = val;
    else if (label === 'Meals Daily') data.stats.meals = val;
    saveOAHData(data);
    renderOAH();
    initOAHAdmin();
  });
}

function saveStat() {
  if (editModalCallback) editModalCallback();
  closeEditModal();
}

function editMenuDay(day) {
  const data = getOAHData();
  const m = data.menu.find(x => x.day === day);
  if (!m) return;
  openEditModal(`
    <h3>Edit Menu — ${day}</h3>
    <label>Breakfast</label><input id="emBreakfast" value="${m.breakfast}">
    <label>Lunch</label><input id="emLunch" value="${m.lunch}">
    <label>Snacks</label><input id="emSnacks" value="${m.snacks}">
    <label>Dinner</label><input id="emDinner" value="${m.dinner}">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveMenuDay('${day}')">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => { });
}

function saveMenuDay(day) {
  const data = getOAHData();
  const m = data.menu.find(x => x.day === day);
  if (!m) return;
  m.breakfast = document.getElementById('emBreakfast').value;
  m.lunch = document.getElementById('emLunch').value;
  m.snacks = document.getElementById('emSnacks').value;
  m.dinner = document.getElementById('emDinner').value;
  saveOAHData(data);
  renderOAH();
  initOAHAdmin();
  closeEditModal();
}

// ─── OAH RESIDENTS ADMIN ───
function editResident(id) {
  const data = getOAHData();
  const r = data.residents.find(x => x.id === id);
  if (!r) return;
  openEditModal(`
    <h3>Edit Resident</h3>
    <label>Name</label><input id="erName" value="${r.name}">
    <label>Age</label><input type="number" id="erAge" value="${r.age}">
    <label>Gender</label><select id="erGender"><option ${r.gender === 'Male' ? 'selected' : ''}>Male</option><option ${r.gender === 'Female' ? 'selected' : ''}>Female</option></select>
    <label>Joined</label><input id="erJoined" value="${r.joined}">
    <label>Health Status</label><input id="erHealth" value="${r.health}">
    <label>Contact</label><input id="erContact" value="${r.contact}">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveResident(${id})">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => { });
}

function saveResident(id) {
  const data = getOAHData();
  const r = data.residents.find(x => x.id === id);
  if (!r) return;
  r.name = document.getElementById('erName').value;
  r.age = parseInt(document.getElementById('erAge').value);
  r.gender = document.getElementById('erGender').value;
  r.joined = document.getElementById('erJoined').value;
  r.health = document.getElementById('erHealth').value;
  r.contact = document.getElementById('erContact').value;
  saveOAHData(data);
  renderOAH();
  initOAHAdmin();
  closeEditModal();
}

function addResident() {
  openEditModal(`
    <h3>Add Resident</h3>
    <label>Name</label><input id="erName">
    <label>Age</label><input type="number" id="erAge">
    <label>Gender</label><select id="erGender"><option>Male</option><option>Female</option></select>
    <label>Joined (Year)</label><input id="erJoined">
    <label>Health Status</label><input id="erHealth">
    <label>Contact</label><input id="erContact">
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveNewResident()">Add</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => { });
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
    contact: document.getElementById('erContact').value
  });
  data.stats.total = data.residents.length;
  saveOAHData(data);
  renderOAH();
  initOAHAdmin();
  closeEditModal();
}

function deleteResident(id) {
  if (!confirm('Delete this resident?')) return;
  const data = getOAHData();
  data.residents = data.residents.filter(r => r.id !== id);
  data.stats.total = data.residents.length;
  saveOAHData(data);
  renderOAH();
  initOAHAdmin();
}

// ─── OAH MEDICAL ADMIN ───
function editMedical(id) {
  const data = getOAHData();
  const m = id ? data.medical.find(x => x.id === id) : null;
  const title = m ? 'Edit Medical Report' : 'Add Medical Report';
  const name = m ? m.name : '';
  const age = m ? m.age : '';
  const checkup = m ? m.checkup : '';
  const doctor = m ? m.doctor : '';
  const lastVisit = m ? m.lastVisit : '';
  const medsStr = m ? m.meds.map(x => x.name + '|' + x.time).join('\n') : '';
  openEditModal(`
    <h3>${title}</h3>
    <label>Resident Name</label><input id="emName" value="${name}">
    <label>Age</label><input type="number" id="emAge" value="${age}">
    <label>Check-up Date</label><input id="emCheckup" value="${checkup}">
    <label>Doctor</label><input id="emDoctor" value="${doctor}">
    <label>Last Visit</label><input id="emLastVisit" value="${lastVisit}">
    <label>Medications (one per line: Name|Time)</label>
    <textarea id="emMeds" rows="4">${medsStr}</textarea>
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveMedical(${id || 'null'})">Save</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>
  `, () => { });
}

function saveMedical(id) {
  const data = getOAHData();
  const meds = document.getElementById('emMeds').value.split('\n').filter(Boolean).map(line => {
    const parts = line.split('|');
    return { name: parts[0]?.trim() || '', time: parts[1]?.trim() || '' };
  });
  const entry = {
    id: id || Date.now(),
    name: document.getElementById('emName').value,
    age: parseInt(document.getElementById('emAge').value) || 0,
    checkup: document.getElementById('emCheckup').value,
    doctor: document.getElementById('emDoctor').value,
    lastVisit: document.getElementById('emLastVisit').value,
    meds
  };
  if (id) {
    const idx = data.medical.findIndex(x => x.id === id);
    if (idx >= 0) data.medical[idx] = entry;
  } else {
    data.medical.push(entry);
  }
  saveOAHData(data);
  renderOAH();
  initOAHAdmin();
  closeEditModal();
}

function deleteMedical(id) {
  if (!confirm('Delete this medical report?')) return;
  const data = getOAHData();
  data.medical = data.medical.filter(m => m.id !== id);
  saveOAHData(data);
  renderOAH();
  initOAHAdmin();
}

// ─── OAH ADMIN: ATTENDANCE & RESIDENTS TABLE ───
function resetAttendance() {
  if (!confirm('Reset all attendance for the week?')) return;
  document.querySelectorAll('.attendance-dot').forEach(d => {
    d.classList.remove('present', 'absent');
    d.textContent = '-';
  });
}

// ─── GALLERY ADMIN EDITING ───
function initGalleryAdmin() {
  // Only on gallery.html or gallery sub-pages
  const heading = document.querySelector('.gallery-header h1, .gallery-page h1');
  if (!heading) return;
  // Add admin edit button to gallery page
  const header = document.querySelector('.gallery-header');
  if (!header) return;
  const btn = document.createElement('button');
  btn.className = 'admin-edit-btn';
  btn.textContent = '✏️ Edit Gallery';
  btn.style.cssText = 'display:none;margin-top:15px;padding:8px 24px;background:var(--primary);color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;';
  btn.onclick = () => showGalleryEditor();
  header.appendChild(btn);
}

function showGalleryEditor() {
  // Get gallery key from URL
  const path = window.location.pathname;
  let key = 'root';
  if (path.includes('/gallery/')) {
    const parts = path.split('/');
    key = parts[parts.length - 2] || 'root';
  }
  const saved = (() => {
    try { return JSON.parse(localStorage.getItem('prajwala_gallery_' + key) || '[]'); } catch (e) { return []; }
  })();
  const images = saved.length ? saved : Array.from(document.querySelectorAll('.gallery-grid img, .photo-grid img')).map(img => img.src);

  let html = `<h3>Edit Gallery Images</h3>
    <p style="font-size:13px;color:var(--text-light);margin-bottom:10px;">Add image URLs below. Existing images are shown with delete buttons.</p>
    <div id="galleryEditList">`;
  images.forEach((url, i) => {
    html += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <img src="${url}" style="width:50px;height:40px;object-fit:cover;border-radius:6px;">
      <input value="${url}" style="flex:1;padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-size:12px;" onchange="updateGalleryUrl(${i}, this.value)">
      <button onclick="removeGalleryImg(${i})" style="background:#dc2626;color:#fff;border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;">&times;</button>
    </div>`;
  });
  html += `</div>
    <button class="btn btn-outline-oah" onclick="addGalleryImg()" style="margin-top:8px;font-size:13px;">+ Add Image</button>
    <div class="btn-row" style="margin-top:15px;">
      <button class="btn btn-primary" onclick="saveGallery('${key}')">Save Changes</button>
      <button class="btn btn-outline-oah" onclick="closeEditModal()">Cancel</button>
    </div>`;
  openEditModal(html, () => { });
}

function updateGalleryUrl(idx, val) {
  window._galleryEditData = window._galleryEditData || {};
  window._galleryEditData[idx] = val;
}

function addGalleryImg() {
  const list = document.getElementById('galleryEditList');
  const idx = list.children.length;
  const div = document.createElement('div');
  div.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:6px;';
  div.innerHTML = `<input placeholder="Paste image URL..." style="flex:1;padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-size:12px;" onchange="updateGalleryUrl(${idx}, this.value)">
    <button onclick="this.parentElement.remove()" style="background:#dc2626;color:#fff;border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;">&times;</button>`;
  list.appendChild(div);
}

function removeGalleryImg(idx) {
  const div = document.getElementById('galleryEditList').children[idx];
  if (div) div.remove();
}

function saveGallery(key) {
  const urls = [];
  document.querySelectorAll('#galleryEditList input').forEach(inp => {
    if (inp.value.trim()) urls.push(inp.value.trim());
  });
  localStorage.setItem('prajwala_gallery_' + key, JSON.stringify(urls));
  closeEditModal();
  alert('Gallery updated! Refresh to see changes.');
}

// ─── INIT ───
// Admin edit modal overlay + edit button styles (shared across pages)
if (!document.getElementById('editModalOverlay')) {
  const overlay = document.createElement('div');
  overlay.className = 'edit-modal-overlay';
  overlay.id = 'editModalOverlay';
  overlay.onclick = function (e) { if (e.target === this) closeEditModal(); };
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
    body.admin-logged-in .admin-edit-btn { display: inline-flex !important; }
    .admin-edit-btn { display: none !important; }
  `;
  document.head.appendChild(s);
}
initPage();
initImpactCounters();
const isOAH = window.location.pathname.includes('oldage-home');
if (isOAH) initOAHAdmin();
const isGallery = window.location.pathname.includes('gallery');
if (isGallery) initGalleryAdmin();
// Check if already logged in (e.g. page refresh)
if (document.body.classList.contains('admin-logged-in')) {
  document.getElementById('adminLoginBtn').style.display = 'none';
  document.getElementById('adminLogoutBtn').style.display = 'inline-flex';
  if (isOAH) initOAHAdmin();
}

// Initialize WhatsApp Float on load
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('wa-float')) {
    const wa = document.createElement('a');
    wa.id = 'wa-float';
    wa.href = 'https://wa.me/919876543210';
    wa.target = '_blank';
    wa.className = 'whatsapp-float';
    wa.innerHTML = '<i class="fab fa-whatsapp" style="font-size:28px;"></i>';
    document.body.appendChild(wa);
  }
});
