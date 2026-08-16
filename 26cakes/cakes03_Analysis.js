const newAnalysisData = [
  {
    "sentence": "The batter is made from rice flour, coconut milk, and turmeric.",
    "structure": "S + be + V3 + from + ingredients",
    "grammar": "Dùng bị động để mô tả nguyên liệu.",
    "translation": "Bột bánh được làm từ bột gạo, nước cốt dừa và nghệ.",
    "function": "The batter (chủ ngữ); is made (bị động); from rice flour, coconut milk, and turmeric (cụm nguyên liệu).",
    "pos": "The (article); batter (noun); is (linking/auxiliary verb); made (past participle); from (preposition); rice (noun); flour (noun); coconut (noun modifier); milk (noun); and (conjunction); turmeric (noun).",
    "note": ""
  },
  {
    "sentence": "A shrimp is usually placed on top of each cake.",
    "structure": "S + be + V3 + place",
    "grammar": "Dùng bị động để mô tả vị trí của nguyên liệu.",
    "translation": "Một con tôm thường được đặt trên mỗi chiếc bánh.",
    "function": "A shrimp (chủ ngữ); is usually placed (bị động); on top of each cake (cụm vị trí).",
    "pos": "A (article); shrimp (noun); is (linking/auxiliary verb); usually (adverb); placed (past participle); on (preposition); top (noun); of (preposition); each (determiner); cake (noun).",
    "note": ""
  },
  {
    "sentence": "It is best when served hot.",
    "structure": "S + be + complement + when + V3",
    "grammar": "Dùng when để nói điều kiện hoặc thời điểm món ăn ngon nhất.",
    "translation": "Bánh ngon nhất khi được phục vụ nóng.",
    "function": "It (chủ ngữ); is best (động từ liên kết + bổ ngữ); when served hot (mệnh đề rút gọn chỉ thời điểm).",
    "pos": "It (pronoun/determiner); is (linking/auxiliary verb); best (adjective); when (conjunction); served (past participle); hot (adjective).",
    "note": ""
  },
  {
    "sentence": "Sweet cakes may have green bean, coconut, or sugar filling.",
    "structure": "S + may + have + O",
    "grammar": "Dùng may để nói một khả năng hoặc phiên bản có thể có.",
    "translation": "Bánh ngọt có thể có nhân đậu xanh, dừa hoặc đường.",
    "function": "Sweet cakes (chủ ngữ); may have (modal + động từ); green bean, coconut, or sugar filling (tân ngữ).",
    "pos": "Sweet (adjective); cakes (noun); may (modal verb); have (verb); green (adjective); bean (noun modifier); coconut (noun modifier); or (conjunction); sugar (noun modifier); filling (noun).",
    "note": ""
  },
  {
    "sentence": "The cake is steamed until the dough becomes soft and chewy.",
    "structure": "S + be + V3 + until + clause",
    "grammar": "Dùng until để nói quá trình tiếp diễn đến một trạng thái.",
    "translation": "Bánh được hấp cho đến khi bột trở nên mềm và dai.",
    "function": "The cake (chủ ngữ); is steamed (bị động); until the dough becomes soft and chewy (mệnh đề giới hạn).",
    "pos": "The (article); cake (noun); is (linking/auxiliary verb); steamed (past participle); until (conjunction); the (article); dough (noun); becomes (linking verb); soft (adjective); and (conjunction); chewy (adjective).",
    "note": ""
  },
  {
    "sentence": "When people open the leaf, they can smell a pleasant banana leaf aroma.",
    "structure": "When + clause, S + can + V",
    "grammar": "Dùng when với can để nói khả năng trong một tình huống.",
    "translation": "Khi mọi người mở lá, họ có thể ngửi thấy mùi thơm dễ chịu của lá chuối.",
    "function": "When people open the leaf (mệnh đề thời gian); they (chủ ngữ); can smell (modal + động từ); a pleasant banana leaf aroma (tân ngữ).",
    "pos": "When (conjunction); people (noun); open (verb); the (article); leaf (noun modifier); they (pronoun/determiner); can (modal verb); smell (verb); a (article); pleasant (adjective); banana (noun modifier); leaf (noun modifier); aroma (noun).",
    "note": ""
  },
  {
    "sentence": "Children like its soft texture, while adults remember it from childhood.",
    "structure": "Clause, while + clause",
    "grammar": "Dùng while để đối chiếu hai nhóm.",
    "translation": "Trẻ em thích kết cấu mềm của bánh, trong khi người lớn nhớ đến nó từ thời thơ ấu.",
    "function": "Children (chủ ngữ mệnh đề một); like its soft texture (vị ngữ); while adults (chủ ngữ mệnh đề hai); remember it from childhood (vị ngữ tương phản).",
    "pos": "Children (noun); like (verb); its (possessive determiner); soft (adjective); texture (noun); while (conjunction); adults (noun); remember (verb); it (pronoun/determiner); from (preposition); childhood (noun).",
    "note": ""
  },
  {
    "sentence": "Its name means pig skin cake, but it does not contain pig skin.",
    "structure": "Clause, but + clause",
    "grammar": "Dùng but để nối hai ý tương phản.",
    "translation": "Tên bánh có nghĩa là bánh da lợn, nhưng bánh không chứa da lợn.",
    "function": "Its name (chủ ngữ mệnh đề một); means pig skin cake (vị ngữ); but it (chủ ngữ mệnh đề hai); does not contain pig skin (vị ngữ phủ định).",
    "pos": "Its (possessive determiner); name (noun); means (verb); pig (noun modifier); skin (noun); cake (noun); but (conjunction); it (pronoun/determiner); does (auxiliary verb); not (adverb); contain (verb); pig (noun modifier); skin (noun).",
    "note": ""
  },
  {
    "sentence": "They add the next layer only after the first becomes firm.",
    "structure": "S + V + O + only after + clause",
    "grammar": "Dùng only after để nhấn mạnh trình tự.",
    "translation": "Họ chỉ thêm lớp tiếp theo sau khi lớp đầu tiên trở nên chắc.",
    "function": "They (chủ ngữ); add (động từ); the next layer (tân ngữ); only after the first becomes firm (cụm thời gian nhấn mạnh).",
    "pos": "They (pronoun/determiner); add (verb); the (article); next (adjective); layer (noun); only (adverb); after (preposition); the (article); first (noun); becomes (linking verb); firm (adjective).",
    "note": ""
  },
  {
    "sentence": "Its bright colorful layers make it attractive to children and adults.",
    "structure": "S + make(s) + O + adjective",
    "grammar": "Dùng make + tân ngữ + tính từ để nói tác động.",
    "translation": "Những lớp màu sắc tươi sáng làm bánh hấp dẫn đối với trẻ em và người lớn.",
    "function": "Its bright colorful layers (chủ ngữ); make (động từ); it (tân ngữ); attractive (bổ ngữ); to children and adults (cụm chỉ đối tượng).",
    "pos": "Its (possessive determiner); bright (adjective); colorful (adjective); layers (noun); make (verb); it (pronoun/determiner); attractive (adjective); to (noun); children (noun); and (conjunction); adults (noun).",
    "note": ""
  }
];
