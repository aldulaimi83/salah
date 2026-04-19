const WUDU_SCENES = [
  "intention",
  "hands",
  "mouth",
  "nose",
  "face",
  "arms",
  "head",
  "ears",
  "feet",
];

const SALAH_SCENES = [
  "qiblah",
  "takbir",
  "recite",
  "ruku",
  "stand",
  "sujood",
  "sit",
  "salam",
];

const CONTENT = {
  en: {
    navWudu: "Wudu",
    navSalah: "Salah",
    navPractice: "Practice",
    eyebrow: "For Muslim kids growing up abroad",
    heroTitle: "Learn Wudu and Salah Step by Step",
    heroText: "A gentle, colorful guide with picture demonstrations, simple details, and practice reminders for children learning how to pray.",
    startWudu: "Start with Wudu",
    learnSalah: "Learn Salah",
    chooseLanguage: "Choose language",
    languageNote: "Switch language anytime. Arabic and Urdu are right-to-left automatically.",
    introEyebrow: "Simple and safe learning",
    introTitle: "Made for kids, parents, and weekend Islamic schools",
    introText: "Use this page at home, in class, or on a phone. Each card shows a picture-style demonstration, a simple instruction, and a helpful reminder.",
    wuduEyebrow: "Clean before prayer",
    wuduTitle: "How to Make Wudu",
    wuduIntro: "Wudu is washing in a special way before salah. Move slowly, say Bismillah, and try to wash each part properly.",
    duaEyebrow: "Before starting",
    duaTitle: "Begin with Bismillah",
    duaText: "Say Bismillah before wudu and remember that cleanliness is loved in Islam.",
    salahEyebrow: "Prayer steps",
    salahTitle: "How to Pray Salah",
    salahIntro: "This is a beginner guide. Learn with a parent, teacher, or trusted local imam so your movements and words become correct.",
    practiceEyebrow: "Daily habit",
    practiceTitle: "Practice Tracker",
    practiceText: "Tap a button when you practice wudu or salah today. The progress stays on this device.",
    trackWudu: "I practiced wudu",
    trackSalah: "I practiced salah",
    resetTracker: "Reset today",
    parentTitle: "Note for Parents",
    parentText: "Children learn best with kindness and repetition. This guide teaches the basics, but family practice and local scholars are still important.",
    footerText: "Built by YouOOO to help Muslim kids learn with confidence.",
    trackerDone: "Great work. You practiced both today.",
    trackerCount: "{done} / 2 completed today",
    detailLabel: "Details",
    tipLabel: "Remember",
    pictureLabel: "Picture demonstration",
    wuduSteps: [
      ["Intention", "Make the intention in your heart that you are doing wudu for Allah.", "You do not need to say the intention loudly. A quiet intention in the heart is enough.", "Begin calmly and say Bismillah.", "🤲"],
      ["Wash hands", "Wash both hands up to the wrists three times.", "Let water reach between the fingers and around the thumbs. Start with the right hand, then the left.", "Use water carefully. Do not waste it.", "👐"],
      ["Rinse mouth", "Rinse your mouth gently three times.", "Move water around inside your mouth, then spit it out safely into the sink.", "Do not swallow the water.", "💧"],
      ["Clean nose", "Clean the nose gently three times.", "Take a little water into the nose and blow it out gently. Young kids can do this softly with help.", "Be gentle and do not hurt yourself.", "🌬️"],
      ["Wash face", "Wash your whole face three times.", "Wash from the hairline to the chin, and from one ear area to the other.", "Make sure no dry spots are left.", "🙂"],
      ["Wash arms", "Wash right arm then left arm up to the elbows three times.", "Water should reach the hands, wrists, forearms, and elbows. Rub gently if needed.", "Always include the elbows.", "💪"],
      ["Wipe head", "Wipe over your head once with wet hands.", "Pass wet hands over the head. This is wiping, not washing.", "You only need to wipe once.", "🧒"],
      ["Wipe ears", "Wipe inside and behind the ears once.", "Use wet fingers for the inside of the ears and thumbs for behind the ears.", "Do it gently.", "👂"],
      ["Wash feet", "Wash right foot then left foot up to the ankles three times.", "Let water reach between the toes, the heels, and the ankles.", "The heels must not stay dry.", "🦶"],
    ],
    salahSteps: [
      ["Stand facing qiblah", "Stand calmly and make your intention for the prayer.", "Face the qiblah if you know the direction. Keep your body still and your heart ready.", "Allah knows your intention.", "🧭"],
      ["Takbir", "Raise your hands and say Allahu Akbar.", "This begins the prayer. After takbir, focus on salah and avoid playing or talking.", "Say it clearly and calmly.", "☝️"],
      ["Recite", "Recite Al-Fatiha and another short surah if you are learning.", "Start with quiet focus. If you are still memorizing, practice with a parent or teacher.", "Al-Fatiha is important in every rakah.", "📖"],
      ["Ruku", "Bow and say Subhana Rabbiyal Adheem.", "Keep your back calm and place your hands on your knees. Do not rush.", "Pause long enough to say the dhikr.", "🙇"],
      ["Stand again", "Stand up and say Sami Allahu liman hamidah.", "Return to standing before going to sujood. This pause helps the prayer stay calm.", "Move step by step.", "🧍"],
      ["Sujood", "Go down in prostration and say Subhana Rabbiyal A'la.", "Your forehead, nose, hands, knees, and toes touch the ground. Sujood is a very special moment of closeness to Allah.", "Make dua in sujood when appropriate.", "🤲"],
      ["Sit", "Sit calmly between the two sujoods.", "Pause while sitting, then make the second sujood. Do not bounce quickly.", "Calm prayer is better prayer.", "🪑"],
      ["Finish", "End with tashahhud and salam to the right and left.", "At the end, say salam to finish the prayer. Ask Allah to accept your salah.", "Practice a little every day.", "🌙"],
    ],
  },
  ar: {
    navWudu: "الوضوء",
    navSalah: "الصلاة",
    navPractice: "التدريب",
    eyebrow: "للأطفال المسلمين في بلاد الغربة",
    heroTitle: "تعلم الوضوء والصلاة خطوة بخطوة",
    heroText: "دليل لطيف وملون فيه صور توضيحية وتفاصيل سهلة وتذكير يومي للأطفال الذين يتعلمون الصلاة.",
    startWudu: "ابدأ بالوضوء",
    learnSalah: "تعلم الصلاة",
    chooseLanguage: "اختر اللغة",
    languageNote: "يمكن تغيير اللغة في أي وقت. العربية والأردية تظهران من اليمين إلى اليسار.",
    introEyebrow: "تعلم بسيط وآمن",
    introTitle: "مناسب للأطفال والوالدين ومدارس نهاية الأسبوع",
    introText: "استخدم هذه الصفحة في البيت أو الصف أو الهاتف. كل بطاقة فيها صورة توضيحية وتعليم مختصر وتذكير مفيد.",
    wuduEyebrow: "الطهارة قبل الصلاة",
    wuduTitle: "طريقة الوضوء",
    wuduIntro: "الوضوء غسل مخصوص قبل الصلاة. تمهل، وقل بسم الله، وحاول غسل كل عضو بطريقة صحيحة.",
    duaEyebrow: "قبل البداية",
    duaTitle: "ابدأ ببسم الله",
    duaText: "قل بسم الله قبل الوضوء، وتذكر أن الإسلام يحب الطهارة والنظافة.",
    salahEyebrow: "خطوات الصلاة",
    salahTitle: "طريقة الصلاة",
    salahIntro: "هذا دليل للمبتدئين. تعلم مع الوالدين أو المعلم أو إمام موثوق حتى تصح الحركات والأذكار.",
    practiceEyebrow: "عادة يومية",
    practiceTitle: "متابعة التدريب",
    practiceText: "اضغط الزر عندما تتدرب على الوضوء أو الصلاة اليوم. التقدم يبقى على هذا الجهاز.",
    trackWudu: "تدربت على الوضوء",
    trackSalah: "تدربت على الصلاة",
    resetTracker: "إعادة اليوم",
    parentTitle: "ملاحظة للوالدين",
    parentText: "يتعلم الأطفال بالرفق والتكرار. هذا الدليل يشرح الأساسيات، ويبقى تدريب الأسرة وسؤال أهل العلم مهما.",
    footerText: "بني بواسطة YouOOO لمساعدة الأطفال المسلمين على التعلم بثقة.",
    trackerDone: "عمل رائع. تدربت على الأمرين اليوم.",
    trackerCount: "اكتمل {done} من 2 اليوم",
    detailLabel: "التفاصيل",
    tipLabel: "تذكر",
    pictureLabel: "صورة توضيحية",
    wuduSteps: [
      ["النية", "انو بقلبك أنك تتوضأ لله تعالى.", "لا تحتاج أن تقول النية بصوت عال. يكفي أن تكون في القلب بهدوء.", "ابدأ بهدوء وقل بسم الله.", "🤲"],
      ["غسل اليدين", "اغسل اليدين إلى الرسغين ثلاث مرات.", "أدخل الماء بين الأصابع وحول الإبهام. ابدأ باليد اليمنى ثم اليسرى.", "لا تسرف في الماء.", "👐"],
      ["المضمضة", "تمضمض بلطف ثلاث مرات.", "حرّك الماء في الفم ثم أخرجه في المغسلة بطريقة آمنة.", "لا تبتلع الماء.", "💧"],
      ["الاستنشاق", "نظف الأنف بلطف ثلاث مرات.", "أدخل قليلا من الماء في الأنف ثم أخرجه بلطف. الطفل الصغير يفعل ذلك برفق ومساعدة.", "كن لطيفا ولا تؤذ نفسك.", "🌬️"],
      ["غسل الوجه", "اغسل الوجه كله ثلاث مرات.", "اغسل من منبت الشعر إلى الذقن، ومن جهة الأذن إلى الجهة الأخرى.", "تأكد ألا يبقى مكان جاف.", "🙂"],
      ["غسل الذراعين", "اغسل اليمنى ثم اليسرى إلى المرفقين ثلاث مرات.", "يصل الماء إلى اليد والرسغ والذراع والمرفق، وافرك برفق إذا احتجت.", "لا تنس المرفقين.", "💪"],
      ["مسح الرأس", "امسح الرأس مرة بيدين مبللتين.", "مرر اليدين المبللتين على الرأس. هذا مسح وليس غسلا.", "يكفي المسح مرة واحدة.", "🧒"],
      ["مسح الأذنين", "امسح داخل الأذنين وخلفهما مرة.", "استعمل الأصابع داخل الأذنين والإبهامين خلفهما.", "افعل ذلك برفق.", "👂"],
      ["غسل القدمين", "اغسل اليمنى ثم اليسرى إلى الكعبين ثلاث مرات.", "أوصل الماء بين الأصابع وإلى العقبين والكعبين.", "لا تترك العقبين جافين.", "🦶"],
    ],
    salahSteps: [
      ["الوقوف للقبلة", "قف بهدوء واستحضر نية الصلاة.", "اتجه إلى القبلة إذا عرفت اتجاهها. اجعل جسمك ساكنا وقلبك حاضرا.", "الله يعلم نيتك.", "🧭"],
      ["تكبيرة الإحرام", "ارفع يديك وقل: الله أكبر.", "بهذه التكبيرة تبدأ الصلاة. بعدها ركز ولا تلعب ولا تتكلم.", "قلها بوضوح وهدوء.", "☝️"],
      ["القراءة", "اقرأ الفاتحة وما تيسر من القرآن.", "ابدأ بخشوع. إذا كنت تحفظ، تدرب مع الوالدين أو المعلم.", "الفاتحة مهمة في كل ركعة.", "📖"],
      ["الركوع", "اركع وقل: سبحان ربي العظيم.", "ضع يديك على الركبتين واثبت بهدوء ولا تستعجل.", "توقف قدر الذكر.", "🙇"],
      ["القيام", "ارفع من الركوع وقل: سمع الله لمن حمده.", "ارجع واقفا قبل السجود. هذا يجعل الصلاة هادئة.", "انتقل خطوة خطوة.", "🧍"],
      ["السجود", "اسجد وقل: سبحان ربي الأعلى.", "تلامس الجبهة والأنف واليدان والركبتان وأطراف القدمين الأرض. السجود موضع قرب من الله.", "ادع في السجود بما يناسب.", "🤲"],
      ["الجلوس", "اجلس بهدوء بين السجدتين.", "توقف قليلا في الجلوس ثم اسجد السجدة الثانية ولا تستعجل.", "الصلاة الهادئة أفضل.", "🪑"],
      ["الختم", "اختم بالتشهد والسلام يمينا ويسارا.", "في النهاية سلّم لإنهاء الصلاة، واسأل الله أن يتقبل.", "تدرب قليلا كل يوم.", "🌙"],
    ],
  },
};

CONTENT.es = {
  ...CONTENT.en,
  navWudu: "Wudu",
  navSalah: "Salah",
  navPractice: "Práctica",
  eyebrow: "Para niños musulmanes que viven en el extranjero",
  heroTitle: "Aprende Wudu y Salah Paso a Paso",
  heroText: "Una guía colorida con dibujos, detalles simples y recordatorios para niños que aprenden a rezar.",
  startWudu: "Empezar con wudu",
  learnSalah: "Aprender salah",
  chooseLanguage: "Elige idioma",
  languageNote: "Puedes cambiar el idioma cuando quieras.",
  introEyebrow: "Aprendizaje simple",
  introTitle: "Hecho para niños, padres y escuelas islámicas",
  introText: "Úsalo en casa, en clase o en el teléfono. Cada tarjeta muestra una demostración, una instrucción y un recordatorio.",
  wuduEyebrow: "Limpieza antes de rezar",
  wuduTitle: "Cómo hacer wudu",
  wuduIntro: "Wudu es lavarse de una forma especial antes de salah. Hazlo despacio, di Bismillah y lava cada parte bien.",
  salahEyebrow: "Pasos de oración",
  salahTitle: "Cómo rezar salah",
  salahIntro: "Esta es una guía inicial. Aprende con tus padres, maestro o imam local para hacer los movimientos correctamente.",
  practiceText: "Toca un botón cuando practiques wudu o salah hoy.",
  trackWudu: "Practiqué wudu",
  trackSalah: "Practiqué salah",
  resetTracker: "Reiniciar hoy",
  parentTitle: "Nota para padres",
  parentText: "Los niños aprenden mejor con amabilidad y repetición. Esta guía enseña lo básico.",
  footerText: "Creado por YouOOO para ayudar a niños musulmanes.",
  trackerDone: "Muy bien. Practicaste ambos hoy.",
  trackerCount: "{done} / 2 completado hoy",
  detailLabel: "Detalles",
  tipLabel: "Recuerda",
  pictureLabel: "Demostración",
  wuduSteps: [
    ["Intención", "Haz la intención en tu corazón de hacer wudu por Allah.", "No necesitas decir la intención en voz alta. Basta con tenerla en el corazón.", "Empieza con calma y di Bismillah.", "🤲"],
    ["Lava las manos", "Lava ambas manos hasta las muñecas tres veces.", "Deja que el agua llegue entre los dedos y alrededor de los pulgares.", "No desperdicies agua.", "👐"],
    ["Enjuaga la boca", "Enjuaga tu boca suavemente tres veces.", "Mueve el agua dentro de la boca y luego escúpela con cuidado.", "No tragues el agua.", "💧"],
    ["Limpia la nariz", "Limpia la nariz suavemente tres veces.", "Toma un poco de agua y expúlsala con cuidado. Los niños pequeños deben hacerlo suave.", "No te lastimes.", "🌬️"],
    ["Lava la cara", "Lava toda la cara tres veces.", "Lava desde la línea del cabello hasta la barbilla, y de un lado al otro.", "No dejes partes secas.", "🙂"],
    ["Lava los brazos", "Lava el brazo derecho y luego el izquierdo hasta los codos tres veces.", "El agua debe llegar a manos, muñecas, antebrazos y codos.", "Incluye siempre los codos.", "💪"],
    ["Pasa agua por la cabeza", "Pasa las manos mojadas sobre la cabeza una vez.", "Esto es pasar agua, no lavar completamente.", "Una vez es suficiente.", "🧒"],
    ["Limpia las orejas", "Limpia dentro y detrás de las orejas una vez.", "Usa los dedos para dentro y los pulgares para detrás.", "Hazlo con suavidad.", "👂"],
    ["Lava los pies", "Lava el pie derecho y luego el izquierdo hasta los tobillos tres veces.", "El agua debe llegar entre los dedos, talones y tobillos.", "Los talones no deben quedar secos.", "🦶"],
  ],
  salahSteps: [
    ["Mira hacia la qiblah", "Ponte de pie con calma y haz tu intención.", "Mira hacia la qiblah si sabes la dirección. Prepara tu corazón.", "Allah conoce tu intención.", "🧭"],
    ["Takbir", "Levanta las manos y di Allahu Akbar.", "Así comienza la oración. Después concéntrate y no hables.", "Dilo claro y tranquilo.", "☝️"],
    ["Recita", "Recita Al-Fatiha y una surah corta si estás aprendiendo.", "Si todavía memorizas, practica con un adulto o maestro.", "Al-Fatiha es muy importante.", "📖"],
    ["Ruku", "Inclínate y di Subhana Rabbiyal Adheem.", "Pon las manos sobre las rodillas y no te apresures.", "Haz una pausa para el dhikr.", "🙇"],
    ["Levántate", "Levántate y di Sami Allahu liman hamidah.", "Vuelve a estar de pie antes del sujood.", "Muévete paso a paso.", "🧍"],
    ["Sujood", "Haz postración y di Subhana Rabbiyal A'la.", "Frente, nariz, manos, rodillas y dedos de los pies tocan el suelo.", "Sujood es un momento especial.", "🤲"],
    ["Siéntate", "Siéntate con calma entre los dos sujoods.", "Haz una pausa y luego realiza el segundo sujood.", "La oración tranquila es mejor.", "🪑"],
    ["Termina", "Termina con tashahhud y salam a derecha e izquierda.", "Pide a Allah que acepte tu salah.", "Practica un poco cada día.", "🌙"],
  ],
};

CONTENT.fr = {
  ...CONTENT.es,
  navPractice: "Pratique",
  eyebrow: "Pour les enfants musulmans à l'étranger",
  heroTitle: "Apprendre le Wudu et la Salah Étape par Étape",
  heroText: "Un guide coloré avec démonstrations, détails simples et rappels pour les enfants qui apprennent à prier.",
  startWudu: "Commencer le wudu",
  learnSalah: "Apprendre la salah",
  chooseLanguage: "Choisir la langue",
  languageNote: "Change la langue à tout moment.",
  introEyebrow: "Apprentissage simple",
  introTitle: "Pour les enfants, parents et écoles islamiques",
  introText: "À utiliser à la maison, en classe ou sur téléphone. Chaque carte montre une démonstration, une instruction et un rappel.",
  wuduEyebrow: "Pureté avant la prière",
  wuduTitle: "Comment faire le wudu",
  wuduIntro: "Le wudu est une purification spéciale avant la salah. Fais-le doucement, dis Bismillah et lave chaque partie correctement.",
  salahEyebrow: "Étapes de prière",
  salahTitle: "Comment prier la salah",
  salahIntro: "Ceci est un guide débutant. Apprends avec un parent, un enseignant ou un imam local.",
  trackWudu: "J'ai pratiqué le wudu",
  trackSalah: "J'ai pratiqué la salah",
  resetTracker: "Réinitialiser",
  parentTitle: "Note aux parents",
  parentText: "Les enfants apprennent mieux avec douceur et répétition. Ce guide enseigne les bases.",
  footerText: "Créé par YouOOO pour aider les enfants musulmans.",
  trackerDone: "Très bien. Tu as pratiqué les deux aujourd'hui.",
  trackerCount: "{done} / 2 terminé aujourd'hui",
  detailLabel: "Détails",
  tipLabel: "Rappel",
  pictureLabel: "Démonstration",
  wuduSteps: [
    ["Intention", "Fais l'intention dans ton coeur de faire le wudu pour Allah.", "Tu n'as pas besoin de la dire à voix haute. L'intention dans le coeur suffit.", "Commence calmement et dis Bismillah.", "🤲"],
    ["Laver les mains", "Lave les deux mains jusqu'aux poignets trois fois.", "L'eau doit passer entre les doigts et autour des pouces.", "N'utilise pas trop d'eau.", "👐"],
    ["Rincer la bouche", "Rince doucement ta bouche trois fois.", "Fais circuler l'eau dans la bouche puis recrache-la avec soin.", "N'avale pas l'eau.", "💧"],
    ["Nettoyer le nez", "Nettoie doucement le nez trois fois.", "Prends un peu d'eau puis fais-la sortir doucement. Les petits doivent le faire avec aide.", "Sois doux.", "🌬️"],
    ["Laver le visage", "Lave tout le visage trois fois.", "Lave du haut du front au menton, et d'un côté à l'autre.", "Ne laisse pas d'endroit sec.", "🙂"],
    ["Laver les bras", "Lave le bras droit puis le gauche jusqu'aux coudes trois fois.", "L'eau doit atteindre les mains, poignets, avant-bras et coudes.", "N'oublie pas les coudes.", "💪"],
    ["Essuyer la tête", "Passe les mains mouillées sur la tête une fois.", "C'est un essuyage, pas un lavage complet.", "Une fois suffit.", "🧒"],
    ["Essuyer les oreilles", "Essuie l'intérieur et l'arrière des oreilles une fois.", "Utilise les doigts et les pouces avec douceur.", "Fais-le doucement.", "👂"],
    ["Laver les pieds", "Lave le pied droit puis le gauche jusqu'aux chevilles trois fois.", "L'eau doit atteindre les orteils, les talons et les chevilles.", "Les talons ne doivent pas rester secs.", "🦶"],
  ],
  salahSteps: [
    ["Face à la qiblah", "Tiens-toi calmement et fais ton intention.", "Oriente-toi vers la qiblah si tu connais la direction. Prépare ton coeur.", "Allah connaît ton intention.", "🧭"],
    ["Takbir", "Lève les mains et dis Allahu Akbar.", "La prière commence. Ensuite, concentre-toi et ne parle pas.", "Dis-le clairement.", "☝️"],
    ["Réciter", "Récite Al-Fatiha et une courte sourate si tu apprends.", "Si tu mémorises encore, pratique avec un adulte ou enseignant.", "Al-Fatiha est très importante.", "📖"],
    ["Ruku", "Incline-toi et dis Subhana Rabbiyal Adheem.", "Place les mains sur les genoux et ne te dépêche pas.", "Fais une pause pour le dhikr.", "🙇"],
    ["Se relever", "Relève-toi et dis Sami Allahu liman hamidah.", "Reviens debout avant le sujood.", "Avance étape par étape.", "🧍"],
    ["Sujood", "Prosterne-toi et dis Subhana Rabbiyal A'la.", "Front, nez, mains, genoux et orteils touchent le sol.", "Le sujood est un moment spécial.", "🤲"],
    ["S'asseoir", "Assieds-toi calmement entre les deux sujoods.", "Fais une pause puis fais le deuxième sujood.", "Une prière calme est meilleure.", "🪑"],
    ["Finir", "Termine avec tashahhud et salam à droite puis à gauche.", "Demande à Allah d'accepter ta salah.", "Pratique un peu chaque jour.", "🌙"],
  ],
};

CONTENT.ur = {
  ...CONTENT.en,
  navWudu: "وضو",
  navSalah: "نماز",
  navPractice: "مشق",
  eyebrow: "بیرون ملک رہنے والے مسلمان بچوں کے لیے",
  heroTitle: "وضو اور نماز قدم بہ قدم سیکھیں",
  heroText: "تصویری مثالوں، آسان تفصیل اور روزانہ یاد دہانی کے ساتھ بچوں کے لیے نماز سیکھنے کا رہنما۔",
  startWudu: "وضو سے شروع کریں",
  learnSalah: "نماز سیکھیں",
  chooseLanguage: "زبان منتخب کریں",
  languageNote: "زبان کسی بھی وقت تبدیل کریں۔ عربی اور اردو دائیں سے بائیں دکھائی جاتی ہیں۔",
  introEyebrow: "سادہ تعلیم",
  introTitle: "بچوں، والدین اور اسلامی اسکولوں کے لیے",
  introText: "گھر، کلاس یا فون پر استعمال کریں۔ ہر کارڈ میں تصویر، مختصر ہدایت اور مفید یاد دہانی ہے۔",
  wuduEyebrow: "نماز سے پہلے پاکی",
  wuduTitle: "وضو کیسے کریں",
  wuduIntro: "وضو نماز سے پہلے خاص طریقے سے پاکی حاصل کرنا ہے۔ آرام سے کریں، بسم اللہ کہیں، اور ہر حصہ اچھی طرح دھوئیں۔",
  salahEyebrow: "نماز کے قدم",
  salahTitle: "نماز کیسے پڑھیں",
  salahIntro: "یہ ابتدائی رہنما ہے۔ والدین، استاد یا امام سے بھی سیکھیں تاکہ حرکات اور الفاظ درست ہوں۔",
  trackWudu: "میں نے وضو کی مشق کی",
  trackSalah: "میں نے نماز کی مشق کی",
  resetTracker: "آج ری سیٹ کریں",
  parentTitle: "والدین کے لیے نوٹ",
  parentText: "بچے نرمی اور تکرار سے بہتر سیکھتے ہیں۔ یہ رہنما بنیادی باتیں سکھاتا ہے۔",
  footerText: "YouOOO کی طرف سے مسلمان بچوں کے لیے۔",
  trackerDone: "بہت خوب۔ آج دونوں کی مشق ہو گئی۔",
  trackerCount: "آج {done} / 2 مکمل",
  detailLabel: "تفصیل",
  tipLabel: "یاد رکھیں",
  pictureLabel: "تصویری مثال",
  wuduSteps: [
    ["نیت", "دل میں نیت کریں کہ آپ اللہ کے لیے وضو کر رہے ہیں۔", "نیت بلند آواز سے کہنا ضروری نہیں۔ دل کی نیت کافی ہے۔", "آرام سے شروع کریں اور بسم اللہ کہیں۔", "🤲"],
    ["ہاتھ دھونا", "دونوں ہاتھ کلائیوں تک تین بار دھوئیں۔", "پانی انگلیوں کے درمیان اور انگوٹھوں کے ارد گرد پہنچائیں۔", "پانی ضائع نہ کریں۔", "👐"],
    ["کلی کرنا", "منہ کو نرمی سے تین بار دھوئیں۔", "پانی منہ میں گھمائیں پھر احتیاط سے نکال دیں۔", "پانی نہ نگلیں۔", "💧"],
    ["ناک صاف کرنا", "ناک کو نرمی سے تین بار صاف کریں۔", "تھوڑا پانی ناک میں لے کر آرام سے باہر نکالیں۔", "نرمی کریں۔", "🌬️"],
    ["چہرہ دھونا", "پورا چہرہ تین بار دھوئیں۔", "بالوں کی جگہ سے ٹھوڑی تک اور ایک طرف سے دوسری طرف دھوئیں۔", "کوئی جگہ خشک نہ چھوڑیں۔", "🙂"],
    ["بازو دھونا", "دائیں پھر بائیں بازو کو کہنیوں تک تین بار دھوئیں۔", "پانی ہاتھ، کلائی، بازو اور کہنی تک پہنچے۔", "کہنیاں شامل کریں۔", "💪"],
    ["سر کا مسح", "گیلے ہاتھوں سے سر کا مسح ایک بار کریں۔", "یہ مسح ہے، مکمل دھونا نہیں۔", "ایک بار کافی ہے۔", "🧒"],
    ["کانوں کا مسح", "کانوں کے اندر اور پیچھے ایک بار مسح کریں۔", "اندر انگلیاں اور پیچھے انگوٹھے استعمال کریں۔", "نرمی سے کریں۔", "👂"],
    ["پاؤں دھونا", "دائیں پھر بائیں پاؤں ٹخنوں تک تین بار دھوئیں۔", "پانی انگلیوں کے درمیان، ایڑیوں اور ٹخنوں تک پہنچے۔", "ایڑیاں خشک نہ رہیں۔", "🦶"],
  ],
  salahSteps: [
    ["قبلہ رخ کھڑے ہوں", "آرام سے کھڑے ہو کر نماز کی نیت کریں۔", "اگر قبلہ معلوم ہو تو اس طرف رخ کریں۔ دل کو نماز کے لیے تیار کریں۔", "اللہ آپ کی نیت جانتا ہے۔", "🧭"],
    ["تکبیر", "ہاتھ اٹھا کر اللہ اکبر کہیں۔", "اس سے نماز شروع ہوتی ہے۔ پھر بات یا کھیل نہ کریں۔", "صاف اور آرام سے کہیں۔", "☝️"],
    ["قرات", "سورہ فاتحہ اور آسان سورت پڑھیں۔", "اگر حفظ کر رہے ہیں تو والدین یا استاد کے ساتھ مشق کریں۔", "فاتحہ ہر رکعت میں اہم ہے۔", "📖"],
    ["رکوع", "جھک کر سبحان ربی العظیم کہیں۔", "ہاتھ گھٹنوں پر رکھیں اور جلدی نہ کریں۔", "ذکر کے لیے ٹھہریں۔", "🙇"],
    ["قیام", "اٹھ کر سمع اللہ لمن حمدہ کہیں۔", "سجدے سے پہلے سیدھے کھڑے ہوں۔", "قدم بہ قدم چلیں۔", "🧍"],
    ["سجدہ", "سجدہ کریں اور سبحان ربی الاعلی کہیں۔", "پیشانی، ناک، ہاتھ، گھٹنے اور پاؤں زمین کو لگتے ہیں۔", "سجدہ خاص لمحہ ہے۔", "🤲"],
    ["بیٹھنا", "دو سجدوں کے درمیان آرام سے بیٹھیں۔", "تھوڑا ٹھہریں پھر دوسرا سجدہ کریں۔", "پرسکون نماز بہتر ہے۔", "🪑"],
    ["ختم", "تشہد اور دائیں بائیں سلام سے نماز ختم کریں۔", "اللہ سے نماز قبول کرنے کی دعا کریں۔", "روز تھوڑی مشق کریں۔", "🌙"],
  ],
};

CONTENT.tr = {
  ...CONTENT.en,
  navWudu: "Abdest",
  navSalah: "Namaz",
  navPractice: "Alıştırma",
  eyebrow: "Yurt dışında büyüyen Müslüman çocuklar için",
  heroTitle: "Abdest ve Namazı Adım Adım Öğren",
  heroText: "Namaz öğrenen çocuklar için resimli anlatım, kolay açıklamalar ve günlük hatırlatmalar.",
  startWudu: "Abdestle başla",
  learnSalah: "Namazı öğren",
  chooseLanguage: "Dil seç",
  languageNote: "Dili istediğin zaman değiştirebilirsin.",
  introEyebrow: "Basit öğrenme",
  introTitle: "Çocuklar, aileler ve hafta sonu okulları için",
  introText: "Evde, sınıfta veya telefonda kullan. Her kartta görsel anlatım, kısa talimat ve hatırlatma vardır.",
  wuduEyebrow: "Namazdan önce temizlik",
  wuduTitle: "Abdest nasıl alınır",
  wuduIntro: "Abdest, namazdan önce özel bir temizliktir. Yavaşça yap, Bismillah de ve her bölümü güzelce yıka.",
  salahEyebrow: "Namaz adımları",
  salahTitle: "Namaz nasıl kılınır",
  salahIntro: "Bu başlangıç rehberidir. Hareketleri ve sözleri doğru öğrenmek için ailen, öğretmenin veya imamınla çalış.",
  trackWudu: "Abdest çalıştım",
  trackSalah: "Namaz çalıştım",
  resetTracker: "Bugünü sıfırla",
  parentTitle: "Aileler için not",
  parentText: "Çocuklar nezaket ve tekrar ile daha iyi öğrenir. Bu rehber temel bilgileri öğretir.",
  footerText: "YouOOO tarafından Müslüman çocuklar için hazırlandı.",
  trackerDone: "Harika. Bugün ikisini de çalıştın.",
  trackerCount: "Bugün {done} / 2 tamamlandı",
  detailLabel: "Detay",
  tipLabel: "Hatırla",
  pictureLabel: "Görsel anlatım",
  wuduSteps: [
    ["Niyet", "Kalbinde Allah için abdest almaya niyet et.", "Niyeti yüksek sesle söylemek gerekmez. Kalpte olması yeterlidir.", "Sakin başla ve Bismillah de.", "🤲"],
    ["Elleri yıka", "İki eli bileklere kadar üç kez yıka.", "Su parmak aralarına ve başparmak çevresine ulaşsın.", "Suyu israf etme.", "👐"],
    ["Ağzı çalkala", "Ağzını nazikçe üç kez çalkala.", "Suyu ağız içinde gezdir ve dikkatlice çıkar.", "Suyu yutma.", "💧"],
    ["Burnu temizle", "Burnu nazikçe üç kez temizle.", "Biraz su alıp yavaşça dışarı çıkar. Küçük çocuklar yardım alabilir.", "Nazik ol.", "🌬️"],
    ["Yüzü yıka", "Bütün yüzünü üç kez yıka.", "Saç çizgisinden çeneye ve bir yandan diğer yana yıka.", "Kuru yer bırakma.", "🙂"],
    ["Kolları yıka", "Sağ kolu sonra sol kolu dirseklere kadar üç kez yıka.", "Su ellere, bileklere, kollara ve dirseklere ulaşsın.", "Dirsekleri unutma.", "💪"],
    ["Başı mesh et", "Islak ellerle başını bir kez mesh et.", "Bu mesh etmektir, tamamen yıkamak değildir.", "Bir kez yeterlidir.", "🧒"],
    ["Kulakları mesh et", "Kulakların içini ve arkasını bir kez mesh et.", "İçin parmakları, arka taraf için başparmakları kullan.", "Nazikçe yap.", "👂"],
    ["Ayakları yıka", "Sağ ayağı sonra sol ayağı topuklara kadar üç kez yıka.", "Su parmak aralarına, topuklara ve bileklere ulaşsın.", "Topuklar kuru kalmasın.", "🦶"],
  ],
  salahSteps: [
    ["Kıbleye dön", "Sakin dur ve namaz için niyet et.", "Kıble yönünü biliyorsan ona dön. Kalbini hazırla.", "Allah niyetini bilir.", "🧭"],
    ["Tekbir", "Ellerini kaldır ve Allahu Akbar de.", "Namaz böyle başlar. Sonra konuşma ve oyalanma.", "Açık ve sakin söyle.", "☝️"],
    ["Oku", "Fatiha'yı ve öğreniyorsan kısa bir sure oku.", "Ezberliyorsan bir büyükle veya öğretmenle çalış.", "Fatiha çok önemlidir.", "📖"],
    ["Rüku", "Eğil ve Subhana Rabbiyal Adheem de.", "Eller dizlerde olsun ve acele etme.", "Zikir için dur.", "🙇"],
    ["Doğrul", "Ayağa kalk ve Sami Allahu liman hamidah de.", "Secdeye gitmeden önce ayakta dur.", "Adım adım hareket et.", "🧍"],
    ["Secde", "Secdeye git ve Subhana Rabbiyal A'la de.", "Alın, burun, eller, dizler ve ayak parmakları yere değer.", "Secde özel bir andır.", "🤲"],
    ["Otur", "İki secde arasında sakin otur.", "Kısa dur, sonra ikinci secdeyi yap.", "Sakin namaz daha güzeldir.", "🪑"],
    ["Bitir", "Tahiyyat ve sağ-sol selam ile bitir.", "Allah'tan namazını kabul etmesini iste.", "Her gün biraz çalış.", "🌙"],
  ],
};

const FALLBACK_STEPS = CONTENT.en;
const STORAGE_KEY = "salah_kids_tracker";
const LANGUAGE_KEY = "salah_kids_language";

const languageSelect = document.getElementById("languageSelect");
const wuduSteps = document.getElementById("wuduSteps");
const salahSteps = document.getElementById("salahSteps");
const progressFill = document.getElementById("progressFill");
const trackerText = document.getElementById("trackerText");

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getTracker() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  if (saved.date !== todayKey()) {
    return { date: todayKey(), wudu: false, salah: false };
  }
  return saved;
}

function saveTracker(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getContent(lang) {
  return { ...CONTENT.en, ...(CONTENT[lang] || {}) };
}

function humanStepIllustration(scene, title, icon) {
  const BASE = "cute 3D cartoon Muslim child, round friendly face, big expressive eyes, warm smile, white prayer thobe, children's book 3D illustration style, soft warm lighting, no text, no watermark";

  const prompts = {
    intention: BASE + ", sitting calmly with eyes gently closed, hands resting on lap in intention pose, peaceful expression, soft indoor light, simple clean room",
    hands:     BASE + ", washing both hands carefully under gentle running water at a bathroom sink, happy focused expression, water splashing, bright clean bathroom",
    mouth:     BASE + ", rinsing mouth with cupped hands of clean water at bathroom sink, eyes softly closed, water droplets, bright bathroom",
    nose:      BASE + ", gently cleaning nose with water at bathroom sink, careful gentle expression, soft bathroom lighting",
    face:      BASE + ", washing face with both hands, refreshing water dripping down cheeks, eyes closed, bright clean bathroom",
    arms:      BASE + ", washing forearms up to the elbows under running water, sleeves rolled up, happy smiling expression, bright bathroom",
    head:      BASE + ", gently wiping wet hands over head in wudu motion, peaceful relaxed expression, clean bathroom",
    ears:      BASE + ", carefully wiping ears with wet fingers, gentle careful expression, soft bathroom lighting",
    feet:      BASE + ", washing feet in a small colorful basin or sink, sitting on a low stool, smiling happily, clean bright bathroom",
    qiblah:    BASE + ", standing straight and calm on a colorful patterned prayer mat, hands relaxed at sides, focused serene expression, warm peaceful room",
    takbir:    BASE + ", raising both hands up to ear level to begin prayer, joyful reverent expression, standing on colorful prayer mat, warm cozy room",
    recite:    BASE + ", standing on colorful prayer mat with hands folded neatly on chest, eyes looking gently downward, peaceful concentration, soft warm lighting",
    ruku:      BASE + ", bowing forward with both hands on knees in ruku position, back parallel to floor, colorful prayer mat below, respectful focused expression",
    stand:     BASE + ", standing upright on colorful prayer mat after bowing, hands at sides, calm serene expression, warm peaceful room",
    sujood:    BASE + ", in full prostration on colorful prayer mat, forehead touching ground, hands flat beside head, deeply peaceful serene expression",
    sit:       BASE + ", sitting peacefully on colorful prayer mat with legs folded under, hands resting on knees, calm attentive expression, soft warm room",
    salam:     BASE + ", turning head gently to the right while sitting on prayer mat finishing salah, happy relieved smile, warm peaceful cozy room",
  };

  const SEEDS = {
    intention:1001, hands:1002, mouth:1003, nose:1004, face:1005,
    arms:1006, head:1007, ears:1008, feet:1009,
    qiblah:2001, takbir:2002, recite:2003, ruku:2004,
    stand:2005, sujood:2006, sit:2007, salam:2008,
  };

  const prompt = prompts[scene] || (BASE + ", performing an Islamic prayer step");
  const seed = SEEDS[scene] || 5000;
  const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt) + "?width=400&height=300&seed=" + seed + "&nologo=true&enhance=false&model=flux-schnell";

  return `
    <div class="demo-img-wrap">
      <div class="demo-img-loader" id="loader-${scene}">
        <span class="demo-loader-icon">${icon}</span>
      </div>
      <img
        class="demo-illustration-img"
        src="${url}"
        alt="${title}"
        loading="lazy"
        onload="this.classList.add('loaded'); document.getElementById('loader-${scene}') && (document.getElementById('loader-${scene}').style.display='none');"
        onerror="this.style.display='none';"
      />
    </div>
  `;
}

function renderSteps(container, steps, scenes, content) {
  container.innerHTML = steps
    .map(([title, text, detail, tip, icon], index) => {
      const scene = scenes[index] || "default";
      return `
        <article class="step-card">
          <div class="demo-scene image-demo scene-${scene}" role="img" aria-label="${content.pictureLabel}: ${title}">
            ${humanStepIllustration(scene, title, icon)}
          </div>
          <div class="step-icon" aria-hidden="true">${icon}</div>
          <h3>${index + 1}. ${title}</h3>
          <p>${text}</p>
          <div class="step-detail">
            <strong>${content.detailLabel}</strong>
            <span>${detail}</span>
          </div>
          <div class="step-tip">
            <strong>${content.tipLabel}:</strong> ${tip}
          </div>
        </article>
      `;
    })
    .join("");
}

function applyLanguage(lang) {
  const content = getContent(lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle("is-rtl", lang === "ar" || lang === "ur");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (content[key]) {
      node.textContent = content[key];
    }
  });

  renderSteps(wuduSteps, content.wuduSteps || FALLBACK_STEPS.wuduSteps, WUDU_SCENES, content);
  renderSteps(salahSteps, content.salahSteps || FALLBACK_STEPS.salahSteps, SALAH_SCENES, content);
  updateTracker();
  localStorage.setItem(LANGUAGE_KEY, lang);
}

function updateTracker() {
  const lang = languageSelect.value;
  const content = getContent(lang);
  const tracker = getTracker();
  const done = Number(tracker.wudu) + Number(tracker.salah);
  progressFill.style.width = `${(done / 2) * 100}%`;
  trackerText.textContent = done === 2
    ? content.trackerDone
    : content.trackerCount.replace("{done}", String(done));
}

document.querySelectorAll("[data-track]").forEach((button) => {
  button.addEventListener("click", () => {
    const tracker = getTracker();
    tracker[button.dataset.track] = true;
    saveTracker(tracker);
    updateTracker();
  });
});

document.getElementById("resetTracker").addEventListener("click", () => {
  saveTracker({ date: todayKey(), wudu: false, salah: false });
  updateTracker();
});

languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));

const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
if (CONTENT[savedLanguage]) {
  languageSelect.value = savedLanguage;
}
applyLanguage(languageSelect.value);
