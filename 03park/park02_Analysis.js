// ===== park02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Every park has rules to keep visitors safe and comfortable every day.",
    "structure": "S + have/has + O + to-infinitive",
    "grammar": "Have/has; to-infinitive chỉ mục đích.",
    "translation": "Mỗi công viên đều có các quy tắc để giữ cho khách tham quan an toàn và thoải mái mỗi ngày.",
    "function": "Every park (chủ ngữ); has (động từ); rules (tân ngữ); to keep visitors safe and comfortable (cụm nguyên mẫu chỉ mục đích); every day (trạng ngữ).",
    "pos": "Every (determiner); park (noun); has (verb); rules (noun); to (preposition); keep (verb); visitors (noun); safe (adjective); and (conjunction); comfortable (adjective); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Good behavior helps everyone enjoy a clean and peaceful environment together.",
    "structure": "S + help + O + V + complement",
    "grammar": "Help + object + bare infinitive.",
    "translation": "Hành vi tốt giúp mọi người cùng tận hưởng một môi trường sạch sẽ và yên bình.",
    "function": "Good behavior (chủ ngữ); helps (động từ); everyone (tân ngữ); enjoy a clean and peaceful environment (động từ nguyên mẫu và bổ ngữ); together (trạng từ).",
    "pos": "Good (adjective); behavior (noun); helps (verb); everyone (pronoun); enjoy (verb); a (article); clean (adjective); and (conjunction); peaceful (adjective); environment (noun); together (adverb).",
    "note": ""
  },
  {
    "sentence": "Dogs should stay on leashes, and loud music should be avoided.",
    "structure": "S + should + V + and + S + should be + V3",
    "grammar": "Should; câu bị động với should be + past participle.",
    "translation": "Chó nên được giữ bằng dây dắt và nên tránh mở nhạc lớn.",
    "function": "Dogs (chủ ngữ thứ nhất); should stay on leashes (vị ngữ); and (liên từ); loud music (chủ ngữ thứ hai); should be avoided (bị động).",
    "pos": "Dogs (noun); should (modal verb); stay (verb); on (preposition); leashes (noun); and (conjunction); loud (adjective); music (noun); should (modal verb); be (verb); avoided (verb).",
    "note": ""
  },
  {
    "sentence": "People must use playground equipment safely and watch young children carefully always.",
    "structure": "S + must + coordinated verbs",
    "grammar": "Must + động từ nguyên mẫu; hai hành động song song.",
    "translation": "Mọi người phải sử dụng thiết bị sân chơi an toàn và luôn trông chừng trẻ nhỏ cẩn thận.",
    "function": "People (chủ ngữ); must use playground equipment safely (vị ngữ thứ nhất); and watch young children carefully (vị ngữ thứ hai); always (trạng từ).",
    "pos": "People (noun); must (modal verb); use (verb); playground (noun); equipment (noun); safely (adverb); and (conjunction); watch (verb); young (adjective); children (noun); carefully (adverb); always (adverb).",
    "note": ""
  },
  {
    "sentence": "When people follow simple rules, parks stay beautiful and clean for many years.",
    "structure": "When-clause + main clause",
    "grammar": "When + hiện tại đơn; mệnh đề chính hiện tại đơn.",
    "translation": "Khi mọi người tuân theo những quy tắc đơn giản, công viên sẽ đẹp và sạch trong nhiều năm.",
    "function": "When people follow simple rules (mệnh đề thời gian); parks (chủ ngữ mệnh đề chính); stay (động từ liên kết); beautiful and clean (bổ ngữ); for many years (trạng ngữ).",
    "pos": "When (conjunction); people (noun); follow (verb); simple (adjective); rules (noun); parks (noun); stay (verb); beautiful (adjective); and (conjunction); clean (adjective); for (preposition); many (determiner); years (noun).",
    "note": ""
  },
  {
    "sentence": "Parents watch their children while they enjoy different games together.",
    "structure": "S + V + O + while-clause",
    "grammar": "While nối hai hành động đồng thời.",
    "translation": "Cha mẹ trông con trong khi các em cùng nhau tận hưởng những trò chơi khác nhau.",
    "function": "Parents (chủ ngữ); watch their children (vị ngữ); while (liên từ); they enjoy different games together (mệnh đề phụ).",
    "pos": "Parents (noun); watch (verb); their (possessive determiner); children (noun); while (conjunction); they (pronoun); enjoy (verb); different (adjective); games (noun); together (adverb).",
    "note": ""
  },
  {
    "sentence": "Everyone shares the playground kindly and waits for their turn on the swings patiently.",
    "structure": "S + V + O + and + V + complement",
    "grammar": "Hai động từ chính song song nối bằng and.",
    "translation": "Mọi người chia sẻ sân chơi một cách tử tế và kiên nhẫn chờ đến lượt mình trên xích đu.",
    "function": "Everyone (chủ ngữ); shares the playground kindly (vị ngữ thứ nhất); and waits for their turn on the swings patiently (vị ngữ thứ hai).",
    "pos": "Everyone (pronoun); shares (verb); the (article); playground (noun); kindly (adverb); and (conjunction); waits (verb); for (preposition); their (possessive determiner); turn (noun); on (preposition); the (article); swings (noun); patiently (adverb).",
    "note": ""
  },
  {
    "sentence": "A playground helps children become active and confident.",
    "structure": "S + help + O + become + adjective",
    "grammar": "Help + object + become + adjective.",
    "translation": "Sân chơi giúp trẻ em trở nên năng động và tự tin.",
    "function": "A playground (chủ ngữ); helps (động từ); children (tân ngữ); become active and confident (bổ ngữ sau become).",
    "pos": "A (article); playground (noun); helps (verb); children (noun); become (verb); active (adjective); and (conjunction); confident (adjective).",
    "note": ""
  },
  {
    "sentence": "While walking, people can watch birds, smell flowers, and hear gentle sounds.",
    "structure": "While + V-ing, S + modal + coordinated verbs",
    "grammar": "While + V-ing; can + động từ nguyên mẫu.",
    "translation": "Trong khi đi bộ, mọi người có thể ngắm chim, ngửi hoa và nghe những âm thanh nhẹ nhàng.",
    "function": "While walking (cụm thời gian); people (chủ ngữ); can watch birds, smell flowers, and hear gentle sounds (các động từ song song).",
    "pos": "While (conjunction); walking (gerund); people (noun); can (modal verb); watch (verb); birds (noun); smell (verb); flowers (noun); and (conjunction); hear (verb); gentle (adjective); sounds (noun).",
    "note": ""
  },
  {
    "sentence": "Walking in the park improves both health and happiness.",
    "structure": "Gerund phrase + V + both + N + and + N",
    "grammar": "V-ing làm chủ ngữ; cấu trúc both + noun + and + noun.",
    "translation": "Đi bộ trong công viên cải thiện cả sức khỏe lẫn niềm vui.",
    "function": "Walking in the park (chủ ngữ dạng V-ing); improves (động từ); both health and happiness (tân ngữ với cấu trúc both + noun + and + noun).",
    "pos": "Walking (gerund); in (preposition); the (article); park (noun); improves (verb); both (determiner); health (noun); and (conjunction); happiness (noun).",
    "note": ""
  }
];
