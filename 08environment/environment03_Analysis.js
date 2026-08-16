// ===== environment03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Energy is needed for lights, machines, transport, cooking, and many daily activities.",
    "structure": "S + be + needed + for + N",
    "grammar": "Dùng bị động để nói một thứ cần thiết cho mục đích nào.",
    "translation": "Năng lượng cần thiết cho đèn, máy móc, giao thông, nấu ăn và nhiều hoạt động hằng ngày.",
    "function": "Energy (chủ ngữ); is (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); needed for lights machines transport cooking and many daily activities (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Energy (noun); is (linking verb); needed (adjective); for (preposition); lights (noun); machines (noun); transport (noun); cooking (gerund); and (conjunction); many (determiner); daily (adjective); activities (noun).",
    "note": ""
  },
  {
    "sentence": "These fuels can create pollution and contribute to climate change.",
    "structure": "S + contribute to + N",
    "grammar": "Dùng contribute to để nói góp phần vào điều gì.",
    "translation": "Những nhiên liệu này có thể tạo ô nhiễm và góp phần gây biến đổi khí hậu.",
    "function": "These fuels (chủ ngữ); can (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); create pollution and contribute to climate change (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "These (noun); fuels (noun); can (modal verb); create (verb); pollution (noun); and (conjunction); contribute (noun); to (preposition); climate (noun); change (verb).",
    "note": ""
  },
  {
    "sentence": "We can save energy by turning off lights, fans, computers, and televisions when they are not needed.",
    "structure": "S + can + V + by + V-ing",
    "grammar": "Dùng by + V-ing để nói cách thực hiện một việc.",
    "translation": "Chúng ta có thể tiết kiệm năng lượng bằng cách tắt đèn, quạt, máy tính và tivi khi không cần dùng.",
    "function": "We (chủ ngữ); can (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); save energy by turning off lights fans computers and televisions when they are not needed (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "We (pronoun); can (modal verb); save (verb); energy (noun); by (preposition); turning (verb); off (adverb); lights (noun); fans (noun); computers (noun); and (conjunction); televisions (noun); when (conjunction); they (pronoun); are (linking verb); not (adverb); needed (adjective).",
    "note": ""
  },
  {
    "sentence": "Renewable energy from the sun, wind, and water is cleaner for the planet.",
    "structure": "S + be + comparative + for + N",
    "grammar": "Dùng tính từ so sánh hơn để so sánh mức độ.",
    "translation": "Năng lượng tái tạo từ mặt trời, gió và nước sạch hơn cho hành tinh.",
    "function": "Renewable energy from the sun wind and water (chủ ngữ); is (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); cleaner for the planet (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Renewable (adjective); energy (noun); from (preposition); the (article); sun (noun); wind (noun); and (conjunction); water (noun); is (linking verb); cleaner (adjective); for (preposition); the (article); planet (noun).",
    "note": ""
  },
  {
    "sentence": "Governments and businesses should invest in these sources.",
    "structure": "S + should invest in + N",
    "grammar": "Dùng should để đưa ra lời khuyên về đầu tư.",
    "translation": "Chính phủ và doanh nghiệp nên đầu tư vào những nguồn này.",
    "function": "Governments and businesses (chủ ngữ); should (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); invest in these sources (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Governments (noun); and (conjunction); businesses (noun); should (modal verb); invest (noun); in (preposition); these (noun); sources (noun).",
    "note": ""
  },
  {
    "sentence": "When everyone uses energy wisely, we reduce pollution, save money, and protect natural resources for generations to come.",
    "structure": "When + S + V, S + V",
    "grammar": "Dùng when để nêu một điều kiện hoặc hoàn cảnh thường gặp.",
    "translation": "Khi mọi người sử dụng năng lượng khôn ngoan, chúng ta giảm ô nhiễm, tiết kiệm tiền và bảo vệ tài nguyên thiên nhiên.",
    "function": "When everyone uses energy wisely we (chủ ngữ); reduce (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); pollution save money and protect natural resources for generations to come (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "When (conjunction); everyone (pronoun); uses (noun); energy (noun); wisely (adverb); we (pronoun); reduce (verb); pollution (noun); save (verb); money (noun); and (conjunction); protect (verb); natural (adjective); resources (noun); for (preposition); generations (noun); to (preposition); come (verb).",
    "note": ""
  },
  {
    "sentence": "They provide clean air, food, medicine, wood, and protection from floods.",
    "structure": "S + provide + O",
    "grammar": "Dùng provide để nói cung cấp thứ gì.",
    "translation": "Rừng cung cấp không khí sạch, thực phẩm, thuốc men, gỗ và sự bảo vệ khỏi lũ lụt.",
    "function": "They (chủ ngữ); provide (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); clean air food medicine wood and protection from floods (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "They (pronoun); provide (verb); clean (adjective); air (noun); food (noun); medicine (noun); wood (noun); and (conjunction); protection (noun); from (preposition); floods (noun).",
    "note": ""
  },
  {
    "sentence": "Some animals may become endangered or disappear forever.",
    "structure": "S + may become + Adj",
    "grammar": "Dùng may become để nói trạng thái có thể xảy ra.",
    "translation": "Một số động vật có thể trở nên nguy cấp hoặc biến mất mãi mãi.",
    "function": "Some animals (chủ ngữ); may (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); become endangered or disappear forever (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Some (determiner); animals (noun); may (modal verb); become (verb); endangered (adjective); or (conjunction); disappear (noun); forever (adverb).",
    "note": ""
  },
  {
    "sentence": "Climate change means long-term changes in the Earth’s temperature and weather patterns.",
    "structure": "S + mean(s) + noun phrase",
    "grammar": "Dùng means để định nghĩa một khái niệm.",
    "translation": "Biến đổi khí hậu có nghĩa là những thay đổi dài hạn về nhiệt độ và kiểu thời tiết của Trái Đất.",
    "function": "Climate (chủ ngữ); change (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); means long term changes in the Earth’s temperature and weather patterns (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Climate (noun); change (verb); means (verb); long (adjective); term (noun); changes (noun); in (preposition); the (article); Earth’s (noun); temperature (noun); and (conjunction); weather (noun); patterns (noun).",
    "note": ""
  },
  {
    "sentence": "Building a greener future requires cooperation, patience, and good decisions.",
    "structure": "S + require(s) + N",
    "grammar": "Dùng require để nói điều cần có để đạt mục tiêu.",
    "translation": "Xây dựng một tương lai xanh hơn đòi hỏi sự hợp tác, kiên nhẫn và những quyết định đúng đắn.",
    "function": "Building a greener future (chủ ngữ); requires (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); cooperation patience and good decisions (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Building (verb); a (article); greener (adjective); future (noun); requires (verb); cooperation (noun); patience (noun); and (conjunction); good (adjective); decisions (noun).",
    "note": ""
  }
];
