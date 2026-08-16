// ===== festival02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Giong Festival is held in Hanoi to honor Saint Giong, a legendary Vietnamese hero.",
    "structure": "S + passive verb + place + purpose phrase + apposition",
    "grammar": "Câu bị động; to-infinitive chỉ mục đích; cụm đồng vị.",
    "translation": "Lễ hội Gióng được tổ chức tại Hà Nội để tôn vinh Thánh Gióng, một vị anh hùng huyền thoại của Việt Nam.",
    "function": "Giong Festival (chủ ngữ); is held (cụm động từ bị động); in Hanoi (nơi chốn); to honor Saint Giong (mục đích); a legendary Vietnamese hero (đồng vị).",
    "pos": "Giong (proper noun); Festival (adjective); is (auxiliary verb); held (verb); in (preposition); Hanoi (proper noun); to (preposition); honor (verb); Saint (proper noun); Giong (proper noun); a (article); legendary (adjective); Vietnamese (adjective); hero (noun).",
    "note": ""
  },
  {
    "sentence": "It remembers his fight to protect the country from foreign enemies.",
    "structure": "S + V + O + to-infinitive",
    "grammar": "To-infinitive bổ nghĩa cho danh từ fight.",
    "translation": "Lễ hội tưởng nhớ cuộc chiến của ngài để bảo vệ đất nước khỏi kẻ thù ngoại xâm.",
    "function": "It (chủ ngữ); remembers (động từ chính); his fight (tân ngữ); to protect the country from foreign enemies (cụm nguyên mẫu bổ nghĩa).",
    "pos": "It (pronoun); remembers (verb); his (possessive determiner); fight (verb); to (preposition); protect (verb); the (article); country (noun); from (preposition); foreign (adjective); enemies (noun).",
    "note": ""
  },
  {
    "sentence": "During the main ceremony, villagers act out important parts of the old story.",
    "structure": "Initial adverbial + S + phrasal verb + O",
    "grammar": "Cụm giới từ đầu câu; phrasal verb act out.",
    "translation": "Trong nghi lễ chính, dân làng diễn lại những phần quan trọng của câu chuyện xưa.",
    "function": "During the main ceremony (trạng ngữ thời gian); villagers (chủ ngữ); act out (cụm động từ); important parts of the old story (tân ngữ).",
    "pos": "During (preposition); the (article); main (adjective); ceremony (noun); villagers (noun); act (verb); out (noun); important (adjective); parts (noun); of (preposition); the (article); old (adjective); story (noun).",
    "note": ""
  },
  {
    "sentence": "People carry flags, drums, and special objects through the village.",
    "structure": "S + V + coordinated objects + place phrase",
    "grammar": "Hiện tại đơn; các tân ngữ song song.",
    "translation": "Mọi người mang cờ, trống và các vật phẩm đặc biệt đi qua làng.",
    "function": "People (chủ ngữ); carry (động từ chính); flags, drums, and special objects (các tân ngữ); through the village (trạng ngữ chỉ đường đi).",
    "pos": "People (noun); carry (verb); flags (noun); drums (noun); and (conjunction); special (adjective); objects (noun); through (preposition); the (article); village (noun).",
    "note": ""
  },
  {
    "sentence": "It attracts many visitors who want to explore nature and learn about Vietnamese Buddhism.",
    "structure": "S + V + O + relative clause",
    "grammar": "Mệnh đề quan hệ với who; want to + V.",
    "translation": "Lễ hội thu hút nhiều du khách muốn khám phá thiên nhiên và tìm hiểu về Phật giáo Việt Nam.",
    "function": "It (chủ ngữ); attracts (động từ); many visitors (tân ngữ); who want to explore nature and learn about Vietnamese Buddhism (mệnh đề quan hệ).",
    "pos": "It (pronoun); attracts (verb); many (determiner); visitors (noun); who (pronoun); want (verb); to (preposition); explore (verb); nature (noun); and (conjunction); learn (verb); about (preposition); Vietnamese (adjective); Buddhism (noun).",
    "note": ""
  },
  {
    "sentence": "People climb Yen Tu Mountain or use a cable car to reach temples and pagodas.",
    "structure": "S + coordinated verbs + objects + purpose phrase",
    "grammar": "Or nối hai lựa chọn; to-infinitive chỉ mục đích.",
    "translation": "Mọi người leo núi Yên Tử hoặc đi cáp treo để đến các đền và chùa.",
    "function": "People (chủ ngữ); climb Yen Tu Mountain (vị ngữ thứ nhất); or use a cable car (vị ngữ thứ hai); to reach temples and pagodas (cụm chỉ mục đích).",
    "pos": "People (noun); climb (verb); Yen (proper noun); Tu (proper noun); Mountain (noun); or (conjunction); use (verb); a (article); cable (adjective); car (noun); to (preposition); reach (verb); temples (noun); and (conjunction); pagodas (noun).",
    "note": ""
  },
  {
    "sentence": "The most famous place is Dong Pagoda, located near the top.",
    "structure": "S + linking verb + complement + participle phrase",
    "grammar": "Cụm phân từ quá khứ rút gọn bổ nghĩa cho Dong Pagoda.",
    "translation": "Địa điểm nổi tiếng nhất là chùa Đồng, nằm gần đỉnh núi.",
    "function": "The most famous place (chủ ngữ); is (động từ liên kết); Dong Pagoda (bổ ngữ); located near the top (cụm phân từ bổ nghĩa).",
    "pos": "The (article); most (determiner); famous (adjective); place (noun); is (linking verb); Dong (proper noun); Pagoda (noun); located (verb); near (preposition); the (article); top (noun).",
    "note": ""
  },
  {
    "sentence": "Fishermen organize it to thank the whale and pray for safe trips, good weather, and a successful fishing season.",
    "structure": "S + V + O + coordinated purpose infinitives",
    "grammar": "Hai động từ nguyên mẫu chỉ mục đích nối bằng and.",
    "translation": "Ngư dân tổ chức lễ hội để cảm tạ cá voi và cầu mong những chuyến đi an toàn, thời tiết tốt và một mùa đánh bắt thành công.",
    "function": "Fishermen (chủ ngữ); organize (động từ); it (tân ngữ); to thank the whale and pray for safe trips, good weather, and a successful fishing season (cụm chỉ mục đích).",
    "pos": "Fishermen (noun); organize (verb); it (pronoun); to (preposition); thank (verb); the (article); whale (noun); and (conjunction); pray (verb); for (preposition); safe (adjective); trips (noun); good (adjective); weather (noun); and (conjunction); a (article); successful (adjective); fishing (noun); season (noun).",
    "note": ""
  },
  {
    "sentence": "Elders read prayers, while boats are decorated with bright flags.",
    "structure": "S + V + O + while-clause",
    "grammar": "While nối hai mệnh đề; mệnh đề sau ở bị động.",
    "translation": "Các bậc cao niên đọc lời cầu nguyện, trong khi thuyền được trang trí bằng những lá cờ rực rỡ.",
    "function": "Elders (chủ ngữ mệnh đề chính); read prayers (vị ngữ); while (liên từ); boats (chủ ngữ mệnh đề phụ); are decorated with bright flags (vị ngữ bị động).",
    "pos": "Elders (noun); read (verb); prayers (noun); while (conjunction); boats (noun); are (auxiliary verb); decorated (verb); with (preposition); bright (adjective); flags (noun).",
    "note": ""
  },
  {
    "sentence": "This festival shows the strong relationship between coastal people and the sea.",
    "structure": "S + V + O + between phrase",
    "grammar": "Hiện tại đơn; between A and B chỉ mối quan hệ.",
    "translation": "Lễ hội này thể hiện mối quan hệ bền chặt giữa người dân ven biển và biển cả.",
    "function": "This festival (chủ ngữ); shows (động từ); the strong relationship (tân ngữ); between coastal people and the sea (cụm giới từ bổ nghĩa).",
    "pos": "This (pronoun); festival (adjective); shows (verb); the (article); strong (adjective); relationship (noun); between (preposition); coastal (adjective); people (noun); and (conjunction); the (article); sea (noun).",
    "note": ""
  }
];
