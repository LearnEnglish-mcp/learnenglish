const newAnalysisData = [
  {
    "sentence": "Banh cuon is a soft Vietnamese dish made from thin rice sheets.",
    "structure": "Noun + V3 phrase",
    "grammar": "Dùng cụm phân từ quá khứ để bổ nghĩa cho danh từ.",
    "translation": "Bánh cuốn là một món ăn Việt Nam mềm được làm từ những lá bánh gạo mỏng.",
    "function": "Banh cuon (chủ ngữ); is (động từ liên kết); a soft Vietnamese dish (bổ ngữ); made from thin rice sheets (cụm phân từ quá khứ).",
    "pos": "Banh (proper noun); cuon (proper noun); is (linking/auxiliary verb); a (article); soft (adjective); Vietnamese (adjective); dish (noun); made (past participle); from (preposition); thin (adjective); rice (noun); sheets (noun).",
    "note": ""
  },
  {
    "sentence": "It is commonly eaten for breakfast, but many people also enjoy it at lunch or dinner.",
    "structure": "S + be + V3 + time",
    "grammar": "Dùng bị động để nói món ăn thường được dùng vào lúc nào.",
    "translation": "Món này thường được ăn vào bữa sáng, nhưng nhiều người cũng thưởng thức vào bữa trưa hoặc bữa tối.",
    "function": "It (chủ ngữ); is commonly eaten for breakfast (bị động); but many people (chủ ngữ mệnh đề hai); also enjoy it at lunch or dinner (vị ngữ tương phản).",
    "pos": "It (pronoun/determiner); is (linking/auxiliary verb); commonly (adverb); eaten (past participle); for (preposition); breakfast (noun); but (conjunction); many (determiner); people (noun); also (adverb); enjoy (verb); it (pronoun/determiner); at (preposition); lunch (noun); or (conjunction); dinner (noun).",
    "note": ""
  },
  {
    "sentence": "To make the sheets, cooks spread rice batter over a hot cloth.",
    "structure": "To + V + O, S + V + O",
    "grammar": "Dùng to-infinitive đầu câu để nói mục đích.",
    "translation": "Để làm lá bánh, người nấu tráng bột gạo trên một tấm vải nóng.",
    "function": "To make the sheets (cụm mục đích); cooks (chủ ngữ); spread (động từ); rice batter (tân ngữ); over a hot cloth (cụm vị trí).",
    "pos": "To (noun); make (verb); the (article); sheets (noun); cooks (noun); spread (verb); rice (noun); batter (noun); over (preposition); a (article); hot (adjective); cloth (noun).",
    "note": ""
  },
  {
    "sentence": "It becomes smooth, soft, and slightly clear.",
    "structure": "S + become(s) + adjective",
    "grammar": "Dùng become + tính từ để mô tả sự thay đổi trạng thái.",
    "translation": "Nó trở nên mịn, mềm và hơi trong.",
    "function": "It (chủ ngữ); becomes (động từ liên kết); smooth, soft, and slightly clear (các bổ ngữ tính từ).",
    "pos": "It (pronoun/determiner); becomes (linking verb); smooth (adjective); soft (adjective); and (conjunction); slightly (adverb); clear (adjective).",
    "note": ""
  },
  {
    "sentence": "The filling often contains minced pork, mushrooms, and onions.",
    "structure": "S + contain(s) + O",
    "grammar": "Dùng contain để mô tả thành phần bên trong.",
    "translation": "Nhân thường gồm thịt lợn băm, nấm và hành.",
    "function": "The filling (chủ ngữ); often contains (động từ); minced pork, mushrooms, and onions (các tân ngữ).",
    "pos": "The (article); filling (noun); often (adverb); contains (verb); minced (adjective); pork (noun); mushrooms (noun); and (conjunction); onions (noun).",
    "note": ""
  },
  {
    "sentence": "It is not too heavy, so it is suitable for all ages.",
    "structure": "Clause, so + clause",
    "grammar": "Dùng so để nối nguyên nhân với kết quả.",
    "translation": "Món này không quá nặng bụng nên phù hợp với mọi lứa tuổi.",
    "function": "It (chủ ngữ mệnh đề một); is not too heavy (vị ngữ); so (liên từ kết quả); it is suitable for all ages (mệnh đề kết quả).",
    "pos": "It (pronoun/determiner); is (linking/auxiliary verb); not (adverb); too (adverb); heavy (adjective); so (conjunction); it (pronoun/determiner); is (linking/auxiliary verb); suitable (adjective); for (preposition); all (determiner); ages (noun).",
    "note": ""
  },
  {
    "sentence": "After steaming, cooks add dried shrimp, green onion oil, crispy bread, or pork skin on top.",
    "structure": "After + V-ing, S + V + O",
    "grammar": "Dùng after + V-ing để nói trình tự chế biến.",
    "translation": "Sau khi hấp, người nấu thêm tôm khô, dầu hành xanh, bánh mì giòn hoặc da lợn lên trên.",
    "function": "After steaming (cụm thời gian); cooks (chủ ngữ); add (động từ); dried shrimp, green onion oil, crispy bread, or pork skin (các tân ngữ); on top (cụm vị trí).",
    "pos": "After (preposition); steaming (gerund); cooks (noun); add (verb); dried (adjective); shrimp (noun); green (adjective); onion (noun modifier); oil (noun); crispy (adjective); bread (noun); or (conjunction); pork (noun); skin (noun); on (preposition); top (noun).",
    "note": ""
  },
  {
    "sentence": "Visitors often enjoy it as a snack while exploring markets and traditional food streets.",
    "structure": "S + V + O + while + V-ing",
    "grammar": "Dùng while + V-ing để nói hành động đang diễn ra đồng thời.",
    "translation": "Du khách thường thưởng thức bánh như một món ăn nhẹ khi khám phá chợ và những con phố ẩm thực truyền thống.",
    "function": "Visitors (chủ ngữ); often enjoy it as a snack (vị ngữ); while exploring markets and traditional food streets (cụm đồng thời).",
    "pos": "Visitors (noun); often (adverb); enjoy (verb); it (pronoun/determiner); as (preposition); a (article); snack (noun); while (conjunction); exploring (gerund); markets (noun); and (conjunction); traditional (adjective); food (noun modifier); streets (noun).",
    "note": ""
  },
  {
    "sentence": "The outside is soft and chewy, while the inside is salty and rich.",
    "structure": "Clause, while + clause",
    "grammar": "Dùng while để đối chiếu hai phần hoặc hai tình huống.",
    "translation": "Bên ngoài mềm và dai, trong khi phần bên trong mặn và đậm đà.",
    "function": "The outside (chủ ngữ mệnh đề một); is soft and chewy (vị ngữ); while the inside (chủ ngữ mệnh đề hai); is salty and rich (vị ngữ tương phản).",
    "pos": "The (article); outside (adverb); is (linking/auxiliary verb); soft (adjective); and (conjunction); chewy (adjective); while (conjunction); the (article); inside (preposition); is (linking/auxiliary verb); salty (adjective); and (conjunction); rich (adjective).",
    "note": ""
  },
  {
    "sentence": "Some cakes are wrapped in banana leaves before steaming, while others are boiled without leaves.",
    "structure": "S + be + V3 + without + noun",
    "grammar": "Dùng without + danh từ để nói không có thứ gì.",
    "translation": "Một số bánh được gói trong lá chuối trước khi hấp, trong khi những loại khác được luộc không có lá.",
    "function": "Some cakes (chủ ngữ mệnh đề một); are wrapped in banana leaves before steaming (bị động); while others (chủ ngữ mệnh đề hai); are boiled without leaves (bị động tương phản).",
    "pos": "Some (determiner); cakes (noun); are (linking/auxiliary verb); wrapped (past participle); in (preposition); banana (noun modifier); leaves (noun); before (preposition); steaming (gerund); while (conjunction); others (pronoun/determiner); are (linking/auxiliary verb); boiled (past participle); without (preposition); leaves (noun).",
    "note": ""
  }
];
