const newAnalysisData = [
  {
    "sentence": "Banh chung is a traditional Vietnamese cake.",
    "structure": "S + be + noun phrase",
    "grammar": "Dùng hiện tại đơn với be để định nghĩa hoặc mô tả.",
    "translation": "Bánh chưng là một loại bánh truyền thống của Việt Nam.",
    "function": "Banh chung (chủ ngữ); is (động từ liên kết); a traditional Vietnamese cake (bổ ngữ chủ ngữ).",
    "pos": "Banh (proper noun); chung (proper noun); is (linking/auxiliary verb); a (article); traditional (adjective); Vietnamese (adjective); cake (noun).",
    "note": ""
  },
  {
    "sentence": "It is square and is often prepared for Tet, the Vietnamese Lunar New Year.",
    "structure": "S + be + V3 + for + noun",
    "grammar": "Dùng bị động để nói món ăn được chuẩn bị cho dịp nào.",
    "translation": "Bánh có hình vuông và thường được chuẩn bị cho Tết, tức Tết Nguyên đán của Việt Nam.",
    "function": "It (chủ ngữ); is square (động từ liên kết + bổ ngữ); and is often prepared for Tet (bị động); the Vietnamese Lunar New Year (cụm đồng vị).",
    "pos": "It (pronoun/determiner); is (linking/auxiliary verb); square (adjective); and (conjunction); is (linking/auxiliary verb); often (adverb); prepared (past participle); for (preposition); Tet (proper noun); the (article); Vietnamese (adjective); Lunar (adjective); New (adjective); Year (noun).",
    "note": ""
  },
  {
    "sentence": "The green leaves outside make it look simple and beautiful.",
    "structure": "S + make + O + adjective",
    "grammar": "Dùng make + tân ngữ + tính từ để nói làm cho vật có trạng thái nào.",
    "translation": "Những chiếc lá xanh bên ngoài làm bánh trông giản dị và đẹp mắt.",
    "function": "The green leaves outside (chủ ngữ); make (động từ); it (tân ngữ); look simple and beautiful (bổ ngữ với động từ nguyên mẫu).",
    "pos": "The (article); green (adjective); leaves (noun); outside (adverb); make (verb); it (pronoun/determiner); look (verb); simple (adjective); and (conjunction); beautiful (adjective).",
    "note": ""
  },
  {
    "sentence": "These ingredients are placed inside dong leaves.",
    "structure": "S + be + V3 + place",
    "grammar": "Dùng bị động để mô tả vị trí nguyên liệu.",
    "translation": "Những nguyên liệu này được đặt bên trong lá dong.",
    "function": "These ingredients (chủ ngữ); are placed (bị động); inside dong leaves (cụm chỉ vị trí).",
    "pos": "These (pronoun/determiner); ingredients (noun); are (linking/auxiliary verb); placed (past participle); inside (preposition); dong (noun/adjective); leaves (noun).",
    "note": ""
  },
  {
    "sentence": "Family members often sit together near the pot, talk, and wait.",
    "structure": "S + V, V, and V",
    "grammar": "Dùng các động từ song song để mô tả nhiều hành động.",
    "translation": "Các thành viên trong gia đình thường ngồi cùng nhau gần nồi bánh, trò chuyện và chờ đợi.",
    "function": "Family members (chủ ngữ); often sit together near the pot, talk, and wait (ba động từ song song).",
    "pos": "Family (noun modifier); members (noun); often (adverb); sit (verb); together (adverb); near (preposition); the (article); pot (noun); talk (verb); and (conjunction); wait (verb).",
    "note": ""
  },
  {
    "sentence": "It represents the earth, family love, and respect for ancestors.",
    "structure": "S + V + O",
    "grammar": "Dùng hiện tại đơn để nói ý nghĩa hoặc biểu tượng.",
    "translation": "Bánh tượng trưng cho đất, tình yêu gia đình và sự kính trọng tổ tiên.",
    "function": "It (chủ ngữ); represents (động từ); the earth, family love, and respect for ancestors (các tân ngữ/cụm bổ nghĩa).",
    "pos": "It (pronoun/determiner); represents (verb); the (article); earth (noun); family (noun modifier); love (noun); and (conjunction); respect (noun); for (preposition); ancestors (noun).",
    "note": ""
  },
  {
    "sentence": "People boil banh tet for hours until the rice becomes soft.",
    "structure": "S + V + O + until + clause",
    "grammar": "Dùng until để nói hành động kéo dài đến khi đạt một trạng thái.",
    "translation": "Mọi người luộc bánh tét trong nhiều giờ cho đến khi gạo trở nên mềm.",
    "function": "People (chủ ngữ); boil banh tet (vị ngữ); for hours (cụm thời gian); until the rice becomes soft (mệnh đề giới hạn).",
    "pos": "People (noun); boil (verb); banh (proper noun); tet (proper noun); for (preposition); hours (noun); until (conjunction); the (article); rice (noun); becomes (linking verb); soft (adjective).",
    "note": ""
  },
  {
    "sentence": "After cooking, they cut it into round slices.",
    "structure": "After + V-ing, S + V + O",
    "grammar": "Dùng after + V-ing để nói hành động xảy ra sau một việc khác.",
    "translation": "Sau khi nấu, họ cắt bánh thành những khoanh tròn.",
    "function": "After cooking (cụm thời gian); they (chủ ngữ); cut (động từ); it (tân ngữ); into round slices (cụm kết quả).",
    "pos": "After (preposition); cooking (gerund); they (pronoun/determiner); cut (verb); it (pronoun/determiner); into (preposition); round (adjective); slices (noun).",
    "note": ""
  },
  {
    "sentence": "Its name comes from the sound made when the batter touches a hot pan.",
    "structure": "Main clause + when + clause",
    "grammar": "Dùng when để nói thời điểm hoặc tình huống.",
    "translation": "Tên của bánh xuất phát từ âm thanh tạo ra khi bột chạm vào chảo nóng.",
    "function": "Its name (chủ ngữ); comes from the sound made (vị ngữ); when the batter touches a hot pan (mệnh đề thời gian).",
    "pos": "Its (possessive determiner); name (noun); comes (verb); from (preposition); the (article); sound (noun); made (past participle); when (conjunction); the (article); batter (noun); touches (verb); a (article); hot (adjective); pan (noun).",
    "note": ""
  },
  {
    "sentence": "Sharing this dish makes meals more cheerful and interesting together.",
    "structure": "S + make(s) + O + comparative adjective",
    "grammar": "Dùng make để nói một hành động làm điều gì trở nên như thế nào.",
    "translation": "Cùng chia sẻ món ăn này làm bữa ăn vui vẻ và thú vị hơn.",
    "function": "Sharing this dish (cụm V-ing làm chủ ngữ); makes (động từ); meals (tân ngữ); more cheerful and interesting (bổ ngữ so sánh); together (trạng từ).",
    "pos": "Sharing (gerund); this (pronoun/determiner); dish (noun); makes (verb); meals (noun); more (adverb); cheerful (adjective); and (conjunction); interesting (adjective); together (adverb).",
    "note": ""
  }
];
