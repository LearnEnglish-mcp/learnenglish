// ===== happy01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Happiness is a warm feeling that makes life brighter and more meaningful.",
    "structure": "S + linking verb + subject complement",
    "grammar": "Động từ liên kết + bổ ngữ.",
    "translation": "Hạnh phúc là một cảm giác ấm áp khiến cuộc sống tươi sáng và ý nghĩa hơn.",
    "function": "\"Happiness\" (chủ ngữ); \"is\" (động từ liên kết); \"a warm feeling that makes life brighter and more meaningful\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Happiness (noun); is (linking verb); a (article); warm (verb); feeling (noun); that (determiner); makes (verb); life (noun); brighter (adjective); and (conjunction); more (determiner); meaningful (adjective).",
    "note": ""
  },
  {
    "sentence": "Happiness can be found in ordinary moments every day.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Hạnh phúc có thể được tìm thấy trong những khoảnh khắc bình thường mỗi ngày.",
    "function": "\"Happiness\" (chủ ngữ); \"can\" (động từ khuyết thiếu); \"be found in ordinary moments every day\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Happiness (noun); can (modal verb); be (verb); found (verb); in (preposition); ordinary (adjective); moments (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Family is an important source of happiness for many people.",
    "structure": "S + linking verb + subject complement",
    "grammar": "Động từ liên kết + bổ ngữ.",
    "translation": "Gia đình là một nguồn hạnh phúc quan trọng đối với nhiều người.",
    "function": "\"Family\" (chủ ngữ); \"is\" (động từ liên kết); \"an important source of happiness for many people\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Family (noun); is (linking verb); an (article); important (adjective); source (noun); of (preposition); happiness (noun); for (preposition); many (determiner); people (noun).",
    "note": ""
  },
  {
    "sentence": "It can come from many simple things, such as a kind smile, a good meal, or a peaceful morning.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Nó có thể đến từ nhiều điều đơn giản, chẳng hạn như một nụ cười tử tế, một bữa ăn ngon hoặc một buổi sáng yên bình.",
    "function": "\"It\" (chủ ngữ); \"can\" (động từ khuyết thiếu); \"come from many simple things such as a kind smile a good meal or a peaceful morning\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "It (pronoun); can (modal verb); come (verb); from (preposition); many (determiner); simple (adjective); things (noun); such (determiner); as (preposition); a (article); kind (adjective); smile (noun); a (article); good (adjective); meal (noun); or (conjunction); a (article); peaceful (adjective); morning (noun).",
    "note": ""
  },
  {
    "sentence": "Waking up to a sunny morning, drinking a favorite drink, or hearing a friendly voice can make us smile.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Thức dậy vào một buổi sáng đầy nắng, uống thức uống yêu thích hoặc nghe một giọng nói thân thiện có thể khiến chúng ta mỉm cười.",
    "function": "\"Waking\" (chủ ngữ); \"up\" (động từ chính); \"to a sunny morning drinking a favorite drink or hearing a friendly voice can make us smile\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Waking (gerund); up (adverb); to (preposition); a (article); sunny (adjective); morning (noun); drinking (noun); a (article); favorite (adjective); drink (verb); or (conjunction); hearing (noun); a (article); friendly (adjective); voice (noun); can (modal verb); make (verb); us (pronoun); smile (noun).",
    "note": ""
  },
  {
    "sentence": "Parents, children, brothers, and sisters share love, care, and support.",
    "structure": "S + coordinated verbs/phrases",
    "grammar": "Hiện tại đơn; cấu trúc song song nối bằng and.",
    "translation": "Cha mẹ, con cái, anh em trai và chị em gái chia sẻ tình yêu, sự quan tâm và hỗ trợ.",
    "function": "\"Parents children brothers and sisters\" (chủ ngữ); \"share\" (động từ chính); \"love care and support\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Parents (noun); children (noun); brothers (noun); and (conjunction); sisters (noun); share (verb); love (verb); care (noun); and (conjunction); support (verb).",
    "note": ""
  },
  {
    "sentence": "Different people may understand happiness in different ways.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Mỗi người có thể hiểu hạnh phúc theo những cách khác nhau.",
    "function": "\"Different people\" (chủ ngữ); \"may\" (động từ khuyết thiếu); \"understand happiness in different ways\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Different (adjective); people (noun); may (modal verb); understand (verb); happiness (noun); in (preposition); different (adjective); ways (noun).",
    "note": ""
  },
  {
    "sentence": "We do not need a special event to feel happy.",
    "structure": "S + linking verb + subject complement",
    "grammar": "Động từ liên kết + bổ ngữ.",
    "translation": "Chúng ta không cần một sự kiện đặc biệt để cảm thấy hạnh phúc.",
    "function": "\"We\" (chủ ngữ); \"do\" (động từ chính); \"not need a special event to feel happy\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "We (pronoun); do (auxiliary verb); not (adverb); need (verb); a (article); special (adjective); event (noun); to (preposition); feel (verb); happy (adjective).",
    "note": ""
  },
  {
    "sentence": "Being together helps everyone feel safe, understood, and less lonely in difficult times.",
    "structure": "S + linking verb + subject complement",
    "grammar": "Động từ liên kết + bổ ngữ.",
    "translation": "Ở bên nhau giúp mọi người cảm thấy an toàn, được thấu hiểu và bớt cô đơn trong những lúc khó khăn.",
    "function": "\"Being\" (chủ ngữ); \"together\" (động từ chính); \"helps everyone feel safe understood and less lonely in difficult times\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Being (gerund); together (adverb); helps (verb); everyone (pronoun); feel (verb); safe (adjective); understood (adjective); and (conjunction); less (adverb); lonely (adjective); in (preposition); difficult (adjective); times (noun).",
    "note": ""
  },
  {
    "sentence": "Some people feel happy when they achieve a goal, while others enjoy spending time with family and friends.",
    "structure": "Main clause + while-clause",
    "grammar": "Liên từ while nối hai mệnh đề; hiện tại đơn.",
    "translation": "Một số người cảm thấy hạnh phúc khi đạt được mục tiêu, trong khi những người khác thích dành thời gian với gia đình và bạn bè.",
    "function": "\"Some people\" (chủ ngữ); \"feel\" (động từ chính); \"happy when they achieve a goal while others enjoy spending time with family and friends\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Some (determiner); people (noun); feel (verb); happy (adjective); when (conjunction); they (pronoun); achieve (verb); a (article); goal (noun); while (conjunction); others (noun); enjoy (verb); spending (verb); time (noun); with (preposition); family (noun); and (conjunction); friends (noun).",
    "note": ""
  }
];
