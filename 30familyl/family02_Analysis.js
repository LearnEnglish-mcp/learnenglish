const newAnalysisData = [
  {
    "sentence": "My school is located near my house, so it only takes me a few minutes to get there every morning.",
    "structure": "Clause + so + clause",
    "grammar": "Dùng so để nối nguyên nhân với kết quả.",
    "translation": "Trường tôi nằm gần nhà nên mỗi sáng tôi chỉ mất vài phút để đến đó.",
    "function": "My school (chủ ngữ); is located near my house (cụm bị động chỉ vị trí); so it only takes me a few minutes to get there every morning (mệnh đề kết quả).",
    "pos": "My (possessive determiner); school (noun); is (linking/auxiliary verb); located (past participle/verb); near (preposition); my (possessive determiner); house (noun); so (conjunction); it (pronoun); only (adverb); takes (verb); me (pronoun); a (article); few (determiner); minutes (noun); to (preposition); get (verb); there (adverb); every (determiner); morning (gerund/present participle).",
    "note": ""
  },
  {
    "sentence": "Although it is not very large, it is clean and beautiful.",
    "structure": "Although + clause, main clause",
    "grammar": "Dùng although để diễn tả sự tương phản.",
    "translation": "Mặc dù trường không quá lớn, nó sạch sẽ và đẹp.",
    "function": "Although it is not very large (mệnh đề nhượng bộ); it (chủ ngữ mệnh đề chính); is clean and beautiful (bổ ngữ tính từ).",
    "pos": "Although (conjunction); it (pronoun); is (linking/auxiliary verb); not (adverb); very (adverb); large (adjective); it (pronoun); is (linking/auxiliary verb); clean (adjective); and (conjunction); beautiful (adjective).",
    "note": ""
  },
  {
    "sentence": "There are many classrooms, trees, and flowers in the school yard.",
    "structure": "There are + plural noun",
    "grammar": "Dùng there are để nói sự tồn tại của nhiều vật.",
    "translation": "Có nhiều phòng học, cây và hoa trong sân trường.",
    "function": "There are (cấu trúc tồn tại); many classrooms, trees, and flowers (cụm danh từ); in the school yard (cụm chỉ nơi chốn).",
    "pos": "There (adverb); are (linking/auxiliary verb); many (determiner); classrooms (noun); trees (noun); and (conjunction); flowers (noun); in (preposition); the (article); school (noun); yard (noun).",
    "note": ""
  },
  {
    "sentence": "They always encourage students to study hard and join school activities.",
    "structure": "S + encourage + O + to + V",
    "grammar": "Dùng encourage + tân ngữ + to-infinitive để nói khuyến khích ai làm gì.",
    "translation": "Họ luôn khuyến khích học sinh học chăm chỉ và tham gia các hoạt động của trường.",
    "function": "They (chủ ngữ); always encourage (động từ chính); students (tân ngữ); to study hard and join school activities (cụm to-infinitive).",
    "pos": "They (pronoun); always (adverb); encourage (verb); students (noun); to (preposition); study (verb); hard (adjective); and (conjunction); join (verb); school (noun); activities (noun).",
    "note": ""
  },
  {
    "sentence": "I enjoy going to school because I can learn many useful things and meet my friends every day.",
    "structure": "S + can + V",
    "grammar": "Dùng can để nói khả năng.",
    "translation": "Tôi thích đi học vì tôi có thể học nhiều điều hữu ích và gặp bạn bè mỗi ngày.",
    "function": "I (chủ ngữ); enjoy going to school (vị ngữ); because I can learn many useful things and meet my friends every day (mệnh đề nguyên nhân).",
    "pos": "I (pronoun); enjoy (verb); going (gerund/present participle); to (preposition); school (noun); because (conjunction); I (pronoun); can (modal verb); learn (verb); many (determiner); useful (adjective); things (noun); and (conjunction); meet (verb); my (possessive determiner); friends (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "My favorite food is pizza because it is delicious and easy to eat.",
    "structure": "S + be + noun phrase",
    "grammar": "Dùng hiện tại đơn để nói sở thích hoặc lựa chọn.",
    "translation": "Món ăn yêu thích của tôi là pizza vì nó ngon và dễ ăn.",
    "function": "My favorite food (chủ ngữ); is pizza (bổ ngữ); because it is delicious and easy to eat (mệnh đề nguyên nhân).",
    "pos": "My (possessive determiner); favorite (adjective); food (noun); is (linking/auxiliary verb); pizza (noun); because (conjunction); it (pronoun); is (linking/auxiliary verb); delicious (adjective); and (conjunction); easy (adjective); to (preposition); eat (verb).",
    "note": ""
  },
  {
    "sentence": "The smell of fresh pizza always makes me hungry.",
    "structure": "S + make(s) + O + adjective",
    "grammar": "Dùng make + tân ngữ + tính từ để nói kết quả.",
    "translation": "Mùi pizza tươi luôn làm tôi thấy đói.",
    "function": "The smell of fresh pizza (chủ ngữ); always makes (động từ); me (tân ngữ); hungry (bổ ngữ cho tân ngữ).",
    "pos": "The (article); smell (verb); of (preposition); fresh (adjective); pizza (noun); always (adverb); makes (verb); me (pronoun); hungry (adjective).",
    "note": ""
  },
  {
    "sentence": "Therefore, I also eat vegetables, fruit, and fish regularly to stay healthy and strong.",
    "structure": "Therefore, clause",
    "grammar": "Dùng therefore để giới thiệu kết quả hoặc lựa chọn hợp lý.",
    "translation": "Vì vậy, tôi cũng ăn rau, trái cây và cá thường xuyên để luôn khỏe mạnh.",
    "function": "Therefore (trạng từ liên kết); I (chủ ngữ); also eat vegetables, fruit, and fish regularly (vị ngữ); to stay healthy and strong (cụm mục đích).",
    "pos": "Therefore (adverb); I (pronoun); also (adverb); eat (verb); vegetables (noun); fruit (noun); and (conjunction); fish (noun); regularly (adverb); to (preposition); stay (verb); healthy (adjective); and (conjunction); strong (adjective).",
    "note": ""
  },
  {
    "sentence": "To achieve my dream, I study hard every day, especially Biology and English.",
    "structure": "To + V, main clause",
    "grammar": "Dùng to-infinitive ở đầu câu để nói mục đích.",
    "translation": "Để đạt được ước mơ, tôi học chăm chỉ mỗi ngày, đặc biệt là Sinh học và tiếng Anh.",
    "function": "To achieve my dream (cụm mục đích); I (chủ ngữ); study hard (vị ngữ); every day (trạng ngữ thời gian); especially Biology and English (cụm nhấn mạnh).",
    "pos": "To (preposition); achieve (verb); my (possessive determiner); dream (noun); I (pronoun); study (verb); hard (adjective); every (determiner); day (noun); especially (adverb); Biology (noun); and (conjunction); English (proper noun).",
    "note": ""
  },
  {
    "sentence": "However, I will continue to work hard and never give up on my dream.",
    "structure": "However, S + will + V",
    "grammar": "Dùng however để chuyển ý và will để nói quyết tâm tương lai.",
    "translation": "Tuy nhiên, tôi sẽ tiếp tục làm việc chăm chỉ và không bao giờ từ bỏ ước mơ.",
    "function": "However (trạng từ liên kết); I (chủ ngữ); will continue to work hard (vị ngữ tương lai); and never give up on my dream (vị ngữ song song).",
    "pos": "However (adverb); I (pronoun); will (modal verb); continue (verb); to (preposition); work (verb); hard (adjective); and (conjunction); never (adverb); give (verb); up (adverb); on (preposition); my (possessive determiner); dream (noun).",
    "note": ""
  }
];
