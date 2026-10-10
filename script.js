const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.testimonial-control.prev');
const nextBtn = document.querySelector('.testimonial-control.next');
const projectCards = document.querySelectorAll('.project-card');
const processVideo = document.querySelector('.process-visual video');
const processVideoToggle = document.querySelector('.process-video-toggle');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.querySelector('.contact-form');
const languageToggle = document.querySelector('.language-toggle');
const heroQuote = document.querySelector('.hero-quote');
const whatsappNumber = '9779866578515';
let currentLanguage = 'en';

const heroQuotes = [
  {
    en: 'From modular kitchens to sleek partitions, we frame your vision with strength and style.',
    ne: 'मोड्युलर किचनदेखि आकर्षक पार्टिसनसम्म, हामी तपाईंको सोचलाई मजबुती र शैलीका साथ आकार दिन्छौँ।'
  },
  {
    en: 'Precision engineering meets elegant living, strength in steel, perfection in aluminium.',
    ne: 'सटीक इन्जिनियरिङ र सुन्दर जीवनशैलीको संगम, स्टिलमा मजबुती, एल्युमिनियममा उत्कृष्टता।'
  },
  {
    en: 'Custom fabrication, timeless design: complete aluminium, uPVC, and steel solutions under one roof.',
    ne: 'कस्टम फेब्रिकेसन, कालजयी डिजाइन: एल्युमिनियम, uPVC र स्टिलका सम्पूर्ण समाधान एउटै छानामुनि।'
  },
  {
    en: 'Transforming homes and offices with durable metalwork, modern glass, and custom craftsmanship.',
    ne: 'टिकाउ मेटलवर्क, आधुनिक ग्लास र कस्टम कारीगरीद्वारा घर तथा कार्यालयको रूपान्तरण।'
  },
  {
    en: 'Built to last, designed to impress, modern kitchens, doors, and partitions crafted with care.',
    ne: 'टिकाउ बनाउन निर्मित, प्रभाव पार्ने गरी डिजाइन गरिएको, आधुनिक किचन, ढोका र पार्टिसन ध्यानपूर्वक तयार।'
  },
  {
    en: 'Engineering elegance for every corner, from custom partitions to modern interiors.',
    ne: 'हरेक कुनाका लागि इन्जिनियरिङको सुन्दरता, कस्टम पार्टिसनदेखि आधुनिक इन्टेरियरसम्म।'
  }
];
let heroQuoteIndex = 0;
let heroQuoteTimer;

function updateHeroQuote() {
  if (!heroQuote) return;
  heroQuote.classList.add('is-changing');
  window.setTimeout(() => {
    const quote = heroQuotes[heroQuoteIndex];
    heroQuote.textContent = currentLanguage === 'ne' ? quote.ne : quote.en;
    heroQuote.classList.remove('is-changing');
  }, 550);
}

function startHeroQuoteRotation() {
  if (!heroQuote || heroQuoteTimer) return;
  heroQuoteTimer = window.setInterval(() => {
    heroQuoteIndex = (heroQuoteIndex + 1) % heroQuotes.length;
    updateHeroQuote();
  }, 6000);
}

const nepaliTranslations = {
  'Home': 'गृहपृष्ठ',
  'About': 'हाम्रो बारेमा',
  'Products': 'उत्पादनहरू',
  'Projects': 'परियोजनाहरू',
  'Process': 'प्रक्रिया',
  'Team': 'टोली',
  'Reviews': 'प्रतिक्रियाहरू',
  'Get a Quote': 'कोटेसन लिनुहोस्',
  'Precision craftsmanship • lasting quality': 'सटीक शिल्पकला • दीर्घकालीन गुणस्तर',
  'Engineering & Fabrication Built for Modern Spaces': 'आधुनिक स्थानका लागि इन्जिनियरिङ र फेब्रिकेसन',
  'Glass • uPVC • Aluminium • WPC • Steel Solutions': 'Glass • uPVC • Aluminium • WPC • Steel समाधानहरू',
  'From precision fabrication to modern interior solutions, Mama Bhanja Engineering and Fabrication Works delivers practical, durable and professionally finished solutions for homes, businesses and architectural spaces.': 'सटीक फेब्रिकेसनदेखि आधुनिक इन्टेरियर समाधानसम्म, Mama Bhanja Engineering and Fabrication Works ले घर, व्यवसाय र वास्तुकला स्थानका लागि व्यावहारिक, टिकाउ र व्यावसायिक रूपमा सम्पन्न समाधानहरू प्रदान गर्दछ।',
  'Explore Our Work': 'हाम्रो काम हेर्नुहोस्',
  'Materials expertise': 'सामग्रीमा विशेषज्ञता',
  'Solutions Across Five Materials': 'पाँच सामग्रीमा समाधानहरू',
  'Windows, doors and modern architectural solutions.': 'झ्याल, ढोका र आधुनिक वास्तुकला समाधानहरू।',
  'Doors, windows, partitions and architectural applications.': 'ढोका, झ्याल, पार्टिसन र वास्तुकला प्रयोगहरू।',
  'Interior furniture, cabinets, wall applications and modern designs.': 'भित्री फर्निचर, क्याबिनेट, भित्ताका प्रयोग र आधुनिक डिजाइनहरू।',
  'Structural fabrication, gates, railings, frames and custom steel work.': 'संरचनात्मक फेब्रिकेसन, गेट, रेलिङ, फ्रेम र कस्टम स्टिल काम।',
  'Shower enclosures, partitions and custom glass solutions for modern spaces.': 'आधुनिक स्थानका लागि शावर इनक्लोजर, पार्टिसन र कस्टम ग्लास समाधानहरू।',
  'Explore': 'हेर्नुहोस्',
  'Product portfolio': 'उत्पादन सूची',
  'Built for the Way You Live': 'तपाईंको जीवनशैलीका लागि निर्मित',
  'Practical fabrication and interior solutions designed around your space.': 'तपाईंको स्थानअनुसार तयार गरिएका व्यावहारिक फेब्रिकेसन र इन्टेरियर समाधानहरू।',
  'Portfolio': 'पोर्टफोलियो',
  'Our Recent Work': 'हाम्रो पछिल्लो काम',
  'Residential': 'आवासीय',
  'Commercial': 'व्यावसायिक',
  'Resident': 'आवासीय',
  'Interior': 'इन्टेरियर',
  'Location: Lumbini Road, Murgiya': 'स्थान: लुम्बिनी रोड, मुर्गिया',
  'Location: Sunghaba Chowk, Murgiya': 'स्थान: सुंघाभा चोक, मुर्गिया',
  'Location: Hattibazar,Colony': 'स्थान: हाट्टीबजार, कोलोनी',
  'Location: Belbhariya Chowk , Kanchan': 'स्थान: बेलभरिया चोक, कञ्चन',
  'Why choose us': 'हामीलाई किन रोज्ने',
  'Built With Precision. Finished With Care.': 'सटीकताका साथ निर्मित। ध्यानपूर्वक सम्पन्न।',
  'Quality Materials': 'गुणस्तरीय सामग्री',
  'Carefully selected materials for lasting performance.': 'दीर्घकालीन उपयोगका लागि सावधानीपूर्वक छानिएका सामग्री।',
  'Custom Fabrication': 'कस्टम फेब्रिकेसन',
  'Tailored fabrication suited to each site and requirement.': 'हरेक स्थान र आवश्यकताअनुसार तयार गरिएको फेब्रिकेसन।',
  'Skilled Workmanship': 'दक्ष कारीगरी',
  'Execution shaped by practical craft and technical insight.': 'व्यावहारिक सीप र प्राविधिक ज्ञानमा आधारित काम।',
  'Reliable Service': 'भरपर्दो सेवा',
  'Responsive support from initial consultation to handover.': 'प्रारम्भिक परामर्शदेखि हस्तान्तरणसम्म उत्तरदायी सहयोग।',
  'Our process': 'हाम्रो प्रक्रिया',
  'Our Process': 'हाम्रो प्रक्रिया',
  'About us': 'हाम्रो बारेमा',
  'Engineering Solutions for Real Spaces': 'वास्तविक स्थानका लागि इन्जिनियरिङ समाधान',
  'Mama Bhanja Engineering and Fabrication Works works across residential, commercial and custom projects, combining fabrication expertise with practical interior solutions.': 'Mama Bhanja Engineering and Fabrication Works ले आवासीय, व्यावसायिक र कस्टम परियोजनाहरूमा फेब्रिकेसन विशेषज्ञतालाई व्यावहारिक इन्टेरियर समाधानसँग जोडेर काम गर्दछ।',
  'Our team approaches every project with attention to measurement, material selection, finishing quality and installation precision. From temporary fit-outs to enduring home upgrades, we focus on durable systems and refined outcomes that complement modern living and functional spaces.': 'हाम्रो टोलीले प्रत्येक परियोजनामा नाप, सामग्री छनोट, फिनिसिङ गुणस्तर र स्थापनाको सटीकतामा ध्यान दिन्छ। अस्थायी फिट-आउटदेखि दीर्घकालीन घर सुधारसम्म, हामी आधुनिक जीवनशैली र उपयोगी स्थानलाई सुहाउने टिकाउ प्रणाली र उत्कृष्ट परिणाममा केन्द्रित छौँ।',
  'Residential, commercial and custom project capability': 'आवासीय, व्यावसायिक र कस्टम परियोजना क्षमता',
  'Material expertise in Glass,uPVC, Aluminium, WPC and Steel': 'Glass, uPVC, Aluminium, WPC र Steel मा सामग्री विशेषज्ञता',
  'Quality-led fabrication and installation process': 'गुणस्तरमा आधारित फेब्रिकेसन र स्थापना प्रक्रिया',
  'Projects Completed': 'सम्पन्न परियोजनाहरू',
  'Core Materials': 'मुख्य सामग्री',
  'Solution Categories': 'समाधानका वर्गहरू',
  'Custom-Focused Work': 'कस्टम केन्द्रित काम',
  'Leadership': 'नेतृत्व',
  'Founders & Executive Leadership': 'संस्थापक तथा कार्यकारी नेतृत्व',
  'Founder & Managing Director': 'संस्थापक तथा प्रबन्ध निर्देशक',
  'Co-Founder & Chief Executive Officer': 'सह-संस्थापक तथा प्रमुख कार्यकारी अधिकृत',
  'Leads company direction, client relationships and the delivery of quality fabrication projects.': 'कम्पनीको दिशा, ग्राहक सम्बन्ध र गुणस्तरीय फेब्रिकेसन परियोजनाको नेतृत्व गर्नुहुन्छ।',
  'Oversees daily operations and coordinates teams to deliver dependable project outcomes.': 'भरपर्दो परियोजना परिणामका लागि दैनिक सञ्चालनको निरीक्षण र टोली समन्वय गर्नुहुन्छ।',
  'Our people': 'हाम्रा कर्मचारी',
  'Team Members': 'टोलीका सदस्यहरू',
  'Senior Fabricator': 'वरिष्ठ फेब्रिकेटर',
  'Technical Specialist': 'प्राविधिक विशेषज्ञ',
  'Site Execution Specialist': 'साइट कार्यान्वयन विशेषज्ञ',
  'Fabrication Support': 'फेब्रिकेसन सहयोग',
  'Ensures every design and fabrication detail is based on accurate standards.': 'हरेक डिजाइन र फेब्रिकेसन विवरण सही मापदण्डमा आधारित भएको सुनिश्चित गर्नुहुन्छ।',
  'Drives specialized fabrication for complex interior and architectural elements.': 'जटिल इन्टेरियर र वास्तुकला तत्वका लागि विशेष फेब्रिकेसन अघि बढाउनुहुन्छ।',
  'Executes accurate on-site fitment, alignment to deliver polished, ready-to-use installations.': 'सफा र प्रयोगका लागि तयार स्थापना दिन साइटमा सटीक फिटिङ र मिलान गर्नुहुन्छ।',
  'Technical specialists with material preparation, site organization,and foundational for smooth workflow and project efficiency.': 'सामग्री तयारी, साइट व्यवस्थापन र सहज कार्यप्रवाहका लागि प्राविधिक सहयोग प्रदान गर्नुहुन्छ।',
  'Testimonials': 'ग्राहक प्रतिक्रिया',
  'What Our Clients Say': 'हाम्रा ग्राहकहरू के भन्छन्',
  '“The quality and finish turned out even better than we imagined.Team was punctual and delivered right on schedule, offering phenomenal value for money.”': '“गुणस्तर र फिनिसिङ हामीले कल्पना गरेभन्दा पनि राम्रो भयो। टोली समयमै आयो र निर्धारित समयमा काम सम्पन्न गर्‍यो, मूल्यअनुसार उत्कृष्ट सेवा दियो।”',
  '“We ordered a multi-compartment glass display for our business, and the quality of the finish surpassed our expectations.”': '“हामीले आफ्नो व्यवसायका लागि बहु-खाना भएको ग्लास डिस्प्ले अर्डर गरेका थियौँ, यसको फिनिसिङको गुणस्तर हाम्रो अपेक्षाभन्दा उत्कृष्ट भयो।”',
  '“We were hesitant at first since we originally planned a wooden kitchen, but we are so glad we trusted them. The final product looks amazing and is built to last.”': '“सुरुमा हामीले काठको भान्सा बनाउने योजना गरेकाले केही संकोच थियो, तर उहाँहरूमाथि विश्वास गरेकोमा खुसी छौँ। अन्तिम उत्पादन आकर्षक र टिकाउ बनेको छ।”',
  'Tell us what you need. We\'ll help you find the right material, design and fabrication solution for your space.': 'तपाईंलाई के चाहिन्छ हामीलाई भन्नुहोस्। तपाईंको स्थानका लागि सही सामग्री, डिजाइन र फेब्रिकेसन समाधान छान्न हामी सहयोग गर्नेछौँ।',
  'Let’s discuss your project': 'तपाईंको परियोजनाबारे छलफल गरौँ',
  'Have a Project in Mind?': 'के तपाईंको मनमा कुनै परियोजना छ?',
  'Request a Quote': 'कोटेसन माग्नुहोस्',
  'Call Us': 'हामीलाई फोन गर्नुहोस्',
  'Contact': 'सम्पर्क',
  'Let\'s Build Something': 'केही निर्माण गरौँ',
  'Phone': 'फोन',
  'Email': 'इमेल',
  'Address': 'ठेगाना',
  'Business Hours': 'कार्यालय समय',
  'Sainamaina-07,Colony,Nepal': 'सैनामैना-०७, कोलोनी, नेपाल',
  'Sun - Fri [9:00 AM - 05:30 PM]': 'आइतबार - शुक्रबार [बिहान ९:०० - बेलुका ५:३०]',
  'Name': 'नाम',
  'Your name': 'तपाईंको नाम',
  'Your address': 'तपाईंको ठेगाना',
  'Project Type': 'परियोजनाको प्रकार',
  'Project type': 'परियोजनाको प्रकार',
  'Material': 'सामग्री',
  'Message': 'सन्देश',
  'Tell us about your project': 'तपाईंको परियोजनाबारे लेख्नुहोस्',
  'Send Inquiry': 'अनुरोध पठाउनुहोस्',
  'Open in Google Maps': 'Google Maps मा खोल्नुहोस्',
  'Quick Links': 'छिटो लिङ्कहरू',
  'Follow Us': 'हामीलाई फलो गर्नुहोस्',
  'All rights reserved.': 'सर्वाधिकार सुरक्षित।',
  'Scope of work': 'कामको दायरा',
  'Mrs. Narmada Gyawali': 'श्रीमती नर्मदा ज्ञवाली',
  'Mr. Keshav Gyawali': 'श्री केशव ज्ञवाली',
  'Ajay Tharu': 'अजय थारु',
  'Badhri Chaudhary': 'बद्री चौधरी',
  'Ram Krishna Tharu': 'राम कृष्ण थारु',
  'Durgesh Sahani': 'दुर्गेश सहानी',
  'Ram Nath Gautam': 'राम नाथ गौतम',
  'Yubraj Dhakal': 'युवराज ढकाल',
  'Khadka': 'खड्का'
};

const originalTextNodes = new Map();
const translationWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = translationWalker.nextNode())) {
  originalTextNodes.set(textNode, textNode.nodeValue);
}

function shouldKeepEnglish(textNode) {
  const parent = textNode.parentElement;
  return parent?.closest('.product-card h3, .project-card h3, .client-meta span, .footer-branding');
}

function translatePage(language) {
  currentLanguage = language;
  originalTextNodes.forEach((original, node) => {
    const text = original.trim();
    if (!text || shouldKeepEnglish(node)) return;
    const normalizedText = text.replace(/\s+/g, ' ');
    const translated = language === 'ne' ? nepaliTranslations[normalizedText] : text;
    if (translated) {
      node.nodeValue = original.replace(text, translated);
    }
  });

  document.querySelectorAll('input, textarea').forEach((field) => {
    const originalPlaceholder = field.dataset.originalPlaceholder || field.placeholder;
    field.dataset.originalPlaceholder = originalPlaceholder;
    field.placeholder = language === 'ne' ? (nepaliTranslations[originalPlaceholder] || originalPlaceholder) : originalPlaceholder;
  });
  document.documentElement.lang = language === 'ne' ? 'ne' : 'en';
  languageToggle.setAttribute('aria-pressed', String(language === 'ne'));
  languageToggle.setAttribute(
    'aria-label',
    language === 'ne' ? 'Switch to English' : 'नेपालीमा परिवर्तन गर्नुहोस्'
  );
  languageToggle.title = language === 'ne' ? 'Switch to English' : 'नेपालीमा परिवर्तन गर्नुहोस्';
  updateHeroQuote();
  updateModalLanguage();
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    translatePage(currentLanguage === 'en' ? 'ne' : 'en');
  });
}

const projectDetails = {
  'modern-kitchen': {
    title: 'Modern Modular Kitchen',
    location: 'Lumbini Road, Murgiya',
    type: 'Interior',
    materials: 'Aluminium',
    description: 'We designed and delivered a functional modern kitchen with durable finishes, integrated storage and a clean built-in layout suited to everyday family use.',
    descriptionNe: 'हामीले दैनिक पारिवारिक प्रयोगका लागि उपयुक्त टिकाउ फिनिस, एकीकृत भण्डारण र सफा बिल्ट-इन लेआउटसहितको आधुनिक भान्सा डिजाइन र निर्माण गर्‍यौँ।',
    scope: ['Planning and layout consultation', 'Custom fabrication and panel work', 'Installation and finishing'],
    scopeNe: ['योजना र लेआउट परामर्श', 'कस्टम फेब्रिकेसन तथा प्यानल काम', 'स्थापना तथा फिनिसिङ']
  },
  'glass-dry-fruit-container': {
    title: 'Custom Glass Dry Fruit Storage Display',
    location: 'Sunghaba Chowk,Murgiya',
    type: 'Commercial',
    materials: 'Glass',
    description: 'An elegant multi-compartment glass display solution crafted for optimal product visibility, airtight organization, and clean retail presentation.',
    descriptionNe: 'उत्पादनलाई स्पष्ट देखिने, व्यवस्थित र सफा रूपमा प्रस्तुत गर्न तयार गरिएको आकर्षक बहु-खाना भएको ग्लास डिस्प्ले समाधान।',
    scope: ['Custom glass container fabrication', 'Precision cutting and edge finishing', 'Base integration and hardware installation'],
    scopeNe: ['कस्टम ग्लास कन्टेनर फेब्रिकेसन', 'सटीक कटिङ र किनारा फिनिसिङ', 'बेस एकीकरण तथा हार्डवेयर स्थापना']

  },
  'premium-kitchen': {
    title: 'Premium Modular Kitchen',
    location: 'Hattibazar,Colony',
    type: 'Interior',
    materials: 'Aluminium',
    description: 'A modular kitchen engineered for complete termite resistance, sleek aesthetics, and effortless daily maintenance.',
    descriptionNe: 'पूर्ण रूपमा धमिरा प्रतिरोधी, आकर्षक र दैनिक मर्मतसम्भारमा सजिलो हुने गरी तयार गरिएको मोड्युलर भान्सा।',
    scope: ['Layout planning and 3D detailing', 'Custom aluminium profile fabrication', 'Hardware integration and professional installation'],
    scopeNe: ['लेआउट योजना र 3D विवरण', 'कस्टम एल्युमिनियम प्रोफाइल फेब्रिकेसन', 'हार्डवेयर एकीकरण तथा व्यावसायिक स्थापना']
  },
  'glass-crockery-rack': {
    title: 'Tall Glass Crockery Display Rack',
    location: 'Belbhariya Chowk , Kanchan',
    type: 'Interior',
    materials: 'Aluminium + Glass',
    description: 'A sleek, full-height glass display cabinet featuring slim dark framing,clear panels designed for elegant organization and visibility of crockery and glassware',
    descriptionNe: 'क्रोकरी र ग्लासवेयरलाई आकर्षक रूपमा सजाउन र स्पष्ट देखाउन स्लिम गाढा फ्रेम र पारदर्शी प्यानलसहितको अग्लो ग्लास डिस्प्ले क्याबिनेट।',
    scope: ['Custom aluminium frame fabrication', 'Precision glass cutting and shelving', 'Hinged door setup and hardware installation'],
    scopeNe: ['कस्टम एल्युमिनियम फ्रेम फेब्रिकेसन', 'सटीक ग्लास कटिङ र सेल्फ', 'हिन्ज भएको ढोका तथा हार्डवेयर स्थापना']
  }
};

const modalTranslations = {
  Location: 'स्थान',
  'Project Type': 'परियोजनाको प्रकार',
  Materials: 'सामग्री',
  Scope: 'कामको दायरा',
  'Scope of work': 'कामको दायरा',
  Interior: 'इन्टेरियर',
  Commercial: 'व्यावसायिक',
  Residential: 'आवासीय'
};

function updateModalLanguage() {
  if (!modal) return;
  const projectKey = modal.dataset.projectKey;
  const detail = projectDetails[projectKey];
  if (!detail) return;
  const modalText = modal.querySelector('.modal-description');
  const modalTag = modal.querySelector('.eyebrow');
  const modalFactList = modal.querySelector('.project-facts');
  const modalScope = modal.querySelector('.modal-section ul');
  const modalScopeTitle = modal.querySelector('.modal-section h4');
  if (modalTag) {
    const originalTag = modalTag.dataset.english || modalTag.textContent;
    modalTag.dataset.english = originalTag;
    modalTag.textContent = currentLanguage === 'ne'
      ? (modalTranslations[originalTag] || originalTag)
      : originalTag;
  }
  if (modalText) modalText.textContent = currentLanguage === 'ne' ? detail.descriptionNe : detail.description;
  if (modalScopeTitle) modalScopeTitle.textContent = currentLanguage === 'ne' ? 'कामको दायरा' : 'Scope of work';
  if (modalFactList) {
    modalFactList.querySelectorAll('li').forEach((fact) => {
      const label = fact.querySelector('span');
      const value = fact.querySelector('strong');
      if (!label || !value) return;
      const english = label.dataset.english || label.textContent;
      label.dataset.english = english;
      label.textContent = currentLanguage === 'ne' ? (modalTranslations[english] || english) : english;
      const originalValue = value.dataset.english || value.textContent;
      value.dataset.english = originalValue;
      value.textContent = currentLanguage === 'ne' && english === 'Project Type'
        ? (modalTranslations[originalValue] || originalValue)
        : originalValue;
    });
  }
  if (modalScope) {
    const scope = currentLanguage === 'ne' ? detail.scopeNe : detail.scope;
    modalScope.innerHTML = scope.map((item) => `<li>${item}</li>`).join('');
  }
}

translatePage('ne');
startHeroQuoteRotation();

function updateHeaderState() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeaderState);
updateHeaderState();

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

function animateCounter(counter) {
  const target = Number(counter.dataset.count || 0);
  const suffix = target >= 100 ? '+' : '';
  const duration = 1400;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counter.textContent = `${target}${suffix}`;
    return;
  }

  const startTime = performance.now();
  function updateCounter(timestamp) {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * easedProgress);
    counter.textContent = `${current}${progress === 1 ? suffix : ''}`;

    if (progress < 1) {
      window.requestAnimationFrame(updateCounter);
    }
  }

  window.requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.dataset.animated) {
          el.dataset.animated = 'true';
          animateCounter(el);
        }
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

if (processVideo && processVideoToggle) {
  const updateProcessVideoToggle = () => {
    const isPlaying = !processVideo.paused && !processVideo.ended;
    const action = isPlaying ? 'Pause' : 'Play';
    processVideoToggle.textContent = isPlaying ? '⏸' : '▶';
    processVideoToggle.setAttribute('aria-label', `${action} process video`);
  };

  processVideo.addEventListener('play', updateProcessVideoToggle);
  processVideo.addEventListener('pause', updateProcessVideoToggle);
  processVideoToggle.addEventListener('click', () => {
    if (processVideo.paused) {
      processVideo.play().catch(updateProcessVideoToggle);
    } else {
      processVideo.pause();
    }
  });

  updateProcessVideoToggle();
  processVideo.play().catch(updateProcessVideoToggle);
}

let activeIndex = 0;
function showTestimonial(index) {
  testimonialCards.forEach((card, cardIndex) => {
    card.classList.toggle('active', cardIndex === index);
  });
}

if (prevBtn && nextBtn && testimonialCards.length) {
  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(activeIndex);
  });

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % testimonialCards.length;
    showTestimonial(activeIndex);
  });

  setInterval(() => {
    activeIndex = (activeIndex + 1) % testimonialCards.length;
    showTestimonial(activeIndex);
  }, 5500);
}

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    const projectKey = card.dataset.project;
    const detail = projectDetails[projectKey];
    if (!detail) return;
    modal.dataset.projectKey = projectKey;

    const modalTitle = modal.querySelector('#modalTitle');
    const modalTag = modal.querySelector('.eyebrow');
    const modalImage = modal.querySelector('.modal-gallery img');
    const modalFactList = modal.querySelector('.project-facts');
    const modalText = modal.querySelector('.modal-description');
    const modalScope = modal.querySelector('.modal-section ul');
    const projectImage = card.querySelector('img');

    if (modalTitle) modalTitle.textContent = detail.title;
    if (modalTag) {
      modalTag.dataset.english = detail.type;
      modalTag.textContent = currentLanguage === 'ne' ? (modalTranslations[detail.type] || detail.type) : detail.type;
    }
    if (modalImage && projectImage) {
      modalImage.src = projectImage.src;
      modalImage.alt = projectImage.alt;
    }
    if (modalText) modalText.textContent = currentLanguage === 'ne' ? detail.descriptionNe : detail.description;
    if (modalFactList) {
      modalFactList.innerHTML = `
        <li><span>Location</span><strong>${detail.location}</strong></li>
        <li><span>Project Type</span><strong>${detail.type}</strong></li>
        <li><span>Materials</span><strong>${detail.materials}</strong></li>
      `;
    }
    if (modalScope) {
      const scope = currentLanguage === 'ne' ? detail.scopeNe : detail.scope;
      modalScope.innerHTML = scope.map((item) => `<li>${item}</li>`).join('');
    }
    updateModalLanguage();
    const modalScopeTitle = modal.querySelector('.modal-section h4');
    if (modalScopeTitle) modalScopeTitle.textContent = currentLanguage === 'ne' ? 'कामको दायरा' : 'Scope of work';

    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    const closeTarget = event.target.getAttribute('data-close-modal');
    if (closeTarget === 'true' || event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('visible')) {
    closeModal();
  }
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'Customer';
    const address = formData.get('address')?.toString().trim() || 'Not provided';
    const projectType = formData.get('projectType')?.toString().trim() || 'Not provided';
    const material = formData.get('material')?.toString().trim() || 'Not provided';
    const message = formData.get('message')?.toString().trim() || 'No additional details provided.';

    const whatsappText = [
      'Hello Mama Bhanja Engineering and Fabrication Works,',
      '',
      `Name: ${name}`,
      `Address: ${address}`,
      `Project Type: ${projectType}`,
      `Material: ${material}`,
      `Message: ${message}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, '_blank');
    contactForm.reset();
  });
}
