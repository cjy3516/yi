import { Hexagram, Trigram } from '../types'

// 八卦顺序
export const eightTrigramsOrder: { [key: number]: string } = {
  1: '乾',
  2: '兑',
  3: '离',
  4: '震',
  5: '巽',
  6: '坎',
  7: '艮',
  8: '坤',
}

// 八卦含义
export const eightTrigramsMeaning: { [key: string]: string } = {
  乾: '天',
  兑: '泽',
  离: '火',
  震: '雷',
  巽: '风',
  坎: '水',
  艮: '山',
  坤: '地',
}

// 八卦线条映射 (1为阳爻——，0为阴爻- -)，数组从下到上排列
export const trigramLines: { [key: string]: number[] } = {
  乾: [1, 1, 1], // 天 (三阳爻)
  兑: [1, 1, 0], // 泽 (下二阳上一阴)
  离: [1, 0, 1], // 火 (下阳中阴上阳)
  震: [1, 0, 0], // 雷 (下阳上二阴)
  巽: [0, 1, 1], // 风 (下阴上二阳)
  坎: [0, 1, 0], // 水 (下阴中阳上阴)
  艮: [0, 0, 1], // 山 (下二阴上阳)
  坤: [0, 0, 0], // 地 (三阴爻)
}

// 八卦组合到卦象的映射
export const eightTrigramsGroupToHexagrams: { [key: string]: string } = {
  乾为: '天',
  坤为: '地',
  水雷: '屯',
  山水: '蒙',
  水天: '需',
  天水: '讼',
  地水: '师',
  水地: '比',
  风天: '小畜',
  天泽: '履',
  地天: '泰',
  天地: '否',
  天火: '同人',
  火天: '大有',
  地山: '谦',
  雷地: '豫',
  泽雷: '随',
  山风: '蛊',
  地泽: '临',
  风地: '观',
  火雷: '噬嗑',
  山火: '贲',
  山地: '剥',
  地雷: '复',
  天雷: '无妄',
  山天: '大畜',
  山雷: '颐',
  泽风: '大过',
  坎为: '水',
  离为: '火',
  泽山: '咸',
  雷风: '恒',
  天山: '遁',
  雷天: '大壮',
  火地: '晋',
  地火: '明夷',
  风火: '家人',
  火泽: '睽',
  水山: '蹇',
  雷水: '解',
  山泽: '损',
  风雷: '益',
  泽天: '夬',
  天风: '姤',
  泽地: '萃',
  地风: '升',
  泽水: '困',
  水风: '井',
  泽火: '革',
  火风: '鼎',
  震为: '雷',
  艮为: '山',
  风山: '渐',
  雷泽: '归妹',
  雷火: '丰',
  火山: '旅',
  巽为: '风',
  兑为: '泽',
  风水: '涣',
  水泽: '节',
  风泽: '中孚',
  雷山: '小过',
  水火: '既济',
  火水: '未济',
}

// 八卦信息
export const trigramsInfo: { [key: string]: Trigram } = {
  乾: {
    name: '乾',
    symbol: '☰',
    meaning: '天',
    nature: '健',
    direction: '西北',
    element: '金',
  },
  兑: {
    name: '兑',
    symbol: '☱',
    meaning: '泽',
    nature: '悦',
    direction: '西',
    element: '金',
  },
  离: {
    name: '离',
    symbol: '☲',
    meaning: '火',
    nature: '丽',
    direction: '南',
    element: '火',
  },
  震: {
    name: '震',
    symbol: '☳',
    meaning: '雷',
    nature: '动',
    direction: '东',
    element: '木',
  },
  巽: {
    name: '巽',
    symbol: '☴',
    meaning: '风',
    nature: '入',
    direction: '东南',
    element: '木',
  },
  坎: {
    name: '坎',
    symbol: '☵',
    meaning: '水',
    nature: '陷',
    direction: '北',
    element: '水',
  },
  艮: {
    name: '艮',
    symbol: '☶',
    meaning: '山',
    nature: '止',
    direction: '东北',
    element: '土',
  },
  坤: {
    name: '坤',
    symbol: '☷',
    meaning: '地',
    nature: '顺',
    direction: '西南',
    element: '土',
  },
}

// 六十四卦信息（按照1-64标准顺序）
export const hexagramsInfo: { [key: string]: Hexagram } = {
  天: {
    number: 1,
    name: '乾',
    chineseName: '乾为天',
    upperTrigram: '乾',
    lowerTrigram: '乾',
    description: '元亨利贞',
    interpretation:
      '乾卦代表天，象征刚健、创始、领导。表示事物处于初始阶段，需要积极进取，发挥领导才能。',
    advice:
      '保持积极向上的态度，发挥自己的才能，但要注意不要过于刚强，要懂得变通。',
  },
  地: {
    number: 2,
    name: '坤',
    chineseName: '坤为地',
    upperTrigram: '坤',
    lowerTrigram: '坤',
    description: '元亨，利牝马之贞',
    interpretation:
      '坤卦代表地，象征柔顺、包容、承载。表示要顺应自然，以柔克刚，厚德载物。',
    advice: '保持谦逊和包容的心态，学会倾听他人意见，以德服人。',
  },
  屯: {
    number: 3,
    name: '屯',
    chineseName: '水雷屯',
    upperTrigram: '坎',
    lowerTrigram: '震',
    description: '元亨利贞，勿用有攸往，利建侯',
    interpretation:
      '屯卦象征万物初生，虽然充满生机，但也面临困难。需要耐心等待时机，不可急躁。',
    advice: '当前时机未到，需要耐心等待，积蓄力量，为将来的发展做好准备。',
  },
  蒙: {
    number: 4,
    name: '蒙',
    chineseName: '山水蒙',
    upperTrigram: '艮',
    lowerTrigram: '坎',
    description: '亨，匪我求童蒙，童蒙求我',
    interpretation:
      '蒙卦象征启蒙和教育，表示需要学习和接受指导。要保持谦逊的学习态度。',
    advice: '要保持谦逊的学习态度，虚心接受他人的指导和教育。',
  },
  需: {
    number: 5,
    name: '需',
    chineseName: '水天需',
    upperTrigram: '坎',
    lowerTrigram: '乾',
    description: '有孚，光亨，贞吉，利涉大川',
    interpretation:
      '需卦象征等待和需求，表示需要耐心等待时机。有诚信者必能成功。',
    advice: '要有耐心等待合适的时机，保持诚信，机会自然会来。',
  },
  讼: {
    number: 6,
    name: '讼',
    chineseName: '天水讼',
    upperTrigram: '乾',
    lowerTrigram: '坎',
    description: '有孚，窒惕，中吉，终凶，利见大人，不利涉大川',
    interpretation:
      '讼卦象征争讼和冲突，表示存在争议和矛盾。要慎重处理，避免激化。',
    advice: '遇到争议时要冷静处理，寻求和解，避免激化矛盾。',
  },
  师: {
    number: 7,
    name: '师',
    chineseName: '地水师',
    upperTrigram: '坤',
    lowerTrigram: '坎',
    description: '贞，丈人吉，无咎',
    interpretation: '师卦象征军队和纪律，表示需要组织和纪律。要有领导能力。',
    advice: '要有组织纪律性，发挥领导能力，团结众人共同努力。',
  },
  比: {
    number: 8,
    name: '比',
    chineseName: '水地比',
    upperTrigram: '坎',
    lowerTrigram: '坤',
    description: '吉，原筮，元永贞，无咎',
    interpretation: '比卦象征亲近和团结，表示要与他人和睦相处，建立良好关系。',
    advice: '要与他人和睦相处，建立良好的人际关系，互相帮助。',
  },
  小畜: {
    number: 9,
    name: '小畜',
    chineseName: '风天小畜',
    upperTrigram: '巽',
    lowerTrigram: '乾',
    description: '亨，密云不雨，自我西郊',
    interpretation: '小畜卦象征小的积蓄，表示力量还不够强大，需要继续积累。',
    advice: '力量不够时要继续积累，不可急于求成，要有耐心。',
  },
  履: {
    number: 10,
    name: '履',
    chineseName: '天泽履',
    upperTrigram: '乾',
    lowerTrigram: '兑',
    description: '履虎尾，不咥人，亨',
    interpretation: '履卦象征行走和践行，表示要谨慎行事，遵循礼仪和规范。',
    advice: '要谨慎行事，遵循礼仪和规范，这样才能避免危险。',
  },
  泰: {
    number: 11,
    name: '泰',
    chineseName: '地天泰',
    upperTrigram: '坤',
    lowerTrigram: '乾',
    description: '小往大来，吉亨',
    interpretation: '泰卦象征通泰和顺利，表示事情进展顺利，前景光明。',
    advice: '事情顺利时要保持谦逊，不可骄傲自满，要居安思危。',
  },
  否: {
    number: 12,
    name: '否',
    chineseName: '天地否',
    upperTrigram: '乾',
    lowerTrigram: '坤',
    description: '否之匪人，不利君子贞，大往小来',
    interpretation: '否卦象征闭塞和不通，表示遇到阻碍和困难。要坚持正道。',
    advice: '遇到困难时要坚持正道，不可与小人同流合污。',
  },
  同人: {
    number: 13,
    name: '同人',
    chineseName: '天火同人',
    upperTrigram: '乾',
    lowerTrigram: '离',
    description: '同人于野，亨，利涉大川，利君子贞',
    interpretation: '同人卦象征团结和合作，表示要与志同道合的人合作。',
    advice: '要与志同道合的人合作，团结一致，共同努力。',
  },
  大有: {
    number: 14,
    name: '大有',
    chineseName: '火天大有',
    upperTrigram: '离',
    lowerTrigram: '乾',
    description: '元亨',
    interpretation: '大有卦象征大的收获，表示事业有成，收获丰厚。要保持谦逊。',
    advice: '事业有成时要保持谦逊，不可骄傲自满，要懂得分享。',
  },
  谦: {
    number: 15,
    name: '谦',
    chineseName: '地山谦',
    upperTrigram: '坤',
    lowerTrigram: '艮',
    description: '亨，君子有终',
    interpretation:
      '谦卦象征谦逊和谦让，表示要保持谦逊的态度。谦逊能带来好运。',
    advice: '要保持谦逊的态度，不可骄傲自满，谦逊能带来好运。',
  },
  豫: {
    number: 16,
    name: '豫',
    chineseName: '雷地豫',
    upperTrigram: '震',
    lowerTrigram: '坤',
    description: '利建侯行师',
    interpretation: '豫卦象征愉悦和预备，表示要保持愉快的心情，做好准备。',
    advice: '要保持愉快的心情，做好充分的准备，这样才能成功。',
  },
  随: {
    number: 17,
    name: '随',
    chineseName: '泽雷随',
    upperTrigram: '兑',
    lowerTrigram: '震',
    description: '元亨利贞，无咎',
    interpretation: '随卦象征跟随和顺应，表示要顺应时势，跟随正确的方向。',
    advice: '要顺应时势，跟随正确的方向，不可固执己见。',
  },
  蛊: {
    number: 18,
    name: '蛊',
    chineseName: '山风蛊',
    upperTrigram: '艮',
    lowerTrigram: '巽',
    description: '元亨，利涉大川，先甲三日，后甲三日',
    interpretation: '蛊卦象征腐败和整治，表示需要整治和改革。要勇于承担责任。',
    advice: '发现问题时要勇于承担责任，进行必要的整治和改革。',
  },
  临: {
    number: 19,
    name: '临',
    chineseName: '地泽临',
    upperTrigram: '坤',
    lowerTrigram: '兑',
    description: '元亨利贞，至于八月有凶',
    interpretation: '临卦象征临近和监督，表示要关注和监督下属。要有责任心。',
    advice: '要关注和监督下属，有责任心，但不可过于严厉。',
  },
  观: {
    number: 20,
    name: '观',
    chineseName: '风地观',
    upperTrigram: '巽',
    lowerTrigram: '坤',
    description: '盥而不荐，有孚颙若',
    interpretation: '观卦象征观察和观看，表示要仔细观察，从中学习和领悟。',
    advice: '要仔细观察周围的事物，从中学习和领悟道理。',
  },
  噬嗑: {
    number: 21,
    name: '噬嗑',
    chineseName: '火雷噬嗑',
    upperTrigram: '离',
    lowerTrigram: '震',
    description: '亨，利用狱',
    interpretation: '噬嗑卦象征咬合和惩罚，表示要坚决处理问题，不可姑息。',
    advice: '遇到问题要坚决处理，不可姑息迁就，要公正执法。',
  },
  贲: {
    number: 22,
    name: '贲',
    chineseName: '山火贲',
    upperTrigram: '艮',
    lowerTrigram: '离',
    description: '亨，小利有攸往',
    interpretation: '贲卦象征装饰和美化，表示要注重外表和形象，但不可过分。',
    advice: '要注重外表和形象，但不可过分装饰，内在更重要。',
  },
  剥: {
    number: 23,
    name: '剥',
    chineseName: '山地剥',
    upperTrigram: '艮',
    lowerTrigram: '坤',
    description: '不利有攸往',
    interpretation:
      '剥卦象征剥落和衰败，表示处于衰落期。要保存实力，等待时机。',
    advice: '处于衰落期时要保存实力，不可轻举妄动，等待时机。',
  },
  复: {
    number: 24,
    name: '复',
    chineseName: '地雷复',
    upperTrigram: '坤',
    lowerTrigram: '震',
    description: '亨，出入无疾，朋来无咎，反复其道',
    interpretation: '复卦象征返回和恢复，表示事物开始恢复，要把握机会。',
    advice: '事物开始恢复时要把握机会，积极行动，重新开始。',
  },
  无妄: {
    number: 25,
    name: '无妄',
    chineseName: '天雷无妄',
    upperTrigram: '乾',
    lowerTrigram: '震',
    description: '元亨利贞，其匪正有眚，不利有攸往',
    interpretation: '无妄卦象征无妄想和真实，表示要诚实守信，不可有妄想。',
    advice: '要诚实守信，不可有不切实际的妄想，脚踏实地。',
  },
  大畜: {
    number: 26,
    name: '大畜',
    chineseName: '山天大畜',
    upperTrigram: '艮',
    lowerTrigram: '乾',
    description: '利贞，不家食吉，利涉大川',
    interpretation: '大畜卦象征大的积蓄，表示要积蓄力量，等待时机。要有耐心。',
    advice: '要积蓄力量，等待合适的时机，有耐心才能成功。',
  },
  颐: {
    number: 27,
    name: '颐',
    chineseName: '山雷颐',
    upperTrigram: '艮',
    lowerTrigram: '震',
    description: '贞吉，观颐，自求口实',
    interpretation: '颐卦象征颐养和养育，表示要注重养生和修养。要自食其力。',
    advice: '要注重养生和修养，自食其力，不可依赖他人。',
  },
  大过: {
    number: 28,
    name: '大过',
    chineseName: '泽风大过',
    upperTrigram: '兑',
    lowerTrigram: '巽',
    description: '栋桡，利有攸往，亨',
    interpretation: '大过卦象征过度和超越，表示超出了正常范围。要适度调整。',
    advice: '超出正常范围时要适度调整，不可过度，凡事要有度。',
  },
  坎: {
    number: 29,
    name: '坎',
    chineseName: '坎为水',
    upperTrigram: '坎',
    lowerTrigram: '坎',
    description: '习坎，有孚，维心亨，行有尚',
    interpretation:
      '坎卦象征险难和陷阱，表示处于困难之中。要保持信心，坚持不懈。',
    advice: '处于困难时要保持信心，坚持不懈，终能脱离困境。',
  },
  离: {
    number: 30,
    name: '离',
    chineseName: '离为火',
    upperTrigram: '离',
    lowerTrigram: '离',
    description: '利贞，亨，畜牝牛，吉',
    interpretation:
      '离卦象征光明和依附，表示要依附于正确的事物。要保持光明正大。',
    advice: '要依附于正确的事物，保持光明正大，这样才能成功。',
  },
  咸: {
    number: 31,
    name: '咸',
    chineseName: '泽山咸',
    upperTrigram: '兑',
    lowerTrigram: '艮',
    description: '亨，利贞，取女吉',
    interpretation: '咸卦象征感应和感化，表示要用真诚感化他人。感应是相互的。',
    advice: '要用真诚感化他人，感应是相互的，真诚能换来真诚。',
  },
  恒: {
    number: 32,
    name: '恒',
    chineseName: '雷风恒',
    upperTrigram: '震',
    lowerTrigram: '巽',
    description: '亨，无咎，利贞，利有攸往',
    interpretation: '恒卦象征恒久和持续，表示要坚持不懈，持之以恒。',
    advice: '要坚持不懈，持之以恒，只有坚持才能成功。',
  },
  遁: {
    number: 33,
    name: '遁',
    chineseName: '天山遁',
    upperTrigram: '乾',
    lowerTrigram: '艮',
    description: '亨，小利贞',
    interpretation:
      '遁卦象征退避和隐遁，表示要知进退，适时退避。退一步海阔天空。',
    advice: '要知进退，适时退避，退一步海阔天空，不可硬撑。',
  },
  大壮: {
    number: 34,
    name: '大壮',
    chineseName: '雷天大壮',
    upperTrigram: '震',
    lowerTrigram: '乾',
    description: '利贞',
    interpretation: '大壮卦象征强大和壮盛，表示力量强大，但要适度使用。',
    advice: '力量强大时要适度使用，不可滥用，要有节制。',
  },
  晋: {
    number: 35,
    name: '晋',
    chineseName: '火地晋',
    upperTrigram: '离',
    lowerTrigram: '坤',
    description: '康侯用锡马蕃庶，昼日三接',
    interpretation: '晋卦象征前进和晋升，表示事业有进展，要继续努力。',
    advice: '事业有进展时要继续努力，不可松懈，要再接再厉。',
  },
  明夷: {
    number: 36,
    name: '明夷',
    chineseName: '地火明夷',
    upperTrigram: '坤',
    lowerTrigram: '离',
    description: '利艰贞',
    interpretation:
      '明夷卦象征光明受伤，表示处于黑暗时期。要坚持正道，等待光明。',
    advice: '处于黑暗时期要坚持正道，等待光明，不可放弃希望。',
  },
  家人: {
    number: 37,
    name: '家人',
    chineseName: '风火家人',
    upperTrigram: '巽',
    lowerTrigram: '离',
    description: '利女贞',
    interpretation: '家人卦象征家庭和睦，表示要重视家庭关系，和睦相处。',
    advice: '要重视家庭关系，和睦相处，家和万事兴。',
  },
  睽: {
    number: 38,
    name: '睽',
    chineseName: '火泽睽',
    upperTrigram: '离',
    lowerTrigram: '兑',
    description: '小事吉',
    interpretation: '睽卦象征背离和分歧，表示存在分歧和矛盾。要寻求和解。',
    advice: '存在分歧时要寻求和解，化解矛盾，求同存异。',
  },
  蹇: {
    number: 39,
    name: '蹇',
    chineseName: '水山蹇',
    upperTrigram: '坎',
    lowerTrigram: '艮',
    description: '利西南，不利东北，利见大人，贞吉',
    interpretation: '蹇卦象征艰难和阻碍，表示前进困难。要寻求帮助，不可独行。',
    advice: '前进困难时要寻求帮助，不可独行，团结才有力量。',
  },
  解: {
    number: 40,
    name: '解',
    chineseName: '雷水解',
    upperTrigram: '震',
    lowerTrigram: '坎',
    description: '利西南，无所往，其来复吉，有攸往，夙吉',
    interpretation: '解卦象征解除和解脱，表示困难开始解除。要把握时机。',
    advice: '困难开始解除时要把握时机，积极行动，走出困境。',
  },
  损: {
    number: 41,
    name: '损',
    chineseName: '山泽损',
    upperTrigram: '艮',
    lowerTrigram: '兑',
    description: '有孚，元吉，无咎，可贞，利有攸往',
    interpretation: '损卦象征减损和牺牲，表示要有所舍弃才能有所得。',
    advice: '要懂得舍弃，有舍才有得，不可贪心不足。',
  },
  益: {
    number: 42,
    name: '益',
    chineseName: '风雷益',
    upperTrigram: '巽',
    lowerTrigram: '震',
    description: '利有攸往，利涉大川',
    interpretation: '益卦象征增益和利益，表示有利可图，要把握机会。',
    advice: '有利可图时要把握机会，积极行动，但要合理合法。',
  },
  夬: {
    number: 43,
    name: '夬',
    chineseName: '泽天夬',
    upperTrigram: '兑',
    lowerTrigram: '乾',
    description: '扬于王庭，孚号有厉，告自邑，不利即戎，利有攸往',
    interpretation: '夬卦象征决断和果断，表示要果断决策，不可犹豫不决。',
    advice: '要果断决策，不可犹豫不决，机不可失，时不再来。',
  },
  姤: {
    number: 44,
    name: '姤',
    chineseName: '天风姤',
    upperTrigram: '乾',
    lowerTrigram: '巽',
    description: '女壮，勿用取女',
    interpretation: '姤卦象征相遇和邂逅，表示意外的相遇。要谨慎处理。',
    advice: '意外相遇时要谨慎处理，不可轻信，要保持警觉。',
  },
  萃: {
    number: 45,
    name: '萃',
    chineseName: '泽地萃',
    upperTrigram: '兑',
    lowerTrigram: '坤',
    description: '亨，王假有庙，利见大人，亨，利贞',
    interpretation: '萃卦象征聚集和团聚，表示要团结众人，集中力量。',
    advice: '要团结众人，集中力量，众志成城，无往不胜。',
  },
  升: {
    number: 46,
    name: '升',
    chineseName: '地风升',
    upperTrigram: '坤',
    lowerTrigram: '巽',
    description: '元亨，用见大人，勿恤，南征吉',
    interpretation: '升卦象征上升和提升，表示事业有上升趋势。要继续努力。',
    advice: '事业有上升趋势时要继续努力，不可松懈，要再接再厉。',
  },
  困: {
    number: 47,
    name: '困',
    chineseName: '泽水困',
    upperTrigram: '兑',
    lowerTrigram: '坎',
    description: '亨，贞，大人吉，无咎，有言不信',
    interpretation:
      '困卦象征困顿和艰难，表示处于困境之中。要坚持信念，等待转机。',
    advice: '处于困境时要坚持信念，保持乐观，等待转机的到来。',
  },
  井: {
    number: 48,
    name: '井',
    chineseName: '水风井',
    upperTrigram: '坎',
    lowerTrigram: '巽',
    description: '改邑不改井，无丧无得，往来井井，汔至亦未繘井，羸其瓶，凶',
    interpretation:
      '井卦象征水井和资源，表示要善用资源，造福众人。要有奉献精神。',
    advice: '要善用自己的资源和能力，造福众人，要有奉献精神。',
  },
  革: {
    number: 49,
    name: '革',
    chineseName: '泽火革',
    upperTrigram: '兑',
    lowerTrigram: '离',
    description: '巳日乃孚，元亨利贞，悔亡',
    interpretation:
      '革卦象征变革和改革，表示需要进行变革。要顺应时势，勇于改革。',
    advice: '要顺应时势，勇于进行必要的变革和改革，这样才能获得新生。',
  },
  鼎: {
    number: 50,
    name: '鼎',
    chineseName: '火风鼎',
    upperTrigram: '离',
    lowerTrigram: '巽',
    description: '元吉，亨',
    interpretation:
      '鼎卦象征鼎器和稳定，表示基础稳固，事业有成。要保持稳定发展。',
    advice: '基础稳固时要保持稳定发展，不可急躁冒进，稳中求进。',
  },
  震: {
    number: 51,
    name: '震',
    chineseName: '震为雷',
    upperTrigram: '震',
    lowerTrigram: '震',
    description: '亨，震来虩虩，笑言哑哑，震惊百里，不丧匕鬯',
    interpretation: '震卦象征震动和惊醒，表示要保持警觉，面对变化要冷静应对。',
    advice: '面对突然的变化要保持冷静，不可惊慌失措，要沉着应对。',
  },
  艮: {
    number: 52,
    name: '艮',
    chineseName: '艮为山',
    upperTrigram: '艮',
    lowerTrigram: '艮',
    description: '艮其背，不获其身，行其庭，不见其人，无咎',
    interpretation: '艮卦象征停止和静止，表示要知道何时停止。适时停止是智慧。',
    advice: '要知道何时停止，适时停止是智慧，不可盲目前进。',
  },
  渐: {
    number: 53,
    name: '渐',
    chineseName: '风山渐',
    upperTrigram: '巽',
    lowerTrigram: '艮',
    description: '女归吉，利贞',
    interpretation:
      '渐卦象征渐进和循序，表示要循序渐进，不可急躁。慢慢来比较快。',
    advice: '要循序渐进，不可急躁，慢慢来比较快，稳扎稳打才能成功。',
  },
  归妹: {
    number: 54,
    name: '归妹',
    chineseName: '雷泽归妹',
    upperTrigram: '震',
    lowerTrigram: '兑',
    description: '征凶，无攸利',
    interpretation: '归妹卦象征出嫁和归属，表示要找到合适的归属。要慎重选择。',
    advice: '要慎重选择自己的归属和方向，不可轻率决定。',
  },
  丰: {
    number: 55,
    name: '丰',
    chineseName: '雷火丰',
    upperTrigram: '震',
    lowerTrigram: '离',
    description: '亨，王假之，勿忧，宜日中',
    interpretation: '丰卦象征丰盛和繁荣，表示事业繁荣，收获丰厚。要保持谦逊。',
    advice: '事业繁荣时要保持谦逊，不可骄傲自满，要居安思危。',
  },
  旅: {
    number: 56,
    name: '旅',
    chineseName: '火山旅',
    upperTrigram: '离',
    lowerTrigram: '艮',
    description: '小亨，旅贞吉',
    interpretation: '旅卦象征旅行和漂泊，表示处于不稳定状态。要保持灵活性。',
    advice: '处于不稳定状态时要保持灵活性，适应环境的变化。',
  },
  巽: {
    number: 57,
    name: '巽',
    chineseName: '巽为风',
    upperTrigram: '巽',
    lowerTrigram: '巽',
    description: '小亨，利有攸往，利见大人',
    interpretation: '巽卦象征顺从和谦逊，表示要顺应环境，保持谦逊的态度。',
    advice: '要顺应环境，保持谦逊的态度，这样才能获得他人的支持。',
  },
  兑: {
    number: 58,
    name: '兑',
    chineseName: '兑为泽',
    upperTrigram: '兑',
    lowerTrigram: '兑',
    description: '亨，利贞',
    interpretation: '兑卦象征喜悦和交流，表示要保持愉快的心情，善于与人交流。',
    advice: '要保持愉快的心情，善于与人交流，这样能带来好运。',
  },
  涣: {
    number: 59,
    name: '涣',
    chineseName: '风水涣',
    upperTrigram: '巽',
    lowerTrigram: '坎',
    description: '亨，王假有庙，利涉大川，利贞',
    interpretation: '涣卦象征涣散和分散，表示要化解分散的局面，重新团结。',
    advice: '要化解分散的局面，重新团结众人，集中力量办大事。',
  },
  节: {
    number: 60,
    name: '节',
    chineseName: '水泽节',
    upperTrigram: '坎',
    lowerTrigram: '兑',
    description: '亨，苦节不可贞',
    interpretation: '节卦象征节制和适度，表示要懂得节制，适度而行。过犹不及。',
    advice: '要懂得节制，适度而行，过犹不及，凡事要有度。',
  },
  中孚: {
    number: 61,
    name: '中孚',
    chineseName: '风泽中孚',
    upperTrigram: '巽',
    lowerTrigram: '兑',
    description: '豚鱼吉，利涉大川，利贞',
    interpretation: '中孚卦象征诚信和信任，表示要保持诚信，建立信任关系。',
    advice: '要保持诚信，建立信任关系，诚信是立身之本。',
  },
  小过: {
    number: 62,
    name: '小过',
    chineseName: '雷山小过',
    upperTrigram: '震',
    lowerTrigram: '艮',
    description: '亨，利贞，可小事，不可大事，飞鸟遗之音，不宜上，宜下，大吉',
    interpretation: '小过卦象征小的过错，表示在小事上可以灵活，但大事要谨慎。',
    advice: '在小事上可以灵活处理，但大事要谨慎，不可轻率。',
  },
  既济: {
    number: 63,
    name: '既济',
    chineseName: '水火既济',
    upperTrigram: '坎',
    lowerTrigram: '离',
    description: '亨，小利贞，初吉终乱',
    interpretation:
      '既济卦象征已经完成，表示事情已经成功。但要居安思危，防止衰败。',
    advice: '事情成功后要居安思危，防止衰败，保持谦逊的态度。',
  },
  未济: {
    number: 64,
    name: '未济',
    chineseName: '火水未济',
    upperTrigram: '离',
    lowerTrigram: '坎',
    description: '亨，小狐汔济，濡其尾，无攸利',
    interpretation:
      '未济卦象征尚未完成，表示事情还没有完成。要继续努力，不可放弃。',
    advice: '事情还没有完成时要继续努力，不可放弃，坚持到底就是胜利。',
  },
}

// 六十四卦变爻解释（按照1-64标准顺序排列）
export const hexagramChangeLines: {
  [hexagramKey: string]: {
    [lineNumber: number]: {
      text: string
      interpretation: string
    }
  }
} = {
  // 第1卦：乾
  天: {
    1: {
      text: '潜龙勿用',
      interpretation: '初九：潜龙勿用。表示时机未到，应当韬光养晦，不可妄动。',
    },
    2: {
      text: '见龙在田，利见大人',
      interpretation:
        '九二：见龙在田，利见大人。表示时机已到，可以开始行动，有利于见贵人。',
    },
    3: {
      text: '君子终日乾乾，夕惕若，厉无咎',
      interpretation:
        '九三：君子终日乾乾，夕惕若，厉无咎。表示处于危险境地，需要警惕谨慎，才能避免灾祸。',
    },
    4: {
      text: '或跃在渊，无咎',
      interpretation:
        '九四：或跃在渊，无咎。表示处于进退两难的境地，需要谨慎决策，不可冒进。',
    },
    5: {
      text: '飞龙在天，利见大人',
      interpretation:
        '九五：飞龙在天，利见大人。表示处于最佳位置，可以大展宏图，有利于见贵人。',
    },
    6: {
      text: '亢龙有悔',
      interpretation:
        '上九：亢龙有悔。表示处于极端位置，骄傲自满，将会有后悔。',
    },
  },

  // 第2卦：坤
  地: {
    1: {
      text: '履霜，坚冰至',
      interpretation:
        '初六：履霜，坚冰至。表示事物的开始已有征兆，应当警惕，防患于未然。',
    },
    2: {
      text: '直方大，不习无不利',
      interpretation:
        '六二：直方大，不习无不利。表示保持正直方正，虽然没有经验，但也没有不利。',
    },
    3: {
      text: '含章可贞，或从王事，无成有终',
      interpretation:
        '六三：含章可贞，或从王事，无成有终。表示内含美德，可以坚守正道，虽然没有成就，但最终会有好结果。',
    },
    4: {
      text: '括囊，无咎无誉',
      interpretation:
        '六四：括囊，无咎无誉。表示谨慎收敛，不会有过失，但也不会有赞誉。',
    },
    5: {
      text: '黄裳，元吉',
      interpretation:
        '六五：黄裳，元吉。表示处于中正位置，品德高尚，大吉大利。',
    },
    6: {
      text: '龙战于野，其血玄黄',
      interpretation:
        '上六：龙战于野，其血玄黄。表示处于极端位置，与阳刚争斗，必有损伤。',
    },
  },

  // 第3卦：屯
  屯: {
    1: {
      text: '磐桓，利居贞，利建侯',
      interpretation:
        '初九：磐桓，利居贞，利建侯。表示徘徊不前，有利于坚守正道，有利于建立诸侯。',
    },
    2: {
      text: '屯如邅如，乘马班如，匪寇婚媾，女子贞不字，十年乃字',
      interpretation:
        '六二：屯如邅如，乘马班如，匪寇婚媾，女子贞不字，十年乃字。表示困难重重，骑马徘徊，不是盗贼而是求婚，女子坚守不嫁，十年后才嫁。',
    },
    3: {
      text: '即鹿无虞，惟入于林中，君子几不如舍，往吝',
      interpretation:
        '六三：即鹿无虞，惟入于林中，君子几不如舍，往吝。表示追鹿没有向导，只能进入林中，君子几乎不如放弃，前往会有困难。',
    },
    4: {
      text: '乘马班如，求婚媾，往吉，无不利',
      interpretation:
        '六四：乘马班如，求婚媾，往吉，无不利。表示骑马徘徊，求婚姻，前往吉祥，没有不利。',
    },
    5: {
      text: '屯其膏，小贞吉，大贞凶',
      interpretation:
        '九五：屯其膏，小贞吉，大贞凶。表示囤积恩惠，小事坚持吉祥，大事坚持凶险。',
    },
    6: {
      text: '乘马班如，泣血涟如',
      interpretation: '上六：乘马班如，泣血涟如。表示骑马徘徊，哭泣流血不止。',
    },
  },

  // 第4卦：蒙
  蒙: {
    1: {
      text: '发蒙，利用刑人，用说桎梏，以往吝',
      interpretation:
        '初六：发蒙，利用刑人，用说桎梏，以往吝。表示启发蒙昧，有利于惩罚人，用来解除束缚，前往会有困难。',
    },
    2: {
      text: '包蒙吉，纳妇吉，子克家',
      interpretation:
        '九二：包蒙吉，纳妇吉，子克家。表示包容蒙昧吉祥，娶妻吉祥，子能治家。',
    },
    3: {
      text: '勿用取女，见金夫，不有躬，无攸利',
      interpretation:
        '六三：勿用取女，见金夫，不有躬，无攸利。表示不要娶这女子，见到富有的男子，不自爱，没有利益。',
    },
    4: {
      text: '困蒙，吝',
      interpretation: '六四：困蒙，吝。表示陷入蒙昧，困难。',
    },
    5: {
      text: '童蒙，吉',
      interpretation: '六五：童蒙，吉。表示童稚蒙昧，吉祥。',
    },
    6: {
      text: '击蒙，不利为寇，利御寇',
      interpretation:
        '上九：击蒙，不利为寇，利御寇。表示击打蒙昧，不利于做盗贼，有利于防御盗贼。',
    },
  },

  // 第5卦：需
  需: {
    1: {
      text: '需于郊，利用恒，无咎',
      interpretation:
        '初九：需于郊，利用恒，无咎。表示在郊外等待，有利于坚持，没有过失。',
    },
    2: {
      text: '需于沙，小有言，终吉',
      interpretation:
        '九二：需于沙，小有言，终吉。表示在沙地等待，有小的言论，最终吉祥。',
    },
    3: {
      text: '需于泥，致寇至',
      interpretation: '九三：需于泥，致寇至。表示在泥泞中等待，招致盗贼到来。',
    },
    4: {
      text: '需于血，出自穴',
      interpretation: '六四：需于血，出自穴。表示在血中等待，从洞穴中出来。',
    },
    5: {
      text: '需于酒食，贞吉',
      interpretation: '九五：需于酒食，贞吉。表示在酒食中等待，坚持吉祥。',
    },
    6: {
      text: '入于穴，有不速之客三人来，敬之终吉',
      interpretation:
        '上六：入于穴，有不速之客三人来，敬之终吉。表示进入洞穴，有三个不速之客到来，尊敬他们最终吉祥。',
    },
  },

  // 第6卦：讼
  讼: {
    1: {
      text: '不永所事，小有言，终吉',
      interpretation:
        '初六：不永所事，小有言，终吉。表示不长久从事争讼，有小的言论，最终吉祥。',
    },
    2: {
      text: '不克讼，归而逋，其邑人三百户，无眚',
      interpretation:
        '九二：不克讼，归而逋，其邑人三百户，无眚。表示不能胜诉，回归逃避，其城邑有三百户，没有灾祸。',
    },
    3: {
      text: '食旧德，贞厉，终吉，或从王事，无成',
      interpretation:
        '六三：食旧德，贞厉，终吉，或从王事，无成。表示享用旧有的德行，坚持危险，最终吉祥，或从事王事，没有成就。',
    },
    4: {
      text: '不克讼，复即命，渝安贞，吉',
      interpretation:
        '九四：不克讼，复即命，渝安贞，吉。表示不能胜诉，回到原来的命运，改变安定坚持，吉祥。',
    },
    5: {
      text: '讼，元吉',
      interpretation: '九五：讼，元吉。表示争讼，大吉大利。',
    },
    6: {
      text: '或锡之鞶带，终朝三褫之',
      interpretation:
        '上九：或锡之鞶带，终朝三褫之。表示或许赐给腰带，一天之内三次被剥夺。',
    },
  },

  // 第7卦：师
  师: {
    1: {
      text: '师出以律，否臧凶',
      interpretation:
        '初六：师出以律，否臧凶。表示军队出征要有纪律，不好的储备凶险。',
    },
    2: {
      text: '在师中，吉，无咎，王三锡命',
      interpretation:
        '九二：在师中，吉，无咎，王三锡命。表示在军队中，吉祥，没有过失，君王三次赐命。',
    },
    3: {
      text: '师或舆尸，凶',
      interpretation: '六三：师或舆尸，凶。表示军队或许载着尸体，凶险。',
    },
    4: {
      text: '师左次，无咎',
      interpretation: '六四：师左次，无咎。表示军队左边驻扎，没有过失。',
    },
    5: {
      text: '田有禽，利执言，无咎，长子帅师，弟子舆尸，贞凶',
      interpretation:
        '六五：田有禽，利执言，无咎，长子帅师，弟子舆尸，贞凶。表示田中有禽兽，有利于执行命令，没有过失，长子率领军队，弟子载着尸体，坚持凶险。',
    },
    6: {
      text: '大君有命，开国承家，小人勿用',
      interpretation:
        '上六：大君有命，开国承家，小人勿用。表示大君有命令，开国承家，小人不要任用。',
    },
  },

  // 第8卦：比
  比: {
    1: {
      text: '有孚比之，无咎，有孚盈缶，终来有它，吉',
      interpretation:
        '初六：有孚比之，无咎，有孚盈缶，终来有它，吉。表示有诚信亲近，没有过失，有诚信满瓦器，最终来有其他，吉祥。',
    },
    2: {
      text: '比之自内，贞吉',
      interpretation: '六二：比之自内，贞吉。表示从内部亲近，坚持吉祥。',
    },
    3: {
      text: '比之匪人',
      interpretation: '六三：比之匪人。表示亲近不正当的人。',
    },
    4: {
      text: '外比之，贞吉',
      interpretation: '六四：外比之，贞吉。表示从外部亲近，坚持吉祥。',
    },
    5: {
      text: '显比，王用三驱，失前禽，邑人不诫，吉',
      interpretation:
        '九五：显比，王用三驱，失前禽，邑人不诫，吉。表示显著亲近，君王用三面围猎，失去前面的禽兽，城邑人不警戒，吉祥。',
    },
    6: {
      text: '比之无首，凶',
      interpretation: '上六：比之无首，凶。表示亲近没有首领，凶险。',
    },
  },

  // 第9卦：小畜
  小畜: {
    1: {
      text: '复自道，何其咎，吉',
      interpretation:
        '初九：复自道，何其咎，吉。表示返回自己的道路，有什么过失呢，吉祥。',
    },
    2: {
      text: '牵复，吉',
      interpretation: '九二：牵复，吉。表示牵引返回，吉祥。',
    },
    3: {
      text: '舆说辐，夫妻反目',
      interpretation: '九三：舆说辐，夫妻反目。表示车轮脱落，夫妻反目。',
    },
    4: {
      text: '有孚，血去惕出，无咎',
      interpretation:
        '六四：有孚，血去惕出，无咎。表示有诚信，流血的忧虑消除，没有过失。',
    },
    5: {
      text: '有孚挛如，富以其邻',
      interpretation: '九五：有孚挛如，富以其邻。表示有诚信团结，以邻为富。',
    },
    6: {
      text: '既雨既处，尚德载，妇贞厉，月几望，君子征凶',
      interpretation:
        '上九：既雨既处，尚德载，妇贞厉，月几望，君子征凶。表示既下雨又停止，崇尚德行，妇女坚持危险，月亮几乎圆满，君子出征凶险。',
    },
  },

  // 第10卦：履
  履: {
    1: {
      text: '素履，往无咎',
      interpretation: '初九：素履，往无咎。表示朴素地行走，前往没有过失。',
    },
    2: {
      text: '履道坦坦，幽人贞吉',
      interpretation:
        '九二：履道坦坦，幽人贞吉。表示行走道路平坦，隐士坚持吉祥。',
    },
    3: {
      text: '眇能视，跛能履，履虎尾，咥人，凶，武人为于大君',
      interpretation:
        '六三：眇能视，跛能履，履虎尾，咥人，凶，武人为于大君。表示瞎眼能看，跛脚能走，踩到虎尾，咬人，凶险，武人为了大君。',
    },
    4: {
      text: '履虎尾，愬愬，终吉',
      interpretation:
        '九四：履虎尾，愬愬，终吉。表示踩到虎尾，恐惧，最终吉祥。',
    },
    5: {
      text: '夬履，贞厉',
      interpretation: '九五：夬履，贞厉。表示决断行走，坚持危险。',
    },
    6: {
      text: '视履考祥，其旋元吉',
      interpretation:
        '上九：视履考祥，其旋元吉。表示观察行走考察吉祥，其旋转大吉。',
    },
  },

  // 第11卦：泰
  泰: {
    1: {
      text: '拔茅茹，以其汇，征吉',
      interpretation:
        '初九：拔茅茹，以其汇，征吉。表示拔茅草连根，以其同类，征伐吉祥。',
    },
    2: {
      text: '包荒，用冯河，不遐遗，朋亡，得尚于中行',
      interpretation:
        '九二：包荒，用冯河，不遐遗，朋亡，得尚于中行。表示包容荒芜，用渡河，不远遗，朋友亡，得到崇尚于中行。',
    },
    3: {
      text: '无平不陂，无往不复，艰贞无咎，勿恤其孚，于食有福',
      interpretation:
        '六三：无平不陂，无往不复，艰贞无咎，勿恤其孚，于食有福。表示没有平坦不倾斜，没有前往不返回，艰难坚持没有过失，不要忧虑其诚信，在饮食有福。',
    },
    4: {
      text: '翩翩不富，以其邻，不戒以孚',
      interpretation:
        '六四：翩翩不富，以其邻，不戒以孚。表示翩翩不富，以其邻居，不警戒以诚信。',
    },
    5: {
      text: '帝乙归妹，以祉元吉',
      interpretation: '六五：帝乙归妹，以祉元吉。表示帝乙嫁妹，以福祉大吉。',
    },
    6: {
      text: '城复于隍，勿用师，自邑告命，贞吝',
      interpretation:
        '上六：城复于隍，勿用师，自邑告命，贞吝。表示城墙复于护城河，不要用军队，自城邑告命，坚持困难。',
    },
  },

  // 第12卦：否
  否: {
    1: {
      text: '拔茅茹，以其汇，贞吉，亨',
      interpretation:
        '初六：拔茅茹，以其汇，贞吉，亨。表示拔茅草连根，以其同类，坚持吉祥，亨通。',
    },
    2: {
      text: '包承，小人吉，大人否，亨',
      interpretation:
        '六二：包承，小人吉，大人否，亨。表示包容承受，小人吉祥，大人否，亨通。',
    },
    3: {
      text: '包羞',
      interpretation: '六三：包羞。表示包容羞耻。',
    },
    4: {
      text: '有命无咎，畴离祉',
      interpretation:
        '九四：有命无咎，畴离祉。表示有命令没有过失，同类离开福祉。',
    },
    5: {
      text: '休否，大人吉，其亡其亡，系于苞桑',
      interpretation:
        '九五：休否，大人吉，其亡其亡，系于苞桑。表示停止否，大人吉祥，其亡其亡，系于苞桑。',
    },
    6: {
      text: '倾否，先否后喜',
      interpretation: '上九：倾否，先否后喜。表示倾倒否，先否后喜。',
    },
  },

  // 第13卦：同人
  同人: {
    1: {
      text: '同人于门，无咎',
      interpretation: '初九：同人于门，无咎。表示同人于门，没有过失。',
    },
    2: {
      text: '同人于宗，吝',
      interpretation: '六二：同人于宗，吝。表示同人于宗，困难。',
    },
    3: {
      text: '伏戎于莽，升其高陵，三岁不兴',
      interpretation:
        '九三：伏戎于莽，升其高陵，三岁不兴。表示埋伏军队于草丛，升其高陵，三年不兴起。',
    },
    4: {
      text: '乘其墉，弗克攻，吉',
      interpretation:
        '九四：乘其墉，弗克攻，吉。表示乘其城墙，不能攻克，吉祥。',
    },
    5: {
      text: '同人先号咷而后笑，大师克相遇',
      interpretation:
        '九五：同人先号咷而后笑，大师克相遇。表示同人先号咷而后笑，大师克相遇。',
    },
    6: {
      text: '同人于郊，无悔',
      interpretation: '上九：同人于郊，无悔。表示同人于郊，没有后悔。',
    },
  },

  // 第14卦：大有
  大有: {
    1: {
      text: '无交害，匪咎，艰则无咎',
      interpretation:
        '初九：无交害，匪咎，艰则无咎。表示没有交往害，不是过失，艰难则没有过失。',
    },
    2: {
      text: '大车以载，有攸往，无咎',
      interpretation:
        '九二：大车以载，有攸往，无咎。表示大车以载，有前往，没有过失。',
    },
    3: {
      text: '公用亨于天子，小人弗克',
      interpretation:
        '九三：公用亨于天子，小人弗克。表示公用亨于天子，小人不能。',
    },
    4: {
      text: '匪其彭，无咎',
      interpretation: '九四：匪其彭，无咎。表示不是其彭，没有过失。',
    },
    5: {
      text: '厥孚交如，威如，吉',
      interpretation:
        '六五：厥孚交如，威如，吉。表示其诚信交往如，威严如，吉祥。',
    },
    6: {
      text: '自天祐之，吉无不利',
      interpretation: '上九：自天祐之，吉无不利。表示自天祐之，吉祥没有不利。',
    },
  },

  // 第15卦：谦
  谦: {
    1: {
      text: '谦谦君子，用涉大川，吉',
      interpretation:
        '初六：谦谦君子，用涉大川，吉。表示谦谦君子，用涉大川，吉祥。',
    },
    2: {
      text: '鸣谦，贞吉',
      interpretation: '六二：鸣谦，贞吉。表示鸣谦，坚持吉祥。',
    },
    3: {
      text: '劳谦，君子有终，吉',
      interpretation: '九三：劳谦，君子有终，吉。表示劳谦，君子有终，吉祥。',
    },
    4: {
      text: '无不利，撝谦',
      interpretation: '六四：无不利，撝谦。表示没有不利，撝谦。',
    },
    5: {
      text: '不富以其邻，利用侵伐，无不利',
      interpretation:
        '六五：不富以其邻，利用侵伐，无不利。表示不富以其邻，利用侵伐，没有不利。',
    },
    6: {
      text: '鸣谦，利用行师，征邑国',
      interpretation:
        '上六：鸣谦，利用行师，征邑国。表示鸣谦，利用行师，征邑国。',
    },
  },

  // 第16卦：豫
  豫: {
    1: {
      text: '鸣豫，凶',
      interpretation: '初六：鸣豫，凶。表示鸣豫，凶险。',
    },
    2: {
      text: '介于石，不终日，贞吉',
      interpretation:
        '六二：介于石，不终日，贞吉。表示介于石，不终日，坚持吉祥。',
    },
    3: {
      text: '盱豫，悔，迟有悔',
      interpretation: '六三：盱豫，悔，迟有悔。表示盱豫，后悔，迟有后悔。',
    },
    4: {
      text: '由豫，大有得，勿疑，朋盍簪',
      interpretation:
        '九四：由豫，大有得，勿疑，朋盍簪。表示由豫，大有得，不要怀疑，朋友盍簪。',
    },
    5: {
      text: '贞疾，恒不死',
      interpretation: '六五：贞疾，恒不死。表示坚持疾病，恒不死。',
    },
    6: {
      text: '冥豫，成有渝，无咎',
      interpretation: '上六：冥豫，成有渝，无咎。表示冥豫，成有渝，没有过失。',
    },
  },

  // 第17卦：随
  随: {
    1: {
      text: '官有渝，贞吉，出门交有功',
      interpretation:
        '初九：官有渝，贞吉，出门交有功。表示官职有变化，坚持吉祥，出门交往有功。',
    },
    2: {
      text: '系小子，失丈夫',
      interpretation: '六二：系小子，失丈夫。表示系住小子，失去丈夫。',
    },
    3: {
      text: '系丈夫，失小子，随有求得，利居贞',
      interpretation:
        '六三：系丈夫，失小子，随有求得，利居贞。表示系住丈夫，失去小子，随有求得，利于居住坚持。',
    },
    4: {
      text: '随有获，贞凶，有孚在道，以明，何咎',
      interpretation:
        '九四：随有获，贞凶，有孚在道，以明，何咎。表示随有获得，坚持凶险，有诚信在道，以明，何过失。',
    },
    5: {
      text: '孚于嘉，吉',
      interpretation: '九五：孚于嘉，吉。表示诚信于嘉，吉祥。',
    },
    6: {
      text: '拘系之，乃从维之，王用亨于西山',
      interpretation:
        '上六：拘系之，乃从维之，王用亨于西山。表示拘系之，乃从维之，王用亨于西山。',
    },
  },

  // 第18卦：蛊
  蛊: {
    1: {
      text: '干父之蛊，有子，考无咎，厉终吉',
      interpretation:
        '初六：干父之蛊，有子，考无咎，厉终吉。表示干父之蛊，有子，考无咎，厉终吉。',
    },
    2: {
      text: '干母之蛊，不可贞',
      interpretation: '九二：干母之蛊，不可贞。表示干母之蛊，不可坚持。',
    },
    3: {
      text: '干父之蛊，小有悔，无大咎',
      interpretation:
        '九三：干父之蛊，小有悔，无大咎。表示干父之蛊，小有后悔，无大过失。',
    },
    4: {
      text: '裕父之蛊，往见吝',
      interpretation: '六四：裕父之蛊，往见吝。表示裕父之蛊，前往见困难。',
    },
    5: {
      text: '干父之蛊，用誉',
      interpretation: '六五：干父之蛊，用誉。表示干父之蛊，用誉。',
    },
    6: {
      text: '不事王侯，高尚其事',
      interpretation: '上九：不事王侯，高尚其事。表示不事王侯，高尚其事。',
    },
  },

  // 第19卦：临
  临: {
    1: {
      text: '咸临，贞吉',
      interpretation: '初九：咸临，贞吉。表示咸临，坚持吉祥。',
    },
    2: {
      text: '咸临，吉，无不利',
      interpretation: '九二：咸临，吉，无不利。表示咸临，吉祥，没有不利。',
    },
    3: {
      text: '甘临，无攸利，既忧之，无咎',
      interpretation:
        '六三：甘临，无攸利，既忧之，无咎。表示甘临，无攸利，既忧之，无咎。',
    },
    4: {
      text: '至临，无咎',
      interpretation: '六四：至临，无咎。表示至临，无咎。',
    },
    5: {
      text: '知临，大君之宜，吉',
      interpretation: '六五：知临，大君之宜，吉。表示知临，大君之宜，吉祥。',
    },
    6: {
      text: '敦临，吉，无咎',
      interpretation: '上六：敦临，吉，无咎。表示敦临，吉祥，无咎。',
    },
  },

  // 第20卦：观
  观: {
    1: {
      text: '童观，小人无咎，君子吝',
      interpretation:
        '初六：童观，小人无咎，君子吝。表示童观，小人无咎，君子吝。',
    },
    2: {
      text: '窥观，利女贞',
      interpretation: '六二：窥观，利女贞。表示窥观，利女坚持。',
    },
    3: {
      text: '观我生，进退',
      interpretation: '六三：观我生，进退。表示观我生，进退。',
    },
    4: {
      text: '观国之光，利用宾于王',
      interpretation: '六四：观国之光，利用宾于王。表示观国之光，利用宾于王。',
    },
    5: {
      text: '观我生，君子无咎',
      interpretation: '九五：观我生，君子无咎。表示观我生，君子无咎。',
    },
    6: {
      text: '观其生，君子无咎',
      interpretation: '上九：观其生，君子无咎。表示观其生，君子无咎。',
    },
  },

  // 第21卦：噬嗑
  噬嗑: {
    1: {
      text: '屦校灭趾，无咎',
      interpretation: '初九：屦校灭趾，无咎。表示屦校灭趾，无咎。',
    },
    2: {
      text: '噬肤灭鼻，无咎',
      interpretation: '六二：噬肤灭鼻，无咎。表示噬肤灭鼻，无咎。',
    },
    3: {
      text: '噬腊肉，遇毒，小吝，无咎',
      interpretation:
        '六三：噬腊肉，遇毒，小吝，无咎。表示噬腊肉，遇毒，小吝，无咎。',
    },
    4: {
      text: '噬干胏，得金矢，利艰贞，吉',
      interpretation:
        '九四：噬干胏，得金矢，利艰贞，吉。表示噬干胏，得金矢，利艰坚持，吉祥。',
    },
    5: {
      text: '噬干肉，得黄金，贞厉，无咎',
      interpretation:
        '六五：噬干肉，得黄金，贞厉，无咎。表示噬干肉，得黄金，坚持危险，无咎。',
    },
    6: {
      text: '何校灭耳，凶',
      interpretation: '上九：何校灭耳，凶。表示何校灭耳，凶险。',
    },
  },

  // 第22卦：贲
  贲: {
    1: {
      text: '贲其趾，舍车而徒',
      interpretation: '初九：贲其趾，舍车而徒。表示贲其趾，舍车而徒。',
    },
    2: {
      text: '贲其须',
      interpretation: '六二：贲其须。表示贲其须。',
    },
    3: {
      text: '贲如濡如，永贞吉',
      interpretation: '九三：贲如濡如，永贞吉。表示贲如濡如，永坚持吉祥。',
    },
    4: {
      text: '贲如皤如，白马翰如，匪寇婚媾',
      interpretation:
        '六四：贲如皤如，白马翰如，匪寇婚媾。表示贲如皤如，白马翰如，匪寇婚媾。',
    },
    5: {
      text: '贲于丘园，束帛戋戋，吝，终吉',
      interpretation:
        '六五：贲于丘园，束帛戋戋，吝，终吉。表示贲于丘园，束帛戋戋，吝，终吉。',
    },
    6: {
      text: '白贲，无咎',
      interpretation: '上九：白贲，无咎。表示白贲，无咎。',
    },
  },

  // 第23卦：剥
  剥: {
    1: {
      text: '剥床以足，蔑贞，凶',
      interpretation: '初六：剥床以足，蔑贞，凶。表示剥床以足，蔑坚持，凶险。',
    },
    2: {
      text: '剥床以辨，蔑贞，凶',
      interpretation: '六二：剥床以辨，蔑贞，凶。表示剥床以辨，蔑坚持，凶险。',
    },
    3: {
      text: '剥之，无咎',
      interpretation: '六三：剥之，无咎。表示剥之，无咎。',
    },
    4: {
      text: '剥床以肤，凶',
      interpretation: '六四：剥床以肤，凶。表示剥床以肤，凶险。',
    },
    5: {
      text: '贯鱼，以宫人宠，无不利',
      interpretation:
        '六五：贯鱼，以宫人宠，无不利。表示贯鱼，以宫人宠，无不利。',
    },
    6: {
      text: '硕果不食，君子得舆，小人剥庐',
      interpretation:
        '上九：硕果不食，君子得舆，小人剥庐。表示硕果不食，君子得舆，小人剥庐。',
    },
  },

  // 第24卦：复
  复: {
    1: {
      text: '不远复，无祗悔，元吉',
      interpretation: '初九：不远复，无祗悔，元吉。表示不远复，无祗悔，元吉。',
    },
    2: {
      text: '休复，吉',
      interpretation: '六二：休复，吉。表示休复，吉祥。',
    },
    3: {
      text: '频复，厉，无咎',
      interpretation: '六三：频复，厉，无咎。表示频复，厉，无咎。',
    },
    4: {
      text: '中行独复',
      interpretation: '六四：中行独复。表示中行独复。',
    },
    5: {
      text: '敦复，无悔',
      interpretation: '六五：敦复，无悔。表示敦复，无悔。',
    },
    6: {
      text: '迷复，凶，有灾眚，用行师，终有大败，以其国君，凶，至于十年，不克征',
      interpretation:
        '上六：迷复，凶，有灾眚，用行师，终有大败，以其国君，凶，至于十年，不克征。表示迷复，凶，有灾眚，用行师，终有大败，以其国君，凶，至于十年，不克征。',
    },
  },

  // 第25卦：无妄
  无妄: {
    1: {
      text: '无妄，往吉',
      interpretation: '初九：无妄，往吉。表示无妄，前往吉祥。',
    },
    2: {
      text: '不耕获，不菑畬，则利有攸往',
      interpretation:
        '六二：不耕获，不菑畬，则利有攸往。表示不耕获，不菑畬，则利有攸往。',
    },
    3: {
      text: '无妄之灾，或系之牛，行人之得，邑人之灾',
      interpretation:
        '六三：无妄之灾，或系之牛，行人之得，邑人之灾。表示无妄之灾，或系之牛，行人之得，邑人之灾。',
    },
    4: {
      text: '可贞，无咎',
      interpretation: '九四：可贞，无咎。表示可坚持，无咎。',
    },
    5: {
      text: '无妄之疾，勿药有喜',
      interpretation: '九五：无妄之疾，勿药有喜。表示无妄之疾，勿药有喜。',
    },
    6: {
      text: '无妄，行有眚，无攸利',
      interpretation: '上九：无妄，行有眚，无攸利。表示无妄，行有眚，无攸利。',
    },
  },

  // 第26卦：大畜
  大畜: {
    1: {
      text: '有厉，利已',
      interpretation: '初九：有厉，利已。表示有厉，利已。',
    },
    2: {
      text: '舆说辐',
      interpretation: '九二：舆说辐。表示舆说辐。',
    },
    3: {
      text: '良马逐，利艰贞，曰闲舆卫，利有攸往',
      interpretation:
        '九三：良马逐，利艰贞，曰闲舆卫，利有攸往。表示良马逐，利艰坚持，曰闲舆卫，利有攸往。',
    },
    4: {
      text: '童牛之牿，元吉',
      interpretation: '六四：童牛之牿，元吉。表示童牛之牿，元吉。',
    },
    5: {
      text: '豮豕之牙，吉',
      interpretation: '六五：豮豕之牙，吉。表示豮豕之牙，吉祥。',
    },
    6: {
      text: '何天之衢，亨',
      interpretation: '上九：何天之衢，亨。表示何天之衢，亨通。',
    },
  },

  // 第27卦：颐
  颐: {
    1: {
      text: '舍尔灵龟，观我朵颐，凶',
      interpretation:
        '初九：舍尔灵龟，观我朵颐，凶。表示舍尔灵龟，观我朵颐，凶险。',
    },
    2: {
      text: '颠颐，拂经，于丘颐，征凶',
      interpretation:
        '六二：颠颐，拂经，于丘颐，征凶。表示颠颐，拂经，于丘颐，征凶。',
    },
    3: {
      text: '拂颐，贞凶，十年勿用，无攸利',
      interpretation:
        '六三：拂颐，贞凶，十年勿用，无攸利。表示拂颐，坚持凶险，十年勿用，无攸利。',
    },
    4: {
      text: '颠颐，吉，虎视眈眈，其欲逐逐，无咎',
      interpretation:
        '六四：颠颐，吉，虎视眈眈，其欲逐逐，无咎。表示颠颐，吉祥，虎视眈眈，其欲逐逐，无咎。',
    },
    5: {
      text: '拂经，居贞吉，不可涉大川',
      interpretation:
        '六五：拂经，居贞吉，不可涉大川。表示拂经，居坚持吉祥，不可涉大川。',
    },
    6: {
      text: '由颐，厉吉，利涉大川',
      interpretation: '上九：由颐，厉吉，利涉大川。表示由颐，厉吉，利涉大川。',
    },
  },

  // 第28卦：大过
  大过: {
    1: {
      text: '藉用白茅，无咎',
      interpretation: '初六：藉用白茅，无咎。表示藉用白茅，无咎。',
    },
    2: {
      text: '枯杨生稊，老夫得其女妻，无不利',
      interpretation:
        '九二：枯杨生稊，老夫得其女妻，无不利。表示枯杨生稊，老夫得其女妻，无不利。',
    },
    3: {
      text: '栋桡，凶',
      interpretation: '九三：栋桡，凶。表示栋桡，凶险。',
    },
    4: {
      text: '栋隆，吉，有它吝',
      interpretation: '九四：栋隆，吉，有它吝。表示栋隆，吉祥，有它吝。',
    },
    5: {
      text: '枯杨生华，老妇得其士夫，无咎无誉',
      interpretation:
        '九五：枯杨生华，老妇得其士夫，无咎无誉。表示枯杨生华，老妇得其士夫，无咎无誉。',
    },
    6: {
      text: '过涉灭顶，凶，无咎',
      interpretation: '上六：过涉灭顶，凶，无咎。表示过涉灭顶，凶险，无咎。',
    },
  },

  // 第29卦：坎
  水: {
    1: {
      text: '习坎，入于坎窞，凶',
      interpretation: '初六：习坎，入于坎窞，凶。表示习坎，入于坎窞，凶险。',
    },
    2: {
      text: '坎有险，求小得',
      interpretation: '九二：坎有险，求小得。表示坎有险，求小得。',
    },
    3: {
      text: '来之坎坎，险且枕，入于坎窞，勿用',
      interpretation:
        '六三：来之坎坎，险且枕，入于坎窞，勿用。表示来之坎坎，险且枕，入于坎窞，勿用。',
    },
    4: {
      text: '樽酒簋贰，用缶，纳约自牖，终无咎',
      interpretation:
        '六四：樽酒簋贰，用缶，纳约自牖，终无咎。表示樽酒簋贰，用缶，纳约自牖，终无咎。',
    },
    5: {
      text: '坎不盈，祗既平，无咎',
      interpretation: '九五：坎不盈，祗既平，无咎。表示坎不盈，祗既平，无咎。',
    },
    6: {
      text: '系用徽纆，寘于丛棘，三岁不得，凶',
      interpretation:
        '上六：系用徽纆，寘于丛棘，三岁不得，凶。表示系用徽纆，寘于丛棘，三岁不得，凶险。',
    },
  },

  // 第30卦：离
  火: {
    1: {
      text: '履错然，敬之，无咎',
      interpretation: '初九：履错然，敬之，无咎。表示履错然，敬之，无咎。',
    },
    2: {
      text: '黄离，元吉',
      interpretation: '六二：黄离，元吉。表示黄离，元吉。',
    },
    3: {
      text: '日昃之离，不鼓缶而歌，则大耋之嗟，凶',
      interpretation:
        '九三：日昃之离，不鼓缶而歌，则大耋之嗟，凶。表示日昃之离，不鼓缶而歌，则大耋之嗟，凶险。',
    },
    4: {
      text: '突如其来如，焚如，死如，弃如',
      interpretation:
        '九四：突如其来如，焚如，死如，弃如。表示突如其来如，焚如，死如，弃如。',
    },
    5: {
      text: '出涕沱若，戚嗟若，吉',
      interpretation:
        '六五：出涕沱若，戚嗟若，吉。表示出涕沱若，戚嗟若，吉祥。',
    },
    6: {
      text: '王用出征，有嘉折首，获匪其丑，无咎',
      interpretation:
        '上九：王用出征，有嘉折首，获匪其丑，无咎。表示王用出征，有嘉折首，获匪其丑，无咎。',
    },
  },

  // 第31卦：咸
  咸: {
    1: {
      text: '咸其拇',
      interpretation: '初六：咸其拇。表示咸其拇。',
    },
    2: {
      text: '咸其腓，凶，居吉',
      interpretation: '六二：咸其腓，凶，居吉。表示咸其腓，凶险，居吉祥。',
    },
    3: {
      text: '咸其股，执其随，往吝',
      interpretation: '九三：咸其股，执其随，往吝。表示咸其股，执其随，往吝。',
    },
    4: {
      text: '贞吉，悔亡，憧憧往来，朋从尔思',
      interpretation:
        '九四：贞吉，悔亡，憧憧往来，朋从尔思。表示坚持吉祥，悔亡，憧憧往来，朋从尔思。',
    },
    5: {
      text: '咸其脢，无悔',
      interpretation: '九五：咸其脢，无悔。表示咸其脢，无悔。',
    },
    6: {
      text: '咸其辅颊舌',
      interpretation: '上六：咸其辅颊舌。表示咸其辅颊舌。',
    },
  },

  // 第32卦：恒
  恒: {
    1: {
      text: '浚恒，贞凶，无攸利',
      interpretation: '初六：浚恒，贞凶，无攸利。表示浚恒，坚持凶险，无攸利。',
    },
    2: {
      text: '悔亡',
      interpretation: '九二：悔亡。表示悔亡。',
    },
    3: {
      text: '不恒其德，或承之羞，贞吝',
      interpretation:
        '九三：不恒其德，或承之羞，贞吝。表示不恒其德，或承之羞，坚持吝。',
    },
    4: {
      text: '田无禽',
      interpretation: '九四：田无禽。表示田无禽。',
    },
    5: {
      text: '恒其德，贞，妇人吉，夫子凶',
      interpretation:
        '六五：恒其德，贞，妇人吉，夫子凶。表示恒其德，坚持，妇人吉祥，夫子凶险。',
    },
    6: {
      text: '振恒，凶',
      interpretation: '上六：振恒，凶。表示振恒，凶险。',
    },
  },

  // 第33卦：遁
  遁: {
    1: {
      text: '遁尾，厉，勿用有攸往',
      interpretation:
        '初六：遁尾，厉，勿用有攸往。表示退避之尾，危险，不要有所行动。',
    },
    2: {
      text: '执之用黄牛之革，莫之胜说',
      interpretation:
        '六二：执之用黄牛之革，莫之胜说。表示用黄牛皮束缚，没有人能够脱逃。',
    },
    3: {
      text: '系遁，有疾厉，畜臣妾，吉',
      interpretation:
        '九三：系遁，有疾厉，畜臣妾，吉。表示被牵制的退避，有疾病危险，畜养臣妾，吉祥。',
    },
    4: {
      text: '好遁，君子吉，小人否',
      interpretation:
        '九四：好遁，君子吉，小人否。表示善于退避，君子吉祥，小人不利。',
    },
    5: {
      text: '嘉遁，贞吉',
      interpretation: '九五：嘉遁，贞吉。表示美好的退避，坚持吉祥。',
    },
    6: {
      text: '肥遁，无不利',
      interpretation: '上九：肥遁，无不利。表示丰裕的退避，没有不利。',
    },
  },

  // 第34卦：大壮
  大壮: {
    1: {
      text: '壮于趾，征凶，有孚',
      interpretation:
        '初九：壮于趾，征凶，有孚。表示强壮于脚趾，征伐凶险，有诚信。',
    },
    2: {
      text: '贞吉',
      interpretation: '九二：贞吉。表示坚持正道吉祥。',
    },
    3: {
      text: '小人用壮，君子用罔，贞厉，羝羊触藩，羸其角',
      interpretation:
        '九三：小人用壮，君子用罔，贞厉，羝羊触藩，羸其角。表示小人用强，君子用网，坚持危险，公羊撞篱笆，损伤其角。',
    },
    4: {
      text: '贞吉，悔亡，藩决不羸，壮于大舆之辐',
      interpretation:
        '九四：贞吉，悔亡，藩决不羸，壮于大舆之辐。表示坚持吉祥，悔恨消失，篱笆冲决不受损，强壮于大车的辐条。',
    },
    5: {
      text: '丧羊于易，无悔',
      interpretation: '六五：丧羊于易，无悔。表示在易地失去羊，无悔恨。',
    },
    6: {
      text: '羝羊触藩，不能退，不能遂，无攸利，艰则吉',
      interpretation:
        '上六：羝羊触藩，不能退，不能遂，无攸利，艰则吉。表示公羊撞篱笆，不能退，不能进，没有利益，艰难则吉祥。',
    },
  },

  // 第35卦：晋
  晋: {
    1: {
      text: '晋如摧如，贞吉，罔孚，裕无咎',
      interpretation:
        '初六：晋如摧如，贞吉，罔孚，裕无咎。表示前进如摧毁般，坚持吉祥，没有诚信，宽裕无过失。',
    },
    2: {
      text: '晋如愁如，贞吉，受兹介福，于其王母',
      interpretation:
        '六二：晋如愁如，贞吉，受兹介福，于其王母。表示前进如忧愁般，坚持吉祥，接受这大福，在其王母处。',
    },
    3: {
      text: '众允，悔亡',
      interpretation: '六三：众允，悔亡。表示众人信任，悔恨消失。',
    },
    4: {
      text: '晋如鼫鼠，贞厉',
      interpretation: '九四：晋如鼫鼠，贞厉。表示前进如老鼠，坚持危险。',
    },
    5: {
      text: '悔亡，失得勿恤，往吉，无不利',
      interpretation:
        '六五：悔亡，失得勿恤，往吉，无不利。表示悔恨消失，得失不用忧虑，前往吉祥，没有不利。',
    },
    6: {
      text: '晋其角，维用伐邑，厉吉，无咎，贞吝',
      interpretation:
        '上九：晋其角，维用伐邑，厉吉，无咎，贞吝。表示前进其角，只用来攻伐城邑，危险而吉祥，无过失，坚持困难。',
    },
  },

  // 第36卦：明夷
  明夷: {
    1: {
      text: '明夷于飞，垂其翼，君子于行，三日不食，有攸往，主人有言',
      interpretation:
        '初九：明夷于飞，垂其翼，君子于行，三日不食，有攸往，主人有言。表示光明受伤于飞行，垂下翅膀，君子在行路，三日不进食，有所前往，主人有话说。',
    },
    2: {
      text: '明夷，夷于左股，用拯马壮，吉',
      interpretation:
        '六二：明夷，夷于左股，用拯马壮，吉。表示光明受伤，伤于左腿，用拯救的马强壮，吉祥。',
    },
    3: {
      text: '明夷于南狩，得其大首，不可疾贞',
      interpretation:
        '九三：明夷于南狩，得其大首，不可疾贞。表示光明受伤于南方狩猎，得到其首领，不可急于坚持。',
    },
    4: {
      text: '入于左腹，获明夷之心，于出门庭',
      interpretation:
        '六四：入于左腹，获明夷之心，于出门庭。表示进入左腹，获得光明受伤的心，在出门庭时。',
    },
    5: {
      text: '箕子之明夷，利贞',
      interpretation: '六五：箕子之明夷，利贞。表示箕子的光明受伤，利于坚持。',
    },
    6: {
      text: '不明晦，初登于天，后入于地',
      interpretation:
        '上六：不明晦，初登于天，后入于地。表示不明昏暗，初时登上天，后来进入地。',
    },
  },

  // 第37卦：家人
  家人: {
    1: {
      text: '闲有家，悔亡',
      interpretation: '初九：闲有家，悔亡。表示治理有家，悔恨消失。',
    },
    2: {
      text: '无攸遂，在中馈，贞吉',
      interpretation:
        '六二：无攸遂，在中馈，贞吉。表示没有什么可成就，在内室供养，坚持吉祥。',
    },
    3: {
      text: '家人嗃嗃，悔厉，吉，妇子嘻嘻，终吝',
      interpretation:
        '九三：家人嗃嗃，悔厉，吉，妇子嘻嘻，终吝。表示家人严厉，悔恨危险，吉祥，妇女儿童嬉笑，最终困难。',
    },
    4: {
      text: '富家，大吉',
      interpretation: '六四：富家，大吉。表示富有的家庭，大吉。',
    },
    5: {
      text: '王假有家，勿恤，吉',
      interpretation:
        '九五：王假有家，勿恤，吉。表示王到达有家，不用忧虑，吉祥。',
    },
    6: {
      text: '有孚威如，终吉',
      interpretation: '上九：有孚威如，终吉。表示有诚信威严，最终吉祥。',
    },
  },

  // 第38卦：睽
  睽: {
    1: {
      text: '悔亡，丧马勿逐，自复，见恶人，无咎',
      interpretation:
        '初九：悔亡，丧马勿逐，自复，见恶人，无咎。表示悔恨消失，丢失马不要追，自然返回，见到恶人，无过失。',
    },
    2: {
      text: '遇主于巷，无咎',
      interpretation: '九二：遇主于巷，无咎。表示在巷子里遇到主人，无过失。',
    },
    3: {
      text: '见舆曳，其牛掣，其人天且劓，无初有终',
      interpretation:
        '六三：见舆曳，其牛掣，其人天且劓，无初有终。表示看见车被拖拽，牛被牵制，人被割鼻，无始有终。',
    },
    4: {
      text: '睽孤，遇元夫，交孚，厉无咎',
      interpretation:
        '九四：睽孤，遇元夫，交孚，厉无咎。表示背离孤独，遇到善人，交往诚信，危险无过失。',
    },
    5: {
      text: '悔亡，厥宗噬肤，往何咎',
      interpretation:
        '六五：悔亡，厥宗噬肤，往何咎。表示悔恨消失，其宗族咬肌肤，前往有何过失。',
    },
    6: {
      text: '睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉',
      interpretation:
        '上九：睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。表示背离孤独，看见猪背着泥，载着鬼一车，先张弓，后放弓，不是盗贼而是婚配，前往遇雨则吉祥。',
    },
  },

  // 第39卦：蹇
  蹇: {
    1: {
      text: '往蹇，来誉',
      interpretation: '初六：往蹇，来誉。表示前往困难，回来有赞誉。',
    },
    2: {
      text: '王臣蹇蹇，匪躬之故',
      interpretation:
        '六二：王臣蹇蹇，匪躬之故。表示王的臣子困难重重，不是为了自己的缘故。',
    },
    3: {
      text: '往蹇，来反',
      interpretation: '九三：往蹇，来反。表示前往困难，回来反省。',
    },
    4: {
      text: '往蹇，来连',
      interpretation: '六四：往蹇，来连。表示前往困难，回来联合。',
    },
    5: {
      text: '大蹇，朋来',
      interpretation: '九五：大蹇，朋来。表示大的困难，朋友前来。',
    },
    6: {
      text: '往蹇，来硕，吉，利见大人',
      interpretation:
        '上六：往蹇，来硕，吉，利见大人。表示前往困难，回来丰硕，吉祥，利于见大人。',
    },
  },

  // 第40卦：解
  解: {
    1: {
      text: '无咎',
      interpretation: '初六：无咎。表示无过失。',
    },
    2: {
      text: '田获三狐，得黄矢，贞吉',
      interpretation:
        '九二：田获三狐，得黄矢，贞吉。表示打猎获得三只狐狸，得到黄色箭矢，坚持吉祥。',
    },
    3: {
      text: '负且乘，致寇至，贞吝',
      interpretation:
        '六三：负且乘，致寇至，贞吝。表示背负且乘坐，招致盗贼到来，坚持困难。',
    },
    4: {
      text: '解而拇，朋至斯孚',
      interpretation:
        '九四：解而拇，朋至斯孚。表示解除脚拇指，朋友到达这里诚信。',
    },
    5: {
      text: '君子维有解，吉，有孚于小人',
      interpretation:
        '六五：君子维有解，吉，有孚于小人。表示君子只有解脱，吉祥，对小人有诚信。',
    },
    6: {
      text: '公用射隼于高墉之上，获之，无不利',
      interpretation:
        '上六：公用射隼于高墉之上，获之，无不利。表示公侯用箭射高墙上的隼，射中了，没有不利。',
    },
  },

  // 第41卦：损
  损: {
    1: {
      text: '已事遄往，无咎，酌损之',
      interpretation:
        '初九：已事遄往，无咎，酌损之。表示事情完成迅速前往，无过失，酌情减损。',
    },
    2: {
      text: '利贞，征凶，弗损益之',
      interpretation:
        '九二：利贞，征凶，弗损益之。表示利于坚持，征伐凶险，不减损反而增益。',
    },
    3: {
      text: '三人行，则损一人，一人行，则得其友',
      interpretation:
        '六三：三人行，则损一人，一人行，则得其友。表示三人同行，则减损一人，一人独行，则得到朋友。',
    },
    4: {
      text: '损其疾，使遄有喜，无咎',
      interpretation:
        '六四：损其疾，使遄有喜，无咎。表示减损疾病，使迅速有喜悦，无过失。',
    },
    5: {
      text: '或益之十朋之龟，弗克违，元吉',
      interpretation:
        '六五：或益之十朋之龟，弗克违，元吉。表示或许用十朋龟来增益，不能违背，大吉。',
    },
    6: {
      text: '弗损益之，无咎，贞吉，利有攸往，得臣无家',
      interpretation:
        '上九：弗损益之，无咎，贞吉，利有攸往，得臣无家。表示不减损反而增益，无过失，坚持吉祥，利于有所前往，得到臣子没有家。',
    },
  },

  // 第42卦：益
  益: {
    1: {
      text: '利用为大作，元吉，无咎',
      interpretation:
        '初九：利用为大作，元吉，无咎。表示利于用来做大事，大吉，无过失。',
    },
    2: {
      text: '或益之十朋之龟，弗克违，永贞吉，王用享于帝，吉',
      interpretation:
        '六二：或益之十朋之龟，弗克违，永贞吉，王用享于帝，吉。表示或许用十朋龟来增益，不能违背，永远坚持吉祥，王用来享祭于帝，吉祥。',
    },
    3: {
      text: '益之用凶事，无咎，有孚中行，告公用圭',
      interpretation:
        '六三：益之用凶事，无咎，有孚中行，告公用圭。表示增益用于凶事，无过失，有诚信中正而行，告诉公侯用圭。',
    },
    4: {
      text: '中行，告公从，利用为依迁国',
      interpretation:
        '六四：中行，告公从，利用为依迁国。表示中正而行，告诉公侯跟从，利于用来依靠迁移国家。',
    },
    5: {
      text: '有孚惠心，勿问元吉，有孚惠我德',
      interpretation:
        '九五：有孚惠心，勿问元吉，有孚惠我德。表示有诚信仁惠之心，不用问大吉，有诚信仁惠我的德行。',
    },
    6: {
      text: '莫益之，或击之，立心勿恒，凶',
      interpretation:
        '上九：莫益之，或击之，立心勿恒，凶。表示没有增益，或许攻击，立心不恒久，凶险。',
    },
  },

  // 第43卦：夬
  夬: {
    1: {
      text: '壮于前趾，往不胜为咎',
      interpretation:
        '初九：壮于前趾，往不胜为咎。表示强壮于前脚趾，前往不能胜利为过失。',
    },
    2: {
      text: '惕号，莫夜有戎，勿恤',
      interpretation:
        '九二：惕号，莫夜有戎，勿恤。表示恐惧呼号，夜晚没有战争，不用忧虑。',
    },
    3: {
      text: '壮于頄，有凶，君子夬夬，独行遇雨，若濡有愠，无咎',
      interpretation:
        '九三：壮于頄，有凶，君子夬夬，独行遇雨，若濡有愠，无咎。表示强壮于面颊，有凶险，君子决断果决，独行遇雨，如被淋湿而恼怒，无过失。',
    },
    4: {
      text: '臀无肤，其行次且，牵羊悔亡，闻言不信',
      interpretation:
        '九四：臀无肤，其行次且，牵羊悔亡，闻言不信。表示臀部无肌肤，行走艰难，牵羊悔恨消失，听到话不相信。',
    },
    5: {
      text: '苋陆夬夬，中行无咎',
      interpretation:
        '九五：苋陆夬夬，中行无咎。表示苋菜陆地决断果决，中正而行无过失。',
    },
    6: {
      text: '无号，终有凶',
      interpretation: '上六：无号，终有凶。表示无呼号，最终有凶险。',
    },
  },

  // 第44卦：姤
  姤: {
    1: {
      text: '系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅',
      interpretation:
        '初六：系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅。表示系于金制车轮挡，坚持吉祥，有所前往，见到凶险，瘦猪诚实地踯躅不前。',
    },
    2: {
      text: '包有鱼，无咎，不利宾',
      interpretation:
        '九二：包有鱼，无咎，不利宾。表示包中有鱼，无过失，不利于客人。',
    },
    3: {
      text: '臀无肤，其行次且，厉，无大咎',
      interpretation:
        '九三：臀无肤，其行次且，厉，无大咎。表示臀部无肌肤，行走艰难，危险，无大过失。',
    },
    4: {
      text: '包无鱼，起凶',
      interpretation: '九四：包无鱼，起凶。表示包中无鱼，引起凶险。',
    },
    5: {
      text: '以杞包瓜，含章，有陨自天',
      interpretation:
        '九五：以杞包瓜，含章，有陨自天。表示用杞树叶包瓜，含有美好的文章，有东西从天上掉下。',
    },
    6: {
      text: '姤其角，吝，无咎',
      interpretation: '上九：姤其角，吝，无咎。表示遇合其角，困难，无过失。',
    },
  },

  // 第45卦：萃
  萃: {
    1: {
      text: '有孚不终，乃乱乃萃，若号，一握为笑，勿恤，往无咎',
      interpretation:
        '初六：有孚不终，乃乱乃萃，若号，一握为笑，勿恤，往无咎。表示有诚信不能到底，于是混乱于是聚集，如果呼号，一握手就笑了，不用忧虑，前往无过失。',
    },
    2: {
      text: '引吉，无咎，孚乃利用禴',
      interpretation:
        '六二：引吉，无咎，孚乃利用禴。表示引导吉祥，无过失，诚信于是利于用薄祭。',
    },
    3: {
      text: '萃如嗟如，无攸利，往无咎，小吝',
      interpretation:
        '六三：萃如嗟如，无攸利，往无咎，小吝。表示聚集如叹息般，没有利益，前往无过失，小困难。',
    },
    4: {
      text: '大吉，无咎',
      interpretation: '九四：大吉，无咎。表示大吉，无过失。',
    },
    5: {
      text: '萃有位，无咎，匪孚，元永贞，悔亡',
      interpretation:
        '九五：萃有位，无咎，匪孚，元永贞，悔亡。表示聚集有地位，无过失，不是诚信，大永远坚持，悔恨消失。',
    },
    6: {
      text: '齎咨涕洟，无咎',
      interpretation: '上六：齎咨涕洟，无咎。表示赍咨涕泣，无过失。',
    },
  },

  // 第46卦：升
  升: {
    1: {
      text: '允升，大吉',
      interpretation: '初六：允升，大吉。表示信实上升，大吉。',
    },
    2: {
      text: '孚乃利用禴，无咎',
      interpretation:
        '九二：孚乃利用禴，无咎。表示诚信于是利于用薄祭，无过失。',
    },
    3: {
      text: '升虚邑',
      interpretation: '九三：升虚邑。表示上升到空虚的城邑。',
    },
    4: {
      text: '王用亨于岐山，吉，无咎',
      interpretation:
        '六四：王用亨于岐山，吉，无咎。表示王用来祭祀于岐山，吉祥，无过失。',
    },
    5: {
      text: '贞吉，升阶',
      interpretation: '六五：贞吉，升阶。表示坚持吉祥，上升台阶。',
    },
    6: {
      text: '冥升，利于不息之贞',
      interpretation:
        '上六：冥升，利于不息之贞。表示昏暗中上升，利于不停息的坚持。',
    },
  },

  // 第47卦：困
  困: {
    1: {
      text: '臀困于株木，入于幽谷，三岁不觌',
      interpretation:
        '初六：臀困于株木，入于幽谷，三岁不觌。表示臀部困于树桩，进入幽深山谷，三年不相见。',
    },
    2: {
      text: '困于酒食，朱绂方来，利用亨祀，征凶，无咎',
      interpretation:
        '九二：困于酒食，朱绂方来，利用亨祀，征凶，无咎。表示困于酒食，红色蔽膝正在来，利于用来享祀，征伐凶险，无过失。',
    },
    3: {
      text: '困于石，据于蒺藜，入于其宫，不见其妻，凶',
      interpretation:
        '六三：困于石，据于蒺藜，入于其宫，不见其妻，凶。表示困于石头，靠着蒺藜，进入他的宫室，不见他的妻子，凶险。',
    },
    4: {
      text: '来徐徐，困于金车，吝，有终',
      interpretation:
        '九四：来徐徐，困于金车，吝，有终。表示来得缓慢，困于金车，困难，有结果。',
    },
    5: {
      text: '劓刖，困于赤绂，乃徐有说，利用祭祀',
      interpretation:
        '九五：劓刖，困于赤绂，乃徐有说，利用祭祀。表示割鼻断足，困于红色蔽膝，于是缓慢有解脱，利于用来祭祀。',
    },
    6: {
      text: '困于葛藟，于臲卼，曰动悔，有悔，征吉',
      interpretation:
        '上六：困于葛藟，于臲卼，曰动悔，有悔，征吉。表示困于葛藤，在危险中，说行动后悔，有悔恨，征伐吉祥。',
    },
  },

  // 第48卦：井
  井: {
    1: {
      text: '井泥不食，旧井无禽',
      interpretation:
        '初六：井泥不食，旧井无禽。表示井水混浊不能饮用，旧井没有禽鸟。',
    },
    2: {
      text: '井谷射鲋，瓮敝漏',
      interpretation: '九二：井谷射鲋，瓮敝漏。表示井底射小鱼，水瓮破损漏水。',
    },
    3: {
      text: '井渫不食，为我心恻，可用汲，王明，并受其福',
      interpretation:
        '九三：井渫不食，为我心恻，可用汲，王明，并受其福。表示井水清澈不被饮用，让我心中悲伤，可以用来汲水，王明智，一起受到福泽。',
    },
    4: {
      text: '井甃，无咎',
      interpretation: '六四：井甃，无咎。表示用砖石修井，无过失。',
    },
    5: {
      text: '井洌，寒泉食',
      interpretation: '九五：井洌，寒泉食。表示井水清冽，寒泉可饮。',
    },
    6: {
      text: '井收勿幕，有孚元吉',
      interpretation:
        '上六：井收勿幕，有孚元吉。表示井水汲取不要遮盖，有诚信大吉。',
    },
  },

  // 第49卦：革
  革: {
    1: {
      text: '巩用黄牛之革',
      interpretation: '初九：巩用黄牛之革。表示巩固用黄牛之皮革。',
    },
    2: {
      text: '巳日乃革之，征吉，无咎',
      interpretation:
        '六二：巳日乃革之，征吉，无咎。表示巳日才变革它，征伐吉祥，无过失。',
    },
    3: {
      text: '征凶，贞厉，革言三就，有孚',
      interpretation:
        '九三：征凶，贞厉，革言三就，有孚。表示征伐凶险，坚持危险，变革之言三次才成就，有诚信。',
    },
    4: {
      text: '悔亡，有孚改命，吉',
      interpretation:
        '九四：悔亡，有孚改命，吉。表示悔恨消失，有诚信改变命运，吉祥。',
    },
    5: {
      text: '大人虎变，未占有孚',
      interpretation:
        '九五：大人虎变，未占有孚。表示大人像老虎般变化，未占卜已有诚信。',
    },
    6: {
      text: '君子豹变，小人革面，征凶，居贞吉',
      interpretation:
        '上六：君子豹变，小人革面，征凶，居贞吉。表示君子像豹子般变化，小人改变面貌，征伐凶险，居守坚持吉祥。',
    },
  },

  // 第50卦：鼎
  鼎: {
    1: {
      text: '鼎颠趾，利出否，得妾以其子，无咎',
      interpretation:
        '初六：鼎颠趾，利出否，得妾以其子，无咎。表示鼎脚颠倒，利于排出不好的，得到妾室因为其子，无过失。',
    },
    2: {
      text: '鼎有实，我仇有疾，不我能即，吉',
      interpretation:
        '九二：鼎有实，我仇有疾，不我能即，吉。表示鼎中有实物，我的仇人有疾病，不能靠近我，吉祥。',
    },
    3: {
      text: '鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉',
      interpretation:
        '九三：鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。表示鼎耳变革，其行路阻塞，雉肉膏不能食用，正逢雨天损缺悔恨，最终吉祥。',
    },
    4: {
      text: '鼎折足，覆公餗，其形渥，凶',
      interpretation:
        '九四：鼎折足，覆公餗，其形渥，凶。表示鼎脚折断，倾覆公侯的粥，其形状润湿，凶险。',
    },
    5: {
      text: '鼎黄耳金铉，利贞',
      interpretation:
        '六五：鼎黄耳金铉，利贞。表示鼎黄色耳朵金制横梁，利于坚持。',
    },
    6: {
      text: '鼎玉铉，大吉，无不利',
      interpretation:
        '上九：鼎玉铉，大吉，无不利。表示鼎玉制横梁，大吉，没有不利。',
    },
  },

  // 第51卦：震
  雷: {
    1: {
      text: '震来虩虩，后笑言哑哑，吉',
      interpretation:
        '初九：震来虩虩，后笑言哑哑，吉。表示震动来时恐惧，之后笑声连连，吉祥。',
    },
    2: {
      text: '震来厉，亿丧贝，跻于九陵，勿逐，七日得',
      interpretation:
        '六二：震来厉，亿丧贝，跻于九陵，勿逐，七日得。表示震动来时危险，千万遗失财宝，登上九重陵，不要追逐，七日得到。',
    },
    3: {
      text: '震苏苏，震行无眚',
      interpretation: '六三：震苏苏，震行无眚。表示震动苏醒，震动而行无灾祸。',
    },
    4: {
      text: '震遂泥',
      interpretation: '九四：震遂泥。表示震动陷入泥中。',
    },
    5: {
      text: '震往来厉，意无丧，有事',
      interpretation:
        '六五：震往来厉，意无丧，有事。表示震动往来危险，意志不丧失，有事情。',
    },
    6: {
      text: '震索索，视矍矍，征凶，震不于其躬，于其邻，无咎，婚媾有言',
      interpretation:
        '上六：震索索，视矍矍，征凶，震不于其躬，于其邻，无咎，婚媾有言。表示震动索索，视线惊恐，征伐凶险，震动不在自身，在其邻居，无过失，婚配有话说。',
    },
  },

  // 第52卦：艮
  山: {
    1: {
      text: '艮其趾，无咎，利永贞',
      interpretation:
        '初六：艮其趾，无咎，利永贞。表示止住脚趾，无过失，利于永远坚持。',
    },
    2: {
      text: '艮其腓，不拯其随，其心不快',
      interpretation:
        '六二：艮其腓，不拯其随，其心不快。表示止住小腿，不拯救其跟随者，其心不快乐。',
    },
    3: {
      text: '艮其限，列其夤，厉薰心',
      interpretation:
        '九三：艮其限，列其夤，厉薰心。表示止住腰部，分裂其脊梁，危险熏染心灵。',
    },
    4: {
      text: '艮其身，无咎',
      interpretation: '六四：艮其身，无咎。表示止住身体，无过失。',
    },
    5: {
      text: '艮其辅，言有序，悔亡',
      interpretation:
        '六五：艮其辅，言有序，悔亡。表示止住面颊，言语有秩序，悔恨消失。',
    },
    6: {
      text: '敦艮，吉',
      interpretation: '上九：敦艮，吉。表示厚实的停止，吉祥。',
    },
  },

  // 第53卦：渐
  渐: {
    1: {
      text: '鸿渐于干，小子厉，有言，无咎',
      interpretation:
        '初六：鸿渐于干，小子厉，有言，无咎。表示鸿雁渐进于水边，小子危险，有话说，无过失。',
    },
    2: {
      text: '鸿渐于磐，饮食衎衎，吉',
      interpretation:
        '六二：鸿渐于磐，饮食衎衎，吉。表示鸿雁渐进于大石，饮食和乐，吉祥。',
    },
    3: {
      text: '鸿渐于陆，夫征不复，妇孕不育，凶，利御寇',
      interpretation:
        '九三：鸿渐于陆，夫征不复，妇孕不育，凶，利御寇。表示鸿雁渐进于陆地，丈夫征伐不回，妇人怀孕不生育，凶险，利于抵御盗贼。',
    },
    4: {
      text: '鸿渐于木，或得其桷，无咎',
      interpretation:
        '六四：鸿渐于木，或得其桷，无咎。表示鸿雁渐进于树木，或许得到其栖息的枝条，无过失。',
    },
    5: {
      text: '鸿渐于陵，妇三岁不孕，终莫之胜，吉',
      interpretation:
        '九五：鸿渐于陵，妇三岁不孕，终莫之胜，吉。表示鸿雁渐进于山陵，妇人三年不怀孕，最终没有什么能胜过，吉祥。',
    },
    6: {
      text: '鸿渐于陆，其羽可用为仪，吉',
      interpretation:
        '上九：鸿渐于陆，其羽可用为仪，吉。表示鸿雁渐进于高地，其羽毛可用作仪式，吉祥。',
    },
  },

  // 第54卦：归妹
  归妹: {
    1: {
      text: '归妹以娣，跛能履，征吉',
      interpretation:
        '初九：归妹以娣，跛能履，征吉。表示嫁妹作为妾，跛脚能行走，征伐吉祥。',
    },
    2: {
      text: '眇能视，利幽人之贞',
      interpretation:
        '九二：眇能视，利幽人之贞。表示瞎眼能看见，利于隐居人的坚持。',
    },
    3: {
      text: '归妹以须，反归以娣',
      interpretation: '六三：归妹以须，反归以娣。表示嫁妹等待，返回来作为妾。',
    },
    4: {
      text: '归妹愆期，迟归有时',
      interpretation:
        '九四：归妹愆期，迟归有时。表示嫁妹超过期限，迟归有时候。',
    },
    5: {
      text: '帝乙归妹，其君之袂，不如其娣之袪良，月几望，吉',
      interpretation:
        '六五：帝乙归妹，其君之袂，不如其娣之袪良，月几望，吉。表示帝乙嫁妹，其君主的袖子，不如其妾的袖口好，月亮将圆，吉祥。',
    },
    6: {
      text: '女承筐无实，士刲羊无血，无攸利',
      interpretation:
        '上六：女承筐无实，士刲羊无血，无攸利。表示女子捧筐没有实物，士人宰羊没有血，没有利益。',
    },
  },

  // 第55卦：丰
  丰: {
    1: {
      text: '遇其配主，虽旬无咎，往有尚',
      interpretation:
        '初九：遇其配主，虽旬无咎，往有尚。表示遇到其配偶主人，虽然十天无过失，前往有崇尚。',
    },
    2: {
      text: '丰其蔀，日中见斗，往得疑疾，有孚发若，吉',
      interpretation:
        '六二：丰其蔀，日中见斗，往得疑疾，有孚发若，吉。表示遮蔽其光明，日中见到斗星，前往得到疑惑疾病，有诚信发出，吉祥。',
    },
    3: {
      text: '丰其沛，日中见沫，折其右肱，无咎',
      interpretation:
        '九三：丰其沛，日中见沫，折其右肱，无咎。表示丰盛其旗帜，日中见到泡沫，折断其右臂，无过失。',
    },
    4: {
      text: '丰其蔀，日中见斗，遇其夷主，吉',
      interpretation:
        '九四：丰其蔀，日中见斗，遇其夷主，吉。表示遮蔽其光明，日中见到斗星，遇到其同等主人，吉祥。',
    },
    5: {
      text: '来章，有庆誉，吉',
      interpretation:
        '六五：来章，有庆誉，吉。表示来到文章，有庆贺赞誉，吉祥。',
    },
    6: {
      text: '丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶',
      interpretation:
        '上六：丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。表示丰盛其屋子，遮蔽其家，窥视其门户，寂静无人，三年不相见，凶险。',
    },
  },

  // 第56卦：旅
  旅: {
    1: {
      text: '旅琐琐，斯其所取灾',
      interpretation:
        '初六：旅琐琐，斯其所取灾。表示旅行琐碎，这是其招取灾祸的原因。',
    },
    2: {
      text: '旅即次，怀其资，得童仆贞',
      interpretation:
        '六二：旅即次，怀其资，得童仆贞。表示旅行到达住所，怀着其资财，得到童仆坚持。',
    },
    3: {
      text: '旅焚其次，丧其童仆，贞厉',
      interpretation:
        '九三：旅焚其次，丧其童仆，贞厉。表示旅行焚烧其住所，失去其童仆，坚持危险。',
    },
    4: {
      text: '旅于处，得其资斧，我心不快',
      interpretation:
        '九四：旅于处，得其资斧，我心不快。表示旅行于住处，得到其资斧，我心不快乐。',
    },
    5: {
      text: '射雉一矢亡，终以誉命',
      interpretation:
        '六五：射雉一矢亡，终以誉命。表示射雉一箭失去，最终以赞誉得到任命。',
    },
    6: {
      text: '鸟焚其巢，旅人先笑后号咷，丧牛于易，凶',
      interpretation:
        '上九：鸟焚其巢，旅人先笑后号咷，丧牛于易，凶。表示鸟焚烧其巢穴，旅人先笑后哭，在边境失去牛，凶险。',
    },
  },

  // 第57卦：巽
  风: {
    1: {
      text: '进退，利武人之贞',
      interpretation: '初六：进退，利武人之贞。表示进退不定，利于武人的坚持。',
    },
    2: {
      text: '巽在床下，用史巫纷若，吉，无咎',
      interpretation:
        '九二：巽在床下，用史巫纷若，吉，无咎。表示谦逊在床下，用史官巫师众多，吉祥，无过失。',
    },
    3: {
      text: '频巽，吝',
      interpretation: '九三：频巽，吝。表示频繁谦逊，困难。',
    },
    4: {
      text: '悔亡，田获三品',
      interpretation: '六四：悔亡，田获三品。表示悔恨消失，打猎获得三种猎物。',
    },
    5: {
      text: '贞吉，悔亡，无不利，无初有终，先庚三日，后庚三日，吉',
      interpretation:
        '九五：贞吉，悔亡，无不利，无初有终，先庚三日，后庚三日，吉。表示坚持吉祥，悔恨消失，没有不利，无始有终，庚日前三天，庚日后三天，吉祥。',
    },
    6: {
      text: '巽在床下，丧其资斧，贞凶',
      interpretation:
        '上九：巽在床下，丧其资斧，贞凶。表示谦逊在床下，失去其资斧，坚持凶险。',
    },
  },

  // 第58卦：兑
  泽: {
    1: {
      text: '和兑，吉',
      interpretation: '初九：和兑，吉。表示和悦喜悦，吉祥。',
    },
    2: {
      text: '孚兑，吉，悔亡',
      interpretation: '九二：孚兑，吉，悔亡。表示诚信喜悦，吉祥，悔恨消失。',
    },
    3: {
      text: '来兑，凶',
      interpretation: '六三：来兑，凶。表示前来喜悦，凶险。',
    },
    4: {
      text: '商兑，未宁，介疾有喜',
      interpretation:
        '九四：商兑，未宁，介疾有喜。表示商量喜悦，未能安宁，坚持疾病有喜悦。',
    },
    5: {
      text: '孚于剥，有厉',
      interpretation: '九五：孚于剥，有厉。表示诚信于剥落，有危险。',
    },
    6: {
      text: '引兑',
      interpretation: '上六：引兑。表示引导喜悦。',
    },
  },

  // 第59卦：涣
  涣: {
    1: {
      text: '用拯马壮，吉',
      interpretation: '初六：用拯马壮，吉。表示用拯救的马强壮，吉祥。',
    },
    2: {
      text: '涣奔其机，悔亡',
      interpretation: '九二：涣奔其机，悔亡。表示涣散奔向其几案，悔恨消失。',
    },
    3: {
      text: '涣其躬，无悔',
      interpretation: '六三：涣其躬，无悔。表示涣散其身体，无悔恨。',
    },
    4: {
      text: '涣其群，元吉，涣有丘，匪夷所思',
      interpretation:
        '六四：涣其群，元吉，涣有丘，匪夷所思。表示涣散其群体，大吉，涣散有山丘，不是平常所能想到的。',
    },
    5: {
      text: '涣汗其大号，涣王居，无咎',
      interpretation:
        '九五：涣汗其大号，涣王居，无咎。表示涣散汗水其大号令，涣散王的居所，无过失。',
    },
    6: {
      text: '涣其血，去逖出，无咎',
      interpretation:
        '上九：涣其血，去逖出，无咎。表示涣散其血，远远离去，无过失。',
    },
  },

  // 第60卦：节
  节: {
    1: {
      text: '不出户庭，无咎',
      interpretation: '初九：不出户庭，无咎。表示不出门庭，无过失。',
    },
    2: {
      text: '不出门庭，凶',
      interpretation: '九二：不出门庭，凶。表示不出门庭，凶险。',
    },
    3: {
      text: '不节若，则嗟若，无咎',
      interpretation:
        '六三：不节若，则嗟若，无咎。表示不节制，则叹息，无过失。',
    },
    4: {
      text: '安节，亨',
      interpretation: '六四：安节，亨。表示安于节制，亨通。',
    },
    5: {
      text: '甘节，吉，往有尚',
      interpretation:
        '九五：甘节，吉，往有尚。表示甘于节制，吉祥，前往有崇尚。',
    },
    6: {
      text: '苦节，贞凶，悔亡',
      interpretation:
        '上六：苦节，贞凶，悔亡。表示苦于节制，坚持凶险，悔恨消失。',
    },
  },

  // 第61卦：中孚
  中孚: {
    1: {
      text: '虞吉，有它不燕',
      interpretation: '初九：虞吉，有它不燕。表示预期吉祥，有其他事不安乐。',
    },
    2: {
      text: '鸣鹤在阴，其子和之，我有好爵，吾与尔靡之',
      interpretation:
        '九二：鸣鹤在阴，其子和之，我有好爵，吾与尔靡之。表示鸣鹤在阴处，其子和应，我有好的爵位，我与你分享。',
    },
    3: {
      text: '得敌，或鼓或罢，或泣或歌',
      interpretation:
        '六三：得敌，或鼓或罢，或泣或歌。表示得到敌人，或击鼓或休息，或哭泣或歌唱。',
    },
    4: {
      text: '月几望，马匹亡，无咎',
      interpretation:
        '六四：月几望，马匹亡，无咎。表示月亮将圆，马匹失去，无过失。',
    },
    5: {
      text: '有孚挛如，无咎',
      interpretation: '九五：有孚挛如，无咎。表示有诚信团结，无过失。',
    },
    6: {
      text: '翰音登于天，贞凶',
      interpretation: '上九：翰音登于天，贞凶。表示鸡鸣声登上天，坚持凶险。',
    },
  },

  // 第62卦：小过
  小过: {
    1: {
      text: '飞鸟以凶',
      interpretation: '初六：飞鸟以凶。表示飞鸟带来凶险。',
    },
    2: {
      text: '过其祖，遇其妣，不及其君，遇其臣，无咎',
      interpretation:
        '六二：过其祖，遇其妣，不及其君，遇其臣，无咎。表示超过其祖父，遇到其祖母，不及其君主，遇到其臣子，无过失。',
    },
    3: {
      text: '弗过防之，从或戕之，凶',
      interpretation:
        '九三：弗过防之，从或戕之，凶。表示不超过防备，跟从或许伤害，凶险。',
    },
    4: {
      text: '无咎，弗过遇之，往厉必戒，勿用永贞',
      interpretation:
        '九四：无咎，弗过遇之，往厉必戒，勿用永贞。表示无过失，不超过遇到，前往危险必须警戒，不要用永远坚持。',
    },
    5: {
      text: '密云不雨，自我西郊，公弋取彼在穴',
      interpretation:
        '六五：密云不雨，自我西郊，公弋取彼在穴。表示密云不下雨，从我西郊，公侯用网捕取那在洞穴中的。',
    },
    6: {
      text: '弗遇过之，飞鸟离之，凶，是谓灾眚',
      interpretation:
        '上六：弗遇过之，飞鸟离之，凶，是谓灾眚。表示不遇到超过，飞鸟离开，凶险，这叫做灾祸。',
    },
  },

  // 第63卦：既济
  既济: {
    1: {
      text: '曳其轮，濡其尾，无咎',
      interpretation:
        '初九：曳其轮，濡其尾，无咎。表示拖拽其车轮，润湿其尾巴，无过失。',
    },
    2: {
      text: '妇丧其茀，勿逐，七日得',
      interpretation:
        '六二：妇丧其茀，勿逐，七日得。表示妇人失去其车帷，不要追逐，七天得到。',
    },
    3: {
      text: '高宗伐鬼方，三年克之，小人勿用',
      interpretation:
        '九三：高宗伐鬼方，三年克之，小人勿用。表示高宗攻伐鬼方，三年攻克，小人不要用。',
    },
    4: {
      text: '繻有衣袽，终日戒',
      interpretation: '六四：繻有衣袽，终日戒。表示细绢有破衣，终日警戒。',
    },
    5: {
      text: '东邻杀牛，不如西邻之禴祭，实受其福',
      interpretation:
        '九五：东邻杀牛，不如西邻之禴祭，实受其福。表示东邻杀牛，不如西邻的薄祭，实在受到其福。',
    },
    6: {
      text: '濡其首，厉',
      interpretation: '上六：濡其首，厉。表示润湿其头，危险。',
    },
  },

  // 第64卦：未济
  未济: {
    1: {
      text: '濡其尾，吝',
      interpretation: '初六：濡其尾，吝。表示润湿其尾巴，困难。',
    },
    2: {
      text: '曳其轮，贞吉',
      interpretation: '九二：曳其轮，贞吉。表示拖拽其车轮，坚持吉祥。',
    },
    3: {
      text: '未济，征凶，利涉大川',
      interpretation:
        '六三：未济，征凶，利涉大川。表示未完成，征伐凶险，利于涉过大川。',
    },
    4: {
      text: '贞吉，悔亡，震用伐鬼方，三年有赏于大国',
      interpretation:
        '九四：贞吉，悔亡，震用伐鬼方，三年有赏于大国。表示坚持吉祥，悔恨消失，震动用来攻伐鬼方，三年有大国的赏赐。',
    },
    5: {
      text: '贞吉，无悔，君子之光，有孚，吉',
      interpretation:
        '六五：贞吉，无悔，君子之光，有孚，吉。表示坚持吉祥，无悔恨，君子的光辉，有诚信，吉祥。',
    },
    6: {
      text: '有孚于饮酒，无咎，濡其首，有孚失是',
      interpretation:
        '上九：有孚于饮酒，无咎，濡其首，有孚失是。表示有诚信于饮酒，无过失，润湿其头，有诚信失去这个。',
    },
  },
}
