// ===== happy03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Doing things we love can make life more enjoyable.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Làm những điều mình yêu thích có thể khiến cuộc sống thú vị hơn.",
    "function": "\"Doing things we\" (chủ ngữ); \"love\" (động từ chính); \"can make life more enjoyable\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Doing (gerund); things (noun); we (pronoun); love (verb); can (modal verb); make (verb); life (noun); more (determiner); enjoyable (adjective).",
    "note": ""
  },
  {
    "sentence": "Good health is closely connected to happiness.",
    "structure": "S + linking verb + subject complement",
    "grammar": "Động từ liên kết + bổ ngữ.",
    "translation": "Sức khỏe tốt có liên hệ chặt chẽ với hạnh phúc.",
    "function": "\"Good health\" (chủ ngữ); \"is\" (động từ liên kết); \"closely connected to happiness\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Good (adjective); health (noun); is (linking verb); closely (adverb); connected (adjective); to (preposition); happiness (noun).",
    "note": ""
  },
  {
    "sentence": "Money can make life easier because it helps people pay for food, housing, education, and healthcare.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Tiền có thể làm cuộc sống dễ dàng hơn vì nó giúp mọi người chi trả cho thức ăn, nhà ở, giáo dục và chăm sóc sức khỏe.",
    "function": "\"Money\" (chủ ngữ); \"can\" (động từ khuyết thiếu); \"make life easier because it helps people pay for food housing education and healthcare\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Money (noun); can (modal verb); make (verb); life (noun); easier (adjective); because (conjunction); it (pronoun); helps (verb); people (noun); pay (verb); for (preposition); food (noun); housing (noun); education (noun); and (conjunction); healthcare (noun).",
    "note": ""
  },
  {
    "sentence": "A happy life often begins with simple choices.",
    "structure": "S + V + object/complement + modifiers",
    "grammar": "Hiện tại đơn với cấu trúc câu phù hợp ngữ cảnh.",
    "translation": "Một cuộc sống hạnh phúc thường bắt đầu bằng những lựa chọn đơn giản.",
    "function": "\"A happy life\" (chủ ngữ); \"often\" (động từ chính); \"begins with simple choices\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "A (article); happy (adjective); life (noun); often (adverb); begins (verb); with (preposition); simple (adjective); choices (noun).",
    "note": ""
  },
  {
    "sentence": "Some people love reading, cooking, drawing, gardening, or playing sports.",
    "structure": "S + V + object/complement + modifiers",
    "grammar": "Hiện tại đơn với cấu trúc câu phù hợp ngữ cảnh.",
    "translation": "Một số người thích đọc sách, nấu ăn, vẽ, làm vườn hoặc chơi thể thao.",
    "function": "\"Some people\" (chủ ngữ); \"love\" (động từ chính); \"reading cooking drawing gardening or playing sports\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Some (determiner); people (noun); love (verb); reading (verb); cooking (gerund); drawing (gerund); gardening (gerund); or (conjunction); playing (gerund); sports (noun).",
    "note": ""
  },
  {
    "sentence": "When our body feels strong and our mind feels calm, we can enjoy life more fully.",
    "structure": "When-clause + main clause",
    "grammar": "Mệnh đề với when; hiện tại đơn.",
    "translation": "Khi cơ thể khỏe mạnh và tâm trí bình tĩnh, chúng ta có thể tận hưởng cuộc sống trọn vẹn hơn.",
    "function": "\"When our body feels strong and our mind feels calm\" (mệnh đề phụ chỉ thời gian/điều kiện); \"we can enjoy life more fully.\" (mệnh đề chính).",
    "pos": "When (conjunction); our (possessive determiner); body (noun); feels (verb); strong (adjective); and (conjunction); our (possessive determiner); mind (noun); feels (verb); calm (adjective); we (pronoun); can (modal verb); enjoy (verb); life (noun); more (determiner); fully (adverb).",
    "note": ""
  },
  {
    "sentence": "It also gives families more choices and security.",
    "structure": "S + coordinated verbs/phrases",
    "grammar": "Hiện tại đơn; cấu trúc song song nối bằng and.",
    "translation": "Nó cũng mang lại cho các gia đình nhiều lựa chọn và sự an toàn hơn.",
    "function": "\"It\" (chủ ngữ); \"also\" (động từ chính); \"gives families more choices and security\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "It (pronoun); also (adverb); gives (verb); families (noun); more (determiner); choices (noun); and (conjunction); security (noun).",
    "note": ""
  },
  {
    "sentence": "We can start the day with a positive thought, eat a healthy breakfast, and speak kindly to others.",
    "structure": "S + modal + V + object/complement",
    "grammar": "Động từ khuyết thiếu + động từ nguyên mẫu.",
    "translation": "Chúng ta có thể bắt đầu ngày mới với một suy nghĩ tích cực, ăn một bữa sáng lành mạnh và nói chuyện tử tế với người khác.",
    "function": "\"We\" (chủ ngữ); \"can\" (động từ khuyết thiếu); \"start the day with a positive thought eat a healthy breakfast and speak kindly to others\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "We (pronoun); can (modal verb); start (verb); the (article); day (noun); with (preposition); a (article); positive (adjective); thought (noun); eat (verb); a (article); healthy (adjective); breakfast (noun); and (conjunction); speak (verb); kindly (adverb); to (preposition); others (noun).",
    "note": ""
  },
  {
    "sentence": "These activities help us relax, express ourselves, and forget stress for a while.",
    "structure": "S + coordinated verbs/phrases",
    "grammar": "Hiện tại đơn; cấu trúc song song nối bằng and.",
    "translation": "Những hoạt động này giúp chúng ta thư giãn, thể hiện bản thân và quên căng thẳng trong một lúc.",
    "function": "\"These activities\" (chủ ngữ); \"help\" (động từ chính); \"us relax express ourselves and forget stress for a while\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "These (determiner); activities (noun); help (verb); us (pronoun); relax (verb); express (verb); ourselves (reflexive pronoun); and (conjunction); forget (verb); stress (noun); for (preposition); a (article); while (conjunction).",
    "note": ""
  },
  {
    "sentence": "Healthy habits give us energy for work, study, family, and hobbies.",
    "structure": "S + coordinated verbs/phrases",
    "grammar": "Hiện tại đơn; cấu trúc song song nối bằng and.",
    "translation": "Những thói quen lành mạnh cho chúng ta năng lượng cho công việc, học tập, gia đình và sở thích.",
    "function": "\"Healthy habits\" (chủ ngữ); \"give\" (động từ chính); \"us energy for work study family and hobbies\" (tân ngữ/bổ ngữ và thông tin mở rộng).",
    "pos": "Healthy (adjective); habits (noun); give (verb); us (pronoun); energy (noun); for (preposition); work (verb); study (verb); family (noun); and (conjunction); hobbies (noun).",
    "note": ""
  }
];
