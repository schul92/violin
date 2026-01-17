export type Locale = 'en' | 'ko';

export const translations = {
  en: {
    // Navbar
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookConsultation: 'Book Consultation',
    },
    // Hero
    hero: {
      badge: 'Master Luthier Services',
      title1: 'Reviving the',
      titleHighlight: 'Soul',
      title2: 'of Your Instrument',
      description: 'Blend centuries-old Cremonese tradition with modern precision. Drag the slider to witness the difference restoration makes.',
      cta: 'Book a Consultation',
      watchProcess: 'Watch Process',
      before: 'BEFORE',
      after: 'AFTER',
      dragToCompare: 'Drag to compare',
    },
    // Stats
    stats: {
      title: 'Trusted by Musicians Worldwide',
      description: 'Our dedication to preserving the soul of string instruments has earned us the trust of professionals and collectors alike.',
      yearsExp: 'Years of Experience',
      instruments: 'Instruments Restored',
      satisfaction: 'Client Satisfaction',
      museum: 'Museum Pieces Serviced',
    },
    // Services
    services: {
      sectionTitle: 'Our Expertise',
      mainTitle: "The Luthier's Workbench",
      selectService: 'Select a service to view technique details',
      spotlight: 'Technique Spotlight',
      tools: 'Tools of the Trade',
      luthierNote: "Luthier's Note",
      learnMore: 'Learn more about',
      items: {
        repair: {
          title: 'Structural Repair',
          subtitle: 'The Foundation',
          desc: 'Expert repair of cracks, rib fractures, and structural reinforcement. We use period-correct spruce and hide glue to ensure the instrument vibrates as one cohesive unit.',
          tools: ['Hide Glue', 'Cleats', 'Japanese Saws'],
          note: 'A crack is not the end. With proper cleating, it can actually reinforce the structure against future stress.',
        },
        varnish: {
          title: 'Varnish Restoration',
          subtitle: 'The Finish',
          desc: 'Revitalizing the finish while preserving the original patina. We specialize in retouching that is invisible to the naked eye under UV light, preserving historical value.',
          tools: ['Sable Brushes', 'Natural Resins', 'UV Cabinet'],
          note: 'We never strip original varnish. Our goal is conservation first, restoration second.',
        },
        sound: {
          title: 'Sound Adjustment',
          subtitle: 'The Voice',
          desc: 'Optimizing the bridge and soundpost placement. Millimeters matter; we adjust the soundpost to balance the tension between the top and back plates for maximum projection.',
          tools: ['Soundpost Setter', 'Bridge Knives', 'Calipers'],
          note: "The soundpost is the 'soul' of the violin. Moving it 0.5mm can change the entire character of the instrument.",
        },
        bow: {
          title: 'Bow Rehairing',
          subtitle: 'The Breath',
          desc: 'Premium Mongolian horsehair replacement. We sort hair individually to ensure consistent thickness, resulting in a smooth, grip-rich draw across the strings.',
          tools: ['Mongolian Hair', 'Silver Wire', 'Rosin'],
          note: 'A fresh rehair restores the dynamic range often lost with old, slick hair.',
        },
      },
    },
    // Gallery
    gallery: {
      sectionTitle: 'Portfolio',
      mainTitle: 'The Restoration Archive',
      all: 'All',
      restoration: 'Restoration',
      maintenance: 'Maintenance',
      bowWork: 'Bow Work',
      restorationNotes: 'Restoration Notes',
      completionDate: 'Completion Date',
      inquireSimilar: 'Inquire Similar',
      share: 'Share',
    },
    // Testimonials
    testimonials: {
      sectionTitle: "Musicians' Voices",
    },
    // Contact
    contact: {
      title: 'Begin the Journey',
      description: 'Your instrument has a story. Let us help you write the next chapter. Visit our studios in NYC or Jersey City, or send us an inquiry.',
      mainStudio: 'Main Studio - Jersey City, NJ',
      nycShowroom: 'NYC Showroom',
      byAppointment: 'By appointment only',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        instrumentType: 'Instrument Type',
        message: 'Message',
        messagePlaceholder: "Tell us about your instrument's condition...",
        submit: 'Request Consultation',
      },
      services: {
        restoration: 'Violin Restoration',
        repair: 'Violin Repair',
        soundAdjustment: 'Sound Adjustment',
        bowRehairing: 'Bow Rehairing',
        varnish: 'Varnish Touch-up',
      },
    },
    // Footer
    footer: {
      description: 'Master violin restoration serving New York City, New Jersey, and the Tri-State area. Centuries-old Cremonese craftsmanship meets modern precision.',
      serving: 'Serving:',
      areas: 'NYC, Brooklyn, Manhattan, Jersey City, Newark, Hoboken, and surrounding areas.',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      sitemap: 'Sitemap',
      rights: 'All rights reserved.',
    },
  },
  ko: {
    // Navbar
    nav: {
      services: '서비스',
      gallery: '갤러리',
      testimonials: '고객 후기',
      contact: '문의',
      bookConsultation: '상담 예약',
    },
    // Hero
    hero: {
      badge: '마스터 루시어 서비스',
      title1: '악기의',
      titleHighlight: '영혼',
      title2: '을 되살립니다',
      description: '수백 년 전통의 크레모나 장인정신과 현대적 정밀함을 결합합니다. 슬라이더를 드래그하여 복원의 차이를 확인하세요.',
      cta: '상담 예약하기',
      watchProcess: '과정 보기',
      before: '복원 전',
      after: '복원 후',
      dragToCompare: '드래그하여 비교',
    },
    // Stats
    stats: {
      title: '전 세계 음악가들의 신뢰',
      description: '현악기의 영혼을 보존하기 위한 우리의 헌신은 전문가와 수집가 모두의 신뢰를 얻었습니다.',
      yearsExp: '년 경력',
      instruments: '복원된 악기',
      satisfaction: '고객 만족도',
      museum: '박물관 소장품 서비스',
    },
    // Services
    services: {
      sectionTitle: '전문 분야',
      mainTitle: '루시어의 작업대',
      selectService: '기술 세부 정보를 보려면 서비스를 선택하세요',
      spotlight: '기술 스포트라이트',
      tools: '사용 도구',
      luthierNote: '루시어 노트',
      learnMore: '자세히 알아보기:',
      items: {
        repair: {
          title: '구조 수리',
          subtitle: '기초',
          desc: '균열, 옆판 파손 및 구조 보강 전문 수리. 시대에 맞는 스프루스와 아교를 사용하여 악기가 하나의 응집력 있는 단위로 진동하도록 합니다.',
          tools: ['아교', '클릿', '일본 톱'],
          note: '균열은 끝이 아닙니다. 적절한 클릿 처리를 통해 오히려 미래의 스트레스에 대한 구조를 강화할 수 있습니다.',
        },
        varnish: {
          title: '바니시 복원',
          subtitle: '마감',
          desc: '원래의 파티나를 보존하면서 마감을 되살립니다. UV 조명 아래에서도 육안으로 보이지 않는 터치업을 전문으로 하여 역사적 가치를 보존합니다.',
          tools: ['세이블 붓', '천연 수지', 'UV 캐비닛'],
          note: '원래 바니시를 절대 벗기지 않습니다. 우리의 목표는 보존 우선, 복원 그 다음입니다.',
        },
        sound: {
          title: '음향 조정',
          subtitle: '소리',
          desc: '브릿지와 사운드포스트 배치 최적화. 밀리미터가 중요합니다; 최대 투사력을 위해 상판과 뒷판 사이의 장력 균형을 맞추도록 사운드포스트를 조정합니다.',
          tools: ['사운드포스트 세터', '브릿지 나이프', '캘리퍼스'],
          note: "사운드포스트는 바이올린의 '영혼'입니다. 0.5mm를 움직이면 악기의 전체 특성이 바뀔 수 있습니다.",
        },
        bow: {
          title: '활 리헤어',
          subtitle: '호흡',
          desc: '프리미엄 몽골 말털 교체. 일관된 두께를 보장하기 위해 털을 개별적으로 분류하여 현 위에서 부드럽고 그립감 있는 드로잉을 제공합니다.',
          tools: ['몽골 털', '은 와이어', '로진'],
          note: '새 리헤어는 오래되고 미끄러운 털로 잃어버린 다이나믹 레인지를 회복시킵니다.',
        },
      },
    },
    // Gallery
    gallery: {
      sectionTitle: '포트폴리오',
      mainTitle: '복원 아카이브',
      all: '전체',
      restoration: '복원',
      maintenance: '유지보수',
      bowWork: '활 작업',
      restorationNotes: '복원 노트',
      completionDate: '완료 날짜',
      inquireSimilar: '유사 문의',
      share: '공유',
    },
    // Testimonials
    testimonials: {
      sectionTitle: '음악가들의 목소리',
    },
    // Contact
    contact: {
      title: '여정을 시작하세요',
      description: '당신의 악기에는 이야기가 있습니다. 다음 장을 쓸 수 있도록 도와드리겠습니다. NYC 또는 저지 시티 스튜디오를 방문하거나 문의해 주세요.',
      mainStudio: '메인 스튜디오 - 저지 시티, NJ',
      nycShowroom: 'NYC 쇼룸',
      byAppointment: '예약제',
      emailUs: '이메일',
      callUs: '전화',
      form: {
        firstName: '이름',
        lastName: '성',
        email: '이메일 주소',
        instrumentType: '악기 종류',
        message: '메시지',
        messagePlaceholder: '악기 상태에 대해 알려주세요...',
        submit: '상담 요청',
      },
      services: {
        restoration: '바이올린 복원',
        repair: '바이올린 수리',
        soundAdjustment: '음향 조정',
        bowRehairing: '활 리헤어',
        varnish: '바니시 터치업',
      },
    },
    // Footer
    footer: {
      description: '뉴욕시, 뉴저지 및 트라이스테이트 지역에 서비스를 제공하는 마스터 바이올린 복원. 수백 년 전통의 크레모나 장인정신이 현대적 정밀함을 만납니다.',
      serving: '서비스 지역:',
      areas: 'NYC, 브루클린, 맨해튼, 저지 시티, 뉴어크, 호보켄 및 주변 지역.',
      servicesTitle: '서비스',
      contactTitle: '연락처',
      privacy: '개인정보 처리방침',
      terms: '이용약관',
      sitemap: '사이트맵',
      rights: '모든 권리 보유.',
    },
  },
} as const;

// Use a more flexible type that allows both languages
export type Translations = {
  nav: {
    services: string;
    gallery: string;
    testimonials: string;
    contact: string;
    bookConsultation: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    description: string;
    cta: string;
    watchProcess: string;
    before: string;
    after: string;
    dragToCompare: string;
  };
  stats: {
    title: string;
    description: string;
    yearsExp: string;
    instruments: string;
    satisfaction: string;
    museum: string;
  };
  services: {
    sectionTitle: string;
    mainTitle: string;
    selectService: string;
    spotlight: string;
    tools: string;
    luthierNote: string;
    learnMore: string;
    items: {
      repair: { title: string; subtitle: string; desc: string; tools: readonly string[]; note: string };
      varnish: { title: string; subtitle: string; desc: string; tools: readonly string[]; note: string };
      sound: { title: string; subtitle: string; desc: string; tools: readonly string[]; note: string };
      bow: { title: string; subtitle: string; desc: string; tools: readonly string[]; note: string };
    };
  };
  gallery: {
    sectionTitle: string;
    mainTitle: string;
    all: string;
    restoration: string;
    maintenance: string;
    bowWork: string;
    restorationNotes: string;
    completionDate: string;
    inquireSimilar: string;
    share: string;
  };
  testimonials: {
    sectionTitle: string;
  };
  contact: {
    title: string;
    description: string;
    mainStudio: string;
    nycShowroom: string;
    byAppointment: string;
    emailUs: string;
    callUs: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      instrumentType: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    services: {
      restoration: string;
      repair: string;
      soundAdjustment: string;
      bowRehairing: string;
      varnish: string;
    };
  };
  footer: {
    description: string;
    serving: string;
    areas: string;
    servicesTitle: string;
    contactTitle: string;
    privacy: string;
    terms: string;
    sitemap: string;
    rights: string;
  };
};
