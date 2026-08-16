// ===== festival01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "The Hung Kings Festival is held in Phu Tho Province every year.",
    "structure": "S + passive verb + place + time",
    "grammar": "Câu bị động ở hiện tại đơn.",
    "translation": "Lễ hội Đền Hùng được tổ chức tại tỉnh Phú Thọ hằng năm.",
    "function": "The Hung Kings Festival (chủ ngữ); is held (cụm động từ bị động); in Phu Tho Province (cụm giới từ chỉ nơi chốn); every year (trạng ngữ thời gian).",
    "pos": "The (article); Hung (proper noun); Kings (noun); Festival (adjective); is (auxiliary verb); held (verb); in (preposition); Phu (proper noun); Tho (proper noun); Province (noun); every (determiner); year (noun).",
    "note": ""
  },
  {
    "sentence": "It takes place on the tenth day of the third lunar month.",
    "structure": "S + V + time phrase",
    "grammar": "Hiện tại đơn với cụm take place.",
    "translation": "Lễ hội diễn ra vào ngày mùng mười tháng ba âm lịch.",
    "function": "It (chủ ngữ); takes place (động từ/cụm động từ); on the tenth day of the third lunar month (trạng ngữ thời gian).",
    "pos": "It (pronoun); takes (verb); place (noun); on (preposition); the (article); tenth (adjective); day (noun); of (preposition); the (article); third (adjective); lunar (adjective); month (noun).",
    "note": ""
  },
  {
    "sentence": "Many people visit the Hung Temple to remember the ancient kings of Vietnam.",
    "structure": "S + V + O + to-infinitive of purpose",
    "grammar": "To-infinitive chỉ mục đích.",
    "translation": "Nhiều người đến Đền Hùng để tưởng nhớ các vị vua cổ của Việt Nam.",
    "function": "Many people (chủ ngữ); visit (động từ chính); the Hung Temple (tân ngữ); to remember the ancient kings of Vietnam (cụm động từ nguyên mẫu chỉ mục đích).",
    "pos": "Many (determiner); people (noun); visit (verb); the (article); Hung (proper noun); Temple (noun); to (preposition); remember (verb); the (article); ancient (adjective); kings (noun); of (preposition); Vietnam (proper noun).",
    "note": ""
  },
  {
    "sentence": "Important ceremonies are held in a serious and respectful way.",
    "structure": "S + passive verb + manner phrase",
    "grammar": "Câu bị động hiện tại đơn; cụm trạng ngữ chỉ cách thức.",
    "translation": "Các nghi lễ quan trọng được tổ chức theo cách trang nghiêm và kính cẩn.",
    "function": "Important ceremonies (chủ ngữ); are held (cụm động từ bị động); in a serious and respectful way (trạng ngữ chỉ cách thức).",
    "pos": "Important (adjective); ceremonies (noun); are (auxiliary verb); held (verb); in (preposition); a (article); serious (adjective); and (conjunction); respectful (adjective); way (noun).",
    "note": ""
  },
  {
    "sentence": "Visitors can also watch folk games, wrestling, and cultural shows.",
    "structure": "S + modal + adverb + V + coordinated objects",
    "grammar": "Can + động từ nguyên mẫu; also bổ sung ý.",
    "translation": "Du khách cũng có thể xem các trò chơi dân gian, đấu vật và các chương trình văn hóa.",
    "function": "Visitors (chủ ngữ); can also watch (cụm động từ); folk games, wrestling, and cultural shows (các tân ngữ song song).",
    "pos": "Visitors (noun); can (modal verb); also (adverb); watch (verb); folk (noun); games (noun); wrestling (verb); and (conjunction); cultural (adjective); shows (verb).",
    "note": ""
  },
  {
    "sentence": "The Perfume Pagoda Festival is one of the largest religious festivals in Vietnam.",
    "structure": "S + linking verb + noun complement",
    "grammar": "Cấu trúc one of the + so sánh nhất + danh từ số nhiều.",
    "translation": "Lễ hội Chùa Hương là một trong những lễ hội tôn giáo lớn nhất ở Việt Nam.",
    "function": "The Perfume Pagoda Festival (chủ ngữ); is (động từ liên kết); one of the largest religious festivals (bổ ngữ); in Vietnam (cụm giới từ chỉ nơi chốn).",
    "pos": "The (article); Perfume (noun); Pagoda (noun); Festival (adjective); is (linking verb); one (determiner); of (preposition); the (article); largest (adjective); religious (adjective); festivals (noun); in (preposition); Vietnam (proper noun).",
    "note": ""
  },
  {
    "sentence": "The journey begins with a boat ride along Yen Stream.",
    "structure": "S + V + prepositional complements",
    "grammar": "Hiện tại đơn với begin with.",
    "translation": "Hành trình bắt đầu bằng một chuyến đi thuyền dọc theo suối Yến.",
    "function": "The journey (chủ ngữ); begins (động từ chính); with a boat ride (cụm giới từ bổ nghĩa); along Yen Stream (cụm giới từ chỉ tuyến đường).",
    "pos": "The (article); journey (noun); begins (verb); with (preposition); a (article); boat (noun); ride (noun); along (preposition); Yen (proper noun); Stream (noun).",
    "note": ""
  },
  {
    "sentence": "The festival is both a religious trip and a nature tour.",
    "structure": "S + linking verb + both A and B",
    "grammar": "Cấu trúc both A and B",
    "translation": "Lễ hội vừa là một chuyến hành hương tôn giáo vừa là một chuyến tham quan thiên nhiên.",
    "function": "The festival (chủ ngữ); is (động từ liên kết); both a religious trip and a nature tour (bổ ngữ song song).",
    "pos": "The (article); festival (adjective); is (linking verb); both (conjunction); a (article); religious (adjective); trip (noun); and (conjunction); a (article); nature (noun); tour (noun).",
    "note": ""
  },
  {
    "sentence": "The festival is well known for Quan Ho folk songs.",
    "structure": "S + be + adverb + past participle + for phrase",
    "grammar": "Cấu trúc be well known for.",
    "translation": "Lễ hội nổi tiếng với những làn điệu dân ca Quan họ.",
    "function": "The festival (chủ ngữ); is well known (cụm vị ngữ); for Quan Ho folk songs (cụm giới từ chỉ đặc điểm nổi tiếng).",
    "pos": "The (article); festival (adjective); is (linking verb); well (adverb); known (adjective); for (preposition); Quan (proper noun); Ho (proper noun); folk (noun); songs (noun).",
    "note": ""
  },
  {
    "sentence": "It brings communities together and helps young people understand and love their cultural heritage together today.",
    "structure": "S + coordinated verbs + objects + bare infinitives",
    "grammar": "Hai vị ngữ song song; help + O + động từ nguyên mẫu.",
    "translation": "Lễ hội gắn kết cộng đồng và giúp người trẻ hiểu và yêu di sản văn hóa của mình ngày nay.",
    "function": "It (chủ ngữ); brings communities together (vị ngữ thứ nhất); and helps young people understand and love their cultural heritage (vị ngữ thứ hai); together today (trạng ngữ).",
    "pos": "It (pronoun); brings (verb); communities (noun); together (adverb); and (conjunction); helps (verb); young (adjective); people (noun); understand (verb); and (conjunction); love (verb); their (possessive determiner); cultural (adjective); heritage (noun); together (adverb); today (adverb).",
    "note": ""
  }
];
