const newAnalysisData = [
  {
    "sentence": "Pop music is one of the most popular music styles today.",
    "structure": "S + be + one of the most + adjective + plural noun",
    "grammar": "Dùng cấu trúc one of the most để nói một trong những đối tượng nổi bật nhất.",
    "translation": "Nhạc pop là một trong những phong cách âm nhạc phổ biến nhất hiện nay.",
    "function": "Pop music (chủ ngữ); is (động từ liên kết); one of the most popular music styles (bổ ngữ so sánh nhất); today (trạng ngữ thời gian).",
    "pos": "Pop (noun); music (noun); is (linking/auxiliary verb); one (determiner); of (preposition); the (article); most (determiner); popular (adjective); music (noun); styles (noun); today (adverb).",
    "note": ""
  },
  {
    "sentence": "It has simple lyrics, interesting melodies, and easy rhythms.",
    "structure": "S + have/has + O",
    "grammar": "Dùng have/has để mô tả đặc điểm.",
    "translation": "Nó có lời đơn giản, giai điệu thú vị và nhịp điệu dễ nghe.",
    "function": "It (chủ ngữ); has (động từ); simple lyrics, interesting melodies, and easy rhythms (các tân ngữ).",
    "pos": "It (pronoun); has (verb); simple (adjective); lyrics (noun); interesting (gerund/present participle); melodies (noun); and (conjunction); easy (adjective); rhythms (noun).",
    "note": ""
  },
  {
    "sentence": "Many people enjoy listening to pop songs at home, during travel, or while exercising every day.",
    "structure": "while + V-ing",
    "grammar": "Dùng while + V-ing để nói hành động diễn ra đồng thời.",
    "translation": "Nhiều người thích nghe các bài hát pop ở nhà, khi đi du lịch hoặc trong lúc tập thể dục mỗi ngày.",
    "function": "Many people (chủ ngữ); enjoy listening to pop songs (vị ngữ); at home, during travel, or while exercising every day (các cụm chỉ hoàn cảnh/thời gian).",
    "pos": "Many (determiner); people (pronoun); enjoy (verb); listening (gerund/present participle); to (preposition); pop (noun); songs (noun); at (preposition); home (noun); during (preposition); travel (verb); or (conjunction); while (conjunction); exercising (gerund/present participle); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Last summer, several popular songs became famous on television and online platforms.",
    "structure": "S + became + complement",
    "grammar": "Dùng became để nói sự thay đổi trong quá khứ.",
    "translation": "Mùa hè năm ngoái, một số bài hát phổ biến trở nên nổi tiếng trên truyền hình và các nền tảng trực tuyến.",
    "function": "Last summer (trạng ngữ thời gian); several popular songs (chủ ngữ); became famous (động từ liên kết + bổ ngữ); on television and online platforms (cụm chỉ nơi/phương tiện).",
    "pos": "Last (adjective); summer (noun); several (determiner); popular (adjective); songs (noun); became (verb); famous (adjective); on (preposition); television (noun); and (conjunction); online (adverb); platforms (noun).",
    "note": ""
  },
  {
    "sentence": "Pop music will continue to grow in the future.",
    "structure": "S + will + V",
    "grammar": "Dùng will để nói tương lai.",
    "translation": "Nhạc pop sẽ tiếp tục phát triển trong tương lai.",
    "function": "Pop music (chủ ngữ); will continue (tương lai); to grow (cụm to-infinitive); in the future (trạng ngữ thời gian).",
    "pos": "Pop (noun); music (noun); will (modal verb); continue (verb); to (preposition); grow (verb); in (preposition); the (article); future (noun).",
    "note": ""
  },
  {
    "sentence": "Many people enjoy its peaceful sound because it helps them relax and think clearly.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để nêu nguyên nhân.",
    "translation": "Nhiều người thích âm thanh yên bình của nó vì nó giúp họ thư giãn và suy nghĩ rõ ràng.",
    "function": "Many people (chủ ngữ); enjoy its peaceful sound (vị ngữ); because it helps them relax and think clearly (mệnh đề nguyên nhân).",
    "pos": "Many (determiner); people (pronoun); enjoy (verb); its (noun); peaceful (adjective); sound (noun); because (conjunction); it (pronoun); helps (verb); them (pronoun); relax (verb); and (conjunction); think (verb); clearly (adverb).",
    "note": ""
  },
  {
    "sentence": "Many classical musicians spend years learning difficult pieces.",
    "structure": "S + spend + time + V-ing",
    "grammar": "Dùng spend + thời gian + V-ing để nói dành thời gian làm gì.",
    "translation": "Nhiều nhạc sĩ cổ điển dành nhiều năm học những tác phẩm khó.",
    "function": "Many classical musicians (chủ ngữ); spend (động từ); years (tân ngữ thời gian); learning difficult pieces (cụm V-ing).",
    "pos": "Many (determiner); classical (adjective); musicians (noun); spend (verb); years (noun); learning (gerund/present participle); difficult (adjective); pieces (noun).",
    "note": ""
  },
  {
    "sentence": "They practice every day to improve their skills and perform beautiful concerts.",
    "structure": "S + V + to + V",
    "grammar": "Dùng to-infinitive để nói mục đích.",
    "translation": "Họ luyện tập mỗi ngày để cải thiện kỹ năng và biểu diễn những buổi hòa nhạc hay.",
    "function": "They (chủ ngữ); practice (động từ); every day (trạng ngữ); to improve their skills and perform beautiful concerts (cụm mục đích).",
    "pos": "They (pronoun); practice (noun); every (determiner); day (noun); to (preposition); improve (verb); their (pronoun); skills (noun); and (conjunction); perform (verb); beautiful (adjective); concerts (noun).",
    "note": ""
  },
  {
    "sentence": "More music festivals will be held in different countries next year.",
    "structure": "S + will be + V3",
    "grammar": "Dùng tương lai bị động để nói sự kiện sẽ được tổ chức.",
    "translation": "Nhiều lễ hội âm nhạc hơn sẽ được tổ chức ở các quốc gia khác nhau vào năm tới.",
    "function": "More music festivals (chủ ngữ); will be held (tương lai bị động); in different countries (cụm nơi chốn); next year (trạng ngữ thời gian).",
    "pos": "More (determiner); music (noun); festivals (noun); will (modal verb); be (linking/auxiliary verb); held (verb); in (preposition); different (determiner); countries (noun); next (adjective); year (noun).",
    "note": ""
  },
  {
    "sentence": "These festivals help people share culture, build friendships, and create unforgettable memories through music and celebration.",
    "structure": "S + help + O + V",
    "grammar": "Dùng help + tân ngữ + động từ nguyên mẫu để nói tác dụng.",
    "translation": "Những lễ hội này giúp con người chia sẻ văn hóa, xây dựng tình bạn và tạo ra những kỷ niệm khó quên qua âm nhạc và lễ hội.",
    "function": "These festivals (chủ ngữ); help (động từ); people (tân ngữ); share culture, build friendships, and create unforgettable memories (các động từ nguyên mẫu song song); through music and celebration (cụm chỉ phương tiện).",
    "pos": "These (pronoun); festivals (noun); help (verb); people (pronoun); share (verb); culture (noun); build (verb); friendships (noun); and (conjunction); create (verb); unforgettable (adjective); memories (noun); through (preposition); music (noun); and (conjunction); celebration (noun).",
    "note": ""
  }
];
