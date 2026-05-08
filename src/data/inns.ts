import type { Inn, Section } from "../lib/types";
import { SECTIONS } from "../lib/types";

/**
 * ダミー宿データ。
 * 将来 microCMS / R2 等から取得するときは、この `inns` の供給元
 * （または `getAllInns` / `innStaticPaths` / `sectionStaticPaths` の中身）
 * を差し替えれば、各 .astro コンポーネントは触らずに済む構成にしている。
 */
export const inns: Inn[] = [
  {
    slug: "iriyamato",
    header: {
      nameJa: "入山登",
      nameEn: "Iriyamato",
      nameZh: "入山登",
    },
    wifi: {
      ssid: "iriyamato-guest",
      password: "welcome2026",
    },
    footer: {
      addressJa: "〒399-9301 長野県北安曇郡白馬村大字北城1234",
      addressEn: "1234 Hokujo, Hakuba-mura, Nagano 399-9301, Japan",
      addressZh: "〒399-9301 日本长野县北安昙郡白马村大字北城 1234",
      phone: "0261-00-0000",
      email: "info@iriyamato.example.com",
      instagramUrl: "https://instagram.com/iriyamato_example",
      lineUrl: "https://line.me/R/ti/p/@iriyamato",
    },
    times: [
      {
        order: 10,
        isVisible: true,
        titleJa: "チェックイン",
        titleEn: "Check-in",
        titleZh: "入住",
        time: "15:00 - 19:00",
        bodyJa: "フロントにてお手続きをお願いいたします。",
        bodyEn: "Please check in at the front desk.",
        bodyZh: "请在前台办理入住手续。",
      },
      {
        order: 20,
        isVisible: true,
        titleJa: "チェックアウト",
        titleEn: "Check-out",
        titleZh: "退房",
        time: "〜 10:00",
        bodyJa: "お部屋の鍵はフロントへご返却ください。",
        bodyEn: "Please return your room key to the front desk.",
        bodyZh: "请将客房钥匙归还至前台。",
      },
      {
        order: 30,
        isVisible: true,
        titleJa: "夕食",
        titleEn: "Dinner",
        titleZh: "晚餐",
        time: "18:00 / 19:00",
        bodyJa: "1階のお食事処にて、お時間をお選びいただけます。",
        bodyEn: "Choose your seating at the dining room on the 1st floor.",
        bodyZh: "可在 1 楼餐厅选择用餐时段。",
      },
      {
        order: 40,
        isVisible: true,
        titleJa: "朝食",
        titleEn: "Breakfast",
        titleZh: "早餐",
        time: "07:30 - 09:00",
      },
      {
        order: 50,
        isVisible: true,
        titleJa: "大浴場",
        titleEn: "Public Bath",
        titleZh: "大浴场",
        time: "15:00 - 24:00 / 06:00 - 09:00",
        bodyJa: "深夜・早朝は男女入れ替え制となります。",
        bodyEn:
          "Men’s and women’s baths swap during late night and early morning.",
        bodyZh: "深夜及清晨时段男女浴场会互相调换。",
      },
    ],
    services: [
      {
        order: 10,
        isVisible: true,
        titleJa: "貸切風呂",
        titleEn: "Private Bath",
        titleZh: "包场浴池",
        bodyJa: "45 分 ¥2,200。フロントにてご予約を承ります。",
        bodyEn: "45 min for ¥2,200. Reserve at the front desk.",
        bodyZh: "45 分钟 ¥2,200。可在前台预约。",
        imageUrl:
          "https://placehold.co/1200x800/d8e3df/3f5b54?text=Private+Bath",
      },
      {
        order: 20,
        isVisible: true,
        titleJa: "館内 Wi-Fi",
        titleEn: "In-house Wi-Fi",
        titleZh: "馆内 Wi-Fi",
        bodyJa:
          "全館でご利用いただけます。接続情報は上部の Wi-Fi セクションをご確認ください。",
        bodyEn:
          "Available throughout the inn. See the Wi-Fi section above for credentials.",
        bodyZh: "全馆均可使用。连接信息请查看页面上方的 Wi-Fi 区域。",
      },
      {
        order: 30,
        isVisible: true,
        titleJa: "送迎",
        titleEn: "Shuttle Service",
        titleZh: "接送服务",
        bodyJa: "最寄り駅からの送迎を行っております。事前にご連絡ください。",
        bodyEn:
          "Pick-up from the nearest station is available with prior reservation.",
        bodyZh: "提供从最近车站的接送服务，请提前联系我们。",
        pdfUrl: "https://example.com/iriyamato/shuttle.pdf",
      },
      {
        order: 40,
        isVisible: false,
        titleJa: "（非表示テスト）",
        titleEn: "(hidden test)",
        titleZh: "（隐藏测试）",
      },
    ],
    additional: [
      {
        order: 5,
        isVisible: true,
        titleJa: "館内図",
        titleEn: "Floor Map",
        titleZh: "楼层平面图",
        bodyJa:
          "各階のレイアウトです。お風呂・お食事処の位置をご確認いただけます。",
        bodyEn:
          "Layout of each floor. See where the baths and dining hall are located.",
        bodyZh: "各楼层的布局图。可查看浴池和餐厅的位置。",
        imageUrl:
          "https://placehold.co/1200x800/e7e2d8/8a7a5c?text=Iriyamato+Floor+Map",
        pdfUrl: "https://example.com/iriyamato/floor-map.pdf",
      },
      {
        order: 10,
        isVisible: true,
        titleJa: "お部屋でのお願い",
        titleEn: "In-room Notes",
        titleZh: "客房使用须知",
        bodyJa: "館内は禁煙です。喫煙は1階喫煙ブースをご利用ください。",
        bodyEn:
          "The entire inn is non-smoking. Please use the smoking booth on the 1st floor.",
        bodyZh: "本馆全面禁烟。如需吸烟请使用 1 楼的吸烟室。",
      },
      {
        order: 20,
        isVisible: true,
        titleJa: "非常口のご案内",
        titleEn: "Emergency Exits",
        titleZh: "紧急出口指引",
        bodyJa:
          "各階エレベーター脇に非常口がございます。万一の際にはご利用ください。",
        bodyEn:
          "Emergency exits are located next to the elevator on every floor.",
        bodyZh: "各楼层电梯旁均设有紧急出口。如遇紧急情况请使用。",
        imageUrl:
          "https://placehold.co/1200x800/efe7d4/8a7a5c?text=Emergency+Map",
      },
    ],
    area: [
      {
        order: 10,
        isVisible: true,
        titleJa: "蕎麦処 やまと",
        titleEn: "Soba Yamato",
        titleZh: "荞麦面店 大和",
        tags: ["restaurant"],
        mapUrl: "https://maps.google.com/?q=hakuba+soba",
        imageUrl:
          "https://placehold.co/1200x800/efe7d4/8a7a5c?text=Soba+Yamato",
        bodyJa: "徒歩 5 分。地元産そば粉を使った手打ちそばのお店です。",
        bodyEn: "5 min on foot. Hand-made soba using local buckwheat.",
        bodyZh: "步行 5 分钟。使用本地荞麦粉的手工荞麦面店。",
      },
      {
        order: 20,
        isVisible: true,
        titleJa: "白馬スポーツレンタル",
        titleEn: "Hakuba Sports Rental",
        titleZh: "白马运动用品租赁",
        tags: ["rental"],
        mapUrl: "https://maps.google.com/?q=hakuba+rental",
        imageUrl:
          "https://placehold.co/1200x800/d8e3df/3f5b54?text=Sports+Rental",
        bodyJa: "スキー・スノーボード・MTB のレンタル可。",
        bodyEn: "Rentals for ski, snowboard, and MTB.",
        bodyZh: "可租赁滑雪板、单板和山地车。",
      },
      {
        order: 30,
        isVisible: true,
        titleJa: "道の駅 はくば",
        titleEn: "Roadside Station Hakuba",
        titleZh: "道路休息站 白马",
        tags: ["souvenir", "shop"],
        mapUrl: "https://maps.google.com/?q=michinoeki+hakuba",
        imageUrl:
          "https://placehold.co/1200x800/e7e2d8/8a7a5c?text=Michi-no-Eki",
        bodyJa: "地元のお土産・農産物が揃います。",
        bodyEn: "Local souvenirs and fresh produce.",
        bodyZh: "汇集本地土特产与新鲜农产品。",
      },
      {
        order: 40,
        isVisible: true,
        titleJa: "カフェ こもれび",
        titleEn: "Cafe Komorebi",
        titleZh: "咖啡馆 木漏日",
        tags: ["restaurant"],
        imageUrl:
          "https://placehold.co/1200x800/f3ebd9/8a7a5c?text=Cafe+Komorebi",
        bodyJa: "徒歩 3 分。自家焙煎コーヒーと自家製スイーツ。",
        bodyEn: "3 min on foot. House-roasted coffee and homemade sweets.",
        bodyZh: "步行 3 分钟。自家烘焙咖啡与自制甜点。",
      },
    ],
    faq: [
      {
        order: 10,
        isVisible: true,
        questionJa: "駐車場はありますか？",
        questionEn: "Is parking available?",
        questionZh: "请问有停车场吗？",
        answerJa:
          "無料駐車場を 20 台分ご用意しております。事前予約は不要です。",
        answerEn:
          "Yes, free parking is available for up to 20 cars. No reservation required.",
        answerZh: "本馆备有 20 个免费停车位，无需事先预约。",
      },
      {
        order: 20,
        isVisible: true,
        questionJa: "ペットの宿泊は可能ですか？",
        questionEn: "Are pets allowed?",
        questionZh: "可以携带宠物入住吗？",
        answerJa: "申し訳ございませんが、お預かりは行っておりません。",
        answerEn: "We are sorry, but pets are not allowed.",
        answerZh: "十分抱歉，本馆不接待宠物入住。",
      },
      {
        order: 30,
        isVisible: true,
        questionJa: "アレルギー対応はできますか？",
        questionEn: "Can you accommodate food allergies?",
        questionZh: "可以提供食物过敏的应对吗？",
        answerJa: "ご予約時にお知らせください。可能な範囲で対応いたします。",
        answerEn:
          "Please let us know when you book. We will accommodate where possible.",
        answerZh: "请在预约时告知，我们将在可能的范围内予以配合。",
      },
      {
        order: 40,
        isVisible: true,
        questionJa: "近くにコンビニはありますか？",
        questionEn: "Is there a convenience store nearby?",
        questionZh: "附近有便利店吗？",
        answerJa: "徒歩 8 分の場所にございます。",
        answerEn: "Yes, an 8-minute walk away.",
        answerZh: "步行约 8 分钟即可到达。",
      },
    ],
    info: [
      {
        order: 10,
        isVisible: true,
        titleJa: "春の山菜会席プラン",
        titleEn: "Spring Sansai Kaiseki Plan",
        titleZh: "春季山菜会席套餐",
        bodyJa: "今だけの山菜尽くしの会席をご用意しております。",
        bodyEn:
          "A limited-time kaiseki featuring seasonal mountain vegetables.",
        bodyZh: "当季限定，为您奉上以山菜为主题的会席料理。",
        imageUrl:
          "https://placehold.co/1200x800/d8e3df/3f5b54?text=Spring+Kaiseki",
      },
      {
        order: 20,
        isVisible: true,
        titleJa: "連泊 10% OFF",
        titleEn: "10% off for 2+ nights",
        titleZh: "连住可享 9 折优惠",
        bodyJa: "2 泊以上のご宿泊で 10% OFF。",
        bodyEn: "10% off when you stay 2 or more nights.",
        bodyZh: "连住 2 晚或以上即享 9 折优惠。",
        imageUrl:
          "https://placehold.co/1200x800/efe7d4/8a7a5c?text=Stay+Longer",
      },
    ],
  },
];

export function getAllInns(): Inn[] {
  return inns;
}

/**
 * 指定の宿で、そのセクションが表示すべきコンテンツを持っているかを返す。
 * 繰り返し型: isVisible なアイテムが 1 つ以上あるか。
 */
export function hasSectionContent(inn: Inn, section: Section): boolean {
  switch (section) {
    case "times":
      return inn.times.some((it) => it.isVisible);
    case "services":
      return inn.services.some((it) => it.isVisible);
    case "additional":
      return inn.additional.some((it) => it.isVisible);
    case "area":
      return inn.area.some((it) => it.isVisible);
    case "faq":
      return inn.faq.some((it) => it.isVisible);
  }
}

/**
 * 宿トップページ（`/g/[slug]/`）用の `getStaticPaths` エントリ。
 * `props.inn` でページ側に Inn を渡し、ルックアップを不要にする。
 */
export function innStaticPaths(): Array<{
  params: { slug: string };
  props: { inn: Inn };
}> {
  return inns.map((inn) => ({
    params: { slug: inn.slug },
    props: { inn },
  }));
}

/**
 * セクションページ（`/g/[slug]/[section]/`）用の `getStaticPaths` エントリ。
 * 表示すべきコンテンツがあるセクションだけを列挙する。
 */
export function sectionStaticPaths(): Array<{
  params: { slug: string; section: Section };
  props: { inn: Inn; section: Section };
}> {
  return inns.flatMap((inn) =>
    SECTIONS.filter((section) => hasSectionContent(inn, section)).map(
      (section) => ({
        params: { slug: inn.slug, section },
        props: { inn, section },
      }),
    ),
  );
}
