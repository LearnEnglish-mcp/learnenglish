// ===== festival03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "It usually takes place in the seventh month of the Cham calendar.",
    "structure": "S + adverb + V + time phrase",
    "grammar": "Trạng từ tần suất với hiện tại đơn.",
    "translation": "Lễ hội thường diễn ra vào tháng bảy theo lịch Chăm.",
    "function": "It (chủ ngữ); usually (trạng từ); takes place (cụm động từ); in the seventh month of the Cham calendar (trạng ngữ thời gian).",
    "pos": "It (pronoun); usually (adverb); takes (verb); place (noun); in (preposition); the (article); seventh (adjective); month (noun); of (preposition); the (article); Cham (proper noun); calendar (noun).",
    "note": ""
  },
  {
    "sentence": "People visit ancient towers to honor gods, heroes, and ancestors.",
    "structure": "S + V + O + to-infinitive of purpose",
    "grammar": "To-infinitive chỉ mục đích.",
    "translation": "Mọi người đến các tháp cổ để tôn vinh các vị thần, anh hùng và tổ tiên.",
    "function": "People (chủ ngữ); visit (động từ); ancient towers (tân ngữ); to honor gods, heroes, and ancestors (cụm chỉ mục đích).",
    "pos": "People (noun); visit (verb); ancient (adjective); towers (noun); to (preposition); honor (verb); gods (noun); heroes (noun); and (conjunction); ancestors (noun).",
    "note": ""
  },
  {
    "sentence": "Religious leaders perform special ceremonies, open the tower doors, and dress sacred statues in traditional clothes.",
    "structure": "S + three coordinated verb phrases",
    "grammar": "Ba cụm động từ song song nối bằng dấu phẩy và and.",
    "translation": "Các chức sắc tôn giáo thực hiện những nghi lễ đặc biệt, mở cửa tháp và mặc trang phục truyền thống cho các tượng thiêng.",
    "function": "Religious leaders (chủ ngữ); perform special ceremonies (vị ngữ thứ nhất); open the tower doors (vị ngữ thứ hai); and dress sacred statues in traditional clothes (vị ngữ thứ ba).",
    "pos": "Religious (adjective); leaders (noun); perform (verb); special (adjective); ceremonies (noun); open (noun); the (article); tower (noun); doors (noun); and (conjunction); dress (noun); sacred (adjective); statues (noun); in (preposition); traditional (adjective); clothes (noun).",
    "note": ""
  },
  {
    "sentence": "Visitors can also learn about Cham crafts and customs.",
    "structure": "S + modal + adverb + V + prepositional object",
    "grammar": "Can + động từ nguyên mẫu; also bổ sung ý.",
    "translation": "Du khách cũng có thể tìm hiểu về nghề thủ công và phong tục của người Chăm.",
    "function": "Visitors (chủ ngữ); can also learn (cụm động từ); about Cham crafts and customs (cụm giới từ làm bổ ngữ).",
    "pos": "Visitors (noun); can (modal verb); also (adverb); learn (verb); about (preposition); Cham (proper noun); crafts (noun); and (conjunction); customs (noun).",
    "note": ""
  },
  {
    "sentence": "It is organized by Khmer people during the Sene Dolta holiday, usually in the rainy season.",
    "structure": "S + passive verb + agent + time phrases",
    "grammar": "Câu bị động với by; trạng ngữ thời gian.",
    "translation": "Lễ hội do người Khmer tổ chức trong dịp lễ Sene Dolta, thường vào mùa mưa.",
    "function": "It (chủ ngữ); is organized (cụm động từ bị động); by Khmer people (tác nhân); during the Sene Dolta holiday (thời gian); usually in the rainy season (trạng ngữ bổ sung).",
    "pos": "It (pronoun); is (auxiliary verb); organized (verb); by (preposition); Khmer (proper noun); people (noun); during (preposition); the (article); Sene (proper noun); Dolta (proper noun); holiday (noun); usually (adverb); in (preposition); the (article); rainy (adjective); season (noun).",
    "note": ""
  },
  {
    "sentence": "Each driver stands on a small wooden board and controls the animals carefully.",
    "structure": "S + coordinated verbs + adverb",
    "grammar": "Each + danh từ số ít; hai động từ song song.",
    "translation": "Mỗi người điều khiển đứng trên một tấm ván gỗ nhỏ và điều khiển các con vật cẩn thận.",
    "function": "Each driver (chủ ngữ); stands on a small wooden board (vị ngữ thứ nhất); and controls the animals carefully (vị ngữ thứ hai).",
    "pos": "Each (determiner); driver (noun); stands (verb); on (preposition); a (article); small (adjective); wooden (adjective); board (noun); and (conjunction); controls (verb); the (article); animals (noun); carefully (adverb).",
    "note": ""
  },
  {
    "sentence": "It honors the whale, which fishermen believe protects people during dangerous journeys at sea.",
    "structure": "S + V + O + non-defining relative clause",
    "grammar": "Mệnh đề quan hệ không xác định với which.",
    "translation": "Lễ hội tôn vinh cá voi, loài vật mà ngư dân tin rằng bảo vệ con người trong những chuyến đi nguy hiểm trên biển.",
    "function": "It (chủ ngữ); honors (động từ); the whale (tân ngữ); which fishermen believe protects people during dangerous journeys at sea (mệnh đề quan hệ).",
    "pos": "It (pronoun); honors (verb); the (article); whale (noun); which (pronoun); fishermen (noun); believe (verb); protects (verb); people (noun); during (preposition); dangerous (adjective); journeys (noun); at (preposition); sea (noun).",
    "note": ""
  },
  {
    "sentence": "Fishing boats are decorated with flags, flowers, and bright colors.",
    "structure": "S + passive verb + with phrase",
    "grammar": "Câu bị động hiện tại đơn với with.",
    "translation": "Thuyền đánh cá được trang trí bằng cờ, hoa và màu sắc rực rỡ.",
    "function": "Fishing boats (chủ ngữ); are decorated (cụm động từ bị động); with flags, flowers, and bright colors (cụm giới từ chỉ vật trang trí).",
    "pos": "Fishing (noun); boats (noun); are (auxiliary verb); decorated (verb); with (preposition); flags (noun); flowers (noun); and (conjunction); bright (adjective); colors (noun).",
    "note": ""
  },
  {
    "sentence": "The festival shows gratitude to nature and strengthens community relationships.",
    "structure": "S + coordinated verbs + objects",
    "grammar": "Hai động từ hiện tại đơn song song.",
    "translation": "Lễ hội thể hiện lòng biết ơn đối với thiên nhiên và củng cố các mối quan hệ cộng đồng.",
    "function": "The festival (chủ ngữ); shows gratitude to nature (vị ngữ thứ nhất); and strengthens community relationships (vị ngữ thứ hai).",
    "pos": "The (article); festival (adjective); shows (verb); gratitude (noun); to (preposition); nature (noun); and (conjunction); strengthens (verb); community (noun); relationships (noun).",
    "note": ""
  },
  {
    "sentence": "It also brings people together and shows the natural beauty, friendly spirit, and cultural diversity of Dien Bien to visitors from many places.",
    "structure": "S + adverb + coordinated verbs + objects",
    "grammar": "Also bổ sung ý; hai vị ngữ song song nối bằng and.",
    "translation": "Lễ hội cũng gắn kết mọi người và giới thiệu vẻ đẹp thiên nhiên, tinh thần thân thiện và sự đa dạng văn hóa của Điện Biên đến du khách từ nhiều nơi.",
    "function": "It (chủ ngữ); also (trạng từ); brings people together (vị ngữ thứ nhất); and shows the natural beauty, friendly spirit, and cultural diversity of Dien Bien (vị ngữ thứ hai); to visitors from many places (cụm giới từ).",
    "pos": "It (pronoun); also (adverb); brings (verb); people (noun); together (adverb); and (conjunction); shows (verb); the (article); natural (adjective); beauty (noun); friendly (adverb); spirit (noun); and (conjunction); cultural (adjective); diversity (noun); of (preposition); Dien (proper noun); Bien (proper noun); to (preposition); visitors (noun); from (preposition); many (determiner); places (verb).",
    "note": ""
  }
];
