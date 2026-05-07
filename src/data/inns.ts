import type { Inn, Section } from '../lib/types';
import { SECTIONS } from '../lib/types';

/**
 * ダミー宿データ。
 * 将来 microCMS / R2 等から取得するときは、この配列を返す関数
 * (`getAllInns`, `getInnBySlug`) のみ差し替えれば、
 * 各 .astro コンポーネントは触らずに済む構成にしている。
 */
export const inns: Inn[] = [
  {
    slug: 'iriyamato',
    header: {
      nameJa: '入山登 旅館',
      nameEn: 'Iriyamato Ryokan',
    },
    wifi: {
      ssid: 'iriyamato-guest',
      password: 'welcome2026',
    },
    footer: {
      addressJa: '〒399-9301 長野県北安曇郡白馬村大字北城1234',
      addressEn: '1234 Hokujo, Hakuba-mura, Nagano 399-9301, Japan',
      phone: '0261-00-0000',
      email: 'info@iriyamato.example.com',
      instagramUrl: 'https://instagram.com/iriyamato_example',
      lineUrl: 'https://line.me/R/ti/p/@iriyamato',
    },
    times: [
      {
        order: 10,
        isVisible: true,
        titleJa: 'チェックイン',
        titleEn: 'Check-in',
        time: '15:00 - 19:00',
        bodyJa: 'フロントにてお手続きをお願いいたします。',
        bodyEn: 'Please check in at the front desk.',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: 'チェックアウト',
        titleEn: 'Check-out',
        time: '〜 10:00',
        bodyJa: 'お部屋の鍵はフロントへご返却ください。',
        bodyEn: 'Please return your room key to the front desk.',
      },
      {
        order: 30,
        isVisible: true,
        titleJa: '夕食',
        titleEn: 'Dinner',
        time: '18:00 / 19:00',
        bodyJa: '1階のお食事処にて、お時間をお選びいただけます。',
        bodyEn: 'Choose your seating at the dining room on the 1st floor.',
      },
      {
        order: 40,
        isVisible: true,
        titleJa: '朝食',
        titleEn: 'Breakfast',
        time: '07:30 - 09:00',
      },
      {
        order: 50,
        isVisible: true,
        titleJa: '大浴場',
        titleEn: 'Public Bath',
        time: '15:00 - 24:00 / 06:00 - 09:00',
        bodyJa: '深夜・早朝は男女入れ替え制となります。',
        bodyEn: 'Men’s and women’s baths swap during late night and early morning.',
      },
    ],
    services: [
      {
        order: 10,
        isVisible: true,
        titleJa: '貸切風呂',
        titleEn: 'Private Bath',
        bodyJa: '45 分 ¥2,200。フロントにてご予約を承ります。',
        bodyEn: '45 min for ¥2,200. Reserve at the front desk.',
        imageUrl:
          'https://placehold.co/1200x800/d8e3df/3f5b54?text=Private+Bath',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: '館内 Wi-Fi',
        titleEn: 'In-house Wi-Fi',
        bodyJa: '全館でご利用いただけます。接続情報は上部の Wi-Fi セクションをご確認ください。',
        bodyEn: 'Available throughout the inn. See the Wi-Fi section above for credentials.',
      },
      {
        order: 30,
        isVisible: true,
        titleJa: '送迎',
        titleEn: 'Shuttle Service',
        bodyJa: '最寄り駅からの送迎を行っております。事前にご連絡ください。',
        bodyEn: 'Pick-up from the nearest station is available with prior reservation.',
        pdfUrl: 'https://example.com/iriyamato/shuttle.pdf',
      },
      {
        order: 40,
        isVisible: false,
        titleJa: '（非表示テスト）',
        titleEn: '(hidden test)',
      },
    ],
    additional: [
      {
        order: 5,
        isVisible: true,
        titleJa: '館内図',
        titleEn: 'Floor Map',
        bodyJa: '各階のレイアウトです。お風呂・お食事処の位置をご確認いただけます。',
        bodyEn: 'Layout of each floor. See where the baths and dining hall are located.',
        imageUrl:
          'https://placehold.co/1200x800/e7e2d8/8a7a5c?text=Iriyamato+Floor+Map',
        pdfUrl: 'https://example.com/iriyamato/floor-map.pdf',
      },
      {
        order: 10,
        isVisible: true,
        titleJa: 'お部屋でのお願い',
        titleEn: 'In-room Notes',
        bodyJa: '館内は禁煙です。喫煙は1階喫煙ブースをご利用ください。',
        bodyEn: 'The entire inn is non-smoking. Please use the smoking booth on the 1st floor.',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: '非常口のご案内',
        titleEn: 'Emergency Exits',
        bodyJa: '各階エレベーター脇に非常口がございます。万一の際にはご利用ください。',
        bodyEn: 'Emergency exits are located next to the elevator on every floor.',
        imageUrl:
          'https://placehold.co/1200x800/efe7d4/8a7a5c?text=Emergency+Map',
      },
    ],
    area: [
      {
        order: 10,
        isVisible: true,
        titleJa: '蕎麦処 やまと',
        titleEn: 'Soba Yamato',
        tags: ['restaurant'],
        mapUrl: 'https://maps.google.com/?q=hakuba+soba',
        imageUrl:
          'https://placehold.co/1200x800/efe7d4/8a7a5c?text=Soba+Yamato',
        bodyJa: '徒歩 5 分。地元産そば粉を使った手打ちそばのお店です。',
        bodyEn: '5 min on foot. Hand-made soba using local buckwheat.',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: '白馬スポーツレンタル',
        titleEn: 'Hakuba Sports Rental',
        tags: ['rental'],
        mapUrl: 'https://maps.google.com/?q=hakuba+rental',
        imageUrl:
          'https://placehold.co/1200x800/d8e3df/3f5b54?text=Sports+Rental',
        bodyJa: 'スキー・スノーボード・MTB のレンタル可。',
        bodyEn: 'Rentals for ski, snowboard, and MTB.',
      },
      {
        order: 30,
        isVisible: true,
        titleJa: '道の駅 はくば',
        titleEn: 'Roadside Station Hakuba',
        tags: ['souvenir', 'shop'],
        mapUrl: 'https://maps.google.com/?q=michinoeki+hakuba',
        imageUrl:
          'https://placehold.co/1200x800/e7e2d8/8a7a5c?text=Michi-no-Eki',
        bodyJa: '地元のお土産・農産物が揃います。',
        bodyEn: 'Local souvenirs and fresh produce.',
      },
      {
        order: 40,
        isVisible: true,
        titleJa: 'カフェ こもれび',
        titleEn: 'Cafe Komorebi',
        tags: ['restaurant'],
        imageUrl:
          'https://placehold.co/1200x800/f3ebd9/8a7a5c?text=Cafe+Komorebi',
        bodyJa: '徒歩 3 分。自家焙煎コーヒーと自家製スイーツ。',
        bodyEn: '3 min on foot. House-roasted coffee and homemade sweets.',
      },
    ],
    faq: [
      {
        order: 10,
        isVisible: true,
        questionJa: '駐車場はありますか？',
        questionEn: 'Is parking available?',
        answerJa: '無料駐車場を 20 台分ご用意しております。事前予約は不要です。',
        answerEn: 'Yes, free parking is available for up to 20 cars. No reservation required.',
      },
      {
        order: 20,
        isVisible: true,
        questionJa: 'ペットの宿泊は可能ですか？',
        questionEn: 'Are pets allowed?',
        answerJa: '申し訳ございませんが、お預かりは行っておりません。',
        answerEn: 'We are sorry, but pets are not allowed.',
      },
      {
        order: 30,
        isVisible: true,
        questionJa: 'アレルギー対応はできますか？',
        questionEn: 'Can you accommodate food allergies?',
        answerJa: 'ご予約時にお知らせください。可能な範囲で対応いたします。',
        answerEn: 'Please let us know when you book. We will accommodate where possible.',
      },
      {
        order: 40,
        isVisible: true,
        questionJa: '近くにコンビニはありますか？',
        questionEn: 'Is there a convenience store nearby?',
        answerJa: '徒歩 8 分の場所にございます。',
        answerEn: 'Yes, an 8-minute walk away.',
      },
    ],
    info: [
      {
        order: 10,
        isVisible: true,
        titleJa: '春の山菜会席プラン',
        titleEn: 'Spring Sansai Kaiseki Plan',
        bodyJa: '今だけの山菜尽くしの会席をご用意しております。',
        bodyEn: 'A limited-time kaiseki featuring seasonal mountain vegetables.',
        imageUrl:
          'https://placehold.co/1200x800/d8e3df/3f5b54?text=Spring+Kaiseki',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: '連泊 10% OFF',
        titleEn: '10% off for 2+ nights',
        bodyJa: '2 泊以上のご宿泊で 10% OFF。',
        bodyEn: '10% off when you stay 2 or more nights.',
        imageUrl:
          'https://placehold.co/1200x800/efe7d4/8a7a5c?text=Stay+Longer',
      },
    ],
  },

  {
    slug: 'sample-inn',
    header: {
      nameJa: 'サンプル温泉宿',
      nameEn: 'Sample Hot Spring Inn',
    },
    wifi: {
      ssid: 'sample-guest',
      password: 'sample-1234',
    },
    footer: {
      addressJa: '〒000-0000 サンプル県サンプル市1-2-3',
      addressEn: '1-2-3 Sample, Sample City, Sample 000-0000, Japan',
      phone: '000-000-0000',
      email: 'info@sample-inn.example.com',
      instagramUrl: 'https://instagram.com/sample_inn_example',
    },
    times: [
      {
        order: 10,
        isVisible: true,
        titleJa: 'チェックイン',
        titleEn: 'Check-in',
        time: '14:00 - 18:00',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: 'チェックアウト',
        titleEn: 'Check-out',
        time: '〜 11:00',
      },
      {
        order: 30,
        isVisible: true,
        titleJa: '温泉',
        titleEn: 'Onsen',
        time: '24 時間',
        bodyJa: '清掃時間 (10:00 - 11:00) を除き、いつでもご利用いただけます。',
        bodyEn: 'Open 24 hours except for cleaning (10:00 - 11:00).',
      },
    ],
    services: [
      {
        order: 10,
        isVisible: true,
        titleJa: '館内浴衣',
        titleEn: 'Yukata',
        bodyJa: '各お部屋にご用意しております。',
        bodyEn: 'Provided in every room.',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: '売店',
        titleEn: 'Shop',
        bodyJa: '営業時間 8:00 - 21:00。地元のお土産を取り揃えております。',
        bodyEn: 'Open 8:00 - 21:00. Local souvenirs available.',
        imageUrl:
          'https://placehold.co/1200x800/d8e3df/3f5b54?text=Shop',
      },
    ],
    additional: [
      {
        order: 5,
        isVisible: true,
        titleJa: '館内図',
        titleEn: 'Floor Map',
        bodyJa: '館内のレイアウトをご確認いただけます。',
        bodyEn: 'See the layout of our inn.',
        imageUrl:
          'https://placehold.co/1200x800/e7e2d8/8a7a5c?text=Sample+Floor+Map',
      },
      {
        order: 10,
        isVisible: true,
        titleJa: '貴重品について',
        titleEn: 'Valuables',
        bodyJa: '客室の金庫または、フロントでお預かりも可能です。',
        bodyEn: 'Use the in-room safe, or leave them at the front desk.',
      },
    ],
    area: [
      {
        order: 10,
        isVisible: true,
        titleJa: 'ベーカリー サンプル',
        titleEn: 'Sample Bakery',
        tags: ['restaurant', 'shop'],
        mapUrl: 'https://maps.google.com/?q=sample+bakery',
        imageUrl:
          'https://placehold.co/1200x800/f3ebd9/8a7a5c?text=Sample+Bakery',
        bodyJa: '朝7時オープン。焼き立てパンが人気。',
        bodyEn: 'Opens at 7am. Famous for fresh-baked bread.',
      },
      {
        order: 20,
        isVisible: true,
        titleJa: '土産処 さんぷる',
        titleEn: 'Sample Souvenirs',
        tags: ['souvenir'],
        imageUrl:
          'https://placehold.co/1200x800/e7e2d8/8a7a5c?text=Sample+Souvenirs',
        bodyJa: '宿から徒歩 2 分。',
        bodyEn: '2 min walk from the inn.',
      },
    ],
    faq: [
      {
        order: 10,
        isVisible: true,
        questionJa: 'クレジットカードは使えますか？',
        questionEn: 'Do you accept credit cards?',
        answerJa: 'VISA / Mastercard / JCB に対応しております。',
        answerEn: 'We accept VISA, Mastercard, and JCB.',
      },
      {
        order: 20,
        isVisible: true,
        questionJa: '部屋食は可能ですか？',
        questionEn: 'Can meals be served in the room?',
        answerJa: 'プランによってご用意しております。詳しくはフロントまで。',
        answerEn: 'Depends on the plan. Please ask the front desk.',
      },
    ],
    info: [
      {
        order: 10,
        isVisible: true,
        titleJa: '記念日プラン',
        titleEn: 'Anniversary Plan',
        bodyJa: 'ホールケーキとスパークリングワインをご用意。',
        bodyEn: 'Includes a whole cake and sparkling wine.',
        imageUrl:
          'https://placehold.co/1200x800/efe7d4/8a7a5c?text=Anniversary',
      },
    ],
  },
];

export function getAllInns(): Inn[] {
  return inns;
}

export function getInnBySlug(slug: string): Inn | undefined {
  return inns.find((inn) => inn.slug === slug);
}

/**
 * 指定の宿で、そのセクションが表示すべきコンテンツを持っているかを返す。
 * 繰り返し型: isVisible なアイテムが 1 つ以上あるか。
 */
export function hasSectionContent(inn: Inn, section: Section): boolean {
  switch (section) {
    case 'times':
      return inn.times.some((it) => it.isVisible);
    case 'services':
      return inn.services.some((it) => it.isVisible);
    case 'additional':
      return inn.additional.some((it) => it.isVisible);
    case 'area':
      return inn.area.some((it) => it.isVisible);
    case 'faq':
      return inn.faq.some((it) => it.isVisible);
  }
}

/**
 * `getStaticPaths` 用。全宿 × コンテンツのある全セクションの
 * (slug, section) を列挙する。
 */
export function getAllSectionParams(): {
  slug: string;
  section: Section;
}[] {
  return inns.flatMap((inn) =>
    SECTIONS.filter((section) => hasSectionContent(inn, section)).map(
      (section) => ({ slug: inn.slug, section }),
    ),
  );
}
