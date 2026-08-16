const newAnalysisData = [
  {
    "sentence": "The octopus is cleaned, cut into pieces, and marinated with garlic, chili, honey, salt, and cooking oil.",
    "structure": "S + be + V3, V3, and V3",
    "grammar": "Dùng chuỗi động từ bị động để mô tả việc chuẩn bị món ăn.",
    "translation": "Bạch tuộc được làm sạch, cắt miếng và ướp với tỏi, ớt, mật ong, muối và dầu ăn.",
    "function": "The octopus (chủ ngữ); is cleaned, cut, and marinated (chuỗi động từ bị động); into pieces (cụm chỉ kết quả cắt); with garlic, chili, honey, salt, and cooking oil (cụm chỉ gia vị).",
    "pos": "The (article); octopus (noun); is (linking/auxiliary verb); cleaned (past participle); cut (past participle); into (preposition); pieces (noun); and (conjunction); marinated (past participle); with (preposition); garlic (noun); chili (noun); honey (noun); salt (noun); and (conjunction); cooking (gerund); oil (noun).",
    "note": ""
  },
  {
    "sentence": "It is then grilled until the edges become slightly brown.",
    "structure": "S + be + V3 + until + clause",
    "grammar": "Dùng until để nói thời điểm kết thúc việc nướng.",
    "translation": "Sau đó bạch tuộc được nướng cho đến khi các mép hơi chuyển nâu.",
    "function": "It (chủ ngữ); is then grilled (cụm bị động); until the edges become slightly brown (mệnh đề until chỉ trạng thái kết thúc).",
    "pos": "It (pronoun); is (linking/auxiliary verb); then (adverb); grilled (adjective/participle); until (conjunction); the (article); edges (noun); become (verb); slightly (adverb); brown (adjective).",
    "note": ""
  },
  {
    "sentence": "Cooking octopus carefully is important because too much heat can make it tough.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để giải thích nguyên nhân.",
    "translation": "Nấu bạch tuộc cẩn thận rất quan trọng vì quá nhiều nhiệt có thể làm thịt dai.",
    "function": "Cooking octopus carefully (cụm V-ing làm chủ ngữ); is important (vị ngữ); because too much heat can make it tough (mệnh đề nguyên nhân).",
    "pos": "Cooking (gerund); octopus (noun); carefully (adverb); is (linking/auxiliary verb); important (adjective); because (conjunction); too (adverb); much (pronoun/determiner); heat (noun); can (modal verb); make (verb); it (pronoun); tough (adjective).",
    "note": ""
  },
  {
    "sentence": "When prepared well, grilled octopus has a wonderful smell and rich taste.",
    "structure": "When + V3/adverb, main clause",
    "grammar": "Dùng when trong cụm rút gọn để mô tả điều kiện chuẩn bị.",
    "translation": "Khi được chuẩn bị tốt, bạch tuộc nướng có mùi thơm tuyệt vời và vị đậm đà.",
    "function": "When prepared well (cụm when rút gọn); grilled octopus (chủ ngữ); has (động từ); a wonderful smell and rich taste (tân ngữ).",
    "pos": "When (conjunction); prepared (past participle); well (adverb); grilled (adjective/participle); octopus (noun); has (verb); a (article); wonderful (adjective); smell (noun); and (conjunction); rich (adjective); taste (linking verb).",
    "note": ""
  },
  {
    "sentence": "Fresh clams are washed several times to remove sand, then cooked in a pot with lemongrass, ginger, chili, and a little water.",
    "structure": "S + be + V3 + to + V",
    "grammar": "Dùng to-infinitive để nêu mục đích.",
    "translation": "Nghêu tươi được rửa nhiều lần để loại bỏ cát, sau đó nấu trong nồi với sả, gừng, ớt và một ít nước.",
    "function": "Fresh clams (chủ ngữ); are washed several times (bị động thứ nhất); to remove sand (cụm mục đích); then cooked in a pot (bị động thứ hai); with lemongrass, ginger, chili, and a little water (cụm nguyên liệu).",
    "pos": "Fresh (adjective); clams (noun); are (linking/auxiliary verb); washed (past participle); several (determiner); times (noun); to (noun); remove (verb); sand (noun); then (adverb); cooked (past participle); in (preposition); a (article); pot (noun); with (preposition); lemongrass (noun); ginger (noun); chili (noun); and (conjunction); a (article); little (determiner); water (noun).",
    "note": ""
  },
  {
    "sentence": "When the shells open, the clams are ready to eat.",
    "structure": "When + clause, main clause",
    "grammar": "Dùng when để chỉ dấu hiệu món ăn đã sẵn sàng.",
    "translation": "Khi vỏ mở ra, nghêu đã sẵn sàng để ăn.",
    "function": "When the shells open (mệnh đề thời gian/điều kiện); the clams (chủ ngữ); are ready (động từ liên kết + bổ ngữ); to eat (cụm to-infinitive).",
    "pos": "When (conjunction); the (article); shells (noun); open (verb); the (article); clams (noun); are (linking/auxiliary verb); ready (adjective); to (noun); eat (verb).",
    "note": ""
  },
  {
    "sentence": "People often drink the warm broth because it has a fresh seafood flavor.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để giải thích lý do người ta thích nước dùng.",
    "translation": "Mọi người thường uống phần nước dùng ấm vì nó có hương vị hải sản tươi.",
    "function": "People (chủ ngữ); often drink (động từ); the warm broth (tân ngữ); because it has a fresh seafood flavor (mệnh đề nguyên nhân).",
    "pos": "People (pronoun); often (adverb); drink (verb); the (article); warm (adjective); broth (noun); because (conjunction); it (pronoun); has (verb); a (article); fresh (adjective); seafood (noun); flavor (noun).",
    "note": ""
  },
  {
    "sentence": "The soup is usually made with tomatoes, pineapple, mushrooms, herbs, and a little chili.",
    "structure": "S + be + adverb + V3 + with + ingredients",
    "grammar": "Dùng bị động để nói nguyên liệu dùng để làm nước lẩu.",
    "translation": "Nước lẩu thường được nấu với cà chua, dứa, nấm, rau thơm và một ít ớt.",
    "function": "The soup (chủ ngữ); is usually made (cụm bị động); with tomatoes, pineapple, mushrooms, herbs, and a little chili (cụm nguyên liệu).",
    "pos": "The (article); soup (noun); is (linking/auxiliary verb); usually (adverb); made (past participle); with (preposition); tomatoes (noun); pineapple (noun); mushrooms (noun); herbs (noun); and (conjunction); a (article); little (determiner); chili (noun).",
    "note": ""
  },
  {
    "sentence": "Everyone adds the ingredients to the boiling soup and waits until they are ready.",
    "structure": "S + V + and + V + until + clause",
    "grammar": "Dùng until để nói chờ đến một trạng thái.",
    "translation": "Mọi người cho nguyên liệu vào nước lẩu đang sôi và đợi đến khi chín.",
    "function": "Everyone (chủ ngữ); adds the ingredients to the boiling soup (vị ngữ thứ nhất); and waits (vị ngữ thứ hai); until they are ready (mệnh đề until).",
    "pos": "Everyone (pronoun); adds (verb); the (article); ingredients (noun); to (noun); the (article); boiling (adjective); soup (noun); and (conjunction); waits (verb); until (conjunction); they (pronoun); are (linking/auxiliary verb); ready (adjective).",
    "note": ""
  },
  {
    "sentence": "This dish is popular at family gatherings and weekend parties because people can cook and talk together.",
    "structure": "Main clause + because + S + can + V",
    "grammar": "Dùng because để nêu lý do và can để nói khả năng.",
    "translation": "Món này phổ biến trong các buổi tụ họp gia đình và tiệc cuối tuần vì mọi người có thể vừa nấu vừa trò chuyện.",
    "function": "This dish (chủ ngữ); is popular at family gatherings and weekend parties (vị ngữ); because people can cook and talk together (mệnh đề nguyên nhân với can).",
    "pos": "This (determiner); dish (noun); is (linking/auxiliary verb); popular (adjective); at (preposition); family (noun); gatherings (noun); and (conjunction); weekend (noun/adjective); parties (noun); because (conjunction); people (pronoun); can (modal verb); cook (verb); and (conjunction); talk (verb); together (adverb).",
    "note": ""
  }
];
