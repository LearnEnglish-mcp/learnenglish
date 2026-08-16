const newAnalysisData = [
  {
    "sentence": "Cooked rice is fried with shrimp, squid, eggs, carrots, peas, onions, and simple seasonings.",
    "structure": "S + be + V3 + with + noun",
    "grammar": "Dùng thể bị động để mô tả cách cơm được chiên.",
    "translation": "Cơm chín được chiên với tôm, mực, trứng, cà rốt, đậu Hà Lan, hành và gia vị đơn giản.",
    "function": "Cooked rice (chủ ngữ); is fried (cụm bị động); with shrimp, squid, eggs, carrots, peas, onions, and simple seasonings (cụm nguyên liệu).",
    "pos": "Cooked (past participle); rice (noun); is (linking/auxiliary verb); fried (past participle); with (preposition); shrimp (noun); squid (noun); eggs (noun); carrots (noun); peas (noun); onions (noun); and (conjunction); simple (adjective); seasonings (noun).",
    "note": ""
  },
  {
    "sentence": "The cook mixes everything in a hot pan until the rice becomes dry, fragrant, and evenly heated.",
    "structure": "S + V + until + clause",
    "grammar": "Dùng until để nói quá trình tiếp tục đến trạng thái mong muốn.",
    "translation": "Người nấu trộn mọi thứ trong chảo nóng cho đến khi cơm trở nên khô, thơm và nóng đều.",
    "function": "The cook (chủ ngữ); mixes (động từ); everything (tân ngữ); in a hot pan (cụm chỉ nơi); until the rice becomes dry, fragrant, and evenly heated (mệnh đề until).",
    "pos": "The (article); cook (verb); mixes (verb); everything (pronoun); in (preposition); a (article); hot (adjective); pan (noun); until (conjunction); the (article); rice (noun); becomes (linking verb); dry (adjective); fragrant (adjective); and (conjunction); evenly (adverb); heated (past participle).",
    "note": ""
  },
  {
    "sentence": "The seafood adds a sweet taste, while the vegetables make the meal fresh and attractive.",
    "structure": "Clause + while + clause",
    "grammar": "Dùng while để nối hai đặc điểm tương phản/bổ sung.",
    "translation": "Hải sản thêm vị ngọt, trong khi rau làm bữa ăn tươi và hấp dẫn.",
    "function": "The seafood (chủ ngữ mệnh đề một); adds a sweet taste (vị ngữ); while the vegetables (chủ ngữ mệnh đề hai); make the meal fresh and attractive (vị ngữ).",
    "pos": "The (article); seafood (noun); adds (verb); a (article); sweet (adjective); taste (linking verb); while (conjunction); the (article); vegetables (noun); make (verb); the (article); meal (noun); fresh (adjective); and (conjunction); attractive (adjective).",
    "note": ""
  },
  {
    "sentence": "A good plate should have separate grains, balanced flavors, and fresh ingredients throughout.",
    "structure": "S + should + V",
    "grammar": "Dùng should để nêu tiêu chí hoặc lời khuyên.",
    "translation": "Một đĩa ngon nên có hạt cơm rời, hương vị cân bằng và nguyên liệu tươi đều khắp.",
    "function": "A good plate (chủ ngữ); should have (modal + động từ); separate grains, balanced flavors, and fresh ingredients (các tân ngữ); throughout (trạng từ).",
    "pos": "A (article); good (adjective); plate (noun); should (modal verb); have (verb); separate (adjective); grains (noun); balanced (adjective); flavors (noun); and (conjunction); fresh (adjective); ingredients (noun); throughout (adverb).",
    "note": ""
  },
  {
    "sentence": "The soup can be clear, spicy, sour, or creamy, depending on the local cooking style.",
    "structure": "Clause + depending on + noun phrase",
    "grammar": "Dùng depending on để nói sự thay đổi phụ thuộc vào yếu tố khác.",
    "translation": "Nước dùng có thể trong, cay, chua hoặc béo, tùy theo phong cách nấu địa phương.",
    "function": "The soup (chủ ngữ); can be clear, spicy, sour, or creamy (modal + động từ liên kết + bổ ngữ); depending on the local cooking style (cụm phụ thuộc).",
    "pos": "The (article); soup (noun); can (modal verb); be (linking/auxiliary verb); clear (adjective); spicy (adjective); sour (adjective); or (conjunction); creamy (adjective); depending (participle/preposition); on (preposition); the (article); local (adjective); cooking (gerund); style (noun).",
    "note": ""
  },
  {
    "sentence": "A hot bowl is especially enjoyable on rainy days or when people want a quick and comforting meal.",
    "structure": "Main clause + when + clause",
    "grammar": "Dùng when để nói hoàn cảnh một món ăn đặc biệt dễ chịu.",
    "translation": "Một tô nóng đặc biệt dễ chịu vào những ngày mưa hoặc khi mọi người muốn một bữa ăn nhanh và ấm bụng.",
    "function": "A hot bowl (chủ ngữ); is especially enjoyable (vị ngữ); on rainy days (cụm thời gian); or when people want a quick and comforting meal (mệnh đề when).",
    "pos": "A (article); hot (adjective); bowl (noun); is (linking/auxiliary verb); especially (adverb); enjoyable (adjective); on (preposition); rainy (adjective); days (noun); or (conjunction); when (conjunction); people (pronoun); want (verb); a (article); quick (adjective); and (conjunction); comforting (adjective); meal (noun).",
    "note": ""
  },
  {
    "sentence": "People often add cheese, butter, garlic, green onions, or peanuts before cooking.",
    "structure": "S + V + O + before + V-ing",
    "grammar": "Dùng before + V-ing để nói hành động xảy ra trước.",
    "translation": "Mọi người thường thêm phô mai, bơ, tỏi, hành lá hoặc đậu phộng trước khi nướng.",
    "function": "People (chủ ngữ); often add (động từ); cheese, butter, garlic, green onions, or peanuts (tân ngữ); before cooking (cụm thời gian).",
    "pos": "People (pronoun); often (adverb); add (verb); cheese (noun); butter (noun); garlic (noun); green (adjective); onions (noun); or (conjunction); peanuts (noun); before (preposition); cooking (gerund).",
    "note": ""
  },
  {
    "sentence": "The oysters are ready when the topping melts and the meat becomes hot.",
    "structure": "Main clause + when + clause",
    "grammar": "Dùng when để nói dấu hiệu món ăn đã chín.",
    "translation": "Hàu chín khi phần phủ tan chảy và thịt trở nên nóng.",
    "function": "The oysters (chủ ngữ); are ready (động từ liên kết + bổ ngữ); when the topping melts and the meat becomes hot (mệnh đề when gồm hai vị ngữ song song).",
    "pos": "The (article); oysters (noun); are (linking/auxiliary verb); ready (adjective); when (conjunction); the (article); topping (noun); melts (verb); and (conjunction); the (article); meat (noun); becomes (linking verb); hot (adjective).",
    "note": ""
  },
  {
    "sentence": "Oysters should be fresh and cooked properly for safety.",
    "structure": "S + should be + adjective + and + V3",
    "grammar": "Dùng should be để nêu yêu cầu an toàn.",
    "translation": "Hàu nên tươi và được nấu đúng cách để bảo đảm an toàn.",
    "function": "Oysters (chủ ngữ); should be fresh (modal + bổ ngữ tính từ); and cooked properly (cụm bị động song song); for safety (cụm chỉ mục đích).",
    "pos": "Oysters (noun); should (modal verb); be (linking/auxiliary verb); fresh (adjective); and (conjunction); cooked (past participle); properly (adverb); for (preposition); safety (noun).",
    "note": ""
  },
  {
    "sentence": "Sweet and sour fish is popular because it combines simple ingredients with a strong flavor.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để giải thích vì sao món ăn phổ biến.",
    "translation": "Cá sốt chua ngọt phổ biến vì kết hợp nguyên liệu đơn giản với hương vị đậm.",
    "function": "Sweet and sour fish (chủ ngữ); is popular (vị ngữ); because it combines simple ingredients with a strong flavor (mệnh đề nguyên nhân).",
    "pos": "Sweet (adjective); and (conjunction); sour (adjective); fish (noun); is (linking/auxiliary verb); popular (adjective); because (conjunction); it (pronoun); combines (verb); simple (adjective); ingredients (noun); with (preposition); a (article); strong (adjective); flavor (noun).",
    "note": ""
  }
];
