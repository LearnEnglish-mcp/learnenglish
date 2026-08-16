// ===== family03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Children can assist by washing vegetables, preparing ingredients, or setting the table.",
    "structure": "S + can assist by + V-ing",
    "grammar": "Dùng by + V-ing để nói cách hỗ trợ.",
    "translation": "Trẻ em có thể hỗ trợ bằng cách rửa rau, chuẩn bị nguyên liệu hoặc dọn bàn.",
    "function": "Children (chủ ngữ); can assist (modal + động từ); by washing vegetables, preparing ingredients, or setting the table (cụm by + các V-ing song song chỉ cách thức).",
    "pos": "Children (noun); can (modal verb); assist (verb); by (preposition); washing (verb); vegetables (noun); preparing (verb); ingredients (noun); or (conjunction); setting (verb); the (article); table (noun).",
    "note": ""
  },
  {
    "sentence": "Children learn how to prepare food safely and understand the value of healthy eating.",
    "structure": "S + learn how to + V",
    "grammar": "Dùng how to + động từ để nói học cách làm việc gì.",
    "translation": "Trẻ em học cách chuẩn bị thức ăn an toàn và hiểu giá trị của việc ăn uống lành mạnh.",
    "function": "Children (chủ ngữ); learn how to prepare food safely (vị ngữ thứ nhất); and understand the value of healthy eating (vị ngữ song song thứ hai).",
    "pos": "Children (noun); learn (verb); how (adverb); to (preposition); prepare (verb); food (noun); safely (adverb); and (conjunction); understand (verb); the (article); value (noun); of (preposition); healthy (adjective); eating (verb).",
    "note": ""
  },
  {
    "sentence": "They also become more responsible and independent.",
    "structure": "S + become + adjective",
    "grammar": "Dùng become + tính từ để nói sự thay đổi trạng thái.",
    "translation": "Các em cũng trở nên có trách nhiệm và độc lập hơn.",
    "function": "They (chủ ngữ); also become (động từ liên kết); more responsible and independent (bổ ngữ tính từ).",
    "pos": "They (noun); also (adverb); become (verb); more (adverb); responsible (adjective); and (conjunction); independent (adjective).",
    "note": ""
  },
  {
    "sentence": "Everyone works together to create a delicious meal.",
    "structure": "S + V + to + V",
    "grammar": "Dùng to-infinitive để nói mục đích.",
    "translation": "Mọi người cùng làm việc để tạo ra một bữa ăn ngon.",
    "function": "Everyone (chủ ngữ); works together (động từ + trạng từ); to create a delicious meal (cụm to-infinitive chỉ mục đích).",
    "pos": "Everyone (pronoun); works (verb); together (adverb); to (preposition); create (verb); a (article); delicious (adjective); meal (noun).",
    "note": ""
  },
  {
    "sentence": "The fish is cooked until it is golden and delicious.",
    "structure": "S + be + V3 + until + clause",
    "grammar": "Dùng until để nói một hành động tiếp tục đến một thời điểm.",
    "translation": "Cá được nấu cho đến khi vàng và ngon.",
    "function": "The fish (chủ ngữ); is cooked (bị động); until it is golden and delicious (mệnh đề với until chỉ điểm kết thúc/trạng thái).",
    "pos": "The (article); fish (noun); is (linking/auxiliary verb); cooked (verb); until (conjunction); it (noun); is (linking/auxiliary verb); golden (adjective); and (conjunction); delicious (adjective).",
    "note": ""
  },
  {
    "sentence": "This dish tastes even better when eaten with rice and soup.",
    "structure": "Main clause + when + V3 phrase",
    "grammar": "Dùng when + phân từ quá khứ trong cụm rút gọn chỉ thời điểm.",
    "translation": "Món này còn ngon hơn khi ăn cùng cơm và canh.",
    "function": "This dish (chủ ngữ); tastes (động từ liên kết); even better (bổ ngữ); when eaten with rice and soup (cụm when rút gọn chỉ điều kiện/thời điểm).",
    "pos": "This (determiner); dish (noun); tastes (verb); even (adverb); better (adjective); when (conjunction); eaten (noun); with (preposition); rice (noun); and (conjunction); soup (noun).",
    "note": ""
  },
  {
    "sentence": "I enjoy this meal because it reminds me of family gatherings.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để giải thích nguyên nhân.",
    "translation": "Tôi thích bữa ăn này vì nó nhắc tôi về những buổi tụ họp gia đình.",
    "function": "I (chủ ngữ); enjoy (động từ); this meal (tân ngữ); because it reminds me of family gatherings (mệnh đề nguyên nhân).",
    "pos": "I (pronoun); enjoy (verb); this (determiner); meal (noun); because (conjunction); it (noun); reminds (verb); me (pronoun); of (preposition); family (noun); gatherings (noun).",
    "note": ""
  },
  {
    "sentence": "Family members can sit together longer and enjoy a relaxed meal without rushing.",
    "structure": "Main clause + without + V-ing",
    "grammar": "Dùng without + V-ing để nói không thực hiện một hành động.",
    "translation": "Các thành viên gia đình có thể ngồi cùng nhau lâu hơn và thưởng thức một bữa ăn thư giãn mà không vội vàng.",
    "function": "Family members (chủ ngữ); can sit together longer and enjoy a relaxed meal (hai vị ngữ với modal can); without rushing (cụm without + V-ing).",
    "pos": "Family (noun); members (noun); can (modal verb); sit (verb); together (adverb); longer (adverb); and (conjunction); enjoy (verb); a (article); relaxed (adjective); meal (noun); without (preposition); rushing (verb).",
    "note": ""
  },
  {
    "sentence": "Others may invite relatives or grandparents to join the meal.",
    "structure": "S + may + V",
    "grammar": "Dùng may để nói khả năng.",
    "translation": "Những gia đình khác có thể mời họ hàng hoặc ông bà tham gia bữa ăn.",
    "function": "Others (chủ ngữ); may invite (modal + động từ); relatives or grandparents (tân ngữ); to join the meal (cụm to-infinitive bổ nghĩa cho invite).",
    "pos": "Others (pronoun); may (modal verb); invite (verb); relatives (noun); or (conjunction); grandparents (noun); to (preposition); join (verb); the (article); meal (noun).",
    "note": ""
  },
  {
    "sentence": "Even a simple dinner can strengthen relationships and create lasting memories.",
    "structure": "Even + noun phrase + can + V",
    "grammar": "Dùng even để nhấn mạnh một trường hợp tưởng như đơn giản.",
    "translation": "Ngay cả một bữa tối đơn giản cũng có thể củng cố các mối quan hệ và tạo ra những kỷ niệm lâu dài.",
    "function": "Even a simple dinner (chủ ngữ được nhấn mạnh bằng even); can strengthen relationships and create lasting memories (hai động từ song song với modal can).",
    "pos": "Even (adverb); a (article); simple (adjective); dinner (noun); can (modal verb); strengthen (verb); relationships (noun); and (conjunction); create (verb); lasting (adjective); memories (noun).",
    "note": ""
  }
];
