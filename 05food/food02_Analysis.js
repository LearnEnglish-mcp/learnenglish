// ===== food02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "There are many colorful food stalls selling different kinds of meals, snacks, drinks, and desserts.",
    "structure": "There are + plural noun + ...",
    "grammar": "Dùng there are để nói có nhiều người hoặc vật ở một nơi.",
    "translation": "Có nhiều quầy đồ ăn đầy màu sắc bán nhiều loại bữa ăn, đồ ăn nhẹ, đồ uống và món tráng miệng.",
    "function": "There (chủ ngữ giả); are (động từ); many colorful food stalls (cụm danh từ); selling different kinds of meals, snacks, drinks, and desserts (cụm V-ing bổ nghĩa cho stalls).",
    "pos": "There (adverb); are (linking verb); many (determiner); colorful (adjective); food (noun); stalls (noun); selling (gerund); different (adjective); kinds (noun); of (preposition); meals (noun); snacks (noun); drinks (noun); and (conjunction); desserts (noun).",
    "note": ""
  },
  {
    "sentence": "The market becomes very busy in the evening.",
    "structure": "S + become(s) + adjective",
    "grammar": "Dùng become để nói một người hoặc vật trở nên thế nào.",
    "translation": "Khu chợ trở nên rất đông vào buổi tối.",
    "function": "The market (chủ ngữ); becomes (động từ liên kết); very busy (bổ ngữ tính từ); in the evening (trạng ngữ thời gian).",
    "pos": "The (article); market (noun); becomes (verb); very (adverb); busy (adjective); in (preposition); the (article); evening (noun).",
    "note": ""
  },
  {
    "sentence": "Families, tourists, and friends enjoy eating together while listening to music.",
    "structure": "S + V + while + V-ing",
    "grammar": "Dùng while + V-ing để diễn tả hai hoạt động xảy ra cùng lúc.",
    "translation": "Các gia đình, khách du lịch và bạn bè thích ăn cùng nhau trong khi nghe nhạc.",
    "function": "Families, tourists, and friends (chủ ngữ ghép); enjoy eating together (vị ngữ); while listening to music (cụm V-ing chỉ hoạt động đồng thời).",
    "pos": "Families (noun); tourists (noun); and (conjunction); friends (noun); enjoy (verb); eating (gerund); together (adverb); while (conjunction); listening (gerund); to (preposition); music (noun).",
    "note": ""
  },
  {
    "sentence": "Some people take photos because the food looks beautiful and interesting.",
    "structure": "S + V + because + S + V",
    "grammar": "Dùng because để nêu lý do.",
    "translation": "Một số người chụp ảnh vì thức ăn trông đẹp và thú vị.",
    "function": "Some people (chủ ngữ); take photos (vị ngữ); because (liên từ); the food looks beautiful and interesting (mệnh đề chỉ lý do).",
    "pos": "Some (determiner); people (noun); take (verb); photos (noun); because (conjunction); the (article); food (noun); looks (verb); beautiful (adjective); and (conjunction); interesting (adjective).",
    "note": ""
  },
  {
    "sentence": "Healthy street food is usually made with fresh ingredients.",
    "structure": "S + be + past participle + ...",
    "grammar": "Dùng câu bị động khi muốn nhấn mạnh đối tượng chịu tác động.",
    "translation": "Đồ ăn đường phố lành mạnh thường được làm từ nguyên liệu tươi.",
    "function": "Healthy street food (chủ ngữ); is usually made (cụm động từ bị động); with fresh ingredients (cụm giới từ chỉ nguyên liệu).",
    "pos": "Healthy (adjective); street (noun); food (noun); is (linking verb); usually (adverb); made (verb); with (preposition); fresh (adjective); ingredients (noun).",
    "note": ""
  },
  {
    "sentence": "Customers should choose stalls that look tidy and follow good hygiene practices.",
    "structure": "S + should + V",
    "grammar": "Dùng should để đưa ra lời khuyên.",
    "translation": "Khách hàng nên chọn những quầy trông gọn gàng và tuân theo các thực hành vệ sinh tốt.",
    "function": "Customers (chủ ngữ); should choose (cụm động từ); stalls (tân ngữ); that look tidy and follow good hygiene practices (mệnh đề quan hệ bổ nghĩa cho stalls).",
    "pos": "Customers (noun); should (modal verb); choose (verb); stalls (noun); that (relative pronoun); look (verb); tidy (adjective); and (conjunction); follow (verb); good (adjective); hygiene (noun); practices (noun).",
    "note": ""
  },
  {
    "sentence": "Eating healthy street food helps people stay strong and active.",
    "structure": "S + help(s) + O + V",
    "grammar": "Dùng help với tân ngữ và động từ nguyên mẫu để nói giúp ai làm gì.",
    "translation": "Ăn đồ ăn đường phố lành mạnh giúp mọi người khỏe mạnh và năng động.",
    "function": "Eating healthy street food (cụm V-ing làm chủ ngữ); helps (động từ chính); people (tân ngữ); stay strong and active (bổ ngữ động từ nguyên mẫu).",
    "pos": "Eating (gerund); healthy (adjective); street (noun); food (noun); helps (verb); people (noun); stay (verb); strong (adjective); and (conjunction); active (adjective).",
    "note": ""
  },
  {
    "sentence": "Each place has special dishes with unique flavors and cooking styles.",
    "structure": "Each + singular noun + V(s/es)",
    "grammar": "Dùng each với danh từ số ít và động từ số ít.",
    "translation": "Mỗi nơi có những món đặc biệt với hương vị và phong cách nấu ăn độc đáo.",
    "function": "Each place (chủ ngữ); has (động từ chính); special dishes (tân ngữ); with unique flavors and cooking styles (cụm giới từ bổ nghĩa).",
    "pos": "Each (determiner); place (noun); has (verb); special (adjective); dishes (noun); with (preposition); unique (adjective); flavors (noun); and (conjunction); cooking (gerund); styles (noun).",
    "note": ""
  },
  {
    "sentence": "Some countries are famous for noodles, while others are known for tacos, kebabs, dumplings, or grilled seafood.",
    "structure": "S + be known for + noun",
    "grammar": "Dùng be known for để nói một nơi được biết đến vì điều gì.",
    "translation": "Một số quốc gia nổi tiếng với mì, trong khi những nơi khác được biết đến với taco, kebab, bánh há cảo hoặc hải sản nướng.",
    "function": "Some countries (chủ ngữ); are famous for noodles (mệnh đề thứ nhất); while (liên từ); others are known for tacos, kebabs, dumplings, or grilled seafood (mệnh đề đối chiếu).",
    "pos": "Some (determiner); countries (noun); are (linking verb); famous (adjective); for (preposition); noodles (noun); while (conjunction); others (pronoun); are (linking verb); known (adjective); for (preposition); tacos (noun); kebabs (noun); dumplings (noun); or (conjunction); grilled (adjective); seafood (noun).",
    "note": ""
  },
  {
    "sentence": "Visitors often try street food to learn about local culture.",
    "structure": "S + V + to + V",
    "grammar": "Dùng to + động từ nguyên mẫu để nêu mục đích.",
    "translation": "Du khách thường thử đồ ăn đường phố để tìm hiểu về văn hóa địa phương.",
    "function": "Visitors (chủ ngữ); often try (động từ chính kèm trạng từ tần suất); street food (tân ngữ); to learn about local culture (cụm to-infinitive chỉ mục đích).",
    "pos": "Visitors (noun); often (adverb); try (verb); street (noun); food (noun); to (preposition); learn (verb); about (preposition); local (adjective); culture (noun).",
    "note": ""
  }
];
