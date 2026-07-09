/**
 * Central translation dictionary for the SAAK Team Training Center guide.
 * Add or edit copy here — every string in the page is driven by these keys.
 */
const translations = {
  ar: {
    nav: {
      about: "عن المركز",
      location: "الموقع",
      before: "الاستعداد",
      schedule: "الجدول",
      journey: "رحلة الوصول",
      facilities: "المرافق",
      layout: "المخطط",
      policies: "السياسات",
      safety: "السلامة",
      certificate: "الشهادة",
      contact: "تواصل معنا",
      agreement: "الإقرار والتعهد"
    },
    wizard: {
      prev: "السابق",
      next: "التالي"
    },
    hero: {
      title: "مرحبًا بكم في مركز ساك تيم للتدريب",
      subtitle: "دليلكم الشامل قبل الحضور إلى دورتكم التدريبية — كل ما تحتاجون معرفته في مكان واحد.",
      cta: "ابدأ الجولة"
    },
    about: {
      eyebrow: "من نحن",
      title: "مركز رائد لتدريب واعتماد IPC في المملكة",
      lead: "تأسس مركز ساك تيم للتدريب عام 2025 كامتداد لشركة تيم بارتنر، أول مركز تدريب عربي معتمد من IPC.",
      card1: { title: "تأسس عام 2025", text: "انطلاقة حديثة مبنية على خبرة عريقة في التدريب الفني المعتمد دوليًا." },
      card2: { title: "أول مركز معتمد من IPC بالسعودية", text: "الأول من نوعه في المملكة العربية السعودية بتفويض رسمي من منظمة IPC العالمية." },
      card3: { title: "مرخّص من TVTC", text: "برامجنا مرخصة رسميًا من المؤسسة العامة للتدريب التقني والمهني لضمان أعلى معايير الجودة." },
      card4: { title: "تدريب وشهادات باللغة العربية", text: "نقدّم محتوى IPC المعتمد دوليًا بلغة عربية سلسة وواضحة." },
      card5: { title: "دعم رؤية السعودية 2030", text: "نساهم في بناء الكفاءات الوطنية ودعم التوطين في القطاعات الصناعية." }
    },
    location: {
      eyebrow: "الموقع",
      title: "موقع مركز التدريب",
      address: ".مبنى شركة ساك تيم، الرياض، المملكة العربية السعودية",
      btnDirections: "احصل على الاتجاهات",
      imgLabel: "صورة المبنى"
    },
    before: {
      eyebrow: "قبل الحضور",
      title: "استعد لدورتك التدريبية",
      item1: { title: "احضر قبل 15 دقيقة", text: "التزم بالوصول مبكرًا لإتمام إجراءات التسجيل بهدوء." },
      item2: { title: "أحضر جهاز اللابتوب", text: "بعض التمارين التدريبية تتطلب استخدام حاسوبك المحمول." },
      item3: { title: "أحضر الشاحن", text: "تأكد من إحضار شاحن الجهاز لتجنب انقطاع البطارية أثناء التدريب." },
      item5: { title: "ارتدِ زيًا مناسبًا", text: "يُفضّل ارتداء زي رسمي أو زي العمل المعتمد لدى شركتك." },
      item6: { title: "راجع الجدول التدريبي", text: "اطّلع على جدول الدورة مسبقًا لمعرفة التوقيت والمحتوى." }
    },
    schedule: {
      eyebrow: "الجدول التدريبي",
      title: "جدول الدورة التدريبية",
      placeholder: "سيتم رفع الجدول التدريبي قبل بدء الدورة.",
      btnDownload: "تحميل الجدول",
      btnFullsize: "عرض بالحجم الكامل"
    },
    journey: {
      eyebrow: "رحلة الوصول",
      title: "خطوات وصولك إلى قاعة التدريب",
      imgLabel: "صورة حقيقية من الموقع",
      step1: { title: "المدخل الرئيسي", text: "توجّه إلى المدخل الرئيسي لمبنى ساك الدولية." },
      step2: { title: "اضغط جرس الباب", text: "اضغط جرس الباب عند الوصول وسيتم فتح الباب لك." },
      step3: { title: "الاستقبال", text: "توجّه إلى مكتب الاستقبال حيث سيتم الترحيب بك وتوجيهك." },
      step4: { title: "تسجيل الحضور واستلام البطاقة", text: "قم بتسجيل حضورك واستلام البطاقة لدى فريق الاستقبال قبل بدء الدورة." },
      step5: { title: "صالة الانتظار", text: "يمكنك الانتظار في الصالة المخصصة حتى موعد بدء الدورة." },
      step6: { title: "قاعة التدريب", text: "توجّه إلى قاعة التدريب المخصصة لدورتك برفقة المدرب." }
    },
    facilities: {
      eyebrow: "المرافق",
      title: "مرافق مركز التدريب",
      reception: "الاستقبال",
      lounge: "صالة الانتظار",
      rooms: "قاعات التدريب",
      prayer: "مصلى",
      restrooms: "دورات المياه",
      coffee: "منطقة الاستراحة",
      exit: "مخرج الطوارئ"
    },
    layout: {
      eyebrow: "المخطط",
      title: "مخطط المبنى",
           imgLabel: "المخطط التفصيلي للمبنى"
    },
    policies: {
      eyebrow: "السياسات والأنظمة",
      title: "تعليمات وضوابط المتدربين",
      s1: {
        title: "أولًا: متطلبات التدريب",
        i1: "ارتداء بطاقة التعريف طوال فترة التدريب.",
        i2: "المحافظة على نظافة القاعات والمرافق.",
        i3: "المحافظة على ممتلكات الشركة والأجهزة والمعدات.",
        i4: "عدم تناول الأطعمة والمشروبات داخل القاعات التدريبية."
      },
      s2: {
        title: "ثانيًا: الالتزام والسلوك العام",
        i1: "الالتزام باحترام المدربين.",
        i2: "الالتزام بالتعامل المهني والمحافظة على بيئة تدريب إيجابية.",
        i3: "الالتزام بالمواعيد المحددة للحضور والانصراف.",
        i4: "الالتزام بالحضور طوال فترة التدريب.",
        i5: "عدم البقاء في القاعات التدريبية بعد انتهاء وقت التدريب.",
        i6: "في حال التأخر أو الغياب، يجب إبلاغ جهة العمل ومنسق التدريب مسبقًا.",
        i7: "اتباع تعليمات المدرب داخل القاعة.",
        i8: "الالتزام بتعليمات إدارة الأمن والسلامة عند الدخول والخروج."
      },
      s3: {
        title: "ثالثًا: الممنوعات",
        i1: "يمنع التدخين داخل مباني الشركة.",
        i2: "يمنع التصوير أو تسجيل الفيديو أو الصوت داخل مرافق الشركة إلا بعد الحصول على موافقة مسبقة.",
        i3: "يمنع دخول المناطق المحظورة أو غير المصرح بها.",
        i4: "يمنع إدخال أي أجهزة أو معدات شخصية إلى مناطق التدريب العملي إلا بعد موافقة المدرب.",
        i5: "يمنع إتلاف الأجهزة أو المعدات أو إساءة استخدامها.",
        i6: "يمنع إزعاج المتدربين أو تعطيل سير العملية التدريبية.",
        i7: "يمنع استخدام مرافق الشركة أو تجهيزاتها دون تصريح."
      },
      s4: {
        title: "رابعًا: أحكام عامة",
        i1: "يلتزم المتدرب بالمحافظة على سرية جميع المعلومات والمستندات والمعدات التي يطلع عليها أثناء فترة التدريب.",
        i2: "يحق للشركة استبعاد أي متدرب يخالف الأنظمة أو يسيء استخدام مرافق الشركة أو يخل بسير البرنامج التدريبي.",
        i3: "المركز غير مسؤول عن فقدان أو تلف المقتنيات الشخصية الخاصة بالمتدرب.",
        i4: "يوافق المتدرب على إمكانية قيام المركز بالتقاط الصور أو تسجيل مقاطع الفيديو أثناء البرامج التدريبية واستخدامها لأغراض التوثيق والنشر دون الحاجة إلى موافقة خطية مسبقة."
      }
    },
    safety: {
      eyebrow: "السلامة",
      title: "إرشادات السلامة والأمن",
      card1: { title: "مخارج الطوارئ", text: "تعرّف على أقرب مخرج طوارئ لقاعتك التدريبية عند الوصول." },
      card2: { title: "نقطة التجمع", text: "في حال الإخلاء، توجّه فورًا إلى نقطة التجمع المحددة خارج المبنى." },
      card3: { title: "جهة الاتصال في الطوارئ", text: "تواصل مع فريق الاستقبال أو الأمن فورًا عند أي حالة طارئة." },
      card4: { title: "تعليمات عامة", text: "التزم بجميع لوحات السلامة الإرشادية المعروضة داخل المبنى." }
    },
    certificate: {
      title: "الشهادة والاعتماد",
      text: "يحصل المتدرب على شهادة حضور معتمدة عند استيفاء متطلبات الدورة التدريبية بالكامل.",
      req1: "الالتزام بنسبة حضور لا تقل عن الحد المطلوب لجميع أيام الدورة",
      req2: "إتمام جميع التمارين والتقييمات العملية المطلوبة",
      req3: "الالتزام بسياسات وأنظمة مركز التدريب طوال المدة"
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "بيانات التواصل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني"
    },
    agreement: {
      eyebrow: "الإقرار والتعهد",
      title: "إقرار وتعهد",
      text: "أقر بأنني اطلعت على دليل المتدرب وأوافق على الالتزام بجميع السياسات والأنظمة وتعليمات الأمن والسلامة والتعليمات المنظمة للبرنامج التدريبي طوال فترة حضوري في مركز التدريب.",
      fullName: "الاسم الكامل",
      companyName: "اسم الشركة",
      trainingDate: "تاريخ التدريب",
      checkbox: "لقد قرأت هذا الإقرار وأوافق عليه",
      submit: "إرسال الإقرار",
      successTitle: "تم الاستلام، وشكرًا لك",
      successText: "وصل إقرارك إلى فريقنا. نتطلع إلى استقبالك في مركز ساك تيم للتدريب."
    },
    footer: {
      tagline: "أول مركز تدريب معتمد من IPC في المملكة العربية السعودية.",
      rights: "© 2025 مركز ساك تيم للتدريب. جميع الحقوق محفوظة.",
      license: "مرخّص من المؤسسة العامة للتدريب التقني والمهني ومعتمد من IPC."
    }
  },

  en: {
    nav: {
      about: "About",
      location: "Location",
      before: "Preparation",
      schedule: "Schedule",
      journey: "Journey",
      facilities: "Facilities",
      layout: "Floor Plan",
      policies: "Policies",
      safety: "Safety",
      certificate: "Certificate",
      contact: "Contact",
      agreement: "Agreement"
    },
    wizard: {
      prev: "Previous",
      next: "Next"
    },
    hero: {
      title: "Welcome to SAAK Team Training Center",
      subtitle: "Your complete guide before arriving at your training course — everything you need to know, in one place.",
      cta: "Start the Tour"
    },
    about: {
      eyebrow: "Who We Are",
      title: "A Leading IPC Training & Certification Center in Saudi Arabia",
      lead: "SAAK Team Training Center was established in 2025 as an extension of Team Partner, the first Arab IPC Authorized Training Center.",
      card1: { title: "Established in 2025", text: "A fresh launch built on a proven legacy of internationally accredited technical training." },
      card2: { title: "First IPC Authorized Center in KSA", text: "The first of its kind in Saudi Arabia, officially authorized by IPC." },
      card3: { title: "Licensed by TVTC", text: "Our programs are officially licensed by the Technical and Vocational Training Corporation." },
      card4: { title: "Arabic Training & Certification", text: "Internationally certified IPC content delivered in clear, native Arabic." },
      card5: { title: "Supporting Saudi Vision 2030", text: "We help build national talent and support localization across industrial sectors." }
    },
    location: {
      eyebrow: "Location",
      title: "Training Center Location",
      address: "SAAK Team Building, Riyadh, Saudi Arabia",
      btnDirections: "Get Directions",
      imgLabel: "Building photo"
    },
    before: {
      eyebrow: "Before You Arrive",
      title: "Get Ready for Your Course",
      item1: { title: "Arrive 15 Minutes Early", text: "Give yourself time to check in comfortably before the session starts." },
      item2: { title: "Bring Your Laptop", text: "Some hands-on exercises require the use of your own laptop." },
      item3: { title: "Bring Your Charger", text: "Make sure to bring your charger to avoid running out of battery." },
      item5: { title: "Wear Appropriate Attire", text: "Business or company-approved work attire is recommended." },
      item6: { title: "Review the Training Schedule", text: "Check the course schedule in advance for timing and content." }
    },
    schedule: {
      eyebrow: "Training Schedule",
      title: "Course Training Schedule",
      placeholder: "The training schedule will be uploaded before the course starts.",
      btnDownload: "Download Schedule",
      btnFullsize: "View Full Size"
    },
    journey: {
      eyebrow: "Arrival Journey",
      title: "Your Path to the Training Room",
      imgLabel: "Real photo from the location",
      step1: { title: "Main Entrance", text: "Head to the main entrance of the SAAK International building." },
      step2: { title: "Ring the Door Bell", text: "Ring the bell upon arrival and the door will be opened for you." },
      step3: { title: "Reception", text: "Proceed to the reception desk where you will be welcomed and guided." },
      step4: { title: "Attendance Registration & Badge Collection", text: "Register your attendance and collect your identification badge from the reception team before the training session begins." },
      step5: { title: "Waiting Lounge", text: "You may wait in the dedicated lounge until your course session begins." },
      step6: { title: "Training Room", text: "Head to your assigned training room together with your trainer." }
    },
    facilities: {
      eyebrow: "Facilities",
      title: "Training Center Facilities",
      reception: "Reception",
      lounge: "Waiting Lounge",
      rooms: "Training Rooms",
      prayer: "Prayer Room",
      restrooms: "Restrooms",
      coffee: "Break Area",
      exit: "Emergency Exit"
    },
    layout: {
      eyebrow: "Building Layout",
      title: "Building Floor Plan",
      youAreHere: "You Are Here",
      imgLabel: "Detailed building floor plan"
    },
    policies: {
      eyebrow: "Policies & Regulations",
      title: "Trainee Guidelines & Rules",
      s1: {
        title: "1. Training Requirements",
        i1: "Wear your ID badge throughout the training period.",
        i2: "Maintain cleanliness of training rooms and facilities.",
        i3: "Protect company property, devices, and equipment.",
        i4: "No food or drinks inside training rooms."
      },
      s2: {
        title: "2. Conduct & General Behaviour",
        i1: "Respect all trainers at all times.",
        i2: "Maintain professional behaviour and a positive training environment.",
        i3: "Be punctual for all arrival and departure times.",
        i4: "Attend all sessions for the full duration of the training.",
        i5: "Do not remain in training rooms after sessions have ended.",
        i6: "In case of tardiness or absence, notify your employer and the training coordinator in advance.",
        i7: "Follow the trainer's instructions inside the classroom.",
        i8: "Comply with security and safety management instructions when entering and leaving."
      },
      s3: {
        title: "3. Prohibited Actions",
        i1: "Smoking inside the company's premises is strictly prohibited.",
        i2: "Photography, video, or audio recording inside company facilities is prohibited without prior written approval.",
        i3: "Entering restricted or unauthorised areas is prohibited.",
        i4: "Bringing personal devices or equipment into practical training areas is prohibited without trainer approval.",
        i5: "Damaging, misusing, or abusing devices or equipment is prohibited.",
        i6: "Disturbing other trainees or disrupting the training process is prohibited.",
        i7: "Using company facilities or equipment without authorisation is prohibited."
      },
      s4: {
        title: "4. General Provisions",
        i1: "Trainees must maintain the confidentiality of all information, documents, and equipment accessed during the training period.",
        i2: "The company reserves the right to dismiss any trainee who violates regulations, misuses facilities, or disrupts the training programme.",
        i3: "The center is not responsible for loss or damage to trainees' personal belongings.",
        i4: "By attending, the trainee consents to the center photographing or recording training sessions for documentation, publication, or promotional purposes."
      }
    },
    safety: {
      eyebrow: "Safety",
      title: "Safety & Security Guidelines",
      card1: { title: "Emergency Exits", text: "Identify the nearest emergency exit to your training room upon arrival." },
      card2: { title: "Assembly Point", text: "In case of evacuation, proceed immediately to the designated assembly point outside." },
      card3: { title: "Emergency Contact", text: "Contact the reception or security team immediately in any emergency." },
      card4: { title: "General Instructions", text: "Follow all safety signage displayed throughout the building." }
    },
    certificate: {
      title: "Certificate & Accreditation",
      text: "Trainees receive an accredited attendance certificate upon fully meeting the course requirements.",
      req1: "Maintain the minimum required attendance across all course days",
      req2: "Complete all required practical exercises and assessments",
      req3: "Comply with the center's policies and regulations throughout the course"
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Information",
      phone: "Phone Number",
      email: "Email Address"
    },
    agreement: {
      eyebrow: "Agreement",
      title: "Declaration & Undertaking",
      text: "I acknowledge that I have reviewed the Trainee Guide and I agree to comply with all policies, regulations, safety and security instructions, and program guidelines throughout my attendance at the training center.",
      fullName: "Full Name",
      companyName: "Company Name",
      trainingDate: "Training Date",
      checkbox: "I have read and agree to this declaration",
      submit: "Submit Agreement",
      successTitle: "Your Agreement Was Submitted",
      successText: "Thank you — we look forward to welcoming you at SAAK Team Training Center."
    },
    footer: {
      tagline: "The first IPC Authorized Training Center in Saudi Arabia.",
      rights: "© 2025 SAAK Team Training Center. All rights reserved.",
      license: "Licensed by TVTC and authorized by IPC."
    }
  }
};
