const newAnalysisData = [
  {
    "sentence": "The coffee is made with dark roasted beans and a small metal filter.",
    "structure": "S + be + made with/from + noun",
    "grammar": "Dùng bị động để mô tả thành phần hoặc cách pha chế.",
    "translation": "Cà phê được pha bằng hạt rang đậm và một phin kim loại nhỏ.",
    "function": "The coffee (chủ ngữ); is made (bị động); with dark roasted beans and a small metal filter (cụm chỉ nguyên liệu/dụng cụ).",
    "pos": "The (article); coffee (noun); is (linking/auxiliary verb); made (verb); with (preposition); dark (adjective); roasted (past participle/verb); beans (noun); and (conjunction); a (article); small (adjective); metal (adjective); filter (noun).",
    "note": ""
  },
  {
    "sentence": "Hot water slowly passes through the coffee into a glass.",
    "structure": "S + adverb + V + complement",
    "grammar": "Dùng trạng từ để mô tả cách hành động diễn ra.",
    "translation": "Nước nóng từ từ chảy qua cà phê vào ly.",
    "function": "Hot water (chủ ngữ); slowly (trạng từ); passes through the coffee (vị ngữ); into a glass (cụm hướng).",
    "pos": "Hot (adjective); water (noun); slowly (adverb); passes (verb); through (preposition); the (article); coffee (noun); into (preposition); a (article); glass (noun).",
    "note": ""
  },
  {
    "sentence": "I enjoy Vietnamese iced coffee in the morning because it helps me feel awake.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để nêu nguyên nhân.",
    "translation": "Tôi thích cà phê đá Việt Nam vào buổi sáng vì nó giúp tôi tỉnh táo.",
    "function": "I (chủ ngữ); enjoy Vietnamese iced coffee (vị ngữ); in the morning (trạng ngữ); because it helps me feel awake (mệnh đề nguyên nhân).",
    "pos": "I (pronoun); enjoy (verb); Vietnamese (adjective); iced (past participle/verb); coffee (noun); in (preposition); the (article); morning (gerund/present participle); because (conjunction); it (pronoun); helps (verb); me (noun); feel (verb); awake (adjective).",
    "note": ""
  },
  {
    "sentence": "However, I do not drink it late at night because caffeine may make sleeping difficult.",
    "structure": "S + may + make + O + adjective",
    "grammar": "Dùng may và make + tân ngữ + tính từ để nói khả năng gây ra kết quả.",
    "translation": "Tuy nhiên, tôi không uống muộn vào ban đêm vì caffeine có thể khiến việc ngủ trở nên khó khăn.",
    "function": "However (trạng từ liên kết); I do not drink it late at night (mệnh đề chính); because caffeine may make sleeping difficult (mệnh đề nguyên nhân).",
    "pos": "However (adverb); I (pronoun); do (verb/auxiliary); not (adverb); drink (verb); it (pronoun); late (adjective); at (preposition); night (noun); because (conjunction); caffeine (noun); may (modal verb); make (verb); sleeping (gerund/present participle); difficult (adjective).",
    "note": ""
  },
  {
    "sentence": "Kumquat tea, also called trà tắc, is a popular drink in Vietnam.",
    "structure": "Noun, also called + name, + be + ...",
    "grammar": "Dùng also called để giới thiệu tên gọi khác.",
    "translation": "Trà tắc, còn gọi là trà tắc, là một thức uống phổ biến ở Việt Nam.",
    "function": "Kumquat tea (chủ ngữ); also called trà tắc (cụm đồng vị/tên gọi khác); is a popular drink (vị ngữ); in Vietnam (cụm nơi chốn).",
    "pos": "Kumquat (noun); tea (noun); also (adverb); called (past participle/verb); tr (noun); t (noun); c (verb); is (linking/auxiliary verb); a (article); popular (adjective); drink (verb); in (preposition); Vietnam (proper noun).",
    "note": ""
  },
  {
    "sentence": "Kumquat tea is sold at cafés, street stalls, and school areas.",
    "structure": "S + be + V3 + place",
    "grammar": "Dùng bị động để nói nơi sản phẩm được bán.",
    "translation": "Trà tắc được bán ở quán cà phê, quầy hàng đường phố và khu vực trường học.",
    "function": "Kumquat tea (chủ ngữ); is sold (bị động); at cafés, street stalls, and school areas (cụm chỉ nơi bán).",
    "pos": "Kumquat (noun); tea (noun); is (linking/auxiliary verb); sold (noun); at (preposition); caf (noun); s (noun); street (noun); stalls (noun); and (conjunction); school (noun); areas (noun).",
    "note": ""
  },
  {
    "sentence": "Young people often drink it while studying, chatting, or meeting friends.",
    "structure": "S + V + while + V-ing",
    "grammar": "Dùng while + V-ing để nói các hoạt động diễn ra đồng thời.",
    "translation": "Người trẻ thường uống nó khi học, trò chuyện hoặc gặp bạn bè.",
    "function": "Young people (chủ ngữ); often drink it (vị ngữ); while studying, chatting, or meeting friends (cụm hoạt động đồng thời).",
    "pos": "Young (adjective); people (noun); often (adverb); drink (verb); it (pronoun); while (conjunction); studying (gerund/present participle); chatting (gerund/present participle); or (conjunction); meeting (gerund/present participle); friends (noun).",
    "note": ""
  },
  {
    "sentence": "I usually ask for less sugar because too much sugar can hide the natural taste of the fruit.",
    "structure": "Too much + noun + can + V",
    "grammar": "Dùng too much với danh từ không đếm được để nói lượng quá nhiều.",
    "translation": "Tôi thường yêu cầu ít đường hơn vì quá nhiều đường có thể che mất vị tự nhiên của trái cây.",
    "function": "I (chủ ngữ); usually ask for less sugar (mệnh đề chính); because too much sugar can hide the natural taste of the fruit (mệnh đề nguyên nhân).",
    "pos": "I (pronoun); usually (adverb); ask (verb); for (preposition); less (determiner/adverb); sugar (noun); because (conjunction); too (adverb); much (determiner/adverb); sugar (noun); can (modal verb); hide (verb); the (article); natural (adjective); taste (noun); of (noun); the (article); fruit (noun).",
    "note": ""
  },
  {
    "sentence": "It can be made from oranges, watermelons, pineapples, guavas, or carrots.",
    "structure": "S + can be + V3 + from + noun",
    "grammar": "Dùng modal can ở dạng bị động để nói nguyên liệu có thể dùng.",
    "translation": "Nó có thể được làm từ cam, dưa hấu, dứa, ổi hoặc cà rốt.",
    "function": "It (chủ ngữ); can be made (modal bị động); from oranges, watermelons, pineapples, guavas, or carrots (cụm nguyên liệu).",
    "pos": "It (pronoun); can (modal verb); be (linking/auxiliary verb); made (verb); from (preposition); oranges (noun); watermelons (noun); pineapples (noun); guavas (noun); or (conjunction); carrots (noun).",
    "note": ""
  },
  {
    "sentence": "Drinking fruit juice can be good, but eating whole fruit is also important because it contains more fiber.",
    "structure": "S + V + more + noun",
    "grammar": "Dùng more để so sánh lượng.",
    "translation": "Uống nước ép trái cây có thể tốt, nhưng ăn trái cây nguyên quả cũng quan trọng vì nó chứa nhiều chất xơ hơn.",
    "function": "Drinking fruit juice (cụm V-ing làm chủ ngữ); can be good (vị ngữ); but eating whole fruit is also important (mệnh đề tương phản); because it contains more fiber (mệnh đề nguyên nhân).",
    "pos": "Drinking (gerund/present participle); fruit (noun); juice (noun); can (modal verb); be (linking/auxiliary verb); good (adjective); but (conjunction); eating (gerund/present participle); whole (determiner); fruit (noun); is (linking/auxiliary verb); also (adverb); important (adjective); because (conjunction); it (pronoun); contains (verb); more (determiner/adverb); fiber (noun).",
    "note": ""
  }
];
